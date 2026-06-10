// map の使い方
const array = [10,20,30];
const array2 = array.map((value) =>{
    return value * 2;
});
console.log(array2);

// forEachとmapの違いは、配列の返り値がmapにはあること。
