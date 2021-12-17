import Vector from '@/vector'

describe('Задание 1', () => {
  it('Создать 2 объекта класса – вектор (одномерный массив)', () => {
    const vectors = [new Vector(), new Vector()]
    expect(vectors.every(x => x instanceof Vector)).toBe(true)
  })

  describe('Найти в каждом объекте MAX значение элемента и поменять их местами', () => {
    const vector_1 = new Vector(0, 3, 0, 1, 0)
    const vector_2 = new Vector(1, 0, 2, 0, 1)

    it('Найти в каждом объекте MAX значение элемента', () => {
      expect(vector_1.max).toEqual({ value: 3, index: 1 })
      expect(vector_2.max).toEqual({ value: 2, index: 2 })
    })
    it('Поменять местами MAX значение', () => {
      vector_1.swapCriticalValues(vector_2)

      expect(vector_1.max).toEqual({ value: 2, index: 1 })
      expect(vector_2.max).toEqual({ value: 3, index: 2 })
    })
  })

  describe('Найти MIN значение (одно) для этих объектов и поменять их местами с MAX', () => {
    const vector_1 = new Vector(0, 1, 2, 3, 4)
    const vector_2 = new Vector(4, 3, 2, 1, 0)

    it('Найти в каждом объекте MIN значение элемента', () => {
      expect(vector_1.min).toEqual({ value: 0, index: 0 })
      expect(vector_2.min).toEqual({ value: 0, index: 4 })
    })
    it('Поменять MIN местами с MAX', () => {
      expect(vector_1.min).toEqual({ value: 0, index: 0 })
      expect(vector_2.max).toEqual({ value: 4, index: 0 })

      vector_1.swapCriticalValues(vector_2, 'min')

      expect(vector_1.min).toEqual({ value: 1, index: 1 })
      expect(vector_1.max).toEqual({ value: 4, index: 0 })

      expect(vector_2.min).toEqual({ value: 0, index: 0 })
      expect(vector_2.max).toEqual({ value: 3, index: 1 })
    })
  })

  describe('В первом объекте должны содержаться все четные, а во втором все нечетные числа исходных векторов', () => {
    let vector_1: Vector, vector_2: Vector;

    beforeEach(() => {
      vector_1 = new Vector(0, 1, 2, 3, 4)
      vector_2 = new Vector(4, 3, 2, 1, 0)
    })

    it('Получить все четные/не четные элементы', () => {
      const odd = vector_1.leaveValues(true)
      const even = vector_2.leaveValues()

      expect(odd).toEqual([1, 3])
      expect(even).toEqual([4, 2, 0])

      expect(vector_1.list).toEqual([0, 2, 4])
      expect(vector_2.list).toEqual([3, 1])
    })

    it('Добавить список элементов', () => {
      vector_1.push(1, 2, 3)

      expect(vector_1.list).toEqual([0, 1, 2, 3, 4, 1, 2, 3])
    })

    it('Всё в статическом методе', () => {
      Vector.replaceEvenWithOdd(vector_1, vector_2)

      expect(vector_1.list).toEqual([0, 2, 4, 4, 2, 0])
      expect(vector_2.list).toEqual([3, 1, 1, 3])
    })
  })
})

describe('Задание 2', () => {
  it('Реализовать перегрузку операций +, -, *, /, >, <, = и тд.', () => {
    const vector_1 = new Vector(1, 2, 3, 4, 5).valueOf()
    const vector_2 = new Vector(1, 2).valueOf()

    expect(vector_1 + vector_2).toBe(7)
    expect(vector_2 - vector_1).toBe(-3)
    expect(vector_1 * vector_2).toBe(10)
    expect(vector_1 / vector_2).toBe(2.5)
    expect(vector_1 % vector_2).toBe(1)
    expect(vector_1 ** vector_2).toBe(25)

    expect(vector_1 > vector_2).toBe(true)
    expect(vector_1 < vector_2).toBe(false)
    expect(vector_1 === vector_2).toBe(false)
    expect(vector_1 !== vector_2).toBe(true)
  })
})

describe('Задание 3', () => {
  let vector: Vector;
  beforeEach(() => {
    vector = new Vector(3, 5, 2, 4, 6, 1)
  })

  it('Упорядочивание значений в векторе по возрастанию', () => {
    vector.sort(true)
    expect(vector.list).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('Упорядочивание значений в векторе по убыванию', () => {
    vector.sort()
    expect(vector.list).toEqual([6, 5, 4, 3, 2, 1])
  })

  it('Нахождения в векторе первой последовательности элементы которой строго возрастают и удаления ее из вектора', () => {
    const vectors = [
      vector,
      new Vector(1, 2, 3, 4, 5),
      new Vector(5, 4, 3, 2, 1),
      new Vector(5, 2, 3, 4, 1)
    ]
    for (let item of vectors) {
      item.removeFirstSequence()
    }

    expect(vectors[0].list).toEqual([2, 4, 6, 1])
    expect(vectors[1].list).toEqual([])
    expect(vectors[2].list).toEqual([5, 4, 3, 2, 1])
    expect(vectors[3].list).toEqual([5, 1])
  })

  it('Положительные значения переместились в начало, отрицательные в конец, а нулевые остались бы на своих местах', () => {
    const vectors = [
      new Vector(2, 1, 0, -1, -2),
      new Vector(-2, -1, 0, 1, 2),
      new Vector(-2, 2, 0, 1, -1),
      new Vector(-2, 2, 1, -1, 0),
      new Vector(0, 1, 0, -1, 0, -2, 0, 2, 0)
    ]

    for (let item of vectors) {
      item.extraSort()
    }

    expect(vectors[0].list).toEqual([2, 1, 0, -1, -2])
    expect(vectors[1].list).toEqual([1, 2, 0, -2, -1])
    expect(vectors[2].list).toEqual([2, 1, 0, -2, -1])
    expect(vectors[3].list).toEqual([2, 1, -2, -1, 0])
    expect(vectors[4].list).toEqual([0, 1, 0, 2, 0, -1, 0, -2, 0])

    vectors[4].extraSort(true)

    expect(vectors[4].list).toEqual([0, -1, 0, -2, 0, 1, 0, 2, 0])
  })

  it('Удаления значений нарушающих его упорядоченность (например, по возрастанию)', () => {
    const vector_2 = new Vector(5, 2, 3, 4, 1)

    vector.clearSequence()
    vector_2.clearSequence(true)

    expect(vector.list).toEqual([3, 5, 6])
    expect(vector_2.list).toEqual([5, 2, 1])

  })

  it('Удаления всех не простых элементов (простое число – такое которое делится без остатка только на 1 и на само себя)', () => {
    vector.removeNonSimple()

    expect(vector.list).toEqual([3, 5, 2])
  })

  it('Заменить местами 2 элемента с наибольшими значениями', () => {
    vector.swapTwoLargest()

    expect(vector.list).toEqual([3, 6, 2, 4, 5, 1])
  })

  it('Удаление всех чисел меньших или равных первому, первый элемент удаляется тоже', () => {
    const vector_1 = new Vector(1)

    vector.removeLessOrEqualToFirst()
    vector_1.removeLessOrEqualToFirst()

    expect(vector.list).toEqual([5, 4, 6])
    expect(vector_1.list).toEqual([1])
  })
})