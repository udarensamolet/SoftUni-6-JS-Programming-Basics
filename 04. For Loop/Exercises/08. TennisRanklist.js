function tenisRanklist(input) {
  let tournaments = Number(input[0]);
  let pointsStart = Number(input[1]);

  let finalPoints = pointsStart;
  let averagePoints = 0;
  let sumPoints = 0;
  let tournamentsWonCount = 0;

  for (let i = 2; i < input.length; i++) {
    let place = input[i];
    if (place == "W") {
      finalPoints += 2000;
      sumPoints += 2000;
      tournamentsWonCount++;
    } else if (place == "F") {
      finalPoints += 1200;
      sumPoints += 1200;
    } else if (place == "SF") {
      finalPoints += 720;
      sumPoints += 720;
    }
  }
  averagePoints = Math.floor(sumPoints / tournaments);
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  console.log(`${(tournamentsWonCount / tournaments * 100).toFixed(2)}%`);
}

tenisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"]);