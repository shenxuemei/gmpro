<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand" @click="$router.push({ name: 'home' })">
        <a class="site-navbar__brand-lg" href="javascript:;">关贸大师</a>
        <a class="site-navbar__brand-mini" href="javascript:;"></a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <div class="site-navbar__menu home-nav">
        <div class="item" @click="$router.push({ name: 'applyhome' })"><img src="~@/assets/img/home.png"><span>应用中心</span></div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { clearLoginInfo } from '@/utils'
  export default {
    data () {
      return {
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
    img{
      display: block;
      height: 36px;
      width: auto;
    }
    span{
      position: absolute;
      display: none;
      bottom: 0;
      right: -45px;
      width: 80px;
    }
    &:hover{
      span{ display: block;}
    }
  }
}
</style>