function getTimeOrDay() {
  const days = document.querySelector(".day");
  const times = document.querySelector(".time");
  let today = new Date();
  let day = today.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let second = today.getSeconds();

  const display = `${hour}:${minutes}:${second}`;

  days.innerHTML = daylist[day];
  times.innerHTML = display;
}
setInterval(() => {
  getTimeOrDay();
}, 1);
