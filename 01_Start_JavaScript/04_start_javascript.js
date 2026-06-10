// 1分岐のみ
let x = 6;
if (x > 5) {
    console.log('xは5より大きいです。');
}

// 2分岐のif分を使用
x = 2;
if (x > 5) {
    console.log('xは5より大きいです。');
} else {
    console.log('xは5より小さいです。');
}

// 3分岐以上のif分を使ってみよう
x = 4;
if (x > 5) {
    console.log('xは5より大きいです。');
} else if (x >= 3) {
    console.log('xは3～5の間です。');
} else {
    console.log('xは3より小さいです。');
}