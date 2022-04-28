const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const deadLine = document.querySelector(".date-information")
const countDown = document.querySelectorAll(".count-down h2")
const countDownContainer = document.querySelector(".count-down")
let futureDate = new Date(2022,3, 28)



const subtitleMonth = MONTHS[futureDate.getMonth()]
const subtitleYear = futureDate.getUTCFullYear()
const subtitleDayWeek = WEEK[futureDate.getDay()]
const subtitleDayNumber = futureDate.getDate()
const subtitileHour = futureDate.getHours()



deadLine.textContent = `Giveaway Ends On ${subtitleDayWeek}, ${subtitleDayNumber} ${subtitleMonth} ${subtitleYear} ${subtitileHour} am`

function getRemainingTime(){
    let today = new Date().getTime()
    let giveAwayTime = futureDate.getTime() - today  

    let oneDay = 24 * 60 * 60 * 1000
    let oneHour = 60 * 60 * 1000
    let oneMinute = 60 * 1000
    let oneSecond = 1000

    let days = (giveAwayTime / oneDay)
    let hours = (giveAwayTime % oneDay) / oneHour
    let minute = (giveAwayTime % oneHour) / oneMinute
    let second = (giveAwayTime % oneMinute) / oneSecond

    const giveAwayDate = [days, hours, minute, second]
    if(days < 0){
        clearInterval(Counter)
        countDownContainer.innerHTML = `<h2> the countdown's over </h2>`
    }

    countDown.forEach((item, index) =>{
        item.textContent = (Math.floor(giveAwayDate[index]) < 10 ?  `0${Math.floor(giveAwayDate[index])}`: Math.floor(giveAwayDate[index]))
    })
}

const Counter = setInterval(() => {
    getRemainingTime()
}, 1000);

