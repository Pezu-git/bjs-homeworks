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
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}