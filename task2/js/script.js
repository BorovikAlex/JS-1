var temperatures = {
  belarus: 27,
  russia: 21,
  ukraine: 25,
  poland: 30,
  latvia: 29,
  lithuania: 22,
};

var sumTemp = function (temperatures) {
  var sum = 0;
  for (var key in temperatures) {
    sum += temperatures[key];
  }
  return sum;
};

var length = function (temperatures) {
  return Object.keys(temperatures).length;
};

middleSumm = sumTemp(temperatures) / length(temperatures);

var maxArr = Object.keys(temperatures).map(function (key) {
  return temperatures[key];
});
var max = Math.max.apply(null, maxArr);

document.getElementById("middleValue").value = middleSumm;

document.getElementById("maxValue").value = max;
