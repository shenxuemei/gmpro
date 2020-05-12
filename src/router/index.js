/**
 * 全站路由配置
 *
 * 建议:
 * 1. 代码中路由统一使用name属性跳转(不使用path属性)
 */
import Vue from 'vue'
import Router from 'vue-router'
import http from '@/utils/httpRequest'
import { isURL } from '@/utils/validate'
import { clearLoginInfo } from '@/utils'

Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
  { path: '/', component: _import('common/index'), name: '404', meta: { title: '首页' } },
  { path: '/404', component: _import('common/404'), name: '404', meta: { title: '404未找到' } },
  { path: '/login', component: _import('common/login'), name: 'login', meta: { title: '登录' } },
  { path: '/regist', component: _import('common/regist'), name: 'regist', meta: { title: '注册' } },
  { path: '/findpwd', component: _import('common/findpwd'), name: 'findpwd', meta: { title: '找回密码' } }
]

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/main',
  component: _import('main/apply/main'),
  name: 'main',
  redirect: { name: 'applyhome' },
  meta: { title: '主入口整体布局' },
  children: [
    // 通过meta对象设置路由展示方式
    // 1. isTab: 是否通过tab展示内容, true: 是, false: 否
    // 2. iframeUrl: 是否通过iframe嵌套展示内容, '以http[s]://开头': 是, '': 否
    // 提示: 如需要通过iframe嵌套展示内容, 但不通过tab打开, 请自行创建组件使用iframe处理!
    { path: '/applyhome', component: _import('common/applyhome'), name: 'applyhome', meta: { title: '我的应用' } },
    { path: '/morelists', component: _import('common/more'), name: 'morelists', meta: { title: '更多' } },
    { path: '/rightBarHelp', component: _import('common/rightBar/help'), name: 'rightBarHelp', meta: { title: '支持帮助' } },
    { path: '/rightBarMsg', component: _import('common/rightBar/msg'), name: 'rightBarMsg', meta: { title: '系统消息' } }
  ],
  beforeEnter (to, from, next) {
    let token = Vue.cookie.get('token')
    if (!token || !/\S/.test(token)) {
      clearLoginInfo()
      next({ name: 'login' })
    }
    next()
  }
}

// 个人中心入口路由
const userCenterRoutes = {
  path: '/user-main',
  component: _import('main/center/main'),
  name: 'user-main',
  redirect: { name: 'userhome' },
  meta: { title: '主入口整体布局' },
  children: [
    { path: '/userhome', component: _import('common/userhome'), name: 'userhome', meta: { title: '用户中心', isTab: false } }
  ]
}
const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: (globalRoutes.concat(mainRoutes)).concat(userCenterRoutes)
})

router.beforeEach((to, from, next) => {
  // 添加动态(菜单)路由
  // 1. 已经添加 or 全局路由, 直接访问
  // 2. 获取菜单列表, 添加并保存本地存储
  if (router.options.isAddDynamicMenuRoutes || fnCurrentRouteType(to, globalRoutes) === 'global') {
    next()
  } else {
    http({
      url: http.adornUrl('/sys/menu/nav'),
      method: 'get',
      params: http.adornParams()
    }).then(({data}) => {
      if (data && data.code === 0) {
        // 加务关贸 动态菜单
        let dynamicMenuRoutes = fnAddDynamicMenuRoutes(data.menuList)
        sessionStorage.setItem('dynamicMenuRoutes', dynamicMenuRoutes)
        // 加务关贸 收藏的动态菜单
        let dynamicMenuRoutesCollectionList = fnAddDynamicMenuRoutes(data.navCollectionList)
        sessionStorage.setItem('dynamicMenuRoutesCollectionList', dynamicMenuRoutesCollectionList)
        // // 退税助手 动态菜单
        let dynamicMenuRoutesRefundList = fnAddDynamicMenuRoutes(data.navRefundList)
        sessionStorage.setItem('dynamicMenuRoutesRefundList', dynamicMenuRoutesRefundList)
        // 我的个人中心 动态菜单
        let dynamicMenuRoutesUserCenterList = fnAddDynamicMenuRoutes(data.userCenterList)
        sessionStorage.setItem('dynamicMenuRoutesUserCenterList', dynamicMenuRoutesUserCenterList)

        router.options.isAddDynamicMenuRoutes = true
        sessionStorage.setItem('menuList', JSON.stringify(data.menuList || '[]'))
        sessionStorage.setItem('navCollectionList', JSON.stringify(data.navCollectionList || '[]'))
        sessionStorage.setItem('navRefundList', JSON.stringify(data.navRefundList || '[]'))
        sessionStorage.setItem('userCenterList', JSON.stringify(data.userCenterList || '[]'))
        next({ ...to, replace: true })
      } else {
        sessionStorage.setItem('menuList', '[]')
        next()
      }
    }).catch((e) => {
      console.log(`%c${e} 请求菜单列表和权限失败，跳转至登录页！！`, 'color:blue')
      router.push({ name: 'login' })
    })
  }
})

/**
 * 判断当前路由类型, global: 全局路由, main: 主入口路由
 * @param {*} route 当前路由
 */
function fnCurrentRouteType (route, globalRoutes = []) {
  var temp = []
  for (var i = 0; i < globalRoutes.length; i++) {
    if (route.path === globalRoutes[i].path) {
      return 'global'
    } else if (globalRoutes[i].children && globalRoutes[i].children.length >= 1) {
      temp = temp.concat(globalRoutes[i].children)
    }
  }
  return temp.length >= 1 ? fnCurrentRouteType(route, temp) : 'main'
}

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function fnAddDynamicMenuRoutes (menuList = [], routes = []) {
  var temp = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].list && menuList[i].list.length >= 1) {
      temp = temp.concat(menuList[i].list)
    } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
      menuList[i].url = menuList[i].url.replace(/^\//, '')
      var route = {
        path: menuList[i].url.replace('/', '-'),
        component: null,
        name: menuList[i].url.replace('/', '-'),
        meta: {
          menuId: menuList[i].id,
          title: menuList[i].name,
          isDynamic: true,
          isTab: false,
          iframeUrl: ''
        }
      }
      // url以http[s]://开头, 通过iframe展示
      if (isURL(menuList[i].url)) {
        route['path'] = `i-${menuList[i].id}`
        route['name'] = `i-${menuList[i].id}`
        route['meta']['iframeUrl'] = menuList[i].url
      } else {
        try {
          route['component'] = _import(`modules/${menuList[i].url}`) || null
        } catch (e) {}
      }
      routes.push(route)
    }
  }
  if (temp.length >= 1) {
    fnAddDynamicMenuRoutes(temp, routes)
  } else {
    mainRoutes.name = 'main-dynamic'
    mainRoutes.children = routes
    router.addRoutes([
      mainRoutes,
      { path: '*', redirect: { name: '404' } }
    ])
    // sessionStorage.setItem('dynamicMenuRoutes', JSON.stringify(mainRoutes.children || '[]'))
    console.log('%c!<-------------------- 动态(菜单)路由 e -------------------->', 'color:blue')
  }
  return JSON.stringify(mainRoutes.children || '[]')
}

export default router
