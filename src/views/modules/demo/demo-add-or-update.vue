<template>
  <el-card v-if="visible" class="card-no-padd">
    <div class="demo-form-head">
      <h2>电子账册备案与更改</h2>
      <div class="button-list">
        <span class="item icon-item1"></span>
        <span class="item icon-item2"></span>
        <span class="item icon-item3"></span>
        <span class="item icon-item4"></span>
        <span class="item icon-item5"></span>
      </div>
    </div>
    <div class="operation-box">
      <div class="item"><span>打印</span></div>
      <div class="item"><span>下载PDF</span></div>
      <div class="item"><span>导出XML</span></div>
      <div class="item"><span>下载CSV</span></div>
    </div>
    <div class="demo-form">
      <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
        <el-form-item label="用户名" prop="account">
          <el-input v-model="dataForm.account" placeholder="登录帐号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="userName">
          <el-input v-model="dataForm.userName" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :class="{ 'is-required': !dataForm.id }">
          <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="comfirmPassword" :class="{ 'is-required': !dataForm.id }">
          <el-input v-model="dataForm.comfirmPassword" type="password" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="dataForm.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色" size="mini" prop="roleIdList">
          <el-checkbox-group v-model="dataForm.roleIdList">
            <el-checkbox v-for="role in roleList" :key="role.id" :label="role.id">{{ role.roleName }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="状态" size="mini" prop="status">
          <el-radio-group v-model="dataForm.status">
            <el-radio :label="1">禁用</el-radio>
            <el-radio :label="0">正常</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
      </span>
    </div>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          account: '',
          userName: '',
          password: '',
          comfirmPassword: '',
          mobile: '',
          roleIdList: [],
          status: 1
        },
        dataRule: {
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
        }).then(() => {
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/sys/user/info/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm = data.user
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/sys/user/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>