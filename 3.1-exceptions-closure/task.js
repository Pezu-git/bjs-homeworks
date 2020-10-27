'use strict'

function parseCount(count) {
    if (isNaN(Number.parseInt(count)) == true) {
         
        throw new Error("Невалидное значение");   
    }
    return Number.parseInt(count);
}
function validateCount(count) {
    try {
        parseCount(count);
    } catch(e) {
        return e.message;
    }
    return parseCount(count); 
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    getPerimeter() {
        
        return this.a + this.b + this.c;
    }
    getArea() {
        return Math.sqrt((this.getPerimeter() / 2) * (this.getPerimeter() / 2 - this.a) * (this.getPerimeter() / 2 - this.b) * (this.getPerimeter() / 2 - this.c)).toFixed(3)
    }
}
function getTriangle(a, b, c) {
    class notTriangle {
        getPerimeter() {
            return "Ошибка! Треугольник не существует"
        }
        getArea() {
            return "Ошибка! Треугольник не существует" 
        }
    }
    try {
        return new Triangle(a, b, c);
    } catch {
        return new notTriangle();
    }
}
    
