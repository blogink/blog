/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","857dcd6326e272e62847bab23cf9ce94"],["/60s/index.html","255b0456c846736544662c3f17ddf7df"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","13e94a1b25728769697957492826b282"],["/archives/2021/06/index.html","d3b41fd420bc1226ec4bb5ec8d636357"],["/archives/2021/07/index.html","e2e3271004d8bdaf11dc2f0990214f9a"],["/archives/2021/11/index.html","17b8dc89e87bf6f5ee69945b0a06fb92"],["/archives/2021/index.html","bea19d93d638bf6307eb84faa31984d7"],["/archives/2022/04/index.html","70dfe0622c6391b37965a396807ac95a"],["/archives/2022/07/index.html","c8753806160a4ddaae42fcf710ff2ba7"],["/archives/2022/09/index.html","8ed1277372c181c641dc5dbff5c9cd79"],["/archives/2022/index.html","b2bfa9dc38c647357bb0d313f43f9473"],["/archives/2023/04/index.html","c8a7610dec968fb9c73212724e0c979c"],["/archives/2023/07/index.html","c3f619363a76753d503f84281be35239"],["/archives/2023/08/index.html","3d39cae5cd660bffd951c1ebd1bcd811"],["/archives/2023/08/page/2/index.html","9d23114c601dc1aef8aee8485cc0525e"],["/archives/2023/09/index.html","ec9bf6e1db387382d184fb5e9c81dbc6"],["/archives/2023/10/index.html","31aaa86e3264d1d4adaf448cf42864cd"],["/archives/2023/11/index.html","2d28d14a47e49f7ff1108c1687b8f8e4"],["/archives/2023/12/index.html","8e37932b7fb0b7984ecc077887d53943"],["/archives/2023/index.html","762fb1b81fa07189437b5284a454bcc4"],["/archives/2023/page/2/index.html","1edf859efd4751cb6a066ce756080a5e"],["/archives/2023/page/3/index.html","b9fed4f85a87c793c7659ef9450d6e2e"],["/archives/2023/page/4/index.html","4720e3d38d9e6f69246555c07f1236b2"],["/archives/2023/page/5/index.html","fc8ad8cd4d4f1535a0fcc5560408162c"],["/archives/2024/01/index.html","5899a54268be18a8ff11b18b00e9682e"],["/archives/2024/02/index.html","6a9a107394abe7db244132dd264cddce"],["/archives/2024/03/index.html","816e3c58de55e1294a762d364403c5bf"],["/archives/2024/04/index.html","46f98bf2ad5f5858acd8ff2da2033082"],["/archives/2024/05/index.html","3ce5d841961eddcb955ae4885c95871c"],["/archives/2024/index.html","fd99539ebef5466b092a851d5ce69538"],["/archives/2024/page/2/index.html","50b30a64c2744404f244fbfa8b605260"],["/archives/index.html","de576f202b24b1bee097876489f3e980"],["/archives/page/2/index.html","4ae5429f59e929a113b2847a81f90f12"],["/archives/page/3/index.html","d3ae0acf1f997da01e37f2bbf2ab90d2"],["/archives/page/4/index.html","25a8eb8c634683ca7de7f843a8a08138"],["/archives/page/5/index.html","4ad421e2d451ed99d538602fed818248"],["/archives/page/6/index.html","c30b00e776bf38ff04d5902729416cdb"],["/archives/page/7/index.html","2c64a08cf53d1f499ef98d6c6e2bee94"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","82819684517c4ad605b0b2e5da214f18"],["/categories/index.html","d88c6c95939564916ec424855d804afb"],["/categories/体验推荐/index.html","1ef68af7c3b404451935c9b0bec8aa08"],["/categories/信息技术/index.html","4ba771db7029f68c2b83e07d1f0fcf15"],["/categories/漫谈杂言/index.html","721d940680d978a149dbd4b84fb5bf88"],["/categories/经验记录/index.html","ed1c60e677cd504e37713216f82f0847"],["/categories/经验记录/page/2/index.html","cd096d1b02e838227a952b896dfc7a3d"],["/categories/网站公告/index.html","5c3c17c563fb790a602e49917e138408"],["/categories/转载摘录/index.html","27dea5eacb0654b1693c8386ab9322a4"],["/categories/闲笔随写/index.html","25cbc767a50d1e949d97174d29119ede"],["/categories/闲笔随写/page/2/index.html","11aba4cd8a72a0f65258e90cdc33fdc3"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","7f232cec165d9c3814cb34ed8ac67335"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","9f25194512ae1c0d4a3c2c7defe58667"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","42df14ff302cec2b31be8855d2bc28f1"],["/friends/index.html","56b5a454718247234f913abdf4c8b815"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_top_img.jpg","4971351352a0373ca42bd26a1dfdcea0"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.jpg","5bf8bc11d3a8a99cd7c239f79729436d"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","0f0ce833d16b36fd6a0bda7801cee0c1"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","c9b355405b343f3a627c50a74ed5b3fd"],["/img/randimg/10.jpg","418b3885f6739a8250be5a23e6a0178c"],["/img/randimg/11.jpg","9b00c3f1e62346bcd99ddc006523d07d"],["/img/randimg/2.jpg","8062c17e65bc1eee0d8645be856b15bd"],["/img/randimg/3.jpg","d5ff17b71b2db15274b45740a4a5d48b"],["/img/randimg/4.jpg","26178eaac410ab42a71d67c4e1816ff7"],["/img/randimg/5.jpg","5d7d1a8d35688f43565e309567defbe6"],["/img/randimg/6.jpg","37b7df5dc1051ca1de7317aff4ee79d4"],["/img/randimg/7.jpg","e5134df00def508cfa8d6aa1d6e73287"],["/img/randimg/8.jpg","7313c232b47f4595d35810156e3fb851"],["/img/randimg/9.jpg","b787a847e37cd451c83a7373573f760d"],["/index.html","41d686e1da62546473faf5096cb3636a"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","36d170a32df2371e7768ff9cd123419a"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","0fd219e2093446005cecfbbf5ab45db3"],["/page/3/index.html","899f6db8f95e526bec3d2b99580a4d38"],["/page/4/index.html","ffca3facdef3e094b5520a337017e0b4"],["/page/5/index.html","a46a8e7614db21ff15d4b0bdcea59d36"],["/posts/1109049055/index.html","b6323f5825b6b0f2f0b826c12aac64e5"],["/posts/117984481/index.html","93b302630c147d4d3cb76132d72ef77b"],["/posts/1191333692/index.html","666c716012e784ba64870af319157486"],["/posts/1243066710/index.html","323199d9e9c6d9f3d28ef60a8b2da854"],["/posts/1325306746/index.html","0390647bf043946f7dd8c327dd79fd83"],["/posts/1334945293/index.html","1472ab3fa94515808613baf38c89d7e8"],["/posts/1412730729/index.html","0c7e249651ceb00cc5b4384cd2550db5"],["/posts/1477501590/index.html","90b5b97307aeb83ab03f4cb201908092"],["/posts/1520098886/index.html","cfb879a6df0ef09d43aa64942610bb4f"],["/posts/1544165171/index.html","807cc8d79b48ac0803d201135270770d"],["/posts/1605902499/index.html","247a190b94ef00984897c3bbdb29716c"],["/posts/1670947396/index.html","e84c333a5a4a3958cbc9c6b797b6cf56"],["/posts/1808223324/index.html","4ac1e4f8febe11bdfea632a0a261ed34"],["/posts/1846056213/index.html","2d46f2eba33e268219c19728a2d28c6e"],["/posts/2122152757/index.html","da7b82eb90dbe195ed4a288675e7919b"],["/posts/2127331844/index.html","f0a39251d801d6cb5f94d7432df3df8a"],["/posts/2189229020/index.html","301b6d65503fa133717f38943631430a"],["/posts/2223589302/index.html","f1c1276a20adae93ed0875f46a3a403c"],["/posts/2287214869/index.html","7f55b5023e11a9c14666643bf2c7b7e1"],["/posts/2342761908/index.html","a8000f6a34ed7a9c59efa8259d783b16"],["/posts/2450481449/index.html","89e3c8b69c1cc01cbb6cf6870621b60e"],["/posts/2728617580/index.html","a8d4a7e56b34c3da1b6eaeeda85f13ac"],["/posts/2776437882/index.html","0a5047117fdf7980d289e27da1baef90"],["/posts/2833463774/index.html","3c8e5c9bbb8f7e5cf691247774659678"],["/posts/2845603730/index.html","e940447ef7bbc3eca424e9c00b849b86"],["/posts/2853259138/index.html","b4c284152d2ea90632110a212ef6f892"],["/posts/2933412209/index.html","3cf7bfc661c3f6d118b8c2a45a29dbb4"],["/posts/3085606162/index.html","46e43131d74a0895a9ac7ad2fd41fb07"],["/posts/3088182250/index.html","8df77ae986f6e28275c8b08ba698d55b"],["/posts/3185181503/index.html","87d4880816a7c85bec2c916b25fa55ef"],["/posts/3188599471/index.html","c952a999b3fcbb0bfbe89f68f1b90566"],["/posts/3191568766/index.html","a0bbd2a7d3b3dc945e18c6206cf3346d"],["/posts/3287931156/index.html","909354de33dd696a4bbf0fd14b77f028"],["/posts/3294504097/index.html","5d1d3afd4b9155abe7a9aa7e29ebb06b"],["/posts/3303390089/index.html","da5cfc84fce1c384089bb5dc3d5b4ba7"],["/posts/348141877/index.html","065b709096b5c7bfb594c517eacc1e87"],["/posts/3554105694/index.html","60a4572608520f015f537cb4491b7d1b"],["/posts/3679713651/index.html","845cf4b560da36a1c96212c31548b920"],["/posts/3695865278/index.html","6f915bd38237e0835238a36869a14eb7"],["/posts/3730684123/index.html","7b78edc42c6bd0ef2b091ab1be3e24dd"],["/posts/3758027416/index.html","4c0b888771e6fd6b28e2cc545b34ff50"],["/posts/3766592313/index.html","40353f3e7a2b5f50279855083034c31d"],["/posts/3786740555/index.html","460c9d9d7408e5cf93315aeb129a3079"],["/posts/3791443755/index.html","1c60b2d08de33029524664f1fcdbc568"],["/posts/3902219675/index.html","14bc57241476010635476c9449a5643b"],["/posts/3957020503/index.html","e00bd32dc41fce14a86e085b6b676973"],["/posts/3995821213/index.html","1704f1196afff86232a10e51100ac8ca"],["/posts/4068197923/index.html","7023cdc7d5dff6d22a985794d71bd046"],["/posts/4238296291/index.html","d1242e7427231b14a508e31131c750d6"],["/posts/4249530925/index.html","89c89a74a2e5098d8d1f03f77369f363"],["/posts/439348253/index.html","cbf509ef125f9804476e4ca625007ffe"],["/posts/440783934/index.html","e3a9867115e7daa3ec607e3610d6c12b"],["/posts/583739568/index.html","f8be1d51158aee662e0e32efd486a178"],["/posts/712548944/index.html","61411e3302b1873277ea6720a26b68d8"],["/posts/721094206/index.html","cd246d4fe87d081ebe480d1bbf111073"],["/posts/744863573/index.html","ff4d40b2050963883974d69175a5b6c8"],["/posts/763639381/index.html","595adc252a8fce7308890f2f494b07a9"],["/posts/814127131/index.html","16ebb80eb4bae12417ece58e3d8b40c8"],["/posts/863373566/index.html","41501152d46f095dab35315bb00e9fb5"],["/posts/876967294/index.html","0f9cab72978e5c1d9785664fc374dd16"],["/posts/88276678/index.html","2bd71128de28542532f14642d1ab6fba"],["/posts/912248532/index.html","e79eeef0cfa10f7688e2aea1de403273"],["/posts/952207792/index.html","bb466028c5016dba6760d5e32cffbb47"],["/posts/966087953/index.html","5a05d16981bf26e899a5f7a88c3adb07"],["/search.xml","b8cfe762af117f3c8fe39e65308a08f9"],["/sitemap.xml","1570941886b4918158411ef603a841ae"],["/sw-register.js","59915f8df13b6bc6330246f2dd465357"],["/tags/AI/index.html","038fca49ad72de88205a594cfcb8b3f6"],["/tags/Cloudflare/index.html","b73ae3316973e96645817bcd942146af"],["/tags/GitHub/index.html","c3c587c528d5718e8ea73ac901d7b62a"],["/tags/Hexo/index.html","67eee51b5cc44caaf089a88c88dadb0e"],["/tags/Linux/index.html","10a9349b939b0e201b6a71fdb4c7c2e7"],["/tags/Sora/index.html","059515b8a0531e80cf26f7ad22a83b22"],["/tags/Vercel/index.html","621a20253a0d65707c9a641ea6008271"],["/tags/Waline/index.html","74e57efb3096d1b2780f585f940e1288"],["/tags/git/index.html","acca4625fb6a7f39a1ebd12ce4000a52"],["/tags/index.html","b9d485adb424696ef44c6c05a49ccc52"],["/tags/nodejs/index.html","0ac1b0783d521f5d6fd450627c78adb2"],["/tags/php/index.html","e2d7105b26282ca2036033737af5382f"],["/tags/vim/index.html","71a5b4a0f90fcd2d56ecc38bb78d28dd"],["/tags/web/index.html","7e48f25db4ce9e16f5ee8e516c819653"],["/tags/代码/index.html","8174456e93702fb7ea541832a38bd3b6"],["/tags/前端/index.html","d03353ed1992059fc742e15cc30590f0"],["/tags/命令/index.html","1b22454bf5e88de1e4ba890434f37d41"],["/tags/域名/index.html","52c8a1549e5e6434dd3d37237f377801"],["/tags/技巧/index.html","0f9fb77100f483129d5236a02e1e1f2d"],["/tags/折腾/index.html","837593d15dcfb4838d84c644ce5d2c40"],["/tags/操作系统/index.html","cac28b5b80862edee49aa2c3583d4006"],["/tags/生活/index.html","d29547f5e63b1435573ab4713a8c951a"],["/tags/硬件/index.html","c95d0b814132e3bf751a8b9ac807a30c"],["/tags/程序/index.html","913e3d96f87449947156536c008766d6"],["/tags/经验记录/index.html","b7a57f5a43ccf33fab6b5f306e14bffe"],["/tags/网络安全/index.html","b60c1091ab14063400bc0903e87701ea"],["/tags/评论/index.html","d621da3392e271d1c6be6b8e5aea4f7e"],["/tags/转载/index.html","2705d61cd8db3ce83a418e1c51941cc1"],["/tags/转载摘录/index.html","03927a6db2f8c90bfc97f7cd9d71c623"],["/tags/闲笔随写/index.html","1d9ede03ca7746f17dd945668598d7ad"],["/tags/音乐/index.html","740cadb9f215adf959c613036501ec8c"]];
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
