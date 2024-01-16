/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8255743f223ddfed754abca4d05f5d8f"],["/60s/index.html","a9dd52161d1f68a904b67156cd09282c"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","aeaa602b8ecf9a595e04b7198fa91a23"],["/archives/2021/06/index.html","93f87fcf974e87edb388466261f96c35"],["/archives/2021/07/index.html","6f918c806b1a37671318e0e36a0b6c36"],["/archives/2021/11/index.html","7c2da7a50a30ca24db715bafe4a25023"],["/archives/2021/index.html","4d9adee628928d58bf8c29646d3bbbb5"],["/archives/2022/04/index.html","d7097309611dd14f7e1b539d64d4a4f1"],["/archives/2022/07/index.html","a4e8d51cf14a2e148244755a90fa214c"],["/archives/2022/09/index.html","5936b36e018e7604d571925fc678e5a7"],["/archives/2022/index.html","bcd6dcec78a567d27383892142969616"],["/archives/2023/04/index.html","563c809bb2300a489a710a9d1e12dc8d"],["/archives/2023/07/index.html","301d9c56cfaee996547706d6cc99e7da"],["/archives/2023/08/index.html","ad17b31a9c8e71c2670fc8af98cfd6d0"],["/archives/2023/08/page/2/index.html","0727ccb7bf0b95cf3855e36becbb1358"],["/archives/2023/09/index.html","52b50cbc4737eb311118ea538fc2c55f"],["/archives/2023/10/index.html","072e46d92c499ae3c9a2de03b6fa0102"],["/archives/2023/11/index.html","ad1cc48c6f7a2515a2d17980eed73e35"],["/archives/2023/12/index.html","0dce193f99857247176ff30272502757"],["/archives/2023/index.html","15fe407dece3508bf4323040c40f62aa"],["/archives/2023/page/2/index.html","1d1e5f54b75dc0cf990b1c8d2dbf51c1"],["/archives/2023/page/3/index.html","234af0bffd4debfcb130848e51b59791"],["/archives/2023/page/4/index.html","503e0270b537ebe6f81101121c4a1c35"],["/archives/2023/page/5/index.html","d9f9f48c7cad66c809b0f7cacdd908d2"],["/archives/2024/01/index.html","a0dbe06904d0cb2bf48ae5f72c3aeb83"],["/archives/2024/index.html","c14fdca0e81ca51941e33cb0a6d91b22"],["/archives/index.html","d35cba35b323b994ec8399e8ed2e9165"],["/archives/page/2/index.html","ee930af9e152508da1182f0d67005dcf"],["/archives/page/3/index.html","149ca04bc4d64b2e86fb9757015be9e2"],["/archives/page/4/index.html","cd9322afc308bdd00ed76a61b6c63570"],["/archives/page/5/index.html","744bd13887239b0b7bc821b75254fc78"],["/archives/page/6/index.html","623cc670608ad063b1682ecd4cbceab0"],["/artitalk/index.html","5e9266203f50ef598cd713f18e2bc327"],["/atom.xml","483133427b9605be851155675c6d3dc3"],["/categories/index.html","7db6d17a79b032a21be79dd85665afb1"],["/categories/乱评/index.html","ae482f91b1172d83cf33ece0f6193826"],["/categories/交流/index.html","c1e9befdcc55cd28421d66a22e93e18f"],["/categories/分享/index.html","fded76f8a249b5321d73d386409034a5"],["/categories/摘录/index.html","e9b25761e9e154c348c5294efdff832e"],["/categories/整活/index.html","3a89d010e87a4941f9fb20fe069ef69f"],["/categories/日志/index.html","d358d9116235bad219dcc38b6e227499"],["/categories/科技/index.html","aa3054f5d0f0b85522e019f3031b60dc"],["/categories/科技/page/2/index.html","e3c7e09e0235734e43d1a79fcd662306"],["/categories/科技/page/3/index.html","683cfa402f98bfa087d05ae786711368"],["/categories/随写/index.html","4c159cb56efbb31af9c4c5bdefab4a1b"],["/categories/随写/page/2/index.html","eb5c4cd1750b3d6d107567f0b80f961a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","0ce6e53d858e12afc9f5da0d7ccbc978"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","4fcc40cf475195f6f85beddbb9925765"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","ed2d8114c54605dea0b925d81d07b227"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","00789d6ebfa4c17a0ddd211d2ba87b26"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/favicon1.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/ornament/plumblossom.png","3c3b9bf1d2ea673ac559a47c24ddaa70"],["/index.html","7ac11ce86c756db04dbf5f421fa25ce7"],["/js/calendar.js","dc38477daed8242df4651d3e21fc73f4"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/languages.js","ccc0e045438554a07bdbdc6bba78fa55"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/plumblossom.js","65874dd37791d8c4b78c0be3e9cb697a"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","f395c90512989c58ce318fb6285ae453"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","b36940736daf9522e96c842ac5c4434a"],["/page/3/index.html","1247586748da7d13898f139060c73147"],["/page/4/index.html","459a6cfcd8c5f8795a207d14559c6af6"],["/page/5/index.html","a9d2ce28e2c62231369c84661c986b0a"],["/posts/117984481/index.html","0a3ec03f4b5a4037bb693f57fea990f4"],["/posts/1191333692/index.html","7f89abe80a66cd330f89739b191b4470"],["/posts/1192452099/index.html","7f9b250da2d4196a80119dab0cf2ec2c"],["/posts/1243066710/index.html","3696de0892d3309bf64b3a61b6f8bf04"],["/posts/1334945293/index.html","71ec015ea2cb0fea77b8a3dfc8e3b419"],["/posts/1412730729/index.html","0a9c0da54d5ababeef79276762078999"],["/posts/1477501590/index.html","88f55d43f5035888c6092f504eedc930"],["/posts/1520098886/index.html","b72c241fc039fc352db6cf0beab982e3"],["/posts/1544165171/index.html","e0758a2be286c58f63ca4f0d8d10a132"],["/posts/1605902499/index.html","2ec5f15f09a7b00b3de81e3f2f7b8cc0"],["/posts/1670947396/index.html","87dd16d9e870516e3441cac1ef457931"],["/posts/1808223324/index.html","be24f16ef90de622fc5a0f0157eb3201"],["/posts/1996852443/index.html","b80665ece003251ee7afb7fd3be0a16e"],["/posts/2122152757/index.html","7ea5bee68440b938f957fcf52cc0b64b"],["/posts/2127331844/index.html","48edbf889643dfd851e6eadbc5a0f460"],["/posts/2189229020/index.html","f0e01f175fb146005842e454a1b46e47"],["/posts/2223589302/index.html","7e86c69715de0e4176b619695ba16df6"],["/posts/2287214869/index.html","86aa8000f1ebf29ae155577ee763041f"],["/posts/2342761908/index.html","ad4fda987ab9d3c1361e457c71a59334"],["/posts/2728617580/index.html","f06b582e92f8f5df59ef9f9fc3f6858e"],["/posts/2776437882/index.html","daa55af588a45a67dc29986922487f72"],["/posts/2845603730/index.html","a93cee41a3750b9075d2188c15203e17"],["/posts/2853259138/index.html","d44d7bdedba746b4cb6e6b82a0b34fcb"],["/posts/2933412209/index.html","92a47e690d6818b694b934b3bac516dd"],["/posts/3085606162/index.html","d5a4afe933120c9608cde0dca89381c3"],["/posts/3088182250/index.html","e2c27d4c3a881ea47fb265abb8069f2f"],["/posts/3143449586/index.html","7a3871ef8c53e67fea19566801d2131b"],["/posts/3185181503/index.html","f4fb0889622a30ae4c02837c7f253732"],["/posts/3188599471/index.html","18891cb5544d4749f67253494193fc4e"],["/posts/3191568766/index.html","5ecaf2363d6a1d30d7059e9bd7172486"],["/posts/3294504097/index.html","ad668b8aa6da7c2598a7172ab8629583"],["/posts/3303390089/index.html","9cb7f37eddb77c5991b0c55eda88c6dd"],["/posts/348141877/index.html","bd1d9bbe2425c70a9f6c9d1195898622"],["/posts/3554105694/index.html","8d87a54ed7fe300162a18f606304bd8b"],["/posts/3679713651/index.html","e117b7854f4fddfc427f40d6cc875a25"],["/posts/3758027416/index.html","27e42a1e0940b7195aed4c55955aea40"],["/posts/3786740555/index.html","2b408515266a04802a11fe5785efb35a"],["/posts/3957020503/index.html","593b126024075177eca5afab97192bc5"],["/posts/3995821213/index.html","735a5e719f61a79b47399943c409530a"],["/posts/4068197923/index.html","f0a018adc6fdab859a70e6210c1022ad"],["/posts/4249530925/index.html","6fc96f51b31d486c1ef70e23228825b8"],["/posts/439348253/index.html","3ec16deca71cca8671876f0f8ff9d6c6"],["/posts/440783934/index.html","43ceba8bb7b704e575991aebfe855224"],["/posts/583739568/index.html","0487237949808496f23858eae41742c1"],["/posts/712548944/index.html","28be5ecd0637ed6a352490a1ff3b1a18"],["/posts/721094206/index.html","efb0c3541faa7fa11cc56f174300e971"],["/posts/744863573/index.html","74ca6727ad068cd227dde5ff846f541f"],["/posts/763639381/index.html","edbe16d98e96234e2a238d72b9dd418c"],["/posts/814127131/index.html","37dd2b2b9d839dadc67c31909c36a799"],["/posts/863373566/index.html","362a1610c84684543bd5f3ae68cc58b4"],["/posts/876967294/index.html","190b05dd0bb7b42bacc7f5a40a9213d6"],["/posts/88276678/index.html","690c6dba41c501512a6e72cc14c8a460"],["/posts/912248532/index.html","0845038901394922207c25418740874b"],["/posts/952207792/index.html","592d82aff0286819a27c813e35361e45"],["/posts/966087953/index.html","0eb819949e32dc8daec6a4f1ff91d183"],["/search.xml","5c8f4d7100455ff1f2fb61858ab8eec6"],["/sitemap.xml","22824abc1d4d74c9603d33e73b2eb1ca"],["/sw-register.js","64e0826571c6315dbff3caada919bb19"],["/tags/Cloudflare/index.html","d636b4f53920ec47ab71e20c9cf64f29"],["/tags/GitHub/index.html","8445fc997d6c7bcd77741d106f73cf57"],["/tags/Hexo/index.html","1dc67ba39e0e702a7758c3607c761d32"],["/tags/Vercel/index.html","78e475545fc63ada457ccaa8b058ea3c"],["/tags/Waline/index.html","121d9d86b6fcc85a35b0b6535702a0dc"],["/tags/git/index.html","8a76f8d8f148fc124a87684312f451f4"],["/tags/index.html","d5b20c765a9d3d39727cc0a9b61621f9"],["/tags/nodejs/index.html","ab7bc8f605285cec02062da4deea2853"],["/tags/php/index.html","532348ef9ffb63523e3ddc31b1632042"],["/tags/web/index.html","1d79469047d5221e039c5d772bf5fdf1"],["/tags/代码/index.html","52e37017c1308a1c7a540486c5a8ceed"],["/tags/前端/index.html","41b5946e96c2317771bcd6706e270364"],["/tags/命令/index.html","f989a71599eeb88755dc00ccd60436de"],["/tags/域名/index.html","b782c10aa72b043a0e7c9bac0a19c19a"],["/tags/折腾/index.html","1c8b40ecc3414377cc97c6e0c29838ea"],["/tags/操作系统/index.html","75985615af7ee4573b0198cc67c8b160"],["/tags/硬件/index.html","e371a3bc6f2a3eda50bbd414add61549"],["/tags/科技/index.html","35a2706e940773fcfa782e84f2a2d03b"],["/tags/程序/index.html","855b58e6dfa2d0fd42090d2a42485e7f"],["/tags/笔记/index.html","d55e49e9b585e60dc26262639129c0a0"],["/tags/网络安全/index.html","53b867b7276c10a2868fad07ad370ea6"],["/tags/评论/index.html","fcd5b8137ad375b75d75f6804aa335b9"],["/tags/转载/index.html","20b6a73b466a3e7c56136828cf7ff396"],["/tags/随写/index.html","46faf6b9a11fbcb07ed254dd69af7c56"],["/tags/音乐/index.html","b5be5b7e9e0e6ed280c1ec743e53802c"]];
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
