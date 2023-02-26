// A factory function is a function that returns a new object.
// Example 1: Creating a person object named person1
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  console.log(person1.getFullName()); // Log_1: John Doe
  
  // Example 2: Creating another object called person2 by duplicating the code
  let person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  console.log(person2.getFullName()); // Log_2: Jane Doe
  
  // Example 3: Defining a function that creates the person object
  function createPerson(firstName, lastName) {
    return {
      firstName: firstName,
      lastName: lastName,
      getFullName() {
        return firstName + ' ' + lastName;
      },
    };
  }
  
  // Example 4: Using the createPerson() factory function to create two objects person1 and person2
  let person3 = createPerson('John', 'Doe');
  let person4 = createPerson('Jane', 'Doe');
  
  console.log(person3.getFullName()); // Log_3: John Doe
  console.log(person4.getFullName()); // Log_4: Jane Doe
  
  // Example 5: Removing the getFullName() method from the person object
  function createPersonWithoutMethod(firstName, lastName) {
      return {
          firstName: firstName,
          lastName: lastName
      }
  }
  
  // Example 6: Moving the getFullName() method to another object
  var personActions = {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  // Example 7: Assigning the method of the personActions object to the person object
  let person5 = createPersonWithoutMethod('John', 'Doe');
  let person6 = createPersonWithoutMethod('Jane', 'Doe');
  
  person5.getFullName = personActions.getFullName;
  person6.getFullName = personActions.getFullName;
  
  console.log(person5.getFullName()); // Log_5: John Doe
  console.log(person6.getFullName()); // Log_6: Jane Doe
  
  // Example 8: Using Object.create() method to create a person object
  var personActions2 = {
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    },
  };
  
  function createPersonUsingObjectCreate(firstName, lastName) {
    let person = Object.create(personActions2);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
  }
  
  // Example 9: Creating person objects and calling the methods of the personActions object
  let person7 = createPersonUsingObjectCreate('John', 'Doe');
  let person8 = createPersonUsingObjectCreate('Jane', 'Doe');
  
  console.log(person7.getFullName()); // Log_7: John Doe
  console.log(person8.getFullName()); // Log_8: Jane Doe
  
  // Output:
  /*
  Log_1: John Doe
  Log_2: Jane Doe
  Log_3: John Doe
  Log_4: Jane Doe
  Log_5: John Doe
  Log_6: Jane Doe
  Log_7: John Doe
  Log_8: Jane Doe
  */
  