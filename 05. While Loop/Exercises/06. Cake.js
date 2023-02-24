function cake(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);

  let piecesCount = length * width;
  let index = 2;
  let arePiecesLeft = true;

  while (index < input.length) {
    let token = input[index];

    if (token == "STOP") {
      break;
    }

    let currPiece = Number(token);
    piecesCount -= currPiece;

    if (piecesCount <= 0) {
      arePiecesLeft = false;
      break;
    }
    index++;
  }

  if (arePiecesLeft) {
    console.log(`${piecesCount} pieces are left.`);
  } else {
    console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
  }
}