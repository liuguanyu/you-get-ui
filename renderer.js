const shell = require('electron').shell;

let jsBrowser = document.querySelector('.js-browser');
jsBrowser.addEventListener("click", function (e){
	e.preventDefault();

	shell.openExternal(this.getAttribute("data-href"));
}, false);

let jsAddTask = document.querySelector(".js-add");
jsAddTask.addEventListener("click", function (e){
	e.preventDefault();

	alert(111);
});