// Javascript 를 prototype based language 라고 불릴만큼 JS에서 중요한 개념.

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.first = second;
    this.third = third;
    /* this.sum = function() {
        return this.first + this.second + this.third;
    } */

}
/* 
    Person 생성자를 통해 많은 객체를 만들면 sum function 이 계속 새로 만들어져, 컴퓨터의 자원(메모리)을 많이 낭비하게 됨,
    
    생성자 안에서 method 를 갖는 것은 생산성이 떨어지게된다. (만약, 객체마다 다른 method 를 가지게 될 경우)

    Person 이라는 생성자를 사용해서 만든 모든 객체가 공통적으로 사용하는 함수나 속성을 만들면 좋겠다는 발상이 Prototype 이 나오게 하였다.
 */

// Person 의 모든 객체가 이 하나의 코드가 공유되어 사용됨.
Person.prototype.sum = function() {
    return this.first + this.second + this.third;
}

/* 
    prototype 을 정의하는 코드가 객체가 만들어질때마다 실행되지 않기에(1번만 실행) 성능 및 메모리 절약
*/
