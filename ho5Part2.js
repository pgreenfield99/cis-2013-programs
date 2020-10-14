
var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{




var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat($("hw_pts").value);

floatMidPts =  parseFloat($("mid_pts").value);

floatFinPts =  parseFloat($("fin_pts").value);

floatTotalPts = parseFloat(floatFinPts+floatMidPts+floatHwPts);

intGradeOption = parseInt($("grade_option").value);

if (floatTotalPts >200 || floatTotalPts < 0)
{
    alert("error points cannot be negative or exceed 200");
}

else
{
    

if (intGradeOption===1)
{    
    if(floatTotalPts >= 80)
    {
        stringFinalGrade = "pass";
    }
    else
    {
        stringFinalGrade= "fail";
    }
}

else{
    
    if(floatTotalPts>=90){
        stringFinalGrade = "A";
    }
    
        else if(floatTotalPts>=80){
            stringFinalGrade = "B";
        }
    
            else if(floatTotalPts>=70){
            stringFinalGrade = "C";
            }
                    
                else if(floatTotalPts>=60){
            stringFinalGrade = "D";
            }
                    
                    else{
                        stringFinalGrade = "F";
                    }
    
    
}

}

$("final_grade").value = stringFinalGrade;

}; 
window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};
 
   