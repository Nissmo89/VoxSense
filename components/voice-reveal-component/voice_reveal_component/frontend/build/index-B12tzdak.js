// node_modules/gsap/gsap-core.js
function e(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function t(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var n = {
	autoSleep: 120,
	force3D: "auto",
	nullTargetWarn: 1,
	units: { lineHeight: "" }
}, r = {
	duration: .5,
	overwrite: !1,
	delay: 0
}, i, a, o, s = 1e8, c = 1 / s, l = Math.PI * 2, u = l / 4, d = 0, f = Math.sqrt, p = Math.cos, m = Math.sin, h = function(e) {
	return typeof e == "string";
}, g = function(e) {
	return typeof e == "function";
}, _ = function(e) {
	return typeof e == "number";
}, v = function(e) {
	return e === void 0;
}, y = function(e) {
	return typeof e == "object";
}, b = function(e) {
	return e !== !1;
}, x = function() {
	return typeof window < "u";
}, S = function(e) {
	return g(e) || h(e);
}, C = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}, w = Array.isArray, T = /random\([^)]+\)/g, E = /,\s*/g, D = /(?:-?\.?\d|\.)+/gi, O = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, k = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, A = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, j = /[+-]=-?[.\d]+/, M = /[^,'"\[\]\s]+/gi, N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, P, F, I, L, R = {}, ee = {}, te, ne = function(e) {
	return (ee = De(e, R)) && qn;
}, re = function(e, t) {
	return !t && void 0;
}, ie = function(e, t) {
	return e && (R[e] = t) && ee && (ee[e] = t) || R;
}, ae = function() {
	return 0;
}, oe = {
	suppressEvents: !0,
	isStart: !0,
	kill: !1
}, se = {
	suppressEvents: !0,
	kill: !1
}, ce = { suppressEvents: !0 }, le = {}, ue = [], de = {}, fe, pe = {}, me = {}, he = 30, ge = [], _e = "", ve = function(e) {
	var t = e[0], n, r;
	if (y(t) || g(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
		for (r = ge.length; r-- && !ge[r].targetTest(t););
		n = ge[r];
	}
	for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new nn(e[r], n))) || e.splice(r, 1);
	return e;
}, ye = function(e) {
	return e._gsap || ve(ut(e))[0]._gsap;
}, z = function(e, t, n) {
	return (n = e[t]) && g(n) ? e[t]() : v(n) && e.getAttribute && e.getAttribute(t) || n;
}, be = function(e, t) {
	return (e = e.split(",")).forEach(t) || e;
}, B = function(e) {
	return Math.round(e * 1e5) / 1e5 || 0;
}, V = function(e) {
	return Math.round(e * 1e7) / 1e7 || 0;
}, H = function(e, t) {
	var n = t.charAt(0), r = parseFloat(t.substr(2));
	return e = parseFloat(e), n === "+" ? e + r : n === "-" ? e - r : n === "*" ? e * r : e / r;
}, xe = function(e, t) {
	for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
	return r < n;
}, U = function() {
	var e = ue.length, t = ue.slice(0), n, r;
	for (de = {}, ue.length = 0, n = 0; n < e; n++) r = t[n], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, W = function(e) {
	return !!(e._initted || e._startAt || e.add);
}, Se = function(e, t, n, r) {
	ue.length && !a && U(), e.render(t, n, r || !!(a && t < 0 && W(e))), ue.length && !a && U();
}, Ce = function(e) {
	var t = parseFloat(e);
	return (t || t === 0) && (e + "").match(M).length < 2 ? t : h(e) ? e.trim() : e;
}, we = function(e) {
	return e;
}, Te = function(e, t) {
	for (var n in t) n in e || (e[n] = t[n]);
	return e;
}, Ee = function(e) {
	return function(t, n) {
		for (var r in n) r in t || r === "duration" && e || r === "ease" || (t[r] = n[r]);
	};
}, De = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, Oe = function e(t, n) {
	for (var r in n) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = y(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
	return t;
}, ke = function(e, t) {
	var n = {}, r;
	for (r in e) r in t || (n[r] = e[r]);
	return n;
}, Ae = function(e) {
	var t = e.parent || P, n = e.keyframes ? Ee(w(e.keyframes)) : Te;
	if (b(e.inherit)) for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
	return e;
}, je = function(e, t) {
	for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
	return n < 0;
}, Me = function(e, t, n, r, i) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var a = e[r], o;
	if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
	return a ? (t._next = a._next, a._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = a, t.parent = t._dp = e, t;
}, Ne = function(e, t, n, r) {
	n === void 0 && (n = "_first"), r === void 0 && (r = "_last");
	var i = t._prev, a = t._next;
	i ? i._next = a : e[n] === t && (e[n] = a), a ? a._prev = i : e[r] === t && (e[r] = i), t._next = t._prev = t.parent = null;
}, Pe = function(e, t) {
	e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Fe = function(e, t) {
	if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n;) n._dirty = 1, n = n.parent;
	return e;
}, Ie = function(e) {
	for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
	return e;
}, Le = function(e, t, n, r) {
	return e._startAt && (a ? e._startAt.revert(se) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r));
}, Re = function e(t) {
	return !t || t._ts && e(t.parent);
}, ze = function(e) {
	return e._repeat ? Be(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Be = function(e, t) {
	var n = Math.floor(e = V(e / t));
	return e && n === e ? n - 1 : n;
}, Ve = function(e, t) {
	return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, He = function(e) {
	return e._end = V(e._start + (e._tDur / Math.abs(e._ts || e._rts || c) || 0));
}, Ue = function(e, t) {
	var n = e._dp;
	return n && n.smoothChildTiming && e._ts && (e._start = V(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), He(e), n._dirty || Fe(n, e)), e;
}, We = function(e, t) {
	var n;
	if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = Ve(e.rawTime(), t), (!t._dur || it(0, t.totalDuration(), n) - t._tTime > c) && t.render(n, !0)), Fe(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
		if (e._dur < e.duration()) for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
		e._zTime = -c;
	}
}, Ge = function(e, t, n, r) {
	return t.parent && Pe(t), t._start = V((_(n) ? n : !n && Ye(t) && (!e._last || e._last._start >= e._time) ? e._last ? e._last._start : e._time : n || e !== P ? tt(e, n, t) : e._time) + t._delay), t._end = V(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Me(e, t, "_first", "_last", e._sort ? "_start" : 0), Ye(t) || (e._recent = t), r || We(e, t), e._ts < 0 && Ue(e, e._tTime), e;
}, Ke = function(e, t) {
	return (R.ScrollTrigger || void 0) && R.ScrollTrigger.create(t, e);
}, qe = function(e, t, n, r, i) {
	if (fn(e, t, i), !e._initted) return 1;
	if (!n && e._pt && !a && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && fe !== Ht.frame) return ue.push(e), e._lazy = [i, r], 1;
}, Je = function e(t) {
	var n = t.parent;
	return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
}, Ye = function(e) {
	var t = e.data;
	return t === "isFromStart" || t === "isStart";
}, Xe = function(e, t, n, r) {
	var i = e.ratio, o = t < 0 || !t && (!e._start && Je(e) && (e._initted || !Ye(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ye(e)) ? 0 : 1, s = e._rDelay, l = 0, u, d, f;
	if (s && e._repeat && (l = it(0, e._tDur, t), d = Be(l, s), e._yoyo && d & 1 && (o = 1 - o), d !== Be(e._tTime, s) && (i = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== i || a || r || e._zTime === c || !t && e._zTime) {
		if (!e._initted && qe(e, t, r, n, l)) return;
		for (f = e._zTime, e._zTime = t || (n ? c : 0), n ||= t && !f, e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u;) u.r(o, u.d), u = u._next;
		t < 0 && Le(e, t, n, !0), e._onUpdate && !n && Dt(e, "onUpdate"), l && e._repeat && !n && e.parent && Dt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Pe(e, 1), !n && !a && (Dt(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
	} else e._zTime ||= t;
}, Ze = function(e, t, n) {
	var r;
	if (n > t) for (r = e._first; r && r._start <= n;) {
		if (r.data === "isPause" && r._start > t) return r;
		r = r._next;
	}
	else for (r = e._last; r && r._start >= n;) {
		if (r.data === "isPause" && r._start < t) return r;
		r = r._prev;
	}
}, Qe = function(e, t, n, r) {
	var i = e._repeat, a = V(t) || 0, o = e._tTime / e._tDur;
	return o && !r && (e._time *= a / e._dur), e._dur = a, e._tDur = i ? i < 0 ? 1e10 : V(a * (i + 1) + e._rDelay * i) : a, o > 0 && !r && Ue(e, e._tTime = e._tDur * o), e.parent && He(e), n || Fe(e.parent, e), e;
}, $e = function(e) {
	return e instanceof an ? Fe(e) : Qe(e, e._dur);
}, et = {
	_start: 0,
	endTime: ae,
	totalDuration: ae
}, tt = function e(t, n, r) {
	var i = t.labels, a = t._recent || et, o = t.duration() >= s ? a.endTime(!1) : t._dur, c, l, u;
	return h(n) && (isNaN(n) || n in i) ? (l = n.charAt(0), u = n.substr(-1) === "%", c = n.indexOf("="), l === "<" || l === ">" ? (c >= 0 && (n = n.replace(/=/, "")), (l === "<" ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (c < 0 ? a : r).totalDuration() / 100 : 1)) : c < 0 ? (n in i || (i[n] = o), i[n]) : (l = parseFloat(n.charAt(c - 1) + n.substr(c + 1)), u && r && (l = l / 100 * (w(r) ? r[0] : r).totalDuration()), c > 1 ? e(t, n.substr(0, c - 1), r) + l : o + l)) : n == null ? o : +n;
}, nt = function(e, t, n) {
	var r = _(t[1]), i = (r ? 2 : 1) + (e < 2 ? 0 : 1), a = t[i], o, s;
	if (r && (a.duration = t[1]), a.parent = n, e) {
		for (o = a, s = n; s && !("immediateRender" in o);) o = s.vars.defaults || {}, s = b(s.vars.inherit) && s.parent;
		a.immediateRender = b(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[i - 1];
	}
	return new yn(t[0], a, t[i + 1]);
}, rt = function(e, t) {
	return e || e === 0 ? t(e) : t;
}, it = function(e, t, n) {
	return n < e ? e : n > t ? t : n;
}, at = function(e, t) {
	return !h(e) || !(t = N.exec(e)) ? "" : t[1];
}, ot = function(e, t, n) {
	return rt(n, function(n) {
		return it(e, t, n);
	});
}, st = [].slice, ct = function(e, t) {
	return e && y(e) && "length" in e && (!t && !e.length || e.length - 1 in e && y(e[0])) && !e.nodeType && e !== F;
}, lt = function(e, t, n) {
	return n === void 0 && (n = []), e.forEach(function(e) {
		var r;
		return h(e) && !t || ct(e, 1) ? (r = n).push.apply(r, ut(e)) : n.push(e);
	}) || n;
}, ut = function(e, t, n) {
	return o && !t && o.selector ? o.selector(e) : h(e) && !n && (I || !Ut()) ? st.call((t || L).querySelectorAll(e), 0) : w(e) ? lt(e, n) : ct(e) ? st.call(e, 0) : e ? [e] : [];
}, dt = function(e) {
	return e = ut(e)[0] || re("Invalid scope") || {}, function(t) {
		var n = e.current || e.nativeElement || e;
		return ut(t, n.querySelectorAll ? n : n === e ? re("Invalid scope") || L.createElement("div") : e);
	};
}, ft = function(e) {
	return e.sort(function() {
		return .5 - Math.random();
	});
}, pt = function(e) {
	if (g(e)) return e;
	var t = y(e) ? e : { each: e }, n = Zt(t.ease), r = t.from || 0, i = parseFloat(t.base) || 0, a = {}, o = r > 0 && r < 1, c = isNaN(r) || o, l = t.axis, u = r, d = r;
	return h(r) ? u = d = {
		center: .5,
		edges: .5,
		end: 1
	}[r] || 0 : !o && c && (u = r[0], d = r[1]), function(e, o, p) {
		var m = (p || t).length, h = a[m], g, _, v, y, b, x, S, C, w;
		if (!h) {
			if (w = t.grid === "auto" ? 0 : (t.grid || [1, s])[1], !w) {
				for (S = -s; S < (S = p[w++].getBoundingClientRect().left) && w < m;);
				w < m && w--;
			}
			for (h = a[m] = [], g = c ? Math.min(w, m) * u - .5 : r % w, _ = w === s ? 0 : c ? m * d / w - .5 : r / w | 0, S = 0, C = s, x = 0; x < m; x++) v = x % w - g, y = _ - (x / w | 0), h[x] = b = l ? Math.abs(l === "y" ? y : v) : f(v * v + y * y), b > S && (S = b), b < C && (C = b);
			r === "random" && ft(h), h.max = S - C, h.min = C, h.v = m = (parseFloat(t.amount) || parseFloat(t.each) * (w > m ? m - 1 : l ? l === "y" ? m / w : w : Math.max(w, m / w)) || 0) * (r === "edges" ? -1 : 1), h.b = m < 0 ? i - m : i, h.u = at(t.amount || t.each) || 0, n = n && m < 0 ? Xt(n) : n;
		}
		return m = (h[e] - h.min) / h.max || 0, V(h.b + (n ? n(m) : m) * h.v) + h.u;
	};
}, mt = function(e) {
	var t = 10 ** ((e + "").split(".")[1] || "").length;
	return function(n) {
		var r = V(Math.round(parseFloat(n) / e) * e * t);
		return (r - r % 1) / t + (_(n) ? 0 : at(n));
	};
}, ht = function(e, t) {
	var n = w(e), r, i;
	return !n && y(e) && (r = n = e.radius || s, e.values ? (e = ut(e.values), (i = !_(e[0])) && (r *= r)) : e = mt(e.increment)), rt(t, n ? g(e) ? function(t) {
		return i = e(t), Math.abs(i - t) <= r ? i : t;
	} : function(t) {
		for (var n = parseFloat(i ? t.x : t), a = parseFloat(i ? t.y : 0), o = s, c = 0, l = e.length, u, d; l--;) i ? (u = e[l].x - n, d = e[l].y - a, u = u * u + d * d) : u = Math.abs(e[l] - n), u < o && (o = u, c = l);
		return c = !r || o <= r ? e[c] : t, i || c === t || _(t) ? c : c + at(t);
	} : mt(e));
}, gt = function(e, t, n, r) {
	return rt(w(e) ? !t : n === !0 ? !!(n = 0) : !r, function() {
		return w(e) ? e[~~(Math.random() * e.length)] : (n ||= 1e-5) && (r = n < 1 ? 10 ** ((n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * r) / r;
	});
}, _t = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduce(function(e, t) {
			return t(e);
		}, t);
	};
}, vt = function(e, t) {
	return function(n) {
		return e(parseFloat(n)) + (t || at(n));
	};
}, yt = function(e, t, n) {
	return wt(e, t, 0, 1, n);
}, bt = function(e, t, n) {
	return rt(n, function(n) {
		return e[~~t(n)];
	});
}, xt = function e(t, n, r) {
	var i = n - t;
	return w(t) ? bt(t, e(0, t.length), n) : rt(r, function(e) {
		return (i + (e - t) % i) % i + t;
	});
}, St = function e(t, n, r) {
	var i = n - t, a = i * 2;
	return w(t) ? bt(t, e(0, t.length - 1), n) : rt(r, function(e) {
		return e = (a + (e - t) % a) % a || 0, t + (e > i ? a - e : e);
	});
}, Ct = function(e) {
	return e.replace(T, function(e) {
		var t = e.indexOf("[") + 1, n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(E);
		return gt(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
	});
}, wt = function(e, t, n, r, i) {
	var a = t - e, o = r - n;
	return rt(i, function(t) {
		return n + ((t - e) / a * o || 0);
	});
}, Tt = function e(t, n, r, i) {
	var a = isNaN(t + n) ? 0 : function(e) {
		return (1 - e) * t + e * n;
	};
	if (!a) {
		var o = h(t), s = {}, c, l, u, d, f;
		if (r === !0 && (i = 1) && (r = null), o) t = { p: t }, n = { p: n };
		else if (w(t) && !w(n)) {
			for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
			d--, a = function(e) {
				e *= d;
				var t = Math.min(f, ~~e);
				return u[t](e - t);
			}, r = n;
		} else i || (t = De(w(t) ? [] : {}, t));
		if (!u) {
			for (c in n) sn.call(s, t, c, "get", n[c]);
			a = function(e) {
				return On(e, s) || (o ? t.p : t);
			};
		}
	}
	return rt(r, a);
}, Et = function(e, t, n) {
	var r = e.labels, i = s, a, o, c;
	for (a in r) o = r[a] - t, o < 0 == !!n && o && i > (o = Math.abs(o)) && (c = a, i = o);
	return c;
}, Dt = function(e, t, n) {
	var r = e.vars, i = r[t], a = o, s = e._ctx, c, l, u;
	if (i) return c = r[t + "Params"], l = r.callbackScope || e, n && ue.length && U(), s && (o = s), u = c ? i.apply(l, c) : i.call(l), o = a, u;
}, Ot = function(e) {
	return Pe(e), e.scrollTrigger && e.scrollTrigger.kill(!!a), e.progress() < 1 && Dt(e, "onInterrupt"), e;
}, kt, At = [], jt = function(e) {
	if (e) {
		if (e = !e.name && e.default || e, x() || e.headless) {
			var t = e.name, n = g(e), r = t && !n && e.init ? function() {
				this._props = [];
			} : e, i = {
				init: ae,
				render: On,
				add: sn,
				kill: An,
				modifier: kn,
				rawVars: 0
			}, a = {
				targetTest: 0,
				get: 0,
				getSetter: wn,
				aliases: {},
				register: 0
			};
			if (Ut(), e !== r) {
				if (pe[t]) return;
				Te(r, Te(ke(e, i), a)), De(r.prototype, De(i, ke(e, a))), pe[r.prop = t] = r, e.targetTest && (ge.push(r), le[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
			}
			ie(t, r), e.register && e.register(qn, r, Nn);
		} else At.push(e);
	}
}, Mt = 255, Nt = {
	aqua: [
		0,
		Mt,
		Mt
	],
	lime: [
		0,
		Mt,
		0
	],
	silver: [
		192,
		192,
		192
	],
	black: [
		0,
		0,
		0
	],
	maroon: [
		128,
		0,
		0
	],
	teal: [
		0,
		128,
		128
	],
	blue: [
		0,
		0,
		Mt
	],
	navy: [
		0,
		0,
		128
	],
	white: [
		Mt,
		Mt,
		Mt
	],
	olive: [
		128,
		128,
		0
	],
	yellow: [
		Mt,
		Mt,
		0
	],
	orange: [
		Mt,
		165,
		0
	],
	gray: [
		128,
		128,
		128
	],
	purple: [
		128,
		0,
		128
	],
	green: [
		0,
		128,
		0
	],
	red: [
		Mt,
		0,
		0
	],
	pink: [
		Mt,
		192,
		203
	],
	cyan: [
		0,
		Mt,
		Mt
	],
	transparent: [
		Mt,
		Mt,
		Mt,
		0
	]
}, Pt = function(e, t, n) {
	return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Mt + .5 | 0;
}, Ft = function(e, t, n) {
	var r = e ? _(e) ? [
		e >> 16,
		e >> 8 & Mt,
		e & Mt
	] : 0 : Nt.black, i, a, o, s, c, l, u, d, f, p;
	if (!r) {
		if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Nt[e]) r = Nt[e];
		else if (e.charAt(0) === "#") {
			if (e.length < 6 && (i = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [
				r >> 16,
				r >> 8 & Mt,
				r & Mt,
				parseInt(e.substr(7), 16) / 255
			];
			e = parseInt(e.substr(1), 16), r = [
				e >> 16,
				e >> 8 & Mt,
				e & Mt
			];
		} else if (e.substr(0, 3) === "hsl") {
			if (r = p = e.match(D), !t) s = r[0] % 360 / 360, c = r[1] / 100, l = r[2] / 100, a = l <= .5 ? l * (c + 1) : l + c - l * c, i = l * 2 - a, r.length > 3 && (r[3] *= 1), r[0] = Pt(s + 1 / 3, i, a), r[1] = Pt(s, i, a), r[2] = Pt(s - 1 / 3, i, a);
			else if (~e.indexOf("=")) return r = e.match(O), n && r.length < 4 && (r[3] = 1), r;
		} else r = e.match(D) || Nt.transparent;
		r = r.map(Number);
	}
	return t && !p && (i = r[0] / Mt, a = r[1] / Mt, o = r[2] / Mt, u = Math.max(i, a, o), d = Math.min(i, a, o), l = (u + d) / 2, u === d ? s = c = 0 : (f = u - d, c = l > .5 ? f / (2 - u - d) : f / (u + d), s = u === i ? (a - o) / f + (a < o ? 6 : 0) : u === a ? (o - i) / f + 2 : (i - a) / f + 4, s *= 60), r[0] = ~~(s + .5), r[1] = ~~(c * 100 + .5), r[2] = ~~(l * 100 + .5)), n && r.length < 4 && (r[3] = 1), r;
}, It = function(e) {
	var t = [], n = [], r = -1;
	return e.split(Rt).forEach(function(e) {
		var i = e.match(k) || [];
		t.push.apply(t, i), n.push(r += i.length + 1);
	}), t.c = n, t;
}, Lt = function(e, t, n) {
	var r = "", i = (e + r).match(Rt), a = t ? "hsla(" : "rgba(", o = 0, s, c, l, u;
	if (!i) return e;
	if (i = i.map(function(e) {
		return (e = Ft(e, t, 1)) && a + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
	}), n && (l = It(e), s = n.c, s.join(r) !== l.c.join(r))) for (c = e.replace(Rt, "1").split(k), u = c.length - 1; o < u; o++) r += c[o] + (~s.indexOf(o) ? i.shift() || a + "0,0,0,0)" : (l.length ? l : i.length ? i : n).shift());
	if (!c) for (c = e.split(Rt), u = c.length - 1; o < u; o++) r += c[o] + i[o];
	return r + c[u];
}, Rt = function() {
	var e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
	for (t in Nt) e += "|" + t + "\\b";
	return RegExp(e + ")", "gi");
}(), zt = /hsl[a]?\(/, Bt = function(e) {
	var t = e.join(" "), n;
	if (Rt.lastIndex = 0, Rt.test(t)) return n = zt.test(t), e[1] = Lt(e[1], n), e[0] = Lt(e[0], n, It(e[1])), !0;
}, Vt, Ht = function() {
	var e = Date.now, t = 500, n = 33, r = e(), i = r, a = 1e3 / 240, o = a, s = [], c, l, u, d, f, p, m = function u(m) {
		var h = e() - i, g = m === !0, _, v, y, b;
		if ((h > t || h < 0) && (r += h - n), i += h, y = i - r, _ = y - o, (_ > 0 || g) && (b = ++d.frame, f = y - d.time * 1e3, d.time = y /= 1e3, o += _ + (_ >= a ? 0 : a - _), v = 1), g || (c = l(u)), v) for (p = 0; p < s.length; p++) s[p](y, f, b, m);
	};
	return d = {
		time: 0,
		frame: 0,
		tick: function() {
			m(!0);
		},
		deltaRatio: function(e) {
			return f / (1e3 / (e || 60));
		},
		wake: function() {
			te && (!I && x() && (F = I = window, L = F.document || {}, R.gsap = qn, (F.gsapVersions || (F.gsapVersions = [])).push(qn.version), ne(ee || F.GreenSockGlobals || !F.gsap && F || {}), At.forEach(jt)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && d.sleep(), l = u || function(e) {
				return setTimeout(e, o - d.time * 1e3 + 1 | 0);
			}, Vt = 1, m(2));
		},
		sleep: function() {
			(u ? cancelAnimationFrame : clearTimeout)(c), Vt = 0, l = ae;
		},
		lagSmoothing: function(e, r) {
			t = e || Infinity, n = Math.min(r || 33, t);
		},
		fps: function(e) {
			a = 1e3 / (e || 240), o = d.time * 1e3 + a;
		},
		add: function(e, t, n) {
			var r = t ? function(t, n, i, a) {
				e(t, n, i, a), d.remove(r);
			} : e;
			return d.remove(e), s[n ? "unshift" : "push"](r), Ut(), r;
		},
		remove: function(e, t) {
			~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
		},
		_listeners: s
	}, d;
}(), Ut = function() {
	return !Vt && Ht.wake();
}, Wt = {}, Gt = /^[\d.\-M][\d.\-,\s]/, Kt = /["']/g, qt = function(e) {
	for (var t = {}, n = e.substr(1, e.length - 3).split(":"), r = n[0], i = 1, a = n.length, o, s, c; i < a; i++) s = n[i], o = i === a - 1 ? s.length : s.lastIndexOf(","), c = s.substr(0, o), t[r] = isNaN(c) ? c.replace(Kt, "").trim() : +c, r = s.substr(o + 1).trim();
	return t;
}, Jt = function(e) {
	var t = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", t);
	return e.substring(t, ~r && r < n ? e.indexOf(")", n + 1) : n);
}, Yt = function(e) {
	var t = (e + "").split("("), n = Wt[t[0]];
	return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [qt(t[1])] : Jt(e).split(",").map(Ce)) : Wt._CE && Gt.test(e) ? Wt._CE("", e) : n;
}, Xt = function(e) {
	return function(t) {
		return 1 - e(1 - t);
	};
}, Zt = function(e, t) {
	return e && (g(e) ? e : Wt[e] || Yt(e)) || t;
}, Qt = function(e, t, n, r) {
	n === void 0 && (n = function(e) {
		return 1 - t(1 - e);
	}), r === void 0 && (r = function(e) {
		return e < .5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
	});
	var i = {
		easeIn: t,
		easeOut: n,
		easeInOut: r
	}, a;
	return be(e, function(e) {
		for (var t in Wt[e] = R[e] = i, Wt[a = e.toLowerCase()] = n, i) Wt[a + (t === "easeIn" ? ".in" : t === "easeOut" ? ".out" : ".inOut")] = Wt[e + "." + t] = i[t];
	}), i;
}, $t = function(e) {
	return function(t) {
		return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2;
	};
}, en = function e(t, n, r) {
	var i = n >= 1 ? n : 1, a = (r || (t ? .3 : .45)) / (n < 1 ? n : 1), o = a / l * (Math.asin(1 / i) || 0), s = function(e) {
		return e === 1 ? 1 : i * 2 ** (-10 * e) * m((e - o) * a) + 1;
	}, c = t === "out" ? s : t === "in" ? function(e) {
		return 1 - s(1 - e);
	} : $t(s);
	return a = l / a, c.config = function(n, r) {
		return e(t, n, r);
	}, c;
}, tn = function e(t, n) {
	n === void 0 && (n = 1.70158);
	var r = function(e) {
		return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
	}, i = t === "out" ? r : t === "in" ? function(e) {
		return 1 - r(1 - e);
	} : $t(r);
	return i.config = function(n) {
		return e(t, n);
	}, i;
};
be("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
	var n = t < 5 ? t + 1 : t;
	Qt(e + ",Power" + (n - 1), t ? function(e) {
		return e ** +n;
	} : function(e) {
		return e;
	}, function(e) {
		return 1 - (1 - e) ** n;
	}, function(e) {
		return e < .5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
	});
}), Wt.Linear.easeNone = Wt.none = Wt.Linear.easeIn, Qt("Elastic", en("in"), en("out"), en()), (function(e, t) {
	var n = 1 / t, r = 2 * n, i = 2.5 * n, a = function(a) {
		return a < n ? e * a * a : a < r ? e * (a - 1.5 / t) ** 2 + .75 : a < i ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
	};
	Qt("Bounce", function(e) {
		return 1 - a(1 - e);
	}, a);
})(7.5625, 2.75), Qt("Expo", function(e) {
	return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
}), Qt("Circ", function(e) {
	return -(f(1 - e * e) - 1);
}), Qt("Sine", function(e) {
	return e === 1 ? 1 : -p(e * u) + 1;
}), Qt("Back", tn("in"), tn("out"), tn()), Wt.SteppedEase = Wt.steps = R.SteppedEase = { config: function(e, t) {
	e === void 0 && (e = 1);
	var n = 1 / e, r = e + +!t, i = +!!t, a = 1 - c;
	return function(e) {
		return ((r * it(0, a, e) | 0) + i) * n;
	};
} }, r.ease = Wt["quad.out"], be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
	return _e += e + "," + e + "Params,";
});
var nn = function(e, t) {
	this.id = d++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : z, this.set = t ? t.getSetter : wn;
}, rn = /*#__PURE__*/ function() {
	function e(e) {
		this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === Infinity ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Qe(this, +e.duration, 1, 1), this.data = e.data, o && (this._ctx = o, o.data.push(this)), Vt || Ht.wake();
	}
	var t = e.prototype;
	return t.delay = function(e) {
		return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
	}, t.duration = function(e) {
		return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
	}, t.totalDuration = function(e) {
		return arguments.length ? (this._dirty = 0, Qe(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
	}, t.totalTime = function(e, t) {
		if (Ut(), !arguments.length) return this._tTime;
		var n = this._dp;
		if (n && n.smoothChildTiming && this._ts) {
			for (Ue(this, e), !n._dp || n.parent || We(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
			!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ge(this._dp, this, this._start - this._delay);
		}
		return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === c || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Se(this, e, t)), this;
	}, t.time = function(e, t) {
		return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + ze(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time;
	}, t.totalProgress = function(e, t) {
		return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
	}, t.progress = function(e, t) {
		return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + ze(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
	}, t.iteration = function(e, t) {
		var n = this.duration() + this._rDelay;
		return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? Be(this._tTime, n) + 1 : 1;
	}, t.timeScale = function(e, t) {
		if (!arguments.length) return this._rts === -c ? 0 : this._rts;
		if (this._rts === e) return this;
		var n = this.parent && this._ts ? Ve(this.parent._time, this) : this._tTime, r = this._rts < 0;
		this._rts = +e || 0, this._ts = this._ps || e === -c ? 0 : this._rts;
		var i = this.totalDuration();
		return (r !== this._rts < 0 || n > 0 && n < i) && this.totalTime(it(-Math.abs(this._delay), i, n), t !== !1), He(this), Ie(this);
	}, t.paused = function(e) {
		if (!arguments.length) return this._ps;
		if (this._ps !== e) {
			if (this._ps = e, e) this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0;
			else {
				Ut(), this._ts = this._rts;
				var t = this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, n = this.progress() === 1 && Math.abs(this._zTime) !== c, r;
				if (n) for (this._tTime -= c, r = this._first; r;) {
					if (!r._dur && r._zTime < 0 && r._ts && r._start <= t + c) {
						n = !1;
						break;
					}
					r = r._next;
				}
				this.totalTime(t, n);
			}
		}
		return this;
	}, t.startTime = function(e) {
		if (arguments.length) {
			this._start = V(e);
			var t = this.parent || this._dp;
			return t && (t._sort || !this.parent) && Ge(t, this, this._start - this._delay), this;
		}
		return this._start;
	}, t.endTime = function(e) {
		return this._start + (b(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
	}, t.rawTime = function(e) {
		var t = this.parent || this._dp;
		return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ve(t.rawTime(e), this) : this._tTime : this._tTime;
	}, t.revert = function(e) {
		e === void 0 && (e = ce);
		var t = a;
		return a = e, W(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), a = t, this;
	}, t.globalTime = function(e) {
		for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
		return !this.parent && this._sat ? this._sat.globalTime(e) : n;
	}, t.repeat = function(e) {
		return arguments.length ? (this._repeat = e === Infinity ? -2 : e, $e(this)) : this._repeat === -2 ? Infinity : this._repeat;
	}, t.repeatDelay = function(e) {
		if (arguments.length) {
			var t = this._time;
			return this._rDelay = e, $e(this), t ? this.time(t) : this;
		}
		return this._rDelay;
	}, t.yoyo = function(e) {
		return arguments.length ? (this._yoyo = e, this) : this._yoyo;
	}, t.seek = function(e, t) {
		return this.totalTime(tt(this, e), b(t));
	}, t.restart = function(e, t) {
		return this.play().totalTime(e ? -this._delay : 0, b(t)), this._dur || (this._zTime = -c), this;
	}, t.play = function(e, t) {
		return e != null && this.seek(e, t), this.reversed(!1).paused(!1);
	}, t.reverse = function(e, t) {
		return e != null && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1);
	}, t.pause = function(e, t) {
		return e != null && this.seek(e, t), this.paused(!0);
	}, t.resume = function() {
		return this.paused(!1);
	}, t.reversed = function(e) {
		return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -c : 0)), this) : this._rts < 0;
	}, t.invalidate = function() {
		return this._initted = this._act = 0, this._zTime = -c, this;
	}, t.isActive = function() {
		var e = this.parent || this._dp, t = this._start, n;
		return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= t && n < this.endTime(!0) - c);
	}, t.eventCallback = function(e, t, n) {
		var r = this.vars;
		return arguments.length > 1 ? (t ? (r[e] = t, n && (r[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = t)) : delete r[e], this) : r[e];
	}, t.then = function(e) {
		var t = this, n = t._prom;
		return new Promise(function(r) {
			var i = g(e) ? e : we, a = function() {
				var e = t.then;
				t.then = null, n && n(), g(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e;
			};
			t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0 ? a() : t._prom = a;
		});
	}, t.kill = function() {
		Ot(this);
	}, e;
}();
Te(rn.prototype, {
	_time: 0,
	_start: 0,
	_end: 0,
	_tTime: 0,
	_tDur: 0,
	_dirty: 0,
	_repeat: 0,
	_yoyo: !1,
	parent: null,
	_initted: !1,
	_rDelay: 0,
	_ts: 1,
	_dp: 0,
	ratio: 0,
	_zTime: -c,
	_prom: 0,
	_ps: !1,
	_rts: 1
});
var an = /*#__PURE__*/ function(r) {
	t(i, r);
	function i(t, n) {
		var i;
		return t === void 0 && (t = {}), i = r.call(this, t) || this, i.labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = b(t.sortChildren), P && Ge(t.parent || P, e(i), n), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && Ke(e(i), t.scrollTrigger), i;
	}
	var o = i.prototype;
	return o.to = function(e, t, n) {
		return nt(0, arguments, this), this;
	}, o.from = function(e, t, n) {
		return nt(1, arguments, this), this;
	}, o.fromTo = function(e, t, n, r) {
		return nt(2, arguments, this), this;
	}, o.set = function(e, t, n) {
		return t.duration = 0, t.parent = this, Ae(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new yn(e, t, tt(this, n), 1), this;
	}, o.call = function(e, t, n) {
		return Ge(this, yn.delayedCall(0, e, t), n);
	}, o.staggerTo = function(e, t, n, r, i, a, o) {
		return n.duration = t, n.stagger = n.stagger || r, n.onComplete = a, n.onCompleteParams = o, n.parent = this, new yn(e, n, tt(this, i)), this;
	}, o.staggerFrom = function(e, t, n, r, i, a, o) {
		return n.runBackwards = 1, Ae(n).immediateRender = b(n.immediateRender), this.staggerTo(e, t, n, r, i, a, o);
	}, o.staggerFromTo = function(e, t, n, r, i, a, o, s) {
		return r.startAt = n, Ae(r).immediateRender = b(r.immediateRender), this.staggerTo(e, t, r, i, a, o, s);
	}, o.render = function(e, t, n) {
		var r = this._time, i = this._dirty ? this.totalDuration() : this._tDur, o = this._dur, s = e <= 0 ? 0 : V(e), l = this._zTime < 0 != e < 0 && (this._initted || !o), u, d, f, p, m, h, g, _, v, y, b, x;
		if (this !== P && s > i && e >= 0 && (s = i), s !== this._tTime || n || l) {
			if (r !== this._time && o && (s += this._time - r, e += this._time - r), u = s, v = this._start, _ = this._ts, h = !_, l && (o || (r = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
				if (b = this._yoyo, m = o + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(m * 100 + e, t, n);
				if (u = V(s % m), s === i ? (p = this._repeat, u = o) : (y = V(s / m), p = ~~y, p && p === y && (u = o, p--), u > o && (u = o)), y = Be(this._tTime, m), !r && this._tTime && y !== p && this._tTime - y * m - this._dur <= 0 && (y = p), b && p & 1 && (u = o - u, x = 1), p !== y && !this._lock) {
					var S = b && y & 1, C = S === (b && p & 1);
					if (p < y && (S = !S), r = S ? 0 : s % o ? o : s, this._lock = 1, this.render(r || (x ? 0 : V(p * m)), t, !o)._lock = 0, this._tTime = s, !t && this.parent && Dt(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1, y = p), r && r !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (o = this._dur, i = this._tDur, C && (this._lock = 2, r = S ? o : -1e-4, this.render(r, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !h)) return this;
				}
			}
			if (this._hasPause && !this._forcing && this._lock < 2 && (g = Ze(this, V(r), V(u)), g && (s -= u - (u = g._start))), this._tTime = s, this._time = u, this._act = !!_, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, r = 0), !r && s && o && !t && !y && (Dt(this, "onStart"), this._tTime !== s)) return this;
			if (u >= r && e >= 0) for (d = this._first; d;) {
				if (f = d._next, (d._act || u >= d._start) && d._ts && g !== d) {
					if (d.parent !== this) return this.render(e, t, n);
					if (d.render(d._ts > 0 ? (u - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (u - d._start) * d._ts, t, n), u !== this._time || !this._ts && !h) {
						g = 0, f && (s += this._zTime = -c);
						break;
					}
				}
				d = f;
			}
			else {
				d = this._last;
				for (var w = e < 0 ? e : u; d;) {
					if (f = d._prev, (d._act || w <= d._end) && d._ts && g !== d) {
						if (d.parent !== this) return this.render(e, t, n);
						if (d.render(d._ts > 0 ? (w - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (w - d._start) * d._ts, t, n || a && W(d)), u !== this._time || !this._ts && !h) {
							g = 0, f && (s += this._zTime = w ? -c : c);
							break;
						}
					}
					d = f;
				}
			}
			if (g && !t && (this.pause(), g.render(u >= r ? 0 : -c)._zTime = u >= r ? 1 : -1, this._ts)) return this._start = v, He(this), this.render(e, t, n);
			this._onUpdate && !t && Dt(this, "onUpdate", !0), (s === i && this._tTime >= this.totalDuration() || !s && r) && (v !== this._start && Math.abs(_) === Math.abs(this._ts) || this._lock || ((e || !o) && (s === i && this._ts > 0 || !s && this._ts < 0) && Pe(this, 1), t || e < 0 && !r || !s && !r && i || (Dt(this, s === i && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
		}
		return this;
	}, o.add = function(e, t) {
		var n = this;
		if (_(t) || (t = tt(this, t, e)), !(e instanceof rn)) {
			if (w(e)) return e.forEach(function(e) {
				return n.add(e, t);
			}), this;
			if (h(e)) return this.addLabel(e, t);
			if (g(e)) e = yn.delayedCall(0, e);
			else return this;
		}
		return this === e ? this : Ge(this, e, t);
	}, o.getChildren = function(e, t, n, r) {
		e === void 0 && (e = !0), t === void 0 && (t = !0), n === void 0 && (n = !0), r === void 0 && (r = -s);
		for (var i = [], a = this._first; a;) a._start >= r && (a instanceof yn ? t && i.push(a) : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))), a = a._next;
		return i;
	}, o.getById = function(e) {
		for (var t = this.getChildren(1, 1, 1), n = t.length; n--;) if (t[n].vars.id === e) return t[n];
	}, o.remove = function(e) {
		return h(e) ? this.removeLabel(e) : g(e) ? this.killTweensOf(e) : (e.parent === this && Ne(this, e), e === this._recent && (this._recent = this._last), Fe(this));
	}, o.totalTime = function(e, t) {
		return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = V(Ht.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), r.prototype.totalTime.call(this, e, t), this._forcing = 0, this) : this._tTime;
	}, o.addLabel = function(e, t) {
		return this.labels[e] = tt(this, t), this;
	}, o.removeLabel = function(e) {
		return delete this.labels[e], this;
	}, o.addPause = function(e, t, n) {
		var r = yn.delayedCall(0, t || ae, n);
		return r.data = "isPause", this._hasPause = 1, Ge(this, r, tt(this, e));
	}, o.removePause = function(e) {
		var t = this._first;
		for (e = tt(this, e); t;) t._start === e && t.data === "isPause" && Pe(t), t = t._next;
	}, o.killTweensOf = function(e, t, n) {
		for (var r = this.getTweensOf(e, n), i = r.length; i--;) un !== r[i] && r[i].kill(e, t);
		return this;
	}, o.getTweensOf = function(e, t) {
		for (var n = [], r = ut(e), i = this._first, a = _(t), o; i;) i instanceof yn ? xe(i._targets, r) && (a ? (!un || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && n.push(i) : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o), i = i._next;
		return n;
	}, o.tweenTo = function(e, t) {
		t ||= {};
		var n = this, r = tt(n, e), i = t, a = i.startAt, o = i.onStart, s = i.onStartParams, l = i.immediateRender, u, d = yn.to(n, Te({
			ease: t.ease || "none",
			lazy: !1,
			immediateRender: !1,
			time: r,
			overwrite: "auto",
			duration: t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || c,
			onStart: function() {
				if (n.pause(), !u) {
					var e = t.duration || Math.abs((r - (a && "time" in a ? a.time : n._time)) / n.timeScale());
					d._dur !== e && Qe(d, e, 0, 1).render(d._time, !0, !0), u = 1;
				}
				o && o.apply(d, s || []);
			}
		}, t));
		return l ? d.render(0) : d;
	}, o.tweenFromTo = function(e, t, n) {
		return this.tweenTo(t, Te({ startAt: { time: tt(this, e) } }, n));
	}, o.recent = function() {
		return this._recent;
	}, o.nextLabel = function(e) {
		return e === void 0 && (e = this._time), Et(this, tt(this, e));
	}, o.previousLabel = function(e) {
		return e === void 0 && (e = this._time), Et(this, tt(this, e), 1);
	}, o.currentLabel = function(e) {
		return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + c);
	}, o.shiftChildren = function(e, t, n) {
		n === void 0 && (n = 0);
		var r = this._first, i = this.labels, a;
		for (e = V(e); r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
		if (t) for (a in i) i[a] >= n && (i[a] += e);
		return Fe(this);
	}, o.invalidate = function(e) {
		var t = this._first;
		for (this._lock = 0; t;) t.invalidate(e), t = t._next;
		return r.prototype.invalidate.call(this, e);
	}, o.clear = function(e) {
		e === void 0 && (e = !0);
		for (var t = this._first, n; t;) n = t._next, this.remove(t), t = n;
		return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Fe(this);
	}, o.totalDuration = function(e) {
		var t = 0, n = this, r = n._last, i = s, a, o, c;
		if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e));
		if (n._dirty) {
			for (c = n.parent; r;) a = r._prev, r._dirty && r.totalDuration(), o = r._start, o > i && n._sort && r._ts && !n._lock ? (n._lock = 1, Ge(n, r, o - r._delay, 1)._lock = 0) : i = o, o < 0 && r._ts && (t -= o, (!c && !n._dp || c && c.smoothChildTiming) && (n._start += V(o / n._ts), n._time -= o, n._tTime -= o), n.shiftChildren(-o, !1, -Infinity), i = 0), r._end > t && r._ts && (t = r._end), r = a;
			Qe(n, n === P && n._time > t ? n._time : t, 1, 1), n._dirty = 0;
		}
		return n._tDur;
	}, i.updateRoot = function(e) {
		if (P._ts && (Se(P, Ve(e, P)), fe = Ht.frame), Ht.frame >= he) {
			he += n.autoSleep || 120;
			var t = P._first;
			if ((!t || !t._ts) && n.autoSleep && Ht._listeners.length < 2) {
				for (; t && !t._ts;) t = t._next;
				t || Ht.sleep();
			}
		}
	}, i;
}(rn);
Te(an.prototype, {
	_lock: 0,
	_hasPause: 0,
	_forcing: 0
});
var on = function(e, t, n, r, i, a, o) {
	var s = new Nn(this._pt, e, t, 0, 1, Dn, null, i), c = 0, l = 0, u, d, f, p, m, h, g, _;
	for (s.b = n, s.e = r, n += "", r += "", (g = ~r.indexOf("random(")) && (r = Ct(r)), a && (_ = [n, r], a(_, e, t), n = _[0], r = _[1]), d = n.match(A) || []; u = A.exec(r);) p = u[0], m = r.substring(c, u.index), f ? f = (f + 1) % 5 : m.substr(-5) === "rgba(" && (f = 1), p !== d[l++] && (h = parseFloat(d[l - 1]) || 0, s._pt = {
		_next: s._pt,
		p: m || l === 1 ? m : ",",
		s: h,
		c: p.charAt(1) === "=" ? H(h, p) - h : parseFloat(p) - h,
		m: f && f < 4 ? Math.round : 0
	}, c = A.lastIndex);
	return s.c = c < r.length ? r.substring(c, r.length) : "", s.fp = o, (j.test(r) || g) && (s.e = 0), this._pt = s, s;
}, sn = function(e, t, r, i, a, o, s, c, l, u) {
	g(i) && (i = i(a || 0, e, o));
	var d = e[t], f = r === "get" ? g(d) ? l ? e[t.indexOf("set") || !g(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d : r, p = g(d) ? l ? Sn : xn : bn, m;
	if (h(i) && (~i.indexOf("random(") && (i = Ct(i)), i.charAt(1) === "=" && (m = H(f, i) + (at(f) || 0), (m || m === 0) && (i = m))), !u || f !== i || dn) return !isNaN(f * i) && i !== "" ? (m = new Nn(this._pt, e, t, +f || 0, i - (f || 0), typeof d == "boolean" ? En : Tn, 0, p), l && (m.fp = l), s && m.modifier(s, this, e), this._pt = m) : (!d && t in e, on.call(this, e, t, f, i, p, c || n.stringFilter, l));
}, cn = function(e, t, n, r, i) {
	if (g(e) && (e = gn(e, i, t, n, r)), !y(e) || e.style && e.nodeType || w(e) || C(e)) return h(e) ? gn(e, i, t, n, r) : e;
	var a = {}, o;
	for (o in e) a[o] = gn(e[o], i, t, n, r);
	return a;
}, ln = function(e, t, n, r, i, a) {
	var o, s, c, l;
	if (pe[e] && (o = new pe[e]()).init(i, o.rawVars ? t[e] : cn(t[e], r, i, a, n), n, r, a) !== !1 && (n._pt = s = new Nn(n._pt, i, e, 0, 1, o.render, o, 0, o.priority), n !== kt)) for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;) c[o._props[l]] = s;
	return o;
}, un, dn, fn = function e(t, n, o) {
	var l = t.vars, u = l.ease, d = l.startAt, f = l.immediateRender, p = l.lazy, m = l.onUpdate, h = l.runBackwards, g = l.yoyoEase, _ = l.keyframes, v = l.autoRevert, y = t._dur, x = t._startAt, S = t._targets, C = t.parent, w = C && C.data === "nested" ? C.vars.targets : S, T = t._overwrite === "auto" && !i, E = t.timeline, D = l.easeReverse || g, O, k, A, j, M, N, F, I, L, R, ee, te, ne;
	if (!E || _ && u || (u = "none"), t._ease = Zt(u, r.ease), t._rEase = D && (Zt(D) || t._ease), t._from = !E && !!l.runBackwards, t._from && (t.ratio = 1), !E || _ && !l.stagger) {
		if (I = S[0] ? ye(S[0]).harness : 0, te = I && l[I.prop], O = ke(l, le), x && (x._zTime < 0 && x.progress(1), n < 0 && h && f && !v ? x.render(-1, !0) : x.revert(h && y ? se : oe), x._lazy = 0), d) {
			if (Pe(t._startAt = yn.set(S, Te({
				data: "isStart",
				overwrite: !1,
				parent: C,
				immediateRender: !0,
				lazy: !x && b(p),
				startAt: null,
				delay: 0,
				onUpdate: m && function() {
					return Dt(t, "onUpdate");
				},
				stagger: 0
			}, d))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (a || !f && !v) && t._startAt.revert(se), f && y && n <= 0 && o <= 0) {
				n && (t._zTime = n);
				return;
			}
		} else if (h && y && !x) {
			if (n && (f = !1), A = Te({
				overwrite: !1,
				data: "isFromStart",
				lazy: f && !x && b(p),
				immediateRender: f,
				stagger: 0,
				parent: C
			}, O), te && (A[I.prop] = te), Pe(t._startAt = yn.set(S, A)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (a ? t._startAt.revert(se) : t._startAt.render(-1, !0)), t._zTime = n, !f) e(t._startAt, c, c);
			else if (!n) return;
		}
		for (t._pt = t._ptCache = 0, p = y && b(p) || p && !y, k = 0; k < S.length; k++) {
			if (M = S[k], F = M._gsap || ve(S)[k]._gsap, t._ptLookup[k] = R = {}, de[F.id] && ue.length && U(), ee = w === S ? k : w.indexOf(M), I && (L = new I()).init(M, te || O, t, ee, w) !== !1 && (t._pt = j = new Nn(t._pt, M, L.name, 0, 1, L.render, L, 0, L.priority), L._props.forEach(function(e) {
				R[e] = j;
			}), L.priority && (N = 1)), !I || te) for (A in O) pe[A] && (L = ln(A, O, t, ee, M, w)) ? L.priority && (N = 1) : R[A] = j = sn.call(t, M, A, "get", O[A], ee, w, 0, l.stringFilter);
			t._op && t._op[k] && t.kill(M, t._op[k]), T && t._pt && (un = t, P.killTweensOf(M, R, t.globalTime(n)), ne = !t.parent, un = 0), t._pt && p && (de[F.id] = 1);
		}
		N && Mn(t), t._onInit && t._onInit(t);
	}
	t._onUpdate = m, t._initted = (!t._op || t._pt) && !ne, _ && n <= 0 && E.render(s, !0, !0);
}, pn = function(e, t, n, r, i, a, o, s) {
	var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], l, u, d, f;
	if (!c) for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--;) {
		if (l = d[f][t], l && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
		if (!l) return dn = 1, e.vars[t] = "+=0", fn(e, o), dn = 0, s ? re(t + " not eligible for reset. Try splitting into individual properties") : 1;
		c.push(l);
	}
	for (f = c.length; f--;) u = c[f], l = u._pt || u, l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c, l.c = n - l.s, u.e && (u.e = B(n) + at(u.e)), u.b && (u.b = l.s + at(u.b));
}, mn = function(e, t) {
	var n = e[0] ? ye(e[0]).harness : 0, r = n && n.aliases, i, a, o, s;
	if (!r) return t;
	for (a in i = De({}, t), r) if (a in i) for (s = r[a].split(","), o = s.length; o--;) i[s[o]] = i[a];
	return i;
}, hn = function(e, t, n, r) {
	var i = t.ease || r || "power1.inOut", a, o;
	if (w(t)) o = n[e] || (n[e] = []), t.forEach(function(e, n) {
		return o.push({
			t: n / (t.length - 1) * 100,
			v: e,
			e: i
		});
	});
	else for (a in t) o = n[a] || (n[a] = []), a === "ease" || o.push({
		t: parseFloat(e),
		v: t[a],
		e: i
	});
}, gn = function(e, t, n, r, i) {
	return g(e) ? e.call(t, n, r, i) : h(e) && ~e.indexOf("random(") ? Ct(e) : e;
}, _n = _e + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", vn = {};
be(_n + ",id,stagger,delay,duration,paused,scrollTrigger", function(e) {
	return vn[e] = 1;
}), _n = _n.split(",");
var yn = /*#__PURE__*/ function(r) {
	t(o, r);
	function o(t, a, o, s) {
		var l;
		typeof a == "number" && (o.duration = a, a = o, o = null), l = r.call(this, s ? a : Ae(a)) || this;
		var u = l.vars, d = u.duration, f = u.delay, p = u.immediateRender, m = u.stagger, h = u.overwrite, g = u.keyframes, v = u.defaults, x = u.scrollTrigger, T = a.parent || P, E = (w(t) || C(t) ? _(t[0]) : "length" in a) ? [t] : ut(t), D, O, k, A, j, M, N, F;
		if (l._targets = E.length ? ve(E) : re("GSAP target " + t + " not found. https://gsap.com", !n.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = h, g || m || S(d) || S(f)) {
			a = l.vars;
			var I = a.easeReverse || a.yoyoEase;
			if (D = l.timeline = new an({
				data: "nested",
				defaults: v || {},
				targets: T && T.data === "nested" ? T.vars.targets : E
			}), D.kill(), D.parent = D._dp = e(l), D._start = 0, m || S(d) || S(f)) {
				if (A = E.length, N = m && pt(m), y(m)) for (j in m) ~_n.indexOf(j) && (F ||= {}, F[j] = m[j]);
				for (O = 0; O < A; O++) k = ke(a, vn), k.stagger = 0, I && (k.easeReverse = I), F && De(k, F), M = E[O], k.duration = +gn(d, e(l), O, M, E), k.delay = (+gn(f, e(l), O, M, E) || 0) - l._delay, !m && A === 1 && k.delay && (l._delay = f = k.delay, l._start += f, k.delay = 0), D.to(M, k, N ? N(O, M, E) : 0), D._ease = Wt.none;
				D.duration() ? d = f = 0 : l.timeline = 0;
			} else if (g) {
				Ae(Te(D.vars.defaults, { ease: "none" })), D._ease = Zt(g.ease || a.ease || "none");
				var L = 0, R, ee, te;
				if (w(g)) g.forEach(function(e) {
					return D.to(E, e, ">");
				}), D.duration();
				else {
					for (j in k = {}, g) j === "ease" || j === "easeEach" || hn(j, g[j], k, g.easeEach);
					for (j in k) for (R = k[j].sort(function(e, t) {
						return e.t - t.t;
					}), L = 0, O = 0; O < R.length; O++) ee = R[O], te = {
						ease: ee.e,
						duration: (ee.t - (O ? R[O - 1].t : 0)) / 100 * d
					}, te[j] = ee.v, D.to(E, te, L), L += te.duration;
					D.duration() < d && D.to({}, { duration: d - D.duration() });
				}
			}
			d || l.duration(d = D.duration());
		} else l.timeline = 0;
		return h === !0 && !i && (un = e(l), P.killTweensOf(E), un = 0), Ge(T, e(l), o), a.reversed && l.reverse(), a.paused && l.paused(!0), (p || !d && !g && l._start === V(T._time) && b(p) && Re(e(l)) && T.data !== "nested") && (l._tTime = -c, l.render(Math.max(0, -f) || 0)), x && Ke(e(l), x), l;
	}
	var s = o.prototype;
	return s.render = function(e, t, n) {
		var r = this._time, i = this._tDur, a = this._dur, o = e < 0, s = e > i - c && !o ? i : e < c ? 0 : e, l, u, d, f, p, m, h, g;
		if (!a) Xe(this, e, t, n);
		else if (s !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o || this._lazy) {
			if (l = s, g = this.timeline, this._repeat) {
				if (f = a + this._rDelay, this._repeat < -1 && o) return this.totalTime(f * 100 + e, t, n);
				if (l = V(s % f), s === i ? (d = this._repeat, l = a) : (p = V(s / f), d = ~~p, d && d === p ? (l = a, d--) : l > a && (l = a)), m = this._yoyo && d & 1, m && (l = a - l), p = Be(this._tTime, f), l === r && !n && this._initted && d === p) return this._tTime = s, this;
				d !== p && this.vars.repeatRefresh && !m && !this._lock && l !== f && this._initted && (this._lock = n = 1, this.render(V(f * d), !0).invalidate()._lock = 0);
			}
			if (!this._initted) {
				if (qe(this, o ? e : l, n, t, s)) return this._tTime = 0, this;
				if (r !== this._time && !(n && this.vars.repeatRefresh && d !== p)) return this;
				if (a !== this._dur) return this.render(e, t, n);
			}
			if (this._rEase) {
				var _ = l < r;
				if (_ !== this._inv) {
					var v = _ ? r : a - r;
					this._inv = _, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = r, this._invRecip = v ? (_ ? -1 : 1) / v : 0, this._invScale = _ ? -this.ratio : 1 - this.ratio, this._invEase = _ ? this._rEase : this._ease;
				}
				this.ratio = h = this._invRatio + this._invScale * this._invEase((l - this._invTime) * this._invRecip);
			} else this.ratio = h = this._ease(l / a);
			if (this._from && (this.ratio = h = 1 - h), this._tTime = s, this._time = l, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r && s && !t && !p && (Dt(this, "onStart"), this._tTime !== s)) return this;
			for (u = this._pt; u;) u.r(h, u.d), u = u._next;
			g && g.render(e < 0 ? e : g._dur * g._ease(l / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (o && Le(this, e, t, n), Dt(this, "onUpdate")), this._repeat && d !== p && this.vars.onRepeat && !t && this.parent && Dt(this, "onRepeat"), s !== this._tDur && s || this._tTime !== s || (o && !this._onUpdate && Le(this, e, !0, !0), (e || !a) && (s === this._tDur && this._ts > 0 || !s && this._ts < 0) && Pe(this, 1), !t && (!o || r) && (s || r || m) && (Dt(this, s === i ? "onComplete" : "onReverseComplete", !0), this._prom && !(s < i && this.timeScale() > 0) && this._prom()));
		}
		return this;
	}, s.targets = function() {
		return this._targets;
	}, s.invalidate = function(e) {
		return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), r.prototype.invalidate.call(this, e);
	}, s.resetTo = function(e, t, n, r, i) {
		Vt || Ht.wake(), this._ts || this.play();
		var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o;
		return this._initted || fn(this, a), o = this._ease(a / this._dur), pn(this, e, t, n, r, o, a, i) ? this.resetTo(e, t, n, r, 1) : (Ue(this, 0), this.parent || Me(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
	}, s.kill = function(e, t) {
		if (t === void 0 && (t = "all"), !e && (!t || t === "all")) return this._lazy = this._pt = 0, this.parent ? Ot(this) : this.scrollTrigger && this.scrollTrigger.kill(!!a), this;
		if (this.timeline) {
			var n = this.timeline.totalDuration();
			return this.timeline.killTweensOf(e, t, un && un.vars.overwrite !== !0)._first || Ot(this), this.parent && n !== this.timeline.totalDuration() && Qe(this, this._dur * this.timeline._tDur / n, 0, 1), this;
		}
		var r = this._targets, i = e ? ut(e) : r, o = this._ptLookup, s = this._pt, c, l, u, d, f, p, m;
		if ((!t || t === "all") && je(r, i)) return t === "all" && (this._pt = 0), Ot(this);
		for (c = this._op = this._op || [], t !== "all" && (h(t) && (f = {}, be(t, function(e) {
			return f[e] = 1;
		}), t = f), t = mn(r, t)), m = r.length; m--;) if (~i.indexOf(r[m])) for (f in l = o[m], t === "all" ? (c[m] = t, d = l, u = {}) : (u = c[m] = c[m] || {}, d = t), d) p = l && l[f], p && ("kill" in p.d && p.d.kill(f) !== !0 || Ne(this, p, "_pt"), delete l[f]), u !== "all" && (u[f] = 1);
		return this._initted && !this._pt && s && Ot(this), this;
	}, o.to = function(e, t) {
		return new o(e, t, arguments[2]);
	}, o.from = function(e, t) {
		return nt(1, arguments);
	}, o.delayedCall = function(e, t, n, r) {
		return new o(t, 0, {
			immediateRender: !1,
			lazy: !1,
			overwrite: !1,
			delay: e,
			onComplete: t,
			onReverseComplete: t,
			onCompleteParams: n,
			onReverseCompleteParams: n,
			callbackScope: r
		});
	}, o.fromTo = function(e, t, n) {
		return nt(2, arguments);
	}, o.set = function(e, t) {
		return t.duration = 0, t.repeatDelay || (t.repeat = 0), new o(e, t);
	}, o.killTweensOf = function(e, t, n) {
		return P.killTweensOf(e, t, n);
	}, o;
}(rn);
Te(yn.prototype, {
	_targets: [],
	_lazy: 0,
	_startAt: 0,
	_op: 0,
	_onInit: 0
}), be("staggerTo,staggerFrom,staggerFromTo", function(e) {
	yn[e] = function() {
		var t = new an(), n = st.call(arguments, 0);
		return n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0), t[e].apply(t, n);
	};
});
var bn = function(e, t, n) {
	return e[t] = n;
}, xn = function(e, t, n) {
	return e[t](n);
}, Sn = function(e, t, n, r) {
	return e[t](r.fp, n);
}, Cn = function(e, t, n) {
	return e.setAttribute(t, n);
}, wn = function(e, t) {
	return g(e[t]) ? xn : v(e[t]) && e.setAttribute ? Cn : bn;
}, Tn = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, En = function(e, t) {
	return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Dn = function(e, t) {
	var n = t._pt, r = "";
	if (!e && t.b) r = t.b;
	else if (e === 1 && t.e) r = t.e;
	else {
		for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r, n = n._next;
		r += t.c;
	}
	t.set(t.t, t.p, r, t);
}, On = function(e, t) {
	for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
}, kn = function(e, t, n, r) {
	for (var i = this._pt, a; i;) a = i._next, i.p === r && i.modifier(e, t, n), i = a;
}, An = function(e) {
	for (var t = this._pt, n, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? Ne(this, t, "_pt") : t.dep || (n = 1), t = r;
	return !n;
}, jn = function(e, t, n, r) {
	r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
}, Mn = function(e) {
	for (var t = e._pt, n, r, i, a; t;) {
		for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
		(t._prev = r ? r._prev : a) ? t._prev._next = t : i = t, (t._next = r) ? r._prev = t : a = t, t = n;
	}
	e._pt = i;
}, Nn = /*#__PURE__*/ function() {
	function e(e, t, n, r, i, a, o, s, c) {
		this.t = t, this.s = r, this.c = i, this.p = n, this.r = a || Tn, this.d = o || this, this.set = s || bn, this.pr = c || 0, this._next = e, e && (e._prev = this);
	}
	var t = e.prototype;
	return t.modifier = function(e, t, n) {
		this.mSet = this.mSet || this.set, this.set = jn, this.m = e, this.mt = n, this.tween = t;
	}, e;
}();
be(_e + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(e) {
	return le[e] = 1;
}), R.TweenMax = R.TweenLite = yn, R.TimelineLite = R.TimelineMax = an, P = new an({
	sortChildren: !1,
	defaults: r,
	autoRemoveChildren: !0,
	id: "root",
	smoothChildTiming: !0
}), n.stringFilter = Bt;
var Pn = [], Fn = {}, In = [], Ln = 0, Rn = 0, zn = function(e) {
	return (Fn[e] || In).map(function(e) {
		return e();
	});
}, Bn = function() {
	var e = Date.now(), t = [];
	e - Ln > 2 && (zn("matchMediaInit"), Pn.forEach(function(e) {
		var n = e.queries, r = e.conditions, i, a, o, s;
		for (a in n) i = F.matchMedia(n[a]).matches, i && (o = 1), i !== r[a] && (r[a] = i, s = 1);
		s && (e.revert(), o && t.push(e));
	}), zn("matchMediaRevert"), t.forEach(function(e) {
		return e.onMatch(e, function(t) {
			return e.add(null, t);
		});
	}), Ln = e, zn("matchMedia"));
}, Vn = /*#__PURE__*/ function() {
	function e(e, t) {
		this.selector = t && dt(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Rn++, e && this.add(e);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		g(e) && (n = t, t = e, e = g);
		var r = this, i = function() {
			var e = o, i = r.selector, a;
			return e && e !== r && e.data.push(r), n && (r.selector = dt(n)), o = r, a = t.apply(r, arguments), g(a) && r._r.push(a), o = e, r.selector = i, r.isReverted = !1, a;
		};
		return r.last = i, e === g ? i(r, function(e) {
			return r.add(null, e);
		}) : e ? r[e] = i : i;
	}, t.ignore = function(e) {
		var t = o;
		o = null, e(this), o = t;
	}, t.getTweens = function() {
		var t = [];
		return this.data.forEach(function(n) {
			return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof yn && !(n.parent && n.parent.data === "nested") && t.push(n);
		}), t;
	}, t.clear = function() {
		this._r.length = this.data.length = 0;
	}, t.kill = function(e, t) {
		var n = this;
		if (e ? (function() {
			for (var t = n.getTweens(), r = n.data.length, i; r--;) i = n.data[r], i.data === "isFlip" && (i.revert(), i.getChildren(!0, !0, !1).forEach(function(e) {
				return t.splice(t.indexOf(e), 1);
			}));
			for (t.map(function(e) {
				return {
					g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -Infinity,
					t: e
				};
			}).sort(function(e, t) {
				return t.g - e.g || -Infinity;
			}).forEach(function(t) {
				return t.t.revert(e);
			}), r = n.data.length; r--;) i = n.data[r], i instanceof an ? i.data !== "nested" && (i.scrollTrigger && i.scrollTrigger.revert(), i.kill()) : !(i instanceof yn) && i.revert && i.revert(e);
			n._r.forEach(function(t) {
				return t(e, n);
			}), n.isReverted = !0;
		})() : this.data.forEach(function(e) {
			return e.kill && e.kill();
		}), this.clear(), t) {
			for (var r = Pn.length; r--;) Pn[r].id === this.id && Pn.splice(r, 1);
			this._mqs && this._mqs.forEach(function(e) {
				return e.removeListener ? e.removeListener(Bn) : e.removeEventListener("change", Bn);
			}), this._mqs = null;
		}
	}, t.revert = function(e) {
		this.kill(e || {});
	}, e;
}(), Hn = /*#__PURE__*/ function() {
	function e(e) {
		this.contexts = [], this.scope = e, o && o.data.push(this);
	}
	var t = e.prototype;
	return t.add = function(e, t, n) {
		y(e) || (e = { matches: e });
		var r = new Vn(0, n || this.scope), i = r.conditions = {}, a, s, c;
		for (s in o && !r.selector && (r.selector = o.selector), this.contexts.push(r), t = r.add("onMatch", t), r.queries = e, e) s === "all" ? c = 1 : (a = F.matchMedia(e[s]), a && (Pn.indexOf(r) < 0 && Pn.push(r), (i[s] = a.matches) && (c = 1), a.addListener ? a.addListener(Bn) : a.addEventListener("change", Bn), (r._mqs ||= []).push(a)));
		return c && t(r, function(e) {
			return r.add(null, e);
		}), this;
	}, t.revert = function(e) {
		this.kill(e || {});
	}, t.kill = function(e) {
		this.contexts.forEach(function(t) {
			return t.kill(e, !0);
		});
	}, e;
}(), Un = {
	registerPlugin: function() {
		[...arguments].forEach(function(e) {
			return jt(e);
		});
	},
	timeline: function(e) {
		return new an(e);
	},
	getTweensOf: function(e, t) {
		return P.getTweensOf(e, t);
	},
	getProperty: function(e, t, n, r) {
		h(e) && (e = ut(e)[0]);
		var i = ye(e || {}).get, a = n ? we : Ce;
		return n === "native" && (n = ""), e && (t ? a((pe[t] && pe[t].get || i)(e, t, n, r)) : function(t, n, r) {
			return a((pe[t] && pe[t].get || i)(e, t, n, r));
		});
	},
	quickSetter: function(e, t, n) {
		if (e = ut(e), e.length > 1) {
			var r = e.map(function(e) {
				return qn.quickSetter(e, t, n);
			}), i = r.length;
			return function(e) {
				for (var t = i; t--;) r[t](e);
			};
		}
		e = e[0] || {};
		var a = pe[t], o = ye(e), s = o.harness && (o.harness.aliases || {})[t] || t, c = a ? function(t) {
			var r = new a();
			kt._pt = 0, r.init(e, n ? t + n : t, kt, 0, [e]), r.render(1, r), kt._pt && On(1, kt);
		} : o.set(e, s);
		return a ? c : function(t) {
			return c(e, s, n ? t + n : t, o, 1);
		};
	},
	quickTo: function(e, t, n) {
		var r, i = qn.to(e, Te((r = {}, r[t] = "+=0.1", r.paused = !0, r.stagger = 0, r), n || {})), a = function(e, n, r) {
			return i.resetTo(t, e, n, r);
		};
		return a.tween = i, a;
	},
	isTweening: function(e) {
		return P.getTweensOf(e, !0).length > 0;
	},
	defaults: function(e) {
		return e && e.ease && (e.ease = Zt(e.ease, r.ease)), Oe(r, e || {});
	},
	config: function(e) {
		return Oe(n, e || {});
	},
	registerEffect: function(e) {
		var t = e.name, n = e.effect, r = e.plugins, i = e.defaults, a = e.extendTimeline;
		(r || "").split(",").forEach(function(e) {
			return e && !pe[e] && !R[e] && re(t + " effect requires " + e + " plugin.");
		}), me[t] = function(e, t, r) {
			return n(ut(e), Te(t || {}, i), r);
		}, a && (an.prototype[t] = function(e, n, r) {
			return this.add(me[t](e, y(n) ? n : (r = n) && {}, this), r);
		});
	},
	registerEase: function(e, t) {
		Wt[e] = Zt(t);
	},
	parseEase: function(e, t) {
		return arguments.length ? Zt(e, t) : Wt;
	},
	getById: function(e) {
		return P.getById(e);
	},
	exportRoot: function(e, t) {
		e === void 0 && (e = {});
		var n = new an(e), r, i;
		for (n.smoothChildTiming = b(e.smoothChildTiming), P.remove(n), n._dp = 0, n._time = n._tTime = P._time, r = P._first; r;) i = r._next, (t || !(!r._dur && r instanceof yn && r.vars.onComplete === r._targets[0])) && Ge(n, r, r._start - r._delay), r = i;
		return Ge(P, n, 0), n;
	},
	context: function(e, t) {
		return e ? new Vn(e, t) : o;
	},
	matchMedia: function(e) {
		return new Hn(e);
	},
	matchMediaRefresh: function() {
		return Pn.forEach(function(e) {
			var t = e.conditions, n, r;
			for (r in t) t[r] && (t[r] = !1, n = 1);
			n && e.revert();
		}) || Bn();
	},
	addEventListener: function(e, t) {
		var n = Fn[e] || (Fn[e] = []);
		~n.indexOf(t) || n.push(t);
	},
	removeEventListener: function(e, t) {
		var n = Fn[e], r = n && n.indexOf(t);
		r >= 0 && n.splice(r, 1);
	},
	utils: {
		wrap: xt,
		wrapYoyo: St,
		distribute: pt,
		random: gt,
		snap: ht,
		normalize: yt,
		getUnit: at,
		clamp: ot,
		splitColor: Ft,
		toArray: ut,
		selector: dt,
		mapRange: wt,
		pipe: _t,
		unitize: vt,
		interpolate: Tt,
		shuffle: ft
	},
	install: ne,
	effects: me,
	ticker: Ht,
	updateRoot: an.updateRoot,
	plugins: pe,
	globalTimeline: P,
	core: {
		PropTween: Nn,
		globals: ie,
		Tween: yn,
		Timeline: an,
		Animation: rn,
		getCache: ye,
		_removeLinkedListItem: Ne,
		reverting: function() {
			return a;
		},
		context: function(e) {
			return e && o && (o.data.push(e), e._ctx = o), o;
		},
		suppressOverwrites: function(e) {
			return i = e;
		}
	}
};
be("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
	return Un[e] = yn[e];
}), Ht.add(an.updateRoot), kt = Un.to({}, { duration: 0 });
var Wn = function(e, t) {
	for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
	return n;
}, Gn = function(e, t) {
	var n = e._targets, r, i, a;
	for (r in t) for (i = n.length; i--;) a = e._ptLookup[i][r], (a &&= a.d) && (a._pt && (a = Wn(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r));
}, Kn = function(e, t) {
	return {
		name: e,
		headless: 1,
		rawVars: 1,
		init: function(e, n, r) {
			r._onInit = function(e) {
				var r, i;
				if (h(n) && (r = {}, be(n, function(e) {
					return r[e] = 1;
				}), n = r), t) {
					for (i in r = {}, n) r[i] = t(n[i]);
					n = r;
				}
				Gn(e, n);
			};
		}
	};
}, qn = Un.registerPlugin({
	name: "attr",
	init: function(e, t, n, r, i) {
		var a, o, s;
		for (a in this.tween = n, t) s = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (s || 0) + "", t[a], r, i, 0, 0, a), o.op = a, o.b = s, this._props.push(a);
	},
	render: function(e, t) {
		for (var n = t._pt; n;) a ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
	}
}, {
	name: "endArray",
	headless: 1,
	init: function(e, t) {
		for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
	}
}, Kn("roundProps", mt), Kn("modifiers"), Kn("snap", ht)) || Un;
yn.version = an.version = qn.version = "3.15.1", te = 1, x() && Ut(), Wt.Power0, Wt.Power1, Wt.Power2, Wt.Power3, Wt.Power4, Wt.Linear, Wt.Quad, Wt.Cubic, Wt.Quart, Wt.Quint, Wt.Strong, Wt.Elastic, Wt.Back, Wt.SteppedEase, Wt.Bounce, Wt.Sine, Wt.Expo, Wt.Circ;
// node_modules/gsap/CSSPlugin.js
var Jn, Yn, Xn, Zn, Qn, $n, er, tr = function() {
	return typeof window < "u";
}, nr = {}, rr = 180 / Math.PI, ir = Math.PI / 180, ar = Math.atan2, or = 1e8, sr = /([A-Z])/g, cr = /(left|right|width|margin|padding|x)/i, lr = /[\s,\(]\S/, ur = {
	autoAlpha: "opacity,visibility",
	scale: "scaleX,scaleY",
	alpha: "opacity"
}, dr = function(e, t) {
	return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, fr = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, pr = function(e, t) {
	return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, mr = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, hr = function(e, t) {
	var n = t.s + t.c * e;
	t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t);
}, gr = function(e, t) {
	return t.set(t.t, t.p, e ? t.e : t.b, t);
}, _r = function(e, t) {
	return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
}, vr = function(e, t, n) {
	return e.style[t] = n;
}, yr = function(e, t, n) {
	return e.style.setProperty(t, n);
}, br = function(e, t, n) {
	return e._gsap[t] = n;
}, xr = function(e, t, n) {
	return e._gsap.scaleX = e._gsap.scaleY = n;
}, Sr = function(e, t, n, r, i) {
	var a = e._gsap;
	a.scaleX = a.scaleY = n, a.renderTransform(i, a);
}, Cr = function(e, t, n, r, i) {
	var a = e._gsap;
	a[t] = n, a.renderTransform(i, a);
}, wr = "transform", Tr = wr + "Origin", Er = function e(t, n) {
	var r = this, i = this.target, a = i.style, o = i._gsap;
	if (t in nr && a) {
		if (this.tfm = this.tfm || {}, t !== "transform") t = ur[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(e) {
			return r.tfm[e] = Gr(i, e);
		}) : this.tfm[t] = o.x ? o[t] : Gr(i, t), t === Tr && (this.tfm.zOrigin = o.zOrigin);
		else return ur.transform.split(",").forEach(function(t) {
			return e.call(r, t, n);
		});
		if (this.props.indexOf(wr) >= 0) return;
		o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Tr, n, "")), t = wr;
	}
	(a || n) && this.props.push(t, n, a[t]);
}, Dr = function(e) {
	e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Or = function() {
	for (var e = this.props, t = this.target, n = t.style, r = t._gsap, i = 0, a; i < e.length; i += 3) e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(sr, "-$1").toLowerCase());
	if (this.tfm) {
		for (a in this.tfm) r[a] = this.tfm[a];
		r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = er(), i && i.isStart || n[wr] || (Dr(n), r.zOrigin && n[Tr] && (n[Tr] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
	}
}, kr = function(e, t) {
	var n = {
		target: e,
		props: [],
		revert: Or,
		save: Er
	};
	return e._gsap || qn.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(e) {
		return n.save(e);
	}), n;
}, Ar, jr = function(e, t) {
	var n = Yn.createElementNS ? Yn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Yn.createElement(e);
	return n && n.style ? n : Yn.createElement(e);
}, Mr = function e(t, n, r) {
	var i = getComputedStyle(t);
	return i[n] || i.getPropertyValue(n.replace(sr, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, Pr(n) || n, 1) || "";
}, Nr = "O,Moz,ms,Ms,Webkit".split(","), Pr = function(e, t, n) {
	var r = (t || Qn).style, i = 5;
	if (e in r && !n) return e;
	for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(Nr[i] + e in r););
	return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? Nr[i] : "") + e;
}, Fr = function() {
	tr() && window.document && (Jn = window, Yn = Jn.document, Xn = Yn.documentElement, Qn = jr("div") || { style: {} }, jr("div"), wr = Pr(wr), Tr = wr + "Origin", Qn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ar = !!Pr("perspective"), er = qn.core.reverting, Zn = 1);
}, Ir = function(e) {
	var t = e.ownerSVGElement, n = jr("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = e.cloneNode(!0), i;
	r.style.display = "block", n.appendChild(r), Xn.appendChild(n);
	try {
		i = r.getBBox();
	} catch {}
	return n.removeChild(r), Xn.removeChild(n), i;
}, Lr = function(e, t) {
	for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
}, Rr = function(e) {
	var t, n;
	try {
		t = e.getBBox();
	} catch {
		t = Ir(e), n = 1;
	}
	return t && (t.width || t.height) || n || (t = Ir(e)), t && !t.width && !t.x && !t.y ? {
		x: +Lr(e, [
			"x",
			"cx",
			"x1"
		]) || 0,
		y: +Lr(e, [
			"y",
			"cy",
			"y1"
		]) || 0,
		width: 0,
		height: 0
	} : t;
}, zr = function(e) {
	return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Rr(e));
}, Br = function(e, t) {
	if (t) {
		var n = e.style, r;
		t in nr && t !== Tr && (t = wr), n.removeProperty ? (r = t.substr(0, 2), (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(r === "--" ? t : t.replace(sr, "-$1").toLowerCase())) : n.removeAttribute(t);
	}
}, Vr = function(e, t, n, r, i, a) {
	var o = new Nn(e._pt, t, n, 0, 1, a ? _r : gr);
	return e._pt = o, o.b = r, o.e = i, e._props.push(n), o;
}, Hr = {
	deg: 1,
	rad: 1,
	turn: 1
}, Ur = {
	grid: 1,
	flex: 1
}, Wr = function e(t, n, r, i) {
	var a = parseFloat(r) || 0, o = (r + "").trim().substr((a + "").length) || "px", s = Qn.style, c = cr.test(n), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (c ? "Width" : "Height"), d = 100, f = i === "px", p = i === "%", m, h, g, _;
	if (i === o || !a || Hr[i] || Hr[o]) return a;
	if (o !== "px" && !f && (a = e(t, n, r, "px")), _ = t.getCTM && zr(t), (p || o === "%") && (nr[n] || ~n.indexOf("adius"))) return m = _ ? t.getBBox()[c ? "width" : "height"] : t[u], B(p ? a / m * d : a / 100 * m);
	if (s[c ? "width" : "height"] = d + (f ? o : i), h = i !== "rem" && ~n.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, _ && (h = (t.ownerSVGElement || {}).parentNode), h && h !== Yn && h.appendChild || (h = Yn.body), g = h._gsap, g && p && g.width && c && g.time === Ht.time && !g.uncache) return B(a / g.width * d);
	if (p && (n === "height" || n === "width")) {
		var v = t.style[n];
		t.style[n] = d + i, m = t[u], v ? t.style[n] = v : Br(t, n);
	} else (p || o === "%") && !Ur[Mr(h, "display")] && (s.position = Mr(t, "position")), h === t && (s.position = "static"), h.appendChild(Qn), m = Qn[u], h.removeChild(Qn), s.position = "absolute";
	return c && p && (g = ye(h), g.time = Ht.time, g.width = h[u]), B(f ? m * a / d : m && a ? d / m * a : 0);
}, Gr = function(e, t, n, r) {
	var i;
	return Zn || Fr(), t in ur && t !== "transform" && (t = ur[t], ~t.indexOf(",") && (t = t.split(",")[0])), nr[t] && t !== "transform" ? (i = ri(e, r), i = t === "transformOrigin" ? i.svg ? i.origin : ii(Mr(e, Tr)) + " " + i.zOrigin + "px" : i[t]) : (i = e.style[t], (!i || i === "auto" || r || ~(i + "").indexOf("calc(")) && (i = Xr[t] && Xr[t](e, t, n) || Mr(e, t) || z(e, t) || +(t === "opacity"))), n && !~(i + "").trim().indexOf(" ") ? Wr(e, t, i, n) + n : i;
}, Kr = function(e, t, r, i) {
	if (!r || r === "none") {
		var a = Pr(t, e, 1), o = a && Mr(e, a, 1);
		o && o !== r ? (t = a, r = o) : t === "borderColor" && (r = Mr(e, "borderTopColor"));
	}
	var s = new Nn(this._pt, e.style, t, 0, 1, Dn), c = 0, l = 0, u, d, f, p, m, h, g, _, v, y, b, x;
	if (s.b = r, s.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = Mr(e, i.substring(4, i.indexOf(")")))), i === "auto" && (h = e.style[t], e.style[t] = i, i = Mr(e, t) || i, h ? e.style[t] = h : Br(e, t)), u = [r, i], Bt(u), r = u[0], i = u[1], f = r.match(k) || [], x = i.match(k) || [], x.length) {
		for (; d = k.exec(i);) g = d[0], v = i.substring(c, d.index), m ? m = (m + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1), g !== (h = f[l++] || "") && (p = parseFloat(h) || 0, b = h.substr((p + "").length), g.charAt(1) === "=" && (g = H(p, g) + b), _ = parseFloat(g), y = g.substr((_ + "").length), c = k.lastIndex - y.length, y || (y = y || n.units[t] || b, c === i.length && (i += y, s.e += y)), b !== y && (p = Wr(e, t, h, y) || 0), s._pt = {
			_next: s._pt,
			p: v || l === 1 ? v : ",",
			s: p,
			c: _ - p,
			m: m && m < 4 || t === "zIndex" ? Math.round : 0
		});
		s.c = c < i.length ? i.substring(c, i.length) : "";
	} else s.r = t === "display" && i === "none" ? _r : gr;
	return j.test(i) && (s.e = 0), this._pt = s, s;
}, qr = {
	top: "0%",
	bottom: "100%",
	left: "0%",
	right: "100%",
	center: "50%"
}, Jr = function(e) {
	var t = e.split(" "), n = t[0], r = t[1] || "50%";
	return (n === "top" || n === "bottom" || r === "left" || r === "right") && (e = n, n = r, r = e), t[0] = qr[n] || n, t[1] = qr[r] || r, t.join(" ");
}, Yr = function(e, t) {
	if (t.tween && t.tween._time === t.tween._dur) {
		var n = t.t, r = n.style, i = t.u, a = n._gsap, o, s, c;
		if (i === "all" || i === !0) r.cssText = "", s = 1;
		else for (i = i.split(","), c = i.length; --c > -1;) o = i[c], nr[o] && (s = 1, o = o === "transformOrigin" ? Tr : wr), Br(n, o);
		s && (Br(n, wr), a && (a.svg && n.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ri(n, 1), a.uncache = 1, Dr(r)));
	}
}, Xr = { clearProps: function(e, t, n, r, i) {
	if (i.data !== "isFromStart") {
		var a = e._pt = new Nn(e._pt, t, n, 0, 0, Yr);
		return a.u = r, a.pr = -10, a.tween = i, e._props.push(n), 1;
	}
} }, Zr = [
	1,
	0,
	0,
	1,
	0,
	0
], Qr = {}, $r = function(e) {
	return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, ei = function(e) {
	var t = Mr(e, wr);
	return $r(t) ? Zr : t.substr(7).match(O).map(B);
}, ti = function(e, t) {
	var n = e._gsap || ye(e), r = e.style, i = ei(e), a, o, s, c;
	return n.svg && e.getAttribute("transform") ? (s = e.transform.baseVal.consolidate().matrix, i = [
		s.a,
		s.b,
		s.c,
		s.d,
		s.e,
		s.f
	], i.join(",") === "1,0,0,1,0,0" ? Zr : i) : (i === Zr && !e.offsetParent && e !== Xn && !n.svg && (s = r.display, r.display = "block", a = e.parentNode, a && (e.offsetParent || e.getBoundingClientRect().width) || (c = 1, o = e.nextElementSibling, Xn.appendChild(e)), i = ei(e), s ? r.display = s : Br(e, "display"), c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Xn.removeChild(e))), t && i.length > 6 ? [
		i[0],
		i[1],
		i[4],
		i[5],
		i[12],
		i[13]
	] : i);
}, ni = function(e, t, n, r, i, a) {
	var o = e._gsap, s = i || ti(e, !0), c = o.xOrigin || 0, l = o.yOrigin || 0, u = o.xOffset || 0, d = o.yOffset || 0, f = s[0], p = s[1], m = s[2], h = s[3], g = s[4], _ = s[5], v = t.split(" "), y = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, x, S, C, w;
	n ? s !== Zr && (S = f * h - p * m) && (C = h / S * y + b * (-m / S) + (m * _ - h * g) / S, w = y * (-p / S) + f / S * b - (f * _ - p * g) / S, y = C, b = w) : (x = Rr(e), y = x.x + (~v[0].indexOf("%") ? y / 100 * x.width : y), b = x.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * x.height : b)), r || r !== !1 && o.smooth ? (g = y - c, _ = b - l, o.xOffset = u + (g * f + _ * m) - g, o.yOffset = d + (g * p + _ * h) - _) : o.xOffset = o.yOffset = 0, o.xOrigin = y, o.yOrigin = b, o.smooth = !!r, o.origin = t, o.originIsAbsolute = !!n, e.style[Tr] = "0px 0px", a && (Vr(a, o, "xOrigin", c, y), Vr(a, o, "yOrigin", l, b), Vr(a, o, "xOffset", u, o.xOffset), Vr(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", y + " " + b);
}, ri = function(e, t) {
	var r = e._gsap || new nn(e);
	if ("x" in r && !t && !r.uncache) return r;
	var i = e.style, a = r.scaleX < 0, o = "px", s = "deg", c = getComputedStyle(e), l = Mr(e, Tr) || "0", u = d = f = h = g = _ = v = y = b = 0, d, f, p = m = 1, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, ee, te, ne;
	return r.svg = !!(e.getCTM && zr(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[wr] = (c.translate === "none" ? "" : "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") ") + (c.rotate === "none" ? "" : "rotate(" + c.rotate + ") ") + (c.scale === "none" ? "" : "scale(" + c.scale.split(" ").join(",") + ") ") + (c[wr] === "none" ? "" : c[wr])), i.scale = i.rotate = i.translate = "none"), C = ti(e, r.svg), r.svg && (r.uncache ? (P = e.getBBox(), l = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", N = "") : N = !t && e.getAttribute("data-svg-origin"), ni(e, N || l, !!N || r.originIsAbsolute, r.smooth !== !1, C)), x = r.xOrigin || 0, S = r.yOrigin || 0, C !== Zr && (D = C[0], O = C[1], k = C[2], A = C[3], u = j = C[4], d = M = C[5], C.length === 6 ? (p = Math.sqrt(D * D + O * O), m = Math.sqrt(A * A + k * k), h = D || O ? ar(O, D) * rr : 0, v = k || A ? ar(k, A) * rr + h : 0, v && (m *= Math.abs(Math.cos(v * ir))), r.svg && (u -= x - (x * D + S * k), d -= S - (x * O + S * A))) : (ne = C[6], ee = C[7], I = C[8], L = C[9], R = C[10], te = C[11], u = C[12], d = C[13], f = C[14], w = ar(ne, R), g = w * rr, w && (T = Math.cos(-w), E = Math.sin(-w), N = j * T + I * E, P = M * T + L * E, F = ne * T + R * E, I = j * -E + I * T, L = M * -E + L * T, R = ne * -E + R * T, te = ee * -E + te * T, j = N, M = P, ne = F), w = ar(-k, R), _ = w * rr, w && (T = Math.cos(-w), E = Math.sin(-w), N = D * T - I * E, P = O * T - L * E, F = k * T - R * E, te = A * E + te * T, D = N, O = P, k = F), w = ar(O, D), h = w * rr, w && (T = Math.cos(w), E = Math.sin(w), N = D * T + O * E, P = j * T + M * E, O = O * T - D * E, M = M * T - j * E, D = N, j = P), g && Math.abs(g) + Math.abs(h) > 359.9 && (g = h = 0, _ = 180 - _), p = B(Math.sqrt(D * D + O * O + k * k)), m = B(Math.sqrt(M * M + ne * ne)), w = ar(j, M), v = Math.abs(w) > 2e-4 ? w * rr : 0, b = te ? 1 / (te < 0 ? -te : te) : 0), r.svg && (N = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !$r(Mr(e, wr)), N && e.setAttribute("transform", N))), Math.abs(v) > 90 && Math.abs(v) < 270 && (a ? (p *= -1, v += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (m *= -1, v += v <= 0 ? 180 : -180)), t ||= r.uncache, r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = f + o, r.scaleX = B(p), r.scaleY = B(m), r.rotation = B(h) + s, r.rotationX = B(g) + s, r.rotationY = B(_) + s, r.skewX = v + s, r.skewY = y + s, r.transformPerspective = b + o, (r.zOrigin = parseFloat(l.split(" ")[2]) || !t && r.zOrigin || 0) && (i[Tr] = ii(l)), r.xOffset = r.yOffset = 0, r.force3D = n.force3D, r.renderTransform = r.svg ? di : Ar ? ui : oi, r.uncache = 0, r;
}, ii = function(e) {
	return (e = e.split(" "))[0] + " " + e[1];
}, ai = function(e, t, n) {
	var r = at(t);
	return B(parseFloat(t) + parseFloat(Wr(e, "x", n + "px", r))) + r;
}, oi = function(e, t) {
	t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ui(e, t);
}, si = "0deg", ci = "0px", li = ") ", ui = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.z, c = n.rotation, l = n.rotationY, u = n.rotationX, d = n.skewX, f = n.skewY, p = n.scaleX, m = n.scaleY, h = n.transformPerspective, g = n.force3D, _ = n.target, v = n.zOrigin, y = "", b = g === "auto" && e && e !== 1 || g === !0;
	if (v && (u !== si || l !== si)) {
		var x = parseFloat(l) * ir, S = Math.sin(x), C = Math.cos(x), w;
		x = parseFloat(u) * ir, w = Math.cos(x), a = ai(_, a, S * w * -v), o = ai(_, o, -Math.sin(x) * -v), s = ai(_, s, C * w * -v + v);
	}
	h !== ci && (y += "perspective(" + h + li), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (b || a !== ci || o !== ci || s !== ci) && (y += s !== ci || b ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + li), c !== si && (y += "rotate(" + c + li), l !== si && (y += "rotateY(" + l + li), u !== si && (y += "rotateX(" + u + li), (d !== si || f !== si) && (y += "skew(" + d + ", " + f + li), (p !== 1 || m !== 1) && (y += "scale(" + p + ", " + m + li), _.style[wr] = y || "translate(0, 0)";
}, di = function(e, t) {
	var n = t || this, r = n.xPercent, i = n.yPercent, a = n.x, o = n.y, s = n.rotation, c = n.skewX, l = n.skewY, u = n.scaleX, d = n.scaleY, f = n.target, p = n.xOrigin, m = n.yOrigin, h = n.xOffset, g = n.yOffset, _ = n.forceCSS, v = parseFloat(a), y = parseFloat(o), b, x, S, C, w;
	s = parseFloat(s), c = parseFloat(c), l = parseFloat(l), l && (l = parseFloat(l), c += l, s += l), s || c ? (s *= ir, c *= ir, b = Math.cos(s) * u, x = Math.sin(s) * u, S = Math.sin(s - c) * -d, C = Math.cos(s - c) * d, c && (l *= ir, w = Math.tan(c - l), w = Math.sqrt(1 + w * w), S *= w, C *= w, l && (w = Math.tan(l), w = Math.sqrt(1 + w * w), b *= w, x *= w)), b = B(b), x = B(x), S = B(S), C = B(C)) : (b = u, C = d, x = S = 0), (v && !~(a + "").indexOf("px") || y && !~(o + "").indexOf("px")) && (v = Wr(f, "x", a, "px"), y = Wr(f, "y", o, "px")), (p || m || h || g) && (v = B(v + p - (p * b + m * S) + h), y = B(y + m - (p * x + m * C) + g)), (r || i) && (w = f.getBBox(), v = B(v + r / 100 * w.width), y = B(y + i / 100 * w.height)), w = "matrix(" + b + "," + x + "," + S + "," + C + "," + v + "," + y + ")", f.setAttribute("transform", w), _ && (f.style[wr] = w);
}, fi = function(e, t, n, r, i) {
	var a = 360, o = h(i), s = parseFloat(i) * (o && ~i.indexOf("rad") ? rr : 1) - r, c = r + s + "deg", l, u;
	return o && (l = i.split("_")[1], l === "short" && (s %= a, s !== s % (a / 2) && (s += s < 0 ? a : -a)), l === "cw" && s < 0 ? s = (s + a * or) % a - ~~(s / a) * a : l === "ccw" && s > 0 && (s = (s - a * or) % a - ~~(s / a) * a)), e._pt = u = new Nn(e._pt, t, n, r, s, fr), u.e = c, u.u = "deg", e._props.push(n), u;
}, pi = function(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}, mi = function(e, t, n) {
	var r = pi({}, n._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, s, c, l, u, d, f, p;
	for (s in r.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[wr] = t, o = ri(n, 1), Br(n, wr), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[wr], a[wr] = t, o = ri(n, 1), a[wr] = c), nr) c = r[s], l = o[s], c !== l && i.indexOf(s) < 0 && (f = at(c), p = at(l), u = f === p ? parseFloat(c) : Wr(n, s, c, p), d = parseFloat(l), e._pt = new Nn(e._pt, o, s, u, d - u, dr), e._pt.u = p || 0, e._props.push(s));
	pi(o, r);
};
be("padding,margin,Width,Radius", function(e, t) {
	var n = "Top", r = "Right", i = "Bottom", a = "Left", o = (t < 3 ? [
		n,
		r,
		i,
		a
	] : [
		n + a,
		n + r,
		i + r,
		i + a
	]).map(function(n) {
		return t < 2 ? e + n : "border" + n + e;
	});
	Xr[t > 1 ? "border" + e : e] = function(e, t, n, r, i) {
		var a, s;
		if (arguments.length < 4) return a = o.map(function(t) {
			return Gr(e, t, n);
		}), s = a.join(" "), s.split(a[0]).length === 5 ? a[0] : s;
		a = (r + "").split(" "), s = {}, o.forEach(function(e, t) {
			return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0];
		}), e.init(t, s, i);
	};
});
var hi = {
	name: "css",
	register: Fr,
	targetTest: function(e) {
		return e.style && e.nodeType;
	},
	init: function(e, t, r, i, a) {
		var o = this._props, s = e.style, c = r.vars.startAt, l, u, d, f, p, m, g, _, v, y, b, x, S, C, w, T, E;
		for (g in Zn || Fr(), this.styles = this.styles || kr(e), T = this.styles.props, this.tween = r, t) if (g !== "autoRound" && (u = t[g], !(pe[g] && ln(g, t, r, i, e, a)))) {
			if (p = typeof u, m = Xr[g], p === "function" && (u = u.call(r, i, e, a), p = typeof u), p === "string" && ~u.indexOf("random(") && (u = Ct(u)), m) m(this, e, g, u, r) && (w = 1);
			else if (g.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(g) + "").trim(), u += "", Rt.lastIndex = 0, Rt.test(l) || (_ = at(l), v = at(u), v ? _ !== v && (l = Wr(e, g, l, v) + v) : _ && (u += _)), this.add(s, "setProperty", l, u, i, a, 0, 0, g), o.push(g), T.push(g, 0, s[g]);
			else if (p !== "undefined") {
				if (c && g in c ? (l = typeof c[g] == "function" ? c[g].call(r, i, e, a) : c[g], h(l) && ~l.indexOf("random(") && (l = Ct(l)), at(l + "") || l === "auto" || (l += n.units[g] || at(Gr(e, g)) || ""), (l + "").charAt(1) === "=" && (l = Gr(e, g))) : l = Gr(e, g), f = parseFloat(l), y = p === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), d = parseFloat(u), g in ur && (g === "autoAlpha" && (f === 1 && Gr(e, "visibility") === "hidden" && d && (f = 0), T.push("visibility", 0, s.visibility), Vr(this, s, "visibility", f ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), g !== "scale" && g !== "transform" && (g = ur[g], ~g.indexOf(",") && (g = g.split(",")[0]))), b = g in nr, b) {
					if (this.styles.save(g), E = u, p === "string" && u.substring(0, 6) === "var(--") {
						if (u = Mr(e, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
							var D = e.style.perspective;
							e.style.perspective = u, u = Mr(e, "perspective"), D ? e.style.perspective = D : Br(e, "perspective");
						}
						d = parseFloat(u);
					}
					if (x || (S = e._gsap, S.renderTransform && !t.parseTransform || ri(e, t.parseTransform), C = t.smoothOrigin !== !1 && S.smooth, x = this._pt = new Nn(this._pt, s, wr, 0, 1, S.renderTransform, S, 0, -1), x.dep = 1), g === "scale") this._pt = new Nn(this._pt, S, "scaleY", S.scaleY, (y ? H(S.scaleY, y + d) : d) - S.scaleY || 0, dr), this._pt.u = 0, o.push("scaleY", g), g += "X";
					else if (g === "transformOrigin") {
						T.push(Tr, 0, s[Tr]), u = Jr(u), S.svg ? ni(e, u, 0, C, 0, this) : (v = parseFloat(u.split(" ")[2]) || 0, v !== S.zOrigin && Vr(this, S, "zOrigin", S.zOrigin, v), Vr(this, s, g, ii(l), ii(u)));
						continue;
					} else if (g === "svgOrigin") {
						ni(e, u, 1, C, 0, this);
						continue;
					} else if (g in Qr) {
						fi(this, S, g, f, y ? H(f, y + u) : u);
						continue;
					} else if (g === "smoothOrigin") {
						Vr(this, S, "smooth", S.smooth, u);
						continue;
					} else if (g === "force3D") {
						S[g] = u;
						continue;
					} else if (g === "transform") {
						mi(this, u, e);
						continue;
					}
				} else g in s || (g = Pr(g) || g);
				if (b || (d || d === 0) && (f || f === 0) && !lr.test(u) && g in s) _ = (l + "").substr((f + "").length), d ||= 0, v = at(u) || (g in n.units ? n.units[g] : _), _ !== v && (f = Wr(e, g, l, v)), this._pt = new Nn(this._pt, b ? S : s, g, f, (y ? H(f, y + d) : d) - f, !b && (v === "px" || g === "zIndex") && t.autoRound !== !1 ? hr : dr), this._pt.u = v || 0, b && E !== u ? (this._pt.b = l, this._pt.e = E, this._pt.r = mr) : _ !== v && v !== "%" && (this._pt.b = l, this._pt.r = pr);
				else if (g in s) Kr.call(this, e, g, l, y ? y + u : u);
				else if (g in e) this.add(e, g, l || e[g], y ? y + u : u, i, a);
				else if (g !== "parseTransform") continue;
				b || (g in s ? T.push(g, 0, s[g]) : typeof e[g] == "function" ? T.push(g, 2, e[g]()) : T.push(g, 1, l || e[g])), o.push(g);
			}
		}
		w && Mn(this);
	},
	render: function(e, t) {
		if (t.tween._time || !er()) for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
		else t.styles.revert();
	},
	get: Gr,
	aliases: ur,
	getSetter: function(e, t, n) {
		var r = ur[t];
		return r && r.indexOf(",") < 0 && (t = r), t in nr && t !== Tr && (e._gsap.x || Gr(e, "x")) ? n && $n === n ? t === "scale" ? xr : br : ($n = n || {}) && (t === "scale" ? Sr : Cr) : e.style && !v(e.style[t]) ? vr : ~t.indexOf("-") ? yr : wn(e, t);
	},
	core: {
		_removeProperty: Br,
		_getMatrix: ti
	}
};
qn.utils.checkPrefix = Pr, qn.core.getStyleSaver = kr, (function(e, t, r, i) {
	var a = be(e + "," + t + "," + r, function(e) {
		nr[e] = 1;
	});
	be(t, function(e) {
		n.units[e] = "deg", Qr[e] = 1;
	}), ur[a[13]] = e + "," + t, be(i, function(e) {
		var t = e.split(":");
		ur[t[1]] = a[t[0]];
	});
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"), be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
	n.units[e] = "px";
}), qn.registerPlugin(hi);
// node_modules/gsap/index.js
var gi = qn.registerPlugin(hi) || qn;
gi.core.Tween;
// src/assets/female-fallback.webp
var _i = "data:image/webp;base64,UklGRjBHAABXRUJQVlA4ICRHAABwnAGdASq8AjEDPj0ejkUiIaEQyTx8IAPEtLdwu/8ADN4fgcHYEJgGZbH/qm3GvOo6ePKz/kf+98QfRz8n9zeZB2j5m/zP8e/tP71x3/P3UO/K/6P/u/8B7EkXXsnQV+g/4L/qfcz6rv/D6gfa32BP5l/af+f7F+Dl7B7AX9W/zfqv/6P/y/2n5ge8765/+P+u+Ar9hf/DwXIfu4aYPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLVcNMHqllcWq4aYPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLVcNMHqllcWq4aYPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLVcNMHqllcWq4aYPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLT6Uf8185Pv3jlq6TTAnk8Pe5prhYMbHQEJid/5tdwHqllcWq4aYPVLK4tVS9ViY2thC3wV9oYeeUv1sSFeu/0aRpqAPOF3+jFO1gXEKdf21za26nBDZDCUHcB6pZXFquGmD1SyuLVbnugWHZ1PPfFIVVIu30kYPfWeLW659GoCk1HFVP/Gd1nC3XzuCPJw3mO2PvvHScXO8ItcWq4aYPVLK4tVw0wc7tI983nHvuToi9ufyh3RRpwIWo0EcssVedZOBiCgWzldHN6kA+Wi0DRjpUfJNraifGyu4PGt5Usv13zZdwPgtVUJQuLVcNMHqllcWq4aYDgqeqVpq1tD3FwlXjktGOlOMyUXFxxRiZn7U5MAqHvaMh7yrPjzojcIsFMRCrGaSIkCMUovW+2D+N8Po2dTm13AeqWVxarhpg9EqNOg0COvQF2GBXkbtcTTyAEhhxxj+K0EXNSKEuIcLXYrb5Z0wDXpCe1rSssVfqF797UhQfIMtSP5fNh/C9jxo9HkbGiMSEsYaWVxarhpg9Usri1VQZ6S7zJ8lPEANteiSm9SY3ejBK0yYTxTlee79bBX1KEOiUMbx6kpBXNVHKpisu4EKwgKDK87m9SFgpjB3cCL89F8xcbOq/G7jFLK4tVw0weqWVxaqn4AvhiDOPk9G/CugLNyjUYt2SRXx2d3CSV8M/Xcj4AVr1AOYA1yKm7kE1qwuMgX5AxEOYxOAZG8+msN4PkrU6EWxctH5RJwHrfzHxp/+VVL9+WM2vBcP3eJ52GlhXCtWvcB6pZXFquGmD1SytbQIYJCGODbqSM7DO6EjleuR6cOH2dmciiXGMeRCvVvGg3z+SszxByEtdI4jdxf8bPJDN1EBrZwrwgP7W17OL9DkOMBc6GQdH6GxrEoXFquGmD1SyuLVcKaIat9rnhGnhHmBEKvFYYhfrAhvV5S3C6HGkczzoLtNtUuvMECgYJjgqthUKUTsmItwZusVFssjG4LqtLrNxpM19yeDtlsx2FgULC8Juh4qc2u4D1SyuLVcNMHQ+bjFLf72/D0olo0MiYFoaUh063sr5NrPakDfUbr7KSi/s74W8qwsxt46yy/VcVEmlYrtadt1B15iaULeE7fRZPoaqIQ+Gwg7Lj+Wc0t0MKn8ojTB6pZXFquGmD1SykxqwExLlyFts+oQ2UwMHS6kONs8UcFzXxCEnqvoS7Yz9w0xJcDB/EW238tGOTp9of2GpaWu1MR4P1s6+4ZKH6I7AJj4Jj0C5piKCX+T86yhcWq4aYPVLK4tVwptAjH5YsNjINNtEEhvIZZGmIs2Vttroueyg6Dskh6yFNhQDSZbliymzzLn0swq015BP1YqqCPvD+MZdFzPnAJ/hRapQxQFTYRcIxSwhy2k5BU5tdwHqllcWq4Z7iSD/Xa96eXd/+2QSjNOcy0cWYIKMR+HuQL/vMJHcRUltAkBrjiXwyaO4xRTasL2JG8sz8+blsSVm8fMh/QTCzZNlcAUTZm8erQz3+cqfqE225QuLVcNMHqllcWq4U3Spow40foyaYWc9ig5wQit3KxrtWcCvhiwLjpU9TeOxVnQnc/Dl+Dx//6n58QxpOTj4vaQqjmkBNxpoEHZmdkx8Qb8pUieWW5PE64i9MS0h2uGllcWq4aYPVLK4tVuoWwlHHQOiHhGli0K9nJqyye8IRsMKTUGgMzDZ1NYHz4bJ0jM0czq8HPH7eHy+JVFmTEZIrVrf8pfXSsse9Ii/HWGWARrUHHNw0sri1XDTB6pZXFrjeMfnm8H7XWmgkvyl3/rCdg10ZIGuN4yu1tgrTajGd+vPHZINecWPTUK6im8Zoi0AEzz+MQIz9t+O7YpZXFquGmD1SyuLVcNMCVQyW9Ds12A62SdtCcwizM/Qavyo+p3jCogH78GmrjIfHraGgxGfk7u+I/U5vRxMF6RyyLFnxhyt7qnThpg9Usri1XDTB6pZXFp/0FQhqZSA7dy6gCIi+xYp1IHL7nHBGRNMjlE/GeQM6Rgz4UzOJ645hOJdK1gS7Dc2u4D1SyuLVcNMHqllcWFsRbXCZcsUuCQATop9oBw35DtstZQxeipMlSlyjiG7KjFRyiUZPkrB2t7NTvSolziNHNw0sri1XDTB6pZXFqqFgIsFgOSUK4NZUOh1xZrJ9sgSyeRsJjX7s4j85t9JDDQ3QeguYM6PJak1JcbNHNw0sri1XDTB6pZXFqt0GpVaB/3jxZ2nH4HKySJ7bqbd71GfJan6KrI6XZbF/5vOaMWaejLLQpGWj9Lhpg9Usri1XDTB6pZXFgZ/wr+0ENgrJreZuIFWOWQnsJ5im+m2tu80FJW74vClLGljfCzRwakU1sauF6qv7qbXcB6pZXFquGmD1SyuHmumwHqL3Yho/0VK+WHiEjuiRP5s4+CtSTDjGvVZimy1/EchBTjvMCOq/Ks1VcezJk3DSyuLVcNMHqllcWq3TrsjjRQwoememKiPmY/5bj5BGa2acLn13yq6t7yXahFo3283juDakd0T/OgE5+BQNJvePGri1XDTB6pZXFquGmD1NskmhgiREuwHrr0gAvspuo5wTPyZ9125wSJX62NIjOrr8D6ELbyGl1rwbiY7lJn0VsfPtjybqTnR3ywx5OQVObXcB6pZXFquGlz5RUmKhgAxImZBQhJTzDtnCXWzE4GmlFW5SggBBnhHeTdr0xIGOSMAYAZdre1t8B2LBxcNHnzVX/9QcVl3NyVxarhpg9Usri1XDTB6moYyNEZiyrabWXwo7b7xK1158mTTP9J/tfYLj6chV7DY8mu3hVfylCWRZh3jCm2azH2bRA0n5hebyD1SyuLVcNMHqllcWq4UyAbQDQo1OZMOwuG66nkLACeyNN0ln6rTF4mQIweCFqdBfS2VT2kMYlQYpbGDjwJMs/QDAyyyX0jS5an4iyMUGNTbC35tx3GybXcB6pZXFquGmD1SyuK4obRm52dW79kRBz8nIjzAgMyLbOdBCocy/ZSRZElwwJvEdjBsuHQg0gzrf6L6m+z/Gg6ZKM+m+n+yQoyK7K2YR19P1JRuhb7Ardnc3DSyuLVcNMHqllcWqpotfHJrnAC3gEp2iZfK0WlhCbI+9i5g28zP0u1fYYLCECBTZSqjBcUYmzq5ekIozn/ffRdk/fgqcfsaKnsmvkldNo3e+0U+W87bOfapEmZri1XDTB6pZXFquGlxzqzgOGFcZSecZgy2nqiCjBIw8o6ou44y5iAqqoT8SH51dazmWf5Iv5jgfVG/lVsyFmVgYVeYP2FeFqagMCCTOl7RAXXXkZ0EDCr6qkpk08Vw0weqWVxarhpg9Uo6lI7FY4GKTd7EB3BWk6WHY/Q9dby4U0JiDKI5I9+Ey3JaVSrtEgSYUzlAFoNE2AkSc86uBg4pKpLy1HJ4c+d9ZR0OcOJrsP3VRt6GvvMf3QqVLs5NcWq4aYPVLK4tVw0wJdo5h40q9draNafyii5CR6/7ys4WFyfnv35VIY8CSM5nmOHUu43OG424U3FOjF6j62vqULWSWJf3hyP5Rd1v3r3E5UxBpkpfuxWYP6WAaEtIF1DNw0sri1XDTB6pZXFhdIUE5FBX/Lk2oLoT0i9G/HGZs3hlI6l67V0MDlKLS6SqDYHeRu+tf212QsrcWqDVOJ7Y4o/7fSxVY5L+A49DrebUZ9Buuq4aYPVLK4tVw0weqTTa7HT36JKK9uBr7y3yIAWTW24ebyqajAGTT3MRss65nJpCd7/d2FvvExzT3Nw0sri1XDTB6pZXFquGliDxVXJxRpuwI2C83DSyuLVcNMHqllcWq4aYPVUCCpza7gPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLVcNMHqllcWq4aYPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLVcNMHqllcWq4aYPVLK4tVw0weqWVxarhpg9Usri1XDTB6pZXFquGmD1SyuLVcNMHMAD+/0vSksIAAAAAAAAAAAAAAAAAAAAAAAAAAAHD48ju08ZLtLg9pYbd37ywESfm3XbtZ9xz+hTbh3unBaTxNcXswDGSIMVXFU/Sp17korls+oSDePJeHMML8Pi6ks4rbMpilrPkWMS2hH14sTv9PuupL97xBBUEPhAs+VWFtRAkRgKXoLMCgJm+RPm54hy3y0vjUipE1n6mlS0bC6mIfrreTnYA0JzaTRUxpC8gRUkYkKdTUPw1rDnvMc69yGg7QBBNsvpsQmkUhMPQOacAZNXRrLVAYfe+zUrC6CeeNlxVpJOPQnRV8b3QGChy1Q8Xs/3F9QIUHdf58FdvDtbRtRX9Og34ZOHxn3u0G0hzgABZ/Tb/fVv+XfItNpHlNB2D03p9mFdXesn2KCKo7hcNcQIaxR3qOPrPc8iuj2/1k4nvH94/7Z7vGxQHD8mUAxU9U7nK0AwPNfu5R4HR/vAqjeCgI04mr1s7gDPRiHqaKXRc4QCmkXTDyhsVsgJ/iIoj4onL5Wbn+2QAYq8FODMPG2y+pvpfrcJhkxqy95bpZRSyoJHBwysqBTkwKI6ALveQ40P0MyRSNMh41vVMtQ8ZQxQwW/eGIQJzI6UEzJk+SAiEgcd8boEkiLRI1KYLqciLQ2uFFyEGKIYuGeOWYGOeCN49u57nvyzdipV++BKNisTpFBnmFDsDpSxg+lvVse3y8AbOZnjJG9vCGAezwyHro6vM7WDbP1aM2mGZDJeT6K063EAs/LQi+PF28G9vBr7les9r+ZrKNBtV+LSRst0WFlchTkkt4dLdfAcfLrwhnWBKklaAADrrxTtszkzcxfu0xc3NIHF0lVbNmWcI4CpIIBOo5jJLI3GUBokoUZgq30w6WPFlCIotlXgmCL7CeiW5hdLrUQz6jLJFiJ/EO+NyJXJuwNHn0cWakeu2Oljl58JThxTYFUimEw5s3U4hKUvUTamtGqerNeczs8p6SYhIXOigbLjucxGPZklmcvqChDCgVGSKR/PJHwOBAVNvflKNQzYfwKM4uEqb730g4btvvlqWL+VF7FY4uSw/gqaa2lYE14o48vMJBcpdCLs74ZB6MyaVk5/uXEgon2xFrfNlM7+TfBUikt0vzChtNHVMfTcoMtEg8YKc/PvqkVia7F+pJxjCWIiUBd1NAjl9xxzy0MaHW9yfOkxvlNE0PDJm+bZiOjg+QrnmvTZQoKLuwPuHGnAvfNzsNMS30C2jfdqTfmufVDFBF34Mho3bIyeallyX6q0+E28qnsHCQsEZ1ThJiCLqJAyCRsAABv0p+kMHeOOFyza5RoMHUx6JKSzWebX5lWf4pMr+Npx5zI0pJrS6bXTB1C3f9HUI/fKIPgUyaf77gQA1Agc3YTVu6CRASr2hC3gHquH/oYmvIYAC6PD01wwen6L3z5tj45BHApiRaxyQYXK9Y4M9f5JEd/nslxmcZZAcTMnO3tEZgV5a6sg2kRWhapvH8KtQzL+GTz1w2wOU/lP1GR4RO4oc81zCHh+Ulriikz/jxVdLd0P7eFxF4/qHrvjcUjN5KGCfPOQz9daVdlM3hbVkmzlyOrqMfj4fj4oed+QMo5Zo5OLQi1SlK2zL7XNB59BbQp3Wlm62jqze0e9mrM2XrUAnIA9zikmApYdIPgLiTWdwc6laio0+97QuZU9ryExjtM/+o8/OGDJ/FS2ljMqL4aia1MTaVOVKH/rTem3Dae6cADlMa/JjGPDbfdzgZO6Yr7WxuK0LL5zlb5s7W2oTJ1n23L5z5cqHNkmmrhC/pzS8xwpwYiz68XYksnv/QpIYeJpDyxUHnh3ZNeS+S91HzFz7gVB+V0jvdyzkuOWpXuGnz8xWgqB7T4C0IBS9FLOReQ5g0aWcYclxw3h9YFtjlxxbRFaZqiFGrs7StYAbG335z1Sxy4ReYCzkwU+JOpcFf628m/07oKmFe93FD82TKgXOGSWsIgh51HF6SFNXThGoNyb6ezPt7qTG3AfULnSa8RY828Sl+oCvpJ1YTzsw7euFvNzaJOWbkA21MCK18sghm1OZCT5jKaTeuby4udlhYQIcX63ZHt51EmxeU3z0pF4fl5YJNFCyXlkrHn9BVDC6YduQupUtEi0O7kq6WmWXEblMkABYpX/qsfDdFczRUPx40sM6z6ykz0vXn/UxPOgiz7BY40TPVfHm1Lpl8i8sidARVeHMzRoZlFlNi8TWJKc7aLPepVAL2vATLgHQ1iq4aQlgaj5XnA4dMhylau0Nsx6pctd5RWJ2L5nFIeGWnuImcLDXbMdzIRrkM9fXtJZpwjygn4DJ0dwWo/RBmKwG3aMQSkSqszJpAZGUadPIcuPbgmbZKhDJYrF28ZuzQ7DFPNvVUv6dlNhtckuttQUqFSAACk/3w/YNLuumzXF/EJcXbOmnoY6WUSCxBIk3ImmtK21B0Ay/lBeLE4lfpjX8vY9gO3IZ8dt/X73Awg+clDzbby0EtJBSrG7DTYe34sjHDbYdhm6eMJyw/gKIRztscefiKrfQs9/F4FsNMmPBeWqeMgjlNba00vIm504P5XrgxX9IOWfYnZcamV/XwgqTDEGnAcZ1OdXPlN6Yd2AM140xw9k7DfzCJ5Co+il0e7GvkuL8geRcAPesjQm48RUtmgfePII0LlmxRBLoh87keocWQK9z6MWH5ZphEBomvdXSBPX0PTNFukfSnwPdOkBI2jdIv3e6tAKdEhpcHCrF+0HCxPbe+0xaGfKYbIZZis31kLvxRrDktYY3b1e2gsAqjKW/huCjxTOAx+m0q0B+aIlQXCc6g6T+zHfijBY4I4tjO/pnxLq+68supU5ni9PPCziITkKKhuex8slROK+saNIFgxXKj/d1XrorOr/+IVDIvrbgc6FwrLEjMVpBT+VYLncdRa7Bixptjxld4pUQFkbnP9V08une54M1JxY8qzNUaCJJwJRWctUoXjThPGjdG3ZFl3cWDe14L0GvROxwlgUcWu2cVLFECI/dr3S4RPtTJoMVMzenppyWh7KzgJmIiL5xUyNJkqLONraweaxdhizaWeRHp3ayI1l+ULzFKqCwtyqy7l7s4f6tl0zO4o/KuYFW/hl/Vy6q2skskqabAGrdRQgPXrUnlrFHsYsu22AspVguXs097Lro0aKFxUMuJyK9tdP+mvSA/1Ok2pnZBM0Kwbfo3Yv1aFyThMAYkTcXBOYMqoA0qjvwjoio6uHk+MAjVgQWcBlIVzDRUd23tVBD/vKPQE1XUrXe6QCaDo6F+3CCUmlP9C7V/HFP2Xj8HZ1zrvNSnaJAB+2+dlBGGif61QWxPWTbHzZhyIRZVe0xCL9NPLC3tybZxajF5NHfEHPJ4wQZXyulEE6wuDAg6sAWv9OezfBD4oYaDuA8m4DDDFzv8F/zCIf8bxn7Rxv6VY9yDqLGbc58clR5qmSRE7EMtndXBkAxi9n9RA+63wR4zQqpVcEkhYSseQtHLzL//4uGlDoSvGFC/5JgSpna7Ta/3CXByOA/+sOujGb4/Vj9vk03hPe2gztoKTA9OrpMsjYei2sJ5cSBoxOmT3LDAGPFGvEKQ9XA0qICG0V+G9u5FuXeyvnN5D3b+CCYp4ZUMx2e2e6bsvmxGLiyVJuXb9a619/oEcnR3UbEKh+F+V0okQreZRRaCTaHiGTNQV69tA2ppq1s41kSxBvLnowwyFOKfENMzdQs2yCIvpPKzslh6ymsyKg/1xdkuTH5dOLhRxQzXFfzeS6L74dMVoEHvDA5hTJpEZHUhGjEAFRw6rfcKrFGeQBXfPHJeLmvid5uQz9/Ba3Hkqfyns4HZ7ByURvRhKvw+KLBhggyi2o6UICnQHWVdvciIcqjP2s06hfRKJNKouyiUousP/H6f3EjkQxpI/pR6ZIEu0NZbVoE/WS1QDS19oNor0ZGCl9URLs9mtx2wkl1XLjwqWQ0UJH6NpB3q9rU6/AgvLZG1aBgaVd/ATvkmQYEZFoY0QcRx8dpbjrEhi0g4OFD/HEM/U6B+Z8wz4yZLKK7cAOcJiSNuDOcdj5Owe781wNchRBBYd+5sBqheIZR5/c95ed6szkyLPqKphiACmAbLfr+PlAUOmfo1CMbL2TQxLVU9szmHzqArGmhSChfHYh0PQilFtrjSzAfCuTVvLGUx4c/Y0o9iRpVXL9N2qSShRXlpbrouKre4qb50OTBRPzMQ126a/K5PUscD38b710CRqGSv4uFOCrHWbWpQL3O6Q4xFtg3FTYOMpSS1kAGP+n0xzst6VEc51DxufmEfVDgANg4u29tBzp3bROKxy3OdwsbTipijQ1XKj2u97hu8zKljOXybZ65naz6SL33Dy5sbnpkXkPTctWPP9vdaSTPmJb/u6hZr79ukpsLbOwoaESea1rgJrbVsthahp3zx671LXA3nFL0iJZ7/kWdoO0lbNakPdWzjbErQv3PjNb1EiXqL2IWMjUFN+0fg3avINP4XrTHLwZOTl6i6gzu5mQsF4pKizkwfoNwA3vTiMOGVozfMWF2pj2UYQhfUT6DbvFI3RFVuvNdKns3rIjYLdRr3sqKtc/z3orJFli1oL9Ft8k98bj2Cc7pcG/kf8BQNli+WIr6N+cyFRQ6JPFyp1miOFrRXc00AK8WBI3OaP3L6VJwXmOLHhdtfddnQnB3yOK21tL4SekUX+SSwDZtNl0uIblVMVhNdYxtyYjgdUQBwN6etLrsNtumjsBuKnyZ5kDxoH0L6wfmn/CRj8ktHCEX+Y+9QGlHGvSYCPGWJu2e1L3vI/sPwBFDXxACcIIofdVjc3hE0dOqMZm2RxoRbt6C3RHnjW+YXQllAWqiW+XiE1Dp5eBNrhZfabVcrWhQ+V95cKA8rddQncewjjvvoHYB25cfJYJZWY5Wi1l/f9VaKWim8hg+kusKW5E/1FUYNNd78EvJXGpGu/eSVk4yN1aTSdNSEKh9l19UIsgxQqpJ/dPbfpMoJ7TCPTnO0YMSX05RHPMmjEq8nwUyn2LBQEGLmndTeDzusr+3SWYrMiOySriEDP06j2xh39AT41rlgZsyuezfHMmm0D3w7N7698F1DvWVYGc99U6YnbuINFIuqqR36Dc5ovNg1NoVuO4KmshvdpSCaQaLKsh9KqCuGk/xiE41PKquHRgvaxeAGE4BN8NVNRlJzc8JK3rDZxPtutUcLcwia7KkZJn4zaw6htiUo8Qmoqeq4MNsRO6LnoUE8FnnMpdz4B+r51xoVZNC0avBx+z/DZAz8agw+dmQOUsfGb6GVwkIqoqBCHHl/ZZZklxG6MKHXaLlgokEnQmByPmkPPq+STRJe8J9n6mhPpLSgGAsoBNEJU8+mHwZzIBS7+KKQpnrgDjzWhdWquNZovXBwAUvigDt/rTFuyRDL90+KQwG6Usoyzsy9EqlTf1gg6SWn4z6UumHPEBpYl3pUJjzT8KaqboryhUhVRVapyV8Gok8ZZdkA6evW+KV6XkD9csO+UC/3v0Jtc50vuBVlAaBHkTfajp75s7XG2A/S+dtdVxWo4nWW8hpTqyOr7dryOOjl0qgNMKArv2GkvKW3zvf0q5TBZV1uxiO3sWVp7xQ1vP3x2PrEneHXZZppbmLLyxvnEJPPLumImReMS4JbzTHWjmUhI8bEUZRGeuVUTOyl7619DfaxQc/QfgVqwyyfT1ergHzhvUFkNAsGSJ18bs1fhQtuiwJ7r+W0L8fMk+FGtF0bUHjnUSa0/rE9pyA7kvsjh+ldQJoIQcrP449rBv+XY4NEx/a56REWgy5MhR3BgGotB9dCrvaWUTQB76++2d65EqM0d4bbCzVYzZyvSXjdclcoGB5TMV0HcMjImBDMHmEdNES7LjkyRZphABwx1MJ8m2PALa+sUvKULyJqWTAzJn+sHpHyQ0yRr4cF3Aw+c8Oj6zo3fl85iCiPl2B5LF/mcmbcn9Nv7kJYePXmpPT6sCfP5ScpK6bWhxwr9Phtq9gAfdryr1qNsVwC8ytJvz3yTBRXeCzJ9UyROIe+DJNqpGuW0GrA1JK4iy9FL90IflYMZrCSnsOczq1syNY2SKO02hE+Tyj3piudWE3f3bkwegZXhMv3SAb4qUhquPULJsrQsRbNVwEXQnKWxzG4mfPub4hnu5EnTEXHaNMv6OHhDrap/mGhmN5mgxn3VCOGLYXvVKjUyDiaBoJiQO9wQtDbOukB8nzFQzFv03rSHTgItCA4RGkO8IVZE/UPwmY+aA7XqL8t/busfWDaKv6MXX6cuQxPRkU7wUTaI9dzkOQGZxm0c4QoYRRcMCtz9EQBBDYsfOQ9HDPorIIcW2SCWb6N9pDfNGUPCUFoi4k982dtMvKemieipGbMqFGIydFbBAY1pvnyKfeNtVud37im0hotSYNopPKgqV3NukJWjO+MEhjDSqPVZy0B2V0pvdYHq8/wTnf4S5f01ObyQMbqVmxv63Saq2fFhbDpxfhdeWZ2+wcBv9wOXroiCD+cuaNAy0wd7p4YDu/NdJDZXavXfib+ZDTr7iEctp+h6hIhfgYSnq/gUZg8KOTNAJYW0k53u6UEgO5WVRQzdytQT+ir4qogwg9k9onR5XWjUqJzNTn/YAD4qwvuKPrK0vpsivhL8Xcv6zEpBweWlLRLVvNP6t2nDDuqawjOsIqCZwdxed2nFLTD+gjJCIVvdFNaOEExApIJ1bO8v+1od1ORKjyIDc7VdqFKhg4bPXrQ7+wgL7thodBmPJHsw2g+amR3MkT+LTJGd2PaA/mnuqj8rRiDhXl6P0lEihCPdSrLYIf4HSSzKpSuQep/RoldxdZPeT/sfErykLVcKmzBrDcB0gAiwnLxE9zXa7SVqFMzD/xECCG+PFu39C/b0xp9F8/q2KtEY/PKR2HobvVdIAuf9PZ5mCRRTimwjbuMWURBWb7zDHmoWnb4ulbNTSK+5zt7GZOAN4TrqqRISlqS8nw9vE8B4WL4u0Cn71/zZsB5HbcqZ9H3Eg3bP52BaMIW04tkdiQ9jziOUIBFeavp8bEWu/0DeNYtXitn1pX9huYSvT6U+/mTzbCOVqT15h3/hsudnhhVpD0qBVOwmP4c/E42d6qqODUXS5IQjTx9511i/DYLz3Lqp2oOX4giuAiaqP/GpQliJL3BM7ZzNuPF5KWd5q4pNIKF5jZNSJhy1GaFh8CoRm93HVrpOE7OjC7q21pRs9/L1/Oj1Vrc5kLMrX0Anz9i2xJvRervFEU5681mB/8Qi5X4/seEU1uvRpRm0ZXaLP7p4obe86sr+dUt5dZKxXukQvlmoXaX2RBllTZ8UanzZRUoLGa/781qQATuQxwhD3WRAT+amkwAC855+yB6sEs3aqIotQdy9+XGH7IS4PlT9lth9hcp3iiSgHPZtHZIAeeT7DKmCWcW5MnHMtGXswA9ZkkrYFKjyj9W5ly88OiqkqQGby+foKBxJM8OJwBJfq9G+rxczhKHFcW/nve/jHvRAkLboNBF4Wa5ZM4NRSDy1mp1iJzai/3im0G7zRXK+tOlaapzbsh+p16JA/x+OnR2MKusREXOWtKcjEE1pQGpF4WPuGc4kO4d1XgqTroCB48Q1CipyMYAelkI5XKxO5rPkUKSrgwA+qs2MTKIkCuZ5mYeiH2izlBWs/eOp4YBF9CJFWoD3BRp5AfemF8gDUoYRhLZXzz9g/VvAbttM4I9mC4yu7Ee0YJxtHDvdqh1nADp5jkmW0ozSDh0VHoG3vim1OvOr1kqhTRRNKPrMHpwzBd7Z1Tn4hCX5c+yw0JHYHnSGN3RBCmY614hu6gj+N/Bd1Njx6hgoaOK1em6HxBOgFoBN+luVgRdECqJFS0RzWGaQlyeuCjh30rNpD+lFUKhF62X8Dtm3FMAElB9IuLIY+CToXR3kUDqydDDV8Tc+8w6hWorTQUIgyxur4Ls/NOeWgJkVXigVkQoXhKHTFmODtP5Es5Dco3PnTi1bPO1hYkQThj3cAWiClzxhwuB6l95XZ1ayE6tJC6uD5X2Hs+bbYTLIC7dp2t5GHJKPrc1xNsVgeN3FDMb7PBEdDur6tzNkhu8lTa1sTdI/6uKwQzVmLUctMyZTT/27qAAZeh9BhEJieJLPAjTXWR0AZdb2IfYXsD2Dt6Ub/JMfyGwWKj3Lda6SCrBrKiCb9Ya8Hyzk9Cs4d83VLgEzTPm934pbT7uaKr0bLe7koRvzfAYlMNqQX6pn/HuYsd4n4je/z355CeBPpotFFP0CnGgp3ZYMgBqZFFIkAi0plZXIx7/lXdF33O3tMUWDyLsP+NyW3lNeK3rtDFQ1we/l9PmQvIWtcUx+Npg0s9yVFNKAR/j3tpmvjav8J9q7DDXIlcOm1yu6rhPeVIU6PzwM0KQSIXBTzNoLNpM2yZhxeMwN31of2Le7DFVM+WcTia+cbNozrmtMibVZ2JraG1CgSoRZnkypRZXoYMu8EpJNeLOF8bH8ZgRcodaQUZhGcGahR/AuorR+s8X338iKzN45+qzoyvko/5oq1Gf80JOMWkJUAiE4lM4ICRbM2WxwnoQBsxR2SsB8rKL4KiVgHT/HaNF7qqFC+ZRsxl7a7/4LIfk+gABu1+jVzpc4mMv8pePfShe1xmh3NVG903NtjPZ+R3RGfEx9O20BVgbUwzlZ9LxFEE9DTaljrN9V1gv0KXyY4ahWxR2mSUu4YdGVWH8XXT0tlgkltoeRs32wNXYkf8EgLN6qBCFTJpK9OTd9E9YT53V1cfjWY5HrIs32xEP9ruKPuKM9jf/4k6Ye4Jw1zxa6B0UeWE2dacW46iDKdmctaS8g76eTchzEaltbaj50533YRe+Fslku+wU/hiWvmKgd/YCm/kzj+3fL+b7EfUkc8RT0h+A0SmCcXOhP9ZoGWfuCYr+NQh0n8g7hXmRxLJnDbQBek3m2eqiFx8g2/ESRTZLwEf45QpvrrSZl5H/pjlk+9M9Pw/gqjw9sWXtsyODb6Nixzn9fZHtTgCEDqyJObT9cY9RrIDOgYKHl/tVmhoRMAFU26dBPS3qsjhigH6UEm0DwFkvbRxbcO7vc4sdRyUAauwDEjcbRHU+EZYjvGCJ/i4ZLk8aqvPuOOWjQMqOHbygZxj+u7QP1t3l3bfGZMS2kMOoJGJiSMOksiVfogw2Urz9vXWdTHRvtH0tiRN013WRPgEXVrZTeOvLtVIRhpsvDyBqhkKHHkBiYjFd9BjML6i6gJyrxH9Nn1AVC03DkQn0Zn4W8KvDnb+YhrvC7qDDRSwKHdDdtugvoBBsmpyhx6fJGsZs8cmw/v8wte+iac4ytWOPX9KIKjSg6VQbBlW1IbGHoTAdIizsDOvrroV/drSRgq3EZJUgRQjWYRT8o/Xl0ELUn3LU1njjbuEkmjawAL1hqoHx6bHcvUxnG3BeA6z7IA86CAX3qp5eei+63BsURhp8HoP5ay1ZAA3vb2370F5lBmaTdhKvnwFF3YGbFkfpAW4Q/r1MJ2gnrToYUxtnX1Gtbn9UNr3x280sxB7EgkjClBqMVHvaGG5hAaLvnYEgPpvGv31lAD0y2xx843Qpmk8cJJsdClBFfdNObYBv6WCPZU4w2DiDgq77jR2ZHbt0BrMH+mqwlEqr+MPMvTYMmr9YDcj9haJV4tI65iFhlECgCLeNQ2b1fnykFfbVfDg+zsTjV0DQw8XFWDI5XFu17DR0gvNoIr8UcFpaxfUvnSLu8yM3kPwjKCGcurwznKy8Vp6fuqZPK+TrbkDLnALdDgN65wxgjX7dPo33LdO3a4MXFtfZgcfn8+WDZuy7Iw9EeB39swnk+4ND3RN97qCeiOSzUYXdevStGBzCOpMAB+00DxMl7DOO298I39Agd00hHKUV3VKVlQ5V0etSnRT20Xl70wzJrxTU3N5nr6xO117MAOLncZe5f8OXA9zvGhryCix8i/57GdChunZIzTGek6PeIlP+PUFqqSDxSaWfxbiJFpOqx9TNgLvWHQd17SgbQ2EiKeaAsqG8SrRy4ugfAXXLaW9QLPwH5Otv3VEc3x2aUTtIMpQgWrC/5RwdnP8uPTW5/rPWyTSNtuVojVoo+vO0lmzQdnGufy+tJH8cGNeVqCRkRSpyeBcp9g/W1VAOg4KQb6P4750uZI4qDZE54E/66CaMC6cgoOtD3hTC8ZEHWeWwQx/sJ5pMrTuOhjjw4zfXPnR9FMftsEJlPdVTrOmexQIDB/VV6jDv8kWqZ3oOgBQApI7XqFFZATVFQQqwbAKAKKuvEAZqnzOKgdiAACyoXU66a4u5/DHZtm8iOgUEEa6uoCTkjIdEtUN/QxN7BeCxst14E399wCAItD6kib9ssDK9Q94YOqbFZeczLY8xB34IxK7XwOz6lIImwCX1DXLnen+BPRzHsouuPBEoI1Ab3e8jo+lMltF0p9DhK2pRrQbCb2Op5ndIGhrA0Apgo4oJ7y6NKoHhmALLVHe9W1rU3QtxdPLwCqJ1065TYUsTNWomv4n0WSfrwg+f9OMdK1y5LC5VYxcOoZTmWqRSnhB5dC90S+/4vCmaoBTrnWNCvJc1k1+QamwYjsEw3JjySPcj8nZgQU5vyzE2RXyuEwwRJlAXF1/9M6R9kcSFW7Pbmfr18RPXNS9ZPQJnxEIe0ZNOWGEuu+X9lLQxxcrhLG8NwAAEi2v7e/S2QnqVsQb1wE/dHo2Euk5kmddnkuZa9wkVG0scjEQZ7SH6wlg5Aj3aMAHlvWne7bZb7rMG/7KFBRIz9zm70s+LVgPuiKh8ClEDXNQRahGNemv93wG00o1zL8P3pI5A1alncO+wBIXoD5EB0Gguy3CSQ0z8fuXY1XsGr2W0bVf/FMClH6ibii5s65h5DDFEx1T0hnG0ZPqaTieRGmY/71nRRMav4G/4WhvYCW/AwvsKGZJUUyCnz8lQtOK7gMpShTY7kZ/nEywCuR+HArX+ABsjDN+CngLEMk78f+v+k+/VJcSILy8v/fpjf3X1tbiWQRD3LItERENjb4Vg5JlTJIjBnNoDHcrYOLV09NkyLbfAnYaNdqbhvyVevIH8ncZL0M2ilUZZCr41ezxvBJT7uSkaIqiSAAB/ojSQYlvBZG6b+Y+h0tJ0hakC7KnXwZiu4/uTk+AVoR1joZIh5rk3GzXmOUtwWGsBGFdhosOwh0lEUkZMYiQGbnPcSbp2GyqQnnMHCD3k6gueFtRK/YJR2rnOtycKeb2vBBA2iBVcc8n6G7BVjnTOlkbH5sgza5MrXy/3gw3CdTSCtbu7/pRRM0kkihYYfCcv1IesfR1QCML52C5vJP6V4PECnXJQaIowXXt5Oqr5C5/nK//RgKBbVLEIXUDar/ughtX0jRm231EzLr1Rcbrez4zcjbSgek6Vu6+1+Q+qe4g35Yr6q392ClDlssacGT00KZlPPkL/7bVvyTBabd+VFBFslWG+axjUmZOclapaWPxaop6GcYIKmiMnpCOxwAAU390fmXijrU+cYb82gUEI+9gbNwMsHo1J8uf9ptFRHXr0AXhH77xK+z3E/nfoGg2DzpNCILt4FB2uhYqOAHphwHIetwz6WoaoacXw0swnKrEpu6HNJBgUG5ltCQ5vPIqPf1eBU8wRR/oKgv6L/KXO1buj+TDXMgSSU6Nj0RlHTHthwuDPKO1P2FOKva0vIsuXrKGOezpGPFnqI4nK1LpnUqriZq6eQLkcIL+yrdp2C91EI3pDXdk6LBta41eXAKSBsaMYIXV+Qs7xUOBbf6t5t4Gs5YkHw7vWjmVhrxIQZn4yktk5uti51+PPUJ/avkn8qA3FBzQUwvQIwVYcgrwi1IRpfFmXwWB8NNviP7AEBSxnBx2/xjefiERdNCPeYxnW3lizbyxERt/r7AMzLJB8EJ/KhG/WthR7H89WBj8T0wCqIv9zNayJ+kXSFtuEdrnHGXH3BR44wfL+F5xEP+IAC5sqClyqrzjuYgz9XiWBOOqITNN9LPPNNgolhatVYf7UHoSeYD3pQ2b0xZn2nzXXw0/Rm7juipbuYwOFpcHio9EqF2iVZtzj1DC8oXxGBtHBRF8H5oK52Q3N3tScBgUu/W9DHLBp/Tc5pzuFpy1YhSWfTWLibkfXRFQhxFX/8NORy/z4y1x1iMMbStWLusWSr2SbMLkRTqovd0tdBcEOY6flardx7F6CZa62zxnzRxk2LLgFnDGZGadJyrAdMhsRoyDfMnPlM71dN+EKb1FlEmuz6JFOaXquFz36Qly8Q+aqPSAg0caEIjQ+7OLTdhME60tQ62wQ7j6g4VbzfwrRGxtUGaDE0E6OyOvdtaCy4j8baS6cRUWOVc0DRcdQz7zR9uhPvWADcnmgps5f4e6wT6kiYdle79Vh36fz/kgRMsV/zCYtRUUQ37BY5WogofNqacewAAAIw5iqF8N2qh/tqbn39knbJ4ZOZVDru7/06WSrtuq04x8AIwW0pU2f6aMHkoV7CTIyFiWoeMHGibkw5BxB7vD+I069BxB2K1yRlpudGYi45vWhBZQ1x/Z2F28l96CglsKc7K0n1IBC5h8v8dFr1TSqMPlXu16ulBSYXD38CfKv4/M+Q3piGFAvB5KeHqk5bhl0NoAgAI6UOXtKn8s7tmXCcHwWDOm/RCbSlTxu6R/n7j71b029oKauKbDl7gHjbgrtaR29nCgKb7PkkfCVriE/n8OXYvBh89Y6+rQMJ9YqGv004ElzRjfHh4rFg5omNHPe2l2+u6g53zNMcY/IEc77RQEXUPsaYw5CbSltJnjHr8anIhCHpFh2NaS3XrtPhFKMN32HIXN10accLxhqoPeJSvF2TnJK2meL1N/4qahcWR4Q64zcFcTDLcmqoKCKpAO3eUBH/6UOSOrfAAA9oIoUFPCA95fKlwcQ6vhZ6O3n3rO6RNbfNqmFI9E9gnKvLybzgRZQnxKd0kWvkAPa+QIa1kBdVfeeGTQzAb6V9fJLM+Ja/3qmyt06r2FSRajCMnTrq8q7KCkg6mKcCcS3AzKV+wZ4/a4eWh8cLQU5CAyX/Pa+6XcqdC0a3yd0xgxJMZsi9oPLSpb5dDJ/2TLREph7aruqlkMP2HqirJXI7geFA1FGnI/jBQJDdk5ouLsDN/h3zdhcdnegWmiSXgQlJ4ijAvycGXcAJjAMGB8We/iwiisIZeZuuTY6klM+tASg+g4Hd+llPvmQylmyDIDq9CzbJEk6IeuikrLP9ftpJYNHvoVjPp9E3sF9bT/HJ63SuBYpF51bI4GQMr5q4l5pofOGHkkzfvBQOm14FfbFlXgngq0jkI9fgDhhAT7HYgkE16wXe65zZ2dBH8J0NiXHVgFfTUX+NdAc0iZtYB7BBVnfJUr+f27CbsJN5hyA1Gr4n9XgD7aeiJhUTeo86zdGuyIGg2YYn6btK/eo1oAHrRWQ7xAg37d08FtSvIILftrGJMx4Wj8CVCpROpmu5YC2xT3m5HJoP/fF1NS5w7V9yo/E4PUhvUlZSFZQpWmiWoIsxwLa92mrjOY2dCpMjHPHsgEy7M/fMJL4qviqbhtZ1noCabeKm5d+3q+5+3ZpE44Gppn3Wo15vbDw0J8TmFDXZNohfOON0TXmbm9RnmZBpbrFoIWBwXOVjYw++kY0EgS6aLrGcKbVSsnVkmXqzKTDHPfKdxSmDQl8e6HePXy/nR9QYCtaIDJshHhFjq3mY8ASyrQl/gtMWP8l+f/3149NWawMAdZye/xIrn0vB8U7viezmMZl5wkG8dKWB0JpGN164Vn+zChjgLPR/b+HVNq45uIAuLwcEsHz5DAyyIE2Fl9ex4gynT5IwsoCW6xZbpTvPuocJ0sCQwUtyA9hr9LVqUsh50wQ6Yyscx1B9lGB0TkDlwhCZQItMw8zSQSs7EcVxp6EqO2VWbvvcYXLK48S4QEMqxsYW7blX+eDxwOfd0ju2s1tLlqbAqO0g6Ha8pPmYzhsrZZKGFM2JN0ISiSi2Hjia/0f5JyAAKTd/pAQ8Y+YTemhCvyUR/jywaj9uDvUvYpX/qy5PK0HLrn7JwB+9TZasBjx3aLTwusVaneZ6lOIML1H9OUQj3GJvaLlx1EyCZwgkFslaYK7WFkXMsBCuDrnpLaIAk7C6+xnTo0Jc86SsyiqMV+vED9LEK0J8IvmF6Vlz3420XORrBtmxtlUx1cZ3FyH7ZTLQS7BaA4sG5eoexJgnX9CZ+S7tj/vIXO03ScmFhjM/ltHkAb82tyJZg3NHssF8rrppg4ua2zvH1au9N8vRpKeg2H6+YUrfFmbgQvWdGoyrQ3PJU92NRRl9mD+y+6gesmdnJJmKGDSiW0EctQJ41SxNY41PQVfyD16I2vk7O11PWryzwyli446zgWGGiQsQzMWNmn0CH2bAvpK+O9v8bE/6A6b3tEX7Ee/4E/Ptxk0iHCzrrqUYb+kT6jZYg+fHWjSwi0d7dPw/eucr9LEZQoH0MFbv1v0GWrlnRu05UYGSae8oukuIdOK4vhgHrQ3pfsecnr4Re5A1wNrsJhxylUg2iLLF28j6XH+IGQHYJ6E17sowpV34g/2npwj4H61vqxfYsRsT1pfklPXwWk/Sl7aGAC2XeWo702wIF+q3RjilHPMQKI+DDk2S992tJ5UimWVIKhgCJrc7Cj+EBwaTOvC3AAsRKS7Ah4OJd8wuyq8sf0uxzbWXN9XYDT1Ml95OXlHH7TCb5cZUshiaKRthWZNC7zhQqhZm7VV/O8tKx4oCsB0gI/ftvusYQdXSDBlXqOlG1TY3346yvOQRcTLQ2RefW7Thmnim+9BIAc+FvwTexA4WLKTr5twW5UWPT3PY3MvmTqncTqFCr4SkFfx/wPcRCgCOC7cRLtjcdzo1BQUFnPH+QMpB5Iz0vFbVhyhYbMB9fNbYb4F6sYob6Oned0WAU7FjdszGNAwB4sgc0Pa4KsQaJ/eoHKmZEl/1SVmS43l0xN2Q7KMgQGcQkVyjf2QKdLKENAF29DaMPEEgr3YXGa4/7eb7nWiFf88OCeWvdXxtrCkKUuFdQDPUF7BTrcPZqGs6Vkn/bV0YdI80PNQpn7MBdUn+l2TOkCAewf+Y2ctUH2crW1pwaRldhag8rUQ2jd1fTG2Qz3B7CjpOXG2PqUaHPFK6T9ZUN43hgSaH3qVw0SY2u0nMlLiaPK5qTJVm8lNVYVI5FQjQdn+sp9Lg5DnzitvsYmxeAM/ZiRoHMY3YXYnChxJnAtGo2ob8OX+tepPsQRr3+5E6HCAdHrgOAoZhY8QRVFyHnXu8Ru+0PJkQjkp6IGVgO5chr1XRYGW4Y/Lwg6BZj+rZUeqejvdvCUHburR5UHNZkILgBPpV9lqeTT3Ohu9+hwZEP6DH9+Sg0VbJRVwDKqNLriA0Phd+oOceWhHjmcic+wpZyC+u+G+2NQAbEYDve2s1U12pJ/KL9QPYxPg9CEBBOS+zkYx8k5mO9F4zfVu8HXTyeIGQscl9pdlNA9rEAAFJ8W6/6PO0i+k6mkddzYoUbbbPlka/kCO5i25ErPmo4/4hkB+FcTvtfMBD6Vp4r7rflbFJf3TN60Nz0/HrY0/snwe06m73s+F/VfduQix4QTcx4Qu4aZZz0JxPcan17cYUNM1Xf99TpCZc93yapvm/LnPnbXgB4JX0IGVzHms8cPjIuRcqivMAKt5wJAnqcGz0C3k4g/EvgGCYH0qMetvglV64MU3up9KfGYIXATYf0jzR/N22s50ZiKSdBSLhfK45rN4hieNEYhShdFt/7ytY0LI5jLWnWzS8vyKKirwpRKEj953mRaWf7Ot+aN0mzwVRMis29uQCHQtsB8zaqblwr36KamoT7gLYMl/PNnXczgYg1GnZSCGEAt7pWNqQZD13wZs5fmOtayECEB5SphJo+sYhbVqkg/ItVeJ5OXhj9AKPF6bxPJHomxAjUBEXwHzYfpAPQ9KvXm40MkhycmCf9FNKC75OUgipAZtlkg45ae8Dav4asbr+cXjGWc9ssecO8qwINi2gxB+tkOAf5xU7NOC/nFjLis6N2bX0xCqcfm48/IfaMPmHc1ZzPt+2gw1sKUGUs41bvMhf28dLRPZJtItZO3XoUVBX+mTj2AnbJn7XdYhsZ3WRrqgk3G3p+nXW/4idWfbzaI/EQdmfRYEXsC1xDMbNk8s0ascLAZuozR/W4kXCd1lObuybq+dcXZQWol+6BrrUkZsQlZyBE6/tjPX6b4PXb6lQDCLUa3EOh1hv65aDrSPif672DRLWYkeoAjukWVx7MbD7TYBSG/dlJs+Fqjq/Tv/TFdHr19rD8H7U8EHvzCiDCMgleXyjzKhAAH2YH1x+eKgxGDfkPwilg2gAJosdUIMYod4emDLTkaWQLTd/D3UU5rC3q9Ypwj2K01qWBVPGmYv5f4bJ9ac79YznX1ml9c8sn+ACaqFSGuHl5tpFFC2S8S1yn7tozWVvXKtm2CAIQF6VnGkVsg6KwXXz2ZO2aoLc8w5WZANiNXBQjt/x3mM9HGdx7wcK4DMWcC+hhWAKqtxVWvdkkiAc8lq2n4EEQ42Y2OVJXqUUywigtgXbSddWtzSdtBxlpfJ1lvNnySyIBDpj2siHLcz4V0BG9yWQ9jIveXCuxwdAqXwB46zUoJw1dbusuZF1H9dblwPLdE1zfuunRSjoT6EHZGiRJ5Q4xgr3LKtS9jZJ9uIYEkk02ylo7fRRIhnGjCLTI1HPfzfjWNgW9s7OQDNFX3aoXxi6hS5bqv/N6jh2UUyGVFNW0IT2UDMqu898pXHtBEIroEQFkwxK3jIDqJuqS7Mus9xjbJ715nxrrgtS3SRlSRnOtRy2w9+98Gb7ut0QLI7sF6uSwQM3Oo4LGCsBtXBCgd6GpSvuCvIkrivz2I3//ADZ2Y62dCZY6cWjyJAEtnLHfkMsAZXCmxeyqK7vJZTG0tPo5I/1wAI3iBnsqzBgTJvrEtnJWeeCtSXj0jWxPA+LOthzpgMkJBGL9l5qjzQQJOWQ6tttyu7sTa+R/ALSBYSna3+hGKCW7V+NfH667ofT0l65MgSbkpnMcfjATFuct5f/XOXwxdqQvPGSB4ECdFC/pjgT/VSPwu6QtNFw3bmY8f1pqfjmG184rqWENAdqEbUed3M6j5CEUVMVMvtzBbEbql64LqkfoCHbooybQU5b3J2xnGjPVBXUbK+7pGd7pFSWtIQVmf9IiuJYLdpxD3zWuUblbYXvTbp7BBRKxZTmn61AvFbbps+xAyqeHDzEoiQ9IAfVUMKsoLecX5WhFT57JnabpKjgc2+q4Y+sH8fco8INkNZhdMlreJhrgZSXvXZeKSXJzkdPetgA01SW5DI8B1FbOhMEz+yyPoLekcjPUu/UyNMZVaSGS3HCg0uS90pUA5vnjvazkz1B1P77dxFyH74fwC1dTltku9GOdLXNaBhqYLfxm5QOnIhzTdaAhmiqsnTZVmEQE9j5OZNEMKGJdVJ+o3tcJQ9+M5Uzo2AL4CLmULY5onmwk7TPxJcBNkrL/OpJjEAdjkRRhklZ88m3RUEvlL6WhLVI2BQLNhzCeU0adprSoPg4U7w5k5FnAAdRSagf1Q6ND0byzvdZtsg0Sl+eCFAwyKfxoSc/8MwG4LuPpUuzpw5Hk7Ci7gtNs57ITlUwjmT13HHqTUgdGzNkzV/5xB2gSuauF4LTHxZrCoCJ1dWdirMSedy3EIqjQwxBOChlGAAhNgzzXAyaU1tagRktUAsgxm4EGWqQQujAh65hgYrUaTcXIPbNSffIe+RSrwM1RGKoKBvH/NghL0ooi+wILBk6jy+WWgrnU+8dMVQ2biMHCw9Hp82RL27K6/hZVeQ5AEAb4/JNgaip1VVPGzUiu5Oltl4Cf5+lzdGPP6ju9RfvyTVoA6sc+FwE+3lN86CoaUGh4RVQAXU0NblptDBje6ArainpheJviChk+NYnp19EWmZpVTCQrjE6NHI90mpuGBu2Sf5kek6YZfxRcJ7MRR6XXYxcfXWdHkQM3VLkSlYqRUImEXmB6eBL6amYwduy7RkwHNyMCStZTxDW6qH1xC/G+vcovSdlQGyOH1uph4XTipizyk6xLyCGcafprUXYCUXlO3bt/gH3S9uQY11F4+47kwkxqIjqQ5v7N4NB3mvWzpm5RoLS+/dspRs3CFUNo4rtwxTnttkazQn+kIFQFEVpS2ZSttJd1P6nzFaW28FELu+jiNb4r4tWf4LCP2HXHh3jnoVB3d7gIUhcZu6a1rXhrJZ3fs9WlwzsKi4rXitdh+DD8SV/OV+q4cKPcInX5dfK+893NxG0sr6Xb2+7mK20TDKtgqMLk2XLPQE4B0k3nBcUJ2kkgWWTj4vV6hbyewjBTr/kH9ys0aB989XdxL7aKEkTZP1smFmQE/eKBGukAZ9wme5V3HqBfArl1MV+/5Ld6u59hx/da5ztbEQ29s2CJCBhl1Zlj3d3WcfVdpRjNlifmAPLAJaHn/RzKlOtEdFDvw5826apzvBE7XzELuUfOdC36aL246q1qYuivvcRkKb6MWBi67YhtrXw0kQNDbs9MwTTorOSmIc15duaEoTzv6j8B5zWxlPfdPUsqqLXY96Xu4fn8E1y7WntfH/jcyI2rnDxhr8qbWat3j/R5b2MggfLEDi/7VzrdL+PgzEzEPubFMyPcj7Mx+xU28nh2068tLQiYg4YMKGNdZCuJh6+mjBIVkIgnmdHPHhfiwAABJtS4N/h/g6dugHiedhZFGWtTHicOjRc6WDbyqH/L1Ku4+bEJhtgzAaEwhBqCTNQpySK2n+cWrp/HD73HY2dx+H16W0tb71Lojkh9O3/xJDc+427EPEMXW9dYigeqtXES0k1VKahZjezHZZsk9crBAVGUEdA9dcAYwVAeNYrfFwLV/6uxXUpamKo9dch+J17NSmKkXNOo/uUwOPaR2oG047RwmRoOK55MnTn3sXTNKPnih5vcCphNMNPHjv63VwozhcEdrpuxhrwv0f6PfUiXWsJmtAJuenC840oBj2BnlJWFMrrpNZ8YavolDAX+3cSqivf/AICqPrTy+wcf9H+v/lecAX+GKXTHU9/Z4ElAmdHp/Bc5mhKqDkPkq4IcI8+kKMUHaf9/oTEviks9K6LCra5eVJUurd4ZpiVHhbh+mXAIXNMpVsrMIQH+ajKdo+WH8qss697z11cIj9jb8y2oLKSujiXYYKhc/HRy73rYuSTvknFzY2XjAuJz926l3Y6rdvfXjiBvDE2+uwZWlkecXlQSoCM1mil/sAzQgKeQAB0ifqPXvWEy/eU3zusCFLpqdr61SIzU8aXnADB/Tsk5RRysOksQQQZx2R9pWFQYlHmIBxO/Gx5Oy4BY29zX7/v/0W++ixo8S05k+n++R1Jn9MC/YHV5Kv4hHKGnMgEWarHfA3/gb3DRQFAH4Udet3KEJG/mzRHv/iWrbdjjqgZFeVdXX/h4IJ2r9V0oeNEjTmNLThUSDez89C21LdKcY7icUcQcGv60oy8ZbjRdHvmU7Sij0GtdzMLrhNsf8eYeU9vLQ94o74jSZEUv8sel+dGWtoHtNk3gF11IKzIXT7UBarKRv8093dUi1YjQurp06mBVwmlsayV5qMfdjYvIv+Z5WEP7sh/8tt0wSb74fRHIfWEj6RFZF5CcOb6mXygRaHlHS0KB4CWF8cFMptqs29Rqh9buIdhKCJGxzbySf/y8gBi4Epffnfs1VQbZ4D9wZtqNQ8CN9L6US2fLR37XXa6iKf/S0k+L81+ChPwc7l5DqIfM1TOztMk+UAwDqPUqTGk7r4Wo5uDfp0HMyBFnkTgM1cexdQ4agSuMFYlTQPX2V+MKWFkH6RqKxueVOGmS7NzfCdg8AmwlXHnq8d5bEEVRHIWW9HRQFtaDXjfoXE+AAYgc0lfFIVYiZBHAaNW2qWDVOF3/m7RBPeaN7ND/7mZxbXmdvLPINkvcOIVtSXukl+nqZOYS2xbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==", vi = "data:image/webp;base64,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", yi = "attached", bi = 1e3, xi = 1001, Si = 1002, Ci = 1003, wi = 1004, Ti = 1005, Ei = 1006, Di = 1007, Oi = 1008, ki = 1009, Ai = 1010, ji = 1011, Mi = 1012, Ni = 1013, Pi = 1014, Fi = 1015, Ii = 1016, Li = 1017, Ri = 1018, zi = 1020, Bi = 35902, Vi = 35899, Hi = 1021, Ui = 1022, Wi = 1023, Gi = 1026, Ki = 1027, qi = 1028, Ji = 1029, Yi = 1030, Xi = 1031, Zi = 1033, Qi = 33776, $i = 33777, ea = 33778, ta = 33779, na = 35840, ra = 35841, ia = 35842, aa = 35843, oa = 36196, sa = 37492, ca = 37496, la = 37488, ua = 37489, da = 37490, fa = 37491, pa = 37808, ma = 37809, ha = 37810, ga = 37811, _a = 37812, va = 37813, ya = 37814, ba = 37815, xa = 37816, Sa = 37817, Ca = 37818, wa = 37819, Ta = 37820, Ea = 37821, Da = 36492, Oa = 36494, ka = 36495, Aa = 36283, ja = 36284, Ma = 36285, Na = 36286, Pa = 2300, Fa = 2301, Ia = 2302, La = 2303, Ra = 2400, za = 2401, Ba = 2402, Va = 2500, Ha = 3200, Ua = "srgb", Wa = "srgb-linear", Ga = "linear", Ka = "srgb", qa = 7680, Ja = 35044, Ya = 2e3;
function Xa(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function Za(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Qa(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function $a() {
	let e = Qa("canvas");
	return e.style.display = "block", e;
}
var eo = {};
function to(...e) {
	"" + e.shift();
}
function no(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function G(...e) {
	e = no(e), "" + e.shift();
	{
		let t = e[0];
		t && t.isStackTrace;
	}
}
function K(...e) {
	e = no(e), "" + e.shift();
	{
		let t = e[0];
		t && t.isStackTrace;
	}
}
function ro(...e) {
	let t = e.join(" ");
	t in eo || (eo[t] = !0, G(...e));
}
function io(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var ao = {
	0: 0,
	2: 6,
	4: 4,
	3: 5,
	1: 1,
	6: 2,
	7: 7,
	5: 3
}, oo = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, so = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), co = 1234567, lo = Math.PI / 180, uo = 180 / Math.PI;
function fo() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (so[e & 255] + so[e >> 8 & 255] + so[e >> 16 & 255] + so[e >> 24 & 255] + "-" + so[t & 255] + so[t >> 8 & 255] + "-" + so[t >> 16 & 15 | 64] + so[t >> 24 & 255] + "-" + so[n & 63 | 128] + so[n >> 8 & 255] + "-" + so[n >> 16 & 255] + so[n >> 24 & 255] + so[r & 255] + so[r >> 8 & 255] + so[r >> 16 & 255] + so[r >> 24 & 255]).toLowerCase();
}
function po(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function mo(e, t) {
	return (e % t + t) % t;
}
function ho(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function go(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function _o(e, t, n) {
	return (1 - n) * e + n * t;
}
function vo(e, t, n, r) {
	return _o(e, t, 1 - Math.exp(-n * r));
}
function yo(e, t = 1) {
	return t - Math.abs(mo(e, t * 2) - t);
}
function bo(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function xo(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function So(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function Co(e, t) {
	return e + Math.random() * (t - e);
}
function wo(e) {
	return e * (.5 - Math.random());
}
function To(e) {
	e !== void 0 && (co = e);
	let t = co += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Eo(e) {
	return e * lo;
}
function Do(e) {
	return e * uo;
}
function Oo(e) {
	return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function ko(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function Ao(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function jo(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: G("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function Mo(e) {
	switch (e.constructor) {
		case Uint32Array: return 4294967295;
		case Uint16Array: return 65535;
		case Uint8Array:
		case Uint8ClampedArray: return 255;
		case Int32Array: return 2147483647;
		case Int16Array: return 32767;
		case Int8Array: return 127;
		default: return;
	}
}
function No(e, t) {
	if (t.constructor === Float32Array) return e;
	let n = Mo(t);
	if (n === void 0) throw Error("THREE.MathUtils: Invalid component type.");
	return Math.max(e / n, -1);
}
function Po(e, t) {
	if (t.constructor === Float32Array) return e;
	let n = Mo(t);
	if (n === void 0) throw Error("THREE.MathUtils: Invalid component type.");
	return Math.round(e * n);
}
var Fo = {
	DEG2RAD: lo,
	RAD2DEG: uo,
	generateUUID: fo,
	clamp: po,
	euclideanModulo: mo,
	mapLinear: ho,
	inverseLerp: go,
	lerp: _o,
	damp: vo,
	pingpong: yo,
	smoothstep: bo,
	smootherstep: xo,
	randInt: So,
	randFloat: Co,
	randFloatSpread: wo,
	seededRandom: To,
	degToRad: Eo,
	radToDeg: Do,
	isPowerOfTwo: Oo,
	ceilPowerOfTwo: ko,
	floorPowerOfTwo: Ao,
	setQuaternionFromProperEuler: jo,
	normalize: Po,
	denormalize: No
}, Io = class {
	static {
		this.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = po(this.x, e.x, t.x), this.y = po(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = po(this.x, e, t), this.y = po(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(po(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(po(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Lo = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: G("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(po(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, q = class {
	static {
		this.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(zo.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(zo.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = po(this.x, e.x, t.x), this.y = po(this.y, e.y, t.y), this.z = po(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = po(this.x, e, t), this.y = po(this.y, e, t), this.z = po(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(po(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return Ro.copy(this).projectOnVector(e), this.sub(Ro);
	}
	reflect(e) {
		return this.sub(Ro.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(po(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, Ro = /*@__PURE__*/ new q(), zo = /*@__PURE__*/ new Lo(), J = class {
	static {
		this.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Bo.makeScale(e, t)), this;
	}
	rotate(e) {
		return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Bo.makeRotation(-e)), this;
	}
	translate(e, t) {
		return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Bo.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, Bo = /*@__PURE__*/ new J(), Vo = /*@__PURE__*/ new J().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Ho = /*@__PURE__*/ new J().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Uo() {
	let e = {
		enabled: !0,
		workingColorSpace: Wa,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n || (this.spaces[t].transfer === "srgb" && (e.r = Go(e.r), e.g = Go(e.g), e.b = Go(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = Ko(e.r), e.g = Ko(e.g), e.b = Ko(e.b))), e;
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? Ga : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[Wa]: {
			primaries: t,
			whitePoint: r,
			transfer: Ga,
			toXYZ: Vo,
			fromXYZ: Ho,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Ua },
			outputColorSpaceConfig: { drawingBufferColorSpace: Ua }
		},
		[Ua]: {
			primaries: t,
			whitePoint: r,
			transfer: Ka,
			toXYZ: Vo,
			fromXYZ: Ho,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Ua }
		}
	}), e;
}
var Wo = /*@__PURE__*/ Uo();
function Go(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function Ko(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var qo, Jo = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			qo === void 0 && (qo = Qa("canvas")), qo.width = e.width, qo.height = e.height;
			let t = qo.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = qo;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Qa("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = Go(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(Go(t[e] / 255) * 255) : t[e] = Go(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return G("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, Yo = 0, Xo = class {
	constructor(e = null) {
		this.isTextureSource = !0, Object.defineProperty(this, "id", { value: Yo++ }), this.uuid = fo(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width || 0, t.height || 0, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(Zo(r[t].image)) : e.push(Zo(r[t]));
			} else e = Zo(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function Zo(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Jo.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (G("Texture: Unable to serialize Texture."), {});
}
var Qo = 0, $o = /*@__PURE__*/ new q(), es = class e extends oo {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = xi, i = xi, a = Ei, o = Oi, s = Wi, c = ki, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Qo++ }), this.uuid = fo(), this.name = "", this.source = new Xo(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new Io(0, 0), this.repeat = new Io(1, 1), this.center = new Io(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new J(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
	}
	get width() {
		return this.source.getSize($o).x;
	}
	get height() {
		return this.source.getSize($o).y;
	}
	get depth() {
		return this.source.getSize($o).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.mipmapsAutoUpdate = e.mipmapsAutoUpdate, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isPMREMTexture = e.isPMREMTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				G(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? G(`Texture.setValues(): property '${t}' does not exist.`) : r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			mipmapsAutoUpdate: this.mipmapsAutoUpdate,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case bi:
				e.x -= Math.floor(e.x);
				break;
			case xi:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case Si: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case bi:
				e.y -= Math.floor(e.y);
				break;
			case xi:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case Si: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
es.DEFAULT_IMAGE = null, es.DEFAULT_MAPPING = 300, es.DEFAULT_ANISOTROPY = 1;
var ts = class {
	static {
		this.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = po(this.x, e.x, t.x), this.y = po(this.y, e.y, t.y), this.z = po(this.z, e.z, t.z), this.w = po(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = po(this.x, e, t), this.y = po(this.y, e, t), this.z = po(this.z, e, t), this.w = po(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(po(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, ns = class extends oo {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: Ei,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveColorBuffer: !0,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			storeMultisampledColorBuffer: !0,
			storeMultisampledDepthBuffer: !0,
			storeMultisampledStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1,
			useArrayDepthTexture: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new ts(0, 0, e, t), this.scissorTest = !1, this.viewport = new ts(0, 0, e, t), this.textures = [];
		let r = n.count;
		for (let i = 0; i < r; i++) this.textures[i] = new es({
			width: e,
			height: t,
			depth: n.depth
		}), this.textures[i].isRenderTargetTexture = !0, this.textures[i].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: Ei,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.mipmapsAutoUpdate !== void 0 && (t.mipmapsAutoUpdate = e.mipmapsAutoUpdate), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Xo(n);
		}
		if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) {
			if (e.depthTexture.renderTarget === e) {
				let t = e.depthTexture.clone();
				t.renderTarget = null, this.depthTexture = t;
			} else this.depthTexture = e.depthTexture;
		} else this.depthTexture = null;
		return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, rs = class extends ns {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, is = class extends es {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = Ci, this.minFilter = Ci, this.wrapR = xi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, as = class extends es {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = Ci, this.minFilter = Ci, this.wrapR = xi, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
}, Y = class e {
	static {
		this.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / os.setFromMatrixColumn(e, 0).length(), i = 1 / os.setFromMatrixColumn(e, 1).length(), a = 1 / os.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(cs, e, ls);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return fs.subVectors(e, t), fs.lengthSq() === 0 && (fs.z = 1), fs.normalize(), us.crossVectors(n, fs), us.lengthSq() === 0 && (Math.abs(n.z) === 1 ? fs.x += 1e-4 : fs.z += 1e-4, fs.normalize(), us.crossVectors(n, fs)), us.normalize(), ds.crossVectors(fs, us), r[0] = us.x, r[4] = ds.x, r[8] = fs.x, r[1] = us.y, r[5] = ds.y, r[9] = fs.y, r[2] = us.z, r[6] = ds.z, r[10] = fs.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], M = r[14], N = r[3], P = r[7], F = r[11], I = r[15];
		return i[0] = a * x + o * T + s * k + c * N, i[4] = a * S + o * E + s * A + c * P, i[8] = a * C + o * D + s * j + c * F, i[12] = a * w + o * O + s * M + c * I, i[1] = l * x + u * T + d * k + f * N, i[5] = l * S + u * E + d * A + f * P, i[9] = l * C + u * D + d * j + f * F, i[13] = l * w + u * O + d * M + f * I, i[2] = p * x + m * T + h * k + g * N, i[6] = p * S + m * E + h * A + g * P, i[10] = p * C + m * D + h * j + g * F, i[14] = p * w + m * O + h * M + g * I, i[3] = _ * x + v * T + y * k + b * N, i[7] = _ * S + v * E + y * A + b * P, i[11] = _ * C + v * D + y * j + b * F, i[15] = _ * w + v * O + y * M + b * I, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
		return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = os.set(r[0], r[1], r[2]).length(), o = os.set(r[4], r[5], r[6]).length(), s = os.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), ss.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return ss.elements[0] *= c, ss.elements[1] *= c, ss.elements[2] *= c, ss.elements[4] *= l, ss.elements[5] *= l, ss.elements[6] *= l, ss.elements[8] *= u, ss.elements[9] *= u, ss.elements[10] *= u, t.setFromRotationMatrix(ss), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = Ya, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = Ya, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, os = /*@__PURE__*/ new q(), ss = /*@__PURE__*/ new Y(), cs = /*@__PURE__*/ new q(0, 0, 0), ls = /*@__PURE__*/ new q(1, 1, 1), us = /*@__PURE__*/ new q(), ds = /*@__PURE__*/ new q(), fs = /*@__PURE__*/ new q(), ps = /*@__PURE__*/ new Y(), ms = /*@__PURE__*/ new Lo(), hs = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(po(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-po(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(po(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-po(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(po(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-po(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: G("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return ps.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ps, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return ms.setFromEuler(this), this.setFromQuaternion(ms, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
hs.DEFAULT_ORDER = "XYZ";
var gs = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, _s = 0, vs = /*@__PURE__*/ new q(), ys = /*@__PURE__*/ new Lo(), bs = /*@__PURE__*/ new Y(), xs = /*@__PURE__*/ new q(), Ss = /*@__PURE__*/ new q(), Cs = /*@__PURE__*/ new q(), ws = /*@__PURE__*/ new Lo(), Ts = /*@__PURE__*/ new q(1, 0, 0), Es = /*@__PURE__*/ new q(0, 1, 0), Ds = /*@__PURE__*/ new q(0, 0, 1), Os = { type: "added" }, ks = { type: "removed" }, As = {
	type: "childadded",
	child: null
}, js = {
	type: "childremoved",
	child: null
}, Ms = class e extends oo {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: _s++ }), this.uuid = fo(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new q(), n = new hs(), r = new Lo(), i = new q(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Y() },
			normalMatrix: { value: new J() }
		}), this.matrix = new Y(), this.matrixWorld = new Y(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new gs(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale), this.pivot !== null && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return ys.setFromAxisAngle(e, t), this.quaternion.multiply(ys), this;
	}
	rotateOnWorldAxis(e, t) {
		return ys.setFromAxisAngle(e, t), this.quaternion.premultiply(ys), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(Ts, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(Es, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(Ds, e);
	}
	translateOnAxis(e, t) {
		return vs.copy(e).applyQuaternion(this.quaternion), this.position.add(vs.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(Ts, e);
	}
	translateY(e) {
		return this.translateOnAxis(Es, e);
	}
	translateZ(e) {
		return this.translateOnAxis(Ds, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(bs.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? xs.copy(e) : xs.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Ss.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? bs.lookAt(Ss, xs, this.up) : bs.lookAt(xs, Ss, this.up), this.quaternion.setFromRotationMatrix(bs), r && (bs.extractRotation(r.matrixWorld), ys.setFromRotationMatrix(bs), this.quaternion.premultiply(ys.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (K("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Os), As.child = e, this.dispatchEvent(As), As.child = null) : K("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ks), js.child = e, this.dispatchEvent(js), js.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), bs.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), bs.multiply(e.parent.matrixWorld)), e.applyMatrix4(bs), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Os), As.child = e, this.dispatchEvent(As), As.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ss, e, Cs), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ss, ws, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	intersectsFrustum() {
		return !0;
	}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
};
Ms.DEFAULT_UP = /*@__PURE__*/ new q(0, 1, 0), Ms.DEFAULT_MATRIX_AUTO_UPDATE = !0, Ms.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Ns = class extends Ms {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, Ps = { type: "move" }, Fs = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Ns(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Ns(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new q(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new q()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Ns(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new q(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new q(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.quaternion, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.quaternion, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ps)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new Ns();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, Is = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, Ls = {
	h: 0,
	s: 0,
	l: 0
}, Rs = {
	h: 0,
	s: 0,
	l: 0
};
function zs(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var X = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Ua) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Wo.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = Wo.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, Wo.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = Wo.workingColorSpace) {
		if (e = mo(e, 1), t = po(t, 0, 1), n = po(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = zs(i, r, e + 1 / 3), this.g = zs(i, r, e), this.b = zs(i, r, e - 1 / 3);
		}
		return Wo.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = Ua) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && G("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseFloat(i[1])) / 100, Math.min(100, parseFloat(i[2])) / 100, Math.min(100, parseFloat(i[3])) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: G("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			G("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Ua) {
		let n = Is[e.toLowerCase()];
		return n === void 0 ? G("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = Go(e.r), this.g = Go(e.g), this.b = Go(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = Ko(e.r), this.g = Ko(e.g), this.b = Ko(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Ua) {
		return Wo.workingToColorSpace(Bs.copy(this), e), Math.round(po(Bs.r * 255, 0, 255)) * 65536 + Math.round(po(Bs.g * 255, 0, 255)) * 256 + Math.round(po(Bs.b * 255, 0, 255));
	}
	getHexString(e = Ua) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = Wo.workingColorSpace) {
		Wo.workingToColorSpace(Bs.copy(this), t);
		let n = Bs.r, r = Bs.g, i = Bs.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = Wo.workingColorSpace) {
		return Wo.workingToColorSpace(Bs.copy(this), t), e.r = Bs.r, e.g = Bs.g, e.b = Bs.b, e;
	}
	getStyle(e = Ua) {
		Wo.workingToColorSpace(Bs.copy(this), e);
		let t = Bs.r, n = Bs.g, r = Bs.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(Ls), this.setHSL(Ls.h + e, Ls.s + t, Ls.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(Ls), e.getHSL(Rs);
		let n = _o(Ls.h, Rs.h, t), r = _o(Ls.s, Rs.s, t), i = _o(Ls.l, Rs.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, Bs = /*@__PURE__*/ new X();
X.NAMES = Is;
var Vs = class e {
	constructor(e, t = 1, n = 1e3) {
		this.isFog = !0, this.name = "", this.color = new X(e), this.near = t, this.far = n;
	}
	clone() {
		return new e(this.color, this.near, this.far);
	}
	toJSON() {
		return {
			type: "Fog",
			name: this.name,
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		};
	}
}, Hs = class extends Ms {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hs(), this.environmentIntensity = 1, this.environmentRotation = new hs(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), this.background = e.background === null ? null : e.background.clone(), this.environment = e.environment === null ? null : e.environment.clone(), this.fog = e.fog === null ? null : e.fog.clone(), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), this.overrideMaterial = e.overrideMaterial === null ? null : e.overrideMaterial.clone(), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Us = /*@__PURE__*/ new q(), Ws = /*@__PURE__*/ new q(), Gs = /*@__PURE__*/ new q(), Ks = /*@__PURE__*/ new q(), qs = /*@__PURE__*/ new q(), Js = /*@__PURE__*/ new q(), Ys = /*@__PURE__*/ new q(), Xs = /*@__PURE__*/ new q(), Zs = /*@__PURE__*/ new q(), Qs = /*@__PURE__*/ new q(), $s = /*@__PURE__*/ new ts(), ec = /*@__PURE__*/ new ts(), tc = /*@__PURE__*/ new ts(), nc = class e {
	constructor(e = new q(), t = new q(), n = new q()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Us.subVectors(e, t), r.cross(Us);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Us.subVectors(r, t), Ws.subVectors(n, t), Gs.subVectors(e, t);
		let a = Us.dot(Us), o = Us.dot(Ws), s = Us.dot(Gs), c = Ws.dot(Ws), l = Ws.dot(Gs), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, Ks) !== null && Ks.x >= 0 && Ks.y >= 0 && Ks.x + Ks.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, Ks) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, Ks.x), s.addScaledVector(a, Ks.y), s.addScaledVector(o, Ks.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return $s.setScalar(0), ec.setScalar(0), tc.setScalar(0), $s.fromBufferAttribute(e, t), ec.fromBufferAttribute(e, n), tc.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector($s, i.x), a.addScaledVector(ec, i.y), a.addScaledVector(tc, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Us.subVectors(n, t), Ws.subVectors(e, t), Us.cross(Ws).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Us.subVectors(this.c, this.b), Ws.subVectors(this.a, this.b), Us.cross(Ws).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		qs.subVectors(r, n), Js.subVectors(i, n), Xs.subVectors(e, n);
		let s = qs.dot(Xs), c = Js.dot(Xs);
		if (s <= 0 && c <= 0) return t.copy(n);
		Zs.subVectors(e, r);
		let l = qs.dot(Zs), u = Js.dot(Zs);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0 && s - l > 0) return a = s / (s - l), t.copy(n).addScaledVector(qs, a);
		Qs.subVectors(e, i);
		let f = qs.dot(Qs), p = Js.dot(Qs);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Js, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Ys.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Ys, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(qs, a).addScaledVector(Js, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, rc = class {
	constructor(e = new q(Infinity, Infinity, Infinity), t = new q(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(ac.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(ac.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = ac.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0 && e.isBatchedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, ac) : ac.fromBufferAttribute(r, t), ac.applyMatrix4(e.matrixWorld), this.expandByPoint(ac);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), oc.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), oc.copy(e.boundingBox)), oc.applyMatrix4(e.matrixWorld), this.union(oc);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, ac), ac.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(pc), mc.subVectors(this.max, pc), sc.subVectors(e.a, pc), cc.subVectors(e.b, pc), lc.subVectors(e.c, pc), uc.subVectors(cc, sc), dc.subVectors(lc, cc), fc.subVectors(sc, lc);
		let t = [
			0,
			-uc.z,
			uc.y,
			0,
			-dc.z,
			dc.y,
			0,
			-fc.z,
			fc.y,
			uc.z,
			0,
			-uc.x,
			dc.z,
			0,
			-dc.x,
			fc.z,
			0,
			-fc.x,
			-uc.y,
			uc.x,
			0,
			-dc.y,
			dc.x,
			0,
			-fc.y,
			fc.x,
			0
		];
		return !_c(t, sc, cc, lc, mc) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !_c(t, sc, cc, lc, mc)) ? !1 : (hc.crossVectors(uc, dc), t = [
			hc.x,
			hc.y,
			hc.z
		], _c(t, sc, cc, lc, mc));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, ac).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(ac).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (ic[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), ic[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), ic[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), ic[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), ic[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), ic[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), ic[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), ic[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(ic)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, ic = [
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q(),
	/*@__PURE__*/ new q()
], ac = /*@__PURE__*/ new q(), oc = /*@__PURE__*/ new rc(), sc = /*@__PURE__*/ new q(), cc = /*@__PURE__*/ new q(), lc = /*@__PURE__*/ new q(), uc = /*@__PURE__*/ new q(), dc = /*@__PURE__*/ new q(), fc = /*@__PURE__*/ new q(), pc = /*@__PURE__*/ new q(), mc = /*@__PURE__*/ new q(), hc = /*@__PURE__*/ new q(), gc = /*@__PURE__*/ new q();
function _c(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		gc.fromArray(e, a);
		let o = i.x * Math.abs(gc.x) + i.y * Math.abs(gc.y) + i.z * Math.abs(gc.z), s = t.dot(gc), c = n.dot(gc), l = r.dot(gc);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var vc = /*@__PURE__*/ new q(), yc = /*@__PURE__*/ new Io(), bc = 0, xc = class extends oo {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: bc++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Ja, this.updateRanges = [], this.gpuType = Fi, this.version = 0, this._normalizationScale = e === void 0 ? void 0 : Mo(e);
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this._normalizationScale = e._normalizationScale, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) yc.fromBufferAttribute(this, t), yc.applyMatrix3(e), this.setXY(t, yc.x, yc.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) vc.fromBufferAttribute(this, t), vc.applyMatrix3(e), this.setXYZ(t, vc.x, vc.y, vc.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) vc.fromBufferAttribute(this, t), vc.applyMatrix4(e), this.setXYZ(t, vc.x, vc.y, vc.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) vc.fromBufferAttribute(this, t), vc.applyNormalMatrix(e), this.setXYZ(t, vc.x, vc.y, vc.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) vc.fromBufferAttribute(this, t), vc.transformDirection(e), this.setXYZ(t, vc.x, vc.y, vc.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = this._denormalize(n)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = this._normalize(n)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setX(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setY(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setW(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r), i = this._normalize(i)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	_denormalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? No(e, this.array) : Math.max(e / t, -1);
	}
	_normalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? Po(e, this.array) : Math.round(e * t);
	}
}, Sc = class extends xc {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Cc = class extends xc {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, wc = class extends xc {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, Tc = /*@__PURE__*/ new rc(), Ec = /*@__PURE__*/ new q(), Dc = /*@__PURE__*/ new q(), Oc = class {
	constructor(e = new q(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? Tc.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		Ec.subVectors(e, this.center);
		let t = Ec.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(Ec, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Dc.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ec.copy(e.center).add(Dc)), this.expandByPoint(Ec.copy(e.center).sub(Dc))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, kc = 0, Ac = /*@__PURE__*/ new Y(), jc = /*@__PURE__*/ new Ms(), Mc = /*@__PURE__*/ new q(), Nc = /*@__PURE__*/ new rc(), Pc = /*@__PURE__*/ new rc(), Fc = /*@__PURE__*/ new q(), Ic = class e extends oo {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: kc++ }), this.uuid = fo(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (Xa(e) ? Cc : Sc)(e, 1) : e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new J().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return Ac.makeRotationFromQuaternion(e), this.applyMatrix4(Ac), this;
	}
	rotateX(e) {
		return Ac.makeRotationX(e), this.applyMatrix4(Ac), this;
	}
	rotateY(e) {
		return Ac.makeRotationY(e), this.applyMatrix4(Ac), this;
	}
	rotateZ(e) {
		return Ac.makeRotationZ(e), this.applyMatrix4(Ac), this;
	}
	translate(e, t, n) {
		return Ac.makeTranslation(e, t, n), this.applyMatrix4(Ac), this;
	}
	scale(e, t, n) {
		return Ac.makeScale(e, t, n), this.applyMatrix4(Ac), this;
	}
	lookAt(e) {
		return jc.lookAt(e), jc.updateMatrix(), this.applyMatrix4(jc.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Mc).negate(), this.translate(Mc.x, Mc.y, Mc.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new wc(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && G("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new rc());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) K("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new q(-Infinity, -Infinity, -Infinity), new q(Infinity, Infinity, Infinity));
		else {
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					Nc.setFromBufferAttribute(n), this.morphTargetsRelative ? (Fc.addVectors(this.boundingBox.min, Nc.min), this.boundingBox.expandByPoint(Fc), Fc.addVectors(this.boundingBox.max, Nc.max), this.boundingBox.expandByPoint(Fc)) : (this.boundingBox.expandByPoint(Nc.min), this.boundingBox.expandByPoint(Nc.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && K("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Oc());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) K("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new q(), Infinity);
		else if (e) {
			let n = this.boundingSphere.center;
			if (Nc.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Pc.setFromBufferAttribute(n), this.morphTargetsRelative ? (Fc.addVectors(Nc.min, Pc.min), Nc.expandByPoint(Fc), Fc.addVectors(Nc.max, Pc.max), Nc.expandByPoint(Fc)) : (Nc.expandByPoint(Pc.min), Nc.expandByPoint(Pc.max));
			}
			Nc.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) Fc.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(Fc));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) Fc.fromBufferAttribute(a, t), o && (Mc.fromBufferAttribute(e, t), Fc.add(Mc)), r = Math.max(r, n.distanceToSquared(Fc));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && K("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			K("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new xc(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let o = [], s = [], c = new Uint8Array(n.count);
		for (let e = 0; e < n.count; e++) o[e] = new q(), s[e] = new q();
		let l = new q(), u = new q(), d = new q(), f = new Io(), p = new Io(), m = new Io(), h = new q(), g = new q();
		function _(e, t, r) {
			c[e] = c[t] = c[r] = 1, l.fromBufferAttribute(n, e), u.fromBufferAttribute(n, t), d.fromBufferAttribute(n, r), f.fromBufferAttribute(i, e), p.fromBufferAttribute(i, t), m.fromBufferAttribute(i, r), u.sub(l), d.sub(l), p.sub(f), m.sub(f);
			let a = 1 / (p.x * m.y - m.x * p.y);
			isFinite(a) && (h.copy(u).multiplyScalar(m.y).addScaledVector(d, -p.y).multiplyScalar(a), g.copy(d).multiplyScalar(p.x).addScaledVector(u, -m.x).multiplyScalar(a), o[e].add(h), o[t].add(h), o[r].add(h), s[e].add(g), s[t].add(g), s[r].add(g));
		}
		let v = this.groups;
		v.length === 0 && (v = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = v.length; t < n; ++t) {
			let n = v[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) _(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let y = new q(), b = new q(), x = new q(), S = new q();
		function C(e) {
			x.fromBufferAttribute(r, e), S.copy(x);
			let t = o[e];
			y.copy(t), y.sub(x.multiplyScalar(x.dot(t))).normalize(), b.crossVectors(S, t);
			let n = b.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, y.x, y.y, y.z, n);
		}
		for (let e = 0, t = n.count; e < t; ++e) c[e] && C(e);
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new xc(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new q(), i = new q(), a = new q(), o = new q(), s = new q(), c = new q(), l = new q(), u = new q();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) Fc.fromBufferAttribute(e, t), Fc.normalize(), e.setXYZ(t, Fc.x, Fc.y, Fc.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new xc(a, r, i);
		}
		if (this.index === null) return G("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Lc = class {
	constructor(e, t) {
		this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = Ja, this.updateRanges = [], this.version = 0, this.uuid = fo();
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {});
		let t = Rc(this.array);
		e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = this.array.slice(0).buffer);
		let n = new this.array.constructor(e.arrayBuffers[t]), r = new this.constructor(n, this.stride);
		return r.setUsage(this.usage), r;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	toJSON(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {});
		let t = Rc(this.array);
		e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = Array.from(new Uint32Array(this.array.slice(0).buffer)));
		let n = {
			uuid: this.uuid,
			buffer: t,
			type: this.array.constructor.name,
			stride: this.stride
		};
		return n.usage = this.usage, n;
	}
};
function Rc(e) {
	return e.buffer._uuid === void 0 && (e.buffer._uuid = fo()), e.byteOffset === 0 && e.byteLength === e.buffer.byteLength ? e.buffer._uuid : e.buffer._uuid + ":" + e.byteOffset + ":" + e.byteLength;
}
var zc = /*@__PURE__*/ new q(), Bc = class e {
	constructor(e, t, n, r = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r, this._normalizationScale = e === void 0 ? void 0 : Mo(e.array);
	}
	get count() {
		return this.data.count;
	}
	get array() {
		return this.data.array;
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) zc.fromBufferAttribute(this, t), zc.applyMatrix4(e), this.setXYZ(t, zc.x, zc.y, zc.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) zc.fromBufferAttribute(this, t), zc.applyNormalMatrix(e), this.setXYZ(t, zc.x, zc.y, zc.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) zc.fromBufferAttribute(this, t), zc.transformDirection(e), this.setXYZ(t, zc.x, zc.y, zc.z);
		return this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.data.stride + this.offset + t];
		return this.normalized && (n = this._denormalize(n)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = this._normalize(n)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
	}
	setX(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset] = t, this;
	}
	setY(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
	}
	setZ(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
	}
	setW(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
	}
	getX(e) {
		let t = this.data.array[e * this.data.stride + this.offset];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	getY(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 1];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	getZ(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 2];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	getW(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 3];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), n = this._normalize(n)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r), i = this._normalize(i)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
	}
	clone(t) {
		if (t === void 0) {
			to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return new xc(new this.array.constructor(e), this.itemSize, this.normalized);
		}
		return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
	}
	toJSON(e) {
		if (e === void 0) {
			to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: e,
				normalized: this.normalized
			};
		}
		return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		};
	}
	_denormalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? No(e, this.data.array) : Math.max(e / t, -1);
	}
	_normalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? Po(e, this.data.array) : Math.round(e * t);
	}
}, Vc = /*@__PURE__*/ new q(), Hc = /*@__PURE__*/ new q(), Uc = /*@__PURE__*/ new J(), Wc = class {
	constructor(e = new q(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = Vc.subVectors(n, t).cross(Hc.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(Vc), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || Uc.getNormalMatrix(e), r = this.coplanarPoint(Vc).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			normal: this.normal.toArray(),
			constant: this.constant
		};
	}
	fromJSON(e) {
		return this.normal.fromArray(e.normal), this.constant = e.constant, this;
	}
}, Gc = 0, Kc = class extends oo {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Gc++ }), this.uuid = fo(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new X(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = qa, this.stencilZFail = qa, this.stencilZPass = qa, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				G(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? G(`Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (n.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (n.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (n.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (n.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new X().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((e) => new Wc().fromJSON(e))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (this.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new Io().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new Io().fromArray(e.clearcoatNormalScale)), e.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, qc = /*@__PURE__*/ new q(), Jc = /*@__PURE__*/ new q(), Yc = /*@__PURE__*/ new q(), Xc = /*@__PURE__*/ new q(), Zc = class {
	constructor(e = new q(), t = new q(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, qc)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = qc.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (qc.copy(this.origin).addScaledVector(this.direction, t), qc.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		Jc.copy(e).add(t).multiplyScalar(.5), Yc.copy(t).sub(e).normalize(), Xc.copy(this.origin).sub(Jc);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(Yc), o = Xc.dot(this.direction), s = -Xc.dot(Yc), c = Xc.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Jc).addScaledVector(Yc, d), f;
	}
	intersectSphere(e, t) {
		if (e.radius < 0) return null;
		qc.subVectors(e.center, this.origin);
		let n = qc.dot(this.direction), r = qc.dot(qc) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, qc) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		let a = this.origin, o = this.direction, s = o.x, c = o.y, l = o.z, u = e.x - a.x, d = e.y - a.y, f = e.z - a.z, p = t.x - a.x, m = t.y - a.y, h = t.z - a.z, g = n.x - a.x, _ = n.y - a.y, v = n.z - a.z, y = Math.abs(s), b = Math.abs(c), x = Math.abs(l), S, C, w, T, E, D, O, k, A, j, M, N;
		if (y >= b && y >= x ? (w = s, D = u, A = p, N = g, s >= 0 ? (S = c, C = l, T = d, E = f, O = m, k = h, j = _, M = v) : (S = l, C = c, T = f, E = d, O = h, k = m, j = v, M = _)) : b >= x ? (w = c, D = d, A = m, N = _, c >= 0 ? (S = l, C = s, T = f, E = u, O = h, k = p, j = v, M = g) : (S = s, C = l, T = u, E = f, O = p, k = h, j = g, M = v)) : (w = l, D = f, A = h, N = v, l >= 0 ? (S = s, C = c, T = u, E = d, O = p, k = m, j = g, M = _) : (S = c, C = s, T = d, E = u, O = m, k = p, j = _, M = g)), w === 0) return null;
		let P = S / w, F = C / w, I = 1 / w, L = T - P * D, R = E - F * D, ee = O - P * A, te = k - F * A, ne = j - P * N, re = M - F * N, ie = ne * te - re * ee, ae = L * re - R * ne, oe = ee * R - te * L;
		if (r) {
			if (ie < 0 || ae < 0 || oe < 0) return null;
		} else if ((ie < 0 || ae < 0 || oe < 0) && (ie > 0 || ae > 0 || oe > 0)) return null;
		let se = ie + ae + oe;
		if (se === 0) return null;
		let ce = I * (ie * D + ae * A + oe * N);
		return (se > 0 ? ce < 0 : ce > 0) ? null : this.at(ce / se, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Qc = class extends Kc {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new X(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hs(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, $c = /*@__PURE__*/ new Y(), el = /*@__PURE__*/ new Zc(), tl = /*@__PURE__*/ new Oc(), nl = /*@__PURE__*/ new q(), rl = /*@__PURE__*/ new q(), il = /*@__PURE__*/ new q(), al = /*@__PURE__*/ new q(), ol = /*@__PURE__*/ new q(), sl = /*@__PURE__*/ new q(), cl = /*@__PURE__*/ new q(), ll = /*@__PURE__*/ new q(), ul = class extends Ms {
	constructor(e = new Ic(), t = new Qc()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			sl.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (ol.fromBufferAttribute(s, e), a ? sl.addScaledVector(ol, r) : sl.addScaledVector(ol.sub(t), r));
			}
			t.add(sl);
		}
		return t;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), tl.copy(n.boundingSphere), tl.applyMatrix4(i), el.copy(e.ray).recast(e.near), tl.containsPoint(el.origin) === !1 && (el.intersectSphere(tl, nl) === null || el.origin.distanceToSquared(nl) > (e.far - e.near) ** 2) || ($c.copy(i).invert(), el.copy(e.ray).applyMatrix4($c), (n.boundingBox === null || el.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, el)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
					r = fl(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
				for (let d = i, f = s; d < f; d += 3) {
					let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
					r = fl(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
				}
			}
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = i, s = i + 1, d = i + 2;
					r = fl(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
				for (let s = i, d = o; s < d; s += 3) {
					let i = s, o = s + 1, d = s + 2;
					r = fl(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
				}
			}
		}
	}
};
function dl(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	ll.copy(s), ll.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(ll);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: ll.clone(),
		object: e
	};
}
function fl(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, rl), e.getVertexPosition(c, il), e.getVertexPosition(l, al);
	let u = dl(e, t, n, r, rl, il, al, cl);
	if (u) {
		let e = new q();
		nc.getBarycoord(cl, rl, il, al, e), i && (u.uv = nc.getInterpolatedAttribute(i, s, c, l, e, new Io())), a && (u.uv1 = nc.getInterpolatedAttribute(a, s, c, l, e, new Io())), o && (u.normal = nc.getInterpolatedAttribute(o, s, c, l, e, new q()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new q(),
			materialIndex: 0
		};
		nc.getNormal(rl, il, al, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var pl = /*@__PURE__*/ new ts(), ml = /*@__PURE__*/ new ts(), hl = /*@__PURE__*/ new ts(), gl = /*@__PURE__*/ new ts(), _l = /*@__PURE__*/ new Y(), vl = /*@__PURE__*/ new q(), yl = /*@__PURE__*/ new Oc(), bl = /*@__PURE__*/ new Y(), xl = /*@__PURE__*/ new Zc(), Sl = class extends ul {
	constructor(e, t) {
		super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = yi, this.bindMatrix = new Y(), this.bindMatrixInverse = new Y(), this.boundingBox = null, this.boundingSphere = null;
	}
	computeBoundingBox() {
		let e = this.geometry;
		this.boundingBox === null && (this.boundingBox = new rc()), this.boundingBox.makeEmpty();
		let t = e.getAttribute("position");
		for (let e = 0; e < t.count; e++) this.getVertexPosition(e, vl), this.boundingBox.expandByPoint(vl);
	}
	computeBoundingSphere() {
		let e = this.geometry;
		this.boundingSphere === null && (this.boundingSphere = new Oc()), this.boundingSphere.makeEmpty();
		let t = e.getAttribute("position");
		for (let e = 0; e < t.count; e++) this.getVertexPosition(e, vl), this.boundingSphere.expandByPoint(vl);
	}
	copy(e, t) {
		return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone(), this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone(), this;
	}
	raycast(e, t) {
		let n = this.material, r = this.matrixWorld;
		n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), yl.copy(this.boundingSphere), yl.applyMatrix4(r), e.ray.intersectsSphere(yl) !== !1 && (bl.copy(r).invert(), xl.copy(e.ray).applyMatrix4(bl), (this.boundingBox === null || xl.intersectsBox(this.boundingBox) !== !1) && this._computeIntersections(e, t, xl)));
	}
	getVertexPosition(e, t) {
		return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
	}
	bind(e, t) {
		this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
	}
	pose() {
		this.skeleton.pose();
	}
	normalizeSkinWeights() {
		let e = new ts(), t = this.geometry.attributes.skinWeight;
		for (let n = 0, r = t.count; n < r; n++) {
			e.fromBufferAttribute(t, n);
			let r = 1 / e.manhattanLength();
			r === Infinity ? e.set(1, 0, 0, 0) : e.multiplyScalar(r), t.setXYZW(n, e.x, e.y, e.z, e.w);
		}
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : G("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
	}
	applyBoneTransform(e, t) {
		let n = this.skeleton, r = this.geometry;
		ml.fromBufferAttribute(r.attributes.skinIndex, e), hl.fromBufferAttribute(r.attributes.skinWeight, e), t.isVector4 ? (pl.copy(t), t.set(0, 0, 0, 0)) : (pl.set(t.x, t.y, t.z, 1), t.set(0, 0, 0)), pl.applyMatrix4(this.bindMatrix);
		for (let e = 0; e < 4; e++) {
			let r = hl.getComponent(e);
			if (r !== 0) {
				let i = ml.getComponent(e);
				_l.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]), t.addScaledVector(gl.copy(pl).applyMatrix4(_l), r);
			}
		}
		return t.isVector4 && (t.w = pl.w), t.applyMatrix4(this.bindMatrixInverse);
	}
}, Cl = class extends Ms {
	constructor() {
		super(), this.isBone = !0, this.type = "Bone";
	}
}, wl = class extends es {
	constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = Ci, l = Ci, u, d) {
		super(null, a, o, s, c, l, r, i, u, d), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Tl = /*@__PURE__*/ new Y(), El = /*@__PURE__*/ new Y(), Dl = class e {
	constructor(e = [], t = []) {
		this.uuid = fo(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.previousBoneMatrices = null, this.boneTexture = null, this.previousBoneTexture = null, this.init();
	}
	init() {
		let e = this.bones, t = this.boneInverses;
		if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
		else if (e.length !== t.length) {
			G("Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
			for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new Y());
		}
	}
	calculateInverses() {
		this.boneInverses.length = 0;
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = new Y();
			this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(t);
		}
	}
	pose() {
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = this.bones[e];
			t && t.matrixWorld.copy(this.boneInverses[e]).invert();
		}
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = this.bones[e];
			t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale));
		}
	}
	update() {
		let e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture;
		for (let r = 0, i = e.length; r < i; r++) {
			let i = e[r] ? e[r].matrixWorld : El;
			Tl.multiplyMatrices(i, t[r]), Tl.toArray(n, r * 16);
		}
		r !== null && (r.needsUpdate = !0);
	}
	clone() {
		return new e(this.bones, this.boneInverses);
	}
	computeBoneTexture() {
		let e = Math.sqrt(this.bones.length * 4);
		e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
		let t = new Float32Array(e * e * 4);
		t.set(this.boneMatrices);
		let n = new wl(t, e, e, Wi, Fi);
		return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
	}
	getBoneByName(e) {
		for (let t = 0, n = this.bones.length; t < n; t++) {
			let n = this.bones[t];
			if (n.name === e) return n;
		}
	}
	dispose() {
		this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null), this.previousBoneTexture !== null && (this.previousBoneTexture.dispose(), this.previousBoneTexture = null);
	}
	fromJSON(e, t) {
		this.uuid = e.uuid;
		for (let n = 0, r = e.bones.length; n < r; n++) {
			let r = e.bones[n], i = t[r];
			i === void 0 && (G("Skeleton: No bone found with UUID:", r), i = new Cl()), this.bones.push(i), this.boneInverses.push(new Y().fromArray(e.boneInverses[n]));
		}
		return this.init(), this;
	}
	toJSON() {
		let e = {
			metadata: {
				version: 4.7,
				type: "Skeleton",
				generator: "Skeleton.toJSON"
			},
			bones: [],
			boneInverses: []
		};
		e.uuid = this.uuid;
		let t = this.bones, n = this.boneInverses;
		for (let r = 0, i = t.length; r < i; r++) {
			let i = t[r];
			e.bones.push(i.uuid);
			let a = n[r];
			e.boneInverses.push(a.toArray());
		}
		return e;
	}
}, Ol = class extends xc {
	constructor(e, t, n, r = 1) {
		super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
	}
}, kl = /*@__PURE__*/ new Y(), Al = /*@__PURE__*/ new Y(), jl = [], Ml = /*@__PURE__*/ new rc(), Nl = /*@__PURE__*/ new Y(), Pl = /*@__PURE__*/ new ul(), Fl = /*@__PURE__*/ new Oc(), Il = class extends ul {
	constructor(e, t, n) {
		super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Ol(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
		for (let e = 0; e < n; e++) this.setMatrixAt(e, Nl);
	}
	computeBoundingBox() {
		let e = this.geometry, t = this.count;
		this.boundingBox === null && (this.boundingBox = new rc()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, kl), Ml.copy(e.boundingBox).applyMatrix4(kl), this.boundingBox.union(Ml);
	}
	computeBoundingSphere() {
		let e = this.geometry, t = this.count;
		this.boundingSphere === null && (this.boundingSphere = new Oc()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, kl), Fl.copy(e.boundingSphere).applyMatrix4(kl), this.boundingSphere.union(Fl);
	}
	copy(e, t) {
		return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), this.morphTexture = e.morphTexture === null ? null : e.morphTexture.clone(), this.instanceColor = e.instanceColor === null ? null : e.instanceColor.clone(), this.count = e.count, this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone(), this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone(), this;
	}
	getColorAt(e, t) {
		return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
	}
	getMatrixAt(e, t) {
		return t.fromArray(this.instanceMatrix.array, e * 16);
	}
	getMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, i = e * (n.length + 1) + 1;
		for (let e = 0; e < n.length; e++) n[e] = r[i + e];
	}
	raycast(e, t) {
		let n = this.matrixWorld, r = this.count;
		if (Pl.geometry = this.geometry, Pl.material = this.material, Pl.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Fl.copy(this.boundingSphere), Fl.applyMatrix4(n), e.ray.intersectsSphere(Fl) !== !1)) for (let i = 0; i < r; i++) {
			this.getMatrixAt(i, kl), Al.multiplyMatrices(n, kl), Pl.matrixWorld = Al, Pl.raycast(e, jl);
			for (let e = 0, n = jl.length; e < n; e++) {
				let n = jl[e];
				n.instanceId = i, n.object = this, t.push(n);
			}
			jl.length = 0;
		}
	}
	setColorAt(e, t) {
		return this.instanceColor === null && (this.instanceColor = new Ol(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
	}
	setMatrixAt(e, t) {
		return t.toArray(this.instanceMatrix.array, e * 16), this;
	}
	setMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = n.length + 1;
		this.morphTexture === null && (this.morphTexture = new wl(new Float32Array(r * this.count), r, this.count, qi, Fi));
		let i = this.morphTexture.source.data.data, a = 0;
		for (let e = 0; e < n.length; e++) a += n[e];
		let o = this.geometry.morphTargetsRelative ? 1 : 1 - a, s = r * e;
		return i[s] = o, i.set(n, s + 1), this;
	}
	updateMorphTargets() {}
	dispose() {
		super.dispose(), this.instanceMatrix.dispose(), this.instanceColor !== null && this.instanceColor.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
	}
}, Ll = /*@__PURE__*/ new Oc(), Rl = /*@__PURE__*/ new Io(.5, .5), zl = /*@__PURE__*/ new q(), Bl = class {
	constructor(e = new Wc(), t = new Wc(), n = new Wc(), r = new Wc(), i = new Wc(), a = new Wc()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = Ya, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Ll.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), Ll.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(Ll);
	}
	intersectsSprite(e) {
		return Ll.center.set(0, 0, 0), Ll.radius = .7071067811865476 + Rl.distanceTo(e.center), Ll.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ll);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (zl.x = r.normal.x > 0 ? e.max.x : e.min.x, zl.y = r.normal.y > 0 ? e.max.y : e.min.y, zl.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(zl) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Vl = /*@__PURE__*/ new Y(), Hl = class e {
	constructor() {
		this.coordinateSystem = Ya, this._frustums = [], this._count = 0;
	}
	setFromArrayCamera(e) {
		let t = e.cameras, n = this._frustums;
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			Vl.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), n[e] === void 0 && (n[e] = new Bl()), n[e].setFromProjectionMatrix(Vl, r.coordinateSystem, r.reversedDepth);
		}
		return this._count = t.length, this;
	}
	getFrustum(e) {
		return this._frustums[e];
	}
	intersectsObject(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsObject(e)) return !0;
		return !1;
	}
	intersectsSprite(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsSprite(e)) return !0;
		return !1;
	}
	intersectsSphere(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsSphere(e)) return !0;
		return !1;
	}
	intersectsBox(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsBox(e)) return !0;
		return !1;
	}
	containsPoint(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].containsPoint(e)) return !0;
		return !1;
	}
	copy(e) {
		this.coordinateSystem = e.coordinateSystem;
		let t = this._frustums, n = e._frustums;
		for (let r = 0; r < e._count; r++) t[r] === void 0 && (t[r] = new Bl()), t[r].copy(n[r]);
		return this._count = e._count, this;
	}
	clone() {
		return new e().copy(this);
	}
}, Ul = class extends Kc {
	constructor(e) {
		super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new X(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
	}
}, Wl = /*@__PURE__*/ new q(), Gl = /*@__PURE__*/ new q(), Kl = /*@__PURE__*/ new Y(), ql = /*@__PURE__*/ new Zc(), Jl = /*@__PURE__*/ new Oc(), Yl = /*@__PURE__*/ new q(), Xl = /*@__PURE__*/ new q(), Zl = class extends Ms {
	constructor(e = new Ic(), t = new Ul()) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [0];
			for (let e = 1, r = t.count; e < r; e++) Wl.fromBufferAttribute(t, e - 1), Gl.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Wl.distanceTo(Gl);
			e.setAttribute("lineDistance", new wc(n, 1));
		} else G("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), Jl.copy(n.boundingSphere), Jl.applyMatrix4(r), Jl.radius += i, e.ray.intersectsSphere(Jl) === !1) return;
		Kl.copy(r).invert(), ql.copy(e.ray).applyMatrix4(Kl);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = this.isLineSegments ? 2 : 1, l = n.index, u = n.attributes.position;
		if (l !== null) {
			let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = l.getX(i), r = l.getX(i + 1), a = Ql(this, e, ql, s, n, r, i);
				a && t.push(a);
			}
			if (this.isLineLoop) {
				let i = l.getX(r - 1), a = l.getX(n), o = Ql(this, e, ql, s, i, a, r - 1);
				o && t.push(o);
			}
		} else {
			let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = Ql(this, e, ql, s, i, i + 1, i);
				n && t.push(n);
			}
			if (this.isLineLoop) {
				let i = Ql(this, e, ql, s, r - 1, n, r - 1);
				i && t.push(i);
			}
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function Ql(e, t, n, r, i, a, o) {
	let s = e.geometry.attributes.position;
	if (Wl.fromBufferAttribute(s, i), Gl.fromBufferAttribute(s, a), n.distanceSqToSegment(Wl, Gl, Yl, Xl) > r) return;
	Yl.applyMatrix4(e.matrixWorld);
	let c = t.ray.origin.distanceTo(Yl);
	if (!(c < t.near || c > t.far)) return {
		distance: c,
		point: Xl.clone().applyMatrix4(e.matrixWorld),
		index: o,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
var $l = /*@__PURE__*/ new q(), eu = /*@__PURE__*/ new q(), tu = class extends Zl {
	constructor(e, t) {
		super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [];
			for (let e = 0, r = t.count; e < r; e += 2) $l.fromBufferAttribute(t, e), eu.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + $l.distanceTo(eu);
			e.setAttribute("lineDistance", new wc(n, 1));
		} else G("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
}, nu = class extends Zl {
	constructor(e, t) {
		super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
	}
}, ru = class extends Kc {
	constructor(e) {
		super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new X(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, iu = /*@__PURE__*/ new Y(), au = /*@__PURE__*/ new Zc(), ou = /*@__PURE__*/ new Oc(), su = /*@__PURE__*/ new q(), cu = class extends Ms {
	constructor(e = new Ic(), t = new ru()) {
		super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), ou.copy(n.boundingSphere), ou.applyMatrix4(r), ou.radius += i, e.ray.intersectsSphere(ou) === !1) return;
		iu.copy(r).invert(), au.copy(e.ray).applyMatrix4(iu);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = n.index, l = n.attributes.position;
		if (c !== null) {
			let n = Math.max(0, a.start), i = Math.min(c.count, a.start + a.count);
			for (let a = n, o = i; a < o; a++) {
				let n = c.getX(a);
				su.fromBufferAttribute(l, n), lu(su, n, s, r, e, t, this);
			}
		} else {
			let n = Math.max(0, a.start), i = Math.min(l.count, a.start + a.count);
			for (let a = n, o = i; a < o; a++) su.fromBufferAttribute(l, a), lu(su, a, s, r, e, t, this);
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function lu(e, t, n, r, i, a, o) {
	let s = au.distanceSqToPoint(e);
	if (s < n) {
		let n = new q();
		au.closestPointToPoint(e, n), n.applyMatrix4(r);
		let c = i.ray.origin.distanceTo(n);
		if (c < i.near || c > i.far) return;
		a.push({
			distance: c,
			distanceToRay: Math.sqrt(s),
			point: n,
			index: t,
			face: null,
			faceIndex: null,
			barycoord: null,
			object: o
		});
	}
}
var uu = class extends es {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, du = class extends es {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
	}
}, fu = class extends es {
	constructor(e, t, n = Pi, r, i, a, o = Ci, s = Ci, c, l = Gi, u = 1) {
		if (l !== 1026 && l !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: u
		}, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Xo(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.compareFunction = this.compareFunction, t;
	}
}, pu = class extends fu {
	constructor(e, t = Pi, n = 301, r, i, a = Ci, o = Ci, s, c = Gi) {
		let l = {
			width: e,
			height: e,
			depth: 1
		}, u = [
			l,
			l,
			l,
			l,
			l,
			l
		];
		super(e, e, t, n, r, i, a, o, s, c), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, mu = class extends es {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, hu = class e extends Ic {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new wc(c, 3)), this.setAttribute("normal", new wc(l, 3)), this.setAttribute("uv", new wc(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new q();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, gu = class e extends Ic {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new wc(p, 3)), this.setAttribute("normal", new wc(m, 3)), this.setAttribute("uv", new wc(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
};
function _u(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (yu(i)) i.isRenderTargetTexture ? (G("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) {
				if (yu(i[0])) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
					t[n][r] = e;
				} else t[n][r] = i.slice();
			} else t[n][r] = i;
		}
	}
	return t;
}
function vu(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = _u(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function yu(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function bu(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function xu(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Wo.workingColorSpace;
}
var Su = {
	clone: _u,
	merge: vu
}, Cu = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", wu = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Tu = class extends Kc {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Cu, this.fragmentShader = wu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = _u(e.uniforms), this.uniformsGroups = bu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new X().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new Io().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new q().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new ts().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new J().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new Y().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
}, Eu = class extends Tu {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, Du = class extends Kc {
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new X(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Io(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hs(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Ou = class extends Du {
	constructor(e) {
		super(), this.isMeshPhysicalMaterial = !0, this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Io(1, 1), this.clearcoatNormalMap = null, this.diffuseRoughnessMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
			get: function() {
				return po(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
			},
			set: function(e) {
				this.ior = (1 + .4 * e) / (1 - .4 * e);
			}
		}), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessMinimum = 100, this.iridescenceThicknessMaximum = 400, this.iridescenceThicknessMap = null, this.sheenColor = new X(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = Infinity, this.attenuationColor = new X(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new X(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._diffuseRoughness = 0, this._dispersion = 0, this._iridescence = 0, this._retroreflectivity = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
	}
	get anisotropy() {
		return this._anisotropy;
	}
	set anisotropy(e) {
		this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
	}
	get clearcoat() {
		return this._clearcoat;
	}
	set clearcoat(e) {
		this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
	}
	get diffuseRoughness() {
		return this._diffuseRoughness;
	}
	set diffuseRoughness(e) {
		this._diffuseRoughness > 0 != e > 0 && this.version++, this._diffuseRoughness = e;
	}
	get iridescence() {
		return this._iridescence;
	}
	set iridescence(e) {
		this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
	}
	get dispersion() {
		return this._dispersion;
	}
	set dispersion(e) {
		this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
	}
	get retroreflectivity() {
		return this._retroreflectivity;
	}
	set retroreflectivity(e) {
		this._retroreflectivity > 0 != e > 0 && this.version++, this._retroreflectivity = e;
	}
	get sheen() {
		return this._sheen;
	}
	set sheen(e) {
		this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
	}
	get transmission() {
		return this._transmission;
	}
	set transmission(e) {
		this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
	}
	get iridescenceThicknessRange() {
		return ro("MeshPhysicalMaterial: The \"iridescenceThicknessRange\" property has been replaced by \"iridescenceThicknessMinimum\" and \"iridescenceThicknessMaximum\"."), [this.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum];
	}
	set iridescenceThicknessRange(e) {
		ro("MeshPhysicalMaterial: The \"iridescenceThicknessRange\" property has been replaced by \"iridescenceThicknessMinimum\" and \"iridescenceThicknessMaximum\"."), this.iridescenceThicknessMinimum = e[0], this.iridescenceThicknessMaximum = e[1];
	}
	copy(e) {
		return super.copy(e), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.diffuseRoughness = e.diffuseRoughness, this.diffuseRoughnessMap = e.diffuseRoughnessMap, this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum, this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.retroreflectivity = e.retroreflectivity, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
	}
}, ku = class extends Kc {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Ha, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Au = class extends Kc {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function ju(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function Mu(e) {
	return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
function Nu(e) {
	function t(t, n) {
		return e[t] - e[n];
	}
	let n = e.length, r = Array(n);
	for (let e = 0; e !== n; ++e) r[e] = e;
	return r.sort(t), r;
}
function Pu(e, t, n) {
	let r = e.length, i = new e.constructor(r);
	for (let a = 0, o = 0; o !== r; ++a) {
		let r = n[a] * t;
		for (let n = 0; n !== t; ++n) i[o++] = e[r + n];
	}
	return i;
}
function Fu(e, t, n, r) {
	let i = 1, a = e[0];
	for (; a !== void 0 && a[r] === void 0;) a = e[i++];
	if (a === void 0) return;
	let o = a[r];
	if (o !== void 0) {
		if (Array.isArray(o)) do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(...o)), a = e[i++];
		while (a !== void 0);
		else if (o.toArray !== void 0) do
			o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++];
		while (a !== void 0);
		else do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++];
		while (a !== void 0);
	}
}
var Iu = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, Lu = class extends Iu {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: Ra,
			endingEnd: Ra
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case za:
				i = e, o = 2 * t - n;
				break;
			case Ba:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case za:
				a = e, s = 2 * n - t;
				break;
			case Ba:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Ru = class extends Iu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, zu = class extends Iu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Bu = class extends Iu {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
		if (!l || !u) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let d = o * 2, f = e - 1;
		for (let p = 0; p !== o; ++p) {
			let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = Uu(n, t, g, y, r);
			i[p] = Vu(x, o, _, b, m);
		}
		return i;
	}
};
function Vu(e, t, n, r, i) {
	let a = 1 - e;
	return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Hu(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Uu(e, t, n, r, i) {
	let a = (e - t) / (i - t);
	for (let o = 0; o < 8; o++) {
		let o = Vu(a, t, n, r, i) - e;
		if (Math.abs(o) < 1e-10) break;
		let s = Hu(a, t, n, r, i);
		if (Math.abs(s) < 1e-10) break;
		a = Math.max(0, Math.min(1, a - o / s));
	}
	return a;
}
var Wu = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = ju(t, this.TimeBufferType), this.values = ju(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: ju(e.times, Array),
				values: ju(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t), Mu(e.settings) && (n.settings = {
				inTangents: ju(e.settings.inTangents, Array),
				outTangents: ju(e.settings.outTangents, Array)
			});
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new zu(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Ru(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Lu(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new Bu(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case Pa:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Fa:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Ia:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case La: t = this.InterpolantFactoryMethodBezier;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw Error(t);
			}
			return G("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return Pa;
			case this.InterpolantFactoryMethodLinear: return Fa;
			case this.InterpolantFactoryMethodSmooth: return Ia;
			case this.InterpolantFactoryMethodBezier: return La;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
			Mu(this.settings) && (Gu(this.settings.inTangents, e), Gu(this.settings.outTangents, e));
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
			Mu(this.settings) && (Ku(this.settings.inTangents, e), Ku(this.settings.outTangents, e));
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (K("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (K("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				K("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				K("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && Za(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				K("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Ia, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, Mu(this.settings) && (r.settings = {
			inTangents: this.settings.inTangents.slice(),
			outTangents: this.settings.outTangents.slice()
		}), r;
	}
};
function Gu(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] += t;
}
function Ku(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
Wu.prototype.ValueTypeName = "", Wu.prototype.TimeBufferType = Float32Array, Wu.prototype.ValueBufferType = Float32Array, Wu.prototype.DefaultInterpolation = Fa;
var qu = class extends Wu {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
qu.prototype.ValueTypeName = "bool", qu.prototype.ValueBufferType = Array, qu.prototype.DefaultInterpolation = Pa, qu.prototype.InterpolantFactoryMethodLinear = void 0, qu.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ju = class extends Wu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Ju.prototype.ValueTypeName = "color";
var Yu = class extends Wu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Yu.prototype.ValueTypeName = "number";
var Xu = class extends Iu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Lo.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Zu = class extends Wu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Xu(this.times, this.values, this.getValueSize(), e);
	}
};
Zu.prototype.ValueTypeName = "quaternion", Zu.prototype.InterpolantFactoryMethodSmooth = void 0;
var Qu = class extends Wu {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Qu.prototype.ValueTypeName = "string", Qu.prototype.ValueBufferType = Array, Qu.prototype.DefaultInterpolation = Pa, Qu.prototype.InterpolantFactoryMethodLinear = void 0, Qu.prototype.InterpolantFactoryMethodSmooth = void 0;
var $u = class extends Wu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
$u.prototype.ValueTypeName = "vector";
var ed = class {
	constructor(e = "", t = -1, n = [], r = Va) {
		this.name = e, this.tracks = n, this.duration = t, this.blendMode = r, this.uuid = fo(), this.userData = {}, this.duration < 0 && this.resetDuration();
	}
	static parse(e) {
		let t = [], n = e.tracks, r = 1 / (e.fps || 1);
		for (let e = 0, i = n.length; e !== i; ++e) t.push(nd(n[e]).scale(r));
		let i = new this(e.name, e.duration, t, e.blendMode);
		return i.uuid = e.uuid, i.userData = JSON.parse(e.userData || "{}"), i;
	}
	static toJSON(e) {
		let t = [], n = e.tracks, r = {
			name: e.name,
			duration: e.duration,
			tracks: t,
			uuid: e.uuid,
			blendMode: e.blendMode,
			userData: JSON.stringify(e.userData)
		};
		for (let e = 0, r = n.length; e !== r; ++e) t.push(Wu.toJSON(n[e]));
		return r;
	}
	static CreateFromMorphTargetSequence(e, t, n, r) {
		let i = t.length, a = [];
		for (let e = 0; e < i; e++) {
			let o = [], s = [];
			o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0);
			let c = Nu(o);
			o = Pu(o, 1, c), s = Pu(s, 1, c), !r && o[0] === 0 && (o.push(i), s.push(s[0])), a.push(new Yu(".morphTargetInfluences[" + t[e].name + "]", o, s).scale(1 / n));
		}
		return new this(e, -1, a);
	}
	static findByName(e, t) {
		let n = e;
		if (!Array.isArray(e)) {
			let t = e;
			n = t.geometry && t.geometry.animations || t.animations;
		}
		for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
		return null;
	}
	static CreateClipsFromMorphTargetSequences(e, t, n) {
		let r = {}, i = /^([\w-]*?)([\d]+)$/;
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t], a = n.name.match(i);
			if (a && a.length > 1) {
				let e = a[1], t = r[e];
				t || (r[e] = t = []), t.push(n);
			}
		}
		let a = [];
		for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
		return a;
	}
	resetDuration() {
		let e = this.tracks, t = 0;
		for (let n = 0, r = e.length; n !== r; ++n) {
			let e = this.tracks[n];
			t = Math.max(t, e.times[e.times.length - 1]);
		}
		return this.duration = t, this;
	}
	trim() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
		return this;
	}
	validate() {
		let e = !0;
		for (let t = 0; t < this.tracks.length; t++) e &&= this.tracks[t].validate();
		return e;
	}
	optimize() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
		return this;
	}
	clone() {
		let e = [];
		for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
		let t = new this.constructor(this.name, this.duration, e, this.blendMode);
		return t.userData = JSON.parse(JSON.stringify(this.userData)), t;
	}
	toJSON() {
		return this.constructor.toJSON(this);
	}
};
function td(e) {
	switch (e.toLowerCase()) {
		case "scalar":
		case "double":
		case "float":
		case "number":
		case "integer": return Yu;
		case "vector":
		case "vector2":
		case "vector3":
		case "vector4": return $u;
		case "color": return Ju;
		case "quaternion": return Zu;
		case "bool":
		case "boolean": return qu;
		case "string": return Qu;
	}
	throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function nd(e) {
	if (e.type === void 0) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
	let t = td(e.type);
	if (e.times === void 0) {
		let t = [], n = [];
		Fu(e.keys, t, n, "value"), e.times = t, e.values = n;
	}
	let n;
	return n = t.parse === void 0 ? new t(e.name, e.times, e.values, e.interpolation) : t.parse(e), Mu(e.settings) && (n.settings = {
		inTangents: ju(e.settings.inTangents, Float32Array),
		outTangents: ju(e.settings.outTangents, Float32Array)
	}), n;
}
var rd = {
	enabled: !1,
	files: {},
	add: function(e, t) {
		this.enabled !== !1 && (id(e) || (this.files[e] = t));
	},
	get: function(e) {
		if (this.enabled !== !1 && !id(e)) return this.files[e];
	},
	remove: function(e) {
		delete this.files[e];
	},
	clear: function() {
		this.files = {};
	}
};
function id(e) {
	try {
		let t = e.slice(e.indexOf(":") + 1);
		return new URL(t).protocol === "blob:";
	} catch {
		return !1;
	}
}
var ad = /*@__PURE__*/ new class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, o = 0, s, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			o++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, o), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return e = e.normalize("NFC"), s ? s(e) : e;
		}, this.setURLModifier = function(e) {
			return s = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}(), od = class {
	constructor(e) {
		this.manager = e === void 0 ? ad : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, this.priority = "auto", this.cache = "default", typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
	setPriority(e) {
		return this.priority = e, this;
	}
	setCache(e) {
		return this.cache = e, this;
	}
	abort() {
		return this;
	}
};
od.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var sd = {}, cd = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
}, ld = class extends od {
	constructor(e) {
		super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = rd.get(`file:${e}`);
		if (i !== void 0) {
			this.manager.itemStart(e), setTimeout(() => {
				t && t(i), this.manager.itemEnd(e);
			}, 0);
			return;
		}
		if (sd[e] !== void 0) {
			sd[e].push({
				onLoad: t,
				onProgress: n,
				onError: r
			});
			return;
		}
		sd[e] = [], sd[e].push({
			onLoad: t,
			onProgress: n,
			onError: r
		});
		let a = new Request(e, {
			headers: new Headers(this.requestHeader),
			credentials: this.withCredentials ? "include" : "same-origin",
			priority: this.priority,
			cache: this.cache,
			signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
		}), o = this.mimeType, s = this.responseType;
		fetch(a).then((t) => {
			if (t.status === 200 || t.status === 0) {
				if (t.status === 0 && G("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || t.body === void 0 || t.body.getReader === void 0) return t;
				let n = sd[e], r = t.body.getReader(), i = t.headers.get("X-File-Size") || t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, o = a !== 0, s = 0, c = new ReadableStream({ start(e) {
					t();
					function t() {
						r.read().then(({ done: r, value: i }) => {
							if (r) e.close();
							else {
								s += i.byteLength;
								let r = new ProgressEvent("progress", {
									lengthComputable: o,
									loaded: s,
									total: a
								});
								for (let e = 0, t = n.length; e < t; e++) {
									let t = n[e];
									t.onProgress && t.onProgress(r);
								}
								e.enqueue(i), t();
							}
						}, (t) => {
							e.error(t);
						});
					}
				} });
				return new Response(c);
			}
			throw new cd(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
		}).then((e) => {
			switch (s) {
				case "arraybuffer": return e.arrayBuffer();
				case "blob": return e.blob();
				case "document": return e.text().then((e) => new DOMParser().parseFromString(e, o));
				case "json": return e.json();
				default:
					if (o === "") return e.text();
					{
						let t = /charset="?([^;"\s]*)"?/i.exec(o), n = t && t[1] ? t[1].toLowerCase() : void 0, r = new TextDecoder(n);
						return e.arrayBuffer().then((e) => r.decode(e));
					}
			}
		}).then((t) => {
			rd.add(`file:${e}`, t);
			let n = sd[e];
			delete sd[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onLoad && r.onLoad(t);
			}
		}).catch((t) => {
			let n = sd[e];
			if (n === void 0) throw this.manager.itemError(e), t;
			delete sd[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			this.manager.itemError(e);
		}).finally(() => {
			this.manager.itemEnd(e);
		}), this.manager.itemStart(e);
	}
	setResponseType(e) {
		return this.responseType = e, this;
	}
	setMimeType(e) {
		return this.mimeType = e, this;
	}
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
}, ud = /* @__PURE__ */ new WeakMap(), dd = class extends od {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = rd.get(`image:${e}`);
		if (a !== void 0) {
			if (a.complete === !0) i.manager.itemStart(e), setTimeout(function() {
				t && t(a), i.manager.itemEnd(e);
			}, 0);
			else {
				let e = ud.get(a);
				e === void 0 && (e = [], ud.set(a, e)), e.push({
					onLoad: t,
					onError: r
				});
			}
			return a;
		}
		let o = Qa("img");
		function s() {
			l(), t && t(this);
			let n = ud.get(this) || [];
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				t.onLoad && t.onLoad(this);
			}
			ud.delete(this), i.manager.itemEnd(e);
		}
		function c(t) {
			l(), r && r(t), rd.remove(`image:${e}`);
			let n = ud.get(this) || [];
			for (let e = 0; e < n.length; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			ud.delete(this), i.manager.itemError(e), i.manager.itemEnd(e);
		}
		function l() {
			o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1);
		}
		return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), rd.add(`image:${e}`, o), i.manager.itemStart(e), o.fetchPriority = this.priority, o.src = e, o;
	}
}, fd = class extends od {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = new es(), a = new dd(this.manager);
		return a.setPriority(this.priority), a.setCache(this.cache), a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
			i.image = e, i.needsUpdate = !0, t !== void 0 && t(i);
		}, n, r), i;
	}
}, pd = class extends Ms {
	static registerNode(e) {
		this.prototype._lightNode = e;
	}
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new X(e), this.intensity = t;
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, md = class extends pd {
	constructor(e, t, n) {
		super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Ms.DEFAULT_UP), this.updateMatrix(), this.groundColor = new X(t);
	}
	copy(e, t) {
		return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.groundColor = this.groundColor.getHex(), t;
	}
}, hd = /*@__PURE__*/ new Y(), gd = /*@__PURE__*/ new q(), _d = /*@__PURE__*/ new q(), vd = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Io(512, 512), this.mapType = ki, this.map = null, this.mapPass = null, this.matrix = new Y(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Bl(), this._frameExtents = new Io(1, 1), this._viewportCount = 1, this._viewports = [new ts(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getCamera() {
		return this.camera;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera;
		gd.setFromMatrixPosition(e.matrixWorld), t.position.copy(gd), _d.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(_d), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
	}
	_updateMatrix(e, t, n, r) {
		hd.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(hd, e.coordinateSystem, e.reversedDepth);
		let i = this._frameExtents, a = r ? r.z / i.x : 1, o = r ? r.w / i.y : 1, s = r ? r.x / i.x : 0, c = r ? r.y / i.y : 0;
		e.coordinateSystem === 2001 || e.reversedDepth ? t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, .5, .5, 0, 0, 0, 1), t.multiply(hd);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.mapType = e.mapType, this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.mapType = this.mapType, e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, yd = /*@__PURE__*/ new q(), bd = /*@__PURE__*/ new Lo(), xd = /*@__PURE__*/ new q(), Sd = class extends Ms {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Y(), this.projectionMatrix = new Y(), this.projectionMatrixInverse = new Y(), this.coordinateSystem = Ya, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(yd, bd, xd), xd.x === 1 && xd.y === 1 && xd.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(yd, bd, xd.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t, n = !1) {
		super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(yd, bd, xd), xd.x === 1 && xd.y === 1 && xd.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(yd, bd, xd.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Cd = /*@__PURE__*/ new q(), wd = /*@__PURE__*/ new Io(), Td = /*@__PURE__*/ new Io(), Ed = class extends Sd {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = uo * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(lo * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return uo * 2 * Math.atan(Math.tan(lo * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		Cd.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(Cd.x, Cd.y).multiplyScalar(-e / Cd.z), Cd.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(Cd.x, Cd.y).multiplyScalar(-e / Cd.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, wd, Td), t.subVectors(Td, wd);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(lo * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, Dd = class extends vd {
	constructor() {
		super(new Ed(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1;
	}
	updateMatrices(e) {
		let t = this.camera, n = uo * 2 * e.angle * this.focus, r = this.mapSize.width / this.mapSize.height * this.aspect, i = e.distance || t.far;
		(n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), super.updateMatrices(e);
	}
	copy(e) {
		return super.copy(e), this.focus = e.focus, this.aspect = e.aspect, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.focus = this.focus, e.aspect = this.aspect, e;
	}
}, Od = class extends pd {
	constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 2) {
		super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Ms.DEFAULT_UP), this.updateMatrix(), this.target = new Ms(), this.distance = n, this.angle = r, this.penumbra = i, this.decay = a, this.map = null, this.shadow = new Dd();
	}
	get power() {
		return this.intensity * Math.PI;
	}
	set power(e) {
		this.intensity = e / Math.PI;
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.map = e.map, this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.distance = this.distance, t.object.angle = this.angle, t.object.decay = this.decay, t.object.penumbra = this.penumbra, t.object.target = this.target.uuid, this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid), t.object.shadow = this.shadow.toJSON(), t;
	}
}, kd = class extends vd {
	constructor() {
		super(new Ed(90, 1, .5, 500)), this.isPointLightShadow = !0;
	}
}, Ad = class extends pd {
	constructor(e, t, n = 0, r = 2) {
		super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new kd();
	}
	get power() {
		return this.intensity * 4 * Math.PI;
	}
	set power(e) {
		this.intensity = e / (4 * Math.PI);
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
	}
}, jd = class extends Sd {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, Md = class extends vd {
	constructor() {
		super(new jd(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, Nd = class extends pd {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ms.DEFAULT_UP), this.updateMatrix(), this.target = new Ms(), this.shadow = new Md();
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
	}
}, Pd = class {
	static extractUrlBase(e) {
		let t = e.lastIndexOf("/");
		return t === -1 ? "./" : e.slice(0, t + 1);
	}
	static resolveURL(e, t) {
		return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
	}
}, Fd = /* @__PURE__ */ new WeakMap(), Id = class extends od {
	constructor(e) {
		super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && G("ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && G("ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
	}
	setOptions(e) {
		return this.options = e, this;
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = rd.get(`image-bitmap:${e}`);
		if (a !== void 0) {
			if (i.manager.itemStart(e), a.then) {
				a.then((n) => {
					Fd.has(a) === !0 ? (r && r(Fd.get(a)), i.manager.itemError(e), i.manager.itemEnd(e)) : (t && t(n), i.manager.itemEnd(e));
				});
				return;
			}
			setTimeout(function() {
				t && t(a), i.manager.itemEnd(e);
			}, 0);
			return;
		}
		let o = {};
		o.credentials = this.withCredentials || this.crossOrigin !== "anonymous" ? "include" : "same-origin", o.headers = this.requestHeader, o.priority = this.priority, o.cache = this.cache, o.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
		let s = fetch(e, o).then(function(e) {
			return e.blob();
		}).then(function(e) {
			return createImageBitmap(e, Object.assign({}, i.options, { colorSpaceConversion: "none" }));
		}).then(function(n) {
			return rd.add(`image-bitmap:${e}`, n), t && t(n), i.manager.itemEnd(e), n;
		}).catch(function(t) {
			r && r(t), Fd.set(s, t), rd.remove(`image-bitmap:${e}`), i.manager.itemError(e), i.manager.itemEnd(e);
		});
		rd.add(`image-bitmap:${e}`, s), i.manager.itemStart(e);
	}
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
}, Ld = -90, Rd = 1, zd = class extends Ms {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new Ed(Ld, Rd, e, t);
		r.layers = this.layers, this.add(r);
		let i = new Ed(Ld, Rd, e, t);
		i.layers = this.layers, this.add(i);
		let a = new Ed(Ld, Rd, e, t);
		a.layers = this.layers, this.add(a);
		let o = new Ed(Ld, Rd, e, t);
		o.layers = this.layers, this.add(o);
		let s = new Ed(Ld, Rd, e, t);
		s.layers = this.layers, this.add(s);
		let c = new Ed(Ld, Rd, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.mipmapsAutoUpdate;
		n.texture.mipmapsAutoUpdate = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.mipmapsAutoUpdate = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, Bd = class extends Ed {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e, this.perCameraFrustumCulled = !1;
	}
}, Vd = "\\[\\]\\.:\\/", Hd = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), Ud = "[^\\[\\]\\.:\\/]", Wd = "[^" + Vd.replace("\\.", "") + "]", Gd = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", Ud), Kd = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", Wd), qd = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", Ud), Jd = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", Ud), Yd = RegExp("^" + Gd + Kd + qd + Jd + "$"), Xd = [
	"material",
	"materials",
	"bones",
	"map"
], Zd = class {
	constructor(e, t, n) {
		let r = n || Qd.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, Qd = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(Hd, "");
	}
	static parseTrackName(e) {
		let t = Yd.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			Xd.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			G("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						K("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						K("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						K("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						K("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						K("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						K("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					K("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			K("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					K("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					K("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
Qd.Composite = Zd, Qd.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, Qd.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, Qd.prototype.GetterByBindingType = [
	Qd.prototype._getValue_direct,
	Qd.prototype._getValue_array,
	Qd.prototype._getValue_arrayElement,
	Qd.prototype._getValue_toArray
], Qd.prototype.SetterByBindingTypeAndVersioning = [
	[
		Qd.prototype._setValue_direct,
		Qd.prototype._setValue_direct_setNeedsUpdate,
		Qd.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		Qd.prototype._setValue_array,
		Qd.prototype._setValue_array_setNeedsUpdate,
		Qd.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		Qd.prototype._setValue_arrayElement,
		Qd.prototype._setValue_arrayElement_setNeedsUpdate,
		Qd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		Qd.prototype._setValue_fromArray,
		Qd.prototype._setValue_fromArray_setNeedsUpdate,
		Qd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var $d = class {
	constructor(e = !0) {
		this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1, G("Clock: This module has been deprecated. Please use THREE.Timer instead.");
	}
	start() {
		this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
	}
	stop() {
		this.getElapsedTime(), this.running = !1, this.autoStart = !1;
	}
	getElapsedTime() {
		return this.getDelta(), this.elapsedTime;
	}
	getDelta() {
		let e = 0;
		if (this.autoStart && !this.running) return this.start(), 0;
		if (this.running) {
			let t = performance.now();
			e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
		}
		return e;
	}
};
(class {
	static {
		this.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
});
function ef(e, t, n, r) {
	let i = tf(r);
	switch (n) {
		case Hi: return e * t;
		case qi: return e * t / i.components * i.byteLength;
		case Ji: return e * t / i.components * i.byteLength;
		case Yi: return e * t * 2 / i.components * i.byteLength;
		case Xi: return e * t * 2 / i.components * i.byteLength;
		case Ui: return e * t * 3 / i.components * i.byteLength;
		case Wi: return e * t * 4 / i.components * i.byteLength;
		case Zi: return e * t * 4 / i.components * i.byteLength;
		case Qi:
		case $i: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case ea:
		case ta: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case ra:
		case aa: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case na:
		case ia: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case oa:
		case sa:
		case la:
		case ua: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case ca:
		case da:
		case fa: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case pa: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case ma: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case ha: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case ga: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case _a: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case va: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case ya: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case ba: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case xa: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case Sa: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case Ca: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case wa: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case Ta: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case Ea: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case Da:
		case Oa:
		case ka: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case Aa:
		case ja: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case Ma:
		case Na: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function tf(e) {
	switch (e) {
		case ki:
		case Ai: return {
			byteLength: 1,
			components: 1
		};
		case Mi:
		case ji:
		case Ii: return {
			byteLength: 2,
			components: 1
		};
		case Li:
		case Ri: return {
			byteLength: 2,
			components: 4
		};
		case Pi:
		case Ni:
		case Fi: return {
			byteLength: 4,
			components: 1
		};
		case Bi:
		case Vi: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } })), typeof window < "u" && (window.__THREE__ ? G("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
// node_modules/three/build/three.module.js
function nf() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		r = e.requestAnimationFrame(i), n(t, a);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function rf(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var Z = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	uniform samplerCube envMap;\n	#ifdef ENVMAP_TYPE_PMREM\n		float roughnessToMip( const in float roughness ) {\n			float r = clamp( roughness, 0.0, 1.0 );\n			return ENVMAP_MAX_LOD * r * ( 2.0 - r );\n		}\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_PMREM\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_PMREM\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_RETROREFLECTION\n		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n			#ifdef ENVMAP_TYPE_PMREM\n				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );\n				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );\n				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );\n				return envMapColor.rgb * envMapIntensity;\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_PMREM\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n		#ifdef USE_RETROREFLECTION\n			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n				#ifdef ENVMAP_TYPE_PMREM\n					vec3 bentNormal = cross( bitangent, viewDir );\n					bentNormal = normalize( cross( bentNormal, bitangent ) );\n					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n					return getIBLRetroRadiance( viewDir, bentNormal, roughness );\n				#else\n					return vec3( 0.0 );\n				#endif\n			}\n		#endif\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_SUN_LIGHTS > 0\n	struct SunLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];\n	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {\n		light.color = sunLight.color;\n		light.direction = sunLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.045 );\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef USE_DIFFUSE_ROUGHNESS\n	float diffuseRoughnessFactor = diffuseRoughness;\n	#ifdef USE_DIFFUSE_ROUGHNESSMAP\n		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;\n	#endif\n	material.diffuseRoughness = saturate( diffuseRoughnessFactor );\n#endif\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	material.retroreflectivity = retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	vec2 dfg;\n	vec3 multiScatteringCompensation;\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float diffuseRoughness;\n	#endif\n	#ifdef USE_RETROREFLECTION\n		float retroreflectivity;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0Dielectric;\n		vec3 iridescenceF0Metallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\n#ifdef USE_DIFFUSE_ROUGHNESS\n	const float EON_EPSILON = 1e-7;\n	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {\n		float muComp = 1.0 - mu;\n		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );\n		return A * ( 1.0 + roughness * gOverPi );\n	}\n	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {\n		vec3 rho = saturate( diffuseColor );\n		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float s = dot( lightDir, viewDir ) - dotNL * dotNV;\n		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;\n		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );\n		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );\n		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );\n		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );\n		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );\n		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );\n		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI\n			* max( EON_EPSILON, 1.0 - albedoV )\n			* max( EON_EPSILON, 1.0 - albedoL )\n			/ max( EON_EPSILON, 1.0 - averageAlbedo );\n		return singleScatter + multiScatter;\n	}\n	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {\n		vec3 rho = saturate( diffuseColor );\n		if ( roughness <= EON_EPSILON ) return rho;\n		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );\n		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );\n		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );\n		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );\n		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );\n	}\n#endif\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = max( material.clearcoatRoughness, 0.045 );\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = max( material.roughness, 0.045 );\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float alphaT = max( material.alphaT, alpha );\n		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );\n		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );\n		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;\n	vec3 halfDir = normalize( directLight.direction + geometryViewDir );\n	float dotVH = saturate( dot( geometryViewDir, halfDir ) );\n	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );\n		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );\n		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );\n		F = mix( F, retroF, saturate( material.retroreflectivity ) );\n	#endif\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );\n	#else\n		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );\n	#endif\n	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );\n	#endif\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );\n		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );\n	#else\n		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );\n	#endif\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );\n	#else\n		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	#endif\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );\n		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );\n	}\n#endif\n#ifdef STANDARD\n	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );\n	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;\n	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )\n		float EssMs = material.dfg.x + material.dfg.y;\n		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );\n	#endif\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )\n	SunLight sunLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {\n		sunLight = sunLights[ i ];\n		getSunLightInfo( sunLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )\n		sunLightShadow = sunLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_LIGHT_PROBE_GRIDS > 0\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		int probeGrid = - 1;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {\n			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;\n		}\n		#pragma unroll_loop_end\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {\n			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_RETROREFLECTION\n		#ifdef USE_ANISOTROPY\n			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n		#else\n			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );\n		#endif\n		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );\n	#endif\n	radiance += iblRadiance;\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#if NUM_LIGHT_PROBE_GRIDS > 0\nuniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];\nbool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {\n	vec3 spacing = ( probesMax - probesMin ) / probesResolution;\n	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;\n	vec3 margin = spacing * 0.01;\n	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );\n}\nvec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 probeSpacing = gridRange / res;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	#if defined( USE_COLOR_ALPHA )\n		vColor *= morphTargetBaseInfluence;\n	#elif defined( USE_COLOR )\n		vColor.rgb *= morphTargetBaseInfluence;\n	#endif\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		#define SUN_LIGHT_CASCADES 2\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#endif\n		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n		struct SunLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				vec2 radius = shadowRadius * texelSize;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		float getSunShadow(\n			#if defined( SHADOWMAP_TYPE_PCF )\n				sampler2DShadow shadowMap,\n			#else\n				sampler2D shadowMap,\n			#endif\n			SunLightShadow sunLightShadow,\n			int shadowIndex\n		) {\n			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );\n			float viewDepth = vSunShadowWorldPosition.w;\n			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;\n			float shadow = 1.0;\n			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {\n				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];\n				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {\n					float cascadeShadow = getShadow(\n						shadowMap,\n						sunLightShadow.shadowMapSize,\n						sunLightShadow.shadowIntensity,\n						sunLightShadow.shadowBias,\n						sunLightShadow.shadowRadius,\n						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition\n					);\n					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );\n				}\n			}\n			return shadow;\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float lightDistance = length( lightToPosition );\n			float depthRange = shadowCameraFar - shadowCameraNear;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float depthA = - shadowCameraNear / depthRange - shadowBias;\n				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );\n			#else\n				float depthA = shadowCameraFar / depthRange + shadowBias;\n				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			shadow = 0.0;\n			for ( int i = 0; i < 5; i ++ ) {\n				vec2 offset = vogelDiskSample( i, 5, phi );\n				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;\n				vec3 absDirection = abs( direction );\n				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );\n				shadow += texture( shadowMap, vec4( direction, dp ) );\n			}\n			shadow *= 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );\n		vSunShadowWorldNormal = shadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {\n		sunLight = sunLightShadows[ i ];\n		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	varying vec2 vDiffuseRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	uniform mat3 diffuseRoughnessMapTransform;\n	varying vec2 vDiffuseRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "uniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <envmap_common_pars_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_PMREM\n		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );\n	#else\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESS\n	uniform float diffuseRoughness;\n	#ifdef USE_DIFFUSE_ROUGHNESSMAP\n		uniform sampler2D diffuseRoughnessMap;\n	#endif\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	uniform float retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, Q = {
	common: {
		diffuse: { value: /*@__PURE__*/ new X(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new J() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new J() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new J() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new J() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new J() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new J() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new J() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new J() },
		normalScale: { value: /*@__PURE__*/ new Io(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new J() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new J() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new J() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new J() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new X(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		sunLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		sunLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		sunShadowMatrix: { value: [] },
		sunShadowCascade: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: [] },
		probesMin: { value: [] },
		probesMax: { value: [] },
		probesResolution: { value: [] }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new X(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new J() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new J() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new X(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new Io(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new J() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new J() },
		alphaTest: { value: 0 }
	}
}, af = {
	basic: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.specularmap,
			Q.envmap,
			Q.aomap,
			Q.lightmap,
			Q.fog
		]),
		vertexShader: Z.meshbasic_vert,
		fragmentShader: Z.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.specularmap,
			Q.envmap,
			Q.aomap,
			Q.lightmap,
			Q.emissivemap,
			Q.bumpmap,
			Q.normalmap,
			Q.displacementmap,
			Q.fog,
			Q.lights,
			{
				emissive: { value: /*@__PURE__*/ new X(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Z.meshlambert_vert,
		fragmentShader: Z.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.specularmap,
			Q.envmap,
			Q.aomap,
			Q.lightmap,
			Q.emissivemap,
			Q.bumpmap,
			Q.normalmap,
			Q.displacementmap,
			Q.fog,
			Q.lights,
			{
				emissive: { value: /*@__PURE__*/ new X(0) },
				specular: { value: /*@__PURE__*/ new X(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Z.meshphong_vert,
		fragmentShader: Z.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.envmap,
			Q.aomap,
			Q.lightmap,
			Q.emissivemap,
			Q.bumpmap,
			Q.normalmap,
			Q.displacementmap,
			Q.roughnessmap,
			Q.metalnessmap,
			Q.fog,
			Q.lights,
			{
				emissive: { value: /*@__PURE__*/ new X(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Z.meshphysical_vert,
		fragmentShader: Z.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.aomap,
			Q.lightmap,
			Q.emissivemap,
			Q.bumpmap,
			Q.normalmap,
			Q.displacementmap,
			Q.gradientmap,
			Q.fog,
			Q.lights,
			{ emissive: { value: /*@__PURE__*/ new X(0) } }
		]),
		vertexShader: Z.meshtoon_vert,
		fragmentShader: Z.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.bumpmap,
			Q.normalmap,
			Q.displacementmap,
			Q.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: Z.meshmatcap_vert,
		fragmentShader: Z.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ vu([Q.points, Q.fog]),
		vertexShader: Z.points_vert,
		fragmentShader: Z.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: Z.linedashed_vert,
		fragmentShader: Z.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ vu([Q.common, Q.displacementmap]),
		vertexShader: Z.depth_vert,
		fragmentShader: Z.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.bumpmap,
			Q.normalmap,
			Q.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: Z.meshnormal_vert,
		fragmentShader: Z.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ vu([Q.sprite, Q.fog]),
		vertexShader: Z.sprite_vert,
		fragmentShader: Z.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new J() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: Z.background_vert,
		fragmentShader: Z.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new J() }
		},
		vertexShader: Z.backgroundCube_vert,
		fragmentShader: Z.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: Z.cube_vert,
		fragmentShader: Z.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: Z.equirect_vert,
		fragmentShader: Z.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ vu([
			Q.common,
			Q.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new q() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: Z.distance_vert,
		fragmentShader: Z.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ vu([
			Q.lights,
			Q.fog,
			{
				color: { value: /*@__PURE__*/ new X(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: Z.shadow_vert,
		fragmentShader: Z.shadow_frag
	}
};
af.physical = {
	uniforms: /*@__PURE__*/ vu([af.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new J() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new J() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new Io(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new J() },
		diffuseRoughness: { value: 0 },
		diffuseRoughnessMap: { value: null },
		diffuseRoughnessMapTransform: { value: /*@__PURE__*/ new J() },
		dispersion: { value: 0 },
		retroreflectivity: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new J() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new J() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new X(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new J() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new J() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new J() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new Io() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new J() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new X(0) },
		specularColor: { value: /*@__PURE__*/ new X(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new J() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new J() },
		anisotropyVector: { value: /*@__PURE__*/ new Io() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new J() }
	}]),
	vertexShader: Z.meshphysical_vert,
	fragmentShader: Z.meshphysical_frag
};
var of = {
	r: 0,
	b: 0,
	g: 0
}, sf = /*@__PURE__*/ new Y(), cf = /*@__PURE__*/ new J();
cf.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function lf(e, t, n, r, i, a) {
	let o = new X(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && i.isCubeTexture ? (l === void 0 && (l = new ul(new hu(1, 1, 1), new Tu({
			name: "BackgroundCubeMaterial",
			uniforms: _u(af.backgroundCube.uniforms),
			vertexShader: af.backgroundCube.vertexShader,
			fragmentShader: af.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(sf.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(cf), l.material.toneMapped = Wo.getTransfer(i.colorSpace) !== Ka, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new ul(new gu(2, 2), new Tu({
			name: "BackgroundMaterial",
			uniforms: _u(af.background.uniforms),
			vertexShader: af.background.vertexShader,
			fragmentShader: af.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = Wo.getTransfer(i.colorSpace) !== Ka, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(of, xu(e)), n.buffers.color.setClear(of.r, of.g, of.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function uf(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.isInterleavedBuffer === !0 ? t.stride : t.itemSize, p = s.offset;
						if (t.isInstancedInterleavedBuffer || t.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function df(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function ff(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && n !== 1015 && !i && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (G("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), f = n.logarithmicDepthBuffer === !0 && d === !1;
	n.reversedDepthBuffer === !0 && d === !1 && G("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), n.logarithmicDepthBuffer === !0 && d === !0 && G("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: f,
		reversedDepthBuffer: d,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function pf(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new Wc(), s = new J(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var mf = class extends rs {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new uu(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new hu(5, 5, 5), i = new Tu({
			name: "CubemapFromEquirect",
			uniforms: _u(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new ul(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = Ei), new zd(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
}, hf = 256, gf = 3, _f = 20, vf = 256, yf = 16, bf = 3, xf = /*@__PURE__*/ new q(), Sf = /*@__PURE__*/ new X(), Cf = class e {
	constructor(e) {
		this._renderer = e, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new zd(1, 10, null), this._boxMesh = new ul(new hu(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = xf } = i, s = this._renderer;
		this._setSize(a);
		let c = this._allocateTarget(), l = this._getSourceTarget(!0);
		t > 0 && (l.texture.mipmapsAutoUpdate = !1);
		let u = s.autoClear, d = s.autoClearColor, f = s.autoClearDepth, p = s.autoClearStencil, m = e.background;
		s.autoClear = !0, s.autoClearColor = !0, s.autoClearDepth = !0, s.autoClearStencil = !0, m === null && (e.background = s.getClearColor(Sf));
		let h = new zd(n, r, l);
		return h.position.copy(o), h.update(s, e), s.autoClear = u, s.autoClearColor = d, s.autoClearDepth = f, s.autoClearStencil = p, e.background = m, t > 0 && (l.texture.mipmapsAutoUpdate = !0, this._blur(c, t)), this._applyPMREM(c), c;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = Af(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = kf(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
	}
	static lodToRoughness(e, t) {
		return t > 0 ? 1 - Math.sqrt(1 - e / t) : 0;
	}
	_setSize(e) {
		this._cubeSize = Math.max(hf, Ao(e));
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? hf : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4);
		let n = t || this._allocateTarget();
		return this._textureToCubemap(e), this._applyPMREM(n), n;
	}
	_allocateTarget() {
		let e = this._cubeSize, t = wf(e, !1, !1), n = Math.log2(e) - gf;
		for (let r = 0; r <= n; r++) t.texture.mipmaps.push({
			width: e >> r,
			height: e >> r
		});
		return t.texture.name = "PMREM", t.texture.isPMREMTexture = !0, t;
	}
	_getSourceTarget(e = !1) {
		let t = this._cubeSize, n = this._sourceTarget;
		return (n === null || n.width !== t || e && n.depthBuffer === !1) && (n !== null && n.dispose(), this._sourceTarget = wf(t, !0, e)), this._sourceTarget;
	}
	_compileMaterial(e) {
		this._boxMesh.material = e, this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
	}
	_renderCube(e, t, n) {
		let r = this._boxMesh, i = this._cubeCamera;
		r.material = n, i.renderTarget = e, i.activeMipmapLevel = t;
		let a = e.width >> t;
		e.viewport.set(0, 0, a, a), i.update(this._renderer, r), e.viewport.set(0, 0, e.width, e.height);
	}
	_textureToCubemap(e) {
		let t;
		e.mapping === 301 || e.mapping === 302 ? (this._cubemapMaterial === null && (this._cubemapMaterial = Af()), t = this._cubemapMaterial, t.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = kf()), t = this._equirectMaterial), t.uniforms.envMap.value = e, this._renderCube(this._getSourceTarget(), 0, t);
	}
	_applyPMREM(t) {
		this._ggxMaterial === null && (this._ggxMaterial = Ef(), this._integrationMaterial = Df());
		let n = this._cubeSize, r = t.texture.mipmaps.length - 1, i = this._ggxMaterial.uniforms;
		i.envMap.value = this._sourceTarget.texture;
		let a = this._integrationMaterial.uniforms;
		a.envMap.value = this._sourceTarget.texture, a.sourceLod.value = Math.log2(n / yf);
		for (let o = 0; o <= r; o++) {
			let s = e.lodToRoughness(o, r);
			if (o > r - bf) a.roughness.value = s, this._renderCube(t, o, this._integrationMaterial);
			else {
				let e = s > 0 ? Math.log2(n) + .5 * Math.log2(6 / (vf * s ** 4)) + .5 : 0;
				i.roughness.value = s, i.lodBias.value = e, this._renderCube(t, o, this._ggxMaterial);
			}
		}
	}
	_blur(e, t) {
		this._blurMaterial === null && (this._blurMaterial = Of());
		let n = this._blurMaterial, r = n.uniforms, i = this._sourceTarget;
		r.sigma.value = Math.min(t, Math.PI) / Math.SQRT2, r.envMap.value = i.texture, this._renderCube(e, 0, n), r.envMap.value = e.texture, this._renderCube(i, 0, n);
	}
};
function wf(e, t, n) {
	return new mf(e, {
		minFilter: Oi,
		generateMipmaps: t,
		type: Ii,
		colorSpace: Wa,
		depthBuffer: n
	});
}
function Tf(e, t, n) {
	return new Tu({
		name: e,
		uniforms: t,
		vertexShader: Z.cube_vert,
		fragmentShader: n,
		side: 1,
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Ef() {
	return Tf("PMREMGGXConvolution", {
		envMap: { value: null },
		roughness: { value: 0 },
		lodBias: { value: 0 }
	}, `

		#define GGX_SAMPLES ${vf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function Df() {
	return Tf("PMREMGGXIntegration", {
		envMap: { value: null },
		roughness: { value: 0 },
		sourceLod: { value: 0 },
		sourceSize: { value: yf }
	}, "\n\n		varying vec3 vWorldDirection;\n\n		uniform samplerCube envMap;\n		uniform float roughness;\n		uniform float sourceLod;\n		uniform int sourceSize;\n\n		void main() {\n\n			vec3 N = normalize( vWorldDirection );\n\n			float alpha = roughness * roughness;\n			float alpha2 = alpha * alpha;\n\n			float texelSize = 2.0 / float( sourceSize );\n\n			vec3 prefilteredColor = vec3( 0.0 );\n			float totalWeight = 0.0;\n\n			// Pair opposite texels: only the one in N's hemisphere contributes.\n			for ( int face = 0; face < 3; face ++ ) {\n\n				for ( int y = 0; y < sourceSize; y ++ ) {\n\n					for ( int x = 0; x < sourceSize; x ++ ) {\n\n						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;\n						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );\n\n						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );\n						float NdotL = dot( N, texelDirection );\n						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;\n						NdotL = abs( NdotL ) * invDistance;\n\n						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors\n						// in the GGX distribution and texel solid angle cancel when normalized.\n						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;\n						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );\n\n						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;\n						totalWeight += weight;\n\n					}\n\n				}\n\n			}\n\n			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );\n\n		}\n	");
}
function Of() {
	return Tf("PMREMSphericalGaussianBlur", {
		envMap: { value: null },
		sigma: { value: 0 }
	}, `

		#define SAMPLES ${_f}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`);
}
function kf() {
	return Tf("PMREMEquirectangularToCubemap", { envMap: { value: null } }, "\n\n		varying vec3 vWorldDirection;\n\n		uniform sampler2D envMap;\n\n		#include <common>\n\n		void main() {\n\n			// Average four subpixel samples to preserve small, bright features.\n			vec3 direction = normalize( vWorldDirection );\n			vec3 dx = dFdx( direction ) * 0.25;\n			vec3 dy = dFdy( direction ) * 0.25;\n\n			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;\n			gl_FragColor = vec4( color * 0.25, 1.0 );\n\n		}\n	");
}
function Af() {
	return Tf("PMREMCubemapToCubemap", {
		envMap: { value: null },
		flipEnvMap: { value: -1 }
	}, "\n\n		varying vec3 vWorldDirection;\n\n		uniform samplerCube envMap;\n		uniform float flipEnvMap;\n\n		void main() {\n\n			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );\n\n		}\n	");
}
function jf(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) {
				if (t.has(n)) {
					let e = t.get(n).texture;
					return s(e, n.mapping);
				}
				{
					let r = n.image;
					if (r && r.height > 0) {
						let i = new mf(r.height);
						return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
					}
					return null;
				}
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture && t.isPMREMTexture !== !0) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new Cf(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new Cf(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function Mf(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && ro("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function Nf(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap(), o = new FinalizationRegistry((e) => delete i[e]);
	function s(e) {
		c(e.target);
	}
	function c(e) {
		e.index !== null && t.remove(e.index);
		for (let n in e.attributes) t.remove(e.attributes[n]);
		e.removeEventListener("dispose", s), delete i[e.id], o.unregister(e);
		let c = a.get(e);
		c && (t.remove(c), a.delete(e)), r.releaseStatesOfGeometry(e), e.isInstancedBufferGeometry === !0 && delete e._maxInstanceCount, n.memory.geometries--;
	}
	function l(e, t) {
		return i[t.id] === void 0 && (t.addEventListener("dispose", s), i[t.id] = new WeakRef(t), o.register(t, t.id, t), n.memory.geometries++), t;
	}
	function u(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function d(e) {
		let n = e.index, r = e.attributes.position, i = 0;
		if (r === void 0) return;
		let o = n === null ? r.array.length / 3 - 1 : n.array.length, s = new (r.count >= 65535 ? Cc : Sc)(Math.ceil(o / 3) * 6, 1), c = s.array;
		if (n !== null) {
			let e = n.array;
			i = n.version;
			for (let t = 0, n = 0; t < o; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				c[n++] = r, c[n++] = i, c[n++] = i, c[n++] = a, c[n++] = a, c[n++] = r;
			}
		} else {
			i = r.version;
			for (let e = 0, t = 0; e < o; e += 3) {
				let n = e + 0, r = e + 1, i = e + 2;
				c[t++] = n, c[t++] = r, c[t++] = r, c[t++] = i, c[t++] = i, c[t++] = n;
			}
		}
		s.version = i;
		let l = a.get(e);
		l && t.remove(l), a.set(e, s);
	}
	function f(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && d(e);
		} else d(e);
		return a.get(e);
	}
	function p() {
		for (let e in i) {
			let t = i[e].deref();
			t !== void 0 && c(t);
		}
	}
	return {
		get: l,
		update: u,
		getWireframeAttribute: f,
		dispose: p
	};
}
function Pf(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function Ff(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: K("WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function If(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new ts();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new is(h, p, m, u);
			g.type = Fi, g.needsUpdate = !0;
			let _ = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * _;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new Io(p, m)
			}, r.set(o, d);
			function v() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", v);
			}
			o.addEventListener("dispose", v);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function Lf(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var Rf = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function zf(e, t, n, r, i, a) {
	let o = new rs(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		storeMultisampledDepthBuffer: !1,
		storeMultisampledStencilBuffer: !1,
		resolveDepthBuffer: !1,
		resolveStencilBuffer: !1
	}), s = null, c = null, l = null, u = new Ic();
	u.setAttribute("position", new wc([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), u.setAttribute("uv", new wc([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let d = new Eu({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), f = new ul(u, d), p = new jd(-1, 1, 1, -1, 0, 1), m = null, h = null, g = !1, _, v = null, y = [], b = !1;
	this.setSize = function(e, t) {
		o.setSize(e, t), s !== null && s.setSize(e, t), c !== null && c.setSize(e, t);
		for (let n = 0; n < y.length; n++) {
			let r = y[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		y = e, b = y.length > 0 && y[0].isRenderPass === !0;
		let t = o.width, n = o.height;
		y.length > 0 && s === null && (s = new rs(t, n, {
			type: Ii,
			depthBuffer: !1,
			stencilBuffer: !1
		}), c = new rs(t, n, {
			type: Ii,
			depthBuffer: !1,
			stencilBuffer: !1
		}));
		let r = i === !0 && y.some((e) => e.needsDepthTexture === !0);
		r !== (o.depthTexture !== null) && (r === !0 && l === null && (l = new fu(t, n), a === !0 && (l.format = Ki, l.type = zi)), o.dispose(), o.depthTexture = r ? l : null, o.resolveDepthBuffer = r, o.storeMultisampledDepthBuffer = r);
		for (let e = 0; e < y.length; e++) {
			let i = y[e];
			i.setSize && i.setSize(t, n), r && i.needsDepthTexture === !0 && i.setDepthTexture && i.setDepthTexture(l);
		}
	}, this.begin = function(e, t) {
		if (g || e.toneMapping === 0 && y.length === 0) return !1;
		if (v = t, t !== null) {
			let e = t.width, n = t.height;
			(o.width !== e || o.height !== n) && this.setSize(e, n);
		}
		return b === !1 && e.setRenderTarget(o), _ = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return b;
	}, this.end = function(e, t) {
		e.toneMapping = _, g = !0;
		let n = o, r = s;
		for (let i = 0; i < y.length; i++) {
			let a = y[i];
			a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1 && (n = r, r = r === s ? c : s));
		}
		if (m !== e.outputColorSpace || h !== e.toneMapping) {
			m = e.outputColorSpace, h = e.toneMapping, d.defines = {}, Wo.getTransfer(m) === "srgb" && (d.defines.SRGB_TRANSFER = "");
			let t = Rf[h];
			t && (d.defines[t] = ""), d.needsUpdate = !0;
		}
		d.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(v), e.render(f, p), v = null, g = !1;
	}, this.isCompositing = function() {
		return g;
	}, this.dispose = function() {
		o.dispose(), s !== null && s.dispose(), c !== null && c.dispose(), u.dispose(), d.dispose();
	};
}
var Bf = /*@__PURE__*/ new es(), Vf = /*@__PURE__*/ new fu(1, 1), Hf = /*@__PURE__*/ new pu(1), Uf = /*@__PURE__*/ new is(), Wf = /*@__PURE__*/ new as(), Gf = /*@__PURE__*/ new uu(), Kf = [], qf = [], Jf = /* @__PURE__ */ new Float32Array(16), Yf = /* @__PURE__ */ new Float32Array(9), Xf = /* @__PURE__ */ new Float32Array(4);
function Zf(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = Kf[i];
	if (a === void 0 && (a = new Float32Array(i), Kf[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function Qf(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function $f(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function ep(e, t) {
	let n = qf[t];
	n === void 0 && (n = new Int32Array(t), qf[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function tp(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function np(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Qf(n, t)) return;
		e.uniform2fv(this.addr, t), $f(n, t);
	}
}
function rp(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (Qf(n, t)) return;
		e.uniform3fv(this.addr, t), $f(n, t);
	}
}
function ip(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Qf(n, t)) return;
		e.uniform4fv(this.addr, t), $f(n, t);
	}
}
function ap(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Qf(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), $f(n, t);
	} else {
		if (Qf(n, r)) return;
		Xf.set(r), e.uniformMatrix2fv(this.addr, !1, Xf), $f(n, r);
	}
}
function op(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Qf(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), $f(n, t);
	} else {
		if (Qf(n, r)) return;
		Yf.set(r), e.uniformMatrix3fv(this.addr, !1, Yf), $f(n, r);
	}
}
function sp(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Qf(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), $f(n, t);
	} else {
		if (Qf(n, r)) return;
		Jf.set(r), e.uniformMatrix4fv(this.addr, !1, Jf), $f(n, r);
	}
}
function cp(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function lp(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Qf(n, t)) return;
		e.uniform2iv(this.addr, t), $f(n, t);
	}
}
function up(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Qf(n, t)) return;
		e.uniform3iv(this.addr, t), $f(n, t);
	}
}
function dp(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Qf(n, t)) return;
		e.uniform4iv(this.addr, t), $f(n, t);
	}
}
function fp(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function pp(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Qf(n, t)) return;
		e.uniform2uiv(this.addr, t), $f(n, t);
	}
}
function mp(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Qf(n, t)) return;
		e.uniform3uiv(this.addr, t), $f(n, t);
	}
}
function hp(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Qf(n, t)) return;
		e.uniform4uiv(this.addr, t), $f(n, t);
	}
}
function gp(e) {
	return e.version === 0 && (e.compareFunction = 519, e.needsUpdate = !0), e;
}
function _p(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	a = this.type === e.SAMPLER_2D_SHADOW ? gp(Vf) : Bf, n.setTexture2D(t || a, i);
}
function vp(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Wf, i);
}
function yp(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	a = this.type === e.SAMPLER_CUBE_SHADOW ? gp(Hf) : Gf, n.setTextureCube(t || a, i);
}
function bp(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Uf, i);
}
function xp(e) {
	switch (e) {
		case 5126: return tp;
		case 35664: return np;
		case 35665: return rp;
		case 35666: return ip;
		case 35674: return ap;
		case 35675: return op;
		case 35676: return sp;
		case 5124:
		case 35670: return cp;
		case 35667:
		case 35671: return lp;
		case 35668:
		case 35672: return up;
		case 35669:
		case 35673: return dp;
		case 5125: return fp;
		case 36294: return pp;
		case 36295: return mp;
		case 36296: return hp;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return _p;
		case 35679:
		case 36299:
		case 36307: return vp;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return yp;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return bp;
	}
}
function Sp(e, t) {
	e.uniform1fv(this.addr, t);
}
function Cp(e, t) {
	let n = Zf(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function wp(e, t) {
	let n = Zf(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function Tp(e, t) {
	let n = Zf(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function Ep(e, t) {
	let n = Zf(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function Dp(e, t) {
	let n = Zf(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function Op(e, t) {
	let n = Zf(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function kp(e, t) {
	e.uniform1iv(this.addr, t);
}
function Ap(e, t) {
	e.uniform2iv(this.addr, t);
}
function jp(e, t) {
	e.uniform3iv(this.addr, t);
}
function Mp(e, t) {
	e.uniform4iv(this.addr, t);
}
function Np(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Pp(e, t) {
	e.uniform2uiv(this.addr, t);
}
function Fp(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Ip(e, t) {
	e.uniform4uiv(this.addr, t);
}
function Lp(e, t, n) {
	let r = this.cache, i = t.length, a = ep(n, i);
	Qf(r, a) || (e.uniform1iv(this.addr, a), $f(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? gp(Vf) : Bf;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function Rp(e, t, n) {
	let r = this.cache, i = t.length, a = ep(n, i);
	Qf(r, a) || (e.uniform1iv(this.addr, a), $f(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Wf, a[e]);
}
function zp(e, t, n) {
	let r = this.cache, i = t.length, a = ep(n, i);
	Qf(r, a) || (e.uniform1iv(this.addr, a), $f(r, a));
	let o;
	o = this.type === e.SAMPLER_CUBE_SHADOW ? gp(Hf) : Gf;
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || o, a[e]);
}
function Bp(e, t, n) {
	let r = this.cache, i = t.length, a = ep(n, i);
	Qf(r, a) || (e.uniform1iv(this.addr, a), $f(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Uf, a[e]);
}
function Vp(e) {
	switch (e) {
		case 5126: return Sp;
		case 35664: return Cp;
		case 35665: return wp;
		case 35666: return Tp;
		case 35674: return Ep;
		case 35675: return Dp;
		case 35676: return Op;
		case 5124:
		case 35670: return kp;
		case 35667:
		case 35671: return Ap;
		case 35668:
		case 35672: return jp;
		case 35669:
		case 35673: return Mp;
		case 5125: return Np;
		case 36294: return Pp;
		case 36295: return Fp;
		case 36296: return Ip;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Lp;
		case 35679:
		case 36299:
		case 36307: return Rp;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return zp;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Bp;
	}
}
var Hp = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = xp(t.type);
	}
}, Up = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Vp(t.type);
	}
}, Wp = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, Gp = /(\w+)(\])?(\[|\.)?/g;
function Kp(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function qp(e, t, n) {
	let r = e.name, i = r.length;
	for (Gp.lastIndex = 0;;) {
		let a = Gp.exec(r), o = Gp.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Kp(n, l === void 0 ? new Hp(s, e, t) : new Up(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Wp(s), Kp(n, e)), n = e;
		}
	}
}
var Jp = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			qp(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Yp(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Xp = 37297, Zp = 0;
function Qp(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var $p = /*@__PURE__*/ new J();
function em(e) {
	Wo._getMatrix($p, Wo.workingColorSpace, e);
	let t = `mat3( ${$p.elements.map((e) => e.toFixed(4))} )`;
	switch (Wo.getTransfer(e)) {
		case Ga: return [t, "LinearTransferOETF"];
		case Ka: return [t, "sRGBTransferOETF"];
		default: return G("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function tm(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + Qp(e.getShaderSource(t), r);
	}
	return i;
}
function nm(e, t) {
	let n = em(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,
		"}"
	].join("\n");
}
var rm = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function im(e, t) {
	let n = rm[t];
	return n === void 0 ? (G("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var am = /*@__PURE__*/ new q();
function om() {
	return Wo.getLuminanceCoefficients(am), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${am.x.toFixed(4)}, ${am.y.toFixed(4)}, ${am.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function sm(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(um).join("\n");
}
function cm(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function lm(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function um(e) {
	return e !== "";
}
function dm(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, t.numLightProbeGrids);
}
function fm(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var pm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function mm(e) {
	return e.replace(pm, hm);
}
function hm(e, t) {
	let n = Z[t];
	if (n === void 0) throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	return mm(n);
}
var gm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function _m(e) {
	return e.replace(gm, vm);
}
function vm(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function ym(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var bm = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function xm(e) {
	return bm[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var Sm = { 302: "ENVMAP_MODE_REFRACTION" };
function Cm(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : Sm[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var wm = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function Tm(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : wm[e.combine] || "ENVMAP_BLENDING_NONE";
}
function Em(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = xm(n), l = n.envMapPMREM === !0 ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE", u = Cm(n), d = Tm(n), f = sm(n), p = cm(a), m = i.createProgram(), h, g, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (h = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p
	].filter(um).join("\n"), h.length > 0 && (h += "\n"), g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p
	].filter(um).join("\n"), g.length > 0 && (g += "\n")) : (h = [
		ym(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.diffuseRoughnessMapUv ? "#define DIFFUSE_ROUGHNESSMAP_UV " + n.diffuseRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(um).join("\n"), g = [
		ym(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		n.envMapPMREM ? "#define ENVMAP_MAX_LOD " + n.envMapMaxLod + ".0" : "",
		n.envMapPMREM ? "#define ENVMAP_SIZE " + n.envMapSize + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.diffuseRoughness ? "#define USE_DIFFUSE_ROUGHNESS" : "",
		n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.retroreflection ? "#define USE_RETROREFLECTION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : Z.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : im("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		Z.colorspace_pars_fragment,
		nm("linearToOutputTexel", n.outputColorSpace),
		om(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(um).join("\n")), o = mm(o), o = dm(o, n), o = fm(o, n), s = mm(s), s = dm(s, n), s = fm(s, n), o = _m(o), s = _m(s), n.isRawShaderMaterial !== !0 && (_ = "#version 300 es\n", h = [
		f,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + h, g = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + g);
	let v = _ + h + o, y = _ + g + s, b = Yp(i, i.VERTEX_SHADER, v), x = Yp(i, i.FRAGMENT_SHADER, y);
	i.attachShader(m, b), i.attachShader(m, x), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(m, 0, "position") : i.bindAttribLocation(m, 0, n.index0AttributeName), i.linkProgram(m);
	function S(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(m) || "", r = i.getShaderInfoLog(b) || "", a = i.getShaderInfoLog(x) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(m, i.LINK_STATUS) === !1) {
				if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, m, b, x);
				else {
					let e = tm(i, b, "vertex"), n = tm(i, x, "fragment");
					K("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? (s === "" || c === "") && (u = !1) : G("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: h
				},
				fragmentShader: {
					log: c,
					prefix: g
				}
			});
		}
		i.deleteShader(b), i.deleteShader(x), C = new Jp(i, m), w = lm(i, m);
	}
	let C;
	this.getUniforms = function() {
		return C === void 0 && S(this), C;
	};
	let w;
	this.getAttributes = function() {
		return w === void 0 && S(this), w;
	};
	let T = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return T === !1 && (T = i.getProgramParameter(m, Xp)), T;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Zp++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = b, this.fragmentShader = x, this;
}
var Dm = 0, Om = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new km(e), t.set(e, n)), n;
	}
}, km = class {
	constructor(e) {
		this.id = Dm++, this.code = e, this.usedTimes = 0;
	}
};
function Am(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function jm(e, t, n, r, i, a) {
	let o = new gs(), s = new Om(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function p(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function m(i, o, l, u, m, h) {
		let g = u.fog, _ = m.geometry, v = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, b = t.get(i.envMap || v, y), x = f[i.type], S = r.precision;
		i.precision !== null && (S = r.getMaxPrecision(i.precision), S !== i.precision && G("WebGLProgram.getParameters:", i.precision, "not supported, using", S, "instead."));
		let C = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color, w = C === void 0 ? 0 : C.length, T = 0;
		_.morphAttributes.position !== void 0 && (T = 1), _.morphAttributes.normal !== void 0 && (T = 2), _.morphAttributes.color !== void 0 && (T = 3);
		let E, D, O, k;
		if (x) {
			let e = af[x];
			E = e.vertexShader, D = e.fragmentShader;
		} else {
			E = i.vertexShader, D = i.fragmentShader;
			let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
			s.update(i, e, t), O = e.id, k = t.id;
		}
		let A = e.getRenderTarget(), j = e.state.buffers.depth.getReversed(), M = m.isInstancedMesh === !0, N = m.isBatchedMesh === !0, P = !!i.map, F = !!i.matcap, I = !!b, L = I && b.isPMREMTexture === !0, R = !!i.aoMap, ee = !!i.lightMap, te = !!i.bumpMap && i.wireframe === !1, ne = !!i.normalMap, re = !!i.displacementMap, ie = !!i.emissiveMap, ae = !!i.metalnessMap, oe = !!i.roughnessMap, se = i.anisotropy > 0, ce = i.clearcoat > 0, le = i.diffuseRoughness > 0, ue = i.dispersion > 0, de = i.retroreflectivity > 0, fe = i.iridescence > 0, pe = i.sheen > 0, me = i.transmission > 0, he = se && !!i.anisotropyMap, ge = ce && !!i.clearcoatMap, _e = ce && !!i.clearcoatNormalMap, ve = ce && !!i.clearcoatRoughnessMap, ye = le && !!i.diffuseRoughnessMap, z = fe && !!i.iridescenceMap, be = fe && !!i.iridescenceThicknessMap, B = pe && !!i.sheenColorMap, V = pe && !!i.sheenRoughnessMap, H = !!i.specularMap, xe = !!i.specularColorMap, U = !!i.specularIntensityMap, W = me && !!i.transmissionMap, Se = me && !!i.thicknessMap, Ce = !!i.gradientMap, we = !!i.alphaMap, Te = i.alphaTest > 0, Ee = !!i.alphaHash, De = !!i.extensions, Oe = 0;
		i.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Oe = e.toneMapping);
		let ke = L ? b.isCompressedCubeTexture ? b.image[0].mipmaps : b.mipmaps : null, Ae = {
			shaderID: x,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: E,
			fragmentShader: D,
			defines: i.defines,
			customVertexShaderID: O,
			customFragmentShaderID: k,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: S,
			batching: N,
			batchingColor: N && m._colorsTexture !== null,
			instancing: M,
			instancingColor: M && m.instanceColor !== null,
			instancingMorph: M && m.morphTexture !== null,
			outputColorSpace: A === null ? e.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : Wo.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: P,
			matcap: F,
			envMap: I,
			envMapMode: I && b.mapping,
			envMapPMREM: L,
			envMapMaxLod: L ? ke.length - 1 : null,
			envMapSize: L ? ke[0].width : null,
			aoMap: R,
			lightMap: ee,
			bumpMap: te,
			normalMap: ne,
			displacementMap: re,
			emissiveMap: ie,
			normalMapObjectSpace: ne && i.normalMapType === 1,
			normalMapTangentSpace: ne && i.normalMapType === 0,
			packedNormalMap: ne && i.normalMapType === 0 && Am(i.normalMap.format),
			metalnessMap: ae,
			roughnessMap: oe,
			anisotropy: se,
			anisotropyMap: he,
			clearcoat: ce,
			clearcoatMap: ge,
			clearcoatNormalMap: _e,
			clearcoatRoughnessMap: ve,
			diffuseRoughness: le,
			diffuseRoughnessMap: ye,
			dispersion: ue,
			retroreflection: de,
			iridescence: fe,
			iridescenceMap: z,
			iridescenceThicknessMap: be,
			sheen: pe,
			sheenColorMap: B,
			sheenRoughnessMap: V,
			specularMap: H,
			specularColorMap: xe,
			specularIntensityMap: U,
			transmission: me,
			transmissionMap: W,
			thicknessMap: Se,
			gradientMap: Ce,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: we,
			alphaTest: Te,
			alphaHash: Ee,
			combine: i.combine,
			mapUv: P && p(i.map.channel),
			aoMapUv: R && p(i.aoMap.channel),
			lightMapUv: ee && p(i.lightMap.channel),
			bumpMapUv: te && p(i.bumpMap.channel),
			normalMapUv: ne && p(i.normalMap.channel),
			displacementMapUv: re && p(i.displacementMap.channel),
			emissiveMapUv: ie && p(i.emissiveMap.channel),
			metalnessMapUv: ae && p(i.metalnessMap.channel),
			roughnessMapUv: oe && p(i.roughnessMap.channel),
			anisotropyMapUv: he && p(i.anisotropyMap.channel),
			clearcoatMapUv: ge && p(i.clearcoatMap.channel),
			clearcoatNormalMapUv: _e && p(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: ve && p(i.clearcoatRoughnessMap.channel),
			diffuseRoughnessMapUv: ye && p(i.diffuseRoughnessMap.channel),
			iridescenceMapUv: z && p(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: be && p(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: B && p(i.sheenColorMap.channel),
			sheenRoughnessMapUv: V && p(i.sheenRoughnessMap.channel),
			specularMapUv: H && p(i.specularMap.channel),
			specularColorMapUv: xe && p(i.specularColorMap.channel),
			specularIntensityMapUv: U && p(i.specularIntensityMap.channel),
			transmissionMapUv: W && p(i.transmissionMap.channel),
			thicknessMapUv: Se && p(i.thicknessMap.channel),
			alphaMapUv: we && p(i.alphaMap.channel),
			vertexTangents: !!_.attributes.tangent && (ne || se),
			vertexNormals: !!_.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!_.attributes.color && _.attributes.color.itemSize === 4,
			pointsUvs: m.isPoints === !0 && !!_.attributes.uv && (P || we),
			fog: !!g,
			useFog: i.fog === !0,
			fogExp2: !!g && g.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || _.attributes.normal === void 0 && ne === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: j,
			skinning: m.isSkinnedMesh === !0,
			hasPositionAttribute: _.attributes.position !== void 0,
			morphTargets: _.morphAttributes.position !== void 0,
			morphNormals: _.morphAttributes.normal !== void 0,
			morphColors: _.morphAttributes.color !== void 0,
			morphTargetsCount: w,
			morphTextureStride: T,
			numSunLights: o.sun.length,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numSunLightShadows: o.sunShadowMap.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: h.filter((e) => e.texture !== null).length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Oe,
			decodeVideoTexture: P && i.map.isVideoTexture === !0 && Wo.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: ie && i.emissiveMap.isVideoTexture === !0 && Wo.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: De && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (De && i.extensions.multiDraw === !0 || N) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return Ae.vertexUv1s = c.has(1), Ae.vertexUv2s = c.has(2), Ae.vertexUv3s = c.has(3), c.clear(), Ae;
	}
	function h(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (g(n, t), _(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function g(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapPMREM), e.push(t.envMapMaxLod), e.push(t.envMapSize), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.diffuseRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.numSunLights), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numSunLightShadows), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.numLightProbeGrids), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function _(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.retroreflection && o.enable(24), t.diffuseRoughness && o.enable(25), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
	}
	function v(e) {
		let t = f[e.type], n;
		if (t) {
			let e = af[t];
			n = Su.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function y(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new Em(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function b(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function x(e) {
		s.remove(e);
	}
	function S() {
		s.dispose();
	}
	return {
		getParameters: m,
		getProgramCacheKey: h,
		getUniforms: v,
		acquireProgram: y,
		releaseProgram: b,
		releaseShaderCache: x,
		programs: l,
		dispose: S
	};
}
function Mm() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function Nm(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Pm(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Fm() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l, u) {
		u.reversedDepth === !0 && (c = -c);
		let d = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || Nm), r.length > 1 && r.sort(t || Pm), i.length > 1 && i.sort(t || Pm);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function Im() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new Fm(), e.set(t, [i])) : n >= r.length ? (i = new Fm(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Lm() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					direction: new q(),
					color: new X()
				};
				break;
			case "SpotLight":
				n = {
					position: new q(),
					direction: new q(),
					color: new X(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new q(),
					color: new X(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new q(),
					skyColor: new X(),
					groundColor: new X()
				};
				break;
			case "RectAreaLight": n = {
				color: new X(),
				position: new q(),
				halfWidth: new q(),
				halfHeight: new q()
			};
		}
		return e[t.id] = n, n;
	} };
}
function Rm() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Io()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Io()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new Io(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
var zm = 0;
function Bm(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Vm(e) {
	let t = new Lm(), n = Rm(), r = {
		version: 0,
		hash: {
			sunLength: -1,
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numSunShadows: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		sun: [],
		sunShadow: [],
		sunShadowMap: [],
		sunShadowMatrix: [],
		sunShadowCascade: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new q());
	let i = new q(), a = new Y(), o = new Y();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0;
		i.sort(Bm);
		for (let e = 0, S = i.length; e < S; e++) {
			let S = i[e], C = S.color, w = S.intensity, T = S.distance, E = null;
			if (S.shadow && S.shadow.map && (E = S.shadow.map.texture.format === 1030 ? S.shadow.map.texture : S.shadow.map.depthTexture || S.shadow.map.texture), S.isAmbientLight) a += C.r * w, o += C.g * w, s += C.b * w;
			else if (S.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(S.sh.coefficients[e], w);
				x++;
			} else if (S.isSunLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()), r.sunShadow[l] = t, r.sunShadowMap[l] = E;
					let i = e.getViewportCount();
					for (let t = 0; t < i; t++) r.sunShadowMatrix[u + t] = e.getMatrix(t), r.sunShadowCascade[u + t] = e._cascadeData[t];
					u += i, l++;
				}
				r.sun[c] = e, c++;
			} else if (S.isDirectionalLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[d] = t, r.directionalShadowMap[d] = E, r.directionalShadowMatrix[d] = S.shadow.matrix, g++;
				}
				r.directional[d] = e, d++;
			} else if (S.isSpotLight) {
				let e = t.get(S);
				e.position.setFromMatrixPosition(S.matrixWorld), e.color.copy(C).multiplyScalar(w), e.distance = T, e.coneCos = Math.cos(S.angle), e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), e.decay = S.decay, r.spot[p] = e;
				let i = S.shadow;
				if (S.map && (r.spotLightMap[y] = S.map, y++, i.updateMatrices(S), S.castShadow && b++), r.spotLightMatrix[p] = i.matrix, S.castShadow) {
					let e = n.get(S);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[p] = e, r.spotShadowMap[p] = E, v++;
				}
				p++;
			} else if (S.isRectAreaLight) {
				let e = t.get(S);
				e.color.copy(C).multiplyScalar(w), e.halfWidth.set(S.width * .5, 0, 0), e.halfHeight.set(0, S.height * .5, 0), r.rectArea[m] = e, m++;
			} else if (S.isPointLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), e.distance = S.distance, e.decay = S.decay, S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[f] = t, r.pointShadowMap[f] = E, r.pointShadowMatrix[f] = S.shadow.matrix, _++;
				}
				r.point[f] = e, f++;
			} else if (S.isHemisphereLight) {
				let e = t.get(S);
				e.skyColor.copy(S.color).multiplyScalar(w), e.groundColor.copy(S.groundColor).multiplyScalar(w), r.hemi[h] = e, h++;
			}
		}
		m > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Q.LTC_FLOAT_1, r.rectAreaLTC2 = Q.LTC_FLOAT_2) : (r.rectAreaLTC1 = Q.LTC_HALF_1, r.rectAreaLTC2 = Q.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let S = r.hash;
		(S.sunLength !== c || S.directionalLength !== d || S.pointLength !== f || S.spotLength !== p || S.rectAreaLength !== m || S.hemiLength !== h || S.numSunShadows !== l || S.numDirectionalShadows !== g || S.numPointShadows !== _ || S.numSpotShadows !== v || S.numSpotMaps !== y || S.numLightProbes !== x) && (r.sun.length = c, r.directional.length = d, r.spot.length = p, r.rectArea.length = m, r.point.length = f, r.hemi.length = h, r.sunShadow.length = l, r.sunShadowMap.length = l, r.sunShadowMatrix.length = u, r.sunShadowCascade.length = u, r.directionalShadow.length = g, r.directionalShadowMap.length = g, r.directionalShadowMatrix.length = g, r.pointShadow.length = _, r.pointShadowMap.length = _, r.pointShadowMatrix.length = _, r.spotShadow.length = v, r.spotShadowMap.length = v, r.spotLightMatrix.length = v + y - b, r.spotLightMap.length = y, r.numSpotLightShadowsWithMaps = b, r.numLightProbes = x, S.sunLength = c, S.directionalLength = d, S.pointLength = f, S.spotLength = p, S.rectAreaLength = m, S.hemiLength = h, S.numSunShadows = l, S.numDirectionalShadows = g, S.numPointShadows = _, S.numSpotShadows = v, S.numSpotMaps = y, S.numLightProbes = x, r.version = zm++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = t.matrixWorldInverse;
		for (let t = 0, p = e.length; t < p; t++) {
			let p = e[t];
			if (p.isSunLight) {
				let e = r.sun[n];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), n++;
			} else if (p.isDirectionalLight) {
				let e = r.directional[s];
				e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), s++;
			} else if (p.isSpotLight) {
				let e = r.spot[l];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), l++;
			} else if (p.isRectAreaLight) {
				let e = r.rectArea[u];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), o.identity(), a.copy(p.matrixWorld), a.premultiply(f), o.extractRotation(a), e.halfWidth.set(p.width * .5, 0, 0), e.halfHeight.set(0, p.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), u++;
			} else if (p.isPointLight) {
				let e = r.point[c];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), c++;
			} else if (p.isHemisphereLight) {
				let e = r.hemi[d];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), d++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function Hm(e) {
	let t = new Vm(e), n = [], r = [], i = [];
	function a(e) {
		u.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		e.isLightProbeGrid ? i.push(e) : n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c() {
		t.setup(n), i.sort((e, t) => e.priority - t.priority || e.id - t.id);
	}
	function l(e) {
		t.setupView(n, e);
	}
	let u = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: u,
		setupLights: c,
		setupLightsView: l,
		pushLight: o,
		pushShadow: s
	};
}
function Um(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new Hm(e), t.set(n, [a])) : r >= i.length ? (a = new Hm(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var Wm = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", Gm = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", Km = [
	/*@__PURE__*/ new q(1, 0, 0),
	/*@__PURE__*/ new q(-1, 0, 0),
	/*@__PURE__*/ new q(0, 1, 0),
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, 0, 1),
	/*@__PURE__*/ new q(0, 0, -1)
], qm = [
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, 0, 1),
	/*@__PURE__*/ new q(0, 0, -1),
	/*@__PURE__*/ new q(0, -1, 0),
	/*@__PURE__*/ new q(0, -1, 0)
], Jm = /*@__PURE__*/ new Y(), Ym = /*@__PURE__*/ new q(), Xm = /*@__PURE__*/ new q();
function Zm(e, t, n) {
	let r = new Bl(), i = new Io(), a = new Io(), o = new ts(), s = new ku(), c = new Au(), l = {}, u = n.maxTextureSize, d = {
		0: 1,
		1: 0,
		2: 2
	}, f = new Tu({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new Io() },
			radius: { value: 4 }
		},
		vertexShader: Wm,
		fragmentShader: Gm
	}), p = f.clone();
	p.defines.HORIZONTAL_PASS = 1;
	let m = new Ic();
	m.setAttribute("position", new xc(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let h = new ul(m, f), g = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let _ = this.type;
	this.render = function(t, n, s) {
		if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (G("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
		let c = e.getRenderTarget(), l = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), f = e.state;
		f.setBlending(0), f.buffers.depth.getReversed() === !0 ? f.buffers.color.setClear(0, 0, 0, 0) : f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
		let p = _ !== this.type;
		p && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let c = 0, l = t.length; c < l; c++) {
			let l = t[c], d = l.shadow;
			if (d === void 0) {
				G("WebGLShadowMap:", l, "has no shadow.");
				continue;
			}
			if (d.autoUpdate === !1 && d.needsUpdate === !1) continue;
			i.copy(d.mapSize);
			let m = d.getFrameExtents();
			i.multiply(m), a.copy(d.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / m.x), i.x = a.x * m.x, d.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / m.y), i.y = a.y * m.y, d.mapSize.y = a.y));
			let h = e.state.buffers.depth.getReversed();
			if (d.camera._reversedDepth = h, d.map === null || p === !0) {
				if (d.map !== null && (d.map.depthTexture !== null && (d.map.depthTexture.dispose(), d.map.depthTexture = null), d.map.dispose()), this.type === 3) {
					if (l.isPointLight) {
						G("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					d.map = new rs(i.x, i.y, {
						format: Yi,
						type: Ii,
						minFilter: Ei,
						magFilter: Ei,
						generateMipmaps: !1
					}), d.map.texture.name = l.name + ".shadowMap", d.map.depthTexture = new fu(i.x, i.y, Fi), d.map.depthTexture.name = l.name + ".shadowMapDepth", d.map.depthTexture.format = Gi, d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = Ci, d.map.depthTexture.magFilter = Ci;
				} else l.isPointLight ? (d.map = new mf(i.x), d.map.depthTexture = new pu(i.x, Pi)) : (d.map = new rs(i.x, i.y), d.map.depthTexture = new fu(i.x, i.y, Pi)), d.map.depthTexture.name = l.name + ".shadowMap", d.map.depthTexture.format = Gi, this.type === 1 ? (d.map.depthTexture.compareFunction = h ? 518 : 515, d.map.depthTexture.minFilter = Ei, d.map.depthTexture.magFilter = Ei) : (d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = Ci, d.map.depthTexture.magFilter = Ci);
				d.camera.updateProjectionMatrix();
			}
			d.map.isWebGLCubeRenderTarget !== !0 && (d.map.width !== i.x || d.map.height !== i.y) && d.map.setSize(i.x, i.y);
			let g = d.map.isWebGLCubeRenderTarget ? 6 : d.getViewportCount();
			l.isPointLight !== !0 && d.updateMatrices(l, s);
			let _ = d.camera.layers.mask & 4294967294 ? d.camera.layers : s.layers;
			for (let t = 0; t < g; t++) {
				let i = d.getCamera(t);
				if (l.isPointLight) {
					let e = d.camera, n = d.matrix, r = l.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), Ym.setFromMatrixPosition(l.matrixWorld), e.position.copy(Ym), Xm.copy(e.position), Xm.add(Km[t]), e.up.copy(qm[t]), e.lookAt(Xm), e.updateMatrixWorld(), n.makeTranslation(-Ym.x, -Ym.y, -Ym.z), Jm.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), d._frustum.setFromProjectionMatrix(Jm, e.coordinateSystem, e.reversedDepth);
				}
				if (d.map.isWebGLCubeRenderTarget) e.setRenderTarget(d.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(d.map), e.clear());
					let n = d.getViewport(t);
					o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), f.viewport(o);
				}
				r = d.getFrustum(t), b(n, s, i, l, _, this.type);
			}
			d.isPointLightShadow !== !0 && this.type === 3 && v(d, s), d.needsUpdate = !1;
		}
		_ = this.type, g.needsUpdate = !1, e.setRenderTarget(c, l, d);
	};
	function v(n, r) {
		let a = t.update(h);
		f.defines.VSM_SAMPLES !== n.blurSamples && (f.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), n.mapPass === null ? n.mapPass = new rs(i.x, i.y, {
			format: Yi,
			type: Ii
		}) : (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) && n.mapPass.setSize(n.map.width, n.map.height), f.uniforms.shadow_pass.value = n.map.depthTexture, f.uniforms.resolution.value.set(n.map.width, n.map.height), f.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, f, h, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value.set(n.map.width, n.map.height), p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, h, null);
	}
	function y(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? c : s, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = l[e];
			r === void 0 && (r = {}, l[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", x)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? d[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function b(n, i, a, o, s, c) {
		if (n.visible === !1) return;
		if (n.layers.test(s) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && c === 3) && (!n.frustumCulled || n.intersectsFrustum(r))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), s = n.material;
			if (Array.isArray(s)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = s[u.materialIndex];
					if (d && d.visible) {
						let t = y(n, d, o, c);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (s.visible) {
				let t = y(n, s, o, c);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let l = n.children;
		for (let e = 0, t = l.length; e < t; e++) b(l[e], i, a, o, s, c);
	}
	function x(e) {
		e.target.removeEventListener("dispose", x);
		for (let t in l) {
			let n = l[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Qm(e, t) {
	function n() {
		let t = !1, n = new ts(), r = null, i = new ts(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? ae(e.DEPTH_TEST) : oe(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = ao[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? ae(e.STENCIL_TEST) : oe(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = {}, l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new X(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, M = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), N = !1, P = 0, F = e.getParameter(e.VERSION);
	F.indexOf("WebGL") === -1 ? F.indexOf("OpenGL ES") !== -1 && (P = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), N = P >= 2) : (P = parseFloat(/^WebGL (\d)/.exec(F)[1]), N = P >= 1);
	let I = null, L = {}, R = e.getParameter(e.SCISSOR_BOX), ee = e.getParameter(e.VIEWPORT), te = new ts().fromArray(R), ne = new ts().fromArray(ee);
	function re(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let ie = {};
	ie[e.TEXTURE_2D] = re(e.TEXTURE_2D, e.TEXTURE_2D, 1), ie[e.TEXTURE_CUBE_MAP] = re(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ie[e.TEXTURE_2D_ARRAY] = re(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), ie[e.TEXTURE_3D] = re(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), ae(e.DEPTH_TEST), o.setFunc(3), me(!1), he(1), ae(e.CULL_FACE), fe(0);
	function ae(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function oe(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function se(t, n) {
		return f[t] !== n && (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function ce(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function le(t) {
		return h !== t && (e.useProgram(t), h = t, !0);
	}
	let ue = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	ue[103] = e.MIN, ue[104] = e.MAX;
	let de = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function fe(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) g === !0 && (oe(e.BLEND), g = !1);
		else if (g === !1 && (ae(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: K("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						K("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						K("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: K("WebGLState: Invalid blending: ", t);
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
		} else a ||= n, o ||= r, s ||= i, (n !== v || a !== x) && (e.blendEquationSeparate(ue[n], ue[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(de[r], de[i], de[o], de[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function pe(t, n) {
		t.side === 2 ? oe(e.CULL_FACE) : ae(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), me(r), t.blending === 1 && t.transparent === !1 ? fe(0) : fe(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), _e(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? ae(e.SAMPLE_ALPHA_TO_COVERAGE) : oe(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function me(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function he(t) {
		t === 0 ? oe(e.CULL_FACE) : (ae(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function ge(t) {
		t !== k && (N && e.lineWidth(t), k = t);
	}
	function _e(t, n, r) {
		t ? (ae(e.POLYGON_OFFSET_FILL), (A !== n || j !== r) && (A = n, j = r, o.getReversed() && (n = -n, r = -r), e.polygonOffset(n, r))) : oe(e.POLYGON_OFFSET_FILL);
	}
	function ve(t) {
		t ? ae(e.SCISSOR_TEST) : oe(e.SCISSOR_TEST);
	}
	function ye(t) {
		t === void 0 && (t = e.TEXTURE0 + M - 1), I !== t && (e.activeTexture(t), I = t);
	}
	function z(t, n, r) {
		r === void 0 && (r = I === null ? e.TEXTURE0 + M - 1 : I);
		let i = L[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, L[r] = i), (i.type !== t || i.texture !== n) && (I !== r && (e.activeTexture(r), I = r), e.bindTexture(t, n || ie[t]), i.type = t, i.texture = n);
	}
	function be() {
		let t = L[I];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function B() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function V() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function H() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function xe() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function U() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function W() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function Se() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function Ce() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function we() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			K("WebGLState:", e);
		}
	}
	function Ee(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function De(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function Oe(t) {
		te.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), te.copy(t));
	}
	function ke(t) {
		ne.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), ne.copy(t));
	}
	function Ae(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), e.uniformBlockBinding(n, i, i), r.set(t, i));
	}
	function je(t, n, r) {
		let i = l.get(n).get(t);
		c[i] !== r && (e.bindBufferBase(e.UNIFORM_BUFFER, i, r), c[i] = r);
	}
	function Me() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, I = null, L = {}, f = {}, c = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new X(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, te.set(0, 0, e.canvas.width, e.canvas.height), ne.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: ae,
		disable: oe,
		bindFramebuffer: se,
		drawBuffers: ce,
		useProgram: le,
		setBlending: fe,
		setMaterial: pe,
		setFlipSided: me,
		setCullFace: he,
		setLineWidth: ge,
		setPolygonOffset: _e,
		setScissorTest: ve,
		activeTexture: ye,
		bindTexture: z,
		unbindTexture: be,
		compressedTexImage2D: B,
		compressedTexImage3D: V,
		texImage2D: we,
		texImage3D: Te,
		pixelStorei: De,
		getParameter: Ee,
		updateUBOMapping: Ae,
		uniformBlockBinding: je,
		texStorage2D: Se,
		texStorage3D: Ce,
		texSubImage2D: H,
		texSubImage3D: xe,
		compressedTexSubImage2D: U,
		compressedTexSubImage3D: W,
		scissor: Oe,
		viewport: ke,
		reset: Me
	};
}
function $m(e, t, n, r, i, a, o) {
	let s = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Io(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set(), f, p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set(), h = new FinalizationRegistry((e) => m.delete(e)), g = !1;
	try {
		g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function _(e, t) {
		return g ? new OffscreenCanvas(e, t) : Qa("canvas");
	}
	function v(e, t, n) {
		let r = 1, i = Se(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				f === void 0 && (f = _(n, a));
				let o = t ? _(n, a) : f;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), G("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && G("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function y(e) {
		return e.generateMipmaps;
	}
	function b(t) {
		e.generateMipmap(t);
	}
	function x(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function S(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			G("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || G("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = r;
		if (r === e.RED && (i === e.FLOAT && (l = e.R32F), i === e.HALF_FLOAT && (l = e.R16F), i === e.UNSIGNED_BYTE && (l = e.R8), i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT), i === e.SHORT && c && (l = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.R8UI), i === e.UNSIGNED_SHORT && (l = e.R16UI), i === e.UNSIGNED_INT && (l = e.R32UI), i === e.BYTE && (l = e.R8I), i === e.SHORT && (l = e.R16I), i === e.INT && (l = e.R32I)), r === e.RG && (i === e.FLOAT && (l = e.RG32F), i === e.HALF_FLOAT && (l = e.RG16F), i === e.UNSIGNED_BYTE && (l = e.RG8), i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT), i === e.SHORT && c && (l = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RG8UI), i === e.UNSIGNED_SHORT && (l = e.RG16UI), i === e.UNSIGNED_INT && (l = e.RG32UI), i === e.BYTE && (l = e.RG8I), i === e.SHORT && (l = e.RG16I), i === e.INT && (l = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGB8UI), i === e.UNSIGNED_SHORT && (l = e.RGB16UI), i === e.UNSIGNED_INT && (l = e.RGB32UI), i === e.BYTE && (l = e.RGB8I), i === e.SHORT && (l = e.RGB16I), i === e.INT && (l = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI), i === e.UNSIGNED_SHORT && (l = e.RGBA16UI), i === e.UNSIGNED_INT && (l = e.RGBA32UI), i === e.BYTE && (l = e.RGBA8I), i === e.SHORT && (l = e.RGBA16I), i === e.INT && (l = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), i === e.SHORT && c && (l = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? Ga : Wo.getTransfer(o);
			i === e.FLOAT && (l = e.RGBA32F), i === e.HALF_FLOAT && (l = e.RGBA16F), i === e.UNSIGNED_BYTE && (l = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1);
		}
		return (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) && t.get("EXT_color_buffer_float"), l;
	}
	function C(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, G("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function w(e, t) {
		return y(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function T(e) {
		let t = new WeakRef(e);
		r.get(e).__ref = t, m.add(t), h.register(e, t, t);
	}
	function E(e) {
		let t = r.get(e).__ref;
		t !== void 0 && (m.delete(t), h.unregister(t));
	}
	function D(e) {
		k(e.target);
	}
	function O(e) {
		A(e.target);
	}
	function k(e) {
		e.removeEventListener("dispose", D), E(e), M(e), e.isVideoTexture && u.delete(e), e.isHTMLTexture && d.delete(e);
	}
	function A(e) {
		e.removeEventListener("dispose", O), E(e), P(e);
	}
	function j() {
		for (let e of m) {
			let t = e.deref();
			t !== void 0 && (t.isRenderTarget === !0 ? A(t) : k(t));
		}
		m.clear(), d.clear();
	}
	function M(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = p.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && N(e), Object.keys(i).length === 0 && p.delete(n);
		}
		r.remove(e);
	}
	function N(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = p.get(i);
		delete a[n.__cacheKey], o.memory.textures--;
	}
	function P(t) {
		let n = r.get(t);
		n.__depthDisposeCallback && n.__depthDisposeCallback();
		let i = t.depthTexture;
		if (i && i.renderTarget === t && k(i), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let a = t.textures;
		for (let t = 0, n = a.length; t < n; t++) {
			let n = r.get(a[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), o.memory.textures--), r.remove(a[t]);
		}
		r.remove(t);
	}
	let F = 0;
	function I() {
		F = 0;
	}
	function L() {
		return F;
	}
	function R(e) {
		F = e;
	}
	function ee() {
		let e = F;
		return e >= i.maxTextures && G("WebGLTextures: Trying to use " + (e + 1) + " texture units while this GPU supports only " + i.maxTextures), F += 1, e;
	}
	function te(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.mipmapsAutoUpdate), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function ne(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && U(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) G("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) G("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				pe(a, t, i);
				return;
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function re(t, i) {
		let a = r.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version ? pe(a, t, i) : (t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null), n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i));
	}
	function ie(t, i) {
		let a = r.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version ? pe(a, t, i) : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function ae(t, i) {
		let a = r.get(t);
		t.version > 0 && a.__version !== t.version ? me(a, t, i) : n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let oe = {
		[bi]: e.REPEAT,
		[xi]: e.CLAMP_TO_EDGE,
		[Si]: e.MIRRORED_REPEAT
	}, se = {
		[Ci]: e.NEAREST,
		[wi]: e.NEAREST_MIPMAP_NEAREST,
		[Ti]: e.NEAREST_MIPMAP_LINEAR,
		[Ei]: e.LINEAR,
		[Di]: e.LINEAR_MIPMAP_NEAREST,
		[Oi]: e.LINEAR_MIPMAP_LINEAR
	}, ce = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function le(n, a) {
		if (a.type === 1015 && t.has("OES_texture_float_linear") === !1 && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && G("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, oe[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, oe[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, oe[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, se[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, se[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ce[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function ue(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", D), T(n));
		let i = n.source, a = p.get(i);
		a === void 0 && (a = {}, p.set(i, a));
		let s = te(n);
		if (s !== t.__cacheKey) {
			a[s] === void 0 && (a[s] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, o.memory.textures++, r = !0), a[s].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && N(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture;
		}
		return r;
	}
	function de(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function fe(t, r, i, a) {
		let o = t.updateRanges;
		if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
		else {
			o.sort((e, t) => e.start - t.start);
			let s = 0;
			for (let e = 1; e < o.length; e++) {
				let t = o[s], n = o[e], i = t.start + t.count, a = de(n.start, r.width, 4), c = de(t.start, r.width, 4);
				n.start <= i + 1 && a === c && de(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, o[s] = n);
			}
			o.length = s + 1;
			let c = n.getParameter(e.UNPACK_ROW_LENGTH), l = n.getParameter(e.UNPACK_SKIP_PIXELS), u = n.getParameter(e.UNPACK_SKIP_ROWS);
			n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
			for (let t = 0, s = o.length; t < s; t++) {
				let s = o[t], c = Math.floor(s.start / 4), l = Math.ceil(s.count / 4), u = c % r.width, d = Math.floor(c / r.width), f = l;
				n.pixelStorei(e.UNPACK_SKIP_PIXELS, u), n.pixelStorei(e.UNPACK_SKIP_ROWS, d), n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
			}
			t.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, c), n.pixelStorei(e.UNPACK_SKIP_PIXELS, l), n.pixelStorei(e.UNPACK_SKIP_ROWS, u);
		}
	}
	function pe(t, o, s) {
		let c = e.TEXTURE_2D;
		(o.isDataArrayTexture || o.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), o.isData3DTexture && (c = e.TEXTURE_3D);
		let l = ue(t, o), u = o.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
		let f = r.get(u);
		if (u.version !== f.__version || l === !0) {
			if (n.activeTexture(e.TEXTURE0 + s), !(typeof ImageBitmap < "u" && o.image instanceof ImageBitmap)) {
				let t = Wo.getPrimaries(Wo.workingColorSpace), r = o.colorSpace === "" ? null : Wo.getPrimaries(o.colorSpace), i = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
			let t = v(o.image, !1, i.maxTextureSize);
			t = W(o, t);
			let r = a.convert(o.format, o.colorSpace), p = a.convert(o.type), m = S(o.internalFormat, r, p, o.normalized, o.colorSpace, o.isVideoTexture);
			le(c, o);
			let h, g = o.mipmaps, _ = o.isVideoTexture !== !0, x = f.__version === void 0 || l === !0, T = u.dataReady, E = w(o, t);
			if (o.isDepthTexture) m = C(o.format === Ki, o.type), x && (_ ? n.texStorage2D(e.TEXTURE_2D, 1, m, t.width, t.height) : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, null));
			else if (o.isDataTexture) {
				if (g.length > 0) {
					_ && x && n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height);
					for (let t = 0, i = g.length; t < i; t++) h = g[t], _ ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data) : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data);
					o.generateMipmaps = !1;
				} else _ ? (x && n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height), T && fe(o, t, r, p)) : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, t.data);
			} else if (o.isCompressedTexture) {
				if (o.isCompressedArrayTexture) {
					_ && x && n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, g[0].width, g[0].height, t.depth);
					for (let i = 0, a = g.length; i < a; i++) if (h = g[i], o.format !== 1023) {
						if (r !== null) {
							if (_) {
								if (T) {
									if (o.layerUpdates.size > 0) {
										let t = ef(h.width, h.height, o.format, o.type);
										for (let a of o.layerUpdates) {
											let o = h.data.subarray(a * t / h.data.BYTES_PER_ELEMENT, (a + 1) * t / h.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, a, h.width, h.height, 1, r, o);
										}
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, h.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, h.data, 0, 0);
						} else G("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else _ ? T && n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, p, h.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, r, p, h.data);
					o.layerUpdates.size > 0 && o.clearLayerUpdates();
				} else {
					_ && x && n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height);
					for (let t = 0, i = g.length; t < i; t++) h = g[t], o.format === 1023 ? _ ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data) : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data) : r === null ? G("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : _ ? T && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, h.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, h.data);
				}
			} else if (o.isDataArrayTexture) {
				if (_) {
					if (x && n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, t.width, t.height, t.depth), T) {
						if (o.layerUpdates.size > 0) {
							let i = ef(t.width, t.height, o.format, o.type);
							for (let a of o.layerUpdates) {
								let o = t.data.subarray(a * i / t.data.BYTES_PER_ELEMENT, (a + 1) * i / t.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, p, o);
							}
							o.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
			} else if (o.isData3DTexture) _ ? (x && n.texStorage3D(e.TEXTURE_3D, E, m, t.width, t.height, t.depth), T && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data)) : n.texImage3D(e.TEXTURE_3D, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
			else if (o.isFramebufferTexture) {
				if (x) {
					if (_) n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
					else {
						let i = t.width, a = t.height;
						for (let t = 0; t < E; t++) n.texImage2D(e.TEXTURE_2D, t, m, i, a, 0, r, p, null), i >>= 1, a >>= 1;
					}
				}
			} else if (o.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let n = e.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), t.parentNode !== n) {
						n.appendChild(t), d.add(o), n.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of d) t.includes(e.image) && (e.needsUpdate = !0);
						}, n.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (g.length > 0) {
				if (_ && x) {
					let t = Se(g[0]);
					n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height);
				}
				for (let t = 0, i = g.length; t < i; t++) h = g[t], _ ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, h) : n.texImage2D(e.TEXTURE_2D, t, m, r, p, h);
				o.generateMipmaps = !1;
			} else if (_) {
				if (x) {
					let r = Se(t);
					n.texStorage2D(e.TEXTURE_2D, E, m, r.width, r.height);
				}
				T && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t);
			} else n.texImage2D(e.TEXTURE_2D, 0, m, r, p, t);
			y(o) && o.mipmapsAutoUpdate === !0 && b(c), f.__version = u.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function me(t, o, s) {
		if (o.image.length !== 6) return;
		let c = ue(t, o), l = o.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
		let u = r.get(l);
		if (l.version !== u.__version || c === !0) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = Wo.getPrimaries(Wo.workingColorSpace), r = o.colorSpace === "" ? null : Wo.getPrimaries(o.colorSpace), d = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
			let f = o.isCompressedTexture || o.image[0].isCompressedTexture, p = o.image[0] && o.image[0].isDataTexture, m = [];
			for (let e = 0; e < 6; e++) !f && !p ? m[e] = v(o.image[e], !0, i.maxCubemapSize) : m[e] = p ? o.image[e].image : o.image[e], m[e] = W(o, m[e]);
			let h = m[0], g = a.convert(o.format, o.colorSpace), _ = a.convert(o.type), x = S(o.internalFormat, g, _, o.normalized, o.colorSpace), T = o.isVideoTexture !== !0, E = u.__version === void 0 || c === !0, D = l.dataReady, O = w(o, h);
			le(e.TEXTURE_CUBE_MAP, o);
			let k;
			if (o.isDepthTexture) {
				if (x = C(o.format === Ki, o.type), E) {
					if (T) n.texStorage2D(e.TEXTURE_CUBE_MAP, 1, x, h.width, h.height);
					else for (let t = 0; t < 6; t++) n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, h.width, h.height, 0, g, _, null);
				}
			} else if (f) {
				T && E && n.texStorage2D(e.TEXTURE_CUBE_MAP, O, x, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					k = m[t].mipmaps;
					for (let r = 0; r < k.length; r++) {
						let i = k[r];
						o.format === 1023 ? T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, x, i.width, i.height, 0, g, _, i.data) : g === null ? G("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : T ? D && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, x, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (k = o.mipmaps, T && E) {
					k.length > 0 && O++;
					let t = Se(m[0]);
					n.texStorage2D(e.TEXTURE_CUBE_MAP, O, x, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (p) {
					T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, m[t].width, m[t].height, g, _, m[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, m[t].width, m[t].height, 0, g, _, m[t].data);
					for (let r = 0; r < k.length; r++) {
						let i = k[r].image[t].image;
						T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, g, _, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, i.width, i.height, 0, g, _, i.data);
					}
				} else {
					T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, m[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, g, _, m[t]);
					for (let r = 0; r < k.length; r++) {
						let i = k[r];
						T ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, g, _, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, g, _, i.image[t]);
					}
				}
			}
			y(o) && o.mipmapsAutoUpdate === !0 && b(e.TEXTURE_CUBE_MAP), u.__version = l.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function he(t, i, o, c, l, u) {
		let d = a.convert(o.format, o.colorSpace), f = a.convert(o.type), p = S(o.internalFormat, d, f, o.normalized, o.colorSpace), m = r.get(i), h = r.get(o);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> u), r = Math.max(1, i.height >> u);
			l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(l, u, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), xe(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, H(i)) : (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function ge(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = C(n.stencilBuffer, a), c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			xe(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, H(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, H(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let o = t[i], c = a.convert(o.format, o.colorSpace), l = a.convert(o.type), u = S(o.internalFormat, c, l, o.normalized, o.colorSpace);
				xe(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, H(n), u, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, H(n), u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function _e(t, i, a) {
		let o = i.isWebGLCubeRenderTarget === !0;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let c = r.get(i.depthTexture);
		c.__renderTarget = i;
		let l = o ? i.depthTexture.image[0] : i.depthTexture.image;
		c.__webglTexture && l.width === i.width && l.height === i.height || (l.width = i.width, l.height = i.height, i.depthTexture.needsUpdate = !0), o ? ae(i.depthTexture, 0) : ne(i.depthTexture, 0);
		let u = c.__webglTexture, d = H(i), f = o ? e.TEXTURE_CUBE_MAP_POSITIVE_X + a : e.TEXTURE_2D, p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) xe(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else if (i.depthTexture.format === 1027) xe(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function ve(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) for (let e = 0; e < 6; e++) _e(i.__webglFramebuffer[e], t, e);
			else t.texture.mipmaps.length > 0 ? _e(i.__webglFramebuffer[0], t, 0) : _e(i.__webglFramebuffer, t, 0);
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), ge(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else if (t.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), ge(i.__webglDepthbuffer, t, !1);
		else {
			let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
			e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function ye(t, n, i) {
		let a = r.get(t);
		n !== void 0 && he(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && ve(t);
	}
	function z(t) {
		let i = t.texture, s = r.get(t), c = r.get(i);
		t.addEventListener("dispose", O), T(t);
		let l = t.textures, u = t.isWebGLCubeRenderTarget === !0, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, o.memory.textures++), u) {
			s.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps.length > 0) {
				s.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) s.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else s.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps.length > 0) {
				s.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) s.__webglFramebuffer[t] = e.createFramebuffer();
			} else s.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), o.memory.textures++);
			}
			if (t.samples > 0 && xe(t) === !1) {
				s.__webglMultisampledFramebuffer = e.createFramebuffer(), s.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					s.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), o = a.convert(r.type), c = S(r.internalFormat, i, o, r.normalized, r.colorSpace, t.isXRRenderTarget === !0), u = H(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (s.__webglDepthRenderbuffer = e.createRenderbuffer(), ge(s.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), le(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) he(s.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else he(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			y(i) ? b(e.TEXTURE_CUBE_MAP) : i.mipmaps.length > 0 && e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAX_LEVEL, i.mipmaps.length - 1), n.unbindTexture();
		} else if (d) {
			for (let i = 0, a = l.length; i < a; i++) {
				let a = l[i], o = r.get(a), c = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(c, o.__webglTexture), le(c, a), he(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0), y(a) && b(c);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), le(r, i), i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) he(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else he(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			y(i) ? b(r) : i.mipmaps.length > 0 && e.texParameteri(r, e.TEXTURE_MAX_LEVEL, i.mipmaps.length - 1), n.unbindTexture();
		}
		t.depthBuffer && ve(t);
	}
	function be(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (y(a) && a.mipmapsAutoUpdate === !0) {
				let t = x(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), b(t), n.unbindTexture();
			}
		}
	}
	let B = [];
	function V(t) {
		if (t.samples > 0) {
			if (xe(t) === !1) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, u = r.get(t), d = i.length > 1;
				if (d) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer), t.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), d) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), c === !0 && (B.length = 0, B.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && B.push(l), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, B));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), d) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && c) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function H(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function xe(e) {
		let n = r.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function U(e) {
		let t = o.render.frame;
		u.get(e) !== t && (u.set(e, t), e.update());
	}
	function W(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (Wo.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && G("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : K("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function Se(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (l.width = e.naturalWidth || e.width, l.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (l.width = e.displayWidth, l.height = e.displayHeight) : (l.width = e.width, l.height = e.height), l;
	}
	this.allocateTextureUnit = ee, this.resetTextureUnits = I, this.getTextureUnits = L, this.setTextureUnits = R, this.setTexture2D = ne, this.setTexture2DArray = re, this.setTexture3D = ie, this.setTextureCube = ae, this.rebindTextures = ye, this.setupRenderTarget = z, this.updateRenderTargetMipmap = be, this.updateMultisampleRenderTarget = V, this.setupDepthRenderbuffer = ve, this.setupFrameBufferTexture = he, this.useMultisampledRTT = xe, this.dispose = j;
}
function eh(e, t) {
	function n(n, r = "") {
		let i, a = Wo.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
				if (n === 37488) return i.COMPRESSED_R11_EAC;
				if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
				if (n === 37490) return i.COMPRESSED_RG11_EAC;
				if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var th = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", nh = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", rh = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new mu(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Tu({
				vertexShader: th,
				fragmentShader: nh,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new ul(new gu(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, ih = class extends oo {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, d = null, f = null, p = null, m = typeof XRWebGLBinding < "u", h = new rh(), g = {}, _ = t.getContextAttributes(), v = null, y = null, b = [], x = [], S = new Io(), C = null, w = null, T = new Ed();
		T.viewport = new ts();
		let E = new Ed();
		E.viewport = new ts();
		let D = [T, E], O = new Bd(), k = null, A = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Fs(), b[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Fs(), b[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Fs(), b[e] = t), t.getHandSpace();
		};
		function j(e) {
			let t = x.indexOf(e.inputSource);
			if (t === -1) return;
			let n = b[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function M() {
			r.removeEventListener("select", j), r.removeEventListener("selectstart", j), r.removeEventListener("selectend", j), r.removeEventListener("squeeze", j), r.removeEventListener("squeezestart", j), r.removeEventListener("squeezeend", j), r.removeEventListener("end", M), r.removeEventListener("inputsourceschange", N);
			for (let e = 0; e < b.length; e++) {
				let t = x[e];
				t !== null && (x[e] = null, b[e].disconnect(t));
			}
			k = null, A = null, h.reset();
			for (let e in g) delete g[e];
			if (e.setRenderTarget(v), f = null, d = null, u = null, r = null, y = null, R.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(S.width, S.height, !1), w !== null) {
				let e = w.camera;
				e.fov = w.fov, e.zoom = w.zoom, e.updateProjectionMatrix(), w = null;
			}
			n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && G("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && G("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return d === null ? f : d;
		}, this.getBinding = function() {
			return u === null && m && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return p;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (v = e.getRenderTarget(), r.addEventListener("select", j), r.addEventListener("selectstart", j), r.addEventListener("selectend", j), r.addEventListener("squeeze", j), r.addEventListener("squeezestart", j), r.addEventListener("squeezeend", j), r.addEventListener("end", M), r.addEventListener("inputsourceschange", N), _.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(S), m && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					_.depth && (o = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = _.stencil ? Ki : Gi, a = _.stencil ? zi : Pi);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), d = u.createProjectionLayer(s), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new rs(d.textureWidth, d.textureHeight, {
						format: Wi,
						type: ki,
						depthTexture: new fu(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: _.stencil,
						colorSpace: e.outputColorSpace,
						samples: _.antialias ? 4 : 0,
						resolveDepthBuffer: d.ignoreDepthValues === !1,
						resolveStencilBuffer: d.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: d.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: _.antialias,
						alpha: !0,
						depth: _.depth,
						stencil: _.stencil,
						framebufferScaleFactor: i
					};
					f = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new rs(f.framebufferWidth, f.framebufferHeight, {
						format: Wi,
						type: ki,
						colorSpace: e.outputColorSpace,
						stencilBuffer: _.stencil,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: f.ignoreDepthValues === !1
					});
				}
				y.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), R.setContext(r), R.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return h.getDepthTexture();
		};
		function N(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = x.indexOf(n);
				r >= 0 && (x[r] = null, b[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = x.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < b.length; e++) if (e >= x.length) {
						x.push(n), r = e;
						break;
					} else if (x[e] === null) {
						x[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = b[r];
				i && i.connect(n);
			}
		}
		function P(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			h.texture !== null && (h.depthNear > 0 && (t = h.depthNear), h.depthFar > 0 && (n = h.depthFar)), O.near = E.near = T.near = t, O.far = E.far = T.far = n, (k !== O.near || A !== O.far) && (r.updateRenderState({
				depthNear: O.near,
				depthFar: O.far
			}), k = O.near, A = O.far), O.layers.mask = e.layers.mask | 6, T.layers.mask = O.layers.mask & -5, E.layers.mask = O.layers.mask & -3;
			let i = e.parent, a = O.cameras;
			P(O, i);
			for (let e = 0; e < a.length; e++) P(a[e], i);
			O.projectionMatrix.copy(T.projectionMatrix), O.projectionMatrixInverse.copy(T.projectionMatrixInverse), w === null && e.isPerspectiveCamera && (w = {
				camera: e,
				fov: e.fov,
				zoom: e.zoom
			}), F(e, O, i);
		};
		function F(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = uo * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return O;
		}, this.getFoveation = function() {
			if (d !== null || f !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, d !== null && (d.fixedFoveation = e), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return h.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return h.getMesh(O);
		}, this.getCameraTexture = function(e) {
			return g[e];
		};
		let I = null;
		function L(t, i) {
			if (l = i.getViewerPose(c || a), p = i, l !== null) {
				let t = l.views;
				f !== null && (e.setRenderTargetFramebuffer(y, f.framebuffer), e.setRenderTarget(y));
				let i = !1;
				t.length !== O.cameras.length && (O.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (f !== null) a = f.getViewport(r);
					else {
						let t = u.getViewSubImage(d, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(y, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(y));
					}
					let o = D[n];
					o === void 0 && (o = new Ed(), o.layers.enable(n), o.viewport = new ts(), D[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (O.matrix.copy(o.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), i === !0 && O.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && m) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && h.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && m) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = g[n];
							e || (e = new mu(), g[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < b.length; e++) {
				let t = x[e], n = b[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			I && I(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), p = null;
		}
		let R = new nf();
		R.setAnimationLoop(L), this.setAnimationLoop = function(e) {
			I = e;
		}, this.dispose = function() {};
	}
}, ah = /*@__PURE__*/ new Y(), oh = /*@__PURE__*/ new J();
oh.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function sh(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, xu(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(ah.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(oh), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.diffuseRoughness > 0 && (e.diffuseRoughness.value = t.diffuseRoughness, t.diffuseRoughnessMap && (e.diffuseRoughnessMap.value = t.diffuseRoughnessMap, n(t.diffuseRoughnessMap, e.diffuseRoughnessMapTransform))), t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.retroreflectivity > 0 && (e.retroreflectivity.value = t.retroreflectivity), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessMinimum, e.iridescenceThicknessMaximum.value = t.iridescenceThicknessMaximum, t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function ch(e, t, n, r) {
	let i = {}, a = {};
	function o(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n, i[e.id]);
	}
	function s(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = c(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let u = t.render.frame;
		a[e.id] !== u && (l(e), a[e.id] = u);
	}
	function c(t) {
		let n = e.createBuffer(), r = t.__size, i = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, n), e.bufferData(e.UNIFORM_BUFFER, r, i), e.bindBuffer(e.UNIFORM_BUFFER, null), n;
	}
	function l(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) u(t[n], e, n, a);
			else u(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function u(t, n, r, i) {
		if (f(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = h(i, !0);
					d(i, t.__data, e), e += a.storage / Float32Array.BYTES_PER_ELEMENT;
				}
			} else d(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function d(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[n] = e : e.isMatrix3 ? (t[n] = e.elements[0], t[n + 1] = e.elements[1], t[n + 2] = e.elements[2], t[n + 3] = 0, t[n + 4] = e.elements[3], t[n + 5] = e.elements[4], t[n + 6] = e.elements[5], t[n + 7] = 0, t[n + 8] = e.elements[6], t[n + 9] = e.elements[7], t[n + 10] = e.elements[8], t[n + 11] = 0) : ArrayBuffer.isView(e) ? t.set(e.subarray(0, t.length - n), n) : e.toArray(t, n);
	}
	function f(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (Array.isArray(i)) {
			r[a] === void 0 && (r[a] = []);
			let e = r[a], t = !1;
			for (let n = 0; n < i.length; n++) p(i[n], e, n) === !0 && (t = !0);
			return t;
		}
		return p(i, r, a);
	}
	function p(e, t, n) {
		if (t[n] === void 0) return t[n] = typeof e == "number" || typeof e == "boolean" ? e : ArrayBuffer.isView(e) ? e.slice() : e.clone(), !0;
		{
			let r = t[n];
			if (typeof e == "number" || typeof e == "boolean") {
				if (r !== e) return t[n] = e, !0;
			} else if (ArrayBuffer.isView(e)) return !0;
			else if (r.equals(e) === !1) return r.copy(e), !0;
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let i = 0, a = r.length; i < a; i++) {
				let a = r[i], o = Array.isArray(a.value) ? a.value : [a.value], s = Array.isArray(t[e]) || Array.isArray(a.value), c = n;
				for (let e = 0, t = o.length; e < t; e++) {
					let t = o[e], r = h(t, s), i = n % 16, a = i % r.boundary, l = i + a;
					n += a, l !== 0 && 16 - l < r.storage && (n += 16 - l), e === 0 && (c = n), n += r.storage;
				}
				a.__data = new (a.type === "int" ? Int32Array : a.type === "uint" ? Uint32Array : Float32Array)((n - c) / Float32Array.BYTES_PER_ELEMENT), a.__offset = c;
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e, t) {
		let n = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (n.boundary = 4, n.storage = 4) : e.isVector2 ? (n.boundary = 8, n.storage = 8) : e.isVector3 || e.isColor ? (n.boundary = 16, n.storage = 12) : e.isVector4 ? (n.boundary = 16, n.storage = 16) : e.isMatrix3 ? (n.boundary = 16, n.storage = 48) : e.isMatrix4 ? (n.boundary = 16, n.storage = 64) : e.isTexture ? G("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (n.boundary = 16, n.storage = e.byteLength) : G("WebGLRenderer: Unsupported uniform value type.", e), t === !0 && (n.boundary = 16, n.storage = Math.ceil(n.storage / 16) * 16), n;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		i = {}, a = {};
	}
	return {
		bind: o,
		update: s,
		dispose: _
	};
}
var lh = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), uh = null;
function dh() {
	return uh === null && (uh = new wl(lh, 16, 16, Yi, Ii), uh.name = "DFG_LUT", uh.minFilter = Ei, uh.magFilter = Ei, uh.wrapS = xi, uh.wrapT = xi, uh.generateMipmaps = !1, uh.needsUpdate = !0), uh;
}
var fh = class {
	constructor(e = {}) {
		let { canvas: t = $a(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1, outputBufferType: f = ki } = e;
		this.isWebGLRenderer = !0;
		let p;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			p = n.getContextAttributes().alpha;
		} else p = a;
		let m = f, h = /* @__PURE__ */ new Set([
			Zi,
			Xi,
			Ji
		]), g = /* @__PURE__ */ new Set([
			ki,
			Pi,
			Mi,
			zi,
			Li,
			Ri
		]), _ = /* @__PURE__ */ new Uint32Array(4), v = /* @__PURE__ */ new Int32Array(4), y = {
			textures: [],
			min: [],
			max: [],
			resolution: []
		}, b = null, x = null, S = [], C = [], w = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			diagnostics: { keywords: !1 },
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let T = this, E = !1, D = null, O = null, k = null, A = null;
		this._outputColorSpace = Ua;
		let j = 0, M = 0, N = null, P = -1, F = null, I = new ts(), L = new ts(), R = null, ee = new X(0), te = 0, ne = t.width, re = t.height, ie = 1, ae = null, oe = null, se = new ts(0, 0, ne, re), ce = new ts(0, 0, ne, re), le = !1, ue = new Bl(), de = new Hl(), fe = !1, pe = !1, me = new Y(), he = new q(), ge = new ts(), _e = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, ve = !1;
		function ye() {
			return N === null ? ie : 1;
		}
		let z = n;
		function be(e, n) {
			return t.getContext(e, n);
		}
		let B, V, H, xe, U, W, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re;
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"), t.addEventListener("webglcontextlost", Ve, !1), t.addEventListener("webglcontextrestored", He, !1), t.addEventListener("webglcontextcreationerror", Ue, !1), z === null) {
				let t = "webgl2";
				if (z = be(t, e), z === null) throw be(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
			ze();
		} catch (e) {
			throw t.removeEventListener("webglcontextlost", Ve, !1), t.removeEventListener("webglcontextrestored", He, !1), t.removeEventListener("webglcontextcreationerror", Ue, !1), K("WebGLRenderer: " + e.message), e;
		}
		function ze() {
			B = new Mf(z), B.init(), Ie = new eh(z, B), V = new ff(z, B, e, Ie), H = new Qm(z, B), V.reversedDepthBuffer && d && H.buffers.depth.setReversed(!0), O = z.createFramebuffer(), k = z.createFramebuffer(), A = z.createFramebuffer(), xe = new Ff(z), U = new Mm(), W = new $m(z, B, H, U, V, Ie, xe), Se = new jf(T), Ce = new rf(z), Le = new uf(z, Ce), we = new Nf(z, Ce, xe, Le), Te = new Lf(z, we, Ce, Le, xe), Ne = new If(z, V, W), Ae = new pf(U), Ee = new jm(T, Se, B, V, Le, Ae), De = new sh(T, U), Oe = new Im(), ke = new Um(B), Me = new lf(T, Se, H, Te, p, s), je = new Zm(T, Te, V), Re = new ch(z, xe, V, H), Pe = new df(z, B, xe), Fe = new Pf(z, B, xe), xe.programs = Ee.programs, T.capabilities = V, T.extensions = B, T.properties = U, T.renderLists = Oe, T.shadowMap = je, T.state = H, T.info = xe;
		}
		m !== 1009 && (w = new zf(m, t.width, t.height, o, r, i));
		let Be = new ih(T, z);
		this.xr = Be, this.getContext = function() {
			return z;
		}, this.getContextAttributes = function() {
			return z.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = B.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = B.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return ie;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (ie = e, this.setSize(ne, re, !1));
		}, this.getSize = function(e) {
			return e.set(ne, re);
		}, this.setSize = function(e, n, r = !0) {
			Be.isPresenting ? G("WebGLRenderer: Can't change size while VR device is presenting.") : (ne = e, re = n, t.width = Math.floor(e * ie), t.height = Math.floor(n * ie), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), w !== null && w.setSize(t.width, t.height), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(ne * ie, re * ie).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			ne = e, re = n, ie = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (m === 1009) K("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
			else {
				if (e) {
					for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
						G("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				w.setEffects(e || []);
			}
		}, this.getCurrentViewport = function(e) {
			return e.copy(I);
		}, this.getViewport = function(e) {
			return e.copy(se);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? se.set(e.x, e.y, e.z, e.w) : se.set(e, t, n, r), H.viewport(I.copy(se).multiplyScalar(ye()).round());
		}, this.getScissor = function(e) {
			return e.copy(ce);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? ce.set(e.x, e.y, e.z, e.w) : ce.set(e, t, n, r), H.scissor(L.copy(ce).multiplyScalar(ye()).round());
		}, this.getScissorTest = function() {
			return le;
		}, this.setScissorTest = function(e) {
			H.setScissorTest(le = e);
		}, this.setOpaqueSort = function(e) {
			ae = e;
		}, this.setTransparentSort = function(e) {
			oe = e;
		}, this.getClearColor = function(e) {
			return e.copy(Me.getClearColor());
		}, this.setClearColor = function() {
			Me.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return Me.getClearAlpha();
		}, this.setClearAlpha = function() {
			Me.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (N !== null) {
					let t = N.texture.format;
					e = h.has(t);
				}
				if (e) {
					let e = N.texture.type, t = g.has(e), n = Me.getClearColor(), r = Me.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (_[0] = i, _[1] = a, _[2] = o, _[3] = r, z.clearBufferuiv(z.COLOR, 0, _)) : (v[0] = i, v[1] = a, v[2] = o, v[3] = r, z.clearBufferiv(z.COLOR, 0, v));
				} else r |= z.COLOR_BUFFER_BIT;
			}
			t && (r |= z.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= z.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && z.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), D = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", Ve, !1), t.removeEventListener("webglcontextrestored", He, !1), t.removeEventListener("webglcontextcreationerror", Ue, !1), Me.dispose(), Oe.dispose(), ke.dispose(), W.dispose(), U.dispose(), Se.dispose(), Te.dispose(), we.dispose(), Le.dispose(), Re.dispose(), Ee.dispose(), Be.dispose(), Be.removeEventListener("sessionstart", Xe), Be.removeEventListener("sessionend", Ze), Qe.stop();
		};
		function Ve(e) {
			e.preventDefault(), to("WebGLRenderer: Context Lost."), E = !0;
		}
		function He() {
			to("WebGLRenderer: Context Restored."), E = !1;
			let e = xe.autoReset, t = je.enabled, n = je.autoUpdate, r = je.needsUpdate, i = je.type;
			ze(), xe.autoReset = e, je.enabled = t, je.autoUpdate = n, je.needsUpdate = r, je.type = i;
		}
		function Ue(e) {
			K("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function We(e) {
			let t = e.target;
			t.removeEventListener("dispose", We), Ge(t);
		}
		function Ge(e) {
			Ke(e), U.remove(e);
		}
		function Ke(e) {
			let t = U.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Ee.releaseProgram(e);
			}), e.isShaderMaterial && Ee.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = _e);
			let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = lt(e, t, n, r, i);
			H.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = we.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			Le.setup(i, r, s, n, c);
			let h, g = Pe;
			if (c !== null && (h = Ce.get(c), g = Fe, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (H.setLineWidth(r.wireframeLinewidth * ye()), g.setMode(z.LINES)) : g.setMode(z.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), H.setLineWidth(e * ye()), i.isLineSegments ? g.setMode(z.LINES) : i.isLineLoop ? g.setMode(z.LINE_LOOP) : g.setMode(z.LINE_STRIP);
			} else i.isPoints ? g.setMode(z.POINTS) : i.isSprite && g.setMode(z.TRIANGLES);
			if (i.isBatchedMesh) {
				if (B.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? Ce.get(c).bytesPerElement : 1, o = U.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(z, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function qe(e, t, n, r) {
			D !== null && e.isNodeMaterial && D.setObject(r, e), fe === !0 && Ae.setState(e, n, !1), e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, at(e, t, r), e.side = 0, e.needsUpdate = !0, at(e, t, r), e.side = 2) : at(e, t, r);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), D !== null && D.renderStart(e, t, n), x = ke.get(n), x.init(t), C.push(x), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (x.pushLight(e), e.castShadow && x.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (x.pushLight(e), e.castShadow && x.pushShadow(e));
			}), x.setupLights(), D !== null && D.updateLights(x.state.lightsArray), pe = this.localClippingEnabled, fe = Ae.init(this.clippingPlanes, pe), fe === !0 && Ae.setGlobalState(this.clippingPlanes, t), D !== null && je.render(x.state.shadowsArray, n, t);
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let i = e.material;
				if (i) {
					if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
						let o = i[a];
						qe(o, n, t, e), r.add(o);
					}
					else qe(i, n, t, e), r.add(i);
				}
			}), x = C.pop(), D !== null && D.renderEnd(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						let t = U.get(e).currentProgram;
						(t === void 0 || t.isReady()) && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				B.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let Je = null;
		function Ye(e) {
			Je && Je(e);
		}
		function Xe() {
			Qe.stop();
		}
		function Ze() {
			Qe.start();
		}
		let Qe = new nf();
		Qe.setAnimationLoop(Ye), typeof self < "u" && Qe.setContext(self), this.setAnimationLoop = function(e) {
			Je = e, Be.setAnimationLoop(e), e === null ? Qe.stop() : Qe.start();
		}, Be.addEventListener("sessionstart", Xe), Be.addEventListener("sessionend", Ze), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				K("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (E === !0) return;
			D !== null && D.renderStart(e, t);
			let n = Be.enabled === !0 && Be.isPresenting === !0, r = w !== null && (N === null || n) && w.begin(T, N);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), Be.enabled === !0 && Be.isPresenting === !0 && (w === null || w.isCompositing() === !1) && (Be.cameraAutoUpdate === !0 && Be.updateCamera(t), t = Be.getCamera()), e.isScene === !0 && e.onBeforeRender(T, e, t, N), x = ke.get(e, C.length), x.init(t), x.state.textureUnits = W.getTextureUnits(), C.push(x), me.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), t.isArrayCamera ? de.setFromArrayCamera(t) : ue.setFromProjectionMatrix(me, Ya, t.reversedDepth), pe = this.localClippingEnabled, fe = Ae.init(this.clippingPlanes, pe), b = Oe.get(e, S.length), b.init(), S.push(b), this.info.render.frame++, Be.enabled === !0 && Be.isPresenting === !0) {
				let e = T.xr.getDepthSensingMesh();
				e !== null && $e(e, t, -Infinity, T.sortObjects);
			}
			$e(e, t, 0, T.sortObjects), b.finish(), D !== null && D.updateLights(x.state.lightsArray), T.sortObjects === !0 && b.sort(ae, oe), ve = Be.enabled === !1 || Be.isPresenting === !1 || Be.hasDepthSensing() === !1, ve && Me.addToRenderList(b, e), this.info.autoReset === !0 && this.info.reset(), fe === !0 && Ae.beginShadows();
			let i = x.state.shadowsArray;
			if (je.render(i, e, t), fe === !0 && Ae.endShadows(), (r && w.hasRenderPass()) === !1) {
				let n = b.opaque, r = b.transmissive;
				if (x.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						tt(n, r, e, a);
					}
					ve && Me.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						et(b, e, n, n.viewport);
					}
				} else r.length > 0 && tt(n, r, e, t), ve && Me.render(e), et(b, e, t);
			}
			N !== null && M === 0 && (W.updateMultisampleRenderTarget(N), W.updateRenderTargetMipmap(N)), r && w.end(T), e.isScene === !0 && e.onAfterRender(T, e, t), Le.resetDefaultState(), P = -1, F = null, C.pop(), C.length > 0 ? (x = C[C.length - 1], W.setTextureUnits(x.state.textureUnits), fe === !0 && Ae.setGlobalState(T.clippingPlanes, x.state.camera)) : x = null, S.pop(), b = S.length > 0 ? S[S.length - 1] : null, D !== null && D.renderEnd();
		};
		function $e(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLight) x.pushLight(e), e.castShadow && x.pushShadow(e);
				else if (e.isSprite) {
					let i = t.isArrayCamera ? de : ue;
					if (!e.frustumCulled || e.intersectsFrustum(i)) {
						r && ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);
						let i = Te.update(e), a = e.material;
						a.visible && b.push(e, i, a, n, ge.z, null, t);
					}
				} else if (e.isMesh || e.isLine || e.isPoints) {
					let i = t.isArrayCamera ? de : ue;
					if (!e.frustumCulled || e.intersectsFrustum(i)) {
						let i = Te.update(e), a = e.material;
						if (r && (e.boundingSphere === void 0 ? (i.boundingSphere === null && i.computeBoundingSphere(), ge.copy(i.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), ge.copy(e.boundingSphere.center)), ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)), Array.isArray(a)) {
							let r = i.groups;
							for (let o = 0, s = r.length; o < s; o++) {
								let s = r[o], c = a[s.materialIndex];
								c && c.visible && b.push(e, i, c, n, ge.z, s, t);
							}
						} else a.visible && b.push(e, i, a, n, ge.z, null, t);
					}
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) $e(i[e], t, n, r);
		}
		function et(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			x.setupLightsView(n), fe === !0 && Ae.setGlobalState(T.clippingPlanes, n), r && H.viewport(I.copy(r)), i.length > 0 && nt(i, t, n), a.length > 0 && nt(a, t, n), o.length > 0 && nt(o, t, n), H.buffers.depth.setTest(!0), H.buffers.depth.setMask(!0), H.buffers.color.setMask(!0), H.setPolygonOffset(!1);
		}
		function tt(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (x.state.transmissionRenderTarget[r.id] === void 0) {
				let e = B.has("EXT_color_buffer_half_float") || B.has("EXT_color_buffer_float");
				x.state.transmissionRenderTarget[r.id] = new rs(1, 1, {
					generateMipmaps: !0,
					type: e ? Ii : ki,
					minFilter: Oi,
					samples: Math.max(4, V.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					storeMultisampledDepthBuffer: !1,
					storeMultisampledStencilBuffer: !1,
					colorSpace: Wo.workingColorSpace
				});
			}
			let a = x.state.transmissionRenderTarget[r.id], o = r.viewport || I;
			a.setSize(o.z * T.transmissionResolutionScale, o.w * T.transmissionResolutionScale);
			let s = T.getRenderTarget(), c = T.getActiveCubeFace(), l = T.getActiveMipmapLevel();
			T.setRenderTarget(a), T.getClearColor(ee), te = T.getClearAlpha(), te < 1 && T.setClearColor(16777215, .5), T.clear(), ve && Me.render(n);
			let u = T.toneMapping;
			T.toneMapping = 0;
			let d = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), x.setupLightsView(r), fe === !0 && Ae.setGlobalState(T.clippingPlanes, r), nt(e, n, r), W.updateMultisampleRenderTarget(a), W.updateRenderTargetMipmap(a), B.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, rt(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (W.updateMultisampleRenderTarget(a), W.updateRenderTargetMipmap(a));
			}
			T.setRenderTarget(s, c, l), T.setClearColor(ee, te), d !== void 0 && (r.viewport = d), T.toneMapping = u;
		}
		function nt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && rt(o, t, n, s, l, c);
			}
		}
		function rt(e, t, n, r, i, a) {
			D !== null && i.isNodeMaterial && D.setObject(e, i), e.onBeforeRender(T, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(T, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, T.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, T.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : T.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(T, t, n, r, i, a);
		}
		function it(e) {
			let t = 0;
			for (let n of e) n.texture !== null && t++;
			return t;
		}
		function at(e, t, n) {
			t.isScene !== !0 && (t = _e);
			let r = U.get(e), i = x.state.lights, a = x.state.shadowsArray, o = i.state.version, s = Ee.getParameters(e, i.state, a, t, n, x.state.lightProbeGridArray), c = Ee.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Se.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", We), l = /* @__PURE__ */ new Map(), r.programs = l, r.programVariants = /* @__PURE__ */ new Map());
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return ct(e, s), d;
			} else s.uniforms = Ee.getUniforms(e), D !== null && e.isNodeMaterial && D.build(e, n, s), e.onBeforeCompile(s, T), d = Ee.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = Ae.uniform), ct(e, s), r.needsLights = dt(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.sunLights.value = i.state.sun, f.sunLightShadows.value = i.state.sunShadow, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.sunShadowMatrix.value = i.state.sunShadowMatrix, f.sunShadowCascade.value = i.state.sunShadowCascade, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.numLightProbeGrids = it(x.state.lightProbeGridArray), r.currentProgram = d, r.uniformsList = null, d;
		}
		function ot(e, t, n, r, i) {
			let a = U.get(e), o = a.currentProgram.id + "," + r + "," + i, s = a.programVariants.get(o);
			return s === void 0 ? (s = at(e, t, n), a.programVariants.set(o, s)) : (a.currentProgram = s, a.uniformsList = null, a.outputColorSpace = r, a.toneMapping = i), s;
		}
		function st(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = Jp.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function ct(e, t) {
			let n = U.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function lt(e, t, n, r, i) {
			t.isScene !== !0 && (t = _e), W.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = N === null ? T.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : Wo.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Se.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (N === null || N.isXRRenderTarget === !0) && (h = T.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = U.get(r), b = x.state.lights;
			if (fe === !0 && (pe === !0 || e !== F)) {
				let t = e === F && r.id === P;
				Ae.setState(r, e, t);
			}
			let S = !1, C = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== b.state.version || i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i._colorsTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i._colorsTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? S = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== Ae.numPlanes || v.numIntersection !== Ae.numIntersection) ? S = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.morphTargetsCount === _ && v.numLightProbeGrids === it(x.state.lightProbeGridArray) ? (v.outputColorSpace !== s || v.toneMapping !== h) && (C = !0) : S = !0 : S = !0 : (S = !0, v.__version = r.version);
			let w = v.currentProgram;
			(S === !0 || C === !0) && (w = C === !0 ? ot(r, t, i, s, h) : at(r, t, i), D && r.isNodeMaterial && D.onUpdateProgram(r, w, v));
			let E = !1, O = !1, k = !1, A = w.getUniforms(), j = v.uniforms;
			if (H.useProgram(w.program) && (E = !0, O = !0, k = !0), r.id !== P && (P = r.id, O = !0), E || F !== e) {
				H.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), A.setValue(z, "projectionMatrix", e.projectionMatrix), A.setValue(z, "viewMatrix", e.matrixWorldInverse);
				let t = A.map.cameraPosition;
				t !== void 0 && t.setValue(z, he.setFromMatrixPosition(e.matrixWorld)), V.logarithmicDepthBuffer && A.setValue(z, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && A.setValue(z, "isOrthographic", e.isOrthographicCamera === !0), F !== e && (F = e, O = !0, k = !0);
			}
			if (v.needsLights && (b.state.sunShadowMap.length > 0 && A.setValue(z, "sunShadowMap", b.state.sunShadowMap, W), b.state.directionalShadowMap.length > 0 && A.setValue(z, "directionalShadowMap", b.state.directionalShadowMap, W), b.state.spotShadowMap.length > 0 && A.setValue(z, "spotShadowMap", b.state.spotShadowMap, W), b.state.pointShadowMap.length > 0 && A.setValue(z, "pointShadowMap", b.state.pointShadowMap, W)), i.isSkinnedMesh) {
				A.setOptional(z, i, "bindMatrix"), A.setOptional(z, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), A.setValue(z, "boneTexture", e.boneTexture, W));
			}
			i.isBatchedMesh && (A.setOptional(z, i, "batchingTexture"), A.setValue(z, "batchingTexture", i._matricesTexture, W), A.setOptional(z, i, "batchingIdTexture"), A.setValue(z, "batchingIdTexture", i._indirectTexture, W), A.setOptional(z, i, "batchingColorTexture"), i._colorsTexture !== null && A.setValue(z, "batchingColorTexture", i._colorsTexture, W));
			let M = n.morphAttributes;
			if ((M.position !== void 0 || M.normal !== void 0 || M.color !== void 0) && Ne.update(i, n, w), (O || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, A.setValue(z, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (j.envMapIntensity.value = t.environmentIntensity), j.dfgLUT !== void 0 && (j.dfgLUT.value = dh()), O) {
				if (A.setValue(z, "toneMappingExposure", T.toneMappingExposure), v.needsLights && ut(j, k), a && r.fog === !0 && De.refreshFogUniforms(j, a), De.refreshMaterialUniforms(j, r, ie, re, x.state.transmissionRenderTarget[e.id]), v.needsLights && v.numLightProbeGrids > 0) {
					let e = y, t = 0;
					for (let n of x.state.lightProbeGridArray) n.texture !== null && (e.textures[t] = n.texture, e.min[t] = n.boundingBox.min, e.max[t] = n.boundingBox.max, e.resolution[t] = n.resolution, t++);
					for (let n in e) e[n].length = t;
					j.probesSH.value = e.textures, j.probesMin.value = e.min, j.probesMax.value = e.max, j.probesResolution.value = e.resolution;
				}
				Jp.upload(z, st(v), j, W);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (Jp.upload(z, st(v), j, W), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && A.setValue(z, "center", i.center), A.setValue(z, "modelViewMatrix", i.modelViewMatrix), A.setValue(z, "normalMatrix", i.normalMatrix), A.setValue(z, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					Re.update(n, w), Re.bind(n, w);
				}
			}
			return w;
		}
		function ut(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.sunLights.needsUpdate = t, e.sunLightShadows.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function dt(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return j;
		}, this.getActiveMipmapLevel = function() {
			return M;
		}, this.getRenderTarget = function() {
			return N;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = U.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), U.get(e.texture).__webglTexture = t, U.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = U.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			N = e, j = t, M = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = U.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					H.bindFramebuffer(z.FRAMEBUFFER, o.__webglFramebuffer), I.copy(e.viewport), L.copy(e.scissor), R = e.scissorTest, H.viewport(I), H.scissor(L), H.setScissorTest(R), P = -1;
					return;
				}
				if (o.__webglFramebuffer === void 0) W.setupRenderTarget(e);
				else if (o.__hasExternalTextures) W.rebindTextures(e, U.get(e.texture).__webglTexture, U.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && U.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						W.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = U.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && W.useMultisampledRTT(e) === !1 ? U.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, I.copy(e.viewport), L.copy(e.scissor), R = e.scissorTest;
			} else I.copy(se).multiplyScalar(ie).floor(), L.copy(ce).multiplyScalar(ie).floor(), R = le;
			if (n !== 0 && (r = O), H.bindFramebuffer(z.FRAMEBUFFER, r) && H.drawBuffers(e, r), H.viewport(I), H.scissor(L), H.setScissorTest(R), i) {
				let r = U.get(e.texture);
				z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = U.get(e.textures[t]);
					z.framebufferTextureLayer(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = U.get(e.texture);
				z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, t.__webglTexture, n);
			}
			P = -1;
		};
		function ft(e) {
			let t = U.get(e);
			return (t.__readFormat !== e.format || t.__readType !== e.type) && (t.__readFormat = e.format, t.__readType = e.type, t.__formatReadable = V.textureFormatReadable(e.format), t.__typeReadable = V.textureTypeReadable(e.type)), t;
		}
		this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				K("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = U.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o], Array.isArray(c) && (c = c[0])), c) {
				H.bindFramebuffer(z.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					e.textures.length > 1 && z.readBuffer(z.COLOR_ATTACHMENT0 + s);
					let u = ft(o);
					if (u.__formatReadable === !1) {
						K("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (u.__typeReadable === !1) {
						K("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && z.readPixels(t, n, r, i, Ie.convert(c), Ie.convert(l), a);
				} finally {
					let e = N === null ? null : U.get(N).__webglFramebuffer;
					H.bindFramebuffer(z.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = U.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o], Array.isArray(c) && (c = c[0])), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					H.bindFramebuffer(z.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					e.textures.length > 1 && z.readBuffer(z.COLOR_ATTACHMENT0 + s);
					let d = ft(o);
					if (d.__formatReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (d.__typeReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let f = z.createBuffer();
					z.bindBuffer(z.PIXEL_PACK_BUFFER, f), z.bufferData(z.PIXEL_PACK_BUFFER, a.byteLength, z.STREAM_READ), z.readPixels(t, n, r, i, Ie.convert(l), Ie.convert(u), 0), z.bindBuffer(z.PIXEL_PACK_BUFFER, null);
					let p = N === null ? null : U.get(N).__webglFramebuffer;
					H.bindFramebuffer(z.FRAMEBUFFER, p);
					let m = z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return z.flush(), await io(z, m, 4), z.bindBuffer(z.PIXEL_PACK_BUFFER, f), z.getBufferSubData(z.PIXEL_PACK_BUFFER, 0, a), z.bindBuffer(z.PIXEL_PACK_BUFFER, null), z.deleteBuffer(f), z.deleteSync(m), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			W.setTexture2D(e, 0), z.copyTexSubImage2D(z.TEXTURE_2D, n, 0, 0, o, s, i, a), H.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = Ie.convert(t.format), _ = Ie.convert(t.type), v;
			t.isData3DTexture ? (W.setTexture3D(t, 0), v = z.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (W.setTexture2DArray(t, 0), v = z.TEXTURE_2D_ARRAY) : (W.setTexture2D(t, 0), v = z.TEXTURE_2D), H.activeTexture(z.TEXTURE0), H.pixelStorei(z.UNPACK_FLIP_Y_WEBGL, t.flipY), H.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), H.pixelStorei(z.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = H.getParameter(z.UNPACK_ROW_LENGTH), b = H.getParameter(z.UNPACK_IMAGE_HEIGHT), x = H.getParameter(z.UNPACK_SKIP_PIXELS), S = H.getParameter(z.UNPACK_SKIP_ROWS), C = H.getParameter(z.UNPACK_SKIP_IMAGES);
			H.pixelStorei(z.UNPACK_ROW_LENGTH, h.width), H.pixelStorei(z.UNPACK_IMAGE_HEIGHT, h.height), H.pixelStorei(z.UNPACK_SKIP_PIXELS, l), H.pixelStorei(z.UNPACK_SKIP_ROWS, u), H.pixelStorei(z.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = U.get(e), r = U.get(t), h = U.get(n.__renderTarget), g = U.get(r.__renderTarget);
				H.bindFramebuffer(z.READ_FRAMEBUFFER, h.__webglFramebuffer), H.bindFramebuffer(z.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (z.framebufferTextureLayer(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, U.get(e).__webglTexture, i, d + n), z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, U.get(t).__webglTexture, a, m + n)), z.blitFramebuffer(l, u, l + o, u + s, f, p, f + o, p + s, z.DEPTH_BUFFER_BIT, z.NEAREST);
				H.bindFramebuffer(z.READ_FRAMEBUFFER, null), H.bindFramebuffer(z.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || U.has(e)) {
				let n = U.get(e), r = U.get(t);
				H.bindFramebuffer(z.READ_FRAMEBUFFER, k), H.bindFramebuffer(z.DRAW_FRAMEBUFFER, A);
				for (let e = 0; e < c; e++) w ? z.framebufferTextureLayer(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : z.framebufferTexture2D(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, n.__webglTexture, i), T ? z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : z.framebufferTexture2D(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? z.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : z.copyTexSubImage2D(v, a, f, p, l, u, o, s) : z.blitFramebuffer(l, u, l + o, u + s, f, p, f + o, p + s, z.COLOR_BUFFER_BIT, z.NEAREST);
				H.bindFramebuffer(z.READ_FRAMEBUFFER, null), H.bindFramebuffer(z.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? z.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? z.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : z.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? z.texSubImage2D(z.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? z.compressedTexSubImage2D(z.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : z.texSubImage2D(z.TEXTURE_2D, a, f, p, o, s, g, _, h);
			H.pixelStorei(z.UNPACK_ROW_LENGTH, y), H.pixelStorei(z.UNPACK_IMAGE_HEIGHT, b), H.pixelStorei(z.UNPACK_SKIP_PIXELS, x), H.pixelStorei(z.UNPACK_SKIP_ROWS, S), H.pixelStorei(z.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps === !0 && t.mipmapsAutoUpdate === !0 && z.generateMipmap(v), H.unbindTexture();
		}, this.initRenderTarget = function(e) {
			U.get(e).__webglFramebuffer === void 0 && W.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? W.setTextureCube(e, 0) : e.isData3DTexture ? W.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? W.setTexture2DArray(e, 0) : W.setTexture2D(e, 0), H.unbindTexture();
		}, this.resetState = function() {
			j = 0, M = 0, N = null, H.reset(), Le.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return Ya;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = Wo._getDrawingBufferColorSpace(e), t.unpackColorSpace = Wo._getUnpackColorSpace();
	}
};
// node_modules/three/examples/jsm/utils/BufferGeometryUtils.js
function ph(e, t) {
	if (t === 0) return e;
	if (t === 2 || t === 1) {
		let n = e.getIndex();
		if (n === null) {
			let t = [], r = e.getAttribute("position");
			if (r !== void 0) {
				for (let e = 0; e < r.count; e++) t.push(e);
				e.setIndex(t), n = e.getIndex();
			} else return e;
		}
		let r = n.count - 2, i = [];
		if (t === 2) for (let e = 1; e <= r; e++) i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1));
		else for (let e = 0; e < r; e++) e % 2 == 0 ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2))) : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
		return i.length / 3, e.setIndex(i), e.clearGroups(), e;
	}
	return e;
}
// node_modules/three/examples/jsm/utils/SkeletonUtils.js
function mh(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = e.clone();
	return hh(e, r, function(e, r) {
		t.set(r, e), n.set(e, r);
	}), r.traverse(function(e) {
		if (!e.isSkinnedMesh) return;
		let r = e, i = t.get(e), a = i.skeleton.bones;
		r.skeleton = i.skeleton.clone(), r.bindMatrix.copy(i.bindMatrix), r.skeleton.bones = a.map(function(e) {
			return n.get(e);
		}), r.bind(r.skeleton, r.bindMatrix);
	}), r;
}
function hh(e, t, n) {
	n(e, t);
	for (let r = 0; r < e.children.length; r++) hh(e.children[r], t.children[r], n);
}
// node_modules/three/examples/jsm/loaders/GLTFLoader.js
var gh = class extends od {
	constructor(e) {
		super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
			return new Sh(e);
		}), this.register(function(e) {
			return new Ch(e);
		}), this.register(function(e) {
			return new wh(e);
		}), this.register(function(e) {
			return new Nh(e);
		}), this.register(function(e) {
			return new Ph(e);
		}), this.register(function(e) {
			return new Fh(e);
		}), this.register(function(e) {
			return new Eh(e);
		}), this.register(function(e) {
			return new Dh(e);
		}), this.register(function(e) {
			return new Oh(e);
		}), this.register(function(e) {
			return new kh(e);
		}), this.register(function(e) {
			return new xh(e);
		}), this.register(function(e) {
			return new Ah(e);
		}), this.register(function(e) {
			return new Th(e);
		}), this.register(function(e) {
			return new Mh(e);
		}), this.register(function(e) {
			return new jh(e);
		}), this.register(function(e) {
			return new yh(e);
		}), this.register(function(e) {
			return new Ih(e, $.EXT_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new Ih(e, $.KHR_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new Lh(e);
		});
	}
	load(e, t, n, r) {
		let i = this, a;
		if (this.resourcePath !== "") a = this.resourcePath;
		else if (this.path !== "") {
			let t = Pd.extractUrlBase(e);
			a = Pd.resolveURL(t, this.path);
		} else a = Pd.extractUrlBase(e);
		this.manager.itemStart(e);
		let o = function(t) {
			r && r(t), i.manager.itemError(e), i.manager.itemEnd(e);
		}, s = new ld(this.manager);
		s.setPriority(this.priority), s.setCache(this.cache), s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(n) {
			try {
				i.parse(n, a, function(n) {
					t(n), i.manager.itemEnd(e);
				}, o);
			} catch (e) {
				o(e);
			}
		}, n, o);
	}
	setDRACOLoader(e) {
		return this.dracoLoader = e, this;
	}
	setKTX2Loader(e) {
		return this.ktx2Loader = e, this;
	}
	setMeshoptDecoder(e) {
		return this.meshoptDecoder = e, this;
	}
	register(e) {
		return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
	}
	unregister(e) {
		return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
	}
	parse(e, t, n, r) {
		let i, a = {}, o = {}, s = new TextDecoder();
		if (typeof e == "string") i = JSON.parse(e);
		else if (e instanceof ArrayBuffer) {
			if (s.decode(new Uint8Array(e, 0, 4)) === Rh) {
				try {
					a[$.KHR_BINARY_GLTF] = new Vh(e);
				} catch (e) {
					r && r(e);
					return;
				}
				i = JSON.parse(a[$.KHR_BINARY_GLTF].content);
			} else i = JSON.parse(s.decode(e));
		} else i = e;
		if (i.asset === void 0 || i.asset.version[0] < 2) {
			r && r(/* @__PURE__ */ Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
			return;
		}
		let c = new pg(i, {
			path: t || this.resourcePath || "",
			crossOrigin: this.crossOrigin,
			priority: this.priority,
			cache: this.cache,
			withCredentials: this.withCredentials,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder
		});
		c.fileLoader.setRequestHeader(this.requestHeader);
		for (let e = 0; e < this.pluginCallbacks.length; e++) {
			let t = this.pluginCallbacks[e](c);
			t.name, o[t.name] = t, a[t.name] = !0;
		}
		if (i.extensionsUsed) for (let e = 0; e < i.extensionsUsed.length; ++e) {
			let t = i.extensionsUsed[e], n = i.extensionsRequired || [];
			switch (t) {
				case $.KHR_MATERIALS_UNLIT:
					a[t] = new bh();
					break;
				case $.KHR_DRACO_MESH_COMPRESSION:
					a[t] = new Hh(i, this.dracoLoader);
					break;
				case $.KHR_TEXTURE_TRANSFORM:
					a[t] = new Uh();
					break;
				case $.KHR_MESH_QUANTIZATION:
					a[t] = new Wh();
					break;
				default: n.indexOf(t) >= 0 && o[t];
			}
		}
		c.setExtensions(a), c.setPlugins(o), c.parse(n, r);
	}
	parseAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.parse(e, t, r, i);
		});
	}
};
function _h() {
	let e = {};
	return {
		get: function(t) {
			return e[t];
		},
		add: function(t, n) {
			e[t] = n;
		},
		remove: function(t) {
			delete e[t];
		},
		removeAll: function() {
			e = {};
		}
	};
}
function vh(e, t, n) {
	let r = e.json.materials[t];
	return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
var $ = {
	KHR_BINARY_GLTF: "KHR_binary_glTF",
	KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
	KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
	KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
	KHR_MATERIALS_DIFFUSE_ROUGHNESS: "KHR_materials_diffuse_roughness",
	KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
	KHR_MATERIALS_IOR: "KHR_materials_ior",
	KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
	KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
	KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
	KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
	KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
	KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
	KHR_MATERIALS_VOLUME: "KHR_materials_volume",
	KHR_TEXTURE_BASISU: "KHR_texture_basisu",
	KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
	KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
	KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
	EXT_MATERIALS_BUMP: "EXT_materials_bump",
	EXT_TEXTURE_WEBP: "EXT_texture_webp",
	EXT_TEXTURE_AVIF: "EXT_texture_avif",
	EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
	KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
	EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}, yh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_LIGHTS_PUNCTUAL, this.cache = {
			refs: {},
			uses: {}
		};
	}
	_markDefs() {
		let e = this.parser, t = this.parser.json.nodes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
		}
	}
	_loadLight(e) {
		let t = this.parser, n = "light:" + e, r = t.cache.get(n);
		if (r) return r;
		let i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e], o, s = new X(16777215);
		a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], Wa);
		let c = a.range === void 0 ? 0 : a.range;
		switch (a.type) {
			case "directional":
				o = new Nd(s), o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			case "point":
				o = new Ad(s), o.distance = c;
				break;
			case "spot":
				o = new Od(s), o.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle, a.spot.outerConeAngle = a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle, o.angle = a.spot.outerConeAngle, o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			default: throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
		}
		return o.position.set(0, 0, 0), ag(o, a), a.intensity !== void 0 && (o.intensity = a.intensity), o.name = t.createUniqueName(a.name || "light_" + e), r = Promise.resolve(o), t.cache.add(n, r), r;
	}
	getDependency(e, t) {
		if (e === "light") return this._loadLight(t);
	}
	createNodeAttachment(e) {
		let t = this, n = this.parser, r = n.json.nodes[e], i = (r.extensions && r.extensions[this.name] || {}).light;
		return i === void 0 ? null : this._loadLight(i).then(function(e) {
			return n._getNodeRef(t.cache, i, e);
		});
	}
}, bh = class {
	constructor() {
		this.name = $.KHR_MATERIALS_UNLIT;
	}
	getMaterialType() {
		return Qc;
	}
	extendParams(e, t, n) {
		let r = [];
		e.color = new X(1, 1, 1), e.opacity = 1;
		let i = t.pbrMetallicRoughness;
		if (i) {
			if (Array.isArray(i.baseColorFactor)) {
				let t = i.baseColorFactor;
				e.color.setRGB(t[0], t[1], t[2], Wa), e.opacity = t[3];
			}
			i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, "map", i.baseColorTexture, Ua));
		}
		return Promise.all(r);
	}
}, xh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_EMISSIVE_STRENGTH;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
	}
}, Sh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_CLEARCOAT;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (r.push(this.parser.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
			let e = n.clearcoatNormalTexture.scale;
			t.clearcoatNormalScale = new Io(e, e);
		}
		return Promise.all(r);
	}
}, Ch = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_DIFFUSE_ROUGHNESS;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return t.diffuseRoughness = n.diffuseRoughnessFactor === void 0 ? 0 : n.diffuseRoughnessFactor, n.diffuseRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "diffuseRoughnessMap", n.diffuseRoughnessTexture)), Promise.all(r);
	}
}, wh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_DISPERSION;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		return n === null || (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion), Promise.resolve();
	}
}, Th = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_IRIDESCENCE;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessMinimum = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessMaximum = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(r);
	}
}, Eh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_SHEEN;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (t.sheenColor = new X(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
			let e = n.sheenColorFactor;
			t.sheenColor.setRGB(e[0], e[1], e[2], Wa);
		}
		return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, Ua)), n.sheenRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(r);
	}
}, Dh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_TRANSMISSION;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && r.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(r);
	}
}, Oh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_VOLUME;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor, n.thicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || Infinity;
		let i = n.attenuationColor || [
			1,
			1,
			1
		];
		return t.attenuationColor = new X().setRGB(i[0], i[1], i[2], Wa), Promise.all(r);
	}
}, kh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_IOR;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		return n === null || (t.ior = n.ior === void 0 ? 1.5 : n.ior, t.ior === 0 && (t.ior = 1e3)), Promise.resolve();
	}
}, Ah = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_SPECULAR;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.specularIntensity = n.specularFactor === void 0 ? 1 : n.specularFactor, n.specularTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularIntensityMap", n.specularTexture));
		let i = n.specularColorFactor || [
			1,
			1,
			1
		];
		return t.specularColor = new X().setRGB(i[0], i[1], i[2], Wa), n.specularColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, Ua)), Promise.all(r);
	}
}, jh = class {
	constructor(e) {
		this.parser = e, this.name = $.EXT_MATERIALS_BUMP;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor, n.bumpTexture !== void 0 && r.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(r);
	}
}, Mh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_MATERIALS_ANISOTROPY;
	}
	getMaterialType(e) {
		return vh(this.parser, e, this.name) === null ? null : Ou;
	}
	extendMaterialParams(e, t) {
		let n = vh(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && r.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(r);
	}
}, Nh = class {
	constructor(e) {
		this.parser = e, this.name = $.KHR_TEXTURE_BASISU;
	}
	loadTexture(e) {
		let t = this.parser, n = t.json, r = n.textures[e];
		if (!r.extensions || !r.extensions[this.name]) return null;
		let i = r.extensions[this.name], a = t.options.ktx2Loader;
		if (!a) {
			if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
			return null;
		}
		return t.loadTextureImage(e, i.source, a);
	}
}, Ph = class {
	constructor(e) {
		this.parser = e, this.name = $.EXT_TEXTURE_WEBP;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return n.loadTextureImage(e, a.source, s);
	}
}, Fh = class {
	constructor(e) {
		this.parser = e, this.name = $.EXT_TEXTURE_AVIF;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return n.loadTextureImage(e, a.source, s);
	}
}, Ih = class {
	constructor(e, t) {
		this.name = t, this.parser = e;
	}
	loadBufferView(e) {
		let t = this.parser.json, n = t.bufferViews[e];
		if (n.extensions && n.extensions[this.name]) {
			let e = n.extensions[this.name], r = this.parser.getDependency("buffer", e.buffer), i = this.parser.options.meshoptDecoder;
			if (!i || !i.supported) {
				if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
				return null;
			}
			return r.then(function(t) {
				let n = e.byteOffset || 0, r = e.byteLength || 0, a = e.count, o = e.byteStride, s = new Uint8Array(t, n, r);
				return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function(e) {
					return e.buffer;
				}) : i.ready.then(function() {
					let t = new ArrayBuffer(a * o);
					return i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t;
				});
			});
		}
		return null;
	}
}, Lh = class {
	constructor(e) {
		this.name = $.EXT_MESH_GPU_INSTANCING, this.parser = e;
	}
	createNodeMesh(e) {
		let t = this.parser.json, n = t.nodes[e];
		if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
		let r = t.meshes[n.mesh];
		for (let e of r.primitives) if (e.mode !== Jh.TRIANGLES && e.mode !== Jh.TRIANGLE_STRIP && e.mode !== Jh.TRIANGLE_FAN && e.mode !== void 0) return null;
		let i = n.extensions[this.name].attributes, a = [], o = {};
		for (let e in i) a.push(this.parser.getDependency("accessor", i[e]).then((t) => (o[e] = t, o[e])));
		return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((e) => {
			let t = e.pop(), n = t.isGroup ? t.children : [t], r = e[0].count, i = [];
			for (let e of n) {
				let t = new Y(), n = new q(), a = new Lo(), s = new q(1, 1, 1), c = new Il(e.geometry, e.material, r);
				for (let e = 0; e < r; e++) o.TRANSLATION && n.fromBufferAttribute(o.TRANSLATION, e), o.ROTATION && a.fromBufferAttribute(o.ROTATION, e), o.SCALE && s.fromBufferAttribute(o.SCALE, e), c.setMatrixAt(e, t.compose(n, a, s));
				let l = null;
				for (let e in o) if (e === "_COLOR_0") {
					let t = o[e];
					c.instanceColor = new Ol(t.array, t.itemSize, t.normalized);
				} else if (e !== "TRANSLATION" && e !== "ROTATION" && e !== "SCALE") {
					if (l === null) {
						let e = c.geometry;
						l = new Ic(), l.name = e.name;
						for (let t in e.attributes) l.setAttribute(t, e.attributes[t]);
						for (let t in e.morphAttributes) l.morphAttributes[t] = e.morphAttributes[t];
						e.index !== null && l.setIndex(e.index), l.morphTargetsRelative = e.morphTargetsRelative;
						for (let t of e.groups) l.addGroup(t.start, t.count, t.materialIndex);
						e.boundingBox !== null && (l.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (l.boundingSphere = e.boundingSphere.clone()), l.drawRange.start = e.drawRange.start, l.drawRange.count = e.drawRange.count, l.userData = Object.assign({}, e.userData), c.geometry = l;
					}
					let t = o[e];
					l.setAttribute(e, new Ol(t.array, t.itemSize, t.normalized));
				}
				Ms.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), i.push(c);
			}
			return t.isGroup ? (t.clear(), t.add(...i), t) : i[0];
		}));
	}
}, Rh = "glTF", zh = 12, Bh = {
	JSON: 1313821514,
	BIN: 5130562
}, Vh = class {
	constructor(e) {
		this.name = $.KHR_BINARY_GLTF, this.content = null, this.body = null;
		let t = new DataView(e, 0, zh), n = new TextDecoder();
		if (this.header = {
			magic: n.decode(new Uint8Array(e.slice(0, 4))),
			version: t.getUint32(4, !0),
			length: t.getUint32(8, !0)
		}, this.header.magic !== Rh) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
		let r = this.header.length - zh, i = new DataView(e, zh), a = 0;
		for (; a < r;) {
			let t = i.getUint32(a, !0);
			a += 4;
			let r = i.getUint32(a, !0);
			if (a += 4, r === Bh.JSON) {
				let r = new Uint8Array(e, zh + a, t);
				this.content = n.decode(r);
			} else if (r === Bh.BIN) {
				let n = zh + a;
				this.body = e.slice(n, n + t);
			}
			a += t;
		}
		if (this.content === null) throw Error("THREE.GLTFLoader: JSON content not found.");
	}
}, Hh = class {
	constructor(e, t) {
		if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = $.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
	}
	decodePrimitive(e, t) {
		let n = this.json, r = this.dracoLoader, i = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, s = {}, c = {};
		for (let e in a) {
			let t = $h[e] || e.toLowerCase();
			o[t] = a[e];
		}
		for (let t in e.attributes) {
			let r = $h[t] || t.toLowerCase();
			if (a[t] !== void 0) {
				let i = n.accessors[e.attributes[t]];
				c[r] = Yh[i.componentType].name, s[r] = i.normalized === !0;
			}
		}
		return t.getDependency("bufferView", i).then(function(e) {
			return new Promise(function(t, n) {
				r.decodeDracoFile(e, function(e) {
					for (let t in e.attributes) {
						let n = e.attributes[t], r = s[t];
						r !== void 0 && (n.normalized = r);
					}
					t(e);
				}, o, c, Wa, n);
			});
		});
	}
}, Uh = class {
	constructor() {
		this.name = $.KHR_TEXTURE_TRANSFORM;
	}
	extendTexture(e, t) {
		if ((t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) return e;
		if (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), t.rotation !== void 0) {
			let t = Math.cos(e.rotation), n = Math.sin(e.rotation);
			e.matrix.set(e.repeat.x * t, e.repeat.y * n, e.offset.x, -e.repeat.x * n, e.repeat.y * t, e.offset.y, 0, 0, 1), e.matrixAutoUpdate = !1;
		}
		return e.needsUpdate = !0, e;
	}
}, Wh = class {
	constructor() {
		this.name = $.KHR_MESH_QUANTIZATION;
	}
}, Gh = class extends Iu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r * 3 + r;
		for (let e = 0; e !== r; e++) t[e] = n[i + e];
		return t;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = o * 2, c = o * 3, l = r - t, u = (n - t) / l, d = u * u, f = d * u, p = e * c, m = p - c, h = -2 * f + 3 * d, g = f - d, _ = 1 - h, v = g - d + u;
		for (let e = 0; e !== o; e++) {
			let t = a[m + e + o], n = a[m + e + s] * l, r = a[p + e + o], c = a[p + e] * l;
			i[e] = _ * t + v * n + h * r + g * c;
		}
		return i;
	}
}, Kh = new Lo(), qh = class extends Gh {
	interpolate_(e, t, n, r) {
		let i = super.interpolate_(e, t, n, r);
		return Kh.fromArray(i).normalize().toArray(i), i;
	}
}, Jh = {
	FLOAT: 5126,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
}, Yh = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
}, Xh = {
	9728: Ci,
	9729: Ei,
	9984: wi,
	9985: Di,
	9986: Ti,
	9987: Oi
}, Zh = {
	33071: xi,
	33648: Si,
	10497: bi
}, Qh = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
}, $h = {
	POSITION: "position",
	NORMAL: "normal",
	TANGENT: "tangent",
	TEXCOORD_0: "uv",
	TEXCOORD_1: "uv1",
	TEXCOORD_2: "uv2",
	TEXCOORD_3: "uv3",
	COLOR_0: "color",
	WEIGHTS_0: "skinWeight",
	JOINTS_0: "skinIndex"
}, eg = {
	scale: "scale",
	translation: "position",
	rotation: "quaternion",
	weights: "morphTargetInfluences"
}, tg = {
	CUBICSPLINE: void 0,
	LINEAR: Fa,
	STEP: Pa
}, ng = {
	OPAQUE: "OPAQUE",
	MASK: "MASK",
	BLEND: "BLEND"
};
function rg(e) {
	return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Du({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), e.DefaultMaterial;
}
function ig(e, t, n) {
	for (let r in n.extensions) e[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r]);
}
function ag(e, t) {
	t.extras !== void 0 && typeof t.extras == "object" && Object.assign(e.userData, t.extras);
}
function og(e, t, n) {
	let r = !1, i = !1, a = !1;
	for (let e = 0, n = t.length; e < n; e++) {
		let n = t[e];
		if (n.POSITION !== void 0 && (r = !0), n.NORMAL !== void 0 && (i = !0), n.COLOR_0 !== void 0 && (a = !0), r && i && a) break;
	}
	if (!r && !i && !a) return Promise.resolve(e);
	let o = [], s = [], c = [];
	for (let l = 0, u = t.length; l < u; l++) {
		let u = t[l];
		if (r) {
			let t = u.POSITION === void 0 ? e.attributes.position : n.getDependency("accessor", u.POSITION);
			o.push(t);
		}
		if (i) {
			let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency("accessor", u.NORMAL);
			s.push(t);
		}
		if (a) {
			let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency("accessor", u.COLOR_0);
			c.push(t);
		}
	}
	return Promise.all([
		Promise.all(o),
		Promise.all(s),
		Promise.all(c)
	]).then(function(t) {
		let n = t[0], o = t[1], s = t[2];
		return r && (e.morphAttributes.position = n), i && (e.morphAttributes.normal = o), a && (e.morphAttributes.color = s), e.morphTargetsRelative = !0, e;
	});
}
function sg(e, t) {
	if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
	if (t.extras && Array.isArray(t.extras.targetNames)) {
		let n = t.extras.targetNames;
		if (e.morphTargetInfluences.length === n.length) {
			e.morphTargetDictionary = {};
			for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t;
		}
	}
}
function cg(e) {
	let t, n = e.extensions && e.extensions[$.KHR_DRACO_MESH_COMPRESSION];
	if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + lg(n.attributes) : e.indices + ":" + lg(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + lg(e.targets[n]);
	return t;
}
function lg(e) {
	let t = "", n = Object.keys(e).sort();
	for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
	return t;
}
function ug(e) {
	switch (e) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
function dg(e) {
	return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
var fg = new Y(), pg = class {
	constructor(e = {}, t = {}) {
		this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new _h(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
			refs: {},
			uses: {}
		}, this.cameraCache = {
			refs: {},
			uses: {}
		}, this.lightCache = {
			refs: {},
			uses: {}
		}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
		let n = !1, r = -1, i = !1, a = -1;
		if (typeof navigator < "u" && navigator.userAgent !== void 0) {
			let e = navigator.userAgent;
			n = /^((?!chrome|android).)*safari/i.test(e) === !0;
			let t = e.match(/Version\/(\d+)/);
			r = n && t ? parseInt(t[1], 10) : -1, i = e.indexOf("Firefox") > -1, a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1;
		}
		typeof createImageBitmap > "u" || n && r < 17 || i && a < 98 ? (this.textureLoader = new fd(this.options.manager), this.textureLoader.setPriority(this.options.priority), this.textureLoader.setCache(this.options.cache)) : (this.textureLoader = new Id(this.options.manager), this.textureLoader.setPriority(this.options.priority), this.textureLoader.setCache(this.options.cache)), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setWithCredentials(this.options.withCredentials), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new ld(this.options.manager), this.fileLoader.setPriority(this.options.priority), this.fileLoader.setCache(this.options.cache), this.fileLoader.setResponseType("arraybuffer"), (this.options.withCredentials || this.options.crossOrigin === "use-credentials") && this.fileLoader.setWithCredentials(!0);
	}
	setExtensions(e) {
		this.extensions = e;
	}
	setPlugins(e) {
		this.plugins = e;
	}
	parse(e, t) {
		let n = this, r = this.json, i = this.extensions;
		this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
			return e._markDefs && e._markDefs();
		}), Promise.all(this._invokeAll(function(e) {
			return e.beforeRoot && e.beforeRoot();
		})).then(function() {
			return Promise.all([
				n.getDependencies("scene"),
				n.getDependencies("animation"),
				n.getDependencies("camera")
			]);
		}).then(function(t) {
			let a = {
				scene: t[0][r.scene || 0],
				scenes: t[0],
				animations: t[1],
				cameras: t[2],
				asset: r.asset,
				parser: n,
				userData: {}
			};
			return ig(i, a, r), ag(a, r), Promise.all(n._invokeAll(function(e) {
				return e.afterRoot && e.afterRoot(a);
			})).then(function() {
				for (let e of a.scenes) e.updateMatrixWorld();
				e(a);
			});
		}).catch(t);
	}
	_markDefs() {
		let e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n].joints;
			for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
		}
		for (let t = 0, r = e.length; t < r; t++) {
			let r = e[t];
			r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
		}
	}
	_addNodeRef(e, t) {
		t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
	}
	_getNodeRef(e, t, n) {
		if (e.refs[t] <= 1) return n;
		let r = n.clone(), i = (e, t) => {
			let n = this.associations.get(e);
			n != null && this.associations.set(t, n);
			for (let [n, r] of e.children.entries()) i(r, t.children[n]);
		};
		return i(n, r), r.name += "_instance_" + e.uses[t]++, r;
	}
	_invokeOne(e) {
		let t = Object.values(this.plugins);
		t.push(this);
		for (let n = 0; n < t.length; n++) {
			let r = e(t[n]);
			if (r) return r;
		}
		return null;
	}
	_invokeAll(e) {
		let t = Object.values(this.plugins);
		t.unshift(this);
		let n = [];
		for (let r = 0; r < t.length; r++) {
			let i = e(t[r]);
			i && n.push(i);
		}
		return n;
	}
	getDependency(e, t) {
		let n = e + ":" + t, r = this.cache.get(n);
		if (!r) {
			switch (e) {
				case "scene":
					r = this.loadScene(t);
					break;
				case "node":
					r = this._invokeOne(function(e) {
						return e.loadNode && e.loadNode(t);
					});
					break;
				case "mesh":
					r = this._invokeOne(function(e) {
						return e.loadMesh && e.loadMesh(t);
					});
					break;
				case "accessor":
					r = this.loadAccessor(t);
					break;
				case "bufferView":
					r = this._invokeOne(function(e) {
						return e.loadBufferView && e.loadBufferView(t);
					});
					break;
				case "buffer":
					r = this.loadBuffer(t);
					break;
				case "material":
					r = this._invokeOne(function(e) {
						return e.loadMaterial && e.loadMaterial(t);
					});
					break;
				case "texture":
					r = this._invokeOne(function(e) {
						return e.loadTexture && e.loadTexture(t);
					});
					break;
				case "skin":
					r = this.loadSkin(t);
					break;
				case "animation":
					r = this._invokeOne(function(e) {
						return e.loadAnimation && e.loadAnimation(t);
					});
					break;
				case "camera":
					r = this.loadCamera(t);
					break;
				default: if (r = this._invokeOne(function(n) {
					return n != this && n.getDependency && n.getDependency(e, t);
				}), !r) throw Error("Unknown type: " + e);
			}
			this.cache.add(n, r);
		}
		return r;
	}
	getDependencies(e) {
		let t = this.cache.get(e);
		if (!t) {
			let n = this, r = this.json[e + (e === "mesh" ? "es" : "s")] || [];
			t = Promise.all(r.map(function(t, r) {
				return n.getDependency(e, r);
			})), this.cache.add(e, t);
		}
		return t;
	}
	loadBuffer(e) {
		let t = this.json.buffers[e], n = this.fileLoader;
		if (t.type && t.type !== "arraybuffer") throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
		if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[$.KHR_BINARY_GLTF].body);
		let r = this.options;
		return new Promise(function(e, i) {
			n.load(Pd.resolveURL(t.uri, r.path), e, void 0, function() {
				i(/* @__PURE__ */ Error("THREE.GLTFLoader: Failed to load buffer \"" + t.uri + "\"."));
			});
		});
	}
	loadBufferView(e) {
		let t = this.json.bufferViews[e];
		return this.getDependency("buffer", t.buffer).then(function(e) {
			let n = t.byteLength || 0, r = t.byteOffset || 0;
			return e.slice(r, r + n);
		});
	}
	loadAccessor(e) {
		let t = this, n = this.json, r = this.json.accessors[e];
		if (r.bufferView === void 0 && r.sparse === void 0) {
			let e = Qh[r.type], t = Yh[r.componentType], n = r.normalized === !0, i = new t(r.count * e);
			return Promise.resolve(new xc(i, e, n));
		}
		let i = [];
		return r.bufferView === void 0 ? i.push(null) : i.push(this.getDependency("bufferView", r.bufferView)), r.sparse !== void 0 && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then(function(e) {
			let i = e[0], a = Qh[r.type], o = Yh[r.componentType], s = o.BYTES_PER_ELEMENT, c = s * a, l = r.byteOffset || 0, u = r.bufferView === void 0 ? void 0 : n.bufferViews[r.bufferView].byteStride, d = r.normalized === !0, f, p;
			if (u && u !== c) {
				let e = Math.floor(l / u), n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count, c = t.cache.get(n);
				c || (f = new o(i, e * u, r.count * u / s), c = new Lc(f, u / s), t.cache.add(n, c)), p = new Bc(c, a, l % u / s, d);
			} else f = i === null ? new o(r.count * a) : new o(i, l, r.count * a), p = new xc(f, a, d);
			if (r.sparse !== void 0) {
				let t = Qh.SCALAR, n = Yh[r.sparse.indices.componentType], s = r.sparse.indices.byteOffset || 0, c = r.sparse.values.byteOffset || 0, l = new n(e[1], s, r.sparse.count * t), u = new o(e[2], c, r.sparse.count * a);
				i !== null && (p = new xc(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
				for (let e = 0, t = l.length; e < t; e++) {
					let t = l[e];
					if (p.setX(t, u[e * a]), a >= 2 && p.setY(t, u[e * a + 1]), a >= 3 && p.setZ(t, u[e * a + 2]), a >= 4 && p.setW(t, u[e * a + 3]), a >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
				}
				p.normalized = d;
			}
			return p;
		});
	}
	loadTexture(e) {
		let t = this.json, n = this.options, r = t.textures[e].source, i = t.images[r], a = this.textureLoader;
		if (i.uri) {
			let e = n.manager.getHandler(i.uri);
			e !== null && (a = e);
		}
		return this.loadTextureImage(e, r, a);
	}
	loadTextureImage(e, t, n) {
		let r = this, i = this.json, a = i.textures[e], o = i.images[t], s = (o.uri || o.bufferView) + ":" + a.sampler;
		if (this.textureCache[s]) return this.textureCache[s];
		let c = this.loadImageSource(t, n).then(function(t) {
			t.flipY = !1, t.name = a.name || o.name || "", t.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (t.name = o.uri);
			let n = (i.samplers || {})[a.sampler] || {};
			return t.magFilter = Xh[n.magFilter] || 1006, t.minFilter = Xh[n.minFilter] || 1008, t.wrapS = Zh[n.wrapS] || 1e3, t.wrapT = Zh[n.wrapT] || 1e3, t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== 1003 && t.minFilter !== 1006, r.associations.set(t, { textures: e }), t;
		}).catch(function() {
			return null;
		});
		return this.textureCache[s] = c, c;
	}
	loadImageSource(e, t) {
		let n = this, r = this.json, i = this.options;
		if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((e) => e.clone());
		let a = r.images[e], o = self.URL || self.webkitURL, s = a.uri || "", c = !1, l;
		if (t.isKTX2Loader === !0 && a.bufferView !== void 0) l = n.getDependency("bufferView", a.bufferView).then(function(e) {
			return new Promise(function(n, r) {
				t.parse(e, n, r);
			});
		});
		else {
			if (a.bufferView !== void 0) s = n.getDependency("bufferView", a.bufferView).then(function(e) {
				c = !0;
				let t = new Blob([e], { type: a.mimeType });
				return s = o.createObjectURL(t), s;
			});
			else if (a.uri === void 0) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
			l = Promise.resolve(s).then(function(e) {
				return new Promise(function(n, r) {
					let a = n;
					t.isImageBitmapLoader === !0 && (a = function(e) {
						let t = new es(e);
						t.needsUpdate = !0, n(t);
					}), t.load(Pd.resolveURL(e, i.path), a, void 0, r);
				});
			});
		}
		let u = l.then(function(e) {
			return c === !0 && o.revokeObjectURL(s), ag(e, a), e.userData.mimeType = a.mimeType || dg(a.uri), e;
		}).catch(function(e) {
			throw e;
		});
		return this.sourceCache[e] = u, u;
	}
	assignTexture(e, t, n, r) {
		let i = this;
		return this.getDependency("texture", n.index).then(function(a) {
			if (!a) return null;
			if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), i.extensions[$.KHR_TEXTURE_TRANSFORM]) {
				let e = n.extensions === void 0 ? void 0 : n.extensions[$.KHR_TEXTURE_TRANSFORM];
				if (e) {
					let t = i.associations.get(a);
					a = i.extensions[$.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t);
				}
			}
			return r !== void 0 && (a.colorSpace = r), e[t] = a, a;
		});
	}
	assignFinalMaterial(e) {
		let t = e.geometry, n = e.material, r = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
		if (e.isPoints) {
			let e = "PointsMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new ru(), Kc.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t;
		} else if (e.isLine) {
			let e = "LineBasicMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new Ul(), Kc.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t;
		}
		if (r || i || a) {
			let e = "ClonedMaterial:" + n.uuid + ":";
			r && (e += "derivative-tangents:"), i && (e += "vertex-colors:"), a && (e += "flat-shading:");
			let t = this.cache.get(e);
			t || (t = n.clone(), i && (t.vertexColors = !0), a && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t;
		}
		e.material = n;
	}
	getMaterialType() {
		return Du;
	}
	loadMaterial(e) {
		let t = this, n = this.json, r = this.extensions, i = n.materials[e], a, o = {}, s = i.extensions || {}, c = [];
		if (s[$.KHR_MATERIALS_UNLIT]) {
			let e = r[$.KHR_MATERIALS_UNLIT];
			a = e.getMaterialType(), c.push(e.extendParams(o, i, t));
		} else {
			let n = i.pbrMetallicRoughness || {};
			if (o.color = new X(1, 1, 1), o.opacity = 1, Array.isArray(n.baseColorFactor)) {
				let e = n.baseColorFactor;
				o.color.setRGB(e[0], e[1], e[2], Wa), o.opacity = e[3];
			}
			n.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", n.baseColorTexture, Ua)), o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor, o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor, n.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))), a = this._invokeOne(function(t) {
				return t.getMaterialType && t.getMaterialType(e);
			}), c.push(Promise.all(this._invokeAll(function(t) {
				return t.extendMaterialParams && t.extendMaterialParams(e, o);
			})));
		}
		i.doubleSided === !0 && (o.side = 2);
		let l = i.alphaMode || ng.OPAQUE;
		if (l === ng.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === ng.MASK && (o.alphaTest = i.alphaCutoff === void 0 ? .5 : i.alphaCutoff)), i.normalTexture !== void 0 && a !== Qc && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new Io(1, 1), i.normalTexture.scale !== void 0)) {
			let e = i.normalTexture.scale;
			o.normalScale.set(e, e);
		}
		if (i.occlusionTexture !== void 0 && a !== Qc && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && a !== Qc) {
			let e = i.emissiveFactor;
			o.emissive = new X().setRGB(e[0], e[1], e[2], Wa);
		}
		return i.emissiveTexture !== void 0 && a !== Qc && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, Ua)), Promise.all(c).then(function() {
			let n = new a(o);
			return i.name && (n.name = i.name), ag(n, i), t.associations.set(n, { materials: e }), i.extensions && ig(r, n, i), n;
		});
	}
	createUniqueName(e) {
		let t = Qd.sanitizeNodeName(e || "");
		return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
	}
	loadGeometries(e) {
		let t = this, n = this.extensions, r = this.primitiveCache;
		function i(e) {
			return n[$.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
				return hg(n, e, t);
			});
		}
		let a = [];
		for (let n = 0, o = e.length; n < o; n++) {
			let o = e[n], s = cg(o), c = r[s];
			if (c) a.push(c.promise);
			else {
				let e;
				e = o.extensions && o.extensions[$.KHR_DRACO_MESH_COMPRESSION] ? i(o) : hg(new Ic(), o, t), o.mode === Jh.TRIANGLE_STRIP ? e = e.then((e) => ph(e, 1)) : o.mode === Jh.TRIANGLE_FAN && (e = e.then((e) => ph(e, 2))), r[s] = {
					primitive: o,
					promise: e
				}, a.push(e);
			}
		}
		return Promise.all(a);
	}
	loadMesh(e) {
		let t = this, n = this.json, r = this.extensions, i = n.meshes[e], a = i.primitives, o = [];
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e].material === void 0 ? rg(this.cache) : this.getDependency("material", a[e].material);
			o.push(t);
		}
		return o.push(t.loadGeometries(a)), Promise.all(o).then(async function(n) {
			let o = n.slice(0, n.length - 1), s = n[n.length - 1], c = [];
			for (let n = 0, l = s.length; n < l; n++) {
				let l = s[n], u = a[n], d, f = o[n];
				if (u.mode === Jh.TRIANGLES || u.mode === Jh.TRIANGLE_STRIP || u.mode === Jh.TRIANGLE_FAN || u.mode === void 0) {
					let e = i.isSkinnedMesh === !0, t = l.hasAttribute("skinIndex") && l.hasAttribute("skinWeight");
					d = e && t ? new Sl(l, f) : new ul(l, f), d.isSkinnedMesh === !0 && d.normalizeSkinWeights();
				} else if (u.mode === Jh.LINES) d = new tu(l, f);
				else if (u.mode === Jh.LINE_STRIP) d = new Zl(l, f);
				else if (u.mode === Jh.LINE_LOOP) d = new nu(l, f);
				else if (u.mode === Jh.POINTS) d = new cu(l, f);
				else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
				Object.keys(d.geometry.morphAttributes).length > 0 && sg(d, i), d.name = t.createUniqueName(i.name || "mesh_" + e), ag(d, i), u.extensions && ig(r, d, u), t.assignFinalMaterial(d), c.push(d);
			}
			for (let n = 0, r = c.length; n < r; n++) t.associations.set(c[n], {
				meshes: e,
				primitives: n
			});
			if (c.length === 1) return i.extensions && ig(r, c[0], i), c[0];
			let l = new Ns();
			i.extensions && ig(r, l, i), t.associations.set(l, { meshes: e });
			for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
			return l;
		});
	}
	loadCamera(e) {
		let t, n = this.json.cameras[e], r = n[n.type];
		if (r) return n.type === "perspective" ? t = new Ed(Fo.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : n.type === "orthographic" && (t = new jd(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ag(t, n), Promise.resolve(t);
	}
	loadSkin(e) {
		let t = this.json.skins[e], n = [];
		for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
		return t.inverseBindMatrices === void 0 ? n.push(null) : n.push(this.getDependency("accessor", t.inverseBindMatrices)), Promise.all(n).then(function(e) {
			let t = e.pop(), n = e, r = [], i = [];
			for (let e = 0, a = n.length; e < a; e++) {
				let a = n[e];
				if (a) {
					r.push(a);
					let n = new Y();
					t !== null && n.fromArray(t.array, e * 16), i.push(n);
				}
			}
			return new Dl(r, i);
		});
	}
	loadAnimation(e) {
		let t = this.json, n = this, r = t.animations[e], i = r.name ? r.name : "animation_" + e, a = [], o = [], s = [], c = [], l = [];
		for (let e = 0, t = r.channels.length; e < t; e++) {
			let t = r.channels[e], n = r.samplers[t.sampler], i = t.target, u = i.node, d = r.parameters === void 0 ? n.input : r.parameters[n.input], f = r.parameters === void 0 ? n.output : r.parameters[n.output];
			i.node !== void 0 && (a.push(this.getDependency("node", u)), o.push(this.getDependency("accessor", d)), s.push(this.getDependency("accessor", f)), c.push(n), l.push(i));
		}
		return Promise.all([
			Promise.all(a),
			Promise.all(o),
			Promise.all(s),
			Promise.all(c),
			Promise.all(l)
		]).then(function(e) {
			let t = e[0], a = e[1], o = e[2], s = e[3], c = e[4], l = [];
			for (let e = 0, r = t.length; e < r; e++) {
				let r = t[e], i = a[e], u = o[e], d = s[e], f = c[e];
				if (r === void 0) continue;
				r.updateMatrix && r.updateMatrix();
				let p = n._createAnimationTracks(r, i, u, d, f);
				if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
			}
			let u = new ed(i, void 0, l);
			return ag(u, r), u;
		});
	}
	createNodeMesh(e) {
		let t = this.json, n = this, r = t.nodes[e];
		return r.mesh === void 0 ? null : n.getDependency("mesh", r.mesh).then(function(e) {
			let t = n._getNodeRef(n.meshCache, r.mesh, e);
			return r.weights !== void 0 && t.traverse(function(e) {
				if (e.isMesh) for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t];
			}), t;
		});
	}
	loadNode(e) {
		let t = this.json, n = this, r = t.nodes[e], i = n._loadNodeShallow(e), a = [], o = r.children || [];
		for (let e = 0, t = o.length; e < t; e++) a.push(n.getDependency("node", o[e]));
		let s = r.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", r.skin);
		return Promise.all([
			i,
			Promise.all(a),
			s
		]).then(function(e) {
			let t = e[0], n = e[1], r = e[2];
			r !== null && t.traverse(function(e) {
				e.isSkinnedMesh && e.bind(r, fg);
			});
			for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
			if (t.userData.pivot !== void 0 && n.length > 0) {
				let e = t.userData.pivot, r = n[0];
				t.pivot = new q().fromArray(e), t.position.x -= e[0], t.position.y -= e[1], t.position.z -= e[2], r.position.set(0, 0, 0), delete t.userData.pivot;
			}
			return t;
		});
	}
	_loadNodeShallow(e) {
		let t = this.json, n = this.extensions, r = this;
		if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
		let i = t.nodes[e], a = i.name ? r.createUniqueName(i.name) : "", o = [], s = r._invokeOne(function(t) {
			return t.createNodeMesh && t.createNodeMesh(e);
		});
		return s && o.push(s), i.camera !== void 0 && o.push(r.getDependency("camera", i.camera).then(function(e) {
			return r._getNodeRef(r.cameraCache, i.camera, e);
		})), r._invokeAll(function(t) {
			return t.createNodeAttachment && t.createNodeAttachment(e);
		}).forEach(function(e) {
			o.push(e);
		}), this.nodeCache[e] = Promise.all(o).then(function(t) {
			let o;
			if (o = i.isBone === !0 ? new Cl() : t.length > 1 ? new Ns() : t.length === 1 ? t[0] : new Ms(), o !== t[0]) for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
			if (i.name && (o.userData.name = i.name, o.name = a), ag(o, i), i.extensions && ig(n, o, i), i.matrix !== void 0) {
				let e = new Y();
				e.fromArray(i.matrix), o.applyMatrix4(e);
			} else i.translation !== void 0 && o.position.fromArray(i.translation), i.rotation !== void 0 && o.quaternion.fromArray(i.rotation), i.scale !== void 0 && o.scale.fromArray(i.scale);
			if (!r.associations.has(o)) r.associations.set(o, {});
			else if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
				let e = r.associations.get(o);
				r.associations.set(o, { ...e });
			}
			return r.associations.get(o).nodes = e, o;
		}), this.nodeCache[e];
	}
	loadScene(e) {
		let t = this.extensions, n = this.json.scenes[e], r = this, i = new Ns();
		n.name && (i.name = r.createUniqueName(n.name)), ag(i, n), n.extensions && ig(t, i, n);
		let a = n.nodes || [], o = [];
		for (let e = 0, t = a.length; e < t; e++) o.push(r.getDependency("node", a[e]));
		return Promise.all(o).then(function(e) {
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				n.parent === null ? i.add(n) : i.add(mh(n));
			}
			return r.associations = ((e) => {
				let t = /* @__PURE__ */ new Map();
				for (let [e, n] of r.associations) (e instanceof Kc || e instanceof es) && t.set(e, n);
				return e.traverse((e) => {
					let n = r.associations.get(e);
					n != null && t.set(e, n);
				}), t;
			})(i), i;
		});
	}
	_createAnimationTracks(e, t, n, r, i) {
		let a = [], o = e.name ? e.name : e.uuid, s = [];
		function c(e) {
			e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
		}
		eg[i.path] === eg.weights ? (c(e), e.isGroup && e.children.forEach(c)) : s.push(o);
		let l;
		switch (eg[i.path]) {
			case eg.weights:
				l = Yu;
				break;
			case eg.rotation:
				l = Zu;
				break;
			case eg.translation:
			case eg.scale:
				l = $u;
				break;
			default: switch (n.itemSize) {
				case 1:
					l = Yu;
					break;
				default: l = $u;
			}
		}
		let u = r.interpolation === void 0 ? Fa : tg[r.interpolation], d = this._getArrayFromAccessor(n);
		for (let e = 0, n = s.length; e < n; e++) {
			let n = new l(s[e] + "." + eg[i.path], t.array, d, u);
			r.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(n), a.push(n);
		}
		return a;
	}
	_getArrayFromAccessor(e) {
		let t = e.array;
		if (e.normalized) {
			let e = ug(t.constructor), n = new Float32Array(t.length);
			for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
			t = n;
		}
		return t;
	}
	_createCubicSplineTrackInterpolant(e) {
		e.createInterpolant = function(e) {
			return new (this instanceof Zu ? qh : Gh)(this.times, this.values, this.getValueSize() / 3, e);
		}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
	}
};
function mg(e, t, n) {
	let r = t.attributes, i = new rc();
	if (r.POSITION !== void 0) {
		let e = n.json.accessors[r.POSITION], t = e.min, a = e.max;
		if (t !== void 0 && a !== void 0) {
			if (i.set(new q(t[0], t[1], t[2]), new q(a[0], a[1], a[2])), e.normalized) {
				let t = ug(Yh[e.componentType]);
				i.min.multiplyScalar(t), i.max.multiplyScalar(t);
			}
		} else return;
	} else return;
	let a = t.targets;
	if (a !== void 0) {
		let e = new q(), t = new q();
		for (let r = 0, i = a.length; r < i; r++) {
			let i = a[r];
			if (i.POSITION !== void 0) {
				let r = n.json.accessors[i.POSITION], a = r.min, o = r.max;
				if (a !== void 0 && o !== void 0) {
					if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), r.normalized) {
						let e = ug(Yh[r.componentType]);
						t.multiplyScalar(e);
					}
					e.max(t);
				}
			}
		}
		i.expandByVector(e);
	}
	e.boundingBox = i;
	let o = new Oc();
	i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = o;
}
function hg(e, t, n) {
	let r = t.attributes, i = [];
	function a(t, r) {
		return n.getDependency("accessor", t).then(function(t) {
			e.setAttribute(r, t);
		});
	}
	for (let t in r) {
		let n = $h[t] || t.toLowerCase();
		n in e.attributes || i.push(a(r[t], n));
	}
	if (t.indices !== void 0 && !e.index) {
		let r = n.getDependency("accessor", t.indices).then(function(t) {
			e.setIndex(t);
		});
		i.push(r);
	}
	return Wo.workingColorSpace !== "srgb-linear" && "COLOR_0" in r, ag(e, t), mg(e, t, n), Promise.all(i).then(function() {
		return t.targets === void 0 ? e : og(e, t.targets, n);
	});
}
// src/gallery.ts
var gg = String(import.meta.url), _g = (e) => new URL(`models/${e}`, new URL(".", gg)).href, vg = {
	F: {
		prediction: "F",
		url: _g("femal-plaster-head_v2.glb"),
		targetHeight: 1.12,
		rotationY: Math.PI + .14,
		x: -.62,
		layer: 1
	},
	M: {
		prediction: "M",
		url: _g("somewhat_recognizable.glb"),
		targetHeight: 1,
		rotationY: -Math.PI / 2 - .14,
		x: .62,
		layer: 2
	}
}, yg = .34, bg = .05, xg = .26, Sg = .035, Cg = .2, wg = .025, Tg = 3.6, Eg = 1.45, Dg = (e, t, n) => Math.max(t, Math.min(n, e)), Og = class {
	container;
	canvas;
	callbacks;
	renderer;
	scene;
	camera;
	cameraTarget = new q(0, .55, 0);
	clock = new $d();
	reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	statues = {};
	pendingLoads = /* @__PURE__ */ new Set();
	progress = /* @__PURE__ */ new Map();
	missing = /* @__PURE__ */ new Set();
	materialDefaults = /* @__PURE__ */ new WeakMap();
	ambient = null;
	fill = null;
	floor = null;
	contactShadows = [];
	dust = null;
	dustBase = null;
	environmentTexture = null;
	floorTexture = null;
	shadowTexture = null;
	stateTimeline = null;
	resizeObserver = null;
	animationFrame = null;
	running = !1;
	disposed = !1;
	phase = "boot";
	currentReveal = null;
	reducedMotion = this.reducedMotionQuery.matches;
	stageWidth = 1;
	stageHeight = 1;
	initialLoadDone = !1;
	parallaxX = 0;
	parallaxY = 0;
	targetParallaxX = 0;
	targetParallaxY = 0;
	handlePointerMove;
	resetPointer = () => {
		this.targetParallaxX = 0, this.targetParallaxY = 0;
	};
	constructor(e, t, n) {
		this.container = e, this.canvas = t, this.callbacks = n, this.renderer = new fh({
			canvas: t,
			antialias: !0,
			alpha: !0,
			powerPreference: "high-performance"
		}), this.renderer.setClearColor(0, 0), this.renderer.outputColorSpace = Ua, this.renderer.toneMapping = 4, this.renderer.toneMappingExposure = 1.06, this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75)), this.scene = new Hs(), this.scene.fog = new Vs(657672, 4.2, 9.5), this.camera = new Ed(32, 1, .05, 40), this.camera.position.set(0, .7, 3.2), this.camera.layers.enable(0), this.camera.layers.enable(1), this.camera.layers.enable(2), this.stageWidth = Math.max(1, e.clientWidth), this.stageHeight = Math.max(1, e.clientHeight), this.setupEnvironment(), this.setupLights(), this.setupFloor(), this.setupDust(), this.resize(), this.handlePointerMove = (e) => {
			let t = this.container.getBoundingClientRect(), n, r;
			if (e instanceof TouchEvent && e.touches.length > 0) n = e.touches[0].clientX, r = e.touches[0].clientY;
			else if (e instanceof MouseEvent) n = e.clientX, r = e.clientY;
			else return;
			let i = (n - t.left) / t.width * 2 - 1, a = (r - t.top) / t.height * 2 - 1;
			this.targetParallaxX = Dg(i, -1, 1) * .12, this.targetParallaxY = Dg(a, -1, 1) * -.065;
		}, this.reducedMotionQuery.addEventListener("change", this.handleMotionPreference), this.canvas.addEventListener("webglcontextlost", this.handleContextLost, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange), this.container.addEventListener("mousemove", this.handlePointerMove), this.container.addEventListener("touchmove", this.handlePointerMove, { passive: !0 }), this.container.addEventListener("mouseleave", this.resetPointer), this.container.addEventListener("touchend", this.resetPointer, { passive: !0 }), this.resizeObserver = new ResizeObserver(() => this.resize()), this.resizeObserver.observe(e), this.startLoop(), this.loadMissingStatues();
	}
	get isReducedMotion() {
		return this.reducedMotion;
	}
	get currentPhase() {
		return this.phase;
	}
	hasStatue(e) {
		return this.statues[e]?.loaded === !0;
	}
	retryLoad() {
		this.disposed || (this.missing.clear(), this.callbacks.onProgress(0), this.loadMissingStatues());
	}
	enterIdleState(e = .8) {
		this.phase = "idle", this.currentReveal = null, this.killStateTimeline(), this.tweenLightsTo(yg, bg, e), this.applyFraming(this.computeIdleFraming(), e), this.resetRecession(e), this.tweenDustColor(16773340, e);
	}
	enterListeningState() {
		this.phase = "listening", this.currentReveal = null, this.killStateTimeline(), this.resetRecession(.75, !0), this.tweenLightsTo(xg, Sg, .75), this.applyFraming(this.computeIdleFraming(), .9), this.tweenDustColor(16773340, .75);
	}
	enterProcessingState() {
		this.phase = "processing", this.currentReveal = null, this.killStateTimeline(), this.tweenLightsTo(Cg, wg, .55), this.resetRecession(.55), this.tweenDustColor(16773340, .55);
	}
	enterUncertainState() {
		this.phase = "uncertain", this.currentReveal = null, this.killStateTimeline(), this.tweenLightsTo(yg, bg, .9), this.applyFraming(this.computeIdleFraming(), .9), this.resetRecession(.9), this.tweenDustColor(16773340, .9);
	}
	enterErrorState() {
		this.phase = "error", this.currentReveal = null, this.killStateTimeline(), this.tweenLightsTo(yg, bg, .7), this.applyFraming(this.computeIdleFraming(), .7), this.resetRecession(.7), this.tweenDustColor(16773340, .7);
	}
	createRevealTimeline(e) {
		let t = this.statues[e];
		if (!t || !t.loaded) return null;
		this.phase = "reveal", this.currentReveal = e, this.killStateTimeline();
		let n = gi.timeline({ paused: !0 }), r = this.reducedMotion, i = r ? .35 : 2.2, a = e === "M", o = a ? 16765578 : 11065599, s = a ? 13145660 : 8042741, c = a ? 16765578 : 11065599;
		if (this.dust) {
			let e = this.dust.material;
			n.to(e.color, {
				r: (c >> 16 & 255) / 255,
				g: (c >> 8 & 255) / 255,
				b: (c & 255) / 255,
				duration: i,
				ease: "power2.inOut"
			}, .3);
		}
		for (let t of Object.values(this.statues)) if (t) {
			if (t.prediction === e) n.to(t.keyLight.color, {
				r: (o >> 16 & 255) / 255,
				g: (o >> 8 & 255) / 255,
				b: (o & 255) / 255,
				duration: i,
				ease: "power2.inOut",
				overwrite: "auto"
			}, .12), n.to(t.keyLight, {
				intensity: Tg,
				duration: i,
				ease: "power2.inOut",
				overwrite: "auto"
			}, .12), n.to(t.rimLight.color, {
				r: (s >> 16 & 255) / 255,
				g: (s >> 8 & 255) / 255,
				b: (s & 255) / 255,
				duration: r ? .35 : 1.85,
				ease: "power2.inOut",
				overwrite: "auto"
			}, .42), n.to(t.rimLight, {
				intensity: Eg,
				duration: r ? .35 : 1.85,
				ease: "power2.inOut",
				overwrite: "auto"
			}, .42), n.to(t.accentSpot, {
				intensity: e === "F" ? 1.25 : 0,
				duration: r ? .35 : 1.8,
				ease: "power2.inOut",
				overwrite: "auto"
			}, .28), e === "F" && (n.to(t.accentSpot.position, {
				x: vg.M.x + .48,
				duration: r ? .25 : 1,
				ease: "power2.out"
			}, 0), n.to(t.accentSpot.target.position, {
				x: vg.M.x,
				duration: r ? .25 : 1,
				ease: "power2.out"
			}, 0)), n.to(t.group.position, {
				x: vg.M.x,
				duration: r ? .25 : 1,
				ease: "power2.out",
				overwrite: "auto"
			}, 0), n.to(t.group.scale, {
				x: 1,
				y: 1,
				z: 1,
				duration: r ? .25 : 1,
				ease: "power2.out",
				overwrite: "auto"
			}, 0), t.group.traverse((e) => {
				if (!(e instanceof ul)) return;
				let t = Array.isArray(e.material) ? e.material : [e.material];
				for (let e of t) {
					let t = this.materialDefaults.get(e) ?? {
						opacity: 1,
						transparent: !1
					};
					e.transparent = !0, n.to(e, {
						opacity: t.opacity,
						duration: r ? .25 : .8,
						ease: "power2.out",
						overwrite: "auto",
						onComplete: () => {
							e.transparent = t.transparent;
						}
					}, 0);
				}
			});
			else {
				n.to(t.keyLight, {
					intensity: yg,
					duration: r ? .25 : 1.1,
					ease: "power2.out",
					overwrite: "auto"
				}, 0), n.to(t.rimLight, {
					intensity: bg,
					duration: r ? .25 : 1.1,
					ease: "power2.out",
					overwrite: "auto"
				}, 0);
				let e = vg[t.prediction].x + (t.prediction === "M" ? .6 : -.6);
				n.to(t.group.position, {
					x: e,
					duration: r ? .25 : 1.1,
					ease: "none",
					overwrite: "auto"
				}, 0), n.to(t.group.scale, {
					x: .62,
					y: .62,
					z: .62,
					duration: r ? .25 : 1.1,
					ease: "none",
					overwrite: "auto"
				}, 0), t.group.traverse((e) => {
					if (!(e instanceof ul)) return;
					let t = Array.isArray(e.material) ? e.material : [e.material];
					for (let e of t) e && "transparent" in e && (e.transparent = !0, n.to(e, {
						opacity: .14,
						duration: r ? .25 : 1.1,
						ease: "none",
						overwrite: "auto"
					}, 0));
				});
			}
		}
		if (!r) {
			let t = this.computeRevealFraming(e);
			t && this.addFramingTweens(n, t, .12, 2.45);
		}
		return this.stateTimeline = n, n;
	}
	setReducedMotion(e) {
		this.reducedMotion = e;
	}
	resize() {
		if (this.disposed) return;
		let e = Math.max(1, this.container.clientWidth), t = Math.max(1, this.container.clientHeight);
		if (this.stageWidth = e, this.stageHeight = t, this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75)), this.renderer.setSize(e, t, !1), this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.phase === "reveal" && this.currentReveal) {
			let e = this.computeRevealFraming(this.currentReveal);
			e && this.applyFraming(e, .25);
		} else this.phase !== "boot" && this.applyFraming(this.computeIdleFraming(), .25);
	}
	dispose() {
		if (this.disposed) return;
		this.disposed = !0, this.killStateTimeline();
		for (let e of Object.values(this.statues)) e && (gi.killTweensOf(e.keyLight), gi.killTweensOf(e.rimLight), gi.killTweensOf(e.accentSpot), gi.killTweensOf(e.accentSpot.position), gi.killTweensOf(e.accentSpot.target.position));
		this.stopLoop(), this.resizeObserver?.disconnect(), this.resizeObserver = null, this.reducedMotionQuery.removeEventListener("change", this.handleMotionPreference), this.canvas.removeEventListener("webglcontextlost", this.handleContextLost, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange), this.container.removeEventListener("mousemove", this.handlePointerMove), this.container.removeEventListener("touchmove", this.handlePointerMove), this.container.removeEventListener("mouseleave", this.resetPointer), this.container.removeEventListener("touchend", this.resetPointer);
		let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		this.scene.traverse((n) => {
			let r = n;
			r.geometry && e.add(r.geometry);
			let i = r.material;
			Array.isArray(i) ? i.forEach((e) => t.add(e)) : i && t.add(i);
		}), t.forEach((e) => {
			let t = e;
			t.map && n.add(t.map), t.normalMap && n.add(t.normalMap), t.roughnessMap && n.add(t.roughnessMap), t.metalnessMap && n.add(t.metalnessMap), t.aoMap && n.add(t.aoMap), t.clearcoatMap && n.add(t.clearcoatMap), t.clearcoatNormalMap && n.add(t.clearcoatNormalMap), e.dispose();
		}), n.forEach((e) => e.dispose()), e.forEach((e) => e.dispose()), this.environmentTexture?.dispose(), this.floorTexture?.dispose(), this.shadowTexture?.dispose(), this.scene.clear(), this.renderer.dispose(), this.renderer.forceContextLoss();
	}
	setupEnvironment() {
		let e = document.createElement("canvas");
		e.width = 512, e.height = 256;
		let t = e.getContext("2d");
		if (t) {
			let e = t.createLinearGradient(0, 0, 0, 256);
			e.addColorStop(0, "#7c7060"), e.addColorStop(.32, "#3b352c"), e.addColorStop(.72, "#171410"), e.addColorStop(1, "#090807"), t.fillStyle = e, t.fillRect(0, 0, 512, 256);
			let n = t.createRadialGradient(150, 46, 4, 150, 46, 190);
			n.addColorStop(0, "rgba(255, 244, 224, 0.95)"), n.addColorStop(.28, "rgba(224, 204, 174, 0.32)"), n.addColorStop(1, "rgba(0, 0, 0, 0)"), t.fillStyle = n, t.fillRect(0, 0, 512, 256);
		}
		let n = new du(e);
		n.mapping = 303, n.colorSpace = Ua, n.needsUpdate = !0;
		let r = new Cf(this.renderer);
		this.environmentTexture = r.fromEquirectangular(n).texture, r.dispose(), n.dispose(), this.scene.environment = this.environmentTexture, this.scene.environmentIntensity = .2;
	}
	setupLights() {
		this.ambient = new md(16774111, 1512207, .42), this.ambient.layers.set(0), this.scene.add(this.ambient), this.fill = new Nd(13621478, .18), this.fill.position.set(-.6, 1.6, 3.4), this.fill.target.position.set(0, .5, 0), this.fill.layers.set(0), this.scene.add(this.fill, this.fill.target);
	}
	setupFloor() {
		this.floorTexture = this.createRadialTexture("rgba(146, 132, 108, 0.24)", "rgba(0, 0, 0, 0)");
		let e = new Qc({
			map: this.floorTexture,
			transparent: !0,
			depthWrite: !1,
			opacity: .85,
			toneMapped: !1
		});
		this.floor = new ul(new gu(7.5, 5.6), e), this.floor.rotation.x = -Math.PI / 2, this.floor.position.set(0, -.002, 0), this.floor.renderOrder = -2, this.floor.layers.set(0), this.scene.add(this.floor), this.shadowTexture = this.createRadialTexture("rgba(0, 0, 0, 0.58)", "rgba(0, 0, 0, 0)");
		let t = new Qc({
			map: this.shadowTexture,
			transparent: !0,
			depthWrite: !1,
			opacity: .75,
			toneMapped: !1
		});
		for (let e of ["F", "M"]) {
			let n = vg[e], r = new ul(new gu(.78, .58), t);
			r.rotation.x = -Math.PI / 2, r.position.set(n.x, .001, .02), r.renderOrder = -1, r.layers.set(0), this.contactShadows.push(r), this.scene.add(r);
		}
	}
	setupDust() {
		let e = /* @__PURE__ */ new Float32Array(270);
		for (let t = 0; t < 90; t += 1) e[t * 3] = (Math.random() - .5) * 2.7, e[t * 3 + 1] = Math.random() * 1.85 + .1, e[t * 3 + 2] = (Math.random() - .5) * 1.1;
		this.dustBase = e.slice();
		let t = new Ic();
		t.setAttribute("position", new xc(e, 3));
		let n = new ru({
			color: 16773340,
			size: .008,
			sizeAttenuation: !0,
			transparent: !0,
			opacity: .16,
			depthWrite: !1,
			blending: 2,
			toneMapped: !1
		});
		this.dust = new cu(t, n), this.dust.layers.set(0), this.scene.add(this.dust);
	}
	loadMissingStatues() {
		for (let e of ["F", "M"]) this.statues[e]?.loaded || this.pendingLoads.has(e) || (this.pendingLoads.add(e), this.missing.delete(e), this.loadStatue(e));
	}
	loadStatue(e) {
		let t = vg[e];
		new gh().load(t.url, (n) => {
			if (!this.disposed) try {
				let r = this.prepareStatue(n.scene, t);
				this.statues[e] = r, this.pendingLoads.delete(e), this.settleLoad();
			} catch {
				this.handleAssetFailure(e);
			}
		}, (t) => {
			if (this.disposed) return;
			let n = t.total > 0 ? t.total : 0, r = t.loaded;
			this.progress.set(e, {
				loaded: r,
				total: n
			}), this.callbacks.onProgress(this.computeProgress());
		}, (t) => {
			this.handleAssetFailure(e);
		});
	}
	handleAssetFailure(e) {
		this.pendingLoads.delete(e), this.missing.add(e), this.callbacks.onAssetError(e === "M" ? "The male sculpture could not be loaded." : "The female sculpture could not be loaded."), this.settleLoad();
	}
	settleLoad() {
		if (this.pendingLoads.size > 0) return;
		let e = Array.from(this.missing);
		this.initialLoadDone && e.length === 0 && this.callbacks.onProgress(1), this.initialLoadDone = !0, this.callbacks.onLoadSettled(e), e.length === 0 && this.callbacks.onProgress(1), this.applyFraming(this.computeIdleFraming(), 0);
	}
	computeProgress() {
		let e = 0, t = 0, n = !0;
		for (let r of this.progress.values()) e += r.loaded, t += r.total, r.total <= 0 && (n = !1);
		return n && t > 0 ? Dg(e / t, 0, 1) : Dg(e > 0 ? .12 : .02, 0, .9);
	}
	prepareStatue(e, t) {
		let n = Math.min(4, this.renderer.capabilities.getMaxAnisotropy());
		e.traverse((e) => {
			if (!(e instanceof ul)) return;
			e.castShadow = !1, e.receiveShadow = !1, e.frustumCulled = !0, e.layers.enable(0), e.layers.enable(t.layer);
			let r = e.material, i = (Array.isArray(r) ? r : [r]).map((e) => {
				let t = e.map;
				if (t && (t.anisotropy = n, t.needsUpdate = !0), e.isMeshBasicMaterial) {
					let t = e, n = new Du({
						name: t.name,
						map: t.map,
						color: t.color.clone(),
						side: t.side,
						transparent: t.transparent,
						opacity: t.opacity,
						alphaTest: t.alphaTest,
						roughness: .66,
						metalness: 0,
						envMapIntensity: .3
					});
					return this.materialDefaults.set(n, {
						opacity: n.opacity,
						transparent: n.transparent
					}), t.dispose(), n;
				}
				let r = e;
				return this.materialDefaults.set(r, {
					opacity: r.opacity,
					transparent: r.transparent
				}), "envMapIntensity" in r && (r.envMapIntensity = .42), r;
			});
			e.material = Array.isArray(r) ? i : i[0];
		});
		let r = new rc().setFromObject(e).getSize(new q()), i = t.targetHeight / Math.max(1e-4, r.y);
		e.scale.setScalar(i), e.rotation.y = t.rotationY, e.updateMatrixWorld(!0);
		let a = new rc().setFromObject(e);
		e.position.x -= (a.min.x + a.max.x) / 2, e.position.z -= (a.min.z + a.max.z) / 2, e.position.y -= a.min.y, e.updateMatrixWorld(!0);
		let o = new Ns();
		o.position.set(t.x, 0, 0), o.add(e), this.scene.add(o);
		let s = new Nd(16773596, yg);
		s.position.set(t.x - 1.2, 2.15, 2.5), s.target.position.set(t.x, .56, 0), s.layers.set(t.layer), this.scene.add(s, s.target);
		let c = new Nd(14477298, bg);
		c.position.set(t.x + 1, 1.65, -2.3), c.target.position.set(t.x, .72, 0), c.layers.set(t.layer), this.scene.add(c, c.target);
		let l = new Od(16742586, 0, 3.8, Math.PI / 5, .78, 1.2);
		l.position.set(t.x + .48, 1.72, 1.45), l.target.position.set(t.x, .78, 0), l.layers.set(t.layer), this.scene.add(l, l.target);
		let u = new rc().setFromObject(o);
		return {
			prediction: t.prediction,
			group: o,
			keyLight: s,
			rimLight: c,
			accentSpot: l,
			layer: t.layer,
			loaded: !0,
			bounds: u
		};
	}
	computeCompositionBounds() {
		let e = new rc(), t = !1;
		for (let n of Object.values(this.statues)) {
			if (!n) continue;
			let r = new rc().setFromObject(n.group);
			t ? e.union(r) : (e.copy(r), t = !0);
		}
		return t || e.set(new q(-.75, 0, -.25), new q(.75, 1.1, .25)), e;
	}
	computeIdleFraming() {
		let e = this.computeCompositionBounds(), t = e.getSize(new q()), n = e.getCenter(new q()), r = this.stageWidth / Math.max(1, this.stageHeight), i = r < .82, a = i ? t.y * .78 : t.y, o = i ? t.x * .92 : t.x, s = i ? e.max.y - a / 2 : n.y, c = i ? 1.04 : 1.24, l = Fo.degToRad(this.camera.fov), u = a * c / 2 / Math.tan(l / 2), d = o * c / 2 / (Math.tan(l / 2) * r), f = Math.max(u, d, 2);
		return {
			position: new q(n.x, s + a * (i ? .03 : .06), n.z + f),
			target: new q(n.x, s, n.z)
		};
	}
	computeRevealFraming(e) {
		let t = this.statues[e];
		if (!t) return null;
		let n = this.stageWidth / Math.max(1, this.stageHeight), r = n < .82, i = new rc().setFromObject(t.group);
		i.translate(new q(vg.M.x - t.group.position.x, 0, 0));
		let a = i.getSize(new q()), o = i.getCenter(new q());
		if (r) {
			let e = a.y * .66, t = a.x * 1.1, r = i.max.y - e / 2, s = 1.18, c = Fo.degToRad(this.camera.fov), l = e * s / 2 / Math.tan(c / 2), u = t * s / 2 / (Math.tan(c / 2) * n), d = Math.max(l, u, 1.65);
			return {
				position: new q(o.x, r + e * .035, o.z + d),
				target: new q(o.x, r, o.z)
			};
		}
		let s = this.computeIdleFraming(), c = (o.x - s.target.x) * (n < 1.1 ? .55 : .38), l = new q(s.target.x + c, s.target.y, s.target.z);
		return {
			position: new q(l.x, s.position.y, s.target.z + (s.position.z - s.target.z) * (n < 1.1 ? .92 : .94)),
			target: l
		};
	}
	addFramingTweens(e, t, n, r) {
		e.to(this.camera.position, {
			x: t.position.x,
			y: t.position.y,
			z: t.position.z,
			duration: r,
			ease: "power3.inOut",
			overwrite: "auto"
		}, n), e.to(this.cameraTarget, {
			x: t.target.x,
			y: t.target.y,
			z: t.target.z,
			duration: r,
			ease: "power3.inOut",
			overwrite: "auto"
		}, n);
	}
	applyFraming(e, t) {
		t <= 0 || this.reducedMotion ? (this.camera.position.copy(e.position), this.cameraTarget.copy(e.target)) : (gi.to(this.camera.position, {
			x: e.position.x,
			y: e.position.y,
			z: e.position.z,
			duration: t,
			ease: "power3.inOut",
			overwrite: "auto"
		}), gi.to(this.cameraTarget, {
			x: e.target.x,
			y: e.target.y,
			z: e.target.z,
			duration: t,
			ease: "power3.inOut",
			overwrite: "auto"
		}));
	}
	tweenLightsTo(e, t, n) {
		let r = this.reducedMotion ? Math.min(n, .3) : n;
		for (let n of Object.values(this.statues)) n && (gi.to(n.keyLight, {
			intensity: e,
			duration: r,
			ease: "power2.inOut",
			overwrite: "auto"
		}), gi.to(n.rimLight, {
			intensity: t,
			duration: r,
			ease: "power2.inOut",
			overwrite: "auto"
		}), gi.to(n.accentSpot, {
			intensity: 0,
			duration: r,
			ease: "power2.inOut",
			overwrite: "auto"
		}), gi.to(n.accentSpot.position, {
			x: vg[n.prediction].x + .48,
			duration: r,
			ease: "power2.out",
			overwrite: "auto"
		}), gi.to(n.accentSpot.target.position, {
			x: vg[n.prediction].x,
			duration: r,
			ease: "power2.out",
			overwrite: "auto"
		}));
	}
	killStateTimeline() {
		this.stateTimeline?.kill(), this.stateTimeline = null;
	}
	tweenDustColor(e, t) {
		if (!this.dust) return;
		let n = this.dust.material;
		gi.to(n.color, {
			r: (e >> 16 & 255) / 255,
			g: (e >> 8 & 255) / 255,
			b: (e & 255) / 255,
			duration: this.reducedMotion ? Math.min(t, .25) : t,
			ease: "power2.inOut",
			overwrite: "auto"
		});
	}
	resetRecession(e, t = !1) {
		let n = this.reducedMotion ? Math.min(e, .25) : e;
		for (let e of Object.values(this.statues)) e && (t && (gi.killTweensOf(e.group.position), gi.killTweensOf(e.group.scale), e.group.position.x = vg[e.prediction].x, e.group.scale.setScalar(1)), gi.to(e.keyLight.color, {
			r: 1,
			g: .945,
			b: .863,
			duration: n,
			ease: "power2.out",
			overwrite: "auto"
		}), gi.to(e.rimLight.color, {
			r: .863,
			g: .906,
			b: .949,
			duration: n,
			ease: "power2.out",
			overwrite: "auto"
		}), gi.to(e.group.position, {
			x: vg[e.prediction].x,
			duration: n,
			ease: "power2.out",
			overwrite: "auto"
		}), gi.to(e.group.scale, {
			x: 1,
			y: 1,
			z: 1,
			duration: n,
			ease: "power2.out",
			overwrite: "auto"
		}), e.group.traverse((e) => {
			if (!(e instanceof ul)) return;
			let t = Array.isArray(e.material) ? e.material : [e.material];
			for (let e of t) {
				if (!("opacity" in e)) continue;
				let t = e, r = this.materialDefaults.get(t) ?? {
					opacity: 1,
					transparent: !1
				};
				t.transparent = !0, gi.to(t, {
					opacity: r.opacity,
					duration: n,
					ease: "power2.out",
					overwrite: "auto",
					onComplete: () => {
						t.transparent = r.transparent;
					}
				});
			}
		}));
	}
	createRadialTexture(e, t) {
		let n = document.createElement("canvas");
		n.width = 512, n.height = 512;
		let r = n.getContext("2d");
		if (r) {
			let n = r.createRadialGradient(256, 256, 0, 256, 256, 256);
			n.addColorStop(0, e), n.addColorStop(.42, e), n.addColorStop(1, t), r.fillStyle = n, r.fillRect(0, 0, 512, 512);
		}
		let i = new du(n);
		return i.colorSpace = Ua, i.needsUpdate = !0, i;
	}
	startLoop() {
		this.running || this.disposed || (this.running = !0, this.clock.start(), this.animationFrame = requestAnimationFrame(this.animate));
	}
	stopLoop() {
		this.running = !1, this.animationFrame !== null && (cancelAnimationFrame(this.animationFrame), this.animationFrame = null);
	}
	animate = () => {
		if (!this.running || this.disposed) return;
		let e = this.clock.getDelta(), t = this.clock.elapsedTime;
		if (this.dust && this.dustBase && !this.reducedMotion) {
			let e = this.dust.geometry.getAttribute("position"), n = e.array;
			for (let e = 0; e < n.length / 3; e += 1) {
				let r = this.dustBase[e * 3], i = this.dustBase[e * 3 + 1], a = this.dustBase[e * 3 + 2];
				n[e * 3] = r + Math.sin(t * .12 + e) * .012, n[e * 3 + 1] = i + (t * .012 + e * .13) % .18, n[e * 3 + 2] = a + Math.cos(t * .09 + e * .7) * .008;
			}
			e.needsUpdate = !0;
		}
		if (!this.reducedMotion) {
			let n = 1 - .08 ** e;
			this.parallaxX += (this.targetParallaxX - this.parallaxX) * n, this.parallaxY += (this.targetParallaxY - this.parallaxY) * n;
			for (let e of Object.values(this.statues)) {
				if (!e || !e.loaded) continue;
				let n = Math.sin(t * 2.513) * .004;
				e.group.rotation.y = this.parallaxX, e.group.rotation.x = this.parallaxY * .5, e.group.position.y = 0 + n;
			}
		}
		this.camera.lookAt(this.cameraTarget), this.renderer.render(this.scene, this.camera), this.animationFrame = requestAnimationFrame(this.animate);
	};
	handleMotionPreference = (e) => {
		this.reducedMotion = e.matches;
	};
	handleVisibilityChange = () => {
		document.hidden ? this.stopLoop() : this.startLoop();
	};
	handleContextLost = (e) => {
		e.preventDefault(), this.stopLoop(), this.callbacks.onContextLost();
	};
}, kg = 2e4, Ag = 800, jg = 64e3, Mg = [
	"audio/webm;codecs=opus",
	"audio/webm",
	"audio/ogg;codecs=opus",
	"audio/mp4"
];
function Ng(e) {
	if (e instanceof DOMException) switch (e.name) {
		case "NotAllowedError":
		case "SecurityError": return "Microphone access was denied. Allow microphone access in your browser, then try again.";
		case "NotFoundError":
		case "DevicesNotFoundError": return "No microphone was found. Connect a microphone, then try again.";
		case "NotReadableError":
		case "TrackStartError": return "The microphone is unavailable or in use by another application.";
		case "OverconstrainedError": return "This microphone does not support the requested recording settings.";
	}
	return "The microphone could not be started. Check your browser permissions and try again.";
}
var Pg = class {
	callbacks;
	stream = null;
	mediaRecorder = null;
	chunks = [];
	audioContext = null;
	analyser = null;
	sourceNode = null;
	silentGain = null;
	timeDomain = null;
	animationFrame = null;
	timer = null;
	startedAt = 0;
	elapsedMs = 0;
	recording = !1;
	cancelled = !1;
	stopPromise = null;
	stopResolve = null;
	autoStopRequested = !1;
	constructor(e) {
		this.callbacks = e;
	}
	get isRecording() {
		return this.recording;
	}
	get durationMs() {
		return this.elapsedMs;
	}
	async start() {
		if (!this.recording) {
			if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) this.callbacks.onError("This browser does not support microphone recording. You can upload an audio file instead.");
			else {
				this.cleanupAudioGraph(), this.detachRecorder(), this.chunks = [], this.cancelled = !1, this.autoStopRequested = !1, this.elapsedMs = 0;
				try {
					this.stream = await navigator.mediaDevices.getUserMedia({
						audio: {
							channelCount: 1,
							echoCancellation: !0,
							noiseSuppression: !0,
							autoGainControl: !0
						},
						video: !1
					});
				} catch (e) {
					this.stream = null, this.cancelled || this.callbacks.onError(Ng(e));
					return;
				}
				if (this.cancelled) this.stream.getTracks().forEach((e) => e.stop()), this.stream = null;
				else try {
					let e = Mg.find((e) => MediaRecorder.isTypeSupported(e)) ?? "";
					this.mediaRecorder = e ? new MediaRecorder(this.stream, {
						mimeType: e,
						audioBitsPerSecond: jg
					}) : new MediaRecorder(this.stream, { audioBitsPerSecond: jg }), this.mediaRecorder.addEventListener("dataavailable", this.handleData), this.mediaRecorder.addEventListener("stop", this.handleStop), this.mediaRecorder.addEventListener("error", this.handleRecorderError), this.setupAudioGraph(this.stream), this.startedAt = performance.now(), this.recording = !0, this.mediaRecorder.start(250), this.timer = window.setInterval(this.handleTick, 100), this.animationFrame = requestAnimationFrame(this.drawLoop);
				} catch {
					this.cleanupAudioGraph(), this.detachRecorder(), this.cancelled || this.callbacks.onError("The microphone could not start recording. Try again or upload an audio file.");
				}
			}
		}
	}
	stop() {
		if (!this.recording || !this.mediaRecorder) return Promise.resolve(null);
		if (this.stopPromise) return this.stopPromise;
		this.recording = !1, this.clearTimer(), this.stopAnimation(), this.stopPromise = new Promise((e) => {
			this.stopResolve = e;
		});
		try {
			this.mediaRecorder.state === "inactive" ? this.finishStop() : this.mediaRecorder.stop();
		} catch {
			this.finishStop();
		}
		return this.stopPromise;
	}
	cancel() {
		this.cancelled = !0, this.recording = !1, this.clearTimer(), this.stopAnimation();
		try {
			this.mediaRecorder && this.mediaRecorder.state !== "inactive" && this.mediaRecorder.stop();
		} catch {}
		this.detachRecorder(), this.cleanupAudioGraph(), this.chunks = [], this.elapsedMs = 0, this.stopResolve?.(null), this.stopResolve = null, this.stopPromise = null;
	}
	dispose() {
		this.cancel(), this.detachRecorder();
	}
	setupAudioGraph(e) {
		let t = window.AudioContext ?? window.webkitAudioContext;
		if (!t) throw Error("Web Audio API is unavailable");
		this.audioContext = new t(), this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = 2048, this.analyser.smoothingTimeConstant = .72, this.timeDomain = new Uint8Array(this.analyser.fftSize), this.sourceNode = this.audioContext.createMediaStreamSource(e), this.silentGain = this.audioContext.createGain(), this.silentGain.gain.value = 0, this.sourceNode.connect(this.analyser), this.analyser.connect(this.silentGain), this.silentGain.connect(this.audioContext.destination), this.audioContext.resume().catch(() => void 0);
	}
	drawLoop = () => {
		if (!this.recording || !this.analyser || !this.timeDomain) return;
		this.analyser.getByteTimeDomainData(this.timeDomain);
		let e = 0;
		for (let t = 0; t < this.timeDomain.length; t += 1) {
			let n = (this.timeDomain[t] - 128) / 128;
			e += n * n;
		}
		let t = Math.sqrt(e / this.timeDomain.length), n = Math.min(1, t * 3.6);
		this.callbacks.onLevel(this.timeDomain, n), this.animationFrame = requestAnimationFrame(this.drawLoop);
	};
	handleTick = () => {
		this.recording && (this.elapsedMs = performance.now() - this.startedAt, this.callbacks.onElapsed(this.elapsedMs), this.elapsedMs >= kg && !this.autoStopRequested && (this.autoStopRequested = !0, this.callbacks.onAutoStop()));
	};
	handleData = (e) => {
		this.cancelled || e.data && e.data.size > 0 && this.chunks.push(e.data);
	};
	handleRecorderError = (e) => {
		this.recording = !1, this.clearTimer(), this.stopAnimation(), this.cleanupAudioGraph(), this.detachRecorder(), this.callbacks.onError("The microphone stopped unexpectedly. Try again or upload an audio file."), this.stopResolve?.(null), this.stopResolve = null, this.stopPromise = null;
	};
	handleStop = () => {
		this.finishStop();
	};
	finishStop() {
		this.recording = !1, this.clearTimer(), this.stopAnimation();
		let e = Math.max(this.elapsedMs, this.startedAt > 0 ? performance.now() - this.startedAt : 0), t = this.mediaRecorder?.mimeType || (this.chunks[0] instanceof Blob ? this.chunks[0].type : "audio/webm"), n = this.cancelled ? null : new Blob(this.chunks, { type: t || "audio/webm" });
		this.cleanupAudioGraph(), this.chunks = [];
		let r = n && n.size > 0 && e >= Ag ? {
			blob: n,
			mimeType: t || n.type || "audio/webm",
			durationMs: e
		} : null;
		this.elapsedMs = e, this.detachRecorder(), this.stopResolve?.(r), this.stopResolve = null, this.stopPromise = null;
	}
	detachRecorder() {
		this.mediaRecorder?.removeEventListener("dataavailable", this.handleData), this.mediaRecorder?.removeEventListener("stop", this.handleStop), this.mediaRecorder?.removeEventListener("error", this.handleRecorderError), this.mediaRecorder = null;
	}
	clearTimer() {
		this.timer !== null && (window.clearInterval(this.timer), this.timer = null);
	}
	stopAnimation() {
		this.animationFrame !== null && (cancelAnimationFrame(this.animationFrame), this.animationFrame = null);
	}
	cleanupAudioGraph() {
		this.stopAnimation(), this.sourceNode?.disconnect(), this.analyser?.disconnect(), this.silentGain?.disconnect(), this.sourceNode = null, this.analyser = null, this.silentGain = null, this.timeDomain = null, this.audioContext &&= (this.audioContext.close().catch(() => void 0), null), this.stream?.getTracks().forEach((e) => e.stop()), this.stream = null;
	}
}, Fg = {
	boot: "Preparing the gallery",
	idle: "Ready",
	listening: "Listening",
	processing: "Analysing voice",
	reveal: "Prediction ready",
	uncertain: "No reliable prediction",
	error: "Analysis interrupted"
}, Ig = {
	boot: "Preparing gallery",
	idle: "Begin recording",
	listening: "Finish recording",
	processing: "Analysing voice",
	reveal: "Record again",
	uncertain: "Try again",
	error: "Try again"
}, Lg = {
	boot: "Loading the marble figures",
	idle: "Speak for a few seconds",
	listening: "Tap to finish",
	processing: "The model is reading the sample",
	reveal: "Speak again",
	uncertain: "Another recording",
	error: "Another recording"
}, Rg = (e) => {
	let t = Math.max(0, Math.floor(e / 1e3));
	return `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`;
}, zg = class {
	root;
	callbacks;
	reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	recordButton;
	themeButton;
	recordLabel;
	recordHint;
	cancelButton;
	replayButton;
	statusText;
	timer;
	loading;
	loadingProgress;
	loadingMessage;
	fallback;
	result;
	resultEyebrow;
	resultLabel;
	resultMeta;
	resultCaveat;
	notice;
	noticeTitle;
	noticeMessage;
	noticeRetry;
	assetBanner;
	assetBannerText;
	assetRetry;
	liveRegion;
	audio = null;
	replayUrl = null;
	ready = !1;
	phase = "boot";
	resultTimeline = null;
	noticeTimeline = null;
	announceTimer = null;
	constructor(e, t) {
		this.root = e, this.callbacks = t, this.recordButton = this.require("#record-button"), this.themeButton = this.root.querySelector("#theme-toggle") ?? this.createThemeButton(), this.recordLabel = this.require("#record-label"), this.recordHint = this.require("#record-hint"), this.cancelButton = this.require("#cancel-button"), this.replayButton = this.require("#replay-button"), this.statusText = this.require("#status-text"), this.timer = this.require("#timer"), this.loading = this.require(".loading"), this.loadingProgress = this.require("#loading-progress"), this.loadingMessage = this.require("#loading-message"), this.fallback = this.require(".fallback"), this.result = this.require(".result"), this.resultEyebrow = this.require("#result-eyebrow"), this.resultLabel = this.require("#result-label"), this.resultMeta = this.require("#result-meta"), this.resultCaveat = this.require("#result-caveat"), this.notice = this.require(".notice"), this.noticeTitle = this.require("#notice-title"), this.noticeMessage = this.require("#notice-message"), this.noticeRetry = this.require("#notice-retry"), this.assetBanner = this.require(".asset-banner"), this.assetBannerText = this.require("#asset-banner-text"), this.assetRetry = this.require("#asset-retry"), this.liveRegion = this.require("#live-region"), this.recordButton.addEventListener("click", this.handleRecordClick), this.themeButton.addEventListener("click", this.handleThemeClick), this.cancelButton.addEventListener("click", this.handleCancelClick), this.replayButton.addEventListener("click", this.handleReplayClick), this.noticeRetry.addEventListener("click", this.handleRetryClick), this.assetRetry.addEventListener("click", this.handleRetryAssetsClick), this.setPhase("boot");
		let n = window.localStorage.getItem("voice-reveal-theme");
		this.setTheme(n === "light" ? "light" : "dark");
	}
	setReady(e) {
		this.ready = e, this.syncRecordButton();
	}
	setPhase(e) {
		this.phase = e, this.root.dataset.phase = e, this.statusText.textContent = Fg[e], this.recordLabel.textContent = Ig[e], this.recordHint.textContent = Lg[e], this.recordButton.setAttribute("aria-label", `${Ig[e]}. ${Lg[e]}.`), this.recordButton.setAttribute("aria-pressed", e === "listening" ? "true" : "false"), this.cancelButton.hidden = e !== "listening", this.timer.hidden = e !== "listening" && e !== "processing", e === "listening" && (this.timer.textContent = "0:00"), (e === "idle" || e === "reveal" || e === "boot") && (this.timer.hidden = !0), this.syncRecordButton(), this.syncReplayButton(), this.announce(Fg[e]);
	}
	setLoading(e, t = 0, n) {
		this.loading.classList.toggle("is-hidden", !e), this.loading.setAttribute("aria-hidden", e ? "false" : "true"), this.loadingProgress.style.width = `${Math.round(Math.max(0, Math.min(1, t)) * 100)}%`, n && (this.loadingMessage.textContent = n);
	}
	setLoadingMessage(e) {
		this.loadingMessage.textContent = e;
	}
	setFallbackVisible(e) {
		this.fallback.classList.toggle("is-visible", e), this.fallback.setAttribute("aria-hidden", e ? "false" : "true");
	}
	setFallbackReveal(e) {
		this.fallback.classList.toggle("reveal-male", e === "M"), this.fallback.classList.toggle("reveal-female", e === "F");
	}
	setAssetBanner(e) {
		this.assetBanner.classList.toggle("is-visible", !!e), e && (this.assetBannerText.textContent = e);
	}
	setElapsed(e) {
		this.timer.textContent = Rg(e);
	}
	setReplayAvailable(e) {
		if (this.replayUrl = e, this.replayButton.textContent = "Play recording", this.replayButton.setAttribute("aria-label", "Play the last recording"), this.audio &&= (this.audio.pause(), this.audio.removeAttribute("src"), this.audio.load(), null), this.syncReplayButton(), !e) return;
		let t = new Audio(e);
		t.preload = "metadata", t.addEventListener("ended", () => {
			this.replayButton.textContent = "Play recording", this.replayButton.setAttribute("aria-label", "Play the last recording");
		}), this.audio = t;
	}
	showResult(e, t, n) {
		this.resultTimeline?.kill(), this.resultEyebrow.textContent = "Predicted voice category", this.resultLabel.textContent = e, this.resultLabel.setAttribute("aria-label", `Predicted voice category: ${e}`);
		let r = n === "upload" ? "Uploaded clip" : n === "microphone" ? "Live recording" : "", i = t === null ? "Confidence not reported by the model" : `Model confidence ${Math.round(t * 100)}%`;
		this.resultMeta.textContent = r ? `${i} · ${r}` : i, this.resultCaveat.textContent = "A statistical model output, not a statement about identity.", this.result.hidden = !1, this.result.setAttribute("aria-hidden", "false");
		let a = this.reducedMotion ? .18 : 1.05, o = gi.timeline({ paused: !0 });
		return o.set(this.result, { visibility: "visible" }), o.fromTo(this.result, {
			opacity: 0,
			y: 14
		}, {
			opacity: 1,
			y: 0,
			duration: a,
			ease: "power2.out"
		}), o.fromTo(this.resultEyebrow, {
			opacity: 0,
			y: 6
		}, {
			opacity: 1,
			y: 0,
			duration: this.reducedMotion ? .15 : .7,
			ease: "power2.out"
		}, .06), o.fromTo(this.resultMeta, { opacity: 0 }, {
			opacity: 1,
			duration: this.reducedMotion ? .15 : .8,
			ease: "power2.out"
		}, .2), this.resultTimeline = o, this.announce(`Predicted voice category: ${e}. ${i}. This is a model output, not a statement about identity.`), o;
	}
	hideResult(e = .3) {
		this.resultTimeline?.kill(), this.resultTimeline = null, this.reducedMotion || e <= 0 ? (this.result.style.opacity = "0", this.result.style.transform = "translateY(8px)", this.result.setAttribute("aria-hidden", "true"), this.result.hidden = !0) : this.resultTimeline = gi.to(this.result, {
			opacity: 0,
			y: 8,
			duration: e,
			ease: "power2.out",
			overwrite: "auto",
			onComplete: () => {
				this.result.setAttribute("aria-hidden", "true"), this.result.hidden = !0, this.resultTimeline = null;
			}
		});
	}
	showNotice(e, t, n = "Try another recording") {
		this.noticeTimeline?.kill(), this.noticeTitle.textContent = e, this.noticeMessage.textContent = t, this.noticeRetry.textContent = n, this.notice.hidden = !1, this.notice.classList.add("is-visible"), this.notice.setAttribute("aria-hidden", "false");
		let r = gi.timeline({ paused: !0 });
		return r.fromTo(this.notice, {
			opacity: 0,
			y: 10
		}, {
			opacity: 1,
			y: 0,
			duration: this.reducedMotion ? .15 : .5,
			ease: "power2.out"
		}), this.noticeTimeline = r, this.announce(`${e}. ${t}`), r;
	}
	hideNotice() {
		this.noticeTimeline?.kill(), this.noticeTimeline = null, this.notice.classList.remove("is-visible"), this.notice.setAttribute("aria-hidden", "true"), this.notice.hidden = !0;
	}
	announce(e) {
		this.announceTimer !== null && window.clearTimeout(this.announceTimer), this.liveRegion.textContent = "", this.announceTimer = window.setTimeout(() => {
			this.liveRegion.textContent = e, this.announceTimer = null;
		}, 40);
	}
	dispose() {
		this.recordButton.removeEventListener("click", this.handleRecordClick), this.themeButton.removeEventListener("click", this.handleThemeClick), this.cancelButton.removeEventListener("click", this.handleCancelClick), this.replayButton.removeEventListener("click", this.handleReplayClick), this.noticeRetry.removeEventListener("click", this.handleRetryClick), this.assetRetry.removeEventListener("click", this.handleRetryAssetsClick), this.resultTimeline?.kill(), this.noticeTimeline?.kill(), this.announceTimer !== null && (window.clearTimeout(this.announceTimer), this.announceTimer = null), this.audio &&= (this.audio.pause(), this.audio.removeAttribute("src"), this.audio.load(), null), this.replayUrl = null;
	}
	require(e) {
		let t = this.root.querySelector(e);
		if (!t) throw Error(`Voice reveal UI is missing ${e}`);
		return t;
	}
	createThemeButton() {
		let e = document.createElement("button");
		return e.className = "theme-toggle", e.id = "theme-toggle", e.type = "button", e.setAttribute("aria-label", "Switch to light theme"), e.title = "Switch theme", Object.assign(e.style, {
			position: "absolute",
			top: "0.8rem",
			right: "0.85rem",
			zIndex: "10",
			width: "36px",
			height: "36px"
		}), e.innerHTML = "\n      <svg class=\"theme-icon theme-icon-sun\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n        <circle cx=\"12\" cy=\"12\" r=\"4\" />\n        <path d=\"M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42\" />\n      </svg>\n      <svg class=\"theme-icon theme-icon-moon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n        <path d=\"M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z\" />\n      </svg>", this.root.prepend(e), e;
	}
	syncRecordButton() {
		let e = this.phase === "boot" || this.phase === "processing";
		this.recordButton.disabled = !this.ready || e, this.recordButton.classList.toggle("is-busy", e);
	}
	syncReplayButton() {
		this.replayButton.hidden = !this.replayUrl || this.phase !== "reveal" && this.phase !== "idle";
	}
	handleRecordClick = () => {
		this.ready && this.phase !== "boot" && this.phase !== "processing" && this.callbacks.onRecordClick();
	};
	handleThemeClick = () => {
		this.setTheme(this.root.dataset.theme === "light" ? "dark" : "light");
	};
	setTheme(e) {
		this.root.dataset.theme = e, document.documentElement.dataset.voiceTheme = e, window.localStorage.setItem("voice-reveal-theme", e);
		let t = e === "dark" ? "light" : "dark";
		this.themeButton.setAttribute("aria-label", `Switch to ${t} theme`), this.themeButton.setAttribute("aria-pressed", e === "light" ? "true" : "false");
	}
	handleCancelClick = () => {
		this.callbacks.onCancelClick();
	};
	handleRetryClick = () => {
		this.callbacks.onRetryClick();
	};
	handleRetryAssetsClick = () => {
		this.callbacks.onRetryAssetsClick();
	};
	handleReplayClick = () => {
		this.replayUrl && (this.audio || (this.audio = new Audio(this.replayUrl), this.audio.addEventListener("ended", () => {
			this.replayButton.textContent = "Play recording", this.replayButton.setAttribute("aria-label", "Play the last recording");
		})), this.audio.paused ? this.audio.play().then(() => {
			this.replayButton.textContent = "Pause recording", this.replayButton.setAttribute("aria-label", "Pause the last recording");
		}).catch(() => {
			this.replayButton.textContent = "Play recording";
		}) : (this.audio.pause(), this.replayButton.textContent = "Play recording", this.replayButton.setAttribute("aria-label", "Play the last recording")));
	};
}, Bg = class {
	canvas;
	context;
	wrapper;
	width = 0;
	height = 0;
	dpr = 1;
	lastDraw = 0;
	reducedMotion;
	constructor(e) {
		this.canvas = e, this.context = e.getContext("2d"), this.wrapper = e.closest(".waveform"), this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches, this.resize();
	}
	setActive(e) {
		this.wrapper?.classList.toggle("is-active", e), e || this.clear();
	}
	resize() {
		let e = this.canvas.getBoundingClientRect();
		e.width <= 0 || e.height <= 0 || (this.dpr = Math.min(window.devicePixelRatio || 1, 2), this.width = e.width, this.height = e.height, this.canvas.width = Math.round(this.width * this.dpr), this.canvas.height = Math.round(this.height * this.dpr), this.context?.setTransform(this.dpr, 0, 0, this.dpr, 0, 0));
	}
	draw(e, t) {
		let n = this.context;
		if (!n || ((this.width === 0 || this.height === 0) && this.resize(), this.width === 0 || this.height === 0)) return;
		let r = performance.now();
		if (this.reducedMotion && r - this.lastDraw < 80) return;
		this.lastDraw = r;
		let i = this.width, a = this.height, o = a / 2, s = this.reducedMotion ? 56 : 104, c = a * (.28 + Math.min(.32, t * .32));
		n.clearRect(0, 0, i, a);
		let l = n.createLinearGradient(0, 0, i, 0);
		l.addColorStop(0, "rgba(239, 233, 223, 0)"), l.addColorStop(.18, "rgba(239, 233, 223, 0.34)"), l.addColorStop(.5, "rgba(246, 238, 225, 0.9)"), l.addColorStop(.82, "rgba(239, 233, 223, 0.34)"), l.addColorStop(1, "rgba(239, 233, 223, 0)"), n.save(), n.lineWidth = 1, n.strokeStyle = "rgba(239, 233, 223, 0.13)", n.beginPath(), n.moveTo(0, o), n.lineTo(i, o), n.stroke();
		let u = [];
		for (let t = 0; t < s; t += 1) {
			let n = t / (s - 1), r = (e[Math.min(e.length - 1, Math.floor(n * (e.length - 1)))] - 128) / 128, a = n * i, l = o + r * c;
			u.push([a, l]);
		}
		n.beginPath(), n.moveTo(u[0][0], u[0][1]);
		for (let e = 1; e < u.length; e += 1) {
			let [t, r] = u[e - 1], [i, a] = u[e], o = (t + i) / 2;
			n.quadraticCurveTo(t, r, o, (r + a) / 2);
		}
		let d = u[u.length - 1];
		n.lineTo(d[0], d[1]), n.lineWidth = 1.15, n.strokeStyle = l, n.shadowColor = "rgba(230, 210, 180, 0.35)", n.shadowBlur = 7, n.stroke(), n.globalAlpha = .16, n.fillStyle = l, n.beginPath(), n.moveTo(u[0][0], o);
		for (let [e, t] of u) n.lineTo(e, t);
		n.lineTo(d[0], o), n.closePath(), n.fill(), n.restore();
	}
	clear() {
		this.context && this.context.clearRect(0, 0, this.width, this.height);
	}
	dispose() {
		this.clear(), this.wrapper?.classList.remove("is-active");
	}
}, Vg = [
	"idle",
	"listening",
	"processing",
	"reveal",
	"uncertain",
	"error"
], Hg = (e) => typeof e == "object" && !!e, Ug = (e) => typeof e == "number" && Number.isFinite(e), Wg = (e, t = 600) => {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n ? n.slice(0, t) : null;
};
function Gg(e) {
	if (!Hg(e) || e.version !== 1) return null;
	let t = Wg(e.event_id, 128);
	if (!t) return null;
	let n = e.started_at;
	if (!Ug(n) || n < 0) return null;
	let r = e.status;
	if (typeof r != "string" || !Vg.includes(r)) return null;
	let i = null;
	e.prediction === "M" || e.prediction === "F" ? i = e.prediction : e.prediction !== null && e.prediction !== void 0 && (i = null);
	let a = null;
	Ug(e.confidence) && e.confidence >= 0 && e.confidence <= 1 && (a = e.confidence);
	let o = null;
	(e.source === "microphone" || e.source === "upload") && (o = e.source);
	let s = {
		version: 1,
		event_id: t,
		started_at: n,
		status: r,
		prediction: i,
		prediction_label: Wg(e.prediction_label, 80),
		confidence: a,
		message: Wg(e.message, 600),
		source: o
	};
	return s.status === "reveal" && s.prediction === null && (s.status = "uncertain", s.prediction_label = null, s.confidence = null, s.message = s.message ?? "The model returned an output that could not be interpreted. Try another recording."), s.status !== "reveal" && (s.prediction = null, s.prediction_label = null, s.confidence = null), s;
}
function Kg(e) {
	return e === "M" ? "Male" : "Female";
}
// src/app.ts
var qg = "voice-gallery", Jg = 6e4;
gi.ticker.lagSmoothing(0);
function Yg() {
	return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `evt-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function Xg(e) {
	let t = new Uint8Array(e), n = 32768, r = "";
	for (let e = 0; e < t.length; e += n) {
		let i = t.subarray(e, e + n);
		r += String.fromCharCode(...i);
	}
	return btoa(r);
}
var Zg = class {
	root;
	setTriggerValue;
	ui;
	waveform;
	recorder;
	scene = null;
	sceneAvailable = !1;
	fallbackMode = !1;
	fallbackRevealAllowed = !1;
	phase = "boot";
	ready = !1;
	disposed = !1;
	pendingState = null;
	activeEventId = null;
	activeStartedAt = 0;
	latestStartedAt = 0;
	lastAppliedId = null;
	lastAppliedStatus = null;
	lastAppliedPrediction = null;
	lastBlobUrl = null;
	processingTimer = null;
	revealTimeline = null;
	constructor(e) {
		this.root = e.root, this.setTriggerValue = e.setTriggerValue, this.ui = new zg(this.root, {
			onRecordClick: () => {
				this.phase === "listening" ? this.finishRecording() : this.startRecording();
			},
			onCancelClick: () => this.cancelRecording(),
			onRetryClick: () => {
				this.startRecording();
			},
			onRetryAssetsClick: () => this.retryAssets()
		});
		let t = this.root.querySelector("#waveform-canvas");
		if (!t) throw Error("Voice reveal waveform canvas is missing");
		this.waveform = new Bg(t), this.recorder = new Pg({
			onLevel: (e, t) => this.waveform.draw(e, t),
			onElapsed: (e) => this.ui.setElapsed(e),
			onError: (e) => this.handleRecorderError(e),
			onAutoStop: () => {
				this.phase === "listening" && this.finishRecording();
			}
		}), this.configureFallbackImages();
		let n = this.root.querySelector("#gallery-canvas");
		if (!n) throw Error("Voice reveal gallery canvas is missing");
		try {
			this.scene = new Og(this.root, n, {
				onProgress: (e) => {
					this.ready || this.ui.setLoading(!0, e);
				},
				onLoadSettled: (e) => this.handleLoadSettled(e),
				onAssetError: (e) => {
					this.ui.setAssetBanner(`${e} Reload the gallery to try again.`);
				},
				onContextLost: () => this.handleContextLost()
			}), this.sceneAvailable = !0, this.ui.setLoading(!0, .02);
		} catch {
			this.scene = null, this.sceneAvailable = !1, this.fallbackMode = !0, this.fallbackRevealAllowed = !0, this.ready = !0, this.ui.setLoading(!1), this.ui.setFallbackVisible(!0), this.ui.setAssetBanner("3D gallery unavailable in this browser. The prediction will still be shown."), this.ui.setReady(!0), this.setPhase("idle");
		}
		e.data && this.update(e.data);
	}
	update(e) {
		if (this.disposed) return;
		let t = Gg(e?.state);
		t && (this.phase === "boot" ? t.status !== "idle" && (this.pendingState = t) : this.applyState(t));
	}
	dispose() {
		this.disposed || (this.disposed = !0, this.clearProcessingTimer(), this.revealTimeline?.kill(), this.revealTimeline = null, this.recorder.dispose(), this.waveform.dispose(), this.ui.dispose(), this.scene?.dispose(), this.scene = null, this.sceneAvailable = !1, this.lastBlobUrl &&= (URL.revokeObjectURL(this.lastBlobUrl), null));
	}
	applyState(e) {
		if (e.status === "idle") {
			if (this.phase === "listening" || this.phase === "processing" || this.lastAppliedId === e.event_id && this.phase === "idle") return;
			this.lastAppliedId = e.event_id, this.lastAppliedStatus = "idle", this.lastAppliedPrediction = null, this.resetToIdle();
		} else if (e.status !== "listening" && e.status !== "processing" && (this.phase !== "listening" && this.phase !== "processing" || !this.activeEventId || e.event_id === this.activeEventId) && !(e.started_at < this.latestStartedAt) && (this.lastAppliedId !== e.event_id || this.lastAppliedStatus !== e.status || this.lastAppliedPrediction !== e.prediction)) {
			if (this.clearProcessingTimer(), this.activeEventId = e.event_id, this.activeStartedAt = e.started_at, this.lastAppliedId = e.event_id, this.lastAppliedStatus = e.status, this.lastAppliedPrediction = e.prediction, e.status === "reveal") {
				if (!e.prediction) {
					this.enterUncertain(e.message ?? "The model returned an output that could not be interpreted. Try another recording.");
					return;
				}
				this.enterReveal(e);
			} else e.status === "uncertain" ? this.enterUncertain(e.message ?? "The model could not make a reliable prediction. Try another recording.") : this.enterError(e.message ?? "The voice sample could not be analysed. Try another recording.");
		}
	}
	async startRecording() {
		!this.disposed && this.ready && this.phase !== "listening" && this.phase !== "processing" && (this.revealTimeline?.kill(), this.revealTimeline = null, this.clearProcessingTimer(), this.ui.hideResult(.2), this.ui.hideNotice(), this.ui.setFallbackReveal(null), this.ui.setAssetBanner(this.scene ? this.assetBannerForScene() : this.assetBannerForFallback()), this.activeEventId = Yg(), this.activeStartedAt = Date.now(), this.latestStartedAt = this.activeStartedAt, this.lastAppliedId = null, this.lastAppliedStatus = null, this.lastAppliedPrediction = null, this.setPhase("listening"), this.ui.setElapsed(0), this.ui.setReplayAvailable(null), this.lastBlobUrl &&= (URL.revokeObjectURL(this.lastBlobUrl), null), this.scene?.enterListeningState(), this.waveform.setActive(!0), await this.recorder.start(), this.isListening() && !this.recorder.isRecording && this.handleRecorderError("The microphone could not start recording. Try again or upload an audio file."));
	}
	async finishRecording() {
		if (this.phase !== "listening" || !this.recorder.isRecording) return;
		this.setPhase("processing"), this.waveform.setActive(!1), this.scene?.enterProcessingState();
		let e = null;
		try {
			e = await this.recorder.stop();
		} catch {}
		if (!e) this.handleRecorderError("The recording was too short or empty. Speak for at least one second and try again.", "Recording too short");
		else if (this.lastBlobUrl = URL.createObjectURL(e.blob), this.ui.setReplayAvailable(this.lastBlobUrl), !this.activeEventId) this.handleRecorderError("The recording could not be identified. Try again.", "Recording interrupted");
		else try {
			let t = Xg(await e.blob.arrayBuffer());
			if (t.length > 8e6) {
				this.handleRecorderError("The recording is too large to analyse. Try a shorter sample.", "Recording too large");
				return;
			}
			let n = {
				event_id: this.activeEventId,
				started_at: this.activeStartedAt,
				audio_base64: t,
				mime_type: e.mimeType,
				duration_ms: Math.round(e.durationMs)
			};
			this.setTriggerValue(qg, n), this.startProcessingTimer();
		} catch {
			this.handleRecorderError("The recording could not be sent for analysis. Try again.", "Analysis interrupted");
		}
	}
	cancelRecording() {
		this.phase === "listening" && (this.recorder.cancel(), this.waveform.setActive(!1), this.ui.hideResult(.25), this.ui.setElapsed(0), this.latestStartedAt = Math.max(this.latestStartedAt, this.activeStartedAt), this.activeEventId = null, this.activeStartedAt = 0, this.setPhase("idle"), this.ui.hideNotice(), this.ui.setFallbackReveal(null), this.scene?.enterIdleState(.55), this.ui.setReplayAvailable(this.lastBlobUrl));
	}
	enterReveal(e) {
		let t = e.prediction;
		if (!t) {
			this.enterUncertain("The model returned an output that could not be interpreted. Try another recording.");
			return;
		}
		this.revealTimeline?.kill(), this.revealTimeline = null, this.ui.hideNotice(), this.setPhase("reveal"), this.ui.setFallbackReveal(t);
		let n = e.prediction_label === "Male" || e.prediction_label === "Female" ? e.prediction_label : Kg(t);
		if (this.scene && this.scene.hasStatue(t)) {
			let r = this.scene.createRevealTimeline(t);
			if (!r) {
				this.enterError("The sculpture for this result could not be prepared. Try another recording.");
				return;
			}
			let i = this.ui.showResult(n, e.confidence, e.source), a = gi.timeline({ paused: !0 });
			a.add(r, 0), a.add(i, .82), r.paused(!1), i.paused(!1), a.play(0), gi.ticker.wake(), this.revealTimeline = a;
		} else this.fallbackMode && this.fallbackRevealAllowed ? this.ui.showResult(n, e.confidence, e.source).play(0) : this.enterError("The sculpture for this result could not be loaded. Reload the gallery to try again.");
	}
	enterUncertain(e) {
		this.revealTimeline?.kill(), this.revealTimeline = null, this.ui.hideResult(.25), this.ui.setFallbackReveal(null), this.setPhase("uncertain"), this.scene?.enterUncertainState(), this.ui.showNotice("No reliable prediction", e).play(0);
	}
	enterError(e) {
		this.revealTimeline?.kill(), this.revealTimeline = null, this.ui.hideResult(.25), this.ui.setFallbackReveal(null), this.setPhase("error"), this.scene?.enterErrorState(), this.ui.showNotice("Analysis interrupted", e).play(0);
	}
	resetToIdle() {
		this.revealTimeline?.kill(), this.revealTimeline = null, this.ui.hideResult(.3), this.ui.hideNotice(), this.ui.setFallbackReveal(null), this.ui.setElapsed(0), this.activeEventId = null, this.activeStartedAt = 0, this.setPhase("idle"), this.scene?.enterIdleState(.7), this.ui.setReplayAvailable(this.lastBlobUrl);
	}
	handleRecorderError(e, t = "Microphone unavailable") {
		this.disposed || (this.clearProcessingTimer(), this.waveform.setActive(!1), this.revealTimeline?.kill(), this.revealTimeline = null, this.activeEventId = null, this.activeStartedAt = 0, this.setPhase("error"), this.ui.setFallbackReveal(null), this.scene?.enterErrorState(), this.ui.showNotice(t, e).play(0));
	}
	handleLoadSettled(e) {
		if (!this.disposed) {
			if (this.ready = !0, this.ui.setReady(!0), this.ui.setLoading(!1), e.length === 0 ? (this.fallbackMode = !1, this.fallbackRevealAllowed = !1, this.ui.setFallbackVisible(!1), this.ui.setAssetBanner(null)) : e.length === 2 ? (this.fallbackMode = !0, this.fallbackRevealAllowed = !1, this.ui.setFallbackVisible(!0), this.ui.setAssetBanner("Both sculptures could not be loaded. The prediction will still be shown.")) : (this.fallbackMode = !1, this.fallbackRevealAllowed = !1, this.ui.setFallbackVisible(!1), this.ui.setAssetBanner(`${e[0] === "M" ? "The male" : "The female"} sculpture could not be loaded. Reload the gallery to try again.`)), this.pendingState) {
				let e = this.pendingState;
				this.pendingState = null, this.applyState(e);
			} else this.phase === "boot" && (this.setPhase("idle"), this.scene?.enterIdleState(0));
		}
	}
	handleContextLost() {
		this.disposed || (this.scene?.dispose(), this.scene = null, this.sceneAvailable = !1, this.fallbackMode = !0, this.fallbackRevealAllowed = !0, this.ready = !0, this.ui.setLoading(!1), this.ui.setFallbackVisible(!0), this.ui.setAssetBanner("The 3D gallery stopped responding. The prediction will still be shown."), this.ui.setReady(!0), this.phase === "boot" && this.setPhase("idle"));
	}
	retryAssets() {
		this.scene ? (this.ui.setAssetBanner(null), this.ui.setLoading(!0, 0, "Reloading the marble figures"), this.scene.retryLoad()) : this.ui.setAssetBanner("3D gallery unavailable in this browser. Reload the page to try again.");
	}
	configureFallbackImages() {
		let e = this.root.querySelector(".fallback-female");
		e && (e.src = _i);
		let t = this.root.querySelector(".fallback-male");
		t && (t.src = vi);
	}
	assetBannerForScene() {
		if (!this.scene) return null;
		let e = !this.scene.hasStatue("F"), t = !this.scene.hasStatue("M");
		return e && t ? "Both sculptures could not be loaded. The prediction will still be shown." : t ? "The male sculpture could not be loaded. Reload the gallery to try again." : e ? "The female sculpture could not be loaded. Reload the gallery to try again." : null;
	}
	assetBannerForFallback() {
		return "3D gallery unavailable in this browser. The prediction will still be shown.";
	}
	setPhase(e) {
		this.phase = e, this.ui.setPhase(e);
	}
	isListening() {
		return this.phase === "listening";
	}
	startProcessingTimer() {
		this.clearProcessingTimer(), this.processingTimer = window.setTimeout(() => {
			this.phase === "processing" && this.handleRecorderError("The analysis took too long to respond. Try another recording.", "Analysis interrupted");
		}, Jg);
	}
	clearProcessingTimer() {
		this.processingTimer !== null && (window.clearTimeout(this.processingTimer), this.processingTimer = null);
	}
}, Qg = /* @__PURE__ */ new WeakMap(), $g = (e) => {
	let { parentElement: t, data: n, setTriggerValue: r } = e, i = t.querySelector(".voice-reveal-root");
	if (!i) throw Error("Unexpected: voice reveal root element not found");
	let a = Qg.get(t);
	if (a) a.update(n);
	else {
		let e = new Zg({
			root: i,
			data: n,
			setTriggerValue: (e, t) => r(e, t)
		});
		Qg.set(t, e);
	}
	return () => {
		let e = Qg.get(t);
		e && (e.dispose(), Qg.delete(t));
	};
};
export { $g as default };
