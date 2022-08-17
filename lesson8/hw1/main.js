// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [];
//
// let user1 = new User(1, 'Yura', 'Ivanchenko', 'ghg@gmail.com', +380961100111);
// let user2 = new User(4, 'Vasia', 'Serduk', 'da2jb@gmail.com', +38085787478);
// let user3 = new User(2, 'Kolia', 'Ivko', 'lkojb@gmail.com', +380857657478);
// let user4 = new User(8, 'Nadia', 'Sirko', 'fffjb@gmail.com', +3808556478);
// let user5 = new User(6, 'Olia', 'Ivanko', 'sffdb@gmail.com', +38085111478);
// let user6 = new User(3, 'Sasha', 'Rybak', 'sdfssb@gmail.com', +38085000078);
// let user7 = new User(7, 'Vasia', 'Kravec', 'sjb@gmail.com', +38085000478);
// let user8 = new User(5, 'Kolia', 'Ichko', 'aaaab@gmail.com', +3808567478);
// let user9 = new User(9, 'Vasia', 'Durko', 'adb@gmail.com', +38085565608);
// let user10 = new User(10, 'Olia', 'Koval', 'rggvrjb@gmail.com', +38085556978);
//
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filtrID = users.filter(value => value.id % 2 === 0);
// console.log(filtrID);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortID = users.sort((a, b) => a.id - b.id);
// console.log(sortID);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class User{
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
//

// user1.order = ['milk', 'beer', 'meat'];
// user2.order = ['soda', 'apple', 'juice', 'icecream', 'vine'];
// user3.order = ['milk', 'beer', 'apple', 'meat'];
// user4.order = ['coffe', 'meat'];
// user5.order = ['meat'];
// user6.order = ['milk', 'beer', 'meat'];
// user7.order = ['juice', 'milk', 'beer', 'meat', 'vodka', 'vine'];
// user8.order = ['milk', 'cola', 'beer', 'meat'];
// user9.order = ['beer'];
// user10.order = ['milk', 'meat'];
//
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(users);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(user.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, date_issue, max_speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.date_issue = date_issue;
//     this.max_speed = max_speed;
//     this.engine = engine;

//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this [item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.max_speed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.date_issue = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car('Rav4', 'Toyota', 2022, 250, 2, 5);

// car.drive();

// car.info();

// car.increaseMaxSpeed(50);

// car.addDriver({name: 'Vasia', age: 30});
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, producer, date_issue, max_speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.date_issue = date_issue;
//         this.max_speed = max_speed;
//         this.engine = engine;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//     info() {
//         for (const item in this) {
//             if (typeof this [item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`)
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         this.max_speed += newSpeed;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('Rav4', 'Toyota', 2022, 250, 2, 5);
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.addDriver({name: 'Vasia', age: 30});
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cenderella{
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let cend1 = new Cenderella('Yuliia', 35, 36);
let cend2 = new Cenderella('Sasha', 8, 33);
let cend3 = new Cenderella('Olia', 42, 42);
let cend4 = new Cenderella('Yuliia', 21, 34);
let cend5 = new Cenderella('Valia', 27, 38);
let cend6 = new Cenderella('Zina', 40, 39);
let cend7 = new Cenderella('Dasha', 31, 35);
let cend8 = new Cenderella('Zina', 20, 31);
let cend9 = new Cenderella('Dasah', 7, 30);
let cend10 = new Cenderella('Katia', 18, 37);

let array = [cend1, cend2, cend3, cend4, cend5, cend6, cend7, cend8, cend9, cend10];

class Prince extends Cenderella{
    constructor(name, age, foot_size) {
        super(name, age);
        this.foot_size = foot_size;
    }
}

let prince = new Prince('Kolia', 40, 36);
let find = (array, prince) => {
    for (const item of array) {
        if (prince.foot_size === item.foot_size) {
            return `My Cenderela is ${item.name}`;
        }
    }
}
console.log(find(array, prince));

let cinder = array.find(value => prince.foot_size === value.foot_size);
console.log(cinder);