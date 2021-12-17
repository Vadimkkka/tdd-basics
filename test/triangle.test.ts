import { Point, Triangle } from '@/triangle'

describe('Класс -> треугольник 📐', () => {
  let triangle_1: Triangle, triangle_2: Triangle, triangle_3: Triangle;

  beforeEach(() => {
    triangle_1 = new Triangle(new Point(1, 2), new Point(3, 4), new Point(1, 6))
    triangle_2 = new Triangle(new Point(2, 2), new Point(4, 4), new Point(1, 6))
    triangle_3 = new Triangle(new Point(5, 4), new Point(2, 1), new Point(7, 3))
  })

  it('Создания объектов', () => {
    expect(triangle_1 instanceof Triangle).toBe(true)
    expect(triangle_2 instanceof Triangle).toBe(true)
    expect(triangle_3 instanceof Triangle).toBe(true)
  })

  it('Описать свойства для получения состояния объекта', () => {
    expect(triangle_1).toEqual({
      pointA: new Point(1, 2),
      pointB: new Point(3, 4),
      pointC: new Point(1, 6)
    })
    expect(triangle_2).toEqual({
      pointA: new Point(2, 2),
      pointB: new Point(4, 4),
      pointC: new Point(1, 6)
    })
    expect(triangle_3).toEqual({
      pointA: new Point(5, 4),
      pointB: new Point(2, 1),
      pointC: new Point(7, 3)
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
    expect(triangle_1.centroid).toEqual(new Point(1.67, 4))
    expect(triangle_2.centroid).toEqual(new Point(2.33, 4))
    expect(triangle_3.centroid).toEqual(new Point(4.67, 2.67))
  })
})