'use strict';

/*let value;

do {
	value = prompt('input num > 100', '');
} while (value <= 100 && value);*/



/*let browser = prompt("input your browser's name", ""); {
	if( browser =='Edge') {
		alert("You've got the Edge")
	} else if ( browser == 'Chrome' 
		|| browser == 'Firefox' 
		|| browser == 'Safari' 
		|| browser == 'Opera') {
		alert( 'Okay we support these browsers too' )
	} else {
		alert( 'We hope that this page looks ok!' )
	}
}*/



/*const number = +prompt('Введите число от 1 до 3', '');

switch (number) {
	case (0):
	alert('вы ввели число 0');
	break;

	case (1):
	alert('вы ввели число 1');
	break;

	case (2):
	case (3):
	alert('вы ввели число 2 или 3');
	break;
}*/




/*function checkAge(age) {
	return (age > 18) ? thrue : confirm('Родители разрешили?');
}


function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}*/


/*function min(a, b) {
	return a < b ? a : b;
}*/




/*function pow(x, n) {
	let result = x;

	for(let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n < 1) {
	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
	alert( pow(x, n) );
}*/


/*let ask = (question, yes, no) => (confirm (question)) ? yes() : no();

ask(
	"Вы согласны?",
	() => {alert("Вы согласились"); },
	() => {alert("Вы отменили действие"); }
);*/



/*	name: "John",
	surname: "Smith",
}

let name = "Pete";

delete user.name;*/


/*function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return thrue;
}*/



/*let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}

alert(sum);*/



/*function multiplyNumeric(obj) {
	for(let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
}*/


/*
//Обьект пользователя
let user = {
	name: "John",
	age: 30,
};
//Научим пользователя здороваться
user.sayHi = function() {
	alert("Привет");
};

user.sayHi();
*/

/*
user = {
	sayHi() {
		alert("Привет");
	}
};
*/

/*
let user = {
	name: "John",
	age: 30,

	sayHi() {
		alert(this.name);
	}

};

user.sayHi();
*/

/*
let user = { name: "John" };
let admin = { name: "dog" };

function sayHi() {
	alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin['f']();
*/

/*
//Калькулятор!!! Сам написаль =))))
let calcltr = {
	sum() {
		return a + b;
	},
	mul() {
		return a * b;
	},
	read() {
		alert(`a + b = ${this.sum()}`);
		alert(`a * b = ${this.mul()}`);
		return;
	},
};

let a = +prompt('a?', '');
let b = +prompt('b?', '');

calcltr.read();
*/

/*
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() {
		alert( this.step );
		return this;
	},
};

ladder.up().showStep();
*/

/*
function Calculator() {

	this.read = function() {
		this.a = +prompt('a?', '');
		this.b = +prompt('b?', '');
	};

	this.sum = function() {
		return this.a + this.b;
	};

	this.mul = function() {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/



//Accumulator!!!
/*
function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value += +prompt('Сколько нужно добавить?', 0);
	};

}

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/



/*
function readNumber() {
	let num;

	do {
		num = prompt("Введите число", "");
	} while ( !isFinite(num) ); //проверка на тип числа

	if (num === null || num === '') return null;

	return +num;
}

alert (`Число ${readNumber()}`);
*/




/*
let str = "Доброго дня пользователь";

if (str.indexOf("дня") != -1) {
	alert("Есть совпадение");
}
*/



//ucFirst("вася") == "Вася";
/*
function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("вася") );
*/


/*
let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
alert(styles);

let n = styles.length / 2;

styles.splice(n, 1, "Классика");
alert(styles);

alert(styles[0]);
styles.shift(0);

styles.unshift("Рэп", "Регги");
alert(styles);
*/


