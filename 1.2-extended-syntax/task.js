'use strict'

function getResult(a, b, c) {

    let x = [];
    let d = (b ** 2) - (4 * a * c);
    if (d > 0) {
        x = [(-b + Math.sqrt(d)) / (2 * a),
            (-b - Math.sqrt(d)) / (2 * a)
        ];
    } else if (d == 0) {
        x = [-b / (2 * a)];
    }
    return x
}


function getAverageMark(marks) {

    let averageMark = 0;
    let sum = 0;
    if (marks.length > 5) {
        console.log('Слишком много оценок');
        marks = marks.slice(0, 5);
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length
    }
    return averageMark;
}


function askDrink(name, dateOfBirthday) {

    let result;
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`
    }
    return result;
}