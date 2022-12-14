function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    
    var check4 = (year % 4);
    var check100 = (year % 100);
    var check400 = (year % 400);

    if (!check4) {
        if (!check100)
            return (!check400) ? 'Leap year.' : "Not leap year.";
        else
            return "Leap year.";
    }
    else return "Not leap year.";
/**************Don't change the code below****************/    

}
console.log(isLeap(1948));