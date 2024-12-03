//acoes que o carrinho pode fazer 

// ✅-> adicionar item do carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// -> deletar item do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);
    
}

// -> remover um item do carrinho 
async function removeItem(userCart, index) {
    
}
// -> calcular o total do carrinho 
async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subTotal(), 0));
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
}

