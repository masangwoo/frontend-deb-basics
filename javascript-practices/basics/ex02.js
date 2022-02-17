/*
변수와 데이터 타입
[기본 타입 (primitive, 원시)]
 - undefined
 - number
 - string
 - boolean
[객체1] - object type
    1. new 생성자 함수()  사용해서 생성
    2. 
[객체2] - function type


 */
console.log("=======[기본 타입 (primitive, 원시)]=======");
var u;                  //var u, 동일, 선언과 정의의 구분이 없다.
var i = 10;
var s = "hello world";
var b = true;

console.log("u: " + typeof(u));
console.log("i: " + typeof(i));
console.log("s: " + typeof(s));
console.log("b: " + typeof(b));

console.log("=======[객체1 - object type]=======");
var i2 = new Number(1);
var s2 = new String("Hello World!");
var b2 = new String(false);

console.log("i2: " + typeof(i2));
console.log("s2: " + typeof(s2));
console.log("b2: " + typeof(b2));