function printCredentials(e){
	var users = eval(localStorage.getItem('users'));/*Get the users database*/
	var userID = parseFloat(__('#userIDRecoverer').get('value'));/*Get the User ID*/
	var username = users[userID].username;/*Find the username for that user ID*/
	var password = users[userID].password;/*Find the password for that user ID*/
	__('#credentialRecoverer').addElement('p', 0, 'username').set('innerHTML', 'Your Username is ' + username + '.');/*Tell the user the username*/
	__('#credentialRecoverer').addElement('p', 0, 'password').set('innerHTML', 'Your Password is ' + password + '.');/*Tell the user the password*/
};
$('#getCredentials').on('click', printCredentials);