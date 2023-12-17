document.addEventListener("DOMContentLoaded", function () {
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('reset');

    let hour = 0;
    let minute = 0;
    let second = 0;
    let timer;

    startBtn.addEventListener("click", function () {
        timer = true;
        stopWatch();
    });

    stopBtn.addEventListener('click', function () {
        timer = false;
    });

    resetBtn.addEventListener('click', function () {
        timer = false;
        hour = 0;
        minute = 0;
        second = 0;
        document.getElementById('m').innerHTML = "00";
        document.getElementById('s').innerHTML = "00";
        document.getElementById('ms').innerHTML = "00";
    });

    function stopWatch() {
        if (timer) {
            second++;

            if (second == 60) {
                minute++;
                second = 0;
            }

            if (minute == 60) {
                hour++;
                minute = 0;
                second = 0;
            }

            let hrString = hour;
            let minString = minute;
            let secString = second;

            if (hour < 10) {
                hrString = "0" + hrString;
            }

            if (minute < 10) {
                minString = "0" + minString;
            }

            if (second < 10) {
                secString = "0" + secString;
            }

            document.getElementById('m').innerHTML = hrString;
            document.getElementById('s').innerHTML = minString;
            document.getElementById('ms').innerHTML = secString;

            setTimeout(stopWatch, 10);
        }
    }
});
