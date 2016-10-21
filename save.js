var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage(){
	var data = canvas.toDataURL();
	console.log(data);

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200)
		{
			var response = request.responseText;
			console.log(response);
		}
	}

	request.open('POST','vipin.php',true);
	request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	request.send('img=' +data);
}
