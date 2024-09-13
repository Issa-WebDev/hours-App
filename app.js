const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

function updateTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hoursText.textContent = String(hours).padStart(2, "0");
  minutesText.textContent = String(minutes).padStart(2, "0");
  secondsText.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateTime, 1000);
