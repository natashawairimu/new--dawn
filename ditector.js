function speedDetector() {
    const prompt = require("prompt-sync")();
    let speed = prompt("Enter car speed (km/h): ");
    speed = Number(speed); 
  
    if (isNaN(speed) || speed < 0) {
      console.log("Invalid speed! Please enter a valid number.");
      return;
    }
  
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      let points = Math.floor((speed - speedLimit) / kmPerPoint);
  
      if (points > 12) {
        console.log(`License suspended: You have ${points - 12} points excess`);
      } else {
        console.log(`Points: ${points}`);
      }
    }
  }
  
  speedDetector();