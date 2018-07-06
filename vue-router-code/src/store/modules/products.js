import shop from '../../api/shop'
// 搬运actions 动作
// 状态数据 state
// getters 获取状态的get方法
//mutation 改变，会计，记账
const state = {
     all:[]
}
const getters={}
const actions={
    getAllProducts({commit}){
        console.log('货车发动');           
        shop.getProduct(products=>{
            console.log('载货归来');          
            commit('setProducts',products)
        })
    }
}
const mutations={
    setProducts(state,products){
        console.log('入库被验收，mutations改变状态，卸货');      
        state.all=products
    },
    decrementProductInventory(state,{id}){
        const product=state.all.find(product=>product.id===id);
        product.inventory--
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
