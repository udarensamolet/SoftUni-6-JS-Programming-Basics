function worldSwimmingRecord(input){
     let recordInSeconds = Number(input[0]);
     let distanceInMeters = Number(input[1]);
     let timeInSecondsFor1Meter = Number(input[2]);

     let swimmerTime = distanceInMeters * timeInSecondsFor1Meter;
     let secondsToBeAdded = Math.floor(distanceInMeters / 15) * 12.5;
     swimmerTime += secondsToBeAdded;

     if (swimmerTime < recordInSeconds) {
         console.log(`Yes, he succeeded! The new world record is ${swimmerTime.toFixed(2)} seconds.`);
     } else {
         console.log(`No, he failed! He was ${(swimmerTime - recordInSeconds).toFixed(2)} seconds slower.`);
     }
}

