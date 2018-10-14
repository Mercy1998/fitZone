<template>
  <div class="loginPage fillContainer">
    <transition name="form-fade" mode="in-out">
      <section class="form-container" v-show="showLogin">
        <div class="loginTitle">
          <h2 >FitTimE<i class="icon iconfont icon-lightningbshandian"></i></h2>

        </div>

        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="formContainer">
          <el-form-item prop="userName" style="margin-bottom: 20px">
            <el-input v-model="loginForm.userName" placeholder="用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password"  placeholder="密码">
            </el-input>
          </el-form-item>

          <el-button type="primary" @click="submitForm('loginForm')" class="submit-btn">登陆</el-button>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">未登录过的新用户，自动注册</p>
      </section>
    </transition>

  </div>
</template>

<script>

  export default {
    name:'Login',
    data(){
      return {
loginForm:{
  userName:'',
  password:''
}  ,
        rules:{
  userName:[
    {required:true, message:'请输入用户名', trigger:'blur'}
  ],
          password:[
            { required:true, message:'请输入密码', trigger:'blur' }
          ]
        },
        showLogin:false
      }
    },
    mounted(){
      this.showLogin=true;

    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
           this.$message({
             message:'莱维贝贝！',
             type:'success'
           }),
             this.$router.replace('/Home');
          }else{
            this.$message.error('登陆失败！');

          }
        })
      }
    }
  }

</script>

<style scoped>
  .loginPage{
    height: 100%;
   background-image: url("../../assets/bg2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
.form-container{
  width: 18%;
  height: 400px;
  position:absolute;
  top: 30%;
  left: 38%;
  background-color:rgba(255,255,255,0.9);
  border-radius: 10px;
  padding:10px 80px;

}
.loginTitle{
  font-size: 1.8em;
  color: #000;
}
  .formContainer{
    margin-top: 20px;
  }
  .submit-btn{
    margin-top: 20px;
    width: 100px;
    font-size: 16px;
    color:#fff;
    background-color: #000;
  }
  .iconfont{
    font-size: 40px;
    color: #000;
  }
  .tip{
    font-size: 14px;
    color: red;
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 2s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }

 /* @media (max-width:) {

  }*/
  </style>
