<template>
  <div class="home">

    <div class="mainPic">
      <topNav></topNav>
    </div>
  </div>
</template>

<script>
  import topNav from '../common/topNav'
  export default{
    name:'Home',
  components:{
      topNav
  }
  }
</script>

<style scoped>
.mainPic{
  margin-top:-15px;
  width:100%;
  height:800px;
  background-image: url("../../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
}
  </style>
