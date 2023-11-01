abbrlink: 2223589302
title: Vercel无服务器部署php程序
date: '2023-10-26 16:52:37'
updated: '2023-10-26 16:52:42'
tags:
  - 程序
categories:
  - 科技
---
# 写在前面

vercel 规定了程序没有写入权限，唯一拥有写入权限的只有`/tmp`这个临时目录。考虑用这种方法的，大多是“实验”或 api 等小 php 项目的（特地弄个服务器不大划算？）。

你可能见过有人用这样的操作部署了 Typecho 等程序，那是另编写了类似于`config.inc.php`之类的配置文件实现的——不过按照这个思路实现安装 WordPress 等亦非不可。 

由于众所周知的原因，请自备：
- 域名（前面讲 Waline 配置时介绍过`.vercel.app`域名的现状，除非你不打算在国内使用）
- 能让 github 体验感变好的加速器（如`Watt Toolkit`，即`Steam++`。如果你网够好可无视）
- 初中英语（再不济翻译软件总有吧？）
- 搜索引擎

本文不介绍如何网站账户注册等问题，不懂请自行搜索。

>如果你正好想要部署 Typecho ，GitHub 上已有大佬预配置好了，你可以直接去搜索阅读那个项目的说明。

------------

What？Vercel 什么时候能部署 PHP 程序了？

><a href="https://github.com/vercel-community/php" ref="nofollow">Vercel-PHP</a>

的确是可行的啊！这对于一些想部署些觉得特地准备服务器不划算的 PHP 项目的用户来说是好消息。

# 正文
## 准备
关于部署项目到 Vercel 有两种方式：一种使用 Vercel CLI 进行部署；另一种使用第三方库进行拉取。这里使用后者（因为操作比较偏小白）

创建个文件夹，命名随意。在该文件夹下，请确保有以下内容：

```
project（文件夹）
├── api
│   └── index.php
└── vercel.json
```
`api/index.php`中有：
```
<?php
$file= __DIR__ . '/..'.$_SERVER["PHP_SELF"];

if(file_exists($file))
{
   return false;
}
else
{
    require_once __DIR__ . '../index.php';
}
#echo $_SERVER["PHP_SELF"];
```
>`require_once __DIR__ . '../index.php';`后面这里你可以改成`index.html`等（但我暂未尝试）（php文件中写纯html貌似也不会有问题）

`vercel.json`中有：
```
{
  "functions": {
    "api/index.php": {
      "runtime": "vercel-php@0.6.0"
    }
  },
  "routes": [
    { "src": "/(.*)", "dest": "/api/index.php" }
  ]
}

```
>`"runtime": "vercel-php@0.6.0"`一行， vercel 的 php 环境对应为：

| vercel-php | PHP版本 |
| ------------ | ------------ |
| vercel-php@0.6.0 | PHP 8.2.x |
| vercel-php@0.5.3 | PHP 8.1.x  |
| vercel-php@0.4.1 | PHP 8.0.x |
| vercel-php@0.3.3 | PHP 7.4.x |

>不过 PHP7.4 在 2022 年 11 月 28 日停止维护，建议还是用`0.6.0`那个（自己使用时，只有这个版本能部署成功，其他均有报错，可能是 nodejs 版本、安全什么的问题。如果你准备部署的 PHP 程序不支持 PHP8.2 ，那……自求多福吧。

之后将你想要部署的 PHP 程序放到该文件夹根目录（与`vercel.json`文件同级，`index`文件所在目录需与`api/index.php`中`require_once __DIR__ . '../index.php';`对应）。

## 推送与部署

进入 GitHub 并登录，创建一个仓库（命名随意），将你刚才那个文件夹里的所有东西推送到这个仓库里（如果你跟着本文的方式进行，推送完后`vercel.json`文件应在该仓库的根目录下）。

打开<a href="https://vercel.com" ref="nofollow">vercel.com</a>并使用 GitHub 登录，创建 Vercel 项目（此处项目名可以不与 GitHub 仓库同名）。选择仓库，会提示安装相应组件……这里跟着网页上的指引一步步来即可，最后满屏的烟花（有些网络环境不佳的可能只有“Congratulations”这样的词）会庆祝你部署成功。

之后按照网页上的提示进入项目页面，它会提供给你一个`.vercel.app`后缀的域名——不过国内无法访问。这绑定域名应该不需要多说了，实在不行网页翻译一下也是能懂的。

# 后记

如果出现问题请自行检查前面的步骤，适当运用搜索引擎解决问题。