class Customer {
  #creditCard
  #bankAccount
  constructor(FIO, address) {
    this.FIO = FIO
    this.address = address
  }

  set creditCard(val) {
    this.#creditCard = val
  }

  set bankAccount(val) {
    this.#bankAccount = val
  }

  get creditCard() {
    return this.#creditCard
  }

  get bankAccount() {
    return this.#bankAccount
  }

  get info() {
    return {
      FIO: this.FIO,
      address: this.address,
      creditCard: this.#creditCard,
      bankAccount: this.#bankAccount
    }
  }
}