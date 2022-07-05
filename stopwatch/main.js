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
    milliseconds = milliseconds + 1; //armazena = conta
    //console.log(`ms: ${milliseconds}`); //mostra
    /*
    AND | && | TRUE AND TRUE = TRUE || TRUE AND FALSE = FALSE || FALSE AND FALSE = FALSE
    */
    if(milliseconds + 1 > 1000){
        console.log("test");
    }
if(milliseconds == 1000) {
    
// we will count 1 second
seconds = seconds + 1;
console.log(`s: ${seconds}`);
}}

//setInterval(function () {console.log("hello");}, 1000);


/*
1 - Miliseconds(0) + 1 = 1
2 - Miliseconds(0) + 1 = 1;

*/