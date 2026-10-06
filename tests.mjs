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

import {questions12,topics12} from './questions12.js';
const twelve=id=>questions12.find(q=>q.id===id);
test('lớp 12: đủ 37 câu, khớp đáp án nguồn và dữ kiện đúng–sai',()=>{
 const key='A C B D C A D B C A C B D A C B D A B C'.split(' ');
 assert.equal(questions12.length,37);
 key.forEach((k,i)=>assert.equal(twelve(`12q${String(i+1).padStart(2,'0')}`).answer,k.charCodeAt(0)-65));
 assert.deepEqual(questions12.filter(q=>q.type==='boolean').map(q=>q.answer),[0,0,0,1,0,0,1,0,0,0,0,1]);
 for(const q of questions12){assert.ok(topics12[q.topic]);for(const field of ['prompt','source','hint','explanation'])assert.ok(q[field]);if(q.type==='boolean')assert.ok(q.context.length>100);assert.ok(isCorrect(q,q.type==='number'?String(q.answer):q.answer));if(q.type!=='number')q.options.forEach((_,i)=>assert.equal(isCorrect(q,i),i===q.answer));}
 assert.equal(new Set([...questions,...questions10,...questions12].map(q=>q.id)).size,109);
});
test('lớp 12: tính lại độc lập nhiệt học và làm tròn',()=>{
 const temp=(928*20+38*100)/(928+38);
 assert.equal(Number(temp.toFixed(2)),23.15);assert.equal(Number((38*(100-temp)/1000).toFixed(2)),2.92);
 assert.equal(20/(2e-4),1e5);assert.equal(4-20*.05,3);
 assert.equal(Number((40*300/.036).toPrecision(3)),333000);
 const results=[100*(69-4)/(104-4),.2*9.81*(15-10),.5*4200*(80-20)/1400,240-90,(.3*4200*30-.02*336000)/(.32*4200)];
 [0,2,0,0,1].forEach((dp,i)=>assert.equal(Number(results[i].toFixed(dp)),twelve(`12n${i+1}`).answer));
 assert.ok(isCorrect(twelve('12n2'),'9,81'));assert.ok(!isCorrect(twelve('12n5'),'23,125'));assert.ok(!isCorrect(twelve('12n4'),'-150'));
});

import {references10,referenceTopics10,essays10} from './references10.js';
test('hai đề tham khảo: đủ bốn phần và đáp án lý thuyết đã duyệt',()=>{
 assert.equal(references10.length,48);
 for(const topic of Object.keys(referenceTopics10)){
 const qs=references10.filter(q=>q.topic===topic);
 assert.deepEqual(['I','II','III','IV'].map(s=>qs.filter(q=>q.section===s).length),[12,8,4,0]);
 assert.deepEqual(qs.filter(q=>q.type==='boolean').map(q=>q.answer),[0,1,1,0,0,0,1,0]);
 for(const q of qs){assert.ok(q.prompt&&q.explanation&&q.source&&q.hint);assert.ok(isCorrect(q,q.type==='number'?String(q.answer):q.answer));if(q.options){assert.equal(new Set(q.options).size,q.options.length);q.options.forEach((_,i)=>assert.equal(isCorrect(q,i),i===q.answer));}if(q.section==='II'||q.section==='IV')assert.ok(q.context);}
 }
 assert.equal(new Set([...questions,...questions10,...questions12,...references10].map(q=>q.id)).size,157);
});
test('đề tham khảo: tính độc lập kết quả mới, đồ thị âm, ca nô',()=>{
 const by=id=>references10.find(q=>q.id===id);
 const values1=[125/100*3.6,(10-50)/(50-30),Number(Math.hypot(9,9).toFixed(1)),1.4+.9];
 const values2=[150/100*3.6,(60-20)/(20-10),Number(Math.hypot(7,7).toFixed(1)),1.8+.9];
 for(const [i,values]of [[1,values1],[2,values2]])['n1','n2','n3','n4'].forEach((suffix,k)=>assert.ok(Math.abs(by(`10r${i}${suffix}`).answer-values[k])<1e-10));
 assert.ok(isCorrect(by('10r1n2'),'-2'));assert.ok(!isCorrect(by('10r1n2'),'2'));
 assert.equal(2*12/(.4+.2),39.99999999999999);assert.equal(2*15/(.5+.25),40);
 for(const q of references10.filter(q=>q.graph)){const html=graph10(q.graph);assert.match(html,/<svg/);assert.ok(!html.includes('Câu 4'));assert.ok(!html.includes('1101'));}
});

test("tự luận chỉ tham khảo và không nằm trong ngân hàng chấm",()=>{assert.equal(references10.filter(q=>q.section==='IV').length,0);assert.equal(essays10.ref01.length,2);assert.equal(essays10.ref02.length,2);assert.match(essays10.ref01[0].solution,/1100 m/);assert.match(essays10.ref02[0].solution,/1,8 km/);assert.match(essays10.ref01[1].solution,/40 s/);assert.match(essays10.ref02[1].solution,/50 s/);});
