 // =====> <call-element> <==== \\
    const hour = document.getElementById('hour');
    const munite = document.getElementById('munite');
    const second = document.getElementById('second');
    const amPm = document.getElementById('ampm')

 // =====> </call-element> <==== \\

const timeFunc = () => {
    // ======> <set-time> <====== \\

    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds()

    // ======> </set-time> <====== \\

    // ======> <display-time> <====== \\

    hour.innerText = h;
    munite.innerText = m;
    second.innerText = s;
    amPm.innerText = 'AM';

    // =====> <AM/Pm {setup funtion}> <==== \\
    if(h > 12){
        amPm.innerHTML = 'PM';
    }
    // =====> </AM/Pm {setup funtion}><==== \\

    setTimeout(() => {
        timeFunc()
    },1000)
    // ======> </display-time> <====== \\
}

timeFunc()
