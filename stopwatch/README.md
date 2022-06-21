# Stopwatch 

* Calculate second and milisenconds (time)

    * How to display the time?
        * for display the time after calculation we could use:

            `var secondshtml = document.getElementById("seconds");
            secondshtml.innerHTML = "New text!";`

    * How to handle time in JS?
        * JS use the method setInterval
        `window.setInterval(myTimer, 1);`

    * How to do the math to display?
        * we have to add milliseconds to itself starting from 0.

            `function myTimer() {
                milliseconds = milliseconds + 1;
                console.log(milliseconds);`

* Start the stopwatch
* Stop the stopwatch