var log = console.log;
var addImageAt = function(url, ID){
	document.body.innerHTML += '<IMG SRC=\"' + url + '\" ID=\"' + ID + '\"/>';
};
var addText = function(text, ID){
	document.body.innerHTML += '<P ID=\"' + ID + '\"></P>';
	document.getElementById(ID).innerHTML = text;
};
function loopCode(code){
	return setInterval(code, 50);
};
function setImageWidth(ID, width){
	document.getElementById(ID).width = String(width);
};
function setImageHeight(ID, height){
	document.getElementById(ID).height = String(height);
};
function color(ID, color){
	document.getElementById(ID).style.color = color;
};
function font(ID, fontFamily){
	document.getElementById(ID).style.fontFamily = fontFamily;
};
function left(ID){
	document.getElementById(ID).style.float = 'left';
};
function addButton(text, ID){
	document.body.innerHTML += '<BUTTON ID=\"' + ID + '\"></BUTTON>';
	document.getElementById('button').innerHTML = text;
};
function addInputBox(ID){
	document.body.innerHTML += '<INPUT ID=\"' + ID + '\"/>';	
};
function addHeading(text, size, ID){
	document.body.innerHTML += '<H' + size + ' ID=\"' + ID + '\"></H1>';
	document.getElementById(ID).innerHTML = text;
};
function setContent(ID, value){
	document.getElementById(ID).innerHTML = value;
};
function addBreak(ID){
	document.body.innerHTML += '<BR ID=\"' + ID + '\"/>';
};
function is(event, ID){
	var b = false;
	var eventHandler = function(){
		b = true;
	};
	document.getElementById(ID).addEventListener(event, eventHandler);
	return b;
};
function nativeCode(functionName){
	return functionName.toString();
};
function x(ID, val){
	var e = document.getElementById(ID);
	e.style.position = 'absolute';
	e.style.left = String(val) + 'px';
};
function y(ID, val){
	var e = document.getElementById(ID);
	e.style.position = 'absolute';
	e.style.bottom = String(val) + 'px';
};
function z(ID, val){
	var e = document.getElementById(ID);
	e.style.position = 'absolue';
	e.style.zIndex = String(val);
};