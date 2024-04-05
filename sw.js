/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c41ca90451c810ad5443ac7f26db3edd"],["/60s/index.html","c1da933d7dd09afca3637a1c0fad99ac"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","619de780563884346c1d67445d678f5f"],["/archives/2021/06/index.html","a837df55b7414f2d7f9d276cf2b5003d"],["/archives/2021/07/index.html","050a2534cfa41d925ba276a38d7e3e0a"],["/archives/2021/11/index.html","a30c081875dbd8634983f2fe694b7f0c"],["/archives/2021/index.html","589b49e216f07c0e3e8221f9dac97b30"],["/archives/2022/04/index.html","59e50c56d5d947088110ca3493a272ff"],["/archives/2022/07/index.html","9fbde82775af3005787bdf363bdd7da8"],["/archives/2022/09/index.html","4548621cd84bc40974506ab3e5052e5d"],["/archives/2022/index.html","151730e5f9c29cedc1ae71bbe1408a6e"],["/archives/2023/04/index.html","603197b6e6f1b9d3bbd595f3f51fa959"],["/archives/2023/07/index.html","f6896c5ee58809280dd5888d00199441"],["/archives/2023/08/index.html","aa06567d76caef3df57692a5e2973641"],["/archives/2023/08/page/2/index.html","315bc8418a915c08ef8bca11605bffb5"],["/archives/2023/09/index.html","ba0dc23c34d3ff5b9809bbc24438ffac"],["/archives/2023/10/index.html","27e44c56c5b3d7a95b6560bb5b85efa0"],["/archives/2023/11/index.html","25c65b3727e62aec322770d164584b29"],["/archives/2023/12/index.html","d9d5f93f69adfeedfc53f25f614b436d"],["/archives/2023/index.html","90686c68fcb31dda84966bee746915bb"],["/archives/2023/page/2/index.html","858dd00dadc4c808e46ec77f9bdd4176"],["/archives/2023/page/3/index.html","334df50cb345ae2174435b16dfc05208"],["/archives/2023/page/4/index.html","1ff8718dac8541be8682e1d7244e69e3"],["/archives/2023/page/5/index.html","23660c97a6252c14190e1899476e302a"],["/archives/2024/01/index.html","faee3d09de511be526eed39c9f4ec063"],["/archives/2024/02/index.html","aaed1dc4e21fe574e7db1c0bf322783a"],["/archives/2024/03/index.html","6c1cc6baef08975beb8b730dd77e5b10"],["/archives/2024/04/index.html","a7eec4afc89a26a1423539f87811cf6c"],["/archives/2024/index.html","c745604377fc0a35acee04c0a9ff2486"],["/archives/2024/page/2/index.html","70da379843545e9d0a228ab63c774d52"],["/archives/index.html","7359c960513a0a7f9845831a41c72bd0"],["/archives/page/2/index.html","ef0c092870f22fc84caa88dc745abe3d"],["/archives/page/3/index.html","8cb673e2a8a64d67098e9ff2d7bc5909"],["/archives/page/4/index.html","a02303c7264c861d73bf9232986f6dad"],["/archives/page/5/index.html","2dd386813ea79dc379895dc40f1d1881"],["/archives/page/6/index.html","56c76c23cbdc95eba4dd73ab22b3cfb7"],["/archives/page/7/index.html","28e26d1e1db69d40f200354f23b84b2e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","544e280e9c12623e03f3bf9689f696c4"],["/categories/index.html","18ee7059a795d9df8a94b94acd73d39b"],["/categories/分享/index.html","b2bba887f8c72781300903d15a2b083e"],["/categories/摘录/index.html","70207f6afd897c9f7d68ac029e11ac92"],["/categories/整活/index.html","afab9b5fc99fe2ce3c45d0f214bfde92"],["/categories/日志/index.html","2a8396563419dadc6192dced0e34e76f"],["/categories/杂言/index.html","42ca619a7774cecb83cb0b92623cf5fd"],["/categories/科技/index.html","17952487aae902b6ee8ff5df67163008"],["/categories/科技/page/2/index.html","463883eec8cf44644ffc4fb181d36446"],["/categories/科技/page/3/index.html","677717958b04c11f8cca5894ab4035b5"],["/categories/随写/index.html","e86ba8818c5b40c2a4ad69042b46e19b"],["/categories/随写/page/2/index.html","251db4df5ef70e2bea59e4c88533b8fb"],["/css/circlecursor.css","9af06a354f7f4a92346d42722f9a2b01"],["/css/essay.css","ea94881a6aa87c837fa80d418d22befd"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b39f84e7a3bd767721ddad3f3a738ce9"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/liteplayer.css","33b9ec22b27baa2b3f79d32d06bb1a4d"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","e972d80346ceb2f2c2426c4dc317fa4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7a3402a90c2cd97db8bc7c7f3c6c79b9"],["/friends/index.html","d64ae70d6d5b6152c5bfb6479465a31c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","00789d6ebfa4c17a0ddd211d2ba87b26"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.png","cb1a5be4aec21483b66acbb50ae0bb05"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","d34e4db5f0b3b36326d54205be502070"],["/img/index_img2.png","6c2095753863dfe52d9e8b106b1db46b"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","f42e65c48dd7cb0fd17d25cdc79b3654"],["/img/randimg/10.jpg","847fa3b868c48caff222643cccd1c4b2"],["/img/randimg/11.jpg","702424f1a47207fe043fe5b2e71acc3e"],["/img/randimg/2.jpg","50822d1b5e7fb88decca6041ef109e2a"],["/img/randimg/3.jpg","0517f8b99277c53ff82da428c49972de"],["/img/randimg/4.jpg","e2b9c548ae4dd781493578040a1d365e"],["/img/randimg/5.jpg","c2af0961810dd4c179d5d738f337324c"],["/img/randimg/6.jpg","fd74c70e60fdd894b8cb18a58e9f9415"],["/img/randimg/7.jpg","939c59a932cb342203c02537bafc22e0"],["/img/randimg/8.jpg","5baf2ebf42d9be2579f75bc2de72d166"],["/img/randimg/9.jpg","1dc60061280cc48adc29c7f980f694ab"],["/index.html","c93cbcd3b91f2bf177a6a3fe9b5f5a3e"],["/js/calendar.js","dc38477daed8242df4651d3e21fc73f4"],["/js/circlecursor.js","bac2a12a03e39ecd9968f95138d1acf9"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/languages.js","ccc0e045438554a07bdbdc6bba78fa55"],["/js/liteplayer.js","1a326b10cdc83cb9ffef42077537977d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","86956aeb60ea05ec304f82e18669c453"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","c2ae72600f9b731c455bcec9fc7ee594"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","c6fccd5e41ecff0d2799e03b787fb9f1"],["/page/3/index.html","03814fbd72b2ffb3df4fb071549b0957"],["/page/4/index.html","5fd26ef8272b9e514f05e338b67e368f"],["/posts/1109049055/index.html","04093a2335086fd161c96fc753ae7397"],["/posts/117984481/index.html","bf5838bd75b06bf90f88f22b42bff843"],["/posts/1191333692/index.html","cec2a5ab2d72f521209f7769680b5f84"],["/posts/1192452099/index.html","2866dde13222113739c59ac8325a1ebb"],["/posts/1243066710/index.html","f8c1c857be30815aa2295057e671eece"],["/posts/1325306746/index.html","fe8d56014a2718ed0e2655b20ab9e472"],["/posts/1334945293/index.html","ac9766af2b42909c54ae286b4dd80344"],["/posts/1412730729/index.html","44f5037cfb23e4f21bc25c2f8003fbb9"],["/posts/1477501590/index.html","427df8ee3f1d21a4e2d1b5e647a76be7"],["/posts/1520098886/index.html","93a056bc69d973d6ea5043cf981ad670"],["/posts/1544165171/index.html","ecd79b3c4aaf91a23f7bb3760e29b8f0"],["/posts/1605902499/index.html","82182d4a401c6cdeec1cd31fb5fdbe55"],["/posts/1670947396/index.html","5417227ae057335e17b528abb4e3f4e7"],["/posts/1808223324/index.html","1fbb37d36f283f8b60172d1fa99f2b97"],["/posts/1846056213/index.html","242a249dcbc5358338e4bf14d9a1bebc"],["/posts/1996852443/index.html","c6a28acaff5747b4537bd4154b98d505"],["/posts/2122152757/index.html","681c501ad29b10e62d5c924d3ebc8b82"],["/posts/2127331844/index.html","d0fb4e7a3ce34dca281c9aa8b655e7a9"],["/posts/2189229020/index.html","15747fb3026f1515c190405e077ec982"],["/posts/2223589302/index.html","71806cd0f0425972414f767e857baab8"],["/posts/2287214869/index.html","ccfbb2be9733ac52b34342e99df6a55e"],["/posts/2342761908/index.html","dca57743578c50c13b065fcb176ff90b"],["/posts/2728617580/index.html","87db0c1e1a9da1c76520618e8bb7ca9a"],["/posts/2776437882/index.html","ece5ba35702f13c2a0baf5ab5babe662"],["/posts/2845603730/index.html","2b9311e2de3503fb141a45c05c5c0548"],["/posts/2853259138/index.html","0d388410578b9aa9a63de5b1cd4bc009"],["/posts/2933412209/index.html","5d6400d50fd948d42cc046f701a71985"],["/posts/3085606162/index.html","8be107f9b3bdf3e964d72ef5f9df1d1f"],["/posts/3088182250/index.html","33861fb2b05473606cc13f9f9c07a906"],["/posts/3143449586/index.html","37ff2917f88ef7fcffc1832c157892b7"],["/posts/3185181503/index.html","ddf92d00f517dbb43e7b649c94b76573"],["/posts/3188599471/index.html","63bf9b31569f2d0f90383d7fe2fb3673"],["/posts/3191568766/index.html","ce5927b575cf1ce7cdcce2190107ce3a"],["/posts/3287931156/index.html","e3917b6155ddbb13a32f8d0b37b8fd73"],["/posts/3294504097/index.html","d65a4e806a3c916e6a32aa70ed7ded25"],["/posts/3303390089/index.html","dd2019ccd80e3581867511b27680a70e"],["/posts/348141877/index.html","77762cf3ce1e8a37fd67b58d985ec1c7"],["/posts/3554105694/index.html","671a87f4f6e520f6bee7d1bfbb4d6dd7"],["/posts/3679713651/index.html","cba24d2b39eeedd3b461bd36df624529"],["/posts/3695865278/index.html","76318ccb9eeca14672fd07e35b1edac9"],["/posts/3730684123/index.html","06b51c3a2b278fbad64f327f9e0d3513"],["/posts/3758027416/index.html","96473062a8a32a114c952c85d0f8b815"],["/posts/3766592313/index.html","ab4d74769d8cb4dc8e2d777059fd9d5b"],["/posts/3786740555/index.html","ccfcc34c6b442d2c08d5bda6293106c3"],["/posts/3791443755/index.html","49c1a84f5748db975b2f80a5e4cea9ff"],["/posts/3902219675/index.html","f38eca11b2f6d0f1828e7c4ed01af67c"],["/posts/3957020503/index.html","caab6e328db8d23502c241e0fe126fb8"],["/posts/3995821213/index.html","48813ac180fcf4b332e5a1ecf60c0765"],["/posts/4068197923/index.html","f46b4942e8141205f1733c837b5e7134"],["/posts/4238296291/index.html","7e63f42e2185f37eec7be8059e800ed7"],["/posts/4249530925/index.html","61ab083a129efe046f99469ff7fcc59b"],["/posts/439348253/index.html","444ff7d25d5828b7ddc2d54f33e9e3e1"],["/posts/440783934/index.html","7daa233e4c9d1001934135d8bea772cf"],["/posts/583739568/index.html","685de32631505aacf31d2c0b60b13395"],["/posts/712548944/index.html","f76682df7200c8baf41249fa59fbd6da"],["/posts/721094206/index.html","a0e881199ce797f817d119c1ef8b8176"],["/posts/744863573/index.html","db62985dc3bbef0aa76c1f60220b3293"],["/posts/763639381/index.html","1fdddb86e8ffc3a7c5123057929f9c40"],["/posts/814127131/index.html","0f1b60f906d451db00382154db0ae04c"],["/posts/863373566/index.html","8fa89d42b6bad78d94dbd9ccb1890738"],["/posts/876967294/index.html","daf8692e44fffea39c1b4e8f9892cbdc"],["/posts/88276678/index.html","c584ed945a83af3c1a8d25a641af10b2"],["/posts/912248532/index.html","fbc683d80f451d098996e8065467f09b"],["/posts/952207792/index.html","645b50cba3a8266b5a8e0827962734f8"],["/posts/966087953/index.html","c3eb2df10b85a59b81cf8781a1ed8d5b"],["/search.xml","c7bf8fd65e59ba99dc20fde90fe46925"],["/sitemap.xml","1e54b21c8e13935302308ee264522aa2"],["/sw-register.js","5a93720edb44971732e4a305bf10bc58"],["/tags/AI/index.html","eaac1f7628ad0041f78f8a6d8d7ddde1"],["/tags/Cloudflare/index.html","58bb877ec32f68e454c7e17fba869ead"],["/tags/GitHub/index.html","684c234b6053b72ed6d7568753f6756f"],["/tags/Hexo/index.html","f2f32a2e66751e49aef47cb0288e71b0"],["/tags/Linux/index.html","e3a91f092cf59a6053534b855670ebb7"],["/tags/Sora/index.html","74a8a17a7e27ee2ada31eb572b5adbd7"],["/tags/Vercel/index.html","e6f305dd8f7c51a8ec057824e6b83246"],["/tags/Waline/index.html","36f840e1a95b95ed7dd395da743eee7c"],["/tags/git/index.html","69a53ae29b56dfc22a68dd8ef9934b29"],["/tags/index.html","0a2dcb7a7ee6ee6045711e24680b3b26"],["/tags/nodejs/index.html","a8472aa8e7733bf0ee5c6a8d9a2ad831"],["/tags/php/index.html","a4d4bcf4e167f8c865fadf981f357079"],["/tags/vim/index.html","73185599a431f338f4919619da6971d9"],["/tags/web/index.html","1bbaf35d3290fe5b1564b5d0ac0cb0a3"],["/tags/代码/index.html","b5647795cf8d77326cd78d21dbb90aa1"],["/tags/前端/index.html","dde27ba4ecb5307e6f51f2669f9efbd8"],["/tags/命令/index.html","0d3b1a3862b7a72119889941a1b5eb09"],["/tags/域名/index.html","f6d7f878b1bacb7659565ddfa3092dcf"],["/tags/技巧/index.html","bbb58c3665eeb6429f0f0629b8c6a608"],["/tags/折腾/index.html","e537f2bc041356b9d054fba2306feb31"],["/tags/摘录/index.html","4c1b40898b8b035046867e1702f637b7"],["/tags/操作系统/index.html","515e690037bd492a724ad2be918c3cd7"],["/tags/生活/index.html","267f45496609bebe0575bb5faff138ff"],["/tags/硬件/index.html","5fc947cba38bc5cfb99c18b2c5b59227"],["/tags/科技/index.html","ed71d9c67826a207310fa324fcd636b4"],["/tags/程序/index.html","126cba13a7693ac461c17085f6ed0e36"],["/tags/网络安全/index.html","ef324f7fb24f851a5b3747eba2ffe0af"],["/tags/评论/index.html","ec6c1127e6a5e0dc4c759a43b6ae290c"],["/tags/转载/index.html","7207929f20da6c4cb111ba8068178281"],["/tags/随写/index.html","2333025fa598d1c832e55a93040acbd5"],["/tags/音乐/index.html","506d35623fdb4a724af90d173b06b291"]];
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
