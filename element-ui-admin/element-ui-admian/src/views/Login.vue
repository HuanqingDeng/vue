<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" 
        label-position="left" ref="loginForm">
            <div class="title-container">
                <h3 class="title">
                    系统登录
                </h3>
            </div>
            <!-- autoComplete="on"自动提示 -->
            <!-- prop表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 -->
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username" 
                placeholder="请输入用户名">
                 </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password" 
                autoComplete="on" @keyup.enter.native="handleLogin"> 
                 </el-input>
            </el-form-item>
            <el-button type="primary" style="width:100%;margin-bottom:30px" 
            @click.native.prevent="handleLogin" :loading="Loding">
                登录
            </el-button>
        </el-form>
    </div>
</template>
<script>
import {isvalidUsername} from '@/utils/validate.js'
export default {
    data(){
       const validateUsername=(rule,value,callback)=>{
           if(!isvalidUsername(value)){
               callback(new Error('请输入正确的用户名'))
           }else{
               callback();
           }
       }
       const validatePassword=(rule,value,callback)=>{
           if(value.length<6){
               callback(new Error('密码至少6位'))
           }else{
               callback();
           }
       }
        return{
            Loding:false,
            loginRules:{
                username:[{
                    required:true,
                    trigger:'blur',
                    validator:validateUsername
                }],
                password:[{
                    required:true,
                    trigger:'blur',
                    validator:validatePassword
                }]
            },
            loginForm:{
                uername:'',
                password:''
            }
        }
    },
    methods:{
        handleLogin(){
            // 要做什么?要验证数据。refs绑定，validate验证
            this.$refs.loginForm.validate(valid=>{
                if(valid){
                    this.Loding=true;
                    setTimeout(()=>{
                        this.Loding=false
                    },2000)
                    console.log('提交');
                    return true
                }else{
                    console.log('error submit!');
                    return false
                }
            })
        }
    }
}
</script>
<style>

</style>
