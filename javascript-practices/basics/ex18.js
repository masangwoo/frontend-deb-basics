/**
 * URL 다루기
 */

var url1 = "http://www.mysite.com/user?name=둘리&no=10"

//1. escape: URL 전부 encoding, 사용 x, deprecate
var url2 = escape(url1);
console.log(url2);

//2. encodeURI : parameter만 encoding, 사용(O)
var url3 = encodeURI(url1);
console.log(url3);

//3. encodeURIComponent : 값만 엔코딩 해야하는 경우. 사용(O)
var url4 = encodeURIComponent(url1);//잘못사용한 경우
console.log(url4);

//4.
//만들어야 할 URL
//http://www.mysite.com/user?name=둘리&no=10&email=dooly@gamail.com

var params={
    name:"둘리",
    email : "dooly@gmail.com",
    no:10
};


/*
jQuery = function(){}
$ = jQuery


jQuery.ajax
*/

var toQueryString = function(){
    var qs="";
    
    for(prop in o){
        qs +=( prop + "=" + o[prop]+"&");
    }

    return qs;
}
var s = toQueryString(params);
console.log(s);

