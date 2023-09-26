function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var ses = document.getElementById('session')

    var day = dateTime.getDay();
    var mon = dateTime.getMonth()+1;
    var year = dateTime.getFullYear();


    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    //non military
    if(hrs > 12){
        hrs = hrs -12 }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = mon;
    document.getElementById('year').innerHTML = year;


}
setInterval(displayTime, 10);