abbrlink: 2127331844
title: 开销几乎为零静态博客——Hexo折腾记录
date: '2023-08-19 11:28:30'
updated: '2023-08-19 11:28:53'
tags:
  - Hexo
  - 折腾
categories:
  - 科技
---
# 前言

我想我站的各位读者们应该都知道其访问速度的。引号页还好，毕竟有GitHub和Cloudflare加速；主站就杯具了，不花钱嘛，只能忍受ifatnet分销的谜一样的速度。好家伙最近几次还连不上，我看啊这种弄数据库的动态玩意我暂且先留着本地备份用，万一哪天寄了数据都来不及善后Σ( ° △ °|||)︴。

我看着很多人弄到GitHub上的静态博客一般有三，Hexo、Hugo、Jekyll。据我所见，Hexo的民间文档比较多，而且还有Butterfly、NexT等适合魔改的主题，自然适合我这种爱折腾的人用。要不是因为没后端全靠本地部署我也不会去研究什么WordPress、Typecho、Xiuno之类的了。

虽然可以用Cloudflare、Vercel等东西将Hexo的后端搬到云上以用于在线编辑，但我目前还不会ヾ(≧O≦)〃嗷~。

说回正题，此文将记录我使用Hexo和GitHub制作个人博客遇到的问题与解决方法，以备不时之需。

本文主要针对Windows用户讲解，但Hexo配置不一定要在Windows系统完成。

# 一、安装Git

Hexo 基于 Node.js，搭建过程中还需要使用 npm ，好在 Node.js 已自带带和 git，因此先搭建本地操作环境，安装 Node.js 和 Git。

>Node.js：https://nodejs.org/zh-cn
Git：https://git-scm.com/downloads

之后一直下一步（你看得懂可以自行决定）
Git的安装有以下过程：

1. 声明GPLv2协议；
2. 选择安装目录；
3. 选择安装组件【从上到下为添加桌面图标、添加到右键大文件支持、检测关联文件（两个选项）、每天检查更新、将配置文件添加到Windows终端】【一般最后两个不选，最后一个要配合 Windows Terminal 以发挥其优势】；
4. 选择开始菜单文件夹；  
5. 选择Git默认编辑器，默认是vim（纯命令行，上手较难，但熟练了极其有用）。若不选择vim，安装后需要到“我的电脑->属性->高级系统设置->高级->环境变量->系统变量->Path->编辑添加”配置编辑器信息；  
6. 决定初始化新项目（仓库）的主干名字。第一种是让 Git 自己选择，名字是 master ，但将来可能会改为其他名字；第二种是自定义，默认是 main，也可以改为其他的名字。一般默认第一种；  
7. 配置环境变量。  
第一种是仅从 Git Bash 使用 Git。这个的意思就是你只能通过 Git 安装后的 Git Bash 来使用 Git ，其他第三方工具均不可。  
第二种是从命令行以及第三方软件进行 Git。字面意思，比第一种多了第三方工具的支持，比较推荐。  
第三种是从命令提示符使用 Git 和可选的 Unix 工具。选择这种将覆盖 Windows 工具，不爱折腾的还是选第二种较好；  
8. 选择SSH执行文件。这……选第一种好了；  
9. https后端传输。如果你使用Git不只是为了探索GitHub之类的，选第一种即可；  
10. 配置行位符号转换。  
签出 Windows 样式，提交 Unix 样式的行结尾。  
按原样签出，提交Unix样式的行结尾。  
按原样签出，按原样提交。  
你要看不懂或无所谓的，选第一个就行了。  
11. 配置终端模拟器，这个选第一个就行；  
12. 默认Git Pull。为了求稳，选第一个即可。你要爱折腾或已经对这玩意熟悉了，第二个也不是不行，甚至还能辅助你；  
13. 选择一个凭证帮助程序。这里的英文实在是太易懂了不解释。选第一个；  
14. 额外选项。启用文件系统缓存和启用符号链接。这自行决定；  
15. 实验性功能。你要求稳的话就别勾选了。  
好了你已经安装了Git，接下来的Hexo操作将在Git中完成。别急，Hexon结尾再说。

# 二、GitHub配置
然后……你既然要部署到GitHub上，你总得有个号吧？选免费计划就足够你玩了。  
使用邮箱注册 GitHub 账户，选择免费账户（Free），并完成邮件验证。  
## 创建Key：  
右键 -> Git Bash Here，设置用户名和邮箱：  
```
git config --global user.name "GitHub 用户名"  
git config --global user.email "GitHub 邮箱"  
```
创建 SSH 密匙：  
```
输入 ssh-keygen -t rsa -C "GitHub 邮箱"
```
然后一路回车。  
**【以上三段在输入时需保留前后双引号】 **

## 添加秘钥：
勾选显示“隐藏的项目”，进入 “C:\\Users\\用户名\\.ssh” 目录，用记事本打开 id\_rsa.pub 文件并复制里面的内容。  
登陆 GitHub ，进入 Settings 页面，选择左边栏的 SSH and GPG keys，点击 New SSH key。  
Title 随便取个名字，粘贴复制的 id\_rsa.pub 内容到 Key 中，点击 Add SSH key 完成添加。  
一切弄完后打开Git输入：  
```
ssh -T git@github.com 
```
出现 “Are you sure……”，输入 yes 回车确认。显示 “Hi xxx! You've successfully……” 即连接成功。

## 创建一个仓库用于部署Hexo。  

右上角，头像加号，New repository，然后仓库名必须为“用户名.github.io”，否则访问时不是github.io的三级域名。你也可以创建个组织，在组织里创建个仓库，此时若希望以域名访问，这个仓库须和组织名相同，和用户名无关（除非你给组织起个相同的名字），也算是一种方法。  
description选填，下面选择“Public”，创建README，完事。之后博客地址为`https://用户名.github.io`。组织同理。

  
# 三、本地安装Hexo  
可算讲到主体内容了。你在你的Windows设备里找个顺眼的地方创建个文件夹，起名随意，你找得到就行。在这个文件夹里右键选择 Git Bash Here ，然后使用npm安装Hexo：  
npm install -g hexo-cli  
sudo npm install -g hexo-cli【这条是给Mac用户的】  
我比较建议各位在吃饭前运行这条命令，你吃完饭后甚至还可以散个步再回来，但不要出个居民楼就回去。等你回来了，就可以开始初始化Hexo：  
hexo init      # 初始化  
npm install    # 安装相关组件  
完成后输入以下命令：  
hexo g   # 渲染、编译页面  
hexo s   # 启动本地预览  
之后访问`http://localhost:4000`即可预览。如果你正在使用4000端口，请先Ctrl+C关闭映射，然后输入：  
hexo server -p 7000  
换个7000端口，你喜欢别的数字请自便，最大不过65536。

  
# 四、将Hexo部署到GitHub  
先把hexo-deployer-git安装了：  
```
npm install hexo-deployer-git --save  
```
然后到你存放Hexo文件的目录下找到“\_confiy.yml”文件，打开，在末尾进行修改：  
```
deploy:  
type: git #不解释  
repository: git@github.com:用户名/用户名.github.io #修改相关内容为自己的。  
branch: master #你可以改为main或其他分支  
```
【补充：用户名也可以改为“组织名”，后面那段“用户名.github.io”可以改为组织内的仓库。其实你要有自己的域名并打算绑定，你甚至可以不用GitHub给的域名，仓库名随便起就行。反正你最后写出来的得是`https://github.com/[用户名/组织名]/[仓库名]`】。如果你不想创建个组织（虽然也可以创建一个人的组织），你只能按规定命名仓库，否则绑定域名那关你很难过。】  
【创建组织的话，组织内需要至少一个按规定命名的仓库，否则后面绑定域名你也很难过】  
【总之，保险起见，你最后弄完的域名得能用地址访问而非GitHub开头的仓库地址访问】  
好了，输入以下命令：  
```
hexo d  
```
愉快地部署吧！一路畅通还是受阻，Git的输出界面你看得出来的。  
如果你前面使用用户名、组织名按照规定命名的仓库，访问`https://[用户名/组织名\].github.io`（不要加中括号，例如`https://abc.github.io`）即可访问你的博客。

# 五、绑定域名（选）  

这自定义一个域名不更酷吗？追求SEO也更方便。域名的话请自行解决，你去买一个也好，整免费的也好，总之这一步你手头得有一个域名。  
域名解析到DNS服务商（例如Cloudflare）后，在DNS添加两道解析（保险起见）  
A记录 域名 185.199.110.153【GitHub的ip地址，不嫌麻烦的可以把另外几个地址也解析上】  
CNAME www开头域名（写了www会自动创建） 上文提到的地址（所以说要有以用户名.github.io命名的仓库或组织内至少一个以相同格式命名的仓库，能直接通过域名访问）  
然后到相应的仓库中，找到setting选项卡，在左侧菜单找到pages选项卡，选择仓库路径（就是你前面在\_config.yml里写的master还是main还是其他的）、root。若配置正确，下方会出现让你填写自定义域名的地方。写完后等个几分钟生效，若无则自行检查哪一步有没有问题。  
解析生效后在Git中输入：  
```
hexo clean   # 清除缓存  
hexo g       # 编译渲染  
hexo d       # 部署  
```
然后使用你的自定义域名看看能不能访问。  
如果你不希望用组织里的这个仓库，你还可以在组织里另创建一个仓库，在setting里【直接带子域名输入】，例如`111.abc.com
111.abc.com`，然后去DNS解析商那里加一条A记录，名称就是你填的`111.abc.com
111.abc.com`，地址就是你前面填的GitHub的ip。同样的，等待生效。

  
# 六、发布文章  
终于完成了基本部署！  
在终端写文章实在不符合我的习惯，所以安装hexo-admin：  
```
npm install hexo-admin --save  
```
完成后输入：  
```
hexo s  
```
在浏览器打开`localhost:4000/admin`即可访问（端口号取决于你的自定义，默认不改是4000）  
然后hexo-admin里面的设置，你看着就会用的，不需要多讲。

# 七、辅助编辑  
## 更方便的管理面板（以Hexon为例）
好家伙每次部署我还得敲命令，虽然不难但还是麻烦。另外有些虽然操作方便，但我没条件或不会安装，所以我选择Hexon！地址：[https://github.com/gethexon/hexon](https://github.com/gethexon/hexon "https://github.com/gethexon/hexon")。  
而且看着这玩意还可以部署到云上（那种免费的虚拟主机自然不行，起码能跑得起node.js吧？），这可有意思了……  
由于国内网络环境的特色，还是换个源吧先……  
```
npm config set registry https://registry.npmmirror.com  
或npm config set registry http://mirrors.cloud.tencent.com/npm/  
或npm config set registry https://mirrors.huaweicloud.com/repository/npm/  
或其他镜像源……  
```
然后验证镜像源：
```
npm config get registry
```
最好把pnpm也装一下：  
```
npm install pnpm -g  
```
在你博客的目录下打开Git，输入：  
```
git clone https://github.com/gethexon/hexon.git  
```
进入hexon目录，输入：  
```
npm install;npm run setup # 执行完后再运行下一条
```
执行完后你会看到输出内容。这些英文你看得懂的，博客所在目录你是能写的。全部做完后，直接输入：  
```
npm start  
```
然后在浏览器输入`localhost:5777`（默认端口为5777），填入你先前设置的信息即可登录。  
如果你先前配置没问题，而且也验证过了命令行部署且一切正常，以后你就可以放心地在这个界面进行发布、修改、创建页面、部署等基本操作了。

# 结尾  
以上。