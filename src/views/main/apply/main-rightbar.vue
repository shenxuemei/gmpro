<template>
  <div class="site-right" :class="{'site-right-hide': !isCollapse,'site-right-show': isCollapse}">
    <!-- isCollapse === false ---start -->
    <div v-if="!isCollapse" style="padding: 20px 10px;">
      <div class="right-bottom">
        <div class="item" @click="msgBackClick()">
          <div class="icon icon-01"></div>
          <div class="msg"><span>意见反馈</span></div>
        </div>
        <div class="item" @click="$router.push({ name: 'rightBarMsg' })">
          <div class="icon icon-02"></div>
          <div class="msg"><span>系统消息</span></div>
          <div class="right-badge">99+</div>
        </div>
        <div class="item" @click="$router.push({ name: 'rightBarHelp' })">
          <div class="icon icon-03"></div>
          <div class="msg"><span>支持帮助</span></div>
        </div>
      </div>
    </div>
    <main-rightbar-msg ref="refsMsg"/>
    <!-- isCollapse === false ---end -->

    <!-- isCollapse === true ---start -->
    <!-- <div v-if="isCollapse" style="padding: 20px 10px;">
      <a href="javascript:" @click="handleClose">close</a>
    </div> -->
    <!-- isCollapse === true ---end -->
  </div>
</template>

<script>
  import MainRightbarMsg from './main-rightbar-msg'
  export default {
    data () {
      return {
        isCollapse: false
      }
    },
    components: {
      MainRightbarMsg
    },
    computed: {
      mainRight: {
        get () { return this.$store.state.common.mainRight },
        set (val) { this.$store.commit('common/updateMainRight', val) }
      }
    },
    methods: {
      msgBackClick () {
        this.$refs.refsMsg.init()
      }
    }
  }
</script>
<style lang="scss">
.site-right{
  .reset-dialog {
    width: 400px;
    height: 400px;
    position: fixed;
    right: 50px;
    bottom: 150px;
    overflow: auto;
    margin: 0;
    .el-dialog__wrapper{
      position: absolute;
      .el-dialog{
        margin: 0;
        background: #f9f9f9;
      }
    }
  }
}
.right-bottom{
  height: 180px;
  width: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  .item{
    width: 50px;
    height: 50px;
    position: relative;
    .msg{
      display: none;
      padding: 7px 10px;
      span{
        display: inline-block;
        line-height: 18px;
      }
    }
    &:hover{
      background: #efefef;
      cursor: pointer;
      .msg{
        display: block;
        span{ color: #3E8EF7; font-size: 12px;}
      }
      .icon{
        display: none;
      }
    }
    .icon{
      width: 50px;
      height: 50px;
    }
    .icon.icon-01{
      background: url(~@/assets/img/icon_rbar_set.png) center center no-repeat;
      background-size: 20px auto;
    }
    .icon.icon-02{
      background: url(~@/assets/img/icon_rbar_msg.png) center center no-repeat;
      background-size: 20px auto;
    }
    .icon.icon-03{
      background: url(~@/assets/img/icon_rbar_help.png) center center no-repeat;
      background-size: 20px auto;
    }
    .right-badge{
      background-color: red;
      position: absolute;
      top: 0px;
      right: 0px;
      width: 24px;
      height: 13px;
      line-height: 13px;
      font-size: 10px;
      border-radius: 15px;
      color: #ffffff;
      text-align: center;
    }
  }
}
</style>