/*var i
var i_1
var i_2
console.log(i);
for(i_1=0;i_1<5;i_1++){
  console.log(i_1);
}
console.log('==========================');
console.log(i);
for(i_2 = 10;i_2<15;i_2++){
  console.log(i_2);
}*/

/*console.log(i);
for(let i=0;i<5;i++){
  console.log(i);
}
console.log('==========================');
console.log(i);
for(let i = 10;i<15;i++){
  console.log(i);*/

var o1 = {name: 'Ball'}
var o2 = {name: 'Ball'}
var o3 = o1
console.log(o1==o2);
console.log(o1===o2);
console.log(o1===o3);
console.log(o1==o3);

var a = '1'
var b = 1
var c = true
console.log(a==b); // == , ===
console.log(typeof (a - b));
console.log(b + c);
