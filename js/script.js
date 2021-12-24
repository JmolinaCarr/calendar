var btn9 = $("#btn9");

var currentDay = document.getElementById("currentDay");
setInterval(() => {
    var now = moment();
    var actualTime = now.format("MMMM Do YYYY, h:mm:ssA");
    currentDay.textContent = actualTime;
}, 1000);

var buttonEl = document.querySelector("#btn");
buttonEl.addEventListener("click", function(saveTasks) {
});

//save item to local storage
var saveTasks = function() {
localStorage.setItem("#btn9", JSON.stringify(btn9));
console.log(localStorage);
}
