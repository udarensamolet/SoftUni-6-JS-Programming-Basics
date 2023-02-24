function cinemaTickets(input) {
  let studentTicketsCount = 0;
  let standardTicketsCount = 0;
  let kidTicketsCount = 0;
  let currMovieTicketsCount = 0;

  let nameCurrMovie = "";
  let seatsCurrMovie = 0;

    let index = 0;
    while (true){
        let token = input[index];
        if (token == "Finish"){
            break;
        }

        if (isNaN(token) && !isNaN(input[index + 1])) {
            nameCurrMovie = token;
            seatsCurrMovie = Number(input[index + 1]);
            currMovieTicketsCount = 0;
            index++;
        } else if (isNaN(token) && isNaN(input[index + 1])){
            if (token == "End"){
                console.log(`${nameCurrMovie} - ${(currMovieTicketsCount / seatsCurrMovie * 100).toFixed(2)}% full.`);
                index++;
                continue;
            }


            if (token == "standard"){
                standardTicketsCount++;
            } else if (token == "student"){
                studentTicketsCount++;
            } else if (token == "kid"){
                kidTicketsCount++;
            }
            currMovieTicketsCount++;
            if (currMovieTicketsCount == seatsCurrMovie){
                console.log(`${nameCurrMovie} - ${(currMovieTicketsCount / seatsCurrMovie * 100).toFixed(2)}% full.`);
                index++;
                continue;
            }
        }
        index++;
    }
    let totalTicketsCount = studentTicketsCount + standardTicketsCount + kidTicketsCount;
    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${(studentTicketsCount / totalTicketsCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketsCount / totalTicketsCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicketsCount / totalTicketsCount * 100).toFixed(2)}% kids tickets.`);
}