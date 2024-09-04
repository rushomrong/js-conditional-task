/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let me = 90; // Replace with your actual score
let friends = 40; // Replace with your friend's actual score

if (me > 80) {
  if (friends > 80) {
    console.log("Both of you scored more than 80. Let's go for lunch!");
  } else if (friends >= 60) {
    console.log(
      "Your friend scored between 60 and 80. Tell your friend, good luck next time."
    );
  } else if (friends >= 40) {
    console.log(
      "Your friend scored between 40 and 60. Keep your friend's message unseen."
    );
  } else {
    console.log("Your friend scored less than 40. Block your friend.");
  }
} else {
  console.log("You scored less than 80. Go home, sleep, and act sad.");
}
