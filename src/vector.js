class Vector {
  #value
  #max
  #min

  constructor(...params) {
    this.list = params.filter(Number.isInteger);
  }

  get max() {
    return { ...this.#max }
  }

  get min() {
    return { ...this.#min }
  }

  get list() {
    return [...this.#value]
  }

  set list(val) {
    if (Array.isArray(val)) {
      this.#value = val;
      this.#findMaxAndMin()
    }
  }

  #findMaxAndMin() {
    this.#max = { value: undefined, index: undefined }
    this.#min = { value: undefined, index: undefined }
    this.#value.forEach((item, index) => this.#checkMaxAndMin(item, index))
  }

  #checkMaxAndMin(value, index) {
    if (this.#max.value === undefined || value > this.#max.value) {
      this.#max = { value, index }
    }
    if (this.#min.value === undefined || value < this.#min.value) {
      this.#min = { value, index }
    }
  }

  setItem(value, index) {
    // if (Number.isInteger(value) === false) return
    this.#value[index] = value
    this.#findMaxAndMin()
  }

  push(...items) {
    this.#value.push(...items)
    this.#findMaxAndMin()
  }

  swapCriticalValues(vector, critical = 'max') {
    const buf = { ...this[critical] }
    this.setItem(vector.max.value, buf.index)
    vector.setItem(buf.value, vector.max.index)
  }

  valueOf() {
    return this.#value.length
  }

  sort(isAscending = false) {
    const cond = isAscending ? (a, b) => a - b : (a, b) => b - a
    this.#value.sort(cond)
  }

  leaveValues(isEven = false) {
    const cond = isEven ? (x => x % 2 === 0) : (x => x % 2 !== 0)
    const buf = [], buf_leave = []
    let result;
    this.#value.forEach(item => {
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
    let start, end = this.#value.length;
    for (let index = 1; index < this.#value.length; index++) {
      if (this.#value[index - 1] < this.#value[index]) {
        if (start === undefined) {
          start = index - 1;
        }
      } else if (start !== undefined) {
        end = index
        break
      }
    }
    if (start === undefined) return;
    const result = this.#value.splice(start, end - start)
    this.#findMaxAndMin()

    return result
  }

  extraSort(isLeftNegative = false) {
    const positive = [], negative = [], zeros = [];
    this.#value.forEach((item, index) => {
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
    let lastValue = undefined;
    const cond = isDescending ? (x) => x < lastValue : (x) => x > lastValue
    this.list = this.#value.filter((item, index) => {
      if (index === 0 || cond(item)) {
        lastValue = item
        return true
      }
      return false
    })
  }

  #isSimple(val) {
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
    this.list = this.#value.filter(this.#isSimple)
  }

  swapTwoLargest() {
    let secondMax = this.min
    this.#value.forEach((value, index) => {
      if (value > secondMax.value && value < this.#max.value) {
        secondMax = { value, index }
      }
    })
    this.#swapElements(this.#max, secondMax)
  }

  #swapElements(one, two) {
    this.#value.splice(one.index, 1, two.value)
    this.#value.splice(two.index, 1, one.value)
    this.#findMaxAndMin()
  }

  removeLessOrEqualToFirst() {
    if (this.#value.length < 2) return

    const first = this.#value[0]
    this.list = this.#value.filter(item => item > first)
  }

  static replaceEvenWithOdd(vector_1, vector_2) {
    const odd = vector_1.leaveValues(true)
    const even = vector_2.leaveValues()

    vector_1.push(...even)
    vector_2.push(...odd)
  }
}


module.exports = Vector;