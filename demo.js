'use strict'; 
(function() {

  function registerUser(firstName, lastName) {
    let person = {
      firstName,
      lastName
    }
    display(person)
  }

  registerUser('Jim', 'Halpert')

})();