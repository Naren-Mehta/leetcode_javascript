// Q50. What are escape characters in JavaScript?
// JavaScript escape characters enable you to write special characters without breaking your application.
// Escape characters (Backslash) is used when working with special characters like single quotes, double quotes, apostrophes and ampersands.
// Place backslash before the characters to make it display.


// Problem: Problem statement we need string inside anothere string via " quots
// let text = "We are the so-called "Vikings" from the north.";


// SOlution
let text = "We are the so-called \"Vikings\" from the north.";

console.log(text); // We are the so-called "Vikings" from the north.

// Examples:
// The sequence \'  inserts a single quote in a string:
text= 'It\'s alright.';
console.log(text); // It's alright.


text = "The character \\ is called backslash.";
console.log(text); // The character \ is called backslash.

// Six other escape sequences are valid in JavaScript:
/* 
Code	Result
\b	    Backspace
\f	    Form Feed
\n	    New Line
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator
*/

text = "The character \b is used for backslash.";
console.log(text);

text = "The character \f is used for Form Feed.";
console.log(text);

text = "The character \n is used for New Line.";
console.log(text);

text = "The character \r is used for Carriage Return.";
console.log(text);

text = "The character \t is used for Horizontal Tabulator.";
console.log(text);

text = "The character \v is used for Vertical Tabulator.";
console.log(text);

