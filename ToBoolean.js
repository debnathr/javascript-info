//Values that are intuitively “empty”, like 0, an empty string, null, undefined and NaN become false.
//Other values become true.

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

//Some languages (namely PHP) treat "0" as false. But in JavaScript a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)