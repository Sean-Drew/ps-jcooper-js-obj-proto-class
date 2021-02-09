'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
      let nameParts = fullName.split(' ')
      this.firstName = nameParts[0]
      this.lastName = nameParts[1]
    }
    isAdult() {
      return this.age >= 18
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age)
      this._enrolledCourses = []
    }
    
    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age)
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId)
    }

    getCourses() {
      return `${this.fullName}'s enrolled courses are: ${this._enrolledCourses.join(', ')}`
    }
  }

  let jim = new Person('Jim', 'Cooper', 29)
  let jimStudent = Student.fromPerson(jim)

  display(jimStudent)

})();