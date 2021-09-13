const { Rectangle, Triangle, Circle } = require('../src/figure');

describe('Абстрактный класс -> фигура 💠', () => {
  let rectangle, triangle, circle;
  beforeEach(() => {
    rectangle = new Rectangle(3, 5)
    triangle = new Triangle(2, 3, 4)
    circle = new Circle(4)
  })
  it('Rectangle (прямоугольник)', () => {
    expect(rectangle).toEqual({ a: 3, b: 5 })
    expect(rectangle.perimeter).toBe(16)
    expect(rectangle.area).toBe(15)
  })
  it('Triangle (треугольник)', () => {
    expect(triangle).toEqual({ a: 2, b: 3, c: 4 })
    expect(triangle.perimeter).toBe(9)
    expect(triangle.area).toBe(2.90)
  })
  it('Circle (круг)', () => {
    expect(circle).toEqual({ radius: 4 })
    expect(circle.perimeter).toBe(25.13)
    expect(circle.area).toBe(50.27)
  })
})
