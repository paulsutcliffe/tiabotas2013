(function (a) {
    function X(b) {
        a(b + " .cardBack").stop().animate({
            opacity: "0"
        }, {
            duration: j
        });
        window.setTimeout(function () {
            a(b + " .cardFront").stop().animate({
                opacity: "0"
            }, {
                duration: j
            })
        }, j)
    }
    function W(b) {
        var c = a(b + " .cardBack").width() / 2;
        a(b + " .cardBack").stop().animate({
            width: "0px",
            height: "" + e + "px",
            marginLeft: "" + c + "px",
            opacity: "0.5"
        }, {
            duration: h
        });
        window.setTimeout(function () {
            a(b + " .cardFront").stop().animate({
                width: "" + d + "px",
                height: "" + e + "px",
                marginLeft: "0px",
                opacity: "1"
            }, {
                duration: h
            })
        }, h)
    }
    function V(b) {
        var c = a(b + " .cardFront").width() / 2;
        a(b + " .cardBack").stop().css({
            width: "0px",
            height: "" + e + "px",
            marginLeft: "" + c + "px",
            opacity: "0.5"
        });
        a(b + " .cardFront").stop().animate({
            width: "0px",
            height: "" + e + "px",
            marginLeft: "" + c + "px",
            opacity: "0.5"
        }, {
            duration: g
        });
        window.setTimeout(function () {
            a(b + " .cardBack").stop().animate({
                width: "" + d + "px",
                height: "" + e + "px",
                marginLeft: "0px",
                opacity: "1"
            }, {
                duration: g
            })
        }, g)
    }
    function U(b) {
        a(".gameover").css({
            display: b
        })
    }
    function T() {
        a(".cards").children().remove();
        U("none");
        M(x);
        O()
    }
    function S() {
        for (var a = 0; a < B.length; a++) {
            if (u <= p + a * C) {
                return B[a]
            }
        }
        return B[B.length - 1]
    }
    function R() {
        a("#onemoretime a").click(function () {
            T()
        })
    }
    function Q() {
        if (a(".gameover_bg").children().length > 0) a(".gameover_bg").children().remove();
        a(".gameover_bg").append("<h1>" + S() + "</h1>");
        if (D == "attempts") {
            a(".gameover_bg").append("<p>" + E + u + F + "</p>")
        } else {
            a(".gameover_bg").append("<p>" + G + "</p>")
        }
        if (H == "replay") {
            a(".gameover_bg").append('<p id="onemoretime"><a>' + I + "</a></p>");
            R()
        } else {
            a(".gameover_bg").append('<p id="onemoretime">' + J + "</p>")
        }
        a(".gameover").fadeIn(m);
        var b = .5 - a(".gameover_bg").height() / z / 2;
        a(".gameover_bg").css({
            top: b * 100 + "%"
        })
    }
    function P(a, b) {
        if (v) {
            var c = "div#" + b + a + ".card";
            V(c);
            if (q == null) {
                q = a;
                r = c;
                u++
            } else {
                s = c;
                v = false;
                if (q == a) {
                    t++;
                    window.setTimeout(function () {
                        X(r);
                        X(s);
                        r = s = undefined;
                        q = null;
                        v = true
                    }, 1e3);
                    if (t == p) {
                        window.setTimeout(function () {
                            Q();
                            t = 0;
                            u = 0
                        }, l)
                    }
                } else {
                    window.setTimeout(function () {
                        W(r);
                        W(s);
                        r = s = undefined;
                        q = null;
                        v = true
                    }, 1e3)
                }
            }
        }
    }
    function O() {
        var f;
        var g;
        for (i = 0; i < o; i++) {
            if (x[i] < p) {
                f = y[x[i]].id;
                g = "a";
                id_set = f + g;
                a(".cards").append('<div class="card" id="a' + f + '"><span class="' + id_set + '"><img class="cardFront" src="' + b + '" width="' + d + '" height="' + e + '"/></span><img class="cardBack" src="' + y[x[i]].cardA + '" width="' + d + '" height="' + e + '"/></div>');
                N(id_set, f, g)
            } else {
                f = y[x[i]].id;
                g = "b";
                id_set = f + g;
                a(".cards").append('<div class="card" id="b' + f + '"><span class="' + id_set + '"><img class="cardFront" src="' + b + '" width="' + d + '" height="' + e + '"/></span><img class="cardBack" src="' + y[x[i]].cardB + '" width="' + d + '" height="' + e + '"/></div>');
                N(id_set, f, g)
            }
        }
        if (a(".bg").children().length > 0) a(".bg_img").children().remove();
        a(".bg").append('<div class="bg_img"><img id="bg" src="' + c + '"/></div>');
        a(".card").css({
            "float": "left",
            width: d + "px",
            height: e + "px",
            position: "relative"
        });
        a(".cardFront").css({
            position: "absolute"
        });
        a(".cardBack").css({
            position: "abolute"
        });
        a(".bg_img").css({
            position: "abolute"
        });
        a(".bg_img img").load(function () {
            a(".memory").fadeIn(k);
            z = a(".cards").height();
            A = a(".cards").width();
            a(".gameover").css({
                height: a(".cards").height()
            })
        })
    }
    function N(b, c, d) {
        var e = "." + b;
        a(e).click(function () {
            P(c, d)
        })
    }
    function M(a) {
        for (var b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
        return a
    }
    function L(f) {
        n = a(f);
        b = n.find("front").text();
        c = n.find("bg").text();
        d = n.find("cardW").text();
        e = n.find("cardH").text();
        columns = n.find("columns").text();
        g = Number(n.find("revealspeed").text());
        h = Number(n.find("hidespeed").text());
        j = Number(n.find("fadespeed").text());
        k = Number(n.find("introspeed").text());
        l = Number(n.find("endscreendelay").text());
        m = Number(n.find("endscreenfade").text());
        B = n.find("skills").text().split(",");
        C = Number(n.find("skillInc").text());
        D = n.find("lineTwo").text();
        E = n.find("lineTwoPre").text();
        F = n.find("lineTwoPost").text();
        G = n.find("lineTwoSolo").text();
        H = n.find("lineThree").text();
        I = n.find("lineThreeReplay").text();
        J = n.find("lineThreeLink").text();
        var i = 0;
        n.find("card").each(function () {
            w.push({
                cardA: a(this).attr("cardA"),
                cardB: a(this).attr("cardB"),
                id: i
            });
            i++
        });
        p = w.length;
        o = p * 2;
        a(".memory").css({
            width: d * columns,
            overflow: "auto"
        });
        var q = Math.ceil(o / columns);
        a(".cards").css({
            width: d * columns,
            overflow: "auto",
            height: e * q + 5 + "px"
        });
        a(".gameover").css({
            width: d * columns
        });
        for (var r = 0; r < p; r++) {
            x.push(r);
            x.push(r + p);
            y[r] = w[r];
            y[r + p] = w[r]
        }
        M(x);
        a(".memory").append('<div class="bg"></div>');
        a(".memory").append('<div class="cards"></div>');
        a(".memory").append('<div class="gameover"></div>');
        a(".gameover").append('<div class="gameover_bg"></div>');
        O()
    }
    function K() {
        a.ajax({
            type: "GET",
            url: "memory.xml",
            dataType: "xml",
            success: L
        })
    }
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var j;
    var k;
    var l;
    var m;
    var n;
    var o;
    var p;
    var q;
    var r;
    var s;
    var t = 0;
    var u = 0;
    var v = true;
    var w = [];
    var x = [];
    var y = [];
    var z;
    var A;
    var B = [];
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    K();
})(jQuery)