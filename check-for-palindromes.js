function palindrome(str) {
  var str1 = str.replace(/[\W_]/g, '').toLowerCase();
  var str2 = str1.split('').reverse().join('');
  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
