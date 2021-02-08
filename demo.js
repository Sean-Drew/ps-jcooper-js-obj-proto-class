'use strict'; 
(function() {

  let person = {
    firstName: 'Alex',
    lastName: 'Johnson',
    age: 28,
    isAdult: function() { return person.age >= 18 }
  }

  display(`${person.firstName} ${person.lastName}`);
  display(person.age)
  display(person.isAdult())

})();