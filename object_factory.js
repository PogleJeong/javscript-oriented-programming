var kim = k = {
    name: "kim",
    first: 10,
    second: 20,
    third: 30,
    sum: function() {
        return this.first + this.second + this.third;
    }
}

var lee = {
    name: "lee",
    first: 10,
    second: 10,
    third: 10,
    sum: function() {
        return this.first + this.second + this.third;
    }
}

/* 
    일일히 객체를 생성하지 않고, 정해진 템플릿을 가진 객체를 쉽게 찍어낼 수 있는 팩토리
    
    동일한 구조를 가진 객체를 생성자와 new 키워드를 사용하여, 같은 구조의 다양한 객체들을 구성할 수 있는 함수
    
    따라서 생성자를 사용하면 코드가 간결해지고 재사용성이 높아진다.

    = contructor (생성자)
*/
function Person() {
    this.name = "";
    this.first = 0;
    this.first = 0;
    this.third = 0;
    this.sum = function() {
        return this.first + this.second + this.third;
    }
}

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.first = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }
}

// contructor
console.log("Person()", new Person());
console.log("Person('jeong','10','20','30')", new Person("jeong", 10, 20, 30));