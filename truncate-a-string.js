
function truncateString(str, num) {
    if ((str.length <= 3) || (num <= 3)) {
        return str.substr(0, num) + '...';
    }

    if (str.length <= num - 3) {
        return str.substr(0, num - 3) + '...';
    }

    if ((str.length > num - 3) && (str.length <= num)) {
        return str;
    }

    if (str.length > num) {
        return str.substr(0, num - 3) + '...';
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
