/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1d5aefdfb77e1b3d1483e43dc11e59fe"],["/60s/index.html","03cf34b6281e2612995ec2056c42968e"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","d51f7f02780366137f25c87ae048ddc5"],["/archives/2021/06/index.html","ebfc5ace16f7c85133194ba1d2ca6f4d"],["/archives/2021/07/index.html","4f6444a76922a80a1679ba7b22d134dc"],["/archives/2021/11/index.html","97b5d5192a2ca7fbcc4e72a0774040ae"],["/archives/2021/index.html","584e7e0ed8fe77c11de0e1a20308962d"],["/archives/2022/07/index.html","17380915765b9735826396b907c13467"],["/archives/2022/09/index.html","4e8c7d4e1a58804170f7ee1569a7a7db"],["/archives/2022/index.html","7a0c04806de9b8bec247032fe57d9f99"],["/archives/2023/04/index.html","a3923f49503c8707ac0a1b10e5d27538"],["/archives/2023/07/index.html","031fb0e760ea4ac01cd77ae60b0ada0d"],["/archives/2023/07/page/2/index.html","cf5886741408d4bc170bca53920e12eb"],["/archives/2023/08/index.html","9f17a7c9a28ca7e10795f02647ec4fbe"],["/archives/2023/08/page/2/index.html","a5bda8a8e8823bbf089a2c5214dd18b9"],["/archives/2023/09/index.html","3ec5bb03b00b5812cc6a636de3889250"],["/archives/2023/10/index.html","f3358465a95b3531011b5f7f7d9c146f"],["/archives/2023/11/index.html","fc71d68a4e5c7a0d0e75c78c8d741fb3"],["/archives/2023/12/index.html","5c99ddbcea92894f1bee8f895cbf24f9"],["/archives/2023/index.html","b45f1a35e1bcc6c682cba4783c4a1124"],["/archives/2023/page/2/index.html","fd5f4a411757a08d2c429f6692bf02cf"],["/archives/2023/page/3/index.html","feaf451f42a78a52c1490a8024d608f0"],["/archives/2023/page/4/index.html","c5dfbf6be3a7d5d4ccc13c605dadcc7e"],["/archives/2023/page/5/index.html","0e1041b0452a3f7a5e212ba6e456ddfb"],["/archives/index.html","b35db9f963204d9c424e0000c5558a97"],["/archives/page/2/index.html","e6c19b6e40b40a197037c4573675f5d2"],["/archives/page/3/index.html","297cf5f4138d209943a16066c63da601"],["/archives/page/4/index.html","0d3c97a517042f74c365a21d168a71e0"],["/archives/page/5/index.html","e48bf50ee5aefa3537eafc7d20ca0183"],["/archives/page/6/index.html","f0d20fcb8c713e58c8475bd53e823864"],["/atom.xml","aab4df8f2ef85c328d56722426888ac9"],["/categories/index.html","c973a5c2162561c49c657898085b4c19"],["/categories/乱评/index.html","e5cc585c9c80bebaa65becb492279bee"],["/categories/交流/index.html","5d3782e1d82ef43e8909da964d214948"],["/categories/分享/index.html","870601b632e2f992901b330e0f544160"],["/categories/摘录/index.html","9b97ebf4519e550e1d266797b9a144be"],["/categories/整活/index.html","e1db41392ee4e0d73dfc11f26b7dd567"],["/categories/日志/index.html","61281f4ee1a2224f2fdea276c37d927a"],["/categories/科技/index.html","75612a3fcd6040c6e2c07e8608332045"],["/categories/科技/page/2/index.html","cc849f71665136a7fcdb58cc04e9b17b"],["/categories/随写/index.html","0b74185c9a93e543907b30e949973adc"],["/categories/随写/page/2/index.html","b6b4d6fd5b689de9fd8a74a78286ac91"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","69b79796159351c5cfd65b469a61500f"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","019dfd4b5e2c374a735ba6a6014b3bbc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","273be17932ca7e471d34dd01ad19bc38"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","06f877015c998874462b06405b775e4b"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/ornament/plumblossom.png","3c3b9bf1d2ea673ac559a47c24ddaa70"],["/index.html","4a0eadb5297efcf5b6eccbd8d5910aa5"],["/js/calendar.js","dc38477daed8242df4651d3e21fc73f4"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/languages.js","ccc0e045438554a07bdbdc6bba78fa55"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/plumblossom.js","65874dd37791d8c4b78c0be3e9cb697a"],["/js/reurl.js","1aebec6fcba8aad05354e7809a33da43"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","f395c90512989c58ce318fb6285ae453"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","5706053ee5c7ecc3dfb9da14cc9ec16d"],["/page/3/index.html","40a3a3763b4b52a9260a3837cf8bb573"],["/page/4/index.html","61c50c3eb7e526ee51f8ea69e931ed32"],["/page/5/index.html","d657779d42756c7b22290bebd95b2faa"],["/posts/104092554/index.html","2d202ecdc0cda8e54e0dc5fb5e6ac8bc"],["/posts/117984481/index.html","9867e85516c1e0ffe959970e0c8467c4"],["/posts/1191333692/index.html","3b6717a2da538a25e51feae41177b81a"],["/posts/1192452099/index.html","ad480b0386e9e8bb73d6777ce6626fe3"],["/posts/1243066710/index.html","386b1b582304f382ac8f909f01dde3ff"],["/posts/1334945293/index.html","c5ecfdeb1031dc0564466e2a03637927"],["/posts/1412730729/index.html","13fba4ec608c960a5ac875f12cec9851"],["/posts/1477501590/index.html","43c9ac8e47a5750590aeb4e975147a99"],["/posts/1513222061/index.html","4bccdba43da30aec3537106de49ea793"],["/posts/1520098886/index.html","8bd1f5265e0a2a8ed88561e86396cef3"],["/posts/1544165171/index.html","584116427e56f3311f208d509ad2add6"],["/posts/1670947396/index.html","14ebc51101967e43e82b97f9a9393c70"],["/posts/1808223324/index.html","792780ed20a0c1b9569d089743085caa"],["/posts/1996852443/index.html","1608bc3e3385f612a2bb87830b8426bc"],["/posts/2122152757/index.html","f2dc2b5f0a169b3625345afc433917c7"],["/posts/2127331844/index.html","c4e45a9ddc03aa0c72ac33e86d9e1402"],["/posts/2189229020/index.html","e501f7629289efcdf7efe7b9fab50154"],["/posts/2223589302/index.html","137c7e679f80c9e049b82807512f08fe"],["/posts/2287214869/index.html","9cf30a3a4cbd7862a3f87025cb526421"],["/posts/2342761908/index.html","6afbc273be6b13fbee0e38d059e8180d"],["/posts/2728617580/index.html","f85026fdc6d2fb0a6a876f0047b353bf"],["/posts/2776437882/index.html","cff625848d3997d49b212bbd3b3d7250"],["/posts/2845603730/index.html","bcaa438bbed3e8fa502be6cd5d29fdcf"],["/posts/2853259138/index.html","8ddfcc3245544f2921550f58e9f7830b"],["/posts/2933412209/index.html","5b5d9c80c04d43590f180ad85cdb1c3f"],["/posts/3085606162/index.html","203ec989421470b1604abd787c225ed9"],["/posts/3088182250/index.html","7ec118077378ab3f96a402f154fd3097"],["/posts/3130116529/index.html","9ddf07b95428663941f4b8ed712b91ce"],["/posts/3143449586/index.html","e9f85fa965a0c92914b4696d371704b5"],["/posts/3185181503/index.html","7952d3197a2b179944faaa38109a8369"],["/posts/3188599471/index.html","db663a3de4810d69740aef0b886b9b60"],["/posts/3191568766/index.html","e25395f5b5c3edcfff68e7b5468d4269"],["/posts/3294504097/index.html","45099bc0df6bb892afd12f3dc310b930"],["/posts/3303390089/index.html","a996e22145c3aa31a54b1ad5df1b7cb8"],["/posts/348141877/index.html","8e80416f2b4a5e27eb23afbc7f49cf1a"],["/posts/3554105694/index.html","2e07b7cdb7cd063d6b9b83151a38b985"],["/posts/3679713651/index.html","52b25fb9dc1bf0d472c9e838070096f7"],["/posts/3758027416/index.html","cad2ffce3e5e7bb0c193b0d71411c7fb"],["/posts/3786740555/index.html","95fa192d48d18bec9103c82aa13136fe"],["/posts/3957020503/index.html","cf7af675c4a044c39ab1972e9e29eee2"],["/posts/3995821213/index.html","0a73839ae1ed21c24688b3649f76cb95"],["/posts/403354561/index.html","2f746b620fbcced9b30457c5a8bcf1d8"],["/posts/4068197923/index.html","e48606b9091b95515bf0275721958079"],["/posts/4249530925/index.html","22fb6889d512149698afd7c996551c1e"],["/posts/439348253/index.html","a1eb991d547c433fa9d323217510492b"],["/posts/440783934/index.html","8995cc4b1b34970eab60afb708909e9f"],["/posts/583739568/index.html","ff087335f8ecd3ffd76017dcedb66a40"],["/posts/630514454/index.html","fe9fc613672e0c6ba878718a503e0757"],["/posts/712548944/index.html","21af258b1b81877a607e45cba90cb3cb"],["/posts/721094206/index.html","e1c9b4a7c3e4957efd1f796a60da4b6c"],["/posts/763639381/index.html","9cd4cd6f8485cdaf574c42f17fbe0513"],["/posts/814127131/index.html","8c5ba553054a4e46dacd07bf5220c9d6"],["/posts/876967294/index.html","a2c38e0050638503239dc0f9ad94d74c"],["/posts/88276678/index.html","6f3b59a56d4bc8b15b21c1ee5f312806"],["/posts/952207792/index.html","af3aa237d289535f07a95052e876ed8f"],["/search.xml","98b6cf262490cdbb21825d8ddf96b91c"],["/sitemap.xml","eb12813632f7e114d6a90ab096e04cb7"],["/sw-register.js","41340ee001fb510487089175914d8170"],["/tags/Hexo/index.html","95b14e2e75578a9196d3512951784bdd"],["/tags/Waline/index.html","45739b55f14e12f5004a73de2a70cac6"],["/tags/index.html","b8fa623b7d641eb9dc572f56af8d4ff9"],["/tags/web/index.html","ce9015b091ec5ad74aeba66719338c15"],["/tags/代码/index.html","2870d5789497300e6e52b5448d21085b"],["/tags/折腾/index.html","efec61ef77261634ee3625aa661b1827"],["/tags/操作系统/index.html","5e09e1055638c2e98072bc81c9bbb192"],["/tags/硬件/index.html","b248860af304c87d1574a0cf09a8899c"],["/tags/程序/index.html","6edaf9582db79e3b8ce60d851e03d8ec"],["/tags/笔记/index.html","06d58b3de7e5efad4800b92dc4ce3534"],["/tags/网络/index.html","354a79b26a017bf2c9f07619340835a2"],["/tags/评论/index.html","dc933171c84de45617272391fb64ada9"],["/tags/转载/index.html","5782cc4276c3d69cb94b3d1b8a92ee26"],["/tags/随写/index.html","fe15be10ca42148ff45a420f30a3220f"],["/tags/音乐/index.html","853aa7f8c8120ff5e28d395dd936ec1f"]];
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
