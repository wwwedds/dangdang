<template>
  <div id="app">
    <Header class="header"></Header>
    <router-view></router-view>

    <Footer v-show='$route.meta.isShow'></Footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'
export default {
 components:{
   Header,Footer
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  width 100%
  height 100%
  .header
    position fixed
    top 0px
    left 0px
    background-color  white
    color black
    z-index 99
  
</style>
