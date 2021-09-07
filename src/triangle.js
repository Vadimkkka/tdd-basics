class Dot {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distanceBetweenDot(B) {
    return Math.sqrt((this.x - B.x) ** 2 + (this.y - B.y) ** 2)
  }
}


class Triangle {
  constructor(A, B, C) {
    // if (A instanceof Dot && B instanceof Dot && C instanceof Dot) {
    this.A = A
    this.B = B
    this.C = C
    // }
  }

  get perimeter() {
    const AB = this.A.distanceBetweenDot(this.B)
    const BC = this.B.distanceBetweenDot(this.C)
    const CA = this.C.distanceBetweenDot(this.A)
    return +(AB + BC + CA).toFixed(2)
  }

  get area() {
    return +(Math.abs(
      (this.B.x - this.A.x) *
      (this.C.y - this.A.y) -
      (this.C.x - this.A.x) *
      (this.B.y - this.A.y)
    ) / 2).toFixed(2)
  }

  get centroid() {
    const x = +((this.A.x + this.B.x + this.C.x) / 3).toFixed(2)
    const y = +((this.A.y + this.B.y + this.C.y) / 3).toFixed(2)
    return new Dot(x, y)
  }
}

module.exports = { Triangle, Dot }