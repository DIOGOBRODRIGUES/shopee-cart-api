import createItem from "./services/item.js";

const cart = [];

console.log("Welcome to the your shopee cart")

const item1 = await createItem("geladeira", 1999.90, 1)
const item2 = await createItem("torradeira", 53.70, 2)

console.log(item2.subTotal());