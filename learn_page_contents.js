/*If we are in the learn page, display the correct contents of the learn page*/
function learn(){
	var _middle = PenguinsJS('middle');
	var $middle = jQuery(_middle.toDOMNodeList[0]);
	$middle.html('');/*Clear the contents of the learn page*/	
	/*_middle.addElement('h1', 0, 'learnHeading').set('innerHTML', 'Learn');
	_middle.addElement('h2', 0, 'mathHeading').set('innerHTML', 'Math');
	_middle.addElement('h3', 0, 'algebraHeading').set('innerHTML', 'Algebra');
	_middle.addElement('a', 0, 'newA')
	.set('href', 'file:///C:/Users/Luis/Documents/Desktop/M/PenguinLearning/index.html/#solvingEquations')
	.set('className', 'qwvxxe')
	.set('innerHTML', 'Solving equations')
	.set('id', ''); //Add the link to the Solving Equations playlist*/
	_middle.addElement('h2', 0, 'computingHeading').set('innerHTML', 'Computing');
	_middle.addElement('a', 0, 'htmlCodingLink').set('className', 'qwvxxe')
	.set('href', 'file:///C:/Users/Luis/Documents/Desktop/M/PenguinLearning/index.html/#htmlCoding')
	.set('innerHTML', 'HTML Live editor')
	.onEvent('click', function(){location.reload()});
	_middle.addElement('br', 1);
	_middle.addElement('a', 0, 'makingWebpagesLink').set('className', 'qwvxxe')
	.set('href', 'file:///C:/Users/Luis/Documents/Desktop/M/PenguinLearning/index.html/#makingWebpages')
	.set('innerHTML', 'HTML & CSS:Making webpages');
	_middle.addElement('a', 0, 'jsEditorLink')
	.set('className', 'qwvxxe').set('href', 'file:///C:/Users/Luis/Documents/Desktop/M/PenguinLearning/index.html/#jsCoding')
	.set('innerHTML', 'JS Live editor;
};
if(location.hash == '#learn'){
	learn();
};
$('a[href="file:///C:/Users/Luis/Documents/Desktop/M/PenguinLearning/index.html/#learn"]').on('click', learn);
