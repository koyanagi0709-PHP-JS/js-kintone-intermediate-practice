// 確認 indexOf / includes
const array = [10,20,30];
console.log(array.indexOf(20)); // 実行結果 1（2番目に位置する）
console.log(array.indexOf(40)); // 実行結果 -1 （位置が見つからない）

// indexOf は 配列の要素の位置存在を確認することができる。 -1は位置が見つからない それ以外の数値は要素の位置を教えてくれる。

// 値の存在を確認する includes

console.log(array.includes(30)); // true
console.log(array.includes(80)); // false