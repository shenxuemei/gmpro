<template>
  <div>
    <div class="mod-user" v-if="!addOrUpdateVisible">
      <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="成品项号" prop="account">
              <el-input v-model="dataForm.account"></el-input>
            </el-form-item>
            <el-form-item label="净耗" prop="account">
              <el-input v-model="dataForm.account"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="account">
              <el-input v-model="dataForm.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单耗版本号" prop="account">
              <el-input v-model="dataForm.account"></el-input>
            </el-form-item>
            <el-form-item label="损耗率(%)" prop="account">
              <el-input v-model="dataForm.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="料件项号" prop="account">
              <el-input v-model="dataForm.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row class="btns-box">
        <div class="btns-back"><img src="~@/assets/img/icon_form_03.png"></div>
        <div class="btns-formedit">
          <span><img src="~@/assets/img/icon_hide_nav.png"></span>
          <span><img src="~@/assets/img/icon_show_nav.png"></span>
          <span><img src="~@/assets/img/icon_complete.png"></span>
        </div>
        <div class="btns-next"><img src="~@/assets/img/icon_form_04.png"></div>
      </el-row>
      <el-row style="margin-bottom: 8px;">
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
      </el-row>
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
        dataForm: {
          userName: '',
          userName2: '',
          userName3: ''
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
    created () {
      this.getDataList()
    },
    methods: {
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
      }
    }
  }
</script>
