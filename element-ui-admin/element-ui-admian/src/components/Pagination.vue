<template>
    <div>
        <el-col :span="24" class="pagination">
            <el-pagination layout="prev,pager,next" :current-page="currentPage" style="float:right"
            :total="totalCount" :page-size="pagesize" @current-change="handleCurrentPage">
            </el-pagination>
        </el-col>
    </div>
</template>

<script>
export default {
    props:['totalCount','currentPage','pagesize'],
    methods:{
        handleCurrentPage:function(val){
            this.$emit('turnPage',val);
            console.log(val);
        }
    }
}
</script>

<style>

</style>
