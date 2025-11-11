// Task 1
function parseCount(units) {
    const parsedUnits = Number.parseFloat(units);
    if (isNaN(parsedUnits)) {
        throw new Error("Невалидное значение");
    }
    return parsedUnits;
}

function validateCount(units) {
    try {
        return parseCount(units);
    } catch (error) {
        return error;
    }
}

// Task 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return this.a + this.b + this.c
    }

    get area() {
        const halfPerimeter = this.perimeter / 2;
        const area = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}
