var undo = document.getElementById('undo');
var x=0,y=0,z=0;
var saveit = function(){
	 image = context.getImageData(0,0,canvas.width,canvas.height);
 		if(x==0){
 			x =image;
 			y=0;
 		}
 		else if(y==0){
 			y =image;
 			z=0;
 		}
 		else if(z==0){
 			z =image;
 			x=0;
 		}
 }

var doit = function(){
	if(y==0 && z==0){
		canvas.width=window.innerWidth;
		context.lineWidth = 20;
		radius = 10
		radSpan.innerHTML = radius;
		}
	else if(x==0){
		context.putImageData(y,0,0);
		}
	else if(y==0){
		context.putImageData(z,0,0);
		}
	else if(z==0){
		context.putImageData(x,0,0);
		}
}
undo.addEventListener('click',doit);
canvas.addEventListener('mouseup',saveit);