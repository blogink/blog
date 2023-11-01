abbrlink: 1477501590
title: Hexo自定义记录
date: '2023-09-02 11:00:24'
updated: '2023-10-04 16:00:09'
tags:
  - 折腾
  - Hexo
categories:
  - 科技
---
# 前言

>建议先配置好Hexo并确保其能正常使用。

如你所见，Hexo的有些主题可玩性非常高，看着无相似性的几个Hexo站点，没准用的是同一套主题……

扯远了，此文谨以记录本人折腾博客时用到的内容，由于来源广泛且同文不同站的很多，加上我自己还改了不少，故“参考”处可能不全，还请知晓。

（以前还想着hexo不方便什么的，现在看来，对于每次更文字都先打草稿的我来说，二者差别真的不大，排版另说）

为方便起见，博客根目录记为`【Blogroot】`，域名记为`www.example.com`，自定义内容优先放在主题配置文件中，少部分会涉及到hexo根目录下配置文件。

本文提及的目录、配置等均为默认安装的样子，你若有自定义的请结合实际。本文基于Hexo6.3.0、Butterfly4.9.0。有些教复杂但官方教程写得详细的，此处一笔带过。

行数标注对应我的配置文件，但相应代码块大差不差。

yaml大小写等敏感、yaml以缩进表示层级关系。yaml中冒号后空一格再写内容。本文由于特殊原因格式可能混乱，请慎重复制粘贴！

# 安装主题

我选择的是Butterfly主题，汝若喜欢indigo或NexT请自便。但大多配置和自定义文件的引入应该都差不多的罢。。。

（此段引用<a href="https://butterfly.js.org/posts/21cfbf15" ref="nofollow">https://butterfly.js.org/posts/21cfbf15</a>官方教程）

在【Blogroot】（文件夹）中打开Git（没配置Hexo主程序的请移步至之前文章），输入
```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
Hexo需要Pug和Stylus渲染器，可使用命令安装
```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```
之后还是在【Blogroot】中找到`_config.yml`文件，使用编辑器打开，找到`theme: `并修改此行为`theme: butterfly`

为减少主题升级带来的不便，可将**主题**的配置文件`【Blogroot】/themes/butterfly/_config.yml`复制到【Blogroot】目录下，并重命名为`_config.butterfly.yml`，之后修改主题的配置均可只修改此文件。

>注意：1.不要把主题目录的 `_config.yml` 删掉;
2.以后只需要在 `_config.butterfly.yml` 进行配置就行。如果使用了 `_config.butterfly.yml`， 配置主题的 `_config.yml` 将不会有效果;
3.Hexo会自动合并主题中的 `_config.yml` 和 `_config.butterfly.yml` 里的配置，如果存在同名配置，会使用 `_config.butterfly.yml` 的配置，其优先度较高。

到这里主题算是安装完成。

# Butterfly自定义
## 自带修改
**常见**（字面意思）可用修改有：

### 自定义导航与页面
- `_config.butterfly.yml`中约第10行开始。

此处修改后，有些页面可能不存在，此时需要在`【Blogroot】/source`目录下建立同名文件夹，文件夹内创建`index.md`（可用hexo原生命令或第三方编辑器如Hexon、ESHexoN等完成）。自己添加页面也是同理，将自定义页面添加至导航请参考导航处格式。补充：此处导航前文字是可以修改的。

修改例：
```
menu:
  主页: / || fas fa-home
  归档: /archives/ || fas fa-archive
  # 标签: /tags/ || fas fa-tags
  分类: /categories/ || fas fa-folder-open
  # 清单||fas fa-list:
  #   Music: /music/ || fas fa-music
  #   Movie: /movies/ || fas fa-video
  友链: /link/ || fas fa-link
  关于: /about/ || fas fa-heart
```
那么请在`【Blogroot】/source`中创建`about`、`categories`、`link`文件夹（与上方文字对应关系不需多说），并分别在文件夹中创建`index.md`，里面的格式应该不需要多说了，官网有创建单页的教程，很详细；民间也有。

【PS：单页中可以有一定的CSS代码与HTML代码，但不能有JS】

### 简单自定义背景
- `_config.butterfly.yml`中约第40行、632行左右

注释讲得很明白了，很多都是字面意思，按要求改就行。

### 主页标题
- `_config.butterfly.yml`中约第753行、`_config.yml`中约第5行

也是字面意思，修改时注意下格式。

### Pjax
- `_config.butterfly.yml`中约第850行

```
pjax:
  enable: true
  exclude:
    # - xxxx
    # - xxxx
```
enable改成true就行

### 引入外部资源
- `_config.butterfly.yml`中约第919行

注：建议head后加css、bottom后加js

## 进阶修改（？）
### 全局美化（参考）
<a href="https://moonshuo.cn/" ref="nofollow">https://moonshuo.cn/</a>

### 博客背景使用一图流
<a href="https://qianchenggit.github.io/" ref="nofollow">https://qianchenggit.github.io/</a>

打开`_config.butterfly.yml`文件，找到图片相关`（banner）`几个，后面的图片都留空不填，如果和本站效果相仿请直接改成下方内容（注释已去除）：
```
# Disable all banner image
disable_top_img: false # 【取消首页全屏的图片】

index_img: transparent # 【此处为透明效果】

default_top_img: 【改成你自己的图片地址，不想要其他图片的改法同上方index_img】

archive_img: 【改成你自己的图片地址，不想要其他图片的改法同上方index_img】

tag_img:

tag_per_img:

category_img:

category_per_img:
```
还是这个文件，找到以下内容并修改（已去除部分注释）：
```
# Website Background (設置網站背景)
background: url() # 【括号内换成自己希望使用的背景图地址】

# Footer Background
footer_bg: transparent # 【页脚透明】
```
不喜欢黑色笼罩层的请再往下多看一行（为 header 或 footer 添加黑色半透遮罩）（这里我没试过。当然，另使用CSS修改也是可行的）

之后Hexo三连即可生效。如果不喜欢此时的样式，请另行参考网上各路大神自定义的CSS。

### 深色模式流星特效
【参考<a href="https://blog.meta-code.top/2021/09/30/2021-7/" ref="nofollow">https://blog.meta-code.top/2021/09/30/2021-7/</a>】

在前文提到的`_config.butterfly.yml`中找到`inject`处，在`bottom:`后
```
bottom:
  - '<canvas id="universe"></canvas>'
  - '<script src="/js/universe.js"></script>'
```
之后在`【Blogroot】/themes/butterfly/sources/js`目录下创建一个`universe.js`文件，也可以添加到自己的js文件中。该文件或相关位置编写如下：
```
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()
```
以上段落的最后部分`('data-theme')=='dark'`一段表明其仅在主题深色模式下启用。

为修改方便，随后请在`【Blogroot】/themes/butterfly/sources/css`目录下创建一个css文件，名字自定，例如`custom.css`，在其中加上：
```
/* 夜间模式下背景宇宙星光 */
#universe {  
    display: block;
    position: fixed;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}
/* 亮色模式下隐藏 */
[data-theme='light'] #universe {
    display: none;
}
```
回到`_config.butterfly.yml`，再次找到`inject`处，在`head:`后
```
head:
  - <link rel="stylesheet" href="/css/custom.css"/>
```
hexo三连，完成

### 优化链接
Hexo原生情况下文章链接是日期+标题的形式，这样会出现一个问题，一旦修改文章标题，原来的地址就无法访问；若使用汉字标题，复制链接时会非常难看；分级太多，对SEO不利。

而abbrlink这个插件就解决了此问题。此插件会给文章按照一定规则生成永久地址，只要文章还在，无论如何修改，原地址均可访问。

在`【Blogroot】`目录下打开Git执行
```
npm install hexo-abbrlink --save
```
打开博客根目录下的`_config.yml`文件，找到url处，修改
```
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://www.example.com
#permalink: :year/:month/:day/:title/
#permalink_defaults:
permalink: posts/:abbrlink/
abbrlink:
  alg: crc32 #support crc16(default) and crc32
  rep: dec   #support dec(default) and hex
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```
hexo三连生效

### 修改即时预览
浏览Hexo博客时访问的是编译后的静态页面，对于自定义来说，每次修改后需要清空缓存重新编译，比较麻烦。如果我希望修改后立即生效应怎么办？`Browsersync`就是这样一款浏览器同步测试工具，它能够在hexo文件（包括`Pug`、`Stylus`、`_config.yml`等）修改后即刻刷新。

在`【Blogroot】`目录下打开Git并输入：
```
npm install -g browser-sync # Mac、Linux用户若遇到权限不足的问题，可尝试加上“sudo”
```
执行完后输入以下命令，能显示对应版本则表示成功
```
browser-sync --version
```
什么？无此命令？请尝试npm走网络代理线路，或更换为<a href="https://npmmirror.com/" ref="nofollow">taobao镜像源</a>

安装hexo端插件，请执行
```
npm install hexo-browsersync --save
```
之后就和原来一样使用hexo三连即可，在`hexo s`执行时修改源文件，不出意外浏览器会自动刷新同步。

### 指定文章不在首页显示
先前看到张洪Heo大佬的方法，感觉不错，可惜若隐藏文章则首页文章数量也会受影响。而下文这个插件可以避免此问题。

项目地址：<a href="https://github.com/im0o/hexo-generator-index-custom" ref="nofollow">https://github.com/im0o/hexo-generator-index-custom</a>

- 在官方的首页生成器的基础上添加了使用 top 置顶文章和 hide 隐藏文章的功能。
- hexo-generator-index-custom 可以完全替代官方的 hexojs/hexo-generator-index，所以安装之后，先卸载官方的插件，不然会引起一些冲突。

在【Blogroot】下打开Git，输入
```
npm uninstall hexo-generator-index  
npm install hexo-generator-index-custom --save
```
在`_config.butterfly.yml`中添加如下配置：
```
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  pagination_dir: page
```
（所有的配置均与官方首页生成器一样，不必修改。）

配置完后便可使用。在文章开头的配置中添加`sticky`或`top`参数，可以置顶文章。
其值可以是`true`或数字，数字越大，文章排在越前面。在文章开头的配置中添加`hide`参数，可以隐藏文章。
```
---
title: Hello World
date: 2013/7/13 20:46:25
sticky: 100
---

---
title: Hello World
date: 2013/7/13 20:46:25
top: 100
---

---
title: Hello World
date: 2013/7/13 20:46:25
hide: true
---
```

### 给文章加上密码
项目地址：<a href="https://github.com/D0n9X1n/hexo-blog-encrypt" ref="nofollow">https://github.com/D0n9X1n/hexo-blog-encrypt</a>
【快速使用。更多配置详见该项目文档】

>~~首先, 这是 Hexo 生态圈中 最好的 博客加密插件~~
你可能需要写一些私密的博客, 通过密码验证的方式让人不能随意浏览.
这在 wordpress, emlog 或是其他博客系统中都很容易实现, 然而 hexo 除外. :(
为了解决这个问题, 让我们有请 "hexo-blog-encrypt".

在【Blogroot】下打开Git，输入
```
npm install --save hexo-blog-encrypt
```
然后在文章开头添加：
```
---
title: Hello World
date: 2016-03-30 21:18:02
password: hello
---
```
三连即可生效。高级点可以再添加：
```
password: pwd
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```
将博文头部的`password`一条删去即取消加密。

### RSS
在【Blogroot】下打开Git，输入
```
npm install hexo-generator-feed --save
```
然后打开`_config.yml`，在末尾新起一行添加
```
# RSS
feed:
  enable: true #是否启用插件
  type: atom #有atom和rss2两个选项，使用默认atom就好了
  path: atom.xml #也用默认配置atom.xml就行
  limit: 15 #展示文章的数量,使用 0 或 false 代表展示全部
  hub: #根据官网，空着就行
  content: #默认是false，true的话会在rss文件中包含整个文章内容
  content_limit: 100 #摘要长度
  content_limit_delim: ' ' #默认不填了
  order_by: -date #采用日期进行排序
  icon: icon.png #给rss链接配置icon
  autodiscovery: true #自动发现提要
  template: #给rss文章配置模板
```
【注：该文件前面url处需填写你博客的地址，详见“优化链接”】
回到`_config.butterfly.yml`，在末尾新起一行，添加
```
rss: /atom.xml
```
还是这个文件，在约第32行找到social块，添加
```
social:
  # fab fa-github: https://github.com/xxxxx || Github || '#24292e'
  # fas fa-envelope: mailto:xxxxxx@gmail.com || Email || '#4a7dbe'
  fas fa-rss: https://www.example.com/atom.xml
```
hexo三连，完成

### live2D
在`【Blogroot】`目录下打开Git，输入
```
npm install --save hexo-helper-live2d #普通版Live2D主程序
npm install 【模型名称】 #字面意思
```
作者提供了以下几个模型于<a href="https://github.com/xiazeyu/live2d-widget-models" ref="nofollow">https://github.com/xiazeyu/live2d-widget-models</a>中，你研究明白源文件也可以自己做个
```
live2d-widget-model-chitose
live2d-widget-model-epsilon2_1
live2d-widget-model-gf
live2d-widget-model-haru/01 (use npm install --save live2d-widget-model-haru)
live2d-widget-model-haru/02 (use npm install --save live2d-widget-model-haru)
live2d-widget-model-haruto
live2d-widget-model-hibiki
live2d-widget-model-hijiki
live2d-widget-model-izumi
live2d-widget-model-koharu
live2d-widget-model-miku
live2d-widget-model-ni-j
live2d-widget-model-nico
live2d-widget-model-nietzsche
live2d-widget-model-nipsilon
live2d-widget-model-nito
live2d-widget-model-shizuku
live2d-widget-model-tororo
live2d-widget-model-tsumiki
live2d-widget-model-unitychan
live2d-widget-model-wanko
live2d-widget-model-z16
```
回到`_config.yml`，新起一段添加
```
live2d:
  enable: true #是否启用
  scriptFrom: local
  model: 
    use: 【模型名称】 #模型选择
  display: 
    position: right #模型位置
    width: 120 #模型宽度
    height: 240 #模型高度
    hOffset: 20 #纵向偏移
    vOffset: -55 #横向偏移
  mobile: 
    show: false #是否在手机端显示
  react:
    opacity: 0.8 #透明度
```

进阶版因未知原因我没成功，而且即使成功也对我站加载速度和体验不友好，具体可参考至<a href="https://www.mmbkz.cn/a262193e.html" ref="nofollow">https://www.mmbkz.cn/a262193e.html</a>和<a href="https://diego369.github.io/2022/04/08/live2d" ref="nofollow">https://diego369.github.io/2022/04/08/live2d</a>

### 全局左下角APlayer
官方教程为<a href="https://butterfly.js.org/posts/507c070f/" ref="nofollow">https://butterfly.js.org/posts/507c070f/</a>

使用hexo-tag-aplayer可使用下文方法
`【Blogroot】`目录下打开Git，安装插件
```
npm un hexo-tag-aplayer
```
回到`_config.butterfly.yml`，在约第859行APlayer处、第919行inject处作如下修改
```
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
......
inject:
  head:
    ......
  bottom:
    ......
    - <div class="aplayer no-destroy" data-id="【自定义】" data-server="netease" data-type="playlist" data-fixed="true" data-mini="true" data-volume="0.2" data-listFolded="true" data-preload="none" data-autoplay="false" muted></div>
```
上方示例使用了`MetingJS`，配置大多与MetingJS相同，普通使用只需注意以下参数：
> data-id="" ： 指定调用的 id ，一般可以在地址栏中找到
data-server="netease" ： 网易云音乐服务器，可改为netease, tencent, kugou, xiami, baidu ，分别对应网易云音乐、QQ音乐、酷狗音乐、虾米音乐、百度音乐
data-type="playlist ： 指定调用类型，可选 song, playlist, album, search, artist ，分别对应单曲、歌单、专辑、搜索结果、艺术家
data-fixed="true" ： 播放器吸附在页面左下角
data-mini="true" ： 迷你版播放器
data-volume="0.2" ： 默认音量为0.2
autoplay="false" ： 取消自动播放

APlayer基本配置完成，美化之类的可自行搜索。

### 友情链接设置与美化
#### 设置
在`[Blogroot]\source\`目录下创建文件夹（例如`friends`），然后在此目录下创建`index.md`文件。在此文件中输入以下内容（基本内容，其他你亦可自定义）：
```
---
title: 友情链接
type: 'link'
---
```
然后前往`[Blogroot]\source\_data\`目录下新建`link.yml`文件（没有目录的自己创建个），按照以下格式输入：
```
- class_name: 分组1 # title
  class_desc: # 分组备注
  link_list: # 友链列表
    - name: 名称
      link: 访问链接url
      avatar: 图片链接(最好通过图床构建，避免加载失效)
      descr: 链接描述
	- name: 名称
      link: 访问链接url
      avatar: 图片链接
      descr: 链接描述
	  
- class_name: # title
  class_desc: # 分组备注
  link_list: 分组2 # 友链列表
    - name: 名称
      link: 访问链接url
      avatar: 图片链接
      descr: 链接描述
```
`_config.butterfly.yml`前面关于导航栏的配置，想必无需多言，去除注释即可。
```
  友链: /friends/ || fas fa-link # 斜杠中间那个就是相对地址，例如你前面创建单页的文件夹名为`friends`，此处便如是填写。
```
Hexo三连即可。

#### 美化
<a href="https://akilar.top/posts/57291286/" ref="nofollow">https://akilar.top/posts/57291286/</a>

### 加载动画
#### 齿轮
参考<a href="https://cnhuazhu.top/butterfly/2021/02/25/Hexo%E9%AD%94%E6%94%B9/Hexo%E7%AB%99%E7%82%B9%E5%8A%A0%E8%BD%BD%E5%8A%A8%E7%94%BB%E4%BF%AE%E6%94%B9%EF%BC%88%E9%BD%BF%E8%BD%AE%E6%95%88%E6%9E%9C%EF%BC%89/" ref="nofollow">https://cnhuazhu.top/butterfly/2021/02/25/Hexo%E9%AD%94%E6%94%B9/Hexo%E7%AB%99%E7%82%B9%E5%8A%A0%E8%BD%BD%E5%8A%A8%E7%94%BB%E4%BF%AE%E6%94%B9%EF%BC%88%E9%BD%BF%E8%BD%AE%E6%95%88%E6%9E%9C%EF%BC%89/</a>

（最终我没有选择此方案）

#### 胶囊式加载进度条
虽说Butterfly4.5.0就内置了pace，反正我是没成功。

回到`_config.butterfly.yml`找到`preloader`，将`enable: false`改为true。你要不放心的话在此段的pace_css_url后修改
```
pace_css_url: https://cdn.jsdelivr.net/npm/pace-js@1.2.4/pace-theme-default.min.css
```
找到`inject:`中`bottom:`，添加js：
```
- <script data-pjax src="https://cdn.jsdelivr.net/npm/pace-js@1.2.4/pace.min.js"></script>
```
随后在`【Blogroot】/themes/butterfly/sources/css`中新建一个css文件（也可以使用前文提到的custom.css），引入方法同前文。在这个文件中添加
```
.pace {
  -webkit-pointer-events: none;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  z-index: 2000;
  position: fixed;
  margin: auto;
  top: 10px;
  left: 0;
  right: 0;
  height: 8px;
  border-radius: 8px;
  width: 4rem;
  background: #eaecf2;
  border: 1px #e3e8f7;
  overflow: hidden
}

.pace-inactive .pace-progress {
  opacity: 0;
  transition: .3s ease-in
}

.pace .pace-progress {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  max-width: 200px;
  position: absolute;
  z-index: 2000;
  display: block;
  top: 0;
  right: 100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 1.5s ease infinite;
  background-size: 200%
}

.pace.pace-inactive {
  opacity: 0;
  transition: .3s;
  top: -8px
}
@keyframes gradient {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}
```
hexo三连，完成

### 页脚电子钟
页脚电子钟（含部分GitHub徽标）：<a href="https://akilar.top/posts/b941af/" ref="nofollow">https://akilar.top/posts/b941af/</a>

### 侧边栏日历
参考<a href="https://cloud.tencent.com/developer/article/1918437" ref="nofollow">https://cloud.tencent.com/developer/article/1918437</a>

在`【Blogroot】`目录下打开Git，输入
```
npm install -g cnpm -registry=https://registry.npm.taobao.org # 你如果已经安装过cnpm则可忽略这条
cnpm install --save git://github.com/howiefh/hexo-generator-calendar.git
```
从<a href="https://github.com/pengloo53/Hexo-theme-light_cn/tree/master/source/js" ref="nofollow">https://github.com/pengloo53/Hexo-theme-light_cn/tree/master/source/js</a>下载`calendar.js`和`language.js`两个文件，将其保存到`【Blogroot】/themes/Butterfly/source/js/`目录下。保存后请使用编辑器打开`calendar.js`文件，在结尾`}(jQuery));`前添加
```
$(document).ready(function () {
    $('#calendar').aCalendar('zh-CN');//'zh-CN'请根据自己博客的语言选择
});
```
加完对照下与我的是否类似
```
......
    root: '/calendar/',
    url: '/calendar.json'
  };
  
  $(document).ready(function () {
     $('#calendar').aCalendar('zh-CN');//'zh-CN'请根据自己博客的语言选择
  });

}(jQuery));
```
之后打开`_config.butterfly.yml`，找到`inject:`，在`bottom:`后添加
```
- <script src="/js/jquery.min.js"></script> # 这段没引入的自行添加，而且需在bottom后第一个引入，否则可能出现加载出错问题
......
- <script data-pjax src="/js/calendar.js"></script>
- <script data-pjax src="/js/languages.js"></script>
```
在`【Blogroot】/themes/Butterfly/source/css/_layout/`目录下新建`calendar.styl`文件，内容如下
```
#calendar
  a
    text-decoration none

.cal-head
  margin-bottom: 15px
  position relative
  height 20px
  padding 8px 6px 2px 6px

.cal-prev,.cal-next
  position absolute
  top 9px
  width 16px
  height 18px
  padding 3px 4px
  border 1px solid transparent
  color #333
  outline 0

.cal-prev
  left 8px
  &:before
    border-right 9px solid #333

.cal-next
  right 8px
  &:before
    border-left 9px solid #333

.cal-prev:before,.cal-next:before
  content ''
  display block
  width 0
  height 0
  border-top 5px solid transparent
  border-bottom 5px solid transparent

.cal-title
  width 100px
  margin 0 auto
  color #333
  font bold 14px/18px Arial
  text-align center
  a
    border 1px solid transparent
    color #9f9f9f

.cal,
.cal th,
.cal td
  border 1px solid #d1d1d1

.cal
  display: table
  border-collapse separate
  border-spacing 0
  border-width 1px 0 0 1px
  table-layout fixed
  width 100%
  margin 0
  th
    background #9f9f9f
    color #fff
    border-width 0 1px 1px 0
    font-weight 700
  td
    border-width 0 1px 1px 0
  tbody
    a
      background-color #007acc
      color #fff
      display block
      font-weight 700
    .cal-today
      background-color #66ecfd
      color #fff
  .cal-gray
    color #bbb8b8

[data-theme='dark'] .cal .cal-gray
  color #505050

.cal th,
.cal td
  font-weight normal
  line-height 2.5625
  padding 0
  text-align center

[data-theme='dark'] .cal .cal-foot
  color #9f9f9f

.cal .cal-foot
  color #2ca6cb

.cal-title a:hover,
.cal-prev:hover,
.cal-next:hover,
.cal .cal-foot:hover,
.cal .cal-foot:focus,
.cal tbody a:hover,
.cal tbody a:focus
  background-color #686868
  color #fff
  cursor pointer
```
在`【Blogroot】/themes/Butterfly/layout/includes/widget/`目录下新建`card_calendar.pug`文件，内容如下
```
.card-widget.card-calendar
  .card-content
    .item-headline
      i.far.fa-calendar-alt(aria-hidden="true")
      span= _p('aside.card_calendar')
    div.widget-wrap
    div#calendar.widget
```
在`【Blogroot】/themes/Butterfly/layout/includes/widget/`目录下找到并使用编辑器打开`index.pug`文件，在你认为合适的位置插入以下内容
```
if theme.aside.card_calendar
        !=partial('includes/widget/card_calendar', {}, {cache:theme.fragment_cache})
```
我的文件修改如下
```
......
  else
    //- page
    !=partial('includes/widget/card_author', {}, {cache: true})
    !=partial('includes/widget/card_announcement', {}, {cache: true})
    !=partial('includes/widget/card_calendar', {}, {cache: true}) //修改内容
    !=partial('includes/widget/card_top_self', {}, {cache: true})

    .sticky_layout
      if showToc
        include ./card_post_toc.pug
......
```
回到`_config.butterfly.yml`配置文件，找到`aside:`段落，在这段结尾添加相关内容，修改完应如下（calendar一段，缩进与前部分配置齐平，其相对关系应为aside内）
```
......
  card_calendar:
    enable: true

# busuanzi count for PV / UV in site
# 訪問人數
busuanzi:
......
```
编辑`【Blogroot】/themes/Butterfly/languages/zh-CN.yml`文件 (根据你的网站语言选择)，找到`aside`, 在下面添加一行
```
card_calendar: 日历
```
不出意外的话，三连后日历成功显示

### 进入离开页面时修改标题

你可能见过一些网站，当离开网页时，上方标签内标题会变成另一段文字；回到页面后标签内容再次修改，几秒后恢复。

在`【Blogroot】/themes/Butterfly/source/js/`目录下随便找个js文件打开（也可以自己新建），添加以下内容：
```
var originTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = 'w(ﾟДﾟ)w不要走啊！！！ ' + originTitle;
        if (titleTime != null) {
            clearTimeout(titleTime);
        }
    } else {
        document.title = 'ヾ(^▽^*)))欢迎回来！ ' + originTitle;
        titleTime = setTimeout(function () {
            document.title = originTitle;
        }, 2000);
    }
});
```
新建js的记得在`_config.butterfly.yml`中`inject:`部分的`bottom:`后引入你新建的文件，然后Hexo三连即可。

# 后记
無