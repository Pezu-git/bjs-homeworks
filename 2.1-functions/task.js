'use strict'

//Задание 1
function getSolutions( a, b, c ) {
    let D = b**2 - 4*a*c; 
    let X = [];
    let X1 = [-b / (2 * a)];   
    let X2 = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
      
    if (D < 0) {
        return {
            D,
            roots: X
        }
    } else if (D === 0) {
        return {
            D,
            roots: X1
        }
    } else if (D > 0) {
        return {
            D,
            roots: X2
        }
    }   
}

function showSolutionsMessage( a, b, c ) {
    
    let result = getSolutions(a, b, c)
    console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X\u2081 = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`);
    }
}
showSolutionsMessage(2, 4, 2)


// Задание 2
const data = {
    algebra: [5, 4],
    geometry: [5, 4, 3, 3],
    russian: [3, 4, 3, 5],
    physics: [5, 4, 3, 5],
    music: [5, 4, 5,],
    english: [5, 4, 5, 5, 4, 4],
    poetry: [5, 4, 5],
    chemistry: [5, 4, 4, 5],
    french: [5, 4, 3]
}
let marks = [];

function getAverageScore(data) {
    let averageMark = 0;
    let sumMarks = 0;
  
    for (let key in data) {   
        for (let i = 0; i < data[key].length; i++) {
            marks.push(data[key][i]); 
        }
        data[key] = getAverageMark(marks);
        marks = [];     
    } 
        for (let j = 0; j < Object.values(data).length; j++) {
            sumMarks += Object.values(data)[j];
        }
    averageMark = sumMarks / (Object.values(data).length);
    data.average = Object.keys(data).length == 0 ?  0 : averageMark;
    console.log(data);  
} 

function getAverageMark(marks) {
    let sum = 0;
    if (marks.length === 0) {
        return 0;
    } else {
        for (let l = 0; l < marks.length; l++) {
            sum += marks[l];
        }
        return sum / marks.length;
    }
}
getAverageScore(data)


//Задание 3
let personData = new Object();
function getPersonData(secretData) {
    secretData = {
        aaa: 1,
        bbb: 0
    }
    personData.firstName = getDecodedValue(secretData.aaa);
    personData.lastName = getDecodedValue(secretData.bbb);
    console.log(personData)
}
    function getDecodedValue(secret) {
        return secret === 0 ? 'Родриго' : 'Эмильо';
}
    
getPersonData()

