import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = []; 

console.log("Welcome to the your shopee cart")

const item1 = await createItem("geladeira", 1999.90, 1)
const item2 = await createItem("torradeira", 53.70, 2)


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2)

await cartService.diplayCart(myCart);



// await cartService.deleteItem(myCart,item2.name);
// await cartService.deleteItem(myCart,item1.name);


await cartService.calculateTotal(myCart);

