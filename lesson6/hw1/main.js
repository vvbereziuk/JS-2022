// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase(), str5.toLowerCase(), str6.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   ';
let s = str7.trim();
let s1 = str7.trimStart();
let s2 = str7.trimEnd();
console.log(s);
console.log(s1);
console.log(s2);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str10 = 'Ревуть воли як ясла повні';
let arr1 = str10.split(' ');
console.log(arr1);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mapArr2 = arr2.map(value => value.toString());
// або
// let mapArr2= arr2.map(value => String(value));
// або
// let mapArr2 = arr2.map(arr2 => '' + arr2);
console.log(mapArr2);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums1 = [11, 21, 3];
let sortNums = (direction, arr3) => {
    if (direction === 'ascending') {
        arr3.sort((a, b) => a - b);
    }else if (direction==='descending'){
        arr3.sort((a, b) => b - a);
    }
    return arr3;
};
console.log(sortNums('ascending', nums1));
console.log(sortNums('descending', nums1));


// - є масив
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray1.sort(function (a1, b1) {
    return b1.monthDuration - a1.monthDuration;
});
console.log(coursesAndDurationArray1);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let duration = coursesAndDurationArray2.filter(a4 => a4.monthDuration > 5);
console.log(duration);

// описати колоду карт

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: 'King', color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'club', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'heart', value: 'Ace', color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'spade', value: 'Ace', color: 'black'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
];

// - знайти піковий туз
let spadeAce = cards.filter(function (sort1) {
    if (sort1.cardSuit === 'spade' && sort1.value === 'Ace') {
        return sort1;
    }
});
console.log(spadeAce);

// - всі шістки
let allSixth = cards.filter(function (sort2) {
    if (sort2.value === 6) {
        return sort2;
    }
});
console.log(allSixth);

// - всі червоні карти
let allRed = cards.filter(function (sort3) {
    if (sort3.color === 'red') {
        return sort3;
    }
});
console.log(allRed);

// - всі буби
let allDiamands = cards.filter(function (sort4) {
    if (sort4.cardSuit === 'diamond') {
        return sort4;
    }
});
console.log(allDiamands);

// - всі трефи від 9 та більше
let all9Club = cards.filter(function (sort5) {
    if (sort5.cardSuit === 'club' && sort5.value === 9) {
        return sort5;
    }
});
console.log(all9Club);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let mastia = cards.reduce(function (accum, sort5) {
    if (sort5.cardSuit === 'spade') {
        accum.spades.push(sort5);
    }
    if (sort5.cardSuit === 'diamond') {
        accum.diamonds.push(sort5);
    }
    if (sort5.cardSuit === 'heart') {
        accum.hearts.push(sort5);
    }
    if (sort5.cardSuit === 'clubs') {
        accum.clubs.push(sort5);
    }
    return accum;
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(mastia);