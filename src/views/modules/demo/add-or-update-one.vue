<template>
  <div>
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="统一编号" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="内部编号" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="单耗状态" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="经营单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="加工单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="申报单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="主管海关" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="备案批准时间" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="统一编号" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="内部编号" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="单耗状态" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="经营单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="加工单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="申报单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="主管海关" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="备案批准时间" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="统一编号" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="内部编号" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="单耗状态" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="经营单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="加工单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="申报单位代码" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="主管海关" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
          <el-form-item label="备案批准时间" prop="account">
            <el-input v-model="dataForm.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataForm: {
          id: 0,
          account: ''
        },
        dataRule: {
          account: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
    }
  }
</script>
