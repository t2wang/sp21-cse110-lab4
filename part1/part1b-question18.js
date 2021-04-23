var timerId;

let d = new Date();
let time = d.toLocaleTimeString();

function currentTime(){
    d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
}

timerId = setInterval(currentTime, 1000);
currentTime();
