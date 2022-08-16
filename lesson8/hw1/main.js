// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1,'Yura','Ivanchenko', 'ghg@gmail.com', +380961100111);
let user2 = new User(4, 'Vasia', 'Serduk', 'da2jb@gmail.com', +38085787478);
let user3 = new User(2, 'Kolia', 'Ivko', 'lkojb@gmail.com', +380857657478);
let user4 = new User(8, 'Nadia', 'Sirko', 'fffjb@gmail.com', +3808556478);
let user5 = new User(6, 'Olia', 'Ivanko', 'sffdb@gmail.com', +38085111478);
let user6 = new User(3, 'Sasha', 'Rybak', 'sdfssb@gmail.com', +38085000078);
let user7 = new User(7, 'Vasia', 'Kravec', 'sjb@gmail.com', +38085000478);
let user8 = new User(5, 'Kolia', 'Ichko', 'aaaab@gmail.com', +3808567478);
let user9 = new User(9, 'Vasia', 'Durko', 'adb@gmail.com', +38085565608);
let user10 = new User(10, 'Olia', 'Koval', 'rggvrjb@gmail.com', +38085556978);
let users =[user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filtrID = users.filter(value => value.id % 2 === 0);
console.log(filtrID);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortID = users.sort((a, b) => a.id - b.id);
console.log(sortID);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
user1.order = ['milk', 'beer', 'meat'];
user2.order = ['soda', 'apple', 'juice', 'icecream', 'vine'];
user3.order = ['milk', 'beer', 'apple', 'meat'];
user4.order = ['coffe', 'meat'];
user5.order = ['meat'];
user6.order = ['milk', 'beer', 'meat'];
user7.order = ['juice', 'milk', 'beer', 'meat', 'vodka', 'vine'];
user8.order = ['milk', 'cola', 'beer', 'meat'];
user9.order = ['beer'];
user10.order = ['milk', 'meat'];

let client = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку