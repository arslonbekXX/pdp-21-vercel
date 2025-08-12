/**
 * 1. hoisting
 * 2. scope
 * 3. TDZ(Temporal Dead Zone) only have let and const
 */

/* HOISTING (kotarilish) and TDZ */
// console.log(a);
// let a = 10;
// console.log(a);

/* Scope */
/* Block Scope vs Function Scope */
// {
// 	var a = 20;
// 	console.log(a);

// 	{
// 		var a = 40;
// 		console.log(a);
// 	}

// 	console.log(a);
// }

// var a = 10;
// a = 20;

// function app() {
// 	console.log(a);

// 	if (a) console.log(a);
// 	else console.log("a yoq dib ayt");

// 	var a = 40;

// 	console.log(a);
// }

// app();
