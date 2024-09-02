/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

//BMI formula
let weight = 80;
let height = 1.75;
let bmi = (weight / height) ^ 2;

//BMI values
// let bmiOver = 29.99;
// let bmiNormal = 24.9;
// let bmiUnder = 18.5;
// let obese = "obese";

if (bmi < 18.5) {
  console.log("You are underweight & your bmi is less than: ", bmi);
} else if (bmi >= 18.5 || bmi <= 24.9) {
  console.log("You are normal, your bmi is: ", bmi);
} else if (bmi >= 25 || bmi <= 29.9) {
  console.log("You are overweight, your bmi is: ", bmi);
} else {
  console.log("you are obese");
}
