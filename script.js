const store = {
    state: {
        cart: [], shop: []
    },
    getState(){
        return this.state
    },
    dispatch(action){
        if(action.type == "ADD-TO-CART"){
            this.state.cart.push(action.payload)
        }
        else if(action.type == "REMOVE-FROM-CART"){
            const filterCart = this.state.cart.filter( i => i !== action.payload)
            this.state.cart = filterCart
        }
    }
}

function addToCart(product){
    return { type: "ADD-TO-CART", payload: product }
}
function removeFromCart(product){
    return { type: "REMOVE-FROM-CART", payload: product }
}

store.dispatch(addToCart("Apple"))
store.dispatch(addToCart("Banana"))
store.dispatch(addToCart("Strawberry"))
store.dispatch(addToCart("Pear"))

store.dispatch(removeFromCart("Apple"))
store.dispatch(removeFromCart("Pear"))


console.log(store.getState())