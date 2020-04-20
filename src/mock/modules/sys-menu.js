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
    'id': 30,
    'parentId': 0,
    'parentName': null,
    'name': '电子账册备案',
    'url': '',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': [
      {
        'id': 39,
        'parentId': 30,
        'parentName': null,
        'name': '企业归并关系1',
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
    'id': 31,
    'parentId': 0,
    'parentName': null,
    'name': '出口耗用明细统计',
    'url': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': [
      {
        'id': 32,
        'parentId': 31,
        'parentName': null,
        'name': '223',
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
    'id': 41,
    'parentId': 0,
    'parentName': null,
    'name': '出口耗用明细统计',
    'url': 'sys/user',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  },
  {
    'id': 40,
    'parentId': 0,
    'parentName': null,
    'name': '进口报关单证',
    'url': 'sys/user',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  },
  {
    'id': 42,
    'parentId': 0,
    'parentName': null,
    'name': '核注清单申报',
    'url': 'sys/user',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  }
]
let navRefundList = [
  {
    'id': 50,
    'parentId': 0,
    'parentName': null,
    'name': '报关单采集',
    'url': 'sys/user',
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': []
  },
  {
    'id': 60,
    'parentId': 0,
    'parentName': null,
    'name': '进项发票下载',
    'url': 'sys/user',
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
      'navCollectionList': navCollectionList
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
