<template>
    <ul>
        <li v-for="(product,index) in products" :key="index">
            {{product.title}}-{{product.price | currency}}
            <br>
            <button :disabled="!product.inventory" @click="addProductToCart(product)">
                Add to cart
            </button>
        </li>
    </ul>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            // disabled:false
        }
    },
    computed:mapState({
        // 读取状态 map        
        products:state=>state.products.all
    }),
    methods:mapActions([
        'addProductToCart'// 将 `this.addProductToCart()` 映射为 `this.$store.dispatch('addProductToCart')`
    ]),
    created(){
        // Action 通过 store.dispatch 方法触发：
        this.$store.dispatch('getAllProducts')
    }
}
</script>

<style>

</style>
