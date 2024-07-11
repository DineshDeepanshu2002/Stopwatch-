const stopwatchduration = document.getElementById("stopwatchduration"),
    start = document.getElementById("start"),
    lap = document.getElementById("lap"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    laps = document.getElementById("laps");

let hrs = 0, mins = 0, sec = 0, ms = 0, timeInterval;

start.onclick = () => {
    timeInterval = setInterval(() => {
        ms++;
        if (ms == 100) { sec++; ms = 0; }
        if (sec == 60) { mins++; sec = 0; }
        if (mins == 60) { hrs++; mins = 0; }

        stopwatchduration.innerHTML = 
        `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}
        :${zeroPad(ms)}`
    }, 10);
};



 console.zeroPad =(num) => {
    return String(num).padStart(2,"0")
 };



lap.onclick = () => {
    console.log("lap");

};

stop.onclick = () => {
    console.log("stop");

};

reset.onclick = () => {
    console.log("reset");

};



// const stopwatchduration = document.getElementById("stopwatchduration"),
//     start = document.getElementById("start"),
//     lap = document.getElementById("lap"),
//     stop = document.getElementById("stop"),
//     reset = document.getElementById("reset"),
//     laps = document.getElementById("laps");

// let hrs = 0, mins = 0, sec = 0, ms = 0, timeInterval;

// start.onclick = () => {
//     if (!timeInterval) {
//         timeInterval = setInterval(() => {
//             ms++;
//             if (ms == 100) { sec++; ms = 0; }
//             if (sec == 60) { mins++; sec = 0; }
//             if (mins == 60) { hrs++; mins = 0; }

//             stopwatchduration.innerHTML = 
//             `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`
//         }, 10);
//     }
// };

// function zeroPad(num) {
//     return String(num).padStart(2, "0");
// }

// lap.onclick = () => {
//     const lapTime = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
//     const lapElement = document.createElement("li");
//     lapElement.textContent = lapTime;
//     laps.appendChild(lapElement);
// };

// stop.onclick = () => {
//     clearInterval(timeInterval);
//     timeInterval = null;
// };

// reset.onclick = () => {
//     clearInterval(timeInterval);
//     timeInterval = null;
//     hrs = 0; mins = 0; sec = 0; ms = 0;
//     stopwatchduration.innerHTML = "00:00:00:00";
//     laps.innerHTML = "";
// };











































