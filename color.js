var swatches = document.getElementsByClassName('swatch');
	for (var i=0, n=swatches.length; i<n; i++) {
		swatches[i].addEventListener('click',SetSwatch);
	}

function SetColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('Active') [0];
	if (active) 
	{
		active.className = 'swatch';
	}
}

function SetSwatch(e){
	var swatch= e.target;
	SetColor(swatch.style.backgroundColor);
	swatch.className += ' Active';
}