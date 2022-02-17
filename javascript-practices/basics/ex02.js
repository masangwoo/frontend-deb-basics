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
    1. function f(){..}
    2. function

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
var b2 = new Boolean(false);
var o = new Object();
var a = new Array();

var o2={};
var a2 = [];

var n = null;

console.log("i2: " + typeof(i2));
console.log("s2: " + typeof(s2));
console.log("b2: " + typeof(b2));
console.log("o: " + typeof(o));
console.log("a: " + typeof(a));
console.log("o2: " + typeof(o2));
console.log("a2: " + typeof(a2));
console.log("n: " + typeof(n));

var f = function(){

}

var o = new f();
console.log("o: " + typeof(o));
console.log("f: " + typeof(f));

console.log("=======[객체2 - function type]=======");
function f1(a,b){
    return a+b;
}

var f2 = function(a,b){
    return a+b;
}

var f3 = new Function("a", "b", "return a+b");

console.log("f1: " + typeof(f1));
console.log("f2: " + typeof(f2));
console.log("f3: " + typeof(f3));

console.log("=======[원시타입과 원시타입의 wrapper객체는 구분없이 사용할 수 있다]=======");
console.log(i+i2);
console.log(s+s2);

//원시타입에 method가 호출될 때,
//임시 Wrapper 객체가 만들어져 메소드호출이 일어난 뒤 사라진다.(유사객체!)
console.log("=======[원시타입도 메서드 호출이 가능하다.]=======");
console.log(b.valueOf());
console.log(b2.valueOf());