function displayOurTime(){
    let date = new Date();
    let timeHour = date.getHours();
    let timeMinute = date.getMinutes();
    let timeSecond = date.getSeconds();

    if(timeHour >= 12){
        document.querySelector(".time_session").innerHTML = "PM"
    } else{
        document.querySelector(".time_session").innerHTML = "AM"
    }


    if(timeHour > 12){
        timeHour = timeHour -12;
    }
    document.querySelector(".hour").innerHTML = timeHour;
    document.querySelector(".minutes").innerHTML = timeMinute;
    document.querySelector(".seconds").innerHTML = timeSecond;

}

setInterval(displayOurTime,10)