<template>
  <div class="regist login-box">
    <LoginHeader></LoginHeader>
    <div class="box">
        <div class="contener">
            <div class="login-panel">
                <div class="login-panel-inner">
                    <div class="title">手机注册</div>
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
                            <el-input v-model="dataForm.captcha" placeholder="请输入图形验证码">
                            </el-input>
                            <span class="icon icon-exclamation">
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </span>
                          </el-col>
                          <el-col :span="10" class="login-captcha">
                            <!-- <img :src="captchaPath" @click="getCaptcha()" alt=""> -->
                             <img src="~@/assets/images/code.png" />
                          </el-col>
                        </el-row>
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
                          <el-button class="btn-login" type="danger" @click="registClick()">注册</el-button>
                        </el-form-item>
                      </div>
                    </el-form>
                    <div class="form-next f14">
                        <div class="login-link"><a href="javascript:" @click="$router.push({ name: 'login' })">直接登录</a>&nbsp;|&nbsp;<a href="/">首页</a></div>
                        <div class="quick-login">快速登录：<img src="~@/assets/images/QQ.png" alt="QQ登录" title="QQ登录"/><img src="~@/assets/images/wechat.png" alt="微信登录" title="微信登录"/><img src="~@/assets/images/weibo.png" alt="微博登录" title="微博登录"/> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <LoginFooter></LoginFooter>
  </div>
</template>

<script>
  import LoginHeader from './loginCommon/header.vue'
  import LoginFooter from './loginCommon/footer.vue'
  import '@/assets/styles/font-awesome-4.7.0/css/font-awesome.min.css'
  import '@/assets/styles/login.css'
  import '@/assets/styles/regist.css'
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
    components: {
      LoginHeader,
      LoginFooter
    },
    created () {
    },
    methods: {
      registClick () {
          // 注册按钮
      }
    }
  }
</script>
