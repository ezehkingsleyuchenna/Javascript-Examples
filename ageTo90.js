function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var days = (90 * 365) - (age * 365);
    var weeks = (90 * 52) - (age * 52);
    var months = (90 * 12) - (age * 12);
    return "You have " + days + " days, " + weeks + " weeks, and " + months + " months left";
    
/*************Don't change the code below**********/
}

console.log(lifeInWeeks(51));