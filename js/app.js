const marriageDate = "11 November 2021";
const daysDiv = document.getElementById("countDown__days")
const hoursDiv = document.getElementById("countDown__hours")
const minutesDiv = document.getElementById("countDown__minutes")
const secondsDiv = document.getElementById("countDown__seconds")

function countDown(){
    const marriageDay = new Date(marriageDate);
    const currentDay = new Date();

    const totalDay = (marriageDay - currentDay)/1000;

    const days = Math.floor((totalDay / 3600 / 24));
    const hours = Math.floor(totalDay / 3600) % 24;
    const minutes = Math.floor(totalDay / 60) % 60;
    const seconds = Math.floor(totalDay % 60);

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;
    console.log(days, hours,minutes, seconds);
}
countDown();
setInterval(countDown, 1000);