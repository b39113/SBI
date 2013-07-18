//alert("JavaScript works!");

// Boyd Tiffin
// SDI 1307
// Project 1
// My first assignment, using tower defense game as example

// Variables and Values
var myUserName = "Bob";
var myTower1 = "\"Upgraded\" Missle Tower";
var myTowerCapacity = 5;
var firstTryLevel = false;

// Outputs
console.log(myUserName + " has " + myTowerCapacity + " towers available.");
console.log("It is " + firstTryLevel + " that this is " + myUserName + "'s first try at this level.");
console.log(myUserName + "'s first tower picked is an " + myTower1 + ".");

// Conditionals
if (firstTryLevel === true) {
    if (myTowerCapacity >= 10) {
        //Perform Math
        myTowerCapacity = myTowerCapacity+1;
        console.log("Since this is your first attempt " + myUserName + ", make sure you use all " + myTowerCapacity + " towers! Output A");
    } else {
        console.log("You only have " + myTowerCapacity + " towers, make sure to pick wisely on your first attempt. Output B");
    };
} else {
    if (myUserName === "Mokono") {
        //String Concatenation
        console.log("Sorry your last attempt did not work out " + myUserName + ", maybe you should try using different towers. Output C");
    } else {
        console.log("If you need some tips for your next attempt " + myUserName + ", reach out through the facebook link. Output D");
    };
};
