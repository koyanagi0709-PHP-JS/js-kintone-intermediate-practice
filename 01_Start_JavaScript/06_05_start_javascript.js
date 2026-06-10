function sayHello(name) {
    const message = `Hello ${name}!`;
    console.log(message);
}
// 関数内の処理は実行されない

sayHello('kintone');
// 関数内の処理が実行され、「Hello kintone!」が出力される

// 即時実行によるスコープ
/**
 * 即時関数（即時実行関数）とは、関数宣言されるとすぐに実行される関数のことです。
 * 即時関数で宣言する関数には名前をつけないため、自己実行無名関数とも呼ばれます。
 * 
 */

(() => {
    console.log('Hello World!');
})();

((name) => {
    const message = `Hello ${name}`;
    console.log(message);
})('kintone');


{
    var unBlockedVar = 'varで定義した変数です。';
}

console.log(unBlockedVar);
// 意図したとおりにスコープを扱うためにも var は使わず、const または let を使って変数を定義しましょう。