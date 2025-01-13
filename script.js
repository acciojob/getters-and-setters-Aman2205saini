//complete this code
class Person {
	constructor{
		this._name=name;
	this._age=age;
	}

get name(){
	return this._name;
}

set age(age){
	return this._age
}

get age(){
	return this._age;
}
}

class Student extends Person {
	constructor(name,age){
		super(name,agr)
	}
	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,agr)
	}
	teach(){
		console.log(`${this._name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
