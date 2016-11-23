(function() {
  'use strict';

var sonnet = document.querySelector('.sonnet').innerText;

var wordCounter = {};
var counter = strSplit(sonnet).forEach(function countNum(count) {
    wordCounter[count] = (wordCounter[count]||0)+1;
});
function strSplit(stringToSplit) {
  var arrayString = stringToSplit.split(' ');
  return arrayString;
}
console.log(wordCounter);


}());


//Epic mode...
// function epic(str) {
//   return.str.replace(/[^qwertyuiopasdfghjklzxcvbnm " "])/gi, ''); //^ excludes, the "g" makes it global, "i" will capitalize the letters.
// }
// console.log(epic(sonnet));
