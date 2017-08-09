"" + 1 + 0 	= "10"		//result is "10"

//The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.


"" - 1 + 0 	= -1		// -1

//The substruction "-" (like most math operations) only works with numbers, it converts an empty string "" to 0.


true + false 			//1
6 / "3" 				//2
"2" * "3" 				//6
4 + 5 + "px" 			//"9px"
"$" + 4 + 5 			//"$45"
"4" - 2 				//2
"4px" - 2 				//NaN
7 / 0 					//Infinity
"  -9\n" + 5 			//" -9\n5"

"  -9\n" - 5			//-14

//In both console.log (tested in Node) and alert (tested in Chrome), the following happens:
//The '/n' is interpreted as a new line character. 
//The new line character is considered white space. 
//When a string is coerced to a number, which is what happens here because we are subtracting 5 from a string, 
//the coercion strips leading and trailing white space, which gives the string "-9", and that is converted to number -9. 
//And -9-5 = -14

null + 1 				//1

//null becomes 0 after the numeric conversion.


undefined + 1 			//NaN

//undefined becomes NaN after the numeric conversion.