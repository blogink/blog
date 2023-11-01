abbrlink: 439348253
title: 简洁安全的评论系统——Valine/Waline折腾笔记
date: '2023-08-20 12:53:58'
updated: '2023-08-20 12:55:25'
tags:
  - Waline
  - 程序
categories:
  - 科技
---
由于Hexo一类静态博客的自身限制，最终生成的东西本身是无法有过多交互的，不论后端，评论都需要外接。在这之前，我曾见有giscus、Gittalk等程序，虽国内也可使用，可需要GitHub账户，很显然不符合“即时评论”的要求，因此我将其归为“备选”。浏览一圈下来，简洁的、稳定的，也就只有Valine和Waline符合我的要求。

本文对应的环境为

>  NodeJS -> 18.16.0
>  hexo-cli -> 4.3.1
> hexo-theme -> Butterfly-4.9.0

# 一、应用配置【最好二选一】
## Valine配置
先说前者，Valine诞生于2017年8月，是一款基于LeanCloud的快速、简洁且高效的无后端评论系统。所以配置Valine只需要去LeanCloud注册个账号就能操作，这注册账号有手就行不作解释。

【！如果你的博客面向国内为主，还是去国内站点吧，虽然备案、自备域名什么的很麻烦，但为了你面向的用户，也只能这样。后文会讲到这个坑的……】

注册后进入控制台，在左下角有两个按钮快速入门和创建应用。点击创建应用，自定义名称（例如valine），选择开发版，其他默认，点击创建。控制台出现了你刚刚创建的应用，点击这个应用的右上角****图标进入设置界面，之后在数据储存->结构化数据选项卡中创建Comment这一Class。

随后找到valine开发版下面那栏里的应用Keys，你会看到AppID和AppKey，这两个是下一步我们需要使用的。

国内版大同小异，不同的是，国内版需要自备域名，而且还要备案等事。国际版不必绑定域名，地址可以使用设置->应用凭证->服务器地址->REST API 服务器地址。

## Waline配置
Valine虽然配置方便，但不够安全（AppID什么的暴露在前端你说安不安全），Waline相比之下多了后端，安全性更高，也较复杂。

当然，如果你面向国内为主，这我看就算了吧，除非Vercel被墙的事情你能想办法绕开。Vercel被墙是什么结果，就是此博客此文开始到下一篇告知更换评论系统时，中间所有评论区的情况。【好家伙前面那个Valine也是一样，国际版的“REST API 服务器地址”也是不给国内访问的。。。但我花那个钱去买独立IP搞备案什么的，我还不如买个主机跑WordPress方便】

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"><span><svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15"></svg></span></a>

看到这个按钮了吗？Vercel的。如果Vercel没号的自己注册个就行，推荐GitHub注册。

选个你喜欢的名字，下面的东西看着写就行，之后Vercel会帮你初始化好一切（你可能还需要在GitHub新建个仓库给Vercel用，你自己尝试你就知道了）

一两分钟后，满屏的烟花会庆祝你部署成功，点击Go to Dashboard，前往控制台。

在Vercel的Dashboard页面点击顶部的 Settings->Environment Variables 进入环境变量配置页，配置三个环境变量 LEAN_ID, LEAN_KEY 和 LEAN_MASTER_KEY ，前面写名称，后面写数据（就是你先前在LeanCloud相应仓库弄的AppID、AppKey、MasterKey），全部保存。如果你使用 LeanCloud 国内版，请额外配置 LEAN_SERVER 环境变量，值为你绑定好的域名。

配置完成后点击顶部的 Deployments ，点击最新的一次部署右侧的 Redeploy 按钮进行重新部署以让配置生效。之后 Vercel 会跳转到 Overview 界面开始部署，等待片刻后 STATUS 变成 Ready。点击 Visit ，即可跳转到部署好的网站地址，此地址即为你的服务端地址（serverUrl）

前面我们说过，Vercel的地址被墙（因为有大量用户用Vercel搞事情），所以绑定域名有助于缓解这一问题。点击顶部的Setting选项卡，找到Domains，填入你的域名，然后跟着提示来就行，等待生效。（虽然我部署时这个域名还是被墙）

之后访问【serverURL】/ui/register进行注册，注册的第一个用户即为管理员。

# 二、Hexo配置
这二者在Hexo配置的过程大同小异，引入也比较简单。此处以Butterfly为例。

找到博客根目录的\_config.yml和主题文件夹下的\_config.butterfly.yml文件（其实这个文件你放在博客根目录下也是没有问题的，后续也可以只修改根目录下的主题配置文件），确保你的\_config.yml中【#Extensions】这一条已经启用主题【例如theme: butterfly】

之后打开\_config.butterfly.yml文件，有以下几处需要修改【为方便阅读已去除部分注释，且换行、缩进等可能不标准。实际修改时可以不删去这些注释，并且注意空格与换行！！！】：
> comments:
>  Up to two comments system, the first will be shown as default
	  use: Waline # Valine,Disqus
	  text: true
	  lazyload: true
	  count: true
	  card_post_count: false
> 
> valine:
	  appId: # leancloud 的 app id
	  appKey: # leancloud 的 app key
	  avatar: monsterid
	  serverURLs: # 空着就行
	  bg: 
	  requiredFields: nick,mail
	  visitor: false
	  option:
>
> option:
	valine: [https://cdn.jsdelivr.net/npm/valine@1.5.1/dist/Valine.min.js] # 这里请务必注意与博客根目录下package.json里的版本号对应，不知道或未安装的请前往Valine官方文档进行阅读
	
Waline的改法与之相似，只需要把上述内容换成Waline的部分即可，实在不行就打开你编辑器的Ctrl+F搜索一下。option不改好像也不会发生什么，可能是我另有配置导致的。

修改完，保存，Hexo三连，完成。

当然，不用国内LeanCloud的，国内IP是用不了的。Valine我配置时无论如何都没成功，Waline这样配置倒是合理的，国内发不了看不了评论，挂代理时一切正常。

官方文档：

Valine -> [https://valine.js.org/](https://valine.js.org/)
Waline -> [https://waline.js.org/](https://waline.js.org/)
LeanCloud官方文档 -> [https://docs.leancloud.cn/](https://docs.leancloud.cn/)