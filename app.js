function displayOurTime(){
    let date = new Date();
    let timeHour = date.getHours();
    let timeMinute = date.getMinutes();
    let timeSecond = date.getSeconds();
    if(timeHour >= 12){
        document.querySelector(".time_session").innerHTML = "PM";
        document.querySelector(".watch").style.color = "#000000"
        document.querySelector("body").style.background = "#ffffff"
    } else{
        document.querySelector(".time_session").innerHTML = "AM"
        document.querySelector(".watch").style.color = "#ffffff"
        document.querySelector("body").style.background = "#000000"
    }


    if(timeHour > 12){
        timeHour = timeHour -12;
    }
    document.querySelector(".hour").innerHTML = timeHour;
    document.querySelector(".minutes").innerHTML = timeMinute;
    document.querySelector(".seconds").innerHTML = timeSecond;

}

setInterval(displayOurTime,10)