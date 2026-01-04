
export const increment = (cart, idx)=> {
    console.log("increment")
   cart.quantity[idx] += 1;
    console.log("cart", cart)
}

export const decrement = (cart, idx)=> {
    console.log("decrement before", cart)
   const currVal = cart.quantity[idx]
      if (currVal <= 0){
        cart.quantity[idx] = 0;
        return;
      }
   cart.quantity[idx] -= 1;
    console.log("decrement after", cart)
}

export const removeItem = (cart, idx)=> {
    console.log("removeItem", idx)
    cart.quantity[idx] = 0;
}

// export const ima
// export const increment = ()=> {
//
// }
// export const increment = ()=> {
//
// }



