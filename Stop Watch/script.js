const startStopBtn = document.getElementById('startStopBtn')
const resetBtn = document.getElementById('restartBtn')
let laptime = document.getElementsByClassName('showPauseTime')[0]
let time = document.getElementById('timer')

let milliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0

let leadingMilliSeconds = 0
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

let timeInterval = null
let timerStatus = 'stopped'
let list = []

function stopWatch(){

    milliseconds++

    if(milliseconds / 60 === 1){
        milliseconds = 0
        seconds++
        
        if(seconds / 60 === 1){
            seconds = 0
            minutes++
    
            if(minutes / 60 === 1){
                minutes = 0
                hours++ 
            }
        }
    }

    if(milliseconds < 10){
        leadingMilliSeconds = '0' + milliseconds.toString()
    }else{
        leadingMilliSeconds = milliseconds
    }

    if(seconds < 10){
        leadingSeconds = '0' + seconds.toString()
    }else{
        leadingSeconds = seconds
    }

    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString()
    }else{
        leadingMinutes = minutes
    }

    if(hours < 10){
        leadingHours = '0' + hours.toString()
    }else{
        leadingHours = hours
    }

    let displayTimer = document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}:${leadingMilliSeconds}`
}


startStopBtn.addEventListener('click', ()=> {

    if(timerStatus === 'stopped') {
        timeInterval = window.setInterval(stopWatch, 100)
        document.getElementById('startStopBtn').innerHTML = `<i class='fa-solid fa-pause' id='pause'></i>`
        timerStatus = 'started'
        list = []

    }
    else{
        window.clearInterval(timeInterval)
        document.getElementById('startStopBtn').innerHTML = `<i class='fa-solid fa-play' id='play'></i>`
        timerStatus = 'stopped'
        
        list.push(time.innerText)
        
        console.log(list)

        for(i=0; i<list.length; i++){
            let li = document.createElement('li')
            li.appendChild(document.createTextNode(list[i]));
            laptime.appendChild(li);
            
        }

        // console.log(laptime.innerText);
    }
})

resetBtn.addEventListener('click', ()=> {

    console.log('stopped');
    window.clearInterval(timeInterval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0

    list = []
    laptime.innerText = ''

    document.getElementById('startStopBtn').innerHTML = `<i class='fa-solid fa-play' id='play'></i>`
    timerStatus = 'stopped'

    document.getElementById('timer').innerText = `00:00:00:00`
})