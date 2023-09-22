/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","2ddae2d7f293da39679ab65be6548511"],["/archives/2021/06/index.html","3f55e05f6cdacc73841e020afb59cba6"],["/archives/2021/07/index.html","cf0f324edd90ba0cf08f228dc42ec646"],["/archives/2021/index.html","ab35abb6df45260021ce248dbe850d9d"],["/archives/2022/07/index.html","6bcac53de0474bcf91b93c470f9717c9"],["/archives/2022/09/index.html","5bb9efccc10a26218a9a12bae89644a5"],["/archives/2022/index.html","07f9f12ae34d99d0cad9cc884ab5e8b2"],["/archives/2023/07/index.html","a468ce9c161de07cba1e39506a11e3e8"],["/archives/2023/07/page/2/index.html","d8081adaeef4c109e0689fac00824551"],["/archives/2023/08/index.html","713c26506b9ae8daa4246e55b973d731"],["/archives/2023/08/page/2/index.html","55bf6a60f885f45aa39f0cf4b4a806a1"],["/archives/2023/09/index.html","4bc6cc6967c40873ad795e6f7fbecbab"],["/archives/2023/index.html","c0b6382c4db84b74c881c1eb596e4296"],["/archives/2023/page/2/index.html","cd14da46fc2ffe598efcd12a02b04274"],["/archives/2023/page/3/index.html","d6c90e9623a229231647ac5b26dadc2c"],["/archives/2023/page/4/index.html","38cbe4d88110c92b41219e37c3207680"],["/archives/index.html","7fcf08e1f5969001cf13091653381871"],["/archives/page/2/index.html","3288b8432208e240a577d7b1c34661bd"],["/archives/page/3/index.html","3c9c0757bb7d4aa3421dc591d82dc11b"],["/archives/page/4/index.html","4792dd6f8292168c7a47c99de88d378a"],["/archives/page/5/index.html","42a846346b02eed979b8d1379a05a9cf"],["/categories/index.html","dc830da072f3939ed47e5ad3210ec1b5"],["/categories/乱评/index.html","589eeb8f7e0f97988b3be1fa8ac4e11e"],["/categories/交流/index.html","45ae5c14f6a8fe3087e1a5d2b711499e"],["/categories/分享/index.html","5b6f0495f24144accc0a911df17cfb75"],["/categories/摘录/index.html","faffdb22ddd97d8fe563fb86f23e89a1"],["/categories/整活/index.html","869333a3e9c378bda592bb09633bd102"],["/categories/日志/index.html","83ccbd83cc27a374b17d65e47e5f381f"],["/categories/科技/index.html","ba1a5389342358f73fe0d5815bb9d653"],["/categories/科技/page/2/index.html","98f70ba74a1705c14756742152de6db4"],["/categories/随写/index.html","c808d3bda51e191bd3e2dbea95b15f27"],["/categories/随写/page/2/index.html","b788927b3e354a2661306265159f15a6"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","677fc68b0c971cb7e6afba808b8a1ef5"],["/css/loading_style_1.css","378d0686ce9b2d89c74ddbfade573dd2"],["/css/loading_style_2.css","9b8453192410b235fa191a5db76744d7"],["/css/pace.css","c33d9b8903ef0268ef7227feac76c42b"],["/css/runtime.css","a96df2424b5918e60b3362a2a4e7bc3a"],["/css/sakurink.css","f898565b730b49b5fe3af8cacc52371c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/editormd/css/editormd.min.css","3e883bc846a595be9d3b3ae7474a0610"],["/editormd/fonts/editormd-logo.eot","ce4bcd0fb98aea6ce2b921752ac2c6ac"],["/editormd/fonts/editormd-logo.svg","53ea80e2163822c872dd3d63d283eee6"],["/editormd/fonts/editormd-logo.ttf","3ce5baf8e6d4064ff5fcd4f159ee224a"],["/editormd/fonts/editormd-logo.woff","1599e9e1435acb162840d3d4459b6d68"],["/editormd/fonts/fontawesome-webfont.eot","f7c2b4b747b1a225eb8dee034134a1b0"],["/editormd/fonts/fontawesome-webfont.svg","2980083682e94d33a66eef2e7d612519"],["/editormd/fonts/fontawesome-webfont.ttf","706450d7bba6374ca02fe167d86685cb"],["/editormd/fonts/fontawesome-webfont.woff","d9ee23d59d0e0e727b51368b458a0bff"],["/editormd/images/loading.gif","c929501e134da2f0d16f34a8ebbde90b"],["/editormd/images/loading@2x.gif","695405a980720cd34ccf87e2f69ebc28"],["/editormd/images/loading@3x.gif","65eacf611a66b2de59a032b05daf962c"],["/editormd/index.html","fde5583e74e46645ad18d98cbccda41b"],["/editormd/js/editormd.js","11372176d60c2f6355804987e5865658"],["/editormd/js/jquery.min.js","5233829736d323b956873bd9ddc838ee"],["/editormd/lib/codemirror/addon/comment/comment.js","e1233ff2b2428c5078ecfafbea23b7a0"],["/editormd/lib/codemirror/addon/comment/continuecomment.js","2bad52d5a0b57d8f43e0e5b90bb25725"],["/editormd/lib/codemirror/addon/dialog/dialog.css","910c1893a275073be1f80f32b77cd5a4"],["/editormd/lib/codemirror/addon/dialog/dialog.js","5e20ba47d5cad32bd1fc902f95b16193"],["/editormd/lib/codemirror/addon/display/fullscreen.css","1a278e72b51528270f8ce9ec991929a1"],["/editormd/lib/codemirror/addon/display/fullscreen.js","fb86184c4fb36398188f2199fd28f167"],["/editormd/lib/codemirror/addon/display/panel.js","e2b9405b9f9de54ccc4e6ebb243ee38f"],["/editormd/lib/codemirror/addon/display/placeholder.js","a406cc1590d2683a0114de4784f5421d"],["/editormd/lib/codemirror/addon/display/rulers.js","cd03669d62d1ea32c1d862d947b8b30c"],["/editormd/lib/codemirror/addon/edit/closebrackets.js","1e89a2fc697ce780f1f43516f884c278"],["/editormd/lib/codemirror/addon/edit/closetag.js","34bce5a9d67d751ab0e4a0309f6a8b73"],["/editormd/lib/codemirror/addon/edit/continuelist.js","353e8a411baea91c24edee06128b9698"],["/editormd/lib/codemirror/addon/edit/matchbrackets.js","94c58e98823144e56932aa2611c51dff"],["/editormd/lib/codemirror/addon/edit/matchtags.js","545127ffedea5d77c0f68c809c75c5b6"],["/editormd/lib/codemirror/addon/edit/trailingspace.js","650f095b187881451b0166d16ffd4091"],["/editormd/lib/codemirror/addon/fold/brace-fold.js","13f986f14247d953551bdfe93b27699e"],["/editormd/lib/codemirror/addon/fold/comment-fold.js","5e5bdebcd4acb30c3aed47164e2af6b3"],["/editormd/lib/codemirror/addon/fold/foldcode.js","76c21fd4c3f14d1a61765324ec82266b"],["/editormd/lib/codemirror/addon/fold/foldgutter.css","38bb68770b6f7ebaa7adea770a68e0b1"],["/editormd/lib/codemirror/addon/fold/foldgutter.js","70f89ec8fd4f96285fed2098e1660f0c"],["/editormd/lib/codemirror/addon/fold/indent-fold.js","b17f35bdd388f737113271b9e9070ea3"],["/editormd/lib/codemirror/addon/fold/markdown-fold.js","c8783b56c820030045a57f291660ea20"],["/editormd/lib/codemirror/addon/fold/xml-fold.js","f173dec3ccb5d6df5f37b9a99ecc438a"],["/editormd/lib/codemirror/addon/hint/anyword-hint.js","00b7028e5978a14b543f99e04739fd10"],["/editormd/lib/codemirror/addon/hint/css-hint.js","e62b03d88462a74f5a85580393653e2b"],["/editormd/lib/codemirror/addon/hint/html-hint.js","6b398a6ef3473b9f889092495fcc1545"],["/editormd/lib/codemirror/addon/hint/javascript-hint.js","8febf4d6664e133fac9da1da672564cd"],["/editormd/lib/codemirror/addon/hint/show-hint.css","630e320a614e7732f6ce1bf37147f27f"],["/editormd/lib/codemirror/addon/hint/show-hint.js","b2bd569d811254591c42c8f9d4a210e5"],["/editormd/lib/codemirror/addon/hint/sql-hint.js","a5b089ff87a9d3f9f8758aa832a99f9e"],["/editormd/lib/codemirror/addon/hint/xml-hint.js","21d019d58516804262957d8879576908"],["/editormd/lib/codemirror/addon/lint/coffeescript-lint.js","a867c61ab04b4309206ba371bdde9fb7"],["/editormd/lib/codemirror/addon/lint/css-lint.js","fd09f81d97cf3eb681cc5742d76ec47f"],["/editormd/lib/codemirror/addon/lint/javascript-lint.js","434609db212319c5cdfa6844d88c30f8"],["/editormd/lib/codemirror/addon/lint/json-lint.js","49afe4d1a791c115de21553c28f1a6cf"],["/editormd/lib/codemirror/addon/lint/lint.css","5f5d243947ec3ae1b8f37d85f0fa2a2d"],["/editormd/lib/codemirror/addon/lint/lint.js","fb480be60a940a1c54bc22be4a53df13"],["/editormd/lib/codemirror/addon/lint/yaml-lint.js","117815f724aa2c3d671801ccedaa86ac"],["/editormd/lib/codemirror/addon/merge/merge.css","842786722589d900ffaf32652e89dac9"],["/editormd/lib/codemirror/addon/merge/merge.js","5ceff36e1dbe2497a2aad575c8fd3f7f"],["/editormd/lib/codemirror/addon/mode/loadmode.js","bc3c29fecceff0785b086b6e1c6f6b7c"],["/editormd/lib/codemirror/addon/mode/multiplex.js","b5c73e94185050bef0170420d0f53fd7"],["/editormd/lib/codemirror/addon/mode/multiplex_test.js","6e9c20d5c89c34f9245e1e346edc027b"],["/editormd/lib/codemirror/addon/mode/overlay.js","7abff7c501c40008fc541414e803d954"],["/editormd/lib/codemirror/addon/mode/simple.js","b3f550bd7554a29d6929e20aba3456ac"],["/editormd/lib/codemirror/addon/runmode/colorize.js","b0d93d54ee9bf76b246ea7cae39d6e75"],["/editormd/lib/codemirror/addon/runmode/runmode-standalone.js","54b1bc5448bbdfb53fdb3cbdc6740ef7"],["/editormd/lib/codemirror/addon/runmode/runmode.js","3266201540178df80d191c73bbd88152"],["/editormd/lib/codemirror/addon/runmode/runmode.node.js","dcc7299595da64717ea04e48366a8777"],["/editormd/lib/codemirror/addon/scroll/annotatescrollbar.js","02ecc6ff32d70e2de7a93b936709d508"],["/editormd/lib/codemirror/addon/scroll/scrollpastend.js","68e06dd3d77a87661790bbb7ebe2f080"],["/editormd/lib/codemirror/addon/scroll/simplescrollbars.css","0352ba51fd6a422fe6cc44925e33ad88"],["/editormd/lib/codemirror/addon/scroll/simplescrollbars.js","aea96df34053a015d0cee582c9853dfb"],["/editormd/lib/codemirror/addon/search/match-highlighter.js","b59268b1e4b6872df69110776d7f7934"],["/editormd/lib/codemirror/addon/search/matchesonscrollbar.css","00ea2770c568a848190bcf52e4241276"],["/editormd/lib/codemirror/addon/search/matchesonscrollbar.js","5f8fd58c2d232399a9e2918bd670e9bb"],["/editormd/lib/codemirror/addon/search/search.js","4db460ce020efb966a33c275ca90ccf2"],["/editormd/lib/codemirror/addon/search/searchcursor.js","fc5574a779ef286d12d8d97f33ec48b6"],["/editormd/lib/codemirror/addon/selection/active-line.js","c7c0cb21951ca1ba74837a74bbcd4b47"],["/editormd/lib/codemirror/addon/selection/mark-selection.js","49df440e41a6f54264bce4f7ed7d7d05"],["/editormd/lib/codemirror/addon/selection/selection-pointer.js","394ed7c792ed1954c6473d72e17156f9"],["/editormd/lib/codemirror/addon/tern/tern.css","8f36b875b840601834dfed2b69de0078"],["/editormd/lib/codemirror/addon/tern/tern.js","da321976dccb6d42a8ca9569fce6c18f"],["/editormd/lib/codemirror/addon/tern/worker.js","6f48d3844db9cac6b959584d65e53afd"],["/editormd/lib/codemirror/addon/wrap/hardwrap.js","0c70cedbc3ecc9474b11a24e23fe7b16"],["/editormd/lib/codemirror/addons.min.js","dd1092f4e1dc24f20f2db3830414a415"],["/editormd/lib/codemirror/codemirror.min.css","1654b526ea4864abe4c78a2739664c17"],["/editormd/lib/codemirror/codemirror.min.js","52f2e1b6fd11dc3a0e70fc92197494aa"],["/editormd/lib/codemirror/lib/codemirror.css","b936cfec11de3bf379d42db2ecfd11f1"],["/editormd/lib/codemirror/lib/codemirror.js","db811826339d980ab172e6a01e8b0811"],["/editormd/lib/codemirror/mode/apl/apl.js","d8439d00c2ae45de39a77f7d4cb93247"],["/editormd/lib/codemirror/mode/apl/index.html","f75ceec0259b0fe9793e8f3e56552da6"],["/editormd/lib/codemirror/mode/asterisk/asterisk.js","fca3456f0cc0bcabcfae4dd2c47fc0cf"],["/editormd/lib/codemirror/mode/asterisk/index.html","802879272cbb4686a9d4dd4f57c58905"],["/editormd/lib/codemirror/mode/clike/clike.js","09795a457900698f8e997dc1f5ce0673"],["/editormd/lib/codemirror/mode/clike/index.html","728b065e155e47d8368fa859d967e6dc"],["/editormd/lib/codemirror/mode/clike/scala.html","f9f3301b645181ec9468d80377a00967"],["/editormd/lib/codemirror/mode/clojure/clojure.js","1fa0e99d570cd92e5c8ef7bbd46a9eb6"],["/editormd/lib/codemirror/mode/clojure/index.html","f4d13f6d0ba01d4fcf6a2aa3ffa5780b"],["/editormd/lib/codemirror/mode/cobol/cobol.js","b00a014eb678fa5a97309732c9d8e410"],["/editormd/lib/codemirror/mode/cobol/index.html","064eea8a45cab18e6782f422f7ead795"],["/editormd/lib/codemirror/mode/coffeescript/coffeescript.js","0e5610e38633c1b9932d6b72949d7510"],["/editormd/lib/codemirror/mode/coffeescript/index.html","006ea44331bd7debe685e42c0beea1e8"],["/editormd/lib/codemirror/mode/commonlisp/commonlisp.js","5fde34368a97b348386c16b6bd55f3c4"],["/editormd/lib/codemirror/mode/commonlisp/index.html","123494036fc704ef421b91e6de5611e2"],["/editormd/lib/codemirror/mode/css/css.js","7b4b4a9dc4ee409e24fe00bf7fa85e6d"],["/editormd/lib/codemirror/mode/css/index.html","e15d40b9ea9943820e4ac5506ff0a168"],["/editormd/lib/codemirror/mode/css/less.html","759c1c5baac1322c9edcd063aff2b84e"],["/editormd/lib/codemirror/mode/css/less_test.js","a06869e83247f2a85153902498e9e198"],["/editormd/lib/codemirror/mode/css/scss.html","3810643e50736ef69e6d067eb6657979"],["/editormd/lib/codemirror/mode/css/scss_test.js","c2adc306cbf77581fba085dc2d9a1b29"],["/editormd/lib/codemirror/mode/css/test.js","32e64016ecdc154b4dfffcc94894a89f"],["/editormd/lib/codemirror/mode/cypher/cypher.js","f319638546156a94261498ca4b9737f1"],["/editormd/lib/codemirror/mode/cypher/index.html","1943b99430ea9f1badf6c09ff08b7f01"],["/editormd/lib/codemirror/mode/d/d.js","fdcb6c7db0ec104135247533a7e0827a"],["/editormd/lib/codemirror/mode/d/index.html","4fb20b57093e9669e2440d5b8555df34"],["/editormd/lib/codemirror/mode/dart/dart.js","995ed740ec37d27ff8ac7268a8905420"],["/editormd/lib/codemirror/mode/dart/index.html","4108e63cb7d332fe73ef9cc4b451c1f9"],["/editormd/lib/codemirror/mode/diff/diff.js","438ffb056eb84f0d18d3c7c60ac9f6bb"],["/editormd/lib/codemirror/mode/diff/index.html","8a68f8733b0d38bc50dbefcf2694f209"],["/editormd/lib/codemirror/mode/django/django.js","72c04bf04a886db18ed5530b39b0956f"],["/editormd/lib/codemirror/mode/django/index.html","1fdfc80e9b725da66b4cb8cbbe04a86a"],["/editormd/lib/codemirror/mode/dockerfile/dockerfile.js","e50a59c3edb1edb1effb6ad55b6d362a"],["/editormd/lib/codemirror/mode/dockerfile/index.html","7df66aa9794eb5bbff98e193269f4a76"],["/editormd/lib/codemirror/mode/dtd/dtd.js","5f9ab8edf9dc8d38f9326297ad7fb7c5"],["/editormd/lib/codemirror/mode/dtd/index.html","7bd8dc3e4818bf9a15b0f731dc552db3"],["/editormd/lib/codemirror/mode/dylan/dylan.js","66adf11bcd8b5e3bf74145cc94040dcb"],["/editormd/lib/codemirror/mode/dylan/index.html","c1872158f4eba49ceb626fce662f9de3"],["/editormd/lib/codemirror/mode/ebnf/ebnf.js","0eacd8e18beb9d0d94a73f1b99bd79ae"],["/editormd/lib/codemirror/mode/ebnf/index.html","2417f2f2f6db4ac560f2fb4f8d873116"],["/editormd/lib/codemirror/mode/ecl/ecl.js","4e2394ef77c2d84158454b1b952a6e9f"],["/editormd/lib/codemirror/mode/ecl/index.html","9f38e4ff0b39f194ff1bee0e5567b7a1"],["/editormd/lib/codemirror/mode/eiffel/eiffel.js","acf73e549cc3cac3eda19a638a0be5fe"],["/editormd/lib/codemirror/mode/eiffel/index.html","307d5f87d1d3baf3603d0e6dad95eabb"],["/editormd/lib/codemirror/mode/erlang/erlang.js","217b87e4e1007f51c303e07bfcaad185"],["/editormd/lib/codemirror/mode/erlang/index.html","50f7dfc54cd9d330be930c18ebd3ec68"],["/editormd/lib/codemirror/mode/forth/forth.js","838045665a6011738ac674af8c14b02a"],["/editormd/lib/codemirror/mode/forth/index.html","d66e32464f9f8287484c0764ba2f9d66"],["/editormd/lib/codemirror/mode/fortran/fortran.js","fc0c8f22c7e51dc0e4da9d1f009be593"],["/editormd/lib/codemirror/mode/fortran/index.html","688dd7d2162595ff503ec6fa667c7fdc"],["/editormd/lib/codemirror/mode/gas/gas.js","27904185929367cf717759697be42ef7"],["/editormd/lib/codemirror/mode/gas/index.html","f3d717d951ec14b2b9405da7390547d1"],["/editormd/lib/codemirror/mode/gfm/gfm.js","3e1d34de10ca7dba77d6843f893435bb"],["/editormd/lib/codemirror/mode/gfm/index.html","5f1a949a37233cacfd63302a3f3b8a8c"],["/editormd/lib/codemirror/mode/gfm/test.js","b8975f6cee8bb72da42fedf9df0b0828"],["/editormd/lib/codemirror/mode/gherkin/gherkin.js","082e6fef99e9bdafa36c15d0d8b31a24"],["/editormd/lib/codemirror/mode/gherkin/index.html","92e2f4054dac0e2be33387756207af54"],["/editormd/lib/codemirror/mode/go/go.js","beeb068eaaa804469b773d0a3f9fc34a"],["/editormd/lib/codemirror/mode/go/index.html","bcb4b55f113e5109dd4fe8523fcd9d91"],["/editormd/lib/codemirror/mode/groovy/groovy.js","4f97d9e79258b2a380fcda2daf85afd6"],["/editormd/lib/codemirror/mode/groovy/index.html","3446eccc9163bbd314833bbc8de2e091"],["/editormd/lib/codemirror/mode/haml/haml.js","c0c0c8e0a3ace47a372d91beb3fe2ead"],["/editormd/lib/codemirror/mode/haml/index.html","e91a20ff061fb102b86b9afa0a8b6fdd"],["/editormd/lib/codemirror/mode/haml/test.js","b4d49d07713e67c94e9cced6f5577595"],["/editormd/lib/codemirror/mode/haskell/haskell.js","2a4d3a16ed5b1c9880d22cb1e3f7334a"],["/editormd/lib/codemirror/mode/haskell/index.html","841f259812d50f9b8fb71c4968c5536e"],["/editormd/lib/codemirror/mode/haxe/haxe.js","566276b12c15076e75010c1489806392"],["/editormd/lib/codemirror/mode/haxe/index.html","b73732ebcc55d4dd0973be920c970d37"],["/editormd/lib/codemirror/mode/htmlembedded/htmlembedded.js","5aa5d89f3ca53a988a8be20d608e6234"],["/editormd/lib/codemirror/mode/htmlembedded/index.html","fa518fc6ccd409ece91931f50caa221e"],["/editormd/lib/codemirror/mode/htmlmixed/htmlmixed.js","b8f2528cde883f78ede34ce9487c616e"],["/editormd/lib/codemirror/mode/htmlmixed/index.html","757e635618703275eced97323ccbe024"],["/editormd/lib/codemirror/mode/http/http.js","2fe75c60a2ff27c8a45dedd31505718c"],["/editormd/lib/codemirror/mode/http/index.html","49c1f8b9cc40096829ab01037aaa7a31"],["/editormd/lib/codemirror/mode/idl/idl.js","9bd11d231265ebb168d9d6aa0526a566"],["/editormd/lib/codemirror/mode/idl/index.html","d3b4af563a8ec05c9b3d50e614632027"],["/editormd/lib/codemirror/mode/index.html","9ad9fd83de76e840accdbaa426041427"],["/editormd/lib/codemirror/mode/jade/index.html","9fcd7174dc72ddba2d2a347b5111c61d"],["/editormd/lib/codemirror/mode/jade/jade.js","c12fbc47869b9b962fa1be11899c5567"],["/editormd/lib/codemirror/mode/javascript/index.html","963b354fadfdc4790d9308b73bf7b551"],["/editormd/lib/codemirror/mode/javascript/javascript.js","a4481395cdeecee5924f763410ede76a"],["/editormd/lib/codemirror/mode/javascript/json-ld.html","a2a5069194b78b6b5523cace263cab06"],["/editormd/lib/codemirror/mode/javascript/test.js","59f3e3d1e748e7ce1bec96fa24f3ddf2"],["/editormd/lib/codemirror/mode/javascript/typescript.html","76c2ffb883a133aa0fc5cc75ec0c56f5"],["/editormd/lib/codemirror/mode/jinja2/index.html","13a932b489a9de6117326d62a526caba"],["/editormd/lib/codemirror/mode/jinja2/jinja2.js","5ada0cebcf8e88aafa8ed40eb7753dd1"],["/editormd/lib/codemirror/mode/julia/index.html","69db273ff7565bb4dd261c774cf95a40"],["/editormd/lib/codemirror/mode/julia/julia.js","14633b9bdd320d6ddc5eea32e819a4b6"],["/editormd/lib/codemirror/mode/kotlin/index.html","c8833ecec83477cf6a3d8286e8f9d3a7"],["/editormd/lib/codemirror/mode/kotlin/kotlin.js","9118d98da463f48fbf7000f5da01d2b6"],["/editormd/lib/codemirror/mode/livescript/index.html","d809c273718a08beed30d4147aebf4cc"],["/editormd/lib/codemirror/mode/livescript/livescript.js","43edd602ce05e658cac5f26cf0bd1638"],["/editormd/lib/codemirror/mode/lua/index.html","3e4d23bb50b03985e935ca3d79208524"],["/editormd/lib/codemirror/mode/lua/lua.js","e403b8f8a9fbbde22223d620c9dff8d6"],["/editormd/lib/codemirror/mode/markdown/index.html","a1689599daa1ad36a624012124577f8c"],["/editormd/lib/codemirror/mode/markdown/markdown.js","7bd2d26d6a0f1b1405ae492fbe3d8f6c"],["/editormd/lib/codemirror/mode/markdown/test.js","d809d8309774b4826493bf3f66114710"],["/editormd/lib/codemirror/mode/meta.js","358f2bbcd1b89dbaad6b6a3566809501"],["/editormd/lib/codemirror/mode/mirc/index.html","397f9228f5df840a259e47439c33f1a2"],["/editormd/lib/codemirror/mode/mirc/mirc.js","96a95b10651c7f9ef235415b66346ebd"],["/editormd/lib/codemirror/mode/mllike/index.html","757f416295aa80b3743435181aa34594"],["/editormd/lib/codemirror/mode/mllike/mllike.js","bf30e9ce947e683689b7343437fbcb3a"],["/editormd/lib/codemirror/mode/modelica/index.html","66b542bea9238c0c96615c12e16cceea"],["/editormd/lib/codemirror/mode/modelica/modelica.js","2b02f6379c51ded45a97f2f71f6706fb"],["/editormd/lib/codemirror/mode/nginx/index.html","107ce27ec8130699cc4022890a95e660"],["/editormd/lib/codemirror/mode/nginx/nginx.js","aa3cdfb38cb0fcfdd0bf3edf17ccba20"],["/editormd/lib/codemirror/mode/ntriples/index.html","2230fc8b98c6716ca2ff8fccdc9d3c8b"],["/editormd/lib/codemirror/mode/ntriples/ntriples.js","e31a7508dbfc5d15f6aec9d0e74c66f1"],["/editormd/lib/codemirror/mode/octave/index.html","1cc99bf922d756f3fbea053a05bf7096"],["/editormd/lib/codemirror/mode/octave/octave.js","36860d7a4ff4c251d23193b442652257"],["/editormd/lib/codemirror/mode/pascal/index.html","c3366ec378c3466f110a2dde57f9753f"],["/editormd/lib/codemirror/mode/pascal/pascal.js","f182e0f7d1a8780e58c05469f7c1a672"],["/editormd/lib/codemirror/mode/pegjs/index.html","30d932dc7b7bad5be78b2292de8cea64"],["/editormd/lib/codemirror/mode/pegjs/pegjs.js","39569ff8056a49e1464169e71c05338d"],["/editormd/lib/codemirror/mode/perl/index.html","c989e711a037eb8f0555f6fe17345ffa"],["/editormd/lib/codemirror/mode/perl/perl.js","9ec29d75dcc39067f2d9a0fb2317bfb9"],["/editormd/lib/codemirror/mode/php/index.html","48133a61cf0a8b59ae0d79738e96ca34"],["/editormd/lib/codemirror/mode/php/php.js","4d9d5322e89059b27b64ffbb098364d4"],["/editormd/lib/codemirror/mode/php/test.js","1d09cd4126c747fe6f2322bdba95da51"],["/editormd/lib/codemirror/mode/pig/index.html","83dfbfb7b9526658cfcc7fb5bb4bd0ed"],["/editormd/lib/codemirror/mode/pig/pig.js","aea534f73778d901c3d7b7a2de9c71ef"],["/editormd/lib/codemirror/mode/properties/index.html","9e56927e05128e619748e2b8735fe78d"],["/editormd/lib/codemirror/mode/properties/properties.js","28e3372eced96bcec75fdd5b5feef022"],["/editormd/lib/codemirror/mode/puppet/index.html","679c1f42f19df213649d5879d4e1aa07"],["/editormd/lib/codemirror/mode/puppet/puppet.js","9d7de28658390529758650cdd525b770"],["/editormd/lib/codemirror/mode/python/index.html","52b1443604f6660ff12307bd9a03f48b"],["/editormd/lib/codemirror/mode/python/python.js","1437195b42c866a6e9c6583bb0546f01"],["/editormd/lib/codemirror/mode/q/index.html","b5064235bd34698b5c909b7930ca1424"],["/editormd/lib/codemirror/mode/q/q.js","bf67fc777802a4c78845ad6e75da4a0b"],["/editormd/lib/codemirror/mode/r/index.html","b893f92a4da4d2fcf6c340abb8251e67"],["/editormd/lib/codemirror/mode/r/r.js","5f6bb647957f4ce95838408889e4dc09"],["/editormd/lib/codemirror/mode/rpm/changes/index.html","fa396483b7ade73b4727bad6aa027a35"],["/editormd/lib/codemirror/mode/rpm/index.html","d7ccc36ed6fc32c8cfac6b9b356447fc"],["/editormd/lib/codemirror/mode/rpm/rpm.js","d99c239ecbbf6643760055a639ebe31b"],["/editormd/lib/codemirror/mode/rst/index.html","59a2c05e9ade8103721986297b6df1bb"],["/editormd/lib/codemirror/mode/rst/rst.js","13be7e4585ffdc94be008f5b68c60352"],["/editormd/lib/codemirror/mode/ruby/index.html","32d10c9933f77c19d30f79b883bf3dc8"],["/editormd/lib/codemirror/mode/ruby/ruby.js","3aca2e83affce042b9e76d385186328c"],["/editormd/lib/codemirror/mode/ruby/test.js","644313ffd916604577e26445c21c62c2"],["/editormd/lib/codemirror/mode/rust/index.html","95530ae49b880ee6a87c3a733fef3b00"],["/editormd/lib/codemirror/mode/rust/rust.js","94264c4ab2b8171a932b17fe437aa15f"],["/editormd/lib/codemirror/mode/sass/index.html","7fb309a8e253bbbad4cebde3388684c1"],["/editormd/lib/codemirror/mode/sass/sass.js","a892a852b60acc08127ef4c5095b5a71"],["/editormd/lib/codemirror/mode/scheme/index.html","ac8e8c874ba01b2dbdf4c95770ee4703"],["/editormd/lib/codemirror/mode/scheme/scheme.js","a387d3a97c172b0cd2e12116586f3164"],["/editormd/lib/codemirror/mode/shell/index.html","c70f912f1e6c3ac1ed065337cdd2e679"],["/editormd/lib/codemirror/mode/shell/shell.js","cef30158aa8c608686f4a3a96366f95e"],["/editormd/lib/codemirror/mode/shell/test.js","a80a759c31f32d626d7f7f42fd180181"],["/editormd/lib/codemirror/mode/sieve/index.html","bf4beb64c15bc64c38fc7f550a25003e"],["/editormd/lib/codemirror/mode/sieve/sieve.js","8a0ff5ae00f5dae1b6bc0b11924a570a"],["/editormd/lib/codemirror/mode/slim/index.html","5c45fc3cd7ddda95da7c58656922677a"],["/editormd/lib/codemirror/mode/slim/slim.js","f56364810cddd4f374dbdc4ad066dd08"],["/editormd/lib/codemirror/mode/slim/test.js","68b004270db91e961ae6ed1376304fd1"],["/editormd/lib/codemirror/mode/smalltalk/index.html","7208b49ecc148c252df7dd0c1854c9c4"],["/editormd/lib/codemirror/mode/smalltalk/smalltalk.js","180c8b182115d94ed71a9ab40854b0a3"],["/editormd/lib/codemirror/mode/smarty/index.html","ec0ba9b66ed2716c33cf65bea943a94c"],["/editormd/lib/codemirror/mode/smarty/smarty.js","753da7add1560884ca4b9fe05036b461"],["/editormd/lib/codemirror/mode/smartymixed/index.html","fa7dfe90f4c376e194cb9fa2b0bcd456"],["/editormd/lib/codemirror/mode/smartymixed/smartymixed.js","5855bd4ee233ab2997c719f49858c17b"],["/editormd/lib/codemirror/mode/solr/index.html","8db35aeeaed02e6289b2c9ba65fe248c"],["/editormd/lib/codemirror/mode/solr/solr.js","0e0beefbcb3266ab8f4d734ecdd8058d"],["/editormd/lib/codemirror/mode/soy/index.html","0ee173daa4a44829c850dba6ff338c68"],["/editormd/lib/codemirror/mode/soy/soy.js","2ae03c4b0da820244827aebd79983a1e"],["/editormd/lib/codemirror/mode/sparql/index.html","794e9333a483f57698e7bb9b8d694120"],["/editormd/lib/codemirror/mode/sparql/sparql.js","060f20aa8bbe42787ae611d182577048"],["/editormd/lib/codemirror/mode/spreadsheet/index.html","b3daa22e9ff711ccb5411559d70c4d36"],["/editormd/lib/codemirror/mode/spreadsheet/spreadsheet.js","85807c656c436b93668cdc048c0604d1"],["/editormd/lib/codemirror/mode/sql/index.html","1ffbfc6b6f0a2a42a4f336f87077b7f6"],["/editormd/lib/codemirror/mode/sql/sql.js","e9af9e8c0e22c6ebe4c074603d6b8392"],["/editormd/lib/codemirror/mode/stex/index.html","d576e9a3c1a93505a6fce90e8d9f7d1d"],["/editormd/lib/codemirror/mode/stex/stex.js","ed911468e5c8aabdda5cebf676f71015"],["/editormd/lib/codemirror/mode/stex/test.js","0ec9215dffa83a34a69f9625a18a6f2c"],["/editormd/lib/codemirror/mode/stylus/index.html","f13b30a9b6f0307e6f518fbe400afba5"],["/editormd/lib/codemirror/mode/stylus/stylus.js","6181c320e022fb6db56b562346222b56"],["/editormd/lib/codemirror/mode/tcl/index.html","422a864af4dde07c3fd8bf78acfed1aa"],["/editormd/lib/codemirror/mode/tcl/tcl.js","ac761776989a6dc35bd0c7124684529b"],["/editormd/lib/codemirror/mode/textile/index.html","f1211ece844666451969afddb8d03dee"],["/editormd/lib/codemirror/mode/textile/test.js","92a1f30ff38225045c3dab02873c5fae"],["/editormd/lib/codemirror/mode/textile/textile.js","fe97a6a4f0f72fe2b51a5b397da7efa0"],["/editormd/lib/codemirror/mode/tiddlywiki/index.html","bdfac7838fc6883c350541bd1e502ab6"],["/editormd/lib/codemirror/mode/tiddlywiki/tiddlywiki.css","e745b2150c79295cfb93a210d34f2587"],["/editormd/lib/codemirror/mode/tiddlywiki/tiddlywiki.js","1f2b45445110b327844e98181d24891e"],["/editormd/lib/codemirror/mode/tiki/index.html","217109977e270f0dd2b426d30d23a57a"],["/editormd/lib/codemirror/mode/tiki/tiki.css","73b88640ab2cafbb97f237082bb79deb"],["/editormd/lib/codemirror/mode/tiki/tiki.js","bbc431e55b6cf248cfb0421d0a939ebe"],["/editormd/lib/codemirror/mode/toml/index.html","ac329dc7c2b4607f3fdacd6da23a86b8"],["/editormd/lib/codemirror/mode/toml/toml.js","1a91538a07d128e54c4e6283b82c7869"],["/editormd/lib/codemirror/mode/tornado/index.html","fdfb3621639ac1d72527eb54c3cacd7c"],["/editormd/lib/codemirror/mode/tornado/tornado.js","613ff316b9ba95ca774865c4dc51c935"],["/editormd/lib/codemirror/mode/turtle/index.html","320c3b1d94decb9abbb2b84360b7e5c0"],["/editormd/lib/codemirror/mode/turtle/turtle.js","72c7d94af4e4513f60bb73440208dc6f"],["/editormd/lib/codemirror/mode/vb/index.html","1b5b60b6835e1b61cc92b98494678527"],["/editormd/lib/codemirror/mode/vb/vb.js","cf25c41eda8c30c468018719eb3c6701"],["/editormd/lib/codemirror/mode/vbscript/index.html","0adacc9400b8b68ff0576970b84ee875"],["/editormd/lib/codemirror/mode/vbscript/vbscript.js","c5509e4b1f2ccd01aae242c86d0acc65"],["/editormd/lib/codemirror/mode/velocity/index.html","24465943d75132345a1ea66a5f1ec3a8"],["/editormd/lib/codemirror/mode/velocity/velocity.js","e20ac2ad2d2837e2599ddebae1a2309d"],["/editormd/lib/codemirror/mode/verilog/index.html","a4320a72efd9cc9dc38fb82de996d2e9"],["/editormd/lib/codemirror/mode/verilog/test.js","e188dcbd7f63dbab6c7a9ee18a61dfd9"],["/editormd/lib/codemirror/mode/verilog/verilog.js","b775cc5c43476f3a890d3d7c7eaeaaf6"],["/editormd/lib/codemirror/mode/xml/index.html","ae456da1c5a6fa78aad09132b09a2890"],["/editormd/lib/codemirror/mode/xml/test.js","0559a8ca5956d08c2cfbd89a103e002d"],["/editormd/lib/codemirror/mode/xml/xml.js","4304a1cbddb1f976e42893f59de690a1"],["/editormd/lib/codemirror/mode/xquery/index.html","fcab60a4c8fb284d2c558f97fd1b79d1"],["/editormd/lib/codemirror/mode/xquery/test.js","d21def4b9c9716434bbf0dfdef16abd0"],["/editormd/lib/codemirror/mode/xquery/xquery.js","ce1ccce3d159066b1f67313256a50c72"],["/editormd/lib/codemirror/mode/yaml/index.html","81b365364e7845e051b35191405cdf3b"],["/editormd/lib/codemirror/mode/yaml/yaml.js","37ccd74eaa1638156090bfa404ce4fa5"],["/editormd/lib/codemirror/mode/z80/index.html","915e69c0d519ec6946d1eda600c8ea48"],["/editormd/lib/codemirror/mode/z80/z80.js","5f9e49de0d2b03f560dbdd91dcaec96b"],["/editormd/lib/codemirror/modes.min.js","4da5d294bf129499718f82fff67b01ee"],["/editormd/lib/codemirror/theme/3024-day.css","dd62567889e5e73b566688b4df162499"],["/editormd/lib/codemirror/theme/3024-night.css","bce81635b70bee2cd748e5b591cfa152"],["/editormd/lib/codemirror/theme/ambiance-mobile.css","256f2dd130b80c6afaa40fddf700d12a"],["/editormd/lib/codemirror/theme/ambiance.css","18dc399db6086ba4df6f1733bbea3043"],["/editormd/lib/codemirror/theme/base16-dark.css","d5b39601d42c60adaf4a74668fd163ad"],["/editormd/lib/codemirror/theme/base16-light.css","eff34d7fb06a73518e7342187e169af2"],["/editormd/lib/codemirror/theme/blackboard.css","b413f7847a56cafec20b8ca5ce73ef52"],["/editormd/lib/codemirror/theme/cobalt.css","3dfff29b158f3574d80edffdf46e0cc1"],["/editormd/lib/codemirror/theme/colorforth.css","1c2ac3b8535beb8c8d72daefcf1f2e82"],["/editormd/lib/codemirror/theme/eclipse.css","7c2f7b4b44b33fc9a5f857f542d007ac"],["/editormd/lib/codemirror/theme/elegant.css","c98914a034be0b11803bd3c24fba25dd"],["/editormd/lib/codemirror/theme/erlang-dark.css","b8ece4ed0e1c8b4f3f0d933ae525a85b"],["/editormd/lib/codemirror/theme/lesser-dark.css","24b1bf4ba14a5177acb4e0f9c6c74f12"],["/editormd/lib/codemirror/theme/mbo.css","d9c71a8d09d0cf6c8a47b1b2204e99e0"],["/editormd/lib/codemirror/theme/mdn-like.css","d38455fb05da729a3e01545dd66d707a"],["/editormd/lib/codemirror/theme/midnight.css","aa15eaaff4751c9e6bf8d6880f4dd7b1"],["/editormd/lib/codemirror/theme/monokai.css","a3e90764a860b595edc795738dfea878"],["/editormd/lib/codemirror/theme/neat.css","673552ecebac76569063801293e9c76c"],["/editormd/lib/codemirror/theme/neo.css","f65035d751bacec07f189e3477f50bda"],["/editormd/lib/codemirror/theme/night.css","2f0028424982d3270e1d48b8cfa3a20a"],["/editormd/lib/codemirror/theme/paraiso-dark.css","e8cbc42a649596b0eec457a27355300e"],["/editormd/lib/codemirror/theme/paraiso-light.css","4d551ec8585009c1c5cd63d5f8fea52a"],["/editormd/lib/codemirror/theme/pastel-on-dark.css","98eef01e4c5088d1758f7d190f793ca2"],["/editormd/lib/codemirror/theme/rubyblue.css","3563ae9c5f1f53f51285da9ec38a92ce"],["/editormd/lib/codemirror/theme/solarized.css","fad5e4e920626b7bc9a0c33eace74f11"],["/editormd/lib/codemirror/theme/the-matrix.css","a30b748c8df155d0b81649f1091d1981"],["/editormd/lib/codemirror/theme/tomorrow-night-bright.css","15536604543d76ec2e0d30f593363062"],["/editormd/lib/codemirror/theme/tomorrow-night-eighties.css","020fa4c18605a7219261806c73d2fa8e"],["/editormd/lib/codemirror/theme/twilight.css","36918d6d526b116b16abaf3f92a814c3"],["/editormd/lib/codemirror/theme/vibrant-ink.css","9e787d565394983b0991ae14f8ce54c9"],["/editormd/lib/codemirror/theme/xq-dark.css","e30bef71c2665818f85ff1aeaa53447a"],["/editormd/lib/codemirror/theme/xq-light.css","481023ea9d2e1d4c1707a1867c500326"],["/editormd/lib/codemirror/theme/zenburn.css","8211c2d07e48ca8553f77756a8c35bfd"],["/editormd/lib/flowchart.min.js","db8505be6fd441e36e111d842b266823"],["/editormd/lib/jquery.flowchart.min.js","76018ba1ce3f0c2b4373be29cd43672b"],["/editormd/lib/marked.min.js","1b931864324735d47bbcc37cb9ed8e73"],["/editormd/lib/prettify.min.js","a6358bcc55c46229d1f7802e3f7aef77"],["/editormd/lib/raphael.min.js","f299b262ff6776219cd90d2cb77401d7"],["/editormd/lib/sequence-diagram.min.js","7105a1a907ac043a9f2ea4317a164bcb"],["/editormd/lib/underscore.min.js","da2e0be761b0fe5ecaf932a405274e5c"],["/editormd/plugins/code-block-dialog/code-block-dialog.js","4d67d4019c2a316739b330b6932e100c"],["/editormd/plugins/emoji-dialog/emoji-dialog.js","8149407af1cfcbf752f97106c826548f"],["/editormd/plugins/goto-line-dialog/goto-line-dialog.js","4741aea8fdcf395564014ac0ad3b399a"],["/editormd/plugins/help-dialog/help-dialog.js","ef37120ff982cdac4fd7dd8559cfa081"],["/editormd/plugins/html-entities-dialog/html-entities-dialog.js","de1b5c4c4cca951319e9e724fd4b3f75"],["/editormd/plugins/image-dialog/image-dialog.js","ac4232a845f2f0d20f37535370952c45"],["/editormd/plugins/link-dialog/link-dialog.js","dc9a6e1d98221979530dd6fb1e522530"],["/editormd/plugins/plugin-template.js","da86c6791646c63c5c9ac07c80fd0629"],["/editormd/plugins/preformatted-text-dialog/preformatted-text-dialog.js","e65ff7445597caa0720492026104ed43"],["/editormd/plugins/reference-link-dialog/reference-link-dialog.js","c0baed9737c6dc75335500d733ffc5e8"],["/editormd/plugins/table-dialog/table-dialog.js","7aef14649676cf04b342df475a46385d"],["/editormd/plugins/test-plugin/test-plugin.js","23e873ed8b07bf17e47dcfcf6a63b9a4"],["/friends/index.html","82d322f12324743198b940bf35ca1025"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/about_img.jpg","56b184c8ee3f3cff55cef4cdf16a76a0"],["/img/archive_img.jpg","b6f8c3dfd7c6a22826a97645cdea873f"],["/img/avatar.png","eb84e91db3ccd71477dad6568ed413d8"],["/img/categories_img.jpg","166f39b766046959ad08ce2fcb598b9c"],["/img/default_cover.png","f9d44ca51eca8247c8cb6f870336fe00"],["/img/default_top_img.png","06f877015c998874462b06405b775e4b"],["/img/favicon.png","64aa02cbfee13f79a69ff36b9824c7cf"],["/img/flink_img.jpg","2129ddfd15e92b3ed855786c70215fb5"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.png","ad4911d85378019fdea92419c980b966"],["/img/loading.gif","169de7f6a0f1ef8df980556e0b1dc278"],["/index.html","344cf075ca62c5270bcab4f5365aa366"],["/js/calendar.js","dc38477daed8242df4651d3e21fc73f4"],["/js/jquery.min.js","641dd14370106e992d352166f5a07e99"],["/js/language.js","ccc0e045438554a07bdbdc6bba78fa55"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/pace.min.js","ee7ff38ea249eeb8b3e08499bff79ed3"],["/js/reurl.js","1aebec6fcba8aad05354e7809a33da43"],["/js/runtime.js","ee5618016acc403ea0b218dea3aec976"],["/js/sakurink.js","f395c90512989c58ce318fb6285ae453"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/linkpage/index.html","66691cdc53f0158131b37acf1a74efa4"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","c85f3ef10a996c555d20925b1389035b"],["/page/3/index.html","2a12e402878b8c903bf5b67ee67c29de"],["/page/4/index.html","9ea8aedb372269c9cf112c55aaf8ddd8"],["/page/5/index.html","37750ba8193a3686e7f4f6e268cd7b66"],["/posts/117984481/index.html","40cee76ca332e20d9c44d86299d30cf5"],["/posts/1191333692/index.html","18d049d0640d2b36f647cbef54e3b5c2"],["/posts/1192452099/index.html","069608fc63c34a73aef49cf87efb9698"],["/posts/1243066710/index.html","070191a62f830280de0470f66a40e8e8"],["/posts/1334945293/index.html","5d472068ee275a45562a181b9c6e522f"],["/posts/1400684994/index.html","4b8193da73d521148d1c808269d354a3"],["/posts/1412730729/index.html","6fa5c65e39bbf30f6f95cad3d8fba2a2"],["/posts/1477501590/index.html","5cc02008f1f4e196ad5de8038c994aeb"],["/posts/1513222061/index.html","e3d6038cc9e172a72c68549bf7a052ba"],["/posts/1520098886/index.html","09188f04bf8aed3f2e7fbaa90aa3df0d"],["/posts/1544165171/index.html","18e775bf651f627ec2ead946f0dca4e8"],["/posts/1996852443/index.html","59afab123962cd6e2e79126d93317a88"],["/posts/2122152757/index.html","c9f99a168468aa769db8d7a32613eddf"],["/posts/2127331844/index.html","df960694e81d626bcdfdbf1378ccc3a8"],["/posts/2189229020/index.html","1c0144e68d1001e561c3893359c1bd6b"],["/posts/2287214869/index.html","cffcd28ea3f8db8dcb5711f830fe7194"],["/posts/2342761908/index.html","e26be80f71ab775fd8d3fbf27fe8a6d2"],["/posts/2472035702/index.html","e5528bfbf28c6a78adec188e7f852db2"],["/posts/2728617580/index.html","4ad3907145e8b8ab0c2f6ed1494e6956"],["/posts/2776437882/index.html","095b280acf9d233692f32f7d4e8175ec"],["/posts/2845603730/index.html","e3057fb05008ef2640fc724ea69f1ad7"],["/posts/2933412209/index.html","4950000ee60e6eca027aeee44ef76dea"],["/posts/3085606162/index.html","9af4b6a27a0c33a84fafe14cb6fe1436"],["/posts/3088182250/index.html","6b271826710fa1eaea511d7fab8e483b"],["/posts/3130116529/index.html","749281c34dba24b9112fa815ec04be1b"],["/posts/3143449586/index.html","e3f14dabb6b2b48b742dbe29d4ba0a00"],["/posts/3188599471/index.html","f08b4f3a543709637ffb155535d916be"],["/posts/3191568766/index.html","bbb1f4f04693f87fbe4c38a6bdc57cb5"],["/posts/3294504097/index.html","6c1cc3f66f72936fedf0245fef43ee20"],["/posts/348141877/index.html","96c1b4a4c00e39105a7f7d5d13ecc743"],["/posts/3554105694/index.html","c97026b476acd3571f9ba60caf67cdbb"],["/posts/3758027416/index.html","f35dbb992c24f01ec333a8ce398138ac"],["/posts/3786740555/index.html","d8cea21fa80a619bfa9ba38f1ae4f7c7"],["/posts/3957020503/index.html","b4fa85e2cedd6155c71c30650502de32"],["/posts/403354561/index.html","b4131328f9b0cc36b1b9858c68841268"],["/posts/4233974909/index.html","102baad84bf4fb73563d5487264a3545"],["/posts/439348253/index.html","5927816f48a3192dd6e75db2bf7ae344"],["/posts/583739568/index.html","084e9bc74e37c158e87ab384c3df81b6"],["/posts/712548944/index.html","d6ec06f98ca36471d689d1c6bfb058ff"],["/posts/721094206/index.html","7185054d54ff7449328ca0455e37be21"],["/posts/763639381/index.html","cfda3339fe9084789663e718da850abb"],["/posts/814127131/index.html","54ceb0ad5d2fa78bdce606863a52026f"],["/posts/876967294/index.html","7b9886e6ef2c1889c85b8be27e9ee637"],["/posts/952207792/index.html","dce4a58966ef520ba7045e1f07175f02"],["/sw-register.js","f8538aa6155351782d12e8b1e3080d5f"]];
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









/* eslint-enable */
