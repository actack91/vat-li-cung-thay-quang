import test from 'node:test';
import assert from 'node:assert/strict';
import {questions,parseNumeric,isCorrect} from './questions.js';
const get=id=>questions.find(q=>q.id===id);
test('ngân hàng có mã duy nhất và nội dung đầy đủ',()=>{assert.equal(questions.length,40);assert.equal(new Set(questions.map(q=>q.id)).size,40);for(const q of questions){for(const k of ['id','topic','prompt','explanation','source','hint'])assert.ok(q[k],`${q.id}:${k}`);if(q.type==='number'){assert.ok(Number.isFinite(q.answer));assert.ok(q.unit);assert.ok(q.tolerance>=0);}else assert.ok(q.answer>=0&&q.answer<q.options.length);}});
test('nhập số: dấu phẩy, âm, số mũ; chặn trống, chữ, vô cực',()=>{assert.equal(parseNumeric(' 0,4 '),.4);assert.equal(parseNumeric('−2'),-2);assert.equal(parseNumeric('2e-1'),.2);for(const x of ['', ' ', '1,2,3','0.4 J','Infinity','1/2'])assert.ok(Number.isNaN(parseNumeric(x)));assert.ok(isCorrect(get('e02'),'0,4'));assert.ok(!isCorrect(get('e02'),'40'));assert.ok(!isCorrect(get('e02'),''));});
test('tính độc lập kết quả cơ năng, quãng đường',()=>{assert.equal(get('e02').answer,+(.5*.2*20**2*.1**2).toFixed(5));assert.equal(get('e03').answer,+(.5*.1*20**2*.1**2).toFixed(5));assert.equal(get('b10').answer,4*(8/2));assert.equal(get('b11').answer,4*(4/2));});
test('đồ thị nhanh: đổi ms, cm chính xác',()=>{const T=.020,A=.02,omega=2*Math.PI/T;assert.equal(Math.round(omega*2),get('g08').answer);assert.equal(Math.round(omega**2*A),get('g09').answer);assert.equal(get('g06').answer,.8);assert.equal(get('g07').answer,1/.8);assert.ok(!isCorrect(get('g09'),'19.74'));});
test('đồ thị năng lượng và làm tròn chu kì',()=>{assert.equal(Math.sqrt(2*.032/(.1*.04**2)),get('e06').answer);assert.equal(Number((2*Math.PI/Math.sqrt(2*.120/(.1*.03**2))).toFixed(2)),get('e09').answer);assert.match(get('e07').options[get('e07').answer],/±2/);assert.match(get('e10').options[get('e10').answer],/±1,5√2/);assert.ok(isCorrect(get('g08'),'628'));assert.ok(!isCorrect(get('g08'),'628.32'));});
test('mọi đáp án đúng được chấm đúng; đáp án nhiễu bị loại',()=>{for(const q of questions){assert.ok(isCorrect(q,q.type==='number'?String(q.answer):q.answer),q.id);if(q.type!=='number')q.options.forEach((_,i)=>assert.equal(isCorrect(q,i),i===q.answer));}});

// Regression tests for grade 10; expected choices from answer sheet row 1101.
import {questions10,topics10} from './questions10.js';
import {graph10} from './graphics10.js';
const ten=id=>questions10.find(q=>q.id===id);
test('lớp 10: 25 đáp án đối chiếu mã 1101 và 7 câu bổ trợ',()=>{
 const key='A B B D C B A B C D C B B D C A B A C C C A D A A'.split(' ');
 assert.equal(questions10.length,32);assert.equal(new Set(questions10.map(q=>q.id)).size,32);
 key.forEach((letter,i)=>assert.equal(ten('10q'+String(i+1).padStart(2,'0')).answer,letter.charCodeAt(0)-65,'Câu '+(i+1)));
 for(const q of questions10){assert.ok(topics10[q.topic]);for(const k of ['prompt','explanation','source','hint'])assert.ok(q[k]);assert.ok(isCorrect(q,q.type==='number'?String(q.answer):q.answer));}
 for(const t of ['displacement','speed','graphs'])assert.ok(questions10.filter(q=>q.topic===t).length>=4);
});
test('lớp 10: tính độc lập quãng đường, dịch chuyển, vận tốc',()=>{
 assert.equal(Math.hypot(-6+3,-4),5);assert.equal(6+4+3,13);
 assert.equal(900+900+1500,3300);assert.equal(10/(25/60),24);
 assert.equal(1800/600,ten('10s01').answer);assert.equal(0/600,ten('10s02').answer);
 assert.equal(36/3.6,ten('10s03').answer);assert.equal((3-9)/2,ten('10s04').answer);
 const pts=ten('10q22').graph.points;
 const distance=pts.slice(1).reduce((sum,p,i)=>sum+Math.abs(p[1]-pts[i][1]),0);
 assert.equal(distance,14);assert.equal(pts.at(-1)[1]-pts[0][1],-2);
 assert.equal((pts[3][1]-pts[2][1])/(pts[3][0]-pts[2][0]),ten('10g02').answer);
 assert.equal(Number((distance/12).toFixed(2)),ten('10g03').answer);
 assert.equal((5-3)+(12-9),ten('10g01').answer);
});
test('lớp 10: hình cho mọi loại có SVG hoặc bảng và mô tả',()=>{for(const q of questions10.filter(q=>q.graph)){const html=graph10(q.graph);assert.match(html,/<svg/);assert.match(html,/Mô tả/);assert.ok(!html.includes('undefined'));assert.ok(!html.includes('NaN'));}});
test('mã câu hỏi hai lớp không trùng và lớp 11 giữ đủ 40 câu',()=>{assert.equal(questions.length,40);assert.equal(new Set([...questions,...questions10].map(q=>q.id)).size,72);});
