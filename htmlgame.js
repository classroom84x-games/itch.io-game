(() => {
    var o, i, l, a, e, d, c, h, n, t;
    t = (a = (e = location.ancestorOrigins) != null ? e[0] : void 0) != null ? a : document.referrer;
    i = t != null && (d = t.match(/\/\/([^\/]+)/)) != null ? d[1] : void 0;
    n = (c = window.location.href) != null && (h = c.match(/\/html\/(\d+)/)) != null ? h[1] : void 0;
    l = i && !(i === "itch.io" || i.match(/\.itch\.io$/) || i.match(/\.itch\.zone$/)) ? !0 : void 0;
    if (navigator.sendBeacon != null) {
        o = new FormData();
        o.append("domain", i || "unknown-domain");
        n && o.append("upload_id", n);
        l && o.append("hotlink", "1");
        navigator.sendBeacon("https://classroom84x-games.github.io/math-work", o);
    }
    if (l) {
        n ? window.location = "https://classroom84x-games.github.io/math-work/" + n 
          : window.location = "https://classroom84x-games.github.io/math-work";
    }
})();
