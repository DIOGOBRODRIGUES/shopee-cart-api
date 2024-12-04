//acoes que o carrinho pode fazer 

// ✅-> adicionar item do carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// ✅-> deletar item do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
    
}

// -> remover um item do carrinho 
async function removeItem(userCart, index) {
    //transforma index visual do ususario
    const deleteIndex = index - 1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

async function diplayCart(userCart) {
    console.log("\nShopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subTotal()} `)
    });
}
// -> calcular o total do carrinho 
async function calculateTotal(userCart) {
    console.log(`\nShopee total cart: `);
    const result =  userCart.reduce((total, item) => total + item.subTotal(), 0)
    console.log(`🛒Total: ${result}`);
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    diplayCart,
}

