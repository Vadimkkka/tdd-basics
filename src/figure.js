class Figure {
  constructor() {
    if (this.constructor == Figure) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  get perimeter() {
    throw new Error("Getter 'perimeter' must be implemented.");
  }

  get area() {
    throw new Error("Getter 'area' must be implemented.");
  }
}


class Rectangle extends Figure {
  constructor(a, b) {
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
  constructor(a, b, c) {
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
  constructor(radius) {
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

module.exports = { Rectangle, Triangle, Circle }