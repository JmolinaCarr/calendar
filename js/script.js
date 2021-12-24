var currentTime = document.getElementById("currentTime");
setInterval(() => {
    var now = moment();
    var actualTime = now.format("h:mm:ssA");
    currentTime.textContent = actualTime;
}, 1000);