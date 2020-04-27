// 生成数据列表
var dataList = [
  {
    'id': 1,
    'parentId': 0,
    'parentName': null,
    'name': '系统管理',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'id': 2,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '管理员列表',
    'url': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'admin',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'id': 3,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '角色管理',
    'url': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'role',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'id': 4,
    'parentId': 1,
    'parentName': '系统管理',
    'name': '菜单管理',
    'url': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'user',
    'orderNum': 3,
    'open': null,
    'list': null
  }
]
var navDataList = [
  {
    'id': 1,
    'parentId': 0,
    'parentName': null,
    'name': '加贸保税',
    'url': 'demo/demo',
    'perms': null,
    'type': 0,
    'icon': '',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'id': 2,
    'parentId': 0,
    'parentName': null,
    'name': '出口i退税',
    'url': 'demo2/demo',
    'perms': null,
    'type': 0,
    'icon': '',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'id': 3,
    'parentId': 0,
    'parentName': null,
    'name': '物流通关',
    'url': '',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': [
      {
        'id': 4,
        'parentId': 3,
        'parentName': null,
        'name': '预配舱单',
        'url': 'demo3/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      },
      {
        'id': 5,
        'parentId': 3,
        'parentName': null,
        'name': '进口报关作业',
        'url': 'demo/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      },
      {
        'id': 6,
        'parentId': 3,
        'parentName': null,
        'name': '运抵港口',
        'url': 'demo/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      }
    ]
  },
  {
    'id': 7,
    'parentId': 0,
    'parentName': null,
    'name': '出口收付汇',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': [
      {
        'id': 8,
        'parentId': 7,
        'parentName': null,
        'name': '出口单证',
        'url': 'demo2/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      },
      {
        'id': 9,
        'parentId': 7,
        'parentName': null,
        'name': '出货通知单',
        'url': 'demo2/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      },
      {
        'id': 10,
        'parentId': 7,
        'parentName': null,
        'name': '出口装箱单',
        'url': 'demo2/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      },
      {
        'id': 11,
        'parentId': 7,
        'parentName': null,
        'name': '运抵报告',
        'url': 'demo2/demo',
        'perms': null,
        'type': 0,
        'icon': '',
        'orderNum': 0,
        'open': null
      }
    ]
  }
]
var navCollectionList = [
  {
    'id': 1,
    'parentId': 0,
    'parentName': null,
    'name': '加贸保税',
    'url': 'demo/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'id': 2,
    'parentId': 0,
    'parentName': null,
    'name': '出口i退税',
    'url': 'demo2/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'id': 8,
    'parentId': 0,
    'parentName': null,
    'name': '出口单证',
    'url': 'demo2/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null
  },
  {
    'id': 9,
    'parentId': 0,
    'parentName': null,
    'name': '出货通知单',
    'url': 'demo2/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null
  },
  {
    'id': 4,
    'parentId': 0,
    'parentName': null,
    'name': '预配舱单',
    'url': 'demo3/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null
  },
  {
    'id': 5,
    'parentId': 0,
    'parentName': null,
    'name': '进口报关作业',
    'url': 'demo/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null
  }
]
let navRefundList = [
  {
    'id': 20,
    'parentId': 0,
    'parentName': null,
    'name': '报关单采集',
    'url': 'demo4/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  },
  {
    'id': 21,
    'parentId': 0,
    'parentName': null,
    'name': '进项发票下载',
    'url': 'demo4/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  }
]
let UserCenterList = [
  {
    'id': 20,
    'parentId': 0,
    'parentName': null,
    'name': '我的个人中心',
    'url': 'demo4/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  },
  {
    'id': 21,
    'parentId': 0,
    'parentName': null,
    'name': '个人信息',
    'url': 'demo4/demo',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  }
]
// 获取导航菜单列表 / 权限
export function nav () {
  return {
    // isOpen: false,
    url: '/sys/menu/nav',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': navDataList,
      'navRefundList': navRefundList,
      'navCollectionList': navCollectionList,
      'userCenterList': UserCenterList
    }
  }
}

// 获取菜单列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/menu/list',
    type: 'get',
    data: dataList
  }
}
