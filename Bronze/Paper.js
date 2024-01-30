let today = new Date();
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const date = ('0' + (today.getDate())).slice(-2);

console.log(`${year}-${month}-${date}`);