function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);

  let studioPrice = 0;
  let apartmentPrice = 0;

  if (month == "May" || month == "October") {
    studioPrice = 50 * nights;
    if (nights > 7 && nights <= 14) {
      studioPrice -= studioPrice * 0.05;
    } else if (nights > 14) {
      studioPrice -= studioPrice * 0.3;
    }
    apartmentPrice = 65 * nights;
  } else if (month == "June" || month == "September") {
    studioPrice = 75.2 * nights;
    if (nights > 14) {
      studioPrice -= studioPrice * 0.2;
    }
    apartmentPrice = 68.7 * nights;
  } else if (month == "July" || month == "August") {
    studioPrice = 76 * nights;
    apartmentPrice = 77 * nights;
  }

  if (nights > 14) {
    apartmentPrice -= apartmentPrice * 0.1;
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
