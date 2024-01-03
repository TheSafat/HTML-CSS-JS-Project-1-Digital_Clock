let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = 'AM';

    if(h > 12){
        h -= 12;
        am = 'PM';
    }

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = am;

    setTimeout(function(){updateClock()}, 1000)
}

updateClock();