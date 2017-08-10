//unary +

//The plus + exist in two forms. The binary form that we used above and the unary form.

//The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything with numbers, but if the operand is not a number, then it is converted into it.

//For example:

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

//sample example
//The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

//If we want to treat them as numbers, then we can convert and then sum:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//sample code for assignment operator

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

//Remainder %

//The remainder operator % despite it’s look does not have a relation to percents.

//The result of a % b is the remainder of the integer division of a by b.

//For instance:

alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3

//Exponentiation **

//The exponentiation operator ** is a recent addition to the language.

//For a natural number b, the result of a ** b is a multiplied by itself b times.

alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

//The operator works for non-integer numbers of a and b as well, for instance:

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

//Increment/decrement

//Increment ++ increases a variable by 1:
let counter = 2;
counter++;      // works same as counter = counter + 1, but shorter
alert( counter ); // 3

//Decrement -- decreases a variable by 1:
let counter = 2;
counter--;      // works same as counter = counter - 1, but shorter
alert( counter ); // 1

//Prefix Increment
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

//Now let’s use the postfix form:

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1

//sample

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

//If we’d like to increase the value and use the result of the operator right now, then we need the prefix form:

let counter = 0;
alert( ++counter ); // 1

//If we’d like to increment, but use the previous value, then we need the postfix form:

let counter = 0;
alert( counter++ ); // 0


//Increment/decrement among other operators
let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

//sol

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

let a = 2;

let x = 1 + (a *= 2);

//The answer is:

//a = 4 (multiplied by 2)
//x = 5 (calculated as 1 + 4)