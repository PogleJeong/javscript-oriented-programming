class Person {
    constructor(name, first, second) { // 객체생성과정시 자동 호출되는 부분(생성자)
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() { // Person.prototype.sum 과 같은 기능
        return this.first + this.second;
    }
}

// 특정객체만 수정
var kim = new Person("kim", 10, 20);
kim.sum = function() {
    return this.first + this.second;
}

var kim = new Person();