-
 //Exercise #1
//Create a for loop that prints out the numbers 1 to 100 in the console.
 // Exercise #1
 // Write your solution below
 for (i = 1; i <= 100; i++) {
     console.log(i);
 }
 
  
 //Write your explanation for Exercise #1 here
/* this for loop starts at 1 and will will go up by one
as long as "i" is less then or equal to 100, clonsole logging
each time the loop is ran. */



for (var i =0; i <= 6; i++){
	for (var j = 0; j <= i; j++) {
	console.log("#");
	}
	console.log ("<br/>");
}
 
/*Write your explanation for Exercise #1 here
 used a nested for lope to add one to the console on each line
 and to move down one line affter each time "i" is ran in the loop */






// Exercise #2
// Write your solution below
function isEven (num) {
    return num % 2 === 0;
    
    console.log (num);
}

function isOdd (num) {
    return num % 2 !== 0;

    console.log (num);
}
/* 
Write your explanation for Exercise #2 here
isEven function will check to see if num is divisible by two and return true if correct.
if not it will return false. 

isOdd will do the same as isEven but will check to see if num is not divisible by two. */ 