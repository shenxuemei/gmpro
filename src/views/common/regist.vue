<template>
  <div class="regist">
    <LoginHeader></LoginHeader>
    <div class="box">
        <div class="contener">
            <div class="login-panel">
                <div class="login-panel-inner">
                    <div class="title">
                        手机注册
                    </div>
                    <form>
                        <div class="form-input cus-padding">
                            <label class="icon">
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </label>
                            <input class="input-user" name="username" id="user-name" placeholder="请输入手机号" autocomplete="off" />
                            <label class="errmsg" id="lb-errmsg-user">请输入手机号</label>
                        </div>
                        <div class="form-input login-code">
                            <label class="icon">
                                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </label>
                            <input class="input-code" name="usercode" id="user-code" placeholder="请输入图形验证码" autocomplete="off" />
                            <label class="errmsg" id="lb-errmsg-code">请输入图形验证码</label>
                            <img src="/static/images/code.png" />
                        </div>
                        <div class="form-input">
                            <label class="icon">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </label>
                            <input class="input-msg-code" name="msgcode" id="msg-code" placeholder="请输入短信验证码" autocomplete="off" />
                            <label class="errmsg" id="lb-errmsg-msg-code">请输入短信验证码</label>
                            <button class="btn-msg-code" type="submit" onclick="return checkCode()">获取验证码</button>
                        </div>
                        <div class="form-input cus-padding">
                            <label class="icon">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </label>
                            <input class="input-pwd" name="userpwd" id="user-pwd" placeholder="请输入密码" type="password" autocomplete="off" />
                            <label class="errmsg" id="lb-errmsg-pwd">请输入密码</label>
                        </div>
                        <div class="form-input cus-padding">
                            <label class="icon">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </label>
                            <input class="input-pwd-re" name="userpwdre" id="user-pwd-re" placeholder="请重复输入密码" type="password" autocomplete="off" />
                            <label class="errmsg" id="lb-errmsg-pwd-re">请重复输入密码</label>
                        </div>
                        <div class="form-input f12">
                            <input type="checkbox" id="protocol" /><label for="protocol" class="protocol-label">我已阅读并同意</label><a href="#">《用户协议条款》</a>
                        </div>
                        <div class="form-input login-button">
                            <button class="btn-login" type="submit" onclick="return loginCheck()">注&nbsp;册</button>
                        </div>
                    </form>
                    <div class="form-next f14">
                        <div class="login-link"><a href="javascript:" @click="$router.push({ name: 'login' })">直接登录</a>&nbsp;|&nbsp;<a href="/">首页</a></div>
                        <div class="quick-login">快速登录：<img src="/static/images/QQ.png" alt="QQ登录" title="QQ登录"/><img src="/static/images/wechat.png" alt="微信登录" title="微信登录"/><img src="/static/images/weibo.png" alt="微博登录" title="微博登录"/> </div>
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
      }
    },
    components: {
      LoginHeader,
      LoginFooter
    },
    created () {
    },
    methods: {
    }
  }
</script>
