// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
for (const simpson of simpsons) {
    let divElement = document.createElement('div');
    divElement.classList.add('member');

    let h1 = document.createElement('h1');
    h1.innerText = (`${simpson.name} ${simpson.surname} ${simpson.age}`);
    h1.style.textAlign = 'center';
    h1.style.background = 'silver';

    let text = document.createElement('p');
    text.innerText = simpson.info

    let image = document.createElement('img');
    image.src = simpson.photo;
    divElement.append(h1, text, image);
    document.body.appendChild(divElement);

}

// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
for (const courses of coursesArray) {
    let coursesEl = document.createElement('course');

    let titleEl = document.createElement('h1');
    titleEl.innerText = courses.title;

    let monthEl = document.createElement('div');
    monthEl.innerText = courses.monthDuration;

    let hourEl = document.createElement('div');
    hourEl.innerText = courses.hourDuration;

    let modulesEl = document.createElement('ul');
    for (const modulesElement of courses.modules) {
        let modulesItem = document.createElement('li');
        modulesItem.innerText = modulesElement;
        modulesEl.appendChild(modulesItem);
    }
    coursesEl.append(titleEl, monthEl, hourEl, modulesEl);
    document.body.appendChild(coursesEl);
}

//     - створити блок,
let division = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
division.classList.add('wrap');
division.classList.add('collapse');
division.classList.add('alpha');
division.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
division.style.background = 'gold';
division.style.color = 'green';
division.style.fontSize = '24px';
// - додати цей блок в body.
document.body.appendChild(division);
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(division.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let item = ['Main', 'Products', 'About us', 'Contacts']
let menuItems = document.querySelectorAll('.menu')[0];
for (const itemElement of item) {
    newLi = document.createElement('li');
    newLi.innerText = itemElement;
    document.body.appendChild(newLi);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const coursesElement of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.innerText = (`${coursesElement.title} ${coursesElement.monthDuration}`);
    document.body.appendChild(divElement);
}

// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesElement1 of coursesAndDurationArray1) {
    let divElement1 = document.createElement('div');
    divElement1.classList.add('item');

    let header = document.createElement('h1');
    header.classList.add('heading');
    header.innerText = coursesElement1.title;

    let descript = document.createElement('p');
    descript.classList.add('description');
    descript.innerText = coursesElement1.monthDuration;

    divElement1.append(header, descript);
    document.body.appendChild(divElement1);
}

//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на
//     кнопку зникав елемент з id="text".
let div1 = document.createElement('div');
let p1 = document.createElement('p');
p1.id = 'text';
p1.innerText = 'натиснувши на кнопку, елемент зникне';
document.body.appendChild(div1);

let button = document.createElement('button');
button.innerText = 'Press me';
button.addEventListener('click', () => {
    p1.classList.toggle('false');
});
div1.append(p1, button);
document.body.appendChild(div1);


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let personsForm = document.createElement('form');
personsForm.id = 'forma';
document.body.appendChild(personsForm);

let personsAge = document.createElement('input');
personsAge.type = 'number';
personsAge.name = 'age';
personsAge.placeholder = 'Введіть ваш вік';

let inputButton = document.createElement('button');
inputButton.innerText = 'Перевірити';

personsForm.append(personsAge, inputButton);

personsForm.addEventListener('submit', (item) => {
    item.preventDefault();
    if (item.target.age.value < 18) {
        alert('Вам менше 18 років, тому ви не можете перейти далі');
    } else {
        alert('Вітаємо!');
    }
});

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)