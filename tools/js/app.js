function windowPopup(e, t, n) {
    var o = screen.width / 2 - t / 2,
        r = screen.height / 2 - n / 2;
    window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + t + ",height=" + n + ",top=" + r + ",left=" + o)
}! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function() {
    var e;
    return function e(t, n, o) {
        function r(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (i) return i(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = n[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n || e)
                }, u, u.exports, e, t, n, o)
            }
            return n[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < o.length; a++) r(o[a]);
        return r
    }({
        1: [function(e, t, n) {
            function o(e, t) {
                for (; e && e.nodeType !== r;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
            }
            var r = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = o
        }, {}],
        2: [function(e, t, n) {
            function o(e, t, n, o, i) {
                var a = r.apply(this, arguments);
                return e.addEventListener(n, a, i), {
                    destroy: function() {
                        e.removeEventListener(n, a, i)
                    }
                }
            }

            function r(e, t, n, o) {
                return function(n) {
                    n.delegateTarget = i(n.target, t), n.delegateTarget && o.call(e, n)
                }
            }
            var i = e("./closest");
            t.exports = o
        }, {
            "./closest": 1
        }],
        3: [function(e, t, n) {
            n.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}],
        4: [function(e, t, n) {
            function o(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!c.string(t)) throw new TypeError("Second argument must be a String");
                if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
                if (c.node(e)) return r(e, t, n);
                if (c.nodeList(e)) return i(e, t, n);
                if (c.string(e)) return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function r(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function() {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function i(e, t, n) {
                return Array.prototype.forEach.call(e, function(e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(e, function(e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function a(e, t, n) {
                return l(document.body, e, t, n)
            }
            var c = e("./is"),
                l = e("delegate");
            t.exports = o
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(e, t, n) {
            function o(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var o = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(e), o.removeAllRanges(), o.addRange(r), t = o.toString()
                }
                return t
            }
            t.exports = o
        }, {}],
        6: [function(e, t, n) {
            function o() {}
            o.prototype = {
                on: function(e, t, n) {
                    var o = this.e || (this.e = {});
                    return (o[e] || (o[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    function o() {
                        r.off(e, o), t.apply(n, arguments)
                    }
                    var r = this;
                    return o._ = t, this.on(e, o, n)
                },
                emit: function(e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        o = 0,
                        r = n.length;
                    for (o; o < r; o++) n[o].fn.apply(n[o].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        o = n[e],
                        r = [];
                    if (o && t)
                        for (var i = 0, a = o.length; i < a; i++) o[i].fn !== t && o[i].fn._ !== t && r.push(o[i]);
                    return r.length ? n[e] = r : delete n[e], this
                }
            }, t.exports = o
        }, {}],
        7: [function(t, n, o) {
            ! function(r, i) {
                if ("function" == typeof e && e.amd) e(["module", "select"], i);
                else if (void 0 !== o) i(n, t("select"));
                else {
                    var a = {
                        exports: {}
                    };
                    i(a, r.select), r.clipboardAction = a.exports
                }
            }(this, function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var o = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(t),
                    r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t
                        }
                    }(),
                    a = function() {
                        function e(t) {
                            n(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return i(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function() {
                                    return e.removeFake()
                                }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, o.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function(e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.target && this.target.blur(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = a
            })
        }, {
            select: 5
        }],
        8: [function(t, n, o) {
            ! function(r, i) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], i);
                else if (void 0 !== o) i(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var a = {
                        exports: {}
                    };
                    i(a, r.clipboardAction, r.tinyEmitter, r.goodListener), r.clipboard = a.exports
                }
            }(this, function(e, t, n, o) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function c(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var s = r(t),
                    u = r(n),
                    f = r(o),
                    d = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t
                        }
                    }(),
                    p = function(e) {
                        function t(e, n) {
                            i(this, t);
                            var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return o.resolveOptions(n), o.listenClick(e), o
                        }
                        return c(t, e), d(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                            }
                        }, {
                            key: "listenClick",
                            value: function(e) {
                                var t = this;
                                this.listener = (0, f.default)(e, "click", function(e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(e) {
                                var t = l("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function(e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e,
                                    n = !!document.queryCommandSupported;
                                return t.forEach(function(e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), t
                    }(u.default);
                e.exports = p
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
});
var saveAs = saveAs || function(e) {
    "use strict";
    if (!(void 0 === e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document,
            n = function() {
                return e.URL || e.webkitURL || e
            },
            o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            r = "download" in o,
            i = function(e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t)
            },
            a = /constructor/i.test(e.HTMLElement) || e.safari,
            c = /CriOS\/[\d]+/.test(navigator.userAgent),
            l = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            s = function(e) {
                var t = function() {
                    "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                };
                setTimeout(t, 4e4)
            },
            u = function(e, t, n) {
                t = [].concat(t);
                for (var o = t.length; o--;) {
                    var r = e["on" + t[o]];
                    if ("function" == typeof r) try {
                        r.call(e, n || e)
                    } catch (e) {
                        l(e)
                    }
                }
            },
            f = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
                    type: e.type
                }) : e
            },
            d = function(t, l, d) {
                d || (t = f(t));
                var p, h = this,
                    v = t.type,
                    g = "application/octet-stream" === v,
                    y = function() {
                        u(h, "writestart progress write writeend".split(" "))
                    };
                if (h.readyState = h.INIT, r) return p = n().createObjectURL(t), void setTimeout(function() {
                    o.href = p, o.download = l, i(o), y(), s(p), h.readyState = h.DONE
                });
                ! function() {
                    if ((c || g && a) && e.FileReader) {
                        var o = new FileReader;
                        return o.onloadend = function() {
                            var t = c ? o.result : o.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                            e.open(t, "_blank") || (e.location.href = t), t = void 0, h.readyState = h.DONE, y()
                        }, o.readAsDataURL(t), void(h.readyState = h.INIT)
                    }
                    if (p || (p = n().createObjectURL(t)), g) e.location.href = p;
                    else {
                        e.open(p, "_blank") || (e.location.href = p)
                    }
                    h.readyState = h.DONE, y(), s(p)
                }()
            },
            p = d.prototype,
            h = function(e, t, n) {
                return new d(e, t || e.name || "download", n)
            };
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
            return t = t || e.name || "download", n || (e = f(e)), navigator.msSaveOrOpenBlob(e, t)
        } : (p.abort = function() {}, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, h)
    }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null !== define.amd && define("FileSaver.js", function() {
    return saveAs
}), document.documentElement.className = "js", $(document).ready(function() {
    function e(e, n) {
        clearTimeout(p), $(".messages .message").length > 0 ? $(".messages .message").stop().fadeOut(400, function() {
            $(this).remove(), t(e, n)
        }) : t(e, n)
    }

    function t(e, t) {
        $(".messages").append('<div class="message ' + t + '">' + e + "</div>").hide().fadeIn(400), p = setTimeout(function() {
            $(".messages .message").fadeOut(400, function() {
                $(this).remove()
            })
        }, 3e3)
    }

    function n() {
        h + 7e3 < Date.now() && (void 0 != googletag && googletag.pubads().refresh(), h = Date.now())
    }

    function o(e) {
        e = e.toLowerCase();
        for (var t = !0, n = "", o = 0; o < e.length; o++) {
            var r = e.charAt(o);
            /\.|\!|\?|\n|\r/.test(r) ? t = !0 : "" != $.trim(r) && 1 == t && (r = r.toUpperCase(), t = !1), n += r
        }
        return "/" == window.location.pathname && (n = n.replace(/\bi\b/g, "I")), n = a(n)
    }

    function r(e) {
        e = e.toLowerCase();
        for (var t = "", n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            t += n % 2 ? o.toUpperCase() : o
        }
        return t
    }

    function i(e) {
        return c = e.toLowerCase(), c = (c + "").replace(/^(\S)|\s+(\S)/g, function(e) {
            return e.toUpperCase()
        }), c = a(c), c = c.replace(/\(([A-Za-z])/g, function(e) {
            return e.toUpperCase()
        }), c
    }

    function a(e) {
        return e = e.replace(/\"([A-Za-z])/g, function(e) {
            return e.toUpperCase()
        })
    }

    function r(e) {
        e = e.toLowerCase();
        for (var t = "", n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            t += n % 2 ? o.toUpperCase() : o
        }
        return t
    }

    function l(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var o = e.charAt(n);
            t += o == o.toUpperCase() ? o.toLowerCase() : o.toUpperCase()
        }
        return t
    }

    function s(e) {
        return e = i(e), e = e.replace(/\b(A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via)\b/g, function(e) {
            return e.toLowerCase()
        }), e = e.replace(/(?:([\.\?!] |\n|^))(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|vs?\\.?|via)/g, function(e) {
            return i(e)
        })
    }

    function u() {
        window.location.search.indexOf("hyphenate=true") > -1 && ($("#content").val($("#content").val().replace(/ /g, "-")), $("#content").attr("placeholder", $("#content").attr("placeholder").replace(/ /g, ""))), window.location.search.indexOf("stripdashes=true") > -1 && ($("#content").val($("#content").val().replace(/-/g, " ")), $("#content").attr("placeholder", $("#content").attr("placeholder").replace(/-/g, " "))), window.location.search.indexOf("stripspaces=true") > -1 && ($("#content").val($("#content").val().replace(/ /g, "")), $("#content").attr("placeholder", $("#content").attr("placeholder").replace(/ /g, "")))
    }

    function f() {
        $(".char_count").text($("#content").val().length), 0 == $.trim($("#content").val()).length ? $(".word_count").val("0") : $(".word_count").text($.trim($("#content").val()).replace(/\s+/gi, " ").split(" ").length)
    }

    function d(e, t, n, o) {
        var r = new Date;
        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
        var i = "expires=" + r.toUTCString();
        document.cookie = e + "=" + t + ";" + i + ";path=" + o
    }
    var p, h = Date.now();
    if (1 == $("#content").length) {
        $("#content").focus(), $("#upper").click(function() {
            return $("#content").val($("#content").val().toUpperCase()).focus(), $("#content").attr("placeholder", $("#content").attr("placeholder").toUpperCase()), u(), "function" == typeof ga && ga("send", "event", "Convert", "Upper", "", $(".word_count").text()), n(), !1
        }), $("#lower").click(function() {
            return $("#content").val($("#content").val().toLowerCase()).focus(), $("#content").attr("placeholder", $("#content").attr("placeholder").toLowerCase()), u(), "function" == typeof ga && ga("send", "event", "Convert", "Lower", "", $(".word_count").text()), n(), !1
        }), $("#capitalized").click(function() {
            return $("#content").val(i($("#content").val().toLowerCase())).focus(), $("#content").attr("placeholder", i($("#content").attr("placeholder"))), u(), "function" == typeof ga && ga("send", "event", "Convert", "Capitalized", "", $(".word_count").text()), n(), !1
        }), $("#sentence").click(function() {
            return $("#content").val(o($("#content").val())).focus(), $("#content").attr("placeholder", o($("#content").attr("placeholder"))), u(), "function" == typeof ga && ga("send", "event", "Convert", "Sentence", "", $(".word_count").text()), n(), !1
        }), $("#alternating").click(function() {
            return $("#content").val(r($("#content").val())).focus(), $("#content").attr("placeholder", r($("#content").attr("placeholder"))), u(), "function" == typeof ga && ga("send", "event", "Convert", "Alternating", "", $(".word_count").text()), n(), !1
        }), $("#inverse").click(function() {
            return $("#content").val(l($("#content").val())).focus(), $("#content").attr("placeholder", l($("#content").attr("placeholder"))), u(), "function" == typeof ga && ga("send", "event", "Convert", "Inverse", "", $(".word_count").text()), n(), !1
        }), $("#title").click(function() {
            return $("#content").val(s($("#content").val())).focus(), $("#content").attr("placeholder", s($("#content").attr("placeholder"))), u(), "function" == typeof ga && ga("send", "event", "Convert", "Title", "", $(".word_count").text()), n(), !1
        });
        try {
            new Blob;
            $("#download").show().click(function() {
                if (0 == $("#content").val().length) e(no_text, "error");
                else {
                    var t = $("#content").val().replace(/\n/g, "\r\n"),
                        o = new Blob([t], {
                            type: "text/plain;charset=utf-8"
                        });
                    saveAs(o, file_name), e(downloaded, "success"), "function" == typeof ga && ga("send", "event", "Download", "Download", "", $(".word_count").text())
                }
                return n(), !1
            })
        } catch (e) {}
        $("#content").on("focus blue keyup", function() {
            f()
        }), f();
        var v = new Clipboard("#copy");
        v.on("success", function(t) {
            e(copied, "success"), "function" == typeof ga && ga("send", "event", "Copied", "Copied", "", $(".word_count").text()), n(), t.clearSelection()
        }), v.on("error", function(t) {
            e(manual_copy, "info"), "function" == typeof ga && ga("send", "event", "Copied", "Copied", "", $(".word_count").text()), n()
        }), $(".share").on("click", function(e) {
            e.preventDefault(), windowPopup($(this).attr("href"), 520, 320)
        })
    }
    "y" != function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
            for (var r = n[o];
                " " == r.charAt(0);) r = r.substring(1);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
        }
        return ""
    }("ACCEPTCONSENT") && ($(".cookiebar").show(), $(".cookiebar .ok").click(function(e) {
        e.preventDefault(), $(".cookiebar").slideUp(), d("ACCEPTCONSENT", "y", 365, "/")
    }))
}), "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");
