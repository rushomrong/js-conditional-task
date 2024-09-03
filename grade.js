/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let grade = 90;

if (grade >= 90 && grade <= 100) {
  console.log("Your result grade is: A");
} else if (grade >= 80 && grade <= 89) {
  console.log("Your result grade is: B");
} else if (grade >= 70 && grade <= 79) {
  console.log("Your result grade is: C");
} else if (grade >= 60 && grade <= 69) {
  console.log("Your result grade is: D");
} else {
  console.log("Your result grade is: F");
}
