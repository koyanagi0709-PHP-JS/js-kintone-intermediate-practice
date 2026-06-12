// dayjs
const dayjs = require("dayjs");
// console.log(dayjs);
const test = dayjs().subtract(1,'month').format('YYYY-MM-DD');
console.log(test);