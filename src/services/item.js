//casos de uso do item 

// -> criar item com subtotal certo 
async function createItem(name, price, quantity) {
    return{
        name,
        price, 
        quantity,
        subTotal : () => price * quantity,  //funcao para calcular subtotal 
    }
}

export default createItem;