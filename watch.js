// const stopwatchduration = document.getElementById("stopwatchduration"),
//     start = document.getElementById("start"),
//     lap = document.getElementById("lap"),
//     stop = document.getElementById("stop"),
//     reset = document.getElementById("reset"),
//     laps = document.getElementById("laps");

// let hrs = 0, mins = 0, sec = 0, ms = 0, timeInterval, lapCounter = 0;

// function zeroPad(num) {
//     return String(num).padStart(2, "0");
// }

// start.onclick = () => {
//     timeInterval = setInterval(() => {
//         ms++;
//         if (ms == 100) { sec++; ms = 0; }
//         if (sec == 60) { mins++; sec = 0; }
//         if (mins == 60) { hrs++; mins = 0; }

//         stopwatchduration.innerHTML = 
//         `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
//     }, 10);
//     start.style.display = "none";
//     stop.style.display = "block";
//     lap.style.display = "block";
//     reset.style.display = "none";
// };

// lap.onclick = () => {
//     lapCounter++;
//     const lapTime = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
//     const lapElement = document.createElement("li");
//     lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
//     laps.appendChild(lapElement);
//     console.log("lap");
// };

// stop.onclick = () => {
//     clearInterval(timeInterval);
//     console.log("stop");
//     stop.style.display = "none";
//     start.style.display = "block";
//     reset.style.display = "block";
//     lap.style.display = "none";
// };

// reset.onclick = () => {
//     clearInterval(timeInterval);
//     lap.setAttribute("style", "display:none");
//     stop.setAttribute("style", "display:none");
//     start.setAttribute("style", "display:block");
//     reset.setAttribute("style", "display:none");
//     start.innerHTML = "Start";
    
//     hrs = 0; mins = 0; sec = 0; ms = 0;
//     stopwatchduration.innerHTML = 
//         `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    
//     laps.innerHTML = ""; // Clear all lap times
//     lapCounter = 0;
    
//     console.log("reset");
// };







const stopwatchduration = document.getElementById("stopwatchduration"),
    start = document.getElementById("start"),
    lap = document.getElementById("lap"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    laps = document.getElementById("laps");

let hrs = 0, mins = 0, sec = 0, ms = 0, timeInterval, lapCounter = 0;

function zeroPad(num) {
    return String(num).padStart(2, "0");
}

start.onclick = () => {
    timeInterval = setInterval(() => {
        ms++;
        if (ms == 100) { sec++; ms = 0; }
        if (sec == 60) { mins++; sec = 0; }
        if (mins == 60) { hrs++; mins = 0; }

        stopwatchduration.innerHTML = 
        `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    }, 10);
    start.style.display = "none";
    stop.style.display = "block";
    lap.style.display = "block";
    reset.style.display = "none";
    start.innerHTML = "Resume"; // Update start button text to Resume after initial start
};

lap.onclick = () => {
    lapCounter++;
    const lapTime = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    const lapElement = document.createElement("li");
    lapElement.textContent = `Lap ${lapCounter}: ${lapTime}`;
    laps.appendChild(lapElement);
    console.log("lap");
};

stop.onclick = () => {
    clearInterval(timeInterval);
    console.log("stop");
    stop.style.display = "none";
    start.style.display = "block";
    reset.style.display = "block";
    lap.style.display = "none";
};

reset.onclick = () => {
    clearInterval(timeInterval);
    hrs = 0; mins = 0; sec = 0; ms = 0;
    stopwatchduration.innerHTML = 
        `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.innerHTML = ""; // Clear all lap times
    lapCounter = 0;
    
    lap.style.display = "none";
    stop.style.display = "none";
    start.style.display = "block";
    reset.style.display = "none";
    start.innerHTML = "Start"; // Reset start button text to Start
    console.log("reset");
};

























