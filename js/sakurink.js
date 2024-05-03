function removelrc() {
  const lrcIcon = document.querySelector(".aplayer-icon-lrc");
  if (!lrcIcon) {
    return;
  }
  observer.disconnect();
  setTimeout(() => {
    lrcIcon.click();
  }, 1);
  console.log("success");
}
const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      removelrc();
    }
  }
});
const observerConfig = { childList: true, subtree: true };
observer.observe(document, observerConfig);

var originTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "w(ﾟДﾟ)w不要走啊！！！ " + originTitle;
    if (titleTime != null) {
      clearTimeout(titleTime);
    }
  } else {
    document.title = "ヾ(^▽^*)))欢迎回来！ " + originTitle;
    titleTime = setTimeout(function () {
      document.title = originTitle;
    }, 2000);
  }
});

pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function (responseText, request, href, options) {
  Object.defineProperty(request, "responseURL", { value: href });
  pjax.site_handleResponse(responseText, request, href, options);
};
