<template>
  <aside class="site-sidebar" :class="'site-sidebar--' + sidebarLayoutSkin">
    <div class="site-sidebar__inner">
    </div>
  </aside>
</template>

<script>
  import SubMenu from './user-sidebar-sub-menu'
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
      userCenterList: {
        get () { return this.$store.state.common.userCenterList },
        set (val) { this.$store.commit('common/updateUserCenterList', val) }
      },
      menuActiveName2: {
        get () { return this.$store.state.common.menuActiveName2 },
        set (val) { this.$store.commit('common/updateMenuActiveName2', val) }
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
      this.userCenterList = JSON.parse(sessionStorage.getItem('userCenterList') || '[]')
      this.dynamicMenuRoutesUserCenterList = JSON.parse(sessionStorage.getItem('dynamicMenuRoutesUserCenterList') || '[]')

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
        this.menuActiveName2 = tab.menuId + ''
        // }
      }
    }
  }
</script>