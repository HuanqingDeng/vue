<template>
    <form class="input-area">
        <label for="">用户名：</label>
        <input type="text" class="user" placeholder="请输入用户名" ref="username"/>
        <label for="">评论</label>
        <textarea class="textarea" placeholder="请输入评论内容" ref="content"></textarea>
        <button type="button" @click="doComment">提交</button>
    </form>
</template>

<script>
export default {
    data(){
       return{

       }
    },
    methods:{
        doComment:function(){
            const user=this.$refs.username.value;
            const content=this.$refs.content.value;
            const pubTime=new Date().toLocaleString();
            this.$emit('addComment',`${user}:${content}--发布于${pubTime}`);
            this.$refs.content.value='';
            this.$refs.username.value='';
        }
    }
}
</script>

<style>

</style>
