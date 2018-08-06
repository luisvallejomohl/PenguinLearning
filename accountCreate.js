var createAccount = new Function(M[1] + "$('#accountCreate')[0].innerHTML += 'Your user ID is ' + String(eval(localStorage.getItem('users')).length - 1) + '. You will need this to log in and to recover your username or password if you forget them. <STRONG>Do <EM>NOT</EM> give it away!!!</STRONG>'");
$('#accountCreate button').on('click', createAccount);
