function showTime(){

let date = new Date();
let hours = date.getHours(); //0-23
let minutes = date.getMinutes() //0-59
let seconds = date.getSeconds() // 0-59

let formatHours = convertFormat(hours)

hours = checkTime(hours)

hours = addZero(hours) /*mathi ko converted hours aauxa*/
minutes = addZero(minutes)
seconds = addZero(seconds)
document.getElementById('clock').innerHTML=`${hours} : ${minutes}: ${seconds} ${formatHours}`
}
/*suruma convertFormat(hpurs) format hours ma janxa*/
/*tespaxi convertformat ma hours argument pass hunxa ani check garxa*/
/*convertFormat ko time argument generic banako ho*/
/* minutes=addZero(minutes) bhaneko minutes mathi ko liyera functon ma pass garxa*/
/* ani add zero lae minute liyera argument lai chahee time lai  generic argument manera return gareko*/

function convertFormat(time){
    let format = 'AM'
    if(time >= 12){
        format = 'PM'
    }
    return format;
}
function checkTime(time){
    if(time>12){
        time = time-12; /*aba 13 bhaneko 1 hunxa jastai 1am or pm*/
    }
    if(time===0){
        time = 12;
    }
    return time;
}

function addZero(time){
    if (time<10){
        time = "0" + time;
    }
    return time;
}

/*Built in function it's gonna take two things first it's  gonna take a callback function and second argument time interval on how often that function run*/

showTime() /*Aba refresh garda ek second ko lagee jadaina*/
setInterval(showTime,1000)