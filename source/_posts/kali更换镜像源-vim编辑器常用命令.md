abbrlink: 2122152757
title: kali更换镜像源 | vim编辑器常用命令
date: '2023-07-30 12:46:40'
updated: '2023-07-30 12:46:46'
tags:
  - 操作系统
categories:
  - 科技
---
接上回初步配置好kali后，我打算着给它配置中文输入法。但非常不幸的是，kali默认镜像源在国外，咱也不是不知道国内直连国外网站的速度（不清楚的可以尝试在国内不挂加速器去下载github上的东西，概率问题）。更换为国内镜像源速度更快。

进入kali，打开终端，输入以下内容：

> sudo su
> 
> \[输入密码，此时终端不会显示内容，回车\]
> 
> sudo vim /etc/apt/sources.list

此时进入vim模式，可对sources.list进行编辑

按i进入编辑模式，官方源前加“#”，将国内源粘贴至其下方。完成后按下ESC退出编辑，输入“:wq”保存。

更新软件源：

> apt-get update
> 
> apt-get upgrade
> 
> apt-get dist-upgrade
> 
> apt-get clean
> 
> apt-get autoclean

执行多个命令时，

使用&&符号则代表前一个命令执行成功，后一个才执行。 

使用||符号则前一个命令执行失败，后一个才执行。 

使用;符号则无论前一个命令是否成功，后面均会执行。

镜像源：

> #官方源
> 
> deb http://<span></span>http.kali.org/kali kali-rolling main non-free contrib
> 
> deb-src http://<span></span>http.kali.org/kali kali-rolling main non-free contrib
> 
> #中科大
> 
> deb http://<span></span>mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
> 
> deb-src http://<span></span>mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
> 
> #阿里云
> 
> deb http://<span></span>mirrors.aliyun.com/kali kali-rolling main non-free contrib
> 
> deb-src http://<span></span>mirrors.aliyun.com/kali kali-rolling main non-free contrib
> 
> #清华大学
> 
> deb http://<span></span>mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
> 
> deb-src https://<span></span>mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
> 
> #浙大
> 
> deb http://<span></span>mirrors.zju.edu.cn/kali kali-rolling main contrib non-free
> 
> deb-src http://<span></span>mirrors.zju.edu.cn/kali kali-rolling main contrib non-free

vim常用命令：

（本人第一次使用vim编辑器，故记录于此）

> $：到行尾
> 
> %s/#.\*//g ：删除#之后的字符
> 
> %s/$/sth/ ：在行尾追加sth
> 
> %s/^M//g ：替换掉dos换行符，\\^M使用ctrl+v + Enter即可输入
> 
> :g/^\\s$/d\* ：删除空行以及只有空格的行
> 
> ^：到行首第一个字符，如果前面有空格的话
> 
> 0：到行首
> 
> cc：替换整行，即删除游标所在行，并进入插入模式
> 
> ce：使本行文本内容居中
> 
> Ctrl+r：redo，即撤销undo的操作
> 
> cw：替换一个单词，即删除一个单词，并进入插入模式
> 
> d^：删除至行首
> 
> dd：删除一行
> 
> 100dd：删除100行
> 
> df"：删除到出现的第一个双引号
> 
> dw：删除一个单词
> 
> G：快速到文件尾
> 
> 50G：跳转到第 50 行
> 
> gg：快速到文件头
> 
> h：向左
> 
> j：向下
> 
> 20j： 向下移动 20 行
> 
> k：向上
> 
> l：向右
> 
> le：使本行文本内容靠左
> 
> N：查找上一个匹配
> 
> n：查找下一个匹配
> 
> 2n：查找下面第二个匹配
> 
> p：粘贴复制或剪切的内容
> 
> 5p：将复制或剪切的内容粘贴5次
> 
> q!： 不保存，强制退出
> 
> qa!： 有多个文件被打开，同时退出
> 
> R：连续替换，直到按下Esc
> 
> r+<待替换字母>：将游标所在字母替换为指定字母
> 
> ri：使本行文本内容靠右
> 
> U(大写)：撤销当前行的所有修改
> 
> u{n}：撤销一次或n次操作
> 
> wq：保存当前文件并退出
> 
> wqa：保存所有文件并退出
> 
> x：向后剪切一个一个字符，如果是在行尾，则为向前剪切
> 
> 5x：剪切5个
> 
> xp：非行尾交换两个字符，如从bs变成sb
> 
> y$：复制光标到行尾
> 
> y2fA：复制光标到第二个大写A中间的内容
> 
> yfA：复制光标到第一个大写A中间的内容
> 
> yw：复制光标开始的一个单词
> 
> yy：复制一行
> 
> 5yy：向下复制5行