/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d075206c95d8375b39fc7fdbfd1df098"],["/60s/index.html","46925a2db19efe3871d6764d4ea96a17"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","606d0af3d7c344581f5faaa524f6c75a"],["/archives/2021/06/index.html","07581fb7599ae663be276a8ca2c81454"],["/archives/2021/07/index.html","ee7910c3211df1d1a1dcd40f3d922960"],["/archives/2021/11/index.html","5b4654795565c5ae4dc22dab51d55384"],["/archives/2021/index.html","50a15ad78b1a792bdbbbced1a90f1104"],["/archives/2022/04/index.html","45e48c86149e9696b8850823b1b51d06"],["/archives/2022/07/index.html","8f4ace5a8151c1c83df25b1b89ba151d"],["/archives/2022/09/index.html","ebec92249734c1d2bc17cd904eb9eada"],["/archives/2022/index.html","96336494cc6fbadd8b41fdfede1de265"],["/archives/2023/04/index.html","4a3af41cabd2091851aa4b071d33b063"],["/archives/2023/07/index.html","b69a4f1cdbea43d051782ded8e79ca7e"],["/archives/2023/08/index.html","1d05e3249b50587b07817cfde8a4cc4d"],["/archives/2023/08/page/2/index.html","413b66ad7745cfac5ce5ff2613634493"],["/archives/2023/09/index.html","5a79c73a41e4515ef2ba79eb57f1c1b3"],["/archives/2023/10/index.html","259fcf136f21f0f1050a7bdee2ec34a0"],["/archives/2023/11/index.html","058eb24c009424211f1627b149c75be8"],["/archives/2023/12/index.html","8637a12bc3457eec24b5c0b9f18fdd85"],["/archives/2023/index.html","3766559b5f800940de460db235553067"],["/archives/2023/page/2/index.html","e0e5e483123165ae664736c489458779"],["/archives/2023/page/3/index.html","f84b1f6e979d276295281a0e17235e90"],["/archives/2023/page/4/index.html","e4757e22189d76970c6c427e3f1b1ff2"],["/archives/2023/page/5/index.html","3cc323aedf143de36384732faef82bfa"],["/archives/2024/01/index.html","29ce8ef7288c88bad11e1dcf91498cfc"],["/archives/2024/02/index.html","581cf716c8050cee8eb34b34f3720220"],["/archives/2024/03/index.html","f6a916aee4de6493ba9d49d5872d8e5c"],["/archives/2024/04/index.html","62be1f4e471eb4b02727062b5fd3fa85"],["/archives/2024/index.html","6ab47358c8d75cab58a7c4e4bcd2c551"],["/archives/2024/page/2/index.html","7edfa171a2d175221b978738948add15"],["/archives/index.html","c91c3a13ae9db420f40118850463eaa0"],["/archives/page/2/index.html","2debd778af7bd98eca4a64c8a5b987e5"],["/archives/page/3/index.html","f559c8350ef20ab5e3bb44e2ff9c8199"],["/archives/page/4/index.html","157dba9fb1088eeb81570715e1a4e84c"],["/archives/page/5/index.html","7f739e9bbb1a2ca08b9320eff3238698"],["/archives/page/6/index.html","95a0fb3b41f452df7e0d7d92c7c6ad3d"],["/archives/page/7/index.html","1d9437dd6367a61f07b22b0e3e2ee33d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","ecb7b16e6a288c053fdf92c9019ef874"],["/categories/index.html","ddb9160b05ed3ae958f5d745997f4f1d"],["/categories/信息技术/index.html","49dfe4ee9f3f1d2fdf8898eb8fd87203"],["/categories/分享推荐/index.html","eaab35453b310f268a9d5cc6fa06ef44"],["/categories/漫谈杂言/index.html","1c60ccbb260a289b9706edf5eaa31df9"],["/categories/经验记录/index.html","22898a6f80649f9829ba98364cbc5e9d"],["/categories/经验记录/page/2/index.html","bf4fbf227acb5bc3cc9e419ffda26141"],["/categories/网站公告/index.html","9f910bfef9500a3ff0f79eef749e7298"],["/categories/转载摘录/index.html","aaeeb5aaf79a500ee8690e4df3b762d9"],["/categories/闲笔随写/index.html","a54b3697b4afc016191187bb86034e66"],["/categories/闲笔随写/page/2/index.html","df99dd5a39abecfbd9264103c6d9f18d"],["/css/circlecursor.css","9af06a354f7f4a92346d42722f9a2b01"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/liteplayer.css","33b9ec22b27baa2b3f79d32d06bb1a4d"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","7f0cc7630793237ffb92568633239765"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","b029de13f3e8cdaf76592fadec3d8e59"],["/friends/index.html","bd7bf4f04d02ac71a3cc0a9db529951e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/862675.jpg","281c2b6e3a6949920bbec88d572a102b"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.png","cb1a5be4aec21483b66acbb50ae0bb05"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","f42e65c48dd7cb0fd17d25cdc79b3654"],["/img/randimg/10.jpg","847fa3b868c48caff222643cccd1c4b2"],["/img/randimg/11.jpg","702424f1a47207fe043fe5b2e71acc3e"],["/img/randimg/2.jpg","50822d1b5e7fb88decca6041ef109e2a"],["/img/randimg/3.jpg","0517f8b99277c53ff82da428c49972de"],["/img/randimg/4.jpg","e2b9c548ae4dd781493578040a1d365e"],["/img/randimg/5.jpg","c2af0961810dd4c179d5d738f337324c"],["/img/randimg/6.jpg","fd74c70e60fdd894b8cb18a58e9f9415"],["/img/randimg/7.jpg","939c59a932cb342203c02537bafc22e0"],["/img/randimg/8.jpg","5baf2ebf42d9be2579f75bc2de72d166"],["/img/randimg/9.jpg","1dc60061280cc48adc29c7f980f694ab"],["/index.html","14ac5fecffa15fcea0a8eabf8da6d89b"],["/js/circlecursor.js","bac2a12a03e39ecd9968f95138d1acf9"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/liteplayer.js","1a326b10cdc83cb9ffef42077537977d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","cf407160c8ecc3d0fc491f101ed04f34"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","f1be74388aab433c05d794a5d3f6f1dc"],["/page/3/index.html","625b769be767535f66786825fcd0296d"],["/page/4/index.html","25cc8aa6bc1d02c918910f956d53d389"],["/posts/1109049055/index.html","4244f7dc240b0046dbfba4fe7ce08d6f"],["/posts/117984481/index.html","78f96c1d2abb32a55b15b51731604b08"],["/posts/1191333692/index.html","47f856c31def81c31adf9731501d70e0"],["/posts/1243066710/index.html","f826bb5e46ab4d055cef555622d68673"],["/posts/1325306746/index.html","82f890271b1c773e43d78fb1ffe33e3d"],["/posts/1334945293/index.html","91e4979b095cf59ce5409ae43edf6b03"],["/posts/1412730729/index.html","752023ce1492c406de8aa33b7ec064ea"],["/posts/1477501590/index.html","0e33872d28c4f50c78245084582e14ef"],["/posts/1520098886/index.html","bf469dd2d0acde6038422d4c73a4f56f"],["/posts/1544165171/index.html","3bbf03868415eab7a5d4a1e8fa648d97"],["/posts/1605902499/index.html","63c5693c52a4ca7e83aebdb786a630de"],["/posts/1670947396/index.html","71e3b61ff6339d3ba0b2f86e5b0cef77"],["/posts/1808223324/index.html","9c60eb2e8a3d7b2dbcffcbd75d90ce8f"],["/posts/1846056213/index.html","75d6b128c24f0e78badb26d139fe526e"],["/posts/2122152757/index.html","7504c8a7aa8971d2b7a8bfc54a42a82a"],["/posts/2127331844/index.html","f504135fca8ff376819182b9f3dec565"],["/posts/2189229020/index.html","d96f90ba5dbb74701d2a988d4356d44b"],["/posts/2223589302/index.html","9426dc71b691afa219177ba37100e8c3"],["/posts/2287214869/index.html","d528ab84fa0a3825b98bdbaea62cf79b"],["/posts/2342761908/index.html","3b06c022f21aff76530ee4c095715bea"],["/posts/2728617580/index.html","2ed84327c126110bf28c587b02a763cb"],["/posts/2776437882/index.html","ad0972a1a15f6835ba31aca022b0d4c1"],["/posts/2833463774/index.html","84dd521977ad3a399bc9b0abf12acbec"],["/posts/2845603730/index.html","b544d36cbee9de79f03c8275f92c38a1"],["/posts/2853259138/index.html","89b053298bd11b3d1183f21e772e5615"],["/posts/2933412209/index.html","1d645b1620bb1e3268ae59f00e60ccb7"],["/posts/3085606162/index.html","d86bdfbc50f5f743300c82dc8610b33f"],["/posts/3088182250/index.html","18cce661d8b4be0a957fa0146b063cd9"],["/posts/3185181503/index.html","4ab9c1932c37956069f577694e257e78"],["/posts/3188599471/index.html","1d330829961127b3db3b497b019bc7e1"],["/posts/3191568766/index.html","0422b5beeef76515e58f63518aa3f0e6"],["/posts/3287931156/index.html","ebd1f0c02f3b52d5fe4eba23657afcde"],["/posts/3294504097/index.html","16ca49e195dbb930366452011f458914"],["/posts/3303390089/index.html","e10c5d561a5ee06c7a7dfb38faa003e7"],["/posts/348141877/index.html","91a6e3cf1bf7bd39c1c85e978078cd5b"],["/posts/3554105694/index.html","d29c20bcfb703e059a3ca60571cfb3d3"],["/posts/3679713651/index.html","0867ddaac15926872a83f9cfd6646ade"],["/posts/3695865278/index.html","148f4b0d0941dd1b5c9a17b2d485c7d3"],["/posts/3730684123/index.html","b43c975e29f4139ee06fba783fd72e86"],["/posts/3758027416/index.html","b46f943a6c5f276e56a91e3de8d3603a"],["/posts/3766592313/index.html","67bedc5c973484c66501af9ae3d0182c"],["/posts/3786740555/index.html","65666b0d47e8425e67278bfb3ca7e33f"],["/posts/3791443755/index.html","ac6752e70a66d6b0804f514b44f57ffa"],["/posts/3902219675/index.html","95f7030c45cfa8a08536c823a4747de2"],["/posts/3957020503/index.html","a8c50caab5825d7e5ba38494a3689b4c"],["/posts/3995821213/index.html","3621c8ac4c85fd7fe5874c16f7f412d9"],["/posts/4068197923/index.html","1095cf128435150b260aeb3fb5245a0b"],["/posts/4238296291/index.html","4fcf43d25cdd6a64c465ce532aa4a881"],["/posts/4249530925/index.html","2af70449bd74b7d933adeedc3a70951b"],["/posts/439348253/index.html","002ab3092983b132a964de104bc011f0"],["/posts/440783934/index.html","9ad5905565dc9bbcbf92a99c5d416919"],["/posts/583739568/index.html","468feb18627a2ba86e67e4f7aae9da02"],["/posts/712548944/index.html","59b1cbd297ce15d91e5f078304eab60a"],["/posts/721094206/index.html","51a938c6301d39f139ce54c3391df461"],["/posts/744863573/index.html","d6d51d59e9080e924662a50a7ff8abab"],["/posts/763639381/index.html","8e082916aa6317794cbb62e7a7c26b86"],["/posts/814127131/index.html","9bcf89ff2e63ff40e70f1c7b2f24d302"],["/posts/863373566/index.html","5bf606f474b7b3629bc0a9e3811fe297"],["/posts/876967294/index.html","a39168a742080a7773c5117ba601bcfc"],["/posts/88276678/index.html","d9c8b138ca49cb719d6addda9c7c90e1"],["/posts/912248532/index.html","6cbf6fe846d46ce1b26691768286844a"],["/posts/952207792/index.html","af666e8df9b978a9054ebfe809ac33fb"],["/posts/966087953/index.html","38870e0d2f7b25036360b7162a606b32"],["/search.xml","ef0d7680d1ae96d6b47508827497ec1c"],["/sitemap.xml","b1983dfd09a7e9648d62b456f3eeb155"],["/sw-register.js","db8b56557144b2e3b34882130d254629"],["/tags/AI/index.html","fcb8f8e18b21e4201ca288bd51b867a3"],["/tags/Cloudflare/index.html","28aede72885433ce859cf5be9ab51bd6"],["/tags/GitHub/index.html","e182c10610c294101c4b6de5133a0dfb"],["/tags/Hexo/index.html","adc0d81832b151e2247307a1bee0a79d"],["/tags/Linux/index.html","7d22a5a0a57e73554426a34f0b43fdbc"],["/tags/Sora/index.html","ace24d4f33c0908a03159528f19facd1"],["/tags/Vercel/index.html","6a22f62f8a88c0342f748e1898fea596"],["/tags/Waline/index.html","db7a3f6cef3d9b6416dd4e40c0544f66"],["/tags/git/index.html","c30e6023234dcc104a0642268f4c9439"],["/tags/index.html","9f24003ff3ea181cf8f11ae88d966c38"],["/tags/nodejs/index.html","21a664bc16c7a4282d6ecf0bc881a3d2"],["/tags/php/index.html","50f0876652ad27923edb1fe30d6787be"],["/tags/vim/index.html","6da9142864decebbea974bf828763188"],["/tags/web/index.html","b16d3ed9a39446419501cf877b7d1f2b"],["/tags/代码/index.html","b06f831475de801fc9b2edf27f66e786"],["/tags/前端/index.html","6bd8fefa6a3e54211d0e148b34a20acc"],["/tags/命令/index.html","cfffcb77fae73903bf44ebc695ec4168"],["/tags/域名/index.html","28225c30c076b6c9459b6f7ce66fae1f"],["/tags/技巧/index.html","99d48124fd5efe945fafd96b3308ca8c"],["/tags/折腾/index.html","ab3682fe0804b25e28c843fbaa327353"],["/tags/操作系统/index.html","6f31d3621e4627f584abae0480c9103d"],["/tags/生活/index.html","7c8e02d6465b4bae75b7e2f8ffea1bcf"],["/tags/硬件/index.html","70b18f8dcc490881842dbe56d3ee8678"],["/tags/程序/index.html","c7e66e0673ea66c74eb2b76800af8cbb"],["/tags/经验记录/index.html","91b9fe967737da48172ace371038cbf9"],["/tags/网络安全/index.html","b8a30a7a031f7f157a44137702e6cb49"],["/tags/评论/index.html","cb222661c77aa367c80b936e41e35c1a"],["/tags/转载/index.html","bb521c419c8e7c9177cf5007a3bc89ea"],["/tags/转载摘录/index.html","6392e1e890dc28beb94904234f93cb23"],["/tags/闲笔随写/index.html","06c377a3e9654708e017f44f4ba6a558"],["/tags/音乐/index.html","19b6ee7843a73a586d03905451419e66"]];
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
