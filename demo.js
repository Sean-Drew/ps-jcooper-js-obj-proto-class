'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.isAdult = function() { return this.age > 21 }
  }

  let person = new Person('Jim', 'Cooper', 29)
  display(person)

  let person2 = new Person('Billy', 'Batson', 17)
  display(person2.isAdult())

})();