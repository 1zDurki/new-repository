'use strict';

let login = prompt('Who is there?', '')

	if (login == 'Admin') {
		let password = prompt('password?', '')
			if (password == 'Я главный') {
				alert('Здравствуйте')
			} else if (password == null) {
				alert('Отменено')
			} else {
				alert('Неверный пароль')
			}
	} else if (login == null) {
		alert('Отмена')
	} else {
		alert('I dont know you')
	}