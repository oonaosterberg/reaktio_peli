const upper = document.getElementById('0');
const middle = document.getElementById('1');
const bottom = document.getElementById('2');
const textbox = document.getElementById('textbox');
let intervalli;

const setColor = (element, color) => {
    element.style.background = color;
};

const setUpmost = (color) => {
    setColor(upper, color);
};

const setMiddle = (color) => {
    setColor(middle, color);
};

const setLowest = (color) => {
    setColor(bottom, color);
};


const setGreen = () => {

    setColor(upper, 'red');
    setColor(middle, 'black');
    setColor(bottom, 'black');

    setTimeout(() => {
        setColor(middle, 'yellow');

        setTimeout(() => {
            setColor(upper, 'black');
            setColor(middle, 'black');
            setColor(bottom, 'green');
        }, 1000);

    }, 1000);

};

const setRed = () => {

    setColor(upper, 'black');
    setColor(middle, 'black');
    setColor(bottom, 'green');

    setTimeout(() => {
        setColor(middle, 'yellow');
        setColor(bottom, 'black');

        setTimeout(() => {
            setColor(upper, 'red');
            setColor(middle, 'black');
            setColor(bottom, 'black');
        }, 1000);

    }, 1000);

};

const setLightOff = () => {

    setColor(upper, 'black');
    setColor(middle, 'black');
    setColor(bottom, 'black');

    intervalli = setInterval(() => {
        setColor(middle, 'yellow');

        setTimeout(() => {
            setColor(middle, 'black');
        }, 1000);

    }, 2000);

};

const setRandomLight = () => {

    setColor(upper, 'black');
    setColor(middle, 'black');
    setColor(bottom, 'black');

    intervalli = setInterval(() => {
        const randomLight = getRandomInt(3);
        // console.log(randomLight);

        setColor(document.getElementById(randomLight), 'yellow');

        setTimeout(() => {
            setColor(document.getElementById(randomLight), 'black');
        }, 1000);

    }, 2000);
};

const colors = ['hotpink','red','yellow','green'];


const setRandomColor = () => {

    setColor(upper, 'black');
    setColor(middle, 'black');
    setColor(bottom, 'black');

    intervalli = setInterval(() => {
        const randomLight = getRandomInt(3);
        const randomColor = getRandomInt(colors.length);
        // console.log(randomLight);

        setColor(document.getElementById(randomLight), colors[randomColor]);

        setTimeout(() => {
            setColor(document.getElementById(randomLight), 'black');
        }, 1000);

    }, 2000);
};

const getClickedLight = () => {

    upper.addEventListener('click', function() {
        textbox.innerHTML = 'Ylintä valoa klikattiin';
    });
    middle.addEventListener('click', function() {
        textbox.innerHTML = 'Keskimmäistä valoa klikattiin';
    });
    bottom.addEventListener('click', function() {
        textbox.innerHTML = 'Alinta valoa klikattiin';
    });

};

const clickCounter =
    {
        up: 0,
        middle: 0,
        low: 0,
    };

const countClicks = () => {

    upper.addEventListener('click', function() {
        clickCounter['up'] += 1;
        console.log(clickCounter['up']);
    });

    middle.addEventListener('click', function() {
        clickCounter['middle'] += 1;
        console.log(clickCounter['middle']);
    });

    bottom.addEventListener('click', function() {
        clickCounter['low'] += 1;
        console.log(clickCounter['low']);
    });
};

const printClicks = () => {

    upper.addEventListener('click', function() {
        clickCounter['up'] += 1;
        document.getElementById('clicks0').innerHTML = 'Ylintä klikattu ' + clickCounter['up'] + ' kertaa';
        getUpmost();
    });

    middle.addEventListener('click', function() {
        clickCounter['middle'] += 1;
        document.getElementById('clicks1').innerHTML = 'Keskimmäistä klikattu ' + clickCounter['middle'] + ' kertaa';
        getMiddle();
        console.log(clickCounter['middle']);
    });

    bottom.addEventListener('click', function() {
        clickCounter['low'] += 1;
        document.getElementById('clicks2').innerHTML = 'Alinta klikattu ' + clickCounter['low'] + ' kertaa';
        getLowest();
    });
};

let pointCounter = 0;

const countPoints = () => {

    upper.addEventListener('click', function() {
        const upperColor = window.getComputedStyle(upper, null).getPropertyValue('background-color');
        if (upperColor === 'rgb(0, 0, 0)') {
            pointCounter -= 10;
        }
        else if (upperColor === 'rgb(255, 105, 180)'){
            pointCounter += 30;
        }
        else if (upperColor === 'rgb(0, 128, 0)'){
            pointCounter += 20;
        }
        else if (upperColor === 'rgb(255, 255, 0)'){
            pointCounter += 10;
        }
        else if (upperColor === 'rgb(255, 0, 0)'){
            pointCounter += 5;
        }
        console.log(pointCounter);
        document.getElementById('points').innerHTML = 'Pisteet: ' + pointCounter;
    });

    middle.addEventListener('click', function() {
        const middleColor = window.getComputedStyle(middle, null).getPropertyValue('background-color');
        if (middleColor === 'rgb(0, 0, 0)') {
            pointCounter -= 10;
        }
        else if (middleColor === 'rgb(255, 105, 180)'){
            pointCounter += 30;
        }
        else if (middleColor === 'rgb(0, 128, 0)'){
            pointCounter += 20;
        }
        else if (middleColor === 'rgb(255, 255, 0)'){
            pointCounter += 10;
        }
        else if (middleColor === 'rgb(255, 0, 0)'){
            pointCounter += 5;
        }
        console.log(pointCounter);
        document.getElementById('points').innerHTML = 'Pisteet: ' + pointCounter;
    });

    bottom.addEventListener('click', function() {
        const bottomColor = window.getComputedStyle(bottom, null).getPropertyValue('background-color')
        if (bottomColor === 'rgb(0, 0, 0)') {
            pointCounter -= 10;
        }
        else if (bottomColor === 'rgb(255, 105, 180)'){
            pointCounter += 30;
        }
        else if (bottomColor === 'rgb(0, 128, 0)'){
            pointCounter += 20;
        }
        else if (bottomColor === 'rgb(255, 255, 0)'){
            pointCounter += 10;
        }
        else if (bottomColor === 'rgb(255, 0, 0)'){
            pointCounter += 5;
        }
        console.log(pointCounter);
        document.getElementById('points').innerHTML = 'Pisteet: ' + pointCounter;
    });
};


const getUpmost = () => {
    console.log(window.getComputedStyle(upper, null).getPropertyValue('background-color'));
    return window.getComputedStyle(upper, null).getPropertyValue('background-color');
};

const getMiddle = () => {
    console.log(window.getComputedStyle(middle, null).getPropertyValue('background-color'));
};

const getLowest = () => {
    console.log(window.getComputedStyle(bottom, null).getPropertyValue('background-color'));
};

const  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const clearLights = () => {
    clearInterval(intervalli);
};

getClickedLight();
setRandomColor();
printClicks();
countPoints();