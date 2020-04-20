import Mock from 'mockjs'
import * as common from './modules/common'
import * as sysMenu from './modules/sys-menu'
import * as sysUser from './modules/sys-user'
import * as demo from './modules/demo-demo'

// tips
// 1. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 2. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.

// 关闭 mock数据
// fnCreate(common, false)
// fnCreate(sysMenu, false)
// fnCreate(sysUser, false)

// 开启 mock数据
fnCreate(common, true)
fnCreate(sysMenu, true)
fnCreate(sysUser, true)
fnCreate(demo, true)

/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          Mock.mock(new RegExp(res.url), res.type, (opts) => {
            opts['data'] = opts.body ? JSON.parse(opts.body) : null
            delete opts.body
            return res.data
          })
        }
      })(mod[key]() || {})
    }
  }
}
