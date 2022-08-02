// let age = +prompt('Age?');
// console.log(age);
//


// let age = parseInt(prompt('your age'));
// console.log(age);
//
// if (age >= 18) {
//     console.log('movie for you');
// }
// if (age >= 18) {
//     document.write('<h1>Movie above 18</h1>');
// } else {
//     document.write('<h2>Get out bustard!</h2>');
// }



// let color = prompt('What colour');
// let isRoadClear = prompt('Is it clear');
// if (color==='green') {
//     if (isRoadClear==='yes') {
//         console.log('Go!');
//     }
//      else {
//         console.log('Stop');
//     }
// }
// else if (color==='yellow') {
//     console.log('Wait, you may cause collision!');
// }
// else {
//     console.log('I will kill you!!!')
// }
// let color = prompt('What colour');
// let isRoadClear = prompt('Is it clear');
// if (color==='green'&& isRoadClear==='yes') {
//     console.log('Go!');
// } else {
//         console.log('Wait');
//     }


//
// switch ('white'){
//     case 'green':
//         console.log('Go');
//         break;
//     case 'white':
//         console.log('wait');
//         break;
//     case 'black':
//     case 'red':
//         console.log('stop');
//         break;
//     default:
//         console.log('N/A');
// }



// let a = confirm('=>18?');    - виводить повідомлення (Ок/Скасувати)
// let b = a ? 'Yes' : 'No';
// console.log(b);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
//     1, 0, -3
// let x = 0;
// if (x !== 0) {
//     console.log('correct');
// } else {
//     console.log('wrong');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число (в першу, другу, третю или четверту частину години).

// let time= 65;
// if (time >= 0 && time <= 15) {
//     console.log('1 quater');
// }else if (time > 15 && time <= 30) {
//     console.log('2 quater');
// }else if (time > 30 && time <= 45) {
//     console.log('3 quater');
// }else if (time > 45 && time <= 60) {
//     console.log('4 quater');
// } else {
//     console.log('error');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
// let day = 35;
// if (day >= 0 && day <= 10) {
//     console.log('first');
// }else if (day > 10 && day <= 20) {
//     console.log('second');
// }else if (day > 20 && day <= 31) {
//     console.log('third');
// }else{
//     console.log('error');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = 8;
// switch (day){
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednsday');
//         break;
//     case 4:
//         console.log('thursaday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('error');
// }
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = 25;
// let y = 25;
// if (x > y) {
//     console.log(x);
// }else if (y > x) {
//     console.log(y);
// }else if (x === y) {
//     console.log('equal');
// } else {
//     console.log('error');
// }

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподыбне, тобто кастується до false)

// let x = (25) || 'default';{
//     console.log(x);
// }











