/*
var miliseconds;
miliseconds = 0; "Luis"; False;
*/
var milliseconds = 0;
var seconds = 0;

var secondshtml = document.getElementById("seconds"); //document. = read/connect with the information from the HTML file

//secondshtml.innerHTML = "New text!";

var tenshtml = document.getElementById("tens"); //document. = read/connect with the information from the HTML file

//secondshtml.innerHTML = "New text!";

window.setInterval(myTimer, 1);

function myTimer() {
    milliseconds = milliseconds + 1;
    console.log(`ms: ${milliseconds}`);


    
} 
/*
1 - Miliseconds(0) + 1 = 1
2 - Miliseconds(0) + 1 = 1;

*/