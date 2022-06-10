// start coding your function here!
// Create a function find_max(arr) that takes in an array as a parameter and returns the element with the maximum value in the array.
// Examples:
// find_max([1,2,3,4,5]) // 5
// find_max([-1,-2,-3,-4,-5]) // -1
// find_max([0,0,0,0,0]) // 0
function find_max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
exports.find_max = find_max;
