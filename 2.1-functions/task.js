'use strict'

//Задание 1
function getSolutions( a, b, c ) {
    let D = b**2 - 4*a*c; 
    let X = [];
    let X1 = [-b / (2 * a)];   
    let X2 = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
      
 if(D < 0) {
return{
    D,
    roots: X
}
 } else if(D === 0) {
    return {
        D,
        roots: X1
    }
} else if(D > 0) {  
    return {
        D,
        roots: X2
    } 
}   
}

function showSolutionsMessage( a, b, c ) {
    
let result = getSolutions( a, b, c )
console.log(`Вычисляем корни квадратного уравнения ${a}x\u00B2 + ${b}x + ${c}`)
console.log(`Значение дискриминанта: ${result.D}`)
if(result.D < 0) {
    console.log('Уравнение не имеет вещественных корней')
} else if(result.D === 0) {
    console.log(`Уравнение имеет один корень X\u2081 = ${result.roots}`)
} else {
    console.log(`Уравнение имеет два корня. X\u2081 = ${result.roots[0]}, X\u2082 = ${result.roots[1]}`)
}
}
showSolutionsMessage(2, 4, 2)


//Задание 2

function getAverageScore(...data){
data = {
    algebra: [5, 4],
    geometry: [5, 4, 3, 3],
    russian: [3, 4, 3, 5],
    physics: [5, 4, 3, 5],
    music: [5, 4, 5,],
    english: [5, 4, 5, 5, 4, 4],
    poetry: [5, 4, 5],
    chemistry: [5, 4, 4, 5],
    french: [5, 4, 3],
    average: []
} 
function getAverageMark(marks) {
    let i = 0;
    let allMarsk = 0;
    let sum = 0;
for(let key in data) {
    i++;
for(let j = 0; j < data[key].length; j++) {
    sum +=data[key][j];
}
allMarsk += data[key].length
}
sum = sum/allMarsk

data.average.push(sum)
}
getAverageMark()
console.log(data)
}
getAverageScore()


//Задание 3

function getPersonData(secretData) {
    secretData = {
    aaa: 0,
    bbb: 1
    }
    function getDecodedValue(secret) {
        secretData.firstName = secretData.aaa === 0 ? 'Родриго' : 'Эмильо';
        secretData.lastName = secretData.bbb === 0 ? 'Родриго' : 'Эмильо';
        delete secretData.aaa
        delete secretData.bbb
    }
    getDecodedValue()
    console.log(secretData)
}
getPersonData()