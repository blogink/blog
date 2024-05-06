/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4cbc5bb731e4a24f5e4a203fe528b2a0"],["/60s/index.html","a1b9a4bcc65e5b3079153635efbc57a2"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","f8f1d9910c35bebb67e510a956a5cdf0"],["/archives/2021/06/index.html","a56c126a75f27a06a4983b54e7024e2a"],["/archives/2021/07/index.html","58fc0341aff82788f69eefc6ef127fe2"],["/archives/2021/11/index.html","d1a8fd1387475b5648a617ef7a3dc614"],["/archives/2021/index.html","ba9a703e4833461a9d37b40d7925201a"],["/archives/2022/04/index.html","53333b0431d7ab21f383dd99e9d59494"],["/archives/2022/07/index.html","81c4e302c79b2b61afa71b316b62098d"],["/archives/2022/09/index.html","f8f92fc1bd0e9a93c38db79b63825479"],["/archives/2022/index.html","0f4b45f34ce2ef5537f0ab67f66943db"],["/archives/2023/04/index.html","62ff22771d7eb635d1fd783f4c038596"],["/archives/2023/07/index.html","64da5e40aa88171304835f4f1e548129"],["/archives/2023/08/index.html","082664985b7bcecc6b6bd9a11942fa49"],["/archives/2023/08/page/2/index.html","dfc21566bd8be0b1ee8934974224ad0a"],["/archives/2023/09/index.html","44377d58a8fddb94c26784917d7da4d0"],["/archives/2023/10/index.html","dbea7c64b819abbe3715afcfc267773f"],["/archives/2023/11/index.html","5993dd20d3fc936a3a4b06ce22a3dabc"],["/archives/2023/12/index.html","683ec892f2cb7b448ae208ea1a6bef62"],["/archives/2023/index.html","201d67fb0f5a15f162477160dab91798"],["/archives/2023/page/2/index.html","a2cc8099fce0c1d73fd1fd2bd2eeaac6"],["/archives/2023/page/3/index.html","47603fec981c4c543e4c2980fb48ddd6"],["/archives/2023/page/4/index.html","088099a58798b440dea77ab851cad8a3"],["/archives/2023/page/5/index.html","5a243b8361b6b8d7c006349666be2fe4"],["/archives/2024/01/index.html","2bb5e87a90b420d29b383c44053f54b9"],["/archives/2024/02/index.html","7db038c0c7088884ff4df77ba709bf08"],["/archives/2024/03/index.html","600f26b54dd945e1bc91e9aaa6a9d744"],["/archives/2024/04/index.html","a77dc9b7eb5c7617da52fb1666e8a955"],["/archives/2024/05/index.html","3fa7935027d6c2a69e306e79ba6df8be"],["/archives/2024/index.html","b449b6484e41f9452f0205042e748a38"],["/archives/2024/page/2/index.html","8a955d8e9d8f5fde9767ceee39181f58"],["/archives/index.html","40b8b2bc16d753bb8f45bb8279d773f0"],["/archives/page/2/index.html","030882ba46416fce1e161ee93f443ba2"],["/archives/page/3/index.html","5c5254da68d8c21baee1e15c0a79c9e5"],["/archives/page/4/index.html","2669bbfcda53b392f40e91b34c2ac84d"],["/archives/page/5/index.html","232ecf100e328b0531c5656a28b48383"],["/archives/page/6/index.html","b5368ecaeb6c3728c62801e274590def"],["/archives/page/7/index.html","a195c7a313ff124265e354bc49c203df"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","82819684517c4ad605b0b2e5da214f18"],["/categories/index.html","0aa3334cf9b53ef946c10e6e8d2a8a55"],["/categories/体验推荐/index.html","848908e58794ec18c2c4a9ab5ae31364"],["/categories/信息技术/index.html","67f323eafbf289cb1f897aad9eaa3a3d"],["/categories/漫谈杂言/index.html","28dcb16ed5bef7dcc8f90f881050952a"],["/categories/经验记录/index.html","7d3176419c4e26cc5b08d358d547df83"],["/categories/经验记录/page/2/index.html","ead3bdeafabff8b02242eddd564cc562"],["/categories/网站公告/index.html","a056992184ea05208672e916c703dac6"],["/categories/转载摘录/index.html","f49560d1bf3edeced2ca742edbdcbd29"],["/categories/闲笔随写/index.html","c62170887e6d834eebc766ec3e6ec4f7"],["/categories/闲笔随写/page/2/index.html","e66c2fcbcdb413212596318c2793e7eb"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","7f232cec165d9c3814cb34ed8ac67335"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","9f25194512ae1c0d4a3c2c7defe58667"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8f93acae841ea7bbbc0fbc04dc8eee47"],["/friends/index.html","94be87c7dbc79c55b7b40946008d14c4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_top_img.jpg","4971351352a0373ca42bd26a1dfdcea0"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.jpg","5bf8bc11d3a8a99cd7c239f79729436d"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","0f0ce833d16b36fd6a0bda7801cee0c1"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","c9b355405b343f3a627c50a74ed5b3fd"],["/img/randimg/10.jpg","418b3885f6739a8250be5a23e6a0178c"],["/img/randimg/11.jpg","9b00c3f1e62346bcd99ddc006523d07d"],["/img/randimg/2.jpg","8062c17e65bc1eee0d8645be856b15bd"],["/img/randimg/3.jpg","d5ff17b71b2db15274b45740a4a5d48b"],["/img/randimg/4.jpg","26178eaac410ab42a71d67c4e1816ff7"],["/img/randimg/5.jpg","5d7d1a8d35688f43565e309567defbe6"],["/img/randimg/6.jpg","37b7df5dc1051ca1de7317aff4ee79d4"],["/img/randimg/7.jpg","e5134df00def508cfa8d6aa1d6e73287"],["/img/randimg/8.jpg","7313c232b47f4595d35810156e3fb851"],["/img/randimg/9.jpg","b787a847e37cd451c83a7373573f760d"],["/index.html","4f089ad96431d2fb7b16980e006a57fb"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","36d170a32df2371e7768ff9cd123419a"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","06d7f32c35b4bded68767f5819c9ebae"],["/page/3/index.html","0908dd3d6ee29a541b410446951a7c59"],["/page/4/index.html","fb67d98b60fd8b23a5ead7b001873b8a"],["/page/5/index.html","5d432f08b7d7e53cbcd4607130058d39"],["/posts/1109049055/index.html","eea4f929e8c210fb5c670a3ad6dab247"],["/posts/117984481/index.html","cac003e479be2bd172944ffb08cdb2da"],["/posts/1191333692/index.html","ff7da3f00216372919ccfb33151bd6cd"],["/posts/1243066710/index.html","d204cff31135090358367f15e4ace170"],["/posts/1325306746/index.html","d6cc24f89b926b3d8b2027e363398db8"],["/posts/1334945293/index.html","4b0719e9fd54b152210609abe7e896d2"],["/posts/1412730729/index.html","d1eae80af093fa832f39ef171000141d"],["/posts/1477501590/index.html","fd07dc485fa3bef70a14d7cdfd117d54"],["/posts/1520098886/index.html","2970dee6ab463f15649d7dd0c1b2127f"],["/posts/1544165171/index.html","e2f70abb5ea6ae4fbff2dcb6b77afba4"],["/posts/1605902499/index.html","2521561fdd3ec03c77f289e95d1a15df"],["/posts/1670947396/index.html","5d0f4f518b3a85e1ba00c2f6def1dceb"],["/posts/1808223324/index.html","0f0753342f8484538c4dae921032182d"],["/posts/1846056213/index.html","02da17d9440f4d7f06a45e10939d17f5"],["/posts/2122152757/index.html","d29d2353e2009bd685e53d194be2d163"],["/posts/2127331844/index.html","16cb08792deef980a664c6e24cf55031"],["/posts/2189229020/index.html","2e83e09b3549288ea9438f2ac294f725"],["/posts/2223589302/index.html","480321de642e91dd27df1b3c7a1318f5"],["/posts/2287214869/index.html","560a3ffb28d853685573cdf4eec05352"],["/posts/2342761908/index.html","8a8fc3a05746dd50e2b30c24196c5352"],["/posts/2450481449/index.html","08c2ac12d184cf7d1c1673508c720785"],["/posts/2728617580/index.html","30c5403db3d08f7f79c35ed612c019d6"],["/posts/2776437882/index.html","6f82921678379ed04c94cb50f5812a42"],["/posts/2833463774/index.html","493aadf1aa0c3c25a7e83f824aab0b8b"],["/posts/2845603730/index.html","d80e54b0187bc46467e89a65c0024ba5"],["/posts/2853259138/index.html","5635e3b632a5718c218070697458b1f3"],["/posts/2933412209/index.html","eb2f2814e26a3e370f34fcbf0ff3c49f"],["/posts/3085606162/index.html","d77f527b7e031f612488901a67f2d729"],["/posts/3088182250/index.html","96377b6ea7bcb45bf621ef09181c0fb1"],["/posts/3185181503/index.html","87a932459206c823b1a72e1600116313"],["/posts/3188599471/index.html","b8157a8fff00452786f9c18f3fa7f68f"],["/posts/3191568766/index.html","8c45993c605fb63d34e44f6ad9f66e34"],["/posts/3287931156/index.html","91e60e51025e374c3961703d454f821c"],["/posts/3294504097/index.html","791be8202db3380d4721c717b14fb107"],["/posts/3303390089/index.html","46b52b92694fc3724e8aa5762ec67571"],["/posts/348141877/index.html","2c3b3d95e334bf0946355a8038e011f8"],["/posts/3554105694/index.html","daf651afe3f79f5da7f9723644426050"],["/posts/3679713651/index.html","14dc53f711990c5ffcd7fe76820abf8f"],["/posts/3695865278/index.html","176488daf7b944e4d4540e60900c2fa3"],["/posts/3730684123/index.html","b4afd21018eb9f6966d2187883164451"],["/posts/3758027416/index.html","2f67d1e71377f6ae51ee2b25f92290f9"],["/posts/3766592313/index.html","3f1eef5b439878702ae4abcd5ea914f5"],["/posts/3786740555/index.html","9fdcb59b73bd5189c689b97af39755c8"],["/posts/3791443755/index.html","289a30a13defe3bfc021f0cfd5deebc4"],["/posts/3902219675/index.html","850f97e4b90368a88a4930b8b11f86d4"],["/posts/3957020503/index.html","6a7a8d280d6b745fa7ccb78c6a23f1b8"],["/posts/3995821213/index.html","c4853360539b66530b8ff3d4260d4b5a"],["/posts/4068197923/index.html","125db8fff9ae15f99b69bd96dd3a5db1"],["/posts/4238296291/index.html","78ff341bc18d6de4d40ef946b9adae23"],["/posts/4249530925/index.html","d1a4d1cfd95c16d238223977bfd85b7b"],["/posts/439348253/index.html","382d51edc3cc38d3b34f7fb5726dcaf3"],["/posts/440783934/index.html","dbd3679f32972aed0a36bfa8f45217c9"],["/posts/583739568/index.html","dbd9bb201c4df06b581ca60a7e23f5b2"],["/posts/712548944/index.html","d7bd4d9f0acd13d4557c77b4ddb496a1"],["/posts/721094206/index.html","4e9d602a4404557d628092e3a7156abe"],["/posts/744863573/index.html","4a8364dc94f78b6b0af84105eaaa5c97"],["/posts/763639381/index.html","f06b74954faf9ff202b402193883a501"],["/posts/814127131/index.html","40155c610af9561d22d2b55fe475756b"],["/posts/863373566/index.html","8f5d76fb22da45389879cc658ba47d4e"],["/posts/876967294/index.html","24e5222d92322bbb98990de5b7e7c55e"],["/posts/88276678/index.html","e80f90e0185fb826a5c220e5c2a8f4fc"],["/posts/912248532/index.html","2271c5ca2e02a6fc09b16672ccc387e2"],["/posts/952207792/index.html","6d76acf7b6464453bf6885f6509fc353"],["/posts/966087953/index.html","64d2b16da76f12b481d839eaba372b24"],["/search.xml","a782ce772216670b4ca76bab58e39331"],["/sitemap.xml","89e52e0b45496554696640e343c77613"],["/sw-register.js","1c49998ba064ad839ea1b545c2083220"],["/tags/AI/index.html","b364601760a3d32d3fd70bb713db908a"],["/tags/Cloudflare/index.html","3520dad5963d5b5540bbe0fee8c3c661"],["/tags/GitHub/index.html","8566d9b24c8099a60d439d19256eb320"],["/tags/Hexo/index.html","dc9a34a2c4e9837dbcb2db443878fbfd"],["/tags/Linux/index.html","74764412063e9f8e68f0b88f8af24489"],["/tags/Sora/index.html","050b6f3b0788aee70bca4b6d5d0b9fe5"],["/tags/Vercel/index.html","d89f3b6822ebfd179424bb11972c9b00"],["/tags/Waline/index.html","5ca418dba310c8931093f5ee3768947e"],["/tags/git/index.html","945347206d9eceb55c7478f6852a9226"],["/tags/index.html","58bf3085033a3c3c8d177a555fbe2f3d"],["/tags/nodejs/index.html","cfc1e4f99ee9ddeeaf1d04eff69b1b83"],["/tags/php/index.html","8b5216f4682490301e3c32c41f658306"],["/tags/vim/index.html","9b895e7fc4870ca964d568d5a7f47209"],["/tags/web/index.html","9c7c5e904e4d639ff5a3149600cc4890"],["/tags/代码/index.html","ae3e42c1d2387e2748ef04e7f0a7920c"],["/tags/前端/index.html","3df4cedf6def8600e33978a8b1495ad3"],["/tags/命令/index.html","1cb8e1a4310ecc51907ef44527dc67d0"],["/tags/域名/index.html","eb140f2620baeb946686021529570ec8"],["/tags/技巧/index.html","1cecbe5d5ba0e5fb70bf74a7284a4de9"],["/tags/折腾/index.html","77cd1950829a10f546cb1bab3b74617d"],["/tags/操作系统/index.html","7ff96139bb87d68073da1a1e327845fe"],["/tags/生活/index.html","f2ba84cd9a53abc5fcbc0306bcfcd3ed"],["/tags/硬件/index.html","6ce029b619177e32e31e0f6b1a6d4c77"],["/tags/程序/index.html","227dcd7a12716eeeecd682c734c685bd"],["/tags/经验记录/index.html","e13d1418c26f452ea6948c22e0a91c9e"],["/tags/网络安全/index.html","083a1caa905c5910a05460f2503bd6c8"],["/tags/评论/index.html","38ef3a45a153e8f107c50a5cfaea94e5"],["/tags/转载/index.html","65866cc8befaac33e9ce4d5a8b5f8af1"],["/tags/转载摘录/index.html","f5a9eb79ffbb08f0aaa8b036629c858b"],["/tags/闲笔随写/index.html","3452b2ca45a41614b73be74576453151"],["/tags/音乐/index.html","810c0bba38626e06ce7f079313e00729"]];
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
