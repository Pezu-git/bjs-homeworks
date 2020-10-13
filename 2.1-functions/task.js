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
