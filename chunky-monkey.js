
function chunkArrayInGroups(arr, size) {
    var j = -1;
    var returnArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % size == 0) {
            j++;
            returnArr[j] = [];
        }
        returnArr[j].push(arr[i]);
    }

    return returnArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
