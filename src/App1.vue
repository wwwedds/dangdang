<template>
  <div class="hello">
      <div v-for='(item,index) in showList' :key="index">{{item}}</div>
      <div @click="showAll = !showAll" class="show-more">{{word}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
    return {
      toLearnList:[
        'html','css','javascript','java','php'   //进行显示的数据
      ],
      showAll:false//标记数据是否需要完全显示的属性
      }
  },
    computed:{
    showList:function(){
      if(this.showAll === false){var showList = []//定义一个空数组
        if(this.toLearnList.length>3){for(let i=0;i<3;i++){showList.push(this.toLearnList[i])}}else{showList = this.toLearnList}
        return showList}else{return this.toLearnList;}},
    word:function(){
      if(this.showAll === false){
        return "点击展开"
      }else{
        return '点击收起'
      }
    }
  }
  }
  
</script>

<style scoped>

 
</style>
