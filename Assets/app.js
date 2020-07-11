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
var getTime;
var realData ;
var recordTable = document.getElementById('recordTable')

function getDataFromStorage(){
    if(localStorage.hasOwnProperty('Time Record')){
        var data = localStorage.getItem('Time Record')
        realData = JSON.parse(data)
        timeRec = realData
        console.log(realData)
    }
    else{
        localStorage.setItem('Time Record', JSON.stringify([]))
    
    }
}
getDataFromStorage();



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
        else if(s == 60){
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
    getTime = min.innerHTML + "m : " + sec.innerHTML + "s : " + msec.innerHTML +"ms"
    time.value = getTime
    console.log(time.value)
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
    if(nam.value !== ''){
        console.log("Success")
        realData = timeRec
        timeRec.push({'Name': nam.value, 'Time' : getTime})
        localStorage.setItem('Time Record', JSON.stringify(timeRec))
        window.location.reload()
    }
    else{
        alert ('Enter Name please!') 
    }    
}
updateRecordData()
function updateRecordData(){
    // var lastIndex = realData.pop()
    
    realData.map((key, valu)=>{
        recordTable.innerHTML += `
        <tr class="">
            <td>${valu+1}</td>
            <td>${key.Name}</td>
            <td>${key.Time}</td>
            <td>
                <ul>
                    <li class="btn btn-sm btn-success actionLink" onclick="edit()" >Edit</li>
                    <li class="btn btn-danger btn-sm actionLink" onclick="remove()" >Remove</li>
                </ul>
                
            </td>
        </tr>`
    })
    
        
    
}
// var edit = document.getElementById('edit')
// var remo = document.getElementById('remove')

function edit(){
    alert('Edit Feature will add soon :)')
    console.log('Edit')
}

function remove(){
    alert('Remove Feature will add soon :)')
    console.log('Remove')
}
var clearAllBtn = document.getElementById('clearAllBtn')
var noRecord = document.getElementById('noRecord')
if(realData.length == 0){
    clearAllBtn.style.display = 'none'
    noRecord.style.display = 'block'
}
else{
    clearAllBtn.style.display = 'block'
    noRecord.style.display = 'none'
}
function clearAll(){
    localStorage.setItem('Time Record', JSON.stringify([]))
    window.location.reload()
}