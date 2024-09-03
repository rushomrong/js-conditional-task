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
let weight = 75; // kg
let height = 1.75; // 5 foot
let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("You are underweight & your bmi is less than: ", bmi.toFixed(2));
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal, your bmi is: ", bmi.toFixed(2));
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are overweight, your bmi is: ", bmi.toFixed(2));
} else {
  console.log("You are obese, your BMI is:", bmi.toFixed(2));
}
