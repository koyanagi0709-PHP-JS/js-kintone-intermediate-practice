// スコープについて
function calcAve(score) {
    const subjects = 5;
    console.log(subjects);
    return score /subjects;
}

console.log(calcAve(455));
// console.log(subjects); エラーになる。

const subjects = 5;

function calcAve2(score) {
  console.log(subjects); // 実行結果5
  return score / subjects;
}

calcAve2(455);
console.log(subjects); // 実行結果5