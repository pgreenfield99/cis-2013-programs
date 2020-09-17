 var floatAge, floatDays,intWeeks, floatMonths, intFortnights;
 
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = parseFloat(floatAge * 365.25);
     floatMonths = parseFloat(floatAge * 12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     
     
     alert("You entered = " + floatAge+ " Years old");
     alert("Days Old = " + floatDays);
     alert("Weeks Old = " + intWeeks);
     alert("Months Old = " + floatMonths);
     alert("Fortnights Old= " + intFortnights);
     
     