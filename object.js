var memberArray = ["pogle", "graphittie", "leezhce"];

// 객체는 이름이 있는 데이터를 정리하고자 할때 주로 쓰인다.
var memberObject = {
    manager: "pogle",
    developer: "graphittie",
    designer: "leezhce",
}

// 수정
memberObject.designer = "leezche";
console.log(memberObject);
// 삭제
delete memberObject.manager;
console.log(memberObject);