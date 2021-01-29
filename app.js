const start = document.querySelector(".start");
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const hrs =  document.querySelector('#hrs');
const mins =  document.querySelector('#mins');
const sec =  document.querySelector('#sec');
// console.log(hrs,mins,sec);
let hours = 00,minutes = 00,seconds = 00;
let flag = false,flag2 = false;
 let timeInterval;

const timeShow = () => {
    hrs.innerHTML = hours;
    mins.innerHTML = minutes;
    sec.innerHTML = seconds;
}

const timeCalc = () => {
    seconds += 1;
    minutes += Math.floor(seconds/60);
    seconds %= 60;
    hours += Math.floor(minutes/60);
    minutes %= 60;
    timeShow();
}

const handleStart = () => {
    if(!flag2) handleReset();
    timeInterval = setInterval(
        timeCalc,1000
    );
}
const handleStop = () => {
    flag = !flag;
    if(flag) {
        clearInterval(timeInterval);
        stop.innerHTML = 'resume';
        stop.classList.add('red');
    } else {
        flag2 = true;
        stop.innerHTML = 'stop';
        stop.classList.remove('red');
        handleStart();
    }
}
const handleReset = () => {
    clearInterval(timeInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    flag = false;
    flag2 = false;
    stop.classList.remove('red');
    timeShow();
}
start.addEventListener('click',handleStart);

stop.addEventListener('click',handleStop);

reset.addEventListener('click',handleReset);
