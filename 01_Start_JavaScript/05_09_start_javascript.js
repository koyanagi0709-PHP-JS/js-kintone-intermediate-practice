// ひとつの要素に絞り込む find
const array = [10,20,30];
const found = array.find((value) => {
    return value > 10;
});

console.log(found);