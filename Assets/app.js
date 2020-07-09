var sw = document.getElementById('stopWatch');
var rec = document.getElementById('records');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var msec = document.getElementById('msec');
var m = 0
var s = 0
var ms = 0
var btnStart = document.getElementById('btnStart')
var btnStop = document.getElementById('btnStop')
var btnReset = document.getElementById('btnReset')
var btnSaveTime = document.getElementById('btnSaveTime');
var saveTimeForm = document.getElementById('saveTimeForm');
var count = 0;
var nam = document.getElementById('nam')
var time = document.getElementById('time')
var timeRec = []
var interval;



function showStopWatch(){
    sw.style.display = 'block';
    rec.style.display = 'none'
}

function showRecords(){
    sw.style.display = 'none';
    rec.style.display = 'block'
}

function start(){
    interval =  setInterval(()=>{
        msec.innerHTML = ms
        ms++
        if(ms == 100){
            ms = 0
            s++
            sec.innerHTML = s
        }
        else if(s == 5){
            s = 0
            m++
            sec.innerHTML = s+1
            min.innerHTML = m
        }
    },10)
    console.log(btnStart)
    btnStart.setAttribute('disabled', 'disabled')
    btnStop.removeAttribute('disabled')
    btnReset.removeAttribute('disabled')
    btnSaveTime.style.display = 'none'
    saveTimeForm.style.display = 'none'
    clearTxt()
}


function stop(){
    clearInterval(interval)
    console.log('Stop')
    btnStart.removeAttribute('disabled')
    btnStop.setAttribute('disabled', 'disabled')
    btnSaveTime.style.display = 'block'
}

function reset(){
    clearInterval(interval)
    m = 0
    s = 0
    ms =0
    msec.innerHTML = 0
    sec.innerHTML = 0
    min.innerHTML = 0
    console.log('Reset')
    btnStop.setAttribute('disabled', 'disabled')
    btnReset.setAttribute('disabled', 'disabled')
    btnStart.removeAttribute('disabled')
    btnSaveTime.style.display = 'none'
    saveTimeForm.style.display = 'none'
    clearTxt()
}
function clearTxt(){
    nam.value = null
    time.value = null
    console.log(nam.value, time.value)
}
function btnSaveTimeRec(){
    console.log('btnSaveTime')
    btnSaveTime.style.display = 'none'
    saveTimeForm.style.display = 'block'
}

function btnSave(){
    console.log(nam.value, time.value)
}