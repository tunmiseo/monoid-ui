/*! Momentum Dashboard - app.min.js
Copyright (c) 2013-2018 Momentum Dashboard Corp. All rights reserved.

All portions of this file are the confidential and proprietary
intellectual property of Momentum Dashboard Corp.

*/
function initializeBookmarksPlaceHolder() {
    "true" == localStorage.getItem("bookmarksEnabled") && (document.getElementsByClassName("bookmarks-placeholder")[0].style.display = "block",
    document.body.classList.add("has-bookmarks"))
}
initializeBookmarksPlaceHolder();
try {
    navigator && navigator.serviceWorker && navigator.serviceWorker.register("image-cache-worker.js", {
        scope: "./"
    }).then(navigator.serviceWorker.ready).then(function() {}).catch(function(e) {})
} catch (e) {}
window.m = _.extend({
    $window: $(window),
    appView: "",
    globals: {},
    models: {},
    collect: {},
    views: {},
    addins: {},
    utils: {},
    bootstrappers: {},
    commands: {},
    templates: {},
    widgets: [],
    appsReady: !1,
    appsLoaded: !1,
    console: {
        log: function(e) {
            m.log += e + "\n"
        }
    },
    log: "",
    date: function() {
        return new Date
    },
    now: function() {
        return m.date().getTime()
    },
    startTime: 0,
    elapsed: function() {
        return m.now() - m.startTime
    },
    isLoggedIn: function() {
        return !!localStorage.getItem("token")
    }
}, Backbone.Events),
m.firstLoadEver = !localStorage.getItem("client_uuid"),
m.startTime = m.now(),
Backbone.View = function(t) {
    return t.extend({
        constructor: function(e) {
            this.options = e || {},
            t.apply(this, arguments)
        }
    })
}(Backbone.View);
var backboneSync = Backbone.sync;
Backbone.sync = function(e, t, n) {
    (n = n || {}).beforeSend = function(e) {
        setMomentumAuthHeader(e),
        e.overrideMimeType("application/json")
    }
    ,
    backboneSync(e, t, n)
}
,
m.templates = m.templates || {},
m.templates.background = m.templates.background || {},
m.templates.background["background-info"] = Handlebars.template({
    1: function(e, t, n, i) {
        return ' <i class="icon icon-angle-right"></i> '
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<div class="app-container app-dash background-info">\n\t<span class="background-info-title">' + (null != (a = typeof (o = null != (o = t.title || (null != e ? e.title : e)) ? o : s) == r ? o.call(e, {
            name: "title",
            hash: {},
            data: i
        }) : o) ? a : "") + (null != (a = t.if.call(e, null != e ? e.hasDetailUrl : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '</span>\n\t<span class="background-info-source">\n\t\t<span class="background-info-source-link" data-url="' + l(typeof (o = null != (o = t.sourceUrl || (null != e ? e.sourceUrl : e)) ? o : s) == r ? o.call(e, {
            name: "sourceUrl",
            hash: {},
            data: i
        }) : o) + '">' + l(typeof (o = null != (o = t.attribution || (null != e ? e.attribution : e)) ? o : s) == r ? o.call(e, {
            name: "attribution",
            hash: {},
            data: i
        }) : o) + '</span>\n\t\t<span class="control control-heart ' + l(typeof (o = null != (o = t.fav_class || (null != e ? e.fav_class : e)) ? o : s) == r ? o.call(e, {
            name: "fav_class",
            hash: {},
            data: i
        }) : o) + '">\n\t\t\t<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/icon-heart-empty.svg" class="icon icon-dash-heart-empty">\n\t\t\t<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/icon-heart.svg" class="icon icon-dash-heart">\n\t\t</span>\n\t\t<span class="control control-skip" title="Next Background">\n\t\t\t<span class="icon-container">\n\t\t\t\t<svg class="icon icon-skip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12"><circle cx="115.5" cy="108.62" r="23"/>' + (null != (a = typeof (o = null != (o = t.skipIconPath || (null != e ? e.skipIconPath : e)) ? o : s) == r ? o.call(e, {
            name: "skipIconPath",
            hash: {},
            data: i
        }) : o) ? a : "") + "</svg>\n\t\t\t</span>\n\t\t</span>\n\t</span>\n</div>\n"
    },
    useData: !0
}),
m.templates.background["background-template-1"] = Handlebars.template({
    1: function(e, t, n, i) {
        return ' <i class="icon icon-angle-right"></i> '
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<div class="app-container background-info">\n\t<span class="background-info-title">' + (null != (a = typeof (o = null != (o = t.title || (null != e ? e.title : e)) ? o : s) == r ? o.call(e, {
            name: "title",
            hash: {},
            data: i
        }) : o) ? a : "") + (null != (a = t.if.call(e, null != e ? e.hasDetailUrl : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '</span>\n\t<span class="background-info-source">\n\t\t<span class="background-info-source-link" data-url="' + l(typeof (o = null != (o = t.sourceUrl || (null != e ? e.sourceUrl : e)) ? o : s) == r ? o.call(e, {
            name: "sourceUrl",
            hash: {},
            data: i
        }) : o) + '">\n\t\t\t<span>Shot on a </span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 24">' + (null != (a = typeof (o = null != (o = t.skipIconPath || (null != e ? e.skipIconPath : e)) ? o : s) == r ? o.call(e, {
            name: "skipIconPath",
            hash: {},
            data: i
        }) : o) ? a : "") + '</svg><span class="dji mavic" style="font-weight: 600;"> MAVIC </span><span class="dji air" style="font-weight: 100;">AIR</span>\n\t\t</span><span class="control control-heart ' + l(typeof (o = null != (o = t.fav_class || (null != e ? e.fav_class : e)) ? o : s) == r ? o.call(e, {
            name: "fav_class",
            hash: {},
            data: i
        }) : o) + '"><img src="img/icon-heart-empty.svg" class="icon icon-heart-empty"><img src="img/icon-heart.svg" class="icon icon-heart"></span><span class="control control-skip" title="Next Background"><img src="img/icon-skip.svg" class="icon icon-skip"></span>\n\t</span>\n</div>'
    },
    useData: !0
}),
m.templates.background["background-template-2"] = Handlebars.template({
    1: function(e, t, n, i) {
        return ' <i class="icon icon-angle-right"></i> '
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<div class="app-container background-info show-hover">\n\t<span class="background-info-title">' + (null != (a = typeof (o = null != (o = t.title || (null != e ? e.title : e)) ? o : s) == r ? o.call(e, {
            name: "title",
            hash: {},
            data: i
        }) : o) ? a : "") + (null != (a = t.if.call(e, null != e ? e.hasDetailUrl : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '</span>\n\t<span class="background-info-source">\n\t\t<span class="background-info-source-link" data-url="' + l(typeof (o = null != (o = t.sourceUrl || (null != e ? e.sourceUrl : e)) ? o : s) == r ? o.call(e, {
            name: "sourceUrl",
            hash: {},
            data: i
        }) : o) + '">' + l(typeof (o = null != (o = t.attribution || (null != e ? e.attribution : e)) ? o : s) == r ? o.call(e, {
            name: "attribution",
            hash: {},
            data: i
        }) : o) + '</span>\n\t\t<span class="control control-heart ' + l(typeof (o = null != (o = t.fav_class || (null != e ? e.fav_class : e)) ? o : s) == r ? o.call(e, {
            name: "fav_class",
            hash: {},
            data: i
        }) : o) + '">\n\t\t\t<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/icon-heart-empty.svg" class="icon icon-dash-heart-empty">\n\t\t\t<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/icon-heart.svg" class="icon icon-dash-heart">\n\t\t</span>\n\t\t<span class="control control-skip" title="Next Background">\n\t\t\t<span class="icon-container">\n\t\t\t\t<svg class="icon icon-skip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12"><circle cx="115.5" cy="108.62" r="23"/>' + (null != (a = typeof (o = null != (o = t.skipIconPath || (null != e ? e.skipIconPath : e)) ? o : s) == r ? o.call(e, {
            name: "skipIconPath",
            hash: {},
            data: i
        }) : o) ? a : "") + "</svg>\n\t\t\t</span>\n\t\t</span>\n\t</span>\n</div>"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.centerclock = m.templates.centerclock || {},
m.templates.centerclock.clock = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o = t.helperMissing, s = "function", r = this.escapeExpression;
        return '<div class="time">' + r(typeof (a = null != (a = t.time || (null != e ? e.time : e)) ? a : o) == s ? a.call(e, {
            name: "time",
            hash: {},
            data: i
        }) : a) + '</div>\n<span class="format">' + r(typeof (a = null != (a = t.format || (null != e ? e.format : e)) ? a : o) == s ? a.call(e, {
            name: "format",
            hash: {},
            data: i
        }) : a) + "</span>\n"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.greeting = m.templates.greeting || {},
m.templates.greeting["greeting-template"] = Handlebars.template({
    1: function(e, t, n, i) {
        var a;
        return '\t<span class="more more-dash" data-test="more-container">\n\t\t<div class="icon-wrapper dash-icon-wrapper more-toggle" data-test="more-toggle">\n\t\t\t' + (null != (a = (t.iconEllipsis || e && e.iconEllipsis || t.helperMissing).call(e, "dash-icon more-icon", {
            name: "iconEllipsis",
            hash: {},
            data: i
        })) ? a : "") + '\n\t\t</div>\n\t\t<div class="app dropdown more-dropdown dash-dropdown nipple-top-left">\n\t\t\t<ul class="dropdown-list">\n' + (null != (a = t.if.call(e, null != e ? e.showFav : e, {
            name: "if",
            hash: {},
            fn: this.program(2, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + (null != (a = t.if.call(e, null != e ? e.showPin : e, {
            name: "if",
            hash: {},
            fn: this.program(4, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + (null != (a = t.if.call(e, null != e ? e.showSkip : e, {
            name: "if",
            hash: {},
            fn: this.program(6, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + (null != (a = t.if.call(e, null != e ? e.showMantra : e, {
            name: "if",
            hash: {},
            fn: this.program(8, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + (null != (a = t.if.call(e, null != e ? e.showRemove : e, {
            name: "if",
            hash: {},
            fn: this.program(10, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '\t\t\t\t<li class="line"></li>\n' + (null != (a = t.if.call(e, null != e ? e.showSettingsMantras : e, {
            name: "if",
            hash: {},
            fn: this.program(12, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + (null != (a = t.if.call(e, null != e ? e.showDisplaynameEdit : e, {
            name: "if",
            hash: {},
            fn: this.program(14, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + "\t\t\t</ul>\n\t\t</div>\n\t</span>\n"
    },
    2: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="mantra-fav toggleable" data-test="mantra-fav">\n\t\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-heart" viewBox="0 0 953 1000"><path d="M1 329q7-115 79-191h2l2-2q88-76 199-76t191 70q32-28 67-45l2-2h2q56-23 117-23 88-2 161 43t110 124v2l2 4q30 106 10 202t-80 175q-62 88-162 172 0 2-2 2-49 45-107 90-34 25-59 41-33 23-55 23l-6 2-5-2q-28-3-59-29-10-6-21-16t-16-13h-2Q125 692 43 540v-2Q-6 444 1 329zm85 1"/></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="dropdown-list-label">Favorite</span>\n\t\t\t\t\t</li>\n'
    },
    4: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="mantra-pin toggleable" data-test="mantra-pin">\n\t\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.71 481.72"><path d="M106.12,10.76,10.77,106.13a36.72,36.72,0,0,0,45.92,56.8l109.6,127.41a100.11,100.11,0,0,0,20,113.32,35.27,35.27,0,0,0,49.86,0l57.33-57.31L481.71,481.72,346.35,293.52l57.31-57.31a35.3,35.3,0,0,0,0-49.88,100.16,100.16,0,0,0-113.29-20L162.93,56.67a36.72,36.72,0,0,0-56.81-45.91Z" transform="translate(0 0)"/></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="dropdown-list-label pin">Pin</span>\n\t\t\t\t\t\t<span class="dropdown-list-label unpin">Unpin</span>\n\t\t\t\t\t</li>\n'
    },
    6: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="mantra-skip" data-test="mantra-skip">\n\t\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-skip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259.04 137.93"><circle cx="118" cy="109.43" r="28"/><path d="M291.5,276A27.5,27.5,0,1,1,264,303.5,27.54,27.54,0,0,1,291.5,276m0-1A28.5,28.5,0,1,0,320,303.5,28.5,28.5,0,0,0,291.5,275Z" transform="translate(-173.5 -194.07)"/><path class="arrow" d="M403.51,262.47a126.14,126.14,0,0,0-120.77-68.05,112.78,112.78,0,0,0-72.33,33.34c-21,21.52-33.78,52-36.86,88.09a13.5,13.5,0,0,0,12.3,14.6c.39,0,.78.05,1.17.05a13.5,13.5,0,0,0,13.43-12.35c2.54-29.8,12.67-54.53,29.27-71.52,14.59-14.93,33.63-23.67,55.06-25.29a98,98,0,0,1,63.57,17.78,99,99,0,0,1,29.55,32.82l-28.39,10.51L417,327l15.54-75.28Z" transform="translate(-173.5 -194.07)"/></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="dropdown-list-label">Skip</span>\n\t\t\t\t\t</li>\n'
    },
    8: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="mantra-show" data-test="mantra-show">\n\t\t\t\t\t\t<span class="dropdown-list-label">Show today’s mantra</span>\n\t\t\t\t\t</li>\n'
    },
    10: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="mantra-remove">\n\t\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-remove" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241.66 241.66"><path d="M210.323 17.93h-17.898c-9.01 0-16.066-5.165-26.848-8.949C150.811 3.865 128.756.025 90.766.025 84.122.025 63.516 0 63.516 0c-6.309 0-11.377 2.882-15.035 6.363-1.392 1.323-2.844 3.245-3.465 6.994-.101.582-.21 3.017-.193 3.346-.478 10.729 6.008 14.614 9.682 15.835-.101.034-.033.126-.235.117l-11.662-.522c-10.352-.472-20.572 6.986-20.572 19.669 0 10.517 8.524 17.933 18.844 18.439l-6.184-.287c-10.352-.455-19.103 7.695-19.582 18.22-.453 10.526 7.567 19.433 17.913 19.906-10.345-.472-19.121 7.677-19.573 18.203-.454 10.526 6.821 19.99 17.174 20.444l68.73 8.63s-14.324 23.959-14.324 59.455c0 23.664 16.905 26.848 26.848 26.848 7.821.002 9.927-15.151 9.927-15.151h.016c1.77-9.717 4.077-18.203 12.091-33.827 8.968-17.512 21.184-15.869 35.446-31.467 2.517-2.747 5.898-7.281 9.195-12.86.269-.295.521-.708.764-1.289.293-.69.646-1.172.956-1.812a102.669 102.669 0 0 0 1.61-3.059c8.826-8.827 22.579-7.925 28.435-7.925 11.746 0 17.898-6.825 17.898-17.898l.005-81.828c.002-12.423-5.082-16.614-17.902-16.614z" fill-rule="evenodd" clip-rule="evenodd"/></svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="dropdown-list-label">Don\'t show again</span>\n\t\t\t\t\t</li>\n'
    },
    12: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="mantra-settings" data-test="mantra-settings">\n\t\t\t\t\t\t<span class="dropdown-list-label">Mantra settings</span>\n\t\t\t\t\t</li>\n'
    },
    14: function(e, t, n, i) {
        return '\t\t\t\t\t<li class="displayname-edit" data-test="displayname-edit">\n\t\t\t\t\t\t<span class="dropdown-list-label">Edit your name</span>\n\t\t\t\t\t</li>\n'
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<span class="side-col"></span>\n\n<span class="center-col content" data-content-type="' + l(typeof (o = null != (o = t.contentType || (null != e ? e.contentType : e)) ? o : s) == r ? o.call(e, {
            name: "contentType",
            hash: {},
            data: i
        }) : o) + '" data-test="content">\n\t<span class="message" data-test="message">' + l(typeof (o = null != (o = t.content || (null != e ? e.content : e)) ? o : s) == r ? o.call(e, {
            name: "content",
            hash: {},
            data: i
        }) : o) + '</span>\x3c!--\n\t--\x3e<span class="name-wrapper">\x3c!--\n\t\t--\x3e<span class="name no-contenteditable-fix" spellcheck="false" data-test="name">' + l(typeof (o = null != (o = t.name || (null != e ? e.name : e)) ? o : s) == r ? o.call(e, {
            name: "name",
            hash: {},
            data: i
        }) : o) + '</span>\x3c!--\n\t\t--\x3e<span class="punctuation">' + l(typeof (o = null != (o = t.punctuation || (null != e ? e.punctuation : e)) ? o : s) == r ? o.call(e, {
            name: "punctuation",
            hash: {},
            data: i
        }) : o) + '</span>\n\t</span>\n</span>\n\n<span class="side-col">\n' + (null != (a = t.if.call(e, null != e ? e.showMenu : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + "</span>\n"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.metric = m.templates.metric || {},
m.templates.metric.widget = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o = t.helperMissing, s = "function", r = this.escapeExpression;
        return '<div><span class="metric-stat">' + r(typeof (a = null != (a = t.statvalue || (null != e ? e.statvalue : e)) ? a : o) == s ? a.call(e, {
            name: "statvalue",
            hash: {},
            data: i
        }) : a) + '</span></div><span class="metric-label">' + r(typeof (a = null != (a = t.statlabel || (null != e ? e.statlabel : e)) ? a : o) == s ? a.call(e, {
            name: "statlabel",
            hash: {},
            data: i
        }) : a) + "</span>"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.notification = m.templates.notification || {},
m.templates.notification.notification = Handlebars.template({
    1: function(e, t, n, i) {
        var a, o;
        return '<div class="notification-title">' + (null != (a = t.if.call(e, null != e ? e.icon_url : e, {
            name: "if",
            hash: {},
            fn: this.program(2, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + this.escapeExpression("function" == typeof (o = null != (o = t.title || (null != e ? e.title : e)) ? o : t.helperMissing) ? o.call(e, {
            name: "title",
            hash: {},
            data: i
        }) : o) + "</div>"
    },
    2: function(e, t, n, i) {
        var a;
        return '<img class="notification-icon" src="' + this.escapeExpression("function" == typeof (a = null != (a = t.icon_url || (null != e ? e.icon_url : e)) ? a : t.helperMissing) ? a.call(e, {
            name: "icon_url",
            hash: {},
            data: i
        }) : a) + '">'
    },
    4: function(e, t, n, i) {
        var a;
        return '<button class="notification-button">' + this.escapeExpression("function" == typeof (a = null != (a = t.cta_text || (null != e ? e.cta_text : e)) ? a : t.helperMissing) ? a.call(e, {
            name: "cta_text",
            hash: {},
            data: i
        }) : a) + "</button>"
    },
    6: function(e, t, n, i) {
        var a;
        return '<span class="button-text secondary-text">' + this.escapeExpression("function" == typeof (a = null != (a = t.secondary_text || (null != e ? e.secondary_text : e)) ? a : t.helperMissing) ? a.call(e, {
            name: "secondary_text",
            hash: {},
            data: i
        }) : a) + "</span>"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<div class="app-wrapper ' + l(typeof (o = null != (o = t.nippleClass || (null != e ? e.nippleClass : e)) ? o : s) == r ? o.call(e, {
            name: "nippleClass",
            hash: {},
            data: i
        }) : o) + '">\n\t<div class="app notification-app" data-test="notification">\n\t\t<div class="icon-wrapper notification-hide">\n\t\t\t' + (null != (a = typeof (o = null != (o = t.iconCancel || (null != e ? e.iconCancel : e)) ? o : s) == r ? o.call(e, {
            name: "iconCancel",
            hash: {},
            data: i
        }) : o) ? a : "") + "</div>\n\t\t" + (null != (a = t.if.call(e, null != e ? e.title : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '\n\t\t<div class="notification-description">' + l(typeof (o = null != (o = t.message || (null != e ? e.message : e)) ? o : s) == r ? o.call(e, {
            name: "message",
            hash: {},
            data: i
        }) : o) + "</div>\n\t\t" + (null != (a = t.if.call(e, null != e ? e.cta_cmd : e, {
            name: "if",
            hash: {},
            fn: this.program(4, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + (null != (a = t.if.call(e, null != e ? e.secondary_cmd : e, {
            name: "if",
            hash: {},
            fn: this.program(6, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + "\n\t</div>\n</div>\n"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.quote = m.templates.quote || {},
m.templates.quote.quote = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o = t.helperMissing, s = "function", r = this.escapeExpression;
        return '<p class="quote-body">\n\t<span class="quote-body-text" data-test="quote-body-text">&ldquo;' + r(typeof (a = null != (a = t.body || (null != e ? e.body : e)) ? a : o) == s ? a.call(e, {
            name: "body",
            hash: {},
            data: i
        }) : a) + '&rdquo;</span><i class="icon-angle-right"></i>\n\t<span class="quote-source" data-test="quote-source">\n\t\t<span class="quote-source-text" data-test="quote-source-text">' + r(typeof (a = null != (a = t.source || (null != e ? e.source : e)) ? a : o) == s ? a.call(e, {
            name: "source",
            hash: {},
            data: i
        }) : a) + '</span>\n\t\t<span class="control control-heart ' + r(typeof (a = null != (a = t.fav_class || (null != e ? e.fav_class : e)) ? a : o) == s ? a.call(e, {
            name: "fav_class",
            hash: {},
            data: i
        }) : a) + '" data-test="control-fav">\n\t\t\t<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/icon-heart-empty.svg" class="icon icon-dash-heart-empty">\n\t\t\t<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="img/icon-heart.svg" class="icon icon-dash-heart">\n\t\t</span>\n\t\t<span class="control control-skip">\n\t\t\t<span class="icon-container">\n\t\t\t\t<svg class="icon icon-skip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12"><circle cx="115.5" cy="108.62" r="23"/><path d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"/><path class="arrow" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)"/></svg>\n\t\t\t</span>\n\t\t</span>\n\t\t<span data-url="' + r(typeof (a = null != (a = t.twitterIntentUrl || (null != e ? e.twitterIntentUrl : e)) ? a : o) == s ? a.call(e, {
            name: "twitterIntentUrl",
            hash: {},
            data: i
        }) : a) + '" class="control control-twitter">\n\t\t\t<i class="icon icon-twitter"></i>\n\t\t</span>\n\t</span>\n</p>\n'
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.teamlogo = m.templates.teamlogo || {},
m.templates.teamlogo.teamlogo = Handlebars.template({
    1: function(e, t, n, i) {
        return "is-admin"
    },
    3: function(e, t, n, i) {
        var a;
        return null != (a = t.unless.call(e, null != e ? e.logo : e, {
            name: "unless",
            hash: {},
            fn: this.program(4, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : ""
    },
    4: function(e, t, n, i) {
        return "hide-logo"
    },
    6: function(e, t, n, i) {
        var a, o;
        return '\t\t<img class="logo' + (null != (a = t.if.call(e, null != e ? e.isSVG : e, {
            name: "if",
            hash: {},
            fn: this.program(7, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '" src="' + this.escapeExpression("function" == typeof (o = null != (o = t.logo || (null != e ? e.logo : e)) ? o : t.helperMissing) ? o.call(e, {
            name: "logo",
            hash: {},
            data: i
        }) : o) + '">\n' + (null != (a = t.if.call(e, null != e ? e.isAdmin : e, {
            name: "if",
            hash: {},
            fn: this.program(9, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "")
    },
    7: function(e, t, n, i) {
        return " svg"
    },
    9: function(e, t, n, i) {
        return '\t\t\t<span class="team-logo-icon-wrapper">\n\t\t\t\t<i class="icon icon-angle-down"></i>\n\t\t\t</span>\n'
    },
    11: function(e, t, n, i) {
        var a;
        return null != (a = t.if.call(e, null != e ? e.isAdmin : e, {
            name: "if",
            hash: {},
            fn: this.program(12, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : ""
    },
    12: function(e, t, n, i) {
        return "\t\t\tTeam\n"
    },
    14: function(e, t, n, i) {
        return '\t<div class="app-wrapper">\n\t\t<div class="app nipple-top-left team-app">\n\t\t\t<ul class="dropdown-list">\n\t\t\t\t\x3c!--\n\t\t\t\t<li class="settings settings-meta-add">\n\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill-rule="nonzero"><path d="M6.75 2a1.25 1.25 0 0 1 2.5 0v12a1.25 1.25 0 0 1-2.5 0V2z"/><path d="M2 9.25a1.25 1.25 0 0 1 0-2.5h12a1.25 1.25 0 0 1 0 2.5H2z"/></g></svg>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="dropdown-list-label">Add Content</span>\n\t\t\t\t</li>\n\t\t\t\t--\x3e\n\t\t\t\t<li class="settings settings-members">\n\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-add-members" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 22"><g fill-rule="nonzero"><path d="M16.5 12v8.25c0 1.333-2 1.333-2 0V12c0-1.333 2-1.333 2 0z"/><path d="M11.25 15.25h8.25c1.333 0 1.333 2 0 2h-8.25c-1.333 0-1.333-2 0-2zM2.75 18.25a1 1 0 0 1-2 0 7.752 7.752 0 0 1 10.792-7.128 1 1 0 1 1-.784 1.84A5.752 5.752 0 0 0 2.75 18.25z"/><path d="M8.5 2.75A3.125 3.125 0 1 0 8.5 9a3.125 3.125 0 0 0 0-6.25zm0-2A5.125 5.125 0 1 1 8.5 11 5.125 5.125 0 0 1 8.5.75z"/></g></svg>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="dropdown-list-label">Invite Team Members</span>\n\t\t\t\t</li>\n\t\t\t\t<li class="settings settings-general">\n\t\t\t\t\t<span class="dropdown-list-icon-wrapper">\n\t\t\t\t\t\t<svg class="icon dropdown-list-icon icon-settings"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="nonzero"><path d="M12.083 3.591a1.2 1.2 0 0 0-2.084.862l.083 1.74a3.697 3.697 0 0 1-3.884 3.895l-1.747-.09a1.198 1.198 0 0 0-.861 2.083l1.297 1.179a3.7 3.7 0 0 1 .002 5.493l-1.3 1.174a1.197 1.197 0 0 0 .868 2.083l1.757-.089a3.697 3.697 0 0 1 3.874 3.883l-.09 1.742a1.198 1.198 0 0 0 2.083.864l1.178-1.296a3.699 3.699 0 0 1 5.492-.003l1.17 1.295c.24.262.584.404.939.388a1.197 1.197 0 0 0 1.144-1.243l-.089-1.758a3.697 3.697 0 0 1 3.882-3.874l1.75.089a1.198 1.198 0 0 0 .866-2.086l-1.302-1.174a3.7 3.7 0 0 1-.001-5.494l1.302-1.174a1.199 1.199 0 0 0-.861-2.087l-1.756.09a3.698 3.698 0 0 1-3.87-3.88l.09-1.75a1.198 1.198 0 0 0-2.091-.861l-1.177 1.292a3.696 3.696 0 0 1-5.492.001l-1.172-1.294zm3.026-.383a1.197 1.197 0 0 0 1.785-.002l1.178-1.294a3.698 3.698 0 0 1 6.439 2.668l-.089 1.749a1.197 1.197 0 0 0 1.252 1.256l1.752-.089a3.699 3.699 0 0 1 2.661 6.44l-1.301 1.174a1.201 1.201 0 0 0-.001 1.78l1.303 1.176a3.698 3.698 0 0 1-2.668 6.439l-1.751-.09a1.196 1.196 0 0 0-1.257 1.26l.09 1.757a3.698 3.698 0 0 1-6.43 2.656l-1.176-1.302a1.197 1.197 0 0 0-1.782.003l-1.182 1.302a3.699 3.699 0 0 1-6.43-2.665l.09-1.75a1.196 1.196 0 0 0-1.259-1.258l-1.748.09a3.696 3.696 0 0 1-2.673-6.436l1.3-1.174a1.201 1.201 0 0 0 0-1.784l-1.302-1.18a3.699 3.699 0 0 1 2.665-6.432l1.752.088a1.199 1.199 0 0 0 1.258-1.267l-.084-1.752a3.699 3.699 0 0 1 6.433-2.66l1.175 1.297z"/><path d="M16 11.626a4.375 4.375 0 1 0 0 8.751 4.375 4.375 0 0 0 0-8.75zm0-2.5a6.875 6.875 0 1 1 0 13.751 6.875 6.875 0 0 1 0-13.75z"/></g></svg>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="dropdown-list-label">Go to Team Admin</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n'
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a;
        return '<div class="app-dash add-shadow toggle ' + (null != (a = t.if.call(e, null != e ? e.isAdmin : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.program(3, i, 0),
            data: i
        })) ? a : "") + '">\n' + (null != (a = t.if.call(e, null != e ? e.logo : e, {
            name: "if",
            hash: {},
            fn: this.program(6, i, 0),
            inverse: this.program(11, i, 0),
            data: i
        })) ? a : "") + "</div>\n\n" + (null != (a = t.if.call(e, null != e ? e.isAdmin : e, {
            name: "if",
            hash: {},
            fn: this.program(14, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + "\n"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.upsell = m.templates.upsell || {},
m.templates.upsell.appupsell = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<span class="icon-wrapper hide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" class="icon"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg></span>\n<div class="available">Available on Plus</div>\n<div class="title">' + l(typeof (o = null != (o = t.title || (null != e ? e.title : e)) ? o : s) == r ? o.call(e, {
            name: "title",
            hash: {},
            data: i
        }) : o) + '</div>\n<div class="description">' + (null != (a = typeof (o = null != (o = t.description || (null != e ? e.description : e)) ? o : s) == r ? o.call(e, {
            name: "description",
            hash: {},
            data: i
        }) : o) ? a : "") + '</div>\n<a href="" class="button upsell-action">' + l(typeof (o = null != (o = t.buttonText || (null != e ? e.buttonText : e)) ? o : s) == r ? o.call(e, {
            name: "buttonText",
            hash: {},
            data: i
        }) : o) + "</a>\n"
    },
    useData: !0
}),
m.templates = m.templates || {},
m.templates.widgetmanager = m.templates.widgetmanager || {},
m.templates.widgetmanager.dashIcon = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o = t.helperMissing, s = "function", r = this.escapeExpression;
        return '<div class="app-wrapper app-placeholder">\n\t<div class="app ' + r(typeof (a = null != (a = t.appClass || (null != e ? e.appClass : e)) ? a : o) == s ? a.call(e, {
            name: "appClass",
            hash: {},
            data: i
        }) : a) + '" style="height:' + r(typeof (a = null != (a = t.height || (null != e ? e.height : e)) ? a : o) == s ? a.call(e, {
            name: "height",
            hash: {},
            data: i
        }) : a) + "; width:" + r(typeof (a = null != (a = t.width || (null != e ? e.width : e)) ? a : o) == s ? a.call(e, {
            name: "width",
            hash: {},
            data: i
        }) : a) + '">\n\t\t<div class="app-placeholder-loading">\n\t\t\t<i class="loading-icon"></i>Loading...\n\t\t</div>\n\t</div>\n</div>\n<div class="app-dash app-dash-icon add-shadow ' + r((t.kebab || e && e.kebab || o).call(e, null != e ? e.label : e, {
            name: "kebab",
            hash: {},
            data: i
        })) + '-toggle toggle" data-test="' + r((t.kebab || e && e.kebab || o).call(e, null != e ? e.label : e, {
            name: "kebab",
            hash: {},
            data: i
        })) + '-app-dash">\n\t<span class="app-dash-icon-label">' + r(typeof (a = null != (a = t.label || (null != e ? e.label : e)) ? a : o) == s ? a.call(e, {
            name: "label",
            hash: {},
            data: i
        }) : a) + "</span>\n</div>\n"
    },
    useData: !0
}),
m.templates.widgetmanager.metric = Handlebars.template({
    1: function(e, t, n, i) {
        var a;
        return '<span class="metric-stat-unit">' + this.escapeExpression("function" == typeof (a = null != (a = t.metricUnit || (null != e ? e.metricUnit : e)) ? a : t.helperMissing) ? a.call(e, {
            name: "metricUnit",
            hash: {},
            data: i
        }) : a) + "</span>"
    },
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o, s = t.helperMissing, r = "function", l = this.escapeExpression;
        return '<div class="view">\n\t<div class="primary">\n\t\t<div class="metric-stat">\n\t\t\t<span class="metric-stat-number">' + l(typeof (o = null != (o = t.metricValue || (null != e ? e.metricValue : e)) ? o : s) == r ? o.call(e, {
            name: "metricValue",
            hash: {},
            data: i
        }) : o) + "</span>" + (null != (a = t.if.call(e, null != e ? e.metricUnit : e, {
            name: "if",
            hash: {},
            fn: this.program(1, i, 0),
            inverse: this.noop,
            data: i
        })) ? a : "") + '\n\t\t</div>\n\t\t<div class="metric-label">\n\t\t\t<span class="metric-label-name">' + l(typeof (o = null != (o = t.metricLabel || (null != e ? e.metricLabel : e)) ? o : s) == r ? o.call(e, {
            name: "metricLabel",
            hash: {},
            data: i
        }) : o) + '</span>\n\t\t</div>\n\t</div>\n\t<span class="metric-message"></span>\n</div>\n'
    },
    useData: !0
}),
m.templates.widgetmanager.pane = Handlebars.template({
    compiler: [6, ">= 2.0.0-beta.1"],
    main: function(e, t, n, i) {
        var a, o = t.helperMissing, s = "function", r = this.escapeExpression;
        return '<div class="app-wrapper app-placeholder">\n\t<div class="app ' + r(typeof (a = null != (a = t.appClass || (null != e ? e.appClass : e)) ? a : o) == s ? a.call(e, {
            name: "appClass",
            hash: {},
            data: i
        }) : a) + '" style="height:' + r(typeof (a = null != (a = t.height || (null != e ? e.height : e)) ? a : o) == s ? a.call(e, {
            name: "height",
            hash: {},
            data: i
        }) : a) + "; width:" + r(typeof (a = null != (a = t.width || (null != e ? e.width : e)) ? a : o) == s ? a.call(e, {
            name: "width",
            hash: {},
            data: i
        }) : a) + '">\n\t\t<div class="app-placeholder-loading">\n\t\t\t<i class="loading-icon"></i>Loading...\n\t\t</div>\n\t</div>\n</div>\n<span class="app-dash toggle ' + r(typeof (a = null != (a = t.label || (null != e ? e.label : e)) ? a : o) == s ? a.call(e, {
            name: "label",
            hash: {},
            data: i
        }) : a) + '-toggle" data-test="' + r((t.kebab || e && e.kebab || o).call(e, null != e ? e.label : e, {
            name: "kebab",
            hash: {},
            data: i
        })) + '-app-dash">' + r(typeof (a = null != (a = t.label || (null != e ? e.label : e)) ? a : o) == s ? a.call(e, {
            name: "label",
            hash: {},
            data: i
        }) : a) + "</span>\n"
    },
    useData: !0
});
var momoConstants = {
    classInputLengthError: "invalid-length",
    dateHoursPerDay: 24,
    dateMinsPerDay: 1440,
    dateMinsPerHour: 60,
    dateMsPerDay: 864e5,
    dateMsPerHour: 36e5,
    dateMsPerMin: 6e4,
    dateMsPerSec: 1e3,
    dateRolloverHour: 4,
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    keyEscape: 27,
    keyReturn: 13,
    minMarginSmoothScroll: 50,
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    suggestIntegrationLink: "https://momentum.nolt.io/",
    timeContentItemAnimation: 200,
    timeSettingsFade: 150,
    timeSmoothScroll: 500,
    timeToggleClassTwice: 100
}
  , endPunctuationCharCodes = [33, 34, 40, 41, 46, 63, 91, 93, 96, 123, 125, 8220, 8221, 8230];
function mConst(e) {
    var t = momoConstants[e];
    return void 0 === t && console.warn("constant not found:", e),
    t
}
function hasClass(e, t) {
    return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
}
function addClass(e, t) {
    e.classList ? e.classList.add(t) : hasClass(e, t) || (e.className += " " + t)
}
function removeClass(e, t) {
    e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("\\b" + t + "\\b","g"), "")
}
function momoInit() {
    return !0
}
function validateEmail(e) {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e)
}
function getQueryParameter(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
}
function toggleLocalStorageBool(e) {
    var t = "true" === localStorage[e] ? "false" : "true";
    return "true" == (localStorage[e] = t)
}
function getLocalStorageBool(e) {
    return "true" === localStorage[e]
}
function setEndOfContenteditable(e) {
    var t, n;
    document.createRange && ((t = document.createRange()).selectNodeContents(e),
    t.collapse(!1),
    (n = window.getSelection()).removeAllRanges(),
    n.addRange(t))
}
function getActiveDateString() {
    return activeDateStringForDate(m.date())
}
function activeDateStringForDate(e) {
    var t = new Date(e);
    return t.getHours() < mConst("dateRolloverHour") && (t = new Date(t.getTime() - mConst("dateMsPerDay"))),
    t.getFullYear().toString() + "-" + m.utils.twoDigit(t.getMonth() + 1) + "-" + m.utils.twoDigit(t.getDate())
}
function getActiveLocalDateTimeString() {
    return activeLocalDateTimeStringForDate(m.date())
}
function activeLocalDateTimeStringForDate(e) {
    var t = new Date(e);
    return t.getFullYear().toString() + "-" + m.utils.twoDigit(t.getMonth() + 1) + "-" + m.utils.twoDigit(t.getDate()) + "T" + m.utils.twoDigit(t.getHours()) + ":" + m.utils.twoDigit(t.getMinutes()) + ":" + m.utils.twoDigit(t.getSeconds())
}
function getDayPart(e) {
    var t = e.getHours();
    return t >= mConst("dateRolloverHour") && t < 12 ? "morning" : 12 <= t && t < 17 ? "afternoon" : "evening"
}
function getDayName(e, t) {
    return mConst("dayNames" + (t ? "Short" : ""))[e.getDay()]
}
function getMonthName(e, t) {
    return mConst("monthNames" + (t ? "Short" : ""))[e.getMonth()]
}
function getDaysInMonth(e, t) {
    return new Date(e,parseInt(t) + 1,0).getDate()
}
function dateDiffIntegerDays(e, t) {
    var n = new Date(e.valueOf());
    return (new Date(t.valueOf()).setHours(0, 0, 0, 0) - n.setHours(0, 0, 0, 0)) / mConst("dateMsPerDay")
}
function dateIsYesterday(e) {
    return -1 === m.utils.dateDiffIntegerDays(m.date(), e)
}
function dateIsToday(e) {
    return 0 === m.utils.dateDiffIntegerDays(m.date(), e)
}
function dateIsTomorrow(e) {
    return 1 === m.utils.dateDiffIntegerDays(m.date(), e)
}
function dateIsInLast7d(e) {
    var t = m.utils.dateDiffIntegerDays(m.date(), e);
    return -7 < t && t <= 0
}
function getFriendlyDate(e) {
    var t, n, i = m.date();
    return n = (t = e instanceof Date ? e : parseIsoDatetime(e)).getFullYear() === i.getFullYear() ? "" : ", " + t.getFullYear(),
    mConst("monthNamesShort")[t.getMonth()] + " " + t.getDate() + n
}
function formatYearRelative(e) {
    var t = m.date()
      , n = e.getFullYear();
    return n === t.getFullYear() ? "" : ", " + n
}
function formatMonthDayRelative(e, t) {
    return m.utils.dateIsTomorrow(e) ? "Tomorrow" : m.utils.dateIsToday(e) ? "Today" : m.utils.dateIsYesterday(e) ? "Yesterday" : m.utils.getMonthName(e, t) + " " + e.getDate()
}
function getHoursMinsStr(e, t) {
    void 0 === t && (t = m.models.customization.get("hour12clock"));
    var n, i = e.getHours();
    return (t ? (n = " " + (i < 12 ? "AM" : "PM"),
    12 < i && (i -= 12),
    0 === i && (i = 12),
    i) : (n = "",
    m.utils.twoDigit(i))) + ":" + m.utils.twoDigit(e.getMinutes()) + n
}
function parseIsoDatetime(e) {
    var t = e.split(/[: T-]/).map(parseFloat);
    return new Date(t[0],t[1] - 1,t[2],t[3] || 0,t[4] || 0,t[5] || 0,0)
}
function nightsBetween(e, t, n) {
    var i = e
      , a = t
      , o = e.valueOf() >= t.valueOf();
    o && (i = t,
    a = e);
    var s = a.valueOf() - i.valueOf()
      , r = calcDayMs(i, n) + s
      , l = Math.floor(r / mConst("dateMsPerDay"));
    return 0 !== l && o && (l *= -1),
    l
}
function calcDayMs(e, t) {
    var n = e - new Date(e).setHours(0, 0, 0, 0) - t * mConst("dateMsPerHour");
    return n < 0 && (n += mConst("dateMsPerDay")),
    n
}
function dateAdd(e, t, n) {
    function i() {
        a.getDate() !== e.getDate() && a.setDate(0)
    }
    var a = new Date(e);
    switch (t.toLowerCase()) {
    case "year":
        a.setFullYear(a.getFullYear() + n),
        i();
        break;
    case "quarter":
        a.setMonth(a.getMonth() + 3 * n),
        i();
        break;
    case "month":
        a.setMonth(a.getMonth() + n),
        i();
        break;
    case "week":
        a.setDate(a.getDate() + 7 * n);
        break;
    case "day":
        a.setDate(a.getDate() + n);
        break;
    case "hour":
        a.setTime(a.getTime() + 36e5 * n);
        break;
    case "minute":
        a.setTime(a.getTime() + 6e4 * n);
        break;
    case "second":
        a.setTime(a.getTime() + 1e3 * n);
        break;
    default:
        a = void 0
    }
    return a
}
function replaceLastOccurrence(e, t, n) {
    var i = e.lastIndexOf(t);
    return i ? e.slice(0, i) + e.slice(i).replace(t, n) : e
}
function isEndPunctuationChar(e) {
    return _.contains(endPunctuationCharCodes, e.charCodeAt(0))
}
function endsWithEndPunctuation(e) {
    return !!e && isEndPunctuationChar(e.slice(-1))
}
function getEndPunctuationString(e) {
    for (var t, n = "", i = e.length - 1; 0 <= i && isEndPunctuationChar(t = e.charAt(i)); i--)
        n = t + n;
    return n
}
function capitalizeFirstLetter(e) {
    return null == e ? null : e.slice(0, 1).toUpperCase() + e.slice(1)
}
function capitalizeWords(e) {
    var n = e.split(" ");
    return n.forEach(function(e, t) {
        n[t] = e.charAt(0).toUpperCase() + e.slice(1)
    }),
    n.join(" ")
}
function removeTags(e) {
    for (var t, n = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*", i = new RegExp("<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b" + n + ">[\\s\\S]*?</script\\s*|style\\b" + n + ">[\\s\\S]*?</style\\s*|/?[a-z]" + n + ")>","gi"); (e = (t = e).replace(i, "")) !== t; )
        ;
    return e.replace(/</g, "&lt;")
}
function lineBreakString(e, i) {
    function a(e, t, n, i, a, o) {
        var s, r = 0, l = t - 1;
        if (a)
            s = 0;
        else {
            s = t - o;
            var d = e.slice(0, s - 1);
            n.push(" "),
            n.push(d),
            l += r = s - 1
        }
        for (var c = Math.round((e.length - s) / t); 0 <= c; c--) {
            var u = e.slice(r, l);
            if (!u)
                break;
            a ? a = !1 : (n.push(0 === r ? "<br>" : "-<br>"),
            i = n.length - 1),
            n.push(u),
            r += t - 1,
            l += t - 1
        }
        return i
    }
    if (e) {
        if (e.length <= i)
            return e;
        var t = e.split(" ")
          , o = []
          , s = 0;
        return t.forEach(function(e, t) {
            var n = function(e, t) {
                var n = 0;
                return t && (e = e.slice(t)),
                e.forEach(function(e) {
                    n += e.length
                }),
                n
            }(o, s ? s + 1 : 0);
            t ? e.length + n > i ? e.length > i && !e.includes("-") ? s = a(e, i, o, s, !1, n) : (o.push("<br>"),
            s = o.length - 1,
            o.push(e)) : (o.push(" "),
            o.push(e)) : e.length > i && !e.includes("-") ? s = a(e, i, o, s, !0) : o.push(e)
        }),
        o.join("")
    }
}
function twoDigit(e) {
    var t = parseInt(e);
    return (10 <= t ? t : "0" + t.toString()).toString()
}
function getRandomBool() {
    return getRandomBoolByFrequency(.5)
}
function getRandomBoolByFrequency(e) {
    return Math.random() < e
}
function getNextIndex(e, t) {
    return t === e.length - 1 || arrayIndexOutOfBounds(e, t) ? 0 : t + 1
}
function getPrevIndex(e, t) {
    return 0 === t || arrayIndexOutOfBounds(e, t) ? e.length - 1 : t - 1
}
function arrayIndexOutOfBounds(e, t) {
    return t < 0 || t >= e.length
}
function getRandomIntInclusive(e, t) {
    return e = Math.ceil(e),
    t = Math.floor(t),
    Math.floor(Math.random() * (t - e + 1)) + e
}
function getRandomItem(e) {
    return e[Math.floor(Math.random() * e.length)]
}
function betweenInclusive(e, t, n) {
    return t <= e && e <= n
}
function topPosition(e) {
    if (void 0 !== e && 0 !== e.length)
        return e.offset().top
}
function rightPosition(e) {
    if (void 0 !== e && 0 !== e.length)
        return e.offset().left + e.outerWidth()
}
function bottomPosition(e) {
    if (void 0 !== e && 0 !== e.length)
        return e.offset().top + e.outerHeight()
}
function leftPosition(e) {
    if (void 0 !== e && 0 !== e.length)
        return e.offset().left
}
function distanceBelow(e, t, n) {
    var i = bottomPosition(e) - bottomPosition(t);
    return n && (i += n),
    i
}
function smoothScrollToElement(e, t, n, i, a, o, s) {
    void 0 === o && (o = mConst("timeSmoothScroll")),
    void 0 === s && (s = mConst("minMarginSmoothScroll")),
    void 0 === i && (i = 0);
    var r = distanceBelow(e, t, s);
    setTimeout(function() {
        0 < r ? t.animate({
            scrollTop: r
        }, {
            duration: o,
            complete: function() {
                smoothScrollHelper(e, n, a)
            }
        }) : smoothScrollHelper(e, n, a)
    }, i)
}
function smoothScrollHelper(e, t, n) {
    t && e.addClass("pulse"),
    n && n()
}
function removePulseClass(e) {
    "pulse" !== e.originalEvent.animationName && "pulselight" !== e.originalEvent.animationName || $(e.target).removeClass("pulse")
}
function scrollToBottom(e) {
    var t = e[0];
    t.scrollTop = t.scrollHeight
}
function toggleClassTwice(e, t) {
    e.toggleClass(t),
    setTimeout(function() {
        e.toggleClass(t)
    }, mConst("timeToggleClassTwice"))
}
function isChrome() {
    return "chrome" === m.globals.platform
}
function isChromeExtension() {
    return !!isChrome() && !!chrome.extension
}
function getBrowserName() {
    return isChrome() ? "Chrome" : "Firefox"
}
function getBrowserVersion() {
    return parseInt(navigator.userAgent.match(new RegExp("rv:([0-9]+)"))[1])
}
function getBrowser() {
    return isChrome() ? chrome : browser
}
function getFavIcon(e) {
    var t = document.createElement("a");
    t.href = e;
    var n = t.hostname;
    if (!n.startsWith("www.")) {
        var i = n.split(".");
        (i.length < 3 || 3 == i.length && i[1].length < 4) && (n = "www." + n)
    }
    return "https://icons.duckduckgo.com/ip2/" + n + ".ico"
}
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16)
    })
}
function isTabOrEnter(e) {
    var t = e.originalEvent;
    return t.code ? "Enter" === t.code || "Tab" === t.code : 13 === e.keyCode || 9 === e.keyCode
}
function newTabforFileLink(e) {
    getBrowser().tabs.create({
        url: e
    })
}
function isUrlLocalFileLink(e) {
    return /^(file:\\|file:\/\/)+/i.test(e)
}
function addSvgClassList(e, t, n) {
    return e + ("string" == typeof n ? " " + n : "") + t
}
function submitStats(e) {}
function setMomentumAuthHeader(e) {
    if (localStorage.token && e.setRequestHeader("Authorization", "Bearer " + localStorage.token),
    localStorage.client_uuid && e.setRequestHeader("X-Momentum-ClientId", localStorage.client_uuid),
    e.setRequestHeader("X-Momentum-Version", m.globals.version),
    e.setRequestHeader("X-Momentum-ClientDate", getActiveLocalDateTimeString()),
    m.conditionalFeatures.featureEnabled("allowoptions")) {
        var t = localStorage.getItem("X-Momentum-Options");
        t && e.setRequestHeader("X-Momentum-Options", t)
    }
    localStorage.activeTags && e.setRequestHeader("X-Momentum-Tags", localStorage.activeTags)
}
function flashInputLengthError(e) {
    toggleClassTwice(e, mConst("classInputLengthError"))
}
function checkForInputMaxLengthError(e) {
    e.is("input") && e.val().length >= e.attr("maxlength") && flashInputLengthError(e)
}
function updateCharCount(e, t, n, i) {
    var a = $(e.currentTarget.form);
    i = i || a.find("input");
    var o = a.find(".char-count")
      , s = i.val().length
      , r = t.inputLengthMaxDatabase - s;
    o.text(r).removeClass("warn over"),
    o.mToggle("inline", s >= t.inputLengthShow),
    i.removeClass("over"),
    s > t.inputLengthMaxDatabase ? (o.addClass("over"),
    i.addClass("over")) : s >= t.inputLengthWarn && o.addClass("warn"),
    n && n(a, s, r)
}
function moveCursorToEndOfInput(e) {
    var t = e[0];
    t.selectionStart = t.selectionEnd = t.value.length
}
function scrollToEndOfInput(e, t) {
    void 0 === t && (t = 0);
    var n = e[0];
    n.scrollWidth > n.clientWidth && (0 !== e.scrollLeft() && e.scrollLeft(0),
    e.animate({
        scrollLeft: n.scrollWidth - n.clientWidth
    }, t))
}
function toggleAdvanced(e) {
    var t = e.$(".button-advanced")
      , n = e.$(".wrapper-advanced");
    t.toggleClass("active"),
    n.is(":visible") ? (n.slideUp(300),
    setTimeout(function() {
        n.css("opacity", 0)
    }, 100)) : (n.css("opacity", 0).slideDown(300),
    setTimeout(function() {
        n.css("opacity", 1)
    }, 100))
}
function sendEventToggleFeed(e, t, n) {
    m.sendEvent(e, t, "turned " + (n ? "on" : "off"))
}
function getInitialFeedSettings(e) {
    var t = !0
      , n = !1;
    return "false" === localStorage.getItem(e.feedMomentumName) && (t = !1),
    "true" === localStorage.getItem(e.feedCustomName) && (n = !0),
    {
        feedMomentumClass: t ? "on" : "",
        feedCustomClass: n ? "on" : ""
    }
}
function setFeedVars(e) {
    e.$feedMomentumSlider = e.$("#feed-momentum-slider"),
    e.$feedCustomSlider = e.$("#feed-custom-slider")
}
function updateFeedSettings(e) {
    var t = e.settings.get(e.manager.feedMomentumName)
      , n = e.settings.get(e.manager.feedCustomName);
    e.$("#feed-momentum-slider").toggleClass("on", t),
    e.$("#feed-custom-slider").toggleClass("on", n),
    localStorage.setItem(e.manager.feedMomentumName, t),
    localStorage.setItem(e.manager.feedCustomName, n)
}
function subnavAddAll(t, n, e, i, a) {
    _.each(t.subViews, function(e) {
        e.destroy()
    }),
    t.subViews = [],
    t.collection.each(function(e) {
        t.addOne(e, n)
    }),
    t.$empty.removeClass("loading"),
    t.handleCollectionUpdate(),
    void 0 !== i && i(t),
    e.removeClass("hidden"),
    void 0 !== a && a()
}
function subnavAddOne(e, t, n, i, a) {
    var o = t.render().$el;
    e.subViews.push(t),
    i ? n.prepend(o) : n.append(o),
    a && o.addClass("animate-item"),
    setTimeout(function() {
        o.removeClass("animate-item")
    }, 300)
}
function renderSubnav(e, t, n) {
    e.$(".list-body").hide(),
    t.render(),
    e.$(".subnav-titles").find("h4").removeClass("active").siblings("." + n).addClass("active"),
    t.$el.css("display", "block"),
    e.subnav = n
}
function updateEmptyState(e) {
    e.$empty.mToggle("block", 0 === e.collection.length)
}
function subnavHistoryLoadMore(e, t, n) {
    e.stopPropagation(),
    n.LoadMoreHistory(),
    subnavHistoryUpdateLoadMore(t)
}
function subnavHistoryUpdateLoadMore(e) {
    void 0 === e && (e = this),
    e.$(".load-more").mToggle("inline-block", !!e.collection.load_more)
}
function handleCollectionUpdateCustom(e, t, n) {
    e.deletingFinalItem ? setTimeout(function() {
        e.deletingFinalItem = !1,
        e.cancelAdd(),
        displayEmptyStateAndAddForm(e, t, n)
    }, mConst("timeContentItemAnimation")) : displayEmptyStateAndAddForm(e, t, n)
}
function displayEmptyStateAndAddForm(e, t, n) {
    t.mToggle("block", n),
    updateAddFormBorder(e.$addForm, n)
}
function updateAddFormBorder(e, t) {
    e.toggleClass("no-top-border", t)
}
function cancelAddGeneral(e, t) {
    t && t.preventDefault(),
    e.$addForm.is(":visible") && (e.resetAdd(!0),
    e.toggleAddForm())
}
function changeToEditMode(e, t) {
    triggerItemEditing(e),
    e.$el.addClass("editing"),
    t.trigger("focus"),
    moveCursorToEndOfInput(t),
    scrollToEndOfInput(t, mConst("timeSmoothScroll"))
}
function handleKeypressEnter(e, t, n) {
    13 === e.keyCode ? (e.preventDefault(),
    e.shiftKey || e.ctrlKey || e.metaKey || e.altKey || t()) : void 0 !== n && checkForInputMaxLengthError(n)
}
function handleKeyupEsc(e, t) {
    27 === e.keyCode && (e.stopPropagation(),
    t())
}
function triggerItemEditing(e) {
    e.main.itemEditingId = e.model.id,
    e.manager.trigger("item-editing")
}
function preventMultipleEdits(e) {
    void 0 === e && (e = this),
    e.model.id !== e.main.itemEditingId && returnToViewMode(e)
}
function getOutOfEditMode(e) {
    e.$el.removeClass("editing"),
    e.updateTooltip && e.updateTooltip()
}
function returnToViewMode(e) {
    void 0 === e && (e = this),
    e.$el.hasClass("editing") && e.processEditForm(),
    e.$(".delete-group").is(":visible") && e.toggleDeleteConf()
}
function onDestroyModel() {
    if (1 === this.main.collection.length)
        this.main.deletingFinalItem = !0,
        _.bind(this.destroy, this)();
    else {
        this.$el.addClass("animate-item reverse");
        var e = this;
        setTimeout(function() {
            _.bind(e.destroy, e)(),
            e.main.syncHelper && e.main.syncHelper()
        }, 300)
    }
}
function toggleDeleteConf(e) {
    var t = e.$(".controls")
      , n = e.$(".controls > .control")
      , i = e.$(".delete-group");
    i.css("display", i.is(":visible") ? "none" : "flex"),
    i.is(":visible") && triggerItemEditing(e),
    t.toggleClass("delete-clicked"),
    n.mToggle("inline-flex")
}
function processEditFormBasic(e, t) {
    var n = t ? "set" : "save"
      , i = e.$input.val().trim();
    betweenInclusive(i.length, 1, e.main.inputLengthMaxDatabase) ? (e.model[n]({
        body: i
    }, {
        wait: !0,
        patch: !0,
        success: function() {
            getOutOfEditMode(e),
            e.manager.handleItemEdit(e.model)
        },
        error: function() {
            console.error("edit content item error for view:", e)
        }
    }),
    m.sendEvent(e.main.gaTitle, "Edit")) : flashInputLengthError(e.$input)
}
function abortEditBasic(e) {
    e.$input.val(e.model.get("body")),
    getOutOfEditMode(e)
}
function deleteItemBasic(e) {
    e.model.destroy({
        wait: !0,
        success: function() {
            e.manager.handleItemDelete(e.model, mConst("timeContentItemAnimation"))
        },
        error: function() {
            console.error("delete content item error for view:", e)
        }
    }),
    m.sendEvent(e.main.gaTitle, "Delete")
}
function buildAccountLinkUrlFromParameter(e) {
    if (!e)
        return null;
    var t = null;
    return "string" == typeof e ? t = e : "object" == typeof e && null !== e && e.path && (t = e.path),
    t ? (t.startsWith("/") && (t = t.substring(1)),
    m.globals.urlRootAccount + t) : null
}
m.utils.parseJwt = function(e) {
    try {
        var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")
          , n = decodeURIComponent(atob(t).split("").map(function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }).join(""));
        return n += "jfkfjdkfsjd}}}}{{{@",
        JSON.parse(n)
    } catch (e) {
        return null
    }
}
,
m.globals.version = "1.13.8",
m.globals.platform = "chrome",
m.globals.isProduction = !0,
m.globals.gaCode = "UA-44319322-10",
m.globals.gaCodePlus = "UA-44319322-13",
m.globals.urlRoot = "https://api.momentumdash.com/",
m.globals.urlRootApi = "https://api.momentumdash.com/",
m.globals.urlRootLogin = "https://login.momentumdash.com/",
m.globals.urlRootAccount = "https://account.momentumdash.com/",
m.globals.urlRootStats = "https://stats.momentumdash.com/",
m.globals.urlRootIntegration = "https://integration.momentumdash.com/",
Handlebars.registerHelper("lower", function(e) {
    return e.toLowerCase()
}),
Handlebars.registerHelper("kebab", function(e) {
    return e.toLowerCase().trim().split(/[ -_]/).join("-")
}),
Handlebars.registerHelper("skipIconPath", function() {
    return '<path d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"/><path class="arrow" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)"/>'
}),
Handlebars.registerHelper("iconEllipsis", function(e) {
    return addSvgClassList('<svg class="icon icon-ellipsis', '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"/></svg>', e)
}),
Handlebars.registerHelper("iconCancel", function(e) {
    return addSvgClassList('<svg class="icon icon-cancel', '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg>', e)
}),
Handlebars.registerHelper("ifnoteq", function(e, t, n) {
    return e != t ? n.fn(this) : n.inverse(this)
}),
m.sendEvent = function(e, t, n, i) {
    m.devTools && m.devTools.getFeatureDebug("googleAnalytics") && console.log("GA:", e, "•", t, "•", n, "•", i);
    var a = m.conditionalFeatures && m.conditionalFeatures.featureEnabled("plus");
    if ("pageview" != (i = i || "event") && m.usage.save({
        properties: {
            component: e,
            operation: t,
            detail: n,
            eventType: i
        }
    }, !0),
    "Firefox" == m.globals.platform || !navigator.onLine)
        return null;
    var o = 100;
    if (isChrome() && !a && (o = 1),
    100 * Math.random() > o)
        return null;
    var s = a ? m.globals.gaCodePlus : m.globals.gaCode;
    try {
        var r = sessionStorage ? sessionStorage.getItem("ga_sess") : uuidv4();
        r || (r = uuidv4(),
        sessionStorage.setItem("ga_sess", r));
        var l = window.navigator.userLanguage || window.navigator.language
          , d = window.screen.availWidth + "x" + window.screen.availHeight
          , c = window.screen.colorDepth
          , u = window.innerWidth + "x" + window.innerHeight
          , g = new XMLHttpRequest
          , h = "v=1&tid=" + s + "&cid=" + r + "&t=" + i + "&sf=" + o + "&ul=" + l + "&sr=" + d + "&vp=" + u + "&de=" + document.characterSet + "&sd=" + c + "&aip=1";
        e && (h += "pageview" == i ? "&dp=" + e : "&ec=" + e),
        t && (h += "&ea=" + t),
        n && (h += "&el=" + n),
        g.open("POST", "https://www.google-analytics.com/collect", !0),
        g.send(h)
    } catch (e) {}
}
,
m.models.Manager = Backbone.Model.extend({}),
m.collect.Manager = Backbone.Collection.extend({}),
m.models.Addin = Backbone.Model.extend({
    defaults: {
        evaluated: !1,
        processed: !1,
        processing: !1,
        lazy: !1
    }
}),
m.collect.AddinCollection = Backbone.Collection.extend({
    model: m.models.Addin
}),
m.models.AddinManagerBase = Backbone.Model.extend({
    initialize: function() {
        var e = this;
        this.preInitialize && this.preInitialize(),
        this.addinCollection = new m.collect.AddinCollection,
        this.loadDependencyMap(),
        this.listenTo(this.addinCollection, "add change", this.processPending),
        setTimeout(function() {
            e.loadFromAddinObject(!0)
        }, 50)
    },
    loadEvaluatedAddin: function(e, t) {
        this.addinCollection.add({
            id: e,
            evaluated: !0,
            addInCode: t
        })
    },
    loadAddin: function(e) {
        this.addinCollection.add({
            rawCode: e
        })
    },
    loadFromAddinObject: function(e) {
        var n = this
          , i = !1;
        _.each(m.addins, function(e, t) {
            i = !0,
            n.addinCollection.findWhere({
                id: t
            }) || n.loadEvaluatedAddin(t, e)
        }),
        i && e && this.processPending()
    },
    registerAddinLocalSource: function(e, t) {
        this.addinCollection.findWhere({
            id: e
        }) || this.addinCollection.add({
            id: e,
            path: t
        })
    },
    registerAddinFn: function(e, t) {
        var n = this.addinCollection.findWhere({
            id: e
        });
        n ? n.set({
            evaluated: !0,
            addInCode: t
        }) : this.addinCollection.add({
            id: e,
            evaluated: !0,
            addInCode: t
        }),
        this.trigger("addin:loaded:" + e)
    },
    loadDependencyMap: function() {
        if (!this.localAddins && !this.localLoadFailed) {
            var e = []
              , t = {}
              , n = {}
              , i = {};
            this.dependencies = i;
            for (var a = 0; a < this.configInfo.length; a++) {
                var o = this.configInfo[a]
                  , s = o.addin.toLowerCase();
                s || console.log("addin not found: " + s),
                e.push(s),
                t[s] = o.id,
                n[o.id] = s,
                o.dependencies && 0 < o.dependencies.length && (i[s] = o.dependencies)
            }
            this.localAddins = {
                addins: e,
                map: t,
                mapNameToId: n
            }
        }
    },
    ensureAddinNameLoaded: function(e, t, n, i) {
        if (this.localAddins) {
            var a = e.toLowerCase()
              , o = this.localAddins.mapNameToId[a];
            o ? this.ensureAddinLoaded(o, t, n, i) : console.log("can't find id for addin name" + a)
        } else
            console.log("localAddins info not populated in ensureAddinNameLoaded")
    },
    ensureAddinLoaded: function(e, t, n, i) {
        var a = this;
        e = e.toLowerCase();
        var o = this.addinCollection.get(e);
        if (!o || !o.get("loaded") && !o.get("loading")) {
            var s = null;
            if (this.localAddins) {
                var r = e.toLowerCase()
                  , l = this.localAddins.map[r];
                l && (s = "app/" + (m.globals.isProduction ? r : l) + ".js")
            }
            if (o && o.get("loaded"))
                t && t(o);
            else {
                if (n)
                    try {
                        n()
                    } catch (e) {}
                var d = null;
                if (!o && this.dependencies[e]) {
                    var c = this.dependencies[e];
                    d = [];
                    for (var u = 0; u < c.length; u++) {
                        var g = c[u];
                        (p = this.localAddins.mapNameToId[g]) && d.push(p)
                    }
                }
                if ((o = o || this.addinCollection.add({
                    id: e,
                    evaluated: !1,
                    processed: !1,
                    lazy: !1,
                    dependencyIds: d
                })).get("loading"))
                    t && this.listenToOnce(this, "addin:loaded:" + e, function() {
                        t()
                    });
                else {
                    var h = o.get("dependencyIds");
                    if (h && 0 < h.length)
                        for (u = 0; u < h.length; u++) {
                            var p = h[u]
                              , f = this.addinCollection.get(p);
                            if (f && !f.get("loaded") && !f.get("loading"))
                                return this.listenToOnce(this, "addin:loaded:" + p, function() {
                                    a.ensureAddinLoaded(e, t, n, i)
                                }),
                                void a.ensureAddinLoaded(p, function() {
                                    a.ensureAddinLoaded(e, t, n, i)
                                }, n, i)
                        }
                    o.set({
                        loading: !0
                    }),
                    m.console.log(m.elapsed() + ": script added " + s),
                    t && this.listenToOnce(this, "addin:loaded:" + e, function() {
                        t()
                    }),
                    this.addScriptToDom(e, s)
                }
            }
        }
    },
    addScriptToDom: function(e, t, n) {
        if (!document.getElementById(e)) {
            var i = document.createElement("script");
            i.type = "text/javascript",
            i.async = !0,
            i.src = t,
            i.id = e,
            n && (i.onerror = n),
            document.body.appendChild(i)
        }
    },
    getWidgets: function() {
        return _.filter(this.configInfo, function(e) {
            return !!e.widget
        })
    },
    getCommands: function() {
        var n = [];
        return _.map(this.configInfo, function(e) {
            if (e.commands && 0 < e.commands.length)
                for (var t = 0; t < e.commands.length; t++)
                    n.push({
                        id: e.commands[t],
                        addin: e.addin
                    })
        }),
        n
    },
    getAddinCommands: function(e) {
        return e && this.addinCollection.get(e).instance.commands || {}
    },
    refresh: function() {
        this.loadFromAddinObject(!0)
    },
    processPending: function() {
        var r = this;
        this.evaluatePending(),
        _.each(this.addinCollection.where({
            evaluated: !0,
            processed: !1,
            processing: !1,
            lazy: !1
        }), function(e) {
            try {
                if (e.get("processing") || e.get("processed"))
                    return;
                var t = e.get("addInCode");
                if (t) {
                    var n = {}
                      , i = e.get("dependencyIds");
                    if (i && 0 < i.length)
                        for (var a = 0; a < i.length; a++) {
                            var o = i[a]
                              , s = r.addinCollection.get(o);
                            if (!s || !s.get("loaded"))
                                return void r.ensureAddinLoaded(o);
                            n[r.localAddins.map[o]] = s.instance
                        }
                    e.set({
                        processing: !0
                    }),
                    e.instance = t(m, $, n),
                    e.set({
                        evaluated: !0,
                        loading: !1,
                        loaded: !0,
                        processing: !0
                    }),
                    r.trigger("addin:loaded:" + e.id),
                    r.trigger("addin:loaded", e.id)
                }
            } catch (e) {
                console.log(e)
            }
        })
    },
    evaluatePending: function() {}
}),
m.models.AddinManager = m.models.AddinManagerBase.extend({
    preInitialize: function() {
        this.localStorageKey = "addins-" + m.globals.version,
        this.addinOverrides = localStorage.getObject(this.localStorageKey),
        this.listenTo(m, "sync:settings", this.onSettingsSync)
    },
    onSettingsSync: function(e) {
        e && e.addins && (this.addinOverrides = e.addins,
        localStorage.setObject(this.localStorageKey, e.addins))
    },
    addScriptToDom: function(e, t) {
        var n = this
          , i = this.getAddinInfo(e, t);
        m.models.AddinManagerBase.prototype.addScriptToDom.call(this, i.id, i.url, function() {
            m.models.AddinManagerBase.prototype.addScriptToDom.call(n, e, t)
        })
    },
    getAddinInfo: function(e, t) {
        var n = {
            id: e,
            url: t
        };
        if (this.addinOverrides) {
            var i = this.addinOverrides[e];
            i && (n.id = i.id,
            n.url = m.globals.urlRootApi + "scripts/" + i.id)
        }
        return n
    }
}),
m.models.AddinManager = m.models.AddinManager.extend({
    configInfo: [{
        id: "base_metric",
        addin: "ce945086-a64d-4b67-b730-9eb7d7b72030"
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "bookmarks",
        region: "top-bar",
        order: "prepend",
        addin: "1369894c-efef-4d5f-9bd6-3e136e09c5e8",
        commands: ["settings.enableBookmarks"],
        visibleSetting: "bookmarksVisible"
    }, {
        widget: !0,
        stub: !0,
        autoLoad: !0,
        id: "company_link",
        label: "Company Link",
        region: "top-center",
        requiredFeature: "company_link",
        addin: "dce1a4fc-4d92-41d5-8aaf-329e5f267b70"
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "countdown",
        class: "app-container base-metric metric countdown",
        region: "top-right",
        order: "append",
        addin: "fb230b62-96ce-44b5-87c5-4a563553038b",
        requiredFeature: "countdown",
        visibleSetting: "countdownVisible",
        dependencies: ["base_metric"]
    }, {
        widget: !0,
        placeholderType: "none",
        id: "countdown_detail",
        addin: "5c0e5be2-0c14-4e99-85e4-cdc58f0cdd58",
        dependencies: ["countdown"]
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "dashlinks",
        class: "app-container dashlinks",
        region: "top-left",
        order: "prepend",
        after: ".team-logo",
        addin: "7d9ace94-8620-4bc0-9160-fcc15d4cb578"
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "focuses",
        elementId: "focuses",
        region: "center-below",
        order: "append",
        class: "app-container focuses",
        addin: "2f0cff85-d25a-4326-b7cf-5239a3029956",
        visibleSetting: "focusVisible"
    }, {
        widget: !0,
        autoLoad: !0,
        id: "focus_css_override",
        addin: "a98d637b-0035-46f3-96ac-c1bd00c950b1",
        requiredFeature: "noPersonalFocus"
    }, {
        addin: "5965ea88-516a-41cb-a6dc-251a461d9075",
        widget: !0,
        placeholderType: "none",
        immediateLoad: !0,
        id: "introduction"
    }, {
        widget: !0,
        id: "quicklinks",
        class: "links",
        dependencies: ["links_common"],
        label: "Links",
        appClass: "links-app",
        region: "top-left",
        order: "prepend",
        width: 260,
        openState: "LinksOpen",
        keepOpenSetting: "linksKeepOpen",
        placeholderType: "pane",
        addin: "ad54d482-248b-4abf-b5b0-a8eaf3e89132",
        requiredFeature: ["!teamLinks"],
        storedHeight: "links-height",
        toggleEvent: "globalEvent:key:L",
        closeOnEsc: "true",
        visibleSetting: "linksVisible"
    }, {
        id: "links_common",
        class: "links",
        appClass: "links-app",
        region: "top-left",
        order: "prepend",
        width: 220,
        addin: "417829ca-7ff0-4089-b265-f775180c843e",
        toggleEvent: "globalEvent:key:L",
        closeOnEsc: "true",
        visibleSetting: "linksVisible"
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "metrics",
        class: "app-container base-metric metric metrics",
        region: "top-right",
        order: "append",
        addin: "2314da1c-0579-4b4b-8dd6-5f89f27e806a",
        requiredFeature: "plus",
        visibleSetting: "metricVisible",
        dependencies: ["base_metric", "settings"]
    }, {
        widget: !0,
        placeholderType: "none",
        id: "metric_new_detail",
        addin: "44bf660b-a47e-4433-87eb-3e31ca7d94c6",
        dependencies: ["metrics"]
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "multiclock",
        class: "app-container base-metric metric multiclock",
        region: "top-right",
        order: "append",
        addin: "4466a63e-7913-445c-b266-1ce6f8e378f3",
        requiredFeature: "countdown",
        visibleSetting: "multiClockVisible",
        dependencies: ["base_metric"]
    }, {
        widget: !0,
        placeholderType: "none",
        id: "multi_clock_detail",
        addin: "a06e4f59-baf4-4fc6-bf71-5b1cd524fe53",
        dependencies: ["multiclock"]
    }, {
        widget: !0,
        id: "notes",
        "data-test": "notes",
        label: "Notes",
        placeholderType: "pane",
        region: "bottom-right",
        order: "prepend",
        storedHeight: "notes-pane-height",
        width: 750,
        height: 520,
        addin: "23c67761-9831-415e-b358-c6844eb6c244",
        requiredFeature: ["notes", "notes-degraded"],
        toggleEvent: "globalEvent:key:N",
        hideEvents: ["globalEvent:toggle:bottom-left", "globalEvent:toggle:bottom-right", "globalEvent:toggle:top-right"],
        visibleSetting: "notesVisible"
    }, {
        widget: !0,
        id: "search",
        class: "app-container search",
        region: "top-left",
        order: "append",
        placeholderType: "metric",
        addin: "162b82d0-f285-427c-8209-924f44ef4d21",
        visibleSetting: "searchVisible"
    }, {
        widget: !0,
        placeholderType: "none",
        id: "settings",
        dependencies: ["settings_common"],
        addin: "1d872cf4-953a-4743-8f5e-6785bba4bd19",
        commands: ["settings.initialize", "settings.display"],
        elementId: "settings",
        class: "app-container settings",
        label: "Settings",
        appClass: "settings-app",
        region: "bottom-left",
        order: "prepend",
        width: 500,
        height: 400,
        toggleEvent: "globalEvent:key:L",
        closeOnEsc: "true"
    }, {
        addin: "D52F5584-5033-4A16-866F-E97C7D7AC826",
        id: "settings_backgrounds",
        dependencies: ["settings"],
        commands: ["background.custom.uploadfiles", "settings.panels.backgrounds"]
    }, {
        addin: "1e373fa7-a454-4652-8d77-1a4fcc88c069",
        id: "settings_balance",
        dependencies: ["settings"],
        commands: ["settings.panels.balance"]
    }, {
        addin: "e464eb61-05ca-4a56-9c17-6a02673aa136",
        id: "settings_bookmarks",
        dependencies: ["settings", "bookmarks"],
        commands: ["settings.panels.bookmarks"]
    }, {
        addin: "9e4cdd4d-8e0d-4b36-a159-fab66de84970",
        id: "settings_common"
    }, {
        addin: "9b62165c-8b05-4f9b-82b3-b093f4e77dc9",
        dependencies: ["settings", "bookmarks"],
        commands: ["settings.panels.general"],
        id: "settings_general"
    }, {
        addin: "dd91d97e-fc83-4fca-b5cb-d89eb2e1dd0f",
        id: "settings_mantras",
        dependencies: ["settings"],
        commands: ["settings.panels.mantras"]
    }, {
        addin: "dd106f35-669c-4079-a9e3-82ddc5244d0b",
        id: "settings_quotes",
        dependencies: ["settings"],
        commands: ["settings.panels.quotes"]
    }, {
        addin: "270aaed6-337f-433f-9d02-a471b435eada",
        id: "settings_todo",
        dependencies: ["settings"],
        commands: ["settings.panels.todo"]
    }, {
        addin: "c61b7775-7ab8-443a-a6b7-c8c8de6fc755",
        dependencies: ["settings"],
        id: "settings_trello",
        commands: ["settings.panels.trello.config"]
    }, {
        widget: !0,
        placeholderType: "none",
        id: "teamFocus",
        addin: "6a448447-dcf8-418e-a7f9-5f9dd1011efd",
        visibleSetting: "focusVisible"
    }, {
        widget: !0,
        id: "team_links",
        dependencies: ["links_common"],
        class: "app-container links",
        appClass: "links-app",
        region: "top-left",
        order: "prepend",
        after: ".team-logo",
        placeholderType: "metric",
        addin: "a100de17-4975-4dfa-87b2-1576366a3d31",
        requiredFeature: "teamLinks",
        toggleEvent: "globalEvent:key:L",
        closeOnEsc: "true",
        visibleSetting: "linksVisible"
    }, {
        widget: !0,
        placeholderType: "pane",
        label: "Todo",
        id: "todo",
        "data-test": "todo",
        width: "320",
        region: "bottom-right",
        order: "append",
        addin: "6be10923-c6a7-4e5f-b85a-85e6159c3018",
        visibleSetting: "todoVisible",
        openState: "showTodoList",
        keepOpenSetting: "keepTodoState",
        toggleEvent: "globalEvent:key:T",
        appClass: "todo-app",
        storedHeight: "todo-pane-height",
        class: "todo",
        commands: ["settings.panels.todo"]
    }, {
        widget: !0,
        placeholderType: "metric",
        id: "weather",
        class: "app-container weather",
        region: "top-right",
        order: "prepend",
        addin: "d5f1661a-8698-4992-b191-d0833b124f6a",
        toggleEvent: "globalEvent:key:W",
        visibleSetting: "weatherVisible"
    }, {
        widget: !0,
        placeholderType: "dashIcon",
        id: "app_launcher",
        label: "Apps",
        requiredFeature: "app_launcher",
        addin: "40203927-6651-4c0f-bc82-b25a8fe83505",
        region: "top-left",
        order: "append",
        openState: "showApps",
        toggleEvent: "globalEvent:key:A",
        keepOpenSetting: "keepAppsState",
        emptyFlag: "appsEmpty",
        dependencies: ["vue"],
        "flex-order": 2,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="nonzero"><path d="M3.825 3.191a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5A3.126 3.126 0 0 1 .7 11.316v-7.5C.7 2.091 2.1.691 3.825.691z"/><path d="M1.95 6.941a1.25 1.25 0 1 1 0-2.5H13.2a1.25 1.25 0 0 1 0 2.5H1.95zM20.7 3.191a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5a3.126 3.126 0 0 1-3.125-3.125v-7.5c0-1.725 1.4-3.125 3.125-3.125z"/><path d="M18.825 6.941a1.25 1.25 0 0 1 0-2.5h11.25a1.25 1.25 0 0 1 0 2.5h-11.25zM3.825 20.066a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5A3.126 3.126 0 0 1 .7 28.191v-7.5c0-1.725 1.4-3.125 3.125-3.125z"/><path d="M1.95 23.816a1.25 1.25 0 0 1 0-2.5H13.2a1.25 1.25 0 0 1 0 2.5H1.95zM20.7 20.066a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5a3.126 3.126 0 0 1-3.125-3.125v-7.5c0-1.725 1.4-3.125 3.125-3.125z"/><path d="M18.825 23.816a1.25 1.25 0 0 1 0-2.5h11.25a1.25 1.25 0 0 1 0 2.5h-11.25z"/></g></svg>'
    }, {
        widget: !0,
        placeholderType: "dashIcon",
        id: "topics",
        label: "Topics",
        requiredFeature: "topics",
        addin: "d13fc525-0d8d-4516-910b-063dc88cebd3",
        region: "top-left",
        order: "append",
        openState: "showTopics",
        toggleEvent: "globalEvent:key:P",
        keepOpenSetting: "keepTopicsState",
        emptyFlag: "topicsEmpty",
        "flex-order": 3,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g transform="translate(-1)" fill-rule="nonzero"><path d="M3.578 2.586a.299.299 0 0 0-.078.224v20.903a.28.28 0 0 0 .077.2.273.273 0 0 0 .173.087h2.976a.28.28 0 0 0 .197-.086c.052-.054.08-.127.077-.234V2.785a.28.28 0 0 0-.078-.2.273.273 0 0 0-.172-.085H3.767a.28.28 0 0 0-.19.086zM3.726 0h3.048A2.78 2.78 0 0 1 9.5 2.81v20.837A2.78 2.78 0 0 1 6.75 26.5H3.726a2.78 2.78 0 0 1-1.957-.86A2.76 2.76 0 0 1 1 23.68V2.835A2.78 2.78 0 0 1 3.726 0zM13.578 9.59c-.053.057-.081.132-.078.25v13.861a.29.29 0 0 0 .078.209.285.285 0 0 0 .172.09h2.968a.29.29 0 0 0 .204-.09c.053-.057.081-.132.078-.25V9.799a.29.29 0 0 0-.078-.209.285.285 0 0 0-.172-.09h-2.978a.29.29 0 0 0-.194.09zm.14-2.59h3.064a2.79 2.79 0 0 1 1.958.875c.51.54.784 1.263.76 1.965v13.779a2.79 2.79 0 0 1-.76 2.006c-.51.54-1.215.856-1.99.875h-3.032a2.79 2.79 0 0 1-1.958-.875A2.764 2.764 0 0 1 11 23.66V9.881a2.79 2.79 0 0 1 2.718-2.88zM31.473 22.6a2.84 2.84 0 0 1-.403 2.15 2.865 2.865 0 0 1-1.86 1.234l-2.976.482a2.76 2.76 0 0 1-2.07-.528 2.737 2.737 0 0 1-1.068-1.811L20.02 4.851a2.834 2.834 0 0 1 2.258-3.281l2.978-.536a2.75 2.75 0 0 1 3.131 2.357l3.086 19.208zM25.916 3.767c-.015-.112-.05-.173-.103-.213a.253.253 0 0 0-.151-.055l-2.92.526c-.177.035-.294.205-.258.407L25.57 23.77a.26.26 0 0 0 .1.174c.056.042.127.06.18.052l2.912-.471a.34.34 0 0 0 .217-.147c.05-.076.067-.169.037-.32l-3.1-19.29z"/><rect x="1.05" y="28.75" width="30.5" height="2.5" rx="1.25"/></g></svg>',
        dependencies: ["vue"]
    }, {
        widget: !1,
        placeholderType: "none",
        id: "vue",
        label: "Vue",
        addin: "5c293847-d390-44ff-9853-123abc17b80a"
    }]
}),
m.models.Command = Backbone.Model.extend({
    defaults: {
        id: null
    },
    getId: function() {
        return this.id
    },
    execute: function() {},
    canExecute: function() {
        return !0
    }
}),
m.CommandManager = m.collect.Manager.extend({
    model: m.models.Command,
    initialize: function() {
        var n = this;
        this.commandSources = new Backbone.Collection,
        m.commands && _.mapObject(m.commands, function(e) {
            n.registerCommandModel(e, !1)
        });
        for (var e = m.addinManager.getCommands(), t = 0; t < e.length; t++)
            this.registerCommandSource(e[t]);
        this.listenTo(m.addinManager, "addin:loaded", function(e) {
            var t = m.addinManager.getAddinCommands(e);
            t && _.mapObject(t, function(e) {
                n.registerCommandModel(e, !1)
            })
        })
    },
    registerCommandModel: function(e, t) {
        var n = new e;
        if (n && n.id) {
            if (t || !this.get(n.id)) {
                var i = this.get(n.id);
                i && this.remove(i),
                this.add(n)
            }
            this.trigger("command:loaded:" + n.id)
        }
    },
    registerCommandSources: function(e) {
        e && 0 < e.length && _.each(e, this.registerCommandSource, this)
    },
    registerCommandSource: function(e) {
        if (!e.id)
            throw new Error("An id property is required in cmdSrc");
        if (!e.addin)
            throw new Error("An addin property is required in cmdSrc");
        this.commandSources.findWhere({
            id: e.id
        }) || this.commandSources.add({
            id: e.id,
            addin: e.addin
        })
    },
    registerCommand: function(e, t, n, i) {
        var a = {
            defaults: {
                id: e
            },
            execute: t
        };
        n && (a.canExecute = n);
        var o = m.models.Command.extend(a);
        this.registerCommandModel(o, i)
    },
    getCommand: function(e) {
        return e ? this.get(e) : null
    },
    ensureCommandLoaded: function(t, n, i, a) {
        var o = this
          , s = this.get(t);
        if (s)
            n && n(s);
        else {
            if (i)
                try {
                    i()
                } catch (e) {}
            var r = this.commandSources.get(t);
            if (r) {
                var e = r.get("addin");
                r.get("loading") || (r.set("loading", !0),
                this.listenToOnce(this, "command:loaded:" + t, function() {
                    r.set("loading", !1),
                    r.set("loaded", !0),
                    n && n()
                }),
                m.addinManager.ensureAddinLoaded(e, function() {}, i, function(e) {
                    r.set("loading", !1),
                    a && a(e)
                }))
            } else
                url = m.globals.urlRootApi + "commands/" + encodeURIComponent(t),
                $.ajax({
                    url: url,
                    beforeSend: m.utils.setMomentumAuthHeader,
                    success: function(e) {
                        e && (o.registerCommandSource(e),
                        (r = o.commandSources.get(t)) ? r.get("loading") || (r.set("loading", !0),
                        m.addinManager.ensureAddinLoaded(r.get("addin"), function() {
                            r.set("loading", !1),
                            r.set("loaded", !0),
                            n && n(s)
                        }, i, function(e) {
                            r.set("loading", !1),
                            a && a(e)
                        })) : a && a("no command with that id is registered"))
                    },
                    error: function(e) {
                        a && a("no command with that id is registered")
                    }
                })
        }
    },
    execute: function(e) {
        var t = this.getCommand(e);
        if (t)
            return t.execute.apply(t, [].slice.call(arguments, 1))
    },
    executeAsync: function(i) {
        var a = this
          , o = [].slice.call(arguments, 1);
        return new Promise(function(t, n) {
            a.ensureCommandLoaded(i, function() {
                var e = a.getCommand(i);
                e ? t(e.execute.apply(e, o)) : n()
            })
        }
        )
    },
    getCommandAsync: function(i) {
        var a = this;
        [].slice.call(arguments, 1);
        return new Promise(function(t, n) {
            a.ensureCommandLoaded(i, function() {
                var e = a.getCommand(i);
                e ? t(e) : n()
            })
        }
        )
    },
    canExecute: function(e) {
        var t = this.getCommand(e);
        return !t || t.canExecute.apply(t, [].slice.call(arguments, 1))
    },
    getProperties: function(e) {
        var t = this.getCommand(e);
        return !t || !t.getProperties || t.getProperties.apply(t, [].slice.call(arguments, 1))
    }
}),
m.models.CleanupManager = m.models.Manager.extend({
    initialize: function() {
        var e = this;
        this.frequencyDays = 10,
        this.load(),
        m.now() - this.cleanupInfo.lastCleanup > this.frequencyDays * mConst("dateMsPerDay") && this.listenTo(m, "appsReady", function() {
            setTimeout(function() {
                e.cleanup()
            }, 1e3)
        })
    },
    registerKey: function(e, t) {
        t && (this.cleanupInfo.cleanupOptions[e] = t),
        this.cleanupInfo.keys.indexOf(e) < 0 && this.cleanupInfo.keys.push(e),
        this.save()
    },
    registerKeyPrefix: function(e, t) {
        t && (this.cleanupInfo.cleanupOptions[e] = t),
        this.cleanupInfo.keyPrefixes.indexOf(e) < 0 && this.cleanupInfo.keyPrefixes.push(e),
        this.save()
    },
    cleanup: function() {
        var e, t, n, i = [], a = Object.keys(localStorage);
        for (e = 0; e < a.length; e++)
            if (n = a[e],
            0 <= this.cleanupInfo.keys.indexOf(n))
                i.push({
                    key: n,
                    options: this.cleanupInfo.cleanupOptions[n]
                });
            else
                for (t = 0; t < this.cleanupInfo.keyPrefixes.length; t++) {
                    var o = this.cleanupInfo.keyPrefixes[t]
                      , s = this.cleanupInfo.cleanupOptions[o];
                    if (n.startsWith(o)) {
                        if (s && s.ignoreKeys && 0 <= s.ignoreKeys.indexOf(n))
                            break;
                        if (s && null != s.pastDaysToKeep) {
                            var r = this.parseLocalDate(n.substring(o.length))
                              , l = m.date();
                            r < new Date(l.getFullYear(),l.getMonth(),l.getDate() - s.pastDaysToKeep) && i.push({
                                key: n,
                                options: s
                            });
                            break
                        }
                        i.push({
                            key: n,
                            options: s
                        });
                        break
                    }
                }
        i.map(function(t) {
            t.options && t.options.callbackWidget ? m.widgetManager.getWidgetAsync(t.options.callbackWidget).then(function(e) {
                e[t.options.callbackMethod](t.key)
            }) : localStorage.removeItem(t.key)
        }),
        this.cleanupInfo.lastCleanup = m.now(),
        this.save()
    },
    save: function() {
        localStorage.setItem("cleanup-info", JSON.stringify(this.cleanupInfo))
    },
    load: function() {
        this.cleanupInfo = localStorage.getItem("cleanup-info"),
        this.cleanupInfo ? this.cleanupInfo = JSON.parse(this.cleanupInfo) : this.cleanupInfo = {
            keyPrefixes: [],
            keys: [],
            cleanupOptions: {},
            lastCleanup: 0
        }
    },
    parseLocalDate: function(e) {
        var t = e.split(/\D/);
        return new Date(t[0],t[1] - 1,t[2])
    }
}),
m.models.ThemeManager = Backbone.Model.extend({
    initialize: function() {},
    defaultFontFamily: '-apple-system, BlinkMacSystemFont, "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    initializeThemes: function() {
        this.listenTo(m.models.customization, "change:themeColour", this.setThemeColour),
        this.listenTo(m.models.customization, "change:themeFont", this.setThemeFont),
        this.listenTo(m, "user:successfulLogin user:successfulLogout", this.onLoginEvent),
        this.loadAllThemeValues()
    },
    loadAllThemeValues: function() {
        this.loadThemeColour(),
        this.setThemeColour(),
        this.setThemeFont()
    },
    setColorValues: function(e, t) {
        this.colors = t,
        this.setThemeColour()
    },
    saveThemeColour: function() {
        this.colors && m.models.customization.set("themeColourCustom", this.toRgbA(this.colors))
    },
    loadThemeColour: function() {
        try {
            if (m.models.customization.has("themeColourCustom")) {
                var e = m.models.customization.get("themeColourCustom");
                e && (this.colors = new Colors({
                    color: e
                }).colors)
            }
        } catch (e) {}
    },
    getThemeColour: function() {
        return this.colors
    },
    getThemeColourRGBA: function() {
        return this.colors ? this.toRgbA(this.colors) : null
    },
    setThemeColour: function() {
        var e, t = $("body"), n = $("head");
        if (t.removeClass("light"),
        m.conditionalFeatures.featureEnabled("plus")) {
            var i = m.models.customization.get("themeColour");
            if ("light" == i)
                t.addClass("light"),
                e = ".dropdown, .u--bg { background-color: #ededed; }";
            else if ("dark" == i)
                e = ".dropdown, .u--bg { background-color: #333; }";
            else if ("custom" == i && this.colors) {
                var a = .5 < this.colors.RGBLuminance
                  , o = this.toRgbA(this.composite(this.colors, a));
                e = (e = (e = (e = (e = ".app, .dropdown.dash-dropdown { background-color: " + this.toRgbA(this.colors) + " !important; }") + ".dropdown, .u--bg { background-color: " + o + " !important; }") + ".nipple-bottom-left:after, .nipple-bottom-right:after { border-top-color: " + this.toRgbA(this.colors) + " !important}") + ".nipple-top-left:after, .nipple-top-right:after { border-bottom-color: " + this.toRgbA(this.colors) + " !important}") + '[class*="nipple-"].u--bg:after { border-bottom-color: ' + o + " !important; border-top-color: " + o + " !important;}",
                t.toggleClass("light", a)
            }
            this.$themeColourCustom ? this.$themeColourCustom.html(e) : (n.append('<style type="text/css" id="themeColourCustom">' + e + "</style>"),
            this.$themeColourCustom = n.find("#themeColourCustom").first())
        } else
            this.$themeColourCustom && (this.$themeColourCustom.remove(),
            this.$themeColourCustom = null)
    },
    toRgbA: function(e) {
        return "rgba(" + Math.round(255 * e.rgb.r) + "," + Math.round(255 * e.rgb.g) + "," + Math.round(255 * e.rgb.b) + "," + e.alpha + ")"
    },
    composite: function(e, t) {
        var n, i, a, o = t ? 0 : 1;
        return n = .8 * e.rgb.r + .2 * o,
        i = .8 * e.rgb.g + .2 * o,
        a = .8 * e.rgb.b + .2 * o,
        new Colors({
            color: "rgb(" + Math.round(255 * n) + "," + Math.round(255 * i) + "," + Math.round(255 * a) + ")"
        }).colors
    },
    getAvailableFonts: function() {
        return [{
            label: "Classic",
            value: "default"
        }, {
            label: "Modern",
            value: "modern"
        }, {
            label: "Startup",
            value: "startup",
            breakafter: !0
        }, {
            label: "Retro",
            value: "retro"
        }, {
            label: "Warehouse",
            value: "warehouse"
        }, {
            label: "Quirky",
            value: "quirky"
        }]
    },
    setThemeFont: function() {
        var t = this
          , n = m.models.customization.get("themeFont") || "default";
        if (m.conditionalFeatures.featureEnabled("plus")) {
            var i = this.defaultFontFamily;
            if (n && "default" != n) {
                var e = null
                  , a = localStorage.getItem("font-" + n);
                if (a)
                    e = JSON.parse(a),
                    i = this.setFontFromInfo(e) || this.defaultFontFamily,
                    this.setActiveFont(i, n);
                else
                    try {
                        $.ajax({
                            type: "GET",
                            beforeSend: setMomentumAuthHeader,
                            url: m.globals.urlRootApi + "fonts/" + n
                        }).done(function(e) {
                            e && (localStorage.setItem("font-" + n, JSON.stringify(e)),
                            i = t.setFontFromInfo(e) || t.defaultFontFamily)
                        }).fail(function(e, t) {}).always(function() {
                            t.setActiveFont(i, n)
                        })
                    } catch (e) {}
            } else
                this.setActiveFont(i, n)
        } else
            this.setActiveFont(this.defaultFontFamily, n)
    },
    setFontFromInfo: function(e) {
        var t = null;
        if (e) {
            if (!e.builtin) {
                var n = $("head")
                  , i = n.find("#font-" + e.font).first();
                if (!i || 0 == i.length) {
                    var a = null;
                    e.fontInline ? (a = $('<style type="text/css"></style>')).html(e.fontInline) : e.fontUrl && (a = $('<link rel="stylesheet" type="text/css">')).attr("href", e.fontUrl),
                    a && (a.attr("id", "font-" + e.font),
                    n.append(a))
                }
            }
            t = e.exclude_default ? e.fontFamily : e.fontFamily + "," + this.defaultFontFamily
        }
        return t
    },
    setActiveFont: function(e, t) {
        var n = "body, input, select, textarea, button {font-family: " + e + "; !important}"
          , i = document.createElement("style")
          , a = $(i);
        a.attr("type", "text/css"),
        document.head.appendChild(i),
        i.sheet.insertRule(n, 0),
        a.attr("id", "font-override");
        var o = $("body");
        _.each(this.getAvailableFonts(), function(e) {
            e.value == t ? o.addClass("f--" + e.value) : o.removeClass("f--" + e.value)
        }),
        $user = $(".user"),
        $user.hasClass("open") || $user.css("transform", "translateY(" + $("user-hidden").height() + "px)")
    },
    onLoginEvent: function() {
        this.listenToOnce(m, "sync:settings:complete", this.loadAllThemeValues)
    }
}),
m.models.SyncCoordinator = Backbone.Model.extend({
    initialize: function() {
        this.downloading = {},
        this.retryAfterKey = "feed-retry-after",
        this.syncSettingsInProgress = !1,
        this.listenTo(m, "sync:download", this.doDownload),
        this.listenTo(m, "skip:download", this.doDownloadAfterSkip),
        this.listenTo(m, "client:id_created", this.onClientIdCreated),
        this.listenTo(m, "user:successfulLogin", this.onUserLogin),
        this.listenTo(m, "user:successfulLogout", this.syncSettings),
        this.listenTo(m, "sync:downloadIfNeeded", this.doDownloadIfNeeded),
        this.listenTo(m.models.customization, "change", this.customizationChange),
        this.listenTo(m, "sync:customization", this.customizationChange),
        m.models.customization.get("etag") || this.customizationChange(),
        this.reportFeedItems()
    },
    onUserLogin: function(e) {
        localStorage.removeItem("ts_quotes"),
        localStorage.removeItem("ts_backgrounds"),
        localStorage.removeItem("ts_mantras"),
        this.doDownload(),
        this.syncSettings(e)
    },
    reportFeedItems: function() {
        var i = this;
        this.canCallServer() && ["quote", "mantra", "bg"].map(function(e) {
            var t = "report-" + e
              , n = localStorage.getItem(t);
            n && $.ajax({
                type: "post",
                contentType: "application/json",
                beforeSend: m.utils.setMomentumAuthHeader,
                url: m.globals.urlRootApi + "feed/report",
                data: n
            }).done(function(e) {
                i.checkForBackOff(e.retryAfter),
                e.success && localStorage.removeItem(t)
            })
        })
    },
    checkForReportTasks: function(e, i) {
        e.map(function(e) {
            if (e.reportUsage) {
                var t = "report-" + i
                  , n = localStorage.getItem(t);
                (n = n ? JSON.parse(n) : []).push({
                    id: e._id,
                    type: i,
                    forDate: e.forDate
                }),
                localStorage.setItem(t, JSON.stringify(n))
            }
        })
    },
    canCallServer: function() {
        var e = localStorage.getItem(this.retryAfterKey);
        if (e) {
            if (m.date().getTime() < parseInt(e))
                return !1;
            localStorage.removeItem(e)
        }
        return !0
    },
    checkForBackOff: function(e) {
        e && (e = parseInt(e),
        localStorage.setItem(this.retryAfterKey, m.date().getTime() + 1e3 * e))
    },
    doDownloadAfterSkip: function(e) {
        this.doDownload(e, !0)
    },
    doDownload: function(t, e) {
        if (this.canCallServer()) {
            var o = this;
            if (t) {
                if ("string" == typeof t) {
                    var n = {};
                    t.split(/[\s,;]+/).forEach(function(e) {
                        n[e] = !0
                    }),
                    t = n
                }
                if (["quote", "background", "mantra"].map(function(e) {
                    o.downloading[e] && t[e] && delete t[e]
                }),
                0 === Object.keys(t).length)
                    return
            }
            var i = m.collect.mantras.get("pinned");
            this.downloading = {};
            try {
                var s = this
                  , a = "";
                if (m.collect.backgrounds.get(getActiveDateString()) && (a += "b"),
                m.collect.quotes.get(getActiveDateString()) && (a += "q"),
                (m.collect.mantras.get(getActiveDateString()) || i) && (a += "m"),
                !localStorage.client_uuid)
                    return;
                var r = m.globals.urlRootApi + "feed/bulk?syncTypes=";
                if (t) {
                    var l = [];
                    if (t.quote && m.models.customization.get("quoteVisible") && (l[l.length] = "quote",
                    localStorage.removeItem(s.ddlQuoteString()),
                    this.downloading.quote = !0),
                    t.mantra && m.models.customization.get("mantraVisible") && !i && (l[l.length] = "mantra",
                    localStorage.removeItem(s.ddlMantraString()),
                    this.downloading.mantra = !0),
                    t.background && (this.downloading.background = !0,
                    l[l.length] = "background",
                    localStorage.removeItem(s.ddlBackgroundString())),
                    !(0 < l.length))
                        return;
                    r += l.join(",")
                } else
                    this.downloading.background = !0,
                    this.downloading.quote = !0,
                    i || (this.downloading.mantra = !0),
                    r += "all",
                    localStorage.removeItem(s.ddlBackgroundString()),
                    localStorage.removeItem(s.ddlQuoteString()),
                    localStorage.removeItem(s.ddlMantraString());
                r = r + "&localDate=" + getActiveDateString(),
                0 < a.length && (r += "&has=" + a);
                var d = m.models.activeBackground.activeBackgroundUuid();
                if (!d) {
                    var c = m.collect.legacyBackgrounds.getCurrentLocalBackground();
                    c && (d = c.backgroundUuid())
                }
                d && !e && (r = r + "&legacyBackground=" + d),
                $.ajax({
                    type: "GET",
                    contentType: "application/json",
                    beforeSend: setMomentumAuthHeader,
                    url: r
                }).done(function(t) {
                    o.downloading = {},
                    ["Quote", "Background", "Mantra"].map(function(e) {
                        t["useCurrent" + e] && localStorage.setItem(s["ddl" + e + "String"](), m.now())
                    }),
                    t.quotes && (0 < t.quotes.length && (m.collect.quotes.reset(t.quotes),
                    o.checkForReportTasks(t.quotes, "quote"),
                    m.collect.quotes.invoke("save"),
                    localStorage.shortquote && localStorage.removeItem("shortquote")),
                    t.ts_quotes && localStorage.setItem("ts_quotes", JSON.stringify(t.ts_quotes)),
                    localStorage.setItem(s.ddlQuoteString(), m.now())),
                    t.mantras && 0 < t.mantras.length && (m.collect.mantras.reset(t.mantras),
                    o.checkForReportTasks(t.mantras, "mantra"),
                    m.collect.mantras.invoke("save"),
                    localStorage.setItem(s.ddlMantraString(), Date.now()),
                    t.ts_mantras && localStorage.setItem("ts_mantras", JSON.stringify(t.ts_mantras))),
                    t.backgrounds && (0 < t.backgrounds.length && (m.collect.backgrounds.reset(t.backgrounds),
                    o.checkForReportTasks(t.backgrounds, "bg"),
                    m.collect.backgrounds.invoke("save"),
                    localStorage.background && (localStorage.removeItem("background"),
                    localStorage.removeItem("backgrounds"))),
                    t.ts_backgrounds && localStorage.setItem("ts_backgrounds", JSON.stringify(t.ts_backgrounds)),
                    localStorage.setItem(s.ddlBackgroundString(), m.now())),
                    o.checkForBackOff(t.retryAfter),
                    localStorage.setItem("firstSynchronized", m.now())
                }).fail(function(e, t) {
                    if (o.downloading = {},
                    0 < e.status) {
                        503 === e.status && o.checkForBackOff(e.getResponseHeader("Retry-After"));
                        var n = m.models.backgroundManager.latestItemDate();
                        n && n > Date.parse(getActiveDateString()) && localStorage.setItem(s.ddlBackgroundString(), m.now());
                        var i = m.models.quoteManager.latestItemDate();
                        i && i > Date.parse(getActiveDateString()) && localStorage.setItem(s.ddlQuoteString(), m.now());
                        var a = m.models.mantraManager.latestItemDate();
                        a && a > Date.parse(getActiveDateString()) && localStorage.setItem(s.ddlMantraString(), Date.now())
                    } else
                        m.trigger("sync:error")
                })
            } catch (e) {
                o.downloading = {}
            }
        }
    },
    doDownloadIfNeeded: function(e) {
        var t = !1
          , n = !1
          , i = !1;
        if (e) {
            if (e.ts_backgrounds) {
                var a = localStorage.getItem("ts_backgrounds");
                a ? e.ts_backgrounds > JSON.parse(a) && (t = !0) : t = !0
            }
            if (e.ts_quotes) {
                var o = localStorage.getItem("ts_quotes");
                o ? e.ts_quotes > JSON.parse(o) && (n = !0) : n = !0
            }
            if (e.ts_mantras) {
                var s = localStorage.getItem("ts_mantras");
                s ? e.ts_mantras > JSON.parse(s) && (i = !0) : i = !0
            }
        }
        t || localStorage[this.ddlBackgroundString()] || (t = !0),
        n || localStorage[this.ddlQuoteString()] || (n = !0),
        i || localStorage[this.ddlMantraString()] || (i = !0),
        this.downloading.quote && (n = !1),
        this.downloading.background && (t = !1),
        this.downloading.mantra && (i = !1),
        m.models.customization.get("quoteVisible") || (n = !1),
        m.models.customization.get("mantraVisible") || (i = !1);
        var r = {};
        t && (r.background = !0),
        n && (r.quote = !0),
        i && (r.mantra = !0),
        0 < Object.keys(r).length && this.doDownload(r)
    },
    pingApi: function(t, n) {
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: m.globals.urlRootApi
        }).done(function(e) {
            t && t()
        }).fail(function(e, t) {
            n && n()
        })
    },
    ddlBackgroundString: function() {
        return "ddl-bg-" + getActiveDateString()
    },
    ddlQuoteString: function() {
        return "ddl-qt-" + getActiveDateString()
    },
    ddlMantraString: function() {
        return "ddl-mantra-" + getActiveDateString()
    },
    onClientIdCreated: function() {
        this.doDownloadIfNeeded({
            background: !0,
            quote: !0
        }),
        this.syncSettings()
    },
    setSyncSettingsHeaders: function(e) {
        m.utils.setMomentumAuthHeader(e);
        var t = m.models.customization.get("etag");
        m.models.customization.get("displayname") || (t = uuidv4()),
        t && e.setRequestHeader("X-Momentum-Settings-ETag", t)
    },
    customizationChange: function(e, t) {
        if (!(t && t.fromStorage || this.syncSettingsInProgress || m.models.customization.fetching) && localStorage.getItem("token") && m.conditionalFeatures.featureEnabled("serversettings")) {
            if (e) {
                var n = e.changedAttributes();
                if (1 === Object.keys(n).length && _.contains(Object.keys(n), "etag"))
                    return
            } else if (m.models.customization.get("etag"))
                return;
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(m.models.customization.getPersistentSettings()),
                beforeSend: setMomentumAuthHeader,
                url: m.globals.urlRootApi + "settings"
            }).done(function(e) {
                e.etag && m.models.customization.save({
                    etag: e.etag
                })
            }).fail(function(e, t) {}).always(function() {})
        }
    },
    submitFeatureAccessRequest: function(e, t, n) {
        var i = {
            feature: e
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(i),
            beforeSend: setMomentumAuthHeader,
            url: m.globals.urlRootApi + "user/featurerequest"
        }).done(function(e) {
            t && t()
        }).fail(function(e, t) {
            n && n()
        })
    },
    syncSettings: function(e) {
        if (localStorage.client_uuid) {
            this.syncSettingsInProgress = !0;
            var t = this
              , i = !1;
            $.ajax({
                type: "GET",
                contentType: "application/json",
                beforeSend: this.setSyncSettingsHeaders,
                url: m.globals.urlRootApi + "settings"
            }).done(function(e) {
                if (e) {
                    if (e.token_invalid)
                        return e.token_invalid_reason ? m.commandManager.execute("logout", e.token_invalid_reason, !0) : m.commandManager.execute("logout", null, !0),
                        void (i = !0);
                    if (e.greetings && (localStorage.greetings = e.greetings),
                    e.customization) {
                        var t = m.models.customization.get("displayname");
                        m.models.customization.save(e.customization),
                        t && 0 != t.length || setTimeout(function() {
                            m.trigger("globalEvent:forceDisplayName")
                        }, 25)
                    }
                    e.features && m.conditionalFeatures.setFeatures(e.features, !0),
                    e.team && m.models.teamInfo.save("team", e.team),
                    m.commandManager.execute("addins.load", e.addIns),
                    m.commandManager.registerCommandSources(e.cmd),
                    e.nav,
                    e.download && m.trigger("sync:download", e.download),
                    e.ts_notifications && m.trigger("notifications:timestamp", e.ts_notifications);
                    var n = null;
                    e.ts_backgrounds && ((n = n || {}).ts_backgrounds = e.ts_backgrounds),
                    e.ts_quotes && ((n = n || {}).ts_quotes = e.ts_quotes),
                    e.mantras && ((n = n || {}).ts_mantras = e.ts_mantras),
                    n && m.trigger("sync:downloadIfNeeded", n),
                    m.trigger("sync:settings", e)
                }
            }).fail(function(e, t) {}).always(function() {
                i || (t.syncSettingsInProgress = !1,
                m.trigger("sync:settings:complete"),
                e && e())
            })
        }
    }
}),
m.collect.Feed = Backbone.Collection.extend({
    initialize: function(e, t) {
        this.model = e,
        this.itemType = t,
        this.localStorage = new Backbone.LocalStorage("momentum-" + t)
    },
    getActiveItem: function() {
        if (0 < this.length) {
            var e = getActiveDateString();
            return this.get(e)
        }
    },
    empty: function() {
        return 0 === this.models.length
    }
}),
m.models.FeedManager = Backbone.Model.extend({
    initialize: function(e, t) {
        this.itemType = t,
        m.collect[t + "s"] = this.itemCollection = new m.collect.Feed(e,t)
    },
    firstFetch: function() {
        this.itemCollection.fetch({
            reset: !0
        })
    },
    getActiveItem: function() {
        var e = this;
        if (!this.itemCollection)
            return null;
        var t = this.itemCollection.getActiveItem();
        return t ? (this.currentItem && this.equals(this.currentItem, t) || (this.currentItem = t,
        setTimeout(function() {
            m.trigger(this.itemType + ":active_changed", e.currentItem.get("_id"))
        }, 50)),
        t) : null
    },
    equals: function(e, t) {
        var n = {}
          , i = {};
        return Object.assign(n, e.attributes),
        Object.assign(i, t.attributes),
        delete n.forDate,
        delete i.forDate,
        JSON.stringify(n) === JSON.stringify(i)
    },
    skipItem: function(e) {
        e = !!e;
        var a = this
          , t = this.getActiveItem()
          , n = t.get("_id") || t.get("id")
          , o = m.globals.urlRootApi + this.itemType + "s/" + n + "/skip"
          , s = {
            is_custom: t.get("is_custom"),
            hard: e
        };
        return new Promise(function(n, i) {
            try {
                if (!(m.isLoggedIn() && m.conditionalFeatures.featureEnabled("plus") || e))
                    throw "showSkipUpsell";
                $.ajax({
                    type: "PATCH",
                    contentType: "application/json",
                    beforeSend: setMomentumAuthHeader,
                    data: JSON.stringify(s),
                    url: o
                }).done(function(e) {
                    if (e && e.success && m.trigger("skip:download", a.itemType),
                    e && e.notification) {
                        if ("max_skips" === e.notification.type || 0 === e.notification.message.indexOf("Skip ")) {
                            var t = "max" + capitalizeFirstLetter(a.itemType) + "Skips";
                            if (localStorage.getItem(t))
                                return;
                            localStorage.setItem(t, !0),
                            e.notification.display_time || (e.notification.display_time = 5e3),
                            e.notification.viewLimit || (e.notification.viewLimit = 1)
                        }
                        m.commandManager.execute("notification.show.enhanced", e.notification)
                    }
                    n(e)
                }).fail(function(e, t) {
                    m.commandManager.execute("notification.show.enhanced", a.skipErrorMessage()),
                    i()
                })
            } catch (e) {
                if ("showSkipUpsell" == e) {
                    if ("mantra" == a.itemType) {
                        var t = {
                            cta_text: "Learn more",
                            cta_cmd: "upsell.website",
                            title: "Skip Mantra",
                            message: "Upgrade to skip through mantras and add your own mantras."
                        };
                        m.commandManager.execute("notification.show.enhanced", t)
                    }
                } else
                    m.commandManager.execute("notification.show.enhanced", a.skipErrorMessage());
                i()
            }
        }
        )
    },
    toggleFavorite: function(e, t) {
        var i = this
          , n = t || this.getActiveItem()
          , a = n.get("_id") || n.get("id")
          , o = m.globals.urlRootApi + this.itemType + "s/" + a + "/favorite"
          , s = {
            is_favorite: e,
            is_custom: n.get("is_custom")
        };
        return new Promise(function(t, n) {
            try {
                $.ajax({
                    type: "PATCH",
                    contentType: "application/json",
                    beforeSend: setMomentumAuthHeader,
                    data: JSON.stringify(s),
                    url: o
                }).done(function(e) {
                    e && e.success && (m.trigger("sync:download", i.itemType),
                    m.trigger(i.itemType + ":favorite", {
                        id: a,
                        is_favorite: s.is_favorite
                    })),
                    t(e)
                }).fail(function(e, t) {
                    m.commandManager.execute("notification.show.enhanced", i.favouriteErrorMessage),
                    n(e)
                })
            } catch (e) {
                m.commandManager.execute("notification.show.enhanced", i.favouriteErrorMessage),
                n(e)
            }
        }
        )
    },
    latestItemDate: function() {
        var n = null;
        return this.itemCollection.models.forEach(function(e) {
            var t = Date.parse(e.id);
            (!n || n < t) && (n = t)
        }),
        n
    },
    skipErrorMessage: function() {
        return {
            message: "Oops! We weren't able to get a new " + this.itemType + ". Please check your connection and try again.",
            viewLimit: 1
        }
    },
    favouriteErrorMessage: {
        message: "Oops! We weren't able to save the favorite. Please check your connection and try again.",
        viewLimit: 1
    },
    registerErrorMessage: {
        message: "Please log in or register to enable skipping.",
        display_time: 2500
    }
}),
m.models.ConditionalFeatures = Backbone.Model.extend({
    initialize: function(e) {
        this.customization = e.customization || m.models.customization;
        try {
            localStorage.f3t6b23d ? this.featureList = JSON.parse(atob(localStorage.f3t6b23d)) : this.featureList = []
        } catch (e) {
            this.featureList = []
        }
    },
    featureEnabled: function(e) {
        if ("offlineDataOnly" === e && !m.isLoggedIn())
            return !0;
        var t = !0;
        return "!" === e[0] && (e = e.substr(1),
        t = !1),
        t === _.contains(this.featureList, e)
    },
    setFeatures: function(e, t) {
        var n = _.contains(this.featureList, "servertodos");
        localStorage.f3t6b23d !== e ? (localStorage.f3t6b23d = e,
        this.featureList = JSON.parse(atob(e)),
        t && !n && _.contains(this.featureList, "servertodos") ? window.location.reload() : (window.Cypress && $("body").addClass("ready-for-tests"),
        m.trigger("feature:changed"))) : window.Cypress && $("body").addClass("ready-for-tests")
    },
    clearFeatures: function() {
        this.featureList = [],
        localStorage.removeItem("f3t6b23d")
    },
    checkFeatureAndMigrateData: function(e, a, o, s, n, t) {
        var i = null
          , r = this;
        if (this.featureEnabled(e)) {
            for (var l = !1, d = 0; d < localStorage.length; d++)
                if (keyName = localStorage.key(d),
                0 === keyName.indexOf(o + "-")) {
                    l = !0;
                    break
                }
            if (l)
                try {
                    var c = m.date()
                      , u = c.getFullYear().toString() + "-" + twoDigit(c.getMonth() + 1) + "-" + twoDigit(c.getDate()) + "-" + twoDigit(c.getHours()) + ":" + twoDigit(c.getMinutes()) + ":" + twoDigit(c.getSeconds())
                      , g = "migrated-" + o + "-" + u
                      , h = []
                      , p = [];
                    for (d = 0; d < localStorage.length; d++)
                        if (keyName = localStorage.key(d),
                        0 === keyName.indexOf(o + "-")) {
                            p.push(keyName);
                            var f = localStorage.getItem(keyName);
                            if (f) {
                                var v = JSON.parse(f);
                                v.id || (v.id = v.csid),
                                h.push(v)
                            }
                        }
                    var b = {
                        items: h
                    }
                      , y = JSON.stringify(b);
                    $.ajax({
                        type: "POST",
                        contentType: "application/json",
                        data: y,
                        beforeSend: setMomentumAuthHeader,
                        url: m.globals.urlRootApi + "migrate/" + o
                    }).done(function(e, t, n) {
                        for (var i in localStorage.setItem(g, y),
                        p)
                            localStorage.removeItem(p[i]);
                        localStorage.removeItem(o),
                        m.trigger("sync:customization"),
                        a && !r.customization.getComputedSetting(a) || s()
                    }).fail(function(e, t) {
                        a && !r.customization.getComputedSetting(a) || n()
                    })
                } catch (e) {
                    console.log(e)
                }
            else
                i = s
        } else
            i = n;
        i && (!a || this.customization.getComputedSetting(a) ? i() : t ? t(i) : this.setPreferenceChangeListener(a, i))
    },
    setPreferenceChangeListener: function(e, t) {
        var n = this;
        m.listenToOnce(this.customization, "change:" + e, function() {
            n.customization.getComputedSetting(e) ? t() : n.setPreferenceChangeListener(e, t)
        })
    },
    checkPreferenceForRender: function(e, t, n) {
        t && (!e || this.customization.getComputedSetting(e) ? t() : n && n(t))
    }
}),
m.models.Widget = Backbone.Model.extend({
    shouldShowPane: function() {
        var e = !0;
        if (this.has("keepOpenSetting") && (e = m.models.customization.get(this.get("keepOpenSetting"))),
        this.has("openState")) {
            var t = localStorage[this.get("openState")];
            if (t)
                return JSON.parse(t) && e
        }
        return !1
    }
}),
m.collect.Widgets = Backbone.Collection.extend({
    model: m.models.Widget
}),
m.views.BasePlaceholder = Backbone.View.extend({
    initialize: function() {
        this.render()
    },
    render: function() {
        var e = this.model.get("region")
          , t = (this.model.get("order") || "append") + "To";
        return this.$el[t]("." + e).mFadeIn().html(this.template(model.toJSON())),
        this
    },
    attributes: function() {
        return {
            id: this.model.get("elementId") || this.model.get("id"),
            class: this.model.get("class")
        }
    },
    detach: function() {
        this.unbind(),
        this.stopListening(),
        this.undelegateEvents()
    }
}),
m.views.PanePlaceholder = m.views.BasePlaceholder.extend({
    template: m.templates.widgetmanager.pane,
    open: !1,
    events: {
        "click .toggle": "toggleShow"
    },
    initialize: function() {
        var t = this;
        this.open = !1,
        this.region = this.model.get("region"),
        this.openStateKey = this.model.get("openState"),
        this.render(),
        this.model.get("toggleEvent") && this.listenTo(m, this.model.get("toggleEvent"), this.toggleShow),
        this.model.get("hideEvents") && _.each(this.model.get("hideEvents"), function(e) {
            t.listenTo(m, e, t.onHideEvent)
        });
        var e = this.model.get("visibleSetting");
        e && this.listenTo(m.models.customization, "change:" + e, this.visibleChanged),
        this.model.shouldShowPane() && this.showPane()
    },
    attributes: function() {
        return {
            id: this.model.get("id"),
            class: "app-container " + this.model.get("id"),
            "data-test": this.model.get("data-test")
        }
    },
    render: function() {
        var e = this.model.get("label")
          , t = (this.model.get("order") || "append") + "To";
        if (!this.renderedOnce) {
            var n = this.model.get("width") + "px"
              , i = "70px";
            if (this.model.has("height"))
                i = this.model.get("height") + "px";
            else {
                var a = this.storedPaneHeight();
                a && (i = a + "px")
            }
            this.$el.html(this.template({
                label: e,
                appClass: this.model.get("appClass") || "",
                isTodo: "todo" === this.model.get("id"),
                height: i,
                width: n
            })),
            this.$app = this.$(".app"),
            this.$dash = this.$(".app-dash"),
            this.$el.addClass(this.model.get("class") || ""),
            0 === this.region.indexOf("top") && (this.$dash.remove(),
            s && s.length ? s.after(this.$el) : this.$el.prepend(this.$dash)),
            this.$(".app-wrapper").addClass("nipple-" + this.region);
            var o = this.model.get("after")
              , s = o && $(o)
              , r = this;
            setTimeout(function() {
                s && s.length ? s.after(r.$el) : r.$el[t]("." + r.region),
                r.$el.mFadeIn(),
                r.renderedOnce = !0
            })
        }
        return this
    },
    storedPaneHeight: function() {
        if (this.model.has("storedHeight")) {
            var e = this.model.get("storedHeight")
              , t = localStorage[e];
            if (t)
                return JSON.parse(t)
        }
        return null
    },
    toggleShow: function(e) {
        if (this.realView && this.realView.toggleHandler)
            return this.open = this.realView.toggleHandler(e),
            !0;
        e && e.stopPropagation && e.stopPropagation(),
        e && e.preventDefault && e.preventDefault(),
        this.open ? this.hidePane() : this.showPane()
    },
    showPane: function() {
        if (!this.open) {
            if (this.open = !0,
            localStorage.setItem(this.openStateKey, this.open),
            this.$el.addClass("show").outerWidth(),
            this.$el.addClass("show-fade-in"),
            this.realView)
                this.realView.onShowPane && this.realView.onShowPane();
            else {
                if (this.loading)
                    return;
                if (!this.model.has("addin"))
                    return;
                this.loading = !0,
                m.addinManager.ensureAddinLoaded(this.model.get("addin"))
            }
            m.trigger("globalEvent:toggle:" + this.region, this),
            m.trigger("globalEvent:toggle", this),
            this.triggerLoaded()
        }
    },
    hidePane: function() {
        var t = this;
        this.open && (this.open = !1,
        localStorage.setItem(this.openStateKey, this.open),
        this.$el.removeClass("show-fade-in"),
        setTimeout(function(e) {
            t.$el.hasClass("show-fade-in") || t.$el.removeClass("show")
        }, 300),
        this.realView && this.realView.onHidePane && this.realView.onHidePane())
    },
    triggerLoaded: function() {
        this.loadTriggered || (m.widgetManager.appReady(this.model.get("id")),
        this.loadTriggered = !0)
    },
    addRealView: function(e) {
        this.realView = e,
        this.open && this.realView.onShowPane && this.realView.onShowPane()
    },
    onHideEvent: function(e) {
        e != this && this.hidePane()
    },
    visibleChanged: function(e) {
        var t = this.model.get("visibleSetting")
          , n = m.models.customization.getComputedSetting(t)
          , i = this;
        n ? this.renderedOnce ? (this.$el.stop(),
        this.$el.addClass("app-container"),
        setTimeout(function() {
            i.$el.mFadeIn()
        }, 1)) : this.render() : (this.realView && this.realView.tearDown && this.realView.tearDown(),
        this.$el.stop(),
        setTimeout(function() {
            i.$el.mFadeOut(null, null, function() {
                i.$el.removeClass("app-container")
            })
        }, 1))
    }
}),
m.views.MetricPlaceholder = m.views.BasePlaceholder.extend({
    template: m.templates.widgetmanager.metric,
    initialize: function() {
        var e = this;
        this.render(),
        setTimeout(function() {
            m.addinManager.ensureAddinLoaded(e.model.get("addin"))
        }, 25),
        this.model.get("toggleEvent") && this.listenTo(m, this.model.get("toggleEvent"), this.toggleShow)
    },
    render: function() {
        if (!this.renderedOnce) {
            this.renderedOnce = !0;
            var e = {}
              , t = this.model.get("cachedKey");
            t && (e = JSON.parse(localStorage.getItem(t)));
            var n = this.model.get("after")
              , i = n && $(n)
              , a = this.model.get("region")
              , o = (this.model.get("order") || "append") + "To";
            i && i.length ? i.after(this.$el) : a && this.$el[o]("." + a),
            this.$el.html(this.template(e)),
            m.appsLoaded && this.$el.mFadeIn()
        }
        return this
    },
    toggleShow: function(e) {
        if (this.realView && this.realView.toggleHandler)
            return this.open = this.realView.toggleHandler(e),
            !0
    },
    addRealView: function(e) {
        this.realView = e
    }
}),
m.views.DashIconPlaceholder = m.views.BasePlaceholder.extend({
    template: m.templates.widgetmanager.dashIcon,
    open: !1,
    events: {
        "click .app-dash": "toggleShow"
    },
    initialize: function() {
        var e = m.models.customization.get("appRegionOverrides");
        this.region = e[this.model.get("id")] || this.model.get("region"),
        this.openStateKey = this.model.get("openState"),
        this.render(),
        this.model.get("toggleEvent") && this.listenTo(m, this.model.get("toggleEvent"), this.toggleShow);
        var t = this.model.get("visibleSetting");
        t && this.listenTo(m.models.customization, "change:" + t, this.visibleChanged),
        this.model.get("toggleEvent") && this.listenTo(m, this.model.get("toggleEvent"), this.toggleShow),
        this.model.shouldShowPane() && this.showPane()
    },
    attributes: function() {
        return {
            id: this.model.get("id"),
            class: "app-container " + this.model.get("id")
        }
    },
    render: function() {
        var e, t, n = this.model.get("label"), i = (this.model.get("order") || "append") + "To";
        if (!this.renderedOnce) {
            this.$el.html(this.template({
                label: n,
                appClass: this.model.get("appClass") || ""
            }));
            var a = this.model.get("flex-order");
            a && this.$el.css("order", a),
            this.$app = this.$(".app"),
            this.$dash = this.$(".app-dash");
            var o = this.model.get("icon");
            if (o) {
                var s = (e = o,
                (t = document.createElement("div")).innerHTML = e.trim(),
                t.firstChild);
                this.$dash.prepend(s)
            }
            this.$el.addClass(this.model.get("class") || ""),
            0 === this.region.indexOf("top") && (this.$dash.remove(),
            this.$el.prepend(this.$dash));
            var r = this;
            setTimeout(function() {
                r.$el[i]("." + r.region).mFadeIn(),
                r.renderedOnce = !0
            })
        }
        return this
    },
    toggleShow: function(e) {
        if (this.realView && this.realView.toggleHandler)
            return this.open = this.realView.toggleHandler(e),
            !0;
        e && e.preventDefault && e.preventDefault(),
        this.showPane()
    },
    showPane: function() {
        if (!this.open) {
            if (this.open = !0,
            localStorage.setItem(this.openStateKey, this.open),
            this.realView)
                this.realView.onShowPane && this.realView.onShowPane();
            else {
                if (this.loading)
                    return;
                if (!this.model.has("addin"))
                    return;
                this.loading = !0,
                m.addinManager.ensureAddinLoaded(this.model.get("addin"))
            }
            m.trigger("globalEvent:toggle:" + this.region, this),
            m.trigger("globalEvent:toggle", this),
            this.triggerLoaded()
        }
    },
    triggerLoaded: function() {
        this.loadTriggered || (m.widgetManager.appReady(this.model.get("id")),
        this.loadTriggered = !0)
    },
    addRealView: function(e) {
        this.realView = e,
        this.open && this.realView.onShowPane && this.realView.onShowPane()
    },
    visibleChanged: function(e) {
        var t = this.model.get("visibleSetting")
          , n = m.models.customization.getComputedSetting(t)
          , i = this;
        n ? this.renderedOnce ? (this.$el.stop(),
        setTimeout(function() {
            i.$el.mFadeIn()
        }, 1)) : this.render() : (this.realView && this.realView.tearDown && this.realView.tearDown(),
        this.$el.stop(),
        setTimeout(function() {
            i.$el.mFadeOut()
        }, 1))
    }
}),
m.models.WidgetManager = m.models.Manager.extend({
    skippedWidgets: [],
    topCenterHasContent: !1,
    initialize: function() {
        this.regions = {},
        this.regions.logo = {
            widgets: [],
            overlappingRegion: "teamlinks"
        },
        this.regions["top-left"] = {
            widgets: [{
                el: "links-app",
                view: "teamlinks"
            }],
            overlappingRegion: "bottom-left"
        },
        this.regions["top-right"] = {
            widgets: [{
                el: "app-metric",
                view: "metric"
            }, {
                el: "weather-app",
                view: "weather"
            }],
            overlappingRegion: "bottom-right"
        },
        this.regions["bottom-right"] = {
            widgets: [{
                el: "todo-app",
                view: "todoPane"
            }, {
                el: "notes-app",
                view: "notes"
            }],
            overlappingRegion: "top-right"
        },
        this.regions.bottom = {
            widgets: [{
                el: "quote",
                view: "quote"
            }],
            overlappingRegion: "top-right"
        },
        this.waitingFor = ["background"],
        m.console.log(m.elapsed() + ": initialized widgetManager")
    },
    setupWhenReady: function() {
        var e = this;
        m.models.customization.initialized ? e.setup() : this.listenToOnce(m.models.customization, "initialized", function() {
            e.setup()
        })
    },
    setup: function() {
        this.widgets && this.widgets.each(function(e) {
            e.placeholder && e.placeholder.remove()
        }),
        this.widgets = m.collect.widgets = new m.collect.Widgets,
        this.listenTo(this.widgets, "add", this.onAdd),
        this.listenTo(m, "readyForWidgets", this.onSuccessfulLogin),
        this.listenTo(m, "feature:changed", this.onSuccessfulLogin),
        this.populateWidgets()
    },
    checkWidgetTimeout: function() {
        if (!m.appsReady) {
            var e = m.elapsed()
              , t = this;
            if (e < 1500)
                setTimeout(function() {
                    t.checkWidgetTimeout()
                }, 1500 - e);
            else if (this.firstShow(!0),
            0 < this.waitingFor.length && "background" !== this.waitingFor[0]) {
                var n = this.waitingFor.toString();
                setTimeout(function() {
                    try {
                        m.usage.saveError({
                            errorType: "widgetTimeout",
                            errorMessage: "Waiting for " + n + " \n" + m.log
                        })
                    } catch (e) {}
                }, 2e3)
            }
        }
    },
    populateWidgets: function() {
        m.console.log(m.elapsed() + ": populating widgets");
        var t = this;
        _.forEach(m.addinManager.getWidgets(), function(e) {
            t.widgets.add(e)
        })
    },
    onAdd: function(e) {
        this.addWidget(e)
    },
    onSuccessfulLogin: function() {
        var t = this
          , e = this.skippedWidgets;
        this.skippedWidgets = [],
        _.each(e, function(e) {
            t.addWidget(e)
        })
    },
    addWidget: function(t, e) {
        var n = this;
        if (e = e || !1,
        m.readyForWidgets || t.get("immediateLoad")) {
            var i = !1;
            if (t.has("requiredFeature")) {
                var a = t.get("requiredFeature");
                Array.isArray(a) || (a = [a]);
                for (var o = 0; o < a.length; o++) {
                    var s = a[o];
                    if (m.conditionalFeatures.featureEnabled(s)) {
                        i = !0;
                        break
                    }
                }
                if (!i)
                    return void this.skippedWidgets.push(t)
            }
            var r = m.models.teamInfo.get("team");
            if (!t.has("emptyFlag") || !r || r.userIsAdmin || !r[t.get("emptyFlag")]) {
                if (!e && t.has("visibleSetting")) {
                    var l = t.get("visibleSetting");
                    if (!m.models.customization.getComputedSetting(l))
                        return void this.listenToOnce(m.models.customization, "change:" + l, function() {
                            var e = !!m.models.customization.getComputedSetting(l);
                            n.addWidget(t, e)
                        })
                }
                if ("metric" === t.get("placeholderType") ? (t.placeholder = new m.views.MetricPlaceholder({
                    model: t
                }),
                this.waitFor(t)) : "pane" === t.get("placeholderType") ? (t.shouldShowPane() && this.waitFor(t),
                t.placeholder = new m.views.PanePlaceholder({
                    model: t
                })) : "dashIcon" === t.get("placeholderType") ? (t.shouldShowPane() && this.waitFor(t),
                t.placeholder = new m.views.DashIconPlaceholder({
                    model: t
                })) : t.get("autoLoad") && setTimeout(function() {
                    m.addinManager.ensureAddinLoaded(t.get("addin"))
                }, 25),
                !this.topCenterHasContent)
                    "top-center" === (m.models.customization.get("appRegionOverrides")[t.get("id")] || t.get("region")) && (this.topCenterHasContent = !0,
                    $(".top-row").addClass("has-center"))
            }
        } else
            this.skippedWidgets.push(t)
    },
    waitFor: function(e) {
        this.waitingFor.push(e.id)
    },
    loadWidget: function(e) {
        var i = this.widgets.find({
            id: e
        });
        if (i)
            return new Promise(function(t, n) {
                m.addinManager.ensureAddinLoaded(i.get("addin"), function(e) {
                    t(e)
                }, null, function(e) {
                    n(e)
                })
            }
            )
    },
    getWidget: function(e) {
        return this.widgets.find({
            id: e
        }).realview
    },
    getWidgetAsync: function(i) {
        var a = this;
        return new Promise(function(e, t) {
            var n = a.widgets.find({
                id: i
            });
            n.realview ? e(n.realview) : a.loadWidget(i).then(function() {
                e(n.realview)
            })
        }
        )
    },
    registerWidget: function(e, t) {
        this.widgets.add({
            id: e
        }, {
            silent: !0
        }),
        this.widgets.find({
            id: e
        }).realview = t
    },
    handover: function(e, t, n) {
        n = n || {};
        var i = this.widgets.find({
            id: e
        });
        if (i) {
            var a = i.placeholder;
            if (a) {
                var o = i.get("placeholderType");
                "pane" === o ? n.el = a.$app : "metric" === o ? n.el = a.el : "dashIcon" === o && (n.el = a.el)
            }
            var s, r = this;
            if (t)
                return s = new t(n),
                i.realview = s,
                i.shouldRender && s.render(),
                r.updatePlaceHolder(i.placeholder, s, n.el),
                s;
            n.bootstrap && (i.bootstrap = n.bootstrap,
            i.bootstrap && m.readyForWidgets && i.bootstrap(n.el, function(e) {
                i.realview = e,
                i.shouldRender && e.render(),
                r.updatePlaceHolder(i.placeholder, e, n.el)
            }))
        }
    },
    updatePlaceHolder: function(e, t, n) {
        $(n && n[0]).closest(".app-placeholder").removeClass("app-placeholder"),
        e && e.addRealView(t)
    },
    refocusOverlap: function(e) {
        $("." + this.regions[e].overlappingRegion).removeClass("unfocus")
    },
    unfocusOverlap: function(r, l) {
        var d = this;
        setTimeout(function() {
            var e = d.regions[r].overlappingRegion
              , t = d.regions[e]
              , n = $("." + e);
            if (l) {
                var a = [];
                t.widgets.forEach(function(e) {
                    var t = 0
                      , n = m.views[e.view];
                    if (!n && window.addin && (n = addin.views[e.view]),
                    n && n.getCurrentHeight)
                        t = n.getCurrentHeight();
                    else {
                        var i = $("." + e.el);
                        t = 0 < i.length && i.is(":visible") ? i.height() : 0
                    }
                    a.push(t)
                });
                var i = $("." + r).outerHeight(!0) + n.outerHeight(!0) + Math.max.apply(null, a)
                  , o = $(".bookmarks-wrapper")
                  , s = 0;
                o.css("transform") && (s = parseInt(o.css("height")) - parseInt(o.css("transform").split(",")[5])),
                $("body").height() - (i + s + 4) < l && n.addClass("unfocus")
            } else
                n.addClass("unfocus")
        }, 1)
    },
    hideAppsExcept: function(e, t) {
        var n = $(".app-container")
          , i = $(".apps");
        this.timeout && clearTimeout(this.timeout),
        $.each(n, function() {
            $(this).css({
                opacity: ""
            })
        });
        var a = $(e);
        a.length && $.each(a, function() {
            $(this).addClass("show-anyway")
        }),
        i.addClass("hide-apps"),
        t ? (i.addClass("hide-apps-visibility"),
        this.appsHidden = !0) : this.timeout = setTimeout(function() {
            i.addClass("hide-apps-visibility")
        }, 550)
    },
    showApps: function(e) {
        if (e || this.backgroundIsReady) {
            this.timeout && clearTimeout(this.timeout);
            var t = $(".apps");
            e && (t.addClass("u--no-transition"),
            t.removeClass("show-apps"),
            setTimeout(function() {
                t.removeClass("u--no-transition"),
                t.addClass("show-apps")
            }, 10)),
            t.removeClass("hide-apps hide-apps-visibility");
            var n = $(".apps .show-anyway");
            n.length && $.each(n, function() {
                $(this).removeClass("show-anyway")
            })
        }
    },
    appReady: function(e) {
        m.console.log(m.elapsed() + ": " + e + " is ready"),
        this[e + "IsReady"] = !0;
        var t = this.waitingFor.indexOf(e);
        0 <= t && (this.waitingFor.splice(t, 1),
        this.firstShow())
    },
    firstShow: function(e) {
        var t = this;
        m.appsReady || 0 !== this.waitingFor.length && m.readyForWidgets && !e || (document.getElementById("main-view").style.display = "block",
        setTimeout(function() {
            m.appsReady || ($(".apps").addClass("show-apps"),
            m.appsReady = !0,
            m.appsReadyAt = m.now(),
            m.trigger("appsReady"))
        }, 1),
        setTimeout(function() {
            m.appsLoaded = !0,
            t.loadImages(),
            setTimeout(function() {
                m.models.activeBackground.preCacheFutureBackgroundImages()
            }, 50)
        }, 500))
    },
    loadImages: function() {
        for (var e = document.getElementsByTagName("img"), t = 0; t < e.length; t++)
            e[t].getAttribute("data-src") && e[t].setAttribute("src", e[t].getAttribute("data-src"))
    }
}),
window.m.usageDB = function() {
    var n = null
      , d = {
        READY: "ready",
        UPLOADING: "uploading",
        UPLOADED: "uploaded"
    };
    function i() {
        try {
            window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
            window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction,
            window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange,
            dbVersion = 1;
            var t = indexedDB.open("momo-db", 1);
            t.onsuccess = function() {
                n = t.result
            }
            ,
            t.onerror = function(e) {}
            ,
            t.onupgradeneeded = function(e) {
                !function(e, t) {
                    try {
                        e.oncomplete = function(e) {
                            n = t
                        }
                        ,
                        t.createObjectStore("usage", {
                            keyPath: "key"
                        }).createIndex("ready", ["forDate", "itemUuid", "status"])
                    } catch (e) {}
                }(e.target.transaction, t.result)
            }
        } catch (e) {}
    }
    function c() {
        return new Promise(function(t, e) {
            try {
                n ? t(n) : (i(),
                setTimeout(function() {
                    c().then(function(e) {
                        t(e)
                    })
                }, 10))
            } catch (e) {}
        }
        )
    }
    return {
        status: d,
        increment: function(a, o, s, r) {
            var l = null;
            c().then(function(e) {
                try {
                    var t = e.transaction(["usage"], "readwrite");
                    t.oncomplete = function() {}
                    ,
                    t.onerror = function(e) {}
                    ;
                    var n = getActiveDateString()
                      , i = t.objectStore("usage").index("ready").get([n, a, d.READY]);
                    i.onsuccess = function(e) {
                        try {
                            l = void 0 === e.target.result ? m.usage.create(a, o) : e.target.result,
                            Array.isArray(s) || (s = [s]),
                            s.forEach(function(e) {
                                l[e]++
                            }),
                            t.objectStore("usage").put(l),
                            r && r(e.target.result)
                        } catch (e) {}
                    }
                    ,
                    i.onerror = function(e) {}
                } catch (e) {}
            })
        },
        saveEntity: function(e) {
            var a = {};
            return Object.assign(a, e),
            a.key = uuidv4(),
            a.status = d.READY,
            a.type || (a.type = m.usage.types.STATS),
            new Promise(function(n, i) {
                c().then(function(e) {
                    try {
                        var t = e.transaction(["usage"], "readwrite");
                        t.oncomplete = function(e) {
                            n(e)
                        }
                        ,
                        t.onerror = function(e) {
                            i(e)
                        }
                        ,
                        t.objectStore("usage").put(a)
                    } catch (e) {
                        i(e)
                    }
                })
            }
            )
        },
        prepareUnsynced: function() {
            return new Promise(function(s, r) {
                c().then(function(e) {
                    try {
                        var t = e.transaction(["usage"], "readwrite");
                        t.oncomplete = function() {
                            s(o)
                        }
                        ;
                        var i = m.date().getTime()
                          , a = i - 6e4
                          , n = t.objectStore("usage")
                          , o = [];
                        n.openCursor().onsuccess = function(e) {
                            try {
                                var t = e.target.result;
                                if (t) {
                                    if (t.value.status === d.READY || t.value.uploadDate < a) {
                                        var n = t.value;
                                        n.status = d.UPLOADING,
                                        n.uploadDate = i,
                                        t.update(n).onsuccess = function() {
                                            o.push(n)
                                        }
                                    }
                                    t.continue()
                                }
                            } catch (e) {
                                r()
                            }
                        }
                    } catch (e) {
                        r()
                    }
                }).catch(function() {
                    r()
                })
            }
            )
        },
        cleanSynced: function(a) {
            return new Promise(function(n, i) {
                c().then(function(e) {
                    try {
                        var t = e.transaction(["usage"], "readwrite");
                        t.oncomplete = function() {
                            n()
                        }
                        ,
                        t.objectStore("usage").openCursor().onsuccess = function(e) {
                            try {
                                var t = e.target.result;
                                t && (a.map(function(e) {
                                    t.value.key === e && t.delete()
                                }),
                                t.continue())
                            } catch (e) {
                                i()
                            }
                        }
                    } catch (e) {
                        i()
                    }
                }).catch(function() {
                    i()
                })
            }
            )
        }
    }
}(),
window.m.usage = function() {
    try {
        var t = {
            PHOTO: 1,
            QUOTE: 2,
            MANTRA: 3,
            ERROR: 4,
            SEARCH: 5,
            STATS: 6,
            TIMING: 7,
            SYSTEM: 8
        }
          , n = {
            IMPRESSION_COUNT: "impressionCount",
            HOVER_COUNT: "hoverCount",
            LOAD_COUNT: "loadCount",
            CLICK_COUNT: "clickCount",
            SECONDARY_CLICK_COUNT: "secondaryClickCount",
            ADMIRE_COUNT: "admireCount",
            STICKY_CLICK_COUNT: "stickyClickCount",
            STICKY_SECONDARY_CLICK_COUNT: "stickySecondaryClickCount",
            STICKY_HOVER_COUNT: "stickyHoverCount"
        }
          , i = {};
        i[t.PHOTO] = [n.IMPRESSION_COUNT, n.HOVER_COUNT, n.LOAD_COUNT, n.ADMIRE_COUNT, n.CLICK_COUNT, n.STICKY_CLICK_COUNT, n.SECONDARY_CLICK_COUNT, n.STICKY_SECONDARY_CLICK_COUNT, n.STICKY_HOVER_COUNT],
        i[t.QUOTE] = [n.IMPRESSION_COUNT, n.HOVER_COUNT, n.LOAD_COUNT, n.CLICK_COUNT];
        var a = "usage-retry-after"
          , o = {
            timeThreshold: 1e3,
            timeThresholdPassed: !1,
            tabLoadThreshold: 3e3
        };
        function s(e) {
            return e && e.get ? e.get("_id") || e.get("id") : null
        }
        return o["loaded" + t.PHOTO] = null,
        o["loaded" + t.QUOTE] = null,
        o["trackedLoaded" + t.PHOTO] = null,
        o["trackedLoaded" + t.QUOTE] = null,
        setTimeout(function() {
            o.timeThresholdPassed = !0
        }, o.timeThreshold),
        setTimeout(function() {
            document.addEventListener("visibilitychange", function() {
                !document.hidden && o.timeThresholdPassed && Object.values(t).forEach(function(e) {
                    var t = o["loaded" + e];
                    t && (o["trackedLoaded" + e] === t ? m.usage.recordImpression(t, e) : (o["trackedLoaded" + e] = t,
                    m.usage.recordLoadAndImpression(t, e)))
                })
            })
        }, 300),
        setTimeout(function() {
            localStorage.getItem("syncOnTabLoad") && m.usage.sendStats()
        }, o.tabLoadThreshold),
        {
            properties: n,
            types: t,
            create: function(e, t) {
                var n = {
                    itemUuid: e,
                    forDate: getActiveDateString(),
                    status: m.usageDB.status.READY,
                    uploadDate: 0,
                    type: t,
                    key: uuidv4()
                };
                return i[t].forEach(function(e) {
                    n[e] = 0
                }),
                n
            },
            itemLoaded: function(e, t) {
                try {
                    function n(e, t) {
                        document.hidden || (o["trackedLoaded" + t] = e,
                        m.usage.recordLoadAndImpression(e, t))
                    }
                    o["loaded" + t] = e,
                    o["trackedLoaded" + t] = null,
                    o.timeThresholdPassed && !document.hidden ? n(e, t) : setTimeout(function() {
                        document.hidden || n(e, t)
                    }, o.timeThreshold)
                } catch (e) {}
            },
            savePhotoError: function(e) {
                e.itemType = "Photo",
                this.saveError(e, !0, !0)
            },
            saveError: function(e) {
                e.type = m.usage.types.ERROR,
                navigator.connection && (e.rtt = navigator.connection.rtt,
                e.down = navigator.connection.downlink),
                this.save(e, !0, !0)
            },
            savePhotoLoadTime: function(e) {
                e.type = m.usage.types.TIMING,
                e.itemType = "Photo",
                this.save(e, !0, !0)
            },
            save: function(e, t, n) {
                var i = this;
                try {
                    e.date = m.now(),
                    m.usageDB.saveEntity(e).then(function() {
                        t && (n ? localStorage.setItem("syncOnTabLoad", !0) : i.sendStats())
                    })
                } catch (e) {}
            },
            increment: function(e, t, n, i) {
                var a = this;
                try {
                    m.usageDB.increment(e, t, n, function() {
                        i && a.sendStats()
                    })
                } catch (e) {}
            },
            recordLoadAndImpression: function(e, t) {
                try {
                    this.increment(s(e), t, [n.LOAD_COUNT, n.IMPRESSION_COUNT], this.shouldSendNow(e))
                } catch (e) {}
            },
            recordStickyHover: function(e, t) {
                try {
                    this.increment(s(e), t, [n.HOVER_COUNT, n.STICKY_HOVER_COUNT])
                } catch (e) {}
            },
            recordHover: function(e, t) {
                try {
                    this.increment(s(e), t, n.HOVER_COUNT)
                } catch (e) {}
            },
            recordClick: function(e, t) {
                try {
                    this.increment(s(e), t, n.CLICK_COUNT, this.shouldSendNow(e))
                } catch (e) {}
            },
            recordStickyClick: function(e, t) {
                try {
                    this.increment(s(e), t, [n.CLICK_COUNT, n.STICKY_CLICK_COUNT], this.shouldSendNow(e))
                } catch (e) {}
            },
            recordSecondaryClick: function(e, t) {
                try {
                    this.increment(s(e), t, n.SECONDARY_CLICK_COUNT, this.shouldSendNow(e))
                } catch (e) {}
            },
            recordStickySecondaryClick: function(e, t) {
                try {
                    this.increment(s(e), t, [n.SECONDARY_CLICK_COUNT, n.STICKY_SECONDARY_CLICK_COUNT], this.shouldSendNow(e))
                } catch (e) {}
            },
            recordImpression: function(e, t) {
                try {
                    this.increment(s(e), t, n.IMPRESSION_COUNT)
                } catch (e) {}
            },
            recordAdmire: function(e) {
                try {
                    this.increment(s(e), t.PHOTO, n.ADMIRE_COUNT)
                } catch (e) {}
            },
            shouldSendNow: function(e) {
                return e && (e.get("sticky") || e.get("now"))
            },
            sendStats: function() {
                var e = this;
                function t(e) {
                    try {
                        if (!e || 0 === e.length || !localStorage.getItem("client_uuid") || !navigator.onLine)
                            return void (o.sending = !1);
                        var t = localStorage.getItem(a);
                        if (t) {
                            if (m.date().getTime() < parseInt(t))
                                return void (o.sending = !1);
                            localStorage.removeItem(t)
                        }
                        e.forEach(function(t) {
                            i[t.type] && i[t.type].forEach(function(e) {
                                0 === t[e] && delete t[e]
                            }),
                            isNaN(t.type) && (t.type = t.type === m.usage.types.PHOTO ? 1 : 2),
                            delete t.status,
                            delete t.uploadDate
                        }),
                        $.ajax({
                            type: "post",
                            contentType: "application/json",
                            beforeSend: m.utils.setMomentumAuthHeader,
                            url: m.globals.urlRootStats + "collect",
                            data: JSON.stringify(e)
                        }).then(function(e) {
                            localStorage.removeItem("syncOnTabLoad"),
                            e && m.usageDB.cleanSynced(e).finally(function() {
                                o.sending = !1
                            })
                        }).catch(function(e) {
                            if (503 === e.status) {
                                var t = e.getResponseHeader("Retry-After");
                                t && (t = parseInt(t),
                                localStorage.setItem(a, m.date().getTime() + 1e3 * t))
                            }
                            o.sending = !1
                        })
                    } catch (e) {
                        o.sending = !1
                    }
                }
                o.sending ? setTimeout(function() {
                    e.sendStats()
                }, 5e3) : (o.sending = !0,
                setTimeout(function() {
                    m.usageDB.prepareUnsynced().then(t).catch(function() {
                        o.sending = !1
                    })
                }, 1e3))
            }
        }
    } catch (e) {}
}(),
m.models.Image = Backbone.Model.extend({
    loadCompleted: !1,
    loading: !1,
    success: !1,
    failed: !1,
    timeoutId: null,
    initialize: function() {},
    load: function(e) {
        var o = this
          , s = this.get("url")
          , r = this.get("variant")
          , l = this.get("uuid");
        if (this.success)
            setTimeout(function() {
                m.trigger("image:loaded", l, s)
            }, 5);
        else if (!this.loading && !this.loadCompleted) {
            this.loading = !0;
            var t = document.createElement("img");
            t.addEventListener("load", function e() {
                o._onLoad = e,
                this.success = !0,
                o.cleanup();
                var t = !1
                  , n = o.get("height")
                  , i = o.get("width");
                n && i ? this.height == n && this.width == i || (t = !0) : o.get("skip_check") || (this.height < 750 || this.width < 1e3) && (t = !0);
                if (t) {
                    o.failed = !0,
                    localStorage.setItem("failed:" + s, "true");
                    var a = {
                        errorType: "loadError",
                        itemUuid: l,
                        errorMessage: "size mismatch"
                    };
                    return r && (a.variant = r),
                    m.usage.savePhotoError(a),
                    o.loadCompleted = !0,
                    void m.trigger("image:error", l)
                }
                o.loadCompleted = !0,
                o.loading = !1,
                m.trigger("image:loaded", l, s, r),
                setTimeout(function() {
                    for (var e = performance.getEntriesByType("resource"), t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.name === s) {
                            var i = {
                                itemUuid: l,
                                duration: n.duration
                            };
                            r && (i.variant = r),
                            0 < n.duration && navigator.connection && (i.rtt = navigator.connection.rtt,
                            i.down = navigator.connection.downlink),
                            m.usage.savePhotoLoadTime(i)
                        }
                    }
                }, 25)
            }),
            t.addEventListener("error", function e(t) {
                o._onError = e,
                o.failed = !0,
                o.loading = !1,
                o.cleanup();
                var n = {
                    errorType: "loadError",
                    itemUuid: l
                };
                t && (n.errorMessage = JSON.stringify(t)),
                r && (n.variant = r),
                m.usage.savePhotoError(n),
                o.isBackgroundLoaded && m.trigger("image:error", l)
            }),
            e && (o.timeoutId = setTimeout(function() {
                this.success || m.trigger("image:timeout", l)
            }, e)),
            t.setAttribute("src", s)
        }
    },
    cleanup: function() {
        this.timeoutId && (clearTimeout(this.timeoutId),
        this.timeoutId = null),
        this.img && (this.img.removeEventListener("load", this._onLoad),
        this.img.removeEventListener("error", this._onError),
        this.img = null)
    }
}),
m.models.ImageManager = Backbone.Model.extend({
    images: {},
    initialize: function() {},
    loadImage: function(e, t) {
        var n = null
          , i = e.uuid;
        this.images.hasOwnProperty(i) ? n = this.images[i] : (n = new m.models.Image(e),
        this.images[i] = n),
        n.load(t)
    },
    preCacheFutureBackgroundImages: function(e) {
        var t = this;
        if (e && 0 < e.length) {
            var n = e.findWhere({
                cached: !1
            });
            n && (this.listenToOnce(m, "image:loaded", function() {
                t.preCacheFutureBackgroundImages(e)
            }),
            t.preCacheBackgroundImage(n))
        }
    },
    preCacheBackgroundImage: function(e) {
        if (e) {
            var t = {
                uuid: e.backgroundUuid(),
                url: e.get("filename")
            };
            t.height = e.get("height"),
            t.width = e.get("width"),
            t.skip_check = !!e.get("skip_check"),
            t.variant = e.get("variant"),
            this.loadImage(t)
        }
    }
}),
m.models.BackgroundBase = Backbone.Model.extend({
    defaults: {
        cached: !1
    },
    backgroundUuid: function() {
        var e = this.get("_id");
        if (e)
            return e;
        var t, n = this.get("filename");
        return 0 === n.indexOf("http") ? null : 2 == (t = n.split("/")).length && 2 == (t = t[1].split(".")).length ? t[0] : null
    }
}),
m.models.Background = m.models.BackgroundBase.extend({
    idAttribute: "forDate"
}),
m.models.ActiveBackground = Backbone.Model.extend({
    initialize: function(e, t) {
        this.displayLogged = !1,
        this.backgrounds = t.backgrounds,
        this.legacyBackgrounds = t.legacyBackgrounds,
        this.listenTo(this.backgrounds, "reset", this.collectionReady),
        this.listenTo(this.legacyBackgrounds, "reset", this.legacyCollectionReady),
        this.listenTo(m, "newDay", this.handleNewDay, this),
        this.listenTo(m, "waitForPhotoActivation", this.waitForPhotoActivation, this),
        this.listenTo(this, "background:fallback", this.handleFallback, this)
    },
    handleNewDay: function() {
        var e = this;
        try {
            m.usage.sendStats()
        } catch (e) {}
        e.intervalId = setInterval(function() {
            0 < e.backgrounds.length && (e.checkActiveBackground(),
            clearInterval(e.intervalId))
        }, 50)
    },
    handleFallback: function() {
        var e = this.fallbackKey()
          , t = localStorage.getItem(e)
          , n = null;
        this.legacyBackgrounds.initialized ? t ? ((n = this.legacyBackgrounds.getBackground(t)) || (n = this.legacyBackgrounds.getCurrentLocalBackground()) && localStorage.setItem(e, n.backgroundUuid()),
        n && (this.usingFallback = !0,
        this.setActiveBackground(n, !0))) : n || (n = this.legacyBackgrounds.getCurrentLocalBackground()) && (localStorage.setItem(e, n.backgroundUuid()),
        this.usingFallback = !0,
        this.setActiveBackground(n, !0)) : this.legacyBackgrounds.waitingForFallback = !0
    },
    waitForPhotoActivation: function(e) {
        this.isWaitingForPhotoActivation = e
    },
    collectionReady: function() {
        this.usingFallback && !this.isWaitingForPhotoActivation || (this.checkActiveBackground(),
        this.isWaitingForPhotoActivation = !1)
    },
    fallbackKey: function() {
        return "fallback-" + getActiveDateString()
    },
    legacyCollectionReady: function() {
        0 < this.backgrounds.length ? this.backgrounds.get(getActiveDateString()) || this.checkActiveBackground() : this.checkActiveBackground()
    },
    activeBackgroundUuid: function() {
        return this.backgroundItem ? this.backgroundItem.backgroundUuid() : null
    },
    checkActiveBackground: function() {
        var e = null;
        this.backgrounds && 0 < this.backgrounds.length && (e = this.backgrounds.getActiveItem()) ? this.setActiveBackground(e) : this.trigger("background:fallback")
    },
    successfullyLoaded: function(e) {
        this.backgroundItem.backgroundUuid() == e && this.trigger("background:successfullyLoaded", this.backgroundItem)
    },
    setActiveBackground: function(e, t) {
        this.legacyBackgrounds.waitingForFallback = !1,
        e && (e.has("_id") && this.lastBgId == e.get("_id") || (this.lastBgId = e.get("_id"),
        this.backgroundItem && this.backgroundItem.cid == e.cid || (this.displayLogged = !1,
        this.backgroundItem = e,
        this.trigger("background:activechanged", e, !!t))))
    },
    generateUUID: function() {
        var n = m.date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (n + 16 * Math.random()) % 16 | 0;
            return n = Math.floor(n / 16),
            ("x" == e ? t : 3 & t | 8).toString(16)
        })
    },
    preCacheFutureBackgroundImages: function() {
        m.models.imageManager.preCacheFutureBackgroundImages(this.backgrounds)
    }
}),
m.models.LegacyBackground = m.models.BackgroundBase.extend({
    parse: function(e) {
        var t, n = e.id;
        n || 2 == (t = e.filename.split("/")).length && 2 == (t = t[1].split(".")).length && (n = t[0]);
        this.set({
            id: n,
            filename: e.filename,
            title: e.title,
            source: e.source,
            sourceUrl: e.sourceUrl
        })
    }
}),
m.collect.Fallbacks = Backbone.Collection.extend({
    model: Backbone.Model,
    beforeDate: function(t) {
        return filtered = this.filter(function(e) {
            return e.get("fallbackDate") < t
        }),
        new m.collect.Fallbacks(filtered)
    }
}),
m.collect.LegacyBackgrounds = Backbone.Collection.extend({
    model: m.models.LegacyBackground,
    url: "app/backgrounds.json",
    parse: function(e) {
        return e.backgrounds
    },
    initialize: function() {
        this.initialized = !1,
        this.listenTo(this, "reset", function() {
            this.initialized = !0,
            this.waitingForFallback && m.models.activeBackground.trigger("background:fallback")
        }),
        localStorage.firstSynchronized || this.listenTo(this, "reset", this.initializeBackground)
    },
    initializeBackground: function() {
        this.getCurrentLocalBackground(),
        m.trigger("sync:downloadIfNeeded")
    },
    getBackground: function(e) {
        return this.get(e)
    },
    getCurrentLocalBackground: function() {
        if (0 === this.models.length)
            return null;
        var e = null
          , t = m.models.activeBackground.fallbackKey()
          , n = localStorage.getItem(t);
        if (n && (e = this.get(n)),
        !e) {
            if (!this.parseRecentFallbacks())
                return null;
            var i = Math.floor(.75 * this.models.length)
              , a = this.fallbacks.sortBy(function(e) {
                return -e.get("fallbackDate")
            })
              , o = _.first(a, i)
              , s = _.map(o, function(e) {
                return e.get("backgroundGuid")
            })
              , r = this.pluck("id");
            if (m.collect.backgrounds) {
                var l = m.collect.backgrounds.sortBy(function(e) {
                    return -Date.parse(e.get("forDate"))
                });
                i = Math.floor(.25 * this.models.length);
                var d = _.first(l, i)
                  , c = _.map(d, function(e) {
                    return e.get("_id")
                });
                s = _.union(s, c)
            }
            var u = _.difference(r, s);
            if (0 < u.length) {
                var g = _.sample(u);
                e = this.get(g)
            } else
                e = this.sample()
        }
        return e
    },
    parseRecentFallbacks: function() {
        if (this.fallbacks)
            return !0;
        this.fallbacks = new m.collect.Fallbacks;
        var o = this;
        return $.each(localStorage, function(e, t) {
            if (0 === e.indexOf("fallback-")) {
                var n = e.slice(9)
                  , i = Date.parse(n)
                  , a = new Backbone.Model({
                    fallbackDate: i,
                    backgroundGuid: t
                });
                o.fallbacks.add(a)
            }
        }),
        !0
    }
}),
m.models.BackgroundManager = m.models.FeedManager.extend({
    initialize: function(e, t) {
        m.models.FeedManager.prototype.initialize.call(this, m.models.Background, "background"),
        m.models.imageManager = new m.models.ImageManager,
        m.collect.legacyBackgrounds = new m.collect.LegacyBackgrounds,
        m.models.activeBackground = new m.models.ActiveBackground({},{
            backgrounds: m.collect.backgrounds,
            legacyBackgrounds: m.collect.legacyBackgrounds
        }),
        this.listenTo(m, "image:loaded", this.markBackgroundAsCached)
    },
    firstFetch: function() {
        var e = m.collect.backgrounds
          , t = m.collect.legacyBackgrounds;
        m.firstLoadEver && (e = m.collect.legacyBackgrounds,
        t = m.collect.backgrounds,
        m.firstLoadEver = !1),
        e.fetch({
            reset: !0
        }),
        setTimeout(function() {
            t.fetch({
                reset: !0
            })
        }, 500)
    },
    getActiveItem: function() {
        return m.models.activeBackground.backgroundItem
    },
    markBackgroundAsCached: function(e, t, n) {
        var i = {
            _id: e
        };
        n && (i.variant = n);
        var a = m.collect.backgrounds.findWhere(i);
        a && a.get("testOnly") ? a.destroy() : a && a.save("cached", !0)
    }
}),
m.views.Background = Backbone.View.extend({
    tagName: "li",
    attributes: {
        class: "background-item"
    },
    isBackgroundLoaded: !1,
    initialize: function() {
        this.initialFade = !0,
        this.model = m.models.backgroundManager,
        this.listenTo(m.models.activeBackground, "background:activechanged", this.setBackground),
        this.listenTo(m, "appsReady", this.fadeBackgroundIn),
        this.listenTo(m, "topics:open", this.shiftBackground),
        this.listenTo(m, "topics:closed", this.unShiftBackground)
    },
    render: function() {
        this.model && this.model.backgroundItem && this.setBackground(this.model.backgroundItem)
    },
    setBackground: function(o) {
        var s = this
          , e = !1;
        s.isBackgroundLoaded && (e = !0);
        var r = o.get("filename")
          , l = o.get("variant")
          , d = o.backgroundUuid()
          , c = (this.options.order || "append") + "To";
        $(".background").css("background-image", $(".background").find("li").css("background-image")),
        this.lastId = d,
        this.loadCompleted = !1,
        "true" == localStorage.getItem("failed:" + r) && (s.loadCompleted = !0,
        m.models.activeBackground.trigger("background:fallback"));
        var t = $("<img/>");
        t.on("load", function() {
            var a = d;
            setTimeout(function() {
                for (var e = performance.getEntriesByType("resource"), t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.name === r) {
                        var i = {
                            itemUuid: a,
                            duration: n.duration
                        };
                        l && (i.variant = l),
                        0 < n.duration && navigator.connection && (i.rtt = navigator.connection.rtt,
                        i.down = navigator.connection.downlink),
                        m.usage.savePhotoLoadTime(i)
                    }
                }
            }, 25);
            var e = !1
              , t = o.get("height")
              , n = o.get("width");
            t && n ? this.height == t && this.width == n || (e = !0) : o.get("skip_check") || (this.height < 750 || this.width < 1e3) && (e = !0);
            if (e) {
                m.models.activeBackground.trigger("background:fallback"),
                localStorage.setItem("failed:" + r, "true");
                var i = {
                    errorType: "loadError",
                    itemUuid: a,
                    errorMessage: "size mismatch"
                };
                return l && (i.variant = l),
                m.usage.savePhotoError(i),
                void (s.loadCompleted = !0)
            }
            s.loadCompleted = !0,
            m.models.activeBackground.successfullyLoaded(d);
            try {
                m.usage.itemLoaded(o, m.usage.types.PHOTO)
            } catch (e) {}
            s.isBackgroundLoaded = !0,
            d === s.lastId && (s.$el[c]("." + s.options.region).css("background-image", "url(" + r + ")"),
            $(this).remove(),
            m.appsLoaded && s.fadeBackgroundIn()),
            m.widgetManager.appReady("background"),
            setTimeout(function() {
                m.trigger("background:loadSuccessful", d)
            }, 200),
            setTimeout(function() {
                m.widgetManager.checkWidgetTimeout()
            }, 500)
        }).on("error", function(e) {
            var t = {
                errorType: "loadError",
                itemUuid: d
            };
            l && (t.variant = l),
            m.usage.savePhotoError(t),
            s.loadCompleted = !0,
            s.isBackgroundLoaded ? m.trigger("background:error", d) : m.models.activeBackground.trigger("background:fallback")
        }),
        e || window.setTimeout(function() {
            if (!s.loadCompleted) {
                var e = {
                    errorType: "timeout",
                    itemUuid: d
                };
                l && (e.variant = l),
                m.usage.savePhotoError(e),
                s.loadCompleted = !0,
                m.models.activeBackground.trigger("background:fallback")
            }
        }, 4e3),
        t.attr("src", r)
    },
    fadeBackgroundIn: function() {
        var e = this.initialFade ? "fadein" : "fadein-slow";
        this.initialFade = !1,
        this.$el.addClass(e),
        setTimeout(function() {
            $(".background-overlay").addClass("show")
        }, 55)
    },
    shiftBackground: function() {
        addClass(document.body, "show-full-overlay"),
        setTimeout(function() {
            addClass(document.body, "show-full-overlay-active")
        }, 10)
    },
    unShiftBackground: function() {
        removeClass(document.body, "show-full-overlay-active"),
        setTimeout(function() {
            removeClass(document.body, "show-full-overlay")
        }, 500)
    }
}),
m.views.BackgroundInfo = Backbone.View.extend({
    template: m.templates.background["background-info"],
    timeAdmireDelay: 4e3,
    timeoutIdAdmire: null,
    events: {
        mouseenter: "handleHoverOn",
        mouseleave: "handleHoverOff",
        "mouseenter .control": "controlHoverOn",
        "mouseleave .control": "controlHoverOff",
        "click .background-info-title": "clickTitle",
        "click .background-info-source-link": "clickSource",
        "click .source-url": "trackClick",
        "click .control-heart": "toggleFavorite",
        "click .control-skip": "skipBackground"
    },
    initialize: function() {
        this.listenTo(m.models.activeBackground, "background:successfullyLoaded", this.activeBackgroundReady),
        this.listenTo(m.models.activeBackground, "background:error", this.skipFailed),
        this.listenTo(m, "sync:error", this.skipFailed),
        this.listenTo(m, "globalEvent:windowBlur", this.unfocusBg)
    },
    parentReady: function(e) {
        this.isParentReady = !0,
        (this.isBackgroundReady || e) && this.render()
    },
    activeBackgroundReady: function() {
        this.isBackgroundReady = !0,
        this.isParentReady && this.render()
    },
    render: function() {
        m.models.activeBackground && m.models.activeBackground.backgroundItem && this.setBackground(m.models.activeBackground.backgroundItem),
        this.$bgOverlay = $(".background-overlay"),
        this.$bgInfo = this.$(".background-info"),
        !document.hidden && this.activeBackground.get("sticky") && this.stick()
    },
    setBackground: function(e) {
        var t = this
          , n = ""
          , i = null
          , a = ""
          , o = ""
          , s = ""
          , r = ""
          , l = !1
          , d = !1
          , c = null;
        if (e) {
            if (n = e.get("title"),
            o = e.get("sourceUrl"),
            s = e.get("detailUrl"),
            i = e.get("attribution"),
            a = e.get("source"),
            c = e.get("templateId")) {
                var u = m.templates.background["background-template-" + c];
                u && (this.template = u)
            }
            i = i || "Photo by " + a,
            e.get("is_favorite") && (l = !0,
            r = "active")
        }
        this.activeBackground ? this.activeBackground.backgroundUuid() != e.backgroundUuid() ? d = !0 : n == this.activeBackground.get("title") && i == this.activeBackground.get("attribution") || (d = !0) : d = !0,
        d && (this.activeBackground = e),
        s && 0 < s.length ? (this.detailUrl = s,
        this.$el.addClass("has-link")) : (this.detailUrl = null,
        this.$el.removeClass("has-link"));
        var g = {
            title: n,
            source: a,
            sourceUrl: o,
            attribution: i,
            fav_class: r,
            hasDetailUrl: Boolean(this.detailUrl),
            sticky: this.activeBackground.get("sticky")
        };
        if (this.renderedOnce)
            d && (this.$el.addClass("u--no-opacity"),
            setTimeout(function() {
                t.$background_info_title.html(n + '<i class="icon-angle-right"></i>'),
                t.$background_info_source_link.text(i),
                t.$controlSkip.find(".icon-container").removeClass("active"),
                t.$el.removeClass("u--no-opacity")
            }, 500));
        else {
            var h = (this.options.order || "append") + "To";
            this.$el[h]("." + this.options.region).html(this.template(g)),
            m.appsLoaded && m.widgetManager.loadImages(),
            this.$background_info_source_link = this.$el.find(".background-info-source-link").first(),
            this.$background_info_title = this.$el.find(".background-info-title").first(),
            this.$control_heart = this.$el.find(".control-heart").first(),
            this.$controlSkip = this.$el.find(".control-skip").first(),
            this.renderedOnce = !0
        }
        return o && 0 < o.length ? (this.$background_info_source_link.data("url", o),
        this.$background_info_source_link.removeClass("no-link")) : (this.$background_info_source_link.data("url", null),
        this.$background_info_source_link.addClass("no-link")),
        this.skipInProgress && (this.skipInProgress = !1),
        m.conditionalFeatures.featureEnabled("skip-bg") ? this.$controlSkip.css("display", "inline-block") : this.$controlSkip.hide(),
        this.$control_heart.css("display", "inline-block"),
        l ? this.$control_heart.addClass("active") : this.$control_heart.removeClass("active"),
        this
    },
    stick: function() {
        var e = this.activeBackground.get("_id") || this.activeBackground.get("id")
          , t = this.activeBackground.get("sticky")
          , n = "triggered-" + this.activeBackground.get("forDate") + "-" + e
          , i = localStorage.getItem(n);
        (i = i ? Number.parseInt(i) : 0) < t && (localStorage.setItem(n, i + 1),
        this.$el.addClass("sticky"),
        this.stickySession = !0)
    },
    handleHoverOn: function() {
        var e = this;
        e.hover = !0,
        setTimeout(function() {
            if (e.$(".background-info-title").css({
                "z-index": 1
            }),
            e.hover)
                try {
                    e.stickySession ? m.usage.recordStickyHover(e.activeBackground, m.usage.types.PHOTO) : m.usage.recordHover(e.activeBackground, m.usage.types.PHOTO)
                } catch (e) {}
        }, 300),
        this.clearTimeoutAdmire(),
        this.timeoutIdAdmire = setTimeout(function() {
            e.focusOnBg()
        }, this.timeAdmireDelay)
    },
    clearTimeoutAdmire: function() {
        null !== this.timeoutIdAdmire && (clearTimeout(this.timeoutIdAdmire),
        this.timeoutIdAdmire = null)
    },
    handleHoverOff: function() {
        this.clearTimeoutAdmire(),
        this.$el.removeClass("sticky"),
        this.hover = !1;
        var e = this;
        setTimeout(function() {
            e.$(".background-info-title").css({
                "z-index": ""
            }),
            e.unfocusBg()
        }, 300)
    },
    focusOnBg: function() {
        if (!$(".apps").hasClass("hide-apps") && !(this.focusing || this.unfocusing || this.focused)) {
            try {
                m.usage.recordAdmire(this.activeBackground)
            } catch (e) {}
            this.focusing = !0,
            this.focused = !0;
            var e = this;
            setTimeout(function() {
                e.focusing = !1
            }, 1e3),
            m.widgetManager.hideAppsExcept(".apps .background-info"),
            this.$bgInfo.addClass("add-shadow"),
            this.$bgOverlay.addClass("slow"),
            setTimeout(function() {
                e.$bgOverlay.removeClass("show")
            }, 5)
        }
    },
    unfocusBg: function() {
        if (this.focused) {
            this.unfocusing = !0,
            this.focused = !1;
            var e = this;
            m.widgetManager.showApps(),
            this.$bgInfo.removeClass("add-shadow"),
            this.$bgOverlay.addClass("show"),
            setTimeout(function() {
                e.$bgOverlay.removeClass("slow"),
                e.unfocusing = !1
            }, 1e3)
        }
    },
    controlHoverOn: function() {
        $(this.$el).removeClass("has-link")
    },
    controlHoverOff: function() {
        this.detailUrl && 0 < this.detailUrl.length && $(this.$el).addClass("has-link")
    },
    clickTitle: function(e) {
        e.stopPropagation(),
        e.preventDefault(),
        this.detailUrl && 0 < this.detailUrl.length && this.trackClickAndGo(this.detailUrl)
    },
    clickSource: function(e) {
        e.stopPropagation(),
        e.preventDefault();
        var t = $(e.currentTarget).data("url");
        this.trackClickAndGo(t, !0)
    },
    trackClickAndGo: function(e, t) {
        try {
            this.stickySession ? m.usage[t ? "recordStickySecondaryClick" : "recordStickyClick"](this.activeBackground, m.usage.types.PHOTO) : m.usage[t ? "recordSecondaryClick" : "recordClick"](this.activeBackground, m.usage.types.PHOTO)
        } catch (e) {}
        e && (this.clearTimeoutAdmire(),
        this.hover = !1,
        window.open(e, "_blank"))
    },
    toggleFavorite: function(e) {
        e.stopPropagation(),
        $(e.currentTarget).toggleClass("active");
        var t = $(e.currentTarget).hasClass("active");
        m.models.backgroundManager.toggleFavorite(t).catch(function() {
            $(e.currentTarget).toggleClass("active")
        }),
        m.sendEvent("Background", t ? "Favourite" : "Unfavourite")
    },
    skipFailed: function() {
        this.skipInProgress && (this.$controlSkip.removeClass("active"),
        this.skipInProgress = !1)
    },
    skipBackground: function(e) {
        var t = this;
        e.stopPropagation(),
        this.skipInProgress || (this.skipInProgress = !0,
        $(e.currentTarget).find(".icon-container").addClass("active"),
        m.models.backgroundManager.skipItem().catch(function() {
            t.skipFailed()
        }),
        m.sendEvent("Background", "Skip"))
    }
}),
m.collect.SyncedCollection = Backbone.Collection.extend({
    loadedOnce: !1,
    initialize: function(e, t) {
        this.model = t.model,
        this.version = 2,
        this.rate = 0,
        this.rateLimit = 5,
        this.sameTimeThreshold = 100,
        this.backOffTime = 3e3,
        this.lastCall = 0,
        this.name = t.name,
        localStorage.getItem("syncedCollectionVersion-" + this.name) || (this.migrate(),
        localStorage.setItem("syncedCollectionVersion-" + this.name, this.version)),
        this.offlineOnly = t.offlineOnly,
        this.readOnly = t.readOnly,
        t.onlineOnly ? (this.onlineOnly = !0,
        this.idAttribute = this.serverIdAttribute = "id") : (this.idAttribute = t.idAttribute || "csid",
        this.serverIdAttribute = t.serverIdAttribute || "id",
        this.localStorage = new Backbone.LocalStorage(t.name)),
        this.apiUrl = t.apiUrl || m.globals.urlRootApi + t.name,
        this.listenTo(this, "add", this.onAdd),
        this.listenTo(this, "change", this.onChange),
        this.listenTo(this, "reset", this.onReset),
        this.includeArchived = !1,
        this.transientProps = t.transientProps || [],
        this.localProps = t.localProps || [],
        this.sorted = t.sorted,
        this.parent = t.parent
    },
    everLoaded: function() {
        return this.offlineOnly || this.onlineOnly || !!localStorage.getItem(this.name + "-loaded-once")
    },
    setLoadedOnce: function() {
        this.parent && this.parent.set({
            loadedOnce: !0
        }, {
            silent: !0,
            ignoreRender: !0,
            ignoreSave: !0
        });
        var e = !this.loadedOnce;
        return e && this.trigger("loaded-from-server"),
        localStorage.setItem(this.name + "-loaded-once", "true"),
        this.loadedOnce = !0,
        this.loading = !1,
        e
    },
    fetch: function(e) {
        var t = this;
        ((e = e || {}).skipLocalFetch || Backbone.Collection.prototype.fetch.call(this, e),
        this.offlineOnly || e.skipServerFetch || this.isComputed) ? this.setLoadedOnce() && this.trigger("refresh") : !e.skipLocalFetch && e.reset || this.onlineOnly || this.fetchFromServer(e.skipLocalFetch ? function() {
            t.trigger("sync", t, t.models, e),
            e.success && e.success()
        }
        : null, e.skipLocalFetch ? e.error : null, e)
    },
    create: function(e, t) {
        if (this.onlineOnly)
            return Backbone.Collection.prototype.create.call(this, e, t);
        t = t || {},
        e[this.idAttribute] || (e[this.idAttribute] = uuidv4()),
        e.serverSetId || (e.serverSetId = !1);
        var n = this.add(e, t);
        return n.id = n.get(this.idAttribute),
        n.collection = this,
        n.save({}, {
            silent: !0,
            ignoreSave: !0,
            ignoreRender: !0
        }),
        t.success && t.success(n),
        n
    },
    migrate: function() {
        var i = this
          , e = localStorage.getItem(this.name);
        e && 0 !== (e = e.split(",")).length && e.map(function(e) {
            var t = i.name + "-" + e
              , n = localStorage.getItem(t);
            n && ((n = JSON.parse(n))[i.idAttribute] || (n[i.idAttribute] = n.id,
            n = JSON.stringify(n),
            localStorage.setItem(t, n)))
        })
    },
    activeItems: function() {
        return this.filter(function(e) {
            return !e.get("deleted")
        })
    },
    onReset: function(e, t) {
        if (!this.onlineOnly) {
            if (this.fetchedOnce = !0,
            this.offlineOnly)
                this.setLoadedOnce() && this.trigger("refresh");
            var n = this;
            this.models.forEach(function(t) {
                t.id = t.get(n.idAttribute),
                n.transientProps && n.transientProps.forEach(function(e) {
                    t.attributes[e] = !1
                }),
                t.get("serverSetId") || t.set("serverSetId", !1)
            }),
            this.syncToServer(function() {
                n.fetchFromServer(null, null, t)
            })
        }
    },
    findHavingAttribute: function(t) {
        return this.filter(function(e) {
            return e.has(t)
        })
    },
    hasAttribute: function(t) {
        return !!this.find(function(e) {
            return e.has(t)
        })
    },
    onAdd: function(i, e, t, n) {
        if ((t = t || {}).ignoreSave || i.get("unsyncable") || i.get("syncing") && i.get("syncing") > m.now() || i.get("serverSetId") || i.get("deleted") || this.readOnly || this.offlineOnly || this.onlineOnly)
            n && n();
        else if (this.shouldIgnoreSync && this.shouldIgnoreSync(i))
            n && n();
        else {
            var a = i.toJSON()
              , o = i.get(this.idAttribute);
            this.transientProps = this.transientProps || [],
            this.transientProps.push("syncing"),
            this.transientProps.forEach(function(e) {
                delete a[e]
            }),
            this.localProps && this.localProps.forEach(function(e) {
                delete a[e]
            }),
            i.set({
                syncing: m.now() + 1e4
            }, {
                silent: !0
            });
            var s = this;
            this.syncInProgress = !0,
            s.idAttribute !== s.serverIdAttribute && delete a[s.idAttribute];
            var r = {};
            Object.assign(r, a, t.additionalData);
            var l = i.get("changed_props") && i.get("changed_props").toString();
            r.csid = o,
            $.ajax({
                url: i.apiUrl || this.apiUrl,
                contentType: "application/json",
                type: "POST",
                beforeSend: m.utils.setMomentumAuthHeader,
                data: JSON.stringify(r)
            }).done(function(e) {
                e && e[s.serverIdAttribute] && (a = i.toJSON(),
                i.get("changed_props") && i.get("changed_props").toString() === l && (a.changed_props = null),
                a.serverSetId = !0,
                a.syncing = 0,
                delete a[s.idAttribute],
                a[s.serverIdAttribute] = e[s.serverIdAttribute],
                (i = s.getModel(i, o)) && (i.save(a, {
                    silent: !0
                }),
                i.saveHandler && i.saveHandler(e))),
                t.serverSuccess && t.serverSuccess(i)
            }).fail(function(e, t, n) {
                if ("Bad Request" === n) {
                    if (!(i = s.getModel(i, o)))
                        return;
                    i.id = i.get(i.idAttribute),
                    i.destroy({
                        silent: !0
                    })
                }
            }).always(function() {
                (i = s.getModel(i, o)) && i.set({
                    syncing: 0
                }, {
                    silent: !0
                }),
                s.syncInProgress = !1,
                s.missedSync && (s.missedSync = !1,
                s.syncToServer()),
                n && n()
            })
        }
    },
    getModel: function(e, t) {
        var n = {};
        n[this.idAttribute] = t;
        var i = this.findWhere(n);
        return !i && e && e.mainContent && (i = this.findWhere(e.mainContent())),
        i
    },
    onChange: function(e, t) {
        if (!(this.readOnly || this.offlineOnly || this.onlineOnly)) {
            var n = this;
            if (!(t = t || {}).ignoreSave) {
                var i = e.changedAttributes();
                if (i && !i[this.idAttribute] && !t.createdNow) {
                    var a, o = null, s = !1;
                    for (a in this.transientProps && this.transientProps.forEach(function(e) {
                        delete i[e]
                    }),
                    this.localProps && this.localProps.forEach(function(e) {
                        delete i[e]
                    }),
                    i)
                        i.hasOwnProperty(a) && "changed_props" !== a && (o = o || (e.get("changed_props") || []),
                        _.contains(o, a) || (a !== n.idAttribute && o.push(a),
                        s = !0));
                    var r = !1;
                    if (!e.get(this.serverIdAttribute) && Object.keys(i).length) {
                        if (!(e.get("syncing") && e.get("syncing") > m.now()))
                            return void this.onAdd(e, this, t);
                        r = !0,
                        setTimeout(function() {
                            n.syncToServer(t.serverSuccess)
                        }, 1e3)
                    }
                    s && o && 0 < o.length && e.save({
                        changed_props: o
                    }, {
                        silent: !0,
                        ignoreSave: !0,
                        ignoreRender: !0,
                        success: function() {
                            t.postponeSync || r || setTimeout(function() {
                                n.syncToServer(t.serverSuccess)
                            }, 50)
                        }
                    })
                }
            }
        }
    },
    syncToServer: function(r) {
        if (this.readOnly || this.offlineOnly || this.onlineOnly)
            r && r();
        else if (this.syncInProgress)
            this.missedSync = !0;
        else {
            var l = this;
            this.syncInProgress = !0;
            var e = 0
              , t = this.findHavingAttribute("changed_props")
              , n = this.where({
                serverSetId: !1
            });
            if (n ? Array.isArray(n) || (n = [n]) : n = [],
            n.forEach(function(e) {
                l.onAdd(e, null, null, function() {
                    c()
                })
            }),
            t && 0 !== t.length) {
                var d = !1;
                t.map(function(n) {
                    if (!d && n.get(l.serverIdAttribute)) {
                        var i = n.get("changed_props")
                          , a = i.toString();
                        if (l.transientProps && l.transientProps.forEach(function(e) {
                            var t = i.indexOf(e);
                            0 <= t && i.splice(t, 1)
                        }),
                        i && 0 !== i.length) {
                            n.syncing = !0;
                            var t = {};
                            if (_.each(i, function(e) {
                                "changed_props" !== e && e !== l.idAttribute && (t[e] = n.get(e))
                            }),
                            !l.isWithinRateLimit())
                                return setTimeout(function() {
                                    l.syncToServer(r)
                                }, l.backOffTime),
                                l.syncInProgress = !1,
                                void (d = !0);
                            n.getSupplementaryData && Object.assign(t, n.getSupplementaryData());
                            var o = n.get(l.serverIdAttribute)
                              , e = (n.apiUrl || l.apiUrl) + "/" + encodeURIComponent(o)
                              , s = n.get(l.idAttribute);
                            $.ajax({
                                url: e,
                                contentType: "application/json",
                                type: "PATCH",
                                beforeSend: m.utils.setMomentumAuthHeader,
                                data: JSON.stringify(t)
                            }).done(function(e, t) {
                                ((n = l.getModel(n, s)) && e && e.success || "success" === t) && (n.collection && n.get("deleted") ? n.destroy({
                                    silent: !0
                                }) : n.get("changed_props") && n.get("changed_props").toString() === a && n.collection && n.save({
                                    changed_props: null
                                }, {
                                    silent: !0
                                }),
                                "T" === o[0] && l.fetch({
                                    reset: !0,
                                    skipLocalFetch: !0
                                }))
                            }).fail(function(e, t) {}).always(function() {
                                c()
                            })
                        } else
                            c()
                    }
                })
            } else
                0 === n.length && (this.syncInProgress = !1,
                r && r())
        }
        function c() {
            ++e === t.length + n.length && (l.syncInProgress = !1,
            e = 0,
            l.missedSync && (l.missedSync = !1,
            l.syncToServer()),
            r && r())
        }
    },
    isWithinRateLimit: function() {
        var e = m.now();
        if (e < this.lastCall + this.sameTimeThreshold) {
            if (this.lastCall = e,
            this.rate++,
            this.rate > this.rateLimit)
                return !1
        } else
            this.rate = 0;
        return this.lastCall = e,
        !0
    },
    fetchFromServer: function(e, t, o) {
        if (o = o || {},
        this.offlineOnly || o.skipServerFetch)
            e && e();
        else {
            var n = o.data
              , s = this;
            $.ajax({
                url: this.apiUrl + (this.includeArchived ? "?includeArchived=true" : ""),
                contentType: "application/json",
                type: "GET",
                data: n,
                beforeSend: m.utils.setMomentumAuthHeader
            }).done(function(e) {
                var i = !1;
                if (e) {
                    if (!Array.isArray(e))
                        for (var t in e)
                            Array.isArray(e[t]) && (e = e[t]);
                    if (s.readOnly)
                        return s.set(e, {
                            silent: !0,
                            remove: !0
                        }),
                        s.trigger("refresh"),
                        void s.setLoadedOnce();
                    var a = [];
                    _.each(e, function(e) {
                        if (e) {
                            a.push(e[s.serverIdAttribute]);
                            var t = {};
                            t[s.serverIdAttribute] = e[s.serverIdAttribute] + "";
                            var n = s.findWhere(t);
                            e.serverSetId = !0,
                            n ? (e[s.idAttribute] || (e[s.idAttribute] = n.get(s.idAttribute)),
                            n.get("modifiedServer") && e.modifiedServer && !(new Date(n.get("modifiedServer")).getTime() < new Date(e.modifiedServer).getTime()) || n.save(e, {
                                ignoreSave: !0,
                                ignoreRender: !0
                            })) : (e[s.idAttribute] || (e[s.idAttribute] = e[s.serverIdAttribute]),
                            s.create(e, {
                                ignoreSave: !0,
                                ignoreRender: !0
                            }),
                            e.archived || (i = !0))
                        }
                    }),
                    s.trigger("change", null, {
                        ignoreSave: !0
                    });
                    var n = s.models.slice();
                    !1 !== o.remove && n.forEach(function(e) {
                        if (e.get("serverSetId") && a.indexOf(e.get(s.serverIdAttribute)) < 0 && !e.get("isDummy") && !e.get("unsyncable")) {
                            var t = {};
                            t[s.idAttribute] = e.get([s.idAttribute]) + "";
                            var n = s.findWhere(t);
                            n.id = n.get(n.idAttribute),
                            n.destroy({
                                silent: !0
                            }),
                            i = !0
                        }
                    }),
                    (i = s.setLoadedOnce() || i) && s.trigger("refresh"),
                    s.trigger("server-sync"),
                    s.handleOrdering && s.handleOrdering(e)
                }
            }).fail(function() {
                t && t()
            }).always(function() {
                e && e()
            })
        }
    }
}),
m.models.GenericMetric = Backbone.Model.extend({
    defaults: {
        id: null,
        label: "",
        value: "",
        link: null
    },
    initialize: function() {
        this.listenTo(this, "change:metric", this.metricChanged),
        this.loadData()
    },
    loadData: function() {
        var c = this;
        this.set("label", "");
        var e = m.globals.urlRootIntegration + "services/random";
        try {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                beforeSend: m.utils.setMomentumAuthHeader,
                url: e
            }).done(function(e, t, n) {
                if (e.metricInfo)
                    c.set("id", e.metricInfo.metricId),
                    c.set("value", e.metricInfo.metricValue),
                    c.set("label", e.metricInfo.metricLabel),
                    e.metricInfo.metricLink ? c.set("link", e.metricInfo.metricLink) : c.set("link", null);
                else if (e.status && "authRequired" == e.status && e.authorizationUrl && c.authAttempts < 2) {
                    c.authAttempts++;
                    var i = e.winWidth ? e.winWidth : 600
                      , a = e.winHeight ? e.winHeight : 510
                      , o = e.windowFeatures ? e.windowFeatures : "titlebar,resizable,toolbar,status"
                      , s = window.screen.width / 2 - i / 2
                      , r = window.screen.height / 2 - a / 2
                      , l = window.open(e.authorizationUrl, "MomentumAuthWindow", o + ",left=" + s + ",top=" + r + ",width=" + i + ",height=" + a)
                      , d = setInterval(function() {
                        l.closed && (clearInterval(d),
                        c.metricChanged())
                    }, 250)
                }
            }).fail(function(e, t) {
                console.log("failed")
            })
        } catch (e) {}
    },
    clickMetric: function() {
        this.get("link")
    }
}),
m.views.GenericMetric = Backbone.View.extend({
    attributes: {
        id: "generic-stats",
        class: "generic-stats metric metric-item app-container app-dash add-shadow"
    },
    template: m.templates.metric.widget,
    events: {
        click: "clickMetric",
        mouseenter: "mouseEnter",
        mouseleave: "mouseLeave"
    },
    initialize: function() {
        this.renderedOnce = !1,
        this.render(),
        this.listenTo(this.model, "change:value", this.render),
        this.listenTo(this.model, "change:label", this.render)
    },
    render: function() {
        var e = this.model.get("label")
          , t = this.model.get("value");
        if (t) {
            var n = {
                statvalue: t,
                statlabel: e
            };
            if (this.renderedOnce)
                this.$el.html(this.template(n)),
                this.$time = this.$(".time"),
                this.$format = this.$(".format");
            else {
                var i = (this.options.order || "append") + "To";
                this.$el[i]("." + this.options.region).mFadeIn().html(this.template(n)),
                this.$time = this.$(".time"),
                this.$format = this.$(".format"),
                this.renderedOnce = !0
            }
        }
    },
    clickMetric: function(e) {
        this.model.clickMetric()
    }
}),
m.models.Quote = Backbone.Model.extend({
    idAttribute: "forDate"
}),
m.models.TeamInfo = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("team-info"),
    defaults: {
        team: null,
        id: 1
    },
    initialize: function() {
        this.fetch();
        var e = this;
        m.listenToOnce(m.models.customization, "initialized", function() {
            e.showLogo()
        }),
        this.listenTo(this, "change", this.showLogo)
    },
    showLogo: function(e) {
        var t = (e = e || this).get("team");
        t && m.conditionalFeatures.featureEnabled("team") && (m.views.teamLogo ? m.views.teamLogo.render() : m.views.teamLogo = new m.views.TeamLogo({
            region: "top-left",
            team: t
        }))
    }
}),
m.collect.Quotes = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("momentum-quote"),
    model: m.models.Quote,
    getActiveItem: function() {
        if (0 < this.length) {
            var e = getActiveDateString();
            return this.get(e)
        }
    }
}),
m.models.QuoteManager = m.models.FeedManager.extend({
    initialize: function(e, t) {
        m.models.FeedManager.prototype.initialize.call(this, m.models.Quote, "quote")
    }
}),
m.views.Quote = Backbone.View.extend({
    attributes: {
        class: "app-container app-dash quote",
        "data-test": "quote"
    },
    template: m.templates.quote.quote,
    events: {
        click: "handleClick",
        "mouseenter .control": "controlHoverOn",
        "mouseleave .control": "controlHoverOff",
        mouseenter: "hoverOn",
        mouseleave: "hoverOff",
        "click .control-twitter": "shareTwitter",
        "click .control-heart": "toggleFavorite",
        "click .control-skip": "skipQuote"
    },
    currentlyActiveQuote: null,
    initialize: function() {
        this.renderedOnce = !1;
        var o = this;
        this.listenTo(m, "newDay", this.handleNewDay, this),
        this.listenTo(this.collection, "reset", this.collectionReady),
        this.listenTo(m.models.customization, "change:quoteVisible", this.visibleChanged),
        $(window).on("resize", function() {
            if (o.$quoteBody) {
                var e = o.$quoteBody.css("lineHeight")
                  , t = parseInt(e.substring(0, e.length - 2))
                  , n = m.models.quoteManager.getActiveItem();
                if (n) {
                    var i = o.$quoteBody.clone();
                    i.html("&ldquo;" + n.get("body") + "&rdquo;"),
                    i.css("position", "absolute"),
                    i.css("width", "100%"),
                    i.css("top", "0"),
                    i.css("left", "0"),
                    i.css("margin", "0"),
                    i.css("padding", "0"),
                    i.appendTo(o.$quoteBody);
                    var a = i.height();
                    (a < 1.75 * t || 2.75 * t < a) && o.$quoteBody.html("&ldquo;" + m.models.quoteManager.getActiveItem().get("body") + "&rdquo;"),
                    o.render(),
                    i.remove()
                }
            }
        })
    },
    handleNewDay: function() {
        var e = this;
        e.intervalId = setInterval(function() {
            0 < e.collection.length && (e.render(),
            clearInterval(e.intervalId))
        }, 50)
    },
    parentReady: function(e) {
        if (this.isParentReady = !0,
        this.isCollectionReady || e) {
            this.render();
            try {
                m.usage.itemLoaded(m.models.quoteManager.getActiveItem(), m.usage.types.QUOTE)
            } catch (e) {}
        }
    },
    collectionReady: function() {
        if (m.trigger("quote:downloaded"),
        this.isCollectionReady = !0,
        this.isParentReady) {
            this.render();
            try {
                m.usage.itemLoaded(m.models.quoteManager.getActiveItem(), m.usage.types.QUOTE)
            } catch (e) {}
        }
    },
    visibleChanged: function(e) {
        m.models.customization.get("quoteVisible") ? this.renderedOnce ? this.$el.mFadeIn() : this.render() : this.$el.mFadeOut()
    },
    render: function() {
        if (0 !== this.collection.length) {
            var e = m.models.quoteManager.getActiveItem();
            if (e) {
                var t = !1;
                if (this.currentlyActiveQuote && this.currentlyActiveQuote.get("_id") == e.get("_id")) {
                    var n = this.currentlyActiveQuote;
                    n.get("body") == e.get("body") && n.get("source") == e.get("source") && n.get("twitter") == e.get("twitter") && n.get("twitterIntentUrl") == e.get("twitterIntentUrl") || (this.currentlyActiveQuote = e,
                    t = !0)
                } else
                    this.currentlyActiveQuote = e,
                    t = !0;
                var r = this
                  , l = e.get("body")
                  , i = e.get("source")
                  , a = e.get("detail_url")
                  , o = e.get("twitter")
                  , s = e.get("twitterIntentUrl")
                  , d = !1
                  , c = "";
                if (e.get("is_favorite") && (d = !0,
                c = "active"),
                !s) {
                    var u = "";
                    u = o ? '"' + l + '" —@' + o : '"' + l + '" —' + i,
                    s = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(u) + "&via=momentumdash&related=momentumdash,levibucsis,jaywaterman"
                }
                var g = 0;
                if (t && this.renderedOnce && (g = 650),
                this.renderedOnce)
                    t && (this.$el.addClass("u--no-opacity"),
                    setTimeout(function() {
                        r.$controlSkip.find(".icon-container").removeClass("active"),
                        r.$quoteBody.html("&ldquo;" + l + "&rdquo;"),
                        r.$quoteSource.html(i),
                        r.$control_twitter.data("url", s),
                        r.$el.removeClass("u--no-opacity")
                    }, 500));
                else {
                    var h = {
                        body: l,
                        source: i,
                        twitterIntentUrl: s,
                        fav_class: c
                    }
                      , p = (this.options.order || "append") + "To";
                    this.$el[p]("." + r.options.region).html(r.template(h)),
                    m.appsLoaded && (this.$el.mFadeIn(),
                    m.widgetManager.loadImages()),
                    this.$quoteBody = this.$(".quote-body-text").first(),
                    this.$quoteSource = this.$el.find(".quote-source-text").first(),
                    this.$control_heart = this.$el.find(".control-heart").first(),
                    this.$controlSkip = this.$el.find(".control-skip").first(),
                    this.$control_twitter = this.$el.find(".control-twitter").first(),
                    this.renderedOnce = !0
                }
                a && 0 < a.length ? (this.detail_url = a,
                this.$el.addClass("has-link")) : (this.detail_url = null,
                this.$el.removeClass("has-link")),
                m.conditionalFeatures.featureEnabled("skip-qt") ? this.$el.find(".control-skip").css("display", "inline-block") : this.$el.find(".control-skip").hide(),
                this.$control_heart.css("display", "inline-block"),
                d ? this.$control_heart.addClass("active") : this.$control_heart.removeClass("active"),
                m.appsReady ? f() : this.listenTo(m, "appsReady", f)
            } else
                m.trigger("sync:downloadIfNeeded")
        } else
            m.trigger("sync:downloadIfNeeded");
        function f() {
            setTimeout(function() {
                var e = r.$quoteBody.css("lineHeight")
                  , t = parseInt(e.substring(0, e.length - 2))
                  , n = r.$quoteBody.height()
                  , i = !1;
                if (1.75 * t < n && n < 2.75 * t) {
                    var a, o = "", s = l.split(" ");
                    for (a = 0; a < s.length; a++)
                        o += s[a],
                        !i && o.length > (l.length + 5) / 2 ? (o += "<br>",
                        i = !0) : a != s.length - 1 && (o += " ");
                    r.$quoteBody.html("&ldquo;" + o + "&rdquo;"),
                    2.75 * t < (n = r.$quoteBody.height()) && r.$quoteBody.html("&ldquo;" + l + "&rdquo;")
                }
            }, g)
        }
    },
    handleClick: function(e) {
        this.detail_url && 0 < this.detail_url.length && (e.preventDefault(),
        e.stopPropagation(),
        window.open(this.detail_url, "_blank"))
    },
    hoverOn: function() {
        try {
            var e = this;
            e.hover = !0,
            setTimeout(function() {
                e.hover && m.usage.recordHover(m.models.quoteManager.getActiveItem(), m.usage.types.QUOTE)
            }, 500)
        } catch (e) {}
    },
    hoverOff: function() {
        this.hover = !1
    },
    controlHoverOn: function() {
        $(this.$el).removeClass("has-link")
    },
    controlHoverOff: function() {
        this.detail_url && 0 < this.detail_url.length && $(this.$el).addClass("has-link")
    },
    shareTwitter: function(e) {
        e.stopPropagation();
        var t = screen.width / 2 - 272.5
          , n = screen.height / 2 - 210;
        window.open($(e.currentTarget).data("url"), "share", "left=" + t + ",top=" + n + ",width=545,height=420,resizeable=0")
    },
    toggleFavorite: function(e) {
        e.stopPropagation(),
        $(e.currentTarget).toggleClass("active");
        var t = $(e.currentTarget).hasClass("active");
        m.models.quoteManager.toggleFavorite(t).catch(function() {
            $(e.currentTarget).toggleClass("active")
        }),
        m.sendEvent("Quote", t ? "Favourite" : "Unfavourite")
    },
    skipQuote: function(e) {
        e.stopPropagation(),
        this.$controlSkip.hasClass("active") || ($(e.currentTarget).find(".icon-container").addClass("active"),
        setTimeout(function() {
            m.models.quoteManager.skipItem().catch(function() {
                $skipCOntainer.removeClass("active")
            }),
            m.sendEvent("Quote", "Skip")
        }, 300))
    }
}),
m.bootstrappers.InitializeQuote = function(e, t) {
    e.models.quoteManager = new e.models.QuoteManager
}
,
m.bootstrappers.RenderQuote = function(t, e, n) {
    t.conditionalFeatures.checkPreferenceForRender("quoteVisible", function() {
        t.models.customization.get("quoteVisible") && (t.views.quote = new t.views.Quote({
            collection: t.collect.quotes,
            model: t.models.date,
            region: "bottom"
        }),
        t.models.quoteManager.firstFetch(),
        t.views.quote.parentReady(n),
        t.widgets.push(t.views.quote),
        t.stopListening(t.models.customization, "change:quoteVisible"))
    }, function(e) {
        t.listenTo(t.models.customization, "change:quoteVisible", e)
    })
}
,
m.models.Message = Backbone.Model.extend({
    defaults: function() {
        return {
            title: null,
            message: "",
            priority: 5,
            views: 0,
            viewLimit: 3,
            deleted: !1,
            createdDate: m.now(),
            visible: !1,
            loginOnClick: !1,
            fromServer: !1
        }
    },
    showMessage: function(e, t, n, i) {
        m.commandManager.execute("notification.show.enhanced", {
            title: e,
            message: t,
            views: 0,
            viewLimit: n,
            visible: !0,
            loginOnClick: i
        })
    },
    showMessageNow: function(e, t, n, i) {
        m.commandManager.execute("notification.show.enhanced", {
            title: e,
            message: t,
            views: 0,
            viewLimit: n,
            visible: !0,
            loginOnClick: i
        })
    },
    isTeamNotification: function() {
        return "team" === this.get("notification_type")
    },
    dismissMessage: function() {
        m.commandManager.execute("notification.dismiss")
    },
    save: function(e, t) {
        if (t = t || {},
        (e = e || _.clone(this.attributes)).hasOwnProperty("dismissed") && e.dismissed && (e.deleted = !0),
        !t.download_save && this.get("fromServer"))
            try {
                var n = null;
                for (prop in e)
                    e.hasOwnProperty(prop) && "changed_props" != prop && "sync_success" != prop && (n = n || (this.get("changed_props") || []),
                    _.contains(n, prop) || n.push(prop));
                n && (e.changed_props = n,
                e.sync_success = !1,
                t.silent = !1)
            } catch (e) {}
        return Backbone.Model.prototype.save.call(this, e, t)
    }
}),
m.collect.Messages = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("momentum-messages"),
    model: m.models.Message,
    cleaned: !1,
    initialize: function() {
        this.listenTo(this, "reset", this.cleanupMessagesIfRequired)
    },
    cleanupMessagesIfRequired: function() {
        if (!this.cleaned) {
            this.cleaned = !0;
            var n = [];
            this.each(function(e) {
                if (e.get("deleted") || e.get("expiry") && !(Date.parse(e.get("expiry")) > m.now()))
                    e.get("fromServer") && e.get("sync_success") && !e.get("changed_props") && n.push(e);
                else {
                    var t = e.get("filter");
                    t && m.conditionalFeatures.featureEnabled(t) ? e.save({
                        deleted: !0,
                        filtered: !0
                    }) : 5 == e.get("priority") ? e.get("fromServer") ? e.save({
                        deleted: !0
                    }) : n.push(e) : e.get("visible") || e.save({
                        deleted: !0
                    })
                }
            }),
            0 < n.length && _.each(n, function(e) {
                e.destroy()
            })
        }
    }
}),
m.models.NotificationSync = Backbone.Model.extend({
    baseUrl: m.globals.urlRootApi + "notifications",
    initialize: function(e) {
        this.collection = e.collection,
        this.listenTo(this.collection, "change:changed_props", this.onChange),
        this.listenTo(this.collection, "reset", this.onReset)
    },
    findHavingAttribute: function(e, t) {
        return e.filter(function(e) {
            return e.has(t)
        })
    },
    hasAttribute: function(e, t) {
        return !!e.find(function(e) {
            return e.has(t)
        })
    },
    onReset: function() {
        this.syncToServer()
    },
    onChange: function(e, t) {
        if (!t.ignoreSave) {
            var n = e.changedAttributes();
            n && n.hasOwnProperty("changed_props") && n.changed_props && this.syncToServer()
        }
    },
    syncToServer: function(e) {
        var o = this
          , t = this.findHavingAttribute(this.collection, "changed_props");
        t && 0 != t.length ? nimble.each(t, function(n, e) {
            if (n.get("fromServer")) {
                var t = n.get("changed_props");
                if (t && 0 != t.length) {
                    var i = {};
                    if (_.each(t, function(e) {
                        "changed_props" != e && "sync_success" != e && (i[e] = n.get(e))
                    }),
                    1 == Object.keys(i).length && i.hasOwnProperty("views"))
                        e();
                    else {
                        var a = o.baseUrl + "/" + encodeURIComponent(n.id);
                        $.ajax({
                            url: a,
                            contentType: "application/json",
                            type: "PATCH",
                            beforeSend: m.utils.setMomentumAuthHeader,
                            data: JSON.stringify(i)
                        }).done(function(e) {
                            e && e.success && n.save({
                                changed_props: null,
                                sync_success: !0
                            }, {
                                silent: !0
                            })
                        }).fail(function(e, t) {
                            n.save({
                                sync_success: !1
                            }, {
                                silent: !0
                            })
                        }).always(function() {
                            e()
                        })
                    }
                } else
                    e()
            }
        }, function() {
            e && e()
        }) : e && e()
    }
}),
m.models.NotificationManager = Backbone.Model.extend({
    backgroundLoaded: !1,
    _notificationView: null,
    settingsVisible: !1,
    initialize: function() {
        this.displayed = [],
        this.collection = new m.collect.Messages,
        m.models.message = new m.models.Message,
        this.listenTo(this.collection, "add reset", this.displayPendingMessages),
        this.listenToOnce(m, "background:loadSuccessful", this.onBackgroundLoaded),
        this.listenTo(m, "settings:hidden", this.settingsHidden),
        this.listenTo(m, "settings:visible", this.onSettingsVisible),
        this.listenTo(m, "notifications:timestamp", this.onAvailableTimestamp),
        this.listenTo(m, "appsReady", this.displayPendingMessages),
        m.conditionalFeatures.featureEnabled("notifySyncOff") || (this.notifySync = new m.models.NotificationSync({
            collection: this.collection
        })),
        this.collection.fetch({
            reset: !0
        })
    },
    onBackgroundLoaded: function() {
        this.backgroundLoaded || (this.backgroundLoaded = !0,
        this.displayPendingMessages(),
        m.commandManager.execute("clean.localstorage"))
    },
    displayPendingMessages: function() {
        var n = this;
        if (this.collection.cleanupMessagesIfRequired(),
        m.appsReady && !this.settingsVisible) {
            var e = this.notificationView();
            if (e && !e.notifying) {
                var t = _.chain(this.collection.where({
                    deleted: !1,
                    visible: !0
                })).reject(function(e) {
                    var t = e.get("filter");
                    return !(!t || !m.conditionalFeatures.featureEnabled(t)) || (!!(e.get("expiry") && Date.parse(e.get("expiry")) < m.now()) || _.contains(n.displayed, e))
                }).sortBy("priority").sortBy("createdDate").value();
                if (t && 0 !== t.length) {
                    var i = t[0];
                    this.displayed.push(i),
                    e.showMessage(i)
                }
            }
        }
    },
    onAvailableTimestamp: function(e) {
        if (e) {
            var t = localStorage.getItem("ts_notifications");
            (!t || t < e) && this.downloadNotifications()
        }
    },
    downloadNotifications: function() {
        var t = this
          , e = localStorage.getItem("ts_notifications")
          , n = m.globals.urlRootApi + "notifications";
        e && (e = parseInt(e, 10),
        Number.isInteger(e) && (n = n + "?ts=" + e));
        try {
            $.ajax({
                type: "GET",
                contentType: "application/json",
                beforeSend: setMomentumAuthHeader,
                url: n
            }).done(function(e) {
                e && e.timestamp && (e.notifications && 0 < e.notifications.length && (t.collection.reset(e.notifications),
                t.collection.invoke("save", null, {
                    download_save: !0
                })),
                localStorage.setItem("ts_notifications", e.timestamp))
            }).fail(function(e, t) {})
        } catch (e) {}
    },
    showMessage: function(e, t, n, i) {
        var a = {
            title: e,
            message: t,
            visible: !0
        };
        void 0 !== n && (a.viewLimit = n),
        void 0 !== i && (a.loginOnClick = i),
        this.collection.create(a)
    },
    showMessageEnhanced: function(e, t, n) {
        e.hasOwnProperty("visible") || (e.visible = !0);
        var i = {};
        t && (i.success = t),
        n && (i.silent = !0),
        this.collection.create(e, i)
    },
    dismissMessage: function() {
        this._notificationView && this.notificationView().hideNotification()
    },
    settingsHidden: function() {
        this.settingsVisible = !1,
        this.displayPendingMessages()
    },
    onSettingsVisible: function() {
        this.settingsVisible = !0
    },
    notificationView: function() {
        return this._notificationView || (this._notificationView = new m.views.Notification),
        this._notificationView
    }
}),
m.views.Notification = Backbone.View.extend({
    attributes: {
        class: "notification"
    },
    template: m.templates.notification.notification,
    notifying: !1,
    timeoutId: null,
    events: {
        "click .notification-hide": "hideNotificationClicked",
        "click .notification-button": "ctaButtonClicked",
        "click .secondary-text": "secondaryTextClicked"
    },
    initialize: function(e) {
        this.renderedOnce = !1,
        this.listenTo(m, "settings:visible", this.settingsVisible)
    },
    showMessage: function(e) {
        this.model && this.model.cid == e.cid || (this.model = e,
        this.render())
    },
    render: function() {
        var e = this;
        this.notifying = !0,
        this.incrementViews();
        var t = this.model.isTeamNotification()
          , n = this.model.toJSON();
        n.nippleClass = t ? "nipple-top-left" : "nipple-bottom-left",
        this.$el.html(this.template(n)),
        this.$el.toggleClass("no-title", null === this.model.get("title"));
        var i = t ? $("#team-logo") : $("#settings");
        if (i.length) {
            i[t ? "append" : "prepend"](this.$el),
            this.showNotification(),
            this.$message = this.$(".notification-description"),
            this.model.has("message_html") && this.$message.html(this.model.get("message_html"));
            var a = this.model.get("display_time");
            !a || a <= 0 || (this.timeoutId = setTimeout(function() {
                e.hideNotification()
            }, a))
        }
    },
    incrementViews: function() {
        var e = this.model.get("views") + 1;
        this.setModelCollection(),
        e >= this.model.get("viewLimit") ? this.model.save({
            visible: !1,
            views: e
        }) : this.model.save({
            views: e
        }, {
            silent: !0
        })
    },
    settingsVisible: function() {
        this.hideNotification(!0, !0)
    },
    showNotification: function() {
        this.$el.addClass("show").outerWidth(),
        this.$el.addClass("show-fade-in")
    },
    hideNotification: function(t, e) {
        clearTimeout(this.timeoutId);
        var n = this;
        this.$el.hasClass("show") && this.$el.removeClass("show-fade-in").one("transitionend webkitTransitionEnd", function(e) {
            n.$el.hasClass("show-fade-in") || (n.$el.removeClass("show"),
            t || m.models.notificationManager.displayPendingMessages())
        }),
        this.notifying && (this.notifying = !1)
    },
    hideNotificationClicked: function(e) {
        e.stopPropagation(),
        this.hideNotification(),
        this.setModelCollection(),
        this.model.save({
            dismissed: !0,
            visible: !1
        }, {
            silent: !0
        })
    },
    ctaButtonClicked: function(e) {
        e.stopPropagation(),
        this.hideNotification(!0, !0),
        this.notifying = !1;
        var t = this.model.get("cta_cmd")
          , n = this.model.get("cta_options");
        t && 0 < t.length && (this.setModelCollection(),
        this.model.save({
            ctaClicked: m.now(),
            visible: !1
        }, {
            silent: !0
        }),
        m.commandManager.execute(t, null, n))
    },
    secondaryTextClicked: function(e) {
        e.stopPropagation(),
        this.model.get("secondary_hide") && (this.hideNotification(!0, !0),
        this.notifying = !1);
        var t = this.model.get("secondary_cmd")
          , n = this.model.get("secondary_options");
        t && 0 < t.length && (this.setModelCollection(),
        this.model.save({
            secondaryClicked: m.now()
        }, {
            silent: !0
        }),
        m.commandManager.execute(t, null, n))
    },
    setModelCollection: function() {
        this.model.collection || (this.model.collection = m.models.notificationManager.collection)
    }
}),
m.commands.NotificationShow = m.models.Command.extend({
    defaults: {
        id: "notification.show"
    },
    execute: function(e, t) {
        setTimeout(function() {
            m.models.notificationManager && m.models.notificationManager.showMessage(e, t)
        }, 10)
    }
}),
m.commands.NotificationShowEnhanced = m.models.Command.extend({
    defaults: {
        id: "notification.show.enhanced"
    },
    execute: function(e, t, n) {
        setTimeout(function() {
            m.models.notificationManager && m.models.notificationManager.showMessageEnhanced(e, t, n)
        }, 10)
    }
}),
m.commands.NotificationDismiss = m.models.Command.extend({
    defaults: {
        id: "notification.dismiss"
    },
    execute: function() {
        setTimeout(function() {
            m.models.notificationManager && m.models.notificationManager.dismissMessage()
        }, 5)
    }
}),
m.models.PersistentSettings = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage("momentum-customization"),
    defaultForTeamIfNotSet: {
        themeColour: "light"
    },
    defaultIfNotSet: {
        mantraVisible: !1,
        quoteVisible: !0,
        bookmarksVisible: !1,
        linksVisible: !0,
        focusVisible: !0,
        todoVisible: !0,
        metricVisible: !0,
        weatherVisible: !0,
        searchVisible: !0,
        requestSync: !1,
        keepTodoState: !0,
        countdownVisible: !0,
        notesVisible: !0,
        percentClock: !1,
        multiClockVisible: !0,
        linksKeepOpen: !1,
        themeColour: "dark",
        autoFocus: !0,
        balanceModeStr: "",
        mantraSettingsStr: "",
        bookmarksSettingsStr: "",
        weatherDetail: !0,
        weatherHourly: !0,
        searchProvider: "google",
        appRegionOverrides: {},
        hour12clock: "M" === (new Date).toLocaleString(window.navigator.userLanguage || window.navigator.language || "en-US").substr(-1)
    },
    initialize: function() {
        var t = this;
        t.fetching = !1,
        window.addEventListener("storage", function(e) {
            e.key && 0 === e.key.indexOf("momentum-customization-1") && (t.fetching = !0,
            t.fetch({
                success: function() {
                    t.fetching = !1
                },
                error: function() {
                    t.fetching = !1
                },
                reset: !0,
                fromStorage: !0
            }))
        })
    },
    get: function(e) {
        var t = this.constructor.__super__.get.apply(this, arguments);
        if (null == t) {
            var n = this.defaultIfNotSet.hasOwnProperty(e)
              , i = m.conditionalFeatures.featureEnabled("team") && this.defaultForTeamIfNotSet.hasOwnProperty(e);
            if (!n && !i)
                return t;
            i && (t = this.defaultForTeamIfNotSet[e]instanceof Function ? this.defaultForTeamIfNotSet[e]() : this.defaultForTeamIfNotSet[e]),
            null == t && n && (t = this.defaultIfNotSet[e]instanceof Function ? this.defaultIfNotSet[e]() : this.defaultIfNotSet[e])
        }
        return t
    },
    save: function() {
        for (var e = !1, t = 0; t++; ) {
            var n = arguments[t];
            n && n.fromStorage && (e = !0)
        }
        e || Backbone.Model.prototype.save.apply(this, arguments)
    }
}),
m.models.MantraManager = m.models.FeedManager.extend({
    activatingFirstMantra: !1,
    dateInitialized: null,
    defaults: {
        id: 0,
        momo: !0,
        custom: !1
    },
    durationGreetingFirstTabOfDay: 4e3,
    frequencyData: {
        durationGreeting: 6e4,
        durationMantra: 3e4,
        tabFrequency: 2
    },
    frequencyLevels: [{
        level: 0,
        label: "Rarely",
        durationGreeting: 18e4,
        durationMantra: 2e4,
        tabFrequency: 8
    }, {
        level: 2,
        label: "Often",
        durationGreeting: 45e3,
        durationMantra: 3e4,
        tabFrequency: 2
    }, {
        level: 3,
        label: "Always",
        durationGreeting: null,
        durationMantra: null,
        tabFrequency: null
    }],
    frequencyVariation: .25,
    keyHasSeenGreetingPrefix: "momentum-mantra-has-seen-greeting-",
    keyTabCountLegacy: "momentum-mantra-tab-count",
    keyTabCountPrefix: "momentum-mantra-tab-count-",
    showNameFrequency: .3,
    stringsThatPrecludeNames: [" I ", " ME ", " MINE ", " MY ", ". ", ", ", "; "],
    initialize: function() {
        m.models.FeedManager.prototype.initialize.call(this, m.models.Mantra, "mantra"),
        this.firstFetch(),
        this.settings = m.models.mantraSettings = new m.models.MantraSettings({
            id: 1
        }),
        this.initializeMantraDailyData(),
        this.randomizeFrequency(),
        this.listenTo(this.itemCollection, "reset", this.onItemCollectionReset),
        this.listenTo(this, "mantra:deleted", this.handleMantraDelete),
        this.listenTo(m, "readyForWidgets", this.onSuccessfulLogin),
        this.listenTo(m, "newDay", this.onNewDayMantras),
        this.listenTo(m.models.mantraSettings, "change:frequency", this.onChangeFrequency),
        this.listenTo(m.models.customization, "change:mantraVisible", this.onChangeMantraVisible)
    },
    onItemCollectionReset: function() {
        if (m.views.greeting && m.views.greeting.isMantraShowing()) {
            var e = this.itemCollection.get(getActiveDateString()).get("_id") === m.views.greeting.mantraActiveModel.get("_id");
            (!e || e && m.views.greeting.waitingForMantra) && this.trigger("mantra-active-change")
        } else
            m.views.greeting && m.views.greeting.waitingForMantra && this.trigger("mantra-active-change")
    },
    isEnabled: function() {
        return m.models.customization.get("mantraVisible")
    },
    toggleEnabled: function() {
        m.models.customization.toggle("mantraVisible")
    },
    hasSeenGreetingToday: function() {
        return JSON.parse(localStorage.getItem(this.keyHasSeenGreetingToday))
    },
    markGreetingAsSeenToday: function() {
        localStorage.setItem(this.keyHasSeenGreetingToday, "true")
    },
    isInAlternatingMode: function() {
        return !this.isFrequencyAlways() && !this.isMantraPinned()
    },
    isFrequencyAlways: function() {
        return this.settings.getFrequency() === this.settings.frequencies.always
    },
    isMantraPinned: function() {
        return !!this.getPinnedMantra()
    },
    activeFeedsEmpty: function() {
        return this.itemCollection.empty()
    },
    updateInFeed: function(e) {
        var t = this.itemCollection.findWhere({
            _id: e.get("_id") || e.get("id")
        });
        t && (t.save({
            is_favorite: e.get("is_favorite"),
            body: e.get("body")
        }),
        t.get("_id") === this.getActiveItem().get("_id") && (this.getActiveItem().isPinned() && this.savePinnedVars(t),
        this.trigger("mantra-active-edit")))
    },
    setActive: function(i) {
        this.unpinMantra();
        var e = m.globals.urlRootApi + "settings/mantra/active"
          , a = i.get("_id") || i.get("id")
          , o = this;
        return new Promise(function(t, n) {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                beforeSend: setMomentumAuthHeader,
                data: JSON.stringify({
                    mantra_id: a
                }),
                url: e
            }).done(function(e) {
                e && e.success ? (o.getActiveItem().set({
                    body: i.get("body"),
                    _id: a,
                    is_custom: i.get("is_custom"),
                    is_favorite: i.get("is_favorite")
                }),
                m.trigger("sync:download", "mantra"),
                t(i)) : n(i)
            }).fail(function() {
                n(i)
            })
        }
        )
    },
    onChangeMantraVisible: function() {
        if (m.views.greeting) {
            if (this.activeFeedsEmpty())
                return this.trigger("wait-for-mantra"),
                void this.getActiveItem();
            if (this.isEnabled())
                this.randomizeFrequency(),
                this.trigger("show-mantra");
            else {
                if (!m.views.greeting.isMantraShowing())
                    return;
                if (!0 === this.mantraDisablingInProgress)
                    return;
                this.mantraDisablingInProgress = !0,
                this.unpinMantra(),
                this.mantraDisablingInProgress = !1,
                this.trigger("mantra-active-change")
            }
        }
    },
    getDuration: function(e) {
        return "greeting" === e ? this.frequencyData.durationGreeting : "mantra" === e ? this.frequencyData.durationMantra : void 0
    },
    getDurationTotal: function() {
        return this.frequencyData.durationGreeting + this.frequencyData.durationMantra
    },
    checkIfMantraShouldBeShown: function(e, t) {
        return !(!this.mantrasEnabledAndAvailable() || !this.hasSeenGreetingToday() || e === t.SHOW_GREETING || e === t.GREETING_TIMEOUT) && (e === t.MANTRA_FIRST_TAB_OF_DAY || e === t.MANTRA_TIMEOUT || e === t.SHOW_MANTRA || (this.activatingFirstMantra ? !(this.activatingFirstMantra = !1) : !this.isInAlternatingMode() || this.checkMantraTabFrequency()))
    },
    shouldShowMantraAfterGreetingFirstTabOfDay: function() {
        return this.mantrasEnabledAndAvailable() && !this.hasSeenGreetingToday() && !this.isInAlternatingMode()
    },
    mantrasEnabledAndAvailable: function() {
        return this.getActiveItem() && this.isEnabled()
    },
    checkMantraTabFrequency: function() {
        var e = localStorage.getItem(this.keyTabCountToday) >= this.frequencyData.tabFrequency;
        return e && this.resetTabCount(),
        e
    },
    onChangeFrequency: function() {
        this.resetAndRandomize(),
        this.isMantraPinned() && this.unpinMantra(!0)
    },
    randomizeFrequency: function() {
        var e = this.lookupFrequencyBaseline();
        if (this.isFrequencyAlways())
            this.frequencyData.tabFrequency = e.tabFrequency,
            this.frequencyData.durationGreeting = e.durationGreeting,
            this.frequencyData.durationMantra = e.durationMantra;
        else {
            var t = 1 - this.frequencyVariation
              , n = 1 + this.frequencyVariation;
            this.frequencyData.tabFrequency = this.randomizeTabFrequency(e.tabFrequency),
            this.frequencyData.durationGreeting = getRandomIntInclusive(t * e.durationGreeting, n * e.durationGreeting),
            this.frequencyData.durationMantra = getRandomIntInclusive(t * e.durationMantra, n * e.durationMantra)
        }
    },
    lookupFrequencyBaseline: function() {
        return _.where(this.frequencyLevels, {
            level: this.settings.getFrequency()
        })[0]
    },
    randomizeTabFrequency: function(e) {
        var t = e * (1 - this.frequencyVariation)
          , n = e * (1 + this.frequencyVariation);
        return n - t < 2 && (t = 2 === e ? 2 : e - 1,
        n = e + 1),
        getRandomIntInclusive(t, n)
    },
    initializeMantraDailyData: function() {
        m.models.cleanupManager.registerKey(this.keyTabCountLegacy),
        m.models.cleanupManager.registerKeyPrefix(this.keyTabCountPrefix, {
            pastDaysToKeep: 0
        }),
        m.models.cleanupManager.registerKeyPrefix(this.keyHasSeenGreetingPrefix, {
            pastDaysToKeep: 0
        });
        var e = getActiveDateString();
        this.dateInitialized = e,
        this.keyTabCountToday = this.keyTabCountPrefix + e,
        this.keyHasSeenGreetingToday = this.keyHasSeenGreetingPrefix + e;
        var t, n = parseInt(localStorage.getItem(this.keyTabCountToday));
        isNaN(n) ? (t = 1,
        localStorage.setItem(this.keyHasSeenGreetingToday, "false")) : t = n + 1,
        localStorage.setItem(this.keyTabCountToday, t)
    },
    resetTabCount: function() {
        localStorage.setItem(this.keyTabCountToday, "0")
    },
    resetAndRandomize: function() {
        this.resetTabCount(),
        this.randomizeFrequency()
    },
    onNewDayMantras: function() {
        this.tabWasLeftOvernight() && (this.initializeMantraDailyData(),
        this.trigger("show-greeting"))
    },
    tabWasLeftOvernight: function() {
        return this.dateInitialized !== getActiveDateString()
    },
    getActiveItem: function() {
        var e, t = this, n = this.getPinnedMantra();
        if (n)
            return (e = this.itemCollection.findWhere({
                forDate: "pinned"
            })) && e.get("_id") === n.id ? e : this.itemCollection.create({
                forDate: "pinned",
                _id: n.id,
                body: n.body,
                is_custom: n.isCustom,
                is_favorite: n.isFavorite
            });
        if (m.collect.mantras && this.isEnabled()) {
            if (!(e = m.collect.mantras.getActiveItem()))
                return m.trigger("sync:download", "mantra"),
                null;
            if (e.get("hardSkip"))
                return this.noMantra = !0,
                null;
            var i = !1;
            return this.currentMantra && this.currentMantra.get("_id") === e.get("_id") ? this.currentMantra.get("body") !== e.get("body") && (this.currentMantra = e,
            i = !0) : (this.currentMantra = e,
            i = !0),
            i && setTimeout(function() {
                m.trigger("mantra:active_changed", t.currentMantra.get("_id"))
            }, 50),
            e
        }
        return null
    },
    activateFirstMantra: function() {
        m.models.customization.save("mantraVisible", !0),
        this.settings.save({
            firstMantraActivated: !0
        }),
        this.getActiveItem(),
        this.activatingFirstMantra = !0,
        this.trigger("wait-for-mantra")
    },
    getPinnedMantra: function() {
        return this.settings ? this.settings.get("pinnedMantra") : null
    },
    pinMantra: function(e, t) {
        var n, i = this.getPinnedMantra(), a = e.get("_id") || e.get("id");
        i && a === i.id ? (this.unpinMantra(!0),
        this.resetAndRandomize()) : ("settings" === t ? n = !1 : "dashboard" === t && (n = m.views.greeting.displaynameShowing()),
        this.savePinnedVars(e, n),
        this.trigger("mantra-pin"))
    },
    unpinMantra: function(e) {
        this.isMantraPinned() && this.settings.save({
            pinnedMantra: null
        });
        var t = m.collect.mantras.get("pinned");
        t && t.destroy(),
        e && this.trigger("mantra-pin")
    },
    savePinnedVars: function(e, t) {
        var n = this.settings.get("pinnedMantra");
        n && (t = t || n.showName),
        this.settings.save({
            pinnedMantra: {
                id: e.get("_id") || e.get("id"),
                body: e.get("body"),
                isFavorite: e.get("is_favorite"),
                isCustom: e.get("is_custom"),
                showName: t
            }
        })
    },
    toggleFav: function(e) {
        var t = e.get("id") || e.get("_id");
        return this.feedContains(t) ? this.toggleFavFeedItem(t) : this.toggleFavorite(e.get("is_favorite"), e)
    },
    toggleFavFeedItem: function(n) {
        var i = this
          , a = this.itemCollection.where({
            _id: n
        })
          , o = a[0].get("is_favorite")
          , s = !o
          , r = this.getPinnedMantra()
          , l = this.getActiveItem();
        return a.map(function(e) {
            e.save({
                is_favorite: s
            })
        }),
        r && n === r.id && this.setPinnedProperty("isFavorite", s),
        l && n === l.get("_id") && this.trigger("mantra-active-fav"),
        new Promise(function(e, t) {
            i.toggleFavorite(s, a[0]).then(function() {
                e()
            }).catch(function() {
                a.map(function(e) {
                    e.save({
                        is_favorite: o
                    })
                }),
                r && n === r.id && i.setPinnedProperty("isFavorite", o),
                l && n === l.get("_id") && i.trigger("mantra-active-fav"),
                t()
            })
        }
        )
    },
    setPinnedProperty: function(e, t) {
        var n = Object.assign({}, this.settings.get("pinnedMantra"));
        n[e] = t,
        this.settings.save({
            pinnedMantra: n
        })
    },
    feedContains: function(e) {
        return !!this.itemCollection.findWhere({
            _id: e
        })
    },
    handleMantraDelete: function(e) {
        var t = this.getActiveItem();
        t && t.get("_id") === e && (t.isPinned() && this.unpinMantra(),
        this.trigger("showGreeting"),
        m.trigger("sync:download", "mantra"))
    },
    getMantraForDisplay: function(e, t) {
        return e ? (void 0 !== this.showName && t || (this.isMantraPinned() ? this.showName = this.getPinnedMantra().showName : this.showName = getRandomBoolByFrequency(this.showNameFrequency)),
        this.formatMantraForDisplay(e.get("body"), this.showName)) : null
    },
    formatMantraForDisplay: function(e, t) {
        e = e.trim();
        var n = m.utils.getEndPunctuationString(e)
          , i = e.slice(0, e.length - n.length)
          , a = "";
        return "" === n && (n = "."),
        t && this.mantraWorksWithName(i) && (i += ", ",
        a = m.models.customization.get("displayname"),
        m.utils.endsWithEndPunctuation(a) && (n = "")),
        {
            bodyFormatted: i + a + n,
            start: i,
            name: a,
            end: n
        }
    },
    mantraWorksWithName: function(e) {
        var t, n = !0, i = m.models.customization.get("displayname").toUpperCase();
        e = e.toUpperCase();
        for (var a = 0; a < this.stringsThatPrecludeNames.length; a++)
            if (t = this.stringsThatPrecludeNames[a],
            -1 !== e.indexOf(i) || -1 !== e.indexOf(t) || e.startsWith(t.trim() + " ") || e.endsWith(" " + t.trim())) {
                n = !1;
                break
            }
        return n
    },
    skipItem: function(e) {
        return e && !m.conditionalFeatures.featureEnabled("plus") && (this.noMantra = !0),
        this.isMantraPinned() && this.unpinMantra(),
        m.models.FeedManager.prototype.skipItem.apply(this, arguments)
    }
}),
m.models.MantraSettings = Backbone.Model.extend({
    defaults: {
        pinnedMantra: null,
        firstMantraActivated: !1,
        frequency: 2
    },
    frequencies: {
        low: 0,
        medium: 2,
        high: 2,
        always: 3
    },
    initialize: function() {
        this.listenTo(m.models.customization, "change:mantraSettingsStr", this.customizationChanged),
        m.models.customization.initialized ? this.customizationChanged() : this.listenTo(m.models.customization, "initialized", this.customizationChanged)
    },
    customizationChanged: function(e, t) {
        if (!t || !t.savingMantraSettings) {
            var n = m.models.customization.get("mantraSettingsStr");
            n && n !== this.mantraSettingsStr && 0 < n.length && this.reset()
        }
    },
    getFrequency: function() {
        var e = this.get("frequency")
          , t = "string" == typeof e ? this.frequencies[e] : e;
        return void 0 === _.find(this.frequencies, function(e) {
            return e === t
        }) && (t = this.defaults.frequency),
        t
    },
    reset: function() {
        this.mantraSettingsStr = m.models.customization.get("mantraSettingsStr");
        if (this.mantraSettingsStr && 0 < this.mantraSettingsStr.length) {
            var t = JSON.parse(this.mantraSettingsStr)
              , n = this;
            ["pinnedMantra", "firstMantraActivated", "frequency"].forEach(function(e) {
                n.set(e, void 0 === t[e] ? n.defaults[e] : t[e])
            })
        }
    },
    save: function() {
        Backbone.Model.prototype.set.apply(this, arguments),
        m.models.customization.initialized && m.models.customization.save({
            mantraSettingsStr: JSON.stringify(this.attributes)
        }, {
            savingMantraSettings: !0
        })
    }
}),
m.models.Settings = Backbone.Model.extend({
    defaults: {},
    initialize: function() {}
}),
m.models.GenericSettings = Backbone.Model.extend({
    initialize: function(e) {
        this.urlPath = e,
        this.url = m.globals.urlRoot + e;
        var t = localStorage.getItem("cached-" + e);
        t && this.set(JSON.parse(t)),
        this.listenTo(this, "sync", this.saveLocal)
    },
    saveLocal: function() {
        localStorage.setItem("cached-" + this.urlPath, JSON.stringify(this.attributes))
    },
    save: function(e, t) {
        (t = t || {}).patch = !0;
        var i = this
          , a = t.success;
        t.success = function(e, t, n) {
            i.saveLocal(),
            a && a(e, t, n)
        }
        ,
        m.isLoggedIn() ? Backbone.Model.prototype.save.call(this, e, t) : Backbone.Model.prototype.set.call(this, e, t),
        i.saveLocal()
    },
    toggle: function(e) {
        var t = {};
        this.has(e) ? t[e] = !this.get(e) : t[e] = !0,
        this.save(t)
    }
}),
m.models.BalanceMode = Backbone.Model.extend({
    defaults: {
        enabled: !1,
        active: !1,
        balanceClock: !1,
        balanceTodo: !1,
        balanceFocus: !0,
        balanceNotes: !1,
        customTime: !1,
        customDays: !1,
        start: {
            hour: 9,
            minute: "00",
            noon: "AM"
        },
        end: {
            hour: 5,
            minute: "00",
            noon: "PM"
        },
        startCustom: {
            hour: 9,
            minute: "00",
            noon: "AM"
        },
        endCustom: {
            hour: 5,
            minute: "00",
            noon: "PM"
        },
        days: [!1, !0, !0, !0, !0, !0, !1],
        daysCustom: [!1, !0, !0, !0, !0, !0, !1]
    },
    initialize: function(e, t) {
        this.customization = t.customization || m.models.customization,
        this.listenTo(this.customization, "change:balanceModeStr", this.customizationChanged),
        this.listenTo(this, "change:enabled", this.balanceChanged),
        this.listenTo(m.models.date, "change:date", this.checkBalance)
    },
    checkBalance: function() {
        var e = m.date()
          , t = this.getStart()
          , n = this.getEnd()
          , i = this.getDays()
          , a = t.hour + ":" + t.minute + t.noon
          , o = n.hour + ":" + n.minute + n.noon
          , s = this.get("active")
          , r = m.utils.toTodaysTime(o)
          , l = m.utils.toTodaysTime(a)
          , d = new Date(l.getTime());
        d.setDate(l.getDate() - 1);
        var c = new Date(r.getTime());
        c.setDate(r.getDate() + 1),
        this.set("active", this.get("enabled") && (!i[e.getDay()] || r.getTime() > l.getTime() && (l.getTime() > e.getTime() || e.getTime() > r.getTime()) || r.getTime() < l.getTime() && !(d.getTime() < e.getTime() && e.getTime() < r.getTime() || l.getTime() < e.getTime() && e.getTime() < c.getTime()))),
        s != this.get("active") && this.balanceChanged()
    },
    customizationChanged: function(e, t) {
        var n = this.customization.get("balanceModeStr");
        n && n != this.balanceModeStr && 0 < n.length && this.resetBalanceMode()
    },
    resetBalanceMode: function() {
        if (this.balanceModeStr = this.customization.get("balanceModeStr"),
        this.balanceModeStr && 0 < this.balanceModeStr.length) {
            var e = JSON.parse(this.balanceModeStr);
            this.set("enabled", void 0 === e.enabled ? this.defaults.enabled : e.enabled),
            this.set("start", e.start || this.defaults.start),
            this.set("end", e.end || this.defaults.end),
            this.set("days", e.days || this.defaults.days),
            this.set("customDays", void 0 === e.customDays ? this.defaults.customDays : e.customDays),
            this.set("customTime", void 0 === e.customTime ? this.defaults.customTime : e.customTime),
            this.set("startCustom", e.startCustom || this.defaults.startCustom),
            this.set("endCustom", e.endCustom || this.defaults.endCustom),
            this.set("daysCustom", e.daysCustom || this.defaults.daysCustom),
            this.set("balanceClock", void 0 === e.balanceClock ? this.defaults.balanceClock : e.balanceClock),
            this.set("balanceFocus", void 0 === e.balanceFocus ? this.defaults.balanceFocus : e.balanceFocus),
            this.set("balanceTodo", void 0 === e.balanceTodo ? this.defaults.balanceTodo : e.balanceTodo),
            this.set("balanceNotes", void 0 === e.balanceNotes ? this.defaults.balanceNotes : e.balanceNotes),
            this.initCompleted = !0,
            this.checkBalance()
        }
    },
    getDays: function() {
        return this.get("customDays") ? this.get("daysCustom") : this.get("days")
    },
    getStart: function() {
        return this.get("customTime") ? this.get("startCustom") : this.get("start")
    },
    getEnd: function() {
        return this.get("customTime") ? this.get("endCustom") : this.get("end")
    },
    get: function(e) {
        return !!("customDays" != e && "customTime" != e || m.conditionalFeatures.featureEnabled("plus")) && Backbone.Model.prototype.get.call(this, e)
    },
    balanceChanged: function() {
        this.initCompleted && this.customization.save({
            balanceModeStr: JSON.stringify(this.attributes)
        })
    }
}),
m.models.BookmarksSettings = Backbone.Model.extend({
    defaults: {
        guided: !1,
        iconsOnly: !1,
        openInNewTab: !1,
        appsLocation: "links",
        includeBookmarks: !1,
        includeOtherBookmarks: !1,
        defaultMostVisited: !1,
        includeMostVisited: !0,
        chromeTabLocation: "links"
    },
    initialize: function() {
        this.listenTo(m.models.customization, "change:bookmarksSettingsStr", this.customizationChanged),
        this.permissions = {
            permissions: ["bookmarks", "topSites"]
        },
        isChrome() && (this.permissions.origins = ["chrome://favicon/"])
    },
    customizationChanged: function(e, t) {
        var n = m.models.customization.get("bookmarksSettingsStr");
        n && n != this.bookmarksSettingsStr && 0 < n.length && this.reset()
    },
    reset: function() {
        this.bookmarksSettingsStr = m.models.customization.get("bookmarksSettingsStr");
        if (this.bookmarksSettingsStr && 0 < this.bookmarksSettingsStr.length) {
            var t = JSON.parse(this.bookmarksSettingsStr)
              , n = this;
            ["iconsOnly", "openInNewTab", "appsLocation", "includeBookmarks", "includeOtherBookmarks", "defaultMostVisited", "includeMostVisited", "chromeTabLocation", "guided"].forEach(function(e) {
                n.set(e, null == t[e] ? n.defaults[e] : t[e])
            }),
            localStorage.setItem("bookmarksEnabled", m.models.customization.get("bookmarksVisible")),
            setTimeout(function() {
                initializeBookmarksPlaceHolder()
            }, 500)
        }
    },
    optionsChanged: function() {
        m.models.customization.save({
            bookmarksSettingsStr: JSON.stringify(this.attributes)
        })
    }
}),
m.models.ComputedSettings = Backbone.Model.extend({
    defaults: {
        todoVisible: !1,
        focusVisible: !1,
        autoFocus: !1,
        clockVisible: !1,
        notesVisible: !1
    },
    settingOverriders: {
        TEAM: 0,
        BALANCE: 1
    },
    overrides: {},
    initializeSettings: function(e) {
        var t = this;
        this.persistentSettings = new m.models.PersistentSettings({
            id: 1
        }),
        this.listenTo(this.persistentSettings, "change", this.computeProperties),
        this.listenTo(this.persistentSettings, "sync", function() {
            var e = t.persistentSettings.get("balanceModeStr");
            e && 0 < e.length && (m.models.balanceMode.resetBalanceMode(),
            t.computeProperties()),
            t.initialized || (t.initialized = !0,
            t.updateSearchSettings(),
            t.trigger("initialized"))
        }),
        m.conditionalFeatures = new m.models.ConditionalFeatures({
            customization: this
        }),
        m.models.balanceMode = this.balanceMode = new m.models.BalanceMode({
            id: 1
        },{
            customization: this
        }),
        m.models.bookmarksSettings = new m.models.BookmarksSettings({
            id: 1
        }),
        this.persistentSettings.fetch({
            error: function(e, t, n) {
                "Record Not Found" == t && e.save()
            }
        })
    },
    updateSearchSettings: function() {
        if (!localStorage.getItem("token")) {
            var e = localStorage.getItem("client_uuid");
            if (e && 0 != e.length && ("0" == (e = e.toLowerCase())[0] || "1" == e[0])) {
                if (this.persistentSettings.get("searchUpdated"))
                    return;
                var t = {
                    searchUpdated: !0,
                    searchVisible: null
                }
                  , n = this.persistentSettings.get("searchProvider");
                "google" !== n && "bing" !== n && (t.searchProvider = null),
                this.persistentSettings.save(t),
                m.usage.save({
                    type: m.usage.types.SYSTEM,
                    action: "client-search-update",
                    provider: n || null
                }, !0, !0)
            }
        }
    },
    checkBalanceMode: function(e, t, n) {
        var i = this.attributes[e]
          , a = !!n || (!this.persistentSettings.has(e) || this.persistentSettings.get(e));
        this.attributes[e] = a && !(m.models.balanceMode.get("active") && m.models.balanceMode.get(t)),
        this.persistentSettings.get(e) !== this.attributes[e] && (this.overrides[e] = this.settingOverriders.BALANCE),
        i != this.attributes[e] && this.trigger("change:" + e)
    },
    checkTeamOverride: function(e, t) {
        var n = m.models.teamInfo.get("team");
        if (n) {
            var i = this.attributes[e]
              , a = this.persistentSettings.get(e);
            this.attributes[e] = a || !n[t],
            a !== this.attributes[e] && (this.overrides[e] = this.settingOverriders.TEAM),
            i !== this.attributes[e] && this.trigger("change:" + e)
        }
    },
    checkAutoFocus: function() {
        var e = "autoFocus"
          , t = this.attributes[e];
        return this.attributes[e] = this.persistentSettings.get(e) && this.persistentSettings.get("todoVisible") && m.conditionalFeatures.featureEnabled("plus"),
        t != this.attributes[e]
    },
    computeProperties: function(t, n, i) {
        var a = this;
        this.checkBalanceMode("todoVisible", "balanceTodo"),
        this.checkBalanceMode("clockVisible", "balanceClock", !0),
        this.checkBalanceMode("focusVisible", "balanceFocus"),
        this.checkBalanceMode("notesVisible", "balanceNotes"),
        this.checkTeamOverride("focusVisible", "focusEmpty"),
        this.checkTeamOverride("multiClockVisible", "clocksEmpty"),
        this.checkTeamOverride("countdownVisible", "countdownsEmpty");
        var e = this.persistentSettings.changedAttributes();
        e = e || {},
        this.checkAutoFocus() && !e.autoFocus && (e.autoFocus = this.attributes.autoFocus),
        _.keys(e).forEach(function(e) {
            a.trigger("change:" + e, t, n, i)
        }),
        this.trigger("change", t, n, i)
    },
    get: function(e) {
        return this.persistentSettings.get(e)
    },
    getPersistentSettings: function() {
        return this.persistentSettings
    },
    getComputedSetting: function(e) {
        return null != this.attributes[e] ? Backbone.Model.prototype.get.call(this, e) : this.persistentSettings.get(e)
    },
    set: function() {
        arguments[0].id ? Backbone.Model.prototype.set.apply(this, arguments) : this.persistentSettings.set.apply(this.persistentSettings, arguments)
    },
    save: function() {
        this.persistentSettings.save.apply(this.persistentSettings, arguments)
    },
    fetch: function() {
        this.persistentSettings.fetch.apply(this.persistentSettings, arguments)
    },
    toggle: function(e) {
        if (e) {
            var t = !this.get(e)
              , n = {};
            n[e] = t,
            this.save(n)
        }
    }
}),
m.collect.Mantras = Backbone.Collection.extend({
    loadedOnce: !1,
    initialize: function() {
        this.model = m.models.Mantra,
        this.collectionName = "momentum-mantra",
        this.localStorage = new Backbone.LocalStorage(this.collectionName),
        this.listenToOnce(this, "reset", this.onReset)
    },
    getActiveItem: function() {
        if (0 < this.length) {
            var e = getActiveDateString();
            return this.get(e)
        }
    },
    onReset: function() {
        this.loadedOnce = !0
    },
    empty: function() {
        return 0 === this.models.length
    }
}),
m.collect.Settings = Backbone.Collection.extend({
    saveOptions: {
        patch: !0
    },
    initialize: function() {
        this.model = m.models.Settings
    }
}),
m.views.settings = m.views.settings || {},
m.views.settings.SettingsPane = Backbone.View.extend({
    attributes: {
        id: "settings",
        class: "app-container settings",
        "data-test": "settings"
    },
    renderedOnce: !1,
    events: {
        "click .toggle": "toggleShow"
    },
    libraryLoadStarted: !1,
    initialize: function() {
        this.subViews = [],
        this.render(),
        this.listenTo(m, "globalEvent:esc globalEvent:toggle", this.hideSettings),
        this.listenTo(m, "globalEvent:toggleSettings", this.toggleShow),
        this.listenTo(m, "settings:visible", this.settingsVisible),
        this.listenTo(m, "settings:hidden", this.settingsHidden),
        this.visible = !1,
        this.$el.mClickOutside(this, this.hideSettings)
    },
    render: function() {
        if (!this.renderedOnce) {
            var e = (this.options.order || "append") + "To";
            this.$el[e]("." + this.options.region).html('<span class="app-dash toggle" data-test="settings-toggle"><svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274"><path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z" fill="#FFF"/></svg></span>'),
            this.renderedOnce = !0
        }
        return this
    },
    toggleShow: function(e) {
        e && (e.preventDefault(),
        e.stopPropagation()),
        m.trigger("globalEvent:click", this),
        this.visible ? m.commandManager.execute("settings.toggle") : this.initializeSettings().then(function() {
            m.commandManager.execute("settings.toggle")
        })
    },
    initializeSettings: function() {
        var n = this;
        return new Promise(function(e, t) {
            n.initialized ? e() : (this.initialized = !0,
            m.commandManager.ensureCommandLoaded("settings.initialize", function() {
                n.mainSettings = m.commandManager.execute("settings.initialize", n.$el),
                setTimeout(function() {
                    e()
                }, 50)
            }))
        }
        )
    },
    hideSettings: function(e) {
        e != this && (e.originalEvent && "click" == e.type && e.target && this.mainSettings && $.contains(this.mainSettings.el, e.target) || (m.commandManager.execute("settings.hide"),
        this.visible = !1))
    },
    settingsVisible: function() {
        this.$el.addClass("show").outerWidth(),
        this.$el.addClass("show-fade-in"),
        this.visible = !0
    },
    settingsHidden: function(e) {
        if (e && e.preventDefault(),
        this.$el.hasClass("show")) {
            this.visible = !1;
            var t = this;
            this.$el.removeClass("show-fade-in").one("transitionend webkitTransitionEnd", function(e) {
                t.$el.removeClass("show")
            })
        }
    }
}),
m.views.upsell = m.views.upsell || {},
m.views.upsell.Message = Backbone.View.extend({
    showing: !1,
    events: {
        "click .hide": "hideUpsell",
        "click .upsell-action": "clickButton"
    },
    initialize: function(e) {
        this.template = e.template,
        this.options = e,
        this.listenTo(m, "globalEvent:click", this.handleClick)
    },
    render: function() {
        return this.options.class = (this.options.class ? this.options.class + " " : "") + this.options.targetRegion + "-upsell",
        this.$el.attr("data-test", this.options.targetRegion + "-upsell"),
        this.$el.html(this.template(this.options)),
        this.$el.addClass("overlay upsell"),
        this.$el.addClass(this.options.class),
        this
    },
    show: function() {
        var e = this
          , t = this.$el.outerHeight(!0)
          , n = this.$el.outerWidth(!0);
        this.$el.addClass("show"),
        this.showing = !0,
        "greeting" === this.options.targetRegion && this.$el.parent().find(".dropdown-list").css("opacity", 0),
        setTimeout(function() {
            e.parentMinHeight = e.$el.parent().css("min-height"),
            e.parentMinWidth = e.$el.parent().css("min-width"),
            e.$el.parent().css({
                "min-height": Math.max(t, e.$el.parent().height()),
                "min-width": Math.max(n, e.$el.parent().width())
            }),
            e.$el.addClass("show-fade-in")
        }, 10)
    },
    hideUpsell: function(e) {
        e && e.stopPropagation(),
        this.$el.removeClass("show-fade-in"),
        this.showing = !1;
        var t = this;
        setTimeout(function() {
            "greeting" === t.options.targetRegion && t.$el.parent().find(".dropdown-list").css("opacity", 1),
            t.$el.parent().css({
                "min-height": t.parentMinHeight ? t.parentMinHeight : 0,
                "min-width": t.parentMinWidth ? t.parentMinWidth : 0
            }),
            t.$el.removeClass("show")
        }, 100)
    },
    handleClick: function(e) {
        this.$el[0] === e.target || $.contains(this.$el[0], e.target) || 1 !== this.$el.css("opacity") || this.hideUpsell()
    },
    clickButton: function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        m.commandManager.execute("upsell.website", null, {
            source: this.options.sourceEvent
        })
    }
}),
m.commands.UpsellMessage = m.models.Command.extend({
    defaults: {
        id: "upsell.message"
    },
    execute: function(e) {
        return m.widgetManager.getWidget(e.targetRegion).showUpsell(e)
    }
}),
m.commands.UpsellWebsite = m.models.Command.extend({
    defaults: {
        id: "upsell.website"
    },
    execute: function(e, t) {
        var n = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
        t && t.source ? n += "&utm_campaign=" + encodeURIComponent(t.source) : !t && e && e.source && (n += "&utm_campaign=" + encodeURIComponent(e.source));
        var i = localStorage.getItem("offered-plan");
        i && m.conditionalFeatures.featureEnabled("notes-degraded") && (n += "&resubscribe=" + i),
        m.commandManager.execute("window.open", null, {
            url: n
        })
    }
}),
m.views.Greeting = Backbone.View.extend({
    attributes: {
        id: "greeting",
        class: "app-container has-dash-icon has-centered-3-col greeting",
        "data-test": "greeting"
    },
    dropdownToggleActionTaken: !1,
    intervalId: null,
    localNameSave: null,
    marginRightDropdownMinimum: 135,
    mantraActiveModel: null,
    pulseAnimationInProgress: !1,
    renderFadeInProgress: !1,
    renderTypes: {
        GREETING_TIMEOUT: "greetingTimeout",
        MANTRA_FIRST_TAB_OF_DAY: "mantraFirstTabOfDay",
        MANTRA_TIMEOUT: "mantraTimeout",
        SHOW_GREETING: "showGreeting",
        SHOW_MANTRA: "showMantra"
    },
    template: m.templates.greeting["greeting-template"],
    timeFadeRender: 500,
    timeoutId: null,
    timePulse: 1e3,
    timeScroll: 500,
    events: {
        mouseenter: "onMouseenter",
        mouseleave: "onMouseleave",
        "dblclick .name": "handleDoubleClickName",
        "dblclick .message": "handleDoubleClickMessage",
        "keypress .name": "onKeypressName",
        "keydown .name": "onKeydownName",
        "blur .name": "onBlurName",
        "click .more-toggle": "handleClickDropdownControl",
        "click .mantra-fav": "handleClickMantraFav",
        "click .mantra-pin": "handleClickMantraPin",
        "click .mantra-remove": "handleClickMantraRemove",
        "click .mantra-skip": "handleClickMantraSkip",
        "click .mantra-settings": "handleClickMantraSettings",
        "click .mantra-show": "handleClickShowTodaysMantra",
        "click .displayname-edit": "handleClickDisplaynameEdit"
    },
    initialize: function() {
        var t = this;
        this.plusUser = m.conditionalFeatures.featureEnabled("plus"),
        this.render(),
        this.listenTo(this.model, "change:time", this.onChangeTime, this),
        this.listenTo(m, "globalEvent:pageHidden", this.onPageHidden),
        this.listenTo(m, "globalEvent:pageShown", this.onPageShown),
        this.listenTo(m, "globalEvent:forceDisplayName", this.forceDisplayname),
        this.listenTo(m.models.customization, "change:displayname", this.onChangeDisplayname),
        this.listenTo(m.models.customization, "change:mantraVisible", this.onChangeMantraVisible),
        this.listenTo(m.models.mantraSettings, "change:frequency", this.onMantraFrequencyChange),
        this.listenTo(m.models.mantraManager, "mantra-pin", this.onMantraPin),
        this.listenTo(m.models.mantraManager, "wait-for-mantra", this.waitForMantra),
        this.listenTo(m.models.mantraManager, "mantra-active-change", function(e) {
            if (this.hideDropdown(),
            t.waitingForMantra)
                return m.models.mantraManager.unpinMantra(),
                t.render(t.renderTypes.SHOW_MANTRA),
                void (t.waitingForMantra = !1);
            this.renderFadeInProgress && (this.renderFadeInProgress = !1),
            t.render(e)
        }),
        this.listenTo(m.models.mantraManager, "show-greeting", function() {
            this.clearMantraIntervalIfNeeded(),
            t.render(t.renderTypes.SHOW_GREETING)
        }),
        this.listenTo(m.models.mantraManager, "show-mantra", function() {
            this.clearMantraIntervalIfNeeded(),
            t.render(t.renderTypes.SHOW_MANTRA)
        }),
        this.listenTo(m.models.mantraManager, "mantra-active-edit", this.onMantraActiveEdit),
        this.listenTo(m.models.mantraManager, "mantra-active-fav", this.onMantraActiveFav),
        this.listenTo(m, "globalEvent:click", this.handleGlobalClick),
        this.listenTo(m, "globalEvent:esc", this.hideDropdown),
        m.widgetManager.registerWidget("greeting", this),
        this.upsellOptions = {},
        this.upsellOptions.pin = {
            targetRegion: "greeting",
            sourceEvent: "pinMantra",
            buttonText: "Learn more",
            title: "Pin Mantra",
            description: "Always show a mantra instead of the greeting"
        },
        this.upsellOptions.skip = {
            targetRegion: "greeting",
            sourceEvent: "skipMantra",
            buttonText: "Learn more",
            title: "Skip Mantra",
            description: "Get a new mantra anytime"
        },
        this.upsellOptions.show = {
            targetRegion: "greeting",
            sourceEvent: "showMantra",
            buttonText: "Learn more",
            title: "Show New Mantra",
            description: "Get a new mantra anytime"
        }
    },
    render: function(e) {
        var t, n, i, a = !1, o = this;
        if (this.skipInProgress && !e && (e = this.renderTypes.SHOW_MANTRA,
        this.skipInProgress = !1),
        !this.intervalId || !m.models.mantraManager.activeFeedsEmpty() || (this.clearMantraInterval(),
        this.mantraActiveModel)) {
            if (m.models.mantraManager.checkIfMantraShouldBeShown(e, this.renderTypes)) {
                if (!(t = this.helperRenderMantra(e)))
                    return
            } else
                m.models.mantraManager.shouldShowMantraAfterGreetingFirstTabOfDay() && this.setMantraTimeoutFirstTabOfDay(),
                m.models.mantraManager.markGreetingAsSeenToday(),
                a = this.renderedOnce && !this.isMantraShowing(),
                t = this.helperRenderGreeting();
            n = this.helperRenderDropdown(t),
            this.setMantraIntervalIfNeeded(),
            this.handleNoMantraCase();
            var s = (this.options.order || "append") + "To";
            this.renderedOnce || this.$el[s]("." + this.options.region),
            this.renderFadeInProgress && (i = !0),
            this.renderFadeInProgress || !m.appsLoaded || !this.renderedOnce || a || this.isMantraShowing() && this.mantraActiveModel.get("_id") === this.lastRenderedMantraId ? (this.$el.mFadeIn().html(this.template(n)),
            this.renderedOnce = !0) : (this.renderFadeInProgress = !0,
            this.$el.mFadeOut(this.timeFadeRender, !0, function() {
                o.$el.html(o.template(n)),
                o.$el.mFadeIn(o.timeFadeRender, function() {
                    o.renderFadeInProgress = !1,
                    o.helperRenderEnd()
                })
            })),
            this.preventTransitionDisabling(i),
            this.upsellView = null,
            this.lastRenderedMantraId = this.isMantraShowing() ? this.mantraActiveModel.get("_id") : null,
            this.dropdownToggleActionTaken = !1,
            this.helperRenderEnd(),
            this.setGreetingVerticalPosition(),
            setTimeout(function() {
                o.renderedOnce = !0
            }, 1e3)
        }
    },
    setGreetingVerticalPosition: function() {
        var e = this;
        m.models.customization.getComputedSetting("clockVisible") ? e.$el.addClass("transition") : setTimeout(function() {
            $(".app-container.clock").hasClass("m-hide") || e.trigger("hide-clock-on-login"),
            e.moveToCenter(),
            setTimeout(function() {
                e.$el.addClass("transition")
            }, 1e3)
        }, 10)
    },
    preventTransitionDisabling: function(e) {
        e && (this.renderFadeInProgress = !1)
    },
    helperRenderGreeting: function() {
        var e = this.getGreetingStart()
          , t = m.models.customization.get("displayname")
          , n = this.setEndPunctuation(t);
        return this.mantraActiveModel = null,
        this.components = {
            start: e,
            name: t,
            end: n
        },
        this.components
    },
    getGreetingStart: function() {
        return "Good " + m.utils.getDayPart(this.model.get("date")) + ", "
    },
    helperRenderMantra: function(e) {
        if (m.models.mantraManager.noMantra)
            return null;
        var t = m.models.mantraManager.getActiveItem();
        if (!t)
            return null;
        var n = "mantraRemovePinnedName" !== e && (this.mantraActiveModel && this.mantraActiveModel.get("body") === t.get("body"))
          , i = m.models.mantraManager.getMantraForDisplay(t, n);
        return this.mantraActiveModel = t,
        this.components = {
            start: i.start,
            name: i.name,
            end: i.end
        },
        this.components
    },
    isMantraShowing: function() {
        return !!this.mantraActiveModel
    },
    helperRenderDropdown: function(e) {
        var t = this.isMantraShowing()
          , n = this.displaynameShowing();
        return {
            content: n ? e.start : e.start + e.end,
            contentType: t ? "mantra" : "greeting",
            name: n ? e.name : "",
            punctuation: n ? e.end : "",
            showMenu: !0,
            showMantra: !t,
            showFav: t,
            showSkip: t,
            showPin: t,
            showRemove: t && !this.mantraActiveModel.get("is_custom"),
            showSeparator: t && n,
            showSettingsMantras: t,
            showDisplaynameEdit: n
        }
    },
    helperRenderEnd: function() {
        if (this.$message = this.$(".message"),
        this.$name = this.$(".name"),
        this.$punctuation = this.$(".punctuation"),
        this.$dropdownContainer = this.$(".more"),
        this.$dropdown = this.$(".more-dropdown"),
        0 !== this.$message.length) {
            var e = this;
            setTimeout(function() {
                e.makeRoomForDropdownContainer()
            }, 0)
        }
        this.isMantraShowing() && (this.$mantraFav = this.$(".mantra-fav"),
        this.$mantraPin = this.$(".mantra-pin"),
        this.updateFavState(),
        this.updatePinnedState())
    },
    moveToCenter: function() {
        if (!this.isCenter) {
            var e = this.$el[0].getBoundingClientRect().top
              , t = this;
            if (0 !== e) {
                var n = (document.body.getBoundingClientRect().height - this.$el.outerHeight(!0)) / 2 - e;
                this.$el.css("transform", "translateY(" + n + "px)"),
                this.isCenter = !0
            } else
                setTimeout(function() {
                    t.moveToCenter()
                })
        }
    },
    moveOffCenter: function() {
        this.isCenter && (this.$el.css("transform", "translateY(0)"),
        this.isCenter = !1)
    },
    onPageHidden: function() {
        this.clearMantraIntervalIfNeeded()
    },
    onPageShown: function() {
        this.setMantraIntervalIfNeeded()
    },
    onChangeMantraVisible: function() {
        m.models.mantraManager.isEnabled() || (this.$el.find(".more-dash").hide(),
        this.clearMantraInterval())
    },
    onMantraFrequencyChange: function() {
        this.clearMantraInterval(),
        m.models.mantraManager.isFrequencyAlways() ? this.render(this.renderTypes.SHOW_MANTRA) : this.setMantraInterval()
    },
    handleNoMantraCase: function() {
        m.models.mantraManager.noMantra && this.clearMantraInterval()
    },
    setMantraInterval: function() {
        if (!this.intervalId) {
            var e = m.models.mantraManager.getDurationTotal();
            e && (this.intervalId = setInterval(this.setMantraTimeout.bind(this), e),
            this.setMantraTimeoutInitial())
        }
    },
    clearMantraInterval: function() {
        clearInterval(this.intervalId),
        clearTimeout(this.timeoutId),
        this.intervalId = null,
        this.timeoutId = null
    },
    setMantraIntervalIfNeeded: function() {
        this.editingName() || this.intervalId || !m.models.mantraManager.isEnabled() || m.models.mantraManager.activeFeedsEmpty() || !m.models.mantraManager.isInAlternatingMode() || this.setMantraInterval()
    },
    clearMantraIntervalIfNeeded: function() {
        m.models.mantraManager.isEnabled() && m.models.mantraManager.isInAlternatingMode() && !this.editingName() && this.intervalId && this.clearMantraInterval()
    },
    setMantraTimeoutInitial: function() {
        this.isMantraShowing() ? this.setTimeoutHelper("greeting", "mantra") : this.setTimeoutHelper("mantra", "greeting")
    },
    setMantraTimeout: function() {
        this.isMantraShowing() ? (this.setTimeoutHelper("mantra", "greeting"),
        document.hidden || this.render(this.renderTypes.SHOW_GREETING)) : (document.hidden || this.render(this.renderTypes.SHOW_MANTRA),
        this.setTimeoutHelper("greeting", "mantra"))
    },
    setTimeoutHelper: function(e, t) {
        var n = this;
        0 < m.models.mantraManager.getDuration(t) && (this.timeoutId = setTimeout(function() {
            document.hidden || ("greeting" === e ? n.render(n.renderTypes.GREETING_TIMEOUT) : "mantra" === e && n.render(n.renderTypes.MANTRA_TIMEOUT))
        }, m.models.mantraManager.getDuration(t)))
    },
    setMantraTimeoutFirstTabOfDay: function() {
        var e = this;
        this.timeoutId && clearTimeout(this.timeoutId),
        this.timeoutId = setTimeout(function() {
            document.hidden || e.render(e.renderTypes.MANTRA_FIRST_TAB_OF_DAY)
        }, m.models.mantraManager.durationGreetingFirstTabOfDay)
    },
    onMantraActiveEdit: function() {
        var e = m.models.mantraManager.formatMantraForDisplay(m.models.mantraManager.getActiveItem().get("body"), this.displaynameShowing());
        this.components = {
            start: e.start,
            name: e.name,
            end: e.end
        },
        this.$message.text(e.start),
        this.$name.text(e.name),
        this.$punctuation.text(e.end),
        this.updateFavState()
    },
    onMantraActiveFav: function() {
        this.updateFavState()
    },
    openMantraSettingsFromDashboard: function() {
        this.hideDropdown(),
        m.commandManager.executeAsync("settings.display", null, {
            section: "mantra-settings"
        })
    },
    onMantraPin: function() {
        var e = m.models.mantraManager.getPinnedMantra();
        if (e) {
            this.clearMantraInterval();
            var t = m.models.mantraManager.getActiveItem();
            this.mantraActiveModel && this.mantraActiveModel.get("_id") === t.get("_id") ? this.components.name && !e.showName ? this.render("mantraRemovePinnedName") : this.updatePinnedState() : (this.mantraActiveModel = t,
            this.render())
        } else
            this.updatePinnedState(),
            m.models.mantraManager.isFrequencyAlways() ? m.models.mantraManager.trigger("mantra-active-change") : this.render(this.renderTypes.SHOW_GREETING)
    },
    updateFavState: function() {
        if (this.$mantraFav) {
            var e = m.models.mantraManager.isMantraPinned() ? m.models.mantraManager.getPinnedMantra().isFavorite : m.models.mantraManager.getActiveItem().get("is_favorite");
            this.$mantraFav.toggleClass("active", e)
        }
    },
    updatePinnedState: function() {
        this.$mantraPin && this.$mantraPin.toggleClass("active", m.models.mantraManager.isMantraPinned())
    },
    onChangeTime: function() {
        this.updateGreetingStart()
    },
    onMouseenter: function() {
        this.$dropdown.is(":visible") || this.editingName() || this.clearMantraIntervalIfNeeded()
    },
    onMouseleave: function() {
        this.$dropdown.is(":visible") ? this.dropdownToggleActionTaken && (this.hideDropdown(),
        this.dropdownToggleActionTaken = !1) : this.setMantraIntervalIfNeeded()
    },
    displaynameShowing: function() {
        return this.components.name === m.models.customization.get("displayname")
    },
    editingName: function() {
        return !!this.$name && this.$name.hasClass("editing")
    },
    updateGreetingStart: function() {
        this.isMantraShowing() || (this.components.start = this.getGreetingStart(),
        this.$message.text(this.components.start))
    },
    updateMessageName: function(e) {
        this.components.name = e,
        this.components.end = this.setEndPunctuation(e),
        this.$name.text(this.components.name)
    },
    setEndPunctuation: function(e) {
        return m.utils.endsWithEndPunctuation(e) ? "" : "."
    },
    editName: function() {
        var e = this;
        this.editingName() || (this.$name.css("min-height", this.$name.css("height")),
        this.$name.attr("contenteditable", !0).addClass("editing pulse").trigger("focus"),
        this.pulseAnimationInProgress = !0,
        setTimeout(function() {
            e.pulseAnimationInProgress = !1,
            e.$name.removeClass("pulse")
        }, this.timePulse),
        setEndOfContenteditable(this.$name.get(0)),
        m.models.mantraManager.isEnabled() && this.clearMantraInterval(),
        this.contentIsOverflowing() && this.$message.animate({
            scrollLeft: this.$message[0].scrollWidth
        }, this.timeScroll))
    },
    handleDoubleClickName: function() {
        this.pulseAnimationInProgress || this.editingName() || this.editName()
    },
    handleDoubleClickMessage: function() {
        this.pulseAnimationInProgress || this.editingName() || this.openMantraSettingsFromDashboard()
    },
    contentIsOverflowing: function() {
        return this.$message[0].scrollWidth > this.$message.outerWidth()
    },
    onKeypressName: function(e) {
        13 === e.keyCode && (this.nameEventInitiated = !0,
        this.saveName(),
        this.doneEditingName())
    },
    onKeydownName: function(e) {
        27 === e.keyCode && (this.nameEventInitiated = !0,
        this.revertName(),
        this.doneEditingName())
    },
    onBlurName: function() {
        this.nameEventInitiated ? this.nameEventInitiated = !1 : (this.$name.css("min-height", ""),
        this.saveName(),
        this.doneEditingName())
    },
    saveName: function() {
        var e = this.$name.text().trim();
        this.localNameSave = !0,
        "" === e ? this.revertName() : (this.components.name = e,
        m.models.customization.save({
            displayname: e
        }))
    },
    revertName: function() {
        this.$name.text(m.models.customization.get("displayname"))
    },
    doneEditingName: function() {
        var e = this;
        this.$name.attr("contenteditable", !1).removeClass("editing").addClass("pulse"),
        this.pulseAnimationInProgress = !0,
        this.setMantraIntervalIfNeeded(),
        setTimeout(function() {
            e.components.end = e.setEndPunctuation(e.components.name),
            e.$name.removeClass("pulse"),
            e.pulseAnimationInProgress = !1
        }, e.timePulse),
        this.contentIsOverflowing() && e.$message.animate({
            scrollLeft: 0
        }, e.timeScroll, function() {
            e.$message.css("text-overflow", "ellipsis")
        })
    },
    forceDisplayname: function() {
        var e = m.models.customization.get("displayname");
        this.updateMessageName(e)
    },
    onChangeDisplayname: function(e) {
        if (e) {
            var t = e.previousAttributes().displayname
              , n = e.changedAttributes().displayname;
            if (t && n !== t) {
                if (this.localNameSave)
                    return void (this.localNameSave = !1);
                if (!(this.components.name === t) || this.editingName())
                    return;
                this.updateMessageName(n)
            }
        }
    },
    handleGlobalClick: function(e) {
        this.$dropdownContainer && 0 !== this.$dropdownContainer.length && ($.contains(this.$dropdownContainer[0], e.target) || this.hideDropdown())
    },
    handleClickDropdownControl: function() {
        this.$dropdown.is(":visible") ? this.hideDropdown() : (this.$dropdownContainer.addClass("active"),
        this.isRoomForDropdown() || this.$dropdownContainer.addClass("shift-to-left"))
    },
    isRoomForDropdown: function() {
        var e = this.$dropdown[0].getBoundingClientRect();
        return window.innerWidth - e.right >= this.marginRightDropdownMinimum
    },
    hideDropdown: function() {
        this.$dropdownContainer && this.$dropdownContainer.removeClass("active shift-to-left")
    },
    makeRoomForDropdownContainer: function() {
        document.documentElement.clientWidth - rightPosition(this.$message) < this.$dropdownContainer.outerWidth(!0) && this.$message.addClass("narrow")
    },
    handleClickMantraFav: function(e) {
        e.stopPropagation(),
        m.models.mantraManager.toggleFav(this.mantraActiveModel),
        this.dropdownToggleActionTaken = !0,
        m.sendEvent("Greeting dropdown", "Mantra fav toggle")
    },
    triggerUpsellIfNeeded: function(e) {
        return !m.conditionalFeatures.featureEnabled("plus") && (this.dropdownToggleActionTaken && (this.dropdownToggleActionTaken = !1),
        m.commandManager.execute("upsell.message", this.upsellOptions[e]),
        !0)
    },
    handleClickMantraPin: function(e) {
        e.stopPropagation(),
        this.triggerUpsellIfNeeded("pin") || (this.dropdownToggleActionTaken = !0,
        m.models.mantraManager.pinMantra(m.models.mantraManager.getActiveItem(), "dashboard"),
        m.sendEvent("Greeting dropdown", "Mantra pin toggle"))
    },
    waitForMantra: function() {
        this.waitingForMantra = !0
    },
    handleClickMantraRemove: function(e) {
        this.plusUser ? ($(e.currentTarget).find(".item-label").html("Processing…"),
        this.waitForMantra()) : this.render(this.renderTypes.SHOW_GREETING),
        m.models.mantraManager.skipItem(!0),
        m.sendEvent("Greeting dropdown", "Mantra momo remove")
    },
    handleClickMantraSkip: function(e) {
        if (!this.triggerUpsellIfNeeded("skip")) {
            var t = $(e.currentTarget)
              , n = this;
            this.skipHelperStart(t),
            m.models.mantraManager.skipItem().then(function() {
                n.skipHelperFinish(t)
            }).catch(function() {
                n.skipHelperFinish(t)
            }),
            m.sendEvent("Greeting dropdown", "Mantra momo skip")
        }
    },
    skipHelperStart: function(e) {
        e.find(".dropdown-list-icon").addClass("active"),
        e.find(".dropdown-list-label").html("Skipping…"),
        this.skipInProgress = !0,
        this.waitForMantra()
    },
    skipHelperFinish: function(e) {
        e.find(".dropdown-list-icon").removeClass("active"),
        e.find(".dropdown-list-label").html("Skip"),
        this.skipInProgress = !1,
        this.hideDropdown()
    },
    showUpsell: function(e) {
        if (this.upsellView)
            this.upsellView.options = e,
            this.upsellView.render();
        else {
            e.template = m.templates.upsell.appupsell,
            this.upsellView = new m.views.upsell.Message(e);
            var t = this.upsellView.render().$el;
            this.$(".app").append(t)
        }
        this.upsellView.show()
    },
    handleClickShowTodaysMantra: function(e) {
        e.stopPropagation(),
        m.models.mantraManager.noMantra ? this.triggerUpsellIfNeeded("show") || this.hideDropdown() : (m.models.mantraManager.isEnabled() ? this.render(this.renderTypes.SHOW_MANTRA) : (this.waitForMantra(),
        m.models.mantraManager.toggleEnabled(),
        m.models.mantraManager.getActiveItem()),
        this.hideDropdown(),
        m.sendEvent("Greeting dropdown", "Show Mantra"))
    },
    handleClickMantraSettings: function(e) {
        e.stopPropagation(),
        this.openMantraSettingsFromDashboard(),
        m.sendEvent("Greeting dropdown", "Mantra settings")
    },
    handleClickDisplaynameEdit: function(e) {
        e.stopPropagation(),
        this.hideDropdown(),
        this.editName(),
        m.sendEvent("Greeting dropdown", "Displayname edit")
    }
}),
m.models.Mantra = Backbone.Model.extend({
    idAttribute: "forDate",
    defaults: function() {
        return {
            body: "New Mantra",
            type: "mantra",
            is_favorite: !1
        }
    },
    save: function(e, t) {
        (t = t || {}).update = !0,
        Backbone.Model.prototype.save.call(this, e, t)
    },
    isPinned: function() {
        var e = m.models.mantraManager.getPinnedMantra();
        return !!e && this.get("_id") === e.id
    }
}),
m.views.CenterClock = Backbone.View.extend({
    attributes: {
        class: "app-container clock"
    },
    events: {
        dblclick: "toggleMode"
    },
    initialize: function() {
        var e = localStorage.getItem("percentClockActive");
        e && (m.models.customization.save("percentClockActive", e),
        localStorage.removeItem("percentClockActive")),
        this.listenTo(m.models.customization, "change:percentClock", this.percentClockToggled),
        this.listenTo(m.models.customization, "change:percentClockActive", this.percentClockToggled),
        this.listenTo(m.models.customization, "change:clockVisible", this.balanceChanged),
        this.listenTo(m.models.customization, "change:balanceModeStr", this.balanceChanged),
        this.listenTo(m.views.greeting, "hide-clock-on-login", this.hideClockOnLogin),
        this.renderedOnce = !1,
        this.render()
    },
    render: function() {
        var e = m.models.customization.getComputedSetting("clockVisible");
        if (e || !this.renderedOnce) {
            var t = (this.options.order || "append") + "To"
              , n = this;
            return m.models.customization.get("percentClock") && m.models.customization.get("percentClockActive") && m.models.balanceMode.getDays()[m.date().getDay()] ? m.views.percentClock = m.views.clockView = new m.views.PercentClock({
                model: this.model,
                parent: this
            }) : m.views.clockView = new m.views.DefaultClock({
                model: this.model,
                parent: this,
                renderedOnce: this.renderedOnce
            }),
            this.$el[t]("." + this.options.region).html(""),
            this.$el.append(m.views.clockView.render().$el),
            e && this.$el.mFadeIn(),
            setTimeout(function() {
                n.renderedOnce = !0
            }, 1e3),
            this
        }
    },
    balanceChanged: function() {
        var e = m.models.customization.getComputedSetting("clockVisible");
        if (this.oldVisibility !== e) {
            this.oldVisibility = e;
            var t = this
              , n = !1
              , i = !1;
            e ? (this.renderedOnce ? n = !0 : (setTimeout(function() {
                t.render()
            }, 5),
            i = !0),
            setTimeout(function() {
                n && t.$el.mFadeIn(),
                m.views.greeting.moveOffCenter()
            }, i ? 10 : 0)) : (t.$el.mFadeOut(500, !0),
            m.views.greeting.moveToCenter())
        }
    },
    hideClockOnLogin: function() {
        this.$el.mHide(!0)
    },
    percentClockToggled: function(e) {
        e && e.changed && 1 === Object.keys(e.changed).length && e.changed.percentClock && m.models.customization.get("percentClock") && m.models.customization.save("percentClockActive", !0),
        this.render()
    },
    toggleMode: function() {
        m.models.customization.get("percentClock") && (m.models.customization.save("percentClockActive", !m.models.customization.get("percentClockActive")),
        this.render())
    }
}),
m.views.DefaultClock = Backbone.View.extend({
    attributes: {
        class: "default-clock"
    },
    template: m.templates.centerclock.clock,
    initialize: function(e) {
        this.type = "default",
        this.renderedOnce = e.renderedOnce,
        this.render(),
        this.listenTo(this.model, "change:time", this.update, this),
        this.listenTo(m.models.customization, "change:hour12clock", this.timeFormatSettingChanged)
    },
    render: function() {
        var e = this
          , t = {
            time: this.model.getTimeString(),
            format: this.model.getTimePeriod()
        };
        return this.$el.html(this.template(t)),
        this.$time = this.$(".time"),
        this.$format = this.$(".format"),
        this.update(),
        this.renderedOnce ? this.setTimeFormat(!1) : setTimeout(function() {
            e.renderedOnce = !0
        }, 1e3),
        this
    },
    update: function() {
        this.$time.html(this.model.getTimeString())
    },
    toggleFormat: function() {
        m.models.customization.get("percentClock") || m.models.customization.save({
            hour12clock: !m.models.customization.get("hour12clock")
        })
    },
    timeFormatSettingChanged: function() {
        this.setTimeFormat(!0),
        this.update()
    },
    setTimeFormat: function(e) {
        var t = this;
        m.models.customization.get("hour12clock") && this.renderedOnce ? (e && setTimeout(function() {
            t.$format.addClass("show")
        }, 40),
        this.$format.html(this.model.getTimePeriod())) : this.$format.removeClass("show")
    }
}),
m.views.PercentClock = Backbone.View.extend({
    attributes: {
        class: "percent-clock"
    },
    template: m.templates.centerclock.clock,
    events: {},
    initialize: function() {
        this.type = "percent",
        this.render(),
        this.listenTo(this.model, "change:time", this.update, this),
        this.listenTo(m.models.balanceMode, "change", this.update, this)
    },
    render: function() {
        return this.$el.html(this.template({
            time: this.getPercent(),
            format: "%"
        })),
        this.$time = this.$(".time"),
        this.$format = this.$(".format"),
        this.$format.css({
            opacity: 1,
            "font-size": "250%",
            left: "106%",
            bottom: "7%"
        }),
        this
    },
    getPercent: function() {
        var e = m.models.balanceMode.getStart()
          , t = m.models.balanceMode.getEnd()
          , n = parseInt(e.hour);
        12 === n && (n = 0);
        var i = parseInt(t.hour);
        12 === i && (i = 0);
        var a = n + ("PM" === e.noon ? 12 : 0)
          , o = parseInt(e.minute)
          , s = i + ("PM" === t.noon ? 12 : 0)
          , r = parseInt(t.minute) - 1;
        24 < s - a && (s -= 24);
        var l = m.date()
          , d = m.date();
        d.setHours(a, o, 0, 0);
        var c = m.date();
        c.setHours(s, r, 0, 0),
        d.getTime() > c.getTime() && (l.getTime() <= c.getTime() ? a -= 24 : s += 24),
        d.setHours(a, o, 0, 0),
        c.setHours(s, r, 0, 0);
        var u = 60 * (s + r / 60 - (a + o / 60)) * 60
          , g = (l.getTime() - d.getTime()) / 1e3
          , h = Math.floor(g / u * 100);
        return 100 < h && (h = "+" + (h - 100)),
        h
    },
    update: function() {
        this.$time.html(this.getPercent())
    }
}),
m.commands.AuthConnect = m.models.Command.extend({
    defaults: {
        id: "auth.connect"
    },
    execute: function(e) {
        m.commandManager.execute("auth.connect.provider", e.actionParameter, function() {
            m.trigger("todoListManager:fetch")
        })
    }
}),
m.commands.AuthConnectProvider = m.models.Command.extend({
    defaults: {
        id: "auth.connect.provider"
    },
    execute: function(e, t, n) {
        if (e && e.status && "authRequired" === e.status && e.authorizationUrl) {
            function i() {
                d.closed || setTimeout(function() {
                    d.closed || d.close()
                }, 1e3),
                t && t()
            }
            var a = e.winWidth ? e.winWidth : 600
              , o = e.winHeight ? e.winHeight : 510
              , s = e.windowFeatures ? e.windowFeatures : "titlebar,resizable,status"
              , r = window.screen.width / 2 - a / 2
              , l = window.screen.height / 2 - o / 2
              , d = window.open(e.authorizationUrl, "MomentumAuthWindow", s + ",left=" + r + ",top=" + l + ",width=" + a + ",height=" + o)
              , c = e.authorizationUrl.split("/")
              , u = "";
            1 < c.length && (u = c[c.length - 1]);
            var g = m.globals.urlRootApi + "user/auth/status/" + u
              , h = 0
              , p = 1e3
              , f = function() {
                d.closed ? i() : 100 < ++h || (h % 30 && (p += 1e3),
                $.ajax({
                    type: "GET",
                    contentType: "application/json",
                    beforeSend: setMomentumAuthHeader,
                    url: g
                }).done(function(e) {
                    e && e.token_obtained ? i() : setTimeout(function() {
                        f()
                    }, p)
                }).fail(function(e, t) {
                    setTimeout(function() {
                        f()
                    }, p)
                }))
            };
            f()
        } else
            n && n()
    }
}),
m.commands.CleanLocalStorage = m.models.Command.extend({
    defaults: {
        id: "clean.localstorage"
    },
    initialize: function() {
        this.twoDaysAgo = m.now() - 1728e5
    },
    execute: function() {
        var a = this;
        if (!(localStorage.getItem("last_cleanup") > this.twoDaysAgo))
            var o = setTimeout(function() {
                try {
                    if (!m || !m.collect || !m.collect.backgrounds)
                        return;
                    clearTimeout(o);
                    for (var e = [], t = !1, n = null, i = 0; i < localStorage.length; i++)
                        t = !1,
                        "archived-" == (n = localStorage.key(i)).substring(0, 9) && (t = !0),
                        "fallback-" == n.substring(0, 9) && (t = !0),
                        "image_displayed-" == n.substring(0, 16) && (t = !0),
                        "weather-loc-" == n.substring(0, 12) ? t = !0 : "ddl-bg-" == n.substring(0, 7) ? localStorage.getItem(n) < a.twoDaysAgo && (t = !0) : "ddl-qt-" == n.substring(0, 7) && localStorage.getItem(n) < a.twoDaysAgo && (t = !0),
                        t && e.push(n);
                    for (i = 0; i < e.length; i++)
                        localStorage.removeItem(e[i]);
                    e.length,
                    a.collectionCleaner(m.collect.backgrounds),
                    a.collectionCleaner(m.collect.quotes),
                    a.collectionCleaner(m.collect.shortquotes),
                    m.commandManager.execute("clean.localstorage.addin"),
                    localStorage.setItem("last_cleanup", m.now())
                } catch (e) {}
            }, 500)
    },
    collectionCleaner: function(e, n) {
        var i = this;
        if (e) {
            n = n || "forDate",
            entriesToClean = [],
            e.each(function(e) {
                var t = e.get(n);
                Date.parse(t) < i.twoDaysAgo && entriesToClean.push(t)
            });
            for (var t = 0; t < entriesToClean.length; t++) {
                e.get(entriesToClean[t]).destroy()
            }
            return entriesToClean.length
        }
        return 0
    }
}),
m.commands.CleanupUserData = m.models.Command.extend({
    defaults: {
        id: "user.cleanup"
    },
    execute: function(e, t) {
        e && e.type && ("notifications" == e.type ? this.cleanNotifications() : "all" == e.type && (this.cleanUserData(),
        this.managerCleanup(m),
        this.managerCleanup(m.models))),
        t && t()
    },
    managerCleanup: function(e) {
        var t = Object.keys(e);
        for (i in t) {
            var n = t[i];
            if (m.hasOwnProperty(n)) {
                var a = m[n];
                (a instanceof m.models.Manager || a instanceof m.collect.Manager) && a.cleanup && a.cleanup()
            }
        }
    },
    cleanNotifications: function() {
        for (var e = [], t = !1, n = null, i = 0; i < localStorage.length; i++)
            t = !1,
            (n = localStorage.key(i)).startsWith("momentum-messages") ? t = !0 : "ts_notifications" == n && (t = !0),
            t && e.push(n);
        for (i = 0; i < e.length; i++)
            localStorage.removeItem(e[i])
    },
    cleanUserData: function() {
        for (var e = [], t = !1, n = null, i = 0; i < localStorage.length; i++)
            t = !1,
            "notes" == (n = localStorage.key(i)) ? t = !0 : n.endsWith("-loaded-once") ? t = !0 : n.startsWith("teamFocus") ? t = !0 : n.startsWith("team-info") ? t = !0 : n.startsWith("cached-steam") ? t = !0 : n.startsWith("no-background") ? t = !0 : n.startsWith("no-quote") ? t = !0 : n.startsWith("no-mantra") ? t = !0 : n.startsWith("quicklinks") ? t = !0 : n.startsWith("teamlinks") ? t = !0 : n.startsWith("todo") ? t = !0 : n.startsWith("focus") ? t = !0 : n.startsWith("countdown") ? t = !0 : n.startsWith("clock") ? t = !0 : n.startsWith("metrics") ? t = !0 : n.startsWith("momentum-messages") ? t = !0 : n.startsWith("momentum-mantra") ? t = !0 : n.startsWith("momentum-quote") ? t = !0 : n.startsWith("momentum-background") ? t = !0 : n.startsWith("momentum-pinned") ? t = !0 : n.startsWith("ddl-") ? t = !0 : n.startsWith("cached-settings") ? t = !0 : n.startsWith("activeTodo") ? t = !0 : n.startsWith("cached-team") ? t = !0 : n.startsWith("listCache") ? t = !0 : "notes-" == n.substring(0, 6) ? t = !0 : "cachedTodoProviders" == n ? t = !0 : "cachedFocus" == n ? t = !0 : "f3t6b23d" == n ? t = !0 : "current-countdown" == n ? t = !0 : "loginParams" == n ? t = !0 : "pendingLoginState" == n ? t = !0 : "clocks" == n ? t = !0 : "clocks-" == n.substring(0, 7) ? t = !0 : "activeTodoProvider" == n ? t = !0 : "activeTodoListId-" == n.substring(0, 17) ? t = !0 : "font-" == n.substring(0, 5) ? t = !0 : "listCache-" == n.substring(0, 10) ? t = !0 : "projectCache-" == n.substring(0, 13) ? t = !0 : "activeTodo" == n.substring(0, 10) ? t = !0 : "tsCachedTodoProviders" == n ? t = !0 : "ts_notifications" == n ? t = !0 : "todos-updated" == n && (t = !0),
            t && e.push(n);
        var a = JSON.parse(localStorage.getItem("momentum-customization-1"));
        delete a.etag,
        localStorage.setItem("momentum-customization-1", JSON.stringify(a));
        for (i = 0; i < e.length; i++)
            localStorage.removeItem(e[i])
    }
}),
m.commands.LoadAddins = m.models.Command.extend({
    defaults: {
        id: "addins.load"
    },
    execute: function(e) {
        if (e) {
            if (!this.addInsLoaded)
                for (this.addInsLoaded = !0,
                i = 0; i < e.length; i++) {
                    var t = e[i];
                    t && m.addinManager.loadAddin(t)
                }
            m.trigger("processAddIns")
        }
    }
}),
m.commands.AccountLogin = m.models.Command.extend({
    defaults: {
        id: "account.login"
    },
    execute: function(e, t, n) {
        m.isLoggedIn() ? m.commandManager.execute("notification.show.enhanced", {
            message: "You are already logged in.",
            display_time: 5e3,
            viewLimit: 1,
            priority: 2
        }) : (m.commandManager.execute("user.cleanup", {
            type: "notifications"
        }),
        localStorage.doLoginOnNextLoad = !0,
        window.location.reload())
    }
}),
m.commands.Logout = m.models.Command.extend({
    defaults: {
        id: "logout"
    },
    execute: function(n, e) {
        var i = this;
        if (e) {
            var t = localStorage.getItem("momentum-customization")
              , a = localStorage.getItem("momentum-customization-1");
            return localStorage.clear(),
            localStorage.clear(),
            localStorage.setItem("momentum-customization", t),
            localStorage.setItem("momentum-customization-1", a),
            void this.showLogoutMessageAndReload(null, n)
        }
        if (m.commandManager.execute("user.cleanup", {
            type: "all"
        }),
        localStorage.token && localStorage.token_uuid) {
            var o = {
                token: localStorage.token,
                token_uuid: localStorage.token_uuid
            };
            $.ajax({
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(o),
                beforeSend: setMomentumAuthHeader,
                url: m.globals.urlRootLogin + "user/logout"
            }).done(function(e) {}).fail(function(e, t) {}).always(function(e, t) {
                i.removeTokensClearLogoutReload(n)
            })
        } else
            i.removeTokensClearLogoutReload(n)
    },
    removeTokensClearLogoutReload: function(e) {
        localStorage.removeItem("token"),
        localStorage.removeItem("token_uuid"),
        m.conditionalFeatures.clearFeatures(),
        this.showLogoutMessageAndReload(null, e)
    },
    showLogoutMessageAndReload: function(e, t) {
        localStorage.setItem("loggedOut", m.now());
        var n = t || "You have been logged out.";
        m.commandManager.execute("notification.show.enhanced", {
            message: n,
            display_time: 5e3,
            viewLimit: 1,
            priority: 2
        }, function() {
            window.location.reload()
        }, !0)
    }
}),
m.commands.SyncEnable = m.models.Command.extend({
    defaults: {
        id: "sync.enable"
    },
    execute: function(e, t, n) {
        m.conditionalFeatures.featureEnabled("serverfocus") || m.conditionalFeatures.featureEnabled("servertodos") || m.conditionalFeatures.featureEnabled("serverlinks") || m.isLoggedIn() && m.syncCoordinator.submitFeatureAccessRequest("sync-early-access", function() {
            window.location.reload()
        }, function() {
            m.commandManager.execute("notification.show.enhanced", {
                message: "Unable to enable account sync. Reload the tab and try again, or check our help site.",
                viewLimit: 1,
                priority: 2
            })
        })
    }
}),
m.commands.ThirdPartyAuthConnect = m.models.Command.extend({
    defaults: {
        id: "auth.thirdparty"
    },
    execute: function(e, t) {
        this.initiateThirdPartyLogin(e, t)
    },
    initiateThirdPartyLogin: function(e, n) {
        e = localStorage.email;
        var t, i = getBrowserName(), a = "chrome-extension";
        "Chrome" === i && (t = chrome.runtime.getURL("/login.html")),
        "Firefox" === i && (a = "firefox-extension",
        t = browser.runtime.getURL("/login.html")),
        this.loading || (this.loading = !0,
        $.ajax({
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: e,
                medium: a,
                mediumURL: t
            }),
            beforeSend: setMomentumAuthHeader,
            url: m.globals.urlRootLogin + "login/sso"
        }).done(function(e) {
            if (e) {
                if (localStorage.setItem("pendingLoginState", JSON.stringify(e)),
                e.redirectUrl)
                    return void (window.location.href = e.redirectUrl)
            } else
                n && n()
        }).fail(function(e, t) {
            n && n()
        }))
    }
}),
m.commands.WindowNavigate = m.models.Command.extend({
    defaults: {
        id: "window.navigate"
    },
    execute: function(e, t) {
        if (t) {
            var n = null;
            t.url && (n = t.url),
            e && t.urlField && (n = e.get(t.urlField)),
            n && (window.location.href = n)
        }
    }
}),
m.commands.WindowOpen = m.models.Command.extend({
    defaults: {
        id: "window.open"
    },
    execute: function(e, t) {
        if (t) {
            var n = null;
            t.url && (n = t.url),
            e && t.urlField && (n = e.get(t.urlField)),
            n && window.open(n, t.windowName || "_blank")
        }
    }
}),
m.commands.WindowAccountNavigate = m.models.Command.extend({
    defaults: {
        id: "window.account.navigate"
    },
    execute: function(e) {
        var t = buildAccountLinkUrlFromParameter(e);
        t && (window.location.href = t)
    }
}),
m.commands.WindowAccountOpen = m.models.Command.extend({
    defaults: {
        id: "window.account.open"
    },
    execute: function(e) {
        var t = buildAccountLinkUrlFromParameter(e);
        t && window.open(t, e.windowName || "_blank")
    }
}),
m.commands.NotificationShow = m.models.Command.extend({
    defaults: {
        id: "notification.show"
    },
    execute: function(e, t) {
        setTimeout(function() {
            m.models.notificationManager && m.models.notificationManager.showMessage(e, t)
        }, 10)
    }
}),
m.commands.NotificationShowEnhanced = m.models.Command.extend({
    defaults: {
        id: "notification.show.enhanced"
    },
    execute: function(e, t, n) {
        setTimeout(function() {
            m.models.notificationManager && m.models.notificationManager.showMessageEnhanced(e, t, n)
        }, 10)
    }
}),
m.commands.NotificationDismiss = m.models.Command.extend({
    defaults: {
        id: "notification.dismiss"
    },
    execute: function() {
        setTimeout(function() {
            m.models.notificationManager && m.models.notificationManager.dismissMessage()
        }, 5)
    }
}),
m.commands.UpsellMessage = m.models.Command.extend({
    defaults: {
        id: "upsell.message"
    },
    execute: function(e) {
        return m.widgetManager.getWidget(e.targetRegion).showUpsell(e)
    }
}),
m.commands.UpsellWebsite = m.models.Command.extend({
    defaults: {
        id: "upsell.website"
    },
    execute: function(e, t) {
        var n = "https://momentumdash.com/plus?utm_source=extension&utm_medium=organic";
        t && t.source ? n += "&utm_campaign=" + encodeURIComponent(t.source) : !t && e && e.source && (n += "&utm_campaign=" + encodeURIComponent(e.source));
        var i = localStorage.getItem("offered-plan");
        i && m.conditionalFeatures.featureEnabled("notes-degraded") && (n += "&resubscribe=" + i),
        m.commandManager.execute("window.open", null, {
            url: n
        })
    }
}),
m.views.TeamLogo = Backbone.View.extend({
    attributes: {
        id: "team-logo",
        class: "app-container team-logo"
    },
    template: m.templates.teamlogo.teamlogo,
    events: {
        "click .app-dash": "toggleTeamMenu",
        "click .settings-members": "goToTeamMembers",
        "click .settings-general": "goToTeamSite"
    },
    initialize: function() {
        localStorage.removeItem("cached-team-logo-url"),
        localStorage.removeItem("cached-team-logo-blob"),
        this.team = this.options.team,
        this.isAdmin = this.team.userIsAdmin,
        this.isOpen = !1,
        this.listenTo(m, "globalEvent:click", this.handleClickOutside),
        this.render()
    },
    render: function() {
        var e = (this.options.order || "prepend") + "To"
          , t = {
            logo: this.team.teamLogoUrl || null,
            isSVG: "SVG" === this.team.teamLogoFileType,
            isAdmin: this.isAdmin,
            showTeamDropdown: this.team.teamLogoUrl || this.isAdmin
        }
          , n = this.$(".notification");
        n.detach(),
        this.$el[e]("." + this.options.region).html(this.template(t)),
        n.length && this.$el.append(n),
        this.team.teamLogoUrl ? this.$el.closest(".top-left").addClass("has-logo") : this.team && (this.isAdmin ? this.$el.closest(".top-left").addClass("has-logo-placeholder") : this.$el.closest(".top-left").addClass("has-no-logo"))
    },
    toggleTeamMenu: function() {
        this.isAdmin && (this.isOpen ? this.hidePopup(!0) : this.showPopup(!0))
    },
    showPopup: function() {
        m.widgetManager.unfocusOverlap("logo"),
        this.$el.unbind("transitionend webkitTransitionEnd"),
        this.isOpen = !0,
        this.$el.closest(".top-left").addClass("team-dropdown-open"),
        this.$el.addClass("show").outerWidth(),
        this.$el.addClass("show-fade-in")
    },
    hidePopup: function() {
        m.widgetManager.refocusOverlap("logo");
        var e = this;
        this.isOpen = !1,
        this.$el.closest(".top-left").removeClass("team-dropdown-open"),
        this.$el.removeClass("show-fade-in").bind("transitionend webkitTransitionEnd", function() {
            $(this).unbind("transitionend webkitTransitionEnd"),
            e.$el.removeClass("show")
        })
    },
    handleClickOutside: function(e) {
        $.contains(this.$el[0], e.target) || this.hidePopup()
    },
    goToTeamMembers: function() {
        window.open("https://account.momentumdash.com/team/members?add", "_blank")
    },
    goToTeamSite: function() {
        window.open("https://account.momentumdash.com/", "_blank")
    }
}),
function(e) {
    e.fn.mFadeIn = function(e, t) {
        e = null != e ? e : 500,
        this.timeouts && this.timeouts.forEach(function(e) {
            clearTimeout(e)
        }),
        this.timeouts = [];
        var n = this;
        return this.addClass("m-hide"),
        this.removeClass("m-hide-display"),
        this.css("transition", "opacity " + e + "ms ease"),
        this.timeouts.push(setTimeout(function() {
            n.removeClass("m-hide-visibility m-hide")
        }, 10)),
        this.timeouts.push(setTimeout(function() {
            n.css("transition", ""),
            t && t()
        }, e + 10)),
        this
    }
    ,
    e.fn.mFadeOut = function(e, t, n) {
        e = null != e ? e : 500,
        this.timeouts && this.timeouts.forEach(function(e) {
            clearTimeout(e)
        }),
        this.timeouts = [];
        var i = this;
        return this.css("transition", "opacity " + e + "ms ease"),
        this.addClass("m-hide"),
        this.timeouts.push(setTimeout(function() {
            t ? i.addClass("m-hide-visibility") : i.addClass("m-hide-display"),
            i.css("transition", ""),
            n && n()
        }, e)),
        this
    }
    ,
    e.fn.mShow = function() {
        return this.removeClass("m-hide m-hide-display m-hide-visibility"),
        this
    }
    ,
    e.fn.mHide = function(e) {
        return e ? this.addClass("m-hide-visibility") : this.addClass("m-hide-display"),
        this
    }
    ,
    e.fn.mToggle = function(e, t) {
        ("string" != typeof e && console.log("displayType must be a string and a valid display value that is not 'none'.\ne.g. 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'list-item', 'grid', etc."),
        void 0 === t) ? this.length && ("none" === window.getComputedStyle(this[0]).display ? this.css("display", e) : this.hide()) : t ? this.css("display", e) : this.hide();
        return this
    }
    ,
    e.fn.pseudoHoverOn = function() {
        this.addClass("pseudo-hover")
    }
    ,
    e.fn.pseudoHoverOff = function() {
        this.removeClass("pseudo-hover")
    }
    ;
    var s = {};
    e.fn.mClickOutside = function(t, n) {
        var i, a = this;
        function e(e) {
            i = e.target
        }
        function o(e) {
            a[0].contains(i) || a[0].contains(e.target) || a === i || a === e.target || !0 === a.data("justBoundClickOutsideHandler") || n.call(t, e)
        }
        this.data("justBoundClickOutsideHandler", !0),
        setTimeout(function() {
            a.data("justBoundClickOutsideHandler", !1)
        }, 100),
        this.data("clickOutsideMouseupHandlerId", Math.random().toString(36).substring(7)),
        this.data("clickOutsideMousedownHandlerId", Math.random().toString(36).substring(7)),
        s[this.data("clickOutsideMouseupHandlerId")] = o,
        s[this.data("clickOutsideMousedownHandlerId")] = e,
        document.addEventListener("mouseup", o),
        document.addEventListener("mousedown", e)
    }
    ,
    e.fn.mUnbindClickOutside = function() {
        document.removeEventListener("mouseup", s[this.data("clickOutsideMouseupHandlerId")]),
        document.removeEventListener("mousedown", s[this.data("clickOutsideMousedownHandlerId")]),
        delete s[this.data("clickOutsideMouseupHandlerId")],
        delete s[this.data("clickOutsideMousedownHandlerId")],
        this.removeData("clickOutsideMouseupHandlerId"),
        this.removeData("clickOutsideMousedownHandlerId"),
        this.removeData("justBoundClickOutsideHandler")
    }
}(jQuery),
Storage.prototype.setObject = function(e, t) {
    this.setItem(e, JSON.stringify(t))
}
,
Storage.prototype.getObject = function(e) {
    var t = this.getItem(e);
    return t && JSON.parse(t)
}
,
m.models.Date = Backbone.Model.extend({
    defaults: function() {
        return {
            date: m.date()
        }
    },
    initialize: function() {
        this.listenTo(this, "change:date", this.updateTime, this),
        this.listenTo(m, "globalEvent:pageShown", this.onPageShown)
    },
    setUpdateTimer: function() {
        var e = this
          , t = 6e4
          , n = m.date();
        t = t - 1e3 * n.getSeconds() - n.getMilliseconds(),
        this.dateTimeoutId = setTimeout(function() {
            e.set("date", m.date()),
            e.setUpdateTimer()
        }, t)
    },
    getTimeString: function(e) {
        var t = m.models.customization.get("hour12clock")
          , n = (e = e || this.get("date")).getHours()
          , i = e.getMinutes();
        return 1 == t && (n = (n + 11) % 12 + 1),
        n < 10 && !t && (n = "0" + n),
        i < 10 && (i = "0" + i),
        n + ":" + i
    },
    getTimePeriod: function() {
        return 12 <= this.get("date").getHours() ? "PM" : "AM"
    },
    updateTime: function() {
        var e = this.getTimeString();
        this.get("time") !== e && this.set("time", e)
    },
    onPageShown: function() {
        var e = this.get("time")
          , t = this.getTimeString(new Date);
        void 0 !== e && e !== t && this.set("date", m.date())
    }
}),
m.views.Dashboard = Backbone.View.extend({
    initialize: function() {
        this.$loading = $('<span class="message-fill"><i class="loading-icon"></i> Loading...</span>'),
        m.console.log(m.elapsed() + ": Dashboard Init"),
        m.models.themeManager = new m.models.ThemeManager,
        m.models.customization.fetch({
            error: function() {
                m.models.customization.save(),
                m.models.themeManager.initializeThemes()
            },
            success: function() {
                m.models.themeManager.initializeThemes()
            }
        }),
        this.listenTo(m, "processAddIns", this.processAddIns),
        m.models.backgroundManager = new m.models.BackgroundManager,
        m.conditionalFeatures.featureEnabled("team") && $("body").addClass("has-team"),
        m.views.background = new m.views.Background({
            region: "background"
        }),
        m.views.backgroundInfo = new m.views.BackgroundInfo({
            region: "bottom-left"
        }),
        m.models.backgroundManager.firstFetch(),
        m.models.notificationManager = new m.models.NotificationManager,
        m.bootstrappers.InitializeQuote(m, $),
        m.models.date && m.models.date.setUpdateTimer(),
        this.trackPageVisibility(),
        this.newDayIntervalId = setInterval(function() {
            if (localStorage.activeDate) {
                if (localStorage.activeDate != getActiveDateString()) {
                    var e = 9e3 * Math.random() + 1e3;
                    setTimeout(function() {
                        localStorage.activeDate = getActiveDateString(),
                        m.trigger("newDay")
                    }, e)
                }
            } else
                localStorage.activeDate = getActiveDateString()
        }, 1e4),
        !m.models.customization.get("displayname") && !m.isLoggedIn() || localStorage.getItem("doLoginOnNextLoad") || localStorage.getItem("processNewLogin") || localStorage.getItem("loginParams") || localStorage.getItem("pendingLoginState") ? (m.readyForWidgets = !1,
        m.widgetManager.loadWidget("introduction"),
        m.listenToOnce(m.models.customization, "initialized", onSettingsInitialized)) : (m.readyForWidgets = !0,
        m.trigger("readyForWidgets"),
        this.render());
        var e = getBrowserName();
        document.body.classList.add(e),
        "Firefox" === e && getBrowserVersion() < 57 && document.body.classList.add("oldFireFox"),
        this.initializeCompleted = !0
    },
    trackPageVisibility: function() {
        var e, t;
        void 0 !== document.hidden ? (e = "hidden",
        t = "visibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden",
        t = "webkitvisibilitychange"),
        void 0 !== e && this.addEventHandler(document, t, function() {
            m.trigger(document[e] ? "globalEvent:pageHidden" : "globalEvent:pageShown")
        })
    },
    addEventHandler: function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
    },
    processAddIns: function() {
        var e = this;
        e.processAddInsIntervalId = setInterval(function() {
            e.initializeCompleted && (clearInterval(e.processAddInsIntervalId),
            m.addinManager.processPending())
        }, 50)
    },
    render: function(e, t) {
        this.renderedOnce || (this.renderedOnce = !0,
        m.bootstrappers.RenderQuote(m, $, e),
        m.views.backgroundInfo && (m.views.backgroundInfo.parentReady(e),
        m.widgets.push(m.views.backgroundInfo)),
        m.views.settingsPane = new m.views.settings.SettingsPane({
            region: "bottom-left",
            order: "prepend"
        }),
        m.widgets.push(m.views.settingsPane),
        m.views.greeting = new m.views.Greeting({
            model: m.models.date,
            region: "center",
            order: "prepend"
        }),
        m.widgets.push(m.views.greeting),
        m.views.centerClock = new m.views.CenterClock({
            model: m.models.date,
            region: "center",
            order: "prepend"
        }),
        m.widgets.push(m.views.centerClock),
        m.trigger("main-render-complete"),
        t && t())
    },
    getViewById: function(t) {
        var n = null;
        return _.each(m.widgets, function(e) {
            e.el.id === t && (n = e)
        }),
        n
    },
    removeView: function(t) {
        _.each(m.widgets, function(e) {
            e.el.id === t && e.$el.fadeTo(500, 0, function() {
                e.remove(),
                m.widgets.splice(m.widgets.indexOf(e), 1)
            })
        })
    },
    removeAllViews: function(e) {
        _.each(m.widgets, function(e) {
            e && e.$el.fadeTo(500, 0, function() {
                e.remove()
            })
        }),
        m.widgets = [],
        _.delay(e, 475)
    }
});
var bootstrap = function() {
    if (setTimeout(function() {
        try {
            var e = "";
            for (o = 0; o < 100; o++)
                e += "aaaaaaaaaa";
            localStorage.setItem("capacityTest", e),
            localStorage.removeItem("capacityTest")
        } catch (e) {
            try {
                localStorage.removeItem("capacityTest");
                for (var t = m.now() - 1728e5, n = [], i = !1, a = null, o = 0; o < localStorage.length; o++)
                    i = !1,
                    "no-mantra" == (a = localStorage.key(o)).substring(0, 9) && (i = !0),
                    "no-quote" == a.substring(0, 8) && (i = !0),
                    "no-background" == a.substring(0, 13) && (i = !0),
                    "last_cleanup" == a.substring(0, 12) && (i = !0),
                    "archived-" == a.substring(0, 9) && (i = !0),
                    "fallback-" == a.substring(0, 9) && (i = !0),
                    "listCache-" == a.substring(0, 10) && (i = !0),
                    "font-" == a.substring(0, 5) && (i = !0),
                    "image_displayed-" == a.substring(0, 16) && (i = !0),
                    "weather" == a.substring(0, 7) && (i = !0),
                    "bookmarks" == a.substring(0, 9) ? i = !0 : "ddl-bg-" == a.substring(0, 7) ? localStorage.getItem(a) < t && (i = !0) : "ddl-qt-" == a.substring(0, 7) && localStorage.getItem(a) < t && (i = !0),
                    i && n.push(a);
                for (o = 0; o < n.length; o++)
                    localStorage.removeItem(n[o])
            } catch (e) {}
        }
    }, 3e3),
    m.isLoggedIn()) {
        if (!localStorage.getItem("user_uuid")) {
            var e = localStorage.getItem("token");
            if (e) {
                var t = m.utils.parseJwt(e);
                if (t) {
                    var n = t.user_uuid || t.user_guid;
                    n && localStorage.setItem("user_uuid", n.toLowerCase())
                }
            }
        }
        localStorage.removeItem("pendingLoginState")
    }
    m.utils.setMomentumAuthHeader = setMomentumAuthHeader,
    m.utils.validateEmail = validateEmail,
    m.utils.getQueryParameter = getQueryParameter,
    m.utils.getActiveDateString = getActiveDateString,
    m.utils.activeDateStringForDate = activeDateStringForDate,
    m.utils.getDayPart = getDayPart,
    m.utils.getDayName = getDayName,
    m.utils.getMonthName = getMonthName,
    m.utils.getDaysInMonth = getDaysInMonth,
    m.utils.dateDiffIntegerDays = dateDiffIntegerDays,
    m.utils.dateIsYesterday = dateIsYesterday,
    m.utils.dateIsToday = dateIsToday,
    m.utils.dateIsTomorrow = dateIsTomorrow,
    m.utils.dateIsInLast7d = dateIsInLast7d,
    m.utils.getFriendlyDate = getFriendlyDate,
    m.utils.formatYearRelative = formatYearRelative,
    m.utils.formatMonthDayRelative = formatMonthDayRelative,
    m.utils.getHoursMinsStr = getHoursMinsStr,
    m.utils.nightsBetween = nightsBetween,
    m.utils.dateAdd = dateAdd,
    m.utils.endsWithEndPunctuation = endsWithEndPunctuation,
    m.utils.getEndPunctuationString = getEndPunctuationString,
    m.utils.capitalizeFirstLetter = capitalizeFirstLetter,
    m.utils.removeTags = removeTags,
    m.utils.lineBreakString = lineBreakString,
    m.utils.twoDigit = twoDigit,
    m.utils.isTabOrEnter = isTabOrEnter,
    m.utils.captionFormatter = function(e) {
        return e
    }
    ,
    m.utils.mergeObjects = function(e, t, n) {
        for (var i in e = e || {},
        t)
            e[i] = n && e[i] || t[i];
        return e
    }
    ,
    m.utils.toTodaysTime = function(e) {
        var t = m.date()
          , n = e.indexOf(":")
          , i = e.substring(0, n);
        return i = 12 == i ? 0 : i,
        t.setHours(parseInt(i) + ("p" === e[e.length - 2].toLowerCase() ? 12 : 0)),
        t.setMinutes(parseInt(e.substring(n + 1, e.length - 2))),
        t
    }
    ,
    m.utils.memberwiseCompareObject = function(e, t, n) {
        if (e === t)
            return !0;
        if (!(e instanceof Object && t instanceof Object))
            return !1;
        if (e.constructor !== t.constructor)
            return !1;
        for (var i in e)
            if ((!n || !_.contains(n, i)) && e.hasOwnProperty(i)) {
                if (!t.hasOwnProperty(i))
                    return !1;
                if (e[i] !== t[i]) {
                    if ("object" != typeof e[i])
                        return !1;
                    if (!Object.equals(e[i], t[i]))
                        return !1
                }
            }
        for (i in t)
            if ((!n || !_.contains(n, i)) && t.hasOwnProperty(i) && !e.hasOwnProperty(i))
                return !1;
        return !0
    }
    ,
    m.models.date = new m.models.Date,
    m.models.customization = new m.models.ComputedSettings({
        id: 1
    }),
    m.listenToOnce(m.models.customization, "initialized", onSettingsInitialized),
    m.console.log(m.elapsed() + ": Settings requested"),
    m.models.teamInfo = new m.models.TeamInfo,
    m.models.customization.initializeSettings()
};
try {
    window.browser ? browser.windows.getLastFocused().then(function(e) {
        e.incognito ? $("body").html("") : $(bootstrap)
    }) : $(bootstrap)
} catch (e) {
    $(bootstrap)
}
var onSettingsInitialized = function() {
    m.console.log(m.elapsed() + ": Settings initialized"),
    m.sendEvent("/dashboard.html?v=" + m.globals.version, null, null, "pageview");
    var e = "installed-" + m.globals.version;
    localStorage.getItem(e) || localStorage.setItem(e, !0),
    m.models.cleanupManager = new m.models.CleanupManager,
    m.addinManager = new m.models.AddinManager,
    m.commandManager = new m.CommandManager,
    (m.models.customization.get("displayname") || m.isLoggedIn()) && !localStorage.doLoginOnNextLoad || (m.prelogin = !0),
    m.models.mantraManager = new m.models.MantraManager,
    m.widgetManager = new m.models.WidgetManager,
    m.widgetManager.setupWhenReady(),
    m.appView = new m.views.Dashboard,
    !localStorage.getItem("offered-plan") && m.conditionalFeatures.featureEnabled("notes-degraded") && $.ajax({
        type: "GET",
        contentType: "application/json",
        beforeSend: setMomentumAuthHeader,
        url: m.globals.urlRootLogin + "account/history"
    }).done(function(e) {
        e.offeredPlan && localStorage.setItem("offered-plan", e.offeredPlan)
    }),
    localStorage.client_uuid || $.ajax({
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            action: "registerClient"
        }),
        beforeSend: setMomentumAuthHeader,
        url: m.globals.urlRootLogin + "user/client"
    }).done(function(e) {
        e.client_uuid && localStorage.client_uuid != e.client_uuid && (localStorage.client_uuid = e.client_uuid,
        m.trigger("client:id_created"))
    }),
    m.syncCoordinator = new m.models.SyncCoordinator,
    localStorage.firstSynchronized && m.trigger("sync:downloadIfNeeded"),
    m.syncCoordinator.syncSettings(),
    m.appView.listenTo(m, "appsReady", registerDeferedListeners)
};
function registerDeferedListeners() {
    window.addEventListener("storage", function(e) {
        if ("activeDate" == e.key && e.oldValue != e.newValue) {
            var t = 9e3 * Math.random() + 1e3;
            setTimeout(function() {
                m.trigger("newDay")
            }, t)
        }
    }),
    $(window).on("resize", function() {
        m.trigger("globalEvent:window:resize")
    }),
    window.onblur = function() {
        m.trigger("globalEvent:windowBlur")
    }
    ,
    $(document).on("click", function(e) {
        m.trigger("globalEvent:click", e)
    }),
    $(document).on("keyup", function(e) {
        27 == e.keyCode && m.trigger("globalEvent:esc", e),
        32 == e.keyCode && m.focusingOnBg && (m.focusingOnBg = !1,
        m.views.backgroundInfo.unfocusBg(),
        $(".background-info").removeClass("show-hover hotkey-hover")),
        "Alt" == e.key && m.trigger("globalEvent:altUp", e)
    }),
    $(document).on("keydown", function(e) {
        if (9 === e.keyCode && "BODY" === document.activeElement.tagName) {
            e.preventDefault();
            var t = $("#search-input");
            if (t.length)
                t.trigger("focus");
            else {
                var n = $("#focuses").find("input");
                n.length ? n.trigger("focus") : $("a:visible:first").trigger("focus")
            }
        }
        if (8 == e.keyCode && e.shiftKey && e.metaKey && m.trigger("globalEvent:metaBackspace", e),
        13 == e.keyCode && e.metaKey && m.trigger("globalEvent:metaEnter", e),
        219 == e.keyCode && e.metaKey && m.trigger("globalEvent:metaBracketLeft", e),
        221 == e.keyCode && e.metaKey && m.trigger("globalEvent:metaBracketRight", e),
        78 == e.keyCode && e.ctrlKey && m.trigger("globalEvent:ctrlN", e),
        68 == e.keyCode && e.metaKey && (e.preventDefault(),
        m.trigger("globalEvent:metaD", e)),
        70 == e.keyCode && e.altKey && m.trigger("globalEvent:altF", e),
        76 == e.keyCode && e.altKey && m.trigger("globalEvent:altL", e),
        e.altKey && 38 == e.keyCode && m.trigger("globalEvent:altArrowUp", e),
        e.altKey && 40 == e.keyCode && m.trigger("globalEvent:altArrowDown", e),
        !(e.ctrlKey || e.metaKey || e.altKey && 78 != e.keyCode || "INPUT" == document.activeElement.tagName || "TEXTAREA" == document.activeElement.tagName || 1 == document.activeElement.isContentEditable)) {
            var i;
            if (76 == e.keyCode)
                m.trigger("globalEvent:key:L", e);
            else if (70 == e.keyCode)
                i = "Focus";
            else if (84 == e.keyCode)
                m.trigger("globalEvent:key:T", e);
            else if (83 == e.keyCode)
                i = "Search";
            else if (188 == e.keyCode) {
                if (e.metaKey)
                    return;
                i = "Settings"
            } else {
                if (67 == e.keyCode && isChrome())
                    return i = "Chrome Tab",
                    m.sendEvent(i, "Hotkey"),
                    void getBrowser().tabs.update({
                        url: "chrome-search://local-ntp/local-ntp.html"
                    });
                if (8 == e.keyCode)
                    m.trigger("globalEvent:key:backspace", e);
                else if (13 == e.keyCode)
                    m.trigger("globalEvent:key:enter", e);
                else if (32 == e.keyCode) {
                    m.trigger("globalEvent:spacebar", e);
                    var a = m.widgetManager.getWidget("todo");
                    if (a && a.isHovered)
                        return;
                    m.focusingOnBg = !0,
                    m.views.backgroundInfo.focusOnBg(),
                    $(".background-info").addClass("show-hover hotkey-hover")
                } else if (38 == e.keyCode)
                    m.trigger("globalEvent:arrowUp", e);
                else if (40 == e.keyCode)
                    m.trigger("globalEvent:arrowDown", e);
                else if (37 == e.keyCode)
                    m.trigger("globalEvent:arrowLeft", e);
                else if (39 == e.keyCode)
                    m.trigger("globalEvent:arrowRight", e);
                else if (65 == e.keyCode)
                    m.trigger("globalEvent:key:A", e);
                else if (78 == e.keyCode && e.shiftKey)
                    m.trigger("globalEvent:key:shiftN", e);
                else if (78 != e.keyCode || e.shiftKey)
                    if (80 == e.keyCode)
                        m.trigger("globalEvent:key:P", e);
                    else if (86 == e.keyCode)
                        m.trigger("globalEvent:key:V", e);
                    else if (87 == e.keyCode)
                        m.trigger("globalEvent:key:W", e);
                    else if (66 == e.keyCode) {
                        if (void 0 !== getBrowser().topSites) {
                            function o() {
                                m.models.customization.save("bookmarksVisible", !m.models.customization.get("bookmarksVisible"))
                            }
                            m.views.bookmarks ? o() : m.widgetManager.loadWidget("bookmarks").then(o)
                        }
                    } else
                        e.shiftKey && 191 == e.keyCode && m.commandManager.execute("settings.toggle", null, {
                            section: "help"
                        });
                else
                    m.trigger("globalEvent:key:N", e)
            }
            i && (m.trigger("globalEvent:toggle" + i.replace(/\s+/g, "")),
            m.sendEvent(i, "Toggle Show", "Hotkey"),
            e.preventDefault())
        }
    }),
    "safari" == m.globals.platform && $("a").on("click", function(e) {
        safari.self.tab.dispatchMessage("sendClick", {
            link: this.href,
            time: (new Date).getTime()
        })
    }),
    m.listenTo(m, "user:successfulLogout", function() {
        m.appView.removeAllViews(function() {
            m.appView = new m.views.Dashboard
        })
    });
    var n = $("body");
    m.conditionalFeatures.featureEnabled("custom-bg") && !m.models.customization.get("disableDrop") && (m.appView.addEventHandler(document.body, "dragover", function(e) {
        e.stopPropagation(),
        e.preventDefault(),
        _.contains(e.dataTransfer.types, "Files") ? e.dataTransfer.dropEffect = "copy" : e.dataTransfer.dropEffect = "none"
    }),
    window.addEventListener("dragenter", function(e) {
        _.contains(e.dataTransfer.types, "Files") && (m.appView.lastTarget = e.target,
        n.addClass("blur show-drop"))
    }),
    window.addEventListener("dragleave", function(e) {
        e.preventDefault(),
        e.target !== document && e.target !== m.appView.lastTarget || n.removeClass("blur show-drop")
    }, !1),
    window.addEventListener("dragover", function(e) {
        e.preventDefault()
    }),
    m.appView.addEventHandler(document.body, "drop", function(e) {
        if (e && e.dataTransfer.files.length && Array.prototype.some.call(e.dataTransfer.files, function(e) {
            return e && e.name.match(/\.(gif|jpg|jpeg|tiff|png)$/i)
        })) {
            if (e.stopPropagation(),
            e.preventDefault(),
            n.removeClass("blur show-drop"),
            !_.contains(e.dataTransfer.types, "Files"))
                return;
            if (!m.conditionalFeatures.featureEnabled("custom-bg")) {
                return void m.commandManager.execute("upsell.message", {
                    targetRegion: "settings",
                    sourceEvent: "customBackgrounds-dropFiles",
                    buttonText: "Learn more",
                    title: "Custom Backgrounds",
                    description: "Add your own backgrounds with Plus"
                })
            }
            var t = e.dataTransfer.files;
            t && 0 < t.length && m.commandManager.ensureCommandLoaded("background.custom.uploadfiles", function() {
                m.commandManager.execute("background.custom.uploadfiles", t)
            }, null, function(e) {})
        } else
            n.removeClass("blur show-drop")
    }))
}
