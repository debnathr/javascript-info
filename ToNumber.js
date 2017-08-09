//Numeric conversion happens in mathematical functions and expressions automatically.

//For example, when division / is applied to non-numbers:

alert( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

//The explicit conversion is usually required when we read a value from a string-based source like a text form, but we expect a number to be entered.

//If the string is not a valid number, the result of such conversion is NaN, for instance:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

//Almost all mathematical operations convert values to numbers. With a notable exception of the addition +. If one of the added values is a string, then another one is also converted to a string.

//Then it concatenates (joins) them:

alert( 1 + '2' ); // '12' (string to the right)
alert( '1' + 2 ); // '12' (string to the left)