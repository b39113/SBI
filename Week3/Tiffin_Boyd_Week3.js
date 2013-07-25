//alert("JavaScript works!");

// Boyd Tiffin
// SDI 1307
// Project 3
// Let's Roll!

/*
STORY

Welcome back 'Mokono'!
You just completed level 7 and are only 3 levels away from earning the flame tower.
While you were out, your friend Tom achieved level 12, don't let them get too far ahead!
You are ahead of 12 friends and behind 3 of them, Awesome Job, keep it up!

You do not have the tutorials on, if you need any assistance, hit us up on facebook!

*/


// Global Variables Defined
var maxLevel = 30;

//
var myUser = {
    "fName" : "Mokono",
    "lName" : "Smith",
    "heavyUser" : true,
    "curLevel" : 8,
    "tutOn" : false,
    "facebookSync": true,
    "lastPlayed": 5,
    "lastLoggedInDays": function() {
        if (this.lastPlayed < 24) {
            console.log(this.fName + ", you were last on " + this.lastPlayed + " hours ago.");
        } else {
            var daysPlayed = this.lastPlayed;
            daysPlayed = daysPlayed/24;
            daysPlayed = Math.round(daysPlayed);
            console.log(this.fName + ", you were last on " + daysPlayed + " days ago");
        }
    },
    "timeLogged" : function(timeLogged) {
        if (timeLogged <= 18) {
            this.heavyUser = true;
            var powerUser = "You can't be stopped!!";
            return powerUser;
        } else {
            this.heavyUser = false;
        }
    }
    
};
 








// Output
console.log("Hi " + myUser.lastLoggedInDays);
console.log();