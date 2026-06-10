// 配列のすべての要素を処理できます。 forEach
const array = [10,20,30];
array.forEach((value) => {
    console.log(value);
});

// 新しい配列に push する
const array3 = ["10","50","80"];
const array4 = [];
array3.forEach((value) => {
    array4.push(Number(value));
});

console.log(array4);

// 破壊的なやり方
const array5 = ["10","50","90"];
console.log(array5);
array5.forEach((value,index,array) => {
    array[index] = Number(value);
});

console.log(array5);