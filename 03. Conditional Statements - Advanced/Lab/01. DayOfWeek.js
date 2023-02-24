function dayOfWeek(input) {
  let day = Number(input[0]);
  let dayWords = null;
  switch (day) {
    case 1:
      dayWords = "Monday";
      break;
    case 2:
      dayWords = "Tuesday";
      break;
    case 3:
      dayWords = "Wednesday";
      break;
    case 4:
      dayWords = "Thursday";
      break;
    case 5:
      dayWords = "Friday";
      break;
    case 6:
      dayWords = "Saturday";
      break;
    case 7:
      dayWords = "Sunday";
      break;
    default:
      dayWords = "Error";
      break;
  }
  console.log(dayWords);
}
