/*jshint esversion: 6 */
// helper function for event delegation
var delegate = (function(){
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }
    return function(el, evt, sel, handler) {
        el.addEventListener(evt, function (event) {
            var t = event.target;
            while (t && t !== this) {
                if (t.matches(sel)) {
                    handler.call(t, event);
                }
                t = t.parentNode;
            }
        });
    };
}());

/* global variables */
let timeObtained = false;
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

    delegate(document, 'click', '#stopTime', function() {
        clearInterval(refreshDate);
        console.log('>>> stopped counter');
    });
}, 1000);


let hoursColumn_1 = document.querySelectorAll('div#hour-column-1 div');
let hoursColumn_2 = document.querySelectorAll('div#hour-column-2 div');
let minutesColumn_1 = document.querySelectorAll('div#minute-column-1 div');
let minutesColumn_2 = document.querySelectorAll('div#minute-column-2 div');
let secondsColumn_1 = document.querySelectorAll('div#seconds-column-1 div');
let secondsColumn_2 = document.querySelectorAll('div#seconds-column-2 div');

let update_H1 = () => {
    hoursColumn_1.forEach(function(entry, index) {
        if(entry.classList[0].match(/\d/)[0].length) {
            if(parseInt(entry.classList[0].match(/\d/)[0]) === (`${hoursString}`).split('')[0]) {
                entry.innerHTML = (`${hoursString}`).split('')[0];
            }
        } else {
            console.log('>>> no match found for hours(1)');
        }
    });
};

let update_H2 = () => {
    hoursColumn_1.forEach(function(entry, index) {
        if(entry.classList[0].match(/\d/)[0].length) {
            if(parseInt(entry.classList[0].match(/\d/)[0]) === (`${hoursString}`).split('')[0]) {
                entry.innerHTML = (`${hoursString}`).split('')[1];
            }
        } else {
            console.log('>>> no match found for hours(2)');
        }
    });
};

let update_M1 = ()  => {
    minutesColumn_1.forEach(function(entry, index) {
        if(entry.classList[0].match(/\d/)[0].length) {
            if(parseInt(entry.classList[0].match(/\d/)[0]) === (`${minutesString}`).split('')[0]) {
                entry.innerHTML = (`${minutesString}`).split('')[0];
            }
        } else {
            console.log('>>> no match found for minutes(1)');
        }
    });
};

let update_M2 = () => {
    minutesColumn_2.forEach(function(entry, index) {
        if(entry.classList[0].match(/\d/)[0].length) {
            if(parseInt(entry.classList[0].match(/\d/)[0]) === (`${minutesString}`).split('')[1]) {
                entry.innerHTML = (`${minutesString}`).split('')[1];
            }
        } else {
            console.log('>>> no match found for minutes(2)');
        }
    });
};

let update_S1 = () => {
    secondsColumn_1.forEach(function(entry, index) {
        if(entry.classList[0].match(/\d/)[0].length) {
            if(parseInt(entry.classList[0].match(/\d/)[0]) === (`${secondsString}`).split('')[0]) {
                entry.innerHTML = (`${secondsString}`).split('')[0];
            }
        } else {
            console.log('>>> no match found for seconds(1)');
        }
    });
};

let update_S2 = () => {
    // reset previous cell
    // if(entry[index - 1].classList[0].match(/\d/)[0].length) {
    //     entry[index - 1].innerHTML = '';
    // }

    secondsColumn_2.forEach(function(entry, index) {
        if(entry.classList[0].match(/\d/)[0].length) {
            if(parseInt(entry.classList[0].match(/\d/)[0]) === (`${secondsString}`).split('')[1]) {
                entry.innerHTML = (`${secondsString}`).split('')[1];
            }
        } else {
            console.log('>>> no match found for seconds(2)');
        }
    });
};

let timePromise = new Promise((resolve, reject) => {
    resolve('>>> time obtained');
    timeObtained = true;

    reject('>>> error in Promise');
});

// if time is obtained, update cells with corresponding values
timePromise.then(() => {
    if(timeObtained) {
        console.log('>>> timeObtained is true');
        console.log('>>> call functions and start re-evaluating');
        let updateCells = setInterval(() => {
            update_H1();
            update_H2();
            update_M1();
            update_M2();
            update_S1();
            update_S2();
            delegate(document, 'click', '#stopTime', function() { clearInterval(updateCells); });
        }, 1000);
    }
});
