// start coding your function here!
//a function that returns "It is late!"
//if that time is at or after 10:00 pm,
//and "It is still early!" if it is not.
function running_late(date) {
  var time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  if (time >= "22:00:00") {
    return "It is late!";
  } else {
    return "It is still early!";
  }
}

exports.running_late = running_late;
