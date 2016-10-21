var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var dragging = false;
var radius = 10;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

context.lineWidth = radius*2;

var putPoint = function(e){
	if(dragging){
		context.lineTo(e.clientX , e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX , e.clientY , radius , 0 , Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX , e.clientY);
}}
reseet.addEventListener('click',function(){
	canvas.width=window.innerWidth;
	context.lineWidth = 20;
	radius = 10
	radSpan.innerHTML = radius;
});

var engage =function(e){
	dragging=true;
	putPoint(e);
}
var disengage =function(){
	dragging=false;
	context.beginPath();
}

canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mousemove',putPoint);
canvas.addEventListener('mouseup',disengage);


var minrad=0.5,
	maxrad=100,
	defaultrad=20,
	interval=5,
	radSpan = document.getElementById('radval'),
	decrad = document.getElementById('decrad'),
	incrad = document.getElementById('incrad');
var radius = 10;

var setRadius = function(newRadius){
	if(newRadius<minrad)
		newRadius=minrad;
	else if(newRadius>maxrad)
		newRadius=maxrad;
	radius = newRadius;
	context.lineWidth = radius*2;
	radSpan.innerHTML = radius; 
}


decrad.addEventListener('click',function(){
	setRadius(radius-interval);
});


incrad.addEventListener('click',function(){
	setRadius(radius+interval);
});

