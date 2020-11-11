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
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - timer[0] * 60);

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

btnStart.addEventListener("click", runTimer, false);
btnStop.addEventListener("click", stop, false);
btnReset.addEventListener("click", reset, false);
