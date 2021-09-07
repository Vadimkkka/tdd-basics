const { Dot, Triangle } = require('../src/triangle');

describe('Класс -> треугольник 📐', () => {
  let triangle_1, triangle_2, triangle_3;

  beforeEach(() => {
    triangle_1 = new Triangle(new Dot(1, 2), new Dot(3, 4), new Dot(1, 6))
    triangle_2 = new Triangle(new Dot(2, 2), new Dot(4, 4), new Dot(1, 6))
    triangle_3 = new Triangle(new Dot(5, 4), new Dot(2, 1), new Dot(7, 3))
  })

  it('Создания объектов', () => {
    expect(triangle_1 instanceof Triangle).toBe(true)
    expect(triangle_2 instanceof Triangle).toBe(true)
    expect(triangle_3 instanceof Triangle).toBe(true)
  })

  it('Описать свойства для получения состояния объекта', () => {
    expect(triangle_1).toEqual({
      A: new Dot(1, 2),
      B: new Dot(3, 4),
      C: new Dot(1, 6)
    })
    expect(triangle_2).toEqual({
      A: new Dot(2, 2),
      B: new Dot(4, 4),
      C: new Dot(1, 6)
    })
    expect(triangle_3).toEqual({
      A: new Dot(5, 4),
      B: new Dot(2, 1),
      C: new Dot(7, 3)
    })
  })

  it('Вычисления площади', () => {
    expect(triangle_1.area).toBe(4)
    expect(triangle_2.area).toBe(5)
    expect(triangle_3.area).toBe(4.5)
  })

  it('Вычисления периметра', () => {
    expect(triangle_1.perimeter).toBe(9.66)
    expect(triangle_2.perimeter).toBe(10.56)
    expect(triangle_3.perimeter).toBe(11.86)
  })

  it('Вычисления точки пересечения медиан', () => {
    expect(triangle_1.centroid).toEqual(new Dot(1.67, 4))
    expect(triangle_2.centroid).toEqual(new Dot(2.33, 4))
    expect(triangle_3.centroid).toEqual(new Dot(4.67, 2.67))
  })
})