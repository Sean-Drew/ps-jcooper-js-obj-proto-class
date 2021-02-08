'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
  }

  let jim = new Person('Jim', 'Cooper', 29)
  display(jim)

})();