<template>
  <div class="login-box">
     <div class="findpwd">
        <div class="wrapper-content">
            <div class="find-header">
                <div class="find-logo">
                    <a href="/"><img src="~@/assets/images/logo.png" alt="关贸大师"/></a>
                </div>
                <div class="title">
                    <h2>重置密码</h2>
                </div>
            </div>
            <div class="password-reset-form">
                <div>
                    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon class="form-input">
                        <el-form-item prop="userName">
                            <el-input v-model="dataForm.userName" placeholder="请输入手机号"></el-input>
                            <span class="icon">
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </span>
                        </el-form-item>
                        <el-form-item prop="captcha">
                            <el-row :gutter="20">
                                <el-col :span="14">
                                <el-input v-model="dataForm.msgCaptcha" placeholder="请输入短信验证码">
                                </el-input>
                                <span class="icon icon-exclamation">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                                </el-col>
                                <el-col :span="10" class="login-captcha">
                                    <el-button class="btn-msg-code" type="submit">获取验证码</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="dataForm.password" type="password" placeholder="请输入密码"></el-input>
                            <span class="icon">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="dataForm.password" type="password" placeholder="请重复输入密码"></el-input>
                            <span class="icon">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </el-form-item>
                        <div class="form-input login-button">
                            <el-form-item>
                                <el-button class="btn-login" type="primary" @click="editClick()">确定修改</el-button>
                            </el-form-item>
                        </div>
                        <div class="form-item other-link">
                            <a href="/">返回首页</a>&nbsp;|&nbsp;<a href="javascript:" @click="$router.push({ name: 'login' })">直接登录</a>
                        </div>
                    </el-form>
                </div>
                <div class="footer">
                  <div>ICP备1234567号</div>
                  <div>邮箱：chr@gxchr.com</div>
                  <div>技术支持：长荣科创网络技术有限公司</div>
                  <div>&copy;2020 <a href="http://www.trade-master.cn/">trade-master.cn</a> All rights reserved</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/styles/font-awesome-4.7.0/css/font-awesome.min.css'
  import '@/assets/styles/findpwd.css'
  export default {
    data () {
      return {
        dataForm: {
          userName: '',
          password: '',
          msgCaptcha: '',
          captcha: ''
        },
        dataRule: {
          userName: [
            { required: true, message: '帐号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
          // ,
          // captcha: [
          //   { required: true, message: '验证码不能为空', trigger: 'blur' }
          // ]
        },
        captchaPath: '0000'
      }
    },
    created () {
    },
    methods: {
      editClick () {}
    }
  }
</script>
