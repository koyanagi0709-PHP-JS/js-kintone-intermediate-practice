// 並び替え sort / reverse
// 昇順に並び替える (sort)

let array = [30, 20, 10];
array.sort(); // 昇順に並び替え
console.log(array);

array = [20, 10, 30];
array.sort((a,b) => b - a); // 降順
console.log(array);

array = [30, 2, 10];
array.sort((a,b) => a - b);
console.log(array);

const users = [
    {name: "Alice", age:25},
    {name: "Bob", age:20},
    {name: "Carol", age:30}
];

users.sort((a,b) => a.age - b.age);
console.log(users);