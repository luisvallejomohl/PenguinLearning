document.getElementById('javaScript').style.display = 'none';/*Make the 'Please enable javaScript' message invisible*/
if(typeof PenguinsJS != 'undefined' && typeof jQuery != 'undefined' && typeof _ != 'undefined'){/*If all the JS Libraries are available, */
	__('#libraries').set('outerHTML', '');/*Make the 'We are having trouble loading javaScript libraries' message invisible*/
};
if(typeof localStorage !== 'undefined' && typeof sessionStorage !== 'undefined'){
	document.getElementById('localStorage').style.display = 'none';/*Make the 'You cannot log on using this browser' message invisible*/
};