import {increment, decrement, removeItem} from "./utils.js"
const { createApp, ref, onMounted, onUpdated, watch, computed } = Vue;

createApp({
    setup(){
        const data = ref('');
        const cart = ref({
            quantity: [],
            price: [],
            itemTotal: [],
            cartTotal: 0,
            totalNumItems: 0,
            itemIndexes: [],
        })
        const modal = ref(false);

        cart.value.itemTotal = computed(()=> {
            return cart.value.price.map((val, idx) => val * cart.value.quantity[idx]);
        })

        cart.value.cartTotal = computed(() => {
            let totalSum= 0;
            cart.value.itemTotal.forEach(num => totalSum += num)
           return totalSum.toFixed(2);
        })

        cart.value.totalNumItems = computed(() => {
            let sum  = 0;
            cart.value.quantity.forEach(num => sum += num)
            return sum;
        })
        // cart.value.totalNumItems = 2

        watch(cart.value.quantity, () =>{
            cart.value.itemIndexes = [];
            cart.value.quantity.forEach((ele, idx) => {
                if (ele > 0){
                    cart.value.itemIndexes.push(idx);
                }
            })
        })

        onMounted(async()=> {
            const res = await fetch('./data.json');
            data.value = await res.json();
            data.value.forEach((item, idx) => {
                cart.value.quantity.push(0);
                cart.value.price.push(item.price);
            })
        })

        onUpdated(() => {
            console.log("cart", cart)
        })
        // cart.value.quantity = [ 0, 2, 3, 0, 0, 1, 0, 0];

        return {
            cart,
            data,
            increment,
            decrement,
            modal,
            removeItem,
        }
    }
}).mount("#app");