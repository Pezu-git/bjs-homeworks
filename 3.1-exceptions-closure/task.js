'use strict'

function parseCount(count) {
    let parse = Number.parseInt(count)
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");   
    }
    return parse;
}
function validateCount(count) {
    try {
        return parseCount(count);
    } catch (e) {
        return e;
    } 
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    getPerimeter() {  
        let perimeter = this.a + this.b + this.c
        return perimeter || "Ошибка! Треугольник не существует";
    }
    getArea() {
        return Number(Math.sqrt((this.getPerimeter() / 2) * (this.getPerimeter() / 2 - this.a) * (this.getPerimeter() / 2 - this.b) * (this.getPerimeter() / 2 - this.c)).toFixed(3)) || "Ошибка! Треугольник не существует"
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return new Triangle()
    }  
}



