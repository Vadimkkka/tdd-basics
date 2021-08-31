class Vector {
  #value
  #max
  #min

  constructor(...params) {
    this.#value = params;
    this.#findMaxAndMin()
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

  // toString() {
  //   return `[${this.#value.join(', ')}]`
  // }

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
    this.#value = buf
    this.#findMaxAndMin()
    return buf_leave
  }

  static replaceEvenWithOdd(vector_1, vector_2) {
    const odd = vector_1.leaveValues(true)
    const even = vector_2.leaveValues()

    vector_1.push(...even)
    vector_2.push(...odd)
  }
}


module.exports = Vector;