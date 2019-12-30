<template>
  <div class='detailContainer'>
    <!-- 轮播图 -->
      <div  class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" >          
              <img src="./images/1.jpg">          
            </div>
            <div class="swiper-slide" >          
              <img src="./images/2.jpg">          
            </div>
             <div class="swiper-slide" >          
              <img src="./images/2.jpg">          
            </div>
             <div class="swiper-slide" >          
              <img src="./images/2.jpg">          
            </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 轮播图结束 -->
      <!-- 图书标题及价格开始-->
      <div class="content">
        <div class="title">
          <p><img src="./images/icon_zy.png" />鬼谷子全集正版原著珍藏版全书绝学白话文鬼谷子教你攻心术鬼谷子的局心计谋略为人处世绝学智慧谋略成功书籍畅销书排行榜鬼谷子书</p>
          <p>吉林出版社</p>
          <a class="promo_title"  
          href="javascript:;">跨年狂欢，百万图书5折封顶，点击抢购！</a>
        </div>
        <div class="new_price">
          <div class="new_left">
            <div class="main_price_div">¥<span class="main_price">1.00</span>
            </div>
            <span class="discount">(0.26折)</span>
            <!--降价提醒-->
          <div class="price_remind">
              <a class="notice" href="javascript:;">
                  <span class="icon iconfont icon-jiangjiatixing"></span>
                  降价通知
              </a>
          </div>
          </div>
          <!-- 定价 -->
          <div class='price'>
            <div class="price-div">定价<span class="line"> ¥39.50</span></div></div>
            <div class="seckill">限购价</div>
          </div>
      </div>
    <!-- 图书标题及价格结束 -->
    <!-- 评论模块开始 -->
      <div class="book_score">
        <div class="left">
          <div class="stars_div">
            <span class="score">9.5</span>
            <div class="stars">
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
            </div>
          </div>
          <div class="p_num">1448人评分<span class="p_message">精彩评分送积分</span></div>
        </div>
        <div class="right">
          <div class='right-content'><div>我要写评论</div></div>
          
        </div>
      </div>
    <!-- 评论模块结束 -->
    <!-- 促销模块开始 -->
      <div class="promotion" @click="showPopup">
        <van-popup v-model="show" :style="{ height: '20%',width: '60%'}">
              <span class="coupon_title">满额减</span>
              <span class="icon_list">每满￥79.00减￥30.00</span>
              <span class="coupon_title">加价购</span>
              <span class="icon_list">加1.90~129.00元换购热销商品</span>
              <span class="coupon_title">加价购</span>
              <span class="icon_list">加1.90~129.00元换购热销商品</span>
           
        </van-popup>
          <div class="promote_name"><span class="aa">促销</span></div>
          <div class="promo_section">
            <a  href="javascript:;">
              <span class="coupon_title">满额减</span>
              <span class="icon_list">每满￥79.00减￥30.00</span>
            </a>
            <a  href="javascript:;">
              <span class="coupon_title">加价购</span>
              <span class="icon_list">加1.90~129.00元换购热销商品</span>
            </a>
            <a  href="javascript:;">
              <span class="coupon_title">加价购</span>
              <span class="icon_list">加1.90~129.00元换购热销商品</span>
            </a>
          </div>
          <div class='arror'>
            <i class="iconfont icon-jiantou1"></i>
          </div>		
      </div>
    <!-- 促销模块结束-->
    <!-- 图书信息模块开始 -->
      <div class="book-info">
        <section>
          <span>作者</span>
          <span>安安</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
        <section>
          <span>出版</span>
          <span>安安</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
        <section>
          <span>排名</span>
          <span>安安</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
        <section>
          <span>分类</span>
          <span>安安</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
      </div>
      
    <!-- 图书信息模块开始 -->
    <!-- 配送信息开始 -->
      <section class="jump_detail">
        <div class="address">
          <a>
            <dl @click="showPicker=true">
              <dt>送至：</dt>
              <dd>{{value[0] || '省'}}&gt;{{value[1] || '市'}}&gt;其他区县
                <br>22:45前下单，预计明天送达
                <br>运费6元，满49元包邮
                <br></dd>
            </dl>
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
                @change="onChange"
              />
            </van-popup>
          </a>
          <div class='arror'>
           <i class="iconfont icon-jiantou1"></i>
        </div>
        </div>	
        <div class="deliver">
          <ul>
              <li class="icon_support"><i class='iconfont icon-yuandianxiao'></i>当当发货&amp;售后</li>

              <li class="icon_support"><i class='iconfont icon-yuandianxiao'></i>正品保障</li>

              <li class="icon_support"><i class='iconfont icon-yuandianxiao'></i>支持当当V卡</li>

              <li class="icon_support"><i class='iconfont icon-yuandianxiao'></i>支持使用当当V卡支付</li>

              <li class="icon_support"><i class='iconfont icon-yuandianxiao'></i>支持7日无理由退货</li>
          </ul>
        </div>
      </section>
      <!-- 配送信息结束 -->
      <!-- 数量图文详情更多卖家-->
      <section class='count'>
        <span>数量:</span>
        <button>+</button>
        <input type="text" value='1'>
        <button>-</button>
      </section>
      <section class="infomation">
        <a href="javascript:;">图文详情</a>
        <div class='arror'>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </section>
      <section class="more-sellers">
        <a href="javascript:;">更多卖家</a>
        <div class='arror'>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </section>
  <!--短评长评开始-->
    <div class='comment'>
      <div class="short-comment">
        <a><h4>短评（1620）<span class="good_rate">100.0%好评</span> 
            <div class="write_comment">写短评</div></h4>
        </a>
        <ul class="comment_list">
          <li><a href="javascript:;">好评(1620)</a></li>
          <li><a href="javascript:;">对孩子有帮助的(1620)</a></li>
          <li><a href="javascript:;">实用的(1620)</a></li>
          <li><a href="javascript:;">全面的(1620)</a></li>
          <li><a href="javascript:;">好评(1620)</a></li>
          <li><a href="javascript:;">好评(1620)</a></li>
        </ul>
        <ul class="comment_content">
          <li>
            <div class="book-userinfo">
              <a class="user_pictor" href="javascript:;"><img src="./images/ddshop_icon.png"/> </a>
              <a class="user_name" href="javascript:;"><span>用户昵称</span></a>
              <span class="buy"><img src="./images/1546071739-reviewimg-9_o.jpg" alt=""></span>
              <div class="stars_div">
                <div class="stars">
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                </div>
                <span class="score">9.5分</span>
              </div>
                <a><span class="text_type ">
                  </span><p class="content_text ">
                    我自己学习用的，每周背两篇，之前已经背了一部分，
                    这次买的比之前的书更详细，喜欢！</p></a>
              <div class="user_operate">
              <span><i class='iconfont icon-dianzan'></i><span class="text">1</span></span>
               <a href="javascript:;"><i class='iconfont icon-huihua'></i>回复</a>
              </div>
             
            </div>
          </li>
        </ul>
        <a class='more' href="javascript:;">查看更多评论</a>
      </div>
    </div>
    <div class="lang-comment">暂无长评</div>
    <!-- 短评长评 结束-->
    <section class="shop">
      <a href="javascripts:;">
        <div class="shop_header"><img src="./images/ddshop_icon.png" alt=""><span>当当自营图书</span></div>
      </a>
      <ul class="shop_info"> 
        <li>
          <p>商品包装</p>
          <strong>4.5</strong>
        </li>
         <li>
          <p>商品包装</p>
          <strong>4.5</strong>
        </li>
         <li>
          <p>商品包装</p>
          <strong>4.5</strong>
        </li>
      </ul>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
 // import citys from  './citys'
  const citys = {
  '浙江省': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建省': ['福州', '厦门', '莆田', '三明', '泉州'],
  '河北省': ['石家庄','廊坊','承德']
};
  export default {
    data() {
    return {
      value: '',
      showPicker: false,
     columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ],
      show:false
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
    ,showPopup() {
      this.show = !this.show;
    }
  },
     mounted() {
          new Swiper ('.swiper-container', {
      
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
    
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.detailContainer
    background-color  #EEEEEE
    .swiper-container
      position relative
      width 100%
      height 100%
      border-bottom 1px solid  #eee
      .swiper-wrapper
          .swiper-slide
            img
              width 100%
              heigth 100%
        .swiper-pagination
          --swiper-pagination-color #E44D26
          position absolute
          left 0
    .content
      //margin-left 5px
      padding 10px 0 12px
      color #4d525d
      font-size 14px
      line-height 20px
      background-color  white
      .title
        margin 5px 10px 4px
        img
          height 14px
          vertical-align middle
        .promo_title
          color red
          font-size 14px
          text-decoration underline
      .new_price
        margin-top 20px
        margin-left 5px
        color #4d525d
        font-size 13px
        display flex
        flex-direction column
        justify-content space-between
        .new_left
          display flex
          .main_price_div 
            color red
            .main_price
              font-size 20px
          .price_remind
            .notice
              border 1px solid #222222
              border-radius 10px
              font-size 10px
              padding 2px 4px
              vertical-align middle
              margin-left 5px
              span
                vertical-align middle
        .price
          margin 10px 0
          .line
            text-decoration line-through
          .seckill
            padding-left 5px 
    .book_score
      display flex
      padding-left 10px
      line-height 30px
      background #F8F8F8
      color #FF8363 
      .left 
        width 75%
        display  flex
        flex-direction column
        .stars_div
          display flex
          .stars
            margin-left 5px
            color #FF8363
        .p_num
          color #4d525d
          padding-right 10px
          .p_message
            color #FF8363
            margin-left 10px     
      .right
        //line-height 60px
        padding-top  15px
        .right-content
          font-size 14px
          border 1px solid red
          border-radius 15px
          bacground #FFF2EF
    .promotion
      display flex   
      margin-top 6px
      padding 10px  0 10px  10px
      background-color  white
      .promote_name
        color #EA002A
        padding-top 2px
        font-size 12px
        
      .promo_section
        width 80%
        display flex
        flex-direction column
        margin 0 10px
        .coupon_title
          line-height 25px 
          color #EA002A
          border 1px solid red
          border-radius 4px
          margin 0 10px
          .icon_list
            color #4D525D
            padding-left 15px
            font-size 12px
            
      .arror
          line-height 65px
          color #4D525D
          font-size 8px
    .book-info
      margin-top 6px
      background-color  white
      font-size 16px
      color #4d525d
      padding-left 10px
      padding-right 10px
      line-height 35px
      section
        display flex
        border-bottom 1px solid #eee
        span
          width 20%
          &:nth-child(2)
            width 55%
    .jump_detail
      display flex
      flex-direction column
      padding-left 10px
      margin-top 6px
      background-color  white
      padding-top 10px
      font-size 16px
      padding-right 10px
      .address
        display flex
        border-bottom 1px solid #eee
        a
          width 92%
          dl
            display flex
            dt
              margin-right 20px
            dd
              line-height 25px
        .arror
          line-height 65px
          color #4D525D
          font-size 8px
      .deliver
        font-size 12px
        ul
          display flex
          flex-wrap wrap
          padding 10px 0
          li
            padding 5px 5px
            i
              color #FF0000
              font-size 10px
    .count
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4d525d
      span 
        margin-right 20px
      button
        vertical-align middle
      input 
        display inline-block
        width 30px
        height 20px
        padding-left 15px
        border-top 1px solid #B4B4B4
        border-bottom 1px solid #B4B4B4
        vertical-align middle
    .infomation
      display flex
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4d525d
      a
        width 93%
    .more-sellers
      display flex
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4d525d 
      a
        width 93%  
    .comment
      display flex
      flex-direction column
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 12px
      color #4D525D
      .short-comment
        line-height 25px
        font-size 14px
        .good_rate
          margin 0 10px
          color #FF8161
        .write_comment
          float right
          border 1px solid #FF8161
          padding 2px 4px
          color #FF8161
          border-radius 8px
        .comment_list
          display flex
          flex-wrap wrap
          li  
            border 1px solid #FF8161
            border-radius 15px
            margin 5px 10px
            padding 2px 6px
            a
              color #FF8161
        .comment_content
          .book-userinfo
            //display flex
            padding-top 10px
            .stars_div
              float right
              display flex
              margin-top 5px
              color  #FF8161
            .user_pictor
              vertical-align middle
              img 
                width 40px
            .user_name
              vertical-align middle
              padding 0 10px
            .buy
              vertical-align middle
              img
                margin-top 3px
            .user_operate
              float right
              i
                margin  0px 5px
        .more
          display inline-block
          width 100px
          height 30px
          text-align center
          margin-top 30px
          margin-left 35%
          border 1px solid #FF8161
          border-radius 10px
          color #FF8161
    .lang-comment
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4d525d
    .shop
      margin-top 6px
      padding 15px 10px 0 15px
      background-color  white
      font-size 16px
      color #4d525d
      .shop_header
        border-bottom 1px solid #eee 
        img 
          width 40px
          vertical-align middle
        span 
          vertical-align middle
          margin-left 10px
          font-size 16px
      .shop_info
        display flex
        justify-content space-around
        padding 10px
        li
          //width 33.33%
          padding-right 15px
          border-right 1px solid #eee
          line-height 25px


        
         

          
           
        
</style>
