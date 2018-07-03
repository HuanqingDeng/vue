<template>
    <div>哈哈哈哈</div>
</template>

<script>
export default {
mounted(){
    // console.log(this.$router);
    setTimeout(()=>{
       this.$router.replace('/') 
    },2000) 
}
}
</script>

<style>

</style>
