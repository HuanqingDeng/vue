<template>
<div>
    <img v-for="item in content" :key="item" :src='item.srcc' />
</div>
    <!-- <img src="./../assets/logo1.png" alt=""> -->
    
</template>

<script>
export default {
 data(){
    return {
      content:[
        {srcc:require('./../assets/logo2.png')},
        {srcc:require('./../assets/logo2.png')},
        {srcc:require('./../assets/logo2.png')},
        {srcc:require('./../assets/logo2.png')}
      ]
      // sex:0,
      // content:`<span>美团挂了，还有UC</span>`
    }
  }
}
</script>

<style>

</style>
