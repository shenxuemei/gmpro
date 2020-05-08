<template>
  <div v-if="visible">
    <div class="demo-form-head">
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
      <div class="button-list w320">
        <div class="tool-item">
          <el-tooltip effect="dark" content="收藏" placement="bottom" v-if="collecttionFlag">
            <span class="item icon-item1 b-R" @click="collecttion()"></span>
          </el-tooltip>
          <el-tooltip effect="dark" content="取消收藏" placement="bottom" v-if="!collecttionFlag">
            <span class="item icon-item1_collect b-R" @click="collecttion()"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="已解锁" placement="bottom" v-if="!lockFlag">
            <span class="item icon-item2-un" @click="lockFlag = true"></span>
          </el-tooltip>
          <el-tooltip effect="dark" content="已锁定" placement="bottom" v-if="lockFlag">
            <span class="item icon-item2" @click="lockFlag = false"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="审核" placement="bottom">
            <span class="item icon-item3 b-R"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="讨论" placement="bottom">
            <span class="item icon-item4"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="附件" placement="bottom">
            <span class="item icon-item5"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="动态" placement="bottom">
            <span class="item icon-item6"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="邮件" placement="bottom">
            <span class="item icon-item7 b-R"></span>
          </el-tooltip>
        </div>
        <div class="tool-item">
          <el-tooltip effect="dark" content="返回" placement="bottom">
            <span class="item icon-item8 b-R" @click="back()"></span>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="unlock">
      <div class="fidopera-box">
        <div class="fid-box">
          <span>FID:</span>
          <span>[8495-dfs9-445]</span>
        </div>
        <div class="operation-box">
          <div class="item"><span>打印</span></div>
          <div class="item"><span>下载PDF</span></div>
          <div class="item"><span>导出XML</span></div>
          <div class="item"><span>下载CSV</span></div>
        </div>
      </div>
      <div class="demo-form tab-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="表头信息" name="first">
            <div class="item">
              <AddOrUpdateOne></AddOrUpdateOne>
            </div>
          </el-tab-pane>
          <el-tab-pane label="备案料件" name="second">
            <div class="item">
              <AddOrUpdateTwo></AddOrUpdateTwo>
            </div>
          </el-tab-pane>
          <el-tab-pane label="备案成品" name="third">  
            <div class="item">
              <AddOrUpdateThree></AddOrUpdateThree>
            </div>     
          </el-tab-pane>
          <el-tab-pane label="单损耗" name="fourth">
            <div class="item">
              <AddOrUpdateFour></AddOrUpdateFour>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="lock-box" v-if="lockFlag"></div>
    </div>
  </div>
</template>

<script>
  import AddOrUpdateOne from './add-or-update-one'
  import AddOrUpdateTwo from './add-or-update-two'
  import AddOrUpdateThree from './add-or-update-three'
  import AddOrUpdateFour from './add-or-update-four'
  import $ from 'jquery'
  export default {
    data () {
      return {
        lockFlag: false,
        collecttionFlag: false,
        visible: false,
        titleFlag: false,
        activeName: 'first',
        dataForm: {
          id: 0,
          name: '电子账册备案与更改'
        }
      }
    },
    components: {
      AddOrUpdateOne,
      AddOrUpdateTwo,
      AddOrUpdateThree,
      AddOrUpdateFour
    },
    computed: {
      sidebarFold: {
        get () { return this.$store.state.common.sidebarFold },
        set (val) { this.$store.commit('common/updateSidebarFold', val) }
      }
    },
    methods: {
      editTitle () {
        this.titleFlag = true
      },
      collecttion () {
        this.collecttionFlag = !this.collecttionFlag
      },
      handleClick (tab, event) {
        console.log(tab, event)
        let idName = tab.$el.id
        $('.tab-box .item').css({marginLeft: '100%'})
        $('#' + idName + ' .item').animate({marginLeft: '0%'})
      },
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          // this.$refs['dataForm'].resetFields()
          $('#pane-' + this.activeName + ' .item').css({marginLeft: '0%'})
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
      },
      back () {
        this.visible = false
        this.$emit('refreshDataList')
      }
    }
  }
</script>