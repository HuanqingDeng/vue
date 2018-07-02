<template>
    <div class="app-containter">
        <div class="filter-container">
            <el-select v-model="listQuery.importance" placeholder="重要性" class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        </div>
        <el-table :data="list" v-loading="listLoading">
            <el-table-column label="序号" algin="center" width="65">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="importance" label="重要性" algin="center" width="150"></el-table-column>
            <el-table-column prop="timestamp" label="日期" algin="center" width="150"></el-table-column>
            <el-table-column prop="title" label="标题" min-width="150"></el-table-column>
            <el-table-column prop="author" label="作者" algin="center" width="110"></el-table-column>
            <el-table-column prop="pageviews" label="阅读数" algin="center" width="110"></el-table-column>
            <el-table-column label="操作" algin="center" width="230" class="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary"  @click="hanleUpdata(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
            
        </el-table>
        <div class="pagination-container">
            <el-pagination :current-page="listQuery.page" :page-size="listQuery.limit"
             :total="total" layout="total,sizes,prev,pager,next,jumper" @current-change="handleCurrentChange(page)">

            </el-pagination>
        </div>
        <el-dialog title="编辑" :visible.sync="dialogFormVisible" closeable>
            <el-form :mode="temp" label-position="left">
                <el-form-item prop="title" lable="标题">
                  <el-input  v-model="temp.title"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible=false">取消</el-button>
                <el-button @click="updataData">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {fetchList} from '@/api/article'
export default {
  data() {
    return {
        importanceOptions:[1,2,3],
        total:0,
        // 弹窗里的表单model
        listLoading:false,
        dialogFormVisible:false,
        temp:{
            id:null,
            importance:1,
            remark:'',
            timestamp:new Date(),
            title:'',
            type:'',
            status:'published'
        },
      list: [
         
      ],
      listQuery: {
        title: undefined,
        importance: undefined,
        type: undefined,
        sort: "+id",
        page: 1,
        limit: 20
      }
    };
  },
  created(){
      this.getList();
  },
  methods: {
    hanleUpdata(row){
        // console.log(row);
        this.temp=Object.assign({},row);
        this.dialogFormVisible=true;
    },
    getList(){
        this.listLoading=false;
        fetchList(this.listQuery)
            .then(response=>{
                this.list=response.data.items
                this.total=response.data.total
                setTimeout(()=>{
                    this.dialogFormVisible=false;
                },2000)
            })
    },
    updataData(){
        this.dialogFormVisible=true;
    },
   handleCurrentChange (page) {
      this.listQuery.page = page;
      this.getList();
    },
    handleFilter(){
        this.listQuery.page=1;
        this.getList();
    }
  }
};
</script>

<style>
</style>
