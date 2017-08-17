function largestOfFour(arr) {
    var maxArr = [];
    for (var i = 0; i < arr.length; i++) {
        var maxNumber = arr[i][0];
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > maxNumber) {
                maxNumber = arr[i][j];
            }
        }

        maxArr.push(maxNumber);
    }

    return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
