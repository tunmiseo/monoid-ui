var fn_addin = function(t, s, e) {
    var a = a || {};
    return a.styles = a.styles || {},
    a.commands = a.commands || {},
    a.dependencies = e || a.dependencies || {},
    a.styles.style = function() {}
    ,
    a.views = a.views || {},
    a.collect = a.collect || {},
    a.models = a.models || {},
    a.templates = a.templates || {},
    a.info = {
        widget: !0,
        placeholderType: "metric",
        id: "dashlinks",
        class: "app-container dashlinks",
        region: "top-left",
        order: "prepend",
        after: ".team-logo",
        addin: "7d9ace94-8620-4bc0-9160-fcc15d4cb578"
    },
    t.console.log(t.elapsed() + ": " + a.info.id + " started"),
    a.templates = a.templates || {},
    a.templates.dashlinks = Handlebars.template({
        compiler: [6, ">= 2.0.0-beta.1"],
        main: function(e, a, t, s) {
            return '<span class="app-dash dashlinks-icon-wrapper" data-momo-id="chromeTab" data-place="dash" data-url="chrome-search://local-ntp/local-ntp.html" title="Chrome Tab"><svg class="dashlinks-icon icon-chrome-tab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.401 497.401"><g><path d="M478.742 154.382H320.714c28.366 21.765 47.111 55.717 47.111 94.307 0 30.63-14.345 56.386-30.933 79.445-28.322 39.41-95.817 168.878-95.817 168.878 2.567.043 5.026.388 7.636.388 137.341 0 248.69-111.348 248.69-248.69-.022-33.412-6.709-65.229-18.659-94.328z"/><path d="M248.172 129.619c54.402-.388 217.628-2.049 217.628-2.049C423.24 51.511 342.069 0 248.69 0 170.819 0 101.361 35.829 55.782 91.848l75.972 134.925c10.268-55.113 58.349-96.744 116.418-97.154z"/><path d="M248.668 367.825c-51.964 0-91.568-35.117-111.974-79.855-20.535-45.018-98.061-171.984-98.061-171.984C14.301 154.425 0 199.832 0 248.69c0 124.744 91.935 227.744 211.696 245.648l77.288-134.019c-12.641 4.615-26.101 7.506-40.316 7.506z"/><circle cx="248.668" cy="248.711" r="80.416"/></g></svg></span>\x3c!--\n--\x3e<span class="app-dash dashlinks-icon-wrapper" data-momo-id="apps" data-place="dash" data-url="chrome://apps" title="Apps"><svg class="dashlinks-icon icon-apps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M3 3h6v6H3V3zm10 0h6v6h-6V3zm10 0h6v6h-6V3zM3 13h6v6H3v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6zM3 23h6v6H3v-6zm10 0h6v6h-6v-6zm10 0h6v6h-6v-6z"/></svg></span>\n'
        },
        useData: !0
    }),
    a.styles = a.styles || {},
    a.styles.style = function() {
        var e = document.createElement("style");
        e.type = "text/css",
        e.innerHTML = ".dashlinks{flex:0 0 auto;order:5}.dashlinks-icon-wrapper{height:100%;min-height:60px;max-height:var(--max-height);padding:0 var(--side-padding);display:inline-flex;align-items:center;opacity:.85;cursor:pointer;filter:drop-shadow(0 1px 5px rgba(0, 0, 0, .1));transition:opacity .1s ease}.dashlinks-icon-wrapper:hover{opacity:1}.dashlinks-icon-wrapper:active{opacity:.9;transition-duration:0s}.dashlinks .dashlinks-icon{height:18px;width:18px;margin:0;fill:#fff!important;vertical-align:-4%}",
        document.getElementsByTagName("head")[0].appendChild(e)
    }
    ,
    a.views.DashLinks = Backbone.View.extend({
        template: a.templates.dashlinks,
        events: {
            "click .dashlinks-icon-wrapper": "handleClick"
        },
        initialize: function() {
            this.listenTo(t.models.bookmarksSettings, "change:appsLocation", this.checkOptionalLinks),
            this.listenTo(t.models.bookmarksSettings, "change:chromeTabLocation", this.checkOptionalLinks),
            this.render()
        },
        checkInclusion: function(e) {
            var a = t.models.bookmarksSettings.get(e.attr("data-momo-id") + "Location") === e.attr("data-place");
            return a && !e.is(":visible") ? this.$el.append(e) : a || e.remove(),
            a
        },
        checkOptionalLinks: function() {
            var a = this
              , t = !1;
            this.dashItems.map(function(e) {
                t = a.checkInclusion(e) || t
            }),
            this.$el.toggleClass("app-container", t)
        },
        render: function() {
            if (!isChrome())
                return this.triggerLoaded(),
                this;
            this.$el.html(this.template()),
            this.dashItems = [];
            var t = this;
            return this.$(".app-dash").each(function(e, a) {
                t.dashItems.push(s(a))
            }),
            this.checkOptionalLinks(),
            this.triggerLoaded(),
            this
        },
        triggerLoaded: function() {
            this.loadTriggered || (t.widgetManager.appReady(a.info.id),
            this.loadTriggered = !0)
        },
        handleClick: function(e) {
            e.stopPropagation(),
            e.preventDefault();
            var a = e.currentTarget.dataset.url || e.currentTarget.href;
            t.models.bookmarksSettings.get("openInNewTab") || e.metaKey ? getBrowser().tabs.create({
                url: a,
                active: !1
            }) : getBrowser().tabs.update({
                url: a
            })
        }
    }),
    a.styles.style(),
    a.views.dashlinks = t.widgetManager.handover("dashlinks", a.views.DashLinks, {
        region: "top-left",
        order: "prepend"
    }),
    a
};
m.addinManager && m.addinManager.registerAddinFn("7d9ace94-8620-4bc0-9160-fcc15d4cb578", fn_addin);
