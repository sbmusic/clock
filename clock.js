setInterval(() => {
        d = new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;
    
        hour_hand.style.transform = `rotate(${hrotation}deg)`;
        minute_hand.style.transform = `rotate(${mrotation}deg)`;
        second_hand.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
