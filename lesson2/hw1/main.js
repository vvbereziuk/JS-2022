// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let set = [12, 'vacancy', 2.14, false, -100, 0, 'top', true, 1, 3, 14];
console.log(set);
// or
console.log(set[0]);
console.log(set[1]);
console.log(set[2]);
console.log(set[3]);
console.log(set[4]);
// .....

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
    title: 'Harry Potter',
    pageCount: 560,
    genre: 'Fantasy'
}
let book2={
    title: 'The Happiest Man on Earth',
    pageCount: 325,
    genre: 'Documantary'
}
let book3={
    title: 'Fahrenheit 451',
    pageCount: 370,
    genre: 'Dystopian novel'
}
console.log(book1, book2, book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4={
    title: 'Harry Potter',
    pageCount: 560,
    genre: 'Fantasy',
    author:[
        {name:'J. K. Rowling', age: 57}
    ]
}

let book5={
    title: 'The Happiest Man on Earth',
    pageCount: 325,
    genre: 'Documantary',
    author:[
        {name: 'Eddie Jaku', age: 102}
    ]
}

let book6={
    title: 'Fahrenheit 451',
    pageCount: 370,
    genre: 'Dystopian novel',
    author:[
        {name: 'Ray Bradbury', age: 87}
    ]}
console.log(book6.author[0]);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let clients = [
    {name: 'Vasia', username: 'vas10', password: '111sd1'},
    {name: 'Kolia', username: 'Koliasik', password: '02213K'},
    {name: 'Ivan', username: 'use12', password: '0jnaw1'},
    {name: 'Sasha', username: 'sasha120', password: '9as9kn'},
    {name: 'Natali', username: 'Nata88', password: 'mmmm23'},
    {name: 'Olia', username: 'Ollll', password: '111kj1'},
    {name: 'Zhenia', username: 'Zhzhz', password: '7sgy6f'},
    {name: 'Serhii', username: 'Rocky', password: 'jnw98'},
    {name: 'Yliia', username: 'Gorge', password: '28bsu7'},
    {name: 'Pavlo', username: 'Kosis', password: 'km9bu7'}
];
console.log(clients[0].password);
console.log(clients[1].password);
console.log(clients[2].password);
console.log(clients[3].password);
console.log(clients[4].password);
console.log(clients[5].password);
console.log(clients[6].password);
console.log(clients[7].password);
console.log(clients[8].password);
console.log(clients[9].password);