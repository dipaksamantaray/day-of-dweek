let date = new Date();
let dayofweekNumber = date.getDay();
let nameofDay;
let quote;
switch (dayofweekNumber) {
  case 0:
    nameofDay = "sunday";
    quote = "Time to chilax";
    break;
  case 1:
    nameofDay = "monday";
    quote = "monday morning is blues!";
    break;
  case 2:
    nameofDay = "tuesday";
    quote = "Taco time";
    break;
  case 3:
    nameofDay = "wednesday";
    quote = "Two more days to the weekend";
    break;
  case 4:
    nameofDay = "Thursday";
    quote = "The weekend is almost here....";
    break;
  case 5:
    nameofDay = "friday";
    quote = "weekend is here";
    break;
  case 6:
    nameofDay = "saturday";
    quote = "Time to party!";
    break;
}

let weekdayDiv = document.getElementById("weekday");
weekdayDiv.innerHTML = `${nameofDay}`;

let quoteDiv = document.getElementById("phrase");
quoteDiv.innerHTML = `${quote}`;
