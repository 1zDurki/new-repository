'use strict';

let login = prompt('Who is there?', 'login');
if (login == 'Admin') {
	let password = prompt('Enter password' ,'pass');
	if (password == 'General') {
	alert ('Greeting!!!');
	}
	else if (password == '' || password == null) {
	alert ('Отменено');
	}
	else {
		alert('Неверный пароль');
	}
}
	else if (login == '' || login == null) {
		alert('Отменено');
	}
	else {
		alert('Я тебя не знаю');
	}