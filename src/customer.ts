type CardNumber = string
type BankAccountNumber = string

export class BankAccount {
  private _id: BankAccountNumber
  private _cardNumber: CardNumber

  constructor(cardNumber: CardNumber, bankAccountNumber: BankAccountNumber) {
    this._cardNumber = cardNumber
    this._id = bankAccountNumber
  }

  toString() {
    return `BankAccount: ${this._id}\nCardNumber: ${this._cardNumber}`
  }
}

export class Person {
  firstName: string
  lastName: string
  surName?: string
  address: string

  constructor(FIO: string, address: string) {
    const [firstName, lastName, surName] = FIO.split(' ')
    this.firstName = firstName
    this.lastName = lastName
    this.surName = surName
    this.address = address
  }

  get FIO() {
    let fio = `${this.lastName} ${this.firstName}`
    if (this.surName) {
      fio += ` ${this.surName}`
    }
    return fio
  }

  toString() {
    return `FIO: ${this.FIO}\nAddress: ${this.address}`
  }
}


export class Customer {
  private _person: Person
  private _bankAccount: BankAccount

  constructor(person: Person, bankAccount: BankAccount) {
    this._person = person
    this._bankAccount = bankAccount
  }

  toString() {
    return `${this._person}\n${this._bankAccount}`
  }
}