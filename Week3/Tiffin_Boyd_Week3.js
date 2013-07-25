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
var friendList = function(uName) {
    for (var key in friendInfo.gameFriends) {
        if (friendInfo.gameFriends[key].fName === myUser.fName) {
            console.log(friendInfo.gameFriends[key].fName + " is ahead of you at level " + friendInfo.gameFriends[key].curLevel);
        } else {
            console.log(friendInfo.gameFriends[key].fName + " is behind you at level " + friendInfo.gameFriends[key].curLevel);
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
// Output
console.log(myUser.lastLoggedInDays());
console.log(myUser.timeLogged(myUser.lastPlayed));
console.log(myUser.fName + ", You have " + friendCount() + " friends competing for the top spot.");
console.log(friendList(myUser.fName));
console.log(myTowers());