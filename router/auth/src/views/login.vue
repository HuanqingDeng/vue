<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label for="">
                <input v-model="email" placeholder="email"/>
            </label>
            <label for="">
                <input v-model="pass" placeholder="password" type="password"/>
            </label>
            <button type="submit">Login</button>

        </form>
    </div>
</template>

<script>
import auth from '@/auth';
export default {
    data(){
        return {
            email:'joe@eample.com',
            pass:''
        }
    },
    methods:{
        login(){
            auth.login(this.email,this.pass,(loggedIn)=>{
                console.log(loggedIn);
                if(loggedIn){
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            })
            // 验证（email,pass）=>auth.login()
            // 失败、成功 localStorage.setItem('token','1233')
            // 1.auth.login 传参
            // 2.成功之后跳转。this.$router
        }
    }
}
</script>

<style>

</style>
