// 複数要素を絞り込む filter
const array = [10,20,30];
const array2 = array.filter((value) => {
    return value > 10;
});

console.log(array2);