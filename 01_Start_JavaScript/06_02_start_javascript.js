function calcDiscountedPrice(price) {
    return price * 0.8; // 2割引きした価格を返す
}

const price = calcDiscountedPrice(5000);
console.log(price);

// 関数式 変数名に直接代入
const test1 = function testFn(value) {
    return value * 100;
}

// console.log(test2(200)); 巻き上げられずにエラーになる。
const test2 = function(value) {
    return value * 200;
}

console.log(test1(5));
console.log(test2(6));

/**
 * 関数宣言と関数式には、見た目以外にも違いがあります。
    ここで理解しておくべきなのは、関数の巻き上げです。
    JavaScriptでは基本的にコードが書かれた順に実行されるため、定義→実行の順でコードを書きます。
    しかし、関数宣言の場合、定義より前に実行しても、関数が前に定義されたと判断されて正常に実行されます。
    これが関数の巻き上げです。
 */