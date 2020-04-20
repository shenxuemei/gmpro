<template>
 <div class="homeindex">
   <div class="body-placeholder"></div>
    <div id="header" class="header">
        <div class="header__parallax">
            <div class="parallax"></div>
        </div>
        <div class="header__gradient"></div>
        <div class="header__bg"></div>
        <div class="header-logo">
            <a href="http://www.trade-master.cn/" class="header__logo--easyofficial">
                <img src="~@/assets/images/logo.png" alt="Trade-master">
            </a>
        </div>
        <div id="headerToggle" class="header__toggle">
            <span></span>
        </div>
        <div id="headerNav" class="header__nav">

            <a id="navAbout" class="nav__item anchor" href="http://www.trade-master.cn/#about">
                关于我们
                <span class="line"></span>
            </a>
            <!-- <a class="nav__item admin" href="/login.html" target="_blank">系统登录</a> -->
            <a class="nav__item anchor"  href="javascript:" @click="$router.push({ name: 'login' })">系统登录</a>
        </div>
    </div>
    <div id="slogan" class="slogan">
        <div class="parallax--mask"></div>
        <div class="parallax"></div>
        <div class="slogan__inner">
            <h1 id="sloganTitle" class="">关贸大师</h1>
            <div id="sloganTitleAnchor"></div>
            <p id="sloganIntro" class="">
                <span>您的外贸导师</span><br>
                <span></span>
                <br>一体化外贸协同平台
                <span>及关务管理系统</span><span> 最大化提升进出口贸易效率</span>
</p>
            <div id="sloganIntroAnchor"></div>
            <a id="sloganRegister" class="button" href="http://trade-master.cn/register" target="_blank">即刻使用</a>
            <div id="sloganRegisterAnchor"></div>
        </div>
    </div>
    <div class="container">
        <div id="screenAdvantage" class="screen screen--advantage">
            <div id="advantage" class="screen__start"></div>
            <div id="advantageEnd" class="screen__end"></div>
            <h2>关贸大师</h2>
            <div id="advantageFeature" class="row row--feature animation">
                <ul class="list clearfix">
                    <li class="item item--a">
                        <p>
                            <img src="~@/assets/images/rocket.png" alt="">稳定高效
                        </p>
                        <ul>
                            <li>
                                <span></span>基本云平台 SAAS 服务模式
                            </li>
                            <li>
                                <span></span>基础组件及服务集中管理 
                            </li>
                            <li>
                                <span></span>采用顶级阿里云服务器集群
                            </li>
                            <li>
                                <span></span>更加快速、安全、稳定
                            </li>
                        </ul>
                    </li>
                    <li class="item item--b">
                        <p>
                            <img src="~@/assets/images/piggy-bank.png" alt="">极简管理
                        </p>
                        <ul>
                            <li>
                                <span></span>响应式网站系统
                            </li>
                            <li>
                                <span></span>无需硬件、有网即用；
                            </li>
                            <li>
                                <span></span>无需备份、自动协同；随时随地、便捷高
                            </li>
                        </ul>
                    </li>
                    <li class="item item--c">
                        <p>
                            <img src="~@/assets/images/calendar.png" alt="">节约成本
                        </p>
                        <ul>
                            <li>
                                <span></span>无需单独购买服务器、空间
                            </li>
                            <li>
                                <span></span>多种精美主题模板，省去设计成本
                            </li>
                            <li>
                                <span></span>平台的关务数据、自动获取，安全高效、精准对接
                            </li>
                        </ul>
                    </li>
                    <li class="item item--d">
                        <p>
                            <img src="~@/assets/images/responsive.png" alt="">价值提升
                        </p>
                        <ul>
                            <li>
                                <span></span>用户级行为追踪分析跟进
                            </li>
                            <li>
                                <span></span>智能报表、准确分析
                            </li>
                            <li>
                                <span></span>云端存储、随时导出；实时查询、掌握动
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>

    </div>
    <div id="footer" class="footer">
      <div class="footer__copyright">
        <div>ICP备1234567号</div>
        <div>邮箱：chr@gxchr.com</div>
        <div>技术支持：长荣科创网络技术有限公司</div>
        <div>&copy;2020 <a href="http://www.trade-master.cn/">trade-master.cn</a> All rights reserved</div>
      </div>
    </div>
 </div>
</template>

<script>
  import '@/assets/styles/master.min.css'
  export default {
  }
</script>

