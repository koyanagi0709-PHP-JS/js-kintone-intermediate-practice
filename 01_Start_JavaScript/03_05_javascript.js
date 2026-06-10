console.log(1 + 1);
console.log('今日の天気は' + '晴れです');
console.log(2 - 1);
console.log(2 * 3);
console.log(6 / 2);

const weather = '晴れ';
const temperature = 25;

let text = '今日の天気は' + weather + 'です。\n降水確率は' + temperature + '%です。';
console.log(text);

text = `今日の天気は${weather}です。
降水確率は${temperature}%です`;
console.log(text);