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
        if(action.type == "ADD-TO-SHOP"){
            this.state.shop.push(action.payload)
        }
    }
}

store.dispatch({ type: "ADD-TO-CART", payload: "Banana" })

store.dispatch({ type: "ADD-TO-SHOP", payload: 3 })

console.log(store.getState())