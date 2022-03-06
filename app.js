let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm")
window.addEventListener("load", starttime);

function starttime () {
    let realhour = new Date().getHours();
    let realminute = new Date().getMinutes();
    let realsecond = new Date().getSeconds();


    hour.innerHTML = realhour.toString().padStart(2, "0")
    minute.innerHTML = realminute.toString().padStart(2, "0")
    second.innerHTML = realsecond.toString().padStart(2, "0")
    if(realhour < 12) {
        ampm.innerHTML = "AM";
    }
    else {
        ampm.innerHTML = "PM"
    }

    setInterval(starttime, 1000)
}
    