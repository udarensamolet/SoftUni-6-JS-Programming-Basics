function building(input) {
  let floor = Number(input[0]);
  let rooms = Number(input[1]);
  let floorString = "";

  if (floor == 1) {
    for (let j = 0; j < rooms; j++) {
      floorString += `L1${j} `;
    }
  }

  for (let i = floor; i >= 1; i--) {
    floorString = "";
    for (let j = 0; j < rooms; j++) {
      if (i == floor) {
        floorString += `L${i}${j} `;
      } else {
        if (i % 2 == 0) {
            floorString += `O${i}${j} `
        } else {
            floorString += `A${i}${j} `
        }
      }
    }
    console.log(floorString);
  }
}

building(["1", "9"]);
