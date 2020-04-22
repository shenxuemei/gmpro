<template>
  <el-card v-if="visible" class="card-no-padd">
    <div class="demo-form-head">
      <h2>电子账册备案与更改2</h2>
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
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="表头信息" name="first">表头信息</el-tab-pane>
        <el-tab-pane label="备案料件" name="second">备案料件</el-tab-pane>
        <el-tab-pane label="备案成品" name="third">备案成品</el-tab-pane>
        <el-tab-pane label="单损耗" name="fourth">单损耗</el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        activeName: 'second',
        dataForm: {
          id: 0
        }
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
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