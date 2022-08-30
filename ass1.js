let year = parseInt(prompt("Enter the year for checking its a leap or not"))

    if(year == 0){
    console.log("Try again")
    }
    else if (year%4==0){
        console.log(`Yes its a leap year: ${year}`);
    }
    else{
        console.log("no its not a leap year");
    }
