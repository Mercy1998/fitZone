import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/login'
import Home from '@/components/pages/home'
import PersonalInfor from '@/components/pages/personalInfor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Home',
      name:'Home',
      component:Home
    },{
    path:'/personalInfor',
      name:'PersonalInfor',
      component:PersonalInfor
    }
  ]
})
