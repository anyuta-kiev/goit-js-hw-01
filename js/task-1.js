// 'use strict';
const name = '"Генератор защитного поля"';
let price = '1000';

// ('Выбран «Генератор защитного поля», цена за штуку 1000 кредитов');

// const message = 'Выбран , name, цена за штуку ,price кредитов';

// const firstMessage =
//   'Выбран' +
//   ' ' +
//   '"' +
//   name +
//   '"' +
//   ',' +
//   ' ' +
//   'цена за штуку' +
//   ' ' +
//   price +
//   ' ' +
//   'кредитов';

const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(firstMessage);

price = '2000';

// const secondMessage =
//   'Выбран' +
//   ' ' +
//   '"' +
//   name +
//   '"' +
//   ',' +
//   ' ' +
//   'цена за штуку' +
//   ' ' +
//   price +
//   ' ' +
//   'кредитов';

const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(secondMessage);
