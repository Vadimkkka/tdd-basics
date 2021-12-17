abstract class Figure {
  abstract get perimeter(): number;
  abstract get area(): number;
}

class Rectangle extends Figure {
  a: number
  b: number

  constructor(a: number, b: number) {
    super()
    this.a = a
    this.b = b
  }
  get perimeter() {
    return 2 * (this.a + this.b)
  }

  get area() {
    return this.a * this.b
  }
}

class Triangle extends Figure {
  a: number
  b: number
  c: number

  constructor(a: number, b: number, c: number) {
    super()
    this.a = a
    this.b = b
    this.c = c
  }
  get perimeter() {
    return this.a + this.b + this.c
  }

  get area() {
    const p = this.perimeter / 2
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(2)
  }
}

class Circle extends Figure {
  radius: number
  constructor(radius: number) {
    super()
    this.radius = radius
  }
  get perimeter() {
    return +(2 * Math.PI * this.radius).toFixed(2)
  }

  get area() {
    return +(Math.PI * this.radius ** 2).toFixed(2)
  }
}

export default Figure
export { Rectangle, Triangle, Circle }