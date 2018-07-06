<template>
  <div id="app">
    <h1>shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list/>
    <hr>
    <shopping-cart/>
  </div>
    <!-- <h1>Basic</h1>
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/foo">Foo</router-link>
      </li> -->
      <!-- <li>
        <router-link></router-link>
      </li> -->
    <!-- </ul>
    <router-view></router-view> -->
  <!-- </div> -->
</template>
<script>
import ProductList from '@/components/ProductList'
import ShoppingCart from '@/components/ShoppingCart'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
    ProductList,
    ShoppingCart
  },
    created(){
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
