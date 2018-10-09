;window.onload = function () {
    
    var date = new Date();
    var hou = date.getHours()*30 + date.getMinutes()*.5;
    var min = date.getMinutes()*6 + date.getSeconds()*.1;
    var sec = date.getSeconds()*6;
    var doc = document;

    function fSec() {
        doc.querySelector('#sec').style.transform = 'rotate(' + sec + 'deg)';
        doc.querySelector('#min').style.transform = 'rotate(' + min + 'deg)';
        doc.querySelector('#hou').style.transform = 'rotate(' + hou + 'deg)';
        if (sec + 6 === 366) {
            sec = 0;

        }
        sec = sec + 6;
        min = min + (6 / 60);
        hou = hou + (6 / 720);
        setTimeout(fSec, 1000);
    }

    fSec();
};





