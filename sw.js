/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f62df2941ab0253b1873fe3ea09b73bd"],["/60s/index.html","c0a07b8696e9d56127ab08dad95f9f75"],["/BingSiteAuth.xml","8dba252cab4ac50cddddb9f90e6a1423"],["/about/index.html","d0ebbdd5929aa3edb97fcc838241cf41"],["/archives/2021/06/index.html","2b20ce00697ee2de43e355e7f7d1d231"],["/archives/2021/07/index.html","cfa01f34a20ebcd8ae4449d91a710a3f"],["/archives/2021/11/index.html","e139c8cc094f0aacdc9a3becd02cbfb4"],["/archives/2021/index.html","72ec3ff39b2bfd74452c3a41b641c665"],["/archives/2022/04/index.html","c28a777ff4848bf9fa26039a2572ad11"],["/archives/2022/07/index.html","dfa400f67dee1f8c5076f55c59eb2002"],["/archives/2022/09/index.html","aac8eee0f9f268570c55b53a54d79882"],["/archives/2022/index.html","9229709c0a60838855302e0ffe07f43b"],["/archives/2023/04/index.html","f97151bdc2a775ec64fae99e6889aceb"],["/archives/2023/07/index.html","700f522218e2a11c515380bc5bd74436"],["/archives/2023/08/index.html","cf0c15219831f245016ffad5929ad5bc"],["/archives/2023/08/page/2/index.html","de9d8108909acb82ffd731059687b7fe"],["/archives/2023/09/index.html","d383e5d725f2c605c161ae4acdb39a15"],["/archives/2023/10/index.html","279830b25450d32bf655c09b2e074194"],["/archives/2023/11/index.html","18b1f23ff0a5dee2cd2a92af612eab79"],["/archives/2023/12/index.html","094816b4fe56e4c23efdfc10690f139c"],["/archives/2023/index.html","be4bf438926c3b20dd07676a24c3c29e"],["/archives/2023/page/2/index.html","3a6552eac390b0c4d674c968ddc5c884"],["/archives/2023/page/3/index.html","67ac14ec705347daa49b10735e8e6fda"],["/archives/2023/page/4/index.html","ab678648b2e940e0e3c631da828e03d0"],["/archives/2023/page/5/index.html","b83938d62d4c578fc30d09188b275888"],["/archives/2024/01/index.html","1583aa5bc64b3b02d048dc9c07628edf"],["/archives/2024/02/index.html","81fcb966384accaf21fb5cf0f87f3ee5"],["/archives/2024/03/index.html","28830521fa9303ef0f0716a637773ca9"],["/archives/2024/04/index.html","8172148804ee6f93b014b544a3c07588"],["/archives/2024/index.html","d5452d55af0241262ebf8e5365520108"],["/archives/2024/page/2/index.html","ab079bc7ae234503d12c74b2127fddc9"],["/archives/index.html","06594a6d280d246c4fb59c4d8c9c0818"],["/archives/page/2/index.html","ae17270ba1b8fad7b210da9b197492dd"],["/archives/page/3/index.html","a3addc0b1ffc56f3cf5904c7a538bf66"],["/archives/page/4/index.html","92381ce50a0586061028aee3b3503841"],["/archives/page/5/index.html","9381192db0d935ce27e0591511721aad"],["/archives/page/6/index.html","b8c4910f4491ba717abfceda65ede6a4"],["/archives/page/7/index.html","4223834dea364013643ce93899f5ed59"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/atom.xml","9988f95a54e9db82a15076adf04e4243"],["/categories/index.html","d401921bcde9973e1ec4a9b774634462"],["/categories/分享/index.html","3af718a6a3f7f199a61a50f28e7aea87"],["/categories/摘录/index.html","eb05957092a8d74853ccb4131f334c13"],["/categories/整活/index.html","19dcedaca69acd4ceb990a9ddb2729e1"],["/categories/日志/index.html","e2c5de327f067e49c08273020656a9c8"],["/categories/杂言/index.html","2142943dc6ec82f4ed42e8481f7336c0"],["/categories/科技/index.html","fbaeafbff6ff04c926735120d72d10b7"],["/categories/科技/page/2/index.html","c649d434a218d87d23f4e52f4222818d"],["/categories/科技/page/3/index.html","c31eb2320dedd475b322109588890eed"],["/categories/随写/index.html","8a33eaf26c0d40312830b128eac81ac3"],["/categories/随写/page/2/index.html","9fb2fb06027334ac00097d357fd32986"],["/css/circlecursor.css","9af06a354f7f4a92346d42722f9a2b01"],["/css/essay.css","d3183b0858dfbcfce024989234a98422"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","48da0bc05cd75403f230f37af338dee5"],["/css/lanterns.css","7a5eaf000f192bc090583babb45d97ed"],["/css/liteplayer.css","33b9ec22b27baa2b3f79d32d06bb1a4d"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace1.css","6c2eff9cdae4c7d999ee10596e03d223"],["/css/pace2.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/plumblossom.css","21dc71f0f7efffc3cdb613092a94ec64"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","3d26af5a0b278833302740b4e60e0ef3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4d205dcbbeab6679b3333658f751b22d"],["/friends/index.html","a5645a37579c006a0ff2c13fd7bb1001"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404page.jpg","a8f2f8611f2fd50bf748ab881e202757"],["/img/862675.jpg","281c2b6e3a6949920bbec88d572a102b"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","de9d4b2e16cede69dfaaa680b085de13"],["/img/avatar2.png","00789d6ebfa4c17a0ddd211d2ba87b26"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","f0309977efe954724214c9015239e206"],["/img/default_top_img2.png","06f877015c998874462b06405b775e4b"],["/img/essay_top_img.png","cb1a5be4aec21483b66acbb50ae0bb05"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","812a5e2d489e2170d70cda438deb1bc1"],["/img/index_img1.png","ad4911d85378019fdea92419c980b966"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/img/modipic/music.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/img/modipic/poorcomments_cover.jpg","c39ad9515db87b0edf3676c938b14479"],["/img/modipic/poorcomments_top_img.jpg","c29e4beb5504915e55a341e6176759dc"],["/img/randimg/1.jpg","f42e65c48dd7cb0fd17d25cdc79b3654"],["/img/randimg/10.jpg","847fa3b868c48caff222643cccd1c4b2"],["/img/randimg/11.jpg","702424f1a47207fe043fe5b2e71acc3e"],["/img/randimg/2.jpg","50822d1b5e7fb88decca6041ef109e2a"],["/img/randimg/3.jpg","0517f8b99277c53ff82da428c49972de"],["/img/randimg/4.jpg","e2b9c548ae4dd781493578040a1d365e"],["/img/randimg/5.jpg","c2af0961810dd4c179d5d738f337324c"],["/img/randimg/6.jpg","fd74c70e60fdd894b8cb18a58e9f9415"],["/img/randimg/7.jpg","939c59a932cb342203c02537bafc22e0"],["/img/randimg/8.jpg","5baf2ebf42d9be2579f75bc2de72d166"],["/img/randimg/9.jpg","1dc60061280cc48adc29c7f980f694ab"],["/index.html","d25b7f7a43251da65287e40aa72076e0"],["/js/circlecursor.js","bac2a12a03e39ecd9968f95138d1acf9"],["/js/essay.js","77971ed61723edc9bfe3682abe864362"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/liteplayer.js","1a326b10cdc83cb9ffef42077537977d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/reurl.js","b64e1adc6576adf65a7fecad571dcc69"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","86956aeb60ea05ec304f82e18669c453"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/js/waterfall.js","bf0900ed39e03f0fa17ef5e85c935505"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/ap-modify.css","baf6c27e78af0ebc7c805a169bc70411"],["/music/button.css","3aea051a3dc38f04a8d3d5bb9f3c5727"],["/music/index.html","bf83bb7801491eef608b2fc73ab87e4a"],["/music/musicbg.jpg","cf292a58eb5bd1d66bac1c2ea3a06ea1"],["/page/2/index.html","2b8f41500554082e2c7d1c716fa74e01"],["/page/3/index.html","5e005538ea30f9635181456bf9756d72"],["/page/4/index.html","394feecd0e258043db8066c1a120ac84"],["/posts/1109049055/index.html","d7099270f2edac323b1184501ec324fd"],["/posts/117984481/index.html","896ff9832977d891539210bf9e182a66"],["/posts/1191333692/index.html","b0488fb91c9dd96ff7784d190abf23ea"],["/posts/1192452099/index.html","504803063165437bd96df751c02235a8"],["/posts/1243066710/index.html","5f07f64d813c16345904029858eaf73d"],["/posts/1325306746/index.html","fd204761febccb363139e82696a463c8"],["/posts/1334945293/index.html","41f6c242364a2e526ca87500928e4174"],["/posts/1412730729/index.html","3ea5b7fd34a7382caf8aecbe6dc92abd"],["/posts/1477501590/index.html","2ee16d4fbe759a48e71fa838bcc153f2"],["/posts/1520098886/index.html","9a014b17015b58f2d5505aa6ce9c5786"],["/posts/1544165171/index.html","31080e3cabc4521a584e4954ba9e9c2b"],["/posts/1605902499/index.html","a54cca3f24cf9dfb0ba437ecca9eb76f"],["/posts/1670947396/index.html","560644132fdda2a3913dffb5562d5785"],["/posts/1808223324/index.html","696b4eba1bfe4441fcc11727ce35e50c"],["/posts/1846056213/index.html","e722f325a9bad172fd7dbe2b842c7b1c"],["/posts/1996852443/index.html","691f002c484274a7d2c1b71169428771"],["/posts/2122152757/index.html","4ca9c6e1db1b44f0eee41ac6f07f9938"],["/posts/2127331844/index.html","026a3795659a1e190cde6890e250b831"],["/posts/2189229020/index.html","d332875aa52f0d6affa0ca69dc3fe73c"],["/posts/2223589302/index.html","cbebbb868487d20ca316eed4de163d2f"],["/posts/2287214869/index.html","4c1b3228454d3c32e609add233c20c96"],["/posts/2342761908/index.html","67b8ca34c1d75306e2626c22cf9ca3af"],["/posts/2728617580/index.html","85fb5bd48aab9a3f55c2c4b567a375f1"],["/posts/2776437882/index.html","77a99445a33f26d3286819e0456e59d4"],["/posts/2845603730/index.html","505170f72418af6ff60988f592820001"],["/posts/2853259138/index.html","8f09a2dbcc54a7f8f967a08480787120"],["/posts/2933412209/index.html","14e31426684a09186d5f675809ae3c1c"],["/posts/3085606162/index.html","ba651424508695c31c1110141f90333d"],["/posts/3088182250/index.html","1a9b2e6795e628d992f0af136ffd1f4f"],["/posts/3143449586/index.html","716646694e3e366e66e2015c40e2a2da"],["/posts/3185181503/index.html","8c85f85a8c5ce9113cf6f477708d90cb"],["/posts/3188599471/index.html","8383f0ef75c19d51fb58dde69206f8a2"],["/posts/3191568766/index.html","b2f7e8869bf304e2323b3eae42aa9904"],["/posts/3287931156/index.html","641f191892b6d258d29b3cc2ca7fbb4a"],["/posts/3294504097/index.html","11a2cf4ffdfa4a19674b9e27994ff0ec"],["/posts/3303390089/index.html","0cf1d025f6bf9dfe760aaefd240d0522"],["/posts/348141877/index.html","5ef725ad20250bc89199c9c99dd3f609"],["/posts/3554105694/index.html","e7844029729db256d24c1d0f914c6ada"],["/posts/3679713651/index.html","2605fd9bdf2c02582184b47d965823f6"],["/posts/3695865278/index.html","f1b179aaf8db41080ac83e503c2b772e"],["/posts/3730684123/index.html","fa54368632ef5f13d9160c4a950ecc02"],["/posts/3758027416/index.html","3ba4ff43c9b8a0d40bd9158777f1070f"],["/posts/3766592313/index.html","97cba89f29617b502d140e7aa5d722ab"],["/posts/3786740555/index.html","fa0b2535fa0f8591a3f753a29b3f5ec0"],["/posts/3791443755/index.html","cc13ee23a842477894f8c53c55df40d8"],["/posts/3902219675/index.html","251af5c7b49ab02753399dfeb62e5c34"],["/posts/3957020503/index.html","0249dc61c8ba51438edfd7d38cd23729"],["/posts/3995821213/index.html","9a43ecbc1c199454fb1d440e17f23138"],["/posts/4068197923/index.html","3c07229d65056eee2c92861881c1d2f4"],["/posts/4238296291/index.html","98f053bc49d6ed965b063b2d59f5d4bd"],["/posts/4249530925/index.html","8d583ce18ba9277bb54a3db656cdf131"],["/posts/439348253/index.html","dc43425ea15c0089f32b6b9b20229cfd"],["/posts/440783934/index.html","4e734af9d8d4fd1986b2fa1551ce16d9"],["/posts/583739568/index.html","91ab8e3d3892bf50d2622b4b0f2f0b76"],["/posts/712548944/index.html","bc7a58eb5338bc8457d54d4bff05a2eb"],["/posts/721094206/index.html","70b30ff6b2e91bf7519a80e20e09b17a"],["/posts/744863573/index.html","b18cdd6a0ca8ec0371fbbf492dd82f75"],["/posts/763639381/index.html","ed62fc7684116d172e8d141c81aee018"],["/posts/814127131/index.html","7d6e3f12c7edda3d8c1f1024a64fb1bd"],["/posts/863373566/index.html","91fdb4d435a3292aa693cb0a2aa463cd"],["/posts/876967294/index.html","cce96f8ba9712a5771e3ac153ef27a31"],["/posts/88276678/index.html","11a94e2f6abf9f46cb701d82d3fb13b5"],["/posts/912248532/index.html","61e1e386f0ef7b32f03416e59fa5d6a2"],["/posts/952207792/index.html","ccbe6c3b58ce7b979a68a1233c9b599f"],["/posts/966087953/index.html","0aad42f24f5c9af4450e97b07ff66986"],["/search.xml","0536ad39c5fd18ad2cd600ad11a57295"],["/sitemap.xml","1e2c684174285afb9d5e472b02724a7a"],["/sw-register.js","392a431a58dced54bd9fa8ae61509c77"],["/tags/AI/index.html","b5e8dd3532eaf10740b32f9c8006cd14"],["/tags/Cloudflare/index.html","d2e082b188c2d8b0be0c2654761e6fb1"],["/tags/GitHub/index.html","053c4244c47fe622216f9343eb2185ca"],["/tags/Hexo/index.html","7b7bf22163e2c8eb9503e4777e0011fd"],["/tags/Linux/index.html","6a717d3ed149b07df9dd5354e2b3457b"],["/tags/Sora/index.html","be21c73ac01c4d126a9a10c6d25f4db4"],["/tags/Vercel/index.html","c0fbace6b4119c5f79e72ccceba4eceb"],["/tags/Waline/index.html","19a4ddaac221ddf986e7ce2a86cbcc14"],["/tags/git/index.html","e751d118f8a7e268f20c7c49374e970d"],["/tags/index.html","76c9906cdf5b108794b92a084d86ef5d"],["/tags/nodejs/index.html","e90bd7745905c6e0181376c37cb820d4"],["/tags/php/index.html","c9e4e1604029b95f0339004d098c9e97"],["/tags/vim/index.html","1a59b0855dfcd039dfa801a6a3f01c6f"],["/tags/web/index.html","3bac1f51303b96bdbe110e7885afc93d"],["/tags/代码/index.html","0b92cbe0344abcd594a7e75941ce96b9"],["/tags/前端/index.html","3e2da5ad9873e955050339dfff5439a3"],["/tags/命令/index.html","97b441b055a902b1b7cbfc26b5d63f33"],["/tags/域名/index.html","aa187276194579ede2a3afb0b055d19e"],["/tags/技巧/index.html","affeb3880adff7ec99ae31640c11677b"],["/tags/折腾/index.html","381098553400b37571e23b9d4d4639fd"],["/tags/摘录/index.html","278f43fe2e08d89658c1e6823fac2da9"],["/tags/操作系统/index.html","8877b19049c42e30c68f11d5b7b14e5b"],["/tags/生活/index.html","d02614ffb75d27dfca13cc38dc59f6e9"],["/tags/硬件/index.html","e493110c37bfed5a6c958ffcec505155"],["/tags/科技/index.html","a64e778c91bf95755c6707604e3bd9eb"],["/tags/程序/index.html","cee5894c4b3f0301b089b2a808731853"],["/tags/网络安全/index.html","7eda57ec08171c458370ed99d428bd92"],["/tags/评论/index.html","b6dfabcd874fbf2af1ad2169dfc29d16"],["/tags/转载/index.html","c894ae2a5a22c68ce7c5173e269c40c1"],["/tags/随写/index.html","14903881a55c3d2158fd43451cb73876"],["/tags/音乐/index.html","7aae1e7a174236da29f56d5cc93acd11"]];
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
