/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 600;
let coke = 30;

burger > 500
  ? console.log(
      "Your burger price is: ",
      burger + "tk. " + "You get the free coke."
    )
  : console.log("Please pay the coke price is: ", coke);
