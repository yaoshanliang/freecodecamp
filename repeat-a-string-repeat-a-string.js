
function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return '';
    } else {
        var returnStr = '';
        for (var i = 0; i < num; i++) {
            returnStr += str;
        }
        return returnStr;
    }
}

repeatStringNumTimes("abc", 3);
