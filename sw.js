/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cf0255bfe0f92ae9520178d4fa3e50e7"],["/60s/index.html","bdd0c3eabcfe0c52a3b4fcdc28b327d3"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","b8eff3b8946937e3b8d6141eeb925fb9"],["/archives/2021/06/index.html","025bf4cd27a9816203a1ba97e184c98b"],["/archives/2021/07/index.html","27fc09bec6217d902cfd47d745e54517"],["/archives/2021/11/index.html","55162977a2dceeefc2594e612ef4b6cd"],["/archives/2021/index.html","275dd424bb9e37d0aa7ece42bca9393c"],["/archives/2022/04/index.html","cf6e5b29f38de9169029de78b86ed479"],["/archives/2022/07/index.html","249c261efd0ef3510488ee99630ca411"],["/archives/2022/09/index.html","0bc5a26e20aee8ecd7d8d08589bcf9da"],["/archives/2022/index.html","e10f17032d7b48a8e548cc06dac6cefb"],["/archives/2023/04/index.html","d74b7432bc9123e6dd56aaaa21d08097"],["/archives/2023/07/index.html","9a2002e421f9349897131d507eb00710"],["/archives/2023/08/index.html","0699f38e3ac83a2b2afdb17ebd52c12a"],["/archives/2023/08/page/2/index.html","1ac24819e1f6d9bb32a6bee3ef2446a0"],["/archives/2023/09/index.html","51b68acc8f18ff26a76c3eba452ac0af"],["/archives/2023/10/index.html","2dbb24030b240682697cd761c0a31bde"],["/archives/2023/11/index.html","43b492de698bfdc560f1578fd5c5d5b2"],["/archives/2023/12/index.html","853573b228bfc32197b2824685300ef2"],["/archives/2023/index.html","d4757af12addcbedfd4cf5fae198cecb"],["/archives/2023/page/2/index.html","06760ec5e36d4ec14039f183db5e6834"],["/archives/2023/page/3/index.html","2e30573c3c708d0b1f086fcd885d3ad5"],["/archives/2023/page/4/index.html","86864f3db12d626cb0f55c1c972dd176"],["/archives/2023/page/5/index.html","4492712e866bc6ca1e29b2a66cfb0fc6"],["/archives/2024/01/index.html","82823f837f0bd543e9a64b0792a530cd"],["/archives/2024/02/index.html","1f79053b10b46b08a9da7cb2392e931e"],["/archives/2024/03/index.html","e8ff3c597c3c078f3a5d7b12d0c2ee56"],["/archives/2024/04/index.html","08bd223c6b77fea63a8b4c897a941b47"],["/archives/2024/05/index.html","23d82fd033203da1580b210731dff6ae"],["/archives/2024/index.html","0d9cbf8218bda503be3a75f3e3396fdd"],["/archives/2024/page/2/index.html","384d76ac857a0e9f0bae5cf47fac3a86"],["/archives/index.html","3bc2e8e6202a729d9e3e3e1b2b576003"],["/archives/page/2/index.html","dfe1aa89f446ea7800a5aa4694a8697a"],["/archives/page/3/index.html","30759e748a9d4f5de19e42aae03ff059"],["/archives/page/4/index.html","94c8b254e0ac3986abc2ec18e3672146"],["/archives/page/5/index.html","6f172d69a28a64bd1a85ce68babca3db"],["/archives/page/6/index.html","9c2ab82e1b8f0b9ad3a234b02de67c8f"],["/archives/page/7/index.html","6230db214c71987c6cd2aeb69178d56d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","82819684517c4ad605b0b2e5da214f18"],["/categories/index.html","166ea43c7e2be2535526f4b84ae81ec3"],["/categories/体验推荐/index.html","0b8720918586302dbf0474ac9272d535"],["/categories/信息技术/index.html","20a37d9270989f148cb8e06f1a6f862c"],["/categories/漫谈杂言/index.html","bc61f0b7c063e87baa3dc621c94b705d"],["/categories/经验记录/index.html","6b8afce67f735690003e9c601e487d9f"],["/categories/经验记录/page/2/index.html","abe3c88245694a02ec755b08e5152b13"],["/categories/网站公告/index.html","37dac92a7d522a7267eb5d38dee709f7"],["/categories/转载摘录/index.html","5d8e66ccdf9eef2a7cd708f2f5387568"],["/categories/闲笔随写/index.html","c0f5733338efb38941ce104d1ae2ed3c"],["/categories/闲笔随写/page/2/index.html","68cbb91e08c8c78967f17dc91f1c01fd"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","7f232cec165d9c3814cb34ed8ac67335"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","9f25194512ae1c0d4a3c2c7defe58667"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","3f1b03dd34b2b06a019178989ebc0df0"],["/friends/index.html","aeb6b8c01ad3781f000cf0bbb38190cb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_top_img.jpg","4971351352a0373ca42bd26a1dfdcea0"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.jpg","5bf8bc11d3a8a99cd7c239f79729436d"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","0f0ce833d16b36fd6a0bda7801cee0c1"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","c9b355405b343f3a627c50a74ed5b3fd"],["/img/randimg/10.jpg","418b3885f6739a8250be5a23e6a0178c"],["/img/randimg/11.jpg","9b00c3f1e62346bcd99ddc006523d07d"],["/img/randimg/2.jpg","8062c17e65bc1eee0d8645be856b15bd"],["/img/randimg/3.jpg","d5ff17b71b2db15274b45740a4a5d48b"],["/img/randimg/4.jpg","26178eaac410ab42a71d67c4e1816ff7"],["/img/randimg/5.jpg","5d7d1a8d35688f43565e309567defbe6"],["/img/randimg/6.jpg","37b7df5dc1051ca1de7317aff4ee79d4"],["/img/randimg/7.jpg","e5134df00def508cfa8d6aa1d6e73287"],["/img/randimg/8.jpg","7313c232b47f4595d35810156e3fb851"],["/img/randimg/9.jpg","b787a847e37cd451c83a7373573f760d"],["/index.html","171eb0332ccd91e5e0cf4441ae31471c"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","36d170a32df2371e7768ff9cd123419a"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","b7f36cb79fb819b35be31a06429ab301"],["/page/3/index.html","e57a615ef84fc11bf800f76fb2afbdf5"],["/page/4/index.html","60e60a29b42140b35c16d29b82b82f02"],["/page/5/index.html","4c48d139059ae149ba58bb96cff5a967"],["/posts/1109049055/index.html","4354caf5b23245e275a23d3a70438f64"],["/posts/117984481/index.html","c594c66475e7d939cc9ebaaea3b1f324"],["/posts/1191333692/index.html","52b9053d09ae811ed0a21f18fa2a9d95"],["/posts/1243066710/index.html","826e8b2d83a7b213ba0cc38ddbf957f7"],["/posts/1325306746/index.html","7f5085f1033d468ccda920ab54adfba3"],["/posts/1334945293/index.html","f5822647076175332f54116de3b1538f"],["/posts/1412730729/index.html","d3a2c7889dd622a633867be64e34a6b4"],["/posts/1477501590/index.html","ed95f2176f4e3eb36faa3e96bbba27bf"],["/posts/1520098886/index.html","d57c8850364092ec9500c8e6c9a8c60a"],["/posts/1544165171/index.html","e0da83d618e71649a0f99c5569cf7810"],["/posts/1605902499/index.html","24bdd56e925f242c459c8c614395cb31"],["/posts/1670947396/index.html","924b3ac42ccb9a9b7287308d5eb71a57"],["/posts/1808223324/index.html","8f8dbf333c84571b1fa00c114e7ff05d"],["/posts/1846056213/index.html","57e54884a93734f4adfe542dab15bb61"],["/posts/2122152757/index.html","07b1d0f456d08f66f3ec0b02be8525e8"],["/posts/2127331844/index.html","86173db0b3b51078f5a5cf665001800c"],["/posts/2189229020/index.html","760f468e396c6abf80f77aa601ae3529"],["/posts/2223589302/index.html","4ff00ef3721fcdd75f7788cf65084c94"],["/posts/2287214869/index.html","e4c5a272069cd2c2b31ec78487fa689f"],["/posts/2342761908/index.html","ecbb06e530900466c99262a6c295f493"],["/posts/2450481449/index.html","40956151ffa0016b381b593a4d33c868"],["/posts/2728617580/index.html","38d1375e1a82c2a7e1ed9df37110ccf2"],["/posts/2776437882/index.html","c4830ec225d949a9354899ebe24d09b3"],["/posts/2833463774/index.html","2726166f126158dcb0aa4639f9b070d3"],["/posts/2845603730/index.html","327657a88ddee2e73543d4f965624399"],["/posts/2853259138/index.html","a816f89323510bb728ab9bbd5b939b23"],["/posts/2933412209/index.html","04cef3152b754e345c985628863faeed"],["/posts/3085606162/index.html","2e93666e82ba314496c723eefe28ad0b"],["/posts/3088182250/index.html","a82a29f1331619b46240ca75547617c0"],["/posts/3185181503/index.html","a8118ef2ef292513a572d130776310f3"],["/posts/3188599471/index.html","f607eee8c441238d80ecf4ba925ea7d1"],["/posts/3191568766/index.html","27e1e25d532b36e0201477b64f953004"],["/posts/3287931156/index.html","02da8b0f863cb50731b0c85601d14982"],["/posts/3294504097/index.html","cccc9b3e9dcf9d2505342a23bfb690fd"],["/posts/3303390089/index.html","7a3415b65f6f71ed66a44f709e7ed8ed"],["/posts/348141877/index.html","57dcb696fcc041a45ffbcac28571c1a2"],["/posts/3554105694/index.html","ead9b52f9973fa7fc0256cef746728d8"],["/posts/3679713651/index.html","4a5086326e92d2c6eeb817eeafb4006b"],["/posts/3695865278/index.html","0a01f21382bd86e0f27e38cf44708987"],["/posts/3730684123/index.html","1e29441f4c2dc36507f44391a9f46d49"],["/posts/3758027416/index.html","f131044250da3bacbf66d6b02f9547db"],["/posts/3766592313/index.html","4889e47750c374f6388d3bbbd4b7d207"],["/posts/3786740555/index.html","ef50a13ef502280018b3388987e75151"],["/posts/3791443755/index.html","251519058e37b20fa5eb56d32b201b71"],["/posts/3902219675/index.html","9be763144c63fcc170c16653f8040561"],["/posts/3957020503/index.html","fbc0af27a93eca0dfbc0db2cb3ebc34d"],["/posts/3995821213/index.html","0c8a765b7bcc0c793d1ef177fc51754d"],["/posts/4068197923/index.html","dcdb6b9efa8b592ed3dcd69d879c186e"],["/posts/4238296291/index.html","3e5a70ceae3a93915b6232b04b2bd0b5"],["/posts/4249530925/index.html","3801eeaa25310b6bcf7199f79d3e6d42"],["/posts/439348253/index.html","5d1d0420556f93ccecefc8c7eac5037d"],["/posts/440783934/index.html","51cb444a455f5e9ebc7425cb87e1a448"],["/posts/583739568/index.html","9b7525449dcf4a8382172e8a64e0cdce"],["/posts/712548944/index.html","1bf40a3a3ccd9d2101ef614305a3a9c8"],["/posts/721094206/index.html","2428e4ee456ca6586793fe10359c5baa"],["/posts/744863573/index.html","bb8f22f51acad4c5dd9523449ac12dd2"],["/posts/763639381/index.html","9ae42ed88cbffe3ac5a936679a9adaf8"],["/posts/814127131/index.html","579cb5c1bc7dcdeca8e37571006389f7"],["/posts/863373566/index.html","e868448d8da5d7e581cb1c340c75fe50"],["/posts/876967294/index.html","f5378ae48cf8d5838a6a027b6b718dc2"],["/posts/88276678/index.html","f61aea7e56923080bb17e73b47cda075"],["/posts/912248532/index.html","0ce91daacf2b5a9fe35498b2e8678be9"],["/posts/952207792/index.html","012a02f8141c2af294f98f77c81a505f"],["/posts/966087953/index.html","65b778e8e3761373596d48cd8a4e3cbe"],["/search.xml","f846c1fc5c342f85ee231968d90f0251"],["/sitemap.xml","f9849af766baeb96b17a69df33e30165"],["/sw-register.js","03a0dab80a8eb180d93c9e5f83e86826"],["/tags/AI/index.html","7eecc6a55df27b097bca8ecae289cb6d"],["/tags/Cloudflare/index.html","abbd0b848e03f72a01719615e4b4a067"],["/tags/GitHub/index.html","3e8f0097facb2eed7acfdde9b0b70778"],["/tags/Hexo/index.html","c4fcab734ce9d1c1247b11835ab6b668"],["/tags/Linux/index.html","317e63ee8932acae29c23d2fc7fab097"],["/tags/Sora/index.html","bd1515bbec73c40550a35959c53e0e1b"],["/tags/Vercel/index.html","9d94fca342e7008b440c8e3d430df7fd"],["/tags/Waline/index.html","7d67499e4e7957985012477e94bf66aa"],["/tags/git/index.html","8e5f774d4ab8da044abe03bd7260d915"],["/tags/index.html","e2049f386c6aaf4cab97d72e6192f8a2"],["/tags/nodejs/index.html","5ec367c7d3aec195dba88bb1db910819"],["/tags/php/index.html","ea5bb82055fd25af4098e772db9b0645"],["/tags/vim/index.html","08ebf910a59fa0f54d905b031be17dcb"],["/tags/web/index.html","a137609dd31d54bc9f4a3b507a97f1ca"],["/tags/代码/index.html","e1e81749a240f247de1497ce2ecfe36d"],["/tags/前端/index.html","e4b5551aec245192a4cf7b048b51d2af"],["/tags/命令/index.html","da97c0c2329fcad251b46c506c168d99"],["/tags/域名/index.html","c544699c9ac2158ad372dd78cdef9464"],["/tags/技巧/index.html","3d8bae29c63ef1e87be59c898da6e085"],["/tags/折腾/index.html","3c1c82b25c3875eabf79650900de5070"],["/tags/操作系统/index.html","e04f6616d68d723a4e3a50283b907bda"],["/tags/生活/index.html","0ef3013ae5980ac948a1fb9165253a3d"],["/tags/硬件/index.html","1d10fd0464f7b030c0c9c05124839ab0"],["/tags/程序/index.html","13fa6cf7aaf5b8bf52348d5fedcff410"],["/tags/经验记录/index.html","92f5c133eb4f93340a2eab1ce78f7caa"],["/tags/网络安全/index.html","a58281634ccb811a32d213eaa5cab4a6"],["/tags/评论/index.html","2fb1bd61c146e8913809f70195906a48"],["/tags/转载/index.html","3c392245ed05157fe4b4ca7033e53e1d"],["/tags/转载摘录/index.html","b12e9680d11d85bb5be15df52cb57a30"],["/tags/闲笔随写/index.html","96af90343e1382ecd50f70145f40d791"],["/tags/音乐/index.html","287798df024b63e62418495cdb2bb375"]];
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
