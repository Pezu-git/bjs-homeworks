'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let S = amount - contribution; //Тело кредита
    let P = percent / 1200; // процентная ставка 
    let N = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear())); //кол-во месяцев
    let payment = S * (P + P / (((1 + P) ** N) - 1)); //ежемесячный платёж
    let totalAmount = payment * N; //общая стоимость
    
    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    }
    if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`
    }
    if (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
    }
    
    return Number(totalAmount.toFixed(2));
}



function getGreeting(name) {
    const greeting = `Привет, мир! Меня зовут ${name || 'Аноним'}`
//    name = undefined 
    console.log(`Привет, мир! Меня зовут ${name || 'Аноним'}`);
    return greeting;
}