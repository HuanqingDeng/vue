<template>
  
  <div id="app">
    <img-to></img-to>
    <!-- <div v-for="item in content" :key="item" > -->
      <!-- <img v-for="item in content" :key="item" :src='item.srcc' /> -->
      <!-- <p>{{item.content}}</p> -->
    <!-- </div> -->
   <!-- <img src="/assets.logo2.png" alt=""/> -->
    <!-- <comment/> -->
    <!-- <login></login> -->
      <!-- <p v-html="content"></p> -->
      <!-- <ele-radio-group v-model="sex">
        <ele-radio label="女"></ele-radio>
        <ele-radio label="男"></ele-radio>
      </ele-radio-group> -->
      <!-- <article-table></article-table> -->
  </div>
</template>
<script>
// import ArticleTable from '@/views/ArticleTable'
// import Comment from '@/components/Comment'
// // @表示alias地址短链接，在哪里都指向src,让地址引入更轻松
// import Login from '@/views/Login'
// import eleRadioGroup from '@/components/eleRadioGroup'
// import EleRadio from '@/components/EleRadio'
import ImgTo from '@/components/img'

export default {
  name: 'App',
  data(){
    return {
      content:[
        {srcc:require('./assets/logo2.png')},
        {srcc:require('./assets/logo2.png')},
        {srcc:require('./assets/logo2.png')},
        {srcc:require('./assets/logo2.png')}
      ]
      // sex:0,
      // content:`<span>美团挂了，还有UC</span>`
    }
  },
  components: {
    // 'login':Login,
    // eleRadioGroup,
    // EleRadio,
    // Comment,
    // ArticleTable
    ImgTo
  }
}
</script>

<style lang="scss">
// #app{
//   display: inline-block;
//   width: 100px;
//   height: 100px;
//   // background: #000;
// }
// img{
//   width: 100px;
//   height: 100px;
//   background: rgb(104, 47, 47);
// }
// $bg:#2d3a4b;
// $light_gray: #eee;
// .login-container {
//   .el-input {
//     display: inline-block;
//     height: 47px;
//     width: 85%;
//     input {
//       background: transparent;
//       border: 0px;
//       -webkit-appearance: none;
//       border-radius: 0px;
//       padding: 12px 5px 12px 15px;
//       color: $light_gray;
//       height: 47px;
//       &:-webkit-autofill {
//         -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
//         -webkit-text-fill-color: #fff !important;
//       }
//     }
//   }
//   .el-form-item {
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     background: rgba(0, 0, 0, 0.1);
//     border-radius: 5px;
//     color: #454545;
//   }
// }
</style>


