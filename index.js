// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset = document.querySelector('.btnReset');
const displayTime = document.querySelector('.timer');
// appDiv.innerHTML = `<h1>Stopwatch</h1>`;
var interval;
var timer = [0,0,0,0];

function zero(time){
  if(time<=9){
    time = "0" + time;
  }
  return time;
}

function run(){
  var curTime = zero(timer[0]) + ":" +zero(timer[1]) +":"+ zero(timer[2]);
  displayTime.innerHTML = curTime;
  timer[3]++; 

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - timer[0] * 6000);

}

function runTimer(){
  interval = setInterval(run, 10);
} 
function stop(){
  clearInterval(interval);
}
function reset(){
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  displayTime.innerHTML = "00:00:00";
}

function startVis(){
  btnStart.style.display = "none";
  btnStop.style.display = "inline-block";
  btnReset.style.display = "inline-block";
} 
function stopVis(){
  btnStop.style.display = "none";
  btnStart.style.display = "inline-block";

}
function resetVis(){
  btnStop.style.display = "none";
  btnReset.style.display = "none";
  btnStart.style.display = "inline-block";
}

btnStart.addEventListener("click", runTimer, false);
btnStart.addEventListener("click", startVis, false);
btnReset.addEventListener("click", resetVis, false);
btnStop.addEventListener("click", stopVis, false);
btnStop.addEventListener("click", stop, false);
btnReset.addEventListener("click", reset, false);
