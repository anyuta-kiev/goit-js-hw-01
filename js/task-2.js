// const invoice = '100';
let stock = '99';

const message = `Количество товаров в заказе ${stock} единиц. Проверяем количество доступных товаров на складе`;
console.log(message);
// if (stock <= 100) {
//   console.log(`Заказ оформлен, с вами свяжется менеджер`);
// } else {
//   console.log(`На складе недостаточно товаров!`);
// }

const invoice =
  stock > 100
    ? `На складе недостаточно товаров!`
    : `Заказ оформлен, с вами свяжется менеджер`;
console.log(invoice);
