// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x= +prompt('Ведіть число')
if (x != 0) {
    console.log('Вірно!');
} else {
    console.log('Не вірно!');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Яка хвилина?');
if (time>=0 && time<=15) {
    console.log('Перша частина!')
} else if (time>15 && time<=30) {
    console.log('Друга частина!')
} else if (time > 30 && time <= 45) {
    console.log('Третя частина!')
} else if (time > 45 && time <= 59) {
    console.log('Четверта частина!');
} else {
    console.log('Спробуй ще раз')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = 15;
if (day>=1 && day<=10){
    console.log('Перша декада!')
} else if (day >10 && day<=15){
    console.log('Друга декада!')
} else if (day > 15 && day <= 31){
    console.log('Третя декада!');
} else {
    console.log('???')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch (+prompt('Введіть день тижня')){
    case 1:
        console.log('10:00 - Зустріч з клієнтом', '14:30 - Презентація проекту');
        break;
    case 2:
        console.log('9:00 - Спортивний зал', '12:30 - гра в баскетбол');
        break;
    case 3:
        console.log('12:00 - Зустріч з друзями', '20:00 - Урок по JS');
        break;
    case 4:
        console.log('10:00 - Урок з англійської', '17:30 - Йога');
        break;
    case 5:
        console.log('11:00 - Басейн', '18:30 - Зустріч з друзями');
        break;
    case 6:
        console.log('Вихідний');
    case 7:
        console.log('Вихідний');
    default:
        console.log('????')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = 16;
let b = 16;
if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log('рівно')
}

//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне,
//  тобто кастується до false)

let x = (25) || 'default';{    // при зміні значення х на будь який falsy - виводиться 'default'
    console.log(x);
}





