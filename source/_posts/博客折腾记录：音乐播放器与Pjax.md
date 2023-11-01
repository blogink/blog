abbrlink: 3957020503
title: 博客折腾记录：音乐播放器与Pjax
date: '2023-07-19 12:42:55'
updated: '2023-07-19 12:43:01'
tags:
  - 代码
categories:
  - 科技
---
博客折腾记录：音乐播放器

**我仅仅只是想加个不间断的音乐播放器，仅此而已！！！**

在逛网上一些个人博客，或是自定义程度较高的博客平台时，常见一播放器于其中。多数位于屏幕左下，小巧美观，功能丰富，吾甚是羡慕，便着手尝试。

APlayer的官方文档还是很详细的，而且引入并不繁琐，只需jsdelivr之类cdn引入一条，之后使用一div及一段js即可。阅读文章时还能听点歌曲，确实是不错。然而……

这播放器好是好，但点击文章时便整个刷新了，包括播放进度什么的。其实这不是播放器的问题，毕竟网页跳转这种，播放器自然跟着刷新。但听得好好的，突然给我断了；而且每点一下，整个页面全部刷新，对于我这种使用免费主机的人来说，实在有点难受（╯‵□′）╯︵┴─┴……

于是乎吾上网搜索，见到不少解决方案，不过大多都提到了“Pjax”这个技术，遂进一步了解：

> AJAX是异步的JavaScript和XML的简称……可以在不刷新整个网页的情况下，对网页的某部分进行更新加载。
> 
> pjax = pushState + ajax。它在对网页部分刷新的前提下，保持了真实的地址、网页标题，浏览器的后退（前进）按钮也可以正常使用……当然，pjax也有不依赖jQuery的版本。

仔细思索，这恰是我想的效果，顺便还能提高下加载速度（你猜这个博客所在虚拟主机有没有付费）。  
  我现在没有时间听什么Pjax不利于SEO，我tm只想要个不间断的音乐播放器！！！

虽然不少大佬的网站已经用上Pjax，但至少目前来看，大多集中于WP、Hexo、Typecho等，还没见到xiuno使用pjax的实例，无论是当做博客还是论坛。无法，只得自行摸索。

官方文档写得比较简单，而且给的是jQuery写法。无jQ版本非常精简，并且写法更方便。按照网上的教材来看，大概也能摸索一些。假设一个网页的结构如下：

```
<!DOCTYPE html>
<html class="...">
<head>
    ...
</head>
<body>
    <header>
        ...
    </header>
    <main>
        ...
    </main>
    <footer>
        ...
    </footer>
    <div class="pjax-container">
        ...
    </div>
</body>
</html>
```

  
对于博客来说，一般情况下，title和meta标签是会变化的，示例中main是网站的主要内容自然要变化，footer一般情况下保持不变。那么在网页末尾处的js可以这样写（已经引入Pjax）：

```
<script type="text/javascript">
    var pjax = new Pjax({
        selectors: [
            "title",
            "meta[name=description]", 
            "main"
            ".pjax-container"
            //按照CSS选择器的写法，将需要变化的标签添加至此处
        ],
    })
</script>
```

  
播放器引入位置不在上文js的selectors中任何标签内即可。非常简单，播放器正常播放，问题解决……

个鬼！这样写将导致大部分js均失效。当前网页的内容已经发生了变化，js绑定的元素已经消失。而pjax只会部分刷新网页，这些js没有变化。也就是说，需要通过“重载”再次加载所需js，方可让这些功能重新出现。

```
<script type="text/javascript">
    function pjax_reload(){
        //需重新加载的js代码
    }
    document.addEventListener('pjax:complete', function (){//当pjax完成时执行
        pjax_reload();//上方的函数
    });
</script>
```

  
（其实将需重载的js包裹在上文示例<div class="pjax-container"></div>中即可，而且貌似无论是否是script标签内直接写的，还是第三方引入的，都能重新加载。由于本人较懒，简单粗暴加了个div用于刷新，细节方面暂未调整，故还有诸多js问题未能解决。这个坑以后慢慢填(๑´ㅂ\`๑)）

```
<style type="text/css">
    /* 此处可自定义loading动画，须与下文js所写相同。此处例为.loading */
</style>
<script type="text/javascript">
    document.addEventListener('pjax:send', function (){
        $(".loading").css("display", "block");
    });

    document.addEventListener('pjax:complete', function (){
        $(".loading").css("display", "none");
    });
</script>
```

  
由于本人的主机速度不佳（免费的），点击到加载之间的时间比较久，而且没有任何提示。上述代码将添加一个加载动画，加载时显示，加载完成后消失，避免让访问者以为点击未生效。

至此，pjax基本配置完毕。更多配置详见github上作者官方文档。  
顺带提一嘴，看了下xiuno的执行流程，个人感觉有点像搭积木，最终呈现出来的才是一个完整的html页面。这也是我最开始懒得细细选择的原因之一。。。

**最后，我真的只是想让音乐播放器在跳转后不间断罢了。。。**