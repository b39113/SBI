// Boyd Tiffin
// SDI 1307
// Project 4
// Keep it coming!!

// Does a string follow a 123-456-7890 pattern like a phone number?
var phoneNumber = function(pNumber) {
    var pNumDash = pNumber[3] += pNumber[7];
    var pNumDigit = pNumber[0] += pNumber[1] += pNumber[2] += pNumber[4] += pNumber[5] += pNumber[6] += pNumber[8] += pNumber[9] += pNumber[10] += pNumber[11];
    pNumDigit = isNaN(pNumDigit);
    if (pNumber.length === 12) {
        if (pNumDash === "--") {
            if (pNumDigit === false) {
                var pNumValid = true;
            } else {
                var pNumValid = false;
            }
        } else {
            var pNumValid = false;
        }
    }else{
        var pNumValid = false;
    }
    return pNumValid;
}
console.log(phoneNumber("123-123-1234"));

// Does a string follow an aaa@bbb.ccc pattern like an email address?
var emailValid = function(myEmail) {
    var at = myEmail.indexOf("@");
    var emailName = myEmail.substring(0,at);
    var startDomain = myEmail.lastIndexOf(".")+1;
    var emailEnd = myEmail.length;
    var emailDomain = myEmail.substring(startDomain,emailEnd);
    if (at >=1) {
        if (startDomain >=3) {
            if ((emailEnd - startDomain) >= 2) {
                var emailPassed = true;
            } else {
                var emailPassed = false;
            }
        } else {
            var emailPassed = false;
        }
    } else {
        var emailPassed = false;
    }
    return emailPassed;
}
console.log(emailValid("aaa@bbb.com"));

// Is the string a URL http:// or https:// - return Boolean
var webPage = function(pageString) {
    var end = pageString.indexOf(":");
    var checkPro = pageString.substring(0,end);
    if (checkPro === "http" || checkPro === "https") {
        var validUrl = true;
    } else {
        var validUrl = false;
    }
    return validUrl;
}
console.log(webPage("http://www.ddd.com")); // This is not case specific

// Input String, change the first letter of each word to be uppercase, return string
var caseString = function(myString) {
    var stringArray = myString.substring(0,myString.length);
    var myNewString = "";
    for (k=0; k<myString.length; k++) {
        if (k === 0) {
            myNewString += stringArray[k].toUpperCase();
        } else if (space === true) {
            myNewString += stringArray[k].toUpperCase();
            space = false;
        } else if (stringArray[k] == " ") {
            var space = true;
            myNewString += stringArray[k];
        } else {
            myNewString += stringArray[k].toLowerCase();
        }
    }
    return myNewString;
}
console.log(caseString("tHIS is a TEST sTRING"));

// Change string from "a,b,c" + "," + "/" --> "a/b/c"

// Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10
var decimalCreate = function(longNum,decNum) {
    var decimalNumber = Math.round(longNum*(Math.pow(10,decNum)))/(Math.pow(10,decNum));
    return decimalNumber;
}
console.log(decimalCreate(3.123412,9));

// Fuzzy-match a number: is the number above or below a number within a certain percent?
var fuzzyMath = function(num1,num2,num3) {
    if (num1 < num2) {
        var fuzzyMathString = num1 + " is less than " + num2;
    } else if (num2 < num1) {
        var fuzzyMathString = num2 + " is less than " + num1;
    } else {
        var fuzzyMathString = num1 + " and " + num2 + " are equal";
    }
    // Determine if num1 is within num3% of num2
    if (num1 <= (num2 * (num3/100))) {
        fuzzyMathString += " and " + num1 + " is within " + num3 + "% of " + num2;
    } else {
        fuzzyMathString += " and " + num1 + " is not within " + num3 + "% of " + num2;
    }
    return fuzzyMathString;
}
console.log(fuzzyMath(25,50,50));

// Find the number of hours or days difference between two dates
var timeDiff = function(date1,date2,format) {
    date1 = Date.parse(date1);
    date2 = Date.parse(date2);
    var dateDiff = (date2 - date1);
    if (format === "Hour") {
        dateDiff = dateDiff/(1000*60*60) + " Hours";
    } else {
        dateDiff = dateDiff/(1000*60*60*24) + " Days";
    }
    return dateDiff;

}
console.log(timeDiff("3/1/2013","3/2/2014","Hour"));

// Given a string version of a number, such as �42�, return the value as an actual Number data type
var stringToNum = function(numString) {
    var validNum = Number(numString);
    if (isNaN(validNum)) {
        validNum = "\"" + numString + "\" is not a valid number";
    } 
    return validNum;
}
console.log(stringToNum("25"));


// Find the smallest value in an array than is greater than a given number.
var smallValue = function(array,myNum) {
    array.sort(function(a,b){return a-b})
    var mySortedNum = new Array();
    var n=0;
    for (k=0; k<array.length; k++) {
        if (array[k] > myNum) {
            mySortedNum[n] = array[k];
            n++;
        }
    } return mySortedNum[0];
}
console.log(smallValue([1,4,7,8,10,14,15],5));

// Find the total value of just the numbers in an array
var numTotal = function(numArray) {
    var addNumber = 0;
    for (k=0; k<numArray.length; k++) {
        if (typeof(numArray[k]) === "number") {
            addNumber += numArray[k];
        }
    
    }
    return addNumber;
}
console.log(numTotal([1, "pickles", 3, "onions", 5, "10", 6, "SDI", 6,7,"666"]));





