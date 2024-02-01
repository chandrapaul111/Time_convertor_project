let convertBtnEl = document.getElementById("convertBtn");
convertBtn.addEventListener("click", function() {
    var hours = parseInt(document.getElementById('hoursInput').value);
    var minutes = parseInt(document.getElementById('minutesInput').value);
    var seconds = (hours * 60 + minutes) * 60;
    console.log(hours);
    var showSeconds = document.getElementById("timeInSeconds");
    var showError = document.getElementById("errorMsg");
    if (isNaN(hours) || isNaN(minutes)) {
        showError.textContent += "Error!!! Please enter any value";
    } else {
        showSeconds.textContent = "the number in seconds " + seconds;
    }
});