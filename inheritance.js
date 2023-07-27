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

// 상속에는 extends 사용
class PersonPlus extends Person {
    // 부모 class 의 contructor 에서 third 속성을 추가.
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first + this.second + this.third) / 3
    }
}

/**
 * 상속을 통해 코드 중복작성을 없애주어 코드작성에 시간절약가능하며,
 * 만약 변경사항이 있더라도 이미 상속을 받고있기 때문에 유지보수면에서 유리함.
 */

/* 
    상속시 부모자식관계에서 발생하는 상황
    1. 자식클래스로 객체를 생성하였으나, 부모클래스가 가지고 있는 기능이가 속성을 추가하고 싶을때.
*/