// start coding your function here!
//a function that returns "It is late!"
//if that time is at or after 10:00 pm,
//and "It is still early!" if it is not.
function running_late(date) {
  date.toLocaleTimeString("it-IT");
  if (date >= "22:00:00") {
    return "It is late!";
  } else {
    return "It is still early!";
  }
}

console.log(running_late("December 17, 1995 21:24:00"));
exports.running_late = running_late;
