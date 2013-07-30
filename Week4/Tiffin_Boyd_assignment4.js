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