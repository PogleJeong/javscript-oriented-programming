/*
    call fucntion : 실행되는 함수의 this 값을 원하는 객체의 속성으로 바꿔서 실행할 수 있게 함
    bind function : 실행되는 함수의 this 값을 원하는 객체로 고정시키는 새로운 함수를 만듦
*/

var kim = {
    name: "kim",
    first: 10,
    second: 20,
}
var lee = {
    name: "lee",
    first: 10,
    second: 20,
}

// function 이 객체밖에 선언되어잇다면?
function sum() {
    return this.first + this.second;
}

function sumPlus(prefix) {
    return prefix + this.first + this.second;
}

// sum() 과 같은 역할을 하며, 모든 js 함수는 객체이기 때문에 call method 가 존재
// 첫번쨰 인자로 this 로 받을 객체를, 두번쨰인자부턴 매개변수가 반영된다.
console.log("sum.call(kim) >>", sum.call(kim));
console.log("sum.call(lee) >>", sum.call(lee));

console.log("sum.call(kim, 1) >>", sumPlus.call(kim, 1));
console.log("sum.call(lee, 2) >>", sumPlus.call(lee, 2));

// bind => 기존의 함수와 인자(매개변수)를 통해 새로운 함수로 엮는(bind) 함수
var kimSum = sumPlus.bind(kim, 100);
console.log("kimSum() >>", kimSum());