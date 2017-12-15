// Local Storage

// localStorage.setItem("name", "Emil");
// var name = localStorage.getItem("name");
// console.log(name);

// localStorage.removeItem("name", "Emil")

// var person = {firstName: "Emil", lastName: "Bajrovski"};
// localStorage.setItem("person", JSON.stringify(person));

// var data = JSON.parse(localStorage.getItem("person"));
// console.log(data);


// for (var x in data){
// 	console.log(data[x])
// }

// localStorage.removeItem("person");



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TO DO APP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 	function getTodos(){
// 		var todos = [];
// 		var todos_value = localStorage.getItem("todo");
// 		if(todos_value !== null){
// 			todos = JSON.parse(todos_value);
// 		}
// 		return todos;
// 	}

// 	function AddToDo(){
// 		var todo = document.getElementById("todo_src").value;
// 		var todos = getTodos();
// 		todos.push(todo);

// 		localStorage.setItem("todo", JSON.stringify(todos));

// 		show();
// 	}

// 	function show(){
// 		var todos = getTodos();
// 		var html = '<ul>';

		

// 		for(var i = 0; i < todos.length; i++){
// 			html += '<li>' + todos[i] + '<button class="remove" id="'+ i +'">x</button>'
		
// 	};
// 	html += '</ul>'

// 	document.getElementById("todos").innerHTML = html;

// 	var buttons = document.querySelectorAll(".remove");
// 	for(var i = 0; i < buttons.length; i++){
// 		buttons[i].addEventListener("click", remove);
// 	};


// };

// function remove(){
// 	var id = this.getAttribute("id");
// 	var todos = getTodos();
// 	todos.splice(id, 1);
// 	localStorage.setItem("todo", JSON.stringify(todos));
// 	show();

// }
// document.getElementById("button_src").addEventListener("click", AddToDo);
// show();

// sessionStorage.setItem("name", "Emil");

// IndexedDB

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

if(!indexedDB){
	console.log("Your browser doesn't support a stable version of IndexedDB")
};
var request = window.indexedDB.open("myDb", 505);
console.log(request);

request.onupgradeneeded = function(){
	var db = request.result;
	var store = db.createObjectStore("UsersHold", {keyPath: "id"});
	var index = store.createIndex("NameIndex", ["name.first", "name.last"]);
}

request.onsuccess = function(){
	var db = request.result;
	var tx = db.transaction("UsersHold", "readwrite");
	var store = tx.objectStore("UsersHold");
	var index = store.index("NameIndex");

	store.put({id: 1234, name: {first: "Emil", last: "Bajrovski"}, age:24});
	store.put({id: 4321, name: {first: "Lala", last: "Tralala"}, age:21});

	var getEmil = store.get(1234);
	var getLala = index.get(["Lala", "Tralala"]);

	getEmil.onsuccess = function(){
		console.log(getEmil.result.name.first);
	}

	getLala.onsuccess = function(){
		console.log(getLala.result.name.first);
	}

	tx.oncomplete = function(){
		db.close();
	}
}