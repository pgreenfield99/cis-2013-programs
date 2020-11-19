//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
    if (intCount<2 || intCount>100)
    {
        alet("error: pick a number betwee 2 and 100!");
    }
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k=0;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = i+j;//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM
    
    //loop that populates the numbers
    
    intNum=5;
    while(intNum<intCount)
    {
        k=i+j;
        i=j;
        j=k;
        intNum++;
         stringOutput= stringOutput+"  "+k+" ";
         //pushes back ths string
        $("output").value = " "+stringOutput+" ";
         $("total_fib").value =  intCount;
    }

    
  
   
    
}; 

// Push solution back to Output through DOM


window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};  