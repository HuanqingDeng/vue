<template>
<div>
     <button @click="out" >退出</button>
</div>
   
</template>

<script>
import auth from '@/auth';
export default {
    data(){
        return {
            hidden:false
        }
    },
    methods:{
        out(){
            auth.loginOut();
            this.$router.replace(this.$route.query.redirect || '/')
        }
    }
}
</script>

<style>

</style>
