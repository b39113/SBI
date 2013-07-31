// Boyd Tiffin
// SDI 1307
// Project 4
// Keep it coming!!

// String Manipulation Functions

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

// aaa@bbb.ccc String Validation
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





