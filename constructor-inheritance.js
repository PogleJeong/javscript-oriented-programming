// class 를 통해 객체를 생성하는 것과 같은 기능이지만 class 가 나오기 이전에 사용했던 문법

function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function() {
    return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, third); // Person 의 this 를 PersonPlus 의 this 로 사용하기 위해
    this.third = third;
}

PersonPlus.prototype.avg = function() {
    return (this.first + this.second + this.third) / 3;
}

// PersonPlus 에 sum 함수 연결하기
// https://www.youtube.com/watch?v=ALRIptiFBu8&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=29

//PersonPlus.prototype.__proto__ = Person.prototype; 비표준
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;