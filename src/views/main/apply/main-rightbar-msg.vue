<template>
  <div class="reset-dialog" v-if="dialogFormVisible">
    <el-dialog
      title="意见反馈"
      :modal="false"
      :close-on-click-modal="false"
      width="400px"
      top="0vh"
      :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="反馈类型">
          <el-select v-model="form.type" placeholder="请选择活动区域" style="width: 100%;">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动形式" style="height: 60px;">
          <el-input type="textarea" resize="none" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="相关图片" style="height: 80px;">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text">我的反馈历史</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">提交反馈</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogFormVisible: false,
        form: {
          type: '',
          desc: '',
          tel: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      init () {
        this.dialogFormVisible = true
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background: #ffffff;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 20px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>