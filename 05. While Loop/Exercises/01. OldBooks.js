function oldBooks(input) {
  let book = input[0];

  let index = 1;
  let counter = 0;
  let found = false;
  while (index < input.length) {
    let currBook = input[index];
    if (currBook == "No More Books"){
        break;
    }
    if (currBook == book) {
      console.log(`You checked ${counter} books and found it.`);
      found = true;
      break;
    }
    counter++;
    index++;
  }
  if (!found){
      console.log(`The book you search is not here!`);
      console.log(`You checked ${counter} books.`);
  }

}