/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* 
 * I made sure min was a numeber and atleast zero
*/

intMin = parseInt(prompt("Choose the lower number in range. It must be atleast zero."));

while(intMin<0 || isNaN(intMin))
    {
        intMin = parseInt(prompt("Error....must be atleast zero and an integer."));
    }






/*
 *I used a while loop to make sure max is greater than min and is a number
*/


intMax = parseInt(prompt("Choose the higher number in range. It must be atleast 2 or more greater than lower range"));

while(intMax < intMin + 2 || isNaN(intMax))
    {
        intMax = parseInt(prompt("Error....must be atleast zero and an integer."));
    }







/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter

intCount = 0;


/*
 * I used a whule loop to make sure that the guess was in between the required range
*/


intGuess = parseInt(prompt("Enter your guess within the range"));

while(intGuess <= intMin || isNaN(intGuess) || intGuess >= intMax)
    {
        intGuess = parseInt(prompt("Error....must be a number between the range"));
    }

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

/*
 * finally I used a while loop and if else loop to see if the guess equaled the actual number. if it was not incremented count variable
 and prompted another guess letting them know if it was smaller or larger.
 */

 while (intGuess != intRandom)
 {
    intCount = intCount +1;
    
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Number is actually larger than the one guessed"));
    }
    else
    {
        intGuess = parseInt(prompt("Number is actually smaller than the one guessed"));
    }
 }
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

