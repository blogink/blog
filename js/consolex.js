// ============================================================
// < 控制台 > 统一脚本
// 命名约定：
//   setting* = 既有元素 id / HTML 接口（保留）
//   scc*     = 统一模块 / 全局函数前缀，公开函数与存储键一律 scc 开头，避免与其他项目冲突
// 结构：
//   1. 调试开关        2. 存储工具     3. 面板显隐     4. 选项卡/抽屉
//   5. 通用工具        6. 效果函数     7. 控件注册表（数据驱动）
//   8. 统一绑定        9. 统一重置    10. 字体        11. 背景
//   12. 系统信息      13. 静态绑定    14. 引导入口
// ============================================================

//---------- 1. 调试开关 ----------
// enabled = 总开关；各子项 false 则关闭对应类别的日志输出。
var SCC_DEBUG = {
    enabled: false,    // 总开关
    conv: false,       // 面板 / 布局 / 绑定
    theme: false,      // 主题效果（面板与页面透明度 / 模糊 / 卡片）
    bg: false,         // 背景切换
    font: false,       // 字体
    info: false,       // 系统信息
    storage: false    // localStorage 读写
};

function sccLog(scope, ...args) {
    if (!SCC_DEBUG.enabled || SCC_DEBUG[scope] === false) return;
    console.log(`[控制台/${scope}]`, ...args);
}

//---------- 2. 存储工具 ----------
// 统一读写 localStorage：checkbox 用 '1'/'0'，range 用数字字符串，radio 用选项值。
var sccStore = {
    get(key, def) {
        const v = localStorage.getItem(key);
        if (SCC_DEBUG.storage) sccLog('storage', 'get', key, '=>', v);
        return v === null ? def : v;
    },
    set(key, v) {
        if (SCC_DEBUG.storage) sccLog('storage', 'set', key, '=', v);
        localStorage.setItem(key, v);
    },
    remove(key) {
        if (SCC_DEBUG.storage) sccLog('storage', 'remove', key);
        localStorage.removeItem(key);
    },
    // JSON + 过期时间（分钟）存取，用于背景等带时效数据
    getJson(key, minutes) {
        try {
            const d = JSON.parse(localStorage.getItem(key));
            if (d) {
                const t = Date.now() - d.time;
                if (t < minutes * 60 * 1000 && t > -1) return d.data;
            }
        } catch (e) { /* 数据损坏按缺失处理 */ }
        return 0;
    },
    setJson(key, data) {
        localStorage.setItem(key, JSON.stringify({ time: Date.now(), data }));
    }
};

//---------- 3. 面板显隐 ----------
function sccOpenPanel() {
    const settingPanel = document.getElementById("settingPanel");
    const settingMask = document.getElementById("settingMask");
    if (!settingPanel || !settingMask) return;

    // 显示遮罩
    settingMask.classList.remove("sphide");
    settingMask.classList.add("spshow");

    // 显示面板
    setTimeout(() => {
        settingPanel.classList.remove("sphide");
        settingPanel.classList.add("spshow");
    }, 20);
    sccLog('conv', '面板打开');
}

function sccClosePanel() {
    const settingPanel = document.getElementById("settingPanel");
    const settingMask = document.getElementById("settingMask");
    if (!settingPanel || !settingMask) return;

    settingPanel.classList.remove("spshow");
    settingPanel.classList.add("sphide-anim"); // 添加隐藏动画
    settingMask.classList.remove("spshow");

    // 等待动画完成后再隐藏面板
    setTimeout(() => {
        settingPanel.classList.add("sphide");
        settingPanel.classList.remove("sphide-anim");
        settingMask.classList.add("sphide");
    }, 200);
}

//---------- 4. 选项卡 / 抽屉 ----------
// 桌面端（≥500px）侧栏常显、与内容并排；移动端（<500px）抽屉侧栏由顶栏菜单按钮滑出。
var sccTabsMedia = window.matchMedia('(min-width: 500px)');
var sccTabsEl = document.getElementById('settingTabs');
var sccItemsEl = document.getElementById('settingItems');
var sccMenuBtn = document.getElementById('settingMenuBtn');

// 当前选中选项卡：优先手动 .active，兜底 DOM 第一个
function sccActiveTab() {
    return sccTabsEl.querySelector('button.active') || sccTabsEl.querySelector('button');
}

// 切换并显示对应内容
function sccShowTab(button) {
    sccTabsEl.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === button));
    const target = document.getElementById(button.id + '-Content');
    Array.prototype.forEach.call(sccItemsEl.children, div => {
        div.classList.toggle('active', div === target);
    });
    sccOpenTabs(false); // 移动端选择后收起侧栏
    sccItemsEl.scrollTo({ top: 0 });
}

// 移动端抽屉侧栏开合
function sccOpenTabs(open) {
    if (sccTabsMedia.matches) return; // 桌面端常显，无需开合
    sccTabsEl.classList.toggle('scc-open', open);
}

// 给选项卡按钮绑定点击（Pjax 重建 DOM 后需重新绑定）
function sccBindTabsButtons() {
    sccTabsEl.querySelectorAll('button').forEach(button => {
        button.onclick = () => sccShowTab(button);
    });
}

// 根据断点 / DOM 情况初始化布局
function sccInitTabs() {
    if (sccTabsMedia.matches) {
        sccTabsEl.classList.remove('scc-open');
    } else {
        sccOpenTabs(false);
    }
    sccBindTabsButtons();
    sccShowTab(sccActiveTab());
}

//---------- 5. 通用工具 ----------
// 创建/获取 style 容器，position: 'start' | 'end'
function sccGetStyleTag(id, position = 'end') {
    let styleTag = document.getElementById(id);
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = id;
        if (position === 'start') {
            document.head.insertBefore(styleTag, document.head.firstChild);
        } else {
            document.head.appendChild(styleTag);
        }
    }
    return styleTag;
}

// Butterfly 主题部分悬浮栏显隐（display 控制）
function sccSettingAddRemove(id, addRemove) {
    const element = document.querySelector(id);
    if (!element) return;
    if (addRemove === 'add') {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : element.style.display;
    } else if (addRemove === 'remove') {
        element.style.display = (element.style.display === 'block') ? 'none' : element.style.display;
    }
}

//---------- 6. 效果函数 ----------
// 6.1 通用开关效果
function sccAplayerMain() {
    if (document.getElementById('aplayerScript')) return;
    const aplayerBgMusic = document.querySelector('.aplayerBgMusic');
    if (aplayerBgMusic) aplayerBgMusic.style.display = 'block';
}

function sccRemoveAplayer() {
    const aplayerBgMusic = document.querySelector('.aplayerBgMusic');
    if (aplayerBgMusic) {
        aplayerBgMusic.style.display = 'none';
        if (aplayerBgMusic.aplayer) aplayerBgMusic.aplayer.pause();
    }
}

function sccFpsMain() {
    if (document.getElementById('fpsDisplayElement')) return;
    const fpsElement = document.createElement('div');
    fpsElement.id = 'fpsDisplayElement';
    document.body.appendChild(fpsElement);

    let lastFrameTime = performance.now();
    let frameCount = 0;

    function updateFPS() {
        const now = performance.now();
        frameCount++;
        const delta = now - lastFrameTime;
        if (delta >= 1000) {
            const fps = Math.round((frameCount * 1000) / delta);
            fpsElement.innerHTML = `FPS: ${fps}`;
            frameCount = 0;
            lastFrameTime = now;
        }
        requestAnimationFrame(updateFPS);
    }
    updateFPS();
}

function sccRemoveFps() {
    const fpsElement = document.getElementById('fpsDisplayElement');
    if (fpsElement) fpsElement.remove();
}

function sccAstralMain() {
    const universe = document.getElementById("universe");
    if (universe) universe.style.display = "block";
}

function sccRemoveAstral() {
    const universe = document.getElementById("universe");
    if (universe) universe.style.display = "none";
}

function sccIndexImgMain() {
    const styleTag = sccGetStyleTag('indexImgStyleBox');
    styleTag.innerHTML = `
        #site-info { display: block !important; }
        #scroll-down { display: block !important; }
    `;
}

function sccRemoveIndexImg() {
    const styleTag = sccGetStyleTag('indexImgStyleBox');
    styleTag.innerHTML = `
        #site-info { display: none !important; }
        #scroll-down { display: none !important; }
        .full_page#page-header {
            margin-bottom: 10px !important;
            height: 60px !important;
            background: 0 !important;
        }
        .full_page#page-header #nav {
            background: rgba(255,255,255,0.8) !important;
            -webkit-box-shadow: 0 5px 6px -5px rgba(133,133,133,0.6) !important;
            box-shadow: 0 5px 6px -5px rgba(133,133,133,0.6) !important;
        }
        .full_page#page-header #nav a,
        .full_page#page-header #nav span.site-page,
        .full_page#page-header #nav .site-name {
            color: var(--font-color) !important;
            text-shadow: none !important;
        }
        [data-theme='dark'] .full_page#page-header > #nav {
            background: rgba(18,18,18,0.8) !important;
            -webkit-box-shadow: 0 5px 6px -5px rgba(133,133,133,0) !important;
            box-shadow: 0 5px 6px -5px rgba(133,133,133,0) !important;
        }
    `;
}

// 测试按钮占位效果
function sccFunctionState111() {
    sccLog('conv', 'func111');
}

function sccFunctionState000() {
    sccLog('conv', 'func000');
}

// 6.2 主题效果
// 主题分页：背景透明度（100% 不透明=原样；值越小背景图越透明）
function sccUpdateThemeBgOpacity(rangeValue) {
    const styleTag = sccGetStyleTag('sccThemeBgOpacityStyleBox');
    if (parseInt(rangeValue) >= 100) {
        styleTag.innerHTML = '';
        return;
    }
    styleTag.innerHTML = `#web_bg { opacity: ${rangeValue / 100}; }`;
    sccLog('theme', '背景透明度更新为: ' + rangeValue + '%');
}

// 主题分页：背景模糊度
function sccUpdateThemeBgBlur(rangeValue) {
    const styleTag = sccGetStyleTag('sccThemeBgBlurStyleBox');
    if (parseInt(rangeValue) <= 0) {
        styleTag.innerHTML = '';
        return;
    }
    styleTag.innerHTML = `
        #web_bg { -webkit-filter: blur(${rangeValue}px); filter: blur(${rangeValue}px); }
    `;
    sccLog('theme', '背景模糊度更新为: ' + rangeValue + 'px');
}

// 主题分页：卡片透明度
function sccUpdateThemeCardOpacity(rangeValue) {
    const styleTag = sccGetStyleTag('sccThemeCardOpacityStyleBox');
    if (parseInt(rangeValue) >= 100) {
        styleTag.innerHTML = '';
        return;
    }
    const cardAlpha = 100 - rangeValue + '%';
    styleTag.innerHTML = `
        #recent-posts .recent-post-item,
        #content-inner > #post,
        #content-inner > #page,
        #content-inner > #archive,
        #content-inner > #tag,
        #content-inner > #category,
        #aside-content > .card-widget,
        #aside-content > .sticky_layout > .card-widget {
            background-color: color-mix(in srgb, var(--tasseles-card-bg) ${cardAlpha}, transparent) !important;
        }
    `;
    sccLog('theme', '卡片透明度更新为: ' + rangeValue);
}

// 6.3 灯笼 / aplayer 皮肤 / 测试 radio
function sccRemoveLantern() {
    const styleTag = sccGetStyleTag('lanternStyleBox');
    styleTag.innerHTML = `#lantern { display: none !important; }`;
}
function sccLanternLeft() {
    const styleTag = sccGetStyleTag('lanternStyleBox');
    styleTag.innerHTML = `
        #lantern { display: block !important; }
        .lantern-box-1 { left: -20px !important; right: auto !important; }
        .lantern-box-2 { left: 10px !important; right: auto !important; }
    `;
}
function sccLanternRight() {
    const styleTag = sccGetStyleTag('lanternStyleBox');
    styleTag.innerHTML = `
        #lantern { display: block !important; }
        .lantern-box-1 { left: auto !important; right: -20px !important; }
        .lantern-box-2 { left: auto !important; right: -20px !important; }
    `;
}

function sccAplayerSkinStyle1() {
    const styleTag = sccGetStyleTag('aplayerSkinStyleBox');
    styleTag.innerHTML = `
        .aplayerBgMusic .aplayer-narrow .aplayer-miniswitcher { left: 300px !important; }
        .aplayerBgMusic .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body { transform: translateX(-300px) !important; }
    `;
}
function sccAplayerSkinStyle2() {
    const styleTag = sccGetStyleTag('aplayerSkinStyleBox');
    styleTag.innerHTML = `
        .aplayerBgMusic .aplayer-narrow .aplayer-miniswitcher { left: auto !important; }
        .aplayerBgMusic .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body { transform: none !important; }
    `;
}

function sccRadio2Func1() { sccLog('conv', '选择了 Huey-2'); }
function sccRadio2Func2() { sccLog('conv', '选择了 Dewey-2'); }
function sccRadio2Func3() { sccLog('conv', '选择了 Louie-2'); }

//---------- 7. 控件注册表（数据驱动） ----------
// 唯一来源：默认值、存储键、开关回调、重置基准。
// 说明：id 对 checkbox/range 为控件元素 id；radio 用 name。
var SCC_CONTROLS = {
    version: 1,
    checkboxes: [
        { id: 'aplayerOnOff',   key: 'aplayerOnOff',    default: false,  on: sccAplayerMain,       off: sccRemoveAplayer,   switch: 'sccAplayerState' },
        { id: 'fpsDisplay',     key: 'fpsDisplay',      default: false, on: sccFpsMain,           off: sccRemoveFps,       switch: 'sccFpsState' },
        { id: 'universeEffect', key: 'universeEffect',  default: false, on: sccAstralMain,        off: sccRemoveAstral,    switch: 'sccUniverseState' },
        { id: 'indexImgDisplay', key: 'indexImgDisplay', default: true, on: sccIndexImgMain,      off: sccRemoveIndexImg,  switch: 'sccIndexImgState' },
        { id: 'variable1',      key: 'variable1',       default: true,  on: sccFunctionState111,  off: sccFunctionState000, switch: 'sccSwitchState1' }
    ],
    ranges: [
        { id: 'themeBgOpacityRange',    displayId: 'themeBgOpacityVal', key: 'sccThemeBgOpacity',     default: 100, value: sccUpdateThemeBgOpacity },
        { id: 'themeBgBlurRange',       displayId: 'themeBgBlurVal',    key: 'sccThemeBgBlur',        default: 0,   value: sccUpdateThemeBgBlur },
        { id: 'themeCardOpacityRange',  displayId: 'themeCardOpacityVal', key: 'sccThemeCardOpacity', default: 5, value: sccUpdateThemeCardOpacity }
    ],
    radios: [
        { name: 'lanternDisplay',          default: 'close' },
        { name: 'aplayerSkinStyleDisplay', default: 'skin1' },
        { name: 'drone2',                  default: '22222' }
    ]
};

// 已绑定的控件句柄，供重置按钮反查（Pjax 后元素重建会自动覆盖）
var sccRegistry = {
    checkboxes: new Map(),
    ranges: new Map(),
    radios: new Map()
};

//---------- 8. 统一绑定 ----------
function sccBindCheckbox(entry) {
    const checkbox = document.getElementById(entry.id);
    if (!checkbox) {
        sccLog('conv', '[checkbox] 未找到元素:', entry.id);
        return;
    }
    if (checkbox.dataset.sccBound) return; // 防 Pjax/重复初始化
    checkbox.dataset.sccBound = '1';

    // 状态统一为 1/0，存储键 fallback 到默认值
    let state = sccStore.get(entry.key, entry.default ? '1' : '0') === '1' ? 1 : 0;

    const apply = () => {
        checkbox.checked = state === 1;
        if (state === 1) entry.on(); else entry.off();
    };

    const set = (v) => {
        state = v ? 1 : 0;
        sccStore.set(entry.key, state);
        apply();
    };

    const toggle = () => { set(state === 1 ? 0 : 1); };

    apply();
    window[entry.switch] = toggle; // 供 HTML onclick 调用
    checkbox.onclick = toggle;     // 覆盖内联 onclick，避免二次触发

    sccRegistry.checkboxes.set(entry.key, { entry, set });
}

function sccBindRange(entry) {
    const range = document.getElementById(entry.id);
    const unitEl = document.getElementById(entry.displayId);
    if (!range || !unitEl) {
        sccLog('conv', '[range] 未找到元素:', entry.id, '/', entry.displayId);
        return;
    }
    if (range.dataset.sccBound) return;
    range.dataset.sccBound = '1';

    // 更新显示文本（含单位）与滑块进度
    const applyValue = (value) => {
        unitEl.textContent = value + (unitEl.dataset.unit || '');
        const min = parseFloat(range.min);
        const max = parseFloat(range.max);
        if (!isNaN(min) && !isNaN(max) && max !== min) {
            const percent = ((value - min) / (max - min)) * 100;
            range.style.setProperty('--range-progress', percent + '%');
        }
    };

    // 设置滑块值 + 显示 + 存储 + 调用效果函数
    const setStored = (value) => {
        range.value = value;
        applyValue(value);
        sccStore.set(entry.key, value);
        if (entry.value) entry.value(value);
    };

    const initial = parseFloat(sccStore.get(entry.key, entry.default));
    setStored(isNaN(initial) ? entry.default : initial);

    range.addEventListener('input', () => setStored(range.value));

    sccRegistry.ranges.set(entry.key, { entry, setStored });
}

function sccBindRadio(entry) {
    const group = document.querySelectorAll(`input[name="${entry.name}"]`);
    if (group.length === 0) {
        sccLog('conv', '[radio] 未找到组:', entry.name);
        return;
    }
    if (group[0].dataset.sccBound) return;
    group[0].dataset.sccBound = '1';

    const def = entry.default;

    const applyValue = (value) => {
        group.forEach(r => { r.checked = (r.value === value); });
    };
    // 触发当前选中项由 HTML onclick 定义的函数
    const fireChecked = () => {
        group.forEach(r => { if (r.checked && r.onclick) r.onclick(); });
    };

    const initial = sccStore.get(entry.name, def) || def;
    applyValue(initial);
    fireChecked();

    // 持久化用户选择（HTML onclick 属性另作效果回调）
    group.forEach(radio => {
        radio.addEventListener('click', () => sccStore.set(entry.name, radio.value));
    });

    const reset = () => {
        applyValue(def);
        fireChecked();
    };

    sccRegistry.radios.set(entry.name, { entry, reset });
}

//---------- 9. 统一重置 ----------
function sccResetCheckboxes() {
    sccRegistry.checkboxes.forEach(h => h.set(h.entry.default));
}

function sccResetRange(key) {
    const h = sccRegistry.ranges.get(key);
    if (h) h.setStored(h.entry.default);
}

function sccResetRanges() {
    sccRegistry.ranges.forEach(h => {
        sccStore.remove(h.entry.key);
        h.setStored(h.entry.default);
    });
}

function sccResetRadio(name) {
    const h = sccRegistry.radios.get(name);
    if (!h) return;
    sccStore.remove(name);
    h.reset();
}

function sccResetRadios() {
    sccRegistry.radios.forEach((h, name) => sccResetRadio(name));
}

// 绑定底部重置按钮组（一次性）
function sccBindResetButtons() {
    const byId = (id) => document.getElementById(id);
    const on = (el, fn) => { if (el) el.addEventListener('click', fn); };

    on(byId('resetSwitches'), sccResetCheckboxes);
    on(byId('resetRangeBar'), sccResetRanges);
    on(byId('resetRadio'), sccResetRadios);

    SCC_CONTROLS.ranges.forEach(e => on(byId('resetRangeBar-' + e.id), () => sccResetRange(e.key)));
    SCC_CONTROLS.radios.forEach(e => on(byId('resetRadio-' + e.name), () => sccResetRadio(e.name)));

    on(byId('sccResetFont'), sccResetFont);
    on(byId('sccResetBg'), sccResetBg);
}

//---------- 10. 字体 ----------
var SCC_FONT_DEFAULT = '微软雅黑';

// 全局函数：HTML 字体按钮 onclick 直接引用
function sccSetFont(fontName) {
    sccStore.set('selectedFont', fontName);
    if (fontName === 'main') {
        document.body.style.fontFamily = "-apple-system, IBM Plex Mono, monospace, '微软雅黑', sans-serif";
        document.documentElement.style.removeProperty('--global-font');
    } else {
        document.body.style.fontFamily = "var(--global-font), -apple-system, IBM Plex Mono, monospace, '微软雅黑', sans-serif";
        document.documentElement.style.setProperty('--global-font', fontName);
    }
    sccLog('font', '字体切换为:', fontName);
}

function sccResetFont() {
    sccSetFont(SCC_FONT_DEFAULT);
}

function sccInitFont() {
    sccSetFont(sccStore.get('selectedFont', SCC_FONT_DEFAULT));
}

//---------- 11. 背景 ----------
// 全局函数：HTML 背景控件 onclick 直接引用（flag=0 存储，=1 仅套用）
function sccChangeBg(s, flag) {
    const bg = document.getElementById('web_bg');
    if (!bg || typeof s !== 'string') return;
    if (s.charAt(0) === '#') {
        bg.style.backgroundColor = s;
        bg.style.backgroundImage = 'none';
    } else {
        bg.style.backgroundImage = s;
    }
    if (!flag) sccStore.setJson('blogbg', s);
    sccLog('bg', '背景切换:', s, flag ? '(仅套用)' : '(已存储)');
}

// 重置背景（清除已存记录并恢复默认图）
function sccResetBg() {
    sccStore.remove('blogbg');
    sccChangeBg('url(/img/background_img.jpg)');
}

// 读取已存背景（24 小时分钟内有效）
function sccInitBg() {
    try {
        const data = sccStore.getJson('blogbg', 1440);
        if (data) sccChangeBg(data, 1);
        else sccStore.remove('blogbg');
    } catch (e) {
        sccStore.remove('blogbg');
    }
}

// 全局函数：清空 localStorage（按钮可能直接引用）
function sccClearLocalStorage() {
    localStorage.clear();
    sccLog('storage', 'LocalStorage 已清除');
    location.reload();
}

// 通用“清理”按钮绑定
function sccClearBrowserStorage(clearElementName, clearFunction) {
    document.getElementById(clearElementName).addEventListener('click', function() {
        clearFunction();
        this.textContent = '已清除';
        sccLog('conv', '已执行清理:', clearElementName);
        setTimeout(() => location.reload(), 1000);
    });
}

//---------- 12. 系统信息 ----------
function sccFillInfo() {
    // 初始化信息
    const info = {
        userAgent: "获取中",
        language: "获取中",
        platform: "获取中",
        maxTouchPoints: "获取中",
        referrer: "获取中",
        browserName: "获取中",
        osName: "获取中",
        userAgentDataBrands: "获取中",
        userAgentDataMobile: "获取中",
        userAgentDataPlatform: "获取中"
    };

    // 辅助函数：更新 span 内容
    function updateSpan(id, value) {
        const span = document.getElementById(id);
        if (span) span.textContent = value;
    }

    // 带错误兜底的信息获取
    const safeSet = (id, getter, fallback) => {
        try {
            updateSpan(id, getter() || fallback);
        } catch (e) {
            updateSpan(id, fallback);
        }
    };

    safeSet("userAgent", () => navigator.userAgent, "未获取");
    safeSet("language", () => navigator.language || navigator.userLanguage, "未获取");
    safeSet("platform", () => navigator.platform, "未获取");
    safeSet("maxTouchPoints", () => navigator.maxTouchPoints, "未获取");
    safeSet("referrer", () => document.referrer || "没有引用信息", "未获取");

    // 浏览器与操作系统名称
    function getBrowserAndOS() {
        const userAgent = navigator.userAgent;
        let browserName = "未获取";
        let osName = "未获取";

        if (/Edg\//i.test(userAgent)) browserName = "Edge";
        else if (/OPR\//i.test(userAgent)) browserName = "Opera";
        else if (/Firefox/i.test(userAgent)) browserName = "Firefox";
        else if (/Chrome/i.test(userAgent)) browserName = "Chrome";
        else if (/Safari/i.test(userAgent)) browserName = "Safari";
        else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) browserName = "Internet Explorer";
        else if (userAgent.includes("Baidu") || userAgent.includes("BaiduBrowser")) browserName = "Baidu";
        else if (userAgent.includes("Maxthon")) browserName = "Maxthon";
        else if (userAgent.includes("QQBrowser")) browserName = "QQ";
        else if (userAgent.includes("Sogou")) browserName = "搜狗";
        else browserName = "Others";

        if (/OpenHarmony/i.test(userAgent) || typeof window.ohos !== 'undefined') osName = "OpenHarmony";
        else if (/HarmonyOS|HMOS/i.test(userAgent)) osName = /Android/i.test(userAgent) ? "HarmonyOS" : "HarmonyOS NEXT";
        else if (/Android/i.test(userAgent)) osName = "Android";
        else if (/iPhone|iPad/i.test(userAgent)) osName = "iOS";
        else if (/Macintosh/i.test(userAgent)) osName = "macOS";
        else if (/Windows/i.test(userAgent)) osName = "Windows";
        else if (/CrOS/i.test(userAgent)) osName = "Chrome OS";
        else if (/Linux/i.test(userAgent)) osName = "Linux";

        updateSpan("browserName", browserName);
        updateSpan("osName", osName);
    }
    getBrowserAndOS();

    // UserAgentData 高熵信息（带降级）
    try {
        if (navigator.userAgentData) {
            navigator.userAgentData.getHighEntropyValues(["platform", "brands", "mobile"])
                .then(ua => {
                    updateSpan("userAgentDataBrands", ua.brands.map(b => b.brand + ' ' + b.version).join(', '));
                    updateSpan("userAgentDataMobile", ua.mobile ? 'True' : 'False');
                    updateSpan("userAgentDataPlatform", ua.platform);
                })
                .catch(() => {
                    updateSpan("userAgentDataBrands", "未获取");
                    updateSpan("userAgentDataMobile", "未获取");
                    updateSpan("userAgentDataPlatform", "未获取");
                });
        } else {
            updateSpan("userAgentDataBrands", "未获取");
            updateSpan("userAgentDataMobile", /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'True' : 'False');
            updateSpan("userAgentDataPlatform", "未获取");
        }
    } catch (e) {
        updateSpan("userAgentDataBrands", "未获取");
        updateSpan("userAgentDataMobile", "未获取");
        updateSpan("userAgentDataPlatform", "未获取");
    }
    sccLog('info', '系统信息已填充');
}

//---------- 13. 静态绑定（一次性，Pjax 后不重复挂载） ----------
function sccBindStatic() {
    if (window.__SCC_STATIC_BOUND) return;
    window.__SCC_STATIC_BOUND = true;

    // 遮罩点击关闭面板
    const mask = document.getElementById('settingMask');
    if (mask) mask.addEventListener('click', sccClosePanel);

    // 选项卡：断点变化
    const onMediaChange = () => sccInitTabs();
    if (typeof sccTabsMedia.addEventListener === 'function') {
        sccTabsMedia.addEventListener('change', onMediaChange);
    } else if (typeof sccTabsMedia.addListener === 'function') {
        sccTabsMedia.addListener(onMediaChange);
    }

    // 抽屉：点侧栏外区域收起（移动端）
    document.addEventListener('click', function(e) {
        if (!sccTabsMedia.matches && sccTabsEl.classList.contains('scc-open')) {
            if (!sccTabsEl.contains(e.target) && !(sccMenuBtn && sccMenuBtn.contains(e.target))) {
                sccOpenTabs(false);
            }
        }
    });

    // 抽屉：顶栏菜单按钮
    if (sccMenuBtn) {
        sccMenuBtn.onclick = () => sccOpenTabs(!sccTabsEl.classList.contains('scc-open'));
    }

    // 全屏按钮
    const fullscreenBtn = document.getElementById('settingFullScreen');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch((err) => {
                    sccLog('conv', '进入全屏失败:', err.message, `(${err.name})`);
                });
            } else {
                document.exitFullscreen().catch((err) => {
                    sccLog('conv', '退出全屏失败:', err.message, `(${err.name})`);
                });
            }
        });
    }

    // 夜里/白天切换按钮（Butterfly 主题）
    const darkBtn = document.getElementById('menu-darkmode');
    if (darkBtn) {
        darkBtn.onclick = function() {
            const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            if (nowMode === 'light') {
                btf.activateDarkMode();
                btf.saveToLocal.set('theme', 'dark', 2);
                GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
            } else {
                btf.activateLightMode();
                btf.saveToLocal.set('theme', 'light', 2);
                GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
            }
            // 兼容各评论/分享方案的刷新
            typeof utterancesTheme === 'function' && utterancesTheme();
            typeof FB === 'object' && typeof window.loadFBComment === 'function' && window.loadFBComment();
            window.DISQUS && document.getElementById('disqus_thread') && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200);
        };
    }

    // 重置按钮组
    sccBindResetButtons();

    // 清理按钮组
    sccClearBrowserStorage('clearSessionStorage', () => sessionStorage.clear());
    sccClearBrowserStorage('clearCookies', function() {
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
        });
    });
    sccClearBrowserStorage('clearServiceWorkers', function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for (let registration of registrations) registration.unregister();
            });
        }
    });
    sccClearBrowserStorage('clearCaches', function() {
        if ('caches' in window) {
            caches.keys().then(function(names) {
                for (let name of names) caches.delete(name);
            });
        }
    });

    sccLog('conv', '静态绑定完成');
}

//---------- 14. 引导入口 ----------
// 按注册表补齐缺失的 localStorage 默认值
function sccSeedDefaults() {
    SCC_CONTROLS.checkboxes.forEach(e => {
        if (sccStore.get(e.key, null) === null) sccStore.set(e.key, e.default ? '1' : '0');
    });
    SCC_CONTROLS.ranges.forEach(e => {
        if (sccStore.get(e.key, null) === null) sccStore.set(e.key, e.default);
    });
    SCC_CONTROLS.radios.forEach(e => {
        if (sccStore.get(e.name, null) === null) sccStore.set(e.name, e.default);
    });
    sccLog('conv', '默认值已补齐');
}

// 统一初始化：DOMContentLoaded 与 Pjax 完成各执行一次
function sccInit() {
    sccSeedDefaults();
    sccBindStatic(); // 一次性监听
    SCC_CONTROLS.checkboxes.forEach(sccBindCheckbox);
    SCC_CONTROLS.ranges.forEach(sccBindRange);
    SCC_CONTROLS.radios.forEach(sccBindRadio);
    sccInitTabs();
    sccInitFont();
    sccInitBg();
    sccFillInfo();
    sccLog('conv', '控制台初始化完成');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sccInit);
} else {
    sccInit();
}
document.addEventListener('pjax:complete', sccInit);
