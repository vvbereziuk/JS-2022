let arr;
arr = [111, -124, 3.14, 'Holla!', true];
console.log(arr);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr.length);

arr[2] = false;
console.log(arr[2]);

arr[5] = -500;
console.log(arr[5]);

arr[arr.length] = 12345678;
console.log(arr);

arr [arr.length] = 'Cool!';
console.log(arr);

let arrr = [11, 22, 33];
console.log(arrr);

let inner = arrr [2];
console.log(inner);

let user1 = {
    id: 1,
    name: 'Olia',
    age: 23,
};
console.log(user1);

let user2 = {
    id: 2,
    name: 'Valik',
    age: 35,
    wife: {
        name: 'Yuliia',
        age: 35,
        child: {
            name: 'Sasha',
        }
    }
};
console.log(user2.wife.child.name);

let users = [
    {skills: ['html', 'js', 'sql'], name: 'Ivan', age: 25, sex: 'Male'},
    {skills: ['html', 'java', 'sql'], name: 'Olga', age: 28, sex: 'Female'},
    {skills: ['word', 'excell', 'paint'], name:'Sasha', age:18, sex: 'Male'}
];
console.log(users);

let userI = users[0];
let userO = users[1];
let userS = users[2];
console.log(userI);
console.log(userO);
console.log(userS);
console.log(userI.age);
console.log(userI['age']);
console.log(userS ['skills'] [1]);

let user5 = {id:540, name:'Kolia'};
user5.sex='Male';
user5.age=30;
user5['status'] = false;
delete user5.age;
console.log(user5);

let a = 50;
let b = a;
b = b + 100;
console.log(a);
console.log(b);

let user6 = {name: 'Sonia'};
let user7 = user6;
user7.age = 12;
user6.sex = 'Female';
console.log(user7);
console.log(user6);
delete user6.age;
console.log(user7);









