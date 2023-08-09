/* 
Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).*/

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Название: ${this.title}. Автор: ${this.author}. Количество страниц: ${this.pages}`);
  }
}

const newBook = new Book("Сказка о рыбаке и рыбке", "Пушкин", 20);
newBook.displayInfo();

/* Задание 2
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript

// Пример использования класса
const student1 = new Student(""John Smith"", 16, ""10th grade"");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"
*/


class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade} \n`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();



/* Задание 4
*Необязательное задание. *
Это расширенная версия задачи с банком, которую мы решлали на семинаре:

Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

Пример работы:

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);*/

class Bank {
  constructor(nameBank) {
    this.nameBank = nameBank;
  }
  addClient(client) {
    this[client.id] = client;
  }
  openAccount(newClient, balance) {
    this[newClient.id].balance = balance;
    console.log(`New account ${this[newClient.id].id} name ${this[newClient.id].name}. New balance: ${this[newClient.id].balance}`);

  }

  deposit(id, amount) {
    this[id].balance += amount;
    console.log(`Deposited ${amount} into account ${this[id].id}. New balance: ${this[id].balance}`);
  }

  withdraw(id, amount) {
    if (amount > this[id].balance) {
      console.log(`Insufficient funds in account ${this[id].id}`);
    } else {
      this[id].balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this[id].id}. New balance: ${this[id].balance}`);
    }
  }

  checkBalance(id) {
    console.log(`Balance: ${this[id].balance}`);

  }


}

class Client {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

}

const bank = new Bank("Мой Банк");

const client1 = new Client(123456789, "Иван", 25);
const client2 = new Client(987654321, "Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);