/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","07f7bf226296d0817ba9573f31245952"],["/60s/index.html","fc30e15b8cd7018f4b4b3fe416dd4576"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","528aa4badb810abf7dbb704bb9e8980d"],["/archives/2021/06/index.html","20bd85fe9dd700c89867be0309351393"],["/archives/2021/07/index.html","c071b5cd64f5318b63e5446096055453"],["/archives/2021/11/index.html","7bf5b3faeb357355ccfef35f9bc78470"],["/archives/2021/index.html","17d5330a5ace346a4d96509c1953430e"],["/archives/2022/04/index.html","9fef3a0ae282f78666d6746d5a043b29"],["/archives/2022/07/index.html","d4cd68352e9e6be11dffe931a6b0cef3"],["/archives/2022/09/index.html","524ab467c41c8ae7cb3773d5e22f9605"],["/archives/2022/index.html","1729802dec2437311594bfc204d3eebb"],["/archives/2023/04/index.html","e84b41b60046b6f2a3a15e563113099b"],["/archives/2023/07/index.html","e4f15c9d438925a257e774595630546e"],["/archives/2023/08/index.html","c7a0954120a971244a87448a2e24c7f6"],["/archives/2023/08/page/2/index.html","f70dddb0639b34224088ef90722a3244"],["/archives/2023/09/index.html","cb2f40b47c251d9e499bfecab0a07124"],["/archives/2023/10/index.html","33c8b10cbfa5e1ced2d545935a010d73"],["/archives/2023/11/index.html","6724ae716d489268717627e447eda4a1"],["/archives/2023/12/index.html","cf05ece09171ea388d9614e73c91b4b5"],["/archives/2023/index.html","c9340ec5383db9d1411180a6eae654c0"],["/archives/2023/page/2/index.html","4bad3d097d07b693de56133beac53a67"],["/archives/2023/page/3/index.html","bae1dcb46cf1e920c4a438bb4e28b83c"],["/archives/2023/page/4/index.html","cdd31dd119cf1d78970a1b9f39bc5bd6"],["/archives/2023/page/5/index.html","dd79463f6cce2ea7bcee048eb6d535cb"],["/archives/2024/01/index.html","6f1c557ffd0511b5266fa7d9c6c9dee7"],["/archives/2024/02/index.html","743e47f8f4311a397b28e5091a4a2ae7"],["/archives/2024/03/index.html","7b50e6041da80086605a668a6b3e93df"],["/archives/2024/index.html","fbc848d72a7d81b374bfd909c9463da9"],["/archives/index.html","e7a3cc80e7efb436b3a54b06f03b09a2"],["/archives/page/2/index.html","74f51225461e9483a48ee3623f664b0e"],["/archives/page/3/index.html","4d372d8f4da27fb181d498ec54e795e7"],["/archives/page/4/index.html","9c7f7536682d62a4d0b8c590f358cf77"],["/archives/page/5/index.html","8f087ef12d356b7d8cdf0fbd1848c113"],["/archives/page/6/index.html","c5d2fdd8f645587267c7a648fed379bb"],["/archives/page/7/index.html","df99e8c1072301b76c5cb9162c8fc339"],["/artitalk/index.html","915f72b7282ff13f225eddab78fb37f7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","1bfb48c44baa36ecb3c7ea4f25526004"],["/categories/index.html","102e9736d888744db72d28b1d39bb88b"],["/categories/分享/index.html","429d7ab4e5ba7ca76ba1a054b0c672ba"],["/categories/摘录/index.html","f1648eff25cf0bfa3c9c0e2df3d05f74"],["/categories/整活/index.html","559915e3a0014bf064addeb57c63bd2a"],["/categories/日志/index.html","b6a223d0172cc2c1ccb1ed1ea3700192"],["/categories/杂言/index.html","f91ae3092f7a41e14a6cfb9cef853fb7"],["/categories/科技/index.html","ef5419f6b70d4e4dec0bfb83b837e605"],["/categories/科技/page/2/index.html","0bfafb3f670fd926eb98f96f7e0de396"],["/categories/科技/page/3/index.html","db8a989f53c3c381e48e3890d84c5e5d"],["/categories/随写/index.html","b55a4b73bd2d1a3e1db2a23ac2b23f17"],["/categories/随写/page/2/index.html","a389acaa1dc7350279954c06dc2609b8"],["/css/circlecursor.css","9af06a354f7f4a92346d42722f9a2b01"],["/css/essay.css","7e221a56224b17b183b396d3ed455f53"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b39f84e7a3bd767721ddad3f3a738ce9"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","10da491783bac59883c52e3cfe62eb9f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","37ee2ec30abe775ac68bf587f6767409"],["/friends/index.html","d6b55ed4201cef967cfa9ff83070efd1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","00789d6ebfa4c17a0ddd211d2ba87b26"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","f42e65c48dd7cb0fd17d25cdc79b3654"],["/img/randimg/10.jpg","847fa3b868c48caff222643cccd1c4b2"],["/img/randimg/11.jpg","702424f1a47207fe043fe5b2e71acc3e"],["/img/randimg/2.jpg","50822d1b5e7fb88decca6041ef109e2a"],["/img/randimg/3.jpg","0517f8b99277c53ff82da428c49972de"],["/img/randimg/4.jpg","e2b9c548ae4dd781493578040a1d365e"],["/img/randimg/5.jpg","c2af0961810dd4c179d5d738f337324c"],["/img/randimg/6.jpg","fd74c70e60fdd894b8cb18a58e9f9415"],["/img/randimg/7.jpg","939c59a932cb342203c02537bafc22e0"],["/img/randimg/8.jpg","5baf2ebf42d9be2579f75bc2de72d166"],["/img/randimg/9.jpg","1dc60061280cc48adc29c7f980f694ab"],["/index.html","2447f361ad89fe12a7274eb24c4ae255"],["/js/calendar.js","dc38477daed8242df4651d3e21fc73f4"],["/js/circlecursor.js","bac2a12a03e39ecd9968f95138d1acf9"],["/js/essay.js","3c60be1be50a3adc47e2612533dda9db"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/languages.js","ccc0e045438554a07bdbdc6bba78fa55"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","053b365b4491af0b2388ebb4d6128692"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","e75550f8731f6bc572c4ceddc64ddbe7"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","a40bdac1be8d47060d812863ddc80a11"],["/page/3/index.html","54ac5df586a9580f7a5b3739fdcf0f45"],["/page/4/index.html","c91c9d3ea5bf1a858bacad348762a483"],["/page/5/index.html","aec0b97cbf32d372f1170cf4b28bb000"],["/posts/1109049055/index.html","f276d3fa37be4aa04f119eb3f7a5981c"],["/posts/117984481/index.html","02e39e41e3a72e77e0d545a8fd1fbde8"],["/posts/1191333692/index.html","79342634c187ebd2ecff0899729220d8"],["/posts/1192452099/index.html","e39b144f7cb8a31224e89009518282fe"],["/posts/1243066710/index.html","add6abcb3b5560a9fe9de9c334eaf5bf"],["/posts/1325306746/index.html","06edab35f77088bbe472ae16d2e3aeb7"],["/posts/1334945293/index.html","884bf558075eb49628431cd1579d5d41"],["/posts/1412730729/index.html","e2b2b581019ba989c622d28e97c7a890"],["/posts/1477501590/index.html","8567cd6cf22f83176a64784be0197d09"],["/posts/1520098886/index.html","98990a22e5cfe2ba58143d11c2ff701a"],["/posts/1544165171/index.html","1b5d4b6b895f46b805a393e5639aafba"],["/posts/1605902499/index.html","0f95ce71259aa535e7f2761ff395b381"],["/posts/1670947396/index.html","f99b47654c021f43fba5c74a3588c600"],["/posts/1808223324/index.html","5033510fd3f658872e0f3e06a92efc43"],["/posts/1846056213/index.html","a46390644d62e5df27e0a5a97a57a614"],["/posts/1996852443/index.html","de9e791918d1e1229bc6f2ddc42a4fc4"],["/posts/2122152757/index.html","aa96e5010956bc7f860f46387aa59669"],["/posts/2127331844/index.html","842baee535e4cee121c18501f12379de"],["/posts/2189229020/index.html","7a33716189cfbf5cecba2a9234c74e13"],["/posts/2223589302/index.html","df7797896e03c3175907448009462409"],["/posts/2287214869/index.html","59c4a06af617ab2ca1796bde319f52fe"],["/posts/2342761908/index.html","161f6bc06fca570ca5b75cd87b7e2bdd"],["/posts/2728617580/index.html","c5d7c2d0b497a9ece1625313b27f44eb"],["/posts/2776437882/index.html","ede92da9be14354c0fdc879955ac22ba"],["/posts/2845603730/index.html","26ca42b52fdd760aaa49c907e7868126"],["/posts/2853259138/index.html","f5ef69ddb7275f3aceac8bf93d5dcd92"],["/posts/2933412209/index.html","0c45247de802f89ed35ecbad87255fa1"],["/posts/3085606162/index.html","50b459523cfdd8022a3e145680698ca2"],["/posts/3088182250/index.html","e065a9519c275495b954d8a2c033d2e2"],["/posts/3143449586/index.html","542d0c5aabba92fe339ad616e1298f52"],["/posts/3185181503/index.html","35286643a9ddf492986fc5bc8daf8216"],["/posts/3188599471/index.html","6cc5b7322b9c25d0457000369d4d900a"],["/posts/3191568766/index.html","ab4e0ba425d8ec840fd985200ffb9190"],["/posts/3287931156/index.html","b0a890c0ddf56e2d8bd721e40b4086a1"],["/posts/3294504097/index.html","197e065d674197cfaf11661ec9bf922d"],["/posts/3303390089/index.html","1b60dc33a42e9e0069a46f9ff69ba49b"],["/posts/348141877/index.html","02a0a25a8b19eb3b479c455d9c8ccac1"],["/posts/3554105694/index.html","04e8dd14806ff443091440af6ef7b61e"],["/posts/3679713651/index.html","56b49d6e56d5253a289d83f4069dc44b"],["/posts/3695865278/index.html","2d872b1d400d8745318070e789fece1c"],["/posts/3758027416/index.html","7f98bcbbba519cbe60e08e00519754f0"],["/posts/3786740555/index.html","87386965917e16b85f591e1361dcc8b8"],["/posts/3791443755/index.html","d07643659e8e6541ba813bcbdb318fad"],["/posts/3902219675/index.html","3fa4ab9bd3b17c3e32147911f64b7a92"],["/posts/3957020503/index.html","06fe17b6d70d8c2b88bd88539fa20319"],["/posts/3995821213/index.html","77f3ea18e3025c788d9ee60add372e3c"],["/posts/4068197923/index.html","f86ac6f96a4d954b1185f8a410058302"],["/posts/4238296291/index.html","5210bd34cb90874990737793db30a5b0"],["/posts/4249530925/index.html","3d2fd091673ceac025e99acd7783217b"],["/posts/439348253/index.html","bf6afd6823bbb111f837c60e7a274373"],["/posts/440783934/index.html","f55dd5e6e977bacc5eb34e23f063a8b5"],["/posts/583739568/index.html","f3a1303870b2e2b213bae768349f72c0"],["/posts/712548944/index.html","b509b54d0c8ccde591a787026eed590b"],["/posts/721094206/index.html","36cab58811e37a8f0df0f223b1120713"],["/posts/744863573/index.html","e25810d52cfecc1c8c6ea5906780e1be"],["/posts/763639381/index.html","671cbc27006db65ac517f6dcb9807b8a"],["/posts/814127131/index.html","7106b0b0f5e7fa9bba0ff1d22bbd21f6"],["/posts/863373566/index.html","086663c5e3297b792cabf4804d1ae45d"],["/posts/876967294/index.html","e015adedd8f68368823c669d7df27257"],["/posts/88276678/index.html","68bf09abd577d62d7a220843de4baee4"],["/posts/912248532/index.html","b4e452bf2229aea77adac1585d1100a3"],["/posts/952207792/index.html","012b75b0500991ac25f41b0293bc6992"],["/posts/966087953/index.html","f87c97e1a767dc9d1c84a1bb62a010bc"],["/search.xml","c2cc31abb6d3865aac8607df84d724c3"],["/sitemap.xml","6a8b41db79b8a424ef99cfcba8a75fe8"],["/sw-register.js","18bbebe2b9e6a4339b34cb29fc178aec"],["/tags/AI/index.html","94bb59be60f9b655fdfa8e386b026e49"],["/tags/Cloudflare/index.html","a58848741aed413ed58b9f9c5c52f22f"],["/tags/GitHub/index.html","a8a238d323ca26750b46873c614c0331"],["/tags/Hexo/index.html","35ea18326da61745154b464d74c93d22"],["/tags/Linux/index.html","fde9fc838e088dfc2f46918183473150"],["/tags/Sora/index.html","89bc6de6b922a971e01cf7c1b962c845"],["/tags/Vercel/index.html","a89b1a30944c801abf930e6f79d7e21d"],["/tags/Waline/index.html","b43019574c194ee6cad5c9f93a4711e0"],["/tags/git/index.html","12857a95f454881b30135c95fb445aca"],["/tags/index.html","29435a17dc10a8a64154d61e7d7c53c3"],["/tags/nodejs/index.html","31e486ce8ac6e0128a579e8394c85419"],["/tags/php/index.html","9a454f39e7a5b1281d9de252dd56ea5e"],["/tags/vim/index.html","f876e9e9e668b6ed59a94253a0aad39f"],["/tags/web/index.html","0ac68f227b22df5da48cded4ab4101c5"],["/tags/代码/index.html","9b71a06c677b653df0e4817734695996"],["/tags/前端/index.html","c4c7566d6e8db293511e3099457c921b"],["/tags/命令/index.html","6b75c681fbba121dfb8c38748088626c"],["/tags/域名/index.html","19ec84ea57bd1257a21e83c3c0f88481"],["/tags/技巧/index.html","6812a9ff27523d09112e61fdd61f3e68"],["/tags/折腾/index.html","6f007e4e58fcd6b17191e0badbb41314"],["/tags/摘录/index.html","f0963bbaa6e8617444868c0868b88d59"],["/tags/操作系统/index.html","4f3ecc6da4e87ac04ba7acb078846214"],["/tags/生活/index.html","27a97814a17dfdb9dedfdf389e5b275b"],["/tags/硬件/index.html","3f7750e9b37a4b9e008f4eb1e88511dc"],["/tags/科技/index.html","d43691b4283377941df7e8d866d55249"],["/tags/程序/index.html","028f10338d455eb67a039fea232eeb18"],["/tags/网络安全/index.html","714a3ec813746e7009267e08a15f8479"],["/tags/评论/index.html","2ce207639c3bd496f91c000af7aea442"],["/tags/转载/index.html","0a02257366f42b98d6890c3ce9e11a7d"],["/tags/随写/index.html","d5680df809bc7543be3914e589962d6e"],["/tags/音乐/index.html","bdcca412d5f5e72402cd1575cdfc81c2"]];
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





/* eslint-enable */
