let saveSetupButton = document.getElementById('save-setup');
let saveFileButton = document.getElementById('save-file');
let loadButton = document.getElementById('load');
let restartButton = document.getElementById('restart');
let initButton = document.getElementById('init');
let output = document.getElementById('file-input-item');

function saveSetup(){
  console.log('saveSetup');
}
saveSetupButton.addEventListener("click", saveSetup);

function saveFile(){
  console.log('saveFile');
}
saveFileButton.addEventListener("click", saveFile);

function load(){
  console.log('load');
  openTextFile();
}
loadButton.addEventListener("click", load);

function restart(){
  console.log('restart');
}
restartButton.addEventListener("click", restart);

function init(){
  console.log('init');
}
initButton.addEventListener("click", init);

function openTextFile(){
	var input = document.createElement("input");
	
	console.log(input);
	input.type = "file";
	  input.accept = "text/plain, text/html, .jsp";

	 input.click();
	 input.onchange = function (event) {
	        processFile(event.target.files[0]);
	    };
	    
}

function processFile(file){
	var reader = new FileReader();
	reader.readAsText(file,"euc-kr");
	
	reader.onload = function () {
		output.value = file.name;// reader.result;
	};
}