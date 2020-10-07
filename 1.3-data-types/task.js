'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let S = amount - contribution; //Взнос
    let P = percent / 12; // процентная ставка * 100
    let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear())); //кол-во месяцев
    let payment = S * (P + P / (((1 + P) ** n) - 1)) / 100; //ежемесячный платёж по процентам
    payment += S / n; //ежемесячный платёж 
    let totalAmount = contribution + payment * n; //общая стоимость 
    alert(payment)
    return totalAmount.toFixed(2);
}



function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}