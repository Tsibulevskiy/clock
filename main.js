;window.onload = function () {
    setInterval(fSec, 1000);
    var sec = 0;
    var min = 0;
    var hou = 0;
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
    }
};

