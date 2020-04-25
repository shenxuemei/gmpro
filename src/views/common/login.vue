<template>
  <div class="login-box">
    <LoginHeader></LoginHeader>
    <div class="box">
        <div class="contener">
            <div class="login-panel">
                <div class="login-panel-inner">
                    <div class="title">
                        登&nbsp;录
                    </div>
                    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon class="form-input">
                      <el-form-item prop="userName">
                        <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
                        <span class="icon">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </span>
                      </el-form-item>
                      <el-form-item prop="password">
                        <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
                        <span class="icon">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                      </el-form-item>
                      <el-form-item prop="captcha">
                        <el-row :gutter="20">
                          <el-col :span="14">
                            <el-input v-model="dataForm.captcha" placeholder="验证码">
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
                      <div class="form-input login-button">
                        <el-form-item>
                          <el-button class="btn-login" type="danger" @click="dataFormSubmit()">登录</el-button>
                        </el-form-item>
                      </div>
                    </el-form>
                    <div class="form-next">
                        <input type="checkbox" id="remember" /><label for="remember" class="remember-label">记住密码</label>
                        <div class="quick-login">快速登录：<img src="~@/assets/images/QQ.png" alt="QQ登录" title="QQ登录"/><img src="~@/assets/images/wechat.png" alt="微信登录" title="微信登录"/><img src="~@/assets/images/weibo.png" alt="微博登录" title="微博登录"/> </div>
                        <div style="clear: both;"></div>
                        <div class="reg-link">
                          <a href="javascript:" @click="$router.push({ name: 'regist' })">注册账号</a>&nbsp;|&nbsp;
                          <a href="javascript:" @click="$router.push({ name: 'findpwd' })">找回密码</a>&nbsp;|&nbsp;<a href="/">首页</a>
                          </div>
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
  export default {
    data () {
      return {
        dataForm: {
          userName: 'admin',
          password: '111111',
          uuid: '',
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
      this.getCaptcha()
    },
    methods: {
      // 提交表单
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl('/sys/login'),
              method: 'post',
              data: this.$http.adornData({
                'username': this.dataForm.userName,
                'password': this.dataForm.password,
                'uuid': this.dataForm.uuid,
                'captcha': this.dataForm.captcha
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$cookie.set('token', data.token)
                this.$router.replace({ name: 'applyhome' })
              } else {
                this.getCaptcha()
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
      // 获取验证码
    //   getCaptcha () {
    //     this.dataForm.uuid = getUUID()
    //     this.captchaPath = this.$http.adornUrl(`/captcha.jpg?uuid=${this.dataForm.uuid}`)
    //   }
    }
  }
</script>
