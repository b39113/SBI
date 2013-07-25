// Boyd Tiffin
// SDI 1307
// Project 3
// Let's Roll!

// Global Variables Defined
var maxLevel = 30;
var myUser = {
    "fName" : "Mokono",
    "lName" : "Smith",
    "heavyUser" : true,
    "curLevel" : 10,
    "tutOn" : false,
    "facebookSync": true,
    "lastPlayed": 15,
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
            var powerUser = "You can't be stopped!";
            return powerUser;
        } else {
            this.heavyUser = false;
            var notPowerUser = false;
            return notPowerUser;
        }
    },
    "towerList" : [
        "Fire",
        "Water",
        "Cannon",
        "Laser"
    ],
    "towerLevel" : [
        1,
        2,
        3,
        4
    ],
    "myUpgrades" : {
        "Fire": 2,
        "Water": 1,
        "Cannon" : 2,
    }
};
var friendList = function(uFName,uLName) {
    for (var key in friendInfo.gameFriends) {
        if (friendInfo.gameFriends[key].fName === uFName) {
            if (friendInfo.gameFriends[key].lName === uLName) {
                console.log("You have a friend with the same first and last name as you! What are the odds?")
                break;
            }
            console.log(friendInfo.gameFriends[key].fName + " " + friendInfo.gameFriends[key].lName +" has the same first name as you.");
        } else {
            break;
        }
    }
}
var myTowers = function() {
    var towers = 0;
    while (towers <= 3) {
        console.log("You earn the " + myUser.towerList[towers] + " tower at level " + myUser.towerLevel[towers]);
        towers ++;
    }
}
var friendCount = function() {
    var fCount = friendInfo.gameFriends.length;
    return fCount;
}
var nestedLoop = function() {
    for (i=0; i<5; i++) {
        for (z=0; z<2; z++) {
            console.log("i: " + i + " z: " + z);
        }
    }
}
var returnArray = function() {
    var myArray = ["Tower 1", 12, "Cannon"]
    return myArray;
}
var arrayFunction = function(arrayInput) {
    var myObject = new Object();
    myObject.name = arrayInput[0];
    myObject.level = arrayInput[1];
    myObject.type = arrayInput[2];
    return myObject;
}
// Output
console.log(myUser.lastLoggedInDays());
console.log(myUser.timeLogged(myUser.lastPlayed));
console.log(myUser.fName + ", You have " + friendCount() + " friends competing for the top spot.");
console.log(friendList(myUser.fName,myUser.lName));
console.log(myTowers());
console.log(nestedLoop());
console.log (arrayFunction(returnArray()));