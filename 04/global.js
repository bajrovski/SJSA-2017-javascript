//DOM

window.onload = function(){





// var name = document.getElementById("intro");
// name.innerHTML = "Emil Bajrovski";
// console.dir(name);


// var link = document.getElementsByTagName("a");
// link[0].innerHTML = "Test";
// console.dir(link);

// link[0].href = "http://www.google.com";
// console.dir(link);

// link[0].target = "_BLANK";

// var myImg = document.getElementsByClassName("image");
// myImg[0].src = "images/doggoo.jpg";
// console.dir(myImg[0].src);

// var paragraphs = document.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[0]);

// var list = document.querySelectorAll(".list")[0];
// console.dir(list);

// for (var i = 0; i < list.children.length; i++){
// 	for(var j = 0; j < list.children[i].children.length; j++){
// 		var single_link = list.children[i].children[j];
// 	for(var k = 0; k < single_link.children.length; k++){
// 		if (single_link.children[k].nodeName == "IMG"){
// 			single_link.children[k].src = "images/doggo.jpg";
// 			}
// 		}
// 	}
// }


// var styledLink = document.querySelectorAll(".green_link")[0];
// styledLink.style.color = "green";
// styledLink.style.background = "red";
// styledLink.style.fontSize = "50px";

// var button = document.getElementById("button");
// button.addEventListener("click", function(){
// 	document.getElementById("result").innerHTML = new Date();
// });

// var test = document.querySelectorAll(".test")[0].addEventListener("click", function(){
// 	this.classList.toggle("nekojaklasa");
// })

// var myElement = document.createElement("button");
// var text = document.createTextNode("Click me");
// myElement.appendChild(text);
// document.body.appendChild(myElement);


// makeElement(tag, text)
// makeElement("h2", "Hello World")
function makeElement(tag, text){
	var el = document.createElement(tag);
	var txt = document.createTextNode(text);
	el.appendChild(txt);

	document.body.appendChild(el);
}
















}

