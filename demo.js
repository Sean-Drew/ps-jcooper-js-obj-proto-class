'use strict'; 
(function() {
  
  display(Math.PI)
  display(Math.max(2, 42, 29))
  display(Math.round(29.6))

  // ==================================================

  let currentDateTime = new Date() // initialize new date w/ no params = current date
  display(currentDateTime.toString())

  let otherDate = new Date('2050-03-25T13:01:30Z') // ISO 8601 string value date | year-month-day-time
  display(otherDate.toString())

  let finalDate = new Date(2050, 3, 25, 13, 1, 30, 50) // most consistent. year, month, day, hour, minute, second, milisecond. Note that the month is 0-based, but everything else is 1-based. This '3' month will actually be April, not March.
  display(finalDate.toString())

  // ==================================================

  function checkPasswordComplexity(password) {
    // test a string to check if it has lowercase, uppercase, numbers and is at least 8 characters long
    // let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ //No spaces between the //

    return regex.test(password)
  }

  display(checkPasswordComplexity('weakpassword'))
  display(checkPasswordComplexity('StrongPassword123'))

  // ==================================================

  function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g; // no spaces between the //, the g at the end is the global code

    let result = regex.exec(logData)
    // have the regex loop through errors until the value is null (no more errors found)
    while (result !== null) {
      display(result[1])
      display(result[2])
      display('--------------------')
      result = regex.exec(logData)
    }

    return regex.exec(logData)
  }

  let logData = 'INFO:OK;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;ERROR(HIGH): so many errors;'
  findAlerts(logData)

})();