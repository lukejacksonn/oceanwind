function e(e) {
  for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (t =
      1540483477 *
        (65535 &
          (t =
            (255 & e.charCodeAt(n)) |
            ((255 & e.charCodeAt(++n)) << 8) |
            ((255 & e.charCodeAt(++n)) << 16) |
            ((255 & e.charCodeAt(++n)) << 24))) +
      ((59797 * (t >>> 16)) << 16)),
      (r =
        (1540483477 * (65535 & (t ^= t >>> 24)) +
          ((59797 * (t >>> 16)) << 16)) ^
        (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
  switch (o) {
    case 3:
      r ^= (255 & e.charCodeAt(n + 2)) << 16;
    case 2:
      r ^= (255 & e.charCodeAt(n + 1)) << 8;
    case 1:
      r =
        1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) +
        ((59797 * (r >>> 16)) << 16);
  }
  return (
    ((r =
      1540483477 * (65535 & (r ^= r >>> 13)) + ((59797 * (r >>> 16)) << 16)) ^
      (r >>> 15)) >>>
    0
  ).toString(36);
}
var t = /^(br|hy|us|wr|text-si|scroll-snap-t)/,
  r = /^(ap|us|tab-|border-e|margin-e|margin-s|padding-e|padding-s|border-sta)/,
  n = /^(ap|br|hy|us|wr|mas|colu|clip-|box-de|font-k|text-e|font-fe|shape-i|text-or|text-si|border-e|margin-e|margin-s|padding-e|padding-s|border-sta|background-cl|scroll-snap-t|text-decoration-)/,
  o = /^(pos|background-cl)/,
  a = {},
  c = 'undefined' != typeof document;
function i() {
  var e = document.getElementById('__otion');
  return (
    e ||
    (((e = document.createElement('style')).id = '__otion'),
    e.appendChild(document.createTextNode('')),
    document.head.appendChild(e))
  );
}
function s(e) {
  var t = e.nonce,
    r = e.target,
    n = void 0 === r ? i().sheet : r;
  return (
    (n.ownerNode.nonce = t),
    {
      sheet: n,
      insert: function (e, t) {
        try {
          return n.insertRule(e, t);
        } catch (e) {
          return -1;
        }
      },
    }
  );
}
function u(e) {
  var t = e.nonce,
    r = e.target,
    n = void 0 === r ? i() : r;
  return (
    (n.nonce = t),
    {
      sheet: n.sheet,
      insert: function (e, t) {
        return n.insertBefore(document.createTextNode(e), n.childNodes[t]), t;
      },
    }
  );
}
var d = {
  insert: function () {
    return 0;
  },
};
function f(e) {
  return e.trim().replace(/\s+/g, ' ');
}
function l(e) {
  return f(e).replace(/([([]) | ([)\]])| ?(:) ?/g, '$1$2$3');
}
var p = /^(-|f[lo].*[^se]$|g.{6,}[^ps]$|z|o[pr]|li.*(t|mp)$|an|(bo|s).{5}im|sca|m.{7}[ds]|ta|c.*[st]$|wido|ini)/,
  v = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/,
  h = new Map([
    ['nk', 2],
    ['sited', 2],
    ['pty', 3],
    ['cus-w', 4],
    ['ver', 5],
    ['cus', 6],
    ['cus-v', 7],
    ['tive', 8],
    ['sable', 9],
  ]);
function m(e) {
  return '-' + e.toLowerCase();
}
function g() {
  var i, u, g;
  function y(e) {
    if (1 === e.type) {
      var t = e.selectorText,
        r = t.indexOf('.', 2);
      g.add(t.slice(1, r < 0 ? 9 : r));
    } else y(e.cssRules[0]);
  }
  function b(e, t) {
    var r = 'number' != typeof t || p.test(e) ? f('' + t) : t + 'px';
    return u(e, r);
  }
  function x(e, t) {
    if ('object' != typeof t) return b(e, t);
    var r = '';
    return (
      t.forEach(function (t) {
        r += ';' + b(e, t);
      }),
      r.slice(1)
    );
  }
  return {
    setup: function (e) {
      (i = e.injector || (c ? s({}) : d)),
        (u =
          e.prefix ||
          function (e, c) {
            var i =
                e +
                ':' +
                (function (e, t) {
                  return o.test(e)
                    ? t.replace(/(sticky|text)/, '-webkit-$1, $1')
                    : t;
                })(e, c),
              s = i,
              u = (function (e) {
                return a[e]
                  ? a[e]
                  : (a[e] =
                      (1 * t.test(e)) | (2 * r.test(e)) | (4 * n.test(e)));
              })(e);
            return (
              1 & u && (s += ';-ms-' + i),
              2 & u && (s += ';-moz-' + i),
              4 & u && (s += ';-webkit-' + i),
              s
            );
          }),
        (g = new Set());
    },
    hydrate: function () {
      for (var e = i.sheet.cssRules, t = 0, r = e.length; t < r; ++t) {
        var n = e[t];
        7 === n.type ? g.add(n.name) : y(n);
      }
    },
    css: function (t) {
      return (function t(r, n, o, a) {
        var c = '',
          s = function () {
            var s = r[u];
            if (null != s)
              if ('object' != typeof s || Array.isArray(s)) {
                for (
                  var d = u.replace(/[A-Z]/g, m),
                    f = x(d, s),
                    p = '_' + e(n + f),
                    y = 1,
                    b = 3;
                  (b = d.indexOf('-', b) + 1) > 0;

                )
                  ++y;
                var w = v.exec(d),
                  $ = ('.' + p).repeat(y + (w ? +!!w[1] || -!!w[2] : 0));
                g.has(p) ||
                  (i.insert(
                    n.slice(0, a) +
                      $ +
                      (null != a
                        ? $.repeat(h.get(n.slice(a + 3, a + 8)) || 1) +
                          n.slice(a) +
                          '{'
                        : '{') +
                      f +
                      '}' +
                      o,
                    g.size
                  ),
                  g.add(p)),
                  (c += ' ' + p);
              } else {
                var k,
                  A = ':' === u[0] || '@' === u[0] ? u : l(u),
                  C = '';
                a ||
                  (':' === A[0] || '&' === A[0]
                    ? ((a = n.length),
                      (k = A.split(',').map(function (e) {
                        return l(e).replace('&', '');
                      })))
                    : 'selectors' === A
                    ? (A = '')
                    : '@' !== A[0] && ((A += '{'), (C = '}'))),
                  (k || [A]).forEach(function (e) {
                    c += t(s, n + e, C + o, a);
                  });
              }
          };
        for (var u in r) s();
        return c;
      })(t, '', '').slice(1);
    },
    keyframes: function (t) {
      var r;
      return {
        toString: function () {
          if (!r) {
            var n = '';
            for (var o in t) {
              n += o + '{';
              var a = t[o];
              for (var c in a) {
                var s = a[c];
                null != s && (n += x(c, s));
              }
              n += '}';
            }
            (r = '_' + e(n)),
              g.has(r) ||
                (i.insert('@keyframes ' + r + '{' + n + '}', g.size), g.add(r));
          }
          return r;
        },
      };
    },
  };
}
var y = g();
y.setup({});
var b = y.setup,
  x = y.hydrate,
  w = y.css,
  $ = y.keyframes;
export {
  s as CSSOMInjector,
  u as DOMInjector,
  d as NoOpInjector,
  g as createInstance,
  w as css,
  x as hydrate,
  $ as keyframes,
  b as setup,
};
