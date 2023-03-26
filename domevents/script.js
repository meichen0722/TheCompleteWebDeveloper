var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebuttons = document.getElementsByClassName("deletebutton");

for(var i = 0; i < deletebuttons.length; i++) {
	deletebuttons[i].addEventListener("click", deleteItemAfterClick);
}

function inputLength() {
	return input.value.length;
}

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

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteItemAfterClick(event) {
	event.target.parentElement.remove();
}

function strikeThrough(event) {
	event.target.classList.toggle("done"); // add/remove class="done"
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough);
