const timerDays = document.getElementById('days')
const timerHours = document.getElementById('hours')
const timerMinutes = document.getElementById('minutes')
const timerSeconds = document.getElementById('seconds')

const targetDate = new Date("April 9 2025 00:00:00").getTime()

function timeCount(){
    const currentDate = new Date().getTime()
    const distance = targetDate - currentDate

    const days = Math.floor(distance / 1000 / 60 / 60 / 24)
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24
    const minutes = Math.floor(distance / 1000 / 60) % 60
    const seconds = Math.floor(distance / 1000) % 60

    timerDays.innerHTML = days
    timerHours.innerHTML = hours
    timerMinutes.innerHTML = minutes
    timerSeconds.innerHTML = seconds

    if(distance < 0){
        timerDays.innerHTML = "00"
        timerHours.innerHTML = "00"
        timerMinutes.innerHTML = "00"
        timerSeconds.innerHTML = "00"
    }
}

setInterval(timeCount, 1000)