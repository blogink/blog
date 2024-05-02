/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9b963ecbcf243d0b187f89703d11d4b7"],["/60s/index.html","01713a949ff13945a938df5e9ecaaea1"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","b8861ff9798bf59385b5c72d9c471870"],["/archives/2021/06/index.html","b9058380cf3ed89d36337f99d04d665b"],["/archives/2021/07/index.html","b1377c55a0735726607edda9af149919"],["/archives/2021/11/index.html","6be09eed227cb2aacf5c2e50b1cfcdd6"],["/archives/2021/index.html","1a4e513e30467743a968d7e26cf8010c"],["/archives/2022/04/index.html","adcdd98aabe6d0bcc24b351051a656db"],["/archives/2022/07/index.html","91ebdc4fb33e279257a1f5f097d07297"],["/archives/2022/09/index.html","286b17f3e4b2a0aa71dd128bc433c11f"],["/archives/2022/index.html","12d122cee4d1a23f9fd52c132c843af5"],["/archives/2023/04/index.html","bd942a86f02b023f1b9e5576209fa8b4"],["/archives/2023/07/index.html","5e00f5d7a8d8d985640e3e68964f3f74"],["/archives/2023/08/index.html","5bd3d4cd959fa8237dd410dad5704be4"],["/archives/2023/08/page/2/index.html","a9488c64018974f382a824b97555c5cc"],["/archives/2023/09/index.html","fd3e182425e71d5af1a70791d75b4ee6"],["/archives/2023/10/index.html","f77474bee7f65b7dcba24096e6c74a4f"],["/archives/2023/11/index.html","463026ef6877c19b65acc418cc3dccdf"],["/archives/2023/12/index.html","762e905bca8b243e65c134674b1e0fb5"],["/archives/2023/index.html","33b7d0f9b5a2522744bf1f8f91d1d35a"],["/archives/2023/page/2/index.html","975974e9648bbae7cee461f541b6be68"],["/archives/2023/page/3/index.html","5f3064f3d2c5a295f3904ce74368f3da"],["/archives/2023/page/4/index.html","fb4bf4640cf1f6d37ecbee0ab43b62f5"],["/archives/2023/page/5/index.html","9a94b1e7a6e624556ba48a28463c71b1"],["/archives/2024/01/index.html","293c6f572e0a8c6c9bf8ef1113b95a6a"],["/archives/2024/02/index.html","55d525b4f7fe8bf7273b33659bf2b1f0"],["/archives/2024/03/index.html","9c3f931bf451b64f12fd212ed57a6b7e"],["/archives/2024/04/index.html","27fc53b6fb975514605e50b1f0fad056"],["/archives/2024/05/index.html","3349924a8980aae4b8dfca64ba86a044"],["/archives/2024/index.html","c1188a4f9bca672b9374004b72faab60"],["/archives/2024/page/2/index.html","f8bf0fb1fe8033ed09adefc05ff8a2a4"],["/archives/index.html","f6f1b5adc71a0c565cd903508187a942"],["/archives/page/2/index.html","7e542af28f11f492ee8ad4099b150ca3"],["/archives/page/3/index.html","c799ca98b5426b4065a754c24c981e69"],["/archives/page/4/index.html","848ab3b728daa7749cc42a4324391844"],["/archives/page/5/index.html","12a0a5ed7f6e3b5fbc71628412fa6d73"],["/archives/page/6/index.html","bbe2823a4808a542a8be4858d2a9ac25"],["/archives/page/7/index.html","6119605aecaac697beed82831c4e957d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","d122912a5abaee6fa75191b8f830bb40"],["/categories/index.html","fbfa584eca137238b0fc56d0c3835df3"],["/categories/体验推荐/index.html","207234635262da492324e139575f877a"],["/categories/信息技术/index.html","5ed6ea8843a6212419c27f0c05394e5a"],["/categories/漫谈杂言/index.html","7b9c7f8f204d1415a5136b5f15148649"],["/categories/经验记录/index.html","f38e0d06ac1d02d99b7fb362d36dad1b"],["/categories/经验记录/page/2/index.html","2091cc44dddb748f75646a9eb841816c"],["/categories/网站公告/index.html","ef401badc02689804daaeed7c6727f56"],["/categories/转载摘录/index.html","fa452487b86fccf3705c613de8c8a3a3"],["/categories/闲笔随写/index.html","7a0db56fd9786c65368cf6bdd14ede45"],["/categories/闲笔随写/page/2/index.html","9ebdcc8a72c8470c8a82367eb6cd44ef"],["/css/circlecursor.css","9af06a354f7f4a92346d42722f9a2b01"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","9e3520421574d36deb8fb1d3b5ce3133"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/liteplayer.css","33b9ec22b27baa2b3f79d32d06bb1a4d"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","91aa41c54ece0ede745f880018a74ff1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4e12660591aa77af544187e63c119acb"],["/friends/index.html","0605928b0315b959129652f77a4d150a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/862675.jpg","281c2b6e3a6949920bbec88d572a102b"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","53b303740e13c4f320f73dbf4611d890"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.png","cb1a5be4aec21483b66acbb50ae0bb05"],["/img/favicon.png","96975265cf5e5936f85cddcdc8aafc08"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/index_img1.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","f42e65c48dd7cb0fd17d25cdc79b3654"],["/img/randimg/10.jpg","847fa3b868c48caff222643cccd1c4b2"],["/img/randimg/11.jpg","702424f1a47207fe043fe5b2e71acc3e"],["/img/randimg/2.jpg","50822d1b5e7fb88decca6041ef109e2a"],["/img/randimg/3.jpg","0517f8b99277c53ff82da428c49972de"],["/img/randimg/4.jpg","e2b9c548ae4dd781493578040a1d365e"],["/img/randimg/5.jpg","c2af0961810dd4c179d5d738f337324c"],["/img/randimg/6.jpg","fd74c70e60fdd894b8cb18a58e9f9415"],["/img/randimg/7.jpg","939c59a932cb342203c02537bafc22e0"],["/img/randimg/8.jpg","5baf2ebf42d9be2579f75bc2de72d166"],["/img/randimg/9.jpg","1dc60061280cc48adc29c7f980f694ab"],["/index.html","27d92d4ca01fe0df575564db4f114768"],["/js/circlecursor.js","bac2a12a03e39ecd9968f95138d1acf9"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/liteplayer.js","1a326b10cdc83cb9ffef42077537977d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","cf407160c8ecc3d0fc491f101ed04f34"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","fc0c8338937d6106ed68a872c586bf58"],["/page/3/index.html","216de71fa66d3fc613ffa7b5624a9a84"],["/page/4/index.html","46276d626bf3219aa4f9964cad2f01cf"],["/page/5/index.html","a13adf094f48dd35bc08c22cbf6a8361"],["/posts/1109049055/index.html","bc3be75a18fabb60b5aa9b3182085695"],["/posts/117984481/index.html","89f08559e7e9996734c3e7d4aceced3f"],["/posts/1191333692/index.html","ceed7a257eaa195b62459ba558aba0da"],["/posts/1243066710/index.html","cb0640cf23fb3961b4763bab20b2ee41"],["/posts/1325306746/index.html","334b800ab2d1a0e991b224a4eb8d2e62"],["/posts/1334945293/index.html","e7bb9027c9344da536455c8cca879ff1"],["/posts/1412730729/index.html","b983c4f86dae351d595b22dbfe6b6302"],["/posts/1477501590/index.html","2a61768affcefa3e4d6f0e35bd3d5a21"],["/posts/1520098886/index.html","ccb1d63fc192ff27e336a4aec3d32e9d"],["/posts/1544165171/index.html","f6e865c1067affb46c1a7db368848aa0"],["/posts/1605902499/index.html","227804972289c372bd475629a97987e2"],["/posts/1670947396/index.html","487f530ee2ab29e3304d5f70452056c5"],["/posts/1808223324/index.html","a246b8e1c3d0ca7ff296127143e4a1d4"],["/posts/1846056213/index.html","fb4657ef0170400da4aaf9b98abc6c5c"],["/posts/2122152757/index.html","578feb6bf0bb2b0795f1c618bd400dba"],["/posts/2127331844/index.html","b7223a80b4ff11130cc705038620098a"],["/posts/2189229020/index.html","302f0ee2ab24239daa5fb84fdca3156a"],["/posts/2223589302/index.html","d8cf1df4a371991d76d6c961af73ef5c"],["/posts/2287214869/index.html","0f740326b4e71b8659027f3fa9f57a5e"],["/posts/2342761908/index.html","804789c79243a0ff2869161011ade229"],["/posts/2450481449/index.html","13813702ed9d031a69df683a6e1f558a"],["/posts/2728617580/index.html","b5e190f979a38be47c68a9ab50a7070a"],["/posts/2776437882/index.html","dd7bfd1121d20c77aa5a25b010ca5fce"],["/posts/2833463774/index.html","1c0cafadfcdfa52aee896fe3ec6f4587"],["/posts/2845603730/index.html","d8f08751fa1882d08eef869c757ec2fe"],["/posts/2853259138/index.html","b2f4026b26b36a6f45e0557aeba0a426"],["/posts/2933412209/index.html","be6e04d10bb4c065ad9e95f47373cf43"],["/posts/3085606162/index.html","a59c2edc7ec661c742a588341170622f"],["/posts/3088182250/index.html","5745a9301b857e4612c535bd8b099c51"],["/posts/3185181503/index.html","680916bf8071324f4983ef9e1410e5dc"],["/posts/3188599471/index.html","c040126f8ae976aaeb16c10062ddaa9e"],["/posts/3191568766/index.html","579284cf2910d71cd2192a1d32ef8433"],["/posts/3287931156/index.html","ba6bf964efbb6fc84d4142e408864818"],["/posts/3294504097/index.html","df19729d96adfee335859546cd210853"],["/posts/3303390089/index.html","38c2a7eaf0edf5567fe053f1f1788940"],["/posts/348141877/index.html","71b9aa143aaf7ee88909f60bc2ceda31"],["/posts/3554105694/index.html","6fc046d5aceeedbae521ca835f802530"],["/posts/3679713651/index.html","0ec4b8bcd037cb72c68c6412e11d19e9"],["/posts/3695865278/index.html","0e6b2583f4073967b508d9fc3d3762b4"],["/posts/3730684123/index.html","1d695136c710bad0b12a770667542c4c"],["/posts/3758027416/index.html","5b76d0412844581500757c75d0688e3a"],["/posts/3766592313/index.html","f812b397aba9dfcb09c4a8300c99ba7b"],["/posts/3786740555/index.html","0dfc4a7b529bcc1944239998fc694a01"],["/posts/3791443755/index.html","14968ecadebe2d51653bbefdbb141402"],["/posts/3902219675/index.html","acbec4ca895c6a4cb89009bc40d7e5af"],["/posts/3957020503/index.html","b60a07602b4255ea4fadebeceac1f729"],["/posts/3995821213/index.html","099822363509ded02ce2d816783d607c"],["/posts/4068197923/index.html","5dc293878003e64d78c56805313dc66d"],["/posts/4238296291/index.html","5d8867f73690b69a5204f4ca53e733e4"],["/posts/4249530925/index.html","393bb4a5617cd45a48ee8a171d5470da"],["/posts/439348253/index.html","21e38d094a6b347ac7b8507b5a4183d5"],["/posts/440783934/index.html","fd7ecd5b629e7c0481e59d5283e7c357"],["/posts/583739568/index.html","83724bc077b5d4252c7af72d36b44355"],["/posts/712548944/index.html","acad0b37ec9781df9d2337e103bd320b"],["/posts/721094206/index.html","d105bb240fc3c9efefb64ec8dc9a61a3"],["/posts/744863573/index.html","c58fff304c8ebc7d0d1344653dfb341b"],["/posts/763639381/index.html","e5cbd52339c85257b80042ce8283427d"],["/posts/814127131/index.html","d34cb7bc5179819bceeb32c6752aba25"],["/posts/863373566/index.html","b26276e65b2f095c97fa7367c242ced3"],["/posts/876967294/index.html","5ddab8eabf4648578adb61584ace6202"],["/posts/88276678/index.html","edb691d9cac9b89556eba282077596d0"],["/posts/912248532/index.html","d3f652d685ab9b2919461d5bf483118f"],["/posts/952207792/index.html","7e529a3f4d221735582d61607d8d6fc6"],["/posts/966087953/index.html","27ede47b4cbb754041554807c3c5cd7a"],["/search.xml","8be16cbbe423208a3fbecba645cdcdae"],["/sitemap.xml","5c9e22028c124f2728c279841a4b227f"],["/sw-register.js","ef458125102bbf1a09e11644dedf213e"],["/tags/AI/index.html","8129659854c702216c929f81bf31dc4b"],["/tags/Cloudflare/index.html","a93f1700eff45e3e72170f065a984840"],["/tags/GitHub/index.html","a26880ebee2fc536d9914e32d8f53797"],["/tags/Hexo/index.html","78346f74f4e8d2758ecd866f68fa2efa"],["/tags/Linux/index.html","f90f156084cb1671f1b040c7dc226fce"],["/tags/Sora/index.html","957cbc88d92ed6c519c615deef7e8cec"],["/tags/Vercel/index.html","882274e120805dad93dffce8556487f7"],["/tags/Waline/index.html","0b75e5141c4e067eeb0962f57eab1b0b"],["/tags/git/index.html","e0abcd5909297f6d306db982dea60a5f"],["/tags/index.html","5bcd59e43ab58f728b783cd6206ddb52"],["/tags/nodejs/index.html","1aff5368312c93eaf981e9ef9e0998d2"],["/tags/php/index.html","201b96e4f9fdaaef14258db0c3f915eb"],["/tags/vim/index.html","519d6082c2c3444a0150fa69e80fb661"],["/tags/web/index.html","682970e549f7b1db7d000a7eb09f824c"],["/tags/代码/index.html","4856331bbb6701703fbd11645b67f535"],["/tags/前端/index.html","81b05a3612f05aa3f7a68a61629a7fce"],["/tags/命令/index.html","2fbdc63822d7c51ccf35a9fc6edf2f55"],["/tags/域名/index.html","d68172c2f755d88f102b94c276231961"],["/tags/技巧/index.html","f6a9fae58f9d4f43e002309187eb287d"],["/tags/折腾/index.html","d0369ed95a0414a6958bc89b0aa9e031"],["/tags/操作系统/index.html","9813fdc67b836def68ebb58231bafa72"],["/tags/生活/index.html","e64489b248c21c1ea5f79848c4702c26"],["/tags/硬件/index.html","16dd498d13bbaabb2de50df9c3ae599e"],["/tags/程序/index.html","640661209f9223c43c7b7ec1a991f97a"],["/tags/经验记录/index.html","3dcc85284c2c76d3b302f5777c5d0351"],["/tags/网络安全/index.html","fc482b4b4c0b42bb312ef3082ad3b17c"],["/tags/评论/index.html","85a5abfd84ce082206ab98a717898f1a"],["/tags/转载/index.html","b2527c837294a712107792d5058d51be"],["/tags/转载摘录/index.html","cdb224a0910fd97ab4fb4c5f9a47885a"],["/tags/闲笔随写/index.html","c5416b89165b280d504ef04a8579ccb4"],["/tags/音乐/index.html","07681ccac97113bfe6869247891387c7"]];
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





/* eslint-enable */
