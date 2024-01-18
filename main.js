let targetDate = new Date("Jan 19, 2024 09:30:00").getTime();
let countdown = setInterval(function(){
    let todayDate = new Date().getTime();
    let difference = targetDate - todayDate;
    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    
    document.getElementById("ore").textContent = hours;
    document.getElementById("minuti").textContent = minutes;
    document.getElementById("secondi").textContent = seconds;

    if (difference < 0){
        clearTimeout(countdown);
        document.getElementById("ore").textContent = "00";
        document.getElementById("minuti").textContent = "00";
        document.getElementById("secondi").textContent = "00";

    }
},1000)




