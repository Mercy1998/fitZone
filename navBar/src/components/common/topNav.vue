<template>
    <div  class="nav-options">
      <el-col :span="15">
        <div class="logo">
       <div class="logoPic"></div>
      </div>
      </el-col>
      <el-col :span="9">
        <el-menu style="opacity: 0.8;height: 100px;" :default-active="activeIndex" background-color="#000" text-color="#fff" mode="horizontal" @select="handleSelect" router>

          <el-menu-item index="Home" style="margin-top: 28px;height: 70px;">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">健身干货</template>
            <el-menu-item index="knowledgeBase">知识干货</el-menu-item>
            <el-menu-item index="skillProcess">技巧图解</el-menu-item>
            <el-menu-item index="teachVideo">教学视频</el-menu-item>
          </el-submenu>
          <el-menu-item index="community" style="margin-top: 28px;height: 70px;">交流社区</el-menu-item>
          <el-submenu index="4">
            <template slot="title">个人中心</template>
            <el-menu-item index="personalInfor">基础信息</el-menu-item>
            <el-menu-item index="weightRecord">体重记录</el-menu-item>
            <el-menu-item index="InforEdit">资料编辑</el-menu-item>
          </el-submenu>
          <el-menu-item index="5" style="margin-top: 28px;height: 70px;" @click="exit()">
            <i class="icon iconfont icon-out"></i>
          </el-menu-item>
        </el-menu>

      </el-col>
  </div>

</template>

<script>
  export default{
    name:'topNav',
    computed: {
      activeIndex: function(){
        return this.$route.path.replace('/', '');
      }
    },
methods:{
      exit(){
        this.$router.replace('/');
      },
  handleSelect(key,path){
        console.log(this);
console.log(key,path);
  }
},


}


</script>

<style>
.nav-options {
  width: 80%;
  margin: 0 auto;
}
.logo{
  background-color: black;
  opacity: 0.8;
  height: 90px;
  padding-top: 10px;
}
.logoPic{
  position: relative;
  top: 10%;
  width: 15%;
  height: 70px;
  background-color: aliceblue;
  margin-left: 10px;
}
.el-menu--horizontal{
    border-bottom: none;
  }

.el-menu-item ,.el-submenu__title{
  margin-top: 28px;
  font-size:24px;
  font-family:'微软雅黑';
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  height: 70px;
}
  .iconfont{
    font-size: 24px;
    margin-top: 28px;
  }
</style>
