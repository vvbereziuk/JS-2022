// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareReact = (a, b) => a * b;
console.log(squareReact(15, 10))


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareCircle = (h, r) => 3.14 * h * r;
console.log(Math.round(squareCircle(2, 20)));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squereCylinder(h, r) {
    let s = 2 * 3.14  * r * (h + r);
    console.log(Math.round(s));
    return s;
}
squereCylinder(12, 15);


// - створити функцію яка приймає масив та виводить кожен його елемент
function arrL(array){
    for (const element of array) {
        console.log(element);
    }
}
arrL([1, -100, 0, 25]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(a) {
    document.write(`<p>${a}</p>`);
}
paragraph('Hola amigo!');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listUl(l) {
    document.write(`<ul>`);
    document.write(`<li>${l}</li>`, `<li>${l}</li>`, `<li>${l}</li>`);
    document.write(`</ul>`)
}
listUl('Hola amigos!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
//li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list3(list) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
}
list3('Hola muchachos!');


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayPrem = [-5, 0, 100, 'cool', 'peace', null, true];
function arrP(lists) {
    document.write(`<ul>`);
    for (const listEl of lists) {
        document.write(`<li>${listEl}</li>`);
    }
    document.write(`</ul>`);
}
arrP(arrayPrem)

()

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 0, name: 'Olia', age: 25},
    {id: 5, name: 'Kolia', age: 41},
    {id: 7, name: 'Sasha', age: 8},
    {id: 2, name: 'Yuliia', age: 35},
    {id: 5, name: 'Andrii', age: 31}
];

function uName(lis) {
    for (let ar = 0; ar < lis.length; ar++) {
        const lir = lis[ar];
        document.write(`<div>${lir.id}, ${lir.name}, ${lir.age}</div>`);
    }
}
uName(users)


// - створити функцію яка повертає найменьше число з масиву
let numbers = [25, -10, 0, 125, -21, 10, -87];
function minimal (min){
    let minNumber = min [0];
    for (const number of min) {
        if (minNumber > number) {
            minNumber = number;
        }
    }
    document.write(`${minNumber}`);
}

minimal(numbers);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let nums = [1, 2, 10, 23, 0, 65, 100, 18, 36, 56, 685, 32, 1, 67, 500, 848, 567, 667];
function calcSum(sum){
    let arraySum = 0;
    for (let i = 0; i < sum.length; i++) {
        arraySum += sum[i];
    }
    return arraySum;
}

console.log(calcSum(nums))
