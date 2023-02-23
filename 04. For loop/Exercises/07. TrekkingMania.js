function trekkingMania(input) {
  let groupsCount = Number(input[0]);

  let musala = 0;
  let monblanc = 0;
  let kilimanzharo = 0;
  let k2 = 0;
  let everest = 0;

  let totalCount = 0;

  for (let i = 1; i < input.length; i++) {
    let group = Number(input[i]);
    if (group <= 5) {
      musala += group;
    } else if (group >= 6 && group <= 12) {
      monblanc += group;
    } else if (group >= 13 && group <= 25) {
      kilimanzharo += group;
    } else if (group >= 26 && group <= 40) {
      k2 += group;
    } else if (group >= 41) {
      everest += group;
    }
    totalCount += group;
  }

  console.log(`${((musala / totalCount) * 100).toFixed(2)}%`);
  console.log(`${((monblanc / totalCount) * 100).toFixed(2)}%`);
  console.log(`${((kilimanzharo / totalCount) * 100).toFixed(2)}%`);
  console.log(`${((k2 / totalCount) * 100).toFixed(2)}%`);
  console.log(`${((everest / totalCount) * 100).toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
;
