function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, target.length) == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
