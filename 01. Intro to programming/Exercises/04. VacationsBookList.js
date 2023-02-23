function vacationBooksList(input){
    let pagesInCurrentBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let timePerBook = pagesInCurrentBook / pagesPerHour;
    let neededHoursPerDay = timePerBook / daysCount;
    
    console.log(neededHoursPerDay);
}