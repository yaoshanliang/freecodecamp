
function sumAll(arr) {
    var result = 0;
    for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
        result += i;
    }

    return result;
}

sumAll([1, 4]);
