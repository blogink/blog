abbrlink: 3085606162
title: 层层包裹，触探深渊——粗讲Tor浏览器的安装
date: '2023-08-12 12:52:06'
updated: '2023-08-12 12:52:10'
tags:
  - 网络
  - 程序
categories:
  - 科技
---
## Tor是什么

Tor（洋葱路由）网络是一个用来保护你的互联网以及隐私的匿名网络。正如其含义“洋葱”一样，它的协议和网桥将用户真实网络信息层层包裹并发送出去。Tor是一个基于FireFox的“魔改版”，得益于其操作的简便性与效率，让它成为了当下最流行的暗网访问工具，让I2P之类的软件成为了“备用”一般的存在。当然，正因为流行，Tor得到的“关注”也不小，例如它的加密信息有次被截获，然后几个暗网组织被端掉。

Tor网络是一组志愿者运营的服务器。Tor通过在由志愿者运营的分布式中继系统之间跳转来保护互联网通信。这避免了人们窥探我们的网络，他们无法了解我们访问的网站或者用户身在何处，并且也可以让我们访问被屏蔽的网站。

请记住，这玩意和代理、VPN一样，它们都不是为了“科学上网”而生，只是它们恰好可以达到“科学上网”的目的

  
## 我为什么需要Tor

  
设计Tor的主要目的是为了上网隐匿身份。所以，跟其它的“科学上网”工具不同。它的重点功能是【隐匿性】，“科学上网”只是它顺带的功能。因此，使用它的人大多有以下几类：

*   为了隐匿自己所在的国家。有些视频网站为了版权的原因，会限制某些国家的IP，那么你可以利用Tor来伪装成别国的网民，就可以绕过视频网站的版权限制。但你只想改IP为何不尝试更加快速的代理呢？
*   为了隐匿自己的公网IP。很多人在互联网上非常“谨慎”，不希望泄露太多信息，那Tor便是不错的选择。
*   为了保护隐私。刚才已经说了Tor的特点，在隐私保护方面，Tor优于其它的“科学上网”工具。  
    但因为某些原因，使用Tor的前提是你最好已经能够打开Google并用它流畅地搜索东西并加载——不流畅也行，但不要太慢。

【但讲真，你上网查个资料打个游戏用得着费这么大劲干什么……也对，至少去年年底电子书爱好者的“快乐老家”Zlibrary被抄了，也就Tor网址算是比较让人放心的地址之一】

【至于你说要用它去干些什么哈人的事，我在此不做评价……就，祝你安好，喝不喝茶我不好说。你要干正常事吧，那被晶哥请喝茶的概率会小很多。】

  
## Tor有哪些缺点

  
有些网站/软件对Tor不友好。这是Tor原理所致，难以从根本上解决：

*   屏蔽了Tor的出口节点。有些网站讨厌“Tor匿名网络”，一旦该网站的服务器判断出——访问者IP是“Tor出口节点”，就不处理来自这个IP的网络协议。
*   GFW屏蔽了Tor的出口节点。方院士设计的GFW的系统设计是“双向过滤”。也就是说，GFW既可以屏蔽“墙内访问墙外”，也可以屏蔽“墙外访问墙内”。这Tor怎可能不是GFW的眼中钉，GFW当然也会把Tor网络中的出口节点列入其“IP黑名单”。但是Tor全球网络的“出口节点”会动态变化，GFW的“IP黑名单”可能会有漏网；更有些国内网站可能“启用了CDN”或“在墙外有镜像服务器”，那么Tor依然可以正常访问这些墙内网站（的镜像或缓存）。
*   Tor出口节点对网站的访问流量过大，被网站动态拉黑。很多大型网站的服务器都有一些“安全防护措施”。比如说，网站服务器会统计每个公网IP的访问量。一旦发现某个公网IP（对网站）的访问量太大，就认定是某种恶意行为。这点不说Tor，你挂个使用者很多的代理节点去访问google，刚进去给你跳出来那个人机验证就是了。
*   以上问题的根本的原因在于——Tor的全球网络虽然有成百上千的节点，但大部分节点都不是“出口节点”。或者说，“出口节点”只占Tor全球网络节点数的一个较小的比例。而Tor的全球用户数是逐年增长，“用户数的增长”明显快于“出口节点数的增长”。“僧多粥少”，几乎每个出口节点都是无数的用户在使用，你自己想想看……

  
## 我应该如何安装Tor

由于Windows系统和MacOS系统的安装方式是“傻瓜式”，在此不多作说明，请自行前往[https://www.torproject.org/download/](https://www.torproject.org/download/ "https://www.torproject.org/download/")下载。_**警告：请瞪大眼睛好好看清这个网址的每个字母和标点符号，别看错了！！！这句话不是多余的！！！**_下不下来就挂个普通的加速器去github找Torproject官方仓库去，而且Gitee、阿里、清华等镜像源好像也有Tor。总之，你是有办法在墙内找到的。[https://github.com/torproject/tor](https://github.com/torproject/tor "https://github.com/torproject/tor")

Linux系统的可玩性很高，其开源和稳定的特性，让其分发版本和用途更广泛。它成也终端，却也败于终端。终端玩得好，以后Linux在你手里便是“神器”一般的存在；玩不好，它的优点真的很难展现出来（而且用Linux打游戏不是明智的选择，至少目前是这样的）。

我想啊，既然你使用Tor是为了安全，总不可能把Tor装在实体机上吧；而且你也不想给自己找麻烦，总会装个带图形界面的Linux系统吧；你希望这个系统的社区比较活跃，大概总会去尝试Debian系的Linux吧（你问我TailsOS，我只能说，现在我还没用过，以后可能会讲解）。所以，关于Linux系统，我默认大家使用的是图形界面Debian系Linux（例如Ubuntu、Kali、DebianOS等）虚拟机。

VMware、virtualbox什么的自己百度去，有破解版的，不需要我说明。Linux虚拟机平台什么的，也自行百度去。

插个嘴：kali官方有预先配置好虚拟机的系统文件。

_CentOS/RHEL/Fedora_
Tor 包是 EPEL 仓库的一部分，如果你安装了 EPEL 仓库，我们可以直接使用 yum 来安装。
```
$ sudo yum install tor
```

如果你的系统没有 EPEL 仓库，请使用下列命令：
```
RHEL/CentOS 7：
$ sudo rpm -Uvh https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-11.noarch.rpm
RHEL/CentOS 6 (64 位)：
$ sudo rpm -Uvh http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
RHEL/CentOS 6 (32 位)：
$ sudo rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
```

Ubuntu
需要添加官方 Tor 仓库。我们需要将仓库信息添加到 /etc/apt/sources.list 中。
```
$ sudo nano /etc/apt/sources.list
```
添加以下信息：
```
Ubuntu 16.04：
deb http://deb.torproject.org/torproject.org xenial main
deb-src http://deb.torproject.org/torproject.org xenial main

Ubuntu 14.04
deb http://deb.torproject.org/torproject.org trusty main
deb-src http://deb.torproject.org/torproject.org trusty main
```

打开终端，配置秘钥：
```
$ gpg -keyserver keys.gnupg.net -recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
$ gpg -export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
```

更新软件源：
```
$ sudo apt-get update
```

安装Tor：
```
$ sudo apt-get install tor deb.torproject.org-keyring
```

当然你也可以选择这样：
```
sudo apt update 
sudo apt install torbrowser-launcher
sudo add-apt-repository ppa:micahflee/ppa
```

如果不想继续使用Tor，卸载命令：
```
sudo apt remove torbrowser-launcher
```

Debian：
```
$ apt install tor
```

Kali：
在终端输入：
```
sudo apt update
sudo apt install -y tor torbrowser-launcher
```
然后以“用户”身份输入：
```
torbrowser-launcher
```
当然你也可以选择去找Tor的图标点击启动。

注：可能是因为我的网络没配置好，又或许是没学会怎么用V2RayA，导致Tor配置不来。Linux上Tor的配置可能真的需要预先配置好梯子。
所以不想折腾的还是去用Win系统去！

## 我应该如何使用Tor

既然你已经解决了安装问题并正常启动，那么下一件事便是去给Tor官方发邮件要网桥。  
你要嫌麻烦或对安全性要求不高可以去这里：[https://t-browser.sourceforge.net/bridges.html](https://t-browser.sourceforge.net/bridges.html "https://t-browser.sourceforge.net/bridges.html")
再不行用Tor内置网桥，就这样。

好了又水一篇~

参考：
https://linux.cn/article-9245-1.html  
https://digitalixy.com/howto/687196.html  
https://www.kali.org/docs/tools/tor/