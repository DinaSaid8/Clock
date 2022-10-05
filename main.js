let hourHand = document.querySelector(".hourHand");
let minHand = document.querySelector(".minHand");
let secHand = document.querySelector(".secHand");
function setDate() {
    const now = new Date();
    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = (getSecond / 60) * 360 + 90;
    const minuteDegree = ((getMinute / 60) * 360) + ((getSecond / 60) * 6) + 90;
    const hourDegree = ((getHour / 12) * 360) + ((getMinute / 60) * 30) + 90;

    secHand.style.transform = `rotate(${secondDegree}deg)`;
    minHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    // date
    var dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        day = now.getDate();

    var currentDate = dow[now.getDay()] + ", "
        + month[now.getMonth()] + " " + day;
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

setInterval(setDate, 1000);

