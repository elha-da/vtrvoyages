/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase()
    }, q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {jquery: f,constructor: x,init: function(e, n, r) {
        var i, o;
        if (!e) {
            return this
        }
        if ("string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            if (i[1]) {
                if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) {
                    for (i in n) {
                        x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                    }
                }
                return this
            }
            if (o = a.getElementById(i[2]), o && o.parentNode) {
                if (o.id !== i[2]) {
                    return r.find(e)
                }
                this.length = 1, this[0] = o
            }
            return this.context = a, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
    },selector: "",length: 0,toArray: function() {
        return g.call(this)
    },get: function(e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    },pushStack: function(e) {
        var t = x.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    },each: function(e, t) {
        return x.each(this, e, t)
            },ready: function(e) {
		return x.ready.promise().done(e), this
            },slice: function() {
		return this.pushStack(g.apply(this, arguments))
            },first: function() {
		return this.eq(0)
            },last: function() {
		return this.eq(-1)
            },eq: function(e) {
		var t = this.length, n = +e + (0 > e ? t : 0);
		return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },map: function(e) {
		return this.pushStack(x.map(this, function(t, n) {
                    return e.call(t, n, t)
		}))
            },end: function() {
		return this.prevObject || this.constructor(null)
            },push: h,sort: [].sort,splice: [].splice}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
		    if (null != (o = arguments[l])) {
			for (i in o) {
			    e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
			}
		    }
		}
		return s
	    }, x.extend({expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),noConflict: function(t) {
		return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
            },isReady: !1,readyWait: 1,holdReady: function(e) {
		e ? x.readyWait++ : x.ready(!0)
            },ready: function(e) {
		if (e === !0 ? !--x.readyWait : !x.isReady) {
                    if (!a.body) {
			return setTimeout(x.ready)
                    }
                    x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
		}
            },isFunction: function(e) {
		return "function" === x.type(e)
            },isArray: Array.isArray || function(e) {
		return "array" === x.type(e)
            },isWindow: function(e) {
		return null != e && e == e.window
            },isNumeric: function(e) {
		return !isNaN(parseFloat(e)) && isFinite(e)
            },type: function(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
            },isPlainObject: function(e) {
		var n;
		if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
                    return !1
		}
		try {
                    if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
			return !1
                    }
		} catch (r) {
                    return !1
		}
		if (x.support.ownLast) {
                    for (n in e) {
			return v.call(e, n)
                    }
		}
		for (n in e) {
		}
		return n === t || v.call(e, n)
            },isEmptyObject: function(e) {
		var t;
		for (t in e) {
                    return !1
		}
		return !0
            },error: function(e) {
		throw Error(e)
            },parseHTML: function(e, t, n) {
		if (!e || "string" != typeof e) {
                    return null
		}
		"boolean" == typeof t && (n = t, t = !1), t = t || a;
		var r = k.exec(e), i = !n && [];
		return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
            },parseJSON: function(n) {
		return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
            },parseXML: function(n) {
		var r, i;
		if (!n || "string" != typeof n) {
                    return null
		}
		try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
		} catch (o) {
                    r = t
		}
		return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
            },noop: function() {
            },globalEval: function(t) {
		t && x.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
		})(t)
            },camelCase: function(e) {
		return e.replace(D, "ms-").replace(L, H)
            },nodeName: function(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },each: function(e, t, n) {
		var r, i = 0, o = e.length, a = M(e);
		if (n) {
                    if (a) {
			for (; o > i; i++) {
                            if (r = t.apply(e[i], n), r === !1) {
				break
                            }
			}
                    } else {
			for (i in e) {
                            if (r = t.apply(e[i], n), r === !1) {
				break
                            }
			}
                    }
		} else {
                    if (a) {
			for (; o > i; i++) {
                            if (r = t.call(e[i], i, e[i]), r === !1) {
				break
                            }
			}
                    } else {
			for (i in e) {
                            if (r = t.call(e[i], i, e[i]), r === !1) {
				break
                            }
			}
                    }
		}
		return e
            },trim: b && !b.call("\ufeff\u00a0") ? function(e) {
		return null == e ? "" : b.call(e)
            } : function(e) {
		return null == e ? "" : (e + "").replace(C, "")
            },makeArray: function(e, t) {
		var n = t || [];
		return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
            },inArray: function(e, t, n) {
		var r;
		if (t) {
                    if (m) {
			return m.call(t, e, n)
                    }
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
			if (n in t && t[n] === e) {
                            return n
			}
                    }
		}
		return -1
            },merge: function(e, n) {
		var r = n.length, i = e.length, o = 0;
		if ("number" == typeof r) {
                    for (; r > o; o++) {
			e[i++] = n[o]
                    }
		} else {
                    while (n[o] !== t) {
			e[i++] = n[o++]
                    }
		}
		return e.length = i, e
            },grep: function(e, t, n) {
		var r, i = [], o = 0, a = e.length;
		for (n = !!n; a > o; o++) {
                    r = !!t(e[o], o), n !== r && i.push(e[o])
		}
		return i
            },map: function(e, t, n) {
		var r, i = 0, o = e.length, a = M(e), s = [];
		if (a) {
                    for (; o > i; i++) {
			r = t(e[i], i, n), null != r && (s[s.length] = r)
                    }
		} else {
                    for (i in e) {
			r = t(e[i], i, n), null != r && (s[s.length] = r)
                    }
		}
		return d.apply([], s)
            },guid: 1,proxy: function(e, n) {
		var r, i, o;
		return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(g.call(arguments)))
		}, i.guid = e.guid = e.guid || x.guid++, i) : t
            },access: function(e, n, r, i, o, a, s) {
		var l = 0, u = e.length, c = null == r;
		if ("object" === x.type(r)) {
                    o = !0;
                    for (l in r) {
			x.access(e, n, l, r[l], !0, a, s)
                    }
		} else {
                    if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
			return c.call(x(e), n)
                    })), n)) {
			for (; u > l; l++) {
                            n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)))
			}
                    }
		}
		return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
            },now: function() {
		return (new Date).getTime()
            },swap: function(e, t, n, r) {
		var i, o, a = {};
		for (o in t) {
                    a[o] = e.style[o], e.style[o] = t[o]
		}
		i = n.apply(e, r || []);
		for (o in t) {
                    e.style[o] = a[o]
		}
		return i
            }}), x.ready.promise = function(t) {
		if (!n) {
		    if (n = x.Deferred(), "complete" === a.readyState) {
			setTimeout(x.ready)
		    } else {
			if (a.addEventListener) {
			    a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1)
			} else {
			    a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			    var r = !1;
			    try {
				r = null == e.frameElement && a.documentElement
			    } catch (i) {
			    }
			    r && r.doScroll && function o() {
				if (!x.isReady) {
				    try {
					r.doScroll("left")
				    } catch (e) {
					return setTimeout(o, 50)
				    }
				    _(), x.ready()
				}
			    }()
			}
		    }
		}
		return n.promise(t)
	    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a), function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0, n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t
                }
            }
            return -1
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {ID: RegExp("^#(" + R + ")"),CLASS: RegExp("^\\.(" + R + ")"),TAG: RegExp("^(" + R.replace("w", "w*") + ")"),ATTR: RegExp("^" + $),PSEUDO: RegExp("^" + I),CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),bool: RegExp("^(?:" + B + ")$", "i"),needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")}, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {apply: H.length ? function(e, t) {
                _.apply(e, O.call(t))
            } : function(e, t) {
                var n = e.length, r = 0;
                while (e[n++] = t[r++]) {
                }
                e.length = n - 1
            }}
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) {
                return n
            }
            if (1 !== (l = t.nodeType) && 9 !== l) {
                return []
            }
            if (h && !i) {
                if (o = Z.exec(e)) {
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s), !a || !a.parentNode) {
                                return n
                            }
                            if (a.id === s) {
                                return n.push(a), n
                            }
                        } else {
                            if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
                                return n.push(a), n
                            }
                        }
                    } else {
                        if (o[2]) {
                            return M.apply(n, t.getElementsByTagName(e)), n
                        }
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
                            return M.apply(n, t.getElementsByClassName(s)), n
                        }
                    }
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--) {
                            c[u] = m + yt(c[u])
                        }
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x) {
                        try {
                            return M.apply(n, y.querySelectorAll(x)), n
                        } catch (T) {
                        }finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0, e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            }finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--) {
                o.attrHandle[n[r]] = t
            }
        }
        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) {
                return r
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t, lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }), r.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function(e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return !0
                        }
                    }
                }
                return !1
            }, A = d.compareDocumentPosition ? function(e, t) {
                if (e === t) {
                    return S = !0, 0
                }
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) {
                    return S = !0, 0
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
                }
                if (o === a) {
                    return pt(e, t)
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r)
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r)
                }
                while (s[i] === l[i]) {
                    i++
                }
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function(e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch (i) {
                }
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++]) {
                    t === e[o] && (i = n.push(o))
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            return e
        }, a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += a(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += a(t)
                }
            }
            return n
        }, o = at.selectors = {cacheLength: 50,createPseudo: lt,match: Q,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(e) {
            return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
        },PSEUDO: function(e) {
            var n, r = !e[5] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
        }},filter: {TAG: function(e) {
            var t = e.replace(rt, it).toLowerCase();
            return "*" === e ? function() {
                return !0
            } : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
            }
        },CLASS: function(e) {
            var t = N[e + " "];
            return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
            })
        },ATTR: function(e, t, n) {
            return function(r) {
                var i = at.attr(r, e);
                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
        },CHILD: function(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
            return 1 === r && 0 === i ? function(e) {
                return !!e.parentNode
            } : function(t, n, l) {
                var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                if (m) {
                    if (o) {
                        while (g) {
                            p = t;
                            while (p = p[g]) {
                                if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                    return !1
                                }
                            }
                            h = g = "only" === e && !h && "nextSibling"
                        }
                        return !0
                    }
                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                        c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                            if (1 === p.nodeType && ++f && p === t) {
                                c[e] = [T, d, f];
                                break
                            }
                        }
                    } else {
                        if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
                            f = u[1]
                        } else {
                            while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) {
                                    break
                                }
                            }
                        }
                    }
                    return f -= i, f === r || 0 === f % r && f / r >= 0
                }
            }
        },PSEUDO: function(e, t) {
            var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
            return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                var i, o = r(e, t), a = o.length;
                while (a--) {
                    i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                }
            }) : function(e) {
                return r(e, 0, n)
            }) : r
        }},pseudos: {not: lt(function(e) {
            var t = [], n = [], r = l(e.replace(z, "$1"));
            return r[b] ? lt(function(e, t, n, i) {
                var o, a = r(e, null, i, []), s = e.length;
                while (s--) {
                    (o = a[s]) && (e[s] = !(t[s] = o))
                }
            }) : function(e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop()
            }
        }),has: lt(function(e) {
            return function(t) {
                return at(e, t).length > 0
            }
        }),contains: lt(function(e) {
            return function(t) {
                return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
            }
        }),lang: lt(function(e) {
            return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function(t) {
                var n;
                do {
                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                        return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                    }
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
            }
        }),target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
        },root: function(e) {
            return e === d
        },focus: function(e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },enabled: function(e) {
            return e.disabled === !1
        },disabled: function(e) {
            return e.disabled === !0
        },checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
        },selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                    return !1
                }
            }
            return !0
        },parent: function(e) {
            return !o.pseudos.empty(e)
        },header: function(e) {
            return tt.test(e.nodeName)
        },input: function(e) {
            return et.test(e.nodeName)
        },button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
        },text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        },first: ht(function() {
            return [0]
        }),last: ht(function(e, t) {
            return [t - 1]
        }),eq: ht(function(e, t, n) {
            return [0 > n ? n + t : n]
        }),even: ht(function(e, t) {
            var n = 0;
            for (; t > n; n += 2) {
                e.push(n)
            }
            return e
        }),odd: ht(function(e, t) {
            var n = 1;
            for (; t > n; n += 2) {
                e.push(n)
            }
            return e
        }),lt: ht(function(e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; --r >= 0; ) {
                e.push(r)
            }
            return e
        }),gt: ht(function(e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; t > ++r; ) {
                e.push(r)
            }
            return e
        })}}, o.pseudos.nth = o.pseudos.eq;
        for (n in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0}) {
            o.pseudos[n] = ft(n)
        }
        for (n in {submit: !0,reset: !0}) {
            o.pseudos[n] = dt(n)
        }
        function gt() {
        }
        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({value: n,type: r[0].replace(z, " ")}), s = s.slice(n.length));
                for (a in o.filter) {
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({value: n,type: a,matches: r}), s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++) {
                r += e[t].value
            }
            return r
        }
        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, i)
                    }
                }
            } : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return !0
                        }
                    }
                } else {
                    while (t = t[r]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i) {
                                    return l === !0
                                }
                            } else {
                                if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) {
                                    return !0
                                }
                            }
                        }
                    }
                }
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return !1
                    }
                }
                return !0
            } : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++) {
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s))
            }
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--) {
                        (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--) {
                                (p = y[c]) && u.push(m[c] = p)
                            }
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--) {
                            (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    }
                } else {
                    y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                }
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++) {
                if (n = o.relative[e[l].type]) {
                    f = [vt(bt(f), n)]
                } else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                        for (r = ++l; i > r; r++) {
                            if (o.relative[e[r].type]) {
                                break
                            }
                        }
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || 0.1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, l, c)
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = q.call(p))
                            }
                        }
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--) {
                    o = Tt(t[n]), o[b] ? r.push(o) : i.push(o)
                }
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++) {
                at(e, t[r], n)
            }
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) {
                        return n
                    }
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type]) {
                        break
                    }
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e) {
                            return M.apply(n, i), n
                        }
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }
        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {add: function() {
            if (l) {
                var t = l.length;
                (function i(t) {
                    x.each(t, function(t, n) {
                        var r = x.type(n);
                        "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                    })
			})(arguments), n ? o = l.length : r && (s = t, c(r))
            }
            return this
        },remove: function() {
            return l && x.each(arguments, function(e, t) {
                var r;
                while ((r = x.inArray(t, l, r)) > -1) {
                    l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                }
            }), this
        },has: function(e) {
            return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
        },empty: function() {
            return l = [], o = 0, this
        },disable: function() {
            return l = u = r = t, this
        },disabled: function() {
            return !l
        },lock: function() {
            return u = t, r || p.disable(), this
        },locked: function() {
            return !u
        },fireWith: function(e, t) {
            return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
        },fire: function() {
            return p.fireWith(this, arguments), this
        },fired: function() {
            return !!i
        }};
        return p
    }, x.extend({Deferred: function(e) {
        var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = {state: function() {
            return n
        },always: function() {
            return i.done(arguments).fail(arguments), this
        },then: function() {
            var e = arguments;
            return x.Deferred(function(n) {
                x.each(t, function(t, o) {
                    var a = o[0], s = x.isFunction(e[t]) && e[t];
                    i[o[1]](function() {
                        var e = s && s.apply(this, arguments);
                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        },promise: function(e) {
            return null != e ? x.extend(e, r) : r
        }}, i = {};
        return r.pipe = r.then, x.each(t, function(e, o) {
            var a = o[2], s = o[3];
            r[o[1]] = a.add, s && a.add(function() {
                n = s
            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                return i[o[0] + "With"](this === i ? r : this, arguments), this
            }, i[o[0] + "With"] = a.fireWith
        }), r.promise(i), e && e.call(i, i), i
    },when: function(e) {
        var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
            return function(r) {
                t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
            }
        }, s, l, u;
        if (r > 1) {
            for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
                n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
            }
        }
        return i || o.resolveWith(u, n), o.promise()
    }}), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) {
            return t
        }
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {submit: !0,change: !0,focusin: !0}) {
            d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) {
            break
        }
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
            }
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) {
                        delete r[t[i]]
                    }
                    if (n ? !I(r) : !x.isEmptyObject(r)) {
                        return
                    }
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({cache: {},noData: {applet: !0,embed: !0,object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(e) {
        return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
    },data: function(e, t, n) {
        return R(e, t, n)
    },removeData: function(e, t) {
        return W(e, t)
    },_data: function(e, t, n) {
        return R(e, t, n, !0)
    },_removeData: function(e, t) {
        return W(e, t, !0)
    },acceptData: function(e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
            return !1
        }
        var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
        return !t || t !== !0 && e.getAttribute("classid") === t
    }}), x.fn.extend({data: function(e, n) {
        var r, i, o = null, a = 0, s = this[0];
        if (e === t) {
            if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                for (r = s.attributes; r.length > a; a++) {
                    i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]))
                }
                x._data(s, "parsedAttrs", !0)
            }
            return o
        }
        return "object" == typeof e ? this.each(function() {
            x.data(this, e)
        }) : arguments.length > 1 ? this.each(function() {
            x.data(this, e, n)
        }) : s ? $(s, e, x.data(s, e)) : null
    },removeData: function(e) {
        return this.each(function() {
            x.removeData(this, e)
        })
            }});
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }
    x.extend({queue: function(e, n, r) {
        var i;
        return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
    },dequeue: function(e, t) {
        t = t || "fx";
        var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function() {
            x.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },_queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return x._data(e, n) || x._data(e, n, {empty: x.Callbacks("once memory").add(function() {
            x._removeData(e, t + "queue"), x._removeData(e, n)
        })})
    }}), x.fn.extend({queue: function(e, n) {
        var r = 2;
        return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
            var t = x.queue(this, e, n);
            x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
        })
            },dequeue: function(e) {
		return this.each(function() {
                    x.dequeue(this, e)
		})
		    },delay: function(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
			    var r = setTimeout(t, e);
			    n.stop = function() {
				clearTimeout(r)
			    }
			})
		    },clearQueue: function(e) {
			return this.queue(e || "fx", [])
		    },promise: function(e, n) {
			var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
			    --i || o.resolveWith(a, [a])
			};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) {
			    r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l))
			}
			return l(), o.promise(n)
		    }});
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({attr: function(e, t) {
        return x.access(this, x.attr, e, t, arguments.length > 1)
    },removeAttr: function(e) {
        return this.each(function() {
            x.removeAttr(this, e)
        })
            },prop: function(e, t) {
		return x.access(this, x.prop, e, t, arguments.length > 1)
            },removeProp: function(e) {
		return e = x.propFix[e] || e, this.each(function() {
                    try {
			this[e] = t, delete this[e]
                    } catch (n) {
                    }
		})
		    },addClass: function(e) {
			var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
			if (x.isFunction(e)) {
			    return this.each(function(t) {
				x(this).addClass(e.call(this, t, this.className))
			    })
				}
			if (l) {
			    for (t = (e || "").match(T) || []; s > a; a++) {
				if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
				    o = 0;
				    while (i = t[o++]) {
					0 > r.indexOf(" " + i + " ") && (r += i + " ")
				    }
				    n.className = x.trim(r)
				}
			    }
			}
			return this
		    },removeClass: function(e) {
			var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) {
			    return this.each(function(t) {
				x(this).removeClass(e.call(this, t, this.className))
			    })
				}
			if (l) {
			    for (t = (e || "").match(T) || []; s > a; a++) {
				if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
				    o = 0;
				    while (i = t[o++]) {
					while (r.indexOf(" " + i + " ") >= 0) {
					    r = r.replace(" " + i + " ", " ")
					}
				    }
				    n.className = e ? x.trim(r) : ""
				}
			    }
			}
			return this
		    },toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
			    x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
			    if ("string" === n) {
				var t, r = 0, o = x(this), a = e.match(T) || [];
				while (t = a[r++]) {
				    o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				}
			    } else {
				(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
			    }
			})
			    },hasClass: function(e) {
				var t = " " + e + " ", n = 0, r = this.length;
				for (; r > n; n++) {
				    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
					return !0
				    }
				}
				return !1
			    },val: function(e) {
				var n, r, i, o = this[0];
				if (arguments.length) {
				    return i = x.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
					    return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				    })
					}
				if (o) {
				    return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
				}
			    }}), x.extend({valHooks: {option: {get: function(e) {
				var t = x.find.attr(e, "value");
				return null != t ? t : e.text
			    }},select: {get: function(e) {
				var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
				for (; s > l; l++) {
				    if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
					if (t = x(n).val(), o) {
					    return t
					}
					a.push(t)
				    }
				}
				return a
			    },set: function(e, t) {
				var n, r, i = e.options, o = x.makeArray(t), a = i.length;
				while (a--) {
				    r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
				}
				return n || (e.selectedIndex = -1), o
			    }}},attr: function(e, n, r) {
				var o, a, s = e.nodeType;
				if (e && 3 !== s && 8 !== s && 2 !== s) {
				    return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
				}
			    },removeAttr: function(e, t) {
				var n, r, i = 0, o = t && t.match(T);
				if (o && 1 === e.nodeType) {
				    while (n = o[i++]) {
					r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
				    }
				}
			    },attrHooks: {type: {set: function(e, t) {
				if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
				    var n = e.value;
				    return e.setAttribute("type", t), n && (e.value = n), t
				}
			    }}},propFix: {"for": "htmlFor","class": "className"},prop: function(e, n, r) {
				var i, o, a, s = e.nodeType;
				if (e && 3 !== s && 8 !== s && 2 !== s) {
				    return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
				}
			    },propHooks: {tabIndex: {get: function(e) {
				var t = x.find.attr(e, "tabindex");
				return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
			    }}}}), X = {set: function(e, t, n) {
				return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
			    }}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
				var r = x.expr.attrHandle[n] || x.find.attr;
				x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
				    var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
				    return x.expr.attrHandle[n] = o, a
				} : function(e, n, r) {
				    return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
				}
			    }), K && Q || (x.attrHooks.value = {set: function(e, n, r) {
				return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
			    }}), Q || (z = {set: function(e, n, r) {
				var i = e.getAttributeNode(r);
				return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
			    }}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
				var i;
				return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
			    }, x.valHooks.button = {get: function(e, n) {
				var r = e.getAttributeNode(n);
				return r && r.specified ? r.value : t
			    },set: z.set}, x.attrHooks.contenteditable = {set: function(e, t, n) {
				z.set(e, "" === t ? !1 : t, n)
			    }}, x.each(["width", "height"], function(e, n) {
				x.attrHooks[n] = {set: function(e, r) {
				    return "" === r ? (e.setAttribute(n, "auto"), r) : t
				}}
			    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
				x.propHooks[t] = {get: function(e) {
				    return e.getAttribute(t, 4)
				}}
			    }), x.support.style || (x.attrHooks.style = {get: function(e) {
				return e.style.cssText || t
			    },set: function(e, t) {
				return e.style.cssText = t + ""
			    }}), x.support.optSelected || (x.propHooks.selected = {get: function(e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			    }}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
				x.propFix[this.toLowerCase()] = this
			    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
				x.valHooks[this] = {set: function(e, n) {
				    return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
				}}, x.support.checkOn || (x.valHooks[this].get = function(e) {
				    return null === e.getAttribute("value") ? "on" : e.value
				})
			    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }
    x.event = {global: {},add: function(e, n, r, o, a) {
        var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
        if (v) {
            r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
            }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
            while (u--) {
                s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({type: g,origType: y,data: o,handler: r,guid: r.guid,selector: a,needsContext: a && x.expr.match.needsContext.test(a),namespace: m.join(".")}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0)
            }
            e = null
        }
    },remove: function(e, t, n, r, i) {
        var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
        if (m && (c = m.events)) {
            t = (t || "").match(T) || [""], u = t.length;
            while (u--) {
                if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                    while (o--) {
                        a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
                    }
                    l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                } else {
                    for (d in c) {
                        x.event.remove(e, d + t[u], n, r, !0)
                    }
                }
            }
            x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
        }
    },trigger: function(n, r, i, o) {
        var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
        if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
            if (!o && !p.noBubble && !x.isWindow(i)) {
                for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
                    h.push(u), f = u
                }
                f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
            }
            d = 0;
            while ((u = h[d++]) && !n.isPropagationStopped()) {
                n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
            }
            if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                f = i[l], f && (i[l] = null), x.event.triggered = g;
                try {
                    i[g]()
                } catch (y) {
                }
                x.event.triggered = t, f && (i[l] = f)
            }
            return n.result
        }
    },dispatch: function(e) {
        e = x.event.fix(e);
        var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
            s = x.event.handlers.call(this, e, u), n = 0;
            while ((o = s[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem, a = 0;
                while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                    (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
            }
            return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
    },handlers: function(e, n) {
        var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
        if (l && u.nodeType && (!e.button || "click" !== e.type)) {
            for (; u != this; u = u.parentNode || this) {
                if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                    for (o = [], a = 0; l > a; a++) {
                        i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i)
                    }
                    o.length && s.push({elem: u,handlers: o})
                }
            }
        }
        return n.length > l && s.push({elem: this,handlers: n.slice(l)}), s
    },fix: function(e) {
        if (e[x.expando]) {
            return e
        }
        var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
        s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
        while (t--) {
            n = r[t], e[n] = o[n]
        }
        return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
    },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(e, n) {
        var r, i, o, s = n.button, l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }},special: {load: {noBubble: !0},focus: {trigger: function() {
        if (this !== at() && this.focus) {
            try {
                return this.focus(), !1
            } catch (e) {
            }
        }
    },delegateType: "focusin"},blur: {trigger: function() {
        return this === at() && this.blur ? (this.blur(), !1) : t
    },delegateType: "focusout"},click: {trigger: function() {
        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
    },_default: function(e) {
        return x.nodeName(e.target, "a")
    }},beforeunload: {postDispatch: function(e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}},simulate: function(e, t, n, r) {
        var i = x.extend(new x.Event, n, {type: e,isSimulated: !0,originalEvent: {}});
        r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {isDefaultPrevented: ot,isPropagationStopped: ot,isImmediatePropagationStopped: ot,preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = it, this.stopPropagation()
    }}, x.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(e, t) {
        x.event.special[e] = {delegateType: t,bindType: t,handle: function(e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }}
    }), x.support.submitBubbles || (x.event.special.submit = {setup: function() {
        return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
            var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
            r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                e._submit_bubble = !0
            }), x._data(r, "submitBubbles", !0))
        }), t)
    },postDispatch: function(e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
    },teardown: function() {
        return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
    }}), x.support.changeBubbles || (x.event.special.change = {setup: function() {
        return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), x.event.add(this, "click._change", function(e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
        })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
            var t = e.target;
            Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
            }), x._data(t, "changeBubbles", !0))
        }), t)
    },handle: function(e) {
        var n = e.target;
        return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    },teardown: function() {
        return x.event.remove(this, "._change"), !Z.test(this.nodeName)
    }}), x.support.focusinBubbles || x.each({focus: "focusin",blur: "focusout"}, function(e, t) {
        var n = 0, r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {setup: function() {
            0 === n++ && a.addEventListener(e, r, !0)
        },teardown: function() {
            0 === --n && a.removeEventListener(e, r, !0)
        }}
    }), x.fn.extend({on: function(e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = t);
            for (a in e) {
                this.on(a, n, r, e[a], o)
            }
            return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
            i = ot
        } else {
            if (!i) {
                return this
            }
        }
        return 1 === o && (s = i, i = function(e) {
            return x().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
            x.event.add(this, e, i, r, n)
        })
            },one: function(e, t, n, r) {
		return this.on(e, t, n, r, 1)
            },off: function(e, n, r) {
		var i, o;
		if (e && e.preventDefault && e.handleObj) {
                    return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
		}
		if ("object" == typeof e) {
                    for (o in e) {
			this.off(o, n, e[o])
                    }
                    return this
		}
		return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                    x.event.remove(this, e, r, n)
		})
		    },trigger: function(e, t) {
			return this.each(function() {
			    x.event.trigger(e, t, this)
			})
			    },triggerHandler: function(e, n) {
				var r = this[0];
				return r ? x.event.trigger(e, n, r, !0) : t
			    }});
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {children: !0,contents: !0,next: !0,prev: !0};
    x.fn.extend({find: function(e) {
        var t, n = [], r = this, i = r.length;
        if ("string" != typeof e) {
            return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++) {
                    if (x.contains(r[t], this)) {
                        return !0
                    }
                }
            }))
        }
        for (t = 0; i > t; t++) {
            x.find(e, r[t], n)
        }
        return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    },has: function(e) {
        var t, n = x(e, this), r = n.length;
        return this.filter(function() {
            for (t = 0; r > t; t++) {
                if (x.contains(this, n[t])) {
                    return !0
                }
            }
        })
    },not: function(e) {
        return this.pushStack(ft(this, e || [], !0))
    },filter: function(e) {
        return this.pushStack(ft(this, e || [], !1))
    },is: function(e) {
        return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
    },closest: function(e, t) {
        var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
        for (; i > r; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
                if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                    n = o.push(n);
                    break
                }
            }
        }
        return this.pushStack(o.length > 1 ? x.unique(o) : o)
    },index: function(e) {
        return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },add: function(e, t) {
        var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
        return this.pushStack(x.unique(r))
    },addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }});
    function pt(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    x.each({parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    },parents: function(e) {
        return x.dir(e, "parentNode")
    },parentsUntil: function(e, t, n) {
        return x.dir(e, "parentNode", n)
    },next: function(e) {
        return pt(e, "nextSibling")
    },prev: function(e) {
        return pt(e, "previousSibling")
    },nextAll: function(e) {
        return x.dir(e, "nextSibling")
    },prevAll: function(e) {
        return x.dir(e, "previousSibling")
    },nextUntil: function(e, t, n) {
        return x.dir(e, "nextSibling", n)
    },prevUntil: function(e, t, n) {
        return x.dir(e, "previousSibling", n)
    },siblings: function(e) {
        return x.sibling((e.parentNode || {}).firstChild, e)
    },children: function(e) {
        return x.sibling(e.firstChild)
    },contents: function(e) {
        return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
    }}, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({filter: function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },dir: function(e, n, r) {
        var i = [], o = e[n];
        while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
            1 === o.nodeType && i.push(o), o = o[n]
        }
        return i
    },sibling: function(e, t) {
        var n = [];
        for (; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e)
        }
        return n
    }});
    function ft(e, t, n) {
        if (x.isFunction(t)) {
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            })
        }
        if (t.nodeType) {
            return x.grep(e, function(e) {
                return e === t !== n
            })
        }
        if ("string" == typeof t) {
            if (st.test(t)) {
                return x.filter(t, e, n)
            }
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({text: function(e) {
        return x.access(this, function(e) {
            return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
        }, null, e, arguments.length)
    },append: function() {
        return this.domManip(arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.appendChild(e)
            }
        })
    },prepend: function() {
        return this.domManip(arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    },before: function() {
        return this.domManip(arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    },after: function() {
        return this.domManip(arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    },remove: function(e, t) {
        var n, r = e ? x.filter(e, this) : this, i = 0;
        for (; null != (n = r[i]); i++) {
            t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n))
        }
        return this
    },empty: function() {
        var e, t = 0;
        for (; null != (e = this[t]); t++) {
            1 === e.nodeType && x.cleanData(Ft(e, !1));
            while (e.firstChild) {
                e.removeChild(e.firstChild)
            }
            e.options && x.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    },clone: function(e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
            return x.clone(this, e, t)
        })
    },html: function(e) {
        return x.access(this, function(e) {
            var n = this[0] || {}, r = 0, i = this.length;
            if (e === t) {
                return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
            }
            if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(vt, "<$1></$2>");
                try {
                    for (; i > r; r++) {
                        n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e)
                    }
                    n = 0
                } catch (o) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    },replaceWith: function() {
        var e = x.map(this, function(e) {
            return [e.nextSibling, e.parentNode]
        }), t = 0;
        return this.domManip(arguments, function(n) {
            var r = e[t++], i = e[t++];
            i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
        }, !0), t ? this : this.remove()
    },detach: function(e) {
        return this.remove(e, !0)
    },domManip: function(e, t, n) {
        e = d.apply([], e);
        var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
        if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
            return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            })
		}
        if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
            for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
                i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u)
            }
            if (o) {
                for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
                    i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
                }
            }
            l = r = null
        }
        return this
    }});
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        x.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) {
                    x.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
            }
        }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({clone: function(e, t, n) {
        var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
        if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
            for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
                r[a] && Ot(i, r[a])
            }
        }
        if (t) {
            if (n) {
                for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
                    Mt(i, r[a])
                }
            } else {
                Mt(e, o)
            }
        }
        return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
    },buildFragment: function(e, t, n, r) {
        var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
        for (; p > h; h++) {
            if (o = e[h], o || 0 === o) {
                if ("object" === x.type(o)) {
                    x.merge(d, o.nodeType ? [o] : o)
                } else {
                    if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                        while (i--) {
                            s = s.lastChild
                        }
                        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                            while (i--) {
                                x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                            }
                        }
                        x.merge(d, s.childNodes), s.textContent = "";
                        while (s.firstChild) {
                            s.removeChild(s.firstChild)
                        }
                        s = f.lastChild
                    } else {
                        d.push(t.createTextNode(o))
                    }
                }
            }
        }
        s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
        while (o = d[h++]) {
            if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                i = 0;
                while (o = s[i++]) {
                    kt.test(o.type || "") && n.push(o)
                }
            }
        }
        return s = null, f
    },cleanData: function(e, t) {
        var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
        for (; null != (n = e[s]); s++) {
            if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                if (a.events) {
                    for (r in a.events) {
                        f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
                    }
                }
                u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
            }
        }
    },_evalUrl: function(e) {
        return x.ajax({url: e,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }}), x.fn.extend({wrapAll: function(e) {
        if (x.isFunction(e)) {
            return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            })
		}
        if (this[0]) {
            var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstChild && 1 === e.firstChild.nodeType) {
                    e = e.firstChild
                }
                return e
            }).append(this)
        }
        return this
    },wrapInner: function(e) {
        return x.isFunction(e) ? this.each(function(t) {
            x(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
            var t = x(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
            },wrap: function(e) {
		var t = x.isFunction(e);
		return this.each(function(n) {
                    x(this).wrapAll(t ? e.call(this, n) : e)
		})
		    },unwrap: function() {
			return this.parent().each(function() {
			    x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		    }});
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {position: "absolute",visibility: "hidden",display: "block"}, Kt = {letterSpacing: 0,fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--) {
            if (t = en[i] + n, t in e) {
                return t
            }
        }
        return r
    }
    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) {
            r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
        }
        return e
    }
    x.fn.extend({css: function(e, n) {
        return x.access(this, function(e, n, r) {
            var i, o, a = {}, s = 0;
            if (x.isArray(n)) {
                for (o = Rt(e), i = n.length; i > s; s++) {
                    a[n[s]] = x.css(e, n[s], !1, o)
                }
                return a
            }
            return r !== t ? x.style(e, n, r) : x.css(e, n)
        }, e, n, arguments.length > 1)
    },show: function() {
        return rn(this, !0)
    },hide: function() {
        return rn(this)
    },toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
            nn(this) ? x(this).show() : x(this).hide()
        })
            }}), x.extend({cssHooks: {opacity: {get: function(e, t) {
                if (t) {
                    var n = Wt(e, "opacity");
                    return "" === n ? "1" : n
                }
            }}},cssNumber: {columnCount: !0,fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"},style: function(e, n, r, i) {
		if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = x.camelCase(n), u = e.style;
                    if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) {
			return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]
                    }
                    if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
			try {
                            u[n] = r
			} catch (c) {
			}
                    }
		}
            },css: function(e, n, r, i) {
		var o, a, s, l = x.camelCase(n);
		return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
            }}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	    }, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	    }) : a.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	    }, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }
    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
                return i
            }
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {get: function(e, r, i) {
            return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                return sn(e, n, i)
            }) : sn(e, n, i) : t
        },set: function(e, t, r) {
            var i = r && Rt(e);
            return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
        }}
    }), x.support.opacity || (x.cssHooks.opacity = {get: function(e, t) {
        return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },set: function(e, t) {
        var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
    }}), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {get: function(e, n) {
            return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
        }}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {get: function(e, r) {
                return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
            }}
        })
	    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	    }, x.expr.filters.visible = function(e) {
		return !x.expr.filters.hidden(e)
	    }), x.each({margin: "",padding: "",border: "Width"}, function(e, t) {
		x.cssHooks[e + t] = {expand: function(n) {
                    var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                    for (; 4 > r; r++) {
			i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                    }
                    return i
		}}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({serialize: function() {
        return x.param(this.serializeArray())
    },serializeArray: function() {
        return this.map(function() {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this
        }).filter(function() {
            var e = this.type;
            return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
        }).map(function(e, t) {
            var n = x(this).val();
            return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                return {name: t.name,value: e.replace(fn, "\r\n")}
            }) : {name: t.name,value: n.replace(fn, "\r\n")}
        }).get()
    }}), x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e, function() {
                o(this.name, this.value)
            })
		} else {
		    for (r in e) {
			gn(r, e[r], n, o)
		    }
		}
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
		} else {
		    if (n || "object" !== x.type(t)) {
			r(e, t)
		    } else {
			for (i in t) {
			    gn(e + "[" + i + "]", t[i], n, r)
			}
		    }
		}
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    },bind: function(e, t, n) {
        return this.on(e, null, t, n)
    },unbind: function(e, t) {
        return this.off(e, null, t)
    },delegate: function(e, t, n, r) {
        return this.on(t, e, n, r)
    },undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }});
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }
    function qn(e, n, r, i) {
        var o = {}, a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
        }
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({url: e,type: a,dataType: "html",data: n}).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
		}), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: yn,type: "GET",isLocal: Cn.test(mn[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Dn,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": x.parseJSON,"text xml": x.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(e, t) {
        return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
    },ajaxPrefilter: Hn(An),ajaxTransport: Hn(jn),ajax: function(e, n) {
        "object" == typeof e && (n = e, e = t), n = n || {};
        var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {readyState: 0,getResponseHeader: function(e) {
            var t;
            if (2 === b) {
                if (!c) {
                    c = {};
                    while (t = Tn.exec(a)) {
                        c[t[1].toLowerCase()] = t[2]
                    }
                }
                t = c[e.toLowerCase()]
            }
            return null == t ? null : t
        },getAllResponseHeaders: function() {
            return 2 === b ? a : null
        },setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = v[n] = v[n] || e, y[e] = t), this
        },overrideMimeType: function(e) {
            return b || (p.mimeType = e), this
        },statusCode: function(e) {
            var t;
            if (e) {
                if (2 > b) {
                    for (t in e) {
                        m[t] = [m[t], e[t]]
                    }
                } else {
                    C.always(e[C.status])
                }
            }
            return this
        },abort: function(e) {
            var t = e || w;
            return u && u.abort(t), k(0, t), this
        }};
        if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) {
            return C
        }
        l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
        for (i in p.headers) {
            C.setRequestHeader(i, p.headers[i])
        }
        if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
            return C.abort()
        }
        w = "abort";
        for (i in {success: 1,error: 1,complete: 1}) {
            C[i](p[i])
        }
        if (u = qn(jn, p, n, C)) {
            C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                C.abort("timeout")
            }, p.timeout));
            try {
                b = 1, u.send(y, k)
            } catch (N) {
                if (!(2 > b)) {
                    throw N
                }
                k(-1, N)
            }
        } else {
            k(-1, "No Transport")
        }
        function k(e, n, r, i) {
            var c, y, v, w, T, N = n;
            2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
        }
        return C
    },getJSON: function(e, t, n) {
        return x.get(e, t, n, "json")
    },getScript: function(e, n) {
        return x.get(e, t, n, "script")
    }}), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({url: e,type: n,dataType: o,data: r,success: i})
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in l) {
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
            }
        }
        if (u[0] in r) {
            a = u[0]
        } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        }
        o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
                if ("*" === o) {
                    o = l
                } else {
                    if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o], !a) {
                            for (i in u) {
                                if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                            }
                        }
                        if (a !== !0) {
                            if (a && e["throws"]) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (p) {
                                    return {state: "parsererror",error: a ? p : "No conversion from " + l + " to " + o}
                                }
                            }
                        }
                    }
                }
            }
        }
        return {state: "success",data: t}
    }
    x.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(e) {
        return x.globalEval(e), e
    }}}), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {send: function(t, i) {
                n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                }, r.insertBefore(n, r.firstChild)
            },abort: function() {
                n && n.onload(t, !0)
            }}
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
        var e = Fn.pop() || x.expando + "_" + vn++;
        return this[e] = !0, e
    }}), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0)
        }
    };
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {send: function(i, o) {
                var a, s, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) {
                    for (s in n.xhrFields) {
                        l[s] = n.xhrFields[s]
                    }
                }
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i) {
                        l.setRequestHeader(s, i[s])
                    }
                } catch (u) {
                }
                l.send(n.hasContent && n.data || null), r = function(e, i) {
                    var s, u, c, p;
                    try {
                        if (r && (i || 4 === l.readyState)) {
                            if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) {
                                4 !== l.readyState && l.abort()
                            } else {
                                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                            }
                        }
                    } catch (d) {
                        i || o(-1, d)
                    }
                    p && o(s, c, p, u)
                }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
            },abort: function() {
                r && r(t, !0)
            }}
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {"*": [function(e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
        if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1;
            do {
                s = s || ".5", a /= s, x.style(n.elem, e, a + o)
            } while (s !== (s = n.cur() / r) && 1 !== s && --l)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
    }]};
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++) {
            if (r = i[o].call(n, t, e)) {
                return r
            }
        }
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i) {
                return !1
            }
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++) {
                u.tweens[a].run(o)
            }
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({elem: e,props: x.extend({}, t),opts: x.extend(!0, {specialEasing: {}}, n),originalProperties: t,originalOptions: n,startTime: Xn || Kn(),duration: n.duration,tweens: [],createTween: function(t, n) {
            var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r
        },stop: function(t) {
            var n = 0, r = t ? u.tweens.length : 0;
            if (i) {
                return this
            }
            for (i = !0; r > n; n++) {
                u.tweens[n].run(1)
            }
            return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
        }}), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(u, e, c, u.opts)) {
                return r
            }
        }
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {elem: e,anim: u,queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }
    x.Animation = x.extend(er, {tweener: function(e, t) {
        x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        var n, r = 0, i = e.length;
        for (; i > r; r++) {
            n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        }
    },prefilter: function(e, t) {
        t ? Gn.unshift(e) : Gn.push(e)
    }});
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                    continue
                }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) {
                    x.style(e, t, c[t])
                }
            });
            for (r in c) {
                a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {constructor: rr,init: function(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
    },cur: function() {
        var e = rr.propHooks[this.prop];
        return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
    },run: function(e) {
        var t, n = rr.propHooks[this.prop];
        return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
    }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    },set: function(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({fadeTo: function(e, t, n, r) {
        return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    },animate: function(e, t, n, r) {
        var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function() {
            var t = er(this, x.extend({}, e), o);
            (i || x._data(this, "finish")) && t.stop(!0)
        };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    },stop: function(e, n, r) {
        var i = function(e) {
            var t = e.stop;
            delete e.stop, t(r)
        };
        return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
            var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
            if (n) {
                a[n] && a[n].stop && i(a[n])
            } else {
                for (n in a) {
                    a[n] && a[n].stop && Jn.test(n) && i(a[n])
                }
            }
            for (n = o.length; n--; ) {
                o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
            }
            (t || !r) && x.dequeue(this, e)
        })
            },finish: function(e) {
		return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                    for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) {
			o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                    }
                    for (t = 0; a > t; t++) {
			r[t] && r[t].finish && r[t].finish.call(this)
                    }
                    delete n.finish
		})
		    }});
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i], r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e), r
    }
    x.each({slideDown: ir("show"),slideUp: ir("hide"),slideToggle: ir("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {complete: n || !n && t || x.isFunction(e) && e,duration: e,easing: n && t || t && !x.isFunction(t) && t};
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {linear: function(e) {
        return e
    },swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
    }}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++) {
            e = n[r], e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {slow: 600,fast: 200,_default: 400}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            })
		}
        var n, r, o = {top: 0,left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : o
        }
    }, x.offset = {setOffset: function(e, t, n) {
        var r = x.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
        l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
    }}, x.fn.extend({position: function() {
        if (this[0]) {
            var e, t, n = {top: 0,left: 0}, r = this[0];
            return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - x.css(r, "marginTop", !0),left: t.left - n.left - x.css(r, "marginLeft", !0)}
        }
    },offsetParent: function() {
        return this.map(function() {
            var e = this.offsetParent || s;
            while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                e = e.offsetParent
            }
            return e || s
        })
    }}), x.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({Height: "height",Width: "width"}, function(e, n) {
        x.each({padding: "inner" + e,content: n,"": "outer" + e}, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
	    }), x.fn.size = function() {
		return this.length
	    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
		return x
	    }))
})(window);
/*! jQuery UI - v1.9.2 - 2012-11-26
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(f, b) {
    function a(j, m) {
        var k, h, l, e = j.nodeName.toLowerCase();
        return "area" === e ? (k = j.parentNode, h = k.name, !j.href || !h || k.nodeName.toLowerCase() !== "map" ? !1 : (l = f("img[usemap=#" + h + "]")[0], !!l && c(l))) : (/input|select|textarea|button|object/.test(e) ? !j.disabled : "a" === e ? j.href || m : m) && c(j)
    }
    function c(e) {
        return f.expr.filters.visible(e) && !f(e).parents().andSelf().filter(function() {
            return f.css(this, "visibility") === "hidden"
        }).length
    }
    var g = 0, d = /^ui-id-\d+$/;
    f.ui = f.ui || {};
    if (f.ui.version) {
        return
    }
    f.extend(f.ui, {version: "1.9.2",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), f.fn.extend({_focus: f.fn.focus,focus: function(e, h) {
        return typeof e == "number" ? this.each(function() {
            var i = this;
            setTimeout(function() {
                f(i).focus(), h && h.call(i)
            }, e)
        }) : this._focus.apply(this, arguments)
    },scrollParent: function() {
        var e;
        return f.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? e = this.parents().filter(function() {
            return /(relative|absolute|fixed)/.test(f.css(this, "position")) && /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x"))
        }).eq(0) : e = this.parents().filter(function() {
            return /(auto|scroll)/.test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !e.length ? f(document) : e
    },zIndex: function(k) {
        if (k !== b) {
            return this.css("zIndex", k)
        }
        if (this.length) {
            var j = f(this[0]), e, h;
            while (j.length && j[0] !== document) {
                e = j.css("position");
                if (e === "absolute" || e === "relative" || e === "fixed") {
                    h = parseInt(j.css("zIndex"), 10);
                    if (!isNaN(h) && h !== 0) {
                        return h
                    }
                }
                j = j.parent()
            }
        }
        return 0
    },uniqueId: function() {
        return this.each(function() {
            this.id || (this.id = "ui-id-" + ++g)
        })
            },removeUniqueId: function() {
		return this.each(function() {
                    d.test(this.id) && f(this).removeAttr("id")
		})
		    }}), f.extend(f.expr[":"], {data: f.expr.createPseudo ? f.expr.createPseudo(function(e) {
			return function(h) {
			    return !!f.data(h, e)
			}
		    }) : function(e, i, h) {
			return !!f.data(e, h[3])
		    },focusable: function(e) {
			return a(e, !isNaN(f.attr(e, "tabindex")))
		    },tabbable: function(e) {
			var i = f.attr(e, "tabindex"), h = isNaN(i);
			return (h || i >= 0) && a(e, !h)
		    }}), f(function() {
			var e = document.body, h = e.appendChild(h = document.createElement("div"));
			h.offsetHeight, f.extend(h.style, {minHeight: "100px",height: "auto",padding: 0,borderWidth: 0}), f.support.minHeight = h.offsetHeight === 100, f.support.selectstart = "onselectstart" in h, e.removeChild(h).style.display = "none"
		    }), f("<a>").outerWidth(1).jquery || f.each(["Width", "Height"], function(m, k) {
			function e(i, q, p, o) {
			    return f.each(h, function() {
				q -= parseFloat(f.css(i, "padding" + this)) || 0, p && (q -= parseFloat(f.css(i, "border" + this + "Width")) || 0), o && (q -= parseFloat(f.css(i, "margin" + this)) || 0)
			    }), q
			}
			var h = k === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], j = k.toLowerCase(), l = {innerWidth: f.fn.innerWidth,innerHeight: f.fn.innerHeight,outerWidth: f.fn.outerWidth,outerHeight: f.fn.outerHeight};
			f.fn["inner" + k] = function(i) {
			    return i === b ? l["inner" + k].call(this) : this.each(function() {
				f(this).css(j, e(this, i) + "px")
			    })
				}, f.fn["outer" + k] = function(i, o) {
				    return typeof i != "number" ? l["outer" + k].call(this, i) : this.each(function() {
					f(this).css(j, e(this, i, !0, o) + "px")
				    })
					}
		    }), f("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (f.fn.removeData = function(e) {
			return function(h) {
			    return arguments.length ? e.call(this, f.camelCase(h)) : e.call(this)
			}
		    }(f.fn.removeData)), function() {
			var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
			f.ui.ie = e.length ? !0 : !1, f.ui.ie6 = parseFloat(e[1], 10) === 6
		    }(), f.fn.extend({disableSelection: function() {
			return this.bind((f.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(h) {
			    h.preventDefault()
			})
		    },enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		    }}), f.extend(f.ui, {plugin: {add: function(h, l, k) {
			var e, j = f.ui[h].prototype;
			for (e in k) {
			    j.plugins[e] = j.plugins[e] || [], j.plugins[e].push([l, k[e]])
			}
		    },call: function(l, j, m) {
			var k, h = l.plugins[j];
			if (!h || !l.element[0].parentNode || l.element[0].parentNode.nodeType === 11) {
			    return
			}
			for (k = 0; k < h.length; k++) {
			    l.options[h[k][0]] && h[k][1].apply(l.element, m)
			}
		    }},contains: f.contains,hasScroll: function(h, k) {
			if (f(h).css("overflow") === "hidden") {
			    return !1
			}
			var j = k && k === "left" ? "scrollLeft" : "scrollTop", e = !1;
			return h[j] > 0 ? !0 : (h[j] = 1, e = h[j] > 0, h[j] = 0, e)
		    },isOverAxis: function(i, h, j) {
			return i > h && i < h + j
		    },isOver: function(h, m, k, e, j, l) {
			return f.ui.isOverAxis(h, k, j) && f.ui.isOverAxis(m, e, l)
		    }})
})(jQuery);
(function(d, b) {
    var f = 0, c = Array.prototype.slice, a = d.cleanData;
    d.cleanData = function(e) {
        for (var i = 0, h; (h = e[i]) != null; i++) {
            try {
                d(h).triggerHandler("remove")
            } catch (g) {
            }
        }
        a(e)
    }, d.widget = function(j, p, l) {
        var h, k, m, g, e = j.split(".")[0];
        j = j.split(".")[1], h = e + "-" + j, l || (l = p, p = d.Widget), d.expr[":"][h.toLowerCase()] = function(i) {
            return !!d.data(i, h)
        }, d[e] = d[e] || {}, k = d[e][j], m = d[e][j] = function(n, i) {
            if (!this._createWidget) {
                return new m(n, i)
            }
            arguments.length && this._createWidget(n, i)
        }, d.extend(m, k, {version: l.version,_proto: d.extend({}, l),_childConstructors: []}), g = new p, g.options = d.widget.extend({}, g.options), d.each(l, function(o, n) {
            d.isFunction(n) && (l[o] = function() {
                var q = function() {
                    return p.prototype[o].apply(this, arguments)
                }, i = function(r) {
                    return p.prototype[o].apply(this, r)
                };
                return function() {
                    var r = this._super, v = this._superApply, u;
                    return this._super = q, this._superApply = i, u = n.apply(this, arguments), this._super = r, this._superApply = v, u
                }
            }())
        }), m.prototype = d.widget.extend(g, {widgetEventPrefix: k ? g.widgetEventPrefix : j}, l, {constructor: m,namespace: e,widgetName: j,widgetBaseClass: h,widgetFullName: h}), k ? (d.each(k._childConstructors, function(i, q) {
            var o = q.prototype;
            d.widget(o.namespace + "." + o.widgetName, m, q._proto)
        }), delete k._childConstructors) : p._childConstructors.push(m), d.widget.bridge(j, m)
    }, d.widget.extend = function(l) {
        var h = c.call(arguments, 1), j = 0, k = h.length, g, e;
        for (; j < k; j++) {
            for (g in h[j]) {
                e = h[j][g], h[j].hasOwnProperty(g) && e !== b && (d.isPlainObject(e) ? l[g] = d.isPlainObject(l[g]) ? d.widget.extend({}, l[g], e) : d.widget.extend({}, e) : l[g] = e)
            }
        }
        return l
    }, d.widget.bridge = function(h, e) {
        var g = e.prototype.widgetFullName || h;
        d.fn[h] = function(l) {
            var j = typeof l == "string", i = c.call(arguments, 1), k = this;
            return l = !j && i.length ? d.widget.extend.apply(null, [l].concat(i)) : l, j ? this.each(function() {
                var n, m = d.data(this, g);
                if (!m) {
                    return d.error("cannot call methods on " + h + " prior to initialization; attempted to call method '" + l + "'")
                }
                if (!d.isFunction(m[l]) || l.charAt(0) === "_") {
                    return d.error("no such method '" + l + "' for " + h + " widget instance")
                }
                n = m[l].apply(m, i);
                if (n !== m && n !== b) {
                    return k = n && n.jquery ? k.pushStack(n.get()) : n, !1
                }
            }) : this.each(function() {
                var m = d.data(this, g);
                m ? m.option(l || {})._init() : d.data(this, g, new e(l, this))
            }), k
        }
    }, d.Widget = function() {
    }, d.Widget._childConstructors = [], d.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(e, g) {
        g = d(g || this.defaultElement || this)[0], this.element = d(g), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = d.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = d(), this.hoverable = d(), this.focusable = d(), g !== this && (d.data(g, this.widgetName, this), d.data(g, this.widgetFullName, this), this._on(!0, this.element, {remove: function(h) {
            h.target === g && this.destroy()
        }}), this.document = d(g.style ? g.ownerDocument : g.document || g), this.window = d(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },_getCreateOptions: d.noop,_getCreateEventData: d.noop,_create: d.noop,_init: d.noop,destroy: function() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(d.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },_destroy: d.noop,widget: function() {
        return this.element
    },option: function(l, j) {
        var g = l, h, k, e;
        if (arguments.length === 0) {
            return d.widget.extend({}, this.options)
        }
        if (typeof l == "string") {
            g = {}, h = l.split("."), l = h.shift();
            if (h.length) {
                k = g[l] = d.widget.extend({}, this.options[l]);
                for (e = 0; e < h.length - 1; e++) {
                    k[h[e]] = k[h[e]] || {}, k = k[h[e]]
                }
                l = h.pop();
                if (j === b) {
                    return k[l] === b ? null : k[l]
                }
                k[l] = j
            } else {
                if (j === b) {
                    return this.options[l] === b ? null : this.options[l]
                }
                g[l] = j
            }
        }
        return this._setOptions(g), this
    },_setOptions: function(h) {
        var g;
        for (g in h) {
            this._setOption(g, h[g])
        }
        return this
    },_setOption: function(h, g) {
        return this.options[h] = g, h === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    },enable: function() {
        return this._setOption("disabled", !1)
    },disable: function() {
        return this._setOption("disabled", !0)
    },_on: function(g, k, j) {
        var e, h = this;
        typeof g != "boolean" && (j = k, k = g, g = !1), j ? (k = e = d(k), this.bindings = this.bindings.add(k)) : (j = k, k = this.element, e = this.widget()), d.each(j, function(p, s) {
            function n() {
                if (!g && (h.options.disabled === !0 || d(this).hasClass("ui-state-disabled"))) {
                    return
                }
                return (typeof s == "string" ? h[s] : s).apply(h, arguments)
            }
            typeof s != "string" && (n.guid = s.guid = s.guid || n.guid || d.guid++);
            var m = p.match(/^(\w+)\s*(.*)$/), q = m[1] + h.eventNamespace, i = m[2];
            i ? e.delegate(i, q, n) : k.bind(q, n)
        })
            },_off: function(h, g) {
		g = (g || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, h.unbind(g).undelegate(g)
            },_delay: function(i, g) {
		function j() {
                    return (typeof i == "string" ? h[i] : i).apply(h, arguments)
		}
		var h = this;
		return setTimeout(j, g || 0)
            },_hoverable: function(e) {
		this.hoverable = this.hoverable.add(e), this._on(e, {mouseenter: function(g) {
                    d(g.currentTarget).addClass("ui-state-hover")
                },mouseleave: function(g) {
                    d(g.currentTarget).removeClass("ui-state-hover")
                }})
            },_focusable: function(e) {
		this.focusable = this.focusable.add(e), this._on(e, {focusin: function(g) {
                    d(g.currentTarget).addClass("ui-state-focus")
                },focusout: function(g) {
                    d(g.currentTarget).removeClass("ui-state-focus")
                }})
            },_trigger: function(g, l, j) {
		var e, h, k = this.options[g];
		j = j || {}, l = d.Event(l), l.type = (g === this.widgetEventPrefix ? g : this.widgetEventPrefix + g).toLowerCase(), l.target = this.element[0], h = l.originalEvent;
		if (h) {
                    for (e in h) {
			e in l || (l[e] = h[e])
                    }
		}
		return this.element.trigger(l, j), !(d.isFunction(k) && k.apply(this.element[0], [l].concat(j)) === !1 || l.isDefaultPrevented())
            }}, d.each({show: "fadeIn",hide: "fadeOut"}, function(e, g) {
		d.Widget.prototype["_" + e] = function(l, j, k) {
		    typeof j == "string" && (j = {effect: j});
		    var m, h = j ? j === !0 || typeof j == "number" ? g : j.effect || g : e;
		    j = j || {}, typeof j == "number" && (j = {duration: j}), m = !d.isEmptyObject(j), j.complete = k, j.delay && l.delay(j.delay), m && d.effects && (d.effects.effect[h] || d.uiBackCompat !== !1 && d.effects[h]) ? l[e](j) : h !== e && l[h] ? l[h](j.duration, j.easing, k) : l.queue(function(i) {
			d(this)[e](), k && k.call(l[0]), i()
		    })
		}
	    }), d.uiBackCompat !== !1 && (d.Widget.prototype._getCreateOptions = function() {
		return d.metadata && d.metadata.get(this.element[0])[this.widgetName]
	    })
})(jQuery);
(function(b, a) {
    var c = !1;
    b(document).mouseup(function(d) {
        c = !1
    }), b.widget("ui.mouse", {version: "1.9.2",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
        var d = this;
        this.element.bind("mousedown." + this.widgetName, function(f) {
            return d._mouseDown(f)
        }).bind("click." + this.widgetName, function(e) {
            if (!0 === b.data(e.target, d.widgetName + ".preventClickEvent")) {
                return b.removeData(e.target, d.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
            }
        }), this.started = !1
    },_mouseDestroy: function() {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },_mouseDown: function(e) {
        if (c) {
            return
        }
        this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var g = this, d = e.which === 1, f = typeof this.options.cancel == "string" && e.target.nodeName ? b(e.target).closest(this.options.cancel).length : !1;
        if (!d || f || !this._mouseCapture(e)) {
            return !0
        }
        this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
            g.mouseDelayMet = !0
        }, this.options.delay));
        if (this._mouseDistanceMet(e) && this._mouseDelayMet(e)) {
            this._mouseStarted = this._mouseStart(e) !== !1;
            if (!this._mouseStarted) {
                return e.preventDefault(), !0
            }
        }
        return !0 === b.data(e.target, this.widgetName + ".preventClickEvent") && b.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(h) {
            return g._mouseMove(h)
        }, this._mouseUpDelegate = function(h) {
            return g._mouseUp(h)
        }, b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), c = !0, !0
    },_mouseMove: function(d) {
        return !b.ui.ie || document.documentMode >= 9 || !!d.button ? this._mouseStarted ? (this._mouseDrag(d), d.preventDefault()) : (this._mouseDistanceMet(d) && this._mouseDelayMet(d) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, d) !== !1, this._mouseStarted ? this._mouseDrag(d) : this._mouseUp(d)), !this._mouseStarted) : this._mouseUp(d)
    },_mouseUp: function(d) {
        return b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, d.target === this._mouseDownEvent.target && b.data(d.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(d)), !1
    },_mouseDistanceMet: function(d) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - d.pageX), Math.abs(this._mouseDownEvent.pageY - d.pageY)) >= this.options.distance
    },_mouseDelayMet: function(d) {
        return this.mouseDelayMet
    },_mouseStart: function(d) {
    },_mouseDrag: function(d) {
    },_mouseStop: function(d) {
    },_mouseCapture: function(d) {
        return !0
    }})
})(jQuery);
(function(w, A) {
    function q(c, a, f) {
        return [parseInt(c[0], 10) * (k.test(c[0]) ? a / 100 : 1), parseInt(c[1], 10) * (k.test(c[1]) ? f / 100 : 1)]
    }
    function d(a, c) {
        return parseInt(w.css(a, c), 10) || 0
    }
    w.ui = w.ui || {};
    var j, b = Math.max, m = Math.abs, B = Math.round, g = /left|center|right/, z = /top|center|bottom/, y = /[\+\-]\d+%?/, v = /^\w+/, k = /%$/, x = w.fn.position;
    w.position = {scrollbarWidth: function() {
        if (j !== A) {
            return j
        }
        var e, a, c = w("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), f = c.children()[0];
        return w("body").append(c), e = f.offsetWidth, c.css("overflow", "scroll"), a = f.offsetWidth, e === a && (a = c[0].clientWidth), c.remove(), j = e - a
    },getScrollInfo: function(c) {
        var h = c.isWindow ? "" : c.element.css("overflow-x"), f = c.isWindow ? "" : c.element.css("overflow-y"), a = h === "scroll" || h === "auto" && c.width < c.element[0].scrollWidth, e = f === "scroll" || f === "auto" && c.height < c.element[0].scrollHeight;
        return {width: a ? w.position.scrollbarWidth() : 0,height: e ? w.position.scrollbarWidth() : 0}
    },getWithinInfo: function(a) {
        var e = w(a || window), c = w.isWindow(e[0]);
        return {element: e,isWindow: c,offset: e.offset() || {left: 0,top: 0},scrollLeft: e.scrollLeft(),scrollTop: e.scrollTop(),width: c ? e.width() : e.outerWidth(),height: c ? e.height() : e.outerHeight()}
    }}, w.fn.position = function(u) {
        if (!u || !u.of) {
            return x.apply(this, arguments)
        }
        u = w.extend({}, u);
        var a, e, i, s, c, h = w(u.of), p = w.position.getWithinInfo(u.within), o = w.position.getScrollInfo(p), r = h[0], C = (u.collision || "flip").split(" "), f = {};
        return r.nodeType === 9 ? (e = h.width(), i = h.height(), s = {top: 0,left: 0}) : w.isWindow(r) ? (e = h.width(), i = h.height(), s = {top: h.scrollTop(),left: h.scrollLeft()}) : r.preventDefault ? (u.at = "left top", e = i = 0, s = {top: r.pageY,left: r.pageX}) : (e = h.outerWidth(), i = h.outerHeight(), s = h.offset()), c = w.extend({}, s), w.each(["my", "at"], function() {
            var t = (u[this] || "").split(" "), D, l;
            t.length === 1 && (t = g.test(t[0]) ? t.concat(["center"]) : z.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = g.test(t[0]) ? t[0] : "center", t[1] = z.test(t[1]) ? t[1] : "center", D = y.exec(t[0]), l = y.exec(t[1]), f[this] = [D ? D[0] : 0, l ? l[0] : 0], u[this] = [v.exec(t[0])[0], v.exec(t[1])[0]]
        }), C.length === 1 && (C[1] = C[0]), u.at[0] === "right" ? c.left += e : u.at[0] === "center" && (c.left += e / 2), u.at[1] === "bottom" ? c.top += i : u.at[1] === "center" && (c.top += i / 2), a = q(f.at, e, i), c.left += a[0], c.top += a[1], this.each(function() {
            var n, K, H = w(this), E = H.outerWidth(), G = H.outerHeight(), J = d(this, "marginLeft"), I = d(this, "marginTop"), D = E + J + d(this, "marginRight") + o.width, F = G + I + d(this, "marginBottom") + o.height, l = w.extend({}, c), t = q(f.my, H.outerWidth(), H.outerHeight());
            u.my[0] === "right" ? l.left -= E : u.my[0] === "center" && (l.left -= E / 2), u.my[1] === "bottom" ? l.top -= G : u.my[1] === "center" && (l.top -= G / 2), l.left += t[0], l.top += t[1], w.support.offsetFractions || (l.left = B(l.left), l.top = B(l.top)), n = {marginLeft: J,marginTop: I}, w.each(["left", "top"], function(M, L) {
                w.ui.position[C[M]] && w.ui.position[C[M]][L](l, {targetWidth: e,targetHeight: i,elemWidth: E,elemHeight: G,collisionPosition: n,collisionWidth: D,collisionHeight: F,offset: [a[0] + t[0], a[1] + t[1]],my: u.my,at: u.at,within: p,elem: H})
            }), w.fn.bgiframe && H.bgiframe(), u.using && (K = function(O) {
                var Q = s.left - l.left, N = Q + e - E, P = s.top - l.top, L = P + i - G, M = {target: {element: h,left: s.left,top: s.top,width: e,height: i},element: {element: H,left: l.left,top: l.top,width: E,height: G},horizontal: N < 0 ? "left" : Q > 0 ? "right" : "center",vertical: L < 0 ? "top" : P > 0 ? "bottom" : "middle"};
                e < E && m(Q + N) < e && (M.horizontal = "center"), i < G && m(P + L) < i && (M.vertical = "middle"), b(m(Q), m(N)) > b(m(P), m(L)) ? M.important = "horizontal" : M.important = "vertical", u.using.call(this, O, M)
            }), H.offset(w.extend(l, {using: K}))
        })
	    }, w.ui.position = {fit: {left: function(r, E) {
                var h = E.within, l = h.isWindow ? h.scrollLeft : h.offset.left, F = h.width, c = r.left - E.collisionPosition.marginLeft, D = l - c, C = c + E.collisionWidth - F - l, p;
                E.collisionWidth > F ? D > 0 && C <= 0 ? (p = r.left + D + E.collisionWidth - F - l, r.left += D - p) : C > 0 && D <= 0 ? r.left = l : D > C ? r.left = l + F - E.collisionWidth : r.left = l : D > 0 ? r.left += D : C > 0 ? r.left -= C : r.left = b(r.left - c, r.left)
            },top: function(r, E) {
                var h = E.within, l = h.isWindow ? h.scrollTop : h.offset.top, F = E.within.height, c = r.top - E.collisionPosition.marginTop, D = l - c, C = c + E.collisionHeight - F - l, p;
                E.collisionHeight > F ? D > 0 && C <= 0 ? (p = r.top + D + E.collisionHeight - F - l, r.top += D - p) : C > 0 && D <= 0 ? r.top = l : D > C ? r.top = l + F - E.collisionHeight : r.top = l : D > 0 ? r.top += D : C > 0 ? r.top -= C : r.top = b(r.top - c, r.top)
            }},flip: {left: function(I, N) {
                var E = N.within, i = E.offset.left + E.scrollLeft, O = E.width, D = E.isWindow ? E.scrollLeft : E.offset.left, M = I.left - N.collisionPosition.marginLeft, L = M - D, H = M + N.collisionWidth - O - D, F = N.my[0] === "left" ? -N.elemWidth : N.my[0] === "right" ? N.elemWidth : 0, K = N.at[0] === "left" ? N.targetWidth : N.at[0] === "right" ? -N.targetWidth : 0, G = -2 * N.offset[0], C, J;
                if (L < 0) {
                    C = I.left + F + K + G + N.collisionWidth - O - i;
                    if (C < 0 || C < m(L)) {
                        I.left += F + K + G
                    }
                } else {
                    if (H > 0) {
                        J = I.left - N.collisionPosition.marginLeft + F + K + G - D;
                        if (J > 0 || m(J) < H) {
                            I.left += F + K + G
                        }
                    }
                }
            },top: function(I, O) {
                var E = O.within, i = E.offset.top + E.scrollTop, P = E.height, D = E.isWindow ? E.scrollTop : E.offset.top, N = I.top - O.collisionPosition.marginTop, L = N - D, H = N + O.collisionHeight - P - D, F = O.my[1] === "top", K = F ? -O.elemHeight : O.my[1] === "bottom" ? O.elemHeight : 0, G = O.at[1] === "top" ? O.targetHeight : O.at[1] === "bottom" ? -O.targetHeight : 0, C = -2 * O.offset[1], J, M;
                L < 0 ? (M = I.top + K + G + C + O.collisionHeight - P - i, I.top + K + G + C > L && (M < 0 || M < m(L)) && (I.top += K + G + C)) : H > 0 && (J = I.top - O.collisionPosition.marginTop + K + G + C - D, I.top + K + G + C > H && (J > 0 || m(J) < H) && (I.top += K + G + C))
            }},flipfit: {left: function() {
                w.ui.position.flip.left.apply(this, arguments), w.ui.position.fit.left.apply(this, arguments)
            },top: function() {
                w.ui.position.flip.top.apply(this, arguments), w.ui.position.fit.top.apply(this, arguments)
            }}}, function() {
		var e, p, h, c, f, l = document.getElementsByTagName("body")[0], a = document.createElement("div");
		e = document.createElement(l ? "div" : "body"), h = {visibility: "hidden",width: 0,height: 0,border: 0,margin: 0,background: "none"}, l && w.extend(h, {position: "absolute",left: "-1000px",top: "-1000px"});
		for (f in h) {
		    e.style[f] = h[f]
		}
		e.appendChild(a), p = l || document.documentElement, p.insertBefore(e, p.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", c = w(a).offset().left, w.support.offsetFractions = c > 10 && c < 11, e.innerHTML = "", p.removeChild(e)
	    }(), w.uiBackCompat !== !1 && function(a) {
		var c = a.fn.position;
		a.fn.position = function(h) {
		    if (!h || !h.offset) {
			return c.call(this, h)
		    }
		    var e = h.offset.split(" "), f = h.at.split(" ");
		    return e.length === 1 && (e[1] = e[0]), /^\d/.test(e[0]) && (e[0] = "+" + e[0]), /^\d/.test(e[1]) && (e[1] = "+" + e[1]), f.length === 1 && (/left|center|right/.test(f[0]) ? f[1] = "center" : (f[1] = f[0], f[0] = "center")), c.call(this, a.extend(h, {at: f[0] + e[0] + " " + f[1] + e[1],offset: A}))
		}
	    }(jQuery)
})(jQuery);
(function(b, a) {
    b.widget("ui.draggable", b.ui.mouse, {version: "1.9.2",widgetEventPrefix: "drag",options: {addClasses: !0,appendTo: "parent",axis: !1,connectToSortable: !1,containment: !1,cursor: "auto",cursorAt: !1,grid: !1,handle: !1,helper: "original",iframeFix: !1,opacity: !1,refreshPositions: !1,revert: !1,revertDuration: 500,scope: "default",scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,snap: !1,snapMode: "both",snapTolerance: 20,stack: !1,zIndex: !1},_create: function() {
        this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    },_destroy: function() {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    },_mouseCapture: function(c) {
        var d = this.options;
        return this.helper || d.disabled || b(c.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(c), this.handle ? (b(d.iframeFix === !0 ? "iframe" : d.iframeFix).each(function() {
            b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width: this.offsetWidth + "px",height: this.offsetHeight + "px",position: "absolute",opacity: "0.001",zIndex: 1000}).css(b(this).offset()).appendTo("body")
        }), !0) : !1)
    },_mouseStart: function(c) {
        var d = this.options;
        return this.helper = this._createHelper(c), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), b.ui.ddmanager && (b.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, b.extend(this.offset, {click: {left: c.pageX - this.offset.left,top: c.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.originalPosition = this.position = this._generatePosition(c), this.originalPageX = c.pageX, this.originalPageY = c.pageY, d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt), d.containment && this._setContainment(), this._trigger("start", c) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, c), this._mouseDrag(c, !0), b.ui.ddmanager && b.ui.ddmanager.dragStart(this, c), !0)
    },_mouseDrag: function(c, e) {
        this.position = this._generatePosition(c), this.positionAbs = this._convertPositionTo("absolute");
        if (!e) {
            var d = this._uiHash();
            if (this._trigger("drag", c, d) === !1) {
                return this._mouseUp({}), !1
            }
            this.position = d.position
        }
        if (!this.options.axis || this.options.axis != "y") {
            this.helper[0].style.left = this.position.left + "px"
        }
        if (!this.options.axis || this.options.axis != "x") {
            this.helper[0].style.top = this.position.top + "px"
        }
        return b.ui.ddmanager && b.ui.ddmanager.drag(this, c), !1
    },_mouseStop: function(d) {
        var g = !1;
        b.ui.ddmanager && !this.options.dropBehaviour && (g = b.ui.ddmanager.drop(this, d)), this.dropped && (g = this.dropped, this.dropped = !1);
        var f = this.element[0], c = !1;
        while (f && (f = f.parentNode)) {
            f == document && (c = !0)
        }
        if (!c && this.options.helper === "original") {
            return !1
        }
        if (this.options.revert == "invalid" && !g || this.options.revert == "valid" && g || this.options.revert === !0 || b.isFunction(this.options.revert) && this.options.revert.call(this.element, g)) {
            var e = this;
            b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                e._trigger("stop", d) !== !1 && e._clear()
            })
        } else {
            this._trigger("stop", d) !== !1 && this._clear()
        }
        return !1
    },_mouseUp: function(c) {
        return b("div.ui-draggable-iframeFix").each(function() {
            this.parentNode.removeChild(this)
        }), b.ui.ddmanager && b.ui.ddmanager.dragStop(this, c), b.ui.mouse.prototype._mouseUp.call(this, c)
    },cancel: function() {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },_getHandle: function(c) {
        var d = !this.options.handle || !b(this.options.handle, this.element).length ? !0 : !1;
        return b(this.options.handle, this.element).find("*").andSelf().each(function() {
            this == c.target && (d = !0)
        }), d
    },_createHelper: function(c) {
        var e = this.options, d = b.isFunction(e.helper) ? b(e.helper.apply(this.element[0], [c])) : e.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
        return d.parents("body").length || d.appendTo(e.appendTo == "parent" ? this.element[0].parentNode : e.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d
    },_adjustOffsetFromHelper: function(c) {
        typeof c == "string" && (c = c.split(" ")), b.isArray(c) && (c = {left: +c[0],top: +c[1] || 0}), "left" in c && (this.offset.click.left = c.left + this.margins.left), "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left), "top" in c && (this.offset.click.top = c.top + this.margins.top), "bottom" in c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
    },_getParentOffset: function() {
        this.offsetParent = this.helper.offsetParent();
        var c = this.offsetParent.offset();
        this.cssPosition == "absolute" && this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
        if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && b.ui.ie) {
            c = {top: 0,left: 0}
        }
        return {top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    },_getRelativeOffset: function() {
        if (this.cssPosition == "relative") {
            var c = this.element.position();
            return {top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return {top: 0,left: 0}
    },_cacheMargins: function() {
        this.margins = {left: parseInt(this.element.css("marginLeft"), 10) || 0,top: parseInt(this.element.css("marginTop"), 10) || 0,right: parseInt(this.element.css("marginRight"), 10) || 0,bottom: parseInt(this.element.css("marginBottom"), 10) || 0}
    },_cacheHelperProportions: function() {
        this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
    },_setContainment: function() {
        var d = this.options;
        d.containment == "parent" && (d.containment = this.helper[0].parentNode);
        if (d.containment == "document" || d.containment == "window") {
            this.containment = [d.containment == "document" ? 0 : b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, d.containment == "document" ? 0 : b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (d.containment == "document" ? 0 : b(window).scrollLeft()) + b(d.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d.containment == "document" ? 0 : b(window).scrollTop()) + (b(d.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
        }
        if (!/^(document|window|parent)$/.test(d.containment) && d.containment.constructor != Array) {
            var g = b(d.containment), f = g[0];
            if (!f) {
                return
            }
            var c = g.offset(), e = b(f).css("overflow") != "hidden";
            this.containment = [(parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0), (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0), (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = g
        } else {
            d.containment.constructor == Array && (this.containment = d.containment)
        }
    },_convertPositionTo: function(d, h) {
        h || (h = this.position);
        var f = d == "absolute" ? 1 : -1, c = this.options, e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, g = /(html|body)/i.test(e[0].tagName);
        return {top: h.top + this.offset.relative.top * f + this.offset.parent.top * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : e.scrollTop()) * f,left: h.left + this.offset.relative.left * f + this.offset.parent.left * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : e.scrollLeft()) * f}
    },_generatePosition: function(p) {
        var e = this.options, c = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(c[0].tagName), q = p.pageX, d = p.pageY;
        if (this.originalPosition) {
            var m;
            if (this.containment) {
                if (this.relative_container) {
                    var k = this.relative_container.offset();
                    m = [this.containment[0] + k.left, this.containment[1] + k.top, this.containment[2] + k.left, this.containment[3] + k.top]
                } else {
                    m = this.containment
                }
                p.pageX - this.offset.click.left < m[0] && (q = m[0] + this.offset.click.left), p.pageY - this.offset.click.top < m[1] && (d = m[1] + this.offset.click.top), p.pageX - this.offset.click.left > m[2] && (q = m[2] + this.offset.click.left), p.pageY - this.offset.click.top > m[3] && (d = m[3] + this.offset.click.top)
            }
            if (e.grid) {
                var j = e.grid[1] ? this.originalPageY + Math.round((d - this.originalPageY) / e.grid[1]) * e.grid[1] : this.originalPageY;
                d = m ? j - this.offset.click.top < m[1] || j - this.offset.click.top > m[3] ? j - this.offset.click.top < m[1] ? j + e.grid[1] : j - e.grid[1] : j : j;
                var g = e.grid[0] ? this.originalPageX + Math.round((q - this.originalPageX) / e.grid[0]) * e.grid[0] : this.originalPageX;
                q = m ? g - this.offset.click.left < m[0] || g - this.offset.click.left > m[2] ? g - this.offset.click.left < m[0] ? g + e.grid[0] : g - e.grid[0] : g : g
            }
        }
        return {top: d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : c.scrollTop()),left: q - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : c.scrollLeft())}
    },_clear: function() {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    },_trigger: function(c, e, d) {
        return d = d || this._uiHash(), b.ui.plugin.call(this, c, [e, d]), c == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), b.Widget.prototype._trigger.call(this, c, e, d)
    },plugins: {},_uiHash: function(c) {
        return {helper: this.helper,position: this.position,originalPosition: this.originalPosition,offset: this.positionAbs}
    }}), b.ui.plugin.add("draggable", "connectToSortable", {start: function(d, g) {
        var f = b(this).data("draggable"), c = f.options, e = b.extend({}, g, {item: f.element});
        f.sortables = [], b(c.connectToSortable).each(function() {
            var h = b.data(this, "sortable");
            h && !h.options.disabled && (f.sortables.push({instance: h,shouldRevert: h.options.revert}), h.refreshPositions(), h._trigger("activate", d, e))
        })
            },stop: function(d, f) {
		var e = b(this).data("draggable"), c = b.extend({}, f, {item: e.element});
		b.each(e.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, e.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(d), this.instance.options.helper = this.instance.options._helper, e.options.helper == "original" && this.instance.currentItem.css({top: "auto",left: "auto"})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", d, c))
		})
		    },drag: function(d, g) {
			var f = b(this).data("draggable"), c = this, e = function(v) {
			    var k = this.offset.click.top, h = this.offset.click.left, l = this.positionAbs.top, w = this.positionAbs.left, j = v.height, q = v.width, p = v.top, m = v.left;
			    return b.ui.isOver(l + k, w + h, p, m, j, q)
			};
			b.each(f.sortables, function(i) {
			    var j = !1, h = this;
			    this.instance.positionAbs = f.positionAbs, this.instance.helperProportions = f.helperProportions, this.instance.offset.click = f.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (j = !0, b.each(f.sortables, function() {
				return this.instance.positionAbs = f.positionAbs, this.instance.helperProportions = f.helperProportions, this.instance.offset.click = f.offset.click, this != h && this.instance._intersectsWith(this.instance.containerCache) && b.ui.contains(h.instance.element[0], this.instance.element[0]) && (j = !1), j
			    })), j ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = b(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
				return g.helper[0]
			    }, d.target = this.instance.currentItem[0], this.instance._mouseCapture(d, !0), this.instance._mouseStart(d, !0, !0), this.instance.offset.click.top = f.offset.click.top, this.instance.offset.click.left = f.offset.click.left, this.instance.offset.parent.left -= f.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= f.offset.parent.top - this.instance.offset.parent.top, f._trigger("toSortable", d), f.dropped = this.instance.element, f.currentItem = f.element, this.instance.fromOutside = f), this.instance.currentItem && this.instance._mouseDrag(d)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", d, this.instance._uiHash(this.instance)), this.instance._mouseStop(d, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), f._trigger("fromSortable", d), f.dropped = !1)
			})
			    }}), b.ui.plugin.add("draggable", "cursor", {start: function(d, f) {
				var e = b("body"), c = b(this).data("draggable").options;
				e.css("cursor") && (c._cursor = e.css("cursor")), e.css("cursor", c.cursor)
			    },stop: function(c, e) {
				var d = b(this).data("draggable").options;
				d._cursor && b("body").css("cursor", d._cursor)
			    }}), b.ui.plugin.add("draggable", "opacity", {start: function(d, f) {
				var e = b(f.helper), c = b(this).data("draggable").options;
				e.css("opacity") && (c._opacity = e.css("opacity")), e.css("opacity", c.opacity)
			    },stop: function(c, e) {
				var d = b(this).data("draggable").options;
				d._opacity && b(e.helper).css("opacity", d._opacity)
			    }}), b.ui.plugin.add("draggable", "scroll", {start: function(c, e) {
				var d = b(this).data("draggable");
				d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset())
			    },drag: function(d, g) {
				var f = b(this).data("draggable"), c = f.options, e = !1;
				if (f.scrollParent[0] != document && f.scrollParent[0].tagName != "HTML") {
				    if (!c.axis || c.axis != "x") {
					f.overflowOffset.top + f.scrollParent[0].offsetHeight - d.pageY < c.scrollSensitivity ? f.scrollParent[0].scrollTop = e = f.scrollParent[0].scrollTop + c.scrollSpeed : d.pageY - f.overflowOffset.top < c.scrollSensitivity && (f.scrollParent[0].scrollTop = e = f.scrollParent[0].scrollTop - c.scrollSpeed)
				    }
				    if (!c.axis || c.axis != "y") {
					f.overflowOffset.left + f.scrollParent[0].offsetWidth - d.pageX < c.scrollSensitivity ? f.scrollParent[0].scrollLeft = e = f.scrollParent[0].scrollLeft + c.scrollSpeed : d.pageX - f.overflowOffset.left < c.scrollSensitivity && (f.scrollParent[0].scrollLeft = e = f.scrollParent[0].scrollLeft - c.scrollSpeed)
				    }
				} else {
				    if (!c.axis || c.axis != "x") {
					d.pageY - b(document).scrollTop() < c.scrollSensitivity ? e = b(document).scrollTop(b(document).scrollTop() - c.scrollSpeed) : b(window).height() - (d.pageY - b(document).scrollTop()) < c.scrollSensitivity && (e = b(document).scrollTop(b(document).scrollTop() + c.scrollSpeed))
				    }
				    if (!c.axis || c.axis != "y") {
					d.pageX - b(document).scrollLeft() < c.scrollSensitivity ? e = b(document).scrollLeft(b(document).scrollLeft() - c.scrollSpeed) : b(window).width() - (d.pageX - b(document).scrollLeft()) < c.scrollSensitivity && (e = b(document).scrollLeft(b(document).scrollLeft() + c.scrollSpeed))
				    }
				}
				e !== !1 && b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(f, d)
			    }}), b.ui.plugin.add("draggable", "snap", {start: function(d, f) {
				var e = b(this).data("draggable"), c = e.options;
				e.snapElements = [], b(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function() {
				    var g = b(this), h = g.offset();
				    this != e.element[0] && e.snapElements.push({item: this,width: g.outerWidth(),height: g.outerHeight(),top: h.top,left: h.left})
				})
				    },drag: function(q, B) {
					var x = b(this).data("draggable"), E = x.options, w = E.snapTolerance, A = B.offset.left, k = A + x.helperProportions.width, L = B.offset.top, H = L + x.helperProportions.height;
					for (var D = x.snapElements.length - 1; D >= 0; D--) {
					    var J = x.snapElements[D].left, F = J + x.snapElements[D].width, z = x.snapElements[D].top, I = z + x.snapElements[D].height;
					    if (!(J - w < A && A < F + w && z - w < L && L < I + w || J - w < A && A < F + w && z - w < H && H < I + w || J - w < k && k < F + w && z - w < L && L < I + w || J - w < k && k < F + w && z - w < H && H < I + w)) {
						x.snapElements[D].snapping && x.options.snap.release && x.options.snap.release.call(x.element, q, b.extend(x._uiHash(), {snapItem: x.snapElements[D].item})), x.snapElements[D].snapping = !1;
						continue
					    }
					    if (E.snapMode != "inner") {
						var j = Math.abs(z - H) <= w, C = Math.abs(I - L) <= w, G = Math.abs(J - k) <= w, e = Math.abs(F - A) <= w;
						j && (B.position.top = x._convertPositionTo("relative", {top: z - x.helperProportions.height,left: 0}).top - x.margins.top), C && (B.position.top = x._convertPositionTo("relative", {top: I,left: 0}).top - x.margins.top), G && (B.position.left = x._convertPositionTo("relative", {top: 0,left: J - x.helperProportions.width}).left - x.margins.left), e && (B.position.left = x._convertPositionTo("relative", {top: 0,left: F}).left - x.margins.left)
					    }
					    var K = j || C || G || e;
					    if (E.snapMode != "outer") {
						var j = Math.abs(z - L) <= w, C = Math.abs(I - H) <= w, G = Math.abs(J - A) <= w, e = Math.abs(F - k) <= w;
						j && (B.position.top = x._convertPositionTo("relative", {top: z,left: 0}).top - x.margins.top), C && (B.position.top = x._convertPositionTo("relative", {top: I - x.helperProportions.height,left: 0}).top - x.margins.top), G && (B.position.left = x._convertPositionTo("relative", {top: 0,left: J}).left - x.margins.left), e && (B.position.left = x._convertPositionTo("relative", {top: 0,left: F - x.helperProportions.width}).left - x.margins.left)
					    }
					    !x.snapElements[D].snapping && (j || C || G || e || K) && x.options.snap.snap && x.options.snap.snap.call(x.element, q, b.extend(x._uiHash(), {snapItem: x.snapElements[D].item})), x.snapElements[D].snapping = j || C || G || e || K
					}
				    }}), b.ui.plugin.add("draggable", "stack", {start: function(d, g) {
					var f = b(this).data("draggable").options, c = b.makeArray(b(f.stack)).sort(function(h, i) {
					    return (parseInt(b(h).css("zIndex"), 10) || 0) - (parseInt(b(i).css("zIndex"), 10) || 0)
					});
					if (!c.length) {
					    return
					}
					var e = parseInt(c[0].style.zIndex) || 0;
					b(c).each(function(h) {
					    this.style.zIndex = e + h
					}), this[0].style.zIndex = e + c.length
				    }}), b.ui.plugin.add("draggable", "zIndex", {start: function(d, f) {
					var e = b(f.helper), c = b(this).data("draggable").options;
					e.css("zIndex") && (c._zIndex = e.css("zIndex")), e.css("zIndex", c.zIndex)
				    },stop: function(c, e) {
					var d = b(this).data("draggable").options;
					d._zIndex && b(e.helper).css("zIndex", d._zIndex)
				    }})
})(jQuery);
(function(b, a) {
    b.widget("ui.droppable", {version: "1.9.2",widgetEventPrefix: "drop",options: {accept: "*",activeClass: !1,addClasses: !0,greedy: !1,hoverClass: !1,scope: "default",tolerance: "intersect"},_create: function() {
        var c = this.options, d = c.accept;
        this.isover = 0, this.isout = 1, this.accept = b.isFunction(d) ? d : function(f) {
            return f.is(d)
        }, this.proportions = {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}, b.ui.ddmanager.droppables[c.scope] = b.ui.ddmanager.droppables[c.scope] || [], b.ui.ddmanager.droppables[c.scope].push(this), c.addClasses && this.element.addClass("ui-droppable")
    },_destroy: function() {
        var c = b.ui.ddmanager.droppables[this.options.scope];
        for (var d = 0; d < c.length; d++) {
            c[d] == this && c.splice(d, 1)
        }
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    },_setOption: function(c, d) {
        c == "accept" && (this.accept = b.isFunction(d) ? d : function(f) {
            return f.is(d)
        }), b.Widget.prototype._setOption.apply(this, arguments)
    },_activate: function(c) {
        var d = b.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), d && this._trigger("activate", c, this.ui(d))
    },_deactivate: function(c) {
        var d = b.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), d && this._trigger("deactivate", c, this.ui(d))
    },_over: function(c) {
        var d = b.ui.ddmanager.current;
        if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
            return
        }
        this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", c, this.ui(d)))
    },_out: function(c) {
        var d = b.ui.ddmanager.current;
        if (!d || (d.currentItem || d.element)[0] == this.element[0]) {
            return
        }
        this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", c, this.ui(d)))
    },_drop: function(d, f) {
        var e = f || b.ui.ddmanager.current;
        if (!e || (e.currentItem || e.element)[0] == this.element[0]) {
            return !1
        }
        var c = !1;
        return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
            var g = b.data(this, "droppable");
            if (g.options.greedy && !g.options.disabled && g.options.scope == e.options.scope && g.accept.call(g.element[0], e.currentItem || e.element) && b.ui.intersect(e, b.extend(g, {offset: g.element.offset()}), g.options.tolerance)) {
                return c = !0, !1
            }
        }), c ? !1 : this.accept.call(this.element[0], e.currentItem || e.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", d, this.ui(e)), this.element) : !1
    },ui: function(c) {
        return {draggable: c.currentItem || c.element,helper: c.helper,position: c.position,offset: c.positionAbs}
    }}), b.ui.intersect = function(B, k, e) {
        if (!k.offset) {
            return !1
        }
        var q = (B.positionAbs || B.position.absolute).left, C = q + B.helperProportions.width, j = (B.positionAbs || B.position.absolute).top, A = j + B.helperProportions.height, z = k.offset.left, w = z + k.proportions.width, m = k.offset.top, y = m + k.proportions.height;
        switch (e) {
        case "fit":
            return z <= q && C <= w && m <= j && A <= y;
        case "intersect":
            return z < q + B.helperProportions.width / 2 && C - B.helperProportions.width / 2 < w && m < j + B.helperProportions.height / 2 && A - B.helperProportions.height / 2 < y;
        case "pointer":
            var v = (B.positionAbs || B.position.absolute).left + (B.clickOffset || B.offset.click).left, g = (B.positionAbs || B.position.absolute).top + (B.clickOffset || B.offset.click).top, x = b.ui.isOver(g, v, m, z, k.proportions.height, k.proportions.width);
            return x;
        case "touch":
            return (j >= m && j <= y || A >= m && A <= y || j < m && A > y) && (q >= z && q <= w || C >= z && C <= w || q < z && C > w);
        default:
            return !1
        }
    }, b.ui.ddmanager = {current: null,droppables: {"default": []},prepareOffsets: function(e, j) {
        var g = b.ui.ddmanager.droppables[e.options.scope] || [], d = j ? j.type : null, f = (e.currentItem || e.element).find(":data(droppable)").andSelf();
        b: for (var h = 0; h < g.length; h++) {
            if (g[h].options.disabled || e && !g[h].accept.call(g[h].element[0], e.currentItem || e.element)) {
                continue
            }
            for (var c = 0; c < f.length; c++) {
                if (f[c] == g[h].element[0]) {
                    g[h].proportions.height = 0;
                    continue b
                }
            }
            g[h].visible = g[h].element.css("display") != "none";
            if (!g[h].visible) {
                continue
            }
            d == "mousedown" && g[h]._activate.call(g[h], j), g[h].offset = g[h].element.offset(), g[h].proportions = {width: g[h].element[0].offsetWidth,height: g[h].element[0].offsetHeight}
        }
    },drop: function(c, e) {
        var d = !1;
        return b.each(b.ui.ddmanager.droppables[c.options.scope] || [], function() {
            if (!this.options) {
                return
            }
            !this.options.disabled && this.visible && b.ui.intersect(c, this, this.options.tolerance) && (d = this._drop.call(this, e) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], c.currentItem || c.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, e))
        }), d
    },dragStart: function(c, d) {
        c.element.parentsUntil("body").bind("scroll.droppable", function() {
            c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
        })
    },drag: function(c, d) {
        c.options.refreshPositions && b.ui.ddmanager.prepareOffsets(c, d), b.each(b.ui.ddmanager.droppables[c.options.scope] || [], function() {
            if (this.options.disabled || this.greedyChild || !this.visible) {
                return
            }
            var h = b.ui.intersect(c, this, this.options.tolerance), f = !h && this.isover == 1 ? "isout" : h && this.isover == 0 ? "isover" : null;
            if (!f) {
                return
            }
            var g;
            if (this.options.greedy) {
                var j = this.options.scope, e = this.element.parents(":data(droppable)").filter(function() {
                    return b.data(this, "droppable").options.scope === j
                });
                e.length && (g = b.data(e[0], "droppable"), g.greedyChild = f == "isover" ? 1 : 0)
            }
            g && f == "isover" && (g.isover = 0, g.isout = 1, g._out.call(g, d)), this[f] = 1, this[f == "isout" ? "isover" : "isout"] = 0, this[f == "isover" ? "_over" : "_out"].call(this, d), g && f == "isout" && (g.isout = 0, g.isover = 1, g._over.call(g, d))
        })
            },dragStop: function(c, d) {
		c.element.parentsUntil("body").unbind("scroll.droppable"), c.options.refreshPositions || b.ui.ddmanager.prepareOffsets(c, d)
            }}
})(jQuery);
(function(c, a) {
    c.widget("ui.resizable", c.ui.mouse, {version: "1.9.2",widgetEventPrefix: "resize",options: {alsoResize: !1,animate: !1,animateDuration: "slow",animateEasing: "swing",aspectRatio: !1,autoHide: !1,containment: !1,ghost: !1,grid: !1,handles: "e,s,se",helper: !1,maxHeight: null,maxWidth: null,minHeight: 10,minWidth: 10,zIndex: 1000},_create: function() {
        var g = this, l = this.options;
        this.element.addClass("ui-resizable"), c.extend(this, {_aspectRatio: !!l.aspectRatio,aspectRatio: l.aspectRatio,originalElement: this.element,_proportionallyResizeElements: [],_helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position: this.element.css("position"),width: this.element.outerWidth(),height: this.element.outerHeight(),top: this.element.css("top"),left: this.element.css("left")})), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({marginLeft: this.originalElement.css("marginLeft"),marginTop: this.originalElement.css("marginTop"),marginRight: this.originalElement.css("marginRight"),marginBottom: this.originalElement.css("marginBottom")}), this.originalElement.css({marginLeft: 0,marginTop: 0,marginRight: 0,marginBottom: 0}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({position: "static",zoom: 1,display: "block"})), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = l.handles || (c(".ui-resizable-handle", this.element).length ? {n: ".ui-resizable-n",e: ".ui-resizable-e",s: ".ui-resizable-s",w: ".ui-resizable-w",se: ".ui-resizable-se",sw: ".ui-resizable-sw",ne: ".ui-resizable-ne",nw: ".ui-resizable-nw"} : "e,s,se");
        if (this.handles.constructor == String) {
            this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
            var j = this.handles.split(",");
            this.handles = {};
            for (var f = 0; f < j.length; f++) {
                var h = c.trim(j[f]), k = "ui-resizable-" + h, e = c('<div class="ui-resizable-handle ' + k + '"></div>');
                e.css({zIndex: l.zIndex}), "se" == h && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[h] = ".ui-resizable-" + h, this.element.append(e)
            }
        }
        this._renderAxis = function(o) {
            o = o || this.element;
            for (var u in this.handles) {
                this.handles[u].constructor == String && (this.handles[u] = c(this.handles[u], this.element).show());
                if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                    var q = c(this.handles[u], this.element), m = 0;
                    m = /sw|ne|nw|se|n|s/.test(u) ? q.outerHeight() : q.outerWidth();
                    var p = ["padding", /ne|nw|n/.test(u) ? "Top" : /se|sw|s/.test(u) ? "Bottom" : /^e$/.test(u) ? "Right" : "Left"].join("");
                    o.css(p, m), this._proportionallyResize()
                }
                if (!c(this.handles[u]).length) {
                    continue
                }
            }
        }, this._renderAxis(this.element), this._handles = c(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
            if (!g.resizing) {
                if (this.className) {
                    var i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                }
                g.axis = i && i[1] ? i[1] : "se"
            }
        }), l.autoHide && (this._handles.hide(), c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
            if (l.disabled) {
                return
            }
            c(this).removeClass("ui-resizable-autohide"), g._handles.show()
        }).mouseleave(function() {
            if (l.disabled) {
                return
            }
            g.resizing || (c(this).addClass("ui-resizable-autohide"), g._handles.hide())
        })), this._mouseInit()
    },_destroy: function() {
        this._mouseDestroy();
        var e = function(g) {
            c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        if (this.elementIsWrapper) {
            e(this.element);
            var f = this.element;
            this.originalElement.css({position: f.css("position"),width: f.outerWidth(),height: f.outerHeight(),top: f.css("top"),left: f.css("left")}).insertAfter(f), f.remove()
        }
        return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
    },_mouseCapture: function(e) {
        var g = !1;
        for (var f in this.handles) {
            c(this.handles[f])[0] == e.target && (g = !0)
        }
        return !this.options.disabled && g
    },_mouseStart: function(h) {
        var k = this.options, g = this.element.position(), j = this.element;
        this.resizing = !0, this.documentScroll = {top: c(document).scrollTop(),left: c(document).scrollLeft()}, (j.is(".ui-draggable") || /absolute/.test(j.css("position"))) && j.css({position: "absolute",top: g.top,left: g.left}), this._renderProxy();
        var l = d(this.helper.css("left")), f = d(this.helper.css("top"));
        k.containment && (l += c(k.containment).scrollLeft() || 0, f += c(k.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {left: l,top: f}, this.size = this._helper ? {width: j.outerWidth(),height: j.outerHeight()} : {width: j.width(),height: j.height()}, this.originalSize = this._helper ? {width: j.outerWidth(),height: j.outerHeight()} : {width: j.width(),height: j.height()}, this.originalPosition = {left: l,top: f}, this.sizeDiff = {width: j.outerWidth() - j.width(),height: j.outerHeight() - j.height()}, this.originalMousePosition = {left: h.pageX,top: h.pageY}, this.aspectRatio = typeof k.aspectRatio == "number" ? k.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
        var e = c(".ui-resizable-" + this.axis).css("cursor");
        return c("body").css("cursor", e == "auto" ? this.axis + "-resize" : e), j.addClass("ui-resizable-resizing"), this._propagate("start", h), !0
    },_mouseDrag: function(q) {
        var x = this.helper, j = this.options, g = {}, m = this, y = this.originalMousePosition, h = this.axis, w = q.pageX - y.left || 0, v = q.pageY - y.top || 0, p = this._change[h];
        if (!p) {
            return !1
        }
        var k = p.apply(this, [q, w, v]);
        this._updateVirtualBoundaries(q.shiftKey);
        if (this._aspectRatio || q.shiftKey) {
            k = this._updateRatio(k, q)
        }
        return k = this._respectSize(k, q), this._propagate("resize", q), x.css({top: this.position.top + "px",left: this.position.left + "px",width: this.size.width + "px",height: this.size.height + "px"}), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(k), this._trigger("resize", q, this.ui()), !1
    },_mouseStop: function(v) {
        this.resizing = !1;
        var h = this.options, e = this;
        if (this._helper) {
            var k = this._proportionallyResizeElements, w = k.length && /textarea/i.test(k[0].nodeName), g = w && c.ui.hasScroll(k[0], "left") ? 0 : e.sizeDiff.height, q = w ? 0 : e.sizeDiff.width, p = {width: e.helper.width() - q,height: e.helper.height() - g}, m = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null, j = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
            h.animate || this.element.css(c.extend(p, {top: j,left: m})), e.helper.height(e.size.height), e.helper.width(e.size.width), this._helper && !h.animate && this._proportionallyResize()
        }
        return c("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", v), this._helper && this.helper.remove(), !1
    },_updateVirtualBoundaries: function(k) {
        var h = this.options, m, g, j, l, f;
        f = {minWidth: b(h.minWidth) ? h.minWidth : 0,maxWidth: b(h.maxWidth) ? h.maxWidth : Infinity,minHeight: b(h.minHeight) ? h.minHeight : 0,maxHeight: b(h.maxHeight) ? h.maxHeight : Infinity};
        if (this._aspectRatio || k) {
            m = f.minHeight * this.aspectRatio, j = f.minWidth / this.aspectRatio, g = f.maxHeight * this.aspectRatio, l = f.maxWidth / this.aspectRatio, m > f.minWidth && (f.minWidth = m), j > f.minHeight && (f.minHeight = j), g < f.maxWidth && (f.maxWidth = g), l < f.maxHeight && (f.maxHeight = l)
        }
        this._vBoundaries = f
    },_updateCache: function(g) {
        var f = this.options;
        this.offset = this.helper.offset(), b(g.left) && (this.position.left = g.left), b(g.top) && (this.position.top = g.top), b(g.height) && (this.size.height = g.height), b(g.width) && (this.size.width = g.width)
    },_updateRatio: function(j, g) {
        var l = this.options, f = this.position, h = this.size, k = this.axis;
        return b(j.height) ? j.width = j.height * this.aspectRatio : b(j.width) && (j.height = j.width / this.aspectRatio), k == "sw" && (j.left = f.left + (h.width - j.width), j.top = null), k == "nw" && (j.top = f.top + (h.height - j.height), j.left = f.left + (h.width - j.width)), j
    },_respectSize: function(x, D) {
        var k = this.helper, q = this._vBoundaries, E = this._aspectRatio || D.shiftKey, j = this.axis, C = b(x.width) && q.maxWidth && q.maxWidth < x.width, A = b(x.height) && q.maxHeight && q.maxHeight < x.height, w = b(x.width) && q.minWidth && q.minWidth > x.width, m = b(x.height) && q.minHeight && q.minHeight > x.height;
        w && (x.width = q.minWidth), m && (x.height = q.minHeight), C && (x.width = q.maxWidth), A && (x.height = q.maxHeight);
        var z = this.originalPosition.left + this.originalSize.width, r = this.position.top + this.size.height, g = /sw|nw|w/.test(j), y = /nw|ne|n/.test(j);
        w && g && (x.left = z - q.minWidth), C && g && (x.left = z - q.maxWidth), m && y && (x.top = r - q.minHeight), A && y && (x.top = r - q.maxHeight);
        var B = !x.width && !x.height;
        return B && !x.left && x.top ? x.top = null : B && !x.top && x.left && (x.left = null), x
    },_proportionallyResize: function() {
        var f = this.options;
        if (!this._proportionallyResizeElements.length) {
            return
        }
        var k = this.helper || this.element;
        for (var h = 0; h < this._proportionallyResizeElements.length; h++) {
            var e = this._proportionallyResizeElements[h];
            if (!this.borderDif) {
                var g = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], j = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")];
                this.borderDif = c.map(g, function(m, i) {
                    var o = parseInt(m, 10) || 0, l = parseInt(j[i], 10) || 0;
                    return o + l
                })
            }
            e.css({height: k.height() - this.borderDif[0] - this.borderDif[2] || 0,width: k.width() - this.borderDif[1] - this.borderDif[3] || 0})
        }
    },_renderProxy: function() {
        var f = this.element, h = this.options;
        this.elementOffset = f.offset();
        if (this._helper) {
            this.helper = this.helper || c('<div style="overflow:hidden;"></div>');
            var g = c.ui.ie6 ? 1 : 0, e = c.ui.ie6 ? 2 : -1;
            this.helper.addClass(this._helper).css({width: this.element.outerWidth() + e,height: this.element.outerHeight() + e,position: "absolute",left: this.elementOffset.left - g + "px",top: this.elementOffset.top - g + "px",zIndex: ++h.zIndex}), this.helper.appendTo("body").disableSelection()
        } else {
            this.helper = this.element
        }
    },_change: {e: function(g, f, h) {
        return {width: this.originalSize.width + f}
    },w: function(k, g, l) {
        var j = this.options, f = this.originalSize, h = this.originalPosition;
        return {left: h.left + g,width: f.width - g}
    },n: function(k, g, l) {
        var j = this.options, f = this.originalSize, h = this.originalPosition;
        return {top: h.top + l,height: f.height - l}
    },s: function(g, f, h) {
        return {height: this.originalSize.height + h}
    },se: function(e, g, f) {
        return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, g, f]))
    },sw: function(e, g, f) {
        return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, g, f]))
    },ne: function(e, g, f) {
        return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, g, f]))
    },nw: function(e, g, f) {
        return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, g, f]))
    }},_propagate: function(e, f) {
        c.ui.plugin.call(this, e, [f, this.ui()]), e != "resize" && this._trigger(e, f, this.ui())
    },plugins: {},ui: function() {
        return {originalElement: this.originalElement,element: this.element,helper: this.helper,position: this.position,size: this.size,originalSize: this.originalSize,originalPosition: this.originalPosition}
    }}), c.ui.plugin.add("resizable", "alsoResize", {start: function(f, j) {
        var h = c(this).data("resizable"), e = h.options, g = function(i) {
            c(i).each(function() {
                var k = c(this);
                k.data("resizable-alsoresize", {width: parseInt(k.width(), 10),height: parseInt(k.height(), 10),left: parseInt(k.css("left"), 10),top: parseInt(k.css("top"), 10)})
            })
		};
        typeof e.alsoResize == "object" && !e.alsoResize.parentNode ? e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], g(e.alsoResize)) : c.each(e.alsoResize, function(i) {
            g(i)
        }) : g(e.alsoResize)
    },resize: function(h, m) {
        var k = c(this).data("resizable"), g = k.options, j = k.originalSize, l = k.originalPosition, f = {height: k.size.height - j.height || 0,width: k.size.width - j.width || 0,top: k.position.top - l.top || 0,left: k.position.left - l.left || 0}, e = function(i, n) {
            c(i).each(function() {
                var q = c(this), p = c(this).data("resizable-alsoresize"), r = {}, u = n && n.length ? n : q.parents(m.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                c.each(u, function(s, o) {
                    var v = (p[o] || 0) + (f[o] || 0);
                    v && v >= 0 && (r[o] = v || null)
                }), q.css(r)
            })
		};
        typeof g.alsoResize == "object" && !g.alsoResize.nodeType ? c.each(g.alsoResize, function(n, i) {
            e(n, i)
        }) : e(g.alsoResize)
    },stop: function(e, f) {
        c(this).removeData("resizable-alsoresize")
    }}), c.ui.plugin.add("resizable", "animate", {stop: function(w, h) {
        var e = c(this).data("resizable"), k = e.options, x = e._proportionallyResizeElements, g = x.length && /textarea/i.test(x[0].nodeName), v = g && c.ui.hasScroll(x[0], "left") ? 0 : e.sizeDiff.height, q = g ? 0 : e.sizeDiff.width, m = {width: e.size.width - q,height: e.size.height - v}, j = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null, p = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
        e.element.animate(c.extend(m, p && j ? {top: p,left: j} : {}), {duration: k.animateDuration,easing: k.animateEasing,step: function() {
            var f = {width: parseInt(e.element.css("width"), 10),height: parseInt(e.element.css("height"), 10),top: parseInt(e.element.css("top"), 10),left: parseInt(e.element.css("left"), 10)};
            x && x.length && c(x[0]).css({width: f.width,height: f.height}), e._updateCache(f), e._propagate("resize", w)
        }})
    }}), c.ui.plugin.add("resizable", "containment", {start: function(B, e) {
        var m = c(this).data("resizable"), C = m.options, j = m.element, A = C.containment, y = A instanceof c ? A.get(0) : /parent/.test(A) ? j.parent().get(0) : A;
        if (!y) {
            return
        }
        m.containerElement = c(y);
        if (/document/.test(A) || A == document) {
            m.containerOffset = {left: 0,top: 0}, m.containerPosition = {left: 0,top: 0}, m.parentData = {element: c(document),left: 0,top: 0,width: c(document).width(),height: c(document).height() || document.body.parentNode.scrollHeight}
        } else {
            var q = c(y), k = [];
            c(["Top", "Right", "Left", "Bottom"]).each(function(h, f) {
                k[h] = d(q.css("padding" + f))
            }), m.containerOffset = q.offset(), m.containerPosition = q.position(), m.containerSize = {height: q.innerHeight() - k[3],width: q.innerWidth() - k[1]};
            var x = m.containerOffset, n = m.containerSize.height, g = m.containerSize.width, w = c.ui.hasScroll(y, "left") ? y.scrollWidth : g, z = c.ui.hasScroll(y) ? y.scrollHeight : n;
            m.parentData = {element: y,left: x.left,top: x.top,width: w,height: z}
        }
    },resize: function(D, k) {
        var e = c(this).data("resizable"), q = e.options, E = e.containerSize, j = e.containerOffset, C = e.size, A = e.position, x = e._aspectRatio || D.shiftKey, m = {top: 0,left: 0}, z = e.containerElement;
        z[0] != document && /static/.test(z.css("position")) && (m = j), A.left < (e._helper ? j.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - j.left : e.position.left - m.left), x && (e.size.height = e.size.width / e.aspectRatio), e.position.left = q.helper ? j.left : 0), A.top < (e._helper ? j.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - j.top : e.position.top), x && (e.size.width = e.size.height * e.aspectRatio), e.position.top = e._helper ? j.top : 0), e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top;
        var w = Math.abs((e._helper ? e.offset.left - m.left : e.offset.left - m.left) + e.sizeDiff.width), g = Math.abs((e._helper ? e.offset.top - m.top : e.offset.top - j.top) + e.sizeDiff.height), y = e.containerElement.get(0) == e.element.parent().get(0), B = /relative|absolute/.test(e.containerElement.css("position"));
        y && B && (w -= e.parentData.left), w + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - w, x && (e.size.height = e.size.width / e.aspectRatio)), g + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - g, x && (e.size.width = e.size.height * e.aspectRatio))
    },stop: function(y, j) {
        var e = c(this).data("resizable"), m = e.options, z = e.position, g = e.containerOffset, x = e.containerPosition, w = e.containerElement, q = c(e.helper), k = q.offset(), v = q.outerWidth() - e.sizeDiff.width, p = q.outerHeight() - e.sizeDiff.height;
        e._helper && !m.animate && /relative/.test(w.css("position")) && c(this).css({left: k.left - x.left - g.left,width: v,height: p}), e._helper && !m.animate && /static/.test(w.css("position")) && c(this).css({left: k.left - x.left - g.left,width: v,height: p})
    }}), c.ui.plugin.add("resizable", "ghost", {start: function(f, j) {
        var h = c(this).data("resizable"), e = h.options, g = h.size;
        h.ghost = h.originalElement.clone(), h.ghost.css({opacity: 0.25,display: "block",position: "relative",height: g.height,width: g.width,margin: 0,left: 0,top: 0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost == "string" ? e.ghost : ""), h.ghost.appendTo(h.helper)
    },resize: function(f, h) {
        var g = c(this).data("resizable"), e = g.options;
        g.ghost && g.ghost.css({position: "relative",height: g.size.height,width: g.size.width})
    },stop: function(f, h) {
        var g = c(this).data("resizable"), e = g.options;
        g.ghost && g.helper && g.helper.get(0).removeChild(g.ghost.get(0))
    }}), c.ui.plugin.add("resizable", "grid", {resize: function(w, h) {
        var e = c(this).data("resizable"), k = e.options, x = e.size, g = e.originalSize, v = e.originalPosition, q = e.axis, m = k._aspectRatio || w.shiftKey;
        k.grid = typeof k.grid == "number" ? [k.grid, k.grid] : k.grid;
        var j = Math.round((x.width - g.width) / (k.grid[0] || 1)) * (k.grid[0] || 1), p = Math.round((x.height - g.height) / (k.grid[1] || 1)) * (k.grid[1] || 1);
            /^(se|s|e)$/.test(q) ? (e.size.width = g.width + j, e.size.height = g.height + p) : /^(ne)$/.test(q) ? (e.size.width = g.width + j, e.size.height = g.height + p, e.position.top = v.top - p) : /^(sw)$/.test(q) ? (e.size.width = g.width + j, e.size.height = g.height + p, e.position.left = v.left - j) : (e.size.width = g.width + j, e.size.height = g.height + p, e.position.top = v.top - p, e.position.left = v.left - j)
    }});
    var d = function(f) {
        return parseInt(f, 10) || 0
    }, b = function(f) {
        return !isNaN(parseInt(f, 10))
    }
})(jQuery);
(function(b, a) {
    b.widget("ui.selectable", b.ui.mouse, {version: "1.9.2",options: {appendTo: "body",autoRefresh: !0,distance: 0,filter: "*",tolerance: "touch"},_create: function() {
        var c = this;
        this.element.addClass("ui-selectable"), this.dragged = !1;
        var d;
        this.refresh = function() {
            d = b(c.options.filter, c.element[0]), d.addClass("ui-selectee"), d.each(function() {
                var e = b(this), f = e.offset();
                b.data(this, "selectable-item", {element: this,$element: e,left: f.left,top: f.top,right: f.left + e.outerWidth(),bottom: f.top + e.outerHeight(),startselected: !1,selected: e.hasClass("ui-selected"),selecting: e.hasClass("ui-selecting"),unselecting: e.hasClass("ui-unselecting")})
            })
		}, this.refresh(), this.selectees = d.addClass("ui-selectee"), this._mouseInit(), this.helper = b("<div class='ui-selectable-helper'></div>")
    },_destroy: function() {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    },_mouseStart: function(c) {
        var e = this;
        this.opos = [c.pageX, c.pageY];
        if (this.options.disabled) {
            return
        }
        var d = this.options;
        this.selectees = b(d.filter, this.element[0]), this._trigger("start", c), b(d.appendTo).append(this.helper), this.helper.css({left: c.clientX,top: c.clientY,width: 0,height: 0}), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
            var f = b.data(this, "selectable-item");
            f.startselected = !0, !c.metaKey && !c.ctrlKey && (f.$element.removeClass("ui-selected"), f.selected = !1, f.$element.addClass("ui-unselecting"), f.unselecting = !0, e._trigger("unselecting", c, {unselecting: f.element}))
        }), b(c.target).parents().andSelf().each(function() {
            var g = b.data(this, "selectable-item");
            if (g) {
                var f = !c.metaKey && !c.ctrlKey || !g.$element.hasClass("ui-selected");
                return g.$element.removeClass(f ? "ui-unselecting" : "ui-selected").addClass(f ? "ui-selecting" : "ui-unselecting"), g.unselecting = !f, g.selecting = f, g.selected = f, f ? e._trigger("selecting", c, {selecting: g.element}) : e._trigger("unselecting", c, {unselecting: g.element}), !1
            }
        })
            },_mouseDrag: function(f) {
		var k = this;
		this.dragged = !0;
		if (this.options.disabled) {
                    return
		}
		var h = this.options, e = this.opos[0], g = this.opos[1], j = f.pageX, d = f.pageY;
		if (e > j) {
                    var c = j;
                    j = e, e = c
		}
		if (g > d) {
                    var c = d;
                    d = g, g = c
		}
		return this.helper.css({left: e,top: g,width: j - e,height: d - g}), this.selectees.each(function() {
                    var i = b.data(this, "selectable-item");
                    if (!i || i.element == k.element[0]) {
			return
                    }
                    var l = !1;
                    h.tolerance == "touch" ? l = !(i.left > j || i.right < e || i.top > d || i.bottom < g) : h.tolerance == "fit" && (l = i.left > e && i.right < j && i.top > g && i.bottom < d), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, k._trigger("selecting", f, {selecting: i.element}))) : (i.selecting && ((f.metaKey || f.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), k._trigger("unselecting", f, {unselecting: i.element}))), i.selected && !f.metaKey && !f.ctrlKey && !i.startselected && (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, k._trigger("unselecting", f, {unselecting: i.element})))
		}), !1
            },_mouseStop: function(c) {
		var e = this;
		this.dragged = !1;
		var d = this.options;
		return b(".ui-unselecting", this.element[0]).each(function() {
                    var f = b.data(this, "selectable-item");
                    f.$element.removeClass("ui-unselecting"), f.unselecting = !1, f.startselected = !1, e._trigger("unselected", c, {unselected: f.element})
		}), b(".ui-selecting", this.element[0]).each(function() {
                    var f = b.data(this, "selectable-item");
                    f.$element.removeClass("ui-selecting").addClass("ui-selected"), f.selecting = !1, f.selected = !0, f.startselected = !0, e._trigger("selected", c, {selected: f.element})
		}), this._trigger("stop", c), this.helper.remove(), !1
            }})
})(jQuery);
(function(b, a) {
    b.widget("ui.sortable", b.ui.mouse, {version: "1.9.2",widgetEventPrefix: "sort",ready: !1,options: {appendTo: "parent",axis: !1,connectWith: !1,containment: !1,cursor: "auto",cursorAt: !1,dropOnEmpty: !0,forcePlaceholderSize: !1,forceHelperSize: !1,grid: !1,handle: !1,helper: "original",items: "> *",opacity: !1,placeholder: !1,revert: !1,scroll: !0,scrollSensitivity: 20,scrollSpeed: 20,scope: "default",tolerance: "intersect",zIndex: 1000},_create: function() {
        var c = this.options;
        this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? c.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    },_destroy: function() {
        this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
        for (var c = this.items.length - 1; c >= 0; c--) {
            this.items[c].item.removeData(this.widgetName + "-item")
        }
        return this
    },_setOption: function(c, d) {
        c === "disabled" ? (this.options[c] = d, this.widget().toggleClass("ui-sortable-disabled", !!d)) : b.Widget.prototype._setOption.apply(this, arguments)
    },_mouseCapture: function(d, h) {
        var f = this;
        if (this.reverting) {
            return !1
        }
        if (this.options.disabled || this.options.type == "static") {
            return !1
        }
        this._refreshItems(d);
        var c = null, e = b(d.target).parents().each(function() {
            if (b.data(this, f.widgetName + "-item") == f) {
                return c = b(this), !1
            }
        });
        b.data(d.target, f.widgetName + "-item") == f && (c = b(d.target));
        if (!c) {
            return !1
        }
        if (this.options.handle && !h) {
            var g = !1;
            b(this.options.handle, c).find("*").andSelf().each(function() {
                this == d.target && (g = !0)
            });
            if (!g) {
                return !1
            }
        }
        return this.currentItem = c, this._removeCurrentsFromItems(), !0
    },_mouseStart: function(d, g, f) {
        var c = this.options;
        this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(d), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {top: this.offset.top - this.margins.top,left: this.offset.left - this.margins.left}, b.extend(this.offset, {click: {left: d.pageX - this.offset.left,top: d.pageY - this.offset.top},parent: this._getParentOffset(),relative: this._getRelativeOffset()}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(d), this.originalPageX = d.pageX, this.originalPageY = d.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {prev: this.currentItem.prev()[0],parent: this.currentItem.parent()[0]}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && (b("body").css("cursor") && (this._storedCursor = b("body").css("cursor")), b("body").css("cursor", c.cursor)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", d, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
        if (!f) {
            for (var e = this.containers.length - 1; e >= 0; e--) {
                this.containers[e]._trigger("activate", d, this._uiHash(this))
            }
        }
        return b.ui.ddmanager && (b.ui.ddmanager.current = this), b.ui.ddmanager && !c.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, d), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(d), !0
    },_mouseDrag: function(e) {
        this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
        if (this.options.scroll) {
            var j = this.options, g = !1;
            this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < j.scrollSensitivity ? this.scrollParent[0].scrollTop = g = this.scrollParent[0].scrollTop + j.scrollSpeed : e.pageY - this.overflowOffset.top < j.scrollSensitivity && (this.scrollParent[0].scrollTop = g = this.scrollParent[0].scrollTop - j.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < j.scrollSensitivity ? this.scrollParent[0].scrollLeft = g = this.scrollParent[0].scrollLeft + j.scrollSpeed : e.pageX - this.overflowOffset.left < j.scrollSensitivity && (this.scrollParent[0].scrollLeft = g = this.scrollParent[0].scrollLeft - j.scrollSpeed)) : (e.pageY - b(document).scrollTop() < j.scrollSensitivity ? g = b(document).scrollTop(b(document).scrollTop() - j.scrollSpeed) : b(window).height() - (e.pageY - b(document).scrollTop()) < j.scrollSensitivity && (g = b(document).scrollTop(b(document).scrollTop() + j.scrollSpeed)), e.pageX - b(document).scrollLeft() < j.scrollSensitivity ? g = b(document).scrollLeft(b(document).scrollLeft() - j.scrollSpeed) : b(window).width() - (e.pageX - b(document).scrollLeft()) < j.scrollSensitivity && (g = b(document).scrollLeft(b(document).scrollLeft() + j.scrollSpeed))), g !== !1 && b.ui.ddmanager && !j.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, e)
        }
        this.positionAbs = this._convertPositionTo("absolute");
        if (!this.options.axis || this.options.axis != "y") {
            this.helper[0].style.left = this.position.left + "px"
        }
        if (!this.options.axis || this.options.axis != "x") {
            this.helper[0].style.top = this.position.top + "px"
        }
        for (var d = this.items.length - 1; d >= 0; d--) {
            var f = this.items[d], h = f.item[0], c = this._intersectsWithPointer(f);
            if (!c) {
                continue
            }
            if (f.instance !== this.currentContainer) {
                continue
            }
            if (h != this.currentItem[0] && this.placeholder[c == 1 ? "next" : "prev"]()[0] != h && !b.contains(this.placeholder[0], h) && (this.options.type == "semi-dynamic" ? !b.contains(this.element[0], h) : !0)) {
                this.direction = c == 1 ? "down" : "up";
                if (this.options.tolerance != "pointer" && !this._intersectsWithSides(f)) {
                    break
                }
                this._rearrange(e, f), this._trigger("change", e, this._uiHash());
                break
            }
        }
        return this._contactContainers(e), b.ui.ddmanager && b.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },_mouseStop: function(d, f) {
        if (!d) {
            return
        }
        b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, d);
        if (this.options.revert) {
            var e = this, c = this.placeholder.offset();
            this.reverting = !0, b(this.helper).animate({left: c.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),top: c.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)}, parseInt(this.options.revert, 10) || 500, function() {
                e._clear(d)
            })
        } else {
            this._clear(d, f)
        }
        return !1
    },cancel: function() {
        if (this.dragging) {
            this._mouseUp({target: null}), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
            for (var c = this.containers.length - 1; c >= 0; c--) {
                this.containers[c]._trigger("deactivate", null, this._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, this._uiHash(this)), this.containers[c].containerCache.over = 0)
            }
        }
        return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {helper: null,dragging: !1,reverting: !1,_noFinalSort: null}), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem)), this
    },serialize: function(c) {
        var e = this._getItemsAsjQuery(c && c.connected), d = [];
        return c = c || {}, b(e).each(function() {
            var f = (b(c.item || this).attr(c.attribute || "id") || "").match(c.expression || /(.+)[-=_](.+)/);
            f && d.push((c.key || f[1] + "[]") + "=" + (c.key && c.expression ? f[1] : f[2]))
        }), !d.length && c.key && d.push(c.key + "="), d.join("&")
    },toArray: function(c) {
        var e = this._getItemsAsjQuery(c && c.connected), d = [];
        return c = c || {}, e.each(function() {
            d.push(b(c.item || this).attr(c.attribute || "id") || "")
        }), d
    },_intersectsWith: function(p) {
        var x = this.positionAbs.left, h = x + this.helperProportions.width, d = this.positionAbs.top, k = d + this.helperProportions.height, y = p.left, g = y + p.width, w = p.top, v = w + p.height, m = this.offset.click.top, j = this.offset.click.left, q = d + m > w && d + m < v && x + j > y && x + j < g;
        return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > p[this.floating ? "width" : "height"] ? q : y < x + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < g && w < d + this.helperProportions.height / 2 && k - this.helperProportions.height / 2 < v
    },_intersectsWithPointer: function(d) {
        var h = this.options.axis === "x" || b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, d.top, d.height), f = this.options.axis === "y" || b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, d.left, d.width), c = h && f, e = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
        return c ? this.floating ? g && g == "right" || e == "down" ? 2 : 1 : e && (e == "down" ? 2 : 1) : !1
    },_intersectsWithSides: function(d) {
        var g = b.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, d.top + d.height / 2, d.height), f = b.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, d.left + d.width / 2, d.width), c = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection();
        return this.floating && e ? e == "right" && f || e == "left" && !f : c && (c == "down" && g || c == "up" && !g)
    },_getDragVerticalDirection: function() {
        var c = this.positionAbs.top - this.lastPositionAbs.top;
        return c != 0 && (c > 0 ? "down" : "up")
    },_getDragHorizontalDirection: function() {
        var c = this.positionAbs.left - this.lastPositionAbs.left;
        return c != 0 && (c > 0 ? "right" : "left")
    },refresh: function(c) {
        return this._refreshItems(c), this.refreshPositions(), this
    },_connectWith: function() {
        var c = this.options;
        return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith
    },_getItemsAsjQuery: function(f) {
        var k = [], h = [], e = this._connectWith();
        if (e && f) {
            for (var g = e.length - 1; g >= 0; g--) {
                var j = b(e[g]);
                for (var d = j.length - 1; d >= 0; d--) {
                    var c = b.data(j[d], this.widgetName);
                    c && c != this && !c.options.disabled && h.push([b.isFunction(c.options.items) ? c.options.items.call(c.element) : b(c.options.items, c.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), c])
                }
            }
        }
        h.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {options: this.options,item: this.currentItem}) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
        for (var g = h.length - 1; g >= 0; g--) {
            h[g][0].each(function() {
                k.push(this)
            })
		}
        return b(k)
    },_removeCurrentsFromItems: function() {
        var c = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = b.grep(this.items, function(d) {
            for (var f = 0; f < c.length; f++) {
                if (c[f] == d.item[0]) {
                    return !1
                }
            }
            return !0
        })
    },_refreshItems: function(x) {
        this.items = [], this.containers = [this];
        var g = this.items, d = [[b.isFunction(this.options.items) ? this.options.items.call(this.element[0], x, {item: this.currentItem}) : b(this.options.items, this.element), this]], k = this._connectWith();
        if (k && this.ready) {
            for (var y = k.length - 1; y >= 0; y--) {
                var e = b(k[y]);
                for (var w = e.length - 1; w >= 0; w--) {
                    var v = b.data(e[w], this.widgetName);
                    v && v != this && !v.options.disabled && (d.push([b.isFunction(v.options.items) ? v.options.items.call(v.element[0], x, {item: this.currentItem}) : b(v.options.items, v.element), v]), this.containers.push(v))
                }
            }
        }
        for (var y = d.length - 1; y >= 0; y--) {
            var p = d[y][1], j = d[y][0];
            for (var w = 0, q = j.length; w < q; w++) {
                var m = b(j[w]);
                m.data(this.widgetName + "-item", p), g.push({item: m,instance: p,width: 0,height: 0,left: 0,top: 0})
            }
        }
    },refreshPositions: function(d) {
        this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
        for (var g = this.items.length - 1; g >= 0; g--) {
            var f = this.items[g];
            if (f.instance != this.currentContainer && this.currentContainer && f.item[0] != this.currentItem[0]) {
                continue
            }
            var c = this.options.toleranceElement ? b(this.options.toleranceElement, f.item) : f.item;
            d || (f.width = c.outerWidth(), f.height = c.outerHeight());
            var e = c.offset();
            f.left = e.left, f.top = e.top
        }
        if (this.options.custom && this.options.custom.refreshContainers) {
            this.options.custom.refreshContainers.call(this)
        } else {
            for (var g = this.containers.length - 1; g >= 0; g--) {
                var e = this.containers[g].element.offset();
                this.containers[g].containerCache.left = e.left, this.containers[g].containerCache.top = e.top, this.containers[g].containerCache.width = this.containers[g].element.outerWidth(), this.containers[g].containerCache.height = this.containers[g].element.outerHeight()
            }
        }
        return this
    },_createPlaceholder: function(c) {
        c = c || this;
        var e = c.options;
        if (!e.placeholder || e.placeholder.constructor == String) {
            var d = e.placeholder;
            e.placeholder = {element: function() {
                var f = b(document.createElement(c.currentItem[0].nodeName)).addClass(d || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                return d || (f.style.visibility = "hidden"), f
            },update: function(g, f) {
                if (d && !e.forcePlaceholderSize) {
                    return
                }
                f.height() || f.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10))
            }}
        }
        c.placeholder = b(e.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), e.placeholder.update(c, c.placeholder)
    },_contactContainers: function(x) {
        var g = null, d = null;
        for (var k = this.containers.length - 1; k >= 0; k--) {
            if (b.contains(this.currentItem[0], this.containers[k].element[0])) {
                continue
            }
            if (this._intersectsWith(this.containers[k].containerCache)) {
                if (g && b.contains(this.containers[k].element[0], g.element[0])) {
                    continue
                }
                g = this.containers[k], d = k
            } else {
                this.containers[k].containerCache.over && (this.containers[k]._trigger("out", x, this._uiHash(this)), this.containers[k].containerCache.over = 0)
            }
        }
        if (!g) {
            return
        }
        if (this.containers.length === 1) {
            this.containers[d]._trigger("over", x, this._uiHash(this)), this.containers[d].containerCache.over = 1
        } else {
            var y = 10000, e = null, w = this.containers[d].floating ? "left" : "top", v = this.containers[d].floating ? "width" : "height", p = this.positionAbs[w] + this.offset.click[w];
            for (var j = this.items.length - 1; j >= 0; j--) {
                if (!b.contains(this.containers[d].element[0], this.items[j].item[0])) {
                    continue
                }
                if (this.items[j].item[0] == this.currentItem[0]) {
                    continue
                }
                var q = this.items[j].item.offset()[w], m = !1;
                Math.abs(q - p) > Math.abs(q + this.items[j][v] - p) && (m = !0, q += this.items[j][v]), Math.abs(q - p) < y && (y = Math.abs(q - p), e = this.items[j], this.direction = m ? "up" : "down")
            }
            if (!e && !this.options.dropOnEmpty) {
                return
            }
            this.currentContainer = this.containers[d], e ? this._rearrange(x, e, null, !0) : this._rearrange(x, null, this.containers[d].element, !0), this._trigger("change", x, this._uiHash()), this.containers[d]._trigger("change", x, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", x, this._uiHash(this)), this.containers[d].containerCache.over = 1
        }
    },_createHelper: function(c) {
        var e = this.options, d = b.isFunction(e.helper) ? b(e.helper.apply(this.element[0], [c, this.currentItem])) : e.helper == "clone" ? this.currentItem.clone() : this.currentItem;
        return d.parents("body").length || b(e.appendTo != "parent" ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] == this.currentItem[0] && (this._storedCSS = {width: this.currentItem[0].style.width,height: this.currentItem[0].style.height,position: this.currentItem.css("position"),top: this.currentItem.css("top"),left: this.currentItem.css("left")}), (d[0].style.width == "" || e.forceHelperSize) && d.width(this.currentItem.width()), (d[0].style.height == "" || e.forceHelperSize) && d.height(this.currentItem.height()), d
    },_adjustOffsetFromHelper: function(c) {
        typeof c == "string" && (c = c.split(" ")), b.isArray(c) && (c = {left: +c[0],top: +c[1] || 0}), "left" in c && (this.offset.click.left = c.left + this.margins.left), "right" in c && (this.offset.click.left = this.helperProportions.width - c.right + this.margins.left), "top" in c && (this.offset.click.top = c.top + this.margins.top), "bottom" in c && (this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top)
    },_getParentOffset: function() {
        this.offsetParent = this.helper.offsetParent();
        var c = this.offsetParent.offset();
        this.cssPosition == "absolute" && this.scrollParent[0] != document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (c.left += this.scrollParent.scrollLeft(), c.top += this.scrollParent.scrollTop());
        if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && b.ui.ie) {
            c = {top: 0,left: 0}
        }
        return {top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    },_getRelativeOffset: function() {
        if (this.cssPosition == "relative") {
            var c = this.currentItem.position();
            return {top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
        }
        return {top: 0,left: 0}
    },_cacheMargins: function() {
        this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
    },_cacheHelperProportions: function() {
        this.helperProportions = {width: this.helper.outerWidth(),height: this.helper.outerHeight()}
    },_setContainment: function() {
        var d = this.options;
        d.containment == "parent" && (d.containment = this.helper[0].parentNode);
        if (d.containment == "document" || d.containment == "window") {
            this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b(d.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b(d.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
        }
        if (!/^(document|window|parent)$/.test(d.containment)) {
            var f = b(d.containment)[0], e = b(d.containment).offset(), c = b(f).css("overflow") != "hidden";
            this.containment = [e.left + (parseInt(b(f).css("borderLeftWidth"), 10) || 0) + (parseInt(b(f).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(b(f).css("borderTopWidth"), 10) || 0) + (parseInt(b(f).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (c ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(b(f).css("borderLeftWidth"), 10) || 0) - (parseInt(b(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (c ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(b(f).css("borderTopWidth"), 10) || 0) - (parseInt(b(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
        }
    },_convertPositionTo: function(d, h) {
        h || (h = this.position);
        var f = d == "absolute" ? 1 : -1, c = this.options, e = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, g = /(html|body)/i.test(e[0].tagName);
        return {top: h.top + this.offset.relative.top * f + this.offset.parent.top * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : e.scrollTop()) * f,left: h.left + this.offset.relative.left * f + this.offset.parent.left * f - (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : e.scrollLeft()) * f}
    },_generatePosition: function(f) {
        var k = this.options, h = this.cssPosition != "absolute" || this.scrollParent[0] != document && !!b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, e = /(html|body)/i.test(h[0].tagName);
        this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
        var g = f.pageX, j = f.pageY;
        if (this.originalPosition) {
            this.containment && (f.pageX - this.offset.click.left < this.containment[0] && (g = this.containment[0] + this.offset.click.left), f.pageY - this.offset.click.top < this.containment[1] && (j = this.containment[1] + this.offset.click.top), f.pageX - this.offset.click.left > this.containment[2] && (g = this.containment[2] + this.offset.click.left), f.pageY - this.offset.click.top > this.containment[3] && (j = this.containment[3] + this.offset.click.top));
            if (k.grid) {
                var d = this.originalPageY + Math.round((j - this.originalPageY) / k.grid[1]) * k.grid[1];
                j = this.containment ? d - this.offset.click.top < this.containment[1] || d - this.offset.click.top > this.containment[3] ? d - this.offset.click.top < this.containment[1] ? d + k.grid[1] : d - k.grid[1] : d : d;
                var c = this.originalPageX + Math.round((g - this.originalPageX) / k.grid[0]) * k.grid[0];
                g = this.containment ? c - this.offset.click.left < this.containment[0] || c - this.offset.click.left > this.containment[2] ? c - this.offset.click.left < this.containment[0] ? c + k.grid[0] : c - k.grid[0] : c : c
            }
        }
        return {top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : h.scrollTop()),left: g - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : h.scrollLeft())}
    },_rearrange: function(g, d, h, f) {
        h ? h[0].appendChild(this.placeholder[0]) : d.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? d.item[0] : d.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
        var c = this.counter;
        this._delay(function() {
            c == this.counter && this.refreshPositions(!f)
        })
    },_clear: function(d, f) {
        this.reverting = !1;
        var e = [];
        !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
        if (this.helper[0] == this.currentItem[0]) {
            for (var c in this._storedCSS) {
                if (this._storedCSS[c] == "auto" || this._storedCSS[c] == "static") {
                    this._storedCSS[c] = ""
                }
            }
            this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
        } else {
            this.currentItem.show()
        }
        this.fromOutside && !f && e.push(function(g) {
            this._trigger("receive", g, this._uiHash(this.fromOutside))
        }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !f && e.push(function(g) {
            this._trigger("update", g, this._uiHash())
        }), this !== this.currentContainer && (f || (e.push(function(g) {
            this._trigger("remove", g, this._uiHash())
        }), e.push(function(g) {
            return function(h) {
                g._trigger("receive", h, this._uiHash(this))
            }
        }.call(this, this.currentContainer)), e.push(function(g) {
            return function(h) {
                g._trigger("update", h, this._uiHash(this))
            }
        }.call(this, this.currentContainer))));
        for (var c = this.containers.length - 1; c >= 0; c--) {
            f || e.push(function(g) {
                return function(h) {
                    g._trigger("deactivate", h, this._uiHash(this))
                }
            }.call(this, this.containers[c])), this.containers[c].containerCache.over && (e.push(function(g) {
                return function(h) {
                    g._trigger("out", h, this._uiHash(this))
                }
            }.call(this, this.containers[c])), this.containers[c].containerCache.over = 0)
        }
        this._storedCursor && b("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
        if (this.cancelHelperRemoval) {
            if (!f) {
                this._trigger("beforeStop", d, this._uiHash());
                for (var c = 0; c < e.length; c++) {
                    e[c].call(this, d)
                }
                this._trigger("stop", d, this._uiHash())
            }
            return this.fromOutside = !1, !1
        }
        f || this._trigger("beforeStop", d, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
        if (!f) {
            for (var c = 0; c < e.length; c++) {
                e[c].call(this, d)
            }
            this._trigger("stop", d, this._uiHash())
        }
        return this.fromOutside = !1, !0
    },_trigger: function() {
        b.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },_uiHash: function(c) {
        var d = c || this;
        return {helper: d.helper,placeholder: d.placeholder || b([]),position: d.position,originalPosition: d.originalPosition,offset: d.positionAbs,item: d.currentItem,sender: c ? c.element : null}
    }})
})(jQuery);
(function(d, b) {
    var f = 0, c = {}, a = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", d.widget("ui.accordion", {version: "1.9.2",options: {active: 0,animate: {},collapsible: !1,event: "click",header: "> li > :first-child,> :not(li):even",heightStyle: "auto",icons: {activeHeader: "ui-icon-triangle-1-s",header: "ui-icon-triangle-1-e"},activate: null,beforeActivate: null},_create: function() {
        var e = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++f), g = this.options;
        this.prevShow = this.prevHide = d(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(g.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), !g.collapsible && (g.active === !1 || g.active == null) && (g.active = 0), g.active < 0 && (g.active += this.headers.length), this.active = this._findActive(g.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(m) {
            var k = d(this), h = k.attr("id"), j = k.next(), l = j.attr("id");
            h || (h = e + "-header-" + m, k.attr("id", h)), l || (l = e + "-panel-" + m, j.attr("id", l)), k.attr("aria-controls", l), j.attr("aria-labelledby", h)
        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({"aria-selected": "false",tabIndex: -1}).next().attr({"aria-expanded": "false","aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({"aria-selected": "true",tabIndex: 0}).next().attr({"aria-expanded": "true","aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {keydown: "_keydown"}), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._setupEvents(g.event)
    },_getCreateEventData: function() {
        return {header: this.active,content: this.active.length ? this.active.next() : d()}
    },_createIcons: function() {
        var e = this.options.icons;
        e && (d("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
    },_destroyIcons: function() {
        this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
    },_destroy: function() {
        var g;
        this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), this._destroyIcons(), g = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
        }), this.options.heightStyle !== "content" && g.css("height", "")
    },_setOption: function(h, g) {
        if (h === "active") {
            this._activate(g);
            return
        }
        h === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(g)), this._super(h, g), h === "collapsible" && !g && this.options.active === !1 && this._activate(0), h === "icons" && (this._destroyIcons(), g && this._createIcons()), h === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!g)
    },_keydown: function(g) {
        if (g.altKey || g.ctrlKey) {
            return
        }
        var k = d.ui.keyCode, j = this.headers.length, e = this.headers.index(g.target), h = !1;
        switch (g.keyCode) {
        case k.RIGHT:
        case k.DOWN:
            h = this.headers[(e + 1) % j];
            break;
        case k.LEFT:
        case k.UP:
            h = this.headers[(e - 1 + j) % j];
            break;
        case k.SPACE:
        case k.ENTER:
            this._eventHandler(g);
            break;
        case k.HOME:
            h = this.headers[0];
            break;
        case k.END:
            h = this.headers[j - 1]
        }
        h && (d(g.target).attr("tabIndex", -1), d(h).attr("tabIndex", 0), h.focus(), g.preventDefault())
    },_panelKeyDown: function(e) {
        e.keyCode === d.ui.keyCode.UP && e.ctrlKey && d(e.currentTarget).prev().focus()
    },refresh: function() {
        var g, j, h = this.options.heightStyle, e = this.element.parent();
        h === "fill" ? (d.support.minHeight || (j = e.css("overflow"), e.css("overflow", "hidden")), g = e.height(), this.element.siblings(":visible").each(function() {
            var k = d(this), i = k.css("position");
            if (i === "absolute" || i === "fixed") {
                return
            }
            g -= k.outerHeight(!0)
        }), j && e.css("overflow", j), this.headers.each(function() {
            g -= d(this).outerHeight(!0)
        }), this.headers.next().each(function() {
            d(this).height(Math.max(0, g - d(this).innerHeight() + d(this).height()))
        }).css("overflow", "auto")) : h === "auto" && (g = 0, this.headers.next().each(function() {
            g = Math.max(g, d(this).css("height", "").height())
        }).height(g))
    },_activate: function(e) {
        var g = this._findActive(e)[0];
        if (g === this.active[0]) {
            return
        }
        g = g || this.active[0], this._eventHandler({target: g,currentTarget: g,preventDefault: d.noop})
    },_findActive: function(e) {
        return typeof e == "number" ? this.headers.eq(e) : d()
    },_setupEvents: function(e) {
        var g = {};
        if (!e) {
            return
        }
        d.each(e.split(" "), function(i, h) {
            g[h] = "_eventHandler"
        }), this._on(this.headers, g)
    },_eventHandler: function(p) {
        var h = this.options, e = this.active, j = d(p.currentTarget), q = j[0] === e[0], g = q && h.collapsible, m = g ? d() : j.next(), l = e.next(), k = {oldHeader: e,oldPanel: l,newHeader: g ? d() : j,newPanel: m};
        p.preventDefault();
        if (q && !h.collapsible || this._trigger("beforeActivate", p, k) === !1) {
            return
        }
        h.active = g ? !1 : this.headers.index(j), this.active = q ? d() : j, this._toggle(k), e.removeClass("ui-accordion-header-active ui-state-active"), h.icons && e.children(".ui-accordion-header-icon").removeClass(h.icons.activeHeader).addClass(h.icons.header), q || (j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), h.icons && j.children(".ui-accordion-header-icon").removeClass(h.icons.header).addClass(h.icons.activeHeader), j.next().addClass("ui-accordion-content-active"))
    },_toggle: function(e) {
        var h = e.newPanel, g = this.prevShow.length ? this.prevShow : e.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = h, this.prevHide = g, this.options.animate ? this._animate(h, g, e) : (g.hide(), h.show(), this._toggleComplete(e)), g.attr({"aria-expanded": "false","aria-hidden": "true"}), g.prev().attr("aria-selected", "false"), h.length && g.length ? g.prev().attr("tabIndex", -1) : h.length && this.headers.filter(function() {
            return d(this).attr("tabIndex") === 0
        }).attr("tabIndex", -1), h.attr({"aria-expanded": "true","aria-hidden": "false"}).prev().attr({"aria-selected": "true",tabIndex: 0})
    },_animate: function(r, y, j) {
        var z, i, x, w = this, q = 0, k = r.length && (!y.length || r.index() < y.index()), v = this.options.animate || {}, m = k && v.down || v, g = function() {
            w._toggleComplete(j)
        };
        typeof m == "number" && (x = m), typeof m == "string" && (i = m), i = i || m.easing || v.easing, x = x || m.duration || v.duration;
        if (!y.length) {
            return r.animate(a, x, i, g)
        }
        if (!r.length) {
            return y.animate(c, x, i, g)
        }
        z = r.show().outerHeight(), y.animate(c, {duration: x,easing: i,step: function(l, h) {
            h.now = Math.round(l)
        }}), r.hide().animate(a, {duration: x,easing: i,complete: g,step: function(h, l) {
            l.now = Math.round(h), l.prop !== "height" ? q += l.now : w.options.heightStyle !== "content" && (l.now = Math.round(z - y.outerHeight() - q), q = 0)
        }})
    },_toggleComplete: function(h) {
        var g = h.oldPanel;
        g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), g.length && (g.parent()[0].className = g.parent()[0].className), this._trigger("activate", null, h)
    }}), d.uiBackCompat !== !1 && (function(h, g) {
        h.extend(g.options, {navigation: !1,navigationFilter: function() {
            return this.href.toLowerCase() === location.href.toLowerCase()
        }});
        var i = g._create;
        g._create = function() {
            if (this.options.navigation) {
                var j = this, l = this.element.find(this.options.header), e = l.next(), k = l.add(e).find("a").filter(this.options.navigationFilter)[0];
                k && l.add(e).each(function(m) {
                    if (h.contains(this, k)) {
                        return j.options.active = Math.floor(m / 2), !1
                    }
                })
		    }
            i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function(i, g) {
        i.extend(g.options, {heightStyle: null,autoHeight: !0,clearStyle: !1,fillSpace: !1});
        var j = g._create, h = g._setOption;
        i.extend(g, {_create: function() {
            this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), j.call(this)
        },_setOption: function(k) {
            if (k === "autoHeight" || k === "clearStyle" || k === "fillSpace") {
                this.options.heightStyle = this._mergeHeightStyle()
            }
            h.apply(this, arguments)
        },_mergeHeightStyle: function() {
            var k = this.options;
            if (k.fillSpace) {
                return "fill"
            }
            if (k.clearStyle) {
                return "content"
            }
            if (k.autoHeight) {
                return "auto"
            }
        }})
    }(jQuery, jQuery.ui.accordion.prototype), function(h, g) {
        h.extend(g.options.icons, {activeHeader: null,headerSelected: "ui-icon-triangle-1-s"});
        var i = g._createIcons;
        g._createIcons = function() {
            this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype), function(h, g) {
        g.activate = g._activate;
        var i = g._findActive;
        g._findActive = function(j) {
            return j === -1 && (j = !1), j && typeof j != "number" && (j = this.headers.index(this.headers.filter(j)), j === -1 && (j = !1)), i.call(this, j)
        }
    }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(h, g) {
        h.extend(g.options, {change: null,changestart: null});
        var i = g._trigger;
        g._trigger = function(m, k, l) {
            var j = i.apply(this, arguments);
            return j ? (m === "beforeActivate" ? j = i.call(this, "changestart", k, {oldHeader: l.oldHeader,oldContent: l.oldPanel,newHeader: l.newHeader,newContent: l.newPanel}) : m === "activate" && (j = i.call(this, "change", k, {oldHeader: l.oldHeader,oldContent: l.oldPanel,newHeader: l.newHeader,newContent: l.newPanel})), j) : !1
        }
    }(jQuery, jQuery.ui.accordion.prototype), function(h, g) {
        h.extend(g.options, {animate: null,animated: "slide"});
        var i = g._create;
        g._create = function() {
            var j = this.options;
            j.animate === null && (j.animated ? j.animated === "slide" ? j.animate = 300 : j.animated === "bounceslide" ? j.animate = {duration: 200,down: {easing: "easeOutBounce",duration: 1000}} : j.animate = j.animated : j.animate = !1), i.call(this)
        }
    }(jQuery, jQuery.ui.accordion.prototype))
})(jQuery);
(function(b, a) {
    var c = 0;
    b.widget("ui.autocomplete", {version: "1.9.2",defaultElement: "<input>",options: {appendTo: "body",autoFocus: !1,delay: 300,minLength: 1,position: {my: "left top",at: "left bottom",collision: "none"},source: null,change: null,close: null,focus: null,open: null,response: null,search: null,select: null},pending: 0,_create: function() {
        var d, f, e;
        this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {keydown: function(g) {
            if (this.element.prop("readOnly")) {
                d = !0, e = !0, f = !0;
                return
            }
            d = !1, e = !1, f = !1;
            var h = b.ui.keyCode;
            switch (g.keyCode) {
            case h.PAGE_UP:
                d = !0, this._move("previousPage", g);
                break;
            case h.PAGE_DOWN:
                d = !0, this._move("nextPage", g);
                break;
            case h.UP:
                d = !0, this._keyEvent("previous", g);
                break;
            case h.DOWN:
                d = !0, this._keyEvent("next", g);
                break;
            case h.ENTER:
            case h.NUMPAD_ENTER:
                this.menu.active && (d = !0, g.preventDefault(), this.menu.select(g));
                break;
            case h.TAB:
                this.menu.active && this.menu.select(g);
                break;
            case h.ESCAPE:
                this.menu.element.is(":visible") && (this._value(this.term), this.close(g), g.preventDefault());
                break;
            default:
                f = !0, this._searchTimeout(g)
            }
        },keypress: function(h) {
            if (d) {
                d = !1, h.preventDefault();
                return
            }
            if (f) {
                return
            }
            var g = b.ui.keyCode;
            switch (h.keyCode) {
            case g.PAGE_UP:
                this._move("previousPage", h);
                break;
            case g.PAGE_DOWN:
                this._move("nextPage", h);
                break;
            case g.UP:
                this._keyEvent("previous", h);
                break;
            case g.DOWN:
                this._keyEvent("next", h)
            }
        },input: function(g) {
            if (e) {
                e = !1, g.preventDefault();
                return
            }
            this._searchTimeout(g)
        },focus: function() {
            this.selectedItem = null, this.previous = this._value()
        },blur: function(g) {
            if (this.cancelBlur) {
                delete this.cancelBlur;
                return
            }
            clearTimeout(this.searching), this.close(g), this._change(g)
        }}), this._initSource(), this.menu = b("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({input: b(),role: null}).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {mousedown: function(g) {
            g.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                delete this.cancelBlur
            });
            var h = this.menu.element[0];
            b(g.target).closest(".ui-menu-item").length || this._delay(function() {
                var i = this;
                this.document.one("mousedown", function(j) {
                    j.target !== i.element[0] && j.target !== h && !b.contains(h, j.target) && i.close()
                })
            })
        },menufocus: function(g, i) {
            if (this.isNewMenu) {
                this.isNewMenu = !1;
                if (g.originalEvent && /^mouse/.test(g.originalEvent.type)) {
                    this.menu.blur(), this.document.one("mousemove", function() {
                        b(g.target).trigger(g.originalEvent)
                    });
                    return
                }
            }
            var h = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
            !1 !== this._trigger("focus", g, {item: h}) ? g.originalEvent && /^key/.test(g.originalEvent.type) && this._value(h.value) : this.liveRegion.text(h.value)
        },menuselect: function(i, g) {
            var j = g.item.data("ui-autocomplete-item") || g.item.data("item.autocomplete"), h = this.previous;
            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = h, this._delay(function() {
                this.previous = h, this.selectedItem = j
            })), !1 !== this._trigger("select", i, {item: j}) && this._value(j.value), this.term = this._value(), this.close(i), this.selectedItem = j
        }}), this.liveRegion = b("<span>", {role: "status","aria-live": "polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element), b.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {beforeunload: function() {
            this.element.removeAttr("autocomplete")
        }})
    },_destroy: function() {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },_setOption: function(f, d) {
        this._super(f, d), f === "source" && this._initSource(), f === "appendTo" && this.menu.element.appendTo(this.document.find(d || "body")[0]), f === "disabled" && d && this.xhr && this.xhr.abort()
    },_isMultiLine: function() {
        return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
    },_initSource: function() {
        var d, f, e = this;
        b.isArray(this.options.source) ? (d = this.options.source, this.source = function(h, g) {
            g(b.ui.autocomplete.filter(d, h.term))
        }) : typeof this.options.source == "string" ? (f = this.options.source, this.source = function(h, g) {
            e.xhr && e.xhr.abort(), e.xhr = b.ajax({url: f,data: h,dataType: "json",success: function(i) {
                g(i)
            },error: function() {
                g([])
            }})
        }) : this.source = this.options.source
    },_searchTimeout: function(d) {
        clearTimeout(this.searching), this.searching = this._delay(function() {
            this.term !== this._value() && (this.selectedItem = null, this.search(null, d))
        }, this.options.delay)
    },search: function(f, d) {
        f = f != null ? f : this._value(), this.term = this._value();
        if (f.length < this.options.minLength) {
            return this.close(d)
        }
        if (this._trigger("search", d) === !1) {
            return
        }
        return this._search(f)
    },_search: function(d) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: d}, this._response())
    },_response: function() {
        var f = this, d = ++c;
        return function(e) {
            d === c && f.__response(e), f.pending--, f.pending || f.element.removeClass("ui-autocomplete-loading")
        }
    },__response: function(d) {
        d && (d = this._normalize(d)), this._trigger("response", null, {content: d}), !this.options.disabled && d && d.length && !this.cancelSearch ? (this._suggest(d), this._trigger("open")) : this._close()
    },close: function(d) {
        this.cancelSearch = !0, this._close(d)
    },_close: function(d) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", d))
    },_change: function(d) {
        this.previous !== this._value() && this._trigger("change", d, {item: this.selectedItem})
    },_normalize: function(d) {
        return d.length && d[0].label && d[0].value ? d : b.map(d, function(e) {
            return typeof e == "string" ? {label: e,value: e} : b.extend({label: e.label || e.value,value: e.value || e.label}, e)
        })
    },_suggest: function(d) {
        var e = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(e, d), this.menu.refresh(), e.show(), this._resizeMenu(), e.position(b.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
    },_resizeMenu: function() {
        var d = this.menu.element;
        d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth()))
    },_renderMenu: function(d, f) {
        var e = this;
        b.each(f, function(g, h) {
            e._renderItemData(d, h)
        })
            },_renderItemData: function(f, d) {
		return this._renderItem(f, d).data("ui-autocomplete-item", d)
            },_renderItem: function(d, e) {
		return b("<li>").append(b("<a>").text(e.label)).appendTo(d)
            },_move: function(f, d) {
		if (!this.menu.element.is(":visible")) {
                    this.search(null, d);
                    return
		}
		if (this.menu.isFirstItem() && /^previous/.test(f) || this.menu.isLastItem() && /^next/.test(f)) {
                    this._value(this.term), this.menu.blur();
                    return
		}
		this.menu[f](d)
            },widget: function() {
		return this.menu.element
            },_value: function() {
		return this.valueMethod.apply(this.element, arguments)
            },_keyEvent: function(f, d) {
		if (!this.isMultiLine || this.menu.element.is(":visible")) {
                    this._move(f, d), d.preventDefault()
		}
            }}), b.extend(b.ui.autocomplete, {escapeRegex: function(d) {
		return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },filter: function(d, f) {
		var e = new RegExp(b.ui.autocomplete.escapeRegex(f), "i");
		return b.grep(d, function(g) {
                    return e.test(g.label || g.value || g)
		})
            }}), b.widget("ui.autocomplete", b.ui.autocomplete, {options: {messages: {noResults: "No search results.",results: function(d) {
                return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
            }}},__response: function(f) {
		var d;
		this._superApply(arguments);
		if (this.options.disabled || this.cancelSearch) {
                    return
		}
		f && f.length ? d = this.options.messages.results(f.length) : d = this.options.messages.noResults, this.liveRegion.text(d)
            }})
})(jQuery);
(function(k, q) {
    var d, b, h, v, c = "ui-button ui-widget ui-state-default ui-corner-all", p = "ui-state-hover ui-state-active ", m = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", j = function() {
        var a = k(this).find(":ui-button");
        setTimeout(function() {
            a.button("refresh")
        }, 1)
    }, g = function(e) {
        var l = e.name, f = e.form, a = k([]);
        return l && (f ? a = k(f).find("[name='" + l + "']") : a = k("[name='" + l + "']", e.ownerDocument).filter(function() {
            return !this.form
        })), a
    };
    k.widget("ui.button", {version: "1.9.2",defaultElement: "<button>",options: {disabled: null,text: !0,label: null,icons: {primary: null,secondary: null}},_create: function() {
        this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, j), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
        var i = this, f = this.options, e = this.type === "checkbox" || this.type === "radio", n = e ? "" : "ui-state-active", l = "ui-state-focus";
        f.label === null && (f.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(c).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
            if (f.disabled) {
                return
            }
            this === d && k(this).addClass("ui-state-active")
        }).bind("mouseleave" + this.eventNamespace, function() {
            if (f.disabled) {
                return
            }
            k(this).removeClass(n)
        }).bind("click" + this.eventNamespace, function(a) {
            f.disabled && (a.preventDefault(), a.stopImmediatePropagation())
        }), this.element.bind("focus" + this.eventNamespace, function() {
            i.buttonElement.addClass(l)
        }).bind("blur" + this.eventNamespace, function() {
            i.buttonElement.removeClass(l)
        }), e && (this.element.bind("change" + this.eventNamespace, function() {
            if (v) {
                return
            }
            i.refresh()
        }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(a) {
            if (f.disabled) {
                return
            }
            v = !1, b = a.pageX, h = a.pageY
        }).bind("mouseup" + this.eventNamespace, function(a) {
            if (f.disabled) {
                return
            }
            if (b !== a.pageX || h !== a.pageY) {
                v = !0
            }
        })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
            if (f.disabled || v) {
                return !1
            }
            k(this).toggleClass("ui-state-active"), i.buttonElement.attr("aria-pressed", i.element[0].checked)
        }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
            if (f.disabled || v) {
                return !1
            }
            k(this).addClass("ui-state-active"), i.buttonElement.attr("aria-pressed", "true");
            var a = i.element[0];
            g(a).not(a).map(function() {
                return k(this).button("widget")[0]
            }).removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
            if (f.disabled) {
                return !1
            }
            k(this).addClass("ui-state-active"), d = this, i.document.one("mouseup", function() {
                d = null
            })
        }).bind("mouseup" + this.eventNamespace, function() {
            if (f.disabled) {
                return !1
            }
            k(this).removeClass("ui-state-active")
        }).bind("keydown" + this.eventNamespace, function(a) {
            if (f.disabled) {
                return !1
            }
            (a.keyCode === k.ui.keyCode.SPACE || a.keyCode === k.ui.keyCode.ENTER) && k(this).addClass("ui-state-active")
        }).bind("keyup" + this.eventNamespace, function() {
            k(this).removeClass("ui-state-active")
        }), this.buttonElement.is("a") && this.buttonElement.keyup(function(a) {
            a.keyCode === k.ui.keyCode.SPACE && k(this).click()
        })), this._setOption("disabled", f.disabled), this._resetButton()
    },_determineButtonType: function() {
        var f, a, i;
        this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (f = this.element.parents().last(), a = "label[for='" + this.element.attr("id") + "']", this.buttonElement = f.find(a), this.buttonElement.length || (f = f.length ? f.siblings() : this.element.siblings(), this.buttonElement = f.filter(a), this.buttonElement.length || (this.buttonElement = f.find(a))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
    },widget: function() {
        return this.buttonElement
    },_destroy: function() {
        this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(c + " " + p + " " + m).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
    },_setOption: function(f, a) {
        this._super(f, a);
        if (f === "disabled") {
            a ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
            return
        }
        this._resetButton()
    },refresh: function() {
        var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
        a !== this.options.disabled && this._setOption("disabled", a), this.type === "radio" ? g(this.element[0]).each(function() {
            k(this).is(":checked") ? k(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : k(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
        }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
    },_resetButton: function() {
        if (this.type === "input") {
            this.options.label && this.element.val(this.options.label);
            return
        }
        var e = this.buttonElement.removeClass(m), o = k("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(), l = this.options.icons, a = l.primary && l.secondary, f = [];
        l.primary || l.secondary ? (this.options.text && f.push("ui-button-text-icon" + (a ? "s" : l.primary ? "-primary" : "-secondary")), l.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + l.primary + "'></span>"), l.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + l.secondary + "'></span>"), this.options.text || (f.push(a ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", k.trim(o)))) : f.push("ui-button-text-only"), e.addClass(f.join(" "))
    }}), k.widget("ui.buttonset", {version: "1.9.2",options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create: function() {
        this.element.addClass("ui-buttonset")
    },_init: function() {
        this.refresh()
    },_setOption: function(f, a) {
        f === "disabled" && this.buttons.button("option", f, a), this._super(f, a)
    },refresh: function() {
        var a = this.element.css("direction") === "rtl";
        this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
            return k(this).button("widget")[0]
        }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
    },_destroy: function() {
        this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
            return k(this).button("widget")[0]
        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
    }})
})(jQuery);
(function($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {closeText: "Done",prevText: "Prev",nextText: "Next",currentText: "Today",monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],weekHeader: "Wk",dateFormat: "mm/dd/yy",firstDay: 0,isRTL: !1,showMonthAfterYear: !1,yearSuffix: ""}, this._defaults = {showOn: "focus",showAnim: "fadeIn",showOptions: {},defaultDate: null,appendText: "",buttonText: "...",buttonImage: "",buttonImageOnly: !1,hideIfNoPrevNext: !1,navigationAsDateFormat: !1,gotoCurrent: !1,changeMonth: !1,changeYear: !1,yearRange: "c-10:c+10",showOtherMonths: !1,selectOtherMonths: !1,showWeek: !1,calculateWeek: this.iso8601Week,shortYearCutoff: "+10",minDate: null,maxDate: null,duration: "fast",beforeShowDay: null,beforeShow: null,onSelect: null,onChangeMonthYear: null,onClose: null,numberOfMonths: 1,showCurrentAtPos: 0,stepMonths: 1,stepBigMonths: 12,altField: "",altFormat: "",constrainInput: !0,showButtonPanel: !1,autoSize: !1,disabled: !1}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(t, "mouseout", function() {
            $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(t, "mouseover", function() {
            $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && $(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function extendRemove(e, t) {
        $.extend(e, t);
        for (var n in t) {
            if (t[n] == null || t[n] == undefined) {
                e[n] = t[n]
            }
        }
        return e
    }
    $.extend($.ui, {datepicker: {version: "1.9.2"}});
    var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive;
    $.extend(Datepicker.prototype, {markerClassName: "hasDatepicker",maxRows: 4,log: function() {
        this.debug && console.log.apply("", arguments)
    },_widgetDatepicker: function() {
        return this.dpDiv
    },setDefaults: function(e) {
        return extendRemove(this._defaults, e || {}), this
    },_attachDatepicker: function(target, settings) {
        var inlineSettings = null;
        for (var attrName in this._defaults) {
            var attrValue = target.getAttribute("date:" + attrName);
            if (attrValue) {
                inlineSettings = inlineSettings || {};
                try {
                    inlineSettings[attrName] = eval(attrValue)
                } catch (err) {
                    inlineSettings[attrName] = attrValue
                }
            }
        }
        var nodeName = target.nodeName.toLowerCase(), inline = nodeName == "div" || nodeName == "span";
        target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
        var inst = this._newInst($(target), inline);
        inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
    },_newInst: function(e, t) {
        var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
        return {id: n,input: e,selectedDay: 0,selectedMonth: 0,selectedYear: 0,drawMonth: 0,drawYear: 0,inline: t,dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv}
    },_connectDatepicker: function(e, t) {
        var n = $(e);
        t.append = $([]), t.trigger = $([]);
        if (n.hasClass(this.markerClassName)) {
            return
        }
        this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, n, r) {
            t.settings[n] = r
        }).bind("getData.datepicker", function(e, n) {
            return this._get(t, n)
        }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
    },_attachments: function(e, t) {
        var n = this._get(t, "appendText"), r = this._get(t, "isRTL");
        t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
        var i = this._get(t, "showOn");
        (i == "focus" || i == "both") && e.focus(this._showDatepicker);
        if (i == "button" || i == "both") {
            var s = this._get(t, "buttonText"), o = this._get(t, "buttonImage");
            t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({src: o,alt: s,title: s}) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({src: o,alt: s,title: s}))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function() {
                return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
            })
        }
    },_autoSize: function(e) {
        if (this._get(e, "autoSize") && !e.inline) {
            var t = new Date(2009, 11, 20), n = this._get(e, "dateFormat");
            if (n.match(/[DM]/)) {
                var r = function(e) {
                    var t = 0, n = 0;
                    for (var r = 0; r < e.length; r++) {
                        e[r].length > t && (t = e[r].length, n = r)
                    }
                    return n
                };
                t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
            }
            e.input.attr("size", this._formatDate(e, t).length)
        }
    },_inlineDatepicker: function(e, t) {
        var n = $(e);
        if (n.hasClass(this.markerClassName)) {
            return
        }
        n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, n, r) {
            t.settings[n] = r
        }).bind("getData.datepicker", function(e, n) {
            return this._get(t, n)
        }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
    },_dialogDatepicker: function(e, t, n, r, i) {
        var s = this._dialogInst;
        if (!s) {
            this.uuid += 1;
            var o = "dp" + this.uuid;
            this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
        }
        extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
        if (!this._pos) {
            var u = document.documentElement.clientWidth, a = document.documentElement.clientHeight, f = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop;
            this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
        }
        return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
    },_destroyDatepicker: function(e) {
        var t = $(e), n = $.data(e, PROP_NAME);
        if (!t.hasClass(this.markerClassName)) {
            return
        }
        var r = e.nodeName.toLowerCase();
        $.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
    },_enableDatepicker: function(e) {
        var t = $(e), n = $.data(e, PROP_NAME);
        if (!t.hasClass(this.markerClassName)) {
            return
        }
        var r = e.nodeName.toLowerCase();
        if (r == "input") {
            e.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({opacity: "1.0",cursor: ""})
        } else {
            if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
            }
        }
        this._disabledInputs = $.map(this._disabledInputs, function(t) {
            return t == e ? null : t
        })
    },_disableDatepicker: function(e) {
        var t = $(e), n = $.data(e, PROP_NAME);
        if (!t.hasClass(this.markerClassName)) {
            return
        }
        var r = e.nodeName.toLowerCase();
        if (r == "input") {
            e.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({opacity: "0.5",cursor: "default"})
        } else {
            if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
            }
        }
        this._disabledInputs = $.map(this._disabledInputs, function(t) {
            return t == e ? null : t
        }), this._disabledInputs[this._disabledInputs.length] = e
    },_isDisabledDatepicker: function(e) {
        if (!e) {
            return !1
        }
        for (var t = 0; t < this._disabledInputs.length; t++) {
            if (this._disabledInputs[t] == e) {
                return !0
            }
        }
        return !1
    },_getInst: function(e) {
        try {
            return $.data(e, PROP_NAME)
        } catch (t) {
            throw "Missing instance data for this datepicker"
        }
    },_optionDatepicker: function(e, t, n) {
        var r = this._getInst(e);
        if (arguments.length == 2 && typeof t == "string") {
            return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null
        }
        var i = t || {};
        typeof t == "string" && (i = {}, i[t] = n);
        if (r) {
            this._curInst == r && this._hideDatepicker();
            var s = this._getDateDatepicker(e, !0), o = this._getMinMaxDate(r, "min"), u = this._getMinMaxDate(r, "max");
            extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
        }
    },_changeDatepicker: function(e, t, n) {
        this._optionDatepicker(e, t, n)
    },_refreshDatepicker: function(e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
    },_setDateDatepicker: function(e, t) {
        var n = this._getInst(e);
        n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
    },_getDateDatepicker: function(e, t) {
        var n = this._getInst(e);
        return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
    },_doKeyDown: function(e) {
        var t = $.datepicker._getInst(e.target), n = !0, r = t.dpDiv.is(".ui-datepicker-rtl");
        t._keyEvent = !0;
        if ($.datepicker._datepickerShowing) {
            switch (e.keyCode) {
            case 9:
                $.datepicker._hideDatepicker(), n = !1;
                break;
            case 13:
                var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
                var s = $.datepicker._get(t, "onSelect");
                if (s) {
                    var o = $.datepicker._formatDate(t);
                    s.apply(t.input ? t.input[0] : null, [o, t])
                } else {
                    $.datepicker._hideDatepicker()
                }
                return !1;
            case 27:
                $.datepicker._hideDatepicker();
                break;
            case 33:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                break;
            default:
                n = !1
            }
        } else {
            e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1
        }
        n && (e.preventDefault(), e.stopPropagation())
    },_doKeyPress: function(e) {
        var t = $.datepicker._getInst(e.target);
        if ($.datepicker._get(t, "constrainInput")) {
            var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")), r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
            return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
        }
    },_doKeyUp: function(e) {
        var t = $.datepicker._getInst(e.target);
        if (t.input.val() != t.lastVal) {
            try {
                var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
            } catch (r) {
                $.datepicker.log(r)
            }
        }
        return !0
    },_showDatepicker: function(e) {
        e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
        if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) {
            return
        }
        var t = $.datepicker._getInst(e);
        $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
        var n = $.datepicker._get(t, "beforeShow"), r = n ? n.apply(e, [e, t]) : {};
        if (r === !1) {
            return
        }
        extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
        var i = !1;
        $(e).parents().each(function() {
            return i |= $(this).css("position") == "fixed", !i
        });
        var s = {left: $.datepicker._pos[0],top: $.datepicker._pos[1]};
        $.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({position: "absolute",display: "block",top: "-1000px"}), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",display: "none",left: s.left + "px",top: s.top + "px"});
        if (!t.inline) {
            var o = $.datepicker._get(t, "showAnim"), u = $.datepicker._get(t, "duration"), a = function() {
                var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                if (!!e.length) {
                    var n = $.datepicker._getBorders(t.dpDiv);
                    e.css({left: -n[0],top: -n[1],width: t.dpDiv.outerWidth(),height: t.dpDiv.outerHeight()})
                }
            };
            t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
        }
    },_updateDatepicker: function(e) {
        this.maxRows = 4;
        var t = $.datepicker._getBorders(e.dpDiv);
        instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
        var n = e.dpDiv.find("iframe.ui-datepicker-cover");
        !n.length || n.css({left: -t[0],top: -t[1],width: e.dpDiv.outerWidth(),height: e.dpDiv.outerHeight()}), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var r = this._getNumberOfMonths(e), i = r[1], s = 17;
        e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), e.dpDiv[(r[0] != 1 || r[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
        if (e.yearshtml) {
            var o = e.yearshtml;
            setTimeout(function() {
                o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
            }, 0)
        }
    },_getBorders: function(e) {
        var t = function(e) {
            return {thin: 1,medium: 2,thick: 3}[e] || e
        };
        return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
    },_checkOffset: function(e, t, n) {
        var r = e.dpDiv.outerWidth(), i = e.dpDiv.outerHeight(), s = e.input ? e.input.outerWidth() : 0, o = e.input ? e.input.outerHeight() : 0, u = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()), a = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
        return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
    },_findPos: function(e) {
        var t = this._getInst(e), n = this._get(t, "isRTL");
        while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) {
            e = e[n ? "previousSibling" : "nextSibling"]
        }
        var r = $(e).offset();
        return [r.left, r.top]
    },_hideDatepicker: function(e) {
        var t = this._curInst;
        if (!t || e && t != $.data(e, PROP_NAME)) {
            return
        }
        if (this._datepickerShowing) {
            var n = this._get(t, "showAnim"), r = this._get(t, "duration"), i = function() {
                $.datepicker._tidyDialog(t)
            };
            $.effects && ($.effects.effect[n] || $.effects[n]) ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1;
            var s = this._get(t, "onClose");
            s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({position: "absolute",left: "0",top: "-100px"}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
        }
    },_tidyDialog: function(e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },_checkExternalClick: function(e) {
        if (!$.datepicker._curInst) {
            return
        }
        var t = $(e.target), n = $.datepicker._getInst(t[0]);
        (t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
    },_adjustDate: function(e, t, n) {
        var r = $(e), i = this._getInst(r[0]);
        if (this._isDisabledDatepicker(r[0])) {
            return
        }
        this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
    },_gotoToday: function(e) {
        var t = $(e), n = this._getInst(t[0]);
        if (this._get(n, "gotoCurrent") && n.currentDay) {
            n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear
        } else {
            var r = new Date;
            n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
        }
        this._notifyChange(n), this._adjustDate(t)
    },_selectMonthYear: function(e, t, n) {
        var r = $(e), i = this._getInst(r[0]);
        i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
    },_selectDay: function(e, t, n, r) {
        var i = $(e);
        if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) {
            return
        }
        var s = this._getInst(i[0]);
        s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
    },_clearDate: function(e) {
        var t = $(e), n = this._getInst(t[0]);
        this._selectDate(t, "")
    },_selectDate: function(e, t) {
        var n = $(e), r = this._getInst(n[0]);
        t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
        var i = this._get(r, "onSelect");
        i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
    },_updateAlternate: function(e) {
        var t = this._get(e, "altField");
        if (t) {
            var n = this._get(e, "altFormat") || this._get(e, "dateFormat"), r = this._getDate(e), i = this.formatDate(n, r, this._getFormatConfig(e));
            $(t).each(function() {
                $(this).val(i)
            })
		}
    },noWeekends: function(e) {
        var t = e.getDay();
        return [t > 0 && t < 6, ""]
    },iso8601Week: function(e) {
        var t = new Date(e.getTime());
        t.setDate(t.getDate() + 4 - (t.getDay() || 7));
        var n = t.getTime();
        return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 86400000) / 7) + 1
    },parseDate: function(e, t, n) {
        if (e == null || t == null) {
            throw "Invalid arguments"
        }
        t = typeof t == "object" ? t.toString() : t + "";
        if (t == "") {
            return null
        }
        var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
        var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, a = -1, f = -1, l = -1, c = -1, h = !1, p = function(t) {
            var n = y + 1 < e.length && e.charAt(y + 1) == t;
            return n && y++, n
        }, d = function(e) {
            var n = p(e), r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2, i = new RegExp("^\\d{1," + r + "}"), s = t.substring(g).match(i);
            if (!s) {
                throw "Missing number at position " + g
            }
            return g += s[0].length, parseInt(s[0], 10)
        }, v = function(e, n, r) {
            var i = $.map(p(e) ? r : n, function(e, t) {
                return [[t, e]]
            }).sort(function(e, t) {
                return -(e[1].length - t[1].length)
            }), s = -1;
            $.each(i, function(e, n) {
                var r = n[1];
                if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) {
                    return s = n[0], g += r.length, !1
                }
            });
            if (s != -1) {
                return s + 1
            }
            throw "Unknown name at position " + g
        }, m = function() {
            if (t.charAt(g) != e.charAt(y)) {
                throw "Unexpected literal at position " + g
            }
            g++
        }, g = 0;
        for (var y = 0; y < e.length; y++) {
            if (h) {
                e.charAt(y) == "'" && !p("'") ? h = !1 : m()
            } else {
                switch (e.charAt(y)) {
                case "d":
                    l = d("d");
                    break;
                case "D":
                    v("D", i, s);
                    break;
                case "o":
                    c = d("o");
                    break;
                case "m":
                    f = d("m");
                    break;
                case "M":
                    f = v("M", o, u);
                    break;
                case "y":
                    a = d("y");
                    break;
                case "@":
                    var b = new Date(d("@"));
                    a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "!":
                    var b = new Date((d("!") - this._ticksTo1970) / 10000);
                    a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "'":
                    p("'") ? m() : h = !0;
                    break;
                default:
                    m()
                }
            }
        }
        if (g < t.length) {
            var w = t.substr(g);
            if (!/^\s+/.test(w)) {
                throw "Extra/unparsed characters found in date: " + w
            }
        }
        a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
        if (c > -1) {
            f = 1, l = c;
            do {
                var E = this._getDaysInMonth(a, f - 1);
                if (l <= E) {
                    break
                }
                f++, l -= E
            } while (!0)
        }
        var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
        if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) {
            throw "Invalid date"
        }
        return b
    },ATOM: "yy-mm-dd",COOKIE: "D, dd M yy",ISO_8601: "yy-mm-dd",RFC_822: "D, d M y",RFC_850: "DD, dd-M-y",RFC_1036: "D, d M y",RFC_1123: "D, d M yy",RFC_2822: "D, d M yy",RSS: "D, d M y",TICKS: "!",TIMESTAMP: "@",W3C: "yy-mm-dd",_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 10000000,formatDate: function(e, t, n) {
        if (!t) {
            return ""
        }
        var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, i = (n ? n.dayNames : null) || this._defaults.dayNames, s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, o = (n ? n.monthNames : null) || this._defaults.monthNames, u = function(t) {
            var n = h + 1 < e.length && e.charAt(h + 1) == t;
            return n && h++, n
        }, a = function(e, t, n) {
            var r = "" + t;
            if (u(e)) {
                while (r.length < n) {
                    r = "0" + r
                }
            }
            return r
        }, f = function(e, t, n, r) {
            return u(e) ? r[t] : n[t]
        }, l = "", c = !1;
        if (t) {
            for (var h = 0; h < e.length; h++) {
                if (c) {
                    e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h)
                } else {
                    switch (e.charAt(h)) {
                    case "d":
                        l += a("d", t.getDate(), 2);
                        break;
                    case "D":
                        l += f("D", t.getDay(), r, i);
                        break;
                    case "o":
                        l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 86400000), 3);
                        break;
                    case "m":
                        l += a("m", t.getMonth() + 1, 2);
                        break;
                    case "M":
                        l += f("M", t.getMonth(), s, o);
                        break;
                    case "y":
                        l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                        break;
                    case "@":
                        l += t.getTime();
                        break;
                    case "!":
                        l += t.getTime() * 10000 + this._ticksTo1970;
                        break;
                    case "'":
                        u("'") ? l += "'" : c = !0;
                        break;
                    default:
                        l += e.charAt(h)
                    }
                }
            }
        }
        return l
    },_possibleChars: function(e) {
        var t = "", n = !1, r = function(t) {
            var n = i + 1 < e.length && e.charAt(i + 1) == t;
            return n && i++, n
        };
        for (var i = 0; i < e.length; i++) {
            if (n) {
                e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i)
            } else {
                switch (e.charAt(i)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    t += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    r("'") ? t += "'" : n = !0;
                    break;
                default:
                    t += e.charAt(i)
                }
            }
        }
        return t
    },_get: function(e, t) {
        return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
    },_setDateFromField: function(e, t) {
        if (e.input.val() == e.lastVal) {
            return
        }
        var n = this._get(e, "dateFormat"), r = e.lastVal = e.input ? e.input.val() : null, i, s;
        i = s = this._getDefaultDate(e);
        var o = this._getFormatConfig(e);
        try {
            i = this.parseDate(n, r, o) || s
        } catch (u) {
            this.log(u), r = t ? "" : r
        }
        e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
    },_getDefaultDate: function(e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    },_determineDate: function(e, t, n) {
        var r = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + e), t
        }, i = function(t) {
            try {
                return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
            } catch (n) {
            }
            var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, i = r.getFullYear(), s = r.getMonth(), o = r.getDate(), u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = u.exec(t);
            while (a) {
                switch (a[2] || "d") {
                case "d":
                case "D":
                    o += parseInt(a[1], 10);
                    break;
                case "w":
                case "W":
                    o += parseInt(a[1], 10) * 7;
                    break;
                case "m":
                case "M":
                    s += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
                    break;
                case "y":
                case "Y":
                    i += parseInt(a[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
                }
                a = u.exec(t)
            }
            return new Date(i, s, o)
        }, s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
        return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
    },_daylightSavingAdjust: function(e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    },_setDate: function(e, t, n) {
        var r = !t, i = e.selectedMonth, s = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
    },_getDate: function(e) {
        var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
    },_attachHandlers: function(e) {
        var t = this._get(e, "stepMonths"), n = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function() {
            var e = {prev: function() {
                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M")
            },next: function() {
                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M")
            },hide: function() {
                window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
            },today: function() {
                window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
            },selectDay: function() {
                return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            },selectMonth: function() {
                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
            },selectYear: function() {
                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
            }};
            $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
        })
    },_generateHTML: function(e) {
        var t = new Date;
        t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
        var n = this._get(e, "isRTL"), r = this._get(e, "showButtonPanel"), i = this._get(e, "hideIfNoPrevNext"), s = this._get(e, "navigationAsDateFormat"), o = this._getNumberOfMonths(e), u = this._get(e, "showCurrentAtPos"), a = this._get(e, "stepMonths"), f = o[0] != 1 || o[1] != 1, l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), c = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), p = e.drawMonth - u, d = e.drawYear;
        p < 0 && (p += 12, d--);
        if (h) {
            var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
            v = c && v < c ? c : v;
            while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) {
                p--, p < 0 && (p = 11, d--)
            }
        }
        e.drawMonth = p, e.drawYear = d;
        var m = this._get(e, "prevText");
        m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
        var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>", y = this._get(e, "nextText");
        y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
        var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>", w = this._get(e, "currentText"), E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
        w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
        var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>", x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : S) + "</div>" : "", T = parseInt(this._get(e, "firstDay"), 10);
        T = isNaN(T) ? 0 : T;
        var N = this._get(e, "showWeek"), C = this._get(e, "dayNames"), k = this._get(e, "dayNamesShort"), L = this._get(e, "dayNamesMin"), A = this._get(e, "monthNames"), O = this._get(e, "monthNamesShort"), M = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), D = this._get(e, "selectOtherMonths"), P = this._get(e, "calculateWeek") || this.iso8601Week, H = this._getDefaultDate(e), B = "";
        for (var j = 0; j < o[0]; j++) {
            var F = "";
            this.maxRows = 4;
            for (var I = 0; I < o[1]; I++) {
                var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)), R = " ui-corner-all", U = "";
                if (f) {
                    U += '<div class="ui-datepicker-group';
                    if (o[1] > 1) {
                        switch (I) {
                        case 0:
                            U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                            break;
                        case o[1] - 1:
                            U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                            break;
                        default:
                            U += " ui-datepicker-group-middle", R = ""
                        }
                    }
                    U += '">'
                }
                U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                for (var W = 0; W < 7; W++) {
                    var X = (W + T) % 7;
                    z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + C[X] + '">' + L[X] + "</span></th>"
                }
                U += z + "</tr></thead><tbody>";
                var V = this._getDaysInMonth(d, p);
                d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
                var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7, K = Math.ceil((J + V) / 7), Q = f ? this.maxRows > K ? this.maxRows : K : K;
                this.maxRows = Q;
                var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
                for (var Y = 0; Y < Q; Y++) {
                    U += "<tr>";
                    var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
                    for (var W = 0; W < 7; W++) {
                        var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""], tt = G.getMonth() != p, nt = tt && !D || !et[0] || c && G < c || h && G > h;
                        Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
                    }
                    U += Z + "</tr>"
                }
                p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
            }
            B += F
        }
        return B += x + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
    },_generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
        var a = this._get(e, "changeMonth"), f = this._get(e, "changeYear"), l = this._get(e, "showMonthAfterYear"), c = '<div class="ui-datepicker-title">', h = "";
        if (s || !a) {
            h += '<span class="ui-datepicker-month">' + o[t] + "</span>"
        } else {
            var p = r && r.getFullYear() == n, d = i && i.getFullYear() == n;
            h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
            for (var v = 0; v < 12; v++) {
                (!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>")
            }
            h += "</select>"
        }
        l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
        if (!e.yearshtml) {
            e.yearshtml = "";
            if (s || !f) {
                c += '<span class="ui-datepicker-year">' + n + "</span>"
            } else {
                var m = this._get(e, "yearRange").split(":"), g = (new Date).getFullYear(), y = function(e) {
                    var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
                    return isNaN(t) ? g : t
                }, b = y(m[0]), w = Math.max(b, y(m[1] || ""));
                b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
                for (; b <= w; b++) {
                    e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>"
                }
                e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
            }
        }
        return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
    },_adjustInstDate: function(e, t, n) {
        var r = e.drawYear + (n == "Y" ? t : 0), i = e.drawMonth + (n == "M" ? t : 0), s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
        e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
    },_restrictMinMax: function(e, t) {
        var n = this._getMinMaxDate(e, "min"), r = this._getMinMaxDate(e, "max"), i = n && t < n ? n : t;
        return i = r && i > r ? r : i, i
    },_notifyChange: function(e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    },_getNumberOfMonths: function(e) {
        var t = this._get(e, "numberOfMonths");
        return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
    },_getMinMaxDate: function(e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
    },_getDaysInMonth: function(e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    },_getFirstDayOfMonth: function(e, t) {
        return (new Date(e, t, 1)).getDay()
    },_canAdjustMonth: function(e, t, n, r) {
        var i = this._getNumberOfMonths(e), s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
        return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
    },_isInRange: function(e, t) {
        var n = this._getMinMaxDate(e, "min"), r = this._getMinMaxDate(e, "max");
        return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
    },_getFormatConfig: function(e) {
        var t = this._get(e, "shortYearCutoff");
        return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {shortYearCutoff: t,dayNamesShort: this._get(e, "dayNamesShort"),dayNames: this._get(e, "dayNames"),monthNamesShort: this._get(e, "monthNamesShort"),monthNames: this._get(e, "monthNames")}
    },_formatDate: function(e, t, n, r) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
    }}), $.fn.datepicker = function(e) {
        if (!this.length) {
            return this
        }
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
            typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function(d, b) {
    var f = "ui-dialog ui-widget ui-widget-content ui-corner-all ", c = {buttons: !0,height: !0,maxHeight: !0,maxWidth: !0,minHeight: !0,minWidth: !0,width: !0}, a = {maxHeight: !0,maxWidth: !0,minHeight: !0,minWidth: !0};
    d.widget("ui.dialog", {version: "1.9.2",options: {autoOpen: !0,buttons: {},closeOnEscape: !0,closeText: "close",dialogClass: "",draggable: !0,hide: null,height: "auto",maxHeight: !1,maxWidth: !1,minHeight: 150,minWidth: 150,modal: !1,position: {my: "center",at: "center",of: window,collision: "fit",using: function(e) {
        var g = d(this).css(e).offset().top;
        g < 0 && d(this).css("top", e.top - g)
    }},resizable: !0,show: null,stack: !0,title: "",width: 300,zIndex: 1000},_create: function() {
        this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.oldPosition = {parent: this.element.parent(),index: this.element.parent().children().index(this.element)}, this.options.title = this.options.title || this.originalTitle;
        var j = this, l = this.options, h = l.title || "&#160;", k, n, g, e, m;
        k = (this.uiDialog = d("<div>")).addClass(f + l.dialogClass).css({display: "none",outline: 0,zIndex: l.zIndex}).attr("tabIndex", -1).keydown(function(i) {
            l.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === d.ui.keyCode.ESCAPE && (j.close(i), i.preventDefault())
        }).mousedown(function(i) {
            j.moveToTop(!1, i)
        }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k), n = (this.uiDialogTitlebar = d("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() {
            k.focus()
        }).prependTo(k), g = d("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(i) {
            i.preventDefault(), j.close(i)
        }).appendTo(n), (this.uiDialogTitlebarCloseText = d("<span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(g), e = d("<span>").uniqueId().addClass("ui-dialog-title").html(h).prependTo(n), m = (this.uiDialogButtonPane = d("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = d("<div>")).addClass("ui-dialog-buttonset").appendTo(m), k.attr({role: "dialog","aria-labelledby": e.attr("id")}), n.find("*").add(n).disableSelection(), this._hoverable(g), this._focusable(g), l.draggable && d.fn.draggable && this._makeDraggable(), l.resizable && d.fn.resizable && this._makeResizable(), this._createButtons(l.buttons), this._isOpen = !1, d.fn.bgiframe && k.bgiframe(), this._on(k, {keydown: function(q) {
            if (!l.modal || q.keyCode !== d.ui.keyCode.TAB) {
                return
            }
            var s = d(":tabbable", k), p = s.filter(":first"), r = s.filter(":last");
            if (q.target === r[0] && !q.shiftKey) {
                return p.focus(1), !1
            }
            if (q.target === p[0] && q.shiftKey) {
                return r.focus(1), !1
            }
        }})
    },_init: function() {
        this.options.autoOpen && this.open()
    },_destroy: function() {
        var h, g = this.oldPosition;
        this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), h = g.parent.children().eq(g.index), h.length && h[0] !== this.element[0] ? h.before(this.element) : g.parent.append(this.element)
    },widget: function() {
        return this.uiDialog
    },close: function(g) {
        var j = this, h, e;
        if (!this._isOpen) {
            return
        }
        if (!1 === this._trigger("beforeClose", g)) {
            return
        }
        return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() {
            j._trigger("close", g)
        }) : (this.uiDialog.hide(), this._trigger("close", g)), d.ui.dialog.overlay.resize(), this.options.modal && (h = 0, d(".ui-dialog").each(function() {
            this !== j.uiDialog[0] && (e = d(this).css("z-index"), isNaN(e) || (h = Math.max(h, e)))
        }), d.ui.dialog.maxZ = h), this
    },isOpen: function() {
        return this._isOpen
    },moveToTop: function(g, j) {
        var h = this.options, e;
        return h.modal && !g || !h.stack && !h.modal ? this._trigger("focus", j) : (h.zIndex > d.ui.dialog.maxZ && (d.ui.dialog.maxZ = h.zIndex), this.overlay && (d.ui.dialog.maxZ += 1, d.ui.dialog.overlay.maxZ = d.ui.dialog.maxZ, this.overlay.$el.css("z-index", d.ui.dialog.overlay.maxZ)), e = {scrollTop: this.element.scrollTop(),scrollLeft: this.element.scrollLeft()}, d.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", d.ui.dialog.maxZ), this.element.attr(e), this._trigger("focus", j), this)
    },open: function() {
        if (this._isOpen) {
            return
        }
        var e, h = this.options, g = this.uiDialog;
        return this._size(), this._position(h.position), g.show(h.show), this.overlay = h.modal ? new d.ui.dialog.overlay(this) : null, this.moveToTop(!0), e = this.element.find(":tabbable"), e.length || (e = this.uiDialogButtonPane.find(":tabbable"), e.length || (e = g)), e.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
    },_createButtons: function(e) {
        var h = this, g = !1;
        this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), typeof e == "object" && e !== null && d.each(e, function() {
            return !(g = !0)
        }), g ? (d.each(e, function(k, m) {
            var j, l;
            m = d.isFunction(m) ? {click: m,text: k} : m, m = d.extend({type: "button"}, m), l = m.click, m.click = function() {
                l.apply(h.element[0], arguments)
            }, j = d("<button></button>", m).appendTo(h.uiButtonSet), d.fn.button && j.button()
        }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
    },_makeDraggable: function() {
        function g(i) {
            return {position: i.position,offset: i.offset}
        }
        var e = this, h = this.options;
        this.uiDialog.draggable({cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",handle: ".ui-dialog-titlebar",containment: "document",start: function(k, j) {
            d(this).addClass("ui-dialog-dragging"), e._trigger("dragStart", k, g(j))
        },drag: function(i, j) {
            e._trigger("drag", i, g(j))
        },stop: function(j, k) {
            h.position = [k.position.left - e.document.scrollLeft(), k.position.top - e.document.scrollTop()], d(this).removeClass("ui-dialog-dragging"), e._trigger("dragStop", j, g(k)), d.ui.dialog.overlay.resize()
        }})
    },_makeResizable: function(l) {
        function e(i) {
            return {originalPosition: i.originalPosition,originalSize: i.originalSize,position: i.position,size: i.size}
        }
        l = l === b ? this.options.resizable : l;
        var j = this, g = this.options, h = this.uiDialog.css("position"), k = typeof l == "string" ? l : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog.resizable({cancel: ".ui-dialog-content",containment: "document",alsoResize: this.element,maxWidth: g.maxWidth,maxHeight: g.maxHeight,minWidth: g.minWidth,minHeight: this._minHeight(),handles: k,start: function(i, m) {
            d(this).addClass("ui-dialog-resizing"), j._trigger("resizeStart", i, e(m))
        },resize: function(m, i) {
            j._trigger("resize", m, e(i))
        },stop: function(i, m) {
            d(this).removeClass("ui-dialog-resizing"), g.height = d(this).height(), g.width = d(this).width(), j._trigger("resizeStop", i, e(m)), d.ui.dialog.overlay.resize()
        }}).css("position", h).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
    },_minHeight: function() {
        var g = this.options;
        return g.height === "auto" ? g.minHeight : Math.min(g.minHeight, g.height)
    },_position: function(g) {
        var j = [], h = [0, 0], e;
        if (g) {
            if (typeof g == "string" || typeof g == "object" && "0" in g) {
                j = g.split ? g.split(" ") : [g[0], g[1]], j.length === 1 && (j[1] = j[0]), d.each(["left", "top"], function(k, i) {
                        +j[k] === j[k] && (h[k] = j[k], j[k] = i)
                }), g = {my: j[0] + (h[0] < 0 ? h[0] : "+" + h[0]) + " " + j[1] + (h[1] < 0 ? h[1] : "+" + h[1]),at: j.join(" ")}
            }
            g = d.extend({}, d.ui.dialog.prototype.options.position, g)
        } else {
            g = d.ui.dialog.prototype.options.position
        }
        e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(g), e || this.uiDialog.hide()
    },_setOptions: function(e) {
        var i = this, g = {}, h = !1;
        d.each(e, function(k, j) {
            i._setOption(k, j), k in c && (h = !0), k in a && (g[k] = j)
        }), h && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", g)
    },_setOption: function(g, j) {
        var e, h, k = this.uiDialog;
        switch (g) {
        case "buttons":
            this._createButtons(j);
            break;
        case "closeText":
            this.uiDialogTitlebarCloseText.text("" + j);
            break;
        case "dialogClass":
            k.removeClass(this.options.dialogClass).addClass(f + j);
            break;
        case "disabled":
            j ? k.addClass("ui-dialog-disabled") : k.removeClass("ui-dialog-disabled");
            break;
        case "draggable":
            e = k.is(":data(draggable)"), e && !j && k.draggable("destroy"), !e && j && this._makeDraggable();
            break;
        case "position":
            this._position(j);
            break;
        case "resizable":
            h = k.is(":data(resizable)"), h && !j && k.resizable("destroy"), h && typeof j == "string" && k.resizable("option", "handles", j), !h && j !== !1 && this._makeResizable(j);
            break;
        case "title":
            d(".ui-dialog-title", this.uiDialogTitlebar).html("" + (j || "&#160;"))
        }
        this._super(g, j)
    },_size: function() {
        var g, k, j, e = this.options, h = this.uiDialog.is(":visible");
        this.element.show().css({width: "auto",minHeight: 0,height: 0}), e.minWidth > e.width && (e.width = e.minWidth), g = this.uiDialog.css({height: "auto",width: e.width}).outerHeight(), k = Math.max(0, e.minHeight - g), e.height === "auto" ? d.support.minHeight ? this.element.css({minHeight: k,height: "auto"}) : (this.uiDialog.show(), j = this.element.css("height", "auto").height(), h || this.uiDialog.hide(), this.element.height(Math.max(j, k))) : this.element.height(Math.max(e.height - g, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    }}), d.extend(d.ui.dialog, {uuid: 0,maxZ: 0,getTitleId: function(h) {
        var g = h.attr("id");
        return g || (this.uuid += 1, g = this.uuid), "ui-dialog-title-" + g
    },overlay: function(e) {
        this.$el = d.ui.dialog.overlay.create(e)
    }}), d.extend(d.ui.dialog.overlay, {instances: [],oldInstances: [],maxZ: 0,events: d.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(g) {
        return g + ".dialog-overlay"
    }).join(" "),create: function(e) {
        this.instances.length === 0 && (setTimeout(function() {
            d.ui.dialog.overlay.instances.length && d(document).bind(d.ui.dialog.overlay.events, function(h) {
                if (d(h.target).zIndex() < d.ui.dialog.overlay.maxZ) {
                    return !1
                }
            })
        }, 1), d(window).bind("resize.dialog-overlay", d.ui.dialog.overlay.resize));
        var g = this.oldInstances.pop() || d("<div>").addClass("ui-widget-overlay");
        return d(document).bind("keydown.dialog-overlay", function(j) {
            var h = d.ui.dialog.overlay.instances;
            h.length !== 0 && h[h.length - 1] === g && e.options.closeOnEscape && !j.isDefaultPrevented() && j.keyCode && j.keyCode === d.ui.keyCode.ESCAPE && (e.close(j), j.preventDefault())
        }), g.appendTo(document.body).css({width: this.width(),height: this.height()}), d.fn.bgiframe && g.bgiframe(), this.instances.push(g), g
    },destroy: function(e) {
        var h = d.inArray(e, this.instances), g = 0;
        h !== -1 && this.oldInstances.push(this.instances.splice(h, 1)[0]), this.instances.length === 0 && d([document, window]).unbind(".dialog-overlay"), e.height(0).width(0).remove(), d.each(this.instances, function() {
            g = Math.max(g, this.css("z-index"))
        }), this.maxZ = g
    },height: function() {
        var e, g;
        return d.ui.ie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), g = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), e < g ? d(window).height() + "px" : e + "px") : d(document).height() + "px"
    },width: function() {
        var e, g;
        return d.ui.ie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), g = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), e < g ? d(window).width() + "px" : e + "px") : d(document).width() + "px"
    },resize: function() {
        var e = d([]);
        d.each(d.ui.dialog.overlay.instances, function() {
            e = e.add(this)
        }), e.css({width: 0,height: 0}).css({width: d.ui.dialog.overlay.width(),height: d.ui.dialog.overlay.height()})
    }}), d.extend(d.ui.dialog.overlay.prototype, {destroy: function() {
        d.ui.dialog.overlay.destroy(this.$el)
    }})
})(jQuery);
(function(b, a) {
    var c = !1;
    b.widget("ui.menu", {version: "1.9.2",defaultElement: "<ul>",delay: 300,options: {icons: {submenu: "ui-icon-carat-1-e"},menus: "ul",position: {my: "left top",at: "right top"},role: "menu",blur: null,focus: null,select: null},_create: function() {
        this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({role: this.options.role,tabIndex: 0}).bind("click" + this.eventNamespace, b.proxy(function(d) {
            this.options.disabled && d.preventDefault()
        }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({"mousedown .ui-menu-item > a": function(d) {
            d.preventDefault()
        },"click .ui-state-disabled > a": function(d) {
            d.preventDefault()
        },"click .ui-menu-item:has(a)": function(d) {
            var e = b(d.target).closest(".ui-menu-item");
            !c && e.not(".ui-state-disabled").length && (c = !0, this.select(d), e.has(".ui-menu").length ? this.expand(d) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
        },"mouseenter .ui-menu-item": function(d) {
            var e = b(d.currentTarget);
            e.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(d, e)
        },mouseleave: "collapseAll","mouseleave .ui-menu": "collapseAll",focus: function(f, d) {
            var g = this.active || this.element.children(".ui-menu-item").eq(0);
            d || this.focus(f, g)
        },blur: function(d) {
            this._delay(function() {
                b.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(d)
            })
        },keydown: "_keydown"}), this.refresh(), this._on(this.document, {click: function(d) {
            b(d.target).closest(".ui-menu").length || this.collapseAll(d), c = !1
        }})
    },_destroy: function() {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
            var d = b(this);
            d.data("ui-menu-submenu-carat") && d.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    },_keydown: function(g) {
        function d(i) {
            return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        var l, j, f, h, k, e = !0;
        switch (g.keyCode) {
        case b.ui.keyCode.PAGE_UP:
            this.previousPage(g);
            break;
        case b.ui.keyCode.PAGE_DOWN:
            this.nextPage(g);
            break;
        case b.ui.keyCode.HOME:
            this._move("first", "first", g);
            break;
        case b.ui.keyCode.END:
            this._move("last", "last", g);
            break;
        case b.ui.keyCode.UP:
            this.previous(g);
            break;
        case b.ui.keyCode.DOWN:
            this.next(g);
            break;
        case b.ui.keyCode.LEFT:
            this.collapse(g);
            break;
        case b.ui.keyCode.RIGHT:
            this.active && !this.active.is(".ui-state-disabled") && this.expand(g);
            break;
        case b.ui.keyCode.ENTER:
        case b.ui.keyCode.SPACE:
            this._activate(g);
            break;
        case b.ui.keyCode.ESCAPE:
            this.collapse(g);
            break;
        default:
            e = !1, j = this.previousFilter || "", f = String.fromCharCode(g.keyCode), h = !1, clearTimeout(this.filterTimer), f === j ? h = !0 : f = j + f, k = new RegExp("^" + d(f), "i"), l = this.activeMenu.children(".ui-menu-item").filter(function() {
                return k.test(b(this).children("a").text())
            }), l = h && l.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : l, l.length || (f = String.fromCharCode(g.keyCode), k = new RegExp("^" + d(f), "i"), l = this.activeMenu.children(".ui-menu-item").filter(function() {
                return k.test(b(this).children("a").text())
            })), l.length ? (this.focus(g, l), l.length > 1 ? (this.previousFilter = f, this.filterTimer = this._delay(function() {
                delete this.previousFilter
            }, 1000)) : delete this.previousFilter) : delete this.previousFilter
        }
        e && g.preventDefault()
    },_activate: function(d) {
        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(d) : this.select(d))
    },refresh: function() {
        var d, f = this.options.icons.submenu, e = this.element.find(this.options.menus);
        e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role: this.options.role,"aria-hidden": "true","aria-expanded": "false"}).each(function() {
            var h = b(this), j = h.prev("a"), g = b("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
            j.attr("aria-haspopup", "true").prepend(g), h.attr("aria-labelledby", j.attr("id"))
        }), d = e.add(this.element), d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex: -1,role: this._itemRole()}), d.children(":not(.ui-menu-item)").each(function() {
            var g = b(this);
                /[^\-—–\s]/.test(g.text()) || g.addClass("ui-widget-content ui-menu-divider")
        }), d.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !b.contains(this.element[0], this.active[0]) && this.blur()
    },_itemRole: function() {
        return {menu: "menuitem",listbox: "option"}[this.options.role]
    },focus: function(g, d) {
        var h, f;
        this.blur(g, g && g.type === "focus"), this._scrollIntoView(d), this.active = d.first(), f = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", f.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), g && g.type === "keydown" ? this._close() : this.timer = this._delay(function() {
            this._close()
        }, this.delay), h = d.children(".ui-menu"), h.length && /^mouse/.test(g.type) && this._startOpening(h), this.activeMenu = d.parent(), this._trigger("focus", g, {item: d})
    },_scrollIntoView: function(f) {
        var k, h, e, g, j, d;
        this._hasScroll() && (k = parseFloat(b.css(this.activeMenu[0], "borderTopWidth")) || 0, h = parseFloat(b.css(this.activeMenu[0], "paddingTop")) || 0, e = f.offset().top - this.activeMenu.offset().top - k - h, g = this.activeMenu.scrollTop(), j = this.activeMenu.height(), d = f.height(), e < 0 ? this.activeMenu.scrollTop(g + e) : e + d > j && this.activeMenu.scrollTop(g + e - j + d))
    },blur: function(f, d) {
        d || clearTimeout(this.timer);
        if (!this.active) {
            return
        }
        this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", f, {item: this.active})
    },_startOpening: function(d) {
        clearTimeout(this.timer);
        if (d.attr("aria-hidden") !== "true") {
            return
        }
        this.timer = this._delay(function() {
            this._close(), this._open(d)
        }, this.delay)
    },_open: function(d) {
        var e = b.extend({of: this.active}, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true"), d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
    },collapseAll: function(d, e) {
        clearTimeout(this.timer), this.timer = this._delay(function() {
            var f = e ? this.element : b(d && d.target).closest(this.element.find(".ui-menu"));
            f.length || (f = this.element), this._close(f), this.blur(d), this.activeMenu = f
        }, this.delay)
    },_close: function(d) {
        d || (d = this.active ? this.active.parent() : this.element), d.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    },collapse: function(f) {
        var d = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        d && d.length && (this._close(), this.focus(f, d))
    },expand: function(f) {
        var d = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        d && d.length && (this._open(d.parent()), this._delay(function() {
            this.focus(f, d)
        }))
    },next: function(d) {
        this._move("next", "first", d)
    },previous: function(d) {
        this._move("prev", "last", d)
    },isFirstItem: function() {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    },isLastItem: function() {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    },_move: function(g, d, h) {
        var f;
        this.active && (g === "first" || g === "last" ? f = this.active[g === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : f = this.active[g + "All"](".ui-menu-item").eq(0));
        if (!f || !f.length || !this.active) {
            f = this.activeMenu.children(".ui-menu-item")[d]()
        }
        this.focus(h, f)
    },nextPage: function(e) {
        var g, f, d;
        if (!this.active) {
            this.next(e);
            return
        }
        if (this.isLastItem()) {
            return
        }
        this._hasScroll() ? (f = this.active.offset().top, d = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
            return g = b(this), g.offset().top - f - d < 0
        }), this.focus(e, g)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
    },previousPage: function(e) {
        var g, f, d;
        if (!this.active) {
            this.next(e);
            return
        }
        if (this.isFirstItem()) {
            return
        }
        this._hasScroll() ? (f = this.active.offset().top, d = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
            return g = b(this), g.offset().top - f + d > 0
        }), this.focus(e, g)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())
    },_hasScroll: function() {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    },select: function(d) {
        this.active = this.active || b(d.target).closest(".ui-menu-item");
        var e = {item: this.active};
        this.active.has(".ui-menu").length || this.collapseAll(d, !0), this._trigger("select", d, e)
    }})
})(jQuery);
(function(b, a) {
    b.widget("ui.progressbar", {version: "1.9.2",options: {value: 0,max: 100},min: 0,_create: function() {
        this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role: "progressbar","aria-valuemin": this.min,"aria-valuemax": this.options.max,"aria-valuenow": this._value()}), this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
    },_destroy: function() {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
    },value: function(c) {
        return c === a ? this._value() : (this._setOption("value", c), this)
    },_setOption: function(d, c) {
        d === "value" && (this.options.value = c, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(d, c)
    },_value: function() {
        var c = this.options.value;
        return typeof c != "number" && (c = 0), Math.min(this.options.max, Math.max(this.min, c))
    },_percentage: function() {
        return 100 * this._value() / this.options.max
    },_refreshValue: function() {
        var d = this.value(), c = this._percentage();
        this.oldValue !== d && (this.oldValue = d, this._trigger("change")), this.valueDiv.toggle(d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%"), this.element.attr("aria-valuenow", d)
    }})
})(jQuery);
(function(b, a) {
    var c = 5;
    b.widget("ui.slider", b.ui.mouse, {version: "1.9.2",widgetEventPrefix: "slide",options: {animate: !1,distance: 0,max: 100,min: 0,orientation: "horizontal",range: !1,step: 1,value: 0,values: null},_create: function() {
        var f, h, e = this.options, g = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), j = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", d = [];
        this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (e.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = b([]), e.range && (e.range === !0 && (e.values || (e.values = [this._valueMin(), this._valueMin()]), e.values.length && e.values.length !== 2 && (e.values = [e.values[0], e.values[0]])), this.range = b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (e.range === "min" || e.range === "max" ? " ui-slider-range-" + e.range : ""))), h = e.values && e.values.length || 1;
        for (f = g.length; f < h; f++) {
            d.push(j)
        }
        this.handles = g.add(b(d.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(i) {
            i.preventDefault()
        }).mouseenter(function() {
            e.disabled || b(this).addClass("ui-state-hover")
        }).mouseleave(function() {
            b(this).removeClass("ui-state-hover")
        }).focus(function() {
            e.disabled ? b(this).blur() : (b(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), b(this).addClass("ui-state-focus"))
        }).blur(function() {
            b(this).removeClass("ui-state-focus")
        }), this.handles.each(function(i) {
            b(this).data("ui-slider-handle-index", i)
        }), this._on(this.handles, {keydown: function(m) {
            var p, l, n, q, k = b(m.target).data("ui-slider-handle-index");
            switch (m.keyCode) {
            case b.ui.keyCode.HOME:
            case b.ui.keyCode.END:
            case b.ui.keyCode.PAGE_UP:
            case b.ui.keyCode.PAGE_DOWN:
            case b.ui.keyCode.UP:
            case b.ui.keyCode.RIGHT:
            case b.ui.keyCode.DOWN:
            case b.ui.keyCode.LEFT:
                m.preventDefault();
                if (!this._keySliding) {
                    this._keySliding = !0, b(m.target).addClass("ui-state-active"), p = this._start(m, k);
                    if (p === !1) {
                        return
                    }
                }
            }
            q = this.options.step, this.options.values && this.options.values.length ? l = n = this.values(k) : l = n = this.value();
            switch (m.keyCode) {
            case b.ui.keyCode.HOME:
                n = this._valueMin();
                break;
            case b.ui.keyCode.END:
                n = this._valueMax();
                break;
            case b.ui.keyCode.PAGE_UP:
                n = this._trimAlignValue(l + (this._valueMax() - this._valueMin()) / c);
                break;
            case b.ui.keyCode.PAGE_DOWN:
                n = this._trimAlignValue(l - (this._valueMax() - this._valueMin()) / c);
                break;
            case b.ui.keyCode.UP:
            case b.ui.keyCode.RIGHT:
                if (l === this._valueMax()) {
                    return
                }
                n = this._trimAlignValue(l + q);
                break;
            case b.ui.keyCode.DOWN:
            case b.ui.keyCode.LEFT:
                if (l === this._valueMin()) {
                    return
                }
                n = this._trimAlignValue(l - q)
            }
            this._slide(m, k, n)
        },keyup: function(i) {
            var k = b(i.target).data("ui-slider-handle-index");
            this._keySliding && (this._keySliding = !1, this._stop(i, k), this._change(i, k), b(i.target).removeClass("ui-state-active"))
        }}), this._refreshValue(), this._animateOff = !1
    },_destroy: function() {
        this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    },_mouseCapture: function(v) {
        var g, d, j, w, e, q, p, k, h = this, m = this.options;
        return m.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(),height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), g = {x: v.pageX,y: v.pageY}, d = this._normValueFromMouse(g), j = this._valueMax() - this._valueMin() + 1, this.handles.each(function(f) {
            var i = Math.abs(d - h.values(f));
            j > i && (j = i, w = b(this), e = f)
        }), m.range === !0 && this.values(1) === m.min && (e += 1, w = b(this.handles[e])), q = this._start(v, e), q === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = e, w.addClass("ui-state-active").focus(), p = w.offset(), k = !b(v.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = k ? {left: 0,top: 0} : {left: v.pageX - p.left - w.width() / 2,top: v.pageY - p.top - w.height() / 2 - (parseInt(w.css("borderTopWidth"), 10) || 0) - (parseInt(w.css("borderBottomWidth"), 10) || 0) + (parseInt(w.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(v, e, d), this._animateOff = !0, !0))
    },_mouseStart: function() {
        return !0
    },_mouseDrag: function(f) {
        var d = {x: f.pageX,y: f.pageY}, g = this._normValueFromMouse(d);
        return this._slide(f, this._handleIndex, g), !1
    },_mouseStop: function(d) {
        return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(d, this._handleIndex), this._change(d, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },_detectOrientation: function() {
        this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
    },_normValueFromMouse: function(j) {
        var f, k, h, d, g;
        return this.orientation === "horizontal" ? (f = this.elementSize.width, k = j.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (f = this.elementSize.height, k = j.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), h = k / f, h > 1 && (h = 1), h < 0 && (h = 0), this.orientation === "vertical" && (h = 1 - h), d = this._valueMax() - this._valueMin(), g = this._valueMin() + h * d, this._trimAlignValue(g)
    },_start: function(f, d) {
        var g = {handle: this.handles[d],value: this.value()};
        return this.options.values && this.options.values.length && (g.value = this.values(d), g.values = this.values()), this._trigger("start", f, g)
    },_slide: function(j, f, k) {
        var h, d, g;
        this.options.values && this.options.values.length ? (h = this.values(f ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (f === 0 && k > h || f === 1 && k < h) && (k = h), k !== this.values(f) && (d = this.values(), d[f] = k, g = this._trigger("slide", j, {handle: this.handles[f],value: k,values: d}), h = this.values(f ? 0 : 1), g !== !1 && this.values(f, k, !0))) : k !== this.value() && (g = this._trigger("slide", j, {handle: this.handles[f],value: k}), g !== !1 && this.value(k))
    },_stop: function(f, d) {
        var g = {handle: this.handles[d],value: this.value()};
        this.options.values && this.options.values.length && (g.value = this.values(d), g.values = this.values()), this._trigger("stop", f, g)
    },_change: function(f, d) {
        if (!this._keySliding && !this._mouseSliding) {
            var g = {handle: this.handles[d],value: this.value()};
            this.options.values && this.options.values.length && (g.value = this.values(d), g.values = this.values()), this._trigger("change", f, g)
        }
    },value: function(d) {
        if (arguments.length) {
            this.options.value = this._trimAlignValue(d), this._refreshValue(), this._change(null, 0);
            return
        }
        return this._value()
    },values: function(e, h) {
        var g, d, f;
        if (arguments.length > 1) {
            this.options.values[e] = this._trimAlignValue(h), this._refreshValue(), this._change(null, e);
            return
        }
        if (!arguments.length) {
            return this._values()
        }
        if (!b.isArray(arguments[0])) {
            return this.options.values && this.options.values.length ? this._values(e) : this.value()
        }
        g = this.options.values, d = arguments[0];
        for (f = 0; f < g.length; f += 1) {
            g[f] = this._trimAlignValue(d[f]), this._change(null, f)
        }
        this._refreshValue()
    },_setOption: function(e, g) {
        var f, d = 0;
        b.isArray(this.options.values) && (d = this.options.values.length), b.Widget.prototype._setOption.apply(this, arguments);
        switch (e) {
        case "disabled":
            g ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
            break;
        case "orientation":
            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
            break;
        case "value":
            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
            break;
        case "values":
            this._animateOff = !0, this._refreshValue();
            for (f = 0; f < d; f += 1) {
                this._change(null, f)
            }
            this._animateOff = !1;
            break;
        case "min":
        case "max":
            this._animateOff = !0, this._refreshValue(), this._animateOff = !1
        }
    },_value: function() {
        var d = this.options.value;
        return d = this._trimAlignValue(d), d
    },_values: function(g) {
        var d, h, f;
        if (arguments.length) {
            return d = this.options.values[g], d = this._trimAlignValue(d), d
        }
        h = this.options.values.slice();
        for (f = 0; f < h.length; f += 1) {
            h[f] = this._trimAlignValue(h[f])
        }
        return h
    },_trimAlignValue: function(g) {
        if (g <= this._valueMin()) {
            return this._valueMin()
        }
        if (g >= this._valueMax()) {
            return this._valueMax()
        }
        var d = this.options.step > 0 ? this.options.step : 1, h = (g - this._valueMin()) % d, f = g - h;
        return Math.abs(h) * 2 >= d && (f += h > 0 ? d : -d), parseFloat(f.toFixed(5))
    },_valueMin: function() {
        return this.options.min
    },_valueMax: function() {
        return this.options.max
    },_refreshValue: function() {
        var q, g, d, j, v, e = this.options.range, p = this.options, m = this, k = this._animateOff ? !1 : p.animate, h = {};
        this.options.values && this.options.values.length ? this.handles.each(function(f) {
            g = (m.values(f) - m._valueMin()) / (m._valueMax() - m._valueMin()) * 100, h[m.orientation === "horizontal" ? "left" : "bottom"] = g + "%", b(this).stop(1, 1)[k ? "animate" : "css"](h, p.animate), m.options.range === !0 && (m.orientation === "horizontal" ? (f === 0 && m.range.stop(1, 1)[k ? "animate" : "css"]({left: g + "%"}, p.animate), f === 1 && m.range[k ? "animate" : "css"]({width: g - q + "%"}, {queue: !1,duration: p.animate})) : (f === 0 && m.range.stop(1, 1)[k ? "animate" : "css"]({bottom: g + "%"}, p.animate), f === 1 && m.range[k ? "animate" : "css"]({height: g - q + "%"}, {queue: !1,duration: p.animate}))), q = g
        }) : (d = this.value(), j = this._valueMin(), v = this._valueMax(), g = v !== j ? (d - j) / (v - j) * 100 : 0, h[this.orientation === "horizontal" ? "left" : "bottom"] = g + "%", this.handle.stop(1, 1)[k ? "animate" : "css"](h, p.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[k ? "animate" : "css"]({width: g + "%"}, p.animate), e === "max" && this.orientation === "horizontal" && this.range[k ? "animate" : "css"]({width: 100 - g + "%"}, {queue: !1,duration: p.animate}), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[k ? "animate" : "css"]({height: g + "%"}, p.animate), e === "max" && this.orientation === "vertical" && this.range[k ? "animate" : "css"]({height: 100 - g + "%"}, {queue: !1,duration: p.animate}))
    }})
})(jQuery);
(function(b) {
    function a(c) {
        return function() {
            var d = this.element.val();
            c.apply(this, arguments), this._refresh(), d !== this.element.val() && this._trigger("change")
        }
    }
    b.widget("ui.spinner", {version: "1.9.2",defaultElement: "<input>",widgetEventPrefix: "spin",options: {culture: null,icons: {down: "ui-icon-triangle-1-s",up: "ui-icon-triangle-1-n"},incremental: !0,max: null,min: null,numberFormat: null,page: 10,step: 1,change: null,spin: null,start: null,stop: null},_create: function() {
        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {beforeunload: function() {
            this.element.removeAttr("autocomplete")
        }})
    },_getCreateOptions: function() {
        var c = {}, d = this.element;
        return b.each(["min", "max", "step"], function(h, g) {
            var f = d.attr(g);
            f !== undefined && f.length && (c[g] = f)
        }), c
    },_events: {keydown: function(c) {
        this._start(c) && this._keydown(c) && c.preventDefault()
    },keyup: "_stop",focus: function() {
        this.previous = this.element.val()
    },blur: function(c) {
        if (this.cancelBlur) {
            delete this.cancelBlur;
            return
        }
        this._refresh(), this.previous !== this.element.val() && this._trigger("change", c)
    },mousewheel: function(d, c) {
        if (!c) {
            return
        }
        if (!this.spinning && !this._start(d)) {
            return !1
        }
        this._spin((c > 0 ? 1 : -1) * this.options.step, d), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
            this.spinning && this._stop(d)
        }, 100), d.preventDefault()
    },"mousedown .ui-spinner-button": function(c) {
        function d() {
            var f = this.element[0] === this.document[0].activeElement;
            f || (this.element.focus(), this.previous = e, this._delay(function() {
                this.previous = e
            }))
        }
        var e;
        e = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), c.preventDefault(), d.call(this), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur, d.call(this)
        });
        if (this._start(c) === !1) {
            return
        }
        this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
    },"mouseup .ui-spinner-button": "_stop","mouseenter .ui-spinner-button": function(c) {
        if (!b(c.currentTarget).hasClass("ui-state-active")) {
            return
        }
        if (this._start(c) === !1) {
            return !1
        }
        this._repeat(null, b(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c)
    },"mouseleave .ui-spinner-button": "_stop"},_draw: function() {
        var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        this.element.attr("role", "spinbutton"), this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(c.height() * 0.5) && c.height() > 0 && c.height(c.height()), this.options.disabled && this.disable()
    },_keydown: function(c) {
        var e = this.options, d = b.ui.keyCode;
        switch (c.keyCode) {
        case d.UP:
            return this._repeat(null, 1, c), !0;
        case d.DOWN:
            return this._repeat(null, -1, c), !0;
        case d.PAGE_UP:
            return this._repeat(null, e.page, c), !0;
        case d.PAGE_DOWN:
            return this._repeat(null, -e.page, c), !0
        }
        return !1
    },_uiSpinnerHtml: function() {
        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
    },_buttonHtml: function() {
        return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
    },_start: function(c) {
        return !this.spinning && this._trigger("start", c) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
    },_repeat: function(d, c, f) {
        d = d || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
            this._repeat(40, c, f)
        }, d), this._spin(c * this.options.step, f)
    },_spin: function(d, c) {
        var f = this.value() || 0;
        this.counter || (this.counter = 1), f = this._adjustValue(f + d * this._increment(this.counter));
        if (!this.spinning || this._trigger("spin", c, {value: f}) !== !1) {
            this._value(f), this.counter++
        }
    },_increment: function(c) {
        var d = this.options.incremental;
        return d ? b.isFunction(d) ? d(c) : Math.floor(c * c * c / 50000 - c * c / 500 + 17 * c / 200 + 1) : 1
    },_precision: function() {
        var c = this._precisionOf(this.options.step);
        return this.options.min !== null && (c = Math.max(c, this._precisionOf(this.options.min))), c
    },_precisionOf: function(d) {
        var c = d.toString(), f = c.indexOf(".");
        return f === -1 ? 0 : c.length - f - 1
    },_adjustValue: function(f) {
        var c, g, d = this.options;
        return c = d.min !== null ? d.min : 0, g = f - c, g = Math.round(g / d.step) * d.step, f = c + g, f = parseFloat(f.toFixed(this._precision())), d.max !== null && f > d.max ? d.max : d.min !== null && f < d.min ? d.min : f
    },_stop: function(c) {
        if (!this.spinning) {
            return
        }
        clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", c)
    },_setOption: function(d, c) {
        if (d === "culture" || d === "numberFormat") {
            var f = this._parse(this.element.val());
            this.options[d] = c, this.element.val(this._format(f));
            return
        }
        (d === "max" || d === "min" || d === "step") && typeof c == "string" && (c = this._parse(c)), this._super(d, c), d === "disabled" && (c ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
    },_setOptions: a(function(c) {
        this._super(c), this._value(this.element.val())
    }),_parse: function(c) {
        return typeof c == "string" && c !== "" && (c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c), c === "" || isNaN(c) ? null : c
    },_format: function(c) {
        return c === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
    },_refresh: function() {
        this.element.attr({"aria-valuemin": this.options.min,"aria-valuemax": this.options.max,"aria-valuenow": this._parse(this.element.val())})
    },_value: function(d, c) {
        var f;
        d !== "" && (f = this._parse(d), f !== null && (c || (f = this._adjustValue(f)), d = this._format(f))), this.element.val(d), this._refresh()
    },_destroy: function() {
        this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
    },stepUp: a(function(c) {
        this._stepUp(c)
    }),_stepUp: function(c) {
        this._spin((c || 1) * this.options.step)
    },stepDown: a(function(c) {
        this._stepDown(c)
    }),_stepDown: function(c) {
        this._spin((c || 1) * -this.options.step)
    },pageUp: a(function(c) {
        this._stepUp((c || 1) * this.options.page)
    }),pageDown: a(function(c) {
        this._stepDown((c || 1) * this.options.page)
    }),value: function(c) {
        if (!arguments.length) {
            return this._parse(this.element.val())
        }
        a(this._value).call(this, c)
    },widget: function() {
        return this.uiSpinner
    }})
})(jQuery);
(function(f, b) {
    function a() {
        return ++g
    }
    function c(h) {
        return h.hash.length > 1 && h.href.replace(d, "") === location.href.replace(d, "").replace(/\s/g, "%20")
    }
    var g = 0, d = /#.*$/;
    f.widget("ui.tabs", {version: "1.9.2",delay: 300,options: {active: null,collapsible: !1,event: "click",heightStyle: "content",hide: null,show: null,activate: null,beforeActivate: null,beforeLoad: null,load: null},_create: function() {
        var h = this, k = this.options, j = k.active, e = location.hash.substring(1);
        this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", k.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(i) {
            f(this).is(".ui-state-disabled") && i.preventDefault()
        }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
            f(this).closest("li").is(".ui-state-disabled") && this.blur()
        }), this._processTabs();
        if (j === null) {
            e && this.tabs.each(function(i, l) {
                if (f(l).attr("aria-controls") === e) {
                    return j = i, !1
                }
            }), j === null && (j = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
            if (j === null || j === -1) {
                j = this.tabs.length ? 0 : !1
            }
        }
        j !== !1 && (j = this.tabs.index(this.tabs.eq(j)), j === -1 && (j = k.collapsible ? !1 : 0)), k.active = j, !k.collapsible && k.active === !1 && this.anchors.length && (k.active = 0), f.isArray(k.disabled) && (k.disabled = f.unique(k.disabled.concat(f.map(this.tabs.filter(".ui-state-disabled"), function(i) {
            return h.tabs.index(i)
        }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(this.options.active) : this.active = f(), this._refresh(), this.active.length && this.load(k.active)
    },_getCreateEventData: function() {
        return {tab: this.active,panel: this.active.length ? this._getPanelForTab(this.active) : f()}
    },_tabKeydown: function(h) {
        var k = f(this.document[0].activeElement).closest("li"), j = this.tabs.index(k), e = !0;
        if (this._handlePageNav(h)) {
            return
        }
        switch (h.keyCode) {
        case f.ui.keyCode.RIGHT:
        case f.ui.keyCode.DOWN:
            j++;
            break;
        case f.ui.keyCode.UP:
        case f.ui.keyCode.LEFT:
            e = !1, j--;
            break;
        case f.ui.keyCode.END:
            j = this.anchors.length - 1;
            break;
        case f.ui.keyCode.HOME:
            j = 0;
            break;
        case f.ui.keyCode.SPACE:
            h.preventDefault(), clearTimeout(this.activating), this._activate(j);
            return;
        case f.ui.keyCode.ENTER:
            h.preventDefault(), clearTimeout(this.activating), this._activate(j === this.options.active ? !1 : j);
            return;
        default:
            return
        }
        h.preventDefault(), clearTimeout(this.activating), j = this._focusNextTab(j, e), h.ctrlKey || (k.attr("aria-selected", "false"), this.tabs.eq(j).attr("aria-selected", "true"), this.activating = this._delay(function() {
            this.option("active", j)
        }, this.delay))
    },_panelKeydown: function(e) {
        if (this._handlePageNav(e)) {
            return
        }
        e.ctrlKey && e.keyCode === f.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
    },_handlePageNav: function(e) {
        if (e.altKey && e.keyCode === f.ui.keyCode.PAGE_UP) {
            return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0
        }
        if (e.altKey && e.keyCode === f.ui.keyCode.PAGE_DOWN) {
            return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        }
    },_findNextTab: function(h, k) {
        function e() {
            return h > j && (h = 0), h < 0 && (h = j), h
        }
        var j = this.tabs.length - 1;
        while (f.inArray(e(), this.options.disabled) !== -1) {
            h = k ? h + 1 : h - 1
        }
        return h
    },_focusNextTab: function(i, h) {
        return i = this._findNextTab(i, h), this.tabs.eq(i).focus(), i
    },_setOption: function(i, h) {
        if (i === "active") {
            this._activate(h);
            return
        }
        if (i === "disabled") {
            this._setupDisabled(h);
            return
        }
        this._super(i, h), i === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", h), !h && this.options.active === !1 && this._activate(0)), i === "event" && this._setupEvents(h), i === "heightStyle" && this._setupHeightStyle(h)
    },_tabId: function(h) {
        return h.attr("aria-controls") || "ui-tabs-" + a()
    },_sanitizeSelector: function(h) {
        return h ? h.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    },refresh: function() {
        var e = this.options, h = this.tablist.children(":has(a[href])");
        e.disabled = f.map(h.filter(".ui-state-disabled"), function(i) {
            return h.index(i)
        }), this._processTabs(), e.active === !1 || !this.anchors.length ? (e.active = !1, this.active = f()) : this.active.length && !f.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = f()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active), this._refresh()
    },_refresh: function() {
        this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({"aria-selected": "false",tabIndex: -1}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded": "false","aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected": "true",tabIndex: 0}), this._getPanelForTab(this.active).show().attr({"aria-expanded": "true","aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
    },_processTabs: function() {
        var e = this;
        this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role: "tab",tabIndex: -1}), this.anchors = this.tabs.map(function() {
            return f("a", this)[0]
        }).addClass("ui-tabs-anchor").attr({role: "presentation",tabIndex: -1}), this.panels = f(), this.anchors.each(function(t, p) {
            var m, s, k, j = f(p).uniqueId().attr("id"), q = f(p).closest("li"), h = q.attr("aria-controls");
            c(p) ? (m = p.hash, s = e.element.find(e._sanitizeSelector(m))) : (k = e._tabId(q), m = "#" + k, s = e.element.find(m), s.length || (s = e._createPanel(k), s.insertAfter(e.panels[t - 1] || e.tablist)), s.attr("aria-live", "polite")), s.length && (e.panels = e.panels.add(s)), h && q.data("ui-tabs-aria-controls", h), q.attr({"aria-controls": m.substring(1),"aria-labelledby": j}), s.attr("aria-labelledby", j)
        }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
    },_getList: function() {
        return this.element.find("ol,ul").eq(0)
    },_createPanel: function(e) {
        return f("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    },_setupDisabled: function(e) {
        f.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
        for (var i = 0, h; h = this.tabs[i]; i++) {
            e === !0 || f.inArray(i, e) !== -1 ? f(h).addClass("ui-state-disabled").attr("aria-disabled", "true") : f(h).removeClass("ui-state-disabled").removeAttr("aria-disabled")
        }
        this.options.disabled = e
    },_setupEvents: function(e) {
        var h = {click: function(i) {
            i.preventDefault()
        }};
        e && f.each(e.split(" "), function(j, i) {
            h[i] = "_eventHandler"
        }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, h), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
    },_setupHeightStyle: function(h) {
        var k, j, e = this.element.parent();
        h === "fill" ? (f.support.minHeight || (j = e.css("overflow"), e.css("overflow", "hidden")), k = e.height(), this.element.siblings(":visible").each(function() {
            var i = f(this), l = i.css("position");
            if (l === "absolute" || l === "fixed") {
                return
            }
            k -= i.outerHeight(!0)
        }), j && e.css("overflow", j), this.element.children().not(this.panels).each(function() {
            k -= f(this).outerHeight(!0)
        }), this.panels.each(function() {
            f(this).height(Math.max(0, k - f(this).innerHeight() + f(this).height()))
        }).css("overflow", "auto")) : h === "auto" && (k = 0, this.panels.each(function() {
            k = Math.max(k, f(this).height("").height())
        }).height(k))
    },_eventHandler: function(w) {
        var j = this.options, e = this.active, m = f(w.currentTarget), x = m.closest("li"), h = x[0] === e[0], v = h && j.collapsible, q = v ? f() : this._getPanelForTab(x), p = e.length ? this._getPanelForTab(e) : f(), k = {oldTab: e,oldPanel: p,newTab: v ? f() : x,newPanel: q};
        w.preventDefault();
        if (x.hasClass("ui-state-disabled") || x.hasClass("ui-tabs-loading") || this.running || h && !j.collapsible || this._trigger("beforeActivate", w, k) === !1) {
            return
        }
        j.active = v ? !1 : this.tabs.index(x), this.active = h ? f() : x, this.xhr && this.xhr.abort(), !p.length && !q.length && f.error("jQuery UI Tabs: Mismatching fragment identifier."), q.length && this.load(this.tabs.index(x), w), this._toggle(w, k)
    },_toggle: function(j, p) {
        function m() {
            l.running = !1, l._trigger("activate", j, p)
        }
        function e() {
            p.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), h.length && l.options.show ? l._show(h, l.options.show, m) : (h.show(), m())
        }
        var l = this, h = p.newPanel, k = p.oldPanel;
        this.running = !0, k.length && this.options.hide ? this._hide(k, this.options.hide, function() {
            p.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
        }) : (p.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), k.hide(), e()), k.attr({"aria-expanded": "false","aria-hidden": "true"}), p.oldTab.attr("aria-selected", "false"), h.length && k.length ? p.oldTab.attr("tabIndex", -1) : h.length && this.tabs.filter(function() {
            return f(this).attr("tabIndex") === 0
        }).attr("tabIndex", -1), h.attr({"aria-expanded": "true","aria-hidden": "false"}), p.newTab.attr({"aria-selected": "true",tabIndex: 0})
    },_activate: function(e) {
        var i, h = this._findActive(e);
        if (h[0] === this.active[0]) {
            return
        }
        h.length || (h = this.active), i = h.find(".ui-tabs-anchor")[0], this._eventHandler({target: i,currentTarget: i,preventDefault: f.noop})
    },_findActive: function(e) {
        return e === !1 ? f() : this.tabs.eq(e)
    },_getIndex: function(h) {
        return typeof h == "string" && (h = this.anchors.index(this.anchors.filter("[href$='" + h + "']"))), h
    },_destroy: function() {
        this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() {
            f.data(this, "ui-tabs-destroy") ? f(this).remove() : f(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
        }), this.tabs.each(function() {
            var e = f(this), h = e.data("ui-tabs-aria-controls");
            h ? e.attr("aria-controls", h) : e.removeAttr("aria-controls")
        }), this.panels.show(), this.options.heightStyle !== "content" && this.panels.css("height", "")
    },enable: function(h) {
        var e = this.options.disabled;
        if (e === !1) {
            return
        }
        h === b ? e = !1 : (h = this._getIndex(h), f.isArray(e) ? e = f.map(e, function(i) {
            return i !== h ? i : null
        }) : e = f.map(this.tabs, function(j, i) {
            return i !== h ? i : null
        })), this._setupDisabled(e)
    },disable: function(h) {
        var e = this.options.disabled;
        if (e === !0) {
            return
        }
        if (h === b) {
            e = !0
        } else {
            h = this._getIndex(h);
            if (f.inArray(h, e) !== -1) {
                return
            }
            f.isArray(e) ? e = f.merge([h], e).sort() : e = [h]
        }
        this._setupDisabled(e)
    },load: function(k, p) {
        k = this._getIndex(k);
        var l = this, j = this.tabs.eq(k), m = j.find(".ui-tabs-anchor"), h = this._getPanelForTab(j), e = {tab: j,panel: h};
        if (c(m[0])) {
            return
        }
        this.xhr = f.ajax(this._ajaxSettings(m, p, e)), this.xhr && this.xhr.statusText !== "canceled" && (j.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function(i) {
            setTimeout(function() {
                h.html(i), l._trigger("load", p, e)
            }, 1)
        }).complete(function(n, i) {
            setTimeout(function() {
                i === "abort" && l.panels.stop(!1, !0), j.removeClass("ui-tabs-loading"), h.removeAttr("aria-busy"), n === l.xhr && delete l.xhr
            }, 1)
        }))
    },_ajaxSettings: function(h, k, j) {
        var e = this;
        return {url: h.attr("href"),beforeSend: function(i, l) {
            return e._trigger("beforeLoad", k, f.extend({jqXHR: i,ajaxSettings: l}, j))
        }}
    },_getPanelForTab: function(e) {
        var h = f(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + h))
    }}), f.uiBackCompat !== !1 && (f.ui.tabs.prototype._ui = function(i, h) {
        return {tab: i,panel: h,index: this.anchors.index(i)}
    }, f.widget("ui.tabs", f.ui.tabs, {url: function(i, h) {
        this.anchors.eq(i).attr("href", h)
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {ajaxOptions: null,cache: !1},_create: function() {
        this._super();
        var e = this;
        this._on({tabsbeforeload: function(i, h) {
            if (f.data(h.tab[0], "cache.tabs")) {
                i.preventDefault();
                return
            }
            h.jqXHR.success(function() {
                e.options.cache && f.data(h.tab[0], "cache.tabs", !0)
            })
        }})
    },_ajaxSettings: function(h, k, j) {
        var e = this.options.ajaxOptions;
        return f.extend({}, e, {error: function(l, i) {
            try {
                e.error(l, i, j.tab.closest("li").index(), j.tab[0])
            } catch (m) {
            }
        }}, this._superApply(arguments))
    },_setOption: function(i, h) {
        i === "cache" && h === !1 && this.anchors.removeData("cache.tabs"), this._super(i, h)
    },_destroy: function() {
        this.anchors.removeData("cache.tabs"), this._super()
    },url: function(h) {
        this.anchors.eq(h).removeData("cache.tabs"), this._superApply(arguments)
    }}), f.widget("ui.tabs", f.ui.tabs, {abort: function() {
        this.xhr && this.xhr.abort()
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {spinner: "<em>Loading&#8230;</em>"},_create: function() {
        this._super(), this._on({tabsbeforeload: function(j, h) {
            if (j.target !== this.element[0] || !this.options.spinner) {
                return
            }
            var k = h.tab.find("span"), i = k.html();
            k.html(this.options.spinner), h.jqXHR.complete(function() {
                k.html(i)
            })
        }})
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {enable: null,disable: null},enable: function(e) {
        var i = this.options, h;
        if (e && i.disabled === !0 || f.isArray(i.disabled) && f.inArray(e, i.disabled) !== -1) {
            h = !0
        }
        this._superApply(arguments), h && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
    },disable: function(e) {
        var i = this.options, h;
        if (e && i.disabled === !1 || f.isArray(i.disabled) && f.inArray(e, i.disabled) === -1) {
            h = !0
        }
        this._superApply(arguments), h && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {add: null,remove: null,tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"},add: function(q, l, j) {
        j === b && (j = this.anchors.length);
        var k, p, h = this.options, e = f(h.tabTemplate.replace(/#\{href\}/g, q).replace(/#\{label\}/g, l)), m = q.indexOf("#") ? this._tabId(e) : q.replace("#", "");
        return e.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), e.attr("aria-controls", m), k = j >= this.tabs.length, p = this.element.find("#" + m), p.length || (p = this._createPanel(m), k ? j > 0 ? p.insertAfter(this.panels.eq(-1)) : p.appendTo(this.element) : p.insertBefore(this.panels[j])), p.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), k ? e.appendTo(this.tablist) : e.insertBefore(this.tabs[j]), h.disabled = f.map(h.disabled, function(i) {
            return i >= j ? ++i : i
        }), this.refresh(), this.tabs.length === 1 && h.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[j], this.panels[j])), this
    },remove: function(h) {
        h = this._getIndex(h);
        var k = this.options, j = this.tabs.eq(h).remove(), e = this._getPanelForTab(j).remove();
        return j.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(h + (h + 1 < this.anchors.length ? 1 : -1)), k.disabled = f.map(f.grep(k.disabled, function(i) {
            return i !== h
        }), function(i) {
            return i >= h ? --i : i
        }), this.refresh(), this._trigger("remove", null, this._ui(j.find("a")[0], e[0])), this
    }}), f.widget("ui.tabs", f.ui.tabs, {length: function() {
        return this.anchors.length
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {idPrefix: "ui-tabs-"},_tabId: function(e) {
        var h = e.is("li") ? e.find("a[href]") : e;
        return h = h[0], f(h).closest("li").attr("aria-controls") || h.title && h.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + a()
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {panelTemplate: "<div></div>"},_createPanel: function(e) {
        return f(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
    }}), f.widget("ui.tabs", f.ui.tabs, {_create: function() {
        var h = this.options;
        h.active === null && h.selected !== b && (h.active = h.selected === -1 ? !1 : h.selected), this._super(), h.selected = h.active, h.selected === !1 && (h.selected = -1)
    },_setOption: function(i, h) {
        if (i !== "selected") {
            return this._super(i, h)
        }
        var j = this.options;
        this._super("active", h === -1 ? !1 : h), j.selected = j.active, j.selected === !1 && (j.selected = -1)
    },_eventHandler: function() {
        this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {show: null,select: null},_create: function() {
        this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
    },_trigger: function(m, j, o) {
        var l, h, k = this._superApply(arguments);
        return k ? (m === "beforeActivate" ? (l = o.newTab.length ? o.newTab : o.oldTab, h = o.newPanel.length ? o.newPanel : o.oldPanel, k = this._super("select", j, {tab: l.find(".ui-tabs-anchor")[0],panel: h[0],index: l.closest("li").index()})) : m === "activate" && o.newTab.length && (k = this._super("show", j, {tab: o.newTab.find(".ui-tabs-anchor")[0],panel: o.newPanel[0],index: o.newTab.closest("li").index()})), k) : !1
    }}), f.widget("ui.tabs", f.ui.tabs, {select: function(h) {
        h = this._getIndex(h);
        if (h === -1) {
            if (!this.options.collapsible || this.options.selected === -1) {
                return
            }
            h = this.options.selected
        }
        this.anchors.eq(h).trigger(this.options.event + this.eventNamespace)
    }}), function() {
        var e = 0;
        f.widget("ui.tabs", f.ui.tabs, {options: {cookie: null},_create: function() {
            var i = this.options, h;
            i.active == null && i.cookie && (h = parseInt(this._cookie(), 10), h === -1 && (h = !1), i.active = h), this._super()
        },_cookie: function(i) {
            var h = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e)];
            return arguments.length && (h.push(i === !1 ? -1 : i), h.push(this.options.cookie)), f.cookie.apply(null, h)
        },_refresh: function() {
            this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
        },_eventHandler: function() {
            this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
        },_destroy: function() {
            this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
        }})
    }(), f.widget("ui.tabs", f.ui.tabs, {_trigger: function(h, k, j) {
        var e = f.extend({}, j);
        return h === "load" && (e.panel = e.panel[0], e.tab = e.tab.find(".ui-tabs-anchor")[0]), this._super(h, k, e)
    }}), f.widget("ui.tabs", f.ui.tabs, {options: {fx: null},_getFx: function() {
        var e, i, h = this.options.fx;
        return h && (f.isArray(h) ? (e = h[0], i = h[1]) : e = i = h), h ? {show: i,hide: e} : null
    },_toggle: function(p, k) {
        function q() {
            v.running = !1, v._trigger("activate", p, k)
        }
        function h() {
            k.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), m.length && l.show ? m.animate(l.show, l.show.duration, function() {
                q()
            }) : (m.show(), q())
        }
        var v = this, m = k.newPanel, j = k.oldPanel, l = this._getFx();
        if (!l) {
            return this._super(p, k)
        }
        v.running = !0, j.length && l.hide ? j.animate(l.hide, l.hide.duration, function() {
            k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h()
        }) : (k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), j.hide(), h())
    }}))
})(jQuery);
(function(c) {
    function d(e, g) {
        var f = (e.attr("aria-describedby") || "").split(/\s+/);
        f.push(g), e.data("ui-tooltip-id", g).attr("aria-describedby", c.trim(f.join(" ")))
    }
    function b(f) {
        var h = f.data("ui-tooltip-id"), g = (f.attr("aria-describedby") || "").split(/\s+/), e = c.inArray(h, g);
        e !== -1 && g.splice(e, 1), f.removeData("ui-tooltip-id"), g = c.trim(g.join(" ")), g ? f.attr("aria-describedby", g) : f.removeAttr("aria-describedby")
    }
    var a = 0;
    c.widget("ui.tooltip", {version: "1.9.2",options: {content: function() {
        return c(this).attr("title")
    },hide: !0,items: "[title]:not([disabled])",position: {my: "left top+15",at: "left bottom",collision: "flipfit flip"},show: !0,tooltipClass: null,track: !1,close: null,open: null},_create: function() {
        this._on({mouseover: "open",focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
    },_setOption: function(e, g) {
        var f = this;
        if (e === "disabled") {
            this[g ? "_disable" : "_enable"](), this.options[e] = g;
            return
        }
        this._super(e, g), e === "content" && c.each(this.tooltips, function(i, h) {
            f._updateContent(h)
        })
            },_disable: function() {
		var e = this;
		c.each(this.tooltips, function(h, g) {
                    var f = c.Event("blur");
                    f.target = f.currentTarget = g[0], e.close(f, !0)
		}), this.element.find(this.options.items).andSelf().each(function() {
                    var f = c(this);
                    f.is("[title]") && f.data("ui-tooltip-title", f.attr("title")).attr("title", "")
		})
		    },_enable: function() {
			this.element.find(this.options.items).andSelf().each(function() {
			    var e = c(this);
			    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
			    },open: function(e) {
				var g = this, f = c(e ? e.target : this.element).closest(this.options.items);
				if (!f.length || f.data("ui-tooltip-id")) {
				    return
				}
				f.attr("title") && f.data("ui-tooltip-title", f.attr("title")), f.data("ui-tooltip-open", !0), e && e.type === "mouseover" && f.parents().each(function() {
				    var h = c(this), i;
				    h.data("ui-tooltip-open") && (i = c.Event("blur"), i.target = i.currentTarget = this, g.close(i, !0)), h.attr("title") && (h.uniqueId(), g.parents[this.id] = {element: this,title: h.attr("title")}, h.attr("title", ""))
				}), this._updateContent(f, e)
			    },_updateContent: function(k, g) {
				var l, j = this.options.content, f = this, h = g ? g.type : null;
				if (typeof j == "string") {
				    return this._open(g, k, j)
				}
				l = j.call(k[0], function(e) {
				    if (!k.data("ui-tooltip-open")) {
					return
				    }
				    f._delay(function() {
					g && (g.type = h), this._open(g, k, e)
				    })
				}), l && this._open(g, k, l)
			    },_open: function(j, l, h) {
				function m(f) {
				    e.of = f;
				    if (k.is(":hidden")) {
					return
				    }
				    k.position(e)
				}
				var k, n, g, e = c.extend({}, this.options.position);
				if (!h) {
				    return
				}
				k = this._find(l);
				if (k.length) {
				    k.find(".ui-tooltip-content").html(h);
				    return
				}
				l.is("[title]") && (j && j.type === "mouseover" ? l.attr("title", "") : l.removeAttr("title")), k = this._tooltip(l), d(l, k.attr("id")), k.find(".ui-tooltip-content").html(h), this.options.track && j && /^mouse/.test(j.type) ? (this._on(this.document, {mousemove: m}), m(j)) : k.position(c.extend({of: l}, this.options.position)), k.hide(), this._show(k, this.options.show), this.options.show && this.options.show.delay && (g = setInterval(function() {
				    k.is(":visible") && (m(e.of), clearInterval(g))
				}, c.fx.interval)), this._trigger("open", j, {tooltip: k}), n = {keyup: function(f) {
				    if (f.keyCode === c.ui.keyCode.ESCAPE) {
					var i = c.Event(f);
					i.currentTarget = l[0], this.close(i, !0)
				    }
				},remove: function() {
				    this._removeTooltip(k)
				}};
				if (!j || j.type === "mouseover") {
				    n.mouseleave = "close"
				}
				if (!j || j.type === "focusin") {
				    n.focusout = "close"
				}
				this._on(!0, l, n)
			    },close: function(f) {
				var h = this, e = c(f ? f.currentTarget : this.element), g = this._find(e);
				if (this.closing) {
				    return
				}
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), b(e), g.stop(!0), this._hide(g, this.options.hide, function() {
				    h._removeTooltip(c(this))
				}), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), f && f.type === "mouseleave" && c.each(this.parents, function(i, j) {
				    c(j.element).attr("title", j.title), delete h.parents[i]
				}), this.closing = !0, this._trigger("close", f, {tooltip: g}), this.closing = !1
			    },_tooltip: function(g) {
				var f = "ui-tooltip-" + a++, e = c("<div>").attr({id: f,role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
				return c("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), c.fn.bgiframe && e.bgiframe(), this.tooltips[f] = g, e
			    },_find: function(e) {
				var f = e.data("ui-tooltip-id");
				return f ? c("#" + f) : c()
			    },_removeTooltip: function(f) {
				f.remove(), delete this.tooltips[f.attr("id")]
			    },_destroy: function() {
				var e = this;
				c.each(this.tooltips, function(h, g) {
				    var f = c.Event("blur");
				    f.target = f.currentTarget = g[0], e.close(f, !0), c("#" + h).remove(), g.data("ui-tooltip-title") && (g.attr("title", g.data("ui-tooltip-title")), g.removeData("ui-tooltip-title"))
				})
				    }})
})(jQuery);
jQuery.effects || function(c, a) {
    var d = c.uiBackCompat !== !1, b = "ui-effects-";
    c.effects = {effect: {}}, function(D, k) {
        function g(i, f, l) {
            var h = A[f.type] || {};
            return i == null ? l || !f.def ? null : f.def : (i = h.floor ? ~~i : parseFloat(i), isNaN(i) ? f.def : h.mod ? (i + h.mod) % h.mod : 0 > i ? 0 : h.max < i ? h.max : i)
        }
        function y(h) {
            var i = j(), f = i._rgba = [];
            return h = h.toLowerCase(), w(E, function(p, n) {
                var r, v = n.re.exec(h), l = v && n.parse(v), u = n.space || "rgba";
                if (l) {
                    return r = i[u](l), i[C[u].cache] = r[C[u].cache], f = i._rgba = r._rgba, !1
                }
            }), f.length ? (f.join() === "0,0,0,0" && D.extend(f, z.transparent), i) : z[h]
        }
        function B(h, f, i) {
            return i = (i + 1) % 1, i * 6 < 1 ? h + (f - h) * i * 6 : i * 2 < 1 ? f : i * 3 < 2 ? h + (f - h) * (2 / 3 - i) * 6 : h
        }
        var e = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), q = /^([\-+])=\s*(\d+\.?\d*)/, E = [{re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse: function(f) {
            return [f[1], f[2], f[3], f[4]]
        }}, {re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse: function(f) {
            return [f[1] * 2.55, f[2] * 2.55, f[3] * 2.55, f[4]]
        }}, {re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse: function(f) {
            return [parseInt(f[1], 16), parseInt(f[2], 16), parseInt(f[3], 16)]
        }}, {re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,parse: function(f) {
            return [parseInt(f[1] + f[1], 16), parseInt(f[2] + f[2], 16), parseInt(f[3] + f[3], 16)]
        }}, {re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space: "hsla",parse: function(f) {
            return [f[1], f[2] / 100, f[3] / 100, f[4]]
        }}], j = D.Color = function(l, o, h, f) {
            return new D.Color.fn.parse(l, o, h, f)
        }, C = {rgba: {props: {red: {idx: 0,type: "byte"},green: {idx: 1,type: "byte"},blue: {idx: 2,type: "byte"}}},hsla: {props: {hue: {idx: 0,type: "degrees"},saturation: {idx: 1,type: "percent"},lightness: {idx: 2,type: "percent"}}}}, A = {"byte": {floor: !0,max: 255},percent: {max: 1},degrees: {mod: 360,floor: !0}}, x = j.support = {}, m = D("<p>")[0], z, w = D.each;
        m.style.cssText = "background-color:rgba(1,1,1,.5)", x.rgba = m.style.backgroundColor.indexOf("rgba") > -1, w(C, function(h, f) {
            f.cache = "_" + h, f.props.alpha = {idx: 3,type: "percent",def: 1}
        }), j.fn = D.extend(j.prototype, {parse: function(u, p, t, n) {
            if (u === k) {
                return this._rgba = [null, null, null, null], this
            }
            if (u.jquery || u.nodeType) {
                u = D(u).css(p), p = k
            }
            var F = this, h = D.type(u), o = this._rgba = [];
            p !== k && (u = [u, p, t, n], h = "array");
            if (h === "string") {
                return this.parse(y(u) || z._default)
            }
            if (h === "array") {
                return w(C.rgba.props, function(i, f) {
                    o[f.idx] = g(u[f.idx], f)
                }), this
            }
            if (h === "object") {
                return u instanceof j ? w(C, function(i, f) {
                    u[f.cache] && (F[f.cache] = u[f.cache].slice())
                }) : w(C, function(l, r) {
                    var f = r.cache;
                    w(r.props, function(s, i) {
                        if (!F[f] && r.to) {
                            if (s === "alpha" || u[s] == null) {
                                return
                            }
                            F[f] = r.to(F._rgba)
                        }
                        F[f][i.idx] = g(u[s], i, !0)
                    }), F[f] && c.inArray(null, F[f].slice(0, 3)) < 0 && (F[f][3] = 1, r.from && (F._rgba = r.from(F[f])))
                }), this
            }
        },is: function(i) {
            var f = j(i), l = !0, h = this;
            return w(C, function(r, n) {
                var p, t = f[n.cache];
                return t && (p = h[n.cache] || n.to && n.to(h._rgba) || [], w(n.props, function(s, o) {
                    if (t[o.idx] != null) {
                        return l = t[o.idx] === p[o.idx], l
                    }
                })), l
            }), l
        },_space: function() {
            var h = [], f = this;
            return w(C, function(l, i) {
                f[i.cache] && h.push(l)
            }), h.pop()
        },transition: function(G, p) {
            var H = j(G), v = H._space(), o = C[v], u = this.alpha() === 0 ? j("transparent") : this, F = u[o.cache] || o.to(u._rgba), h = F.slice();
            return H = H[o.cache], w(o.props, function(I, t) {
                var l = t.idx, n = F[l], J = H[l], f = A[t.type] || {};
                if (J === null) {
                    return
                }
                n === null ? h[l] = J : (f.mod && (J - n > f.mod / 2 ? n += f.mod : n - J > f.mod / 2 && (n -= f.mod)), h[l] = g((J - n) * p + n, t))
            }), this[v](h)
        },blend: function(l) {
            if (this._rgba[3] === 1) {
                return this
            }
            var o = this._rgba.slice(), h = o.pop(), f = j(l)._rgba;
            return j(D.map(o, function(n, i) {
                return (1 - h) * f[i] + h * n
            }))
        },toRgbaString: function() {
            var f = "rgba(", h = D.map(this._rgba, function(l, i) {
                return l == null ? i > 2 ? 1 : 0 : l
            });
            return h[3] === 1 && (h.pop(), f = "rgb("), f + h.join() + ")"
        },toHslaString: function() {
            var f = "hsla(", h = D.map(this.hsla(), function(l, i) {
                return l == null && (l = i > 2 ? 1 : 0), i && i < 3 && (l = Math.round(l * 100) + "%"), l
            });
            return h[3] === 1 && (h.pop(), f = "hsl("), f + h.join() + ")"
        },toHexString: function(h) {
            var i = this._rgba.slice(), f = i.pop();
            return h && i.push(~~(f * 255)), "#" + D.map(i, function(l) {
                return l = (l || 0).toString(16), l.length === 1 ? "0" + l : l
            }).join("")
        },toString: function() {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }}), j.fn.parse.prototype = j.fn, C.hsla.to = function(I) {
            if (I[0] == null || I[1] == null || I[2] == null) {
                return [null, null, null, I[3]]
            }
            var M = I[0] / 255, v = I[1] / 255, h = I[2] / 255, G = I[3], N = Math.max(M, v, h), p = Math.min(M, v, h), L = N - p, K = N + p, H = K * 0.5, F, J;
            return p === N ? F = 0 : M === N ? F = 60 * (v - h) / L + 360 : v === N ? F = 60 * (h - M) / L + 120 : F = 60 * (M - v) / L + 240, H === 0 || H === 1 ? J = H : H <= 0.5 ? J = L / K : J = L / (2 - K), [Math.round(F) % 360, J, H, G == null ? 1 : G]
        }, C.hsla.from = function(u) {
            if (u[0] == null || u[1] == null || u[2] == null) {
                return [null, null, null, u[3]]
            }
            var h = u[0] / 360, F = u[1], p = u[2], f = u[3], l = p <= 0.5 ? p * (1 + F) : p + F - p * F, v = 2 * p - l;
            return [Math.round(B(v, l, h + 1 / 3) * 255), Math.round(B(v, l, h) * 255), Math.round(B(v, l, h - 1 / 3) * 255), f]
        }, w(C, function(p, n) {
            var l = n.props, i = n.cache, h = n.to, o = n.from;
            j.fn[p] = function(u) {
                h && !this[i] && (this[i] = h(this._rgba));
                if (u === k) {
                    return this[i].slice()
                }
                var t, s = D.type(u), f = s === "array" || s === "object" ? u : arguments, v = this[i].slice();
                return w(l, function(F, r) {
                    var G = f[s === "object" ? F : r.idx];
                    G == null && (G = v[r.idx]), v[r.idx] = g(G, r)
                }), o ? (t = j(o(v)), t[i] = v, t) : j(v)
            }, w(l, function(s, f) {
                if (j.fn[s]) {
                    return
                }
                j.fn[s] = function(F) {
                    var H = D.type(F), v = s === "alpha" ? this._hsla ? "hsla" : "rgba" : p, t = this[v](), G = t[f.idx], r;
                    return H === "undefined" ? G : (H === "function" && (F = F.call(this, G), H = D.type(F)), F == null && f.empty ? this : (H === "string" && (r = q.exec(F), r && (F = G + parseFloat(r[2]) * (r[1] === "+" ? 1 : -1))), t[f.idx] = F, this[v](t)))
                }
            })
        }), w(e, function(f, h) {
            D.cssHooks[h] = {set: function(G, F) {
                var t, v, p = "";
                if (D.type(F) !== "string" || (t = y(F))) {
                    F = j(t || F);
                    if (!x.rgba && F._rgba[3] !== 1) {
                        v = h === "backgroundColor" ? G.parentNode : G;
                        while ((p === "" || p === "transparent") && v && v.style) {
                            try {
                                p = D.css(v, "backgroundColor"), v = v.parentNode
                            } catch (o) {
                            }
                        }
                        F = F.blend(p && p !== "transparent" ? p : "_default")
                    }
                    F = F.toRgbaString()
                }
                try {
                    G.style[h] = F
                } catch (n) {
                }
            }}, D.fx.step[h] = function(i) {
                i.colorInit || (i.start = j(i.elem, h), i.end = j(i.end), i.colorInit = !0), D.cssHooks[h].set(i.elem, i.start.transition(i.end, i.pos))
            }
        }), D.cssHooks.borderColor = {expand: function(h) {
            var f = {};
            return w(["Top", "Right", "Bottom", "Left"], function(l, i) {
                f["border" + i + "Color"] = h
            }), f
        }}, z = D.Color.names = {aqua: "#00ffff",black: "#000000",blue: "#0000ff",fuchsia: "#ff00ff",gray: "#808080",green: "#008000",lime: "#00ff00",maroon: "#800000",navy: "#000080",olive: "#808000",purple: "#800080",red: "#ff0000",silver: "#c0c0c0",teal: "#008080",white: "#ffffff",yellow: "#ffff00",transparent: [null, null, null, 0],_default: "#ffffff"}
    }(jQuery), function() {
        function e() {
            var k = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle, m = {}, l, j;
            if (k && k.length && k[0] && k[k[0]]) {
                j = k.length;
                while (j--) {
                    l = k[j], typeof k[l] == "string" && (m[c.camelCase(l)] = k[l])
                }
            } else {
                for (l in k) {
                    typeof k[l] == "string" && (m[l] = k[l])
                }
            }
            return m
        }
        function f(k, p) {
            var j = {}, l, m;
            for (l in p) {
                m = p[l], k[l] !== m && !g[l] && (c.fx.step[l] || !isNaN(parseFloat(m))) && (j[l] = m)
            }
            return j
        }
        var h = ["add", "remove", "toggle"], g = {border: 1,borderBottom: 1,borderColor: 1,borderLeft: 1,borderRight: 1,borderTop: 1,borderWidth: 1,margin: 1,padding: 1};
        c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(i, j) {
            c.fx.step[j] = function(k) {
                if (k.end !== "none" && !k.setAttr || k.pos === 1 && !k.setAttr) {
                    jQuery.style(k.elem, j, k.end), k.setAttr = !0
                }
            }
        }), c.effects.animateClass = function(k, l, m, j) {
            var i = c.speed(l, m, j);
            return this.queue(function() {
                var p = c(this), s = p.attr("class") || "", n, q = i.children ? p.find("*").andSelf() : p;
                q = q.map(function() {
                    var o = c(this);
                    return {el: o,start: e.call(this)}
                }), n = function() {
                    c.each(h, function(o, r) {
                        k[r] && p[r + "Class"](k[r])
                    })
			}, n(), q = q.map(function() {
			    return this.end = e.call(this.el[0]), this.diff = f(this.start, this.end), this
			}), p.attr("class", s), q = q.map(function() {
			    var o = this, v = c.Deferred(), u = jQuery.extend({}, i, {queue: !1,complete: function() {
				v.resolve(o)
                            }});
			    return this.el.animate(this.diff, u), v.promise()
			}), c.when.apply(c, q.get()).done(function() {
			    n(), c.each(arguments, function() {
				var o = this.el;
				c.each(this.diff, function(r) {
				    o.css(r, "")
				})
				    }), i.complete.call(p[0])
			})
            })
        }, c.fn.extend({_addClass: c.fn.addClass,addClass: function(k, m, l, j) {
            return m ? c.effects.animateClass.call(this, {add: k}, m, l, j) : this._addClass(k)
        },_removeClass: c.fn.removeClass,removeClass: function(k, m, l, j) {
            return m ? c.effects.animateClass.call(this, {remove: k}, m, l, j) : this._removeClass(k)
        },_toggleClass: c.fn.toggleClass,toggleClass: function(p, l, j, k, m) {
            return typeof l == "boolean" || l === a ? j ? c.effects.animateClass.call(this, l ? {add: p} : {remove: p}, j, k, m) : this._toggleClass(p, l) : c.effects.animateClass.call(this, {toggle: p}, l, j, k)
        },switchClass: function(k, o, m, j, l) {
            return c.effects.animateClass.call(this, {add: o,remove: k}, m, j, l)
        }})
    }(), function() {
        function e(h, k, j, g) {
            c.isPlainObject(h) && (k = h, h = h.effect), h = {effect: h}, k == null && (k = {}), c.isFunction(k) && (g = k, j = null, k = {});
            if (typeof k == "number" || c.fx.speeds[k]) {
                g = j, j = k, k = {}
            }
            return c.isFunction(j) && (g = j, j = null), k && c.extend(h, k), j = j || k.duration, h.duration = c.fx.off ? 0 : typeof j == "number" ? j : j in c.fx.speeds ? c.fx.speeds[j] : c.fx.speeds._default, h.complete = g || k.complete, h
        }
        function f(g) {
            return !g || typeof g == "number" || c.fx.speeds[g] ? !0 : typeof g == "string" && !c.effects.effect[g] ? d && c.effects[g] ? !1 : !0 : !1
        }
        c.extend(c.effects, {version: "1.9.2",save: function(h, g) {
            for (var i = 0; i < g.length; i++) {
                g[i] !== null && h.data(b + g[i], h[0].style[g[i]])
            }
        },restore: function(j, k) {
            var g, h;
            for (h = 0; h < k.length; h++) {
                k[h] !== null && (g = j.data(b + k[h]), g === a && (g = ""), j.css(k[h], g))
            }
        },setMode: function(h, g) {
            return g === "toggle" && (g = h.is(":hidden") ? "show" : "hide"), g
        },getBaseline: function(i, g) {
            var j, h;
            switch (i[0]) {
            case "top":
                j = 0;
                break;
            case "middle":
                j = 0.5;
                break;
            case "bottom":
                j = 1;
                break;
            default:
                j = i[0] / g.height
            }
            switch (i[1]) {
            case "left":
                h = 0;
                break;
            case "center":
                h = 0.5;
                break;
            case "right":
                h = 1;
                break;
            default:
                h = i[1] / g.width
            }
            return {x: h,y: j}
        },createWrapper: function(h) {
            if (h.parent().is(".ui-effects-wrapper")) {
                return h.parent()
            }
            var m = {width: h.outerWidth(!0),height: h.outerHeight(!0),"float": h.css("float")}, k = c("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%",background: "transparent",border: "none",margin: 0,padding: 0}), g = {width: h.width(),height: h.height()}, j = document.activeElement;
            try {
                j.id
            } catch (l) {
                j = document.body
            }
            return h.wrap(k), (h[0] === j || c.contains(h[0], j)) && c(j).focus(), k = h.parent(), h.css("position") === "static" ? (k.css({position: "relative"}), h.css({position: "relative"})) : (c.extend(m, {position: h.css("position"),zIndex: h.css("z-index")}), c.each(["top", "left", "bottom", "right"], function(n, i) {
                m[i] = h.css(i), isNaN(parseInt(m[i], 10)) && (m[i] = "auto")
            }), h.css({position: "relative",top: 0,left: 0,right: "auto",bottom: "auto"})), h.css(g), k.css(m).show()
        },removeWrapper: function(g) {
            var h = document.activeElement;
            return g.parent().is(".ui-effects-wrapper") && (g.parent().replaceWith(g), (g[0] === h || c.contains(g[0], h)) && c(h).focus()), g
        },setTransition: function(h, k, j, g) {
            return g = g || {}, c.each(k, function(l, m) {
                var i = h.cssUnit(m);
                i[0] > 0 && (g[m] = i[0] * j + i[1])
            }), g
        }}), c.fn.extend({effect: function() {
            function g(t) {
                function m() {
                    c.isFunction(o) && o.call(q[0]), c.isFunction(t) && t()
                }
                var q = c(this), o = i.complete, p = i.mode;
                (q.is(":hidden") ? p === "hide" : p === "show") ? m() : l.call(q[0], i, m)
            }
            var i = e.apply(this, arguments), k = i.mode, j = i.queue, l = c.effects.effect[i.effect], h = !l && d && c.effects[i.effect];
            return c.fx.off || !l && !h ? k ? this[k](i.duration, i.complete) : this.each(function() {
                i.complete && i.complete.call(this)
            }) : l ? j === !1 ? this.each(g) : this.queue(j || "fx", g) : h.call(this, {options: i,duration: i.duration,callback: i.complete,mode: i.mode})
        },_show: c.fn.show,show: function(h) {
            if (f(h)) {
                return this._show.apply(this, arguments)
            }
            var g = e.apply(this, arguments);
            return g.mode = "show", this.effect.call(this, g)
        },_hide: c.fn.hide,hide: function(h) {
            if (f(h)) {
                return this._hide.apply(this, arguments)
            }
            var g = e.apply(this, arguments);
            return g.mode = "hide", this.effect.call(this, g)
        },__toggle: c.fn.toggle,toggle: function(g) {
            if (f(g) || typeof g == "boolean" || c.isFunction(g)) {
                return this.__toggle.apply(this, arguments)
            }
            var h = e.apply(this, arguments);
            return h.mode = "toggle", this.effect.call(this, h)
        },cssUnit: function(g) {
            var i = this.css(g), h = [];
            return c.each(["em", "px", "%", "pt"], function(k, j) {
                i.indexOf(j) > 0 && (h = [parseFloat(i), j])
            }), h
        }})
    }(), function() {
        var e = {};
        c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(f, g) {
            e[g] = function(h) {
                return Math.pow(h, f + 2)
            }
        }), c.extend(e, {Sine: function(f) {
            return 1 - Math.cos(f * Math.PI / 2)
        },Circ: function(f) {
            return 1 - Math.sqrt(1 - f * f)
        },Elastic: function(f) {
            return f === 0 || f === 1 ? f : -Math.pow(2, 8 * (f - 1)) * Math.sin(((f - 1) * 80 - 7.5) * Math.PI / 15)
        },Back: function(f) {
            return f * f * (3 * f - 2)
        },Bounce: function(g) {
            var f, h = 4;
            while (g < ((f = Math.pow(2, --h)) - 1) / 11) {
            }
            return 1 / Math.pow(4, 3 - h) - 7.5625 * Math.pow((f * 3 - 2) / 22 - g, 2)
        }}), c.each(e, function(f, g) {
            c.easing["easeIn" + f] = g, c.easing["easeOut" + f] = function(h) {
                return 1 - g(1 - h)
            }, c.easing["easeInOut" + f] = function(h) {
                return h < 0.5 ? g(h * 2) / 2 : 1 - g(h * -2 + 2) / 2
            }
        })
	    }()
}(jQuery);
(function(c, a) {
    var d = /up|down|vertical/, b = /up|left|vertical|horizontal/;
    c.effects.effect.blind = function(D, q) {
        var E = c(this), j = ["position", "top", "bottom", "left", "right", "height", "width"], C = c.effects.setMode(E, D.mode || "hide"), A = D.direction || "up", x = d.test(A), n = x ? "height" : "width", z = x ? "top" : "left", r = b.test(A), e = {}, y = C === "show", B, k, w;
        E.parent().is(".ui-effects-wrapper") ? c.effects.save(E.parent(), j) : c.effects.save(E, j), E.show(), B = c.effects.createWrapper(E).css({overflow: "hidden"}), k = B[n](), w = parseFloat(B.css(z)) || 0, e[n] = y ? k : 0, r || (E.css(x ? "bottom" : "right", 0).css(x ? "top" : "left", "auto").css({position: "absolute"}), e[z] = y ? w : k + w), y && (B.css(n, 0), r || B.css(z, w + k)), B.animate(e, {duration: D.duration,easing: D.easing,queue: !1,complete: function() {
            C === "hide" && E.hide(), c.effects.restore(E, j), c.effects.removeWrapper(E), q()
        }})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.bounce = function(x, D) {
        var A = b(this), G = ["position", "top", "bottom", "left", "right", "height", "width"], z = b.effects.setMode(A, x.mode || "effect"), C = z === "hide", q = z === "show", N = x.direction || "up", J = x.distance, F = x.times || 5, L = F * 2 + (q || C ? 1 : 0), H = x.duration / L, B = x.easing, K = N === "up" || N === "down" ? "top" : "left", k = N === "up" || N === "left", E, I, e, M = A.queue(), j = M.length;
        (q || C) && G.push("opacity"), b.effects.save(A, G), A.show(), b.effects.createWrapper(A), J || (J = A[K === "top" ? "outerHeight" : "outerWidth"]() / 3), q && (e = {opacity: 1}, e[K] = 0, A.css("opacity", 0).css(K, k ? -J * 2 : J * 2).animate(e, H, B)), C && (J /= Math.pow(2, F - 1)), e = {}, e[K] = 0;
        for (E = 0; E < F; E++) {
            I = {}, I[K] = (k ? "-=" : "+=") + J, A.animate(I, H, B).animate(e, H, B), J = C ? J * 2 : J / 2
        }
        C && (I = {opacity: 0}, I[K] = (k ? "-=" : "+=") + J, A.animate(I, H, B)), A.queue(function() {
            C && A.hide(), b.effects.restore(A, G), b.effects.removeWrapper(A), D()
        }), j > 1 && M.splice.apply(M, [1, 0].concat(M.splice(j, L + 1))), A.dequeue()
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.clip = function(B, k) {
        var e = b(this), q = ["position", "top", "bottom", "left", "right", "height", "width"], C = b.effects.setMode(e, B.mode || "hide"), j = C === "show", A = B.direction || "vertical", z = A === "vertical", w = z ? "height" : "width", m = z ? "top" : "left", y = {}, v, g, x;
        b.effects.save(e, q), e.show(), v = b.effects.createWrapper(e).css({overflow: "hidden"}), g = e[0].tagName === "IMG" ? v : e, x = g[w](), j && (g.css(w, 0), g.css(m, x / 2)), y[w] = j ? x : 0, y[m] = j ? 0 : x / 2, g.animate(y, {queue: !1,duration: B.duration,easing: B.easing,complete: function() {
            j || e.hide(), b.effects.restore(e, q), b.effects.removeWrapper(e), k()
        }})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.drop = function(v, g) {
        var d = b(this), j = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], w = b.effects.setMode(d, v.mode || "hide"), e = w === "show", q = v.direction || "left", p = q === "up" || q === "down" ? "top" : "left", k = q === "up" || q === "left" ? "pos" : "neg", h = {opacity: e ? 1 : 0}, m;
        b.effects.save(d, j), d.show(), b.effects.createWrapper(d), m = v.distance || d[p === "top" ? "outerHeight" : "outerWidth"](!0) / 2, e && d.css("opacity", 0).css(p, k === "pos" ? -m : m), h[p] = (e ? k === "pos" ? "+=" : "-=" : k === "pos" ? "-=" : "+=") + m, d.animate(h, {queue: !1,duration: v.duration,easing: v.easing,complete: function() {
            w === "hide" && d.hide(), b.effects.restore(d, j), b.effects.removeWrapper(d), g()
        }})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.explode = function(q, B) {
        function e() {
            J.push(this), J.length === x * E && K()
        }
        function K() {
            w.css({visibility: "visible"}), b(J).remove(), k || w.hide(), B()
        }
        var x = q.pieces ? Math.round(Math.sqrt(q.pieces)) : 3, E = x, w = b(this), A = b.effects.setMode(w, q.mode || "hide"), k = A === "show", L = w.show().css("visibility", "hidden").offset(), H = Math.ceil(w.outerWidth() / E), D = Math.ceil(w.outerHeight() / x), J = [], F, z, I, j, C, G;
        for (F = 0; F < x; F++) {
            j = L.top + F * D, G = F - (x - 1) / 2;
            for (z = 0; z < E; z++) {
                I = L.left + z * H, C = z - (E - 1) / 2, w.clone().appendTo("body").wrap("<div></div>").css({position: "absolute",visibility: "visible",left: -z * H,top: -F * D}).parent().addClass("ui-effects-explode").css({position: "absolute",overflow: "hidden",width: H,height: D,left: I + (k ? C * H : 0),top: j + (k ? G * D : 0),opacity: k ? 0 : 1}).animate({left: I + (k ? 0 : C * H),top: j + (k ? 0 : G * D),opacity: k ? 1 : 0}, q.duration || 500, q.easing, e)
            }
        }
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.fade = function(d, f) {
        var e = b(this), c = b.effects.setMode(e, d.mode || "toggle");
        e.animate({opacity: c}, {queue: !1,duration: d.duration,easing: d.easing,complete: f})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.fold = function(H, q) {
        var e = b(this), y = ["position", "top", "bottom", "left", "right", "height", "width"], I = b.effects.setMode(e, H.mode || "hide"), k = I === "show", G = I === "hide", E = H.size || 15, B = /([0-9]+)%/.exec(E), x = !!H.horizFirst, D = k !== x, z = D ? ["width", "height"] : ["height", "width"], j = H.duration / 2, C, F, w = {}, A = {};
        b.effects.save(e, y), e.show(), C = b.effects.createWrapper(e).css({overflow: "hidden"}), F = D ? [C.width(), C.height()] : [C.height(), C.width()], B && (E = parseInt(B[1], 10) / 100 * F[G ? 0 : 1]), k && C.css(x ? {height: 0,width: E} : {height: E,width: 0}), w[z[0]] = k ? F[0] : E, A[z[1]] = k ? F[1] : 0, C.animate(w, j, H.easing).animate(A, j, H.easing, function() {
            G && e.hide(), b.effects.restore(e, y), b.effects.removeWrapper(e), q()
        })
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.highlight = function(d, h) {
        var f = b(this), c = ["backgroundImage", "backgroundColor", "opacity"], e = b.effects.setMode(f, d.mode || "show"), g = {backgroundColor: f.css("backgroundColor")};
        e === "hide" && (g.opacity = 0), b.effects.save(f, c), f.show().css({backgroundImage: "none",backgroundColor: d.color || "#ffff99"}).animate(g, {queue: !1,duration: d.duration,easing: d.easing,complete: function() {
            e === "hide" && f.hide(), b.effects.restore(f, c), h()
        }})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.pulsate = function(z, j) {
        var d = b(this), m = b.effects.setMode(d, z.mode || "show"), A = m === "show", g = m === "hide", y = A || m === "hide", x = (z.times || 5) * 2 + (y ? 1 : 0), v = z.duration / x, k = 0, w = d.queue(), q = w.length, e;
        if (A || !d.is(":visible")) {
            d.css("opacity", 0).show(), k = 1
        }
        for (e = 1; e < x; e++) {
            d.animate({opacity: k}, v, z.easing), k = 1 - k
        }
        d.animate({opacity: k}, v, z.easing), d.queue(function() {
            g && d.hide(), j()
        }), q > 1 && w.splice.apply(w, [1, 0].concat(w.splice(q, x + 1))), d.dequeue()
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.puff = function(f, k) {
        var h = b(this), e = b.effects.setMode(h, f.mode || "hide"), g = e === "hide", j = parseInt(f.percent, 10) || 150, d = j / 100, c = {height: h.height(),width: h.width(),outerHeight: h.outerHeight(),outerWidth: h.outerWidth()};
        b.extend(f, {effect: "scale",queue: !1,fade: !0,mode: e,complete: k,percent: g ? j : 100,from: g ? c : {height: c.height * d,width: c.width * d,outerHeight: c.outerHeight * d,outerWidth: c.outerWidth * d}}), h.effect(f)
    }, b.effects.effect.scale = function(p, e) {
        var c = b(this), h = b.extend(!0, {}, p), q = b.effects.setMode(c, p.mode || "effect"), d = parseInt(p.percent, 10) || (parseInt(p.percent, 10) === 0 ? 0 : q === "hide" ? 0 : 100), m = p.direction || "both", k = p.origin, j = {height: c.height(),width: c.width(),outerHeight: c.outerHeight(),outerWidth: c.outerWidth()}, g = {y: m !== "horizontal" ? d / 100 : 1,x: m !== "vertical" ? d / 100 : 1};
        h.effect = "size", h.queue = !1, h.complete = e, q !== "effect" && (h.origin = k || ["middle", "center"], h.restore = !0), h.from = p.from || (q === "show" ? {height: 0,width: 0,outerHeight: 0,outerWidth: 0} : j), h.to = {height: j.height * g.y,width: j.width * g.x,outerHeight: j.outerHeight * g.y,outerWidth: j.outerWidth * g.x}, h.fade && (q === "show" && (h.from.opacity = 0, h.to.opacity = 1), q === "hide" && (h.from.opacity = 1, h.to.opacity = 0)), c.effect(h)
    }, b.effects.effect.size = function(q, B) {
        var x, E, w, A = b(this), k = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], L = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], H = ["width", "height", "overflow"], D = ["fontSize"], J = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], F = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], z = b.effects.setMode(A, q.mode || "effect"), I = q.restore || z !== "effect", j = q.scale || "both", C = q.origin || ["middle", "center"], G = A.css("position"), e = I ? k : L, K = {height: 0,width: 0,outerHeight: 0,outerWidth: 0};
        z === "show" && A.show(), x = {height: A.height(),width: A.width(),outerHeight: A.outerHeight(),outerWidth: A.outerWidth()}, q.mode === "toggle" && z === "show" ? (A.from = q.to || K, A.to = q.from || x) : (A.from = q.from || (z === "show" ? K : x), A.to = q.to || (z === "hide" ? K : x)), w = {from: {y: A.from.height / x.height,x: A.from.width / x.width},to: {y: A.to.height / x.height,x: A.to.width / x.width}};
        if (j === "box" || j === "both") {
            w.from.y !== w.to.y && (e = e.concat(J), A.from = b.effects.setTransition(A, J, w.from.y, A.from), A.to = b.effects.setTransition(A, J, w.to.y, A.to)), w.from.x !== w.to.x && (e = e.concat(F), A.from = b.effects.setTransition(A, F, w.from.x, A.from), A.to = b.effects.setTransition(A, F, w.to.x, A.to))
        }
        (j === "content" || j === "both") && w.from.y !== w.to.y && (e = e.concat(D).concat(H), A.from = b.effects.setTransition(A, D, w.from.y, A.from), A.to = b.effects.setTransition(A, D, w.to.y, A.to)), b.effects.save(A, e), A.show(), b.effects.createWrapper(A), A.css("overflow", "hidden").css(A.from), C && (E = b.effects.getBaseline(C, x), A.from.top = (x.outerHeight - A.outerHeight()) * E.y, A.from.left = (x.outerWidth - A.outerWidth()) * E.x, A.to.top = (x.outerHeight - A.to.outerHeight) * E.y, A.to.left = (x.outerWidth - A.to.outerWidth) * E.x), A.css(A.from);
        if (j === "content" || j === "both") {
            J = J.concat(["marginTop", "marginBottom"]).concat(D), F = F.concat(["marginLeft", "marginRight"]), H = k.concat(J).concat(F), A.find("*[width]").each(function() {
                var d = b(this), c = {height: d.height(),width: d.width(),outerHeight: d.outerHeight(),outerWidth: d.outerWidth()};
                I && b.effects.save(d, H), d.from = {height: c.height * w.from.y,width: c.width * w.from.x,outerHeight: c.outerHeight * w.from.y,outerWidth: c.outerWidth * w.from.x}, d.to = {height: c.height * w.to.y,width: c.width * w.to.x,outerHeight: c.height * w.to.y,outerWidth: c.width * w.to.x}, w.from.y !== w.to.y && (d.from = b.effects.setTransition(d, J, w.from.y, d.from), d.to = b.effects.setTransition(d, J, w.to.y, d.to)), w.from.x !== w.to.x && (d.from = b.effects.setTransition(d, F, w.from.x, d.from), d.to = b.effects.setTransition(d, F, w.to.x, d.to)), d.css(d.from), d.animate(d.to, q.duration, q.easing, function() {
                    I && b.effects.restore(d, H)
                })
            })
		}
        A.animate(A.to, {queue: !1,duration: q.duration,easing: q.easing,complete: function() {
            A.to.opacity === 0 && A.css("opacity", A.from.opacity), z === "hide" && A.hide(), b.effects.restore(A, e), I || (G === "static" ? A.css({position: "relative",top: A.to.top,left: A.to.left}) : b.each(["top", "left"], function(d, c) {
                A.css(c, function(g, l) {
                    var h = parseInt(l, 10), f = d ? A.to.left : A.to.top;
                    return l === "auto" ? f + "px" : h + f + "px"
                })
            })), b.effects.removeWrapper(A), B()
        }})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.shake = function(q, B) {
        var x = b(this), E = ["position", "top", "bottom", "left", "right", "height", "width"], w = b.effects.setMode(x, q.mode || "effect"), A = q.direction || "left", k = q.distance || 20, K = q.times || 3, H = K * 2 + 1, D = Math.round(q.duration / H), J = A === "up" || A === "down" ? "top" : "left", F = A === "up" || A === "left", z = {}, I = {}, j = {}, C, G = x.queue(), e = G.length;
        b.effects.save(x, E), x.show(), b.effects.createWrapper(x), z[J] = (F ? "-=" : "+=") + k, I[J] = (F ? "+=" : "-=") + k * 2, j[J] = (F ? "-=" : "+=") + k * 2, x.animate(z, D, q.easing);
        for (C = 1; C < K; C++) {
            x.animate(I, D, q.easing).animate(j, D, q.easing)
        }
        x.animate(I, D, q.easing).animate(z, D / 2, q.easing).queue(function() {
            w === "hide" && x.hide(), b.effects.restore(x, E), b.effects.removeWrapper(x), B()
        }), e > 1 && G.splice.apply(G, [1, 0].concat(G.splice(e, H + 1))), x.dequeue()
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.slide = function(v, g) {
        var d = b(this), j = ["position", "top", "bottom", "left", "right", "width", "height"], w = b.effects.setMode(d, v.mode || "show"), e = w === "show", q = v.direction || "left", p = q === "up" || q === "down" ? "top" : "left", k = q === "up" || q === "left", h, m = {};
        b.effects.save(d, j), d.show(), h = v.distance || d[p === "top" ? "outerHeight" : "outerWidth"](!0), b.effects.createWrapper(d).css({overflow: "hidden"}), e && d.css(p, k ? isNaN(h) ? "-" + h : -h : h), m[p] = (e ? k ? "+=" : "-=" : k ? "-=" : "+=") + h, d.animate(m, {queue: !1,duration: v.duration,easing: v.easing,complete: function() {
            w === "hide" && d.hide(), b.effects.restore(d, j), b.effects.removeWrapper(d), g()
        }})
    }
})(jQuery);
(function(b, a) {
    b.effects.effect.transfer = function(x, g) {
        var d = b(this), k = b(x.to), y = k.css("position") === "fixed", e = b("body"), w = y ? e.scrollTop() : 0, v = y ? e.scrollLeft() : 0, p = k.offset(), j = {top: p.top - w,left: p.left - v,height: k.innerHeight(),width: k.innerWidth()}, q = d.offset(), m = b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(x.className).css({top: q.top - w,left: q.left - v,height: d.innerHeight(),width: d.innerWidth(),position: y ? "fixed" : "absolute"}).animate(j, x.duration, x.easing, function() {
            m.remove(), g()
        })
    }
})(jQuery);
!function(a) {
    a(function() {
        a.support.transition = (function() {
            var b = (function() {
                var e = document.createElement("bootstrap"), d = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"}, c;
                for (c in d) {
                    if (e.style[c] !== undefined) {
                        return d[c]
                    }
                }
            }());
            return b && {end: b}
        })()
    })
}(window.jQuery);
!function(d) {
    var c = '[data-dismiss="alert"]', b = function(e) {
        d(e).on("click", c, this.close)
    };
    b.prototype.close = function(j) {
        var i = d(this), g = i.attr("data-target"), h;
        if (!g) {
            g = i.attr("href");
            g = g && g.replace(/.*(?=#[^\s]*$)/, "")
        }
        h = d(g);
        j && j.preventDefault();
        h.length || (h = i.hasClass("alert") ? i : i.parent());
        h.trigger(j = d.Event("close"));
        if (j.isDefaultPrevented()) {
            return
        }
        h.removeClass("in");
        function f() {
            h.trigger("closed").remove()
        }
        d.support.transition && h.hasClass("fade") ? h.on(d.support.transition.end, f) : f()
    };
    var a = d.fn.alert;
    d.fn.alert = function(e) {
        return this.each(function() {
            var g = d(this), f = g.data("alert");
            if (!f) {
                g.data("alert", (f = new b(this)))
            }
            if (typeof e == "string") {
                f[e].call(g)
            }
        })
	    };
    d.fn.alert.Constructor = b;
    d.fn.alert.noConflict = function() {
        d.fn.alert = a;
        return this
    };
    d(document).on("click.alert.data-api", c, b.prototype.close)
}(window.jQuery);
!function(c) {
    var b = function(e, d) {
        this.$element = c(e);
        this.options = c.extend({}, c.fn.button.defaults, d)
    };
    b.prototype.setState = function(g) {
        var i = "disabled", e = this.$element, f = e.data(), h = e.is("input") ? "val" : "html";
        g = g + "Text";
        f.resetText || e.data("resetText", e[h]());
        e[h](f[g] || this.options[g]);
        setTimeout(function() {
            g == "loadingText" ? e.addClass(i).attr(i, i) : e.removeClass(i).removeAttr(i)
        }, 0)
    };
    b.prototype.toggle = function() {
        var d = this.$element.closest('[data-toggle="buttons-radio"]');
        d && d.find(".active").removeClass("active");
        this.$element.toggleClass("active")
    };
    var a = c.fn.button;
    c.fn.button = function(d) {
        return this.each(function() {
            var g = c(this), f = g.data("button"), e = typeof d == "object" && d;
            if (!f) {
                g.data("button", (f = new b(this, e)))
            }
            if (d == "toggle") {
                f.toggle()
            } else {
                if (d) {
                    f.setState(d)
                }
            }
        })
	    };
    c.fn.button.defaults = {loadingText: "loading..."};
    c.fn.button.Constructor = b;
    c.fn.button.noConflict = function() {
        c.fn.button = a;
        return this
    };
    c(document).on("click.button.data-api", "[data-toggle^=button]", function(f) {
        var d = c(f.target);
        if (!d.hasClass("btn")) {
            d = d.closest(".btn")
        }
        d.button("toggle")
    })
}(window.jQuery);
!function(b) {
    var c = function(e, d) {
        this.$element = b(e);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = d;
        this.options.pause == "hover" && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this))
    };
    c.prototype = {cycle: function(d) {
        if (!d) {
            this.paused = false
        }
        if (this.interval) {
            clearInterval(this.interval)
        }
        this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval));
        return this
    },getActiveIndex: function() {
        this.$active = this.$element.find(".item.active");
        this.$items = this.$active.parent().children();
        return this.$items.index(this.$active)
    },to: function(f) {
        var d = this.getActiveIndex(), e = this;
        if (f > (this.$items.length - 1) || f < 0) {
            return
        }
        if (this.sliding) {
            return this.$element.one("slid", function() {
                e.to(f)
            })
        }
        if (d == f) {
            return this.pause().cycle()
        }
        return this.slide(f > d ? "next" : "prev", b(this.$items[f]))
    },pause: function(d) {
        if (!d) {
            this.paused = true
        }
        if (this.$element.find(".next, .prev").length && b.support.transition.end) {
            this.$element.trigger(b.support.transition.end);
            this.cycle(true)
        }
        clearInterval(this.interval);
        this.interval = null;
        return this
    },next: function() {
        if (this.sliding) {
            return
        }
        return this.slide("next")
    },prev: function() {
        if (this.sliding) {
            return
        }
        return this.slide("prev")
    },slide: function(k, f) {
        var m = this.$element.find(".item.active"), d = f || m[k](), j = this.interval, l = k == "next" ? "left" : "right", g = k == "next" ? "first" : "last", h = this, i;
        this.sliding = true;
        j && this.pause();
        d = d.length ? d : this.$element.find(".item")[g]();
        i = b.Event("slide", {relatedTarget: d[0],direction: l});
        if (d.hasClass("active")) {
            return
        }
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            this.$element.one("slid", function() {
                var e = b(h.$indicators.children()[h.getActiveIndex()]);
                e && e.addClass("active")
            })
        }
        if (b.support.transition && this.$element.hasClass("slide")) {
            this.$element.trigger(i);
            if (i.isDefaultPrevented()) {
                return
            }
            d.addClass(k);
            d[0].offsetWidth;
            m.addClass(l);
            d.addClass(l);
            this.$element.one(b.support.transition.end, function() {
                d.removeClass([k, l].join(" ")).addClass("active");
                m.removeClass(["active", l].join(" "));
                h.sliding = false;
                setTimeout(function() {
                    h.$element.trigger("slid")
                }, 0)
            })
        } else {
            this.$element.trigger(i);
            if (i.isDefaultPrevented()) {
                return
            }
            m.removeClass("active");
            d.addClass("active");
            this.sliding = false;
            this.$element.trigger("slid")
        }
        j && this.cycle();
        return this
    }};
    var a = b.fn.carousel;
    b.fn.carousel = function(d) {
        return this.each(function() {
            var h = b(this), g = h.data("carousel"), e = b.extend({}, b.fn.carousel.defaults, typeof d == "object" && d), f = typeof d == "string" ? d : e.slide;
            if (!g) {
                h.data("carousel", (g = new c(this, e)))
            }
            if (typeof d == "number") {
                g.to(d)
            } else {
                if (f) {
                    g[f]()
                } else {
                    if (e.interval) {
                        g.pause().cycle()
                    }
                }
            }
        })
	    };
    b.fn.carousel.defaults = {interval: 5000,pause: "hover"};
    b.fn.carousel.Constructor = c;
    b.fn.carousel.noConflict = function() {
        b.fn.carousel = a;
        return this
    };
    b(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(j) {
        var i = b(this), f, d = b(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")), g = b.extend({}, d.data(), i.data()), h;
        d.carousel(g);
        if (h = i.attr("data-slide-to")) {
            d.data("carousel").pause().to(h).cycle()
        }
        j.preventDefault()
    })
}(window.jQuery);
!function(b) {
    var c = function(e, d) {
        this.$element = b(e);
        this.options = b.extend({}, b.fn.collapse.defaults, d);
        if (this.options.parent) {
            this.$parent = b(this.options.parent)
        }
        this.options.toggle && this.toggle()
    };
    c.prototype = {constructor: c,dimension: function() {
        var d = this.$element.hasClass("width");
        return d ? "width" : "height"
    },show: function() {
        var g, d, f, e;
        if (this.transitioning || this.$element.hasClass("in")) {
            return
        }
        g = this.dimension();
        d = b.camelCase(["scroll", g].join("-"));
        f = this.$parent && this.$parent.find("> .accordion-group > .in");
        if (f && f.length) {
            e = f.data("collapse");
            if (e && e.transitioning) {
                return
            }
            f.collapse("hide");
            e || f.data("collapse", null)
        }
        this.$element[g](0);
        this.transition("addClass", b.Event("show"), "shown");
        b.support.transition && this.$element[g](this.$element[0][d])
    },hide: function() {
        var d;
        if (this.transitioning || !this.$element.hasClass("in")) {
            return
        }
        d = this.dimension();
        this.reset(this.$element[d]());
        this.transition("removeClass", b.Event("hide"), "hidden");
        this.$element[d](0)
    },reset: function(d) {
        var e = this.dimension();
        this.$element.removeClass("collapse")[e](d || "auto")[0].offsetWidth;
        this.$element[d !== null ? "addClass" : "removeClass"]("collapse");
        return this
    },transition: function(h, e, f) {
        var g = this, d = function() {
            if (e.type == "show") {
                g.reset()
            }
            g.transitioning = 0;
            g.$element.trigger(f)
        };
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) {
            return
        }
        this.transitioning = 1;
        this.$element[h]("in");
        b.support.transition && this.$element.hasClass("collapse") ? this.$element.one(b.support.transition.end, d) : d()
    },toggle: function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }};
    var a = b.fn.collapse;
    b.fn.collapse = function(d) {
        return this.each(function() {
            var g = b(this), f = g.data("collapse"), e = b.extend({}, b.fn.collapse.defaults, g.data(), typeof d == "object" && d);
            if (!f) {
                g.data("collapse", (f = new c(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
	    };
    b.fn.collapse.defaults = {toggle: true};
    b.fn.collapse.Constructor = c;
    b.fn.collapse.noConflict = function() {
        b.fn.collapse = a;
        return this
    };
    b(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(i) {
        var h = b(this), d, g = h.attr("data-target") || i.preventDefault() || (d = h.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""), f = b(g).data("collapse") ? "toggle" : h.data();
        h[b(g).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
        b(g).collapse(f)
    })
}(window.jQuery);
!function(f) {
    var b = "[data-toggle=dropdown]", a = function(h) {
        var g = f(h).on("click.dropdown.data-api", this.toggle);
        f("html").on("click.dropdown.data-api", function() {
            g.parent().removeClass("open")
        })
    };
    a.prototype = {constructor: a,toggle: function(j) {
        var i = f(this), h, g;
        if (i.is(".disabled, :disabled")) {
            return
        }
        h = e(i);
        g = h.hasClass("open");
        d();
        if (!g) {
            if ("ontouchstart" in document.documentElement) {
                f('<div class="dropdown-backdrop"/>').insertBefore(f(this)).on("click", d)
            }
            h.toggleClass("open")
        }
        i.focus();
        return false
    },keydown: function(l) {
        var k, m, g, j, i, h;
        if (!/(38|40|27)/.test(l.keyCode)) {
            return
        }
        k = f(this);
        l.preventDefault();
        l.stopPropagation();
        if (k.is(".disabled, :disabled")) {
            return
        }
        j = e(k);
        i = j.hasClass("open");
        if (!i || (i && l.keyCode == 27)) {
            if (l.which == 27) {
                j.find(b).focus()
            }
            return k.click()
        }
        m = f("[role=menu] li:not(.divider):visible a", j);
        if (!m.length) {
            return
        }
        h = m.index(m.filter(":focus"));
        if (l.keyCode == 38 && h > 0) {
            h--
        }
        if (l.keyCode == 40 && h < m.length - 1) {
            h++
        }
        if (!~h) {
            h = 0
        }
        m.eq(h).focus()
    }};
    function d() {
        f(".dropdown-backdrop").remove();
        f(b).each(function() {
            e(f(this)).removeClass("open")
        })
	    }
    function e(i) {
        var g = i.attr("data-target"), h;
        if (!g) {
            g = i.attr("href");
            g = g && /#/.test(g) && g.replace(/.*(?=#[^\s]*$)/, "")
        }
        h = g && f(g);
        if (!h || !h.length) {
            h = i.parent()
        }
        return h
    }
    var c = f.fn.dropdown;
    f.fn.dropdown = function(g) {
        return this.each(function() {
            var i = f(this), h = i.data("dropdown");
            if (!h) {
                i.data("dropdown", (h = new a(this)))
            }
            if (typeof g == "string") {
                h[g].call(i)
            }
        })
	    };
    f.fn.dropdown.Constructor = a;
    f.fn.dropdown.noConflict = function() {
        f.fn.dropdown = c;
        return this
    };
    f(document).on("click.dropdown.data-api", d).on("click.dropdown.data-api", ".dropdown form", function(g) {
        g.stopPropagation()
    }).on("click.dropdown.data-api", b, a.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", a.prototype.keydown)
}(window.jQuery);
!function(c) {
    var b = function(e, d) {
        this.options = d;
        this.$element = c(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", c.proxy(this.hide, this));
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    b.prototype = {constructor: b,toggle: function() {
        return this[!this.isShown ? "show" : "hide"]()
    },show: function() {
        var d = this, f = c.Event("show");
        this.$element.trigger(f);
        if (this.isShown || f.isDefaultPrevented()) {
            return
        }
        this.isShown = true;
        this.escape();
        this.backdrop(function() {
            var e = c.support.transition && d.$element.hasClass("fade");
            if (!d.$element.parent().length) {
                d.$element.appendTo(document.body)
            }
            d.$element.show();
            if (e) {
                d.$element[0].offsetWidth
            }
            d.$element.addClass("in").attr("aria-hidden", false);
            d.enforceFocus();
            e ? d.$element.one(c.support.transition.end, function() {
                d.$element.focus().trigger("shown")
            }) : d.$element.focus().trigger("shown")
        })
    },hide: function(f) {
        f && f.preventDefault();
        var d = this;
        f = c.Event("hide");
        this.$element.trigger(f);
        if (!this.isShown || f.isDefaultPrevented()) {
            return
        }
        this.isShown = false;
        this.escape();
        c(document).off("focusin.modal");
        this.$element.removeClass("in").attr("aria-hidden", true);
        c.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
    },enforceFocus: function() {
        var d = this;
        c(document).on("focusin.modal", function(f) {
            if (d.$element[0] !== f.target && !d.$element.has(f.target).length) {
                d.$element.focus()
            }
        })
    },escape: function() {
        var d = this;
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keyup.dismiss.modal", function(f) {
                f.which == 27 && d.hide()
            })
        } else {
            if (!this.isShown) {
                this.$element.off("keyup.dismiss.modal")
            }
        }
    },hideWithTransition: function() {
        var d = this, e = setTimeout(function() {
            d.$element.off(c.support.transition.end);
            d.hideModal()
        }, 500);
        this.$element.one(c.support.transition.end, function() {
            clearTimeout(e);
            d.hideModal()
        })
    },hideModal: function() {
        var d = this;
        this.$element.hide();
        this.backdrop(function() {
            d.removeBackdrop();
            d.$element.trigger("hidden")
        })
    },removeBackdrop: function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    },backdrop: function(g) {
        var f = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = c.support.transition && e;
            this.$backdrop = c('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
            this.$backdrop.click(this.options.backdrop == "static" ? c.proxy(this.$element[0].focus, this.$element[0]) : c.proxy(this.hide, this));
            if (d) {
                this.$backdrop[0].offsetWidth
            }
            this.$backdrop.addClass("in");
            if (!g) {
                return
            }
            d ? this.$backdrop.one(c.support.transition.end, g) : g()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, g) : g()
            } else {
                if (g) {
                    g()
                }
            }
        }
    }};
    var a = c.fn.modal;
    c.fn.modal = function(d) {
        return this.each(function() {
            var g = c(this), f = g.data("modal"), e = c.extend({}, c.fn.modal.defaults, g.data(), typeof d == "object" && d);
            if (!f) {
                g.data("modal", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            } else {
                if (e.show) {
                    f.show()
                }
            }
        })
	    };
    c.fn.modal.defaults = {backdrop: true,keyboard: true,show: true};
    c.fn.modal.Constructor = b;
    c.fn.modal.noConflict = function() {
        c.fn.modal = a;
        return this
    };
    c(document).on("click.modal.data-api", '[data-toggle="modal"]', function(i) {
        var h = c(this), f = h.attr("href"), d = c(h.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, ""))), g = d.data("modal") ? "toggle" : c.extend({remote: !/#/.test(f) && f}, d.data(), h.data());
        i.preventDefault();
        d.modal(g).one("hide", function() {
            h.focus()
        })
    })
}(window.jQuery);
!function(c) {
    var b = function(e, d) {
        this.init("tooltip", e, d)
    };
    b.prototype = {constructor: b,init: function(k, h, f) {
        var l, d, j, e, g;
        this.type = k;
        this.$element = c(h);
        this.options = this.getOptions(f);
        this.enabled = true;
        j = this.options.trigger.split(" ");
        for (g = j.length; g--; ) {
            e = j[g];
            if (e == "click") {
                this.$element.on("click." + this.type, this.options.selector, c.proxy(this.toggle, this))
            } else {
                if (e != "manual") {
                    l = e == "hover" ? "mouseenter" : "focus";
                    d = e == "hover" ? "mouseleave" : "blur";
                    this.$element.on(l + "." + this.type, this.options.selector, c.proxy(this.enter, this));
                    this.$element.on(d + "." + this.type, this.options.selector, c.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? (this._options = c.extend({}, this.options, {trigger: "manual",selector: ""})) : this.fixTitle()
    },getOptions: function(d) {
        d = c.extend({}, c.fn[this.type].defaults, this.$element.data(), d);
        if (d.delay && typeof d.delay == "number") {
            d.delay = {show: d.delay,hide: d.delay}
        }
        return d
    },enter: function(h) {
        var g = c.fn[this.type].defaults, f = {}, d;
        this._options && c.each(this._options, function(e, i) {
            if (g[e] != i) {
                f[e] = i
            }
        }, this);
        d = c(h.currentTarget)[this.type](f).data(this.type);
        if (!d.options.delay || !d.options.delay.show) {
            return d.show()
        }
        clearTimeout(this.timeout);
        d.hoverState = "in";
        this.timeout = setTimeout(function() {
            if (d.hoverState == "in") {
                d.show()
            }
        }, d.options.delay.show)
    },leave: function(f) {
        var d = c(f.currentTarget)[this.type](this._options).data(this.type);
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        if (!d.options.delay || !d.options.delay.hide) {
            return d.hide()
        }
        d.hoverState = "out";
        this.timeout = setTimeout(function() {
            if (d.hoverState == "out") {
                d.hide()
            }
        }, d.options.delay.hide)
    },show: function() {
        var i, k, g, j, d, h, f = c.Event("show");
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(f);
            if (f.isDefaultPrevented()) {
                return
            }
            i = this.tip();
            this.setContent();
            if (this.options.animation) {
                i.addClass("fade")
            }
            d = typeof this.options.placement == "function" ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement;
            i.detach().css({top: 0,left: 0,display: "block"});
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            k = this.getPosition();
            g = i[0].offsetWidth;
            j = i[0].offsetHeight;
            switch (d) {
            case "bottom":
                h = {top: k.top + k.height,left: k.left + k.width / 2 - g / 2};
                break;
            case "top":
                h = {top: k.top - j,left: k.left + k.width / 2 - g / 2};
                break;
            case "left":
                h = {top: k.top + k.height / 2 - j / 2,left: k.left - g};
                break;
            case "right":
                h = {top: k.top + k.height / 2 - j / 2,left: k.left + k.width};
                break
            }
            this.applyPlacement(h, d);
            this.$element.trigger("shown")
        }
    },applyPlacement: function(g, h) {
        var i = this.tip(), e = i[0].offsetWidth, l = i[0].offsetHeight, d, j, k, f;
        i.offset(g).addClass(h).addClass("in");
        d = i[0].offsetWidth;
        j = i[0].offsetHeight;
        if (h == "top" && j != l) {
            g.top = g.top + l - j;
            f = true
        }
        if (h == "bottom" || h == "top") {
            k = 0;
            if (g.left < 0) {
                k = g.left * -2;
                g.left = 0;
                i.offset(g);
                d = i[0].offsetWidth;
                j = i[0].offsetHeight
            }
            this.replaceArrow(k - e + d, d, "left")
        } else {
            this.replaceArrow(j - l, j, "top")
        }
        if (f) {
            i.offset(g)
        }
    },replaceArrow: function(f, e, d) {
        this.arrow().css(d, f ? (50 * (1 - f / e) + "%") : "")
    },setContent: function() {
        var e = this.tip(), d = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](d);
        e.removeClass("fade in top bottom left right")
    },hide: function() {
        var d = this, g = this.tip(), f = c.Event("hide");
        this.$element.trigger(f);
        if (f.isDefaultPrevented()) {
            return
        }
        g.removeClass("in");
        function h() {
            var e = setTimeout(function() {
                g.off(c.support.transition.end).detach()
            }, 500);
            g.one(c.support.transition.end, function() {
                clearTimeout(e);
                g.detach()
            })
        }
        c.support.transition && this.$tip.hasClass("fade") ? h() : g.detach();
        this.$element.trigger("hidden");
        return this
    },fixTitle: function() {
        var d = this.$element;
        if (d.attr("title") || typeof (d.attr("data-original-title")) != "string") {
            d.attr("data-original-title", d.attr("title") || "").attr("title", "")
        }
    },hasContent: function() {
        return this.getTitle()
    },getPosition: function() {
        var d = this.$element[0];
        return c.extend({}, (typeof d.getBoundingClientRect == "function") ? d.getBoundingClientRect() : {width: d.offsetWidth,height: d.offsetHeight}, this.$element.offset())
    },getTitle: function() {
        var f, d = this.$element, e = this.options;
        f = d.attr("data-original-title") || (typeof e.title == "function" ? e.title.call(d[0]) : e.title);
        return f
    },tip: function() {
        return this.$tip = this.$tip || c(this.options.template)
    },arrow: function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },validate: function() {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.$element = null;
            this.options = null
        }
    },enable: function() {
        this.enabled = true
    },disable: function() {
        this.enabled = false
    },toggleEnabled: function() {
        this.enabled = !this.enabled
    },toggle: function(f) {
        var d = f ? c(f.currentTarget)[this.type](this._options).data(this.type) : this;
        d.tip().hasClass("in") ? d.hide() : d.show()
    },destroy: function() {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }};
    var a = c.fn.tooltip;
    c.fn.tooltip = function(d) {
        return this.each(function() {
            var g = c(this), f = g.data("tooltip"), e = typeof d == "object" && d;
            if (!f) {
                g.data("tooltip", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
	    };
    c.fn.tooltip.Constructor = b;
    c.fn.tooltip.defaults = {animation: true,placement: "top",selector: false,template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: false,container: false};
    c.fn.tooltip.noConflict = function() {
        c.fn.tooltip = a;
        return this
    }
}(window.jQuery);
!function(c) {
    var b = function(e, d) {
        this.init("popover", e, d)
    };
    b.prototype = c.extend({}, c.fn.tooltip.Constructor.prototype, {constructor: b,setContent: function() {
        var f = this.tip(), e = this.getTitle(), d = this.getContent();
        f.find(".popover-title")[this.options.html ? "html" : "text"](e);
        f.find(".popover-content")[this.options.html ? "html" : "text"](d);
        f.removeClass("fade top bottom left right in")
    },hasContent: function() {
        return this.getTitle() || this.getContent()
    },getContent: function() {
        var e, d = this.$element, f = this.options;
        e = (typeof f.content == "function" ? f.content.call(d[0]) : f.content) || d.attr("data-content");
        return e
    },tip: function() {
        if (!this.$tip) {
            this.$tip = c(this.options.template)
        }
        return this.$tip
    },destroy: function() {
        this.hide().$element.off("." + this.type).removeData(this.type)
    }});
    var a = c.fn.popover;
    c.fn.popover = function(d) {
        return this.each(function() {
            var g = c(this), f = g.data("popover"), e = typeof d == "object" && d;
            if (!f) {
                g.data("popover", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
	    };
    c.fn.popover.Constructor = b;
    c.fn.popover.defaults = c.extend({}, c.fn.tooltip.defaults, {placement: "right",trigger: "click",content: "",template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
    c.fn.popover.noConflict = function() {
        c.fn.popover = a;
        return this
    }
}(window.jQuery);
!function(c) {
    function b(g, f) {
        var h = c.proxy(this.process, this), d = c(g).is("body") ? c(window) : c(g), e;
        this.options = c.extend({}, c.fn.scrollspy.defaults, f);
        this.$scrollElement = d.on("scroll.scroll-spy.data-api", h);
        this.selector = (this.options.target || ((e = c(g).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "")) || "") + " .nav li > a";
        this.$body = c("body");
        this.refresh();
        this.process()
    }
    b.prototype = {constructor: b,refresh: function() {
        var d = this, e;
        this.offsets = c([]);
        this.targets = c([]);
        e = this.$body.find(this.selector).map(function() {
            var g = c(this), f = g.data("target") || g.attr("href"), h = /^#\w/.test(f) && c(f);
            return (h && h.length && [[h.position().top + (!c.isWindow(d.$scrollElement.get(0)) && d.$scrollElement.scrollTop()), f]]) || null
        }).sort(function(g, f) {
            return g[0] - f[0]
        }).each(function() {
            d.offsets.push(this[0]);
            d.targets.push(this[1])
        })
            },process: function() {
		var j = this.$scrollElement.scrollTop() + this.options.offset, f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, h = f - this.$scrollElement.height(), g = this.offsets, d = this.targets, k = this.activeTarget, e;
		if (j >= h) {
                    return k != (e = d.last()[0]) && this.activate(e)
		}
		for (e = g.length; e--; ) {
                    k != d[e] && j >= g[e] && (!g[e + 1] || j <= g[e + 1]) && this.activate(d[e])
		}
            },activate: function(f) {
		var e, d;
		this.activeTarget = f;
		c(this.selector).parent(".active").removeClass("active");
		d = this.selector + '[data-target="' + f + '"],' + this.selector + '[href="' + f + '"]';
		e = c(d).parent("li").addClass("active");
		if (e.parent(".dropdown-menu").length) {
                    e = e.closest("li.dropdown").addClass("active")
		}
		e.trigger("activate")
            }};
    var a = c.fn.scrollspy;
    c.fn.scrollspy = function(d) {
        return this.each(function() {
            var g = c(this), f = g.data("scrollspy"), e = typeof d == "object" && d;
            if (!f) {
                g.data("scrollspy", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
	    };
    c.fn.scrollspy.Constructor = b;
    c.fn.scrollspy.defaults = {offset: 10};
    c.fn.scrollspy.noConflict = function() {
        c.fn.scrollspy = a;
        return this
    };
    c(window).on("load", function() {
        c('[data-spy="scroll"]').each(function() {
            var d = c(this);
            d.scrollspy(d.data())
        })
	    })
}(window.jQuery);
!function(c) {
    var b = function(d) {
        this.element = c(d)
    };
    b.prototype = {constructor: b,show: function() {
        var j = this.element, g = j.closest("ul:not(.dropdown-menu)"), f = j.attr("data-target"), h, d, i;
        if (!f) {
            f = j.attr("href");
            f = f && f.replace(/.*(?=#[^\s]*$)/, "")
        }
        if (j.parent("li").hasClass("active")) {
            return
        }
        h = g.find(".active:last a")[0];
        i = c.Event("show", {relatedTarget: h});
        j.trigger(i);
        if (i.isDefaultPrevented()) {
            return
        }
        d = c(f);
        this.activate(j.parent("li"), g);
        this.activate(d, d.parent(), function() {
            j.trigger({type: "shown",relatedTarget: h})
        })
    },activate: function(f, e, i) {
        var d = e.find("> .active"), h = i && c.support.transition && d.hasClass("fade");
        function g() {
            d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            f.addClass("active");
            if (h) {
                f[0].offsetWidth;
                f.addClass("in")
            } else {
                f.removeClass("fade")
            }
            if (f.parent(".dropdown-menu")) {
                f.closest("li.dropdown").addClass("active")
            }
            i && i()
        }
        h ? d.one(c.support.transition.end, g) : g();
        d.removeClass("in")
    }};
    var a = c.fn.tab;
    c.fn.tab = function(d) {
        return this.each(function() {
            var f = c(this), e = f.data("tab");
            if (!e) {
                f.data("tab", (e = new b(this)))
            }
            if (typeof d == "string") {
                e[d]()
            }
        })
	    };
    c.fn.tab.Constructor = b;
    c.fn.tab.noConflict = function() {
        c.fn.tab = a;
        return this
    };
    c(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(d) {
        d.preventDefault();
        c(this).tab("show")
    })
}(window.jQuery);
!function(b) {
    var c = function(e, d) {
        this.$element = b(e);
        this.options = b.extend({}, b.fn.typeahead.defaults, d);
        this.matcher = this.options.matcher || this.matcher;
        this.sorter = this.options.sorter || this.sorter;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.updater = this.options.updater || this.updater;
        this.source = this.options.source;
        this.$menu = b(this.options.menu);
        this.shown = false;
        this.listen()
    };
    c.prototype = {constructor: c,select: function() {
        var d = this.$menu.find(".active").attr("data-value");
        this.$element.val(this.updater(d)).change();
        return this.hide()
    },updater: function(d) {
        return d
    },show: function() {
        var d = b.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
        this.$menu.insertAfter(this.$element).css({top: d.top + d.height,left: d.left}).show();
        this.shown = true;
        return this
    },hide: function() {
        this.$menu.hide();
        this.shown = false;
        return this
    },lookup: function(e) {
        var d;
        this.query = this.$element.val();
        if (!this.query || this.query.length < this.options.minLength) {
            return this.shown ? this.hide() : this
        }
        d = b.isFunction(this.source) ? this.source(this.query, b.proxy(this.process, this)) : this.source;
        return d ? this.process(d) : this
    },process: function(d) {
        var e = this;
        d = b.grep(d, function(f) {
            return e.matcher(f)
        });
        d = this.sorter(d);
        if (!d.length) {
            return this.shown ? this.hide() : this
        }
        return this.render(d.slice(0, this.options.items)).show()
    },matcher: function(d) {
        return ~d.toLowerCase().indexOf(this.query.toLowerCase())
    },sorter: function(f) {
        var g = [], e = [], d = [], h;
        while (h = f.shift()) {
            if (!h.toLowerCase().indexOf(this.query.toLowerCase())) {
                g.push(h)
            } else {
                if (~h.indexOf(this.query)) {
                    e.push(h)
                } else {
                    d.push(h)
                }
            }
        }
        return g.concat(e, d)
    },highlighter: function(d) {
        var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        return d.replace(new RegExp("(" + e + ")", "ig"), function(f, g) {
            return "<strong>" + g + "</strong>"
        })
    },render: function(d) {
        var e = this;
        d = b(d).map(function(f, g) {
            f = b(e.options.item).attr("data-value", g);
            f.find("a").html(e.highlighter(g));
            return f[0]
        });
        d.first().addClass("active");
        this.$menu.html(d);
        return this
    },next: function(e) {
        var f = this.$menu.find(".active").removeClass("active"), d = f.next();
        if (!d.length) {
            d = b(this.$menu.find("li")[0])
        }
        d.addClass("active")
    },prev: function(e) {
        var f = this.$menu.find(".active").removeClass("active"), d = f.prev();
        if (!d.length) {
            d = this.$menu.find("li").last()
        }
        d.addClass("active")
    },listen: function() {
        this.$element.on("focus", b.proxy(this.focus, this)).on("blur", b.proxy(this.blur, this)).on("keypress", b.proxy(this.keypress, this)).on("keyup", b.proxy(this.keyup, this));
        if (this.eventSupported("keydown")) {
            this.$element.on("keydown", b.proxy(this.keydown, this))
        }
        this.$menu.on("click", b.proxy(this.click, this)).on("mouseenter", "li", b.proxy(this.mouseenter, this)).on("mouseleave", "li", b.proxy(this.mouseleave, this))
    },eventSupported: function(d) {
        var e = d in this.$element;
        if (!e) {
            this.$element.setAttribute(d, "return;");
            e = typeof this.$element[d] === "function"
        }
        return e
    },move: function(d) {
        if (!this.shown) {
            return
        }
        switch (d.keyCode) {
        case 9:
        case 13:
        case 27:
            d.preventDefault();
            break;
        case 38:
            d.preventDefault();
            this.prev();
            break;
        case 40:
            d.preventDefault();
            this.next();
            break
        }
        d.stopPropagation()
    },keydown: function(d) {
        this.suppressKeyPressRepeat = ~b.inArray(d.keyCode, [40, 38, 9, 13, 27]);
        this.move(d)
    },keypress: function(d) {
        if (this.suppressKeyPressRepeat) {
            return
        }
        this.move(d)
    },keyup: function(d) {
        switch (d.keyCode) {
        case 40:
        case 38:
        case 16:
        case 17:
        case 18:
            break;
        case 9:
        case 13:
            if (!this.shown) {
                return
            }
            this.select();
            break;
        case 27:
            if (!this.shown) {
                return
            }
            this.hide();
            break;
        default:
            this.lookup()
        }
        d.stopPropagation();
        d.preventDefault()
    },focus: function(d) {
        this.focused = true
    },blur: function(d) {
        this.focused = false;
        if (!this.mousedover && this.shown) {
            this.hide()
        }
    },click: function(d) {
        d.stopPropagation();
        d.preventDefault();
        this.select();
        this.$element.focus()
    },mouseenter: function(d) {
        this.mousedover = true;
        this.$menu.find(".active").removeClass("active");
        b(d.currentTarget).addClass("active")
    },mouseleave: function(d) {
        this.mousedover = false;
        if (!this.focused && this.shown) {
            this.hide()
        }
    }};
    var a = b.fn.typeahead;
    b.fn.typeahead = function(d) {
        return this.each(function() {
            var g = b(this), f = g.data("typeahead"), e = typeof d == "object" && d;
            if (!f) {
                g.data("typeahead", (f = new c(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
	    };
    b.fn.typeahead.defaults = {source: [],items: 8,menu: '<ul class="typeahead dropdown-menu"></ul>',item: '<li><a href="#"></a></li>',minLength: 1};
    b.fn.typeahead.Constructor = c;
    b.fn.typeahead.noConflict = function() {
        b.fn.typeahead = a;
        return this
    };
    b(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(f) {
        var d = b(this);
        if (d.data("typeahead")) {
            return
        }
        d.typeahead(d.data())
    })
}(window.jQuery);
!function(c) {
    var b = function(e, d) {
        this.options = c.extend({}, c.fn.affix.defaults, d);
        this.$window = c(window).on("scroll.affix.data-api", c.proxy(this.checkPosition, this)).on("click.affix.data-api", c.proxy(function() {
            setTimeout(c.proxy(this.checkPosition, this), 1)
        }, this));
        this.$element = c(e);
        this.checkPosition()
    };
    b.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) {
            return
        }
        var h = c(document).height(), j = this.$window.scrollTop(), d = this.$element.offset(), k = this.options.offset, f = k.bottom, g = k.top, i = "affix affix-top affix-bottom", e;
        if (typeof k != "object") {
            f = g = k
        }
        if (typeof g == "function") {
            g = k.top()
        }
        if (typeof f == "function") {
            f = k.bottom()
        }
        e = this.unpin != null && (j + this.unpin <= d.top) ? false : f != null && (d.top + this.$element.height() >= h - f) ? "bottom" : g != null && j <= g ? "top" : false;
        if (this.affixed === e) {
            return
        }
        this.affixed = e;
        this.unpin = e == "bottom" ? d.top - j : null;
        this.$element.removeClass(i).addClass("affix" + (e ? "-" + e : ""))
    };
    var a = c.fn.affix;
    c.fn.affix = function(d) {
        return this.each(function() {
            var g = c(this), f = g.data("affix"), e = typeof d == "object" && d;
            if (!f) {
                g.data("affix", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            }
        })
	    };
    c.fn.affix.Constructor = b;
    c.fn.affix.defaults = {offset: 0};
    c.fn.affix.noConflict = function() {
        c.fn.affix = a;
        return this
    };
    c(window).on("load", function() {
        c('[data-spy="affix"]').each(function() {
            var e = c(this), d = e.data();
            d.offset = d.offset || {};
            d.offsetBottom && (d.offset.bottom = d.offsetBottom);
            d.offsetTop && (d.offset.top = d.offsetTop);
            e.affix(d)
        })
	    })
}(window.jQuery);
(function() {
    var a;
    a = (function() {
        function b() {
            this.options_index = 0;
            this.parsed = []
        }
        b.prototype.add_node = function(c) {
            if (c.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(c)
            } else {
                return this.add_option(c)
            }
        };
        b.prototype.add_group = function(i) {
            var h, e, g, d, f, c;
            h = this.parsed.length;
            this.parsed.push({array_index: h,group: true,label: i.label,children: 0,disabled: i.disabled});
            f = i.childNodes;
            c = [];
            for (g = 0, d = f.length; g < d; g++) {
                e = f[g];
                c.push(this.add_option(e, h, i.disabled))
            }
            return c
        };
        b.prototype.add_option = function(d, e, c) {
            if (d.nodeName.toUpperCase() === "OPTION") {
                if (d.text !== "") {
                    if (e != null) {
                        this.parsed[e].children += 1
                    }
                    this.parsed.push({array_index: this.parsed.length,options_index: this.options_index,value: d.value,text: d.text,html: d.innerHTML,selected: d.selected,disabled: c === true ? c : d.disabled,group_array_index: e,classes: d.className,style: d.style.cssText})
                } else {
                    this.parsed.push({array_index: this.parsed.length,options_index: this.options_index,empty: true})
                }
                return this.options_index += 1
            }
        };
        return b
    })();
    a.select_to_array = function(b) {
        var g, f, e, c, d;
        f = new a();
        d = b.childNodes;
        for (e = 0, c = d.length; e < c; e++) {
            g = d[e];
            f.add_node(g)
        }
        return f.parsed
    };
    this.SelectParser = a
}).call(this);
(function() {
    var b, a;
    a = this;
    b = (function() {
        function c(d, e) {
            this.form_field = d;
            this.options = e != null ? e : {};
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
            this.finish_setup()
        }
        c.prototype.set_default_values = function() {
            var d = this;
            this.click_test_action = function(e) {
                return d.test_active_click(e)
            };
            this.activate_action = function(e) {
                return d.activate_field(e)
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.result_single_selected = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.search_contains = this.options.search_contains || false;
            this.choices = 0;
            this.single_backstroke_delete = this.options.single_backstroke_delete || false;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            return this.inherit_select_classes = this.options.inherit_select_classes || false
        };
        c.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder")
            } else {
                if (this.is_multiple) {
                    this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Sélectionnez une option"
                } else {
                    this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Sélectionnez une option"
                }
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "Aucun résulta pour "
        };
        c.prototype.mouse_enter = function() {
            return this.mouse_on_container = true
        };
        c.prototype.mouse_leave = function() {
            return this.mouse_on_container = false
        };
        c.prototype.input_focus = function(d) {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function() {
                        return e.container_mousedown()
                    }), 50)
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field()
                }
            }
        };
        c.prototype.input_blur = function(d) {
            var e = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function() {
                    return e.blur_test()
                }), 100)
            }
        };
        c.prototype.result_add_option = function(f) {
            var d, e;
            if (!f.disabled) {
                f.dom_id = this.container_id + "_o_" + f.array_index;
                d = f.selected && this.is_multiple ? [] : ["active-result"];
                if (f.selected) {
                    d.push("result-selected")
                }
                if (f.group_array_index != null) {
                    d.push("group-option")
                }
                if (f.classes !== "") {
                    d.push(f.classes)
                }
                e = f.style.cssText !== "" ? ' style="' + f.style + '"' : "";
                return '<li id="' + f.dom_id + '" class="' + d.join(" ") + '"' + e + ">" + f.html + "</li>"
            } else {
                return ""
            }
        };
        c.prototype.results_update_field = function() {
            if (!this.is_multiple) {
                this.results_reset_cleanup()
            }
            this.result_clear_highlight();
            this.result_single_selected = null;
            return this.results_build()
        };
        c.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide()
            } else {
                return this.results_show()
            }
        };
        c.prototype.results_search = function(d) {
            if (this.results_showing) {
                return this.winnow_results()
            } else {
                return this.results_show()
            }
        };
        c.prototype.keyup_checker = function(d) {
            var f, e;
            f = (e = d.which) != null ? e : d.keyCode;
            this.search_field_scale();
            switch (f) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
                    return this.keydown_backstroke()
                } else {
                    if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search()
                    }
                }
                break;
            case 13:
                d.preventDefault();
                if (this.results_showing) {
                    return this.result_select(d)
                }
                break;
            case 27:
                if (this.results_showing) {
                    this.results_hide()
                }
                return true;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
                break;
            default:
                return this.results_search()
            }
        };
        c.prototype.generate_field_id = function() {
            var d;
            d = this.generate_random_id();
            this.form_field.id = d;
            return d
        };
        c.prototype.generate_random_char = function() {
            var f, e, d;
            f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            d = Math.floor(Math.random() * f.length);
            return e = f.substring(d, d + 1)
        };
        return c
    })();
    a.AbstractChosen = b
}).call(this);
(function() {
    var e, f, d, a, b = {}.hasOwnProperty, c = function(j, h) {
        for (var g in h) {
            if (b.call(h, g)) {
                j[g] = h[g]
            }
        }
        function i() {
            this.constructor = j
        }
        i.prototype = h.prototype;
        j.prototype = new i();
        j.__super__ = h.prototype;
        return j
    };
    a = this;
    e = jQuery;
    e.fn.extend({chosen: function(g) {
        if (e.browser.msie && (e.browser.version === "6.0" || (e.browser.version === "7.0" && document.documentMode === 7))) {
            return this
        }
        return this.each(function(h) {
            var i;
            i = e(this);
            if (!i.hasClass("chzn-done")) {
                return i.data("chosen", new f(this, g))
            }
        })
            }});
    f = (function(g) {
        c(h, g);
        function h() {
            return h.__super__.constructor.apply(this, arguments)
        }
        h.prototype.setup = function() {
            this.form_field_jq = e(this.form_field);
            this.current_value = this.form_field_jq.val();
            return this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
        };
        h.prototype.finish_setup = function() {
            return this.form_field_jq.addClass("chzn-done")
        };
        h.prototype.set_up_html = function() {
            var i, n, m, l, k, j;
            this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id();
            this.container_id += "_chzn";
            i = ["chzn-container"];
            i.push("chzn-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                i.push(this.form_field.className)
            }
            if (this.is_rtl) {
                i.push("chzn-rtl")
            }
            this.f_width = this.form_field_jq.outerWidth();
            m = {id: this.container_id,"class": i.join(" "),style: "width: " + this.f_width + "px;",title: this.form_field.title};
            n = e("<div />", m);
            if (this.is_multiple) {
                n.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" placeholder="Recherche..." style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>')
            } else {
                n.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" placeholder="Recherche..." /></div><ul class="chzn-results"></ul></div>')
            }
            this.form_field_jq.hide().after(n);
            this.container = e("#" + this.container_id);
            this.dropdown = this.container.find("div.chzn-drop").first();
            l = this.container.height();
            k = this.f_width - d(this.dropdown);
            this.dropdown.css({width: k + "px",top: l + "px"});
            this.search_field = this.container.find("input").first();
            this.search_results = this.container.find("ul.chzn-results").first();
            this.search_field_scale();
            this.search_no_results = this.container.find("li.no-results").first();
            if (this.is_multiple) {
                this.search_choices = this.container.find("ul.chzn-choices").first();
                this.search_container = this.container.find("li.search-field").first()
            } else {
                this.search_container = this.container.find("div.chzn-search").first();
                this.selected_item = this.container.find(".chzn-single").first();
                j = k - d(this.search_container) - d(this.search_field);
                this.search_field.css({width: j + "px"})
            }
            this.results_build();
            this.set_tab_index();
            return this.form_field_jq.trigger("liszt:ready", {chosen: this})
        };
        h.prototype.register_observers = function() {
            var i = this;
            this.container.mousedown(function(j) {
                return i.container_mousedown(j)
            });
            this.container.mouseup(function(j) {
                return i.container_mouseup(j)
            });
            this.container.mouseenter(function(j) {
                return i.mouse_enter(j)
            });
            this.container.mouseleave(function(j) {
                return i.mouse_leave(j)
            });
            this.search_results.mouseup(function(j) {
                return i.search_results_mouseup(j)
            });
            this.search_results.mouseover(function(j) {
                return i.search_results_mouseover(j)
            });
            this.search_results.mouseout(function(j) {
                return i.search_results_mouseout(j)
            });
            this.form_field_jq.bind("liszt:updated", function(j) {
                return i.results_update_field(j)
            });
            this.form_field_jq.bind("liszt:activate", function(j) {
                return i.activate_field(j)
            });
            this.form_field_jq.bind("liszt:open", function(j) {
                return i.container_mousedown(j)
            });
            this.search_field.blur(function(j) {
                return i.input_blur(j)
            });
            this.search_field.keyup(function(j) {
                return i.keyup_checker(j)
            });
            this.search_field.keydown(function(j) {
                return i.keydown_checker(j)
            });
            this.search_field.focus(function(j) {
                return i.input_focus(j)
            });
            if (this.is_multiple) {
                return this.search_choices.click(function(j) {
                    return i.choices_click(j)
                })
            } else {
                return this.container.click(function(j) {
                    return j.preventDefault()
                })
            }
        };
        h.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass("chzn-disabled");
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus", this.activate_action)
                }
                return this.close_field()
            } else {
                this.container.removeClass("chzn-disabled");
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus", this.activate_action)
                }
            }
        };
        h.prototype.container_mousedown = function(i) {
            var j;
            if (!this.is_disabled) {
                j = i != null ? (e(i.target)).hasClass("search-choice-close") : false;
                if (i && i.type === "mousedown" && !this.results_showing) {
                    i.preventDefault()
                }
                if (!this.pending_destroy_click && !j) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("")
                        }
                        e(document).click(this.click_test_action);
                        this.results_show()
                    } else {
                        if (!this.is_multiple && i && ((e(i.target)[0] === this.selected_item[0]) || e(i.target).parents("a.chzn-single").length)) {
                            i.preventDefault();
                            this.results_toggle()
                        }
                    }
                    return this.activate_field()
                } else {
                    return this.pending_destroy_click = false
                }
            }
        };
        h.prototype.container_mouseup = function(i) {
            if (i.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(i)
            }
        };
        h.prototype.blur_test = function(i) {
            if (!this.active_field && this.container.hasClass("chzn-container-active")) {
                return this.close_field()
            }
        };
        h.prototype.close_field = function() {
            e(document).unbind("click", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chzn-container-active");
            this.winnow_results_clear();
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale()
        };
        h.prototype.activate_field = function() {
            this.container.addClass("chzn-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus()
        };
        h.prototype.test_active_click = function(i) {
            if (e(i.target).parents("#" + this.container_id).length) {
                return this.active_field = true
            } else {
                return this.close_field()
            }
        };
        h.prototype.results_build = function() {
            var j, m, l, i, k;
            this.parsing = true;
            this.results_data = a.SelectParser.select_to_array(this.form_field);
            if (this.is_multiple && this.choices > 0) {
                this.search_choices.find("li.search-choice").remove();
                this.choices = 0
            } else {
                if (!this.is_multiple) {
                    this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
                    if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                        this.container.addClass("chzn-container-single-nosearch")
                    } else {
                        this.container.removeClass("chzn-container-single-nosearch")
                    }
                }
            }
            j = "";
            k = this.results_data;
            for (l = 0, i = k.length; l < i; l++) {
                m = k[l];
                if (m.group) {
                    j += this.result_add_group(m)
                } else {
                    if (!m.empty) {
                        j += this.result_add_option(m);
                        if (m.selected && this.is_multiple) {
                            this.choice_build(m)
                        } else {
                            if (m.selected && !this.is_multiple) {
                                this.selected_item.removeClass("chzn-default").find("span").text(m.text);
                                if (this.allow_single_deselect) {
                                    this.single_deselect_control_build()
                                }
                            }
                        }
                    }
                }
            }
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            this.search_results.html(j);
            return this.parsing = false
        };
        h.prototype.result_add_group = function(i) {
            if (!i.disabled) {
                i.dom_id = this.container_id + "_g_" + i.array_index;
                return '<li id="' + i.dom_id + '" class="group-result">' + e("<div />").text(i.label).html() + "</li>"
            } else {
                return ""
            }
        };
        h.prototype.result_do_highlight = function(j) {
            var n, m, k, l, i;
            if (j.length) {
                this.result_clear_highlight();
                this.result_highlight = j;
                this.result_highlight.addClass("highlighted");
                k = parseInt(this.search_results.css("maxHeight"), 10);
                i = this.search_results.scrollTop();
                l = k + i;
                m = this.result_highlight.position().top + this.search_results.scrollTop();
                n = m + this.result_highlight.outerHeight();
                if (n >= l) {
                    return this.search_results.scrollTop((n - k) > 0 ? n - k : 0)
                } else {
                    if (m < i) {
                        return this.search_results.scrollTop(m)
                    }
                }
            }
        };
        h.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted")
            }
            return this.result_highlight = null
        };
        h.prototype.results_show = function() {
            var i;
            if (!this.is_multiple) {
                this.selected_item.addClass("chzn-single-with-drop");
                if (this.result_single_selected) {
                    this.result_do_highlight(this.result_single_selected)
                }
            } else {
                if (this.max_selected_options <= this.choices) {
                    this.form_field_jq.trigger("liszt:maxselected", {chosen: this});
                    return false
                }
            }
            i = this.is_multiple ? this.container.height() : this.container.height() - 1;
            this.form_field_jq.trigger("liszt:showing_dropdown", {chosen: this});
            this.dropdown.css({top: i + "px",left: 0});
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            return this.winnow_results()
        };
        h.prototype.results_hide = function() {
            if (!this.is_multiple) {
                this.selected_item.removeClass("chzn-single-with-drop")
            }
            this.result_clear_highlight();
            this.form_field_jq.trigger("liszt:hiding_dropdown", {chosen: this});
            this.dropdown.css({left: "-9000px"});
            return this.results_showing = false
        };
        h.prototype.set_tab_index = function(j) {
            var i;
            if (this.form_field_jq.attr("tabindex")) {
                i = this.form_field_jq.attr("tabindex");
                this.form_field_jq.attr("tabindex", -1);
                return this.search_field.attr("tabindex", i)
            }
        };
        h.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default")
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default")
            }
        };
        h.prototype.search_results_mouseup = function(i) {
            var j;
            j = e(i.target).hasClass("active-result") ? e(i.target) : e(i.target).parents(".active-result").first();
            if (j.length) {
                this.result_highlight = j;
                this.result_select(i);
                return this.search_field.focus()
            }
        };
        h.prototype.search_results_mouseover = function(i) {
            var j;
            j = e(i.target).hasClass("active-result") ? e(i.target) : e(i.target).parents(".active-result").first();
            if (j) {
                return this.result_do_highlight(j)
            }
        };
        h.prototype.search_results_mouseout = function(i) {
            if (e(i.target).hasClass("active-result" || e(i.target).parents(".active-result").first())) {
                return this.result_clear_highlight()
            }
        };
        h.prototype.choices_click = function(i) {
            i.preventDefault();
            if (this.active_field && !(e(i.target).hasClass("search-choice" || e(i.target).parents(".search-choice").first)) && !this.results_showing) {
                return this.results_show()
            }
        };
        h.prototype.choice_build = function(l) {
            var i, j, k, m = this;
            if (this.is_multiple && this.max_selected_options <= this.choices) {
                this.form_field_jq.trigger("liszt:maxselected", {chosen: this});
                return false
            }
            i = this.container_id + "_c_" + l.array_index;
            this.choices += 1;
            if (l.disabled) {
                j = '<li class="search-choice search-choice-disabled" id="' + i + '"><span>' + l.html + "</span></li>"
            } else {
                j = '<li class="search-choice" id="' + i + '"><span>' + l.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + l.array_index + '"></a></li>'
            }
            this.search_container.before(j);
            k = e("#" + i).find("a").first();
            return k.click(function(n) {
                return m.choice_destroy_link_click(n)
            })
        };
        h.prototype.choice_destroy_link_click = function(i) {
            i.preventDefault();
            if (!this.is_disabled) {
                this.pending_destroy_click = true;
                return this.choice_destroy(e(i.target))
            } else {
                return i.stopPropagation
            }
        };
        h.prototype.choice_destroy = function(i) {
            if (this.result_deselect(i.attr("rel"))) {
                this.choices -= 1;
                this.show_search_field_default();
                if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
                    this.results_hide()
                }
                i.parents("li").first().remove();
                return this.search_field_scale()
            }
        };
        h.prototype.results_reset = function() {
            this.form_field.options[0].selected = true;
            this.selected_item.find("span").text(this.default_text);
            if (!this.is_multiple) {
                this.selected_item.addClass("chzn-default")
            }
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide()
            }
        };
        h.prototype.results_reset_cleanup = function() {
            this.current_value = this.form_field_jq.val();
            return this.selected_item.find("abbr").remove()
        };
        h.prototype.result_select = function(j) {
            var m, l, k, i;
            if (this.result_highlight) {
                m = this.result_highlight;
                l = m.attr("id");
                this.result_clear_highlight();
                if (this.is_multiple) {
                    this.result_deactivate(m)
                } else {
                    this.search_results.find(".result-selected").removeClass("result-selected");
                    this.result_single_selected = m;
                    this.selected_item.removeClass("chzn-default")
                }
                m.addClass("result-selected");
                i = l.substr(l.lastIndexOf("_") + 1);
                k = this.results_data[i];
                k.selected = true;
                this.form_field.options[k.options_index].selected = true;
                if (this.is_multiple) {
                    this.choice_build(k)
                } else {
                    this.selected_item.find("span").first().text(k.text);
                    if (this.allow_single_deselect) {
                        this.single_deselect_control_build()
                    }
                }
                if (!((j.metaKey || j.ctrlKey) && this.is_multiple)) {
                    this.results_hide()
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field_jq.val() !== this.current_value) {
                    this.form_field_jq.trigger("change", {selected: this.form_field.options[k.options_index].value})
                }
                this.current_value = this.form_field_jq.val();
                return this.search_field_scale()
            }
        };
        h.prototype.result_activate = function(i) {
            return i.addClass("active-result")
        };
        h.prototype.result_deactivate = function(i) {
            return i.removeClass("active-result")
        };
        h.prototype.result_deselect = function(k) {
            var i, j;
            j = this.results_data[k];
            if (!this.form_field.options[j.options_index].disabled) {
                j.selected = false;
                this.form_field.options[j.options_index].selected = false;
                i = e("#" + this.container_id + "_o_" + k);
                i.removeClass("result-selected").addClass("active-result").show();
                this.result_clear_highlight();
                this.winnow_results();
                this.form_field_jq.trigger("change", {deselected: this.form_field.options[j.options_index].value});
                this.search_field_scale();
                return true
            } else {
                return false
            }
        };
        h.prototype.single_deselect_control_build = function() {
            if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
                return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
            }
        };
        h.prototype.winnow_results = function() {
            var o, q, u, t, k, r, n, x, s, w, v, p, l, j, i, y, z, m;
            this.no_results_clear();
            s = 0;
            w = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html();
            r = this.search_contains ? "" : "^";
            k = new RegExp(r + w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            l = new RegExp(w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            m = this.results_data;
            for (j = 0, y = m.length; j < y; j++) {
                q = m[j];
                if (!q.disabled && !q.empty) {
                    if (q.group) {
                        e("#" + q.dom_id).css("display", "none")
                    } else {
                        if (!(this.is_multiple && q.selected)) {
                            o = false;
                            x = q.dom_id;
                            n = e("#" + x);
                            if (k.test(q.html)) {
                                o = true;
                                s += 1
                            } else {
                                if (this.enable_split_word_search && (q.html.indexOf(" ") >= 0 || q.html.indexOf("[") === 0)) {
                                    t = q.html.replace(/\[|\]/g, "").split(" ");
                                    if (t.length) {
                                        for (i = 0, z = t.length; i < z; i++) {
                                            u = t[i];
                                            if (k.test(u)) {
                                                o = true;
                                                s += 1
                                            }
                                        }
                                    }
                                }
                            }
                            if (o) {
                                if (w.length) {
                                    v = q.html.search(l);
                                    p = q.html.substr(0, v + w.length) + "</em>" + q.html.substr(v + w.length);
                                    p = p.substr(0, v) + "<em>" + p.substr(v)
                                } else {
                                    p = q.html
                                }
                                n.html(p);
                                this.result_activate(n);
                                if (q.group_array_index != null) {
                                    e("#" + this.results_data[q.group_array_index].dom_id).css("display", "list-item")
                                }
                            } else {
                                if (this.result_highlight && x === this.result_highlight.attr("id")) {
                                    this.result_clear_highlight()
                                }
                                this.result_deactivate(n)
                            }
                        }
                    }
                }
            }
            if (s < 1 && w.length) {
                return this.no_results(w)
            } else {
                return this.winnow_results_set_highlight()
            }
        };
        h.prototype.winnow_results_clear = function() {
            var i, l, m, k, j;
            this.search_field.val("");
            l = this.search_results.find("li");
            j = [];
            for (m = 0, k = l.length; m < k; m++) {
                i = l[m];
                i = e(i);
                if (i.hasClass("group-result")) {
                    j.push(i.css("display", "auto"))
                } else {
                    if (!this.is_multiple || !i.hasClass("result-selected")) {
                        j.push(this.result_activate(i))
                    } else {
                        j.push(void 0)
                    }
                }
            }
            return j
        };
        h.prototype.winnow_results_set_highlight = function() {
            var i, j;
            if (!this.result_highlight) {
                j = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
                i = j.length ? j.first() : this.search_results.find(".active-result").first();
                if (i != null) {
                    return this.result_do_highlight(i)
                }
            }
        };
        h.prototype.no_results = function(i) {
            var j;
            j = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            j.find("span").first().html(i);
            return this.search_results.append(j)
        };
        h.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        };
        h.prototype.keydown_arrow = function() {
            var j, i;
            if (!this.result_highlight) {
                j = this.search_results.find("li.active-result").first();
                if (j) {
                    this.result_do_highlight(e(j))
                }
            } else {
                if (this.results_showing) {
                    i = this.result_highlight.nextAll("li.active-result").first();
                    if (i) {
                        this.result_do_highlight(i)
                    }
                }
            }
            if (!this.results_showing) {
                return this.results_show()
            }
        };
        h.prototype.keyup_arrow = function() {
            var i;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show()
            } else {
                if (this.result_highlight) {
                    i = this.result_highlight.prevAll("li.active-result");
                    if (i.length) {
                        return this.result_do_highlight(i.first())
                    } else {
                        if (this.choices > 0) {
                            this.results_hide()
                        }
                        return this.result_clear_highlight()
                    }
                }
            }
        };
        h.prototype.keydown_backstroke = function() {
            var i;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke()
            } else {
                i = this.search_container.siblings("li.search-choice").last();
                if (i.length && !i.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = i;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke()
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus")
                    }
                }
            }
        };
        h.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus")
            }
            return this.pending_backstroke = null
        };
        h.prototype.keydown_checker = function(i) {
            var k, j;
            k = (j = i.which) != null ? j : i.keyCode;
            this.search_field_scale();
            if (k !== 8 && this.pending_backstroke) {
                this.clear_backstroke()
            }
            switch (k) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                if (this.results_showing && !this.is_multiple) {
                    this.result_select(i)
                }
                this.mouse_on_container = false;
                break;
            case 13:
                i.preventDefault();
                break;
            case 38:
                i.preventDefault();
                this.keyup_arrow();
                break;
            case 40:
                this.keydown_arrow();
                break
            }
        };
        h.prototype.search_field_scale = function() {
            var q, i, l, j, o, p, n, k, m;
            if (this.is_multiple) {
                l = 0;
                n = 0;
                o = "position:absolute; left: -1000px; top: -1000px; display:none;";
                p = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (k = 0, m = p.length; k < m; k++) {
                    j = p[k];
                    o += j + ":" + this.search_field.css(j) + ";"
                }
                i = e("<div />", {style: o});
                i.text(this.search_field.val());
                e("body").append(i);
                n = i.width() + 25;
                i.remove();
                if (n > this.f_width - 10) {
                    n = this.f_width - 10
                }
                this.search_field.css({width: n + "px"});
                q = this.container.height();
                return this.dropdown.css({top: q + "px"})
            }
        };
        h.prototype.generate_random_id = function() {
            var i;
            i = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
            while (e("#" + i).length > 0) {
                i += this.generate_random_char()
            }
            return i
        };
        return h
    })(AbstractChosen);
    a.Chosen = f;
    d = function(g) {
        var h;
        return h = g.outerWidth() - g.width()
    };
    a.get_side_border_padding = d
}).call(this);
var paramsDefault = {monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],dateFormat: "dd/mm/yy",firstDay: 1,prevText: "&#x3c;Préc",prevStatus: "Voir le mois précédent",prevJumpText: "&#x3c;&#x3c;",prevJumpStatus: "Voir l'année précédent",nextText: "Suiv&#x3e;",nextStatus: "Voir le mois suivant",nextJumpText: "&#x3e;&#x3e;",nextJumpStatus: "Voir l'année suivant",currentText: "Courant",currentStatus: "Voir le mois courant",todayText: "Aujourd'hui",todayStatus: "Voir aujourd'hui",clearText: "Effacer",clearStatus: "Effacer la date sélectionnée",closeText: "Fermer",closeStatus: "Fermer sans modifier",yearStatus: "Voir une autre année",monthStatus: "Voir un autre mois",weekText: "Sm",weekStatus: "Semaine de l'année",dayStatus: "'Choisir' le DD d MM",defaultStatus: "Choisir la date",isRTL: false};
var userAgent = navigator.userAgent.toLowerCase();
$(document).ready(function() {
    $.datepicker.setDefaults(paramsDefault);
    $.browser = {version: (userAgent.match(/.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/) || [])[1],chrome: /chrome/.test(userAgent),safari: /webkit/.test(userAgent) && !/chrome/.test(userAgent),opera: /opera/.test(userAgent),msie: /msie/.test(userAgent) && !/opera/.test(userAgent),mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)}
});
(function(a) {
    a.fn.searchForm = function(b) {
        var f = {ajax_pays: null,select: 1};
        var c = a.extend(f, b);
        var d = a(this);
        function e() {
            a.post(c.ajax_pays, {}, function(h) {
                if (h !== null && h !== undefined) {
                    a("option[value!='']", d).remove();
                    for (var g = 0; g < h.length; g++) {
                        d.append('<option value="' + h[g].id + '" >' + h[g].name + "</option>")
                    }
                    if (null != c.select) {
                        d.removeAttr("selected");
                        a('option[value="' + c.select + '"]', d).attr("selected", "selected").focus();
                        type_region(c.select)
                    }
                    d.change(function() {
                        if (a("option:selected", d).val() != 0) {
                            a(".search_list_suite").css("display", "block")
                        } else {
                            a(".search_list_suite").css("display", "none")
                        }
                    })
                }
            }, "json")
        }
        e()
    }
})(jQuery);
(function(b, a, c) {
    var d = b();
    b.fn.dropdownHover = function(e) {
        d = d.add(this.parent());
        return this.each(function() {
            var k = b(this), j = k.parent(), i = {delay: 500,instantlyCloseOthers: true}, h = {delay: b(this).data("delay"),instantlyCloseOthers: b(this).data("close-others")}, f = b.extend(true, {}, i, e, h), g;
            j.hover(function(l) {
                if (!j.hasClass("open") && !k.is(l.target)) {
                    return true
                }
                if (f.instantlyCloseOthers === true) {
                    d.removeClass("open")
                }
                a.clearTimeout(g);
                j.addClass("open")
            }, function() {
                g = a.setTimeout(function() {
                    j.removeClass("open")
                }, f.delay)
            });
            k.hover(function() {
                if (f.instantlyCloseOthers === true) {
                    d.removeClass("open")
                }
                a.clearTimeout(g);
                j.addClass("open")
            });
            j.find(".dropdown-submenu").each(function() {
                var m = b(this);
                var l;
                m.hover(function() {
                    a.clearTimeout(l);
                    m.children(".dropdown-menu").show();
                    m.siblings().children(".dropdown-menu").hide()
                }, function() {
                    var n = m.children(".dropdown-menu");
                    l = a.setTimeout(function() {
                        n.hide()
                    }, f.delay)
                })
            })
		})
	    };
    b(document).ready(function() {
        b('[data-hover="dropdown"]').dropdownHover()
    })
})(jQuery, this);
window.Modernizr = function(ap, ao, an) {
    function aa(b) {
        ag.cssText = b
    }
    function Y(d, c) {
        return aa(ad.join(d + ";") + (c || ""))
    }
    function W(d, c) {
        return typeof d === c
    }
    function U(d, c) {
        return !!~("" + d).indexOf(c)
    }
    function S(f, c) {
        for (var h in f) {
            var g = f[h];
            if (!U(g, "-") && ag[g] !== an) {
                return c == "pfx" ? g : !0
            }
        }
        return !1
    }
    function Q(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== an) {
                return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h
            }
        }
        return !1
    }
    function O(g, f, j) {
        var i = g.charAt(0).toUpperCase() + g.slice(1), h = (g + " " + ab.join(i + " ") + i).split(" ");
        return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + Z.join(i + " ") + i).split(" "), Q(h, f, j))
    }
    var am = "2.6.2", al = {}, ak = !0, aj = ao.documentElement, ai = "modernizr", ah = ao.createElement(ai), ag = ah.style, af, ae = {}.toString, ad = " -webkit- -moz- -o- -ms- ".split(" "), ac = "Webkit Moz O ms", ab = ac.split(" "), Z = ac.toLowerCase().split(" "), X = {}, V = {}, T = {}, R = [], P = R.slice, N, M = function(v, u, t, s) {
        var r, q, p, o, h = ao.createElement("div"), g = ao.body, b = g || ao.createElement("body");
        if (parseInt(t, 10)) {
            while (t--) {
                p = ao.createElement("div"), p.id = s ? s[t] : ai + (t + 1), h.appendChild(p)
            }
        }
        return r = ["&#173;", '<style id="s', ai, '">', v, "</style>"].join(""), h.id = ai, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = aj.style.overflow, aj.style.overflow = "hidden", aj.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), aj.style.overflow = o), !!q
    }, K = function() {
        function c(h, g) {
            g = g || ao.createElement(b[h] || "div"), h = "on" + h;
            var a = h in g;
            return a || (g.setAttribute || (g = ao.createElement("div")), g.setAttribute && g.removeAttribute && (g.setAttribute(h, ""), a = W(g[h], "function"), W(g[h], "undefined") || (g[h] = an), g.removeAttribute(h))), g = null, a
        }
        var b = {select: "input",change: "input",submit: "form",reset: "form",error: "img",load: "img",abort: "img"};
        return c
    }(), J = {}.hasOwnProperty, I;
    !W(J, "undefined") && !W(J.call, "undefined") ? I = function(d, c) {
        return J.call(d, c)
    } : I = function(d, c) {
        return c in d && W(d.constructor.prototype[c], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError
        }
        var g = P.call(arguments, 1), f = function() {
            if (this instanceof f) {
                var b = function() {
                };
                b.prototype = h.prototype;
                var d = new b, c = h.apply(d, g.concat(P.call(arguments)));
                return Object(c) === c ? c : d
            }
            return h.apply(a, g.concat(P.call(arguments)))
        };
        return f
    });
    for (var L in X) {
        I(X, L) && (N = L.toLowerCase(), al[N] = X[L](), R.push((al[N] ? "" : "no-") + N))
    }
    return al.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                I(e, f) && al.addTest(f, e[f])
            }
        } else {
            e = e.toLowerCase();
            if (al[e] !== an) {
                return al
            }
            c = typeof c == "function" ? c() : c, typeof ak != "undefined" && ak && (aj.className += " " + (c ? "" : "no-") + e), al[e] = c
        }
        return al
    }, aa(""), ah = af = null, function(ar, aq) {
        function z(f, e) {
            var h = f.createElement("p"), g = f.getElementsByTagName("head")[0] || f.documentElement;
            return h.innerHTML = "x<style>" + e + "</style>", g.insertBefore(h.lastChild, g.firstChild)
        }
        function y() {
            var b = s.elements;
            return typeof b == "string" ? b.split(" ") : b
        }
        function x(d) {
            var c = B[d[D]];
            return c || (c = {}, C++, d[D] = C, B[C] = c), c
        }
        function w(b, h, e) {
            h || (h = aq);
            if (A) {
                return h.createElement(b)
            }
            e || (e = x(h));
            var d;
            return e.cache[b] ? d = e.cache[b].cloneNode() : F.test(b) ? d = (e.cache[b] = e.createElem(b)).cloneNode() : d = e.createElem(b), d.canHaveChildren && !G.test(b) ? e.frag.appendChild(d) : d
        }
        function v(b, l) {
            b || (b = aq);
            if (A) {
                return b.createDocumentFragment()
            }
            l = l || x(b);
            var k = l.frag.cloneNode(), j = 0, i = y(), h = i.length;
            for (; j < h; j++) {
                k.createElement(i[j])
            }
            return k
        }
        function u(d, c) {
            c.cache || (c.cache = {}, c.createElem = d.createElement, c.createFrag = d.createDocumentFragment, c.frag = c.createFrag()), d.createElement = function(a) {
                return s.shivMethods ? w(a, d, c) : c.createElem(a)
            }, d.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + y().join().replace(/\w+/g, function(b) {
                return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
            }) + ");return n}")(s, c.frag)
        }
        function t(b) {
            b || (b = aq);
            var d = x(b);
            return s.shivCSS && !E && !d.hasCSS && (d.hasCSS = !!z(b, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), A || u(b, d), b
        }
        var H = ar.html5 || {}, G = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, F = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, E, D = "_html5shiv", C = 0, B = {}, A;
        (function() {
            try {
                var b = aq.createElement("a");
                b.innerHTML = "<xyz></xyz>", E = "hidden" in b, A = b.childNodes.length == 1 || function() {
                    aq.createElement("a");
                    var c = aq.createDocumentFragment();
                    return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                }()
            } catch (d) {
                E = !0, A = !0
            }
        })();
        var s = {elements: H.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS: H.shivCSS !== !1,supportsUnknownElements: A,shivMethods: H.shivMethods !== !1,type: "default",shivDocument: t,createElement: w,createDocumentFragment: v};
        ar.html5 = s, t(aq)
    }(this, ao), al._version = am, al._prefixes = ad, al._domPrefixes = Z, al._cssomPrefixes = ab, al.hasEvent = K, al.testProp = function(b) {
        return S([b])
    }, al.testAllProps = O, al.testStyles = M, aj.className = aj.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (ak ? " js " + R.join(" ") : ""), al
}(this, this.document);
(function(c, b, a, e) {
    var d = c(b);
    c.fn.lazyload = function(f) {
        var h = this;
        var i;
        var g = {threshold: 0,failure_limit: 0,event: "scroll",effect: "show",container: b,data_attribute: "original",skip_invisible: true,appear: null,load: null,placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
        function j() {
            var k = 0;
            h.each(function() {
                var l = c(this);
                if (g.skip_invisible && !l.is(":visible")) {
                    return
                }
                if (c.abovethetop(this, g) || c.leftofbegin(this, g)) {
                } else {
                    if (!c.belowthefold(this, g) && !c.rightoffold(this, g)) {
                        l.trigger("appear");
                        k = 0
                    } else {
                        if (++k > g.failure_limit) {
                            return false
                        }
                    }
                }
            })
		}
        if (f) {
            if (e !== f.failurelimit) {
                f.failure_limit = f.failurelimit;
                delete f.failurelimit
            }
            if (e !== f.effectspeed) {
                f.effect_speed = f.effectspeed;
                delete f.effectspeed
            }
            c.extend(g, f)
        }
        i = (g.container === e || g.container === b) ? d : c(g.container);
        if (0 === g.event.indexOf("scroll")) {
            i.bind(g.event, function() {
                return j()
            })
        }
        this.each(function() {
            var k = this;
            var l = c(k);
            k.loaded = false;
            if (l.attr("src") === e || l.attr("src") === false) {
                l.attr("src", g.placeholder)
            }
            l.one("appear", function() {
                if (!this.loaded) {
                    if (g.appear) {
                        var m = h.length;
                        g.appear.call(k, m, g)
                    }
                    c("<img />").bind("load", function() {
                        var o = l.data(g.data_attribute);
                        l.hide();
                        if (l.is("img")) {
                            l.attr("src", o)
                        } else {
                            l.css("background-image", "url('" + o + "')")
                        }
                        l[g.effect](g.effect_speed);
                        k.loaded = true;
                        var n = c.grep(h, function(q) {
                            return !q.loaded
                        });
                        h = c(n);
                        if (g.load) {
                            var p = h.length;
                            g.load.call(k, p, g)
                        }
                    }).attr("src", l.data(g.data_attribute))
                }
            });
            if (0 !== g.event.indexOf("scroll")) {
                l.bind(g.event, function() {
                    if (!k.loaded) {
                        l.trigger("appear")
                    }
                })
            }
        });
        d.bind("resize", function() {
            j()
        });
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            d.bind("pageshow", function(k) {
                if (k.originalEvent && k.originalEvent.persisted) {
                    h.each(function() {
                        c(this).trigger("appear")
                    })
			}
            })
        }
        c(a).ready(function() {
            j()
        });
        return this
    };
    c.belowthefold = function(g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = (b.innerHeight ? b.innerHeight : d.height()) + d.scrollTop()
        } else {
            f = c(h.container).offset().top + c(h.container).height()
        }
        return f <= c(g).offset().top - h.threshold
    };
    c.rightoffold = function(g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = d.width() + d.scrollLeft()
        } else {
            f = c(h.container).offset().left + c(h.container).width()
        }
        return f <= c(g).offset().left - h.threshold
    };
    c.abovethetop = function(g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = d.scrollTop()
        } else {
            f = c(h.container).offset().top
        }
        return f >= c(g).offset().top + h.threshold + c(g).height()
    };
    c.leftofbegin = function(g, h) {
        var f;
        if (h.container === e || h.container === b) {
            f = d.scrollLeft()
        } else {
            f = c(h.container).offset().left
        }
        return f >= c(g).offset().left + h.threshold + c(g).width()
    };
    c.inviewport = function(f, g) {
        return !c.rightoffold(f, g) && !c.leftofbegin(f, g) && !c.belowthefold(f, g) && !c.abovethetop(f, g)
    };
    c.extend(c.expr[":"], {"below-the-fold": function(f) {
        return c.belowthefold(f, {threshold: 0})
    },"above-the-top": function(f) {
        return !c.belowthefold(f, {threshold: 0})
    },"right-of-screen": function(f) {
        return c.rightoffold(f, {threshold: 0})
    },"left-of-screen": function(f) {
        return !c.rightoffold(f, {threshold: 0})
    },"in-viewport": function(f) {
        return c.inviewport(f, {threshold: 0})
    },"above-the-fold": function(f) {
        return !c.belowthefold(f, {threshold: 0})
    },"right-of-fold": function(f) {
        return c.rightoffold(f, {threshold: 0})
    },"left-of-fold": function(f) {
        return !c.rightoffold(f, {threshold: 0})
    }})
})(jQuery, window, document);
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(f) {
    var a = /\+/g;
    function d(j) {
        return b.raw ? j : encodeURIComponent(j)
    }
    function g(j) {
        return b.raw ? j : decodeURIComponent(j)
    }
    function h(j) {
        return d(b.json ? JSON.stringify(j) : String(j))
    }
    function c(j) {
        if (j.indexOf('"') === 0) {
            j = j.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            j = decodeURIComponent(j.replace(a, " "));
            return b.json ? JSON.parse(j) : j
        } catch (k) {
        }
    }
    function e(k, j) {
        var l = b.raw ? k : c(k);
        return f.isFunction(j) ? j(l) : l
    }
    var b = f.cookie = function(q, p, v) {
        if (arguments.length > 1 && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires, u = v.expires = new Date();
                u.setMilliseconds(u.getMilliseconds() + r * 86400000)
            }
            return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {}, s = document.cookie ? document.cookie.split("; ") : [], o = 0, m = s.length;
        for (; o < m; o++) {
            var n = s[o].split("="), j = g(n.shift()), k = n.join("=");
            if (q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    };
    b.defaults = {};
    f.removeCookie = function(k, j) {
        f.cookie(k, "", f.extend({}, j, {expires: -1}));
        return !f.cookie(k)
    }
}));
function change_onglet(a) {
    if (a == "ski") {
        document.getElementById("onglet_" + ancien_onglet).className = "onglet_0 onglet"
    } else {
        document.getElementById("onglet_" + ancien_onglet).className = "onglet_2 onglet"
    }
    document.getElementById("onglet_" + a).className = "onglet_1 onglet";
    document.getElementById("contenu_onglet_" + ancien_onglet).style.display = "none";
    document.getElementById("contenu_onglet_" + a).style.display = "block";
    ancien_onglet = a
}
var ancien_onglet = "ski";
change_onglet(ancien_onglet);
function afficher_cacher(a) {
    if (document.getElementById(a).style.display == "none") {
        document.getElementById(a).style.display = "block"
    } else {
        if (document.getElementById(a).style.display == "block") {
            document.getElementById(a).style.display = "none"
        } else {
            document.getElementById(a).style.display = "block"
        }
    }
    return true
}
function cocherDecocherFormule(b) {
    var a = b;
    if (a == 0) {
        for (i = 1; i < 6; i++) {
            $("input[value=" + i + "]").removeAttr("checked")
        }
    } else {
        $("input[value=1]").prop("checked", "checked");
        if ((a == 1) || (a == 2) || (a == 3) || (a == 4)) {
            if ($("input[value=2]").attr("checked")) {
                return false
            } else {
                for (i = 1; i < 6; i++) {
                    $("input[value=" + i + "]").removeAttr("checked")
                }
                $("input[value=" + a + "]").prop("checked", "checked");
                $("input[value=1]").prop("checked", "checked")
            }
        }
        if (a == 5) {
            if ($("input[value=2]").attr("checked")) {
                return false
            } else {
                for (i = 1; i < 6; i++) {
                    $("input[value=" + i + "]").removeAttr("checked")
                }
                $("input[value=" + a + "]").prop("checked", "checked");
                $("input[value=1]").prop("checked", "checked");
                $("input[value=2]").prop("checked", "checked")
            }
        }
    }
    $("input[value=0]").prop("checked", "checked")
}
jQuery(document).ready(function(a) {
    a("input[rel=tooltip]").mouseover(function(b) {
        var c = a(this).attr("title");
        a(this).append('<div id="tooltip">' + c + "</div>");
        a("#tooltip").css("top", b.pageY + 10);
        a("#tooltip").css("left", b.pageX + 20)
    });
    a("#nbPersonnes_nb").on("change", function() {
        document.getElementById("nbPersonnes_details").style.display = "block";
        var b = document.getElementById("nbPersonnes_nb").value;
        if ((b <= 2) || (b > 6)) {
            document.getElementById("nbPersonnes_as").value = b;
            document.getElementById("nbPersonnes_ans").value = 0;
            document.getElementById("nbPersonnes_es").value = 0;
            document.getElementById("nbPersonnes_ens").value = 0
        } else {
            if (b == 3) {
                document.getElementById("nbPersonnes_as").value = 2;
                document.getElementById("nbPersonnes_ans").value = 0;
                document.getElementById("nbPersonnes_es").value = 0;
                document.getElementById("nbPersonnes_ens").value = 1
            } else {
                if (b == 4) {
                    document.getElementById("nbPersonnes_as").value = 2;
                    document.getElementById("nbPersonnes_ans").value = 0;
                    document.getElementById("nbPersonnes_es").value = 1;
                    document.getElementById("nbPersonnes_ens").value = 1
                } else {
                    if (b == 5) {
                        document.getElementById("nbPersonnes_as").value = 2;
                        document.getElementById("nbPersonnes_ans").value = 0;
                        document.getElementById("nbPersonnes_es").value = 2;
                        document.getElementById("nbPersonnes_ens").value = 1
                    } else {
                        if (b == 6) {
                            document.getElementById("nbPersonnes_as").value = 3;
                            document.getElementById("nbPersonnes_ans").value = 1;
                            document.getElementById("nbPersonnes_es").value = 1;
                            document.getElementById("nbPersonnes_ens").value = 1
                        }
                    }
                }
            }
        }
    });
    a("#nbPersonnes_as").on("change", function() {
        var c = document.getElementById("nbPersonnes_as").value;
        var d = document.getElementById("nbPersonnes_ans").value;
        var f = document.getElementById("nbPersonnes_es").value;
        var e = document.getElementById("nbPersonnes_ens").value;
        var b = Number(c) + Number(d) + Number(f) + Number(e);
        document.getElementById("nbPersonnes_nb").value = b
    });
    a("#nbPersonnes_ans").on("change", function() {
        var c = document.getElementById("nbPersonnes_as").value;
        var d = document.getElementById("nbPersonnes_ans").value;
        var f = document.getElementById("nbPersonnes_es").value;
        var e = document.getElementById("nbPersonnes_ens").value;
        var b = Number(c) + Number(d) + Number(f) + Number(e);
        document.getElementById("nbPersonnes_nb").value = b
    });
    a("#nbPersonnes_es").on("change", function() {
        var c = document.getElementById("nbPersonnes_as").value;
        var d = document.getElementById("nbPersonnes_ans").value;
        var f = document.getElementById("nbPersonnes_es").value;
        var e = document.getElementById("nbPersonnes_ens").value;
        var b = Number(c) + Number(d) + Number(f) + Number(e);
        document.getElementById("nbPersonnes_nb").value = b
    });
    a("#nbPersonnes_ens").on("change", function() {
        var c = document.getElementById("nbPersonnes_as").value;
        var d = document.getElementById("nbPersonnes_ans").value;
        var f = document.getElementById("nbPersonnes_es").value;
        var e = document.getElementById("nbPersonnes_ens").value;
        var b = Number(c) + Number(d) + Number(f) + Number(e);
        document.getElementById("nbPersonnes_nb").value = b
    })
});
window.onload = function() {
    var e = $.cookie("_vtrFormRech");
    if (e != null) {
        var a = JSON.parse(e);
        document.getElementById("search_type_texte_libre").value = a.texteLibre;
        document.getElementById("search_type_date_depart_ski").value = a.departSki;
        document.getElementById("nbPersonnes_nb").value = a.nbPersonne;
        document.getElementById("nbPersonnes_as").value = a.nbPersonne_as;
        document.getElementById("nbPersonnes_ans").value = a.nbPersonne_ans;
        document.getElementById("nbPersonnes_es").value = a.nbPersonne_es;
        document.getElementById("nbPersonnes_ens").value = a.nbPersonne_ens;
        if (a.dateFlexible != null) {
            document.getElementById("search_type_date_flexible_ski").checked = true
        } else {
            document.getElementById("search_type_date_flexible_ski").checked = false
        }
        if (a.dureeSejour == 7) {
            document.getElementById("semaine").checked = true
        } else {
            document.getElementById("weekEnd").checked = true
        }
        if (a.forfait != null) {
            document.getElementById("search_type_rem_meca").checked = true
        }
        if (a.materiel != null) {
            document.getElementById("search_type_materiel").checked = true
        }
        if (a.foodpack != null) {
            document.getElementById("search_type_foodpack").checked = true
        }
        if (a.courSki != null) {
            document.getElementById("search_type_cours_ski").checked = true
        }
    }
    var b = $.cookie("_vtrFavList");
    if (b != null) {
        objTabs = JSON.parse(b);
        for (var c in objTabs) {
            var d = objTabs[c]["id"];
            document.getElementById("liste_ajout_fav_" + d).style.display = "none";
            document.getElementById("liste_supp_fav_" + d).style.display = "block"
        }
    }
};
var choix_precedent_id = null;
function choix(c, b) {
    var a = document.getElementById("case_" + c).textContent;
    document.getElementById("search_type_lieu").value = b;
    document.getElementById("search_type_lieu_choisi").value = b;
    document.getElementById("case_search_type_lieu").textContent = a;
    document.getElementById("case_search_type_lieu").className = "simulation-champ-text";
    if (choix_precedent_id != null) {
        document.getElementById(choix_precedent_id).style.backgroundColor = null;
        document.getElementById(choix_precedent_id).style.color = "#333"
    }
    choix_precedent_id = "case_" + c;
    if (b.substring(0, 2) == "v=") {
        document.getElementById("search_type_lieu").checked = false
    }
}
function cookieFormulaireRecherche() {
    var a = document.getElementById("search_type_texte_libre").value;
    if (document.getElementById("search_type_lieu").value != "") {
        var m = document.getElementById("case_search_type_lieu").textContent
    } else {
        var m = null
    }
    var p = document.getElementById("search_type_date_depart_ski").value;
    if (document.getElementById("search_type_date_flexible_ski").checked) {
        var d = document.getElementById("search_type_date_flexible_ski").value
    } else {
        var d = null
    }
    if (document.getElementById("weekEnd").checked) {
        var k = document.getElementById("weekEnd").value
    } else {
        var k = document.getElementById("semaine").value
    }
    var h = document.getElementById("nbPersonnes_nb").value;
    var n = document.getElementById("nbPersonnes_as").value;
    var l = document.getElementById("nbPersonnes_ans").value;
    var g = document.getElementById("nbPersonnes_es").value;
    var f = document.getElementById("nbPersonnes_ens").value;
    if (document.getElementById("search_type_rem_meca").checked) {
        var j = document.getElementById("search_type_rem_meca").value
    } else {
        var j = null
    }
    if (document.getElementById("search_type_materiel").checked) {
        var e = document.getElementById("search_type_materiel").value
    } else {
        var e = null
    }
    if (document.getElementById("search_type_foodpack").checked) {
        var c = document.getElementById("search_type_foodpack").value
    } else {
        var c = null
    }
    if (document.getElementById("search_type_cours_ski").checked) {
        var b = document.getElementById("search_type_cours_ski").value
    } else {
        var b = null
    }
    var o = {texteLibre: a,lieu: m,departSki: p,dateFlexible: d,dureeSejour: k,nbPersonne: h,nbPersonne_as: n,nbPersonne_ans: l,nbPersonne_es: g,nbPersonne_ens: f,forfait: j,materiel: e,foodpack: c,courSki: b};
    $.cookie.raw = true;
    $.cookie.json = true;
    $.cookie("_vtrFormRech", o, {expires: 90})
}
function ajoutCookieFavList(d) {
    d = d.substring(16);
    var b = document.getElementById("in_fav_liste_" + d).value;
    var c = {};
    var a = $.cookie("_vtrFavList");
    if (a != null) {
        c = JSON.parse(a)
    }
    c[d] = {id: d,date: b};
    $.cookie.raw = true;
    $.cookie.json = true;
    $.cookie("_vtrFavList", c, {expires: 90});
    document.getElementById("liste_ajout_fav_" + d).style.display = "none";
    document.getElementById("liste_supp_fav_" + d).style.display = "block"
}
function suppCookieFavList(b) {
    b = b.substring(15);
    var a = $.cookie("_vtrFavList");
    if (a != null) {
        objTabs = JSON.parse(a)
    }
    delete objTabs[b];
    $.cookie.raw = true;
    $.cookie.json = true;
    $.cookie("_vtrFavList", objTabs, {expires: 90});
    document.getElementById("liste_ajout_fav_" + b).style.display = "block";
    document.getElementById("liste_supp_fav_" + b).style.display = "none"
}
$("#search_type_liste").mouseover(function() {
    document.getElementById("search_type_lieu").checked = true
}).mouseout(function() {
    document.getElementById("search_type_lieu").checked = false
});
$("#search_type_liste label").mouseover(function() {
    document.getElementById(this.id).style.backgroundColor = "#93be1c";
    document.getElementById(this.id).style.color = "#fff"
}).mouseout(function() {
    if (choix_precedent_id != this.id) {
        document.getElementById(this.id).style.backgroundColor = null;
        document.getElementById(this.id).style.color = "#333"
    }
});
window.onload = function() {
    var a = $.cookie("_vtrFavList");
    if (a != null) {
        objTabs = JSON.parse(a);
        for (var b in objTabs) {
            var c = objTabs[b]["id"];
            document.getElementById("liste_ajout_fav_" + c).style.display = "none";
            document.getElementById("liste_supp_fav_" + c).style.display = "block"
        }
    }
};
