import Mock from 'mockjs'

// 生成数据列表
var dataList = []
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  dataList.push(Mock.mock({
    'id': '@increment',
    'account': '@name',
    'userName': '@name',
    'email': '@email',
    'mobile': /^1[0-9]{10}$/,
    'status': 1,
    'roleIdList': null,
    'createUserId': 1,
    'createTime': 'datetime'
  }))
}

// 获取用户列表
export function list () {
  return {
    // isOpen: false,
    url: '/demo/demo/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': dataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': dataList
      }
    }
  }
}

// 修改
export function update () {
  return {
    // isOpen: false,
    url: '/demo/demo/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除
export function del () {
  return {
    // isOpen: false,
    url: '/demo/demo/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
