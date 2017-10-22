var a,b
console.log(a);
console.log(b);

// hoisting : เอา var ขึ้นไปอยู่ข้างบน
if (true) {
  b = 2
  a = 1
  console.log(b);
}
console.log(a);
console.log(b);

function a1(){
  var a = 5
  console.log(a);
  console.log(b);
  if (true) {
    var b = 2
    console.log(b);
  }
  console.log(b);
}
a1()
//console.log(a);
/*
object
function


function a1(fn) {
   var a = 5
   console.log(`a = ${a}`)
   console.log(typeofn)
   fn()
}
function b1(){
 var b = 1
 console.log(`b = ${b}`)
}
var o = new b1()
a1(o)*/
