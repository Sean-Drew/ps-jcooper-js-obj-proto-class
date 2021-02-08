'use strict'; 
(function() {

  // object literal
  let person1 = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 29
  }

  // object.create, identical to above, more verbose
  let person2 = Object.create(
    Object.prototype,
    {
      firstName: { value: 'Jim', enumerable: true, writable: true, configurable: true },
      lastName: { value: 'Cooper', enumerable: true, writable: true, configurable: true },
      age: { value: 29, enumerable: true, writable: true, configurable: true}
    }
  )

  display(person1, person2)

})();