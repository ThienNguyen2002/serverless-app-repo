// start coding your function here!
// Create a function running_late(date) in JavaScript that returns It is late! if the time is at or after 10:00 PM, and It is still early! if it is not.
function running_late(date) {
  var time = new Date(date).getHours();
  if (time >= 22) {
    return "It is late!";
  } else {
    return "It is still early!";
  }
}
exports.running_late = running_late;
