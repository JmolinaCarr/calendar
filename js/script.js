var currentDay = document.getElementById("currentDay");
setInterval(() => {
    var now = moment();
    var actualTime = now.format("MMMM Do YYYY, h:mm:ssA");
    currentDay.textContent = actualTime;
}, 1000);