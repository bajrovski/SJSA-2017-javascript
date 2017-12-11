

// var	req = new XMLHttpRequest();
// req.open("GET", "file.txt", false);
// req.send();
// console.log(req.responseText);

// var req = new XMLHttpRequest();
// req.open("GET", "file.txt", true);
// req.addEventListener("load", function(){
// 	console.log("DONE", this.status);
// 	console.log(req.responseText);
// });
// req.send();

// var req = new XMLHttpRequest();
// req.open("GET", "/fruits.xml", false);
// req.send();
// console.log(req.responseXML.querySelectorAll("fruit").length);

// var req = new XMLHttpRequest();
// req.open("GET", "fruits.json", false);
// req.send();
// console.log(JSON.parse(req.responseText));


// function getUrl(url, callback){
// 	var req = new XMLHttpRequest();
// 	req.open("GET", url, true);
// 	req.addEventListener("load", function(){
// 		if(req.status < 400){
// 			callback(req.responseText);
// 		}else{
// 			callback(new Error("Request Failed"));
// 		}
// 	});

// 	req.send();
// };

// getUrl("https://jsonplaceholder.typicode.com/posts", function(success, error){
// 	if(error != null){
// 		console.log(error);
// 	}else{
// 		console.log(JSON.parse(success));
// 	}
// })

// function get(url){
// 	return new Promise(function(succeed, fail){
// 		var req = new XMLHttpRequest();
// 		req.open("GET", url, true);
// 		req. addEventListener("load", function(){
// 			if(req.status < 400){
// 				succeed(req.responseText);
// 			}else{
// 				fail(new Error("Request Failed"));
// 			}
// 		});
// 		req.send();
// 	});
// };


// get("https://jsonplaceholder.typicode.com/users").then(function(
// 	content){
// 	console.log(JSON.parse(content));
// }, function(error){
// 	console.log(JSON.parse(success));
// });

// function getComments(url){
// 	return new Promise(function(succeed, fail){
// 		var req = new XMLHttpRequest();
// 		req.open("GET", url, true);

// 		req.addEventListener("load", function(){
// 			if(req.status < 400){
// 				succeed(req.responseText);
// 			}else{
// 				fail(new Error("Request Failed"));
// 			};
// 		});
// 		req.send();
// 	});
// };

// getComments("https://jsonplaceholder.typicode.com/comments").then(function(content){
// 	var comments = JSON.parse(content);
// 	function drawTable(data){
// 		var table = document.createElement("table");
// 		var tr = document.createElement("tr");
// 		var headers = Object.keys(data[0]);
// 		for(var i = 0; i < headers.length; i++){
// 			var header = headers[i];
// 			var th = document.createElement("th");
// 			th.appendChild(document.createTextNode(header));
// 			tr.appendChild(th);
// 		}
// 		table.appendChild(tr);
// 		data.forEach(function(row){
// 			tr = document.createElement("tr");
// 			for(var i = 0; i < headers.length; i++){
// 				var header = headers[i];
// 				var td = document.createElement("td");
// 				td.appendChild(document.createTextNode(row[header]));
// 				tr.appendChild(td);
// 			}
// 			table.appendChild(tr);
// 		});
// 		return table;
// 	}
// 	document.body.appendChild(drawTable(comments));
// }, function(error){
// 	console.error(error);
// })

fetch("https://jsonplaceholder.typicode.com/comments").then(function(response){
	if(response.status !== 200){
		console.error("Looks like there was a problem");
		return
	};
	response.json().then(function(data){
		console.log(data);
	});

}).catch(function(error){
	console.error(error);
});