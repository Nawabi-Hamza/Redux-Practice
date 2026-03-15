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
            this.state.cart.pop()
        }
    }
}

store.dispatch({ type: "ADD-TO-CART", payload: "Banana" })

store.dispatch({ type: "REMOVE-FROM-CART" })

console.log(store.getState())