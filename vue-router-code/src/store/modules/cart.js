const state={
    items:[],
    checkoutStatus:null
}
// 对state进行计算处理
const getters={
    // rootState:全局(根)state
    cartProducts:(state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product=rootState.products.all.find(product=> product.id==id);
            return {
                id:product.id,
                title:product.title,
                quantity,
                price:product.price
            }
        })
    },
     cartTotalPrice:(state,getters)=>{
            return getters.cartProducts.reduce((total,product)=>{
                return total+product.quantity*product.price
            },0)
    }
}
const actions={
    addProductToCart({state,commit},product){
        // console.log(product);
        if(product.inventory>0){
            const cartItem=state.items.find(item=>item.id===product.id)
            if(!cartItem){
                // commit 提交一个 mutation
                commit('pushProductToCart',{id:product.id})
            }else{
                commit('incrementItemQuantity',cartItem)
            }
            commit('decrementProductInventory',{id:product.id})
        }
    }
}
// 改变
const mutations={
    pushProductToCart(state,{id}){
        state.items.push({
            id:id,
            quantity:1
        })
    },
    incrementItemQuantity(state,{id}){
        const cartItem=state.items.find(item=>item.id===id)
        cartItem.quantity++
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}