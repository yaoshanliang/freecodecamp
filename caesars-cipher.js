
function rot13(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {

        var x = arr[i].charCodeAt(0);

        if ((x < 65) || (x > 90)) {
            arr[i] = String.fromCharCode(x);
        } else if (arr[i].charCodeAt(0) < 78) {
            arr[i] = String.fromCharCode(x + 13);
        } else {
            arr[i] = String.fromCharCode(x - 13);
        }
    }

    return arr.join('');
}

rot13("SERR PBQR PNZC");
