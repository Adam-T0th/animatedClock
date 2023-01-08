/*jshint esversion: 6 */
let today,
    time,
    hoursString,
    minutesString,
    secondsString,
    timeString;

const getDate = () => {
    today = new Date();
    time = {
        hours : today.getHours(),
        minutes : today.getMinutes(),
        seconds : today.getSeconds()
    };

    hoursString = (`0${time.hours}`).slice(-2);
    minutesString = (`0${time.minutes}`).slice(-2);
    secondsString = (`0${time.seconds}`).slice(-2);
    timeString = `${hoursString}:${minutesString}:${secondsString}`;

    document.querySelector('.hoursTesting:nth-child(1)').innerHTML = (`${hoursString}`).split('')[0];
    document.querySelector('.hoursTesting:nth-child(2)').innerHTML = (`${hoursString}`).split('')[1];
    document.querySelector('.minutesTesting:nth-child(1)').innerHTML = (`${minutesString}`).split('')[0];
    document.querySelector('.minutesTesting:nth-child(2)').innerHTML = (`${minutesString}`).split('')[1];
    document.querySelector('.secondsTesting:nth-child(1)').innerHTML = (`${secondsString}`).split('')[0];
    document.querySelector('.secondsTesting:nth-child(2)').innerHTML = (`${secondsString}`).split('')[1];

};

const refreshDate =  setInterval(() => {
    getDate();
    document.getElementById('stopTime').addEventListener('click', function() {
        clearInterval(refreshDate);
        console.log('>>> stopped counter');
    });
}, 1000);


let hoursColumn_1 = document.querySelectorAll('div#hour-column-1 div');
let update_H1 = () => {
    for(let i = 0; i < hoursColumn_1.length; i++) {
        if((hoursColumn_1[i].classList[0].match(/\d/)[0].length)) {
            if(parseInt(hoursColumn_1[i].classList[0].match(/\d/)[0]) == (`${hoursString}`).split('')[0]) {
                hoursColumn_1[i].innerHTML = (`${hoursString}`).split('')[0];
            }
        } else {
            console.log('>>> no match found for hours(1)');
        }
    }
};

let hoursColumn_2 = document.querySelectorAll('div#hour-column-2 div');
let update_H2 = () => {
    for(let i = 0; i < hoursColumn_2.length; i++) {
        if((hoursColumn_2[i].classList[0].match(/\d/)[0].length)) {
            if(parseInt(hoursColumn_2[i].classList[0].match(/\d/)[0]) == (`${hoursString}`).split('')[0]) {
                hoursColumn_2[i].innerHTML = (`${hoursString}`).split('')[1];
            }
        } else {
            console.log('>>> no match found for hours(2)');
        }
    }
};

let minutesColumn_1 = document.querySelectorAll('div#minute-column-1 div');
let update_M1 = ()  => {
    for(let i = 0; i < minutesColumn_1.length; i++) {
        if((minutesColumn_1[i].classList[0].match(/\d/)[0].length)) {
            if(parseInt(minutesColumn_1[i].classList[0].match(/\d/)[0]) == (`${minutesString}`).split('')[0]) {
                minutesColumn_1[i].innerHTML = (`${minutesString}`).split('')[0];
            }
        } else {
            console.log('>>> no match found for minutes(1)');
        }
    }
};

let minutesColumn_2 = document.querySelectorAll('div#minute-column-2 div');
let update_M2 = () => {
    for(let i = 0; i < minutesColumn_2.length; i++) {
        if((minutesColumn_2[i].classList[0].match(/\d/)[0].length)) {
            if(parseInt(minutesColumn_2[i].classList[0].match(/\d/)[0]) == (`${minutesString}`).split('')[1]) {
                minutesColumn_2[i].innerHTML = (`${minutesString}`).split('')[1];
            }
        } else {
            console.log('>>> no match found for minutes(2)');
        }
    }
};

let secondsColumn_1 = document.querySelectorAll('div#seconds-column-1 div');
let update_S1 = () => {
    for(let i = 0; i < secondsColumn_1.length; i++) {
        if((secondsColumn_1[i].classList[0].match(/\d/)[0].length)) {
            if(parseInt(secondsColumn_1[i].classList[0].match(/\d/)[0]) == (`${secondsString}`).split('')[0]) {
                secondsColumn_1[i].innerHTML = (`${secondsString}`).split('')[0];
            }
        } else {
            console.log('>>> no match found for seconds(1)');
        }
    }
};

let secondsColumn_2 = document.querySelectorAll('div#seconds-column-2 div');
let update_S2 = () => {
    for(let i = 0; i < secondsColumn_2.length; i++) {
        if((secondsColumn_2[i].classList[0].match(/\d/)[0].length)) {
            if(parseInt(secondsColumn_2[i].classList[0].match(/\d/)[0]) == (`${secondsString}`).split('')[1]) {
                secondsColumn_2[i].innerHTML = (`${secondsString}`).split('')[1];
            }
        } else {
            console.log('>>> no match found for seconds(1)');
        }
    }
};

let timeObtained = false;
let timePromise = new Promise((resolve, reject) => {
    resolve('>>> time obtained');
    timeObtained = true;
});


timePromise.then(() => {
    if(timeObtained) {
        console.log('>>> timeObtained is true');
        console.log('>>> call functions and start re-evaluating');
        setInterval(() => {
            update_H1();
            update_H2();
            update_M1();
            update_M2();
            update_S1();
            update_S2();
        }, 1000);
    }
});
