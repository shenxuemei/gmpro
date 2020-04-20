--------------------------------------------------------------------------------------------
# 安装依赖
# 1
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 2
cnpm install

# 启动服务
npm run dev
--------------------------------------------------------------------------------------------

# mock 数据
 现在运行可直接登录，使用的是mock数据。
 如接入后台的数据，需在/src/mock/index.js文件中
    fnCreate(common, true)
    fnCreate(sysMenu, true)
    fnCreate(sysUser, true)
    fnCreate(demo, true)
这些都改成false
--------------------------------------------------------------------------------------------

开发时，如何连接后台项目api接口？
修改/static/config/index.js目录文件中 window.SITE_CONFIG['baseUrl'] = '本地api接口请求地址';
 
开发时，如何提前配置CDN静态资源？
修改/static/config/index-[qa/uat/prod].js目录文件中window.SITE_CONFIG['domain'] = '静态资源cdn地址';

构建生成后，发布需要上传哪些文件？
/dist目录下：1805021549（静态资源，20年04月019日15时49分）、config（配置文件）、index.html

构建生成后，如何动态配置CDN静态资源？
修改/dist/config/index.js目录文件中window.SITE_CONFIG['domain'] = '静态资源cdn地址';

构建生成后，如何动态切换新旧版本？
修改/dist/config/index.js目录文件中 window.SITE_CONFIG['version'] = '旧版本号';

--------------------------------------------------------------------------------------------