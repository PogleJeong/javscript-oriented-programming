/*
   __proto__ : prototype link 를 연결해주는 역할을 한다.
   객체간 상속을 설정 (class 간 상속과는 다름)
   JS 의 공식적인 표준 문법은 아니지만, 아직 많은 브라우저에서 적용하고 있기에 사실상의 표준이다.
*/

var superObj = {
    superVal: "super",
}
var subObj = {
    subVal: "sub",
}

// subObj 에서는 없는, superObj 에 있는 속성가져오기.
subObj.__proto__ = superObj; // subObj 의 원형은 superObj 로 지정
console.log("subObj.superVal>> ",subObj.superVal);

// 만약 subObj 의 supserVal 을 수정한다면, 상속하는 superObj 에서 변화가 있는가?
subObj.superVal = "sub";
console.log("superObj.superVal>>",superObj.superVal);
// 결론 : 바뀌지 않는다. subObj 객체를 바꾸는 것일 뿐 subObj 의 proto 인 superObj 객체는 변하지 않기 때문



/*
   Object.create(): __proto__ 의 대체재로 사용되고 있음.
*/

var superObj2 = {
    superVal: "super",
}
var subObj2 = Object.create(superObj2);
subObj2.subVal = "sub";

console.log("subObj2.superVal>> ",subObj2.superVal);