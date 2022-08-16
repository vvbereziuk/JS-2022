// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let text1 = 'hello world';
// let text2 = 'lorem ipsum';
// let text3 = 'javascript is cool';
// console.log(text1.length, text2.length, text3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let text1 = 'hello world';
// let text2 = 'lorem ipsum';
// let text3 = 'javascript is cool';
// console.log(text1.toUpperCase(), text2.toUpperCase(), text3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let text1 = 'HELLO WORLD';
// let text2 = 'LOREM IPSUM';
// let text3 = 'JAVASCRIPT IS COOL';
// console.log(text1.toLowerCase(), text2.toLowerCase(), text3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let strClear = str.trim();
// console.log(strClear);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numsArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let str = numsArray.map(value => value.toString());
// console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (direction, arr3) => {
//     if (direction === 'acsending') {
//         arr3.sort((a, b) => a - b);
//     }else if (direction === 'descending') {
//         arr3.sort((a, b) => b - a);
//     }
//     return arr3;
//     }
// console.log(sortNums('acsending', nums));
// console.log(sortNums('descending', nums));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort(function (a, b) {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let duration = coursesAndDurationArray.filter(a => a.monthDuration > 5);
// console.log(duration);

// описати колоду карт
// let cards = [
//     {cardSuit: 'spade', value: 6, color: 'black'},
//     {cardSuit: 'diamond', value: 'King', color: 'red'},
//     {cardSuit: 'heart', value: 6, color: 'red'},
//     {cardSuit: 'club', value: 9, color: 'black'},
//     {cardSuit: 'spade', value: 10, color: 'black'},
//     {cardSuit: 'heart', value: 'Ace', color: 'red'},
//     {cardSuit: 'diamond', value: 7, color: 'red'},
//     {cardSuit: 'club', value: 10, color: 'red'},
//     {cardSuit: 'spade', value: 'Ace', color: 'black'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'club', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 8, color: 'black'},
// ];
// // - знайти піковий туз
// let ace = cards.filter(a => a.cardSuit === 'spade' && a.value === 'Ace');
// console.log(ace);
// // - всі шістки
// let six = cards.filter(a => a.value === 6);
// console.log(six);
// // - всі червоні карти
// let red = cards.filter(a => a.color === 'red');
// console.log(red);
// // - всі буби
// let diamond = cards.filter(a => a.cardSuit === 'diamond');
// console.log(diamond);
// // - всі трефи від 9 та більше
// let club = cards.filter(a => a.cardSuit === 'club' && a.value >= 9);
// console.log(club);
// //


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// let mast = cards.reduce(function (accamulate, a) {
//     if (a.cardSuit === 'spade') {
//         accamulate.spades.push(a);
//     }else if (a.cardSuit === 'diamond') {
//         accamulate.diamonds.push(a);
//     }else if (a.cardSuit === 'heart') {
//         accamulate.hearts.push(a);
//     }else if (a.cardSuit === 'club') {
//         accamulate.clubs.push(a);
//     }
//     return accamulate;
// }, { spades:[], diamonds:[], hearts:[], clubs:[]})
// console.log(mast);

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let checkEmail = (email) => {
//     let emailArray = email.split('@');
//     if (emailArray.length > 2){
//         return false;
//     }
//     let [name, fullDomain] = emailArray;
//     let [beforeDot, afterDot] = fullDomain.split('.');
//     if (beforeDot.length < 2 || !afterDot || !name) {
//         return false
//     } return true
// };
//
// console.log(checkEmail('someemail@gmail.com'));

let arrs = [1, 34, 12, 8, -5, 7, 100, -6, 0];
// let nums = arrs.map((value, index) => value * 3 * index);
// console.log(nums);
// let nums2 = arrs.filter((value, index) => index % 2);
// console.log(nums2);
// let reduce1 = arrs.reduce((accum, value) => [...accum, value * 2], []);
// console.log(reduce1);