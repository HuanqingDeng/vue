<template>
    <div>
        <comment-item v-for="(item,index) in list" :key="index" :content="item"/>
        <div v-if="list.length==0">当前没有评论</div>
     </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
    props:{
        'list':Array
    },   
    components:{
        CommentItem
    }
}
</script>

<style>

</style>
