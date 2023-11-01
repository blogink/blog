abbrlink: 117984481
title: Linux安装V2Ray
date: '2023-08-06 12:50:30'
updated: '2023-08-06 12:50:33'
tags:
  - 操作系统
  - 程序
categories:
  - 科技
---
## 前言

一般情况下，程序员或普通网络学习者在研究学习诸如编程语言、操作系统等时，会不可避免使用到英文文档、国外平台。由于国内互联网的“特殊性”，这些官方或知名可信的网站一般难以访问，或者速度很慢，大大降低了学习的效率。此时如果给配置了代理那速度自然没的说~

注，如果你只是希望看看GitHub之类的，请下载Steam++。想玩代理玩得“高级”点，可以略参考本文。

Windows系统和Android系统安装这些工具是傻瓜式的，在此不多介绍。此文以Debian系统命令为例。本文所写为本机安装使用，如果是给服务器用的，请另行了解。

## 安装
### 安装V2Ray内核

Linux系统下常用的V2Ray版本是V2RayA，访问其在GitHub上的仓库：[https://github.com/v2rayA/v2rayA](https://github.com/v2rayA/v2rayA "https://github.com/v2rayA/v2rayA")

安装V2Ray内核，可使用其提供的镜像脚本

`curl -ls https://mirrors.v2raya.org/go.sh | sudo bash`

安装后可以关掉服务，V2RayA不依赖该服务

`sudo systemctl disable v2ray --now ### Xray 需要替换服务为 xray`

### 安装主程序

添加公钥

`wget -qO - https://apt.v2raya.mzz.pub/key/public-key.asc | sudo apt-key add -`

添加 V2RayA 软件源
```
echo "deb https://apt.v2raya.mzz.pub/ v2raya main" | sudo tee
/etc/apt/sources.list.d/v2raya.list
sudo apt update
```

### 安装 V2RayA

`sudo apt install v2raya`

你可以亲自尝试，在国内不使用魔法时，在Baidu、Bing等地方直接输入“V2Ray”五个字符，然后回车，你就会知道，直连下载难度不小。如果你提前准备好deb包，那么问题就变得简单了。把你准备好的包丢进Linux文件系统里，然后在终端输入：

`sudo apt install 「此处替换为你放入的deb包的目录」`

### 【选】kali安装V2RayA
哦用的是Kali啊，那直接看这个省事（虽然大差不差）：[https://github.com/DGitHub-Creator/kali-Linux-v2rayA](https://github.com/DGitHub-Creator/kali-Linux-v2rayA "https://github.com/DGitHub-Creator/kali-Linux-v2rayA")

内核安装：
```
curl -O https://cdn.jsdelivr.net/gh/v2rayA/v2rayA@master/install/go.sh
sudo bash go.sh
wget -qO - https://<span></span>apt.v2raya.mzz.pub/key/public-key.asc | sudo apt-key add - ### 添加公钥
echo "deb https://apt.v2raya.mzz.pub/ v2raya main" | sudo tee
/etc/apt/sources.list.d/v2raya.list ### 软件源
sudo apt update
安装v2rayA：sudo apt install v2raya
```
或者从别处下载完后：
```
sudo apt install 「deb文件所在路径」
systemctl start v2raya.service
```

又或者是这个：[https://www.bbsmax.com/A/VGzlnbG75b/](https://www.bbsmax.com/A/VGzlnbG75b/ "https://www.bbsmax.com/A/VGzlnbG75b/")

## 如何使用

由于Windows版配置文件内容与Linux版本相比大差不差，故请自行搜索配置写法。不嫌麻烦的可以

在Windows系统下先安装个V2RayN并正常使用后导出配置丢到Linux系统下/etc/v2ray/目录里的配置文件中去。如果已经启动服务，请在终端输入：
```
sudo service v2ray stop
sudo service v2ray start
```
由于1.5版本不再默认V2RayA自启动，故须执行下命令：
```
sudo systemctl start v2raya.service ### 启动 v2rayA
sudo systemctl enable v2raya.service ### 设置开机自动启动
```
之后可使用浏览器访问127.0.0.1:2017以访问，非本机如何访问不必多说，自己去看Linux系统在内网中分配的地址。以访问，非本机如何访问不必多说，自己去看Linux系统在内网中分配的地址。

进入后你会知道怎么做的。

忘了密码请在终端输入：
`sudo v2raya --reset-password`
参考文档：

[https://github.com/DGitHub-Creator/kali-Linux-v2rayA](https://github.com/DGitHub-Creator/kali-Linux-v2rayA)

[https://www.bbsmax.com/A/VGzlnbG75b/](https://www.bbsmax.com/A/VGzlnbG75b/)

[https://zhuanlan.zhihu.com/p/414998586](https://zhuanlan.zhihu.com/p/414998586)

[https://be-my-only.xyz/blog/v2ray-linux-client-setting/index.html](https://be-my-only.xyz/blog/v2ray-linux-client-setting/index.html)

[https://kylebing.cn/readme/docs/v2ray/v2ray%20%E5%AE%A2%E6%88%B7%E7%AB%AF%20Linux/](https://kylebing.cn/readme/docs/v2ray/v2ray%20%E5%AE%A2%E6%88%B7%E7%AB%AF%20Linux/)

[https://fengwenhua.github.io/2020/01/27/kali-an-zhuang-v2ray/#!](https://fengwenhua.github.io/2020/01/27/kali-an-zhuang-v2ray/#!)

[https://github.com/v2rayA/v2rayA/wiki/%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/7cd677a6c7401c8a092baa1ae63b96528b96a1f1](https://github.com/v2rayA/v2rayA/wiki/%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/7cd677a6c7401c8a092baa1ae63b96528b96a1f1)