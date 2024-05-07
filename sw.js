/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e7b663fb95b4d1323b6435f48ff6fe3c"],["/60s/index.html","65c219befec059c6c580787363d017d8"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","7311547b356b3affa767687f5e625d91"],["/archives/2021/06/index.html","2c632a7531e654e1bde8066d8e37f2fb"],["/archives/2021/07/index.html","95f8b0096f3adce9dfde096de35c3b45"],["/archives/2021/11/index.html","16ee9f8b0900ad04fac949121ad11998"],["/archives/2021/index.html","5739acdecab14d93dacadf85b7349acc"],["/archives/2022/04/index.html","7d2b16cc5a51ba0cb83b3c3c10f0ba5d"],["/archives/2022/07/index.html","5fbf7131083a2a338869dfa59a900f5f"],["/archives/2022/09/index.html","d12a0dab4bf5eb28bf8cb29aef80a552"],["/archives/2022/index.html","55dee15466eb412f684420203114030e"],["/archives/2023/04/index.html","6817a811dfbd3b69173460d8784a5ce7"],["/archives/2023/07/index.html","8eee08aa0501a2728c99255b6d22e4d8"],["/archives/2023/08/index.html","a5608c177937974e6a2be9fa4dd14a72"],["/archives/2023/08/page/2/index.html","1f08e8b75ea35fbeda22ff4e9019f473"],["/archives/2023/09/index.html","fa02097d217bb87d4bb7d440f5fa9819"],["/archives/2023/10/index.html","89ca4f9df078d64696941cb06afc4439"],["/archives/2023/11/index.html","4af2d58bd65c0bf4ac7f1381d6fd73f4"],["/archives/2023/12/index.html","39789aa7ca1e89e73943d86da7c893ef"],["/archives/2023/index.html","7725d4fcaff3a6b5ca4aa5d143820d73"],["/archives/2023/page/2/index.html","ac7f9f0ff073cc89e02809423fbc1c0f"],["/archives/2023/page/3/index.html","135c58a89f03e2dcaa8eff15c6a0d40b"],["/archives/2023/page/4/index.html","6c67ae58e62b9d374f5cf1de9569c4e6"],["/archives/2023/page/5/index.html","d2d22622c8195e7f4da094515d94384f"],["/archives/2024/01/index.html","80cfd5e8101c381ca7fadd0b1d7f6b40"],["/archives/2024/02/index.html","e742b25f621b4ee573f1af97dcb056e2"],["/archives/2024/03/index.html","8f3956502cc103f2e0be3419c9919e3d"],["/archives/2024/04/index.html","7d527cad734de32a8512856ab43839bc"],["/archives/2024/05/index.html","cd02d8b169ae8a27f14056e3ebd44920"],["/archives/2024/index.html","6e79d09a85e5935ec733cf514d9601d6"],["/archives/2024/page/2/index.html","602d3289dbdb77ae69b62a6d3b789d81"],["/archives/index.html","43776a26b404a55168d2e2d1f58d4dff"],["/archives/page/2/index.html","1acc00fcbd942f603567f6ded298f712"],["/archives/page/3/index.html","de43b1ab25f6cce89a96d4943b88a0b6"],["/archives/page/4/index.html","9d00e8edecb02ee7d303c17d8ec9a220"],["/archives/page/5/index.html","b32eb19fba4d4c6cde66957e27747a70"],["/archives/page/6/index.html","b8ce5f254a94a661e64500e77a6f7c90"],["/archives/page/7/index.html","9b9fc0f39e31fef212b8ccf6f6771347"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","82819684517c4ad605b0b2e5da214f18"],["/categories/index.html","78c91a4b3776b5dc457de15f43d0c896"],["/categories/体验推荐/index.html","f65d20761505e8a16723b38c09c5d02e"],["/categories/信息技术/index.html","57176d85109d239ec73b7dabd92a9d3d"],["/categories/漫谈杂言/index.html","ad0981d17d07da260264767c0c888a84"],["/categories/经验记录/index.html","d43cc4a71bfd4ac0247d204cd748ae56"],["/categories/经验记录/page/2/index.html","0663373127370bce5096ca86379fec4d"],["/categories/网站公告/index.html","e0e87f4ee29c0e3c00fbed3f299cc2ba"],["/categories/转载摘录/index.html","29416c656f7eca413a6f653df89dca98"],["/categories/闲笔随写/index.html","4271c258ddfa9ac70a6cb091cfdbe698"],["/categories/闲笔随写/page/2/index.html","ab8b5631ddf8ed79e5a43d99bcbd8c5d"],["/css/essay.css","ed0a03bf7ce1f825ad4fb473cd5d1b01"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","7f232cec165d9c3814cb34ed8ac67335"],["/css/lanterns.css","2d74385964785fd01e2f1478b26a6d60"],["/css/pace1.css","c2f1f9424b2dec452627427c7f8e84ce"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","d841ec39be085d99a855b7a796e25680"],["/css/sakurink.css","c1ddef8d55c3562422d9a555ec773ea4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","accbe523aa1edad4e35787f469d14865"],["/friends/index.html","1d997d43aac4c060b2d4e828d0ebdd84"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_top_img.jpg","4971351352a0373ca42bd26a1dfdcea0"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.jpg","5bf8bc11d3a8a99cd7c239f79729436d"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","0f0ce833d16b36fd6a0bda7801cee0c1"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","72e46ac0e35c970df9ab4e1827ab1ce8"],["/img/randimg/10.jpg","418b3885f6739a8250be5a23e6a0178c"],["/img/randimg/11.jpg","9b00c3f1e62346bcd99ddc006523d07d"],["/img/randimg/2.jpg","8062c17e65bc1eee0d8645be856b15bd"],["/img/randimg/3.jpg","d5ff17b71b2db15274b45740a4a5d48b"],["/img/randimg/4.jpg","26178eaac410ab42a71d67c4e1816ff7"],["/img/randimg/5.jpg","5d7d1a8d35688f43565e309567defbe6"],["/img/randimg/6.jpg","37b7df5dc1051ca1de7317aff4ee79d4"],["/img/randimg/7.jpg","e5134df00def508cfa8d6aa1d6e73287"],["/img/randimg/8.jpg","7313c232b47f4595d35810156e3fb851"],["/img/randimg/9.jpg","be1831fc47ea7ef0ed695ff4eaf51a8d"],["/index.html","19e1e48acc516df288acd50577198492"],["/js/essay.js","dd09c57643be04aa221744b48516862b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","36d170a32df2371e7768ff9cd123419a"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","9241ac990ea6e8a202eeed3f788d87c3"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","fa91482ad2caa0812f9ab5697eda2a19"],["/page/3/index.html","b33e5f5cf7f8e0257f969a7efe41dfd8"],["/page/4/index.html","637714adc662b4e8ecd1f873047ce378"],["/page/5/index.html","983fcf2eeafe11e60cd0e59a37bdeafc"],["/posts/1109049055/index.html","dea752683d20be9d6247722bbfc9b1ca"],["/posts/117984481/index.html","c965c3e2d523032a887b1ee28f98641b"],["/posts/1191333692/index.html","289e30083261fae9dfc46cca5e4ce87f"],["/posts/1243066710/index.html","b1aa21e6f95033bbb643102789c82724"],["/posts/1325306746/index.html","469ae49f704690aeed73518d178dae6b"],["/posts/1334945293/index.html","6aed0ed523aac012562f8ae44e35c2b6"],["/posts/1412730729/index.html","1a2198440ec0232c364e49466d7ef885"],["/posts/1477501590/index.html","3abe8268ba9efc16aa90bb4822d30903"],["/posts/1520098886/index.html","511fdbba7916342b93a5af0b3c95a217"],["/posts/1544165171/index.html","8d2721d42b4298fbd999430829fc68c0"],["/posts/1605902499/index.html","d20b4a367d73ea47b45c27558de3e731"],["/posts/1670947396/index.html","18185fe2c6c1c25c1d1a730b304f89a0"],["/posts/1808223324/index.html","849d8561f360dbb69af27f8cffa12ea6"],["/posts/1846056213/index.html","0a9a2a9505499429a9fb906bdd69936a"],["/posts/2122152757/index.html","cadce9e898976a5c2c8409cf06d3d919"],["/posts/2127331844/index.html","aa2d3403b54acd502c1024e4766c7630"],["/posts/2189229020/index.html","6c7c8657f9f4f5fe2320934e46582232"],["/posts/2223589302/index.html","ba4a9b7d8913870c0bf4eba83c3c798f"],["/posts/2287214869/index.html","64b02c0193e1c22a4d302171875a5e76"],["/posts/2342761908/index.html","3683eda6e7072f8c20607f382fadaf5d"],["/posts/2450481449/index.html","68a3f7cc0b7f4ec58c238b0faeb8f4d5"],["/posts/2728617580/index.html","988fbaf37c663be4d57eba7c98a0052a"],["/posts/2776437882/index.html","aad92ac65c426ae1f56954c5b82f9223"],["/posts/2833463774/index.html","ff939e5919153aa31228726541d4cec8"],["/posts/2845603730/index.html","0a1590d732a99ab13c903670db60f815"],["/posts/2853259138/index.html","baa142c58d11fbbbd73f908401868eea"],["/posts/2933412209/index.html","a72bb15fc4502f2f57418373914db32a"],["/posts/3085606162/index.html","5c4b2b63a380225c8749b54e6d971ebe"],["/posts/3088182250/index.html","e011fd4db13cd5749acbbae00586cea8"],["/posts/3185181503/index.html","3d4876e4b7dc0aca967470745eef7132"],["/posts/3188599471/index.html","b20569966a8cc4a0e3382d4eadb245b9"],["/posts/3191568766/index.html","7fea8467c2f2ae0e6a4eb3a91136e637"],["/posts/3287931156/index.html","4113984db18b30d13dd8f962ef5a9fe2"],["/posts/3294504097/index.html","fd83af3c3c8c380f1294cc22d314da23"],["/posts/3303390089/index.html","ff17707d2dabfd966d63513bf0f2d342"],["/posts/348141877/index.html","99e3c13f23d29b6064e37b9a33a1c5e2"],["/posts/3554105694/index.html","7745ff0505c696ec3eccd2a1fadc00d5"],["/posts/3679713651/index.html","48fd42e47c6afcc5a12a1008e628346a"],["/posts/3695865278/index.html","4e4501064bb4cf033d0df9e69931669d"],["/posts/3730684123/index.html","fc5f921d90ecbe3e8bcc20f4a0d8d64a"],["/posts/3758027416/index.html","59ca5420dbeec47cbe4b7341af9b49f7"],["/posts/3766592313/index.html","72335619065cafcc905c051cd9570d28"],["/posts/3786740555/index.html","b19e09923ec4900c60ca738b911c9db0"],["/posts/3791443755/index.html","9aa76fb6304435158ba709b2106fee98"],["/posts/3902219675/index.html","d46e9e83dd56eac00c8a3c5f4e6a055a"],["/posts/3957020503/index.html","5f6f1a9db74157adbaa729a2a4d06278"],["/posts/3995821213/index.html","fff11eb80c3f2fc1551ac9f1e1a2c414"],["/posts/4068197923/index.html","30a2df6fb4e89b071d62581eef99e5ff"],["/posts/4238296291/index.html","91b90bf40e82167ac1a4697d90d40cd1"],["/posts/4249530925/index.html","363006137f4b0a6b4dadd4907918ef65"],["/posts/439348253/index.html","389625e9bb14baefcef3596364abc543"],["/posts/440783934/index.html","e9fd0264f92ef5c08361c78940e7b938"],["/posts/583739568/index.html","1de1c74773d7c004c59e047ec40082a7"],["/posts/712548944/index.html","2a9e01d81254b9bf5aac7edffb52148c"],["/posts/721094206/index.html","24c1d6f94309234542ef20100c0fadfa"],["/posts/744863573/index.html","cc227b592961193571f86fd817a25c8f"],["/posts/763639381/index.html","e8004f160bf46bb94850c874f0b63f30"],["/posts/814127131/index.html","82130e4e6bdf33a6cc6e38678fb6634f"],["/posts/863373566/index.html","de37dc68412ec7c833509096c32e364d"],["/posts/876967294/index.html","7ed4957650ad3f18f38924ddd16ee6bd"],["/posts/88276678/index.html","62c448d9dbb88cc94683ce4ac704fd04"],["/posts/912248532/index.html","e75b3f8ea1b28c5ca80524fcb563fb75"],["/posts/952207792/index.html","3ec5f7d3b75653705242271f11fe3fa2"],["/posts/966087953/index.html","397cc44a123871aa79bccc2dc3fed307"],["/search.xml","15ed85dd263fbb920c01e8cb0ab79a90"],["/sitemap.xml","d71825d93e52531d893d3b3675b7e1f9"],["/sw-register.js","fc7cc30c7d801c9b7051d4a24ea9f66b"],["/tags/AI/index.html","0797480e2fd7d031909e5f8c7fb36205"],["/tags/Cloudflare/index.html","c8a27ad6b749014213632a4b7dfcb2e8"],["/tags/GitHub/index.html","d5d7cc0bc80e3afaab898ef0257aec54"],["/tags/Hexo/index.html","18d28a856f24860ec32d55549bd6be96"],["/tags/Linux/index.html","eb45b7b69541b3f1850617cd120dfe4e"],["/tags/Sora/index.html","41a8b432659643312b1d38a6d91ea355"],["/tags/Vercel/index.html","e0a3e208b50b0bb4e608e67bfd07aa6b"],["/tags/Waline/index.html","93deaabb3125ab85581132a603c24f51"],["/tags/git/index.html","b8760f1ed25653e6ea7232a167f5e892"],["/tags/index.html","7a9618c26eaa64ece0ae354634e10657"],["/tags/nodejs/index.html","59df190fef28a1671032e262adc375b4"],["/tags/php/index.html","d9ea93e7b332dcd3e919f871e7ff0604"],["/tags/vim/index.html","651248c5a56df53a33650f24f0787ef8"],["/tags/web/index.html","e9a6136600ebc1fbb5a13596e9bfed3b"],["/tags/代码/index.html","6136e3e64c01102d93188ad178beec9e"],["/tags/前端/index.html","dc1c3dd3257a19cad4cebd10d7a892a5"],["/tags/命令/index.html","60b4b8dd22459636c20861dabfb65d5d"],["/tags/域名/index.html","381963d7e9b1e9178cbe3b53433d538b"],["/tags/技巧/index.html","e457d4d0642542929192dbb60a39c074"],["/tags/折腾/index.html","ee63c2d27e4280213df136222c9b379d"],["/tags/操作系统/index.html","e7de2add5ce0af643baf9db9f74cfa38"],["/tags/生活/index.html","f5e386f78efd82dd8c2085dcb80d1d57"],["/tags/硬件/index.html","c85dfa8b2503261f022d5652d8f3bb67"],["/tags/程序/index.html","4819e3bab72767f1ce4848bb8aeca432"],["/tags/经验记录/index.html","6df22a01429338ecf18154db84ac49bd"],["/tags/网络安全/index.html","f0929d9d66fbd7d309be627cc57a034e"],["/tags/评论/index.html","b3ce729cb681ff9aad0cbe7b19eb4e4d"],["/tags/转载/index.html","4f43fbf9dc6d97bf6fbef06d4593eba6"],["/tags/转载摘录/index.html","c844a20e9de5fa67172ff879f312260d"],["/tags/闲笔随写/index.html","9c0f92e8694c81aef52b0b2f801e9e5e"],["/tags/音乐/index.html","3430103b987e64280e206855a3b693df"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fastly.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.staticfile.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"npm.elemecdn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});





/* eslint-enable */
