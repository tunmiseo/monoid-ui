/*! Momentum Dashboard - lib.js

Thanks to these outstanding Open Source frameworks and libraries!

*
* jQuery v2.1.4
*
(c) 2005, 2015 jQuery Foundation, Inc.
jquery.org/license

*
* Underscore.js 1.8.3
*
http://underscorejs.org
(c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
Underscore may be freely distributed under the MIT license.

*
* Backbone.js
*
(c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
Backbone may be freely distributed under the MIT license.
For all details and documentation:
http://backbonejs.org

*
* handlebars v3.0.3
*
Copyright (C) 2011-2014 by Yehuda Katz
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*
* Backbone localStorage Adapter
* Version 1.1.6
*
Licensed under MIT license

Copyright (c) 2010 Jerome Gravel-Niquet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*
* JavaScript MD5 1.1.1
* https://github.com/blueimp/JavaScript-MD5
*
Copyright 2011, Sebastian Tschan
https://blueimp.net

Licensed under the MIT license:
http://www.opensource.org/licenses/MIT

Based on
A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
Digest Algorithm, as defined in RFC 1321.
Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
Distributed under the BSD License
See http://pajhome.org.uk/crypt/md5 for more info.

*
* tinyColorPicker
* https://github.com/PitPik/tinyColorPicker
*
The MIT License (MIT)

Copyright (c) 2016 Peter Dematté

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*
* dragster
* https://github.com/bensmithett/dragster
*
The MIT License (MIT)

Copyright © 2016 Ben Smithett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*
* nimble
* https://github.com/caolan/nimble
*

Copyright (c) 2011 Caolan McMahon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*
* css-element-queries
* https://github.com/marcj/css-element-queries
*

Copyright (c) 2013 Marc J. Schmidt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

function ensureUrlScheme(e) {
    return /^(((f|ht)tps?)|chrome|chrome-extension|chrome-search):\/\//i.test(e) || /^(file:\\|file:\/\/)+/i.test(e) || (e = "http://" + e),
    e
}
function detachUrlScheme(e) {
    return e ? -1 < e.indexOf("https://") ? e.replace("https://", "") : -1 < e.indexOf("http://") ? e.replace("http://", "") : null : null
}
!function(e) {
    function t(i, o) {
        var s = Array.prototype[i];
        return function(e, t, n) {
            var r = e ? e[i] : 0;
            return r && r === s ? r.call(e, t, n) : o(e, t, n)
        }
    }
    function r(e, n, r) {
        var i = e.length || u(e).length;
        if (!i)
            return r();
        var o = 0;
        a(e, function() {
            function e(e) {
                e ? (r(e),
                r = function() {}
                ) : ++o === i && r()
            }
            var t = Array.prototype.slice.call(arguments);
            n.length ? (t = t.slice(0, n.length - 1))[n.length - 1] = e : t.push(e),
            n.apply(this, t)
        })
    }
    function n(n, r, i) {
        var o = u(n);
        if (!o.length)
            return i();
        var s = 0
          , a = function() {
            var e = o[s]
              , t = [n[e], e, n].slice(0, r.length - 1);
            t[r.length - 1] = function(e) {
                e ? (i(e),
                i = function() {}
                ) : ++s === o.length ? i() : a()
            }
            ,
            r.apply(this, t)
        };
        a()
    }
    function i(n) {
        return function(e, s, t) {
            var a = [];
            n(e, function(e, t, n, r) {
                function i(e, t) {
                    a[a.length] = t,
                    r(e)
                }
                var o = [e, t, n];
                s.length ? (o = o.slice(0, s.length - 1))[s.length - 1] = i : o.push(i),
                s.apply(this, o)
            }, function(e) {
                t(e, a)
            })
        }
    }
    function o(e, s, t) {
        var a = [];
        r(e, function(n, e, t, r) {
            function i(e, t) {
                t && (a[a.length] = n),
                r(e)
            }
            var o = [n, e, t];
            s.length ? (o = o.slice(0, s.length - 1))[s.length - 1] = i : o.push(i),
            s.apply(this, o)
        }, function(e) {
            t(e, a)
        })
    }
    function s(e, s, a, t) {
        n(e, function(e, t, n, r) {
            function i(e, t) {
                a = t,
                r(e)
            }
            var o = [a, e, t, n];
            s.length ? (o = o.slice(0, s.length - 1))[s.length - 1] = i : o.push(i),
            s.apply(this, o)
        }, function(e) {
            t(e, a)
        })
    }
    var u = Object.keys || function(e) {
        var t = [];
        for (var n in e)
            e.hasOwnProperty(n) && t.push(n);
        return t
    }
      , a = t("forEach", function(e, t) {
        for (var n = e instanceof Object, r = n ? u(e) : e || [], i = 0, o = r.length; i < o; i++) {
            var s = n ? r[i] : i;
            t(e[s], s, e)
        }
    })
      , c = t("map", function(e, r) {
        var i = [];
        return a(e, function(e, t, n) {
            i[i.length] = r(e, t, n)
        }),
        i
    })
      , l = t("filter", function(e, r, t) {
        var i = [];
        return a(e, function(e, t, n) {
            r(e, t, n) && (i[i.length] = e)
        }),
        i
    })
      , f = t("reduce", function(e, r, i) {
        return a(e, function(e, t, n) {
            i = r(i, e, t, n)
        }),
        i
    });
    e.each = function(e, t, n) {
        return (n ? r : a)(e, t, n)
    }
    ,
    e.map = function(e, t, n) {
        return (n ? i(r) : c)(e, t, n)
    }
    ,
    e.filter = function(e, t, n) {
        return (n ? o : l)(e, t, n)
    }
    ,
    e.reduce = function(e, t, n, r) {
        return (r ? s : f)(e, t, n, r)
    }
    ,
    e.parallel = function(e, t) {
        var i = new e.constructor;
        r(e, function(e, n, r) {
            e(function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                i[n] = t.length <= 1 ? t[0] : t,
                r(e)
            })
        }, function(e) {
            (t || function() {}
            )(e, i)
        })
    }
    ,
    e.series = function(e, t) {
        var o = new e.constructor;
        n(e, function(e, r, i) {
            e(function(e, t) {
                var n = Array.prototype.slice.call(arguments, 1);
                o[r] = n.length <= 1 ? n[0] : n,
                i(e)
            })
        }, function(e) {
            (t || function() {}
            )(e, o)
        })
    }
}("undefined" == typeof exports ? this._ = this._ || {} : exports),
this.nimble = this._,
delete this._,
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
      , E = T.document
      , r = Object.getPrototypeOf
      , a = t.slice
      , v = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , m = n.hasOwnProperty
      , s = m.toString
      , c = s.call(Object)
      , y = {}
      , b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , l = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function x(e, t, n) {
        var r, i = (t = t || E).createElement("script");
        if (i.text = e,
        n)
            for (r in l)
                n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var C = function(e, t) {
        return new C.fn.init(e,t)
    }
      , f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function h(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    C.extend = C.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || b(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (r = e[t]) && (c && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1,
                    n && Array.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {},
                    s[t] = C.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = m.call(t, "constructor") && t.constructor) && s.call(n) === c)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            x(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (h(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (h(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return v.apply([], s)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }
        function i() {
            S()
        }
        var e, p, x, o, s, d, h, g, w, u, c, S, T, a, E, v, l, m, y, C = "sizzle" + 1 * new Date, b = n.document, k = 0, r = 0, j = se(), A = se(), _ = se(), N = function(e, t) {
            return e === t && (c = !0),
            0
        }, D = {}.hasOwnProperty, t = [], H = t.pop, O = t.push, M = t.push, L = t.slice, I = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", q = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", B = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]", F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", $ = new RegExp(q + "+","g"), z = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$","g"), W = new RegExp("^" + q + "*," + q + "*"), U = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), V = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]","g"), G = new RegExp(F), X = new RegExp("^" + R + "$"), J = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)","i")
        }, Q = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)","ig"), ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            M.apply(t = L.call(b.childNodes), b.childNodes),
            t[b.childNodes.length].nodeType
        } catch (e) {
            M = {
                apply: t.length ? function(e, t) {
                    O.apply(e, L.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, n, r) {
            var i, o, s, a, u, c, l, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== T && S(t),
            t = t || T,
            E)) {
                if (11 !== h && (u = Z.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(i)) && y(t, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return M.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (p.qsa && !_[e + " "] && (!v || !v.test(e))) {
                    if (1 !== h)
                        f = t,
                        l = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ne, re) : t.setAttribute("id", a = C),
                        o = (c = d(e)).length; o--; )
                            c[o] = "#" + a + " " + me(c[o]);
                        l = c.join(","),
                        f = ee.test(e) && ge(t.parentNode) || t
                    }
                    if (l)
                        try {
                            return M.apply(n, f.querySelectorAll(l)),
                            n
                        } catch (e) {} finally {
                            a === C && t.removeAttribute("id")
                        }
                }
            }
            return g(e.replace(z, "$1"), t, n, r)
        }
        function se() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function ae(e) {
            return e[C] = !0,
            e
        }
        function ue(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function le(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function pe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function de(s) {
            return ae(function(o) {
                return o = +o,
                ae(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = oe.support = {},
        s = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        S = oe.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : b;
            return r !== T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement,
            E = !s(T),
            b !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)),
            p.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = ue(function(e) {
                return e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = Y.test(T.getElementsByClassName),
            p.getById = ue(function(e) {
                return a.appendChild(e).id = C,
                !T.getElementsByName || !T.getElementsByName(C).length
            }),
            p.getById ? (x.filter.ID = function(e) {
                var t = e.replace(te, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var n = e.replace(te, f);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            x.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            l = [],
            v = [],
            (p.qsa = Y.test(T.querySelectorAll)) && (ue(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + q + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + q + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length || v.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + q + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (p.matchesSelector = Y.test(m = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                p.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                l.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            l = l.length && new RegExp(l.join("|")),
            t = Y.test(a.compareDocumentPosition),
            y = t || Y.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === b && y(b, e) ? -1 : t === T || t.ownerDocument === b && y(b, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!i || !o)
                    return e === T ? -1 : t === T ? 1 : i ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                if (i === o)
                    return le(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[r] === a[r]; )
                    r++;
                return r ? le(s[r], a[r]) : s[r] === b ? -1 : a[r] === b ? 1 : 0
            }
            ),
            T
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T && S(e),
            t = t.replace(V, "='$1']"),
            p.matchesSelector && E && !_[t + " "] && (!l || !l.test(t)) && (!v || !v.test(t)))
                try {
                    var n = m.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < oe(t, T, null, [e]).length
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== T && S(e),
            y(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== T && S(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && D.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(ne, re)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (c = !p.detectDuplicates,
            u = !p.sortStable && e.slice(0),
            e.sort(N),
            c) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = oe.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (x = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = j[e + " "];
                    return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && j(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(d, e, t, g, v) {
                    var m = "nth" !== d.slice(0, 3)
                      , y = "last" !== d.slice(-4)
                      , b = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, s, a, u, c = m != y ? "nextSibling" : "previousSibling", l = e.parentNode, f = b && e.nodeName.toLowerCase(), h = !n && !b, p = !1;
                        if (l) {
                            if (m) {
                                for (; c; ) {
                                    for (s = e; s = s[c]; )
                                        if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                            return !1;
                                    u = c = "only" === d && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [y ? l.firstChild : l.lastChild],
                            y && h) {
                                for (p = (a = (r = (i = (o = (s = l)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && r[1]) && r[2],
                                s = a && l.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || u.pop(); )
                                    if (1 === s.nodeType && ++p && s === e) {
                                        i[d] = [k, a, p];
                                        break
                                    }
                            } else if (h && (p = a = (r = (i = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === k && r[1]),
                            !1 === p)
                                for (; (s = ++a && s && s[c] || (p = a = 0) || u.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (h && ((i = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] = [k, p]),
                                s !== e)); )
                                    ;
                            return (p -= v) === g || p % g == 0 && 0 <= p / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                        for (var n, r = s(e, o), i = r.length; i--; )
                            e[n = I(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var r = []
                      , i = []
                      , a = h(e.replace(z, "$1"));
                    return a[C] ? ae(function(e, t, n, r) {
                        for (var i, o = a(e, null, r, []), s = e.length; s--; )
                            (i = o[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        a(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: ae(function(t) {
                    return function(e) {
                        return 0 < oe(t, e).length
                    }
                }),
                contains: ae(function(t) {
                    return t = t.replace(te, f),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                lang: ae(function(n) {
                    return X.test(n || "") || oe.error("unsupported lang: " + n),
                    n = n.replace(te, f).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: de(function() {
                    return [0]
                }),
                last: de(function(e, t) {
                    return [t - 1]
                }),
                eq: de(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: de(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: de(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: de(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: de(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = fe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = he(e);
        function ve() {}
        function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ye(a, e, t) {
            var u = e.dir
              , c = e.next
              , l = c || u
              , f = t && "parentNode" === l
              , h = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u]; )
                    if (1 === e.nodeType || f)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, s = [k, h];
                if (n) {
                    for (; e = e[u]; )
                        if ((1 === e.nodeType || f) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[u]; )
                        if (1 === e.nodeType || f)
                            if (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            c && c === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[l]) && r[0] === k && r[1] === h)
                                    return s[2] = r[2];
                                if ((i[l] = s)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function be(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function xe(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function we(p, d, g, v, m, e) {
            return v && !v[C] && (v = we(v)),
            m && !m[C] && (m = we(m, e)),
            ae(function(e, t, n, r) {
                var i, o, s, a = [], u = [], c = t.length, l = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        oe(e, t[r], n);
                    return n
                }(d || "*", n.nodeType ? [n] : n, []), f = !p || !e && d ? l : xe(l, a, p, n, r), h = g ? m || (e ? p : c || v) ? [] : t : f;
                if (g && g(f, h, n, r),
                v)
                    for (i = xe(h, u),
                    v(i, [], n, r),
                    o = i.length; o--; )
                        (s = i[o]) && (h[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (m || p) {
                        if (m) {
                            for (i = [],
                            o = h.length; o--; )
                                (s = h[o]) && i.push(f[o] = s);
                            m(null, h = [], i, r)
                        }
                        for (o = h.length; o--; )
                            (s = h[o]) && -1 < (i = m ? I(e, s) : a[o]) && (e[i] = !(t[i] = s))
                    }
                } else
                    h = xe(h === t ? h.splice(c, h.length) : h),
                    m ? m(null, t, h, r) : M.apply(t, h)
            })
        }
        function Se(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = ye(function(e) {
                return e === i
            }, s, !0), c = ye(function(e) {
                return -1 < I(i, e)
            }, s, !0), l = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : c(e, t, n));
                return i = null,
                r
            }
            ]; a < r; a++)
                if (t = x.relative[e[a].type])
                    l = [ye(be(l), t)];
                else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[C]) {
                        for (n = ++a; n < r && !x.relative[e[n].type]; n++)
                            ;
                        return we(1 < a && be(l), 1 < a && me(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(z, "$1"), t, a < n && Se(e.slice(a, n)), n < r && Se(e = e.slice(n)), n < r && me(e))
                    }
                    l.push(t)
                }
            return be(l)
        }
        function Te(v, m) {
            function e(e, t, n, r, i) {
                var o, s, a, u = 0, c = "0", l = e && [], f = [], h = w, p = e || b && x.find.TAG("*", i), d = k += null == h ? 1 : Math.random() || .1, g = p.length;
                for (i && (w = t === T || t || i); c !== g && null != (o = p[c]); c++) {
                    if (b && o) {
                        for (s = 0,
                        t || o.ownerDocument === T || (S(o),
                        n = !E); a = v[s++]; )
                            if (a(o, t || T, n)) {
                                r.push(o);
                                break
                            }
                        i && (k = d)
                    }
                    y && ((o = !a && o) && u--,
                    e && l.push(o))
                }
                if (u += c,
                y && c !== u) {
                    for (s = 0; a = m[s++]; )
                        a(l, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; c--; )
                                l[c] || f[c] || (f[c] = H.call(r));
                        f = xe(f)
                    }
                    M.apply(r, f),
                    i && !e && 0 < f.length && 1 < u + m.length && oe.uniqueSort(r)
                }
                return i && (k = d,
                w = h),
                l
            }
            var y = 0 < m.length
              , b = 0 < v.length;
            return y ? ae(e) : e
        }
        return ve.prototype = x.filters = x.pseudos,
        x.setFilters = new ve,
        d = oe.tokenize = function(e, t) {
            var n, r, i, o, s, a, u, c = A[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            a = [],
            u = x.preFilter; s; ) {
                for (o in n && !(r = W.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                a.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                s = s.slice(n.length)),
                x.filter)
                    !(r = J[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : A(e, a).slice(0)
        }
        ,
        h = oe.compile = function(e, t) {
            var n, r = [], i = [], o = _[e + " "];
            if (!o) {
                for (n = (t = t || d(e)).length; n--; )
                    (o = Se(t[n]))[C] ? r.push(o) : i.push(o);
                (o = _(e, Te(i, r))).selector = e
            }
            return o
        }
        ,
        g = oe.select = function(e, t, n, r) {
            var i, o, s, a, u, c = "function" == typeof e && e, l = !r && d(e = c.selector || e);
            if (n = n || [],
            1 === l.length) {
                if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(te, f), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = J.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !x.relative[a = s.type]); )
                    if ((u = x.find[a]) && (r = u(s.matches[0].replace(te, f), ee.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && me(o)))
                            return M.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || h(e, l))(r, t, !E, n, !t || ee.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = C.split("").sort(N).join("") === C,
        p.detectDuplicates = !!c,
        S(),
        p.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(P, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(T);
    C.find = p,
    C.expr = p.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = p.uniqueSort,
    C.text = p.getText,
    C.isXMLDoc = p.isXML,
    C.contains = p.contains,
    C.escapeSelector = p.escape;
    function d(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && C(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function S(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var k = C.expr.match.needsContext;
    function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function _(e, n, r) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : C.filter(n, e, r)
    }
    C.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    C.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                C.find(e, i[t], n);
            return 1 < r ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(_(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(_(this, e || [], !0))
        },
        is: function(e) {
            return !!_(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length
        }
    });
    var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || N,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof C ? t[0] : t,
            C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
            A.test(r[1]) && C.isPlainObject(t))
                for (r in t)
                    b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i,
        this.length = 1),
        this
    }
    ).prototype = C.fn,
    N = C(E);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof e && C(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(C(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return M(e, "nextSibling")
        },
        prev: function(e) {
            return M(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e),
            C.merge([], e.childNodes))
        }
    }, function(r, i) {
        C.fn[r] = function(e, t) {
            var n = C.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = C.filter(t, n)),
            1 < this.length && (O[r] || C.uniqueSort(n),
            H.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function I(e) {
        return e
    }
    function P(e) {
        throw e
    }
    function q(e, t, n, r) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(r) {
        r = "string" == typeof r ? function(e) {
            var n = {};
            return C.each(e.match(L) || [], function(e, t) {
                n[t] = !0
            }),
            n
        }(r) : C.extend({}, r);
        function n() {
            for (o = o || r.once,
            t = i = !0; a.length; u = -1)
                for (e = a.shift(); ++u < s.length; )
                    !1 === s[u].apply(e[0], e[1]) && r.stopOnFalse && (u = s.length,
                    e = !1);
            r.memory || (e = !1),
            i = !1,
            o && (s = e ? [] : "")
        }
        var i, e, t, o, s = [], a = [], u = -1, c = {
            add: function() {
                return s && (e && !i && (u = s.length - 1,
                a.push(e)),
                function n(e) {
                    C.each(e, function(e, t) {
                        b(t) ? r.unique && c.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                e && !i && n()),
                this
            },
            remove: function() {
                return C.each(arguments, function(e, t) {
                    for (var n; -1 < (n = C.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s = s && [],
                this
            },
            disable: function() {
                return o = a = [],
                s = e = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return o = a = [],
                e || i || (s = e = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, t) {
                return o || (t = [e, (t = t || []).slice ? t.slice() : t],
                a.push(t),
                i || n()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return c
    }
    ,
    C.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , s = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return C.Deferred(function(r) {
                        C.each(o, function(e, t) {
                            var n = b(i[t[4]]) && i[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function c(i, o, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = s.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    b(t) ? a ? t.call(e, c(u, o, I, a), c(u, o, P, a)) : (u++,
                                    t.call(e, c(u, o, I, a), c(u, o, P, a), c(u, o, I, o.notifyWith))) : (s !== I && (n = void 0,
                                    r = [e]),
                                    (a || o.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (s !== P && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()),
                            T.setTimeout(t))
                        }
                    }
                    return C.Deferred(function(e) {
                        o[0][3].add(c(0, e, b(r) ? r : I, e.notifyWith)),
                        o[1][3].add(c(0, e, b(t) ? t : I)),
                        o[2][3].add(c(0, e, b(n) ? n : P))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, s) : s
                }
            }
              , a = {};
            return C.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                s[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this,
                    o[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(i, o)
                }
            }
            var n = arguments.length
              , r = n
              , i = Array(r)
              , o = a.call(arguments)
              , s = C.Deferred();
            if (n <= 1 && (q(e, s.done(t(r)).resolve, s.reject, !n),
            "pending" === s.state() || b(o[r] && o[r].then)))
                return s.then();
            for (; r--; )
                q(o[r], t(r), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    C.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ;
    var B = C.Deferred();
    function F() {
        E.removeEventListener("DOMContentLoaded", F),
        T.removeEventListener("load", F),
        C.ready()
    }
    C.fn.ready = function(e) {
        return B.then(e).catch(function(e) {
            C.readyException(e)
        }),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || B.resolveWith(E, [C])
        }
    }),
    C.ready.then = B.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? T.setTimeout(C.ready) : (E.addEventListener("DOMContentLoaded", F),
    T.addEventListener("load", F));
    var $ = function(e, t, n, r, i, o, s) {
        var a = 0
          , u = e.length
          , c = null == n;
        if ("object" === w(n))
            for (a in i = !0,
            n)
                $(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
        b(r) || (s = !0),
        c && (t = s ? (t.call(e, r),
        null) : (c = t,
        function(e, t, n) {
            return c.call(C(e), n)
        }
        )),
        t))
            for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , W = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(W, U)
    }
    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function X() {
        this.expando = C.expando + X.uid++
    }
    X.uid = 1,
    X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[V(t)] = n;
            else
                for (r in t)
                    i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(L) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var J = new X
      , Q = new X
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Y = /[A-Z]/g;
    function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Y, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return Q.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }),
    C.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    Q.set(this, n)
                }) : $(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                    this.each(function() {
                        Q.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = Q.get(o),
            1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = V(r.slice(5)),
                    Z(o, r, i[r]));
                J.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    C.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = J.get(e, t),
                n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                C.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1, o = C.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (r = J.get(s[a], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    function ee(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = s[o];
        return i
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
    };
    function oe(e, t, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return C.css(e, t, "")
        }
        , u = a(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), l = (C.cssNumber[t] || "px" !== c && +u) && ne.exec(C.css(e, t));
        if (l && l[3] !== c) {
            for (u /= 2,
            c = c || l[3],
            l = +u || 1; s--; )
                C.style(e, t, l + c),
                (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                l /= o;
            l *= 2,
            C.style(e, t, l + c),
            n = n || []
        }
        return n && (l = +l || +u || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = c,
        r.start = l,
        r.end = i)),
        i
    }
    var se = {};
    function ae(e, t) {
        for (var n, r, i, o, s, a, u, c = [], l = 0, f = e.length; l < f; l++)
            (r = e[l]).style && (n = r.style.display,
            t ? ("none" === n && (c[l] = J.get(r, "display") || null,
            c[l] || (r.style.display = "")),
            "" === r.style.display && ie(r) && (c[l] = (u = s = o = void 0,
            s = (i = r).ownerDocument,
            a = i.nodeName,
            (u = se[a]) || (o = s.body.appendChild(s.createElement(a)),
            u = C.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            se[a] = u)))) : "none" !== n && (c[l] = "none",
            J.set(r, "display", n)));
        for (l = 0; l < f; l++)
            null != c[l] && (e[l].style.display = c[l]);
        return e
    }
    C.fn.extend({
        show: function() {
            return ae(this, !0)
        },
        hide: function() {
            return ae(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ie(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i
      , ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , le = /^$|^module$|\/(?:java|ecma)script/i
      , fe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function he(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && j(e, t) ? C.merge([e], n) : n
    }
    function pe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    fe.optgroup = fe.option,
    fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead,
    fe.th = fe.td;
    var de, ge, ve = /<|&#?\w+;/;
    function me(e, t, n, r, i) {
        for (var o, s, a, u, c, l, f = t.createDocumentFragment(), h = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === w(o))
                    C.merge(h, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (ce.exec(o) || ["", ""])[1].toLowerCase(),
                    u = fe[a] || fe._default,
                    s.innerHTML = u[1] + C.htmlPrefilter(o) + u[2],
                    l = u[0]; l--; )
                        s = s.lastChild;
                    C.merge(h, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (f.textContent = "",
        p = 0; o = h[p++]; )
            if (r && -1 < C.inArray(o, r))
                i && i.push(o);
            else if (c = C.contains(o.ownerDocument, o),
            s = he(f.appendChild(o), "script"),
            c && pe(s),
            n)
                for (l = 0; o = s[l++]; )
                    le.test(o.type || "") && n.push(o);
        return f
    }
    de = E.createDocumentFragment().appendChild(E.createElement("div")),
    (ge = E.createElement("input")).setAttribute("type", "radio"),
    ge.setAttribute("checked", "checked"),
    ge.setAttribute("name", "t"),
    de.appendChild(ge),
    y.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked,
    de.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue;
    var ye = E.documentElement
      , be = /^key/
      , xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , we = /^([^.]*)(?:\.(.+)|)/;
    function Se() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ee() {
        try {
            return E.activeElement
        } catch (e) {}
    }
    function Ce(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ce(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        (i = function(e) {
            return C().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = C.guid++)),
        e.each(function() {
            C.event.add(this, t, i, r, n)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, c, l, f, h, p, d, g, v = J.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && C.find.matchesSelector(ye, i),
                n.guid || (n.guid = C.guid++),
                (u = v.events) || (u = v.events = {}),
                (s = v.handle) || (s = v.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(L) || [""]).length; c--; )
                    p = g = (a = we.exec(e[c]) || [])[1],
                    d = (a[2] || "").split(".").sort(),
                    p && (f = C.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = C.event.special[p] || {},
                    l = C.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o),
                    (h = u[p]) || ((h = u[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, d, s) || t.addEventListener && t.addEventListener(p, s)),
                    f.add && (f.add.call(t, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                    C.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, c, l, f, h, p, d, g, v = J.hasData(e) && J.get(e);
            if (v && (u = v.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--; )
                    if (p = g = (a = we.exec(t[c]) || [])[1],
                    d = (a[2] || "").split(".").sort(),
                    p) {
                        for (f = C.event.special[p] || {},
                        h = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            l = h[o],
                            !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1),
                            l.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, l));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, d, v.handle) || C.removeEvent(e, p, v.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            C.event.remove(e, p + t[c], n, r, !0);
                C.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = C.event.fix(e), u = new Array(arguments.length), c = (J.get(this, "events") || {})[a.type] || [], l = C.event.special[a.type] || {};
            for (u[0] = a,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (a.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (s = C.event.handlers.call(this, a, c),
                t = 0; (i = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(),
                        a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], u = t.delegateCount, c = e.target;
            if (u && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < u; n++)
                            void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < C(i, this).index(c) : C.find(i, this, null, [c]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            u < t.length && a.push({
                elem: c,
                handlers: t.slice(u)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ee() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ee() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && j(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return j(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    C.Event = function(e, t) {
        if (!(this instanceof C.Event))
            return new C.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[C.expando] = !0
    }
    ,
    C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Se,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Se,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Se,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        C.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    C.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Te),
                this.each(function() {
                    C.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , je = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ne(e, t) {
        return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e),
            s = J.set(t, o),
            c = o.events))
                for (i in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    r = c[i].length; n < r; n++)
                        C.event.add(t, i, c[i][n]);
            Q.hasData(e) && (a = Q.access(e),
            u = C.extend({}, a),
            Q.set(t, u))
        }
    }
    function Me(n, r, i, o) {
        r = v.apply([], r);
        var e, t, s, a, u, c, l = 0, f = n.length, h = f - 1, p = r[0], d = b(p);
        if (d || 1 < f && "string" == typeof p && !y.checkClone && Ae.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                d && (r[0] = p.call(this, e, t.html())),
                Me(t, r, i, o)
            });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = C.map(he(e, "script"), De)).length; l < f; l++)
                u = e,
                l !== h && (u = C.clone(u, !0, !0),
                a && C.merge(s, he(u, "script"))),
                i.call(n[l], u, l);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                C.map(s, He),
                l = 0; l < a; l++)
                    u = s[l],
                    le.test(u.type || "") && !J.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : x(u.textContent.replace(_e, ""), c, u))
        }
        return n
    }
    function Le(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || C.cleanData(he(r)),
            r.parentNode && (n && C.contains(r.ownerDocument, r) && pe(he(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, c, l = e.cloneNode(!0), f = C.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = he(l),
                r = 0,
                i = (o = he(e)).length; r < i; r++)
                    a = o[r],
                    u = s[r],
                    void 0,
                    "input" === (c = u.nodeName.toLowerCase()) && ue.test(a.type) ? u.checked = a.checked : "input" !== c && "textarea" !== c || (u.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || he(e),
                    s = s || he(l),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], s[r]);
                else
                    Oe(e, l);
            return 0 < (s = he(l, "script")).length && pe(s, !f && he(e, "script")),
            l
        },
        cleanData: function(e) {
            for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Me(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (C.cleanData(he(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !je.test(e) && !fe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (C.cleanData(he(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Me(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(he(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, n = [], r = C(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                C(r[o])[s](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Ie, Pe, qe, Re, Be, Fe, $e, ze = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i"), We = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = T),
        t.getComputedStyle(e)
    }, Ue = new RegExp(re.join("|"),"i");
    function Ve() {
        if ($e) {
            Fe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
            $e.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
            ye.appendChild(Fe).appendChild($e);
            var e = T.getComputedStyle($e);
            Ie = "1%" !== e.top,
            Be = 12 === Ge(e.marginLeft),
            $e.style.right = "60%",
            Re = 36 === Ge(e.right),
            Pe = 36 === Ge(e.width),
            $e.style.position = "absolute",
            qe = 36 === $e.offsetWidth || "absolute",
            ye.removeChild(Fe),
            $e = null
        }
    }
    function Ge(e) {
        return Math.round(parseFloat(e))
    }
    function Xe(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)),
        !y.pixelBoxStyles() && ze.test(s) && Ue.test(t) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Je(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Fe = E.createElement("div"),
    ($e = E.createElement("div")).style && ($e.style.backgroundClip = "content-box",
    $e.cloneNode(!0).style.backgroundClip = "",
    y.clearCloneStyle = "content-box" === $e.style.backgroundClip,
    C.extend(y, {
        boxSizingReliable: function() {
            return Ve(),
            Pe
        },
        pixelBoxStyles: function() {
            return Ve(),
            Re
        },
        pixelPosition: function() {
            return Ve(),
            Ie
        },
        reliableMarginLeft: function() {
            return Ve(),
            Be
        },
        scrollboxSize: function() {
            return Ve(),
            qe
        }
    }));
    var Qe = /^(none|table(?!-c[ea]).+)/
      , Ke = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ze = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , et = ["Webkit", "Moz", "ms"]
      , tt = E.createElement("div").style;
    function nt(e) {
        var t = C.cssProps[e];
        return t = t || (C.cssProps[e] = function(e) {
            if (e in tt)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--; )
                if ((e = et[n] + t)in tt)
                    return e
        }(e) || e)
    }
    function rt(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function it(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (u += C.css(e, n + re[s], !0, i)),
            r ? ("content" === n && (u -= C.css(e, "padding" + re[s], !0, i)),
            "margin" !== n && (u -= C.css(e, "border" + re[s] + "Width", !0, i))) : (u += C.css(e, "padding" + re[s], !0, i),
            "padding" !== n ? u += C.css(e, "border" + re[s] + "Width", !0, i) : a += C.css(e, "border" + re[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5))),
        u
    }
    function ot(e, t, n) {
        var r = We(e)
          , i = Xe(e, t, r)
          , o = "border-box" === C.css(e, "boxSizing", !1, r)
          , s = o;
        if (ze.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return s = s && (y.boxSizingReliable() || i === e.style[t]),
        "auto" !== i && (parseFloat(i) || "inline" !== C.css(e, "display", !1, r)) || (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        s = !0),
        (i = parseFloat(i) || 0) + it(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
    }
    function st(e, t, n, r, i) {
        return new st.prototype.init(e,t,n,r,i)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Xe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = V(t), u = Ke.test(t), c = e.style;
                if (u || (t = nt(a)),
                s = C.cssHooks[t] || C.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = oe(e, t, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[a] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = V(t);
            return Ke.test(t) || (t = nt(a)),
            (s = C.cssHooks[t] || C.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = Xe(e, t, r)),
            "normal" === i && t in Ze && (i = Ze[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    C.each(["height", "width"], function(e, a) {
        C.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !Qe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, a, n) : ee(e, Ye, function() {
                        return ot(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = We(e), o = "border-box" === C.css(e, "boxSizing", !1, i), s = n && it(e, a, n, o, i);
                return o && y.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - it(e, a, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t,
                t = C.css(e, a)),
                rt(0, t, s)
            }
        }
    }),
    C.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        C.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (C.cssHooks[i + o].set = rt)
    }),
    C.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = We(e),
                    i = t.length; s < i; s++)
                        o[t[s]] = C.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((C.Tween = st).prototype = {
        constructor: st,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || C.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : st.propHooks._default.set(this),
            this
        }
    }).init.prototype = st.prototype,
    (st.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    C.fx = st.prototype.init,
    C.fx.step = {};
    var at, ut, ct, lt, ft = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    function pt() {
        ut && (!1 === E.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(pt) : T.setTimeout(pt, C.fx.interval),
        C.fx.tick())
    }
    function dt() {
        return T.setTimeout(function() {
            at = void 0
        }),
        at = Date.now()
    }
    function gt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function vt(e, t, n) {
        for (var r, i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function mt(o, e, t) {
        var n, s, r = 0, i = mt.prefilters.length, a = C.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (s)
                return !1;
            for (var e = at || dt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), r = 0, i = c.tweens.length; r < i; r++)
                c.tweens[r].run(n);
            return a.notifyWith(o, [c, n, t]),
            n < 1 && i ? t : (i || a.notifyWith(o, [c, 1, 0]),
            a.resolveWith(o, [c]),
            !1)
        }, c = a.promise({
            elem: o,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: at || dt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? c.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < n; t++)
                    c.tweens[t].run(1);
                return e ? (a.notifyWith(o, [c, 1, 0]),
                a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]),
                this
            }
        }), l = c.props;
        for (!function(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (i = t[r = V(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (s = C.cssHooks[r]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(l, c.opts.specialEasing); r < i; r++)
            if (n = mt.prefilters[r].call(c, o, l, c.opts))
                return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n;
        return C.map(l, vt, c),
        b(c.opts.start) && c.opts.start.call(o, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        C.fx.timer(C.extend(u, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    C.Animation = C.extend(mt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = b(e) ? (t = e,
            ["*"]) : e.match(L)).length; r < i; r++)
                n = e[r],
                mt.tweeners[n] = mt.tweeners[n] || [],
                mt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, u, c, l, f = "width"in t || "height"in t, h = this, p = {}, d = e.style, g = e.nodeType && ie(e), v = J.get(e, "fxshow");
            for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            h.always(function() {
                h.always(function() {
                    s.unqueued--,
                    C.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ft.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    p[r] = v && v[r] || C.style(e, r)
                }
            if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (r in f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                null == (c = v && v.display) && (c = J.get(e, "display")),
                "none" === (l = C.css(e, "display")) && (c ? l = c : (ae([e], !0),
                c = e.style.display || c,
                l = C.css(e, "display"),
                ae([e]))),
                ("inline" === l || "inline-block" === l && null != c) && "none" === C.css(e, "float") && (u || (h.done(function() {
                    d.display = c
                }),
                null == c && (l = d.display,
                c = "none" === l ? "" : l)),
                d.display = "inline-block")),
                n.overflow && (d.overflow = "hidden",
                h.always(function() {
                    d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
                })),
                u = !1,
                p)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = J.access(e, "fxshow", {
                        display: c
                    }),
                    o && (v.hidden = !g),
                    g && ae([e], !0),
                    h.done(function() {
                        for (r in g || ae([e]),
                        J.remove(e, "fxshow"),
                        p)
                            C.style(e, r, p[r])
                    })),
                    u = vt(g ? v[r] : 0, r, h),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
        }
    }),
    C.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            b(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    C.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ie).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = mt(this, C.extend({}, t), s);
                (o || J.get(this, "finish")) && e.stop(!0)
            }
            var o = C.isEmptyObject(t)
              , s = C.speed(e, n, r);
            return i.finish = i,
            o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = C.timers
                  , r = J.get(this);
                if (t)
                    r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ht.test(t) && s(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || C.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = J.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = C.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                C.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(e, r) {
        var i = C.fn[r];
        C.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
        }
    }),
    C.each({
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        C.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var e, t = 0, n = C.timers;
        for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(),
        at = void 0
    }
    ,
    C.fx.timer = function(e) {
        C.timers.push(e),
        C.fx.start()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        ut || (ut = !0,
        pt())
    }
    ,
    C.fx.stop = function() {
        ut = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }
    ,
    ct = E.createElement("input"),
    lt = E.createElement("select").appendChild(E.createElement("option")),
    ct.type = "checkbox",
    y.checkOn = "" !== ct.value,
    y.optSelected = lt.selected,
    (ct = E.createElement("input")).value = "t",
    ct.type = "radio",
    y.radioValue = "t" === ct.value;
    var yt, bt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return $(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }),
    C.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && j(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(L);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    yt = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || C.find.attr;
        bt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = bt[o],
            bt[o] = r,
            r = null != s(e, t, n) ? o : null,
            bt[o] = i),
            r
        }
    });
    var xt = /^(?:input|select|textarea|button)$/i
      , wt = /^(?:a|area)$/i;
    function St(e) {
        return (e.match(L) || []).join(" ")
    }
    function Tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Et(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return $(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }),
    C.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                i = C.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    y.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    C.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, Tt(this)))
                });
            if ((e = Et(t)).length)
                for (; n = this[u++]; )
                    if (i = Tt(n),
                    r = 1 === n.nodeType && " " + St(i) + " ") {
                        for (s = 0; o = e[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = St(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, Tt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Et(t)).length)
                for (; n = this[u++]; )
                    if (i = Tt(n),
                    r = 1 === n.nodeType && " " + St(i) + " ") {
                        for (s = 0; o = e[s++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (a = St(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , s = "string" == o || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
                C(this).toggleClass(i.call(this, e, Tt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (s)
                    for (t = 0,
                    n = C(this),
                    r = Et(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" != o || ((e = Tt(this)) && J.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + St(Tt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    C.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = b(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : St(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        },
        y.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in T;
    function kt(e) {
        e.stopPropagation()
    }
    var jt = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, u, c, l, f, h = [n || E], p = m.call(e, "type") ? e.type : e, d = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !jt.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
            d.sort()),
            u = p.indexOf(":") < 0 && "on" + p,
            (e = e[C.expando] ? e : new C.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : C.makeArray(t, [e]),
            l = C.event.special[p] || {},
            r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (a = l.delegateType || p,
                    jt.test(a + p) || (o = o.parentNode); o; o = o.parentNode)
                        h.push(o),
                        s = o;
                    s === (n.ownerDocument || E) && h.push(s.defaultView || s.parentWindow || T)
                }
                for (i = 0; (o = h[i++]) && !e.isPropagationStopped(); )
                    f = o,
                    e.type = 1 < i ? a : l.bindType || p,
                    (c = (J.get(o, "events") || {})[e.type] && J.get(o, "handle")) && c.apply(o, t),
                    (c = u && o[u]) && c.apply && G(o) && (e.result = c.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(h.pop(), t) || !G(n) || u && b(n[p]) && !g(n) && ((s = n[u]) && (n[u] = null),
                C.event.triggered = p,
                e.isPropagationStopped() && f.addEventListener(p, kt),
                n[p](),
                e.isPropagationStopped() && f.removeEventListener(p, kt),
                C.event.triggered = void 0,
                s && (n[u] = s)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(r, null, t)
        }
    }),
    C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return C.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            C.event.simulate(r, e.target, C.event.fix(e))
        }
        C.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = J.access(e, r);
                t || e.addEventListener(n, i, !0),
                J.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = J.access(e, r) - 1;
                t ? J.access(e, r, t) : (e.removeEventListener(n, i, !0),
                J.remove(e, r))
            }
        }
    });
    var At = T.location
      , _t = Date.now()
      , Nt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
        t
    }
    ;
    var Dt = /\[\]$/
      , Ht = /\r?\n/g
      , Ot = /^(?:submit|button|image|reset|file)$/i
      , Mt = /^(?:input|select|textarea|keygen)/i;
    function Lt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            C.each(e, function(e, t) {
                r || Dt.test(n) ? i(n, t) : Lt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Lt(n + "[" + t + "]", e[t], r, i)
    }
    C.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var r, i = [];
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                Lt(r, e[r], t, n);
        return i.join("&")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Mt.test(this.nodeName) && !Ot.test(e) && (this.checked || !ue.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                }
            }).get()
        }
    });
    var It = /%20/g
      , Pt = /#.*$/
      , qt = /([?&])_=[^&]*/
      , Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Bt = /^(?:GET|HEAD)$/
      , Ft = /^\/\//
      , $t = {}
      , zt = {}
      , Wt = "*/".concat("*")
      , Ut = E.createElement("a");
    function Vt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(L) || [];
            if (b(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Gt(t, i, o, s) {
        var a = {}
          , u = t === zt;
        function c(e) {
            var r;
            return a[e] = !0,
            C.each(t[e] || [], function(e, t) {
                var n = t(i, o, s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                c(n),
                !1)
            }),
            r
        }
        return c(i.dataTypes[0]) || !a["*"] && c("*")
    }
    function Xt(e, t) {
        var n, r, i = C.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && C.extend(!0, e, r),
        e
    }
    Ut.href = At.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Vt($t),
        ajaxTransport: Vt(zt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var l, f, h, n, p, r, d, g, i, o, v = C.ajaxSetup({}, t), m = v.context || v, y = v.context && (m.nodeType || m.jquery) ? C(m) : C.event, b = C.Deferred(), x = C.Callbacks("once memory"), w = v.statusCode || {}, s = {}, a = {}, u = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (d) {
                        if (!n)
                            for (n = {}; t = Rt.exec(h); )
                                n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return d ? h : null
                },
                setRequestHeader: function(e, t) {
                    return null == d && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == d && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (d)
                            S.always(e[S.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return l && l.abort(t),
                    c(0, t),
                    this
                }
            };
            if (b.promise(S),
            v.url = ((e || v.url || At.href) + "").replace(Ft, At.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(L) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = C.param(v.data, v.traditional)),
            Gt($t, v, t, S),
            d)
                return S;
            for (i in (g = C.event && v.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Bt.test(v.type),
            f = v.url.replace(Pt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(It, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Nt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(qt, "$1"),
            o = (Nt.test(f) ? "&" : "?") + "_=" + _t++ + o),
            v.url = f + o),
            v.ifModified && (C.lastModified[f] && S.setRequestHeader("If-Modified-Since", C.lastModified[f]),
            C.etag[f] && S.setRequestHeader("If-None-Match", C.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && S.setRequestHeader("Content-Type", v.contentType),
            S.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                S.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, S, v) || d))
                return S.abort();
            if (u = "abort",
            x.add(v.complete),
            S.done(v.success),
            S.fail(v.error),
            l = Gt(zt, v, t, S)) {
                if (S.readyState = 1,
                g && y.trigger("ajaxSend", [S, v]),
                d)
                    return S;
                v.async && 0 < v.timeout && (p = T.setTimeout(function() {
                    S.abort("timeout")
                }, v.timeout));
                try {
                    d = !1,
                    l.send(s, c)
                } catch (e) {
                    if (d)
                        throw e;
                    c(-1, e)
                }
            } else
                c(-1, "No Transport");
            function c(e, t, n, r) {
                var i, o, s, a, u, c = t;
                d || (d = !0,
                p && T.clearTimeout(p),
                l = void 0,
                h = r || "",
                S.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, S, n)),
                a = function(e, t, n, r) {
                    var i, o, s, a, u, c = {}, l = e.dataTypes.slice();
                    if (l[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (o = l.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = l.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(s = c[u + " " + o] || c["* " + o]))
                                    for (i in c)
                                        if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0],
                                            l.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, a, S, i),
                i ? (v.ifModified && ((u = S.getResponseHeader("Last-Modified")) && (C.lastModified[f] = u),
                (u = S.getResponseHeader("etag")) && (C.etag[f] = u)),
                204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state,
                o = a.data,
                i = !(s = a.error))) : (s = c,
                !e && c || (c = "error",
                e < 0 && (e = 0))),
                S.status = e,
                S.statusText = (t || c) + "",
                i ? b.resolveWith(m, [o, c, S]) : b.rejectWith(m, [S, c, s]),
                S.statusCode(w),
                w = void 0,
                g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [S, v, i ? o : s]),
                x.fireWith(m, [S, c]),
                g && (y.trigger("ajaxComplete", [S, v]),
                --C.active || C.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], function(e, i) {
        C[i] = function(e, t, n, r) {
            return b(t) && (r = r || n,
            n = t,
            t = void 0),
            C.ajax(C.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }),
    C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])),
            t = C(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }
    ,
    C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    C.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Jt = {
        0: 200,
        1223: 204
    }
      , Qt = C.ajaxSettings.xhr();
    y.cors = !!Qt && "withCredentials"in Qt,
    y.ajax = Qt = !!Qt,
    C.ajaxTransport(function(i) {
        var o, s;
        if (y.cors || Qt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Jt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    s = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && T.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e),
                e
            }
        }
    }),
    C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    C.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    r = C("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Kt, Yt = [], Zt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || C.expando + "_" + _t++;
            return this[e] = !0,
            e
        }
    }),
    C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || C.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = T[r],
            T[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? C(T).removeProp(r) : T[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Yt.push(r)),
                o && b(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Kt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Kt.childNodes.length),
    C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = A.exec(e)) ? [t.createElement(i[1])] : (i = me([e], t, o),
        o && o.length && C(o).remove(),
        C.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    C.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        return -1 < a && (r = St(e.slice(a)),
        e = e.slice(0, a)),
        b(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && C.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    C.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, c = C.css(e, "position"), l = C(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = l.offset(),
            o = C.css(e, "top"),
            u = C.css(e, "left"),
            i = ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto") ? (s = (r = l.position()).top,
            r.left) : (s = parseFloat(o) || 0,
            parseFloat(u) || 0),
            b(t) && (t = t.call(e, n, C.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, f) : l.css(f)
        }
    },
    C.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === C.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                    i.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - C.css(r, "marginTop", !0),
                    left: t.left - i.left - C.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                    e = e.offsetParent;
                return e || ye
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        C.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
            if (t)
                return t = Xe(e, n),
                ze.test(t) ? C(e).position()[n] + "px" : t
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        C.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    C.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        b(e))
            return r = a.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || C.guid++,
            i
    }
    ,
    C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }
    ,
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = j,
    C.isFunction = b,
    C.isWindow = g,
    C.camelCase = V,
    C.type = w,
    C.now = Date.now,
    C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var en = T.jQuery
      , tn = T.$;
    return C.noConflict = function(e) {
        return T.$ === C && (T.$ = tn),
        e && T.jQuery === C && (T.jQuery = en),
        C
    }
    ,
    e || (T.jQuery = T.$ = C),
    C
}),
function() {
    function n() {}
    var e = this
      , t = e._
      , r = Array.prototype
      , s = Object.prototype
      , i = Function.prototype
      , o = r.push
      , u = r.slice
      , f = s.toString
      , a = s.hasOwnProperty
      , c = Array.isArray
      , l = Object.keys
      , h = i.bind
      , p = Object.create
      , d = function(e) {
        return e instanceof d ? e : this instanceof d ? void (this._wrapped = e) : new d(e)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = d),
    exports._ = d) : e._ = d,
    d.VERSION = "1.8.3";
    var g = function(i, o, e) {
        if (void 0 === o)
            return i;
        switch (null == e ? 3 : e) {
        case 1:
            return function(e) {
                return i.call(o, e)
            }
            ;
        case 2:
            return function(e, t) {
                return i.call(o, e, t)
            }
            ;
        case 3:
            return function(e, t, n) {
                return i.call(o, e, t, n)
            }
            ;
        case 4:
            return function(e, t, n, r) {
                return i.call(o, e, t, n, r)
            }
        }
        return function() {
            return i.apply(o, arguments)
        }
    }
      , v = function(e, t, n) {
        return null == e ? d.identity : d.isFunction(e) ? g(e, t, n) : d.isObject(e) ? d.matcher(e) : d.property(e)
    };
    d.iteratee = function(e, t) {
        return v(e, t, 1 / 0)
    }
    ;
    function m(u, c) {
        return function(e) {
            var t = arguments.length;
            if (t < 2 || null == e)
                return e;
            for (var n = 1; n < t; n++)
                for (var r = arguments[n], i = u(r), o = i.length, s = 0; s < o; s++) {
                    var a = i[s];
                    c && void 0 !== e[a] || (e[a] = r[a])
                }
            return e
        }
    }
    function y(e) {
        if (!d.isObject(e))
            return {};
        if (p)
            return p(e);
        n.prototype = e;
        var t = new n;
        return n.prototype = null,
        t
    }
    function b(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
    var x = Math.pow(2, 53) - 1
      , w = b("length")
      , S = function(e) {
        var t = w(e);
        return "number" == typeof t && 0 <= t && t <= x
    };
    function T(a) {
        return function(e, t, n, r) {
            t = g(t, r, 4);
            var i = !S(e) && d.keys(e)
              , o = (i || e).length
              , s = 0 < a ? 0 : o - 1;
            return arguments.length < 3 && (n = e[i ? i[s] : s],
            s += a),
            function(e, t, n, r, i, o) {
                for (; 0 <= i && i < o; i += a) {
                    var s = r ? r[i] : i;
                    n = t(n, e[s], s, e)
                }
                return n
            }(e, t, n, i, s, o)
        }
    }
    d.each = d.forEach = function(e, t, n) {
        var r, i;
        if (t = g(t, n),
        S(e))
            for (r = 0,
            i = e.length; r < i; r++)
                t(e[r], r, e);
        else {
            var o = d.keys(e);
            for (r = 0,
            i = o.length; r < i; r++)
                t(e[o[r]], o[r], e)
        }
        return e
    }
    ,
    d.map = d.collect = function(e, t, n) {
        t = v(t, n);
        for (var r = !S(e) && d.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
            var a = r ? r[s] : s;
            o[s] = t(e[a], a, e)
        }
        return o
    }
    ,
    d.reduce = d.foldl = d.inject = T(1),
    d.reduceRight = d.foldr = T(-1),
    d.find = d.detect = function(e, t, n) {
        var r;
        if (void 0 !== (r = S(e) ? d.findIndex(e, t, n) : d.findKey(e, t, n)) && -1 !== r)
            return e[r]
    }
    ,
    d.filter = d.select = function(e, r, t) {
        var i = [];
        return r = v(r, t),
        d.each(e, function(e, t, n) {
            r(e, t, n) && i.push(e)
        }),
        i
    }
    ,
    d.reject = function(e, t, n) {
        return d.filter(e, d.negate(v(t)), n)
    }
    ,
    d.every = d.all = function(e, t, n) {
        t = v(t, n);
        for (var r = !S(e) && d.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (!t(e[s], s, e))
                return !1
        }
        return !0
    }
    ,
    d.some = d.any = function(e, t, n) {
        t = v(t, n);
        for (var r = !S(e) && d.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var s = r ? r[o] : o;
            if (t(e[s], s, e))
                return !0
        }
        return !1
    }
    ,
    d.contains = d.includes = d.include = function(e, t, n, r) {
        return S(e) || (e = d.values(e)),
        "number" == typeof n && !r || (n = 0),
        0 <= d.indexOf(e, t, n)
    }
    ,
    d.invoke = function(e, n) {
        var r = u.call(arguments, 2)
          , i = d.isFunction(n);
        return d.map(e, function(e) {
            var t = i ? n : e[n];
            return null == t ? t : t.apply(e, r)
        })
    }
    ,
    d.pluck = function(e, t) {
        return d.map(e, d.property(t))
    }
    ,
    d.where = function(e, t) {
        return d.filter(e, d.matcher(t))
    }
    ,
    d.findWhere = function(e, t) {
        return d.find(e, d.matcher(t))
    }
    ,
    d.max = function(e, r, t) {
        var n, i, o = -1 / 0, s = -1 / 0;
        if (null == r && null != e)
            for (var a = 0, u = (e = S(e) ? e : d.values(e)).length; a < u; a++)
                n = e[a],
                o < n && (o = n);
        else
            r = v(r, t),
            d.each(e, function(e, t, n) {
                i = r(e, t, n),
                (s < i || i === -1 / 0 && o === -1 / 0) && (o = e,
                s = i)
            });
        return o
    }
    ,
    d.min = function(e, r, t) {
        var n, i, o = 1 / 0, s = 1 / 0;
        if (null == r && null != e)
            for (var a = 0, u = (e = S(e) ? e : d.values(e)).length; a < u; a++)
                (n = e[a]) < o && (o = n);
        else
            r = v(r, t),
            d.each(e, function(e, t, n) {
                ((i = r(e, t, n)) < s || i === 1 / 0 && o === 1 / 0) && (o = e,
                s = i)
            });
        return o
    }
    ,
    d.shuffle = function(e) {
        for (var t, n = S(e) ? e : d.values(e), r = n.length, i = Array(r), o = 0; o < r; o++)
            (t = d.random(0, o)) !== o && (i[o] = i[t]),
            i[t] = n[o];
        return i
    }
    ,
    d.sample = function(e, t, n) {
        return null == t || n ? (S(e) || (e = d.values(e)),
        e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, Math.max(0, t))
    }
    ,
    d.sortBy = function(e, r, t) {
        return r = v(r, t),
        d.pluck(d.map(e, function(e, t, n) {
            return {
                value: e,
                index: t,
                criteria: r(e, t, n)
            }
        }).sort(function(e, t) {
            var n = e.criteria
              , r = t.criteria;
            if (n !== r) {
                if (r < n || void 0 === n)
                    return 1;
                if (n < r || void 0 === r)
                    return -1
            }
            return e.index - t.index
        }), "value")
    }
    ;
    function E(s) {
        return function(r, i, e) {
            var o = {};
            return i = v(i, e),
            d.each(r, function(e, t) {
                var n = i(e, t, r);
                s(o, e, n)
            }),
            o
        }
    }
    d.groupBy = E(function(e, t, n) {
        d.has(e, n) ? e[n].push(t) : e[n] = [t]
    }),
    d.indexBy = E(function(e, t, n) {
        e[n] = t
    }),
    d.countBy = E(function(e, t, n) {
        d.has(e, n) ? e[n]++ : e[n] = 1
    }),
    d.toArray = function(e) {
        return e ? d.isArray(e) ? u.call(e) : S(e) ? d.map(e, d.identity) : d.values(e) : []
    }
    ,
    d.size = function(e) {
        return null == e ? 0 : S(e) ? e.length : d.keys(e).length
    }
    ,
    d.partition = function(e, r, t) {
        r = v(r, t);
        var i = []
          , o = [];
        return d.each(e, function(e, t, n) {
            (r(e, t, n) ? i : o).push(e)
        }),
        [i, o]
    }
    ,
    d.first = d.head = d.take = function(e, t, n) {
        if (null != e)
            return null == t || n ? e[0] : d.initial(e, e.length - t)
    }
    ,
    d.initial = function(e, t, n) {
        return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }
    ,
    d.last = function(e, t, n) {
        if (null != e)
            return null == t || n ? e[e.length - 1] : d.rest(e, Math.max(0, e.length - t))
    }
    ,
    d.rest = d.tail = d.drop = function(e, t, n) {
        return u.call(e, null == t || n ? 1 : t)
    }
    ,
    d.compact = function(e) {
        return d.filter(e, d.identity)
    }
    ;
    var C = function(e, t, n, r) {
        for (var i = [], o = 0, s = r || 0, a = w(e); s < a; s++) {
            var u = e[s];
            if (S(u) && (d.isArray(u) || d.isArguments(u))) {
                t || (u = C(u, t, n));
                var c = 0
                  , l = u.length;
                for (i.length += l; c < l; )
                    i[o++] = u[c++]
            } else
                n || (i[o++] = u)
        }
        return i
    };
    function k(o) {
        return function(e, t, n) {
            t = v(t, n);
            for (var r = w(e), i = 0 < o ? 0 : r - 1; 0 <= i && i < r; i += o)
                if (t(e[i], i, e))
                    return i;
            return -1
        }
    }
    function j(o, s, a) {
        return function(e, t, n) {
            var r = 0
              , i = w(e);
            if ("number" == typeof n)
                0 < o ? r = 0 <= n ? n : Math.max(n + i, r) : i = 0 <= n ? Math.min(n + 1, i) : n + i + 1;
            else if (a && n && i)
                return e[n = a(e, t)] === t ? n : -1;
            if (t != t)
                return 0 <= (n = s(u.call(e, r, i), d.isNaN)) ? n + r : -1;
            for (n = 0 < o ? r : i - 1; 0 <= n && n < i; n += o)
                if (e[n] === t)
                    return n;
            return -1
        }
    }
    d.flatten = function(e, t) {
        return C(e, t, !1)
    }
    ,
    d.without = function(e) {
        return d.difference(e, u.call(arguments, 1))
    }
    ,
    d.uniq = d.unique = function(e, t, n, r) {
        d.isBoolean(t) || (r = n,
        n = t,
        t = !1),
        null != n && (n = v(n, r));
        for (var i = [], o = [], s = 0, a = w(e); s < a; s++) {
            var u = e[s]
              , c = n ? n(u, s, e) : u;
            t ? (s && o === c || i.push(u),
            o = c) : n ? d.contains(o, c) || (o.push(c),
            i.push(u)) : d.contains(i, u) || i.push(u)
        }
        return i
    }
    ,
    d.union = function() {
        return d.uniq(C(arguments, !0, !0))
    }
    ,
    d.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = w(e); r < i; r++) {
            var o = e[r];
            if (!d.contains(t, o)) {
                for (var s = 1; s < n && d.contains(arguments[s], o); s++)
                    ;
                s === n && t.push(o)
            }
        }
        return t
    }
    ,
    d.difference = function(e) {
        var t = C(arguments, !0, !0, 1);
        return d.filter(e, function(e) {
            return !d.contains(t, e)
        })
    }
    ,
    d.zip = function() {
        return d.unzip(arguments)
    }
    ,
    d.unzip = function(e) {
        for (var t = e && d.max(e, w).length || 0, n = Array(t), r = 0; r < t; r++)
            n[r] = d.pluck(e, r);
        return n
    }
    ,
    d.object = function(e, t) {
        for (var n = {}, r = 0, i = w(e); r < i; r++)
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }
    ,
    d.findIndex = k(1),
    d.findLastIndex = k(-1),
    d.sortedIndex = function(e, t, n, r) {
        for (var i = (n = v(n, r, 1))(t), o = 0, s = w(e); o < s; ) {
            var a = Math.floor((o + s) / 2);
            n(e[a]) < i ? o = a + 1 : s = a
        }
        return o
    }
    ,
    d.indexOf = j(1, d.findIndex, d.sortedIndex),
    d.lastIndexOf = j(-1, d.findLastIndex),
    d.range = function(e, t, n) {
        null == t && (t = e || 0,
        e = 0),
        n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++,
        e += n)
            i[o] = e;
        return i
    }
    ;
    function A(e, t, n, r, i) {
        if (!(r instanceof t))
            return e.apply(n, i);
        var o = y(e.prototype)
          , s = e.apply(o, i);
        return d.isObject(s) ? s : o
    }
    d.bind = function(e, t) {
        if (h && e.bind === h)
            return h.apply(e, u.call(arguments, 1));
        if (!d.isFunction(e))
            throw new TypeError("Bind must be called on a function");
        var n = u.call(arguments, 2)
          , r = function() {
            return A(e, r, t, this, n.concat(u.call(arguments)))
        };
        return r
    }
    ,
    d.partial = function(i) {
        var o = u.call(arguments, 1)
          , s = function() {
            for (var e = 0, t = o.length, n = Array(t), r = 0; r < t; r++)
                n[r] = o[r] === d ? arguments[e++] : o[r];
            for (; e < arguments.length; )
                n.push(arguments[e++]);
            return A(i, s, this, this, n)
        };
        return s
    }
    ,
    d.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (r <= 1)
            throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++)
            e[n = arguments[t]] = d.bind(e[n], e);
        return e
    }
    ,
    d.memoize = function(r, i) {
        var o = function(e) {
            var t = o.cache
              , n = "" + (i ? i.apply(this, arguments) : e);
            return d.has(t, n) || (t[n] = r.apply(this, arguments)),
            t[n]
        };
        return o.cache = {},
        o
    }
    ,
    d.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }
    ,
    d.defer = d.partial(d.delay, d, 1),
    d.throttle = function(n, r, i) {
        var o, s, a, u = null, c = 0;
        i = i || {};
        function l() {
            c = !1 === i.leading ? 0 : d.now(),
            u = null,
            a = n.apply(o, s),
            u || (o = s = null)
        }
        return function() {
            var e = d.now();
            c || !1 !== i.leading || (c = e);
            var t = r - (e - c);
            return o = this,
            s = arguments,
            t <= 0 || r < t ? (u && (clearTimeout(u),
            u = null),
            c = e,
            a = n.apply(o, s),
            u || (o = s = null)) : u || !1 === i.trailing || (u = setTimeout(l, t)),
            a
        }
    }
    ,
    d.debounce = function(t, n, r) {
        var i, o, s, a, u, c = function() {
            var e = d.now() - a;
            e < n && 0 <= e ? i = setTimeout(c, n - e) : (i = null,
            r || (u = t.apply(s, o),
            i || (s = o = null)))
        };
        return function() {
            s = this,
            o = arguments,
            a = d.now();
            var e = r && !i;
            return i = i || setTimeout(c, n),
            e && (u = t.apply(s, o),
            s = o = null),
            u
        }
    }
    ,
    d.wrap = function(e, t) {
        return d.partial(t, e)
    }
    ,
    d.negate = function(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }
    ,
    d.compose = function() {
        var n = arguments
          , r = n.length - 1;
        return function() {
            for (var e = r, t = n[r].apply(this, arguments); e--; )
                t = n[e].call(this, t);
            return t
        }
    }
    ,
    d.after = function(e, t) {
        return function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }
    ,
    d.before = function(e, t) {
        var n;
        return function() {
            return 0 < --e && (n = t.apply(this, arguments)),
            e <= 1 && (t = null),
            n
        }
    }
    ,
    d.once = d.partial(d.before, 2);
    var _ = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , N = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    function D(e, t) {
        var n = N.length
          , r = e.constructor
          , i = d.isFunction(r) && r.prototype || s
          , o = "constructor";
        for (d.has(e, o) && !d.contains(t, o) && t.push(o); n--; )
            (o = N[n])in e && e[o] !== i[o] && !d.contains(t, o) && t.push(o)
    }
    d.keys = function(e) {
        if (!d.isObject(e))
            return [];
        if (l)
            return l(e);
        var t = [];
        for (var n in e)
            d.has(e, n) && t.push(n);
        return _ && D(e, t),
        t
    }
    ,
    d.allKeys = function(e) {
        if (!d.isObject(e))
            return [];
        var t = [];
        for (var n in e)
            t.push(n);
        return _ && D(e, t),
        t
    }
    ,
    d.values = function(e) {
        for (var t = d.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
            r[i] = e[t[i]];
        return r
    }
    ,
    d.mapObject = function(e, t, n) {
        t = v(t, n);
        for (var r, i = d.keys(e), o = i.length, s = {}, a = 0; a < o; a++)
            s[r = i[a]] = t(e[r], r, e);
        return s
    }
    ,
    d.pairs = function(e) {
        for (var t = d.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++)
            r[i] = [t[i], e[t[i]]];
        return r
    }
    ,
    d.invert = function(e) {
        for (var t = {}, n = d.keys(e), r = 0, i = n.length; r < i; r++)
            t[e[n[r]]] = n[r];
        return t
    }
    ,
    d.functions = d.methods = function(e) {
        var t = [];
        for (var n in e)
            d.isFunction(e[n]) && t.push(n);
        return t.sort()
    }
    ,
    d.extend = m(d.allKeys),
    d.extendOwn = d.assign = m(d.keys),
    d.findKey = function(e, t, n) {
        t = v(t, n);
        for (var r, i = d.keys(e), o = 0, s = i.length; o < s; o++)
            if (t(e[r = i[o]], r, e))
                return r
    }
    ,
    d.pick = function(e, t, n) {
        var r, i, o = {}, s = e;
        if (null == s)
            return o;
        d.isFunction(t) ? (i = d.allKeys(s),
        r = g(t, n)) : (i = C(arguments, !1, !1, 1),
        r = function(e, t, n) {
            return t in n
        }
        ,
        s = Object(s));
        for (var a = 0, u = i.length; a < u; a++) {
            var c = i[a]
              , l = s[c];
            r(l, c, s) && (o[c] = l)
        }
        return o
    }
    ,
    d.omit = function(e, t, n) {
        if (d.isFunction(t))
            t = d.negate(t);
        else {
            var r = d.map(C(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !d.contains(r, t)
            }
        }
        return d.pick(e, t, n)
    }
    ,
    d.defaults = m(d.allKeys, !0),
    d.create = function(e, t) {
        var n = y(e);
        return t && d.extendOwn(n, t),
        n
    }
    ,
    d.clone = function(e) {
        return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e
    }
    ,
    d.tap = function(e, t) {
        return t(e),
        e
    }
    ,
    d.isMatch = function(e, t) {
        var n = d.keys(t)
          , r = n.length;
        if (null == e)
            return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
            var s = n[o];
            if (t[s] !== i[s] || !(s in i))
                return !1
        }
        return !0
    }
    ;
    var H = function(e, t, n, r) {
        if (e === t)
            return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t)
            return e === t;
        e instanceof d && (e = e._wrapped),
        t instanceof d && (t = t._wrapped);
        var i = f.call(e);
        if (i !== f.call(t))
            return !1;
        switch (i) {
        case "[object RegExp]":
        case "[object String]":
            return "" + e == "" + t;
        case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t)
                return !1;
            var s = e.constructor
              , a = t.constructor;
            if (s !== a && !(d.isFunction(s) && s instanceof s && d.isFunction(a) && a instanceof a) && "constructor"in e && "constructor"in t)
                return !1
        }
        r = r || [];
        for (var u = (n = n || []).length; u--; )
            if (n[u] === e)
                return r[u] === t;
        if (n.push(e),
        r.push(t),
        o) {
            if ((u = e.length) !== t.length)
                return !1;
            for (; u--; )
                if (!H(e[u], t[u], n, r))
                    return !1
        } else {
            var c, l = d.keys(e);
            if (u = l.length,
            d.keys(t).length !== u)
                return !1;
            for (; u--; )
                if (c = l[u],
                !d.has(t, c) || !H(e[c], t[c], n, r))
                    return !1
        }
        return n.pop(),
        r.pop(),
        !0
    };
    d.isEqual = function(e, t) {
        return H(e, t)
    }
    ,
    d.isEmpty = function(e) {
        return null == e || (S(e) && (d.isArray(e) || d.isString(e) || d.isArguments(e)) ? 0 === e.length : 0 === d.keys(e).length)
    }
    ,
    d.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }
    ,
    d.isArray = c || function(e) {
        return "[object Array]" === f.call(e)
    }
    ,
    d.isObject = function(e) {
        var t = typeof e;
        return "function" == t || "object" == t && !!e
    }
    ,
    d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        d["is" + t] = function(e) {
            return f.call(e) === "[object " + t + "]"
        }
    }),
    d.isArguments(arguments) || (d.isArguments = function(e) {
        return d.has(e, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (d.isFunction = function(e) {
        return "function" == typeof e || !1
    }
    ),
    d.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }
    ,
    d.isNaN = function(e) {
        return d.isNumber(e) && e !== +e
    }
    ,
    d.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === f.call(e)
    }
    ,
    d.isNull = function(e) {
        return null === e
    }
    ,
    d.isUndefined = function(e) {
        return void 0 === e
    }
    ,
    d.has = function(e, t) {
        return null != e && a.call(e, t)
    }
    ,
    d.noConflict = function() {
        return e._ = t,
        this
    }
    ,
    d.identity = function(e) {
        return e
    }
    ,
    d.constant = function(e) {
        return function() {
            return e
        }
    }
    ,
    d.noop = function() {}
    ,
    d.property = b,
    d.propertyOf = function(t) {
        return null == t ? function() {}
        : function(e) {
            return t[e]
        }
    }
    ,
    d.matcher = d.matches = function(t) {
        return t = d.extendOwn({}, t),
        function(e) {
            return d.isMatch(e, t)
        }
    }
    ,
    d.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = g(t, n, 1);
        for (var i = 0; i < e; i++)
            r[i] = t(i);
        return r
    }
    ,
    d.random = function(e, t) {
        return null == t && (t = e,
        e = 0),
        e + Math.floor(Math.random() * (t - e + 1))
    }
    ,
    d.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    function O(t) {
        function n(e) {
            return t[e]
        }
        var e = "(?:" + d.keys(t).join("|") + ")"
          , r = RegExp(e)
          , i = RegExp(e, "g");
        return function(e) {
            return e = null == e ? "" : "" + e,
            r.test(e) ? e.replace(i, n) : e
        }
    }
    var M = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , L = d.invert(M);
    d.escape = O(M),
    d.unescape = O(L),
    d.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n),
        d.isFunction(r) ? r.call(e) : r
    }
    ;
    var I = 0;
    d.uniqueId = function(e) {
        var t = ++I + "";
        return e ? e + t : t
    }
    ,
    d.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    function P(e) {
        return "\\" + R[e]
    }
    var q = /(.)^/
      , R = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , B = /\\|'|\r|\n|\u2028|\u2029/g;
    d.template = function(o, e, t) {
        !e && t && (e = t),
        e = d.defaults({}, e, d.templateSettings);
        var n = RegExp([(e.escape || q).source, (e.interpolate || q).source, (e.evaluate || q).source].join("|") + "|$", "g")
          , s = 0
          , a = "__p+='";
        o.replace(n, function(e, t, n, r, i) {
            return a += o.slice(s, i).replace(B, P),
            s = i + e.length,
            t ? a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"),
            e
        }),
        a += "';\n",
        e.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            var r = new Function(e.variable || "obj","_",a)
        } catch (e) {
            throw e.source = a,
            e
        }
        function i(e) {
            return r.call(this, e, d)
        }
        var u = e.variable || "obj";
        return i.source = "function(" + u + "){\n" + a + "}",
        i
    }
    ,
    d.chain = function(e) {
        var t = d(e);
        return t._chain = !0,
        t
    }
    ;
    function F(e, t) {
        return e._chain ? d(t).chain() : t
    }
    d.mixin = function(n) {
        d.each(d.functions(n), function(e) {
            var t = d[e] = n[e];
            d.prototype[e] = function() {
                var e = [this._wrapped];
                return o.apply(e, arguments),
                F(this, t.apply(d, e))
            }
        })
    }
    ,
    d.mixin(d),
    d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var n = r[t];
        d.prototype[t] = function() {
            var e = this._wrapped;
            return n.apply(e, arguments),
            "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0],
            F(this, e)
        }
    }),
    d.each(["concat", "join", "slice"], function(e) {
        var t = r[e];
        d.prototype[e] = function() {
            return F(this, t.apply(this._wrapped, arguments))
        }
    }),
    d.prototype.value = function() {
        return this._wrapped
    }
    ,
    d.prototype.valueOf = d.prototype.toJSON = d.prototype.value,
    d.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return d
    })
}
.call(this),
function(r) {
    var i = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(e, t, n) {
            i.Backbone = r(i, n, e, t)
        });
    else if ("undefined" != typeof exports) {
        var e, t = require("underscore");
        try {
            e = require("jquery")
        } catch (e) {}
        r(i, exports, t, e)
    } else
        i.Backbone = r(i, {}, i._, i.jQuery || i.Zepto || i.ender || i.$)
}(function(e, u, S, t) {
    var n = e.Backbone
      , o = [].slice;
    u.VERSION = "1.2.1",
    u.$ = t,
    u.noConflict = function() {
        return e.Backbone = n,
        this
    }
    ,
    u.emulateHTTP = !1,
    u.emulateJSON = !1;
    function r(n, e, r) {
        S.each(e, function(e, t) {
            S[t] && (n.prototype[t] = function(e, r, i) {
                switch (e) {
                case 1:
                    return function() {
                        return S[r](this[i])
                    }
                    ;
                case 2:
                    return function(e) {
                        return S[r](this[i], e)
                    }
                    ;
                case 3:
                    return function(e, t) {
                        return S[r](this[i], e, t)
                    }
                    ;
                case 4:
                    return function(e, t, n) {
                        return S[r](this[i], e, t, n)
                    }
                    ;
                default:
                    return function() {
                        var e = o.call(arguments);
                        return e.unshift(this[i]),
                        S[r].apply(S, e)
                    }
                }
            }(e, t, r))
        })
    }
    function s(e, t, n, r, i) {
        var o, s = 0;
        if (n && "object" == typeof n) {
            void 0 !== r && "context"in i && void 0 === i.context && (i.context = r);
            for (o = S.keys(n); s < o.length; s++)
                t = e(t, o[s], n[o[s]], i)
        } else if (n && a.test(n))
            for (o = n.split(a); s < o.length; s++)
                t = e(t, o[s], r, i);
        else
            t = e(t, n, r, i);
        return t
    }
    var i = u.Events = {}
      , a = /\s+/;
    i.on = function(e, t, n) {
        return c(this, e, t, n)
    }
    ;
    var c = function(e, t, n, r, i) {
        e._events = s(l, e._events || {}, t, n, {
            context: r,
            ctx: e,
            listening: i
        }),
        i && ((e._listeners || (e._listeners = {}))[i.id] = i);
        return e
    };
    i.listenTo = function(e, t, n) {
        if (!e)
            return this;
        var r = e._listenId || (e._listenId = S.uniqueId("l"))
          , i = this._listeningTo || (this._listeningTo = {})
          , o = i[r];
        if (!o) {
            var s = this._listenId || (this._listenId = S.uniqueId("l"));
            o = i[r] = {
                obj: e,
                objId: r,
                id: s,
                listeningTo: i,
                count: 0
            }
        }
        return c(e, t, n, this, o),
        this
    }
    ;
    var l = function(e, t, n, r) {
        if (n) {
            var i = e[t] || (e[t] = [])
              , o = r.context
              , s = r.ctx
              , a = r.listening;
            a && a.count++,
            i.push({
                callback: n,
                context: o,
                ctx: o || s,
                listening: a
            })
        }
        return e
    };
    i.off = function(e, t, n) {
        return this._events && (this._events = s(f, this._events, e, t, {
            context: n,
            listeners: this._listeners
        })),
        this
    }
    ,
    i.stopListening = function(e, t, n) {
        var r = this._listeningTo;
        if (!r)
            return this;
        for (var i = e ? [e._listenId] : S.keys(r), o = 0; o < i.length; o++) {
            var s = r[i[o]];
            if (!s)
                break;
            s.obj.off(t, n, this)
        }
        return S.isEmpty(r) && (this._listeningTo = void 0),
        this
    }
    ;
    var f = function(e, t, n, r) {
        if (e) {
            var i, o = 0, s = r.context, a = r.listeners;
            if (t || n || s) {
                for (var u = t ? [t] : S.keys(e); o < u.length; o++) {
                    var c = e[t = u[o]];
                    if (!c)
                        break;
                    for (var l = [], f = 0; f < c.length; f++) {
                        var h = c[f];
                        n && n !== h.callback && n !== h.callback._callback || s && s !== h.context ? l.push(h) : (i = h.listening) && 0 == --i.count && (delete a[i.id],
                        delete i.listeningTo[i.objId])
                    }
                    l.length ? e[t] = l : delete e[t]
                }
                return S.size(e) ? e : void 0
            }
            for (var p = S.keys(a); o < p.length; o++)
                delete a[(i = a[p[o]]).id],
                delete i.listeningTo[i.objId]
        }
    };
    i.once = function(e, t, n) {
        var r = s(h, {}, e, t, S.bind(this.off, this));
        return this.on(r, void 0, n)
    }
    ,
    i.listenToOnce = function(e, t, n) {
        var r = s(h, {}, t, n, S.bind(this.stopListening, this, e));
        return this.listenTo(e, r)
    }
    ;
    var h = function(e, t, n, r) {
        if (n) {
            var i = e[t] = S.once(function() {
                r(t, i),
                n.apply(this, arguments)
            });
            i._callback = n
        }
        return e
    };
    i.trigger = function(e) {
        if (!this._events)
            return this;
        for (var t = Math.max(0, arguments.length - 1), n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r + 1];
        return s(p, this._events, e, void 0, n),
        this
    }
    ;
    var p = function(e, t, n, r) {
        if (e) {
            var i = e[t]
              , o = e.all;
            i && o && (o = o.slice()),
            i && d(i, r),
            o && d(o, [t].concat(r))
        }
        return e
    }
      , d = function(e, t) {
        var n, r = -1, i = e.length, o = t[0], s = t[1], a = t[2];
        switch (t.length) {
        case 0:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o);
            return;
        case 2:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o, s);
            return;
        case 3:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o, s, a);
            return;
        default:
            for (; ++r < i; )
                (n = e[r]).callback.apply(n.ctx, t);
            return
        }
    };
    i.bind = i.on,
    i.unbind = i.off,
    S.extend(u, i);
    var g = u.Model = function(e, t) {
        var n = e || {};
        t = t || {},
        this.cid = S.uniqueId(this.cidPrefix),
        this.attributes = {},
        t.collection && (this.collection = t.collection),
        t.parse && (n = this.parse(n, t) || {}),
        n = S.defaults({}, n, S.result(this, "defaults")),
        this.set(n, t),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    S.extend(g.prototype, i, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(e) {
            return S.clone(this.attributes)
        },
        sync: function() {
            return u.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return S.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        matches: function(e) {
            return !!S.iteratee(e, this)(this.attributes)
        },
        set: function(e, t, n) {
            if (null == e)
                return this;
            var r;
            if ("object" == typeof e ? (r = e,
            n = t) : (r = {})[e] = t,
            n = n || {},
            !this._validate(r, n))
                return !1;
            var i = n.unset
              , o = n.silent
              , s = []
              , a = this._changing;
            this._changing = !0,
            a || (this._previousAttributes = S.clone(this.attributes),
            this.changed = {});
            var u = this.attributes
              , c = this.changed
              , l = this._previousAttributes;
            for (var f in this.idAttribute in r && (this.id = r[this.idAttribute]),
            r)
                t = r[f],
                S.isEqual(u[f], t) || s.push(f),
                S.isEqual(l[f], t) ? delete c[f] : c[f] = t,
                i ? delete u[f] : u[f] = t;
            if (!o) {
                s.length && (this._pending = n);
                for (var h = 0; h < s.length; h++)
                    this.trigger("change:" + s[h], this, u[s[h]], n)
            }
            if (a)
                return this;
            if (!o)
                for (; this._pending; )
                    n = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, n);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(e, t) {
            return this.set(e, void 0, S.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var n in this.attributes)
                t[n] = void 0;
            return this.set(t, S.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !S.isEmpty(this.changed) : S.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return !!this.hasChanged() && S.clone(this.changed);
            var t = this._changing ? this._previousAttributes : this.attributes
              , n = {};
            for (var r in e) {
                var i = e[r];
                S.isEqual(t[r], i) || (n[r] = i)
            }
            return !!S.size(n) && n
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return S.clone(this._previousAttributes)
        },
        fetch: function(n) {
            n = S.extend({
                parse: !0
            }, n);
            var r = this
              , i = n.success;
            return n.success = function(e) {
                var t = n.parse ? r.parse(e, n) : e;
                if (!r.set(t, n))
                    return !1;
                i && i.call(n.context, r, e, n),
                r.trigger("sync", r, e, n)
            }
            ,
            M(this, n),
            this.sync("read", this, n)
        },
        save: function(e, t, n) {
            var r;
            null == e || "object" == typeof e ? (r = e,
            n = t) : (r = {})[e] = t;
            var i = (n = S.extend({
                validate: !0,
                parse: !0
            }, n)).wait;
            if (r && !i) {
                if (!this.set(r, n))
                    return !1
            } else if (!this._validate(r, n))
                return !1;
            var o = this
              , s = n.success
              , a = this.attributes;
            n.success = function(e) {
                o.attributes = a;
                var t = n.parse ? o.parse(e, n) : e;
                if (i && (t = S.extend({}, r, t)),
                t && !o.set(t, n))
                    return !1;
                s && s.call(n.context, o, e, n),
                o.trigger("sync", o, e, n)
            }
            ,
            M(this, n),
            r && i && (this.attributes = S.extend({}, a, r));
            var u = this.isNew() ? "create" : n.patch ? "patch" : "update";
            "patch" != u || n.attrs || (n.attrs = r);
            var c = this.sync(u, this, n);
            return this.attributes = a,
            c
        },
        destroy: function(t) {
            t = t ? S.clone(t) : {};
            function n() {
                r.stopListening(),
                r.trigger("destroy", r, r.collection, t)
            }
            var r = this
              , i = t.success
              , o = t.wait
              , e = !(t.success = function(e) {
                o && n(),
                i && i.call(t.context, r, e, t),
                r.isNew() || r.trigger("sync", r, e, t)
            }
            );
            return this.isNew() ? S.defer(t.success) : (M(this, t),
            e = this.sync("delete", this, t)),
            o || n(),
            e
        },
        url: function() {
            var e = S.result(this, "urlRoot") || S.result(this.collection, "url") || O();
            if (this.isNew())
                return e;
            var t = this.get(this.idAttribute);
            return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, S.defaults({
                validate: !0
            }, e))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate)
                return !0;
            e = S.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return !n || (this.trigger("invalid", this, n, S.extend(t, {
                validationError: n
            })),
            !1)
        }
    });
    r(g, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var v = u.Collection = function(e, t) {
        (t = t || {}).model && (this.model = t.model),
        void 0 !== t.comparator && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, S.extend({
            silent: !0
        }, t))
    }
      , T = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , m = {
        add: !0,
        remove: !1
    };
    S.extend(v.prototype, i, {
        model: g,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return u.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, S.extend({
                merge: !1
            }, t, m))
        },
        remove: function(e, t) {
            t = S.extend({}, t);
            var n = !S.isArray(e);
            e = n ? [e] : S.clone(e);
            var r = this._removeModels(e, t);
            return !t.silent && r && this.trigger("update", this, t),
            n ? r[0] : r
        },
        set: function(e, t) {
            (t = S.defaults({}, t, T)).parse && !this._isModel(e) && (e = this.parse(e, t));
            var n, r, i, o, s, a = !S.isArray(e);
            e = a ? e ? [e] : [] : e.slice();
            var u = t.at;
            null != u && (u = +u),
            u < 0 && (u += this.length + 1);
            for (var c = this.comparator && null == u && !1 !== t.sort, l = S.isString(this.comparator) ? this.comparator : null, f = [], h = [], p = {}, d = t.add, g = t.merge, v = t.remove, m = !(c || !d || !v) && [], y = !1, b = 0; b < e.length; b++) {
                if (i = e[b],
                o = this.get(i))
                    v && (p[o.cid] = !0),
                    g && i !== o && (i = this._isModel(i) ? i.attributes : i,
                    t.parse && (i = o.parse(i, t)),
                    o.set(i, t),
                    c && !s && o.hasChanged(l) && (s = !0)),
                    e[b] = o;
                else if (d) {
                    if (!(r = e[b] = this._prepareModel(i, t)))
                        continue;
                    f.push(r),
                    this._addReference(r, t)
                }
                (r = o || r) && (n = this.modelId(r.attributes),
                !m || !r.isNew() && p[n] || (m.push(r),
                y = y || !this.models[b] || r.cid !== this.models[b].cid),
                p[n] = !0)
            }
            if (v) {
                for (b = 0; b < this.length; b++)
                    p[(r = this.models[b]).cid] || h.push(r);
                h.length && this._removeModels(h, t)
            }
            if (f.length || y)
                if (c && (s = !0),
                this.length += f.length,
                null != u)
                    for (b = 0; b < f.length; b++)
                        this.models.splice(u + b, 0, f[b]);
                else {
                    m && (this.models.length = 0);
                    var x = m || f;
                    for (b = 0; b < x.length; b++)
                        this.models.push(x[b])
                }
            if (s && this.sort({
                silent: !0
            }),
            !t.silent) {
                var w = null != u ? S.clone(t) : t;
                for (b = 0; b < f.length; b++)
                    null != u && (w.index = u + b),
                    (r = f[b]).trigger("add", r, this, w);
                (s || y) && this.trigger("sort", this, t),
                (f.length || h.length) && this.trigger("update", this, t)
            }
            return a ? e[0] : e
        },
        reset: function(e, t) {
            t = t ? S.clone(t) : {};
            for (var n = 0; n < this.models.length; n++)
                this._removeReference(this.models[n], t);
            return t.previousModels = this.models,
            this._reset(),
            e = this.add(e, S.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            e
        },
        push: function(e, t) {
            return this.add(e, S.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e)
        },
        unshift: function(e, t) {
            return this.add(e, S.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e)
        },
        slice: function() {
            return o.apply(this.models, arguments)
        },
        get: function(e) {
            if (null != e) {
                var t = this.modelId(this._isModel(e) ? e.attributes : e);
                return this._byId[e] || this._byId[t] || this._byId[e.cid]
            }
        },
        at: function(e) {
            return e < 0 && (e += this.length),
            this.models[e]
        },
        where: function(e, t) {
            var n = S.matches(e);
            return this[t ? "find" : "filter"](function(e) {
                return n(e.attributes)
            })
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return e = e || {},
            S.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(S.bind(this.comparator, this)),
            e.silent || this.trigger("sort", this, e),
            this
        },
        pluck: function(e) {
            return S.invoke(this.models, "get", e)
        },
        fetch: function(n) {
            var r = (n = S.extend({
                parse: !0
            }, n)).success
              , i = this;
            return n.success = function(e) {
                var t = n.reset ? "reset" : "set";
                i[t](e, n),
                r && r.call(n.context, i, e, n),
                i.trigger("sync", i, e, n)
            }
            ,
            M(this, n),
            this.sync("read", this, n)
        },
        create: function(e, t) {
            var r = (t = t ? S.clone(t) : {}).wait;
            if (!(e = this._prepareModel(e, t)))
                return !1;
            r || this.add(e, t);
            var i = this
              , o = t.success;
            return t.success = function(e, t, n) {
                r && i.add(e, n),
                o && o.call(n.context, e, t, n)
            }
            ,
            e.save(null, t),
            e
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models,{
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(e) {
            return e[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (this._isModel(e))
                return e.collection || (e.collection = this),
                e;
            var n = new (((t = t ? S.clone(t) : {}).collection = this).model)(e,t);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, t),
            !1) : n
        },
        _removeModels: function(e, t) {
            for (var n = [], r = 0; r < e.length; r++) {
                var i = this.get(e[r]);
                if (i) {
                    var o = this.indexOf(i);
                    this.models.splice(o, 1),
                    this.length--,
                    t.silent || (t.index = o,
                    i.trigger("remove", i, this, t)),
                    n.push(i),
                    this._removeReference(i, t)
                }
            }
            return !!n.length && n
        },
        _isModel: function(e) {
            return e instanceof g
        },
        _addReference: function(e, t) {
            this._byId[e.cid] = e;
            var n = this.modelId(e.attributes);
            null != n && (this._byId[n] = e),
            e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e, t) {
            delete this._byId[e.cid];
            var n = this.modelId(e.attributes);
            null != n && delete this._byId[n],
            this === e.collection && delete e.collection,
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, r) {
            if ("add" !== e && "remove" !== e || n === this) {
                if ("destroy" === e && this.remove(t, r),
                "change" === e) {
                    var i = this.modelId(t.previousAttributes())
                      , o = this.modelId(t.attributes);
                    i !== o && (null != i && delete this._byId[i],
                    null != o && (this._byId[o] = t))
                }
                this.trigger.apply(this, arguments)
            }
        }
    });
    r(v, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 4,
        foldl: 4,
        inject: 4,
        reduceRight: 4,
        foldr: 4,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 2,
        contains: 2,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3
    }, "models");
    S.each(["groupBy", "countBy", "sortBy", "indexBy"], function(r) {
        S[r] && (v.prototype[r] = function(t, e) {
            var n = S.isFunction(t) ? t : function(e) {
                return e.get(t)
            }
            ;
            return S[r](this.models, n, e)
        }
        )
    });
    var y = u.View = function(e) {
        this.cid = S.uniqueId("view"),
        S.extend(this, S.pick(e, x)),
        this._ensureElement(),
        this.initialize.apply(this, arguments)
    }
      , b = /^(\S+)\s*(.*)$/
      , x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    S.extend(y.prototype, i, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(),
            this.stopListening(),
            this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(e) {
            return this.undelegateEvents(),
            this._setElement(e),
            this.delegateEvents(),
            this
        },
        _setElement: function(e) {
            this.$el = e instanceof u.$ ? e : u.$(e),
            this.el = this.$el[0]
        },
        delegateEvents: function(e) {
            if (!(e = e || S.result(this, "events")))
                return this;
            for (var t in this.undelegateEvents(),
            e) {
                var n = e[t];
                if (S.isFunction(n) || (n = this[n]),
                n) {
                    var r = t.match(b);
                    this.delegate(r[1], r[2], S.bind(n, this))
                }
            }
            return this
        },
        delegate: function(e, t, n) {
            return this.$el.on(e + ".delegateEvents" + this.cid, t, n),
            this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid),
            this
        },
        undelegate: function(e, t, n) {
            return this.$el.off(e + ".delegateEvents" + this.cid, t, n),
            this
        },
        _createElement: function(e) {
            return document.createElement(e)
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(S.result(this, "el"));
            else {
                var e = S.extend({}, S.result(this, "attributes"));
                this.id && (e.id = S.result(this, "id")),
                this.className && (e.class = S.result(this, "className")),
                this.setElement(this._createElement(S.result(this, "tagName"))),
                this._setAttributes(e)
            }
        },
        _setAttributes: function(e) {
            this.$el.attr(e)
        }
    }),
    u.sync = function(e, t, r) {
        var n = w[e];
        S.defaults(r = r || {}, {
            emulateHTTP: u.emulateHTTP,
            emulateJSON: u.emulateJSON
        });
        var i = {
            type: n,
            dataType: "json"
        };
        if (r.url || (i.url = S.result(t, "url") || O()),
        null != r.data || !t || "create" !== e && "update" !== e && "patch" !== e || (i.contentType = "application/json",
        i.data = JSON.stringify(r.attrs || t.toJSON(r))),
        r.emulateJSON && (i.contentType = "application/x-www-form-urlencoded",
        i.data = i.data ? {
            model: i.data
        } : {}),
        r.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" === n)) {
            i.type = "POST",
            r.emulateJSON && (i.data._method = n);
            var o = r.beforeSend;
            r.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", n),
                o)
                    return o.apply(this, arguments)
            }
        }
        "GET" === i.type || r.emulateJSON || (i.processData = !1);
        var s = r.error;
        r.error = function(e, t, n) {
            r.textStatus = t,
            r.errorThrown = n,
            s && s.call(r.context, e, t, n)
        }
        ;
        var a = r.xhr = u.ajax(S.extend(i, r));
        return t.trigger("request", t, a, r),
        a
    }
    ;
    var w = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    u.ajax = function() {
        return u.$.ajax.apply(u.$, arguments)
    }
    ;
    var E = u.Router = function(e) {
        (e = e || {}).routes && (this.routes = e.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , C = /\((.*?)\)/g
      , k = /(\(\?)?:\w+/g
      , j = /\*\w+/g
      , A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    S.extend(E.prototype, i, {
        initialize: function() {},
        route: function(n, r, i) {
            S.isRegExp(n) || (n = this._routeToRegExp(n)),
            S.isFunction(r) && (i = r,
            r = ""),
            i = i || this[r];
            var o = this;
            return u.history.route(n, function(e) {
                var t = o._extractParameters(n, e);
                !1 !== o.execute(i, t, r) && (o.trigger.apply(o, ["route:" + r].concat(t)),
                o.trigger("route", r, t),
                u.history.trigger("route", o, r, t))
            }),
            this
        },
        execute: function(e, t, n) {
            e && e.apply(this, t)
        },
        navigate: function(e, t) {
            return u.history.navigate(e, t),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = S.result(this, "routes");
                for (var e, t = S.keys(this.routes); null != (e = t.pop()); )
                    this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(A, "\\$&").replace(C, "(?:$1)?").replace(k, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(j, "([^?]*?)"),
            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var n = e.exec(t).slice(1);
            return S.map(n, function(e, t) {
                return t === n.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var _ = u.History = function() {
        this.handlers = [],
        S.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , N = /^[#\/]|\s+$/g
      , D = /^\/+|\/+$/g
      , H = /#.*$/;
    _.started = !1,
    S.extend(_.prototype, i, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        },
        decodeFragment: function(e) {
            return decodeURI(e.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return e ? e[0] : ""
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getPath: function() {
            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === e.charAt(0) ? e.slice(1) : e
        },
        getFragment: function(e) {
            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
            e.replace(N, "")
        },
        start: function(e) {
            if (_.started)
                throw new Error("Backbone.history has already been started");
            if (_.started = !0,
            this.options = S.extend({
                root: "/"
            }, this.options, e),
            this.root = this.options.root,
            this._wantsHashChange = !1 !== this.options.hashChange,
            this._hasHashChange = "onhashchange"in window,
            this._useHashChange = this._wantsHashChange && this._hasHashChange,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !(!this.history || !this.history.pushState),
            this._usePushState = this._wantsPushState && this._hasPushState,
            this.fragment = this.getFragment(),
            this.root = ("/" + this.root + "/").replace(D, "/"),
            this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()),
                    !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"),
                this.iframe.src = "javascript:0",
                this.iframe.style.display = "none",
                this.iframe.tabIndex = -1;
                var n = document.body
                  , r = n.insertBefore(this.iframe, n.firstChild).contentWindow;
                r.document.open(),
                r.document.close(),
                r.location.hash = "#" + this.fragment
            }
            var i = window.addEventListener || function(e, t) {
                return attachEvent("on" + e, t)
            }
            ;
            if (this._usePushState ? i("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? i("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            !this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var e = window.removeEventListener || function(e, t) {
                return detachEvent("on" + e, t)
            }
            ;
            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
            this.iframe && (document.body.removeChild(this.iframe),
            this.iframe = null),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            _.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)),
            t === this.fragment)
                return !1;
            this.iframe && this.navigate(t),
            this.loadUrl()
        },
        loadUrl: function(t) {
            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t),
            S.any(this.handlers, function(e) {
                if (e.route.test(t))
                    return e.callback(t),
                    !0
            }))
        },
        navigate: function(e, t) {
            if (!_.started)
                return !1;
            t && !0 !== t || (t = {
                trigger: !!t
            }),
            e = this.getFragment(e || "");
            var n = this.root;
            "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
            var r = n + e;
            if (e = this.decodeFragment(e.replace(H, "")),
            this.fragment !== e) {
                if (this.fragment = e,
                this._usePushState)
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(r);
                    if (this._updateHash(this.location, e, t.replace),
                    this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                        var i = this.iframe.contentWindow;
                        t.replace || (i.document.open(),
                        i.document.close()),
                        this._updateHash(i.location, e, t.replace)
                    }
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else
                e.hash = "#" + t
        }
    }),
    u.history = new _;
    g.extend = v.extend = E.extend = y.extend = _.extend = function(e, t) {
        var n, r = this;
        n = e && S.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments)
        }
        ,
        S.extend(n, r, t);
        function i() {
            this.constructor = n
        }
        return i.prototype = r.prototype,
        n.prototype = new i,
        e && S.extend(n.prototype, e),
        n.__super__ = r.prototype,
        n
    }
    ;
    var O = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , M = function(t, n) {
        var r = n.error;
        n.error = function(e) {
            r && r.call(n.context, t, e, n),
            t.trigger("error", t, e, n)
        }
    };
    return u
}),
function(n, r) {
    "object" == typeof exports && n.require ? module.exports = r(require("underscore"), require("backbone")) : "function" == typeof define && define.amd ? define(["underscore", "backbone"], function(e, t) {
        return r(e || n._, t || n.Backbone)
    }) : r(_, Backbone)
}(this, function(r, a) {
    function t() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    }
    return a.LocalStorage = window.Store = function(e) {
        if (!this.localStorage)
            throw "Backbone.localStorage: Environment does not support localStorage.";
        this.name = e;
        var t = this.localStorage().getItem(this.name);
        this.records = t && t.split(",") || []
    }
    ,
    r.extend(a.LocalStorage.prototype, {
        save: function() {
            this.localStorage().setItem(this.name, this.records.join(","))
        },
        create: function(e) {
            return e.id || (e.id = t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t(),
            e.set(e.idAttribute, e.id)),
            this.localStorage().setItem(this.name + "-" + e.id, JSON.stringify(e)),
            this.records.push(e.id.toString()),
            this.save(),
            this.find(e)
        },
        update: function(e) {
            return this.localStorage().setItem(this.name + "-" + e.id, JSON.stringify(e)),
            r.include(this.records, e.id.toString()) || this.records.push(e.id.toString()),
            this.save(),
            this.find(e)
        },
        find: function(e) {
            return this.jsonData(this.localStorage().getItem(this.name + "-" + e.id))
        },
        findAll: function() {
            return (r.chain || r)(this.records).map(function(e) {
                return this.jsonData(this.localStorage().getItem(this.name + "-" + e))
            }, this).compact().value()
        },
        destroy: function(t) {
            return !t.isNew() && (this.localStorage().removeItem(this.name + "-" + t.id),
            this.records = r.reject(this.records, function(e) {
                return e === t.id.toString()
            }),
            this.save(),
            t)
        },
        localStorage: function() {
            return localStorage
        },
        jsonData: function(e) {
            return e && JSON.parse(e)
        },
        _clear: function() {
            var t = this.localStorage()
              , n = new RegExp("^" + this.name + "-");
            t.removeItem(this.name),
            (r.chain || r)(t).keys().filter(function(e) {
                return n.test(e)
            }).each(function(e) {
                t.removeItem(e)
            }),
            this.records.length = 0
        },
        _storageSize: function() {
            return this.localStorage().length
        }
    }),
    a.LocalStorage.sync = window.Store.sync = a.localSync = function(e, t, n) {
        var r, i, o = t.localStorage || t.collection.localStorage, s = a.$.Deferred && a.$.Deferred();
        try {
            switch (e) {
            case "read":
                r = null != t.id ? o.find(t) : o.findAll();
                break;
            case "create":
                r = o.create(t);
                break;
            case "update":
                r = o.update(t);
                break;
            case "delete":
                r = o.destroy(t)
            }
        } catch (e) {
            i = 22 === e.code && 0 === o._storageSize() ? "Private browsing is unsupported" : e.message
        }
        return r ? (n && n.success && ("0.9.10" === a.VERSION ? n.success(t, r, n) : n.success(r)),
        s && s.resolve(r)) : (i = i || "Record Not Found",
        n && n.error && ("0.9.10" === a.VERSION ? n.error(t, i, n) : n.error(i)),
        s && s.reject(i)),
        n && n.complete && n.complete(r),
        s && s.promise()
    }
    ,
    a.ajaxSync = a.sync,
    a.getSyncMethod = function(e) {
        return e.localStorage || e.collection && e.collection.localStorage ? a.localSync : a.ajaxSync
    }
    ,
    a.sync = function(e, t, n) {
        return a.getSyncMethod(t).apply(this, [e, t, n])
    }
    ,
    a.LocalStorage
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? exports.Handlebars = t() : e.Handlebars = t()
}(this, function() {
    return i = {},
    n.m = r = [function(e, t, n) {
        "use strict";
        var r = n(7).default;
        t.__esModule = !0;
        var i = r(n(1))
          , o = r(n(2))
          , s = r(n(3))
          , a = r(n(4))
          , u = r(n(5))
          , c = r(n(6));
        function l() {
            var t = new i.HandlebarsEnvironment;
            return a.extend(t, i),
            t.SafeString = o.default,
            t.Exception = s.default,
            t.Utils = a,
            t.escapeExpression = a.escapeExpression,
            t.VM = u,
            t.template = function(e) {
                return u.template(e, t)
            }
            ,
            t
        }
        var f = l();
        f.create = l,
        c.default(f),
        f.default = f,
        t.default = f,
        e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        var r = n(7).default;
        t.__esModule = !0,
        t.HandlebarsEnvironment = s,
        t.createFrame = v;
        var h = r(n(4))
          , p = r(n(3));
        t.VERSION = "3.0.1";
        t.COMPILER_REVISION = 6;
        t.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        var d = h.isArray
          , g = h.isFunction
          , i = h.toString
          , o = "[object Object]";
        function s(e, t) {
            this.helpers = e || {},
            this.partials = t || {},
            function(o) {
                o.registerHelper("helperMissing", function() {
                    if (1 !== arguments.length)
                        throw new p.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                }),
                o.registerHelper("blockHelperMissing", function(e, t) {
                    var n = t.inverse
                      , r = t.fn;
                    if (!0 === e)
                        return r(this);
                    if (!1 === e || null == e)
                        return n(this);
                    if (d(e))
                        return 0 < e.length ? (t.ids && (t.ids = [t.name]),
                        o.helpers.each(e, t)) : n(this);
                    if (t.data && t.ids) {
                        var i = v(t.data);
                        i.contextPath = h.appendContextPath(t.data.contextPath, t.name),
                        t = {
                            data: i
                        }
                    }
                    return r(e, t)
                }),
                o.registerHelper("each", function(r, e) {
                    if (!e)
                        throw new p.default("Must pass iterator to #each");
                    var i = e.fn
                      , t = e.inverse
                      , n = 0
                      , o = ""
                      , s = void 0
                      , a = void 0;
                    function u(e, t, n) {
                        s && (s.key = e,
                        s.index = t,
                        s.first = 0 === t,
                        s.last = !!n,
                        a && (s.contextPath = a + e)),
                        o += i(r[e], {
                            data: s,
                            blockParams: h.blockParams([r[e], e], [a + e, null])
                        })
                    }
                    if (e.data && e.ids && (a = h.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
                    g(r) && (r = r.call(this)),
                    e.data && (s = v(e.data)),
                    r && "object" == typeof r)
                        if (d(r))
                            for (var c = r.length; n < c; n++)
                                u(n, n, n === r.length - 1);
                        else {
                            var l = void 0;
                            for (var f in r)
                                r.hasOwnProperty(f) && (l && u(l, n - 1),
                                l = f,
                                n++);
                            l && u(l, n - 1, !0)
                        }
                    return 0 === n && (o = t(this)),
                    o
                }),
                o.registerHelper("if", function(e, t) {
                    return g(e) && (e = e.call(this)),
                    !t.hash.includeZero && !e || h.isEmpty(e) ? t.inverse(this) : t.fn(this)
                }),
                o.registerHelper("unless", function(e, t) {
                    return o.helpers.if.call(this, e, {
                        fn: t.inverse,
                        inverse: t.fn,
                        hash: t.hash
                    })
                }),
                o.registerHelper("with", function(e, t) {
                    g(e) && (e = e.call(this));
                    var n = t.fn;
                    if (h.isEmpty(e))
                        return t.inverse(this);
                    if (t.data && t.ids) {
                        var r = v(t.data);
                        r.contextPath = h.appendContextPath(t.data.contextPath, t.ids[0]),
                        t = {
                            data: r
                        }
                    }
                    return n(e, t)
                }),
                o.registerHelper("log", function(e, t) {
                    var n = t.data && null != t.data.level ? parseInt(t.data.level, 10) : 1;
                    o.log(n, e)
                }),
                o.registerHelper("lookup", function(e, t) {
                    return e && e[t]
                })
            }(this)
        }
        s.prototype = {
            constructor: s,
            logger: a,
            log: u,
            registerHelper: function(e, t) {
                if (i.call(e) === o) {
                    if (t)
                        throw new p.default("Arg not supported with multiple helpers");
                    h.extend(this.helpers, e)
                } else
                    this.helpers[e] = t
            },
            unregisterHelper: function(e) {
                delete this.helpers[e]
            },
            registerPartial: function(e, t) {
                if (i.call(e) === o)
                    h.extend(this.partials, e);
                else {
                    if (void 0 === t)
                        throw new p.default("Attempting to register a partial as undefined");
                    this.partials[e] = t
                }
            },
            unregisterPartial: function(e) {
                delete this.partials[e]
            }
        };
        var a = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 1,
            log: function(e, t) {
                if ("undefined" != typeof console && a.level <= e) {
                    var n = a.methodMap[e];
                    (console[n] || console.log).call(console, t)
                }
            }
        }
          , u = (t.logger = a).log;
        function v(e) {
            var t = h.extend({}, e);
            return t._parent = e,
            t
        }
        t.log = u
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            this.string = e
        }
        t.__esModule = !0,
        r.prototype.toString = r.prototype.toHTML = function() {
            return "" + this.string
        }
        ,
        t.default = r,
        e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var a = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        function u(e, t) {
            var n = t && t.loc
              , r = void 0
              , i = void 0;
            n && (e += " - " + (r = n.start.line) + ":" + (i = n.start.column));
            for (var o = Error.prototype.constructor.call(this, e), s = 0; s < a.length; s++)
                this[a[s]] = o[a[s]];
            Error.captureStackTrace && Error.captureStackTrace(this, u),
            n && (this.lineNumber = r,
            this.column = i)
        }
        u.prototype = new Error,
        t.default = u,
        e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.extend = function(e) {
            for (var t = 1; t < arguments.length; t++)
                for (var n in arguments[t])
                    Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }
        ,
        t.indexOf = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        ,
        t.escapeExpression = function(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML)
                    return e.toHTML();
                if (null == e)
                    return "";
                if (!e)
                    return e + "";
                e = "" + e
            }
            return o.test(e) ? e.replace(i, s) : e
        }
        ,
        t.isEmpty = function(e) {
            return !e && 0 !== e || !(!c(e) || 0 !== e.length)
        }
        ,
        t.blockParams = function(e, t) {
            return e.path = t,
            e
        }
        ,
        t.appendContextPath = function(e, t) {
            return (e ? e + "." : "") + t
        }
        ;
        var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , i = /[&<>"'`]/g
          , o = /[&<>"'`]/;
        function s(e) {
            return r[e]
        }
        var a, u = Object.prototype.toString;
        t.toString = u,
        (a = function(e) {
            return "function" == typeof e
        }
        )(/x/) && (t.isFunction = a = function(e) {
            return "function" == typeof e && "[object Function]" === u.call(e)
        }
        ),
        t.isFunction = a;
        var c = Array.isArray || function(e) {
            return !(!e || "object" != typeof e) && "[object Array]" === u.call(e)
        }
        ;
        t.isArray = c
    }
    , function(e, t, n) {
        "use strict";
        var r = n(7).default;
        t.__esModule = !0,
        t.checkRevision = function(e) {
            var t = e && e[0] || 1
              , n = f.COMPILER_REVISION;
            if (t !== n) {
                if (t < n) {
                    var r = f.REVISION_CHANGES[n]
                      , i = f.REVISION_CHANGES[t];
                    throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                }
                throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }
        ,
        t.template = function(a, u) {
            if (!u)
                throw new l.default("No environment passed to template");
            if (!a || !a.main)
                throw new l.default("Unknown template object: " + typeof a);
            u.VM.checkRevision(a.compiler);
            var o = {
                strict: function(e, t) {
                    if (!(t in e))
                        throw new l.default('"' + t + '" not defined in ' + e);
                    return e[t]
                },
                lookup: function(e, t) {
                    for (var n = e.length, r = 0; r < n; r++)
                        if (e[r] && null != e[r][t])
                            return e[r][t]
                },
                lambda: function(e, t) {
                    return "function" == typeof e ? e.call(t) : e
                },
                escapeExpression: c.escapeExpression,
                invokePartial: function(e, t, n) {
                    n.hash && (t = c.extend({}, t, n.hash)),
                    e = u.VM.resolvePartial.call(this, e, t, n);
                    var r = u.VM.invokePartial.call(this, e, t, n);
                    if (null == r && u.compile && (n.partials[n.name] = u.compile(e, a.compilerOptions, u),
                    r = n.partials[n.name](t, n)),
                    null == r)
                        throw new l.default("The partial " + n.name + " could not be compiled when running in runtime-only mode");
                    if (n.indent) {
                        for (var i = r.split("\n"), o = 0, s = i.length; o < s && (i[o] || o + 1 !== s); o++)
                            i[o] = n.indent + i[o];
                        r = i.join("\n")
                    }
                    return r
                },
                fn: function(e) {
                    return a[e]
                },
                programs: [],
                program: function(e, t, n, r, i) {
                    var o = this.programs[e]
                      , s = this.fn(e);
                    return o = t || i || r || n ? h(this, e, s, t, n, r, i) : o || (this.programs[e] = h(this, e, s))
                },
                data: function(e, t) {
                    for (; e && t--; )
                        e = e._parent;
                    return e
                },
                merge: function(e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = c.extend({}, t, e)),
                    n
                },
                noop: u.VM.noop,
                compilerInfo: a.compiler
            };
            function s(e) {
                var t = void 0 === arguments[1] ? {} : arguments[1]
                  , n = t.data;
                s._setup(t),
                !t.partial && a.useData && (n = function(e, t) {
                    t && "root"in t || ((t = t ? f.createFrame(t) : {}).root = e);
                    return t
                }(e, n));
                var r = void 0
                  , i = a.useBlockParams ? [] : void 0;
                return a.useDepths && (r = t.depths ? [e].concat(t.depths) : [e]),
                a.main.call(o, e, o.helpers, o.partials, n, i, r)
            }
            return s.isTop = !0,
            s._setup = function(e) {
                e.partial ? (o.helpers = e.helpers,
                o.partials = e.partials) : (o.helpers = o.merge(e.helpers, u.helpers),
                a.usePartial && (o.partials = o.merge(e.partials, u.partials)))
            }
            ,
            s._child = function(e, t, n, r) {
                if (a.useBlockParams && !n)
                    throw new l.default("must pass block params");
                if (a.useDepths && !r)
                    throw new l.default("must pass parent depths");
                return h(o, e, a[e], t, 0, n, r)
            }
            ,
            s
        }
        ,
        t.wrapProgram = h,
        t.resolvePartial = function(e, t, n) {
            e ? e.call || n.name || (n.name = e,
            e = n.partials[e]) : e = n.partials[n.name];
            return e
        }
        ,
        t.invokePartial = function(e, t, n) {
            {
                if (n.partial = !0,
                void 0 === e)
                    throw new l.default("The partial " + n.name + " could not be found");
                if (e instanceof Function)
                    return e(t, n)
            }
        }
        ,
        t.noop = function() {
            return ""
        }
        ;
        var c = r(n(4))
          , l = r(n(3))
          , f = n(1);
        function h(n, e, r, i, t, o, s) {
            function a(e) {
                var t = void 0 === arguments[1] ? {} : arguments[1];
                return r.call(n, e, n.helpers, n.partials, t.data || i, o && [t.blockParams].concat(o), s && [e].concat(s))
            }
            return a.program = e,
            a.depth = s ? s.length : 0,
            a.blockParams = t || 0,
            a
        }
    }
    , function(e, t, n) {
        (function(r) {
            "use strict";
            t.__esModule = !0,
            t.default = function(e) {
                var t = void 0 !== r ? r : window
                  , n = t.Handlebars;
                e.noConflict = function() {
                    t.Handlebars === e && (t.Handlebars = n)
                }
            }
            ,
            e.exports = t.default
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        "use strict";
        t.default = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        t.__esModule = !0
    }
    ],
    n.c = i,
    n.p = "",
    n(0);
    function n(e) {
        if (i[e])
            return i[e].exports;
        var t = i[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return r[e].call(t.exports, t, t.exports, n),
        t.loaded = !0,
        t.exports
    }
    var r, i
}),
function(e) {
    "use strict";
    function f(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    function a(e, t, n, r, i, o) {
        return f(function(e, t) {
            return e << t | e >>> 32 - t
        }(f(f(t, e), f(r, o)), i), n)
    }
    function h(e, t, n, r, i, o, s) {
        return a(t & n | ~t & r, e, t, i, o, s)
    }
    function p(e, t, n, r, i, o, s) {
        return a(t & r | n & ~r, e, t, i, o, s)
    }
    function d(e, t, n, r, i, o, s) {
        return a(t ^ n ^ r, e, t, i, o, s)
    }
    function g(e, t, n, r, i, o, s) {
        return a(n ^ (t | ~r), e, t, i, o, s)
    }
    function u(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var n, r, i, o, s, a = 1732584193, u = -271733879, c = -1732584194, l = 271733878;
        for (n = 0; n < e.length; n += 16)
            u = g(u = g(u = g(u = g(u = d(u = d(u = d(u = d(u = p(u = p(u = p(u = p(u = h(u = h(u = h(u = h(i = u, c = h(o = c, l = h(s = l, a = h(r = a, u, c, l, e[n], 7, -680876936), u, c, e[n + 1], 12, -389564586), a, u, e[n + 2], 17, 606105819), l, a, e[n + 3], 22, -1044525330), c = h(c, l = h(l, a = h(a, u, c, l, e[n + 4], 7, -176418897), u, c, e[n + 5], 12, 1200080426), a, u, e[n + 6], 17, -1473231341), l, a, e[n + 7], 22, -45705983), c = h(c, l = h(l, a = h(a, u, c, l, e[n + 8], 7, 1770035416), u, c, e[n + 9], 12, -1958414417), a, u, e[n + 10], 17, -42063), l, a, e[n + 11], 22, -1990404162), c = h(c, l = h(l, a = h(a, u, c, l, e[n + 12], 7, 1804603682), u, c, e[n + 13], 12, -40341101), a, u, e[n + 14], 17, -1502002290), l, a, e[n + 15], 22, 1236535329), c = p(c, l = p(l, a = p(a, u, c, l, e[n + 1], 5, -165796510), u, c, e[n + 6], 9, -1069501632), a, u, e[n + 11], 14, 643717713), l, a, e[n], 20, -373897302), c = p(c, l = p(l, a = p(a, u, c, l, e[n + 5], 5, -701558691), u, c, e[n + 10], 9, 38016083), a, u, e[n + 15], 14, -660478335), l, a, e[n + 4], 20, -405537848), c = p(c, l = p(l, a = p(a, u, c, l, e[n + 9], 5, 568446438), u, c, e[n + 14], 9, -1019803690), a, u, e[n + 3], 14, -187363961), l, a, e[n + 8], 20, 1163531501), c = p(c, l = p(l, a = p(a, u, c, l, e[n + 13], 5, -1444681467), u, c, e[n + 2], 9, -51403784), a, u, e[n + 7], 14, 1735328473), l, a, e[n + 12], 20, -1926607734), c = d(c, l = d(l, a = d(a, u, c, l, e[n + 5], 4, -378558), u, c, e[n + 8], 11, -2022574463), a, u, e[n + 11], 16, 1839030562), l, a, e[n + 14], 23, -35309556), c = d(c, l = d(l, a = d(a, u, c, l, e[n + 1], 4, -1530992060), u, c, e[n + 4], 11, 1272893353), a, u, e[n + 7], 16, -155497632), l, a, e[n + 10], 23, -1094730640), c = d(c, l = d(l, a = d(a, u, c, l, e[n + 13], 4, 681279174), u, c, e[n], 11, -358537222), a, u, e[n + 3], 16, -722521979), l, a, e[n + 6], 23, 76029189), c = d(c, l = d(l, a = d(a, u, c, l, e[n + 9], 4, -640364487), u, c, e[n + 12], 11, -421815835), a, u, e[n + 15], 16, 530742520), l, a, e[n + 2], 23, -995338651), c = g(c, l = g(l, a = g(a, u, c, l, e[n], 6, -198630844), u, c, e[n + 7], 10, 1126891415), a, u, e[n + 14], 15, -1416354905), l, a, e[n + 5], 21, -57434055), c = g(c, l = g(l, a = g(a, u, c, l, e[n + 12], 6, 1700485571), u, c, e[n + 3], 10, -1894986606), a, u, e[n + 10], 15, -1051523), l, a, e[n + 1], 21, -2054922799), c = g(c, l = g(l, a = g(a, u, c, l, e[n + 8], 6, 1873313359), u, c, e[n + 15], 10, -30611744), a, u, e[n + 6], 15, -1560198380), l, a, e[n + 13], 21, 1309151649), c = g(c, l = g(l, a = g(a, u, c, l, e[n + 4], 6, -145523070), u, c, e[n + 11], 10, -1120210379), a, u, e[n + 2], 15, 718787259), l, a, e[n + 9], 21, -343485551),
            a = f(a, r),
            u = f(u, i),
            c = f(c, o),
            l = f(l, s);
        return [a, u, c, l]
    }
    function c(e) {
        var t, n = "";
        for (t = 0; t < 32 * e.length; t += 8)
            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function l(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function r(e) {
        var t, n, r = "0123456789abcdef", i = "";
        for (n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return i
    }
    function n(e) {
        return unescape(encodeURIComponent(e))
    }
    function i(e) {
        return function(e) {
            return c(u(l(e), 8 * e.length))
        }(n(e))
    }
    function o(e, t) {
        return function(e, t) {
            var n, r, i = l(e), o = [], s = [];
            for (o[15] = s[15] = void 0,
            16 < i.length && (i = u(i, 8 * e.length)),
            n = 0; n < 16; n += 1)
                o[n] = 909522486 ^ i[n],
                s[n] = 1549556828 ^ i[n];
            return r = u(o.concat(l(t)), 512 + 8 * t.length),
            c(u(s.concat(r), 640))
        }(n(e), n(t))
    }
    function t(e, t, n) {
        return t ? n ? o(t, e) : function(e, t) {
            return r(o(e, t))
        }(t, e) : n ? i(e) : function(e) {
            return r(i(e))
        }(e)
    }
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : e.md5 = t
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ResizeSensor = t()
}("undefined" != typeof window ? window : this, function() {
    if ("undefined" == typeof window)
        return null;
    var t = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()
      , S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || function(e) {
        return t.setTimeout(e, 20)
    }
    ;
    function i(e, t) {
        var n = Object.prototype.toString.call(e)
          , r = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "[object Object]" === n || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements
          , i = 0
          , o = e.length;
        if (r)
            for (; i < o; i++)
                t(e[i]);
        else
            t(e)
    }
    function T(e) {
        if (!e.getBoundingClientRect)
            return {
                width: e.offsetWidth,
                height: e.offsetHeight
            };
        var t = e.getBoundingClientRect();
        return {
            width: Math.round(t.width),
            height: Math.round(t.height)
        }
    }
    function E(t, n) {
        Object.keys(n).forEach(function(e) {
            t.style[e] = n[e]
        })
    }
    var o = function(t, n) {
        function w() {
            var n, r, i = [];
            this.add = function(e) {
                i.push(e)
            }
            ,
            this.call = function(e) {
                for (n = 0,
                r = i.length; n < r; n++)
                    i[n].call(this, e)
            }
            ,
            this.remove = function(e) {
                var t = [];
                for (n = 0,
                r = i.length; n < r; n++)
                    i[n] !== e && t.push(i[n]);
                i = t
            }
            ,
            this.length = function() {
                return i.length
            }
        }
        function r(n, e) {
            if (n)
                if (n.resizedAttached)
                    n.resizedAttached.add(e);
                else {
                    n.resizedAttached = new w,
                    n.resizedAttached.add(e),
                    n.resizeSensor = document.createElement("div"),
                    n.resizeSensor.dir = "ltr",
                    n.resizeSensor.className = "resize-sensor";
                    var t = {
                        pointerEvents: "none",
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        overflow: "hidden",
                        zIndex: "-1",
                        visibility: "hidden",
                        maxWidth: "100%"
                    }
                      , r = {
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        transition: "0s"
                    };
                    E(n.resizeSensor, t);
                    var i = document.createElement("div");
                    i.className = "resize-sensor-expand",
                    E(i, t);
                    var o = document.createElement("div");
                    E(o, r),
                    i.appendChild(o);
                    var s = document.createElement("div");
                    s.className = "resize-sensor-shrink",
                    E(s, t);
                    var a = document.createElement("div");
                    E(a, r),
                    E(a, {
                        width: "200%",
                        height: "200%"
                    }),
                    s.appendChild(a),
                    n.resizeSensor.appendChild(i),
                    n.resizeSensor.appendChild(s),
                    n.appendChild(n.resizeSensor);
                    var u, c, l = window.getComputedStyle(n), f = l ? l.getPropertyValue("position") : null;
                    "absolute" !== f && "relative" !== f && "fixed" !== f && (n.style.position = "relative");
                    var h = T(n)
                      , p = 0
                      , d = 0
                      , g = !0
                      , v = 0
                      , m = function() {
                        if (g) {
                            if (0 === n.offsetWidth && 0 === n.offsetHeight)
                                return void (v = v || S(function() {
                                    v = 0,
                                    m()
                                }));
                            g = !1
                        }
                        !function() {
                            var e = n.offsetWidth
                              , t = n.offsetHeight;
                            o.style.width = e + 10 + "px",
                            o.style.height = t + 10 + "px",
                            i.scrollLeft = e + 10,
                            i.scrollTop = t + 10,
                            s.scrollLeft = e + 10,
                            s.scrollTop = t + 10
                        }()
                    };
                    n.resizeSensor.resetSensor = m;
                    function y() {
                        c = 0,
                        u && (p = h.width,
                        d = h.height,
                        n.resizedAttached && n.resizedAttached.call(h))
                    }
                    function b() {
                        h = T(n),
                        (u = h.width !== p || h.height !== d) && !c && (c = S(y)),
                        m()
                    }
                    function x(e, t, n) {
                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
                    }
                    x(i, "scroll", b),
                    x(s, "scroll", b),
                    S(m)
                }
        }
        i(t, function(e) {
            r(e, n)
        }),
        this.detach = function(e) {
            o.detach(t, e)
        }
        ,
        this.reset = function() {
            t.resizeSensor.resetSensor()
        }
    };
    if (o.reset = function(e) {
        i(e, function(e) {
            e.resizeSensor.resetSensor()
        })
    }
    ,
    o.detach = function(e, t) {
        i(e, function(e) {
            e && (e.resizedAttached && "function" == typeof t && (e.resizedAttached.remove(t),
            e.resizedAttached.length()) || e.resizeSensor && (e.contains(e.resizeSensor) && e.removeChild(e.resizeSensor),
            delete e.resizeSensor,
            delete e.resizedAttached))
        })
    }
    ,
    "undefined" != typeof MutationObserver) {
        var n = new MutationObserver(function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    for (var n = e[t].addedNodes, r = 0; r < n.length; r++)
                        n[r].resizeSensor && o.reset(n[r])
        }
        );
        document.addEventListener("DOMContentLoaded", function(e) {
            n.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        })
    }
    return o
}),
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(e) {
    e = 0 === arguments.length || !!e;
    var t = this.parentNode
      , n = window.getComputedStyle(t, null)
      , r = parseInt(n.getPropertyValue("border-top-width"))
      , i = parseInt(n.getPropertyValue("border-left-width"))
      , o = this.offsetTop - t.offsetTop < t.scrollTop
      , s = this.offsetTop - t.offsetTop + this.clientHeight - r > t.scrollTop + t.clientHeight
      , a = this.offsetLeft - t.offsetLeft < t.scrollLeft
      , u = this.offsetLeft - t.offsetLeft + this.clientWidth - i > t.scrollLeft + t.clientWidth
      , c = o && !s;
    (o || s) && e && (t.scrollTop = this.offsetTop - t.offsetTop - t.clientHeight / 2 - r + this.clientHeight / 2),
    (a || u) && e && (t.scrollLeft = this.offsetLeft - t.offsetLeft - t.clientWidth / 2 - i + this.clientWidth / 2),
    (o || s || a || u) && !e && this.scrollIntoView(c)
}
),
function(e, t) {
    "object" == typeof exports ? module.exports = t(e) : "function" == typeof define && define.amd ? define("colors", [], function() {
        return t(e)
    }) : e.Colors = t(e)
}(this, function(e, c) {
    "use strict";
    function t(e) {
        this.colors = {
            RND: {}
        },
        this.options = {
            color: "rgba(204, 82, 37, 0.8)",
            grey: n,
            luminance: r,
            valueRanges: S
        },
        i(this, e || {})
    }
    var S = {
        rgb: {
            r: [0, 255],
            g: [0, 255],
            b: [0, 255]
        },
        hsv: {
            h: [0, 360],
            s: [0, 100],
            v: [0, 100]
        },
        hsl: {
            h: [0, 360],
            s: [0, 100],
            l: [0, 100]
        },
        alpha: {
            alpha: [0, 1]
        },
        HEX: {
            HEX: [0, 16777215]
        }
    }
      , T = e.Math
      , E = T.round
      , C = {}
      , k = {}
      , n = {
        r: .298954,
        g: .586434,
        b: .114612
    }
      , r = {
        r: .2126,
        g: .7152,
        b: .0722
    }
      , i = function(e, t) {
        var n, r = e.options;
        for (var i in o(e),
        t)
            t[i] !== c && (r[i] = t[i]);
        n = r.customBG,
        r.customBG = "string" == typeof n ? j.txt2color(n).rgb : n,
        k = s(e.colors, r.color, c, !0)
    }
      , o = function(e) {
        C !== e && (k = (C = e).colors)
    };
    function s(e, t, n, r, i) {
        if ("string" == typeof t)
            n = (t = j.txt2color(t)).type,
            k[n] = t[n],
            i = i !== c ? i : t.alpha;
        else if (t)
            for (var o in t)
                e[n][o] = u(t[o] / S[n][o][1], 0, 1);
        return i !== c && (e.alpha = u(+i, 0, 1)),
        a(n, r ? e : c)
    }
    function a(e, t) {
        var n, r, i, o = t || k, s = j, a = C.options, u = S, c = o.RND, l = "", f = "", h = {
            hsl: "hsv",
            rgb: e
        }, p = c.rgb;
        if ("alpha" !== e) {
            for (var d in u)
                if (!u[d][d])
                    for (l in e !== d && (f = h[d] || "rgb",
                    o[d] = s[f + "2" + d](o[f])),
                    c[d] || (c[d] = {}),
                    n = o[d])
                        c[d][l] = E(n[l] * u[d][l][1]);
            p = c.rgb,
            o.HEX = s.RGB2HEX(p),
            o.equivalentGrey = a.grey.r * o.rgb.r + a.grey.g * o.rgb.g + a.grey.b * o.rgb.b,
            o.webSave = r = A(p, 51),
            o.webSmart = i = A(p, 17),
            o.saveColor = p.r === r.r && p.g === r.g && p.b === r.b ? "web save" : p.r === i.r && p.g === i.g && p.b === i.b ? "web smart" : "",
            o.hueRGB = j.hue2RGB(o.hsv.h),
            t && (o.background = function(e, t, n) {
                var r = C.options.grey
                  , i = {};
                return i.RGB = {
                    r: e.r,
                    g: e.g,
                    b: e.b
                },
                i.rgb = {
                    r: t.r,
                    g: t.g,
                    b: t.b
                },
                i.alpha = n,
                i.equivalentGrey = E(r.r * e.r + r.g * e.g + r.b * e.b),
                i.rgbaMixBlack = N(t, {
                    r: 0,
                    g: 0,
                    b: 0
                }, n, 1),
                i.rgbaMixWhite = N(t, {
                    r: 1,
                    g: 1,
                    b: 1
                }, n, 1),
                i.rgbaMixBlack.luminance = _(i.rgbaMixBlack, !0),
                i.rgbaMixWhite.luminance = _(i.rgbaMixWhite, !0),
                C.options.customBG && (i.rgbaMixCustom = N(t, C.options.customBG, n, 1),
                i.rgbaMixCustom.luminance = _(i.rgbaMixCustom, !0),
                C.options.customBG.luminance = _(C.options.customBG, !0)),
                i
            }(p, o.rgb, o.alpha))
        }
        var g, v, m, y = o.rgb, b = o.alpha, x = "luminance", w = o.background;
        return (g = N(y, {
            r: 0,
            g: 0,
            b: 0
        }, b, 1))[x] = _(g, !0),
        o.rgbaMixBlack = g,
        (v = N(y, {
            r: 1,
            g: 1,
            b: 1
        }, b, 1))[x] = _(v, !0),
        o.rgbaMixWhite = v,
        a.customBG && ((m = N(y, w.rgbaMixCustom, b, 1))[x] = _(m, !0),
        m.WCAG2Ratio = function(e, t) {
            var n = 1;
            n = t <= e ? (e + .05) / (t + .05) : (t + .05) / (e + .05);
            return E(100 * n) / 100
        }(m[x], w.rgbaMixCustom[x]),
        (o.rgbaMixBGMixCustom = m).luminanceDelta = T.abs(m[x] - w.rgbaMixCustom[x]),
        m.hueDelta = function(e, t, n) {
            return (T.max(e.r - t.r, t.r - e.r) + T.max(e.g - t.g, t.g - e.g) + T.max(e.b - t.b, t.b - e.b)) * (n ? 255 : 1) / 765
        }(w.rgbaMixCustom, m, !0)),
        o.RGBLuminance = _(p),
        o.HUELuminance = _(o.hueRGB),
        a.convertCallback && a.convertCallback(o, e),
        o
    }
    t.prototype.setColor = function(e, t, n) {
        return o(this),
        e ? s(this.colors, e, t, c, n) : (n !== c && (this.colors.alpha = u(n, 0, 1)),
        a(t))
    }
    ,
    t.prototype.setCustomBackground = function(e) {
        return o(this),
        this.options.customBG = "string" == typeof e ? j.txt2color(e).rgb : e,
        s(this.colors, c, "rgb")
    }
    ,
    t.prototype.saveAsBackground = function() {
        return o(this),
        s(this.colors, c, "rgb", !0)
    }
    ,
    t.prototype.toString = function(e, t) {
        return j.color2text((e || "rgb").toLowerCase(), this.colors, t)
    }
    ;
    var j = {
        txt2color: function(e) {
            var t = {}
              , n = e.replace(/(?:#|\)|%)/g, "").split("(")
              , r = (n[1] || "").split(/,\s*/)
              , i = n[1] ? n[0].substr(0, 3) : "rgb"
              , o = "";
            if (t.type = i,
            t[i] = {},
            n[1])
                for (var s = 3; s--; )
                    o = i[s] || i.charAt(s),
                    t[i][o] = +r[s] / S[i][o][1];
            else
                t.rgb = j.HEX2rgb(n[0]);
            return t.alpha = r[3] ? +r[3] : 1,
            t
        },
        color2text: function(e, t, n) {
            var r = !1 !== n && E(100 * t.alpha) / 100
              , i = "number" == typeof r && !1 !== n && (n || 1 !== r)
              , o = t.RND.rgb
              , s = t.RND.hsl
              , a = "hex" === e && i
              , u = "hex" === e && !a
              , c = "rgb" === e || a ? o.r + ", " + o.g + ", " + o.b : u ? "#" + t.HEX : s.h + ", " + s.s + "%, " + s.l + "%";
            return u ? c : (a ? "rgb" : e) + (i ? "a" : "") + "(" + c + (i ? ", " + r : "") + ")"
        },
        RGB2HEX: function(e) {
            return ((e.r < 16 ? "0" : "") + e.r.toString(16) + (e.g < 16 ? "0" : "") + e.g.toString(16) + (e.b < 16 ? "0" : "") + e.b.toString(16)).toUpperCase()
        },
        HEX2rgb: function(e) {
            return {
                r: +("0x" + (e = e.split(""))[0] + e[e[3] ? 1 : 0]) / 255,
                g: +("0x" + e[e[3] ? 2 : 1] + (e[3] || e[1])) / 255,
                b: +("0x" + (e[4] || e[2]) + (e[5] || e[2])) / 255
            }
        },
        hue2RGB: function(e) {
            var t = 6 * e
              , n = ~~t % 6
              , r = 6 == t ? 0 : t - n;
            return {
                r: E(255 * [1, 1 - r, 0, 0, r, 1][n]),
                g: E(255 * [r, 1, 1, 1 - r, 0, 0][n]),
                b: E(255 * [0, 0, r, 1, 1, 1 - r][n])
            }
        },
        rgb2hsv: function(e) {
            var t, n, r = e.r, i = e.g, o = e.b, s = 0;
            return i < o && (i = o + (o = i,
            0),
            s = -1),
            n = o,
            r < i && (r = i + (i = r,
            0),
            s = -2 / 6 - s,
            n = T.min(i, o)),
            t = r - n,
            {
                h: (r ? t / r : 0) < 1e-15 ? k && k.hsl && k.hsl.h || 0 : t ? T.abs(s + (i - o) / (6 * t)) : 0,
                s: r ? t / r : k && k.hsv && k.hsv.s || 0,
                v: r
            }
        },
        hsv2rgb: function(e) {
            var t = 6 * e.h
              , n = e.s
              , r = e.v
              , i = ~~t
              , o = t - i
              , s = r * (1 - n)
              , a = r * (1 - o * n)
              , u = r * (1 - (1 - o) * n)
              , c = i % 6;
            return {
                r: [r, a, s, s, u, r][c],
                g: [u, r, r, a, s, s][c],
                b: [s, s, u, r, r, a][c]
            }
        },
        hsv2hsl: function(e) {
            var t = (2 - e.s) * e.v
              , n = e.s * e.v;
            return n = e.s ? t < 1 ? t ? n / t : 0 : n / (2 - t) : 0,
            {
                h: e.h,
                s: e.v || n ? n : k && k.hsl && k.hsl.s || 0,
                l: t / 2
            }
        },
        rgb2hsl: function(e, t) {
            var n = j.rgb2hsv(e);
            return j.hsv2hsl(t ? n : k.hsv = n)
        },
        hsl2rgb: function(e) {
            var t = 6 * e.h
              , n = e.s
              , r = e.l
              , i = r < .5 ? r * (1 + n) : r + n - n * r
              , o = r + r - i
              , s = ~~t
              , a = i * (i ? (i - o) / i : 0) * (t - s)
              , u = o + a
              , c = i - a
              , l = s % 6;
            return {
                r: [i, c, o, o, u, i][l],
                g: [u, i, i, c, o, o][l],
                b: [o, o, u, i, i, c][l]
            }
        }
    };
    function A(e, t) {
        var n = {}
          , r = 0
          , i = t / 2;
        for (var o in e)
            r = e[o] % t,
            n[o] = e[o] + (i < r ? t - r : -r);
        return n
    }
    function _(e, t) {
        for (var n = t ? 1 : 255, r = [e.r / n, e.g / n, e.b / n], i = C.options.luminance, o = r.length; o--; )
            r[o] = r[o] <= .03928 ? r[o] / 12.92 : T.pow((r[o] + .055) / 1.055, 2.4);
        return i.r * r[0] + i.g * r[1] + i.b * r[2]
    }
    function N(e, t, n, r) {
        var i = {}
          , o = n !== c ? n : 1
          , s = r !== c ? r : 1
          , a = o + s * (1 - o);
        for (var u in e)
            i[u] = (e[u] * o + t[u] * s * (1 - o)) / a;
        return i.a = a,
        i
    }
    function u(e, t, n) {
        return n < e ? n : e < t ? t : e
    }
    return t
});
