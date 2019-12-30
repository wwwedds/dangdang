import Vue from  'vue'
import VueRouter from 'vue-router'
import Detail from '../pages/detail/detail'
import Goods from '../pages/goods/goods.vue'
import Comment from '../pages/comment/comment.vue'
import Recommend from '../pages/comment/comment.vue'
import Shop from '../pages/shop/shop.vue'
import Cart from '../pages/cart/cart.vue'
import BuyNow from '../pages/buyNow/buyNow.vue'

Vue.use(VueRouter)
 export default new VueRouter({
  mode: 'hash',
  routes: [
    { // 一般路由
      path: '/detail',
      component: Detail,
      meta:{
        isShow:true
      }

    },
    { // 一般路由
      path: '/goods',
      component: Goods,
      meta:{
        isShow:true
      }
    },
    { // 一般路由
      path: '/comment',
      component: Comment ,
      meta:{
        isShow:true
      } 
      
    },
    { // 一般路由
      path: '/recommend',
      component: Recommend ,
      meta:{
        isShow:true
      } 
    },
    {
      path: '/shop',
      component: Shop,
      meta:{
        isShow:true
      }
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/buynow',
      component:BuyNow
    },
    { // 自动跳转路由
      path: '/',
      redirect: '/detail'
    }
  ]
})