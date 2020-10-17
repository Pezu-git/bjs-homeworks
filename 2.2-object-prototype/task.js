'use strict'

// Задание 1
String.prototype.isPalindrome = function () {
    let text = this.toLowerCase().match(/[a-zа-я]/g).reverse();
    if (text.join('') === text.reverse().join('')) {
        return true;
    } else {
        return false
    }
}

//Задание 2
function getAverageMark(marks) {
    let average;
    let roundedAverage;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    average = sum / marks.length
    roundedAverage = Math.round(average)
    
    return roundedAverage
}

//Задание 3
function checkBirthday(birthday) {
    let now = +new Date();
    const parsedBirthday = new Date(birthday).getTime()
    let dif = now - parsedBirthday;
    let age = dif / (1000 * 60 * 60 * 24 * 365.25);
    
    return age > 18
}