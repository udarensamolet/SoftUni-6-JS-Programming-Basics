function summerOutfit(input) {
  let degrees = Number(input[0]);
  let timeOfDay = input[1];

  let outfit = null;
  let shoes = null;
  if (timeOfDay == "Morning") {
    if (degrees >= 10 && degrees <= 18) {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees >= 25) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  } else if (timeOfDay == "Afternoon") {
    if (degrees >= 10 && degrees <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (degrees >= 25) {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    }
  } else if (timeOfDay == "Evening") {
    if (degrees >= 10 && degrees <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees >= 25) {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
