var sw = document.getElementById('stopWatch');
var rec = document.getElementById('records');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var msec = document.getElementById('msec');
var btnSaveTime = document.getElementById('btnSaveTime');
var saveTimeForm = document.getElementById('saveTimeForm');
var count = 0;
var nam = document.getElementById('nam')
var time = document.getElementById('time')
var timeRec = []



function showStopWatch(){
    sw.style.display = 'block';
    rec.style.display = 'none'
}

function showRecords(){
    sw.style.display = 'none';
    rec.style.display = 'block'
}

function start(){
    console.log('Start')
}


function stop(){
    console.log('Stop')
    btnSaveTime.style.display = 'block'
}

function reset(){
    console.log('Reset')
}

function btnSaveTimeRec(){
    console.log('btnSaveTime')
    btnSaveTime.style.display = 'none'
    saveTimeForm.style.display = 'block'
}

function btnSave(){
    console.log(nam.value, time.value)
}