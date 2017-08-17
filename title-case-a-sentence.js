function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
  }
  str = arr.join(' ');

  return str;
}

titleCase("I'm a little tea pot");
