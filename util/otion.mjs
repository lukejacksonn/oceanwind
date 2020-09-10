function e(e) {
  for (var t, n = 0, r = 0, s = e.length; s >= 4; ++r, s -= 4)
    (t =
      1540483477 *
        (65535 &
          (t =
            (255 & e.charCodeAt(r)) |
            ((255 & e.charCodeAt(++r)) << 8) |
            ((255 & e.charCodeAt(++r)) << 16) |
            ((255 & e.charCodeAt(++r)) << 24))) +
      ((59797 * (t >>> 16)) << 16)),
      (n =
        (1540483477 * (65535 & (t ^= t >>> 24)) +
          ((59797 * (t >>> 16)) << 16)) ^
        (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
  switch (s) {
    case 3:
      n ^= (255 & e.charCodeAt(r + 2)) << 16;
    case 2:
      n ^= (255 & e.charCodeAt(r + 1)) << 8;
    case 1:
      n =
        1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
        ((59797 * (n >>> 16)) << 16);
  }
  return (
    ((n =
      1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^
      (n >>> 15)) >>>
    0
  ).toString(36);
}
var t = /^(br|hy|us|wr|text-si|scroll-snap-t)/,
  n = /^(ap|us|tab-|border-e|margin-e|margin-s|padding-e|padding-s|border-sta)/,
  r = /^(ap|br|hy|us|wr|mas|colu|clip-|box-de|font-k|text-e|font-fe|shape-i|text-or|text-si|border-e|margin-e|margin-s|padding-e|padding-s|border-sta|background-cl|scroll-snap-t|text-decoration-)/,
  s = /^(pos|background-cl)/,
  o = {};
const c = "undefined" != typeof window,
  i = false; // "production" !== process.env.NODE_ENV;
function a() {
  let e = document.getElementById("__otion");
  return (
    e ||
    ((e = document.createElement("style")),
    (e.id = "__otion"),
    document.head.appendChild(e))
  );
}
function l({ nonce: e, target: t = a().sheet }) {
  return (
    (t.ownerNode.nonce = e),
    {
      sheet: t,
      insert(e, n) {
        try {
          return t.insertRule(e, n);
        } catch {
          return -1;
        }
      },
    }
  );
}
function u({ nonce: e, target: t = a() }) {
  return (
    (t.nonce = e),
    {
      sheet: t.sheet,
      insert: (e, n) => (
        t.insertBefore(document.createTextNode(e), t.childNodes[n]), n
      ),
    }
  );
}
const f = { insert: () => 0 };
function d(e) {
  return e.trim().replace(/\s+/g, " ");
}
const p = /^(-|f[lo].*?[^se]$|g.{6,}[^ps]$|z|o[pr]|(-w.{6})?li.*?(t|mp)$|an|(bo|s).{5}im|sca|m.{7}[ds]|ta|c.*?[st]$|wido|ini)/,
  h = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/,
  m = new Map([
    ["nk", 1],
    ["sited", 2],
    ["pty", 3],
    ["cus-w", 4],
    ["ver", 5],
    ["cus", 6],
    ["cus-v", 7],
    ["tive", 8],
    ["sable", 9],
  ]);
function g(e, t, n) {
  let r = 0;
  if (!("-" === e[1])) {
    const t = "-" === e[0] ? e.slice(e.indexOf("-", 1)) + 1 : e,
      n = h.exec(t);
    r = (n ? +!!n[1] || -!!n[2] : 0) + 1;
    let s = 1;
    for (; (s = t.indexOf("-", s) + 1); ) ++r;
  }
  return (r *= 2 * ((t && m.get(t.slice(3, 8))) || 10)), (r += +n), r;
}
function y(e) {
  return "-" + e.toLowerCase();
}
function b() {
  let a, h, m, b;
  function w() {
    if (!a || !h || !m)
      throw new Error(
        "On a custom otion instance, `setup()` must be called before usage."
      );
  }
  function $(e) {
    for (let t = e; t <= 72; ++t) ++b[t];
  }
  function x(e, t) {
    if (1 === e.type) {
      const { selectorText: n, style: r } = e,
        [, s, o] = /^..([0-9a-z]+)(:.*)?/.exec(n),
        c = r[0];
      c && $(g(c, o, !!t)), m.set(s, m.size);
    } else x(e.cssRules[0], !0);
  }
  function A(e, t) {
    const n = "number" != typeof t || p.test(e) ? d("" + t) : t + "px";
    return h(e, n);
  }
  function k(e, t) {
    if ("object" != typeof t) return A(e, t);
    let n = "";
    return (
      t.forEach((t) => {
        t && (n += ";" + A(e, t));
      }),
      n.slice(1)
    );
  }
  return {
    setup(e) {
      (a = e.injector || (c ? (i ? u({}) : l({})) : f)),
        (h =
          e.prefix ||
          ((e, c) => {
            const i = `${e}:${(function (e, t) {
              return s.test(e)
                ? t.replace(/(sticky|text)/, "-webkit-$1, $1")
                : t;
            })(e, c)}`;
            let a = i;
            const l = (function (e) {
              return o[e]
                ? o[e]
                : (o[e] = (1 * t.test(e)) | (2 * n.test(e)) | (4 * r.test(e)));
            })(e);
            return (
              1 & l && (a += ";-ms-" + i),
              2 & l && (a += ";-moz-" + i),
              4 & l && (a += ";-webkit-" + i),
              a
            );
          })),
        (m = new Map()),
        (b = new Uint16Array(72));
    },
    hydrate() {
      i && w();
      const { cssRules: e } = a.sheet;
      for (let t = 0, { length: n } = e; t < n; ++t) {
        const n = e[t];
        7 === n.type ? m.set(n.name, m.size) : x(n);
      }
    },
    css: (t) => (
      i && w(),
      (function t(n, r, s, o, c) {
        let i = "";
        for (var l in n) {
          const u = n[l];
          if (null != u)
            if ("object" != typeof u || Array.isArray(u)) {
              const t = l.replace(/^ms|[A-Z]/g, y),
                n = k(t, u),
                f = "_" + e(r + n),
                d = s;
              let p = m.get(f);
              if (null == p || d) {
                const e = g(t, null == c ? "" : r.slice(c), !!d);
                if (null == p || o[e] > p) {
                  const t = "." + f;
                  a.insert(
                    `${
                      r.slice(0, c) +
                      t +
                      (null != c ? r.slice(c).replace(/&/g, t) + "{" : "{")
                    }${n}}${s}`,
                    b[e]
                  ),
                    $(e),
                    (p = m.size),
                    m.set(f, p),
                    d && (o[e] = Math.max(o[e], p));
                }
              }
              i += " " + f;
            } else {
              let e,
                n =
                  ":" === l[0] || "@" === l[0] || "&" === l[0]
                    ? l
                    : d(l).replace(/([([]) | ([)\]])| ?(:) ?/g, "$1$2$3"),
                a = "",
                f = c;
              null == f &&
                (":" === n[0] || "&" === n[0]
                  ? ((f = r.length),
                    (e = n
                      .split(/,(?![^[]*?[^\\]["']\s*?\])/)
                      .map((e) => d(e).replace("&", ""))))
                  : "selectors" === n
                  ? (n = "")
                  : "@" !== n[0] && ((n += "{"), (a = "}"))),
                (e || [n]).forEach((e) => {
                  i += t(u, r + e, a + s, o, f);
                });
            }
        }
        return i;
      })(t, "", "", new Uint16Array(72)).slice(1)
    ),
    keyframes(t) {
      let n;
      return (
        i && w(),
        {
          toString() {
            if (!n) {
              let o = "";
              for (var r in t) {
                o += r + "{";
                const e = t[r];
                for (var s in e) {
                  const t = e[s];
                  null != t && (o += k(s, t));
                }
                o += "}";
              }
              (n = "_" + e(o)),
                m.has(n) ||
                  (a.insert(`@keyframes ${n}{${o}}`, m.size), m.set(n, m.size));
            }
            return n;
          },
        }
      );
    },
  };
}
const w = b();
w.setup({});
const $ = w.setup,
  x = w.hydrate,
  A = w.css,
  k = w.keyframes;
export {
  l as CSSOMInjector,
  u as DOMInjector,
  f as NoOpInjector,
  b as createInstance,
  A as css,
  x as hydrate,
  k as keyframes,
  $ as setup,
};
