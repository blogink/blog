
    jQuery(document).ready(function ($) {
        var myCursor = jQuery(".mouse-cursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n, i = 0, o = !1;
                window.onmousemove = function (s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)",
                        n = s.clientY,
                        i = s.clientX
                },
                    $("body").on("mouseenter", "a, .btn:not(disabled):not(.disabled),summary, .cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
                    }),
                    $("body").on("mouseleave", "a, .btn:not(disabled):not(.disabled),summary, .cursor-pointer", function () {
                        $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
                    }),
                    $("body").on("mousedown", function () {
                        e.classList.add("cursor-active"), t.classList.add("cursor-active")
                    }),
                    $("body").on("mouseup", function () {
                        e.classList.remove("cursor-active"), t.classList.remove("cursor-active")
                    }),
                    $("body").on("mouseenter", "p, span:not([unselectable]):not([class]), blockquote, textarea:not(disabled), input:not(disabled):not([type=checkbox]):not([type=radio]), .form-control", function () {
                        e.classList.add("cursor-typein"), t.classList.add("cursor-typein")
                    }),
                    $("body").on("mouseleave", "p, span:not([unselectable]):not([class]), blockquote, textarea:not(disabled), input:not(disabled):not([type=checkbox]):not([type=radio]), .form-control", function () {
                        e.classList.remove("cursor-typein"), t.classList.remove("cursor-typein")
                    }),
                    e.style.visibility = "visible", t.style.visibility = "visible"
            }
        }
    })