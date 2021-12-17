interface ElementInfo { value: number, index: number }
type ElementEmpty = null
type Element = ElementInfo | ElementEmpty

class Vector {
  private _value: number[] = []
  private _max: Element = null
  private _min: Element = null


  constructor(...params: number[]) {
    this.list = params;
  }

  get max(): Element {
    return this._max !== null ? { ...this._max } : null
  }

  get min(): Element {
    return this._min !== null ? { ...this._min } : null
  }

  get list() {
    return [...this._value]
  }

  set list(val: number[]) {
    this._value = val;
    this.findMaxAndMin()
  }

  private findMaxAndMin() {
    this._max = null
    this._min = null
    this._value.forEach((item, index) => this.checkMaxAndMin(item, index))
  }

  private checkMaxAndMin(value: number, index: number) {
    if (this._max === null || value > this._max.value) {
      this._max = { value, index }
    }
    if (this._min === null || value < this._min.value) {
      this._min = { value, index }
    }
  }

  setItem(value: number, index: number) {
    if (value === undefined || index === undefined) return
    this._value[index] = value
    this.findMaxAndMin()
  }

  push(...items: number[]) {
    this._value.push(...items)
    this.findMaxAndMin()
  }

  swapCriticalValues(vector: Vector, critical: 'max' | 'min' = 'max') {
    const item = this[critical]
    if (vector.max === null || item === null) return
    this.setItem(vector.max.value, item.index)
    vector.setItem(item.value, vector.max.index)

  }

  valueOf() {
    return this._value.length
  }

  sort(isAscending = false) {
    const cond = isAscending ? (a: number, b: number) => a - b : (a: number, b: number) => b - a
    this._value.sort(cond)
  }

  leaveValues(isEven = false) {
    const cond = isEven ? (x: number) => x % 2 === 0 : (x: number) => x % 2 !== 0
    const buf: number[] = [], buf_leave: number[] = []
    let result;
    this._value.forEach(item => {
      result = cond(item)
      if (result) {
        buf.push(item)
      } else {
        buf_leave.push(item)
      }
    })
    this.list = buf
    return buf_leave
  }
  // TODO length < 2
  removeFirstSequence() {
    let start, end = this._value.length;
    for (let index = 1; index < this._value.length; index++) {
      if (this._value[index - 1] < this._value[index]) {
        if (start === undefined) {
          start = index - 1;
        }
      } else if (start !== undefined) {
        end = index
        break
      }
    }
    if (start === undefined) return;
    const result = this._value.splice(start, end - start)
    this.findMaxAndMin()

    return result
  }

  extraSort(isLeftNegative = false) {
    const positive: number[] = [], negative: number[] = [], zeros: number[] = [];
    this._value.forEach((item, index) => {
      if (item === 0) {
        zeros.push(index)
      } else if (item < 0) {
        negative.push(item)
      } else {
        positive.push(item)
      }
    })
    const result = isLeftNegative ? [...negative, ...positive] : [...positive, ...negative]
    zeros.forEach(index => {
      result.splice(index, 0, 0)
    })
    this.list = result
  }

  clearSequence(isDescending = false) {
    let lastValue: number;
    const cond = isDescending ? (x: number) => x < lastValue : (x: number) => x > lastValue
    this.list = this._value.filter((item, index) => {
      if (index === 0 || cond(item)) {
        lastValue = item
        return true
      }
      return false
    })
  }

  private isSimple(val: number) {
    let count = 0
    for (let divisor = 1; divisor <= val; divisor++) {
      if (val % divisor === 0) count++
      if (count > 2) {
        return false
      }
    }
    return count === 2
  }

  removeNonSimple() {
    this.list = this._value.filter(this.isSimple)
  }

  swapTwoLargest() {
    if (this.min === null || this._max === null) return
    let secondMax = this.min
    const firstMax = this._max.value
    this._value.forEach((value, index) => {
      if (value > secondMax.value && value < firstMax) {
        secondMax = { value, index }
      }
    })
    this.swapElements(this._max, secondMax)
  }

  private swapElements(one: Element, two: Element) {
    if (one === null || two === null) return
    this._value.splice(one.index, 1, two.value)
    this._value.splice(two.index, 1, one.value)
    this.findMaxAndMin()
  }

  removeLessOrEqualToFirst() {
    if (this._value.length < 2) return

    const first = this._value[0]
    this.list = this._value.filter(item => item > first)
  }

  static replaceEvenWithOdd(vector_1: Vector, vector_2: Vector) {
    const odd = vector_1.leaveValues(true)
    const even = vector_2.leaveValues()

    vector_1.push(...even)
    vector_2.push(...odd)
  }
}


export default Vector