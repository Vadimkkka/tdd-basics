class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  static distanceBetweenPoint(pointA: Point, pointB: Point) {
    return Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2)
  }
}


class Triangle {
  pointA: Point
  pointB: Point
  pointC: Point

  constructor(a: Point, b: Point, c: Point) {
    this.pointA = a
    this.pointB = b
    this.pointC = c
  }

  get perimeter() {
    const AB = Point.distanceBetweenPoint(this.pointA, this.pointB)
    const BC = Point.distanceBetweenPoint(this.pointB, this.pointC)
    const CA = Point.distanceBetweenPoint(this.pointC, this.pointA)
    return +(AB + BC + CA).toFixed(2)
  }

  get area() {
    return +(Math.abs(
      (this.pointB.x - this.pointA.x) *
      (this.pointC.y - this.pointA.y) -
      (this.pointC.x - this.pointA.x) *
      (this.pointB.y - this.pointA.y)
    ) / 2).toFixed(2)
  }

  get centroid() {
    const x = +((this.pointA.x + this.pointB.x + this.pointC.x) / 3).toFixed(2)
    const y = +((this.pointA.y + this.pointB.y + this.pointC.y) / 3).toFixed(2)
    return new Point(x, y)
  }
}

export { Triangle, Point }