class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (as the setter is used to modify the value)
  get age() {
    return this._age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent constructor with name and age
  }

  // Method to log the study message
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age); // Call the parent constructor with name and age
  }

  // Method to log the teach message
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
