
var sonnet = document.querySelector('.sonnet').innerText
console.log(sonnet);

var string = sonnet;
function strSplit(stringToSplit) {
  var arrayString = stringToSplit.split(' ');
  console.log(arrayString);
  return arrayString;
}

strSplit(sonnet);

strSplit(sonnet).forEach(function num(each) {
  console.log(each)
});










//Epic mode...
// function epic(str) {
//   return.str.replace(/[^qwertyuiopasdfghjklzxcvbnm " "])/gi, ''); //^ excludes, and the g makes it global, i will capitalize.
// }
// console.log(epic(sonnet));
