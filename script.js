let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
start = document.getElementById("start");
var resume = false;
var interval;
stop.setAttribute("hidden", true);
reset.setAttribute("hidden", true);
let time = () => {
  let hour = document.getElementById("hr");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let count = document.getElementById("count");
  count.innerHTML = parseInt(count.innerHTML) + 1;
  if (count.innerHTML == 100) {
    sec.innerHTML = parseInt(sec.innerHTML) + 1;
    count.innerHTML = 00;
  }
  if (sec.innerHTML == 60) {
    min.innerHTML = parseInt(min.innerHTML) + 1;
    sec.innerHTML = 00;
  }
  if (min.innerHTML == 60) {
    hour.innerHTML = parseInt(hour.innerHTML) + 1;
    min.innerHTML = 00;
  }
};

let watch = () => {
  interval = setInterval(time, 10);
  start.setAttribute("hidden", true);
  stop.removeAttribute("hidden");
  reset.removeAttribute("hidden");
  console.log("watch");
};

let stopFun = () => {
  if (resume == true) {
    interval = setInterval(time, 1);
    stop.innerHTML = "Stop";
    resume = false;
  } else {
    clearInterval(interval);
    resume = true;
    stop.innerHTML = "Resume";
  }
};

let resetFun = () => {
  clearInterval(interval);
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  stop.setAttribute("hidden", true);
  reset.setAttribute("hidden", true);
  start.removeAttribute("hidden");
  resume = false;
  stop.innerHTML = 'Stop'
  console.log("remove");
};

start.addEventListener("click", watch);
stop.addEventListener("click", stopFun);
reset.addEventListener("click", resetFun);
