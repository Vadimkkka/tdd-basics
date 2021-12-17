import { Person, BankAccount, Customer } from '@/customer'

describe('Класс Покупатель 🛒', () => {
  describe('Свойства и поля', () => {
    const user = new Customer(
      new Person('vadimka gul', 'aloe vernaua 32'),
      new BankAccount('1234-1234-3215-5432', 'AH51627124YI88')
    )
    console.log(user.toString())
    it.todo('Фамилия, Имя, Отчество, Адрес')
    it.todo('Номер кредитной карточки, Номер банковского счета')
  })
  describe('Методы', () => {
    it.todo('Установка значений атрибутов')
    it.todo('Получение значений атрибутов')
    it.todo('Вывод информации')
  })
  it.todo('Создать массив объектов данного класса')
  it.todo('Вывести список покупателей в алфавитном порядке')
  it.todo('Вывести список покупателей, у которых номер кредитной карточки находится в заданном диапазоне')
})