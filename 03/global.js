// // function generatePyramid(size){
// // 	var result = "";
// // 	for (var i = 0; i <= size; i++){
// // 		result+= "#";
// // 		console.log(result);
// // 	}
// // } 

// // generatePyramid(10);



// // function Person(firstname, lastname){
// // 	this.firstname = firstname;
// // 	this.lastname = lastname;
// // }

// // Teacher.prototype.hello = function(line){
// // 	alert("Emil says " + line)
// // }

// // var Emil = new Person ("Emil", "Bajrovski");
// // Emil.hello("Hello World.")
// // console.log(Emil);


// // function Teacher(firstName, lastName, gender, subject){
// // 	this.firstName = firstName;
// // 	this.lastName = lastName;
// // 	this.gender = gender;
// // 	this.subject = subject;
// // }

// // Teacher.prototype.welcome = function(){
// // 	if(this.gender == "male" || this.gender == "m"){
// // 		alert("Welcome Mr." + this.firstName + " " + this.lastName + ". We can't wait for you to start teaching " + this.subject + ".");
// // 	}else if(this.gender == "female" || this.gender == "f"){
// // 		alert("Welcome Ms." + this.firstName + " " + this.lastName + ". We can't wait for you to start teaching " + this.subject + ".");
// // 	}else{
// // 		alert("Welcome Mx." + this.firstName + " " + this.lastName + ". We can't wait for you to start teaching " + this.subject + ".");
// // 	}
// // }

// // var Jackson = new Teacher ("Sam", "Jackson", "Male", "English");
// // var Smith = new Teacher ("Samantha", "Smith", "Female", "Math");
// // var Star = new Teacher ("Logan", "Star", "neshto izmegju", "Social Studies");
// // Jackson.welcome();
// // Smith.welcome();
// // Star.welcome();


// function House(symbol, motto){
// 	this.symbol = symbol;
// 	this.motto = motto;
// 	this.lord = undefined;
// }

// function Person(name){
// 	this.name = name;
// 	this.children = null;
// 	this.parent = null;
// }

// House.prototype.battle(){
// 	alert(house_01 + "")
// }

// var Lannister = new House ("Lion", "The Lannisters always pay their debts");
// var Tywin = new Person ("Tywin");
// var Tyrion = new Person ("Tyrion");
// var Cersei = new Person ("Cersei");
// var Jamie = new Person ("Jamie");
// var Joffrey = new Person ("Joffrey");
// var Myrcella = new Person ("Myrcella");
// var Tommen = new Person ("Tommen");

// Lannister.lord = Tywin;
// Tywin.children = [Tyrion, Cersei, Jamie];
// Jamie.parent = Tywin;
// Cersei.parent = Tywin;
// Tyrion.parent = Tywin;
// Joffrey.parent = Cersei;
// Myrcella.parent = Cersei;
// Tommen.parent = Tyrion;
// Cersei.children = [Joffrey, Myrcella];
// Tyrion.children = [Tommen];

// console.log(Lannister);

// // Joffrey, Myrcella, Tommen = house of Lannister (Jamie =/= parent )

// //////////////////////////////////////////////////////////////////////////////

// class User {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// 	sayHi(line){
// 		alert(line + this.firstName + " " + this.lastName + ".");
// 	}
// }

// var Emil = new User ("Emil", "Bajrovski");
// Emil.sayHi("Hello i'm ");
// alert(Emil);

// var Rectangle = class {
// 	constructor(width, height){
// 		this.width = width;
// 		this.height = height;
// 	}
// 	calcArea(){
// 		return this.width * this.height;
// 	}

// 	get _calcArea(){
// 		return this.calcArea();
// 	}
// }

// var kocka = new Rectangle(5, 10);
// console.log(kocka._calcArea);


// class DatePicker {
// 	constructor(year, month, day){
// 		this.year = year;
// 		this.month = month;
// 		this.day = day;
// 	}
// 	addDays(days){
// 		return this.day += days;
// 	}
// }

// var today = new DatePicker(2017, 12, 4);
// today.addDays(5);
// console.log(today);

// class Teacher {
// 	constructor(firstname, lastname){
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 	}
// 	greeting(){
// 		console.log("Hello i'm" + this.firstname + " " + this.lastname);
// 	}
// }

// var theTeacher = new Teacher("Emil", "Bajrovski");
// theTeacher.greeting();

// class UniTeacher extends Teacher {
// 	constructor(firstname, lastname, university, subject){
// 		super(firstname, lastname);
// 		this.university = university;
// 		this.subject = subject;
// 	}
// 	welcomeMessage(){
// 		console.log(this.firstname + " " + this.lastname + " will be teaching " + this.subject + " at " + this.university);
// 	}
// }

// var universityTeacher = new UniTeacher("Emil", "Bajrovski", "The Streets", "Hustling");
// universityTeacher.welcomeMessage();



