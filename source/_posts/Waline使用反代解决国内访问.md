abbrlink: 2845603730
title: Waline解决国内访问
date: '2023-09-13 23:35:25'
updated: '2023-09-26 21:21:43'
tags:
  - Waline
  - 程序
categories:
  - 科技
---
## 【更新】Vercel直接绑定域名

破案了，直接在vercel绑定域名也是可以的。先前我未能成功是因为我域名的`SSL/TLS 加密模式`没配置好。在CF里把此处改为`完全`即可解决“重定向次数过多”的问题。这样一来，登录后台的问题也解决了。

原因是当网站开启了CloudFlare服务，用户访问网站时实际访问的是离用户比较近的服务器，Cloudflare再代理用户请求我们的源服务器，以达到加速和保护源服务器的目的。

如果在SSL中设置了Flexible（灵活），CDN会以HTTP协议回源网站。但如果源网站支持HTTPS并且设置了通 HTTP协议访问时，CDN会自动跳转访问HTTPS协议。

完美的循环重定向，最后浏览器不干了，报错ERR_TOO_MANY_REDIRECTS。

------------

## 前言
2022年8月LeanCloud官方表示由于管理原因，国际版公共域名在中国大陆无法访问，对于我这种不想备案的人来说不大友好。再加上看到有人说Valine安全性的问题（很多偏隐私的数据在前端即可查看），心生后怕，最后综合考虑，我选择Waline。至于Gittalk这种，我认为这种需要特地登录账号的评论系统不够简洁。

前文提到Waline的部署方式之一是Vercel部署，但由于Vercel的某些功能在科学上网方面“比较友好”，所以`*.vercel.app`域名也就被“名正言顺”地墙了，以至于一段时间内常常使用代理阅读国外项目说明文档的我没能发现这个问题(⊙﹏⊙)。

顺带更正下前面写过一篇配置Valine/Waline的文章的问题。

1. Valine由于我自暂未研究明白，且看在Waline后台方面便选择后者。Waline在部署完后，如果主题有预留评论系统的配置项，在**主题配置文件**中只需在Waline填写生成的访问链接即可，无需额外引入js等，包括leancloud提供的域名。
2. 使用海外版的LeanCloud也可以在国内访问，可以通过Cloudflare反代曲线救国解除封印。【我知道直接在vercel处理完域名就万事大吉了，可惜当时没解决。。。】

## 做法
>我默认你的Waline已经在Vercel部署完成，打开代理时，使用其默认分配的`vercel.app`域名可以正常加载评论系统。同时，我默认你手头有一个在Cloudflare正常解析的域名。

>此方法适用于几乎任意明网的反代。

打开并登录Cloudflare控制台，在左侧菜单找到`Workers 和 Pages`一项，在`概述`标题下方找到`创建应用程序`按钮（此处我已创建过了）。

![【图1】](https://s2.loli.net/2023/09/13/DiMclA3NRHYLGQf.png "【图1】")

选择Worker一路默认，名称随意，最后点击部署按钮。

![【图2】](https://s2.loli.net/2023/09/13/hO3LJDqCGXnHr1t.png "【图2】")

回到`概述`，点击你刚才创建的Worker，点击右上方`快速编辑`，删除其中所有内容，并替换为以下内容（下文为截至此文前我使用的方案。你有别处搜索到更好的也可以使用）：

![【图3】](https://s2.loli.net/2023/09/13/v9ABNzlDaHImpE5.png "【图3】")

```
addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.protocol = 'https:'
  url.hostname = "【你想要代理的域名，前后不加斜杠、https等】";
  let request = new Request(url, event.request);
  event.respondWith(fetch(request));
})
```

![【图4】](https://s2.loli.net/2023/09/13/wOMECZpXFsJzbTn.png "【图4】")

如果一切正常，右侧会返回200表示发送接收成功。

## 域名绑定
很显然，CF的这个功能，创建镜像站点，一定程度上能够轻松绕过防火墙访问一些内容，对科学上网“十分友好”（不排除正常使用该功能加速网站的用户），所以`*.worker.dev`这个域名的下场和上文vercel那个大差不差，需要使用自己的域名来解决这一问题。

这绑定域名没什么好讲解的了，从`概述`界面点击进入你刚才创建的worker详细界面，点击`Custom Domains`（详见图三中“预览”字样下方），往下找到`自定义域`，点击`添加自定义域`，按照提示绑定。

![【图5】](https://s2.loli.net/2023/09/13/FzZEhQyHvMJlatR.png "【图5】")

完成后等待域名`证书`一栏变绿显示`有效`即可

## 后记
这只能解决评论区正常使用的问题，管理员登录的问题还没解决（只能用那个被墙的`vercel.app`域名，可能是我还未研究透彻）。