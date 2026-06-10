const fruits = {
    apple: 'バラ科リンゴ属の落葉高木',
    orange: 'ミカン科ミカン属の常緑小高木',
    grape: 'ブドウ科のつる性落葉低木'
};

console.log(typeof fruits);
console.log(fruits.apple);
console.log(fruits);

const company = {
    name: 'サイボウズ株式会社',
    established: '1997/08/08'
};

console.log(company.name);
console.log(company['name']); // PHPの連想配列みたいな感じ