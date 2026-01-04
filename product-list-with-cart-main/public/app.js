import {increment, decrement, removeItem} from "./utils.js"
const { createApp, ref, onMounted, onUpdated, watch, computed } = Vue;

createApp({
    setup(){
        const data = ref('');
        const emptyCart = {
            quantity: [],
            price: [],
            itemTotal: [],
            cartTotal: 0,
            totalNumItems: 0,
            itemIndexes: [],
        }
        const cart = ref({...emptyCart})
        const isCheckedOut = ref(false);

        cart.value.itemTotal = computed(()=> {
            console.log("computed itemtotal")
            return cart.value.price.map((val, idx) => val * cart.value.quantity[idx]);
        })

        cart.value.cartTotal = computed(() => {
            console.log("computed carttotal")
            let totalSum= 0;
            cart.value.itemTotal.forEach(num => totalSum += num)
           return totalSum.toFixed(2);
        })

        cart.value.totalNumItems = computed(() => {
           console.log('totalnumitems')
            let sum  = 0;
            cart.value.quantity.forEach(num => sum += num)
            return sum;
        })

        // cart.value.itemIndexes = computed(() => {
        //     cart.value.itemIndexes = [];
        //     console.log("yo cart.value.itemIndexes:", cart.value.itemIndexes, cart)
        //     cart.value.quantity.forEach((ele, idx) => {
        //         if (ele > 0){
        //             cart.value.itemIndexes.push(idx);
        //         }
        //     })
        // })

        watch(cart.value.quantity, () =>{
        // watch(cart, () =>{
            console.log("watch quantity triggered")
            cart.value.itemIndexes = [];
            cart.value.quantity.forEach((ele, idx) => {
                if (ele > 0){
                    cart.value.itemIndexes.push(idx);
                }
            })
        } )


        onMounted(async()=> {
            const res = await fetch('./data.json');
            data.value = await res.json();
            data.value.forEach((item, idx) => {
                cart.value.quantity.push(0);
                cart.value.price.push(item.price);
            })
        })


        const resetCart = () => {
            console.log("b4resetCart", cart.value)
            Object.assign(cart.value, emptyCart);
            // cart.value = {...emptyCart} # this breaks reactivity by creating a new object reference
            console.log("after resetCart", cart.value)
            isCheckedOut.value = false;
            data.value.forEach((item, idx) => {
                cart.value.quantity[idx] = 0
            })
            // cart.value.quantity = Array(data.value.length).fill(0); # this breaks reactivity
            console.log("cart.value final is:", cart.value)
        }

        const closeModal = () => {
            isCheckedOut.value = false;
            console.log("closeModal", isCheckedOut.value)
        }

        return {
            isCheckedOut,
            cart,
            closeModal,
            data,
            decrement,
            increment,
            removeItem,
            resetCart,
        }
    }
}).mount("#app");