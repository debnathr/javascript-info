//The string conversion is mostly obvious. A false becomes "false", null becomes "null" etc.

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string