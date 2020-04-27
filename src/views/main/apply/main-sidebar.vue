<template>
  <aside class="site-sidebar" :class="'site-sidebar--' + sidebarLayoutSkin">
    <div class="site-sidebar__inner">
      <!-- <div class="g_head"><h2>我的应用</h2></div> -->
      <el-menu
        :default-active="menuActiveName || 'home'"
        :collapse="sidebarFold"
        :collapseTransition="false"
        class="site-sidebar__menu">
        <el-menu-item-group v-if="navShow === 0">
          <template slot="title">
            <div class="item-nav">
              <span>加务关贸</span>
              <i v-if="navShow === 0" @click="navShow = 1" class="bg_show"></i>
              <i v-if="navShow === 1" @click="navShow = 0" class="bg_hide"></i>
            </div>
          </template> 
          <sub-menu
            v-for="menu in navCollectionList"
            :key="menu.menuId"
            :menu="menu"
            :dynamicMenuRoutes="dynamicMenuRoutes">
          </sub-menu>
        </el-menu-item-group>
        <el-menu-item-group v-if="navShow === 1">
          <template slot="title">
            <div class="item-nav">
              <span>加务关贸</span>
              <i v-if="navShow === 0" @click="navShow = 1" class="bg_show"></i>
              <i v-if="navShow === 1" @click="navShow = 0" class="bg_hide"></i>
            </div>
          </template> 
          <sub-menu
            v-for="menu in menuList"
            :key="menu.menuId"
            :menu="menu"
            :dynamicMenuRoutes="dynamicMenuRoutesCollectionList">
          </sub-menu>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            <div class="item-nav">
              <span>退税助手</span>
            </div>
          </template> 
          <sub-menu
            v-for="menu in navRefundList"
            :key="menu.menuId"
            :menu="menu"
            :dynamicMenuRoutes="dynamicMenuRoutesRefundList">
          </sub-menu>
        </el-menu-item-group>
      </el-menu>
      <div class="fix-box-bottom">
         <router-link target="_blank" :to="{name:'morelists'}">更多...</router-link>
      </div>
    </div>
  </aside>
</template>

<script>
  import SubMenu from './main-sidebar-sub-menu'
  import { isURL } from '@/utils/validate'
  export default {
    data () {
      return {
        navShow: 1,
        dynamicMenuRoutes: [],
        dynamicMenuRoutesCollectionList: [],
        dynamicMenuRoutesRefundList: []
      }
    },
    components: {
      SubMenu
    },
    computed: {
      sidebarLayoutSkin: {
        get () { return this.$store.state.common.sidebarLayoutSkin }
      },
      sidebarFold: {
        get () { return this.$store.state.common.sidebarFold }
      },
      menuList: {
        get () { return this.$store.state.common.menuList },
        set (val) { this.$store.commit('common/updateMenuList', val) }
      },
      navRefundList: {
        get () { return this.$store.state.common.navRefundList },
        set (val) { this.$store.commit('common/updateNavRefundList', val) }
      },
      navCollectionList: {
        get () { return this.$store.state.common.navCollectionList },
        set (val) { this.$store.commit('common/updateNavCollectionList', val) }
      },
      menuActiveName: {
        get () { return this.$store.state.common.menuActiveName },
        set (val) { this.$store.commit('common/updateMenuActiveName', val) }
      },
      mainTabs: {
        get () { return this.$store.state.common.mainTabs },
        set (val) { this.$store.commit('common/updateMainTabs', val) }
      },
      mainTabsActiveName: {
        get () { return this.$store.state.common.mainTabsActiveName },
        set (val) { this.$store.commit('common/updateMainTabsActiveName', val) }
      }
    },
    watch: {
      $route: 'routeHandle'
    },
    created () {
      this.menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]')
      this.dynamicMenuRoutes = JSON.parse(sessionStorage.getItem('dynamicMenuRoutes') || '[]')

      this.navCollectionList = JSON.parse(sessionStorage.getItem('navCollectionList') || '[]')
      this.dynamicMenuRoutesCollectionList = JSON.parse(sessionStorage.getItem('dynamicMenuRoutesCollectionList') || '[]')

      this.navRefundList = JSON.parse(sessionStorage.getItem('navRefundList') || '[]')
      this.dynamicMenuRoutesRefundList = JSON.parse(sessionStorage.getItem('dynamicMenuRoutesRefundList') || '[]')

      this.routeHandle(this.$route)
    },
    methods: {
      // 路由操作
      routeHandle (route) {
        // if (route.meta.isTab) {
        // tab选中, 不存在先添加
        var tab = this.mainTabs.filter(item => item.name === route.name)[0]
        if (!tab) {
          if (route.meta.isDynamic) {
            route = this.dynamicMenuRoutes.filter(item => item.name === route.name)[0]
            if (!route) {
              return console.error('未能找到可用标签页!')
            }
          }
          tab = {
            menuId: route.meta.menuId || route.name,
            name: route.name,
            title: route.meta.title,
            type: isURL(route.meta.iframeUrl) ? 'iframe' : 'module',
            iframeUrl: route.meta.iframeUrl || '',
            params: route.params,
            query: route.query
          }
          this.mainTabs = this.mainTabs.concat(tab)
          console.log(this.mainTabs)
        }
        this.menuActiveName = tab.menuId + ''
        // }
        console.log('this.mainTabs')
      }
    }
  }
</script>