<template>
  <div>
     <div class="main-wrapper findpwd">
        <div class="wrapper-content">
            <div class="header">
                <div class="logo">
                    <a href="/"><img src="/static/images/logo.png" alt="关贸大师"/></a>
                </div>
                <div class="title">
                    <h2>重置密码</h2>
                </div>
            </div>
            <div class="password-reset-form">
                <form>
                    <div class="form-item">
                        <label class="icon">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </label>
                        <input class="form-input" name="user-name" id="user-name" placeholder="请输入手机号码" />
                    </div>
                    <div class="form-item flex-item">
                        <label class="icon">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </label>
                        <input class="form-input" name="msg-code" id="msg-code" placeholder="请输入验证码" />
                        <button class="btn btn-msg" onclick="return false">获取短信验证码</button>
                    </div>
                    <div class="form-item">
                        <label class="icon">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </label>
                        <input class="form-input" name="new-pwd" id="new-pwd" placeholder="请输入新密码" />
                    </div>
                    <div class="form-item">
                        <label class="icon">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </label>
                        <input class="form-input" name="new-pwd-re" id="new-pwd-re" placeholder="请再次输入新密码" />
                    </div>
                    <div class="form-item flex-item">
                        <button class="btn btn-submit">确定修改</button>
                    </div>
                    <div class="form-item other-link">
                        <a href="javascript:" @click="$router.push({ name: '/' })">返回首页</a>&nbsp;|&nbsp;<a href="javascript:" @click="$router.push({ name: 'login' })">直接登录</a>
                    </div>
                </form>
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
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>
