/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","da7f49663f1cf5d9821144a1d8d42593"],["/60s/index.html","05c055f6c3aa4e4d7b313935b406113b"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","a13cbf246e76e477fdf0252384e601a8"],["/archives/2021/06/index.html","76c2e598440c83a0849e2f348fa75012"],["/archives/2021/07/index.html","02197043ec00cde9bd4ade49cf30dee7"],["/archives/2021/11/index.html","416d8ef9feb79ab6bf2fbe3df2536cf2"],["/archives/2021/index.html","b4efaf9b182d61255c1ff812893316f0"],["/archives/2022/04/index.html","973c54a5fc6f817f7a56d6e034c14e7a"],["/archives/2022/07/index.html","189f0c9d0f7d074fe6950bf39e097176"],["/archives/2022/09/index.html","f03d81479e5d39965b40280279606192"],["/archives/2022/index.html","fa11bb986ecf50ca7013d1d565dacd21"],["/archives/2023/04/index.html","97e5a12c8ada8c198edd225b38d92a22"],["/archives/2023/07/index.html","7a378a8e34939b5177684cb948a14193"],["/archives/2023/08/index.html","0ba352323b67f68b66813e768e00afda"],["/archives/2023/08/page/2/index.html","2ae9a059fe4e70520832c1a9b1edd987"],["/archives/2023/09/index.html","d960c995686fd727f19ee88ddebfcccf"],["/archives/2023/10/index.html","f4c1733c6e3bb2cf3f9e40e16b835f2c"],["/archives/2023/11/index.html","4aec04652fef038458efcc836a9e176c"],["/archives/2023/12/index.html","106b05059836471ea21188f7710a2b4c"],["/archives/2023/index.html","a1e8a66f1cc8a7c8b73b2a340f7ef322"],["/archives/2023/page/2/index.html","359b3fb4995d9b8da6230de9083dd30d"],["/archives/2023/page/3/index.html","72e261a88509fba154b0f4f2dd75ddf5"],["/archives/2023/page/4/index.html","10deb639a7927a5ced613f7127e237f4"],["/archives/2023/page/5/index.html","cff1b39f95fa0bbb4154e04488e9b4b0"],["/archives/2024/01/index.html","d8accba34786918f4add12619b020e9e"],["/archives/2024/02/index.html","627938a420bad034df3073a32ea81e31"],["/archives/2024/03/index.html","27343f4379d9b6dac372ba70d70f3f5d"],["/archives/2024/04/index.html","2ae36858230c786945d35f8f0b32803b"],["/archives/2024/05/index.html","285c0d98fa22a03c608c66d4f5297b01"],["/archives/2024/index.html","052369e11a1c059b8cacf904ef4f61fe"],["/archives/2024/page/2/index.html","cb2c78a98a11babde8730d004e486ec1"],["/archives/index.html","526f3d80f73bfdbff1e062c45d2029d2"],["/archives/page/2/index.html","ca0400a10a775a5841a00ea6a5cdc60c"],["/archives/page/3/index.html","748b3706e5882abf3d410267f8e10894"],["/archives/page/4/index.html","0dcf1c55b92d908f9192c8a8e52356a3"],["/archives/page/5/index.html","78be01dce3d410e17ee5d79da1d9fa00"],["/archives/page/6/index.html","021e9778d6eeceb48c868dc836015b2f"],["/archives/page/7/index.html","367952bcc4cb2b77031f07250c6cad5d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","82819684517c4ad605b0b2e5da214f18"],["/categories/index.html","ad5ae65d50a6c9af3b1f2a85adee61cf"],["/categories/体验推荐/index.html","946adbede756328e1b9615b9c69a527f"],["/categories/信息技术/index.html","81f0a9ab42e1d0a5e56d6374fd4fa034"],["/categories/漫谈杂言/index.html","8450a95a147d961886f7c648339b8e19"],["/categories/经验记录/index.html","a9fd9656babeedde88706a5da7331bba"],["/categories/经验记录/page/2/index.html","176ef21b32a4fef931f82b0fa64e0a98"],["/categories/网站公告/index.html","abb94f9033381c862b092c307944e93c"],["/categories/转载摘录/index.html","eb0ca1ee3312414bd97fe6aacc47d60d"],["/categories/闲笔随写/index.html","4964718b5218133229bb5bc90351b90f"],["/categories/闲笔随写/page/2/index.html","ef2d7451d145ec4582e4d780727752ff"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","7f232cec165d9c3814cb34ed8ac67335"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","9f25194512ae1c0d4a3c2c7defe58667"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","affcca739cb708a4ab1ebcb6ba4724a7"],["/friends/index.html","5b4d3ddb476b337e230d131a48b852a0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_top_img.jpg","4971351352a0373ca42bd26a1dfdcea0"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.jpg","5bf8bc11d3a8a99cd7c239f79729436d"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","0f0ce833d16b36fd6a0bda7801cee0c1"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","c9b355405b343f3a627c50a74ed5b3fd"],["/img/randimg/10.jpg","418b3885f6739a8250be5a23e6a0178c"],["/img/randimg/11.jpg","9b00c3f1e62346bcd99ddc006523d07d"],["/img/randimg/2.jpg","8062c17e65bc1eee0d8645be856b15bd"],["/img/randimg/3.jpg","d5ff17b71b2db15274b45740a4a5d48b"],["/img/randimg/4.jpg","26178eaac410ab42a71d67c4e1816ff7"],["/img/randimg/5.jpg","5d7d1a8d35688f43565e309567defbe6"],["/img/randimg/6.jpg","37b7df5dc1051ca1de7317aff4ee79d4"],["/img/randimg/7.jpg","e5134df00def508cfa8d6aa1d6e73287"],["/img/randimg/8.jpg","7313c232b47f4595d35810156e3fb851"],["/img/randimg/9.jpg","b787a847e37cd451c83a7373573f760d"],["/index.html","cca3eab10e9cff82c1490928f9c0ec70"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","36d170a32df2371e7768ff9cd123419a"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","1da494e26aa22f28af67b64b8e9a8d1a"],["/page/3/index.html","11f8cee26e5f3d344b88d56e6a7ac8e4"],["/page/4/index.html","b60d5a05abb37a8cb2f555d41945ab8c"],["/page/5/index.html","c37ac54cbfcfe3be401b51a00c546362"],["/posts/1109049055/index.html","cf0d0d8660c596096b380761ca897c85"],["/posts/117984481/index.html","5fc6c12f48a9563a318f561322c25748"],["/posts/1191333692/index.html","abfac64a74d89c5987dced97b1d8503c"],["/posts/1243066710/index.html","bba26143601396fa91139ca3b70846c3"],["/posts/1325306746/index.html","1fa084b6c05d17d6feed296abbc31158"],["/posts/1334945293/index.html","ec13ed7badf54e7efdc253e29bf5e9bd"],["/posts/1412730729/index.html","894588fa14dd5dc28b97f220fa752f44"],["/posts/1477501590/index.html","da1cc15e26a7d15cd0335e347da049f8"],["/posts/1520098886/index.html","9d5b766b74d25973548f3f1847f2771c"],["/posts/1544165171/index.html","76d7954e698e6afdb7b4be146d1c660c"],["/posts/1605902499/index.html","c481cb429546d27f0fcf26644eec1a04"],["/posts/1670947396/index.html","b25a7284b0d515b7ee26dffe241e55b7"],["/posts/1808223324/index.html","ccb84478932d394aaa32e55418fce4a6"],["/posts/1846056213/index.html","29dc1be067a53f86d6511fb0a2b190ed"],["/posts/2122152757/index.html","b4a265b8c843790965d26e8c4930ca03"],["/posts/2127331844/index.html","c8177c2da35f66da512a3af3935b56c6"],["/posts/2189229020/index.html","834f0db9a5c674e13ddd06a48eda9497"],["/posts/2223589302/index.html","0906558c53d19f38608033d2c396739e"],["/posts/2287214869/index.html","3de58c04c834158aa9e74d7416ef39a0"],["/posts/2342761908/index.html","fe95c521743b60cc1e5211310c9c6b3a"],["/posts/2450481449/index.html","f32ce3fc838a58bbeea51db08580e077"],["/posts/2728617580/index.html","ee7f2f6f23976fd16a1fc8f17190fd1e"],["/posts/2776437882/index.html","44bbd58fbc3982c166e278bd87bded14"],["/posts/2833463774/index.html","4b267de1e2c9f22c5cf3a71ae7c52c61"],["/posts/2845603730/index.html","82f046ac21db63df560ce404dc7ca70a"],["/posts/2853259138/index.html","44d61248e3a76b876fa5e56d24e71466"],["/posts/2933412209/index.html","60cd095668d09da39c5dad30b9b7adef"],["/posts/3085606162/index.html","f24d716426d68f4dd0f17787660b4094"],["/posts/3088182250/index.html","7721ec0e92e2e1666858e948e20eda8b"],["/posts/3185181503/index.html","7637a0ff37f92a81c373b40aa0e1ca49"],["/posts/3188599471/index.html","fbd1d38461bbf983780d66e59897a7a1"],["/posts/3191568766/index.html","5974be220f4b101bd7d2ae43cd406b5a"],["/posts/3287931156/index.html","80cfe809ba66b14a327e718a514f58d9"],["/posts/3294504097/index.html","6fbacf881ad27c3666f2fb86beaffbc1"],["/posts/3303390089/index.html","40e02aa813f421470dc64c77524d65fa"],["/posts/348141877/index.html","03c4bd4a5d84150ff39598e5f7d35830"],["/posts/3554105694/index.html","605261037236a631eb4e71861010af47"],["/posts/3679713651/index.html","1397dd6714d54cf055bcf57db9ff31dc"],["/posts/3695865278/index.html","f6e3a1f3cfa2dc027f3fb52be02e63cc"],["/posts/3730684123/index.html","58b240b1aeb1c8dc136e0a13980247f0"],["/posts/3758027416/index.html","b124f05f570c627bc89826b5c60e3821"],["/posts/3766592313/index.html","3e7d692f2e8365a43a4f1dfb905c2040"],["/posts/3786740555/index.html","4a415ae894944ef04cad85ec91d4d45d"],["/posts/3791443755/index.html","8e6c7776631cd7b8241bc8b9d7dbd6cc"],["/posts/3902219675/index.html","935500001e7a6ac24217c1b4a7e78743"],["/posts/3957020503/index.html","40a9da55a3af58fc91a296ee74773195"],["/posts/3995821213/index.html","92fc5f02c4b345ec935829c88512c4af"],["/posts/4068197923/index.html","6619ea0fc0e42c714bde5594b9e92d39"],["/posts/4238296291/index.html","6f93a30373b3322da996637ad79a75bc"],["/posts/4249530925/index.html","0e63d77bab9d4b78973ea3482ee7c3ed"],["/posts/439348253/index.html","ca3738d99c923565aaa800fe628a95be"],["/posts/440783934/index.html","0fbf0efa41e68a6a681804ee8b17d549"],["/posts/583739568/index.html","ef9bfe21e69f7288efc94635466a4cac"],["/posts/712548944/index.html","a88b5f3d40d893303a9728dcf73d7426"],["/posts/721094206/index.html","edbe9ab866a8172d259828c0c6977b4b"],["/posts/744863573/index.html","d5b1aee81cbe4b6b6d2347adc57d40c9"],["/posts/763639381/index.html","18c4ca15ac592f1ef3d3b6eeb8f85a63"],["/posts/814127131/index.html","69451189cc1d54fcdb508a06b0f16a03"],["/posts/863373566/index.html","0f66e61b80ceb4ca7b1f2a4b678cb783"],["/posts/876967294/index.html","36561e366919a3fc7be9cf80f874219e"],["/posts/88276678/index.html","59e0930af8f82b4f4766963330712ab5"],["/posts/912248532/index.html","ddfcfea35d3cc8942c8e502a163d6e8e"],["/posts/952207792/index.html","9f77e5e6815c0ec3d7d5f9455210cadc"],["/posts/966087953/index.html","58b71de98c29bd5d6f4a1880bf5486af"],["/search.xml","4dc8df48e9d51c550598e3d548238bcc"],["/sitemap.xml","1570941886b4918158411ef603a841ae"],["/sw-register.js","d5cfd011e2b80a80aeca626e952630cd"],["/tags/AI/index.html","3d359d8ff6308e96c795324f4931c037"],["/tags/Cloudflare/index.html","f9772141f9ab164a39cc9e0a57c3a861"],["/tags/GitHub/index.html","50564e8cbf9c968cbe3a0da5f752f8ca"],["/tags/Hexo/index.html","45750b3dfb5a4ea569c99d17ed01bf25"],["/tags/Linux/index.html","e460f00aa6bc5e96f2c67e784488d9c1"],["/tags/Sora/index.html","1ad122af94b56a19aa243f5de8d0fe88"],["/tags/Vercel/index.html","92c6d037a6899a8a1529c2c5a687a6f3"],["/tags/Waline/index.html","43b82e2eda245f4d68688ba5a72230b3"],["/tags/git/index.html","17ba9f89fac32701e7f90cea81dc9b5d"],["/tags/index.html","adeb87daa2ff9b954b6b6d04f8ec6647"],["/tags/nodejs/index.html","bd5eec3ede917931e000dc98d35c1c7d"],["/tags/php/index.html","c2530ab2d6227f0f25b785db6c6db16d"],["/tags/vim/index.html","bd06d48f0cee7f97466c7788c57856be"],["/tags/web/index.html","979d405fdd48c52ee5d78641ceb6284c"],["/tags/代码/index.html","f53874c4d698690221615b3534cdad13"],["/tags/前端/index.html","3dbdc894893b7e1792a18a0630660b06"],["/tags/命令/index.html","f9f57ff131e9e95cc3eec7b1d66bcce6"],["/tags/域名/index.html","a6b4555619569ad1a77a957c6ef60e42"],["/tags/技巧/index.html","1ddf49712cfba60df5181799ff4fa88e"],["/tags/折腾/index.html","e3366100fcf58b23914b74a4e8f79d52"],["/tags/操作系统/index.html","5964cc25bce52a993b0769aa249eea5b"],["/tags/生活/index.html","995b706da8a5ef9fca822e4bc0f3f0bc"],["/tags/硬件/index.html","9db4001a2d7cce94d15e853d50a2c310"],["/tags/程序/index.html","eae3a72799652ce46386a1fa983ca3a5"],["/tags/经验记录/index.html","a4eab575629e7495792fc8b32ff02c19"],["/tags/网络安全/index.html","21a6a1d68ab954777ebe910de74109ab"],["/tags/评论/index.html","c29ead1c1e1c96d81b3df25f4989d970"],["/tags/转载/index.html","197cde7ab17067328650a893a8f0f60a"],["/tags/转载摘录/index.html","c1bbeb86de8aac324ec49d3e986044c1"],["/tags/闲笔随写/index.html","4cceca319883828f079bc3e900129424"],["/tags/音乐/index.html","c1884e171266ad96382c022c6cd0911e"]];
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
