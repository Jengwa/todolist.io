var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.getElementsByTagName("li");

function deleteButton() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("done"));
	itemList[i].appendChild(btn);
	btn.onclick= removeParent;
}

for (var i = 0; i < itemList.length; i++) {
	deleteButton();
}

function removeParent(event) {
	event.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
} 

function added() {
	if (inputLength() > 0) {
		 deleteButton();
	}
}

added();
	
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
	    createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	    createListElement();
	}    
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);








