/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 600;
let coke = 30;

if (burger <= 500) {
  console.log("Your burger price is:", burger + "tk.");
} else if (burger > 500) {
  console.log(
    "Your burger price is:",
    burger + "tk." + " " + "you will get a free Coke now."
  );
} else {
  console.log("Pay the coke price is: ", coke + "tk.");
}
