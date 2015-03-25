function getElem(id) {
    return document.getElementById(id);
}
function randomNumBetween(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
}

function randomColor() {
    let letters = '0123456789ABCDEF'.split('');

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[randomNumBetween(0, letters.length)];
    }

    return color;
}

function randomNegativenumber(min, max) {
    return negPos()  * randomNumBetween(min, max);
}

function negPos () {
    return Math.random() < 0.5 ? -1 : 1;
}
