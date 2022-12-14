function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var ar = [];
    
    for (var i = 0; i < n; i++) {
        if (ar.length < 2)
            ar.push(i);
        else {
            var secLast = ar[ar.length - 2];
            var last = ar[ar.length - 1];
            ar.push(secLast + last);
        }
    }
    return ar;
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(6));