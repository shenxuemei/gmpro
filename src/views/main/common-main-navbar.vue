<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand" @click="$router.push({ name: 'applyhome' })">
        <a class="site-navbar__brand-lg" href="javascript:;">
          关贸大师
        </a>
        <a class="site-navbar__brand-mini" @click="$router.push({ name: 'applyhome' })" href="javascript:;">&nbsp;</a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <div class="site-navbar__menu home-nav">
        <div class="item" @click="$router.push({ name: 'applyhome' })"><div class="img"></div><span>应用中心</span></div>
      </div>
      <el-menu
        class="site-navbar__menu site-navbar__menu--right"
        mode="horizontal">
        <el-menu-item class="site-navbar__avatar" index="3">
          <el-dropdown :show-timeout="0" placement="bottom">
            <span class="el-dropdown-link">
              <img src="~@/assets/img/avatar.png" :alt="userName">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link target="_blank" :to="{path:'/user-main'}">我的个人信息</router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
  import { clearLoginInfo } from '@/utils'
  export default {
    data () {
      return {
        updatePassowrdVisible: false
      }
    },
    computed: {
      navbarLayoutType: {
        get () { return this.$store.state.common.navbarLayoutType }
      },
      sidebarFold: {
        get () { return this.$store.state.common.sidebarFold },
        set (val) { this.$store.commit('common/updateSidebarFold', val) }
      },
      mainTabs: {
        get () { return this.$store.state.common.mainTabs },
        set (val) { this.$store.commit('common/updateMainTabs', val) }
      },
      userName: {
        get () { return this.$store.state.user.name }
      }
    },
    methods: {
      // 修改密码
      updatePasswordHandle () {
        this.updatePassowrdVisible = true
        this.$nextTick(() => {
          this.$refs.updatePassowrd.init()
        })
      },
      // 退出
      logoutHandle () {
        this.$confirm(`确定进行[退出]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: this.$http.adornUrl('/sys/logout'),
            method: 'post',
            data: this.$http.adornData()
          }).then(({data}) => {
            if (data && data.code === 0) {
              clearLoginInfo()
              this.$router.push({ name: 'login' })
            }
          })
        }).catch(() => {})
      }
    }
  }
</script>
<style lang="scss">
.home-nav{
  width: auto;
  height: 50px;
  text-align: center;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  padding-top: 7px;
  .item{
    width: 60px;
    background: #ffffff;
    height: 100%;
    position: relative;
    .img{
      width: 80px;
      height: 36px;
      background: url(~@/assets/img/home.png) center center no-repeat;
      background-size: auto 36px;
    }
    span{
      position: absolute;
      display: none;
      bottom: -15px;
      right: -25px;
      width: 80px;
    }
    &:hover{
      .img {
        background: url(~@/assets/img/home_hover.png) center center no-repeat;
        background-size: auto 36px;
      }
      span{ display: block;}
    }
  }
}
</style>