var kim = k = {
    name: "kim",
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
}

//console.log("kim's score:", kim.sum(kim.first, kim.second));
console.log("kim's score:", kim.sum());

/*
    객체안의 메서드가 같은 객체안의 property를 호출할때 사용하며, 객체의 이름이 변화하여도
    원래의 로직을 유지할 수 있어서 코드의 재사용성에 도움을 준다.
*/