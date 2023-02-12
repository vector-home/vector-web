## 开发规范

#### 命名规范

函数或方法及文件： 开头字母不用大写第二个单词首字母必须大写 如 `userName`

类： 全部单词首字母必须大写 如`UserName`

#### 页面开发

样式颜色尽量从全局颜色样式中调用方便统一网站色调 如案例`Index.vue`中的`color: $primary-color` 

**注意：**style标签需加上`lang=”scss“`才能使用全局样式 

每个页面的样式写在style文件夹中 如Index.css 

开发页面时将路由配置文件中` component: () => import("../pages/Index.vue")`  import的路径改为自己写的页面路径 **提交时仅提交自己负责的页面和样式文件** 避免多人开发提交混乱

#### 运行及baseUrl说明

打开项目后使用 `npm i` 命令初始化 之后使用`npm run test`命令运行项目

现未接入后端 若要修改在.env.test文件中修改`VITE_APP_BASE_API`



## 文件结构



```mermaid
flowchart LR
	N1["src"]
	N2["api"]
	N3["assets"]
	N4["components"]
	N5["pages"]
	N6["plugins"]
	N7["router"]
	N8["store"]
	N9["style"]
	N10["utils"]
	N11["App.vue"]
	N12["main.js"]
	N13["permission.js"]
	N14["style.css"]
	
	N1-->N2
	N1-->N3
	N1-->N4
	N1-->N5
	N1-->N6
	N1-->N7
	N1-->N8
	N1-->N9
	N1-->N10
	N1-->N11
	N1-->N12
	N1-->N13
	N1-->N14
	
	N20["api请求的封装"]
	N21["api.js"]
	N211["具体请求函数"]
	N22["index.js"]
	N221["请求api管理"]
	N23["manage.js"]
	N231["请求方法"]
	
	N2-->N20
	N20-->N21
	N21-->N211
	N20-->N22
	N22-->N221
	N20-->N23
	N23-->N231
	
	N30["资源文件"]
	N31["fontIcon"]
	N311["字体图标"]
	
	N3-->N30
	N30-->N31
	N31-->N311
	
	N40["公共组件"]
	
	N4-->N40
	
	N50["页面"]
	N51["user"]
	N52["Index.vue"]
	N521["首页"]
	N53["待补充"]
	
	N5-->N50
	N50-->N51
	N50-->N52
	N51-->N53
	N52-->N521
	
	N60["插件"]
	N61["cache.js"]
	N62["cookies.js"]
	
	N611["缓存插件"]
	N621["存储token插件"]
	
	N6-->N60
	N60-->N61
	N60-->N62
	N61-->N611
	N62-->N621
	
	N71["main.js"]
	N711["路由配置文件"]
	
	N7-->N71
	N71-->N711
	
	N80["vuex"]
	N81["modules"]
	N811["article.js"]
	N8111["文章相关存储"]
	N812["user.js"]
	N8121["用户相关存储"]
	N82["main.js"]
	
	N8-->N80
	N80-->N81
	N80-->N82
	N81-->N811
	N811-->N8111
	N81-->N812
	N812-->N8121
	
	N90["样式"]
	N91["common.scss"]
	N911["全局类样式"]
	N92["globalColor.scss"]
	N921["全局颜色样式"]
	
	N9-->N90
	N90-->N91
	N91-->N911
	N90-->N92
	N92-->N921
	
	N100["工具类"]
	N101["request.js"]
	N1011["请求封装.js"]
	N102["throttle.js"]
	N1021["节流插件.js"]
	
	N10-->N100
	N100-->N101
	N101-->N1011
	N100-->N102
	N102-->N1021
	
	N111["主页面"]
	N11-->N111
	
	N121["入口文件"]
	N12-->N121
	
	N131["权限控制"]
	
	N13-->N131
	
	N141["全局基本样式"]
	
	N14-->N141
	
```

## 



