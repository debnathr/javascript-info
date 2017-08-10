//binary +
//binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
alert(s); // mystring

//Note that if any of operands is a string, then the other one is converted to string too.

//For example:

//The rule is simple: if any of operands is a string, then convert the other one into a string as well.

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


//The string concatenation and conversion is the special feature of the binary plus "+". Other arithmetic operators work only with numbers. They always convert their operands to numbers.

//For instance, subtraction and division:

alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3

