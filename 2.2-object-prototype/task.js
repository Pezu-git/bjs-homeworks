'use strict'

// Задание 1
String.prototype.isPalindrome = function() {
let String = this.toLowerCase().match(/[a-zа-я]/g).reverse()
if(String.join('') === String.reverse().join('')) { 
    return true;
} else {
    return false
}
}

//Задание 2
function getAverageMark(marks) {
    let average = 0;
    let roundedAverage = 0;
    for(let i = 0; i < marks.length; i++) {
        average += marks[i]/(marks.length)
        roundedAverage = Math.round(average)
    }
    return roundedAverage
}

//Задание 3
function checkBirthday(birthday) {
    let now = +new Date();
    birthday = +new Date(birthday);
    let dif = now - birthday;
    let age = dif/(1000*60*60*24*365.25)
    if (age > 18) {
        return true
    } else {
        return false
    }
}



