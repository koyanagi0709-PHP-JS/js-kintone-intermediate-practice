const fruits = {
    apple: 'バラ科リンゴ属の落葉高木',
    orange: 'ミカン科ミカン属の常緑小高木',
    grape: 'ブドウ科のつる性落葉低木'
};

// プロパティ名を配列で取得する Object.keys
const obj = {
    product: 'kintone',
    company: 'cybozu',
};

Object.keys(obj).forEach((key) => {
    console.log(key);
});

// console.log(Object.keys(obj));

const obj2 = {
    a: {name: 'Taro', age: 20, from: 'Tokyo'},
    b: {name: 'Hanako', age: 30, from: 'Osaka'},
    c: {name: 'John', age: 40, from: 'Canada'},
};
const array = Object.values(obj2).map((value) => value);
console.log(array[0].name);
console.log(array[1].age);