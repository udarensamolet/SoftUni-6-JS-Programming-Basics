function onTimeForExam(input) {
  let hourExam = Number(input[0]);
  let minExam = Number(input[1]);
  let hourArr = Number(input[2]);
  let minArr = Number(input[3]);

  let timeExam = hourExam * 60 + minExam;
  let timeArr = hourArr * 60 + minArr;
  let timeDiff = timeExam - timeArr;

  if (timeExam == timeArr) {
    console.log(`On time`);
  } else if (timeDiff <= 30 && timeDiff > 0) {
    console.log(`On time`);
    console.log(`${timeDiff} minutes before the start`);

  } else if (timeDiff > 30 && timeDiff < 60) {
    console.log(`Early`);
    console.log(`${timeDiff} minutes before the start`);
  } else if (timeDiff == 60) {
    console.log(`Early`);
    console.log(`${Math.floor(timeDiff / 60)}:00 hours before the start`);
  } else if (timeDiff > 60) {
    console.log(`Early`);
    if (timeDiff - (60 * Math.floor(timeDiff / 60)) < 10) {
      console.log(
        `${Math.floor(timeDiff / 60)}:0${
          timeDiff - 60 * Math.floor(timeDiff / 60)
        } hours before the start`
      );
    } else {
      console.log(
        `${Math.floor(timeDiff / 60)}:${
          timeDiff - 60 * Math.floor((timeDiff / 60))
        } hours before the start`
      );
    }

  } else if (timeDiff < 0 && timeDiff > -60) {
    console.log(`Late`);
    console.log(`${Math.abs(timeDiff)} minutes after the start`);
  } else if (timeDiff == -60) {
    console.log(`Late`);
    console.log(`1:00 hours after the start`);
  } else if (timeDiff < -60) {
    let timeDiffAbs = Math.abs(timeDiff);
    console.log(`Late`);
    if (timeDiffAbs - 60 * Math.floor(timeDiffAbs / 60) < 10) {
      console.log(
        `${Math.floor(timeDiffAbs / 60)}:0${
          timeDiffAbs - 60 * Math.floor(timeDiffAbs / 60)
        } hours after the start`
      );
    } else {
      console.log(
        `${Math.floor(timeDiffAbs / 60)}:${
          timeDiffAbs - 60 * Math.floor(timeDiffAbs / 60)
        } hours after the start`
      );
    }
  }
}
