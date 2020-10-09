'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let S = amount - contribution; //Взнос
    let P = percent / 12; // процентная ставка * 100
    let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear())); //кол-во месяцев
    let payment = S * (P + P / (((1 + P) ** n) - 1)) / 100; //ежемесячный платёж по процентам
    payment += S / n; //ежемесячный платёж 
    let totalAmount = contribution + payment * n; //общая стоимость
    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    }
    if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`
    }
    if (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
    }
    return totalAmount.toFixed(2);

}



function getGreeting(name) {
    let greeting = ''
    if (typeof (name) == 'string' && name != '') {
        console.log(`Привет, мир! Меня зовут ${name}`)
        greeting = `Привет, мир! Меня зовут ${name}`
    } else {
        console.log('Привет, мир! Меня зовут Аноним')
        greeting = 'Привет, мир! Меня зовут Аноним'
    }
    return greeting;
}