let openButton = document.getElementById('open');
let updateButton = document.getElementById('update-start');
let output = document.getElementById('file-input-item');
let progressbar = document.getElementById('progressbar');

function open(){
  console.log('open');
  openTextFile();
}
openButton.addEventListener("click", open);

function updateStart(){
  console.log('update Start');
  progressbar.value = '89';
}
updateButton.addEventListener("click", updateStart);

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