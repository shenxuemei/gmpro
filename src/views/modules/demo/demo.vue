<template>
  <div class="card-no-padd">
    <div class="demo-form-head" v-if="!addOrUpdateVisible">
      <div class="h2-head">
        <span class="show-btn" @click="sidebarFold = !sidebarFold"></span>
        <div class="h2-title">
          <h2 v-if="!titleFlag">{{dataForm.name}}</h2>
          <el-input v-model="dataForm.name" class="input-title" v-if="titleFlag"></el-input>
        </div>
        <div class="more-btn-box">
          <el-dropdown>
            <span class="more-btn"></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><span @click="editTitle()">修改标题</span></el-dropdown-item>
              <el-dropdown-item><span>更多操作</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="button-list">
        <span class="item icon-item1_collect" @click="collecttion()" v-if="!collecttionFlag"></span>
        <span class="item icon-item1" @click="collecttion()" v-if="collecttionFlag"></span>
        <span class="item icon-item6" @click="$router.push({ name: 'applyhome' })"></span>
      </div>
    </div>
    <div class="fidopera-box" v-if="!addOrUpdateVisible">
      <div class="fid-box">
        <span>FID:</span>
        <span>[dfhakdjfkaueio37284738]</span>
      </div>
      <div class="operation-box">
        <div class="item"><span>打印</span></div>
        <div class="item"><span>下载PDF</span></div>
        <div class="item"><span>导出XML</span></div>
        <div class="item"><span>下载CSV</span></div>
      </div>
    </div>
    <div class="mod-user" v-if="!addOrUpdateVisible">
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()" label-width="130px">
        <el-row>
          <el-form-item label="账册编号：">
            <el-select clearable 
              v-model="dataForm.type" placeholder="请选择">
              <el-option
                v-for="item in param1List"
                :key="item.key"
                :value="item.key"
                :label="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预录入统一编号：">
            <el-input v-model="dataForm.param2" clearable></el-input>
          </el-form-item>
          <el-form-item label="申报单位代码：">
            <el-input v-model="dataForm.param3" clearable></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="经营单位代码：">
            <el-input v-model="dataForm.param4" clearable></el-input>
          </el-form-item>
          <el-form-item label="经营单位名称：">
            <el-input v-model="dataForm.param5" clearable></el-input>
          </el-form-item>
          <el-form-item label="申报单位代码：">
            <el-input v-model="dataForm.param6" clearable></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="申报时间：">
            <el-date-picker
              v-model="dataForm.param7"
              type="daterange"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="数据状态：">
            <el-checkbox-group v-model="dataForm.param8">
              <el-checkbox v-for="item in param8List" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-row>
        <!-- <el-form-item>
          <el-button @click="getDataList()">查询</el-button>
        </el-form-item> -->
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-select style="width: 150px;" clearable 
                :disabled="dataListSelections.length <= 0"
                v-model="operation" placeholder="批量操作"
                @change="getOperationChange">
                <el-option
                  v-for="item in operationList"
                  :key="item.key"
                  :value="item.key"
                  :label="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select style="width: 240px;"
                v-model="field"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="显示字段"
                @change="getFieldChange"
                @remove-tag="removeHandle">
                <el-option
                  v-for="item in fieldList"
                  :key="item.key"
                  :value="item.key"
                  :label="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" style="text-align: right;">
            <el-button type="info" size="small" round>重置</el-button>
            <el-button type="primary" size="small" @click="getDataList" round>查询</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        :data="dataList"
        border
        v-loading="dataListLoading"
        @selection-change="selectionChangeHandle"
        style="width: 100%;">
        <el-table-column
          type="selection"
          header-align="center"
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          type="index"
          width="60"
          header-align="center"
          align="center"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="account"
          header-align="center"
          align="center"
          label="用户名">
          <template slot-scope="scope">
            <span @click="addOrUpdateHandle(scope.row.id)">{{scope.row.account}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="userName"
          header-align="center"
          align="center"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="mobile"
          header-align="center"
          align="center"
          label="手机号">
        </el-table-column>
        <el-table-column
          prop="status"
          header-align="center"
          align="center"
          label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 1" size="small" type="danger">禁用</el-tag>
            <el-tag v-else size="small">正常</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          header-align="center"
          align="center"
          width="180"
          label="创建时间">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        :total="totalPage"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
  import AddOrUpdate from './demo-add-or-update'
  export default {
    data () {
      return {
        collecttionFlag: false,
        operation: null,
        operationList: [
          {'key': 0, 'value': 'add'},
          {'key': 1, 'value': 'edit'},
          {'key': 2, 'value': 'del'},
          {'key': 3, 'value': 'export'}
        ],
        field: [],
        fieldList: [
          {'key': 'username', 'value': '用户名称'},
          {'key': 'creattime', 'value': '创建时间'},
          {'key': 'status', 'value': '状态'}
        ],
        param1List: [
          {'key': 1, 'value': '111111142123'},
          {'key': 2, 'value': '22222242123'},
          {'key': 3, 'value': '333333342123'},
        ],
        param8List: [
          {'id': 1, 'name': '全部'},
          {'id': 2, 'name': '退单'},
          {'id': 3, 'name': '暂存'},
          {'id': 4, 'name': '终审通过'},
          {'id': 5, 'name': '申报'}
        ],
        dataForm: {
          name: '电子账册备案与更改',
          param1: '',
          param2: '',
          param3: '',
          param4: '',
          param5: '',
          param6: '',
          param8: []
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        addOrUpdateVisible: false
      }
    },
    components: {
      AddOrUpdate
    },
    activated () {
      this.getDataList()
    },
    methods: {
      collecttion () {
        this.collecttionFlag = !this.collecttionFlag
      },
      /**
       * 显示字段 移除tag事件
       */
      removeHandle (val) {
        console.log(val)
      },
      /**
       * 显示字段 change事件
       */
      getFieldChange (val) {
        console.log(val)
      },
      /**
       * 批量操作选择
      */
      getOperationChange (vId) {
        this.operationList.find((item) => {
          return item.operation === vId
        })
        if (vId === 0) {
          // 执行对应的操作 事件
        } else if (vId === 1) {
          // 执行对应的操作 事件
        } else if (vId === 2) {
          // 执行对应的操作 事件
        } else if (vId === 3) {
          // 执行对应的操作 事件
        }
      },
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/demo/demo/list'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'username': this.dataForm.userName
          })
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        var ids = id ? [id] : this.dataListSelections.map(item => {
          return item.id
        })
        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: this.$http.adornUrl('/sys/user/delete'),
            method: 'post',
            data: this.$http.adornData(ids, false)
          }).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList()
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        }).catch(() => {})
      }
    }
  }
</script>
