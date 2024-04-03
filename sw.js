/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9170ff0d1d9b8546c22a58e33829e0ff"],["/60s/index.html","a32e113e4af695ae825b27d4386d6bf1"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","5216ddaa1eae1cdc4685a23e03cd71da"],["/archives/2021/06/index.html","0bc19c4570424a1b2ae7495fdc85d432"],["/archives/2021/07/index.html","01581570e0775b1c45d223b26eebfe6a"],["/archives/2021/11/index.html","9a27806efa1c146fc02a774cc1d2adf5"],["/archives/2021/index.html","3d20d3169b0a1f8fbc6ed3f63cf70cba"],["/archives/2022/04/index.html","2014f67eab789c23bfb9d8afe16ab35e"],["/archives/2022/07/index.html","48dbd7ef36e6bd9d71f5b3de2cd1572d"],["/archives/2022/09/index.html","e7100d27bad31262492afc420c4aa0c5"],["/archives/2022/index.html","4c313621de3533ad50ba765e5429e0d8"],["/archives/2023/04/index.html","a8a049a8ec3f47d8ed429ef166a7b770"],["/archives/2023/07/index.html","c08ce6d78a3d6d01edf8b333cfa1f9c5"],["/archives/2023/08/index.html","3a75785a0e7f9fff043f1de17b112a0b"],["/archives/2023/08/page/2/index.html","7c3ee70bee8c4f11b35466d9bd84e78f"],["/archives/2023/09/index.html","3060a042ccd0d97152551176cadc2054"],["/archives/2023/10/index.html","9aae04ea875fb09771f267b307d1b760"],["/archives/2023/11/index.html","ea041a877ffa2dff843d1c10d8b41cef"],["/archives/2023/12/index.html","3dd722735c828099d7c2d16feba2a722"],["/archives/2023/index.html","e50cb316255464a1cf267e563b0f19b6"],["/archives/2023/page/2/index.html","cb21d913080c9994cb1deb835413f9af"],["/archives/2023/page/3/index.html","68d8e0fd63bde3f085e7de91e735c172"],["/archives/2023/page/4/index.html","1312d01bcb319fcd595e089ef3d26d14"],["/archives/2023/page/5/index.html","94c9148f1e0b37133e0c3722470074b7"],["/archives/2024/01/index.html","2901e8d6eeef86f6c845c0b45f552513"],["/archives/2024/02/index.html","54366775bff16911b150f67b868efe0f"],["/archives/2024/03/index.html","c0c6c02e09b9db709668377d5f018333"],["/archives/2024/04/index.html","817b2de99c6d44367e44b381ca5e19ea"],["/archives/2024/index.html","54644628a0f53b21b078767ffe43e808"],["/archives/2024/page/2/index.html","35aa08fcfe833f7c4a8a3dea7feaaef9"],["/archives/index.html","6711707fec7213b30d25266c1102ba90"],["/archives/page/2/index.html","eebb6d77e7c0447378fb332ac7ac57df"],["/archives/page/3/index.html","5d3890d568a25e13c510540805c66460"],["/archives/page/4/index.html","949a90d74142e6f6c9a663aa1deb830f"],["/archives/page/5/index.html","240f29ef93c1c8d9adac69b5d6c7672b"],["/archives/page/6/index.html","323cb504281b40867c41c04661d16751"],["/archives/page/7/index.html","6bd6190ca92f4ddd7e62073ed864004d"],["/artitalk/index.html","4b784262f456a99e00f9d5d47a7f9231"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","9a806419881d9d4eb24ecf7aa163c02f"],["/categories/index.html","efa061dfa6553cefac4e29c61ed1f7b4"],["/categories/分享/index.html","bff9e4e41cfe8db76d035c3fb95f7308"],["/categories/摘录/index.html","eae73934c064ab8e679503d86c1c8e08"],["/categories/整活/index.html","2a5f77aad9e6f35757d5508067f384db"],["/categories/日志/index.html","89a510c6e830c13242b9ef1a0d57952a"],["/categories/杂言/index.html","a8649b2fc1c97ddedd5678555c2bc8ec"],["/categories/科技/index.html","e3b1c8428706adc4d349c28cd7e55666"],["/categories/科技/page/2/index.html","537aac1583976b4495a379eaa7887d9c"],["/categories/科技/page/3/index.html","6c48549f233c5ff5c4fd76c95f3fb0bc"],["/categories/随写/index.html","2c1f6e1b6e42ef8c0e99229b29ac6cca"],["/categories/随写/page/2/index.html","298accc9b6833958b787488f1aaf0a6f"],["/css/circlecursor.css","9af06a354f7f4a92346d42722f9a2b01"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","b39f84e7a3bd767721ddad3f3a738ce9"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/liteplayer.css","33b9ec22b27baa2b3f79d32d06bb1a4d"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","e972d80346ceb2f2c2426c4dc317fa4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","0b44876bc5ff130e7f5d87193f91d01f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","00789d6ebfa4c17a0ddd211d2ba87b26"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.png","cb1a5be4aec21483b66acbb50ae0bb05"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","f42e65c48dd7cb0fd17d25cdc79b3654"],["/img/randimg/10.jpg","847fa3b868c48caff222643cccd1c4b2"],["/img/randimg/11.jpg","702424f1a47207fe043fe5b2e71acc3e"],["/img/randimg/2.jpg","50822d1b5e7fb88decca6041ef109e2a"],["/img/randimg/3.jpg","0517f8b99277c53ff82da428c49972de"],["/img/randimg/4.jpg","e2b9c548ae4dd781493578040a1d365e"],["/img/randimg/5.jpg","c2af0961810dd4c179d5d738f337324c"],["/img/randimg/6.jpg","fd74c70e60fdd894b8cb18a58e9f9415"],["/img/randimg/7.jpg","939c59a932cb342203c02537bafc22e0"],["/img/randimg/8.jpg","5baf2ebf42d9be2579f75bc2de72d166"],["/img/randimg/9.jpg","1dc60061280cc48adc29c7f980f694ab"],["/index.html","a4a826be92007546652d5b2f4f67ce5c"],["/js/calendar.js","dc38477daed8242df4651d3e21fc73f4"],["/js/circlecursor.js","bac2a12a03e39ecd9968f95138d1acf9"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/languages.js","ccc0e045438554a07bdbdc6bba78fa55"],["/js/liteplayer.js","1a326b10cdc83cb9ffef42077537977d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","86956aeb60ea05ec304f82e18669c453"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","aa0479fc1baabd6ad7c11029b36a1086"],["/page/3/index.html","ed716d7a2fcf523cb35ac86331999d32"],["/page/4/index.html","2cc235d13cbaa049e43fc437688170aa"],["/posts/1109049055/index.html","d6c73c8fdb09045fdf18cd274363b916"],["/posts/117984481/index.html","d521ac9dc51c9205f53697f8c614cf9a"],["/posts/1191333692/index.html","e23c2ace52386fb96b6817de0ae51d09"],["/posts/1192452099/index.html","9c31efe2233fef7ca6f3e4b9f440c8ff"],["/posts/1243066710/index.html","6ff3c09af13aa53485db1da28327aeb9"],["/posts/1325306746/index.html","20ea56195359833904be0648e9c96f87"],["/posts/1334945293/index.html","2e652778721f9ae88e6caafe0abfa6f1"],["/posts/1412730729/index.html","8066c7a056f12ef56202c58d78401961"],["/posts/1477501590/index.html","58dc24f11011a8c687d9e6baf1fa91a0"],["/posts/1520098886/index.html","8caecf774c7c229a93107b53029d27f3"],["/posts/1544165171/index.html","746f3ec30e3d166c4d664ca96625acd9"],["/posts/1605902499/index.html","ce1710992c9e69166b71d4b0d6a470f0"],["/posts/1670947396/index.html","43f629115438866a08c9ace47b2908f2"],["/posts/1808223324/index.html","ea97485e44d62643a88560666a98d04c"],["/posts/1846056213/index.html","be2a9fadfba48e9dc88969c51a6f574f"],["/posts/1996852443/index.html","2baf5aff90cded86e19c62b66f3951fa"],["/posts/2122152757/index.html","7b99124b6681856ecc68fc4b02b0d5c1"],["/posts/2127331844/index.html","71f25407dd8e3e0fc475ccb7935e3651"],["/posts/2189229020/index.html","4992b5c986034813064694335ef7a81b"],["/posts/2223589302/index.html","db257dce98b3d91f33008b22aab0baf0"],["/posts/2287214869/index.html","4b9e788ebd62858d0e4a9ad854f2b7ae"],["/posts/2342761908/index.html","e32cd1402249862699d71ddfb51cd2d0"],["/posts/2728617580/index.html","50482ae12d6a51aa76436f560098ed19"],["/posts/2776437882/index.html","35843e4cde798f221793f36ab02dbbaf"],["/posts/2845603730/index.html","58d15f8c972f1847fead65354680b3f9"],["/posts/2853259138/index.html","5b91917b4017a8287878147a0c1a63eb"],["/posts/2933412209/index.html","190ce8a7df3854e377293affdd341f50"],["/posts/3085606162/index.html","0c0641988568d694da62bde864fa2671"],["/posts/3088182250/index.html","faf86a0ee5687aa810b41fba15f4a85f"],["/posts/3143449586/index.html","fe59535807a43d95476601c79d6f7b70"],["/posts/3185181503/index.html","2fdae3edf50c9db466f90651a372f123"],["/posts/3188599471/index.html","6195d33c0558a6d5b4a260fe0048b65f"],["/posts/3191568766/index.html","6cd04cd65d225ab59fd15614c43a1b22"],["/posts/3287931156/index.html","9d45cd2ba16a0e9525a0a4a9ce6a316f"],["/posts/3294504097/index.html","35ef1623e94d4c207200019bcdb4d140"],["/posts/3303390089/index.html","41ee383a7fea988b5567a4805e630fd0"],["/posts/348141877/index.html","64e377a3649a65dbf1e26f1c3c7a12d3"],["/posts/3554105694/index.html","d70097c36673a87539f53fc6478e00c0"],["/posts/3679713651/index.html","2b8adf257eb158182bb2459bc1c2d46c"],["/posts/3695865278/index.html","7994f1ef55a4ea885fd3512f54bacdc1"],["/posts/3730684123/index.html","7d4bec9ab8038b024289f63dbf15ce78"],["/posts/3758027416/index.html","19b2770082ec5ea08cefd2c45cde4d2d"],["/posts/3766592313/index.html","8d37697b399336c68a853965f3626659"],["/posts/3786740555/index.html","7567fa42a16551436ea6d95298b0d354"],["/posts/3791443755/index.html","6ceb0bd7794d57530231eace12bc3444"],["/posts/3902219675/index.html","84ed6ee9806c6216ba6ef10c7e01779a"],["/posts/3957020503/index.html","403026078528447cc71204679808594c"],["/posts/3995821213/index.html","42a0361072462eea1b6f7291f8dc43b2"],["/posts/4068197923/index.html","7b5321dbeb12f4d156a433ca38eba3d2"],["/posts/4238296291/index.html","89f4932a457ee3cebc2280736841d610"],["/posts/4249530925/index.html","d9a3734e474f435048e0970c1a693429"],["/posts/439348253/index.html","46599da8619e0d4df4837ddbf6496b6f"],["/posts/440783934/index.html","6d4d467ad062050afa385136ac43d893"],["/posts/583739568/index.html","fa052d2bd396a4e7636233a08fe1dddb"],["/posts/712548944/index.html","98ba80f8f3fcb1d4cc339cb890e1f60c"],["/posts/721094206/index.html","45b1bf0c96d400848b8c8471bb6a19f6"],["/posts/744863573/index.html","5a569f1f19684e3f5ecef536ee748519"],["/posts/763639381/index.html","27aedc2f3485b1861d16abb7dd493692"],["/posts/814127131/index.html","5cbc122c73a015b8e6c20c9a44c9a6d4"],["/posts/863373566/index.html","25f073a8f47e12c048d5ef9f8af808e4"],["/posts/876967294/index.html","9e66c03704b7708981eff77b554de7c3"],["/posts/88276678/index.html","247f55703df9b0ebaf52e58e05248ce8"],["/posts/912248532/index.html","7661fc2722d23e931f545a1c00b50d49"],["/posts/952207792/index.html","63277d4d4015000484ca54e1a19c9392"],["/posts/966087953/index.html","79029b5327a3c91d9b4199cf4de3ae8b"],["/search.xml","e03bea04af1187b25a86bb7fa5c46845"],["/sitemap.xml","a98f8daaf8893b81506440e85a6653bb"],["/sw-register.js","511528765bcf44688253ac460af7b5ff"],["/tags/AI/index.html","a2fef04134500f26008f4d687125cb99"],["/tags/Cloudflare/index.html","edf3ca1eba2be9cbf70b89a4c01b3050"],["/tags/GitHub/index.html","408394c4b1591b1de100e95a2c8e2eea"],["/tags/Hexo/index.html","232094c12ed6bb698a9cdb57561883ef"],["/tags/Linux/index.html","ee48feede4df897cf620c112e554cb4d"],["/tags/Sora/index.html","3564f6e24958c6c2a3f3d8d114fddb76"],["/tags/Vercel/index.html","ed5bcb96818ca8824203a7d91b171241"],["/tags/Waline/index.html","23f2bbb37143c963a04ed4925d95e85c"],["/tags/git/index.html","65bb82e9206ecf69606270a63ec3d4ad"],["/tags/index.html","0c9cb5cdd6c9278ede0ce9a369e5300e"],["/tags/nodejs/index.html","6591d359a8ec2002a3571c8053ccf739"],["/tags/php/index.html","37d3b4a2907127f4852d1183e7da1db7"],["/tags/vim/index.html","1afd9c9c9ae62de3cb501a5ee135cd2d"],["/tags/web/index.html","3722dd43243795b196efd57956d7a217"],["/tags/代码/index.html","4d22211d139d87a65d7c628eaccffb21"],["/tags/前端/index.html","68d43e5f4ccf8eafb897f2f7e008ebe3"],["/tags/命令/index.html","0fa0bcb09f6143ef6bcce7b54cfea477"],["/tags/域名/index.html","083a0caf943516862080cad47c244397"],["/tags/技巧/index.html","7cae8da2f455622ba1a2bf239ddeb5fe"],["/tags/折腾/index.html","2b61c970ab9798f6d0f4a1a55dadd59d"],["/tags/摘录/index.html","72f5d8d5a165d12a9a4b2518c5d85bf8"],["/tags/操作系统/index.html","11fa9f2b89a094b88837f93e2126a5e2"],["/tags/生活/index.html","b26bcbba3b6099d6d598adcdd5aa7da6"],["/tags/硬件/index.html","7c323dc549328205ab1b57df4a446b2c"],["/tags/科技/index.html","2f00f934a1b01dfe3e20fe792e275373"],["/tags/程序/index.html","2fb55379f7cca40c337f5aa5ac87b586"],["/tags/网络安全/index.html","aac298bb95c7eb69f003b6c804000806"],["/tags/评论/index.html","83a7a57dad50d643438d14195aaa4ed6"],["/tags/转载/index.html","dfcd9abbbbe95658374864c18b50e8c3"],["/tags/随写/index.html","31bcb8528b3c67da3fb3e5d0b4bcdf98"],["/tags/音乐/index.html","9f0103326f5d38d78bb6052520e7b4a4"]];
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
