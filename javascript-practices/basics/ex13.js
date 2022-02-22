/**
 * string primitive type과 String 객체 메소드(String.prototype.*)
 * 
 */

//배열처럼 접근이 가능하다.
var str1 = 'hello world';
for(var i = 0; i < str1.length ; i++){
    console.log(str1[i]);
}

//문자열 합치기
var str2 = 'hello';
var str3 = 'world';
var str4 = str2+" "+str3;
//String str4 = new StringBuffer(str2).append(" ").append(str3).toString();
console.log(str4);

""
//캐스팅
var str5 = 5+"5";
console.log(str5);

var str6 = "boolean : "+true;
console.log(str6);

//메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2')
console.log(index);

var index = str7.indexOf('string4')
console.log(index);//찾지못하면

var str8 = str7.substring(10, 13/*lastindex-1*/);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a = str11.split(":");
console.log(a);

s = "hello";
s.substring(); //new String(s).substring()
