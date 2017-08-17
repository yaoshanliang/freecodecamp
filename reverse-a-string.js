function reverseString(str) {
  $arr = str.split("");
  $arr.reverse();

  return $arr.join("");
}

reverseString("hello");

