function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    var interpretation = '';
    if (bmi > 24.9) {
        interpretation = "are overweight.";
    } else if(bmi < 18.5) {
        interpretation = "are underweight.";
    } else {
        interpretation = "have a normal weight.";
    }
    return "Your BMI is " + bmi + ", so you " + interpretation;
}
console.log(bmiCalculator(65, 1.8));