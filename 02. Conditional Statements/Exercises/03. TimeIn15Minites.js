function timeIn15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMinutes = hours * 60 + minutes;
    let finalTimeInMinutes = timeInMinutes + 15;

    let hour = Math.floor(finalTimeInMinutes / 60);
    let minute = finalTimeInMinutes - (hour * 60);

    if (hour == 24){
        hour = 0;
    }
    if (minute < 10){
        console.log(`${hour}:0${minute}`);
    } else {
        console.log(`${hour}:${minute}`);
    }
}

timeIn15Minutes((["23", "59"]));