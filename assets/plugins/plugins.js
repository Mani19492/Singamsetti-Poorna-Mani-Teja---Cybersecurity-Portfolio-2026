/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
	"use strict";
	const t = new Map,
		e = {
			set(e, i, n) {
				t.has(e) || t.set(e, new Map);
				const s = t.get(e);
				s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
			},
			get: (e, i) => t.has(e) && t.get(e).get(i) || null,
			remove(e, i) {
				if (!t.has(e)) return;
				const n = t.get(e);
				n.delete(i), 0 === n.size && t.delete(e)
			}
		},
		i = "transitionend",
		n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
		s = t => {
			t.dispatchEvent(new Event(i))
		},
		o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
		r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
		a = t => {
			if (!o(t) || 0 === t.getClientRects().length) return !1;
			const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
				i = t.closest("details:not([open])");
			if (!i) return e;
			if (i !== t) {
				const e = t.closest("summary");
				if (e && e.parentNode !== i) return !1;
				if (null === e) return !1
			}
			return e
		},
		l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
		c = t => {
			if (!document.documentElement.attachShadow) return null;
			if ("function" == typeof t.getRootNode) {
				const e = t.getRootNode();
				return e instanceof ShadowRoot ? e : null
			}
			return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
		},
		h = () => {},
		d = t => {
			t.offsetHeight
		},
		u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
		f = [],
		p = () => "rtl" === document.documentElement.dir,
		m = t => {
			var e;
			e = () => {
				const e = u();
				if (e) {
					const i = t.NAME,
						n = e.fn[i];
					e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
				}
			}, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
				for (const t of f) t()
			})), f.push(e)) : e()
		},
		g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
		_ = (t, e, n = !0) => {
			if (!n) return void g(t);
			const o = (t => {
				if (!t) return 0;
				let {
					transitionDuration: e,
					transitionDelay: i
				} = window.getComputedStyle(t);
				const n = Number.parseFloat(e),
					s = Number.parseFloat(i);
				return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
			})(e) + 5;
			let r = !1;
			const a = ({
				target: n
			}) => {
				n === e && (r = !0, e.removeEventListener(i, a), g(t))
			};
			e.addEventListener(i, a), setTimeout((() => {
				r || s(e)
			}), o)
		},
		b = (t, e, i, n) => {
			const s = t.length;
			let o = t.indexOf(e);
			return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
		},
		v = /[^.]*(?=\..*)\.|.*/,
		y = /\..*/,
		w = /::\d+$/,
		A = {};
	let E = 1;
	const T = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		},
		C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

	function O(t, e) {
		return e && `${e}::${E++}` || t.uidEvent || E++
	}

	function x(t) {
		const e = O(t);
		return t.uidEvent = e, A[e] = A[e] || {}, A[e]
	}

	function k(t, e, i = null) {
		return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
	}

	function L(t, e, i) {
		const n = "string" == typeof e,
			s = n ? i : e || i;
		let o = I(t);
		return C.has(o) || (o = t), [n, s, o]
	}

	function S(t, e, i, n, s) {
		if ("string" != typeof e || !t) return;
		let [o, r, a] = L(e, i, n);
		if (e in T) {
			const t = t => function(e) {
				if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
			};
			r = t(r)
		}
		const l = x(t),
			c = l[a] || (l[a] = {}),
			h = k(c, r, o ? i : null);
		if (h) return void(h.oneOff = h.oneOff && s);
		const d = O(r, e.replace(v, "")),
			u = o ? function(t, e, i) {
				return function n(s) {
					const o = t.querySelectorAll(e);
					for (let {
							target: r
						} = s; r && r !== this; r = r.parentNode)
						for (const a of o)
							if (a === r) return P(s, {
								delegateTarget: r
							}), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [s])
				}
			}(t, i, r) : function(t, e) {
				return function i(n) {
					return P(n, {
						delegateTarget: t
					}), i.oneOff && N.off(t, n.type, e), e.apply(t, [n])
				}
			}(t, r);
		u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
	}

	function D(t, e, i, n, s) {
		const o = k(e[i], n, s);
		o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
	}

	function $(t, e, i, n) {
		const s = e[i] || {};
		for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
	}

	function I(t) {
		return t = t.replace(y, ""), T[t] || t
	}
	const N = {
		on(t, e, i, n) {
			S(t, e, i, n, !1)
		},
		one(t, e, i, n) {
			S(t, e, i, n, !0)
		},
		off(t, e, i, n) {
			if ("string" != typeof e || !t) return;
			const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
			if (void 0 === o) {
				if (h)
					for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
				for (const [i, n] of Object.entries(c)) {
					const s = i.replace(w, "");
					a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
				}
			} else {
				if (!Object.keys(c).length) return;
				D(t, l, r, o, s ? i : null)
			}
		},
		trigger(t, e, i) {
			if ("string" != typeof e || !t) return null;
			const n = u();
			let s = null,
				o = !0,
				r = !0,
				a = !1;
			e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
			const l = P(new Event(e, {
				bubbles: o,
				cancelable: !0
			}), i);
			return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
		}
	};

	function P(t, e = {}) {
		for (const [i, n] of Object.entries(e)) try {
			t[i] = n
		} catch (e) {
			Object.defineProperty(t, i, {
				configurable: !0,
				get: () => n
			})
		}
		return t
	}

	function M(t) {
		if ("true" === t) return !0;
		if ("false" === t) return !1;
		if (t === Number(t).toString()) return Number(t);
		if ("" === t || "null" === t) return null;
		if ("string" != typeof t) return t;
		try {
			return JSON.parse(decodeURIComponent(t))
		} catch (e) {
			return t
		}
	}

	function j(t) {
		return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
	}
	const F = {
		setDataAttribute(t, e, i) {
			t.setAttribute(`data-bs-${j(e)}`, i)
		},
		removeDataAttribute(t, e) {
			t.removeAttribute(`data-bs-${j(e)}`)
		},
		getDataAttributes(t) {
			if (!t) return {};
			const e = {},
				i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
			for (const n of i) {
				let i = n.replace(/^bs/, "");
				i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n])
			}
			return e
		},
		getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${j(e)}`))
	};
	class H {
		static get Default() {
			return {}
		}
		static get DefaultType() {
			return {}
		}
		static get NAME() {
			throw new Error('You have to implement the static method "NAME", for each component!')
		}
		_getConfig(t) {
			return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		_configAfterMerge(t) {
			return t
		}
		_mergeConfigObj(t, e) {
			const i = o(e) ? F.getDataAttribute(e, "config") : {};
			return {
				...this.constructor.Default,
				..."object" == typeof i ? i : {},
				...o(e) ? F.getDataAttributes(e) : {},
				..."object" == typeof t ? t : {}
			}
		}
		_typeCheckConfig(t, e = this.constructor.DefaultType) {
			for (const [n, s] of Object.entries(e)) {
				const e = t[n],
					r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
				if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
			}
			var i
		}
	}
	class W extends H {
		constructor(t, i) {
			super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this))
		}
		dispose() {
			e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
			for (const t of Object.getOwnPropertyNames(this)) this[t] = null
		}
		_queueCallback(t, e, i = !0) {
			_(t, e, i)
		}
		_getConfig(t) {
			return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		static getInstance(t) {
			return e.get(r(t), this.DATA_KEY)
		}
		static getOrCreateInstance(t, e = {}) {
			return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
		}
		static get VERSION() {
			return "5.3.2"
		}
		static get DATA_KEY() {
			return `bs.${this.NAME}`
		}
		static get EVENT_KEY() {
			return `.${this.DATA_KEY}`
		}
		static eventName(t) {
			return `${t}${this.EVENT_KEY}`
		}
	}
	const B = t => {
			let e = t.getAttribute("data-bs-target");
			if (!e || "#" === e) {
				let i = t.getAttribute("href");
				if (!i || !i.includes("#") && !i.startsWith(".")) return null;
				i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? n(i.trim()) : null
			}
			return e
		},
		z = {
			find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
			findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
			children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
			parents(t, e) {
				const i = [];
				let n = t.parentNode.closest(e);
				for (; n;) i.push(n), n = n.parentNode.closest(e);
				return i
			},
			prev(t, e) {
				let i = t.previousElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.previousElementSibling
				}
				return []
			},
			next(t, e) {
				let i = t.nextElementSibling;
				for (; i;) {
					if (i.matches(e)) return [i];
					i = i.nextElementSibling
				}
				return []
			},
			focusableChildren(t) {
				const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
				return this.find(e, t).filter((t => !l(t) && a(t)))
			},
			getSelectorFromElement(t) {
				const e = B(t);
				return e && z.findOne(e) ? e : null
			},
			getElementFromSelector(t) {
				const e = B(t);
				return e ? z.findOne(e) : null
			},
			getMultipleElementsFromSelector(t) {
				const e = B(t);
				return e ? z.find(e) : []
			}
		},
		R = (t, e = "hide") => {
			const i = `click.dismiss${t.EVENT_KEY}`,
				n = t.NAME;
			N.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
				if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
				const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
				t.getOrCreateInstance(s)[e]()
			}))
		},
		q = ".bs.alert",
		V = `close${q}`,
		K = `closed${q}`;
	class Q extends W {
		static get NAME() {
			return "alert"
		}
		close() {
			if (N.trigger(this._element, V).defaultPrevented) return;
			this._element.classList.remove("show");
			const t = this._element.classList.contains("fade");
			this._queueCallback((() => this._destroyElement()), this._element, t)
		}
		_destroyElement() {
			this._element.remove(), N.trigger(this._element, K), this.dispose()
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = Q.getOrCreateInstance(this);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	R(Q, "close"), m(Q);
	const X = '[data-bs-toggle="button"]';
	class Y extends W {
		static get NAME() {
			return "button"
		}
		toggle() {
			this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = Y.getOrCreateInstance(this);
				"toggle" === t && e[t]()
			}))
		}
	}
	N.on(document, "click.bs.button.data-api", X, (t => {
		t.preventDefault();
		const e = t.target.closest(X);
		Y.getOrCreateInstance(e).toggle()
	})), m(Y);
	const U = ".bs.swipe",
		G = `touchstart${U}`,
		J = `touchmove${U}`,
		Z = `touchend${U}`,
		tt = `pointerdown${U}`,
		et = `pointerup${U}`,
		it = {
			endCallback: null,
			leftCallback: null,
			rightCallback: null
		},
		nt = {
			endCallback: "(function|null)",
			leftCallback: "(function|null)",
			rightCallback: "(function|null)"
		};
	class st extends H {
		constructor(t, e) {
			super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
		}
		static get Default() {
			return it
		}
		static get DefaultType() {
			return nt
		}
		static get NAME() {
			return "swipe"
		}
		dispose() {
			N.off(this._element, U)
		}
		_start(t) {
			this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
		}
		_end(t) {
			this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
		}
		_move(t) {
			this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
		}
		_handleSwipe() {
			const t = Math.abs(this._deltaX);
			if (t <= 40) return;
			const e = t / this._deltaX;
			this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
		}
		_initEvents() {
			this._supportPointerEvents ? (N.on(this._element, tt, (t => this._start(t))), N.on(this._element, et, (t => this._end(t))), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t => this._start(t))), N.on(this._element, J, (t => this._move(t))), N.on(this._element, Z, (t => this._end(t))))
		}
		_eventIsPointerPenTouch(t) {
			return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
		}
		static isSupported() {
			return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
		}
	}
	const ot = ".bs.carousel",
		rt = ".data-api",
		at = "next",
		lt = "prev",
		ct = "left",
		ht = "right",
		dt = `slide${ot}`,
		ut = `slid${ot}`,
		ft = `keydown${ot}`,
		pt = `mouseenter${ot}`,
		mt = `mouseleave${ot}`,
		gt = `dragstart${ot}`,
		_t = `load${ot}${rt}`,
		bt = `click${ot}${rt}`,
		vt = "carousel",
		yt = "active",
		wt = ".active",
		At = ".carousel-item",
		Et = wt + At,
		Tt = {
			ArrowLeft: ht,
			ArrowRight: ct
		},
		Ct = {
			interval: 5e3,
			keyboard: !0,
			pause: "hover",
			ride: !1,
			touch: !0,
			wrap: !0
		},
		Ot = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			pause: "(string|boolean)",
			ride: "(boolean|string)",
			touch: "boolean",
			wrap: "boolean"
		};
	class xt extends W {
		constructor(t, e) {
			super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle()
		}
		static get Default() {
			return Ct
		}
		static get DefaultType() {
			return Ot
		}
		static get NAME() {
			return "carousel"
		}
		next() {
			this._slide(at)
		}
		nextWhenVisible() {
			!document.hidden && a(this._element) && this.next()
		}
		prev() {
			this._slide(lt)
		}
		pause() {
			this._isSliding && s(this._element), this._clearInterval()
		}
		cycle() {
			this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
		}
		_maybeEnableCycle() {
			this._config.ride && (this._isSliding ? N.one(this._element, ut, (() => this.cycle())) : this.cycle())
		}
		to(t) {
			const e = this._getItems();
			if (t > e.length - 1 || t < 0) return;
			if (this._isSliding) return void N.one(this._element, ut, (() => this.to(t)));
			const i = this._getItemIndex(this._getActive());
			if (i === t) return;
			const n = t > i ? at : lt;
			this._slide(n, e[t])
		}
		dispose() {
			this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
		}
		_configAfterMerge(t) {
			return t.defaultInterval = t.interval, t
		}
		_addEventListeners() {
			this._config.keyboard && N.on(this._element, ft, (t => this._keydown(t))), "hover" === this._config.pause && (N.on(this._element, pt, (() => this.pause())), N.on(this._element, mt, (() => this._maybeEnableCycle()))), this._config.touch && st.isSupported() && this._addTouchEventListeners()
		}
		_addTouchEventListeners() {
			for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, (t => t.preventDefault()));
			const t = {
				leftCallback: () => this._slide(this._directionToOrder(ct)),
				rightCallback: () => this._slide(this._directionToOrder(ht)),
				endCallback: () => {
					"hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
				}
			};
			this._swipeHelper = new st(this._element, t)
		}
		_keydown(t) {
			if (/input|textarea/i.test(t.target.tagName)) return;
			const e = Tt[t.key];
			e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
		}
		_getItemIndex(t) {
			return this._getItems().indexOf(t)
		}
		_setActiveIndicatorElement(t) {
			if (!this._indicatorsElement) return;
			const e = z.findOne(wt, this._indicatorsElement);
			e.classList.remove(yt), e.removeAttribute("aria-current");
			const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
			i && (i.classList.add(yt), i.setAttribute("aria-current", "true"))
		}
		_updateInterval() {
			const t = this._activeElement || this._getActive();
			if (!t) return;
			const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
			this._config.interval = e || this._config.defaultInterval
		}
		_slide(t, e = null) {
			if (this._isSliding) return;
			const i = this._getActive(),
				n = t === at,
				s = e || b(this._getItems(), i, n, this._config.wrap);
			if (s === i) return;
			const o = this._getItemIndex(s),
				r = e => N.trigger(this._element, e, {
					relatedTarget: s,
					direction: this._orderToDirection(t),
					from: this._getItemIndex(i),
					to: o
				});
			if (r(dt).defaultPrevented) return;
			if (!i || !s) return;
			const a = Boolean(this._interval);
			this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
			const l = n ? "carousel-item-start" : "carousel-item-end",
				c = n ? "carousel-item-next" : "carousel-item-prev";
			s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
				s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut)
			}), i, this._isAnimated()), a && this.cycle()
		}
		_isAnimated() {
			return this._element.classList.contains("slide")
		}
		_getActive() {
			return z.findOne(Et, this._element)
		}
		_getItems() {
			return z.find(At, this._element)
		}
		_clearInterval() {
			this._interval && (clearInterval(this._interval), this._interval = null)
		}
		_directionToOrder(t) {
			return p() ? t === ct ? lt : at : t === ct ? at : lt
		}
		_orderToDirection(t) {
			return p() ? t === lt ? ct : ht : t === lt ? ht : ct
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = xt.getOrCreateInstance(this, t);
				if ("number" != typeof t) {
					if ("string" == typeof t) {
						if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
						e[t]()
					}
				} else e.to(t)
			}))
		}
	}
	N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
		const e = z.getElementFromSelector(this);
		if (!e || !e.classList.contains(vt)) return;
		t.preventDefault();
		const i = xt.getOrCreateInstance(e),
			n = this.getAttribute("data-bs-slide-to");
		return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
	})), N.on(window, _t, (() => {
		const t = z.find('[data-bs-ride="carousel"]');
		for (const e of t) xt.getOrCreateInstance(e)
	})), m(xt);
	const kt = ".bs.collapse",
		Lt = `show${kt}`,
		St = `shown${kt}`,
		Dt = `hide${kt}`,
		$t = `hidden${kt}`,
		It = `click${kt}.data-api`,
		Nt = "show",
		Pt = "collapse",
		Mt = "collapsing",
		jt = `:scope .${Pt} .${Pt}`,
		Ft = '[data-bs-toggle="collapse"]',
		Ht = {
			parent: null,
			toggle: !0
		},
		Wt = {
			parent: "(null|element)",
			toggle: "boolean"
		};
	class Bt extends W {
		constructor(t, e) {
			super(t, e), this._isTransitioning = !1, this._triggerArray = [];
			const i = z.find(Ft);
			for (const t of i) {
				const e = z.getSelectorFromElement(t),
					i = z.find(e).filter((t => t === this._element));
				null !== e && i.length && this._triggerArray.push(t)
			}
			this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
		}
		static get Default() {
			return Ht
		}
		static get DefaultType() {
			return Wt
		}
		static get NAME() {
			return "collapse"
		}
		toggle() {
			this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (this._isTransitioning || this._isShown()) return;
			let t = [];
			if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Bt.getOrCreateInstance(t, {
					toggle: !1
				})))), t.length && t[0]._isTransitioning) return;
			if (N.trigger(this._element, Lt).defaultPrevented) return;
			for (const e of t) e.hide();
			const e = this._getDimension();
			this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
			const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
			this._queueCallback((() => {
				this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St)
			}), this._element, !0), this._element.style[e] = `${this._element[i]}px`
		}
		hide() {
			if (this._isTransitioning || !this._isShown()) return;
			if (N.trigger(this._element, Dt).defaultPrevented) return;
			const t = this._getDimension();
			this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
			for (const t of this._triggerArray) {
				const e = z.getElementFromSelector(t);
				e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
			}
			this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
				this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t)
			}), this._element, !0)
		}
		_isShown(t = this._element) {
			return t.classList.contains(Nt)
		}
		_configAfterMerge(t) {
			return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
		}
		_getDimension() {
			return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
		}
		_initializeChildren() {
			if (!this._config.parent) return;
			const t = this._getFirstLevelChildren(Ft);
			for (const e of t) {
				const t = z.getElementFromSelector(e);
				t && this._addAriaAndCollapsedClass([e], this._isShown(t))
			}
		}
		_getFirstLevelChildren(t) {
			const e = z.find(jt, this._config.parent);
			return z.find(t, this._config.parent).filter((t => !e.includes(t)))
		}
		_addAriaAndCollapsedClass(t, e) {
			if (t.length)
				for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
		}
		static jQueryInterface(t) {
			const e = {};
			return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
				const i = Bt.getOrCreateInstance(this, e);
				if ("string" == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t]()
				}
			}))
		}
	}
	N.on(document, It, Ft, (function(t) {
		("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
		for (const t of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t, {
			toggle: !1
		}).toggle()
	})), m(Bt);
	var zt = "top",
		Rt = "bottom",
		qt = "right",
		Vt = "left",
		Kt = "auto",
		Qt = [zt, Rt, qt, Vt],
		Xt = "start",
		Yt = "end",
		Ut = "clippingParents",
		Gt = "viewport",
		Jt = "popper",
		Zt = "reference",
		te = Qt.reduce((function(t, e) {
			return t.concat([e + "-" + Xt, e + "-" + Yt])
		}), []),
		ee = [].concat(Qt, [Kt]).reduce((function(t, e) {
			return t.concat([e, e + "-" + Xt, e + "-" + Yt])
		}), []),
		ie = "beforeRead",
		ne = "read",
		se = "afterRead",
		oe = "beforeMain",
		re = "main",
		ae = "afterMain",
		le = "beforeWrite",
		ce = "write",
		he = "afterWrite",
		de = [ie, ne, se, oe, re, ae, le, ce, he];

	function ue(t) {
		return t ? (t.nodeName || "").toLowerCase() : null
	}

	function fe(t) {
		if (null == t) return window;
		if ("[object Window]" !== t.toString()) {
			var e = t.ownerDocument;
			return e && e.defaultView || window
		}
		return t
	}

	function pe(t) {
		return t instanceof fe(t).Element || t instanceof Element
	}

	function me(t) {
		return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
	}

	function ge(t) {
		return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
	}
	const _e = {
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: function(t) {
			var e = t.state;
			Object.keys(e.elements).forEach((function(t) {
				var i = e.styles[t] || {},
					n = e.attributes[t] || {},
					s = e.elements[t];
				me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
					var e = n[t];
					!1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
				})))
			}))
		},
		effect: function(t) {
			var e = t.state,
				i = {
					popper: {
						position: e.options.strategy,
						left: "0",
						top: "0",
						margin: "0"
					},
					arrow: {
						position: "absolute"
					},
					reference: {}
				};
			return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
				function() {
					Object.keys(e.elements).forEach((function(t) {
						var n = e.elements[t],
							s = e.attributes[t] || {},
							o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
								return t[e] = "", t
							}), {});
						me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
							n.removeAttribute(t)
						})))
					}))
				}
		},
		requires: ["computeStyles"]
	};

	function be(t) {
		return t.split("-")[0]
	}
	var ve = Math.max,
		ye = Math.min,
		we = Math.round;

	function Ae() {
		var t = navigator.userAgentData;
		return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
			return t.brand + "/" + t.version
		})).join(" ") : navigator.userAgent
	}

	function Ee() {
		return !/^((?!chrome|android).)*safari/i.test(Ae())
	}

	function Te(t, e, i) {
		void 0 === e && (e = !1), void 0 === i && (i = !1);
		var n = t.getBoundingClientRect(),
			s = 1,
			o = 1;
		e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
		var r = (pe(t) ? fe(t) : window).visualViewport,
			a = !Ee() && i,
			l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
			c = (n.top + (a && r ? r.offsetTop : 0)) / o,
			h = n.width / s,
			d = n.height / o;
		return {
			width: h,
			height: d,
			top: c,
			right: l + h,
			bottom: c + d,
			left: l,
			x: l,
			y: c
		}
	}

	function Ce(t) {
		var e = Te(t),
			i = t.offsetWidth,
			n = t.offsetHeight;
		return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
			x: t.offsetLeft,
			y: t.offsetTop,
			width: i,
			height: n
		}
	}

	function Oe(t, e) {
		var i = e.getRootNode && e.getRootNode();
		if (t.contains(e)) return !0;
		if (i && ge(i)) {
			var n = e;
			do {
				if (n && t.isSameNode(n)) return !0;
				n = n.parentNode || n.host
			} while (n)
		}
		return !1
	}

	function xe(t) {
		return fe(t).getComputedStyle(t)
	}

	function ke(t) {
		return ["table", "td", "th"].indexOf(ue(t)) >= 0
	}

	function Le(t) {
		return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
	}

	function Se(t) {
		return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
	}

	function De(t) {
		return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
	}

	function $e(t) {
		for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
		return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
			var e = /firefox/i.test(Ae());
			if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
			var i = Se(t);
			for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
				var n = xe(i);
				if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
				i = i.parentNode
			}
			return null
		}(t) || e
	}

	function Ie(t) {
		return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
	}

	function Ne(t, e, i) {
		return ve(t, ye(e, i))
	}

	function Pe(t) {
		return Object.assign({}, {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}, t)
	}

	function Me(t, e) {
		return e.reduce((function(e, i) {
			return e[i] = t, e
		}), {})
	}
	const je = {
		name: "arrow",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var e, i = t.state,
				n = t.name,
				s = t.options,
				o = i.elements.arrow,
				r = i.modifiersData.popperOffsets,
				a = be(i.placement),
				l = Ie(a),
				c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
			if (o && r) {
				var h = function(t, e) {
						return Pe("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
							placement: e.placement
						})) : t) ? t : Me(t, Qt))
					}(s.padding, i),
					d = Ce(o),
					u = "y" === l ? zt : Vt,
					f = "y" === l ? Rt : qt,
					p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
					m = r[l] - i.rects.reference[l],
					g = $e(o),
					_ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
					b = p / 2 - m / 2,
					v = h[u],
					y = _ - d[c] - h[f],
					w = _ / 2 - d[c] / 2 + b,
					A = Ne(v, w, y),
					E = l;
				i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
			}
		},
		effect: function(t) {
			var e = t.state,
				i = t.options.element,
				n = void 0 === i ? "[data-popper-arrow]" : i;
			null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
		},
		requires: ["popperOffsets"],
		requiresIfExists: ["preventOverflow"]
	};

	function Fe(t) {
		return t.split("-")[1]
	}
	var He = {
		top: "auto",
		right: "auto",
		bottom: "auto",
		left: "auto"
	};

	function We(t) {
		var e, i = t.popper,
			n = t.popperRect,
			s = t.placement,
			o = t.variation,
			r = t.offsets,
			a = t.position,
			l = t.gpuAcceleration,
			c = t.adaptive,
			h = t.roundOffsets,
			d = t.isFixed,
			u = r.x,
			f = void 0 === u ? 0 : u,
			p = r.y,
			m = void 0 === p ? 0 : p,
			g = "function" == typeof h ? h({
				x: f,
				y: m
			}) : {
				x: f,
				y: m
			};
		f = g.x, m = g.y;
		var _ = r.hasOwnProperty("x"),
			b = r.hasOwnProperty("y"),
			v = Vt,
			y = zt,
			w = window;
		if (c) {
			var A = $e(i),
				E = "clientHeight",
				T = "clientWidth";
			A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
		}
		var C, O = Object.assign({
				position: a
			}, c && He),
			x = !0 === h ? function(t, e) {
				var i = t.x,
					n = t.y,
					s = e.devicePixelRatio || 1;
				return {
					x: we(i * s) / s || 0,
					y: we(n * s) / s || 0
				}
			}({
				x: f,
				y: m
			}, fe(i)) : {
				x: f,
				y: m
			};
		return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
	}
	const Be = {
		name: "computeStyles",
		enabled: !0,
		phase: "beforeWrite",
		fn: function(t) {
			var e = t.state,
				i = t.options,
				n = i.gpuAcceleration,
				s = void 0 === n || n,
				o = i.adaptive,
				r = void 0 === o || o,
				a = i.roundOffsets,
				l = void 0 === a || a,
				c = {
					placement: be(e.placement),
					variation: Fe(e.placement),
					popper: e.elements.popper,
					popperRect: e.rects.popper,
					gpuAcceleration: s,
					isFixed: "fixed" === e.options.strategy
				};
			null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
				offsets: e.modifiersData.popperOffsets,
				position: e.options.strategy,
				adaptive: r,
				roundOffsets: l
			})))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
				offsets: e.modifiersData.arrow,
				position: "absolute",
				adaptive: !1,
				roundOffsets: l
			})))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
				"data-popper-placement": e.placement
			})
		},
		data: {}
	};
	var ze = {
		passive: !0
	};
	const Re = {
		name: "eventListeners",
		enabled: !0,
		phase: "write",
		fn: function() {},
		effect: function(t) {
			var e = t.state,
				i = t.instance,
				n = t.options,
				s = n.scroll,
				o = void 0 === s || s,
				r = n.resize,
				a = void 0 === r || r,
				l = fe(e.elements.popper),
				c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
			return o && c.forEach((function(t) {
					t.addEventListener("scroll", i.update, ze)
				})), a && l.addEventListener("resize", i.update, ze),
				function() {
					o && c.forEach((function(t) {
						t.removeEventListener("scroll", i.update, ze)
					})), a && l.removeEventListener("resize", i.update, ze)
				}
		},
		data: {}
	};
	var qe = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};

	function Ve(t) {
		return t.replace(/left|right|bottom|top/g, (function(t) {
			return qe[t]
		}))
	}
	var Ke = {
		start: "end",
		end: "start"
	};

	function Qe(t) {
		return t.replace(/start|end/g, (function(t) {
			return Ke[t]
		}))
	}

	function Xe(t) {
		var e = fe(t);
		return {
			scrollLeft: e.pageXOffset,
			scrollTop: e.pageYOffset
		}
	}

	function Ye(t) {
		return Te(Le(t)).left + Xe(t).scrollLeft
	}

	function Ue(t) {
		var e = xe(t),
			i = e.overflow,
			n = e.overflowX,
			s = e.overflowY;
		return /auto|scroll|overlay|hidden/.test(i + s + n)
	}

	function Ge(t) {
		return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
	}

	function Je(t, e) {
		var i;
		void 0 === e && (e = []);
		var n = Ge(t),
			s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
			o = fe(n),
			r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
			a = e.concat(r);
		return s ? a : a.concat(Je(Se(r)))
	}

	function Ze(t) {
		return Object.assign({}, t, {
			left: t.x,
			top: t.y,
			right: t.x + t.width,
			bottom: t.y + t.height
		})
	}

	function ti(t, e, i) {
		return e === Gt ? Ze(function(t, e) {
			var i = fe(t),
				n = Le(t),
				s = i.visualViewport,
				o = n.clientWidth,
				r = n.clientHeight,
				a = 0,
				l = 0;
			if (s) {
				o = s.width, r = s.height;
				var c = Ee();
				(c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
			}
			return {
				width: o,
				height: r,
				x: a + Ye(t),
				y: l
			}
		}(t, i)) : pe(e) ? function(t, e) {
			var i = Te(t, !1, "fixed" === e);
			return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
		}(e, i) : Ze(function(t) {
			var e, i = Le(t),
				n = Xe(t),
				s = null == (e = t.ownerDocument) ? void 0 : e.body,
				o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
				r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
				a = -n.scrollLeft + Ye(t),
				l = -n.scrollTop;
			return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
				width: o,
				height: r,
				x: a,
				y: l
			}
		}(Le(t)))
	}

	function ei(t) {
		var e, i = t.reference,
			n = t.element,
			s = t.placement,
			o = s ? be(s) : null,
			r = s ? Fe(s) : null,
			a = i.x + i.width / 2 - n.width / 2,
			l = i.y + i.height / 2 - n.height / 2;
		switch (o) {
			case zt:
				e = {
					x: a,
					y: i.y - n.height
				};
				break;
			case Rt:
				e = {
					x: a,
					y: i.y + i.height
				};
				break;
			case qt:
				e = {
					x: i.x + i.width,
					y: l
				};
				break;
			case Vt:
				e = {
					x: i.x - n.width,
					y: l
				};
				break;
			default:
				e = {
					x: i.x,
					y: i.y
				}
		}
		var c = o ? Ie(o) : null;
		if (null != c) {
			var h = "y" === c ? "height" : "width";
			switch (r) {
				case Xt:
					e[c] = e[c] - (i[h] / 2 - n[h] / 2);
					break;
				case Yt:
					e[c] = e[c] + (i[h] / 2 - n[h] / 2)
			}
		}
		return e
	}

	function ii(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = void 0 === n ? t.placement : n,
			o = i.strategy,
			r = void 0 === o ? t.strategy : o,
			a = i.boundary,
			l = void 0 === a ? Ut : a,
			c = i.rootBoundary,
			h = void 0 === c ? Gt : c,
			d = i.elementContext,
			u = void 0 === d ? Jt : d,
			f = i.altBoundary,
			p = void 0 !== f && f,
			m = i.padding,
			g = void 0 === m ? 0 : m,
			_ = Pe("number" != typeof g ? g : Me(g, Qt)),
			b = u === Jt ? Zt : Jt,
			v = t.rects.popper,
			y = t.elements[p ? b : u],
			w = function(t, e, i, n) {
				var s = "clippingParents" === e ? function(t) {
						var e = Je(Se(t)),
							i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
						return pe(i) ? e.filter((function(t) {
							return pe(t) && Oe(t, i) && "body" !== ue(t)
						})) : []
					}(t) : [].concat(e),
					o = [].concat(s, [i]),
					r = o[0],
					a = o.reduce((function(e, i) {
						var s = ti(t, i, n);
						return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e
					}), ti(t, r, n));
				return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
			}(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
			A = Te(t.elements.reference),
			E = ei({
				reference: A,
				element: v,
				strategy: "absolute",
				placement: s
			}),
			T = Ze(Object.assign({}, v, E)),
			C = u === Jt ? T : A,
			O = {
				top: w.top - C.top + _.top,
				bottom: C.bottom - w.bottom + _.bottom,
				left: w.left - C.left + _.left,
				right: C.right - w.right + _.right
			},
			x = t.modifiersData.offset;
		if (u === Jt && x) {
			var k = x[s];
			Object.keys(O).forEach((function(t) {
				var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
					i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
				O[t] += k[i] * e
			}))
		}
		return O
	}

	function ni(t, e) {
		void 0 === e && (e = {});
		var i = e,
			n = i.placement,
			s = i.boundary,
			o = i.rootBoundary,
			r = i.padding,
			a = i.flipVariations,
			l = i.allowedAutoPlacements,
			c = void 0 === l ? ee : l,
			h = Fe(n),
			d = h ? a ? te : te.filter((function(t) {
				return Fe(t) === h
			})) : Qt,
			u = d.filter((function(t) {
				return c.indexOf(t) >= 0
			}));
		0 === u.length && (u = d);
		var f = u.reduce((function(e, i) {
			return e[i] = ii(t, {
				placement: i,
				boundary: s,
				rootBoundary: o,
				padding: r
			})[be(i)], e
		}), {});
		return Object.keys(f).sort((function(t, e) {
			return f[t] - f[e]
		}))
	}
	const si = {
		name: "flip",
		enabled: !0,
		phase: "main",
		fn: function(t) {
			var e = t.state,
				i = t.options,
				n = t.name;
			if (!e.modifiersData[n]._skip) {
				for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
						if (be(t) === Kt) return [];
						var e = Ve(t);
						return [Qe(t), e, Qe(e)]
					}(g) : [Ve(g)]), v = [g].concat(b).reduce((function(t, i) {
						return t.concat(be(i) === Kt ? ni(e, {
							placement: i,
							boundary: h,
							rootBoundary: d,
							padding: c,
							flipVariations: p,
							allowedAutoPlacements: m
						}) : i)
					}), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
					var O = v[C],
						x = be(O),
						k = Fe(O) === Xt,
						L = [zt, Rt].indexOf(x) >= 0,
						S = L ? "width" : "height",
						D = ii(e, {
							placement: O,
							boundary: h,
							rootBoundary: d,
							altBoundary: u,
							padding: c
						}),
						$ = L ? k ? qt : Vt : k ? Rt : zt;
					y[S] > w[S] && ($ = Ve($));
					var I = Ve($),
						N = [];
					if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every((function(t) {
							return t
						}))) {
						T = O, E = !1;
						break
					}
					A.set(O, N)
				}
				if (E)
					for (var P = function(t) {
							var e = v.find((function(e) {
								var i = A.get(e);
								if (i) return i.slice(0, t).every((function(t) {
									return t
								}))
							}));
							if (e) return T = e, "break"
						}, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
				e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
			}
		},
		requiresIfExists: ["offset"],
		data: {
			_skip: !1
		}
	};

	function oi(t, e, i) {
		return void 0 === i && (i = {
			x: 0,
			y: 0
		}), {
			top: t.top - e.height - i.y,
			right: t.right - e.width + i.x,
			bottom: t.bottom - e.height + i.y,
			left: t.left - e.width - i.x
		}
	}

	function ri(t) {
		return [zt, qt, Rt, Vt].some((function(e) {
			return t[e] >= 0
		}))
	}
	const ai = {
			name: "hide",
			enabled: !0,
			phase: "main",
			requiresIfExists: ["preventOverflow"],
			fn: function(t) {
				var e = t.state,
					i = t.name,
					n = e.rects.reference,
					s = e.rects.popper,
					o = e.modifiersData.preventOverflow,
					r = ii(e, {
						elementContext: "reference"
					}),
					a = ii(e, {
						altBoundary: !0
					}),
					l = oi(r, n),
					c = oi(a, s, o),
					h = ri(l),
					d = ri(c);
				e.modifiersData[i] = {
					referenceClippingOffsets: l,
					popperEscapeOffsets: c,
					isReferenceHidden: h,
					hasPopperEscaped: d
				}, e.attributes.popper = Object.assign({}, e.attributes.popper, {
					"data-popper-reference-hidden": h,
					"data-popper-escaped": d
				})
			}
		},
		li = {
			name: "offset",
			enabled: !0,
			phase: "main",
			requires: ["popperOffsets"],
			fn: function(t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.offset,
					o = void 0 === s ? [0, 0] : s,
					r = ee.reduce((function(t, i) {
						return t[i] = function(t, e, i) {
							var n = be(t),
								s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
								o = "function" == typeof i ? i(Object.assign({}, e, {
									placement: t
								})) : i,
								r = o[0],
								a = o[1];
							return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
								x: a,
								y: r
							} : {
								x: r,
								y: a
							}
						}(i, e.rects, o), t
					}), {}),
					a = r[e.placement],
					l = a.x,
					c = a.y;
				null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
			}
		},
		ci = {
			name: "popperOffsets",
			enabled: !0,
			phase: "read",
			fn: function(t) {
				var e = t.state,
					i = t.name;
				e.modifiersData[i] = ei({
					reference: e.rects.reference,
					element: e.rects.popper,
					strategy: "absolute",
					placement: e.placement
				})
			},
			data: {}
		},
		hi = {
			name: "preventOverflow",
			enabled: !0,
			phase: "main",
			fn: function(t) {
				var e = t.state,
					i = t.options,
					n = t.name,
					s = i.mainAxis,
					o = void 0 === s || s,
					r = i.altAxis,
					a = void 0 !== r && r,
					l = i.boundary,
					c = i.rootBoundary,
					h = i.altBoundary,
					d = i.padding,
					u = i.tether,
					f = void 0 === u || u,
					p = i.tetherOffset,
					m = void 0 === p ? 0 : p,
					g = ii(e, {
						boundary: l,
						rootBoundary: c,
						padding: d,
						altBoundary: h
					}),
					_ = be(e.placement),
					b = Fe(e.placement),
					v = !b,
					y = Ie(_),
					w = "x" === y ? "y" : "x",
					A = e.modifiersData.popperOffsets,
					E = e.rects.reference,
					T = e.rects.popper,
					C = "function" == typeof m ? m(Object.assign({}, e.rects, {
						placement: e.placement
					})) : m,
					O = "number" == typeof C ? {
						mainAxis: C,
						altAxis: C
					} : Object.assign({
						mainAxis: 0,
						altAxis: 0
					}, C),
					x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
					k = {
						x: 0,
						y: 0
					};
				if (A) {
					if (o) {
						var L, S = "y" === y ? zt : Vt,
							D = "y" === y ? Rt : qt,
							$ = "y" === y ? "height" : "width",
							I = A[y],
							N = I + g[S],
							P = I - g[D],
							M = f ? -T[$] / 2 : 0,
							j = b === Xt ? E[$] : T[$],
							F = b === Xt ? -T[$] : -E[$],
							H = e.elements.arrow,
							W = f && H ? Ce(H) : {
								width: 0,
								height: 0
							},
							B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
								top: 0,
								right: 0,
								bottom: 0,
								left: 0
							},
							z = B[S],
							R = B[D],
							q = Ne(0, E[$], W[$]),
							V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
							K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
							Q = e.elements.arrow && $e(e.elements.arrow),
							X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
							Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
							U = I + K - Y,
							G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
						A[y] = G, k[y] = G - I
					}
					if (a) {
						var J, Z = "x" === y ? zt : Vt,
							tt = "x" === y ? Rt : qt,
							et = A[w],
							it = "y" === w ? "height" : "width",
							nt = et + g[Z],
							st = et - g[tt],
							ot = -1 !== [zt, Vt].indexOf(_),
							rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
							at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
							lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
							ct = f && ot ? function(t, e, i) {
								var n = Ne(t, e, i);
								return n > i ? i : n
							}(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
						A[w] = ct, k[w] = ct - et
					}
					e.modifiersData[n] = k
				}
			},
			requiresIfExists: ["offset"]
		};

	function di(t, e, i) {
		void 0 === i && (i = !1);
		var n, s, o = me(e),
			r = me(e) && function(t) {
				var e = t.getBoundingClientRect(),
					i = we(e.width) / t.offsetWidth || 1,
					n = we(e.height) / t.offsetHeight || 1;
				return 1 !== i || 1 !== n
			}(e),
			a = Le(e),
			l = Te(t, r, i),
			c = {
				scrollLeft: 0,
				scrollTop: 0
			},
			h = {
				x: 0,
				y: 0
			};
		return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
			scrollLeft: (s = n).scrollLeft,
			scrollTop: s.scrollTop
		} : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
			x: l.left + c.scrollLeft - h.x,
			y: l.top + c.scrollTop - h.y,
			width: l.width,
			height: l.height
		}
	}

	function ui(t) {
		var e = new Map,
			i = new Set,
			n = [];

		function s(t) {
			i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
				if (!i.has(t)) {
					var n = e.get(t);
					n && s(n)
				}
			})), n.push(t)
		}
		return t.forEach((function(t) {
			e.set(t.name, t)
		})), t.forEach((function(t) {
			i.has(t.name) || s(t)
		})), n
	}
	var fi = {
		placement: "bottom",
		modifiers: [],
		strategy: "absolute"
	};

	function pi() {
		for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
		return !e.some((function(t) {
			return !(t && "function" == typeof t.getBoundingClientRect)
		}))
	}

	function mi(t) {
		void 0 === t && (t = {});
		var e = t,
			i = e.defaultModifiers,
			n = void 0 === i ? [] : i,
			s = e.defaultOptions,
			o = void 0 === s ? fi : s;
		return function(t, e, i) {
			void 0 === i && (i = o);
			var s, r, a = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign({}, fi, o),
					modifiersData: {},
					elements: {
						reference: t,
						popper: e
					},
					attributes: {},
					styles: {}
				},
				l = [],
				c = !1,
				h = {
					state: a,
					setOptions: function(i) {
						var s = "function" == typeof i ? i(a.options) : i;
						d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
							reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
							popper: Je(e)
						};
						var r, c, u = function(t) {
							var e = ui(t);
							return de.reduce((function(t, i) {
								return t.concat(e.filter((function(t) {
									return t.phase === i
								})))
							}), [])
						}((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
							var i = t[e.name];
							return t[e.name] = i ? Object.assign({}, i, e, {
								options: Object.assign({}, i.options, e.options),
								data: Object.assign({}, i.data, e.data)
							}) : e, t
						}), {}), Object.keys(c).map((function(t) {
							return c[t]
						}))));
						return a.orderedModifiers = u.filter((function(t) {
							return t.enabled
						})), a.orderedModifiers.forEach((function(t) {
							var e = t.name,
								i = t.options,
								n = void 0 === i ? {} : i,
								s = t.effect;
							if ("function" == typeof s) {
								var o = s({
									state: a,
									name: e,
									instance: h,
									options: n
								});
								l.push(o || function() {})
							}
						})), h.update()
					},
					forceUpdate: function() {
						if (!c) {
							var t = a.elements,
								e = t.reference,
								i = t.popper;
							if (pi(e, i)) {
								a.rects = {
									reference: di(e, $e(i), "fixed" === a.options.strategy),
									popper: Ce(i)
								}, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
									return a.modifiersData[t.name] = Object.assign({}, t.data)
								}));
								for (var n = 0; n < a.orderedModifiers.length; n++)
									if (!0 !== a.reset) {
										var s = a.orderedModifiers[n],
											o = s.fn,
											r = s.options,
											l = void 0 === r ? {} : r,
											d = s.name;
										"function" == typeof o && (a = o({
											state: a,
											options: l,
											name: d,
											instance: h
										}) || a)
									} else a.reset = !1, n = -1
							}
						}
					},
					update: (s = function() {
						return new Promise((function(t) {
							h.forceUpdate(), t(a)
						}))
					}, function() {
						return r || (r = new Promise((function(t) {
							Promise.resolve().then((function() {
								r = void 0, t(s())
							}))
						}))), r
					}),
					destroy: function() {
						d(), c = !0
					}
				};
			if (!pi(t, e)) return h;

			function d() {
				l.forEach((function(t) {
					return t()
				})), l = []
			}
			return h.setOptions(i).then((function(t) {
				!c && i.onFirstUpdate && i.onFirstUpdate(t)
			})), h
		}
	}
	var gi = mi(),
		_i = mi({
			defaultModifiers: [Re, ci, Be, _e]
		}),
		bi = mi({
			defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
		});
	const vi = Object.freeze(Object.defineProperty({
			__proto__: null,
			afterMain: ae,
			afterRead: se,
			afterWrite: he,
			applyStyles: _e,
			arrow: je,
			auto: Kt,
			basePlacements: Qt,
			beforeMain: oe,
			beforeRead: ie,
			beforeWrite: le,
			bottom: Rt,
			clippingParents: Ut,
			computeStyles: Be,
			createPopper: bi,
			createPopperBase: gi,
			createPopperLite: _i,
			detectOverflow: ii,
			end: Yt,
			eventListeners: Re,
			flip: si,
			hide: ai,
			left: Vt,
			main: re,
			modifierPhases: de,
			offset: li,
			placements: ee,
			popper: Jt,
			popperGenerator: mi,
			popperOffsets: ci,
			preventOverflow: hi,
			read: ne,
			reference: Zt,
			right: qt,
			start: Xt,
			top: zt,
			variationPlacements: te,
			viewport: Gt,
			write: ce
		}, Symbol.toStringTag, {
			value: "Module"
		})),
		yi = "dropdown",
		wi = ".bs.dropdown",
		Ai = ".data-api",
		Ei = "ArrowUp",
		Ti = "ArrowDown",
		Ci = `hide${wi}`,
		Oi = `hidden${wi}`,
		xi = `show${wi}`,
		ki = `shown${wi}`,
		Li = `click${wi}${Ai}`,
		Si = `keydown${wi}${Ai}`,
		Di = `keyup${wi}${Ai}`,
		$i = "show",
		Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
		Ni = `${Ii}.${$i}`,
		Pi = ".dropdown-menu",
		Mi = p() ? "top-end" : "top-start",
		ji = p() ? "top-start" : "top-end",
		Fi = p() ? "bottom-end" : "bottom-start",
		Hi = p() ? "bottom-start" : "bottom-end",
		Wi = p() ? "left-start" : "right-start",
		Bi = p() ? "right-start" : "left-start",
		zi = {
			autoClose: !0,
			boundary: "clippingParents",
			display: "dynamic",
			offset: [0, 2],
			popperConfig: null,
			reference: "toggle"
		},
		Ri = {
			autoClose: "(boolean|string)",
			boundary: "(string|element)",
			display: "string",
			offset: "(array|string|function)",
			popperConfig: "(null|object|function)",
			reference: "(string|element|object)"
		};
	class qi extends W {
		constructor(t, e) {
			super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar()
		}
		static get Default() {
			return zi
		}
		static get DefaultType() {
			return Ri
		}
		static get NAME() {
			return yi
		}
		toggle() {
			return this._isShown() ? this.hide() : this.show()
		}
		show() {
			if (l(this._element) || this._isShown()) return;
			const t = {
				relatedTarget: this._element
			};
			if (!N.trigger(this._element, xi, t).defaultPrevented) {
				if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
					for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
				this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t)
			}
		}
		hide() {
			if (l(this._element) || !this._isShown()) return;
			const t = {
				relatedTarget: this._element
			};
			this._completeHide(t)
		}
		dispose() {
			this._popper && this._popper.destroy(), super.dispose()
		}
		update() {
			this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
		}
		_completeHide(t) {
			if (!N.trigger(this._element, Ci, t).defaultPrevented) {
				if ("ontouchstart" in document.documentElement)
					for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
				this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t)
			}
		}
		_getConfig(t) {
			if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
			return t
		}
		_createPopper() {
			if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
			let t = this._element;
			"parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
			const e = this._getPopperConfig();
			this._popper = bi(t, this._menu, e)
		}
		_isShown() {
			return this._menu.classList.contains($i)
		}
		_getPlacement() {
			const t = this._parent;
			if (t.classList.contains("dropend")) return Wi;
			if (t.classList.contains("dropstart")) return Bi;
			if (t.classList.contains("dropup-center")) return "top";
			if (t.classList.contains("dropdown-center")) return "bottom";
			const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
			return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi
		}
		_detectNavbar() {
			return null !== this._element.closest(".navbar")
		}
		_getOffset() {
			const {
				offset: t
			} = this._config;
			return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
		}
		_getPopperConfig() {
			const t = {
				placement: this._getPlacement(),
				modifiers: [{
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}]
			};
			return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
				name: "applyStyles",
				enabled: !1
			}]), {
				...t,
				...g(this._config.popperConfig, [t])
			}
		}
		_selectMenuItem({
			key: t,
			target: e
		}) {
			const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
			i.length && b(i, e, t === Ti, !i.includes(e)).focus()
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = qi.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
		static clearMenus(t) {
			if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
			const e = z.find(Ni);
			for (const i of e) {
				const e = qi.getInstance(i);
				if (!e || !1 === e._config.autoClose) continue;
				const n = t.composedPath(),
					s = n.includes(e._menu);
				if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
				if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
				const o = {
					relatedTarget: e._element
				};
				"click" === t.type && (o.clickEvent = t), e._completeHide(o)
			}
		}
		static dataApiKeydownHandler(t) {
			const e = /input|textarea/i.test(t.target.tagName),
				i = "Escape" === t.key,
				n = [Ei, Ti].includes(t.key);
			if (!n && !i) return;
			if (e && !i) return;
			t.preventDefault();
			const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
				o = qi.getOrCreateInstance(s);
			if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
			o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
		}
	}
	N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, (function(t) {
		t.preventDefault(), qi.getOrCreateInstance(this).toggle()
	})), m(qi);
	const Vi = "backdrop",
		Ki = "show",
		Qi = `mousedown.bs.${Vi}`,
		Xi = {
			className: "modal-backdrop",
			clickCallback: null,
			isAnimated: !1,
			isVisible: !0,
			rootElement: "body"
		},
		Yi = {
			className: "string",
			clickCallback: "(function|null)",
			isAnimated: "boolean",
			isVisible: "boolean",
			rootElement: "(element|string)"
		};
	class Ui extends H {
		constructor(t) {
			super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
		}
		static get Default() {
			return Xi
		}
		static get DefaultType() {
			return Yi
		}
		static get NAME() {
			return Vi
		}
		show(t) {
			if (!this._config.isVisible) return void g(t);
			this._append();
			const e = this._getElement();
			this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation((() => {
				g(t)
			}))
		}
		hide(t) {
			this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation((() => {
				this.dispose(), g(t)
			}))) : g(t)
		}
		dispose() {
			this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1)
		}
		_getElement() {
			if (!this._element) {
				const t = document.createElement("div");
				t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
			}
			return this._element
		}
		_configAfterMerge(t) {
			return t.rootElement = r(t.rootElement), t
		}
		_append() {
			if (this._isAppended) return;
			const t = this._getElement();
			this._config.rootElement.append(t), N.on(t, Qi, (() => {
				g(this._config.clickCallback)
			})), this._isAppended = !0
		}
		_emulateAnimation(t) {
			_(t, this._getElement(), this._config.isAnimated)
		}
	}
	const Gi = ".bs.focustrap",
		Ji = `focusin${Gi}`,
		Zi = `keydown.tab${Gi}`,
		tn = "backward",
		en = {
			autofocus: !0,
			trapElement: null
		},
		nn = {
			autofocus: "boolean",
			trapElement: "element"
		};
	class sn extends H {
		constructor(t) {
			super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
		}
		static get Default() {
			return en
		}
		static get DefaultType() {
			return nn
		}
		static get NAME() {
			return "focustrap"
		}
		activate() {
			this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t => this._handleFocusin(t))), N.on(document, Zi, (t => this._handleKeydown(t))), this._isActive = !0)
		}
		deactivate() {
			this._isActive && (this._isActive = !1, N.off(document, Gi))
		}
		_handleFocusin(t) {
			const {
				trapElement: e
			} = this._config;
			if (t.target === document || t.target === e || e.contains(t.target)) return;
			const i = z.focusableChildren(e);
			0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
		}
		_handleKeydown(t) {
			"Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
		}
	}
	const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		rn = ".sticky-top",
		an = "padding-right",
		ln = "margin-right";
	class cn {
		constructor() {
			this._element = document.body
		}
		getWidth() {
			const t = document.documentElement.clientWidth;
			return Math.abs(window.innerWidth - t)
		}
		hide() {
			const t = this.getWidth();
			this._disableOverFlow(), this._setElementAttributes(this._element, an, (e => e + t)), this._setElementAttributes(on, an, (e => e + t)), this._setElementAttributes(rn, ln, (e => e - t))
		}
		reset() {
			this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln)
		}
		isOverflowing() {
			return this.getWidth() > 0
		}
		_disableOverFlow() {
			this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
		}
		_setElementAttributes(t, e, i) {
			const n = this.getWidth();
			this._applyManipulationCallback(t, (t => {
				if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
				this._saveInitialAttribute(t, e);
				const s = window.getComputedStyle(t).getPropertyValue(e);
				t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
			}))
		}
		_saveInitialAttribute(t, e) {
			const i = t.style.getPropertyValue(e);
			i && F.setDataAttribute(t, e, i)
		}
		_resetElementAttributes(t, e) {
			this._applyManipulationCallback(t, (t => {
				const i = F.getDataAttribute(t, e);
				null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
			}))
		}
		_applyManipulationCallback(t, e) {
			if (o(t)) e(t);
			else
				for (const i of z.find(t, this._element)) e(i)
		}
	}
	const hn = ".bs.modal",
		dn = `hide${hn}`,
		un = `hidePrevented${hn}`,
		fn = `hidden${hn}`,
		pn = `show${hn}`,
		mn = `shown${hn}`,
		gn = `resize${hn}`,
		_n = `click.dismiss${hn}`,
		bn = `mousedown.dismiss${hn}`,
		vn = `keydown.dismiss${hn}`,
		yn = `click${hn}.data-api`,
		wn = "modal-open",
		An = "show",
		En = "modal-static",
		Tn = {
			backdrop: !0,
			focus: !0,
			keyboard: !0
		},
		Cn = {
			backdrop: "(boolean|string)",
			focus: "boolean",
			keyboard: "boolean"
		};
	class On extends W {
		constructor(t, e) {
			super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners()
		}
		static get Default() {
			return Tn
		}
		static get DefaultType() {
			return Cn
		}
		static get NAME() {
			return "modal"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
				relatedTarget: t
			}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
		}
		hide() {
			this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
		}
		dispose() {
			N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
		}
		handleUpdate() {
			this._adjustDialog()
		}
		_initializeBackDrop() {
			return new Ui({
				isVisible: Boolean(this._config.backdrop),
				isAnimated: this._isAnimated()
			})
		}
		_initializeFocusTrap() {
			return new sn({
				trapElement: this._element
			})
		}
		_showElement(t) {
			document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
			const e = z.findOne(".modal-body", this._dialog);
			e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback((() => {
				this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
					relatedTarget: t
				})
			}), this._dialog, this._isAnimated())
		}
		_addEventListeners() {
			N.on(this._element, vn, (t => {
				"Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
			})), N.on(window, gn, (() => {
				this._isShown && !this._isTransitioning && this._adjustDialog()
			})), N.on(this._element, bn, (t => {
				N.one(this._element, _n, (e => {
					this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
				}))
			}))
		}
		_hideModal() {
			this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
				document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn)
			}))
		}
		_isAnimated() {
			return this._element.classList.contains("fade")
		}
		_triggerBackdropTransition() {
			if (N.trigger(this._element, un).defaultPrevented) return;
			const t = this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._element.style.overflowY;
			"hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback((() => {
				this._element.classList.remove(En), this._queueCallback((() => {
					this._element.style.overflowY = e
				}), this._dialog)
			}), this._dialog), this._element.focus())
		}
		_adjustDialog() {
			const t = this._element.scrollHeight > document.documentElement.clientHeight,
				e = this._scrollBar.getWidth(),
				i = e > 0;
			if (i && !t) {
				const t = p() ? "paddingLeft" : "paddingRight";
				this._element.style[t] = `${e}px`
			}
			if (!i && t) {
				const t = p() ? "paddingRight" : "paddingLeft";
				this._element.style[t] = `${e}px`
			}
		}
		_resetAdjustments() {
			this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
		}
		static jQueryInterface(t, e) {
			return this.each((function() {
				const i = On.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
					i[t](e)
				}
			}))
		}
	}
	N.on(document, yn, '[data-bs-toggle="modal"]', (function(t) {
		const e = z.getElementFromSelector(this);
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, (t => {
			t.defaultPrevented || N.one(e, fn, (() => {
				a(this) && this.focus()
			}))
		}));
		const i = z.findOne(".modal.show");
		i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this)
	})), R(On), m(On);
	const xn = ".bs.offcanvas",
		kn = ".data-api",
		Ln = `load${xn}${kn}`,
		Sn = "show",
		Dn = "showing",
		$n = "hiding",
		In = ".offcanvas.show",
		Nn = `show${xn}`,
		Pn = `shown${xn}`,
		Mn = `hide${xn}`,
		jn = `hidePrevented${xn}`,
		Fn = `hidden${xn}`,
		Hn = `resize${xn}`,
		Wn = `click${xn}${kn}`,
		Bn = `keydown.dismiss${xn}`,
		zn = {
			backdrop: !0,
			keyboard: !0,
			scroll: !1
		},
		Rn = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			scroll: "boolean"
		};
	class qn extends W {
		constructor(t, e) {
			super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
		}
		static get Default() {
			return zn
		}
		static get DefaultType() {
			return Rn
		}
		static get NAME() {
			return "offcanvas"
		}
		toggle(t) {
			return this._isShown ? this.hide() : this.show(t)
		}
		show(t) {
			this._isShown || N.trigger(this._element, Nn, {
				relatedTarget: t
			}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback((() => {
				this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
					relatedTarget: t
				})
			}), this._element, !0))
		}
		hide() {
			this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback((() => {
				this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn)
			}), this._element, !0)))
		}
		dispose() {
			this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
		}
		_initializeBackDrop() {
			const t = Boolean(this._config.backdrop);
			return new Ui({
				className: "offcanvas-backdrop",
				isVisible: t,
				isAnimated: !0,
				rootElement: this._element.parentNode,
				clickCallback: t ? () => {
					"static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn)
				} : null
			})
		}
		_initializeFocusTrap() {
			return new sn({
				trapElement: this._element
			})
		}
		_addEventListeners() {
			N.on(this._element, Bn, (t => {
				"Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn))
			}))
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = qn.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	N.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function(t) {
		const e = z.getElementFromSelector(this);
		if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
		N.one(e, Fn, (() => {
			a(this) && this.focus()
		}));
		const i = z.findOne(In);
		i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this)
	})), N.on(window, Ln, (() => {
		for (const t of z.find(In)) qn.getOrCreateInstance(t).show()
	})), N.on(window, Hn, (() => {
		for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
	})), R(qn), m(qn);
	const Vn = {
			"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
			a: ["target", "href", "title", "rel"],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ["src", "srcset", "alt", "title", "width", "height"],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		},
		Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
		Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
		Xn = (t, e) => {
			const i = t.nodeName.toLowerCase();
			return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
		},
		Yn = {
			allowList: Vn,
			content: {},
			extraClass: "",
			html: !1,
			sanitize: !0,
			sanitizeFn: null,
			template: "<div></div>"
		},
		Un = {
			allowList: "object",
			content: "object",
			extraClass: "(string|function)",
			html: "boolean",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			template: "string"
		},
		Gn = {
			entry: "(string|element|function|null)",
			selector: "(string|element)"
		};
	class Jn extends H {
		constructor(t) {
			super(), this._config = this._getConfig(t)
		}
		static get Default() {
			return Yn
		}
		static get DefaultType() {
			return Un
		}
		static get NAME() {
			return "TemplateFactory"
		}
		getContent() {
			return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
		}
		hasContent() {
			return this.getContent().length > 0
		}
		changeContent(t) {
			return this._checkContent(t), this._config.content = {
				...this._config.content,
				...t
			}, this
		}
		toHtml() {
			const t = document.createElement("div");
			t.innerHTML = this._maybeSanitize(this._config.template);
			for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
			const e = t.children[0],
				i = this._resolvePossibleFunction(this._config.extraClass);
			return i && e.classList.add(...i.split(" ")), e
		}
		_typeCheckConfig(t) {
			super._typeCheckConfig(t), this._checkContent(t.content)
		}
		_checkContent(t) {
			for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
				selector: e,
				entry: i
			}, Gn)
		}
		_setContent(t, e, i) {
			const n = z.findOne(i, t);
			n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
		}
		_maybeSanitize(t) {
			return this._config.sanitize ? function(t, e, i) {
				if (!t.length) return t;
				if (i && "function" == typeof i) return i(t);
				const n = (new window.DOMParser).parseFromString(t, "text/html"),
					s = [].concat(...n.body.querySelectorAll("*"));
				for (const t of s) {
					const i = t.nodeName.toLowerCase();
					if (!Object.keys(e).includes(i)) {
						t.remove();
						continue
					}
					const n = [].concat(...t.attributes),
						s = [].concat(e["*"] || [], e[i] || []);
					for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName)
				}
				return n.body.innerHTML
			}(t, this._config.allowList, this._config.sanitizeFn) : t
		}
		_resolvePossibleFunction(t) {
			return g(t, [this])
		}
		_putElementInTemplate(t, e) {
			if (this._config.html) return e.innerHTML = "", void e.append(t);
			e.textContent = t.textContent
		}
	}
	const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
		ts = "fade",
		es = "show",
		is = ".modal",
		ns = "hide.bs.modal",
		ss = "hover",
		os = "focus",
		rs = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: p() ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: p() ? "right" : "left"
		},
		as = {
			allowList: Vn,
			animation: !0,
			boundary: "clippingParents",
			container: !1,
			customClass: "",
			delay: 0,
			fallbackPlacements: ["top", "right", "bottom", "left"],
			html: !1,
			offset: [0, 6],
			placement: "top",
			popperConfig: null,
			sanitize: !0,
			sanitizeFn: null,
			selector: !1,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			title: "",
			trigger: "hover focus"
		},
		ls = {
			allowList: "object",
			animation: "boolean",
			boundary: "(string|element)",
			container: "(string|element|boolean)",
			customClass: "(string|function)",
			delay: "(number|object)",
			fallbackPlacements: "array",
			html: "boolean",
			offset: "(array|string|function)",
			placement: "(string|function)",
			popperConfig: "(null|object|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			selector: "(string|boolean)",
			template: "string",
			title: "(string|element|function)",
			trigger: "string"
		};
	class cs extends W {
		constructor(t, e) {
			if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
			super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
		}
		static get Default() {
			return as
		}
		static get DefaultType() {
			return ls
		}
		static get NAME() {
			return "tooltip"
		}
		enable() {
			this._isEnabled = !0
		}
		disable() {
			this._isEnabled = !1
		}
		toggleEnabled() {
			this._isEnabled = !this._isEnabled
		}
		toggle() {
			this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
		}
		dispose() {
			clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
		}
		show() {
			if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
			if (!this._isWithContent() || !this._isEnabled) return;
			const t = N.trigger(this._element, this.constructor.eventName("show")),
				e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
			if (t.defaultPrevented || !e) return;
			this._disposePopper();
			const i = this._getTipElement();
			this._element.setAttribute("aria-describedby", i.getAttribute("id"));
			const {
				container: n
			} = this._config;
			if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement)
				for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
			this._queueCallback((() => {
				N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
			}), this.tip, this._isAnimated())
		}
		hide() {
			if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
				if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
					for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
				this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback((() => {
					this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")))
				}), this.tip, this._isAnimated())
			}
		}
		update() {
			this._popper && this._popper.update()
		}
		_isWithContent() {
			return Boolean(this._getTitle())
		}
		_getTipElement() {
			return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
		}
		_createTipElement(t) {
			const e = this._getTemplateFactory(t).toHtml();
			if (!e) return null;
			e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
			const i = (t => {
				do {
					t += Math.floor(1e6 * Math.random())
				} while (document.getElementById(t));
				return t
			})(this.constructor.NAME).toString();
			return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e
		}
		setContent(t) {
			this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
		}
		_getTemplateFactory(t) {
			return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
				...this._config,
				content: t,
				extraClass: this._resolvePossibleFunction(this._config.customClass)
			}), this._templateFactory
		}
		_getContentForTemplate() {
			return {
				".tooltip-inner": this._getTitle()
			}
		}
		_getTitle() {
			return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
		}
		_initializeOnDelegatedTarget(t) {
			return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
		}
		_isAnimated() {
			return this._config.animation || this.tip && this.tip.classList.contains(ts)
		}
		_isShown() {
			return this.tip && this.tip.classList.contains(es)
		}
		_createPopper(t) {
			const e = g(this._config.placement, [this, t, this._element]),
				i = rs[e.toUpperCase()];
			return bi(this._element, t, this._getPopperConfig(i))
		}
		_getOffset() {
			const {
				offset: t
			} = this._config;
			return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
		}
		_resolvePossibleFunction(t) {
			return g(t, [this._element])
		}
		_getPopperConfig(t) {
			const e = {
				placement: t,
				modifiers: [{
					name: "flip",
					options: {
						fallbackPlacements: this._config.fallbackPlacements
					}
				}, {
					name: "offset",
					options: {
						offset: this._getOffset()
					}
				}, {
					name: "preventOverflow",
					options: {
						boundary: this._config.boundary
					}
				}, {
					name: "arrow",
					options: {
						element: `.${this.constructor.NAME}-arrow`
					}
				}, {
					name: "preSetPlacement",
					enabled: !0,
					phase: "beforeMain",
					fn: t => {
						this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
					}
				}]
			};
			return {
				...e,
				...g(this._config.popperConfig, [e])
			}
		}
		_setListeners() {
			const t = this._config.trigger.split(" ");
			for (const e of t)
				if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
					this._initializeOnDelegatedTarget(t).toggle()
				}));
				else if ("manual" !== e) {
				const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
					i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
				N.on(this._element, t, this._config.selector, (t => {
					const e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter()
				})), N.on(this._element, i, this._config.selector, (t => {
					const e = this._initializeOnDelegatedTarget(t);
					e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave()
				}))
			}
			this._hideModalHandler = () => {
				this._element && this.hide()
			}, N.on(this._element.closest(is), ns, this._hideModalHandler)
		}
		_fixTitle() {
			const t = this._element.getAttribute("title");
			t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
		}
		_enter() {
			this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
				this._isHovered && this.show()
			}), this._config.delay.show))
		}
		_leave() {
			this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
				this._isHovered || this.hide()
			}), this._config.delay.hide))
		}
		_setTimeout(t, e) {
			clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
		}
		_isWithActiveTrigger() {
			return Object.values(this._activeTrigger).includes(!0)
		}
		_getConfig(t) {
			const e = F.getDataAttributes(this._element);
			for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
			return t = {
				...e,
				..."object" == typeof t && t ? t : {}
			}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
		}
		_configAfterMerge(t) {
			return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
		}
		_getDelegateConfig() {
			const t = {};
			for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
			return t.selector = !1, t.trigger = "manual", t
		}
		_disposePopper() {
			this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = cs.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	m(cs);
	const hs = {
			...cs.Default,
			content: "",
			offset: [0, 8],
			placement: "right",
			template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
			trigger: "click"
		},
		ds = {
			...cs.DefaultType,
			content: "(null|string|element|function)"
		};
	class us extends cs {
		static get Default() {
			return hs
		}
		static get DefaultType() {
			return ds
		}
		static get NAME() {
			return "popover"
		}
		_isWithContent() {
			return this._getTitle() || this._getContent()
		}
		_getContentForTemplate() {
			return {
				".popover-header": this._getTitle(),
				".popover-body": this._getContent()
			}
		}
		_getContent() {
			return this._resolvePossibleFunction(this._config.content)
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = us.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	m(us);
	const fs = ".bs.scrollspy",
		ps = `activate${fs}`,
		ms = `click${fs}`,
		gs = `load${fs}.data-api`,
		_s = "active",
		bs = "[href]",
		vs = ".nav-link",
		ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
		ws = {
			offset: null,
			rootMargin: "0px 0px -25%",
			smoothScroll: !1,
			target: null,
			threshold: [.1, .5, 1]
		},
		As = {
			offset: "(number|null)",
			rootMargin: "string",
			smoothScroll: "boolean",
			target: "element",
			threshold: "array"
		};
	class Es extends W {
		constructor(t, e) {
			super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
				visibleEntryTop: 0,
				parentScrollTop: 0
			}, this.refresh()
		}
		static get Default() {
			return ws
		}
		static get DefaultType() {
			return As
		}
		static get NAME() {
			return "scrollspy"
		}
		refresh() {
			this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
			for (const t of this._observableSections.values()) this._observer.observe(t)
		}
		dispose() {
			this._observer.disconnect(), super.dispose()
		}
		_configAfterMerge(t) {
			return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
		}
		_maybeEnableSmoothScroll() {
			this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t => {
				const e = this._observableSections.get(t.target.hash);
				if (e) {
					t.preventDefault();
					const i = this._rootElement || window,
						n = e.offsetTop - this._element.offsetTop;
					if (i.scrollTo) return void i.scrollTo({
						top: n,
						behavior: "smooth"
					});
					i.scrollTop = n
				}
			})))
		}
		_getNewObserver() {
			const t = {
				root: this._rootElement,
				threshold: this._config.threshold,
				rootMargin: this._config.rootMargin
			};
			return new IntersectionObserver((t => this._observerCallback(t)), t)
		}
		_observerCallback(t) {
			const e = t => this._targetLinks.get(`#${t.target.id}`),
				i = t => {
					this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
				},
				n = (this._rootElement || document.documentElement).scrollTop,
				s = n >= this._previousScrollData.parentScrollTop;
			this._previousScrollData.parentScrollTop = n;
			for (const o of t) {
				if (!o.isIntersecting) {
					this._activeTarget = null, this._clearActiveClass(e(o));
					continue
				}
				const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
				if (s && t) {
					if (i(o), !n) return
				} else s || t || i(o)
			}
		}
		_initializeTargetsAndObservables() {
			this._targetLinks = new Map, this._observableSections = new Map;
			const t = z.find(bs, this._config.target);
			for (const e of t) {
				if (!e.hash || l(e)) continue;
				const t = z.findOne(decodeURI(e.hash), this._element);
				a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
			}
		}
		_process(t) {
			this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
				relatedTarget: t
			}))
		}
		_activateParents(t) {
			if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
			else
				for (const e of z.parents(t, ".nav, .list-group"))
					for (const t of z.prev(e, ys)) t.classList.add(_s)
		}
		_clearActiveClass(t) {
			t.classList.remove(_s);
			const e = z.find(`${bs}.${_s}`, t);
			for (const t of e) t.classList.remove(_s)
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = Es.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	N.on(window, gs, (() => {
		for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t)
	})), m(Es);
	const Ts = ".bs.tab",
		Cs = `hide${Ts}`,
		Os = `hidden${Ts}`,
		xs = `show${Ts}`,
		ks = `shown${Ts}`,
		Ls = `click${Ts}`,
		Ss = `keydown${Ts}`,
		Ds = `load${Ts}`,
		$s = "ArrowLeft",
		Is = "ArrowRight",
		Ns = "ArrowUp",
		Ps = "ArrowDown",
		Ms = "Home",
		js = "End",
		Fs = "active",
		Hs = "fade",
		Ws = "show",
		Bs = ".dropdown-toggle",
		zs = `:not(${Bs})`,
		Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
		qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
		Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
	class Ks extends W {
		constructor(t) {
			super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t => this._keydown(t))))
		}
		static get NAME() {
			return "tab"
		}
		show() {
			const t = this._element;
			if (this._elemIsActive(t)) return;
			const e = this._getActiveElem(),
				i = e ? N.trigger(e, Cs, {
					relatedTarget: t
				}) : null;
			N.trigger(t, xs, {
				relatedTarget: e
			}).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
		}
		_activate(t, e) {
			t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback((() => {
				"tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
					relatedTarget: e
				})) : t.classList.add(Ws)
			}), t, t.classList.contains(Hs)))
		}
		_deactivate(t, e) {
			t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback((() => {
				"tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
					relatedTarget: e
				})) : t.classList.remove(Ws)
			}), t, t.classList.contains(Hs)))
		}
		_keydown(t) {
			if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
			t.stopPropagation(), t.preventDefault();
			const e = this._getChildren().filter((t => !l(t)));
			let i;
			if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];
			else {
				const n = [Is, Ps].includes(t.key);
				i = b(e, t.target, n, !0)
			}
			i && (i.focus({
				preventScroll: !0
			}), Ks.getOrCreateInstance(i).show())
		}
		_getChildren() {
			return z.find(qs, this._parent)
		}
		_getActiveElem() {
			return this._getChildren().find((t => this._elemIsActive(t))) || null
		}
		_setInitialAttributes(t, e) {
			this._setAttributeIfNotExists(t, "role", "tablist");
			for (const t of e) this._setInitialAttributesOnChild(t)
		}
		_setInitialAttributesOnChild(t) {
			t = this._getInnerElement(t);
			const e = this._elemIsActive(t),
				i = this._getOuterElement(t);
			t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
		}
		_setInitialAttributesOnTargetPanel(t) {
			const e = z.getElementFromSelector(t);
			e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
		}
		_toggleDropDown(t, e) {
			const i = this._getOuterElement(t);
			if (!i.classList.contains("dropdown")) return;
			const n = (t, n) => {
				const s = z.findOne(t, i);
				s && s.classList.toggle(n, e)
			};
			n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e)
		}
		_setAttributeIfNotExists(t, e, i) {
			t.hasAttribute(e) || t.setAttribute(e, i)
		}
		_elemIsActive(t) {
			return t.classList.contains(Fs)
		}
		_getInnerElement(t) {
			return t.matches(qs) ? t : z.findOne(qs, t)
		}
		_getOuterElement(t) {
			return t.closest(".nav-item, .list-group-item") || t
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = Ks.getOrCreateInstance(this);
				if ("string" == typeof t) {
					if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
					e[t]()
				}
			}))
		}
	}
	N.on(document, Ls, Rs, (function(t) {
		["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show()
	})), N.on(window, Ds, (() => {
		for (const t of z.find(Vs)) Ks.getOrCreateInstance(t)
	})), m(Ks);
	const Qs = ".bs.toast",
		Xs = `mouseover${Qs}`,
		Ys = `mouseout${Qs}`,
		Us = `focusin${Qs}`,
		Gs = `focusout${Qs}`,
		Js = `hide${Qs}`,
		Zs = `hidden${Qs}`,
		to = `show${Qs}`,
		eo = `shown${Qs}`,
		io = "hide",
		no = "show",
		so = "showing",
		oo = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		ro = {
			animation: !0,
			autohide: !0,
			delay: 5e3
		};
	class ao extends W {
		constructor(t, e) {
			super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
		}
		static get Default() {
			return ro
		}
		static get DefaultType() {
			return oo
		}
		static get NAME() {
			return "toast"
		}
		show() {
			N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback((() => {
				this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide()
			}), this._element, this._config.animation))
		}
		hide() {
			this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback((() => {
				this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs)
			}), this._element, this._config.animation)))
		}
		dispose() {
			this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose()
		}
		isShown() {
			return this._element.classList.contains(no)
		}
		_maybeScheduleHide() {
			this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
				this.hide()
			}), this._config.delay)))
		}
		_onInteraction(t, e) {
			switch (t.type) {
				case "mouseover":
				case "mouseout":
					this._hasMouseInteraction = e;
					break;
				case "focusin":
				case "focusout":
					this._hasKeyboardInteraction = e
			}
			if (e) return void this._clearTimeout();
			const i = t.relatedTarget;
			this._element === i || this._element.contains(i) || this._maybeScheduleHide()
		}
		_setListeners() {
			N.on(this._element, Xs, (t => this._onInteraction(t, !0))), N.on(this._element, Ys, (t => this._onInteraction(t, !1))), N.on(this._element, Us, (t => this._onInteraction(t, !0))), N.on(this._element, Gs, (t => this._onInteraction(t, !1)))
		}
		_clearTimeout() {
			clearTimeout(this._timeout), this._timeout = null
		}
		static jQueryInterface(t) {
			return this.each((function() {
				const e = ao.getOrCreateInstance(this, t);
				if ("string" == typeof t) {
					if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
					e[t](this)
				}
			}))
		}
	}
	return R(ao), m(ao), {
		Alert: Q,
		Button: Y,
		Carousel: xt,
		Collapse: Bt,
		Dropdown: qi,
		Modal: On,
		Offcanvas: qn,
		Popover: us,
		ScrollSpy: Es,
		Tab: Ks,
		Toast: ao,
		Tooltip: cs
	}
}));


/*
 *
 * Retina.js
 *
 */
(function(a, b) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = b() : 'function' == typeof define && define.amd ? define(b) : a.retinajs = b()
})(this, function() {
	'use strict';

	function a(a) {
		return Array.prototype.slice.call(a)
	}

	function b(a) {
		var b = parseInt(a, 10);
		return k < b ? k : b
	}

	function c(a) {
		return a.hasAttribute('data-no-resize') || (0 === a.offsetWidth && 0 === a.offsetHeight ? (a.setAttribute('width', a.naturalWidth), a.setAttribute('height', a.naturalHeight)) : (a.setAttribute('width', a.offsetWidth), a.setAttribute('height', a.offsetHeight))), a
	}

	function d(a, b) {
		var d = a.nodeName.toLowerCase(),
			e = document.createElement('img');
		e.addEventListener('load', function() {
			'img' === d ? c(a).setAttribute('src', b) : a.style.backgroundImage = 'url(' + b + ')'
		}), e.setAttribute('src', b), a.setAttribute(o, !0)
	}

	function e(a, c) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
			f = b(e);
		if (c && 1 < f) {
			var g = c.replace(l, '@' + f + 'x$1');
			d(a, g)
		}
	}

	function f(a, b, c) {
		1 < k && d(a, c)
	}

	function g(b) {
		return b ? 'function' == typeof b.forEach ? b : a(b) : 'undefined' == typeof document ? [] : a(document.querySelectorAll(n))
	}

	function h(a) {
		return a.style.backgroundImage.replace(m, '$2')
	}

	function i(a) {
		g(a).forEach(function(a) {
			if (!a.getAttribute(o)) {
				var b = 'img' === a.nodeName.toLowerCase(),
					c = b ? a.getAttribute('src') : h(a),
					d = a.getAttribute('data-rjs'),
					g = !isNaN(parseInt(d, 10));
				if (null === d) return;
				g ? e(a, c, d) : f(a, c, d)
			}
		})
	}
	var j = 'undefined' != typeof window,
		k = Math.round(j ? window.devicePixelRatio || 1 : 1),
		l = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
		m = /url\(('|")?([^)'"]+)('|")?\)/i,
		n = '[data-rjs]',
		o = 'data-rjs-processed';
	return j && (window.addEventListener('load', function() {
		i()
	}), window.retinajs = i), i
});


/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
	var b, c, d, e, f, g, h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function() {},
		u = !!window.jQuery,
		v = a(window),
		w = function(a, c) {
			b.ev.on(o + a + p, c)
		},
		x = function(b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		y = function(c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		z = function(c) {
			return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
		},
		A = function() {
			a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
		},
		B = function() {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	t.prototype = {
		constructor: t,
		init: function() {
			var c = navigator.appVersion;
			b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
		},
		open: function(c) {
			var e;
			if (c.isObj === !1) {
				b.items = c.items.toArray(), b.index = 0;
				var g, h = c.items;
				for (e = 0; e < h.length; e++)
					if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = e;
						break
					}
			} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return void b.updateItemHTML();
			b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
				b.close()
			}), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
				b._checkIfClose(a.target) && b.close()
			}), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
			}
			y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
				c.close_replaceWith = z(d.type)
			}), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: v.scrollTop(),
				position: "absolute"
			}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: d.height(),
				position: "absolute"
			}), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
				27 === a.keyCode && b.close()
			}), v.on("resize" + p, function() {
				b.updateSize()
			}), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
			var k = b.wH = v.height(),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o)
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
			var r = b.st.mainClass;
			return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
				b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
			}, 16), b.isOpen = !0, b.updateSize(k), y(m), c
		},
		close: function() {
			b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function() {
			y(h);
			var c = r + " " + q + " ";
			if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
		},
		updateSize: function(a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), b.wH = d
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
		},
		updateItemHTML: function() {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var f = b.st[d] ? b.st[d].markup : !1;
				y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
		},
		appendContent: function(a, c) {
			b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
		},
		parseEl: function(c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					} e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
		},
		addGroup: function(a, c) {
			var d = function(d) {
				d.mfpEl = this, b._openClick(d, a, c)
			};
			c || (c = {});
			var e = "click.magnificPopup";
			c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
		},
		_openClick: function(c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
			}
		},
		updateStatus: function(a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
					a.stopImmediatePropagation()
				}), b.container.addClass("mfp-s-" + a), c = a
			}
		},
		_checkIfClose: function(c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function(a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a)
		},
		_removeClassFromMFP: function(a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
		},
		_hasScrollBar: function(a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		},
		_setFocus: function() {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function(c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function(b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
				if (void 0 === d || d === !1) return !0;
				if (e = c.split("_"), e.length > 1) {
					var f = b.find(p + "-" + e[0]);
					if (f.length > 0) {
						var g = e[1];
						"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
					}
				} else b.find(p + "-" + c).html(d)
			})
		},
		_getScrollbarSize: function() {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function(b, c) {
			return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function() {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function(b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, a.fn.magnificPopup = function(c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) || 0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var C, D, E, F = "inline",
		G = function() {
			E && (D.after(E.addClass(C)).detach(), E = null)
		};
	a.magnificPopup.registerModule(F, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				b.types.push(F), w(h + "." + F, function() {
					G()
				})
			},
			getInline: function(c, d) {
				if (G(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var H, I = "ajax",
		J = function() {
			H && a(document.body).removeClass(H)
		},
		K = function() {
			J(), b.req && b.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
			},
			getAjax: function(c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend({
					url: c.src,
					success: function(d, e, f) {
						var g = {
							data: d,
							xhr: f
						};
						y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
							b.wrap.addClass(q)
						}, 16), b.updateStatus("ready"), y("AjaxContentAdded")
					},
					error: function() {
						J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(d), ""
			}
		}
	});
	var L, M = function(c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"), w(m + d, function() {
					"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
				}), w(h + d, function() {
					c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
				}), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
			},
			resizeImage: function() {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function(a) {
				a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function(a) {
				var c = 0,
					d = a.img[0],
					e = function(f) {
						L && clearInterval(L), L = setInterval(function() {
							return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
						}, f)
					};
				e(1)
			},
			getImage: function(c, d) {
				var e = 0,
					f = function() {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function() {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: M(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var N, O = function() {
		return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var a, c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e, f, g = c.duration,
						j = function(a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								f = "transition";
							return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
						},
						k = function() {
							b.content.css("visibility", "visible")
						};
					w("BuildControls" + d, function() {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
							f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
								f.css(b._getOffset(!0)), e = setTimeout(function() {
									k(), setTimeout(function() {
										f.remove(), a = f = null, y("ZoomAnimationEnded")
									}, 16)
								}, g)
							}, 16)
						}
					}), w(i + d, function() {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.st.removalDelay = g, !a) {
								if (a = b._getItemToZoom(), !a) return;
								f = j(a)
							}
							f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
								f.css(b._getOffset())
							}, 16)
						}
					}), w(h + d, function() {
						b._allowZoom() && (k(), f && f.remove(), a = null)
					})
				}
			},
			_allowZoom: function() {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function() {
				return b.currItem.hasSize ? b.currItem.img : !1
			},
			_getOffset: function(c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = {
					width: d.width(),
					height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
				};
				return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
			}
		}
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function(a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				b.types.push(P), w("BeforeChange", function(a, b, c) {
					b !== c && (b === P ? R() : c === P && R(!0))
				}), w(h + "." + P, function() {
					R()
				})
			},
			getIframe: function(c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function() {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var S = function(a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		T = function(a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var c = b.st.gallery,
					e = ".mfp-gallery";
				return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
					c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
						return b.items.length > 1 ? (b.next(), !1) : void 0
					}), d.on("keydown" + e, function(a) {
						37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
					})
				}), w("UpdateStatus" + e, function(a, c) {
					c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
				}), w(l + e, function(a, d, e, f) {
					var g = b.items.length;
					e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
				}), w("BuildControls" + e, function() {
					if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
						var d = c.arrowMarkup,
							e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
							f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
						e.click(function() {
							b.prev()
						}), f.click(function() {
							b.next()
						}), b.container.append(e.add(f))
					}
				}), w(n + e, function() {
					b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
						b.preloadNearbyImages(), b._preloadTimeout = null
					}, 16)
				}), void w(h + e, function() {
					d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
				})) : !1
			},
			next: function() {
				b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
			},
			prev: function() {
				b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
			},
			goTo: function(a) {
				b.direction = a >= b.index, b.index = a, b.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var a, c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function(c) {
				if (c = S(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
						d.hasSize = !0
					}).on("error.mfploader", function() {
						d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
					}).attr("src", d.src)), d.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function(a) {
				return a.src.replace(/\.\w+$/, function(a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				if (window.devicePixelRatio > 1) {
					var a = b.st.retina,
						c = a.ratio;
					c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
						b.img.css({
							"max-width": b.img[0].naturalWidth / c,
							width: "100%"
						})
					}), w("ElementParse." + U, function(b, d) {
						d.src = a.replaceSrc(d, c)
					}))
				}
			}
		}
	}), A()
});


/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 22, 2023
 */

var Swiper = function() {
	"use strict";

	function e(e) {
		return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
	}

	function t(s, a) {
		void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
			void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
		}))
	}
	const s = {
		body: {},
		addEventListener() {},
		removeEventListener() {},
		activeElement: {
			blur() {},
			nodeName: ""
		},
		querySelector: () => null,
		querySelectorAll: () => [],
		getElementById: () => null,
		createEvent: () => ({
			initEvent() {}
		}),
		createElement: () => ({
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName: () => []
		}),
		createElementNS: () => ({}),
		importNode: () => null,
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		}
	};

	function a() {
		const e = "undefined" != typeof document ? document : {};
		return t(e, s), e
	}
	const i = {
		document: s,
		navigator: {
			userAgent: ""
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState() {},
			pushState() {},
			go() {},
			back() {}
		},
		CustomEvent: function() {
			return this
		},
		addEventListener() {},
		removeEventListener() {},
		getComputedStyle: () => ({
			getPropertyValue: () => ""
		}),
		Image() {},
		Date() {},
		screen: {},
		setTimeout() {},
		clearTimeout() {},
		matchMedia: () => ({}),
		requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
		cancelAnimationFrame(e) {
			"undefined" != typeof setTimeout && clearTimeout(e)
		}
	};

	function r() {
		const e = "undefined" != typeof window ? window : {};
		return t(e, i), e
	}

	function n(e) {
		return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
	}

	function l(e, t) {
		return void 0 === t && (t = 0), setTimeout(e, t)
	}

	function o() {
		return Date.now()
	}

	function d(e, t) {
		void 0 === t && (t = "x");
		const s = r();
		let a, i, n;
		const l = function(e) {
			const t = r();
			let s;
			return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
		}(e);
		return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
	}

	function c(e) {
		return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
	}

	function p() {
		const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
			t = ["__proto__", "constructor", "prototype"];
		for (let a = 1; a < arguments.length; a += 1) {
			const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
			if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
				const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
				for (let t = 0, a = s.length; t < a; t += 1) {
					const a = s[t],
						r = Object.getOwnPropertyDescriptor(i, a);
					void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
				}
			}
		}
		var s;
		return e
	}

	function u(e, t, s) {
		e.style.setProperty(t, s)
	}

	function m(e) {
		let {
			swiper: t,
			targetPosition: s,
			side: a
		} = e;
		const i = r(),
			n = -t.translate;
		let l, o = null;
		const d = t.params.speed;
		t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
		const c = s > n ? "next" : "prev",
			p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
			u = () => {
				l = (new Date).getTime(), null === o && (o = l);
				const e = Math.max(Math.min((l - o) / d, 1), 0),
					r = .5 - Math.cos(e * Math.PI) / 2;
				let c = n + r * (s - n);
				if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
						[a]: c
					}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
					t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
						[a]: c
					})
				})), void i.cancelAnimationFrame(t.cssModeFrameID);
				t.cssModeFrameID = i.requestAnimationFrame(u)
			};
		u()
	}

	function h(e) {
		return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
	}

	function f(e, t) {
		return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
	}

	function g(e) {
		try {
			return void console.warn(e)
		} catch (e) {}
	}

	function v(e, t) {
		void 0 === t && (t = []);
		const s = document.createElement(e);
		return s.classList.add(...Array.isArray(t) ? t : n(t)), s
	}

	function w(e) {
		const t = r(),
			s = a(),
			i = e.getBoundingClientRect(),
			n = s.body,
			l = e.clientTop || n.clientTop || 0,
			o = e.clientLeft || n.clientLeft || 0,
			d = e === t ? t.scrollY : e.scrollTop,
			c = e === t ? t.scrollX : e.scrollLeft;
		return {
			top: i.top + d - l,
			left: i.left + c - o
		}
	}

	function b(e, t) {
		return r().getComputedStyle(e, null).getPropertyValue(t)
	}

	function y(e) {
		let t, s = e;
		if (s) {
			for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
			return t
		}
	}

	function E(e, t) {
		const s = [];
		let a = e.parentElement;
		for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
		return s
	}

	function x(e, t) {
		t && e.addEventListener("transitionend", (function s(a) {
			a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
		}))
	}

	function S(e, t, s) {
		const a = r();
		return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
	}
	let T, M, C;

	function P() {
		return T || (T = function() {
			const e = r(),
				t = a();
			return {
				smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
				touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
			}
		}()), T
	}

	function L(e) {
		return void 0 === e && (e = {}), M || (M = function(e) {
			let {
				userAgent: t
			} = void 0 === e ? {} : e;
			const s = P(),
				a = r(),
				i = a.navigator.platform,
				n = t || a.navigator.userAgent,
				l = {
					ios: !1,
					android: !1
				},
				o = a.screen.width,
				d = a.screen.height,
				c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
			let p = n.match(/(iPad).*OS\s([\d_]+)/);
			const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
				m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
				h = "Win32" === i;
			let f = "MacIntel" === i;
			return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
		}(e)), M
	}

	function A() {
		return C || (C = function() {
			const e = r();
			let t = !1;

			function s() {
				const t = e.navigator.userAgent.toLowerCase();
				return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
			}
			if (s()) {
				const s = String(e.navigator.userAgent);
				if (s.includes("Version/")) {
					const [e, a] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
					t = e < 16 || 16 === e && a < 2
				}
			}
			return {
				isSafari: t || s(),
				needPerspectiveFix: t,
				isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
			}
		}()), C
	}
	var I = {
		on(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;
			const i = s ? "unshift" : "push";
			return e.split(" ").forEach((e => {
				a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
			})), a
		},
		once(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;

			function i() {
				a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
				for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
				t.apply(a, r)
			}
			return i.__emitterProxy = t, a.on(e, i, s)
		},
		onAny(e, t) {
			const s = this;
			if (!s.eventsListeners || s.destroyed) return s;
			if ("function" != typeof e) return s;
			const a = t ? "unshift" : "push";
			return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
		},
		offAny(e) {
			const t = this;
			if (!t.eventsListeners || t.destroyed) return t;
			if (!t.eventsAnyListeners) return t;
			const s = t.eventsAnyListeners.indexOf(e);
			return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
		},
		off(e, t) {
			const s = this;
			return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
				void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
					(a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
				}))
			})), s) : s
		},
		emit() {
			const e = this;
			if (!e.eventsListeners || e.destroyed) return e;
			if (!e.eventsListeners) return e;
			let t, s, a;
			for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
			"string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
			return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
				e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
					e.apply(a, [t, ...s])
				})), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
					e.apply(a, s)
				}))
			})), e
		}
	};
	const z = (e, t) => {
			if (!e || e.destroyed || !e.params) return;
			const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
			if (s) {
				let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
				!t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
					s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
				}))), t && t.remove()
			}
		},
		$ = (e, t) => {
			if (!e.slides[t]) return;
			const s = e.slides[t].querySelector('[loading="lazy"]');
			s && s.removeAttribute("loading")
		},
		k = e => {
			if (!e || e.destroyed || !e.params) return;
			let t = e.params.lazyPreloadPrevNext;
			const s = e.slides.length;
			if (!s || !t || t < 0) return;
			t = Math.min(t, s);
			const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
				i = e.activeIndex;
			if (e.params.grid && e.params.grid.rows > 1) {
				const s = i,
					r = [s - t];
				return r.push(...Array.from({
					length: t
				}).map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => {
					r.includes(t.column) && $(e, s)
				}))
			}
			const r = i + a - 1;
			if (e.params.rewind || e.params.loop)
				for (let a = i - t; a <= r + t; a += 1) {
					const t = (a % s + s) % s;
					(t < i || t > r) && $(e, t)
				} else
					for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && $(e, a)
		};
	var O = {
		updateSize: function() {
			const e = this;
			let t, s;
			const a = e.el;
			t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
				width: t,
				height: s,
				size: e.isHorizontal() ? t : s
			}))
		},
		updateSlides: function() {
			const e = this;

			function t(t, s) {
				return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
			}
			const s = e.params,
				{
					wrapperEl: a,
					slidesEl: i,
					size: r,
					rtlTranslate: n,
					wrongRTL: l
				} = e,
				o = e.virtual && s.virtual.enabled,
				d = o ? e.virtual.slides.length : e.slides.length,
				c = f(i, `.${e.params.slideClass}, swiper-slide`),
				p = o ? e.virtual.slides.length : c.length;
			let m = [];
			const h = [],
				g = [];
			let v = s.slidesOffsetBefore;
			"function" == typeof v && (v = s.slidesOffsetBefore.call(e));
			let w = s.slidesOffsetAfter;
			"function" == typeof w && (w = s.slidesOffsetAfter.call(e));
			const y = e.snapGrid.length,
				E = e.slidesGrid.length;
			let x = s.spaceBetween,
				T = -v,
				M = 0,
				C = 0;
			if (void 0 === r) return;
			"string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach((e => {
				n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
			})), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
			const P = s.grid && s.grid.rows > 1 && e.grid;
			let L;
			P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
			const A = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
			for (let a = 0; a < p; a += 1) {
				let i;
				if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
					if ("auto" === s.slidesPerView) {
						A && (c[a].style[e.getDirectionLabel("width")] = "");
						const r = getComputedStyle(i),
							n = i.style.transform,
							l = i.style.webkitTransform;
						if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
						else {
							const e = t(r, "width"),
								s = t(r, "padding-left"),
								a = t(r, "padding-right"),
								n = t(r, "margin-left"),
								l = t(r, "margin-right"),
								o = r.getPropertyValue("box-sizing");
							if (o && "border-box" === o) L = e + n + l;
							else {
								const {
									clientWidth: t,
									offsetWidth: r
								} = i;
								L = e + s + a + n + l + (r - t)
							}
						}
						n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L))
					} else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
					c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1
				}
			}
			if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize+x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize+x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
				const t = [];
				for (let a = 0; a < m.length; a += 1) {
					let i = m[a];
					s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i)
				}
				m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
			}
			if (o && s.loop) {
				const t = g[0] + x;
				if (s.slidesPerGroup > 1) {
					const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
						i = t * s.slidesPerGroup;
					for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i)
				}
				for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
			}
			if (0 === m.length && (m = [0]), 0 !== x) {
				const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
				c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
					e.style[t] = `${x}px`
				}))
			}
			if (s.centeredSlides && s.centeredSlidesBounds) {
				let e = 0;
				g.forEach((t => {
					e += t + (x || 0)
				})), e -= x;
				const t = e - r;
				m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
			}
			if (s.centerInsufficientSlides) {
				let e = 0;
				if (g.forEach((t => {
						e += t + (x || 0)
					})), e -= x, e < r) {
					const t = (r - e) / 2;
					m.forEach(((e, s) => {
						m[s] = e - t
					})), h.forEach(((e, s) => {
						h[s] = e + t
					}))
				}
			}
			if (Object.assign(e, {
					slides: c,
					snapGrid: m,
					slidesGrid: h,
					slidesSizesGrid: g
				}), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
				u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
				const t = -e.snapGrid[0],
					s = -e.slidesGrid[0];
				e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
			}
			if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
				const t = `${s.containerModifierClass}backface-hidden`,
					a = e.el.classList.contains(t);
				p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
			}
		},
		updateAutoHeight: function(e) {
			const t = this,
				s = [],
				a = t.virtual && t.params.virtual.enabled;
			let i, r = 0;
			"number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
			const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
			if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
				if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
					s.push(e)
				}));
				else
					for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
						const e = t.activeIndex + i;
						if (e > t.slides.length && !a) break;
						s.push(n(e))
					} else s.push(n(t.activeIndex));
			for (i = 0; i < s.length; i += 1)
				if (void 0 !== s[i]) {
					const e = s[i].offsetHeight;
					r = e > r ? e : r
				}(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
		},
		updateSlidesOffset: function() {
			const e = this,
				t = e.slides,
				s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
			for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
		},
		updateSlidesProgress: function(e) {
			void 0 === e && (e = this && this.translate || 0);
			const t = this,
				s = t.params,
				{
					slides: a,
					rtlTranslate: i,
					snapGrid: r
				} = t;
			if (0 === a.length) return;
			void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
			let n = -e;
			i && (n = e), a.forEach((e => {
				e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
			})), t.visibleSlidesIndexes = [], t.visibleSlides = [];
			let l = s.spaceBetween;
			"string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
			for (let e = 0; e < a.length; e += 1) {
				const o = a[e];
				let d = o.swiperSlideOffset;
				s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
				const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
					p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
					u = -(n - d),
					m = u + t.slidesSizesGrid[e],
					h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
				(u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), a[e].classList.add(s.slideVisibleClass)), h && a[e].classList.add(s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p
			}
		},
		updateProgress: function(e) {
			const t = this;
			if (void 0 === e) {
				const s = t.rtlTranslate ? -1 : 1;
				e = t && t.translate && t.translate * s || 0
			}
			const s = t.params,
				a = t.maxTranslate() - t.minTranslate();
			let {
				progress: i,
				isBeginning: r,
				isEnd: n,
				progressLoop: l
			} = t;
			const o = r,
				d = n;
			if (0 === a) i = 0, r = !0, n = !0;
			else {
				i = (e - t.minTranslate()) / a;
				const s = Math.abs(e - t.minTranslate()) < 1,
					l = Math.abs(e - t.maxTranslate()) < 1;
				r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1)
			}
			if (s.loop) {
				const s = t.getSlideIndexByData(0),
					a = t.getSlideIndexByData(t.slides.length - 1),
					i = t.slidesGrid[s],
					r = t.slidesGrid[a],
					n = t.slidesGrid[t.slidesGrid.length - 1],
					o = Math.abs(e);
				l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1)
			}
			Object.assign(t, {
				progress: i,
				progressLoop: l,
				isBeginning: r,
				isEnd: n
			}), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i)
		},
		updateSlidesClasses: function() {
			const e = this,
				{
					slides: t,
					params: s,
					slidesEl: a,
					activeIndex: i
				} = e,
				r = e.virtual && s.virtual.enabled,
				n = e.grid && s.grid && s.grid.rows > 1,
				l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
			let o, d, c;
			if (t.forEach((e => {
					e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
				})), r)
				if (s.loop) {
					let t = i - e.virtual.slidesBefore;
					t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
				} else o = l(`[data-swiper-slide-index="${i}"]`);
			else n ? (o = t.filter((e => e.column === i))[0], c = t.filter((e => e.column === i + 1))[0], d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
			o && (o.classList.add(s.slideActiveClass), n ? (c && c.classList.add(s.slideNextClass), d && d.classList.add(s.slidePrevClass)) : (c = function(e, t) {
				const s = [];
				for (; e.nextElementSibling;) {
					const a = e.nextElementSibling;
					t ? a.matches(t) && s.push(a) : s.push(a), e = a
				}
				return s
			}(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), c && c.classList.add(s.slideNextClass), d = function(e, t) {
				const s = [];
				for (; e.previousElementSibling;) {
					const a = e.previousElementSibling;
					t ? a.matches(t) && s.push(a) : s.push(a), e = a
				}
				return s
			}(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]), d && d.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
		},
		updateActiveIndex: function(e) {
			const t = this,
				s = t.rtlTranslate ? t.translate : -t.translate,
				{
					snapGrid: a,
					params: i,
					activeIndex: r,
					realIndex: n,
					snapIndex: l
				} = t;
			let o, d = e;
			const c = e => {
				let s = e - t.virtual.slidesBefore;
				return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
			};
			if (void 0 === d && (d = function(e) {
					const {
						slidesGrid: t,
						params: s
					} = e, a = e.rtlTranslate ? e.translate : -e.translate;
					let i;
					for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
					return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
				}(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
			else {
				const e = Math.min(i.slidesPerGroupSkip, d);
				o = e + Math.floor((d - e) / i.slidesPerGroup)
			}
			if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
			if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
			const p = t.grid && i.grid && i.grid.rows > 1;
			let u;
			if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
			else if (p) {
				const e = t.slides.filter((e => e.column === d))[0];
				let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
				Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
			} else if (t.slides[d]) {
				const e = t.slides[d].getAttribute("data-swiper-slide-index");
				u = e ? parseInt(e, 10) : d
			} else u = d;
			Object.assign(t, {
				previousSnapIndex: l,
				snapIndex: o,
				previousRealIndex: n,
				realIndex: u,
				previousIndex: r,
				activeIndex: d
			}), t.initialized && k(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"))
		},
		updateClickedSlide: function(e, t) {
			const s = this,
				a = s.params;
			let i = e.closest(`.${a.slideClass}, swiper-slide`);
			!i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
				!i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
			}));
			let r, n = !1;
			if (i)
				for (let e = 0; e < s.slides.length; e += 1)
					if (s.slides[e] === i) {
						n = !0, r = e;
						break
					} if (!i || !n) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
			s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
		}
	};
	var D = {
		getTranslate: function(e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			const {
				params: t,
				rtlTranslate: s,
				translate: a,
				wrapperEl: i
			} = this;
			if (t.virtualTranslate) return s ? -a : a;
			if (t.cssMode) return a;
			let r = d(i, e);
			return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
		},
		setTranslate: function(e, t) {
			const s = this,
				{
					rtlTranslate: a,
					params: i,
					wrapperEl: r,
					progress: n
				} = s;
			let l, o = 0,
				d = 0;
			s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
			const c = s.maxTranslate() - s.minTranslate();
			l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
		},
		minTranslate: function() {
			return -this.snapGrid[0]
		},
		maxTranslate: function() {
			return -this.snapGrid[this.snapGrid.length - 1]
		},
		translateTo: function(e, t, s, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
			const r = this,
				{
					params: n,
					wrapperEl: l
				} = r;
			if (r.animating && n.preventInteractionOnTransition) return !1;
			const o = r.minTranslate(),
				d = r.maxTranslate();
			let c;
			if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
				const e = r.isHorizontal();
				if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
				else {
					if (!r.support.smoothScroll) return m({
						swiper: r,
						targetPosition: -c,
						side: e ? "left" : "top"
					}), !0;
					l.scrollTo({
						[e ? "left" : "top"]: -c,
						behavior: "smooth"
					})
				}
				return !0
			}
			return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
				r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
			}), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
		}
	};

	function G(e) {
		let {
			swiper: t,
			runCallbacks: s,
			direction: a,
			step: i
		} = e;
		const {
			activeIndex: r,
			previousIndex: n
		} = t;
		let l = a;
		if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
			if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
			t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
		}
	}
	var X = {
		slideTo: function(e, t, s, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
			const r = this;
			let n = e;
			n < 0 && (n = 0);
			const {
				params: l,
				snapGrid: o,
				slidesGrid: d,
				previousIndex: c,
				activeIndex: p,
				rtlTranslate: u,
				wrapperEl: h,
				enabled: f
			} = r;
			if (r.animating && l.preventInteractionOnTransition || !f && !a && !i) return !1;
			const g = Math.min(r.params.slidesPerGroupSkip, n);
			let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
			v >= o.length && (v = o.length - 1);
			const w = -o[v];
			if (l.normalizeSlideIndex)
				for (let e = 0; e < d.length; e += 1) {
					const t = -Math.floor(100 * w),
						s = Math.floor(100 * d[e]),
						a = Math.floor(100 * d[e + 1]);
					void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
				}
			if (r.initialized && n !== p) {
				if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
				if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1
			}
			let b;
			if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
			if (l.cssMode) {
				const e = r.isHorizontal(),
					s = u ? w : -w;
				if (0 === t) {
					const t = r.virtual && r.params.virtual.enabled;
					t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
						h[e ? "scrollLeft" : "scrollTop"] = s
					}))) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
						r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
					}))
				} else {
					if (!r.support.smoothScroll) return m({
						swiper: r,
						targetPosition: s,
						side: e ? "left" : "top"
					}), !0;
					h.scrollTo({
						[e ? "left" : "top"]: s,
						behavior: "smooth"
					})
				}
				return !0
			}
			return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
				r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
			}), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
		},
		slideToLoop: function(e, t, s, a) {
			if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
				e = parseInt(e, 10)
			}
			const i = this,
				r = i.grid && i.params.grid && i.params.grid.rows > 1;
			let n = e;
			if (i.params.loop)
				if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
				else {
					let e;
					if (r) {
						const t = n * i.params.grid.rows;
						e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
					} else e = i.getSlideIndexByData(n);
					const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
						{
							centeredSlides: s
						} = i.params;
					let a = i.params.slidesPerView;
					"auto" === a ? a = i.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && a % 2 == 0 && (a += 1));
					let l = t - e < a;
					if (s && (l = l || e < Math.ceil(a / 2)), l) {
						const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
						i.loopFix({
							direction: a,
							slideTo: !0,
							activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
							slideRealIndex: "next" === a ? i.realIndex : void 0
						})
					}
					if (r) {
						const e = n * i.params.grid.rows;
						n = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
					} else n = i.getSlideIndexByData(n)
				} return requestAnimationFrame((() => {
				i.slideTo(n, t, s, a)
			})), i
		},
		slideNext: function(e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					enabled: i,
					params: r,
					animating: n
				} = a;
			if (!i) return a;
			let l = r.slidesPerGroup;
			"auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
			const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
				d = a.virtual && r.virtual.enabled;
			if (r.loop) {
				if (n && !d && r.loopPreventsSliding) return !1;
				if (a.loopFix({
						direction: "next"
					}), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
					a.slideTo(a.activeIndex + o, e, t, s)
				})), !0
			}
			return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
		},
		slidePrev: function(e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					params: i,
					snapGrid: r,
					slidesGrid: n,
					rtlTranslate: l,
					enabled: o,
					animating: d
				} = a;
			if (!o) return a;
			const c = a.virtual && i.virtual.enabled;
			if (i.loop) {
				if (d && !c && i.loopPreventsSliding) return !1;
				a.loopFix({
					direction: "prev"
				}), a._clientLeft = a.wrapperEl.clientLeft
			}

			function p(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			const u = p(l ? a.translate : -a.translate),
				m = r.map((e => p(e)));
			let h = r[m.indexOf(u) - 1];
			if (void 0 === h && i.cssMode) {
				let e;
				r.forEach(((t, s) => {
					u >= t && (e = s)
				})), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
			}
			let f = 0;
			if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
				const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
				return a.slideTo(i, e, t, s)
			}
			return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
				a.slideTo(f, e, t, s)
			})), !0) : a.slideTo(f, e, t, s)
		},
		slideReset: function(e, t, s) {
			return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
		},
		slideToClosest: function(e, t, s, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
			const i = this;
			let r = i.activeIndex;
			const n = Math.min(i.params.slidesPerGroupSkip, r),
				l = n + Math.floor((r - n) / i.params.slidesPerGroup),
				o = i.rtlTranslate ? i.translate : -i.translate;
			if (o >= i.snapGrid[l]) {
				const e = i.snapGrid[l];
				o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
			} else {
				const e = i.snapGrid[l - 1];
				o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
			}
			return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
		},
		slideToClickedSlide: function() {
			const e = this,
				{
					params: t,
					slidesEl: s
				} = e,
				a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
			let i, r = e.clickedIndex;
			const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
			if (t.loop) {
				if (e.animating) return;
				i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
					e.slideTo(r)
				}))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
					e.slideTo(r)
				}))) : e.slideTo(r)
			} else e.slideTo(r)
		}
	};
	var H = {
		loopCreate: function(e) {
			const t = this,
				{
					params: s,
					slidesEl: a
				} = t;
			if (!s.loop || t.virtual && t.params.virtual.enabled) return;
			const i = () => {
					f(a, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
						e.setAttribute("data-swiper-slide-index", t)
					}))
				},
				r = t.grid && s.grid && s.grid.rows > 1,
				n = s.slidesPerGroup * (r ? s.grid.rows : 1),
				l = t.slides.length % n != 0,
				o = r && t.slides.length % s.grid.rows != 0,
				d = e => {
					for (let a = 0; a < e; a += 1) {
						const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
						t.slidesEl.append(e)
					}
				};
			if (l) {
				if (s.loopAddBlankSlides) {
					d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides()
				} else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
				i()
			} else if (o) {
				if (s.loopAddBlankSlides) {
					d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()
				} else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
				i()
			} else i();
			t.loopFix({
				slideRealIndex: e,
				direction: s.centeredSlides ? void 0 : "next"
			})
		},
		loopFix: function(e) {
			let {
				slideRealIndex: t,
				slideTo: s = !0,
				direction: a,
				setTranslate: i,
				activeSlideIndex: r,
				byController: n,
				byMousewheel: l
			} = void 0 === e ? {} : e;
			const o = this;
			if (!o.params.loop) return;
			o.emit("beforeLoopFix");
			const {
				slides: d,
				allowSlidePrev: c,
				allowSlideNext: p,
				slidesEl: u,
				params: m
			} = o, {
				centeredSlides: h
			} = m;
			if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
			let f = m.slidesPerView;
			"auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
			const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
			let w = v;
			w % v != 0 && (w += v - w % v), w += m.loopAdditionalSlides, o.loopedSlides = w;
			const b = o.grid && m.grid && m.grid.rows > 1;
			d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
			const y = [],
				E = [];
			let x = o.activeIndex;
			void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
			const S = "next" === a || !a,
				T = "prev" === a || !a;
			let M = 0,
				C = 0;
			const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
				L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
			if (L < w) {
				M = Math.max(w - L, v);
				for (let e = 0; e < w - L; e += 1) {
					const t = e - Math.floor(e / P) * P;
					if (b) {
						const e = P - t - 1;
						for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t)
					} else y.push(P - t - 1)
				}
			} else if (L + f > P - w) {
				C = Math.max(L - (P - 2 * w), v);
				for (let e = 0; e < C; e += 1) {
					const t = e - Math.floor(e / P) * P;
					b ? d.forEach(((e, s) => {
						e.column === t && E.push(s)
					})) : E.push(t)
				}
			}
			if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
					o.__preventObserver__ = !1
				})), T && y.forEach((e => {
					d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
				})), S && E.forEach((e => {
					d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
				})), o.recalcSlides(), "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach(((e, t) => {
					o.grid.updateSlide(t, e, o.slides)
				})), m.watchSlidesProgress && o.updateSlidesOffset(), s)
				if (y.length > 0 && T) {
					if (void 0 === t) {
						const e = o.slidesGrid[x],
							t = o.slidesGrid[x + M] - e;
						l ? o.setTranslate(o.translate - t) : (o.slideTo(x + M, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
					} else if (i) {
						const e = b ? y.length / m.grid.rows : y.length;
						o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
					}
				} else if (E.length > 0 && S)
				if (void 0 === t) {
					const e = o.slidesGrid[x],
						t = o.slidesGrid[x - C] - e;
					l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
				} else {
					const e = b ? E.length / m.grid.rows : E.length;
					o.slideTo(o.activeIndex - e, 0, !1, !0)
				} if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
				const e = {
					slideRealIndex: t,
					direction: a,
					setTranslate: i,
					activeSlideIndex: r,
					byController: !0
				};
				Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
					!t.destroyed && t.params.loop && t.loopFix({
						...e,
						slideTo: t.params.slidesPerView === m.slidesPerView && s
					})
				})) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
					...e,
					slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
				})
			}
			o.emit("loopFix")
		},
		loopDestroy: function() {
			const e = this,
				{
					params: t,
					slidesEl: s
				} = e;
			if (!t.loop || e.virtual && e.params.virtual.enabled) return;
			e.recalcSlides();
			const a = [];
			e.slides.forEach((e => {
				const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
				a[t] = e
			})), e.slides.forEach((e => {
				e.removeAttribute("data-swiper-slide-index")
			})), a.forEach((e => {
				s.append(e)
			})), e.recalcSlides(), e.slideTo(e.realIndex, 0)
		}
	};

	function N(e, t, s) {
		const a = r(),
			{
				params: i
			} = e,
			n = i.edgeSwipeDetection,
			l = i.edgeSwipeThreshold;
		return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0)
	}

	function Y(e) {
		const t = this,
			s = a();
		let i = e;
		i.originalEvent && (i = i.originalEvent);
		const n = t.touchEventsData;
		if ("pointerdown" === i.type) {
			if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
			n.pointerId = i.pointerId
		} else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
		if ("touchstart" === i.type) return void N(t, i, i.targetTouches[0].pageX);
		const {
			params: l,
			touches: d,
			enabled: c
		} = t;
		if (!c) return;
		if (!l.simulateTouch && "mouse" === i.pointerType) return;
		if (t.animating && l.preventInteractionOnTransition) return;
		!t.animating && l.cssMode && l.loop && t.loopFix();
		let p = i.target;
		if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
		if ("which" in i && 3 === i.which) return;
		if ("button" in i && i.button > 0) return;
		if (n.isTouched && n.isMoved) return;
		const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
			m = i.composedPath ? i.composedPath() : i.path;
		u && i.target && i.target.shadowRoot && m && (p = m[0]);
		const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
			f = !(!i.target || !i.target.shadowRoot);
		if (l.noSwiping && (f ? function(e, t) {
				return void 0 === t && (t = this),
					function t(s) {
						if (!s || s === a() || s === r()) return null;
						s.assignedSlot && (s = s.assignedSlot);
						const i = s.closest(e);
						return i || s.getRootNode ? i || t(s.getRootNode().host) : null
					}(t)
			}(h, p) : p.closest(h))) return void(t.allowClick = !0);
		if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
		d.currentX = i.pageX, d.currentY = i.pageY;
		const g = d.currentX,
			v = d.currentY;
		if (!N(t, i, g)) return;
		Object.assign(n, {
			isTouched: !0,
			isMoved: !1,
			allowTouchCallbacks: !0,
			isScrolling: void 0,
			startMoving: void 0
		}), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
		let w = !0;
		p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
		const b = w && t.allowTouchMove && l.touchStartPreventDefault;
		!l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
	}

	function B(e) {
		const t = a(),
			s = this,
			i = s.touchEventsData,
			{
				params: r,
				touches: n,
				rtlTranslate: l,
				enabled: d
			} = s;
		if (!d) return;
		if (!r.simulateTouch && "mouse" === e.pointerType) return;
		let c, p = e;
		if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
			if (null !== i.touchId) return;
			if (p.pointerId !== i.pointerId) return
		}
		if ("touchmove" === p.type) {
			if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
		} else c = p;
		if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
		const u = c.pageX,
			m = c.pageY;
		if (p.preventedByNestedSwiper) return n.startX = u, void(n.startY = m);
		if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
			startX: u,
			startY: m,
			currentX: u,
			currentY: m
		}), i.touchStartTime = o()));
		if (r.touchReleaseOnEdges && !r.loop)
			if (s.isVertical()) {
				if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
			} else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
		if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
		i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
		const h = n.currentX - n.startX,
			f = n.currentY - n.startY;
		if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
		if (void 0 === i.isScrolling) {
			let e;
			s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
		}
		if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
		if (!i.startMoving) return;
		s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
		let g = s.isHorizontal() ? h : f,
			v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
		r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
		const w = s.touchesDirection;
		s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
		const b = s.params.loop && !r.cssMode,
			y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
		if (!i.isMoved) {
			if (b && y && s.loopFix({
					direction: s.swipeDirection
				}), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
				const e = new window.CustomEvent("transitionend", {
					bubbles: !0,
					cancelable: !0
				});
				s.wrapperEl.dispatchEvent(e)
			}
			i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
		}
		if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
			startX: u,
			startY: m,
			currentX: u,
			currentY: m,
			startTranslate: i.currentTranslate
		}), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
		s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
		let E = !0,
			x = r.resistanceRatio;
		if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
				direction: "prev",
				setTranslate: !0,
				activeSlideIndex: 0
			}), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
				direction: "next",
				setTranslate: !0,
				activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
			}), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
			if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
			if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
		}
		r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
	}

	function R(e) {
		const t = this,
			s = t.touchEventsData;
		let a, i = e;
		i.originalEvent && (i = i.originalEvent);
		if ("touchend" === i.type || "touchcancel" === i.type) {
			if (a = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0], !a || a.identifier !== s.touchId) return
		} else {
			if (null !== s.touchId) return;
			if (i.pointerId !== s.pointerId) return;
			a = i
		}
		if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
			if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return
		}
		s.pointerId = null, s.touchId = null;
		const {
			params: r,
			touches: n,
			rtlTranslate: d,
			slidesGrid: c,
			enabled: p
		} = t;
		if (!p) return;
		if (!r.simulateTouch && "mouse" === i.pointerType) return;
		if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
		r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
		const u = o(),
			m = u - s.touchStartTime;
		if (t.allowClick) {
			const e = i.path || i.composedPath && i.composedPath();
			t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
		}
		if (s.lastClickTime = o(), l((() => {
				t.destroyed || (t.allowClick = !0)
			})), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
		let h;
		if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
		if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
			currentPos: h
		});
		const f = h >= -t.maxTranslate() && !t.params.loop;
		let g = 0,
			v = t.slidesSizesGrid[0];
		for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
			const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
			void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
		}
		let w = null,
			b = null;
		r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
		const y = (h - c[g]) / v,
			E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
		if (m > r.longSwipesMs) {
			if (!r.longSwipes) return void t.slideTo(t.activeIndex);
			"next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
		} else {
			if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g))
		}
	}

	function q() {
		const e = this,
			{
				params: t,
				el: s
			} = e;
		if (s && 0 === s.offsetWidth) return;
		t.breakpoints && e.setBreakpoint();
		const {
			allowSlideNext: a,
			allowSlidePrev: i,
			snapGrid: r
		} = e, n = e.virtual && e.params.virtual.enabled;
		e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
		const l = n && t.loop;
		!("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
			e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
		}), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
	}

	function V(e) {
		const t = this;
		t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
	}

	function _() {
		const e = this,
			{
				wrapperEl: t,
				rtlTranslate: s,
				enabled: a
			} = e;
		if (!a) return;
		let i;
		e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
		const r = e.maxTranslate() - e.minTranslate();
		i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
	}

	function F(e) {
		const t = this;
		z(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
	}

	function j() {
		const e = this;
		e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
	}
	const W = (e, t) => {
		const s = a(),
			{
				params: i,
				el: r,
				wrapperEl: n,
				device: l
			} = e,
			o = !!i.nested,
			d = "on" === t ? "addEventListener" : "removeEventListener",
			c = t;
		s[d]("touchstart", e.onDocumentTouchStart, {
			passive: !1,
			capture: o
		}), r[d]("touchstart", e.onTouchStart, {
			passive: !1
		}), r[d]("pointerdown", e.onTouchStart, {
			passive: !1
		}), s[d]("touchmove", e.onTouchMove, {
			passive: !1,
			capture: o
		}), s[d]("pointermove", e.onTouchMove, {
			passive: !1,
			capture: o
		}), s[d]("touchend", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointerup", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointercancel", e.onTouchEnd, {
			passive: !0
		}), s[d]("touchcancel", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointerout", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointerleave", e.onTouchEnd, {
			passive: !0
		}), s[d]("contextmenu", e.onTouchEnd, {
			passive: !0
		}), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", q, !0) : e[c]("observerUpdate", q, !0), r[d]("load", e.onLoad, {
			capture: !0
		})
	};
	const U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var K = {
		init: !0,
		direction: "horizontal",
		oneWayMovement: !1,
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: "swiper",
		enabled: !0,
		focusableElements: "input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: .85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-blank",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideFullyVisibleClass: "swiper-slide-fully-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1
	};

	function Z(e, t) {
		return function(s) {
			void 0 === s && (s = {});
			const a = Object.keys(s)[0],
				i = s[a];
			"object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
				enabled: !0
			}), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
				enabled: !1
			}), p(t, s)) : p(t, s)) : p(t, s)
		}
	}
	const Q = {
			eventsEmitter: I,
			update: O,
			translate: D,
			transition: {
				setTransition: function(e, t) {
					const s = this;
					s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
				},
				transitionStart: function(e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{
							params: a
						} = s;
					a.cssMode || (a.autoHeight && s.updateAutoHeight(), G({
						swiper: s,
						runCallbacks: e,
						direction: t,
						step: "Start"
					}))
				},
				transitionEnd: function(e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{
							params: a
						} = s;
					s.animating = !1, a.cssMode || (s.setTransition(0), G({
						swiper: s,
						runCallbacks: e,
						direction: t,
						step: "End"
					}))
				}
			},
			slide: X,
			loop: H,
			grabCursor: {
				setGrabCursor: function(e) {
					const t = this;
					if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
					const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
					t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
						t.__preventObserver__ = !1
					}))
				},
				unsetGrabCursor: function() {
					const e = this;
					e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
						e.__preventObserver__ = !1
					})))
				}
			},
			events: {
				attachEvents: function() {
					const e = this,
						{
							params: t
						} = e;
					e.onTouchStart = Y.bind(e), e.onTouchMove = B.bind(e), e.onTouchEnd = R.bind(e), e.onDocumentTouchStart = j.bind(e), t.cssMode && (e.onScroll = _.bind(e)), e.onClick = V.bind(e), e.onLoad = F.bind(e), W(e, "on")
				},
				detachEvents: function() {
					W(this, "off")
				}
			},
			breakpoints: {
				setBreakpoint: function() {
					const e = this,
						{
							realIndex: t,
							initialized: s,
							params: a,
							el: i
						} = e,
						r = a.breakpoints;
					if (!r || r && 0 === Object.keys(r).length) return;
					const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
					if (!n || e.currentBreakpoint === n) return;
					const l = (n in r ? r[n] : void 0) || e.originalParams,
						o = U(e, a),
						d = U(e, l),
						c = a.enabled;
					o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
						if (void 0 === l[t]) return;
						const s = a[t] && a[t].enabled,
							i = l[t] && l[t].enabled;
						s && !i && e[t].disable(), !s && i && e[t].enable()
					}));
					const u = l.direction && l.direction !== a.direction,
						m = a.loop && (l.slidesPerView !== a.slidesPerView || u),
						h = a.loop;
					u && s && e.changeDirection(), p(e.params, l);
					const f = e.params.enabled,
						g = e.params.loop;
					Object.assign(e, {
						allowTouchMove: e.params.allowTouchMove,
						allowSlideNext: e.params.allowSlideNext,
						allowSlidePrev: e.params.allowSlidePrev
					}), c && !f ? e.disable() : !c && f && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && g ? (e.loopCreate(t), e.updateSlides()) : h && !g && e.loopDestroy()), e.emit("breakpoint", l)
				},
				getBreakpoint: function(e, t, s) {
					if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
					let a = !1;
					const i = r(),
						n = "window" === t ? i.innerHeight : s.clientHeight,
						l = Object.keys(e).map((e => {
							if ("string" == typeof e && 0 === e.indexOf("@")) {
								const t = parseFloat(e.substr(1));
								return {
									value: n * t,
									point: e
								}
							}
							return {
								value: e,
								point: e
							}
						}));
					l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
					for (let e = 0; e < l.length; e += 1) {
						const {
							point: r,
							value: n
						} = l[e];
						"window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
					}
					return a || "max"
				}
			},
			checkOverflow: {
				checkOverflow: function() {
					const e = this,
						{
							isLocked: t,
							params: s
						} = e,
						{
							slidesOffsetBefore: a
						} = s;
					if (a) {
						const t = e.slides.length - 1,
							s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
						e.isLocked = e.size > s
					} else e.isLocked = 1 === e.snapGrid.length;
					!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
				}
			},
			classes: {
				addClasses: function() {
					const e = this,
						{
							classNames: t,
							params: s,
							rtl: a,
							el: i,
							device: r
						} = e,
						n = function(e, t) {
							const s = [];
							return e.forEach((e => {
								"object" == typeof e ? Object.keys(e).forEach((a => {
									e[a] && s.push(t + a)
								})) : "string" == typeof e && s.push(t + e)
							})), s
						}(["initialized", s.direction, {
							"free-mode": e.params.freeMode && s.freeMode.enabled
						}, {
							autoheight: s.autoHeight
						}, {
							rtl: a
						}, {
							grid: s.grid && s.grid.rows > 1
						}, {
							"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
						}, {
							android: r.android
						}, {
							ios: r.ios
						}, {
							"css-mode": s.cssMode
						}, {
							centered: s.cssMode && s.centeredSlides
						}, {
							"watch-progress": s.watchSlidesProgress
						}], s.containerModifierClass);
					t.push(...n), i.classList.add(...t), e.emitContainerClasses()
				},
				removeClasses: function() {
					const {
						el: e,
						classNames: t
					} = this;
					e.classList.remove(...t), this.emitContainerClasses()
				}
			}
		},
		J = {};
	class ee {
		constructor() {
			let e, t;
			for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
			1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
			const n = a();
			if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
				const e = [];
				return n.querySelectorAll(t.el).forEach((s => {
					const a = p({}, t, {
						el: s
					});
					e.push(new ee(a))
				})), e
			}
			const l = this;
			l.__swiper__ = !0, l.support = P(), l.device = L({
				userAgent: t.userAgent
			}), l.browser = A(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
			const o = {};
			l.modules.forEach((e => {
				e({
					params: t,
					swiper: l,
					extendParams: Z(t, o),
					on: l.on.bind(l),
					once: l.once.bind(l),
					off: l.off.bind(l),
					emit: l.emit.bind(l)
				})
			}));
			const d = p({}, K, o);
			return l.params = p({}, d, J, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
				l.on(e, l.params.on[e])
			})), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
				enabled: l.params.enabled,
				el: e,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal: () => "horizontal" === l.params.direction,
				isVertical: () => "vertical" === l.params.direction,
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: l.params.allowSlideNext,
				allowSlidePrev: l.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: l.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null
				},
				allowClick: !0,
				allowTouchMove: l.params.allowTouchMove,
				touches: {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				},
				imagesToLoad: [],
				imagesLoaded: 0
			}), l.emit("_swiper"), l.params.init && l.init(), l
		}
		getDirectionLabel(e) {
			return this.isHorizontal() ? e : {
				width: "height",
				"margin-top": "margin-left",
				"margin-bottom ": "margin-right",
				"margin-left": "margin-top",
				"margin-right": "margin-bottom",
				"padding-left": "padding-top",
				"padding-right": "padding-bottom",
				marginRight: "marginBottom"
			} [e]
		}
		getSlideIndex(e) {
			const {
				slidesEl: t,
				params: s
			} = this, a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
			return y(e) - a
		}
		getSlideIndexByData(e) {
			return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
		}
		recalcSlides() {
			const {
				slidesEl: e,
				params: t
			} = this;
			this.slides = f(e, `.${t.slideClass}, swiper-slide`)
		}
		enable() {
			const e = this;
			e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
		}
		disable() {
			const e = this;
			e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
		}
		setProgress(e, t) {
			const s = this;
			e = Math.min(Math.max(e, 0), 1);
			const a = s.minTranslate(),
				i = (s.maxTranslate() - a) * e + a;
			s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
		}
		emitContainerClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
			e.emit("_containerClasses", t.join(" "))
		}
		getSlideClasses(e) {
			const t = this;
			return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
		}
		emitSlidesClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = [];
			e.slides.forEach((s => {
				const a = e.getSlideClasses(s);
				t.push({
					slideEl: s,
					classNames: a
				}), e.emit("_slideClass", s, a)
			})), e.emit("_slideClasses", t)
		}
		slidesPerViewDynamic(e, t) {
			void 0 === e && (e = "current"), void 0 === t && (t = !1);
			const {
				params: s,
				slides: a,
				slidesGrid: i,
				slidesSizesGrid: r,
				size: n,
				activeIndex: l
			} = this;
			let o = 1;
			if ("number" == typeof s.slidesPerView) return s.slidesPerView;
			if (s.centeredSlides) {
				let e, t = a[l] ? a[l].swiperSlideSize : 0;
				for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
				for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
			} else if ("current" === e)
				for (let e = l + 1; e < a.length; e += 1) {
					(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
				} else
					for (let e = l - 1; e >= 0; e -= 1) {
						i[l] - i[e] < n && (o += 1)
					}
			return o
		}
		update() {
			const e = this;
			if (!e || e.destroyed) return;
			const {
				snapGrid: t,
				params: s
			} = e;

			function a() {
				const t = e.rtlTranslate ? -1 * e.translate : e.translate,
					s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
				e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
			}
			let i;
			if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
					t.complete && z(e, t)
				})), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();
			else {
				if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
					const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
					i = e.slideTo(t.length - 1, 0, !1, !0)
				} else i = e.slideTo(e.activeIndex, 0, !1, !0);
				i || a()
			}
			s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
		}
		changeDirection(e, t) {
			void 0 === t && (t = !0);
			const s = this,
				a = s.params.direction;
			return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
				"vertical" === e ? t.style.width = "" : t.style.height = ""
			})), s.emit("changeDirection"), t && s.update()), s
		}
		changeLanguageDirection(e) {
			const t = this;
			t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
		}
		mount(e) {
			const t = this;
			if (t.mounted) return !0;
			let s = e || t.params.el;
			if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
			s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
			const a = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
			let i = (() => {
				if (s && s.shadowRoot && s.shadowRoot.querySelector) {
					return s.shadowRoot.querySelector(a())
				}
				return f(s, a())[0]
			})();
			return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach((e => {
				i.append(e)
			}))), Object.assign(t, {
				el: s,
				wrapperEl: i,
				slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
				hostEl: t.isElement ? s.parentNode.host : s,
				mounted: !0,
				rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
				rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
				wrongRTL: "-webkit-box" === b(i, "display")
			}), !0
		}
		init(e) {
			const t = this;
			if (t.initialized) return t;
			if (!1 === t.mount(e)) return t;
			t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
			const s = [...t.el.querySelectorAll('[loading="lazy"]')];
			return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
				e.complete ? z(t, e) : e.addEventListener("load", (e => {
					z(t, e.target)
				}))
			})), k(t), t.initialized = !0, k(t), t.emit("init"), t.emit("afterInit"), t
		}
		destroy(e, t) {
			void 0 === e && (e = !0), void 0 === t && (t = !0);
			const s = this,
				{
					params: a,
					el: i,
					wrapperEl: r,
					slides: n
				} = s;
			return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach((e => {
				e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
			}))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
				s.off(e)
			})), !1 !== e && (s.el.swiper = null, function(e) {
				const t = e;
				Object.keys(t).forEach((e => {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				}))
			}(s)), s.destroyed = !0), null
		}
		static extendDefaults(e) {
			p(J, e)
		}
		static get extendedDefaults() {
			return J
		}
		static get defaults() {
			return K
		}
		static installModule(e) {
			ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
			const t = ee.prototype.__modules__;
			"function" == typeof e && t.indexOf(e) < 0 && t.push(e)
		}
		static use(e) {
			return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
		}
	}

	function te(e, t, s, a) {
		return e.params.createElements && Object.keys(a).forEach((i => {
			if (!s[i] && !0 === s.auto) {
				let r = f(e.el, `.${a[i]}`)[0];
				r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r
			}
		})), s
	}

	function se(e) {
		return void 0 === e && (e = ""), `.${e.trim().replace(/\\/g, "\\\\").replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
	}

	function ae(e) {
		const t = this,
			{
				params: s,
				slidesEl: a
			} = t;
		s.loop && t.loopDestroy();
		const i = e => {
			if ("string" == typeof e) {
				const t = document.createElement("div");
				t.innerHTML = e, a.append(t.children[0]), t.innerHTML = ""
			} else a.append(e)
		};
		if ("object" == typeof e && "length" in e)
			for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
		else i(e);
		t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
	}

	function ie(e) {
		const t = this,
			{
				params: s,
				activeIndex: a,
				slidesEl: i
			} = t;
		s.loop && t.loopDestroy();
		let r = a + 1;
		const n = e => {
			if ("string" == typeof e) {
				const t = document.createElement("div");
				t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = ""
			} else i.prepend(e)
		};
		if ("object" == typeof e && "length" in e) {
			for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
			r = a + e.length
		} else n(e);
		t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1)
	}

	function re(e, t) {
		const s = this,
			{
				params: a,
				activeIndex: i,
				slidesEl: r
			} = s;
		let n = i;
		a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
		const l = s.slides.length;
		if (e <= 0) return void s.prependSlide(t);
		if (e >= l) return void s.appendSlide(t);
		let o = n > e ? n + 1 : n;
		const d = [];
		for (let t = l - 1; t >= e; t -= 1) {
			const e = s.slides[t];
			e.remove(), d.unshift(e)
		}
		if ("object" == typeof t && "length" in t) {
			for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
			o = n > e ? n + t.length : n
		} else r.append(t);
		for (let e = 0; e < d.length; e += 1) r.append(d[e]);
		s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
	}

	function ne(e) {
		const t = this,
			{
				params: s,
				activeIndex: a
			} = t;
		let i = a;
		s.loop && (i -= t.loopedSlides, t.loopDestroy());
		let r, n = i;
		if ("object" == typeof e && "length" in e) {
			for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
			n = Math.max(n, 0)
		} else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
		t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
	}

	function le() {
		const e = this,
			t = [];
		for (let s = 0; s < e.slides.length; s += 1) t.push(s);
		e.removeSlide(t)
	}

	function oe(e) {
		const {
			effect: t,
			swiper: s,
			on: a,
			setTranslate: i,
			setTransition: r,
			overwriteParams: n,
			perspective: l,
			recreateShadows: o,
			getEffectParams: d
		} = e;
		let c;
		a("beforeInit", (() => {
			if (s.params.effect !== t) return;
			s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
			const e = n ? n() : {};
			Object.assign(s.params, e), Object.assign(s.originalParams, e)
		})), a("setTranslate", (() => {
			s.params.effect === t && i()
		})), a("setTransition", ((e, a) => {
			s.params.effect === t && r(a)
		})), a("transitionEnd", (() => {
			if (s.params.effect === t && o) {
				if (!d || !d().slideShadows) return;
				s.slides.forEach((e => {
					e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
				})), o()
			}
		})), a("virtualUpdate", (() => {
			s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
				c && s.slides && s.slides.length && (i(), c = !1)
			})))
		}))
	}

	function de(e, t) {
		const s = h(t);
		return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
	}

	function ce(e) {
		let {
			swiper: t,
			duration: s,
			transformElements: a,
			allSlides: i
		} = e;
		const {
			activeIndex: r
		} = t;
		if (t.params.virtualTranslate && 0 !== s) {
			let e, s = !1;
			e = i ? a : a.filter((e => {
				const s = e.classList.contains("swiper-slide-transform") ? (e => {
					if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
					return e.parentElement
				})(e) : e;
				return t.getSlideIndex(s) === r
			})), e.forEach((e => {
				x(e, (() => {
					if (s) return;
					if (!t || t.destroyed) return;
					s = !0, t.animating = !1;
					const e = new window.CustomEvent("transitionend", {
						bubbles: !0,
						cancelable: !0
					});
					t.wrapperEl.dispatchEvent(e)
				}))
			}))
		}
	}

	function pe(e, t, s) {
		const a = `swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
			i = h(t);
		let r = i.querySelector(`.${a.split(" ").join(".")}`);
		return r || (r = v("div", a.split(" ")), i.append(r)), r
	}
	Object.keys(Q).forEach((e => {
		Object.keys(Q[e]).forEach((t => {
			ee.prototype[t] = Q[e][t]
		}))
	})), ee.use([function(e) {
		let {
			swiper: t,
			on: s,
			emit: a
		} = e;
		const i = r();
		let n = null,
			l = null;
		const o = () => {
				t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
			},
			d = () => {
				t && !t.destroyed && t.initialized && a("orientationchange")
			};
		s("init", (() => {
			t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
				l = i.requestAnimationFrame((() => {
					const {
						width: s,
						height: a
					} = t;
					let i = s,
						r = a;
					e.forEach((e => {
						let {
							contentBoxSize: s,
							contentRect: a,
							target: n
						} = e;
						n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
					})), i === s && r === a || o()
				}))
			})), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
		})), s("destroy", (() => {
			l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
		}))
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const n = [],
			l = r(),
			o = function(e, s) {
				void 0 === s && (s = {});
				const a = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
					if (t.__preventObserver__) return;
					if (1 === e.length) return void i("observerUpdate", e[0]);
					const s = function() {
						i("observerUpdate", e[0])
					};
					l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
				}));
				a.observe(e, {
					attributes: void 0 === s.attributes || s.attributes,
					childList: void 0 === s.childList || s.childList,
					characterData: void 0 === s.characterData || s.characterData
				}), n.push(a)
			};
		s({
			observer: !1,
			observeParents: !1,
			observeSlideChildren: !1
		}), a("init", (() => {
			if (t.params.observer) {
				if (t.params.observeParents) {
					const e = E(t.hostEl);
					for (let t = 0; t < e.length; t += 1) o(e[t])
				}
				o(t.hostEl, {
					childList: t.params.observeSlideChildren
				}), o(t.wrapperEl, {
					attributes: !1
				})
			}
		})), a("destroy", (() => {
			n.forEach((e => {
				e.disconnect()
			})), n.splice(0, n.length)
		}))
	}]);
	const ue = [function(e) {
		let t, {
			swiper: s,
			extendParams: i,
			on: r,
			emit: n
		} = e;
		i({
			virtual: {
				enabled: !1,
				slides: [],
				cache: !0,
				renderSlide: null,
				renderExternal: null,
				renderExternalUpdate: !0,
				addSlidesBefore: 0,
				addSlidesAfter: 0
			}
		});
		const l = a();
		s.virtual = {
			cache: {},
			from: void 0,
			to: void 0,
			slides: [],
			offset: 0,
			slidesGrid: []
		};
		const o = l.createElement("div");

		function d(e, t) {
			const a = s.params.virtual;
			if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
			let i;
			return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i
		}

		function c(e) {
			const {
				slidesPerView: t,
				slidesPerGroup: a,
				centeredSlides: i,
				loop: r
			} = s.params, {
				addSlidesBefore: l,
				addSlidesAfter: o
			} = s.params.virtual, {
				from: c,
				to: p,
				slides: u,
				slidesGrid: m,
				offset: h
			} = s.virtual;
			s.params.cssMode || s.updateActiveIndex();
			const g = s.activeIndex || 0;
			let v, w, b;
			v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (w = Math.floor(t / 2) + a + o, b = Math.floor(t / 2) + a + l) : (w = t + (a - 1) + o, b = (r ? t : a) + l);
			let y = g - b,
				E = g + w;
			r || (y = Math.max(y, 0), E = Math.min(E, u.length - 1));
			let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);

			function S() {
				s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate")
			}
			if (r && g >= b ? (y -= b, i || (x += s.slidesGrid[0])) : r && g < b && (y = -b, i && (x += s.slidesGrid[0])), Object.assign(s.virtual, {
					from: y,
					to: E,
					offset: x,
					slidesGrid: s.slidesGrid,
					slidesBefore: b,
					slidesAfter: w
				}), c === y && p === E && !e) return s.slidesGrid !== m && x !== h && s.slides.forEach((e => {
				e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
			})), s.updateProgress(), void n("virtualUpdate");
			if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
				offset: x,
				from: y,
				to: E,
				slides: function() {
					const e = [];
					for (let t = y; t <= E; t += 1) e.push(u[t]);
					return e
				}()
			}), void(s.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate"));
			const T = [],
				M = [],
				C = e => {
					let t = e;
					return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length), t
				};
			if (e) s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
				e.remove()
			}));
			else
				for (let e = c; e <= p; e += 1)
					if (e < y || e > E) {
						const t = C(e);
						s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
							e.remove()
						}))
					} const P = r ? -u.length : 0,
				L = r ? 2 * u.length : u.length;
			for (let t = P; t < L; t += 1)
				if (t >= y && t <= E) {
					const s = C(t);
					void 0 === p || e ? M.push(s) : (t > p && M.push(s), t < c && T.push(s))
				} if (M.forEach((e => {
					s.slidesEl.append(d(u[e], e))
				})), r)
				for (let e = T.length - 1; e >= 0; e -= 1) {
					const t = T[e];
					s.slidesEl.prepend(d(u[t], t))
				} else T.sort(((e, t) => t - e)), T.forEach((e => {
					s.slidesEl.prepend(d(u[e], e))
				}));
			f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
				e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
			})), S()
		}
		r("beforeInit", (() => {
			if (!s.params.virtual.enabled) return;
			let e;
			if (void 0 === s.passedParams.virtual.slides) {
				const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
				t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
					e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
				})))
			}
			e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, c()
		})), r("setTranslate", (() => {
			s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
				c()
			}), 100)) : c())
		})), r("init update resize", (() => {
			s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
		})), Object.assign(s.virtual, {
			appendSlide: function(e) {
				if ("object" == typeof e && "length" in e)
					for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
				else s.virtual.slides.push(e);
				c(!0)
			},
			prependSlide: function(e) {
				const t = s.activeIndex;
				let a = t + 1,
					i = 1;
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
					a = t + e.length, i = e.length
				} else s.virtual.slides.unshift(e);
				if (s.params.virtual.cache) {
					const e = s.virtual.cache,
						t = {};
					Object.keys(e).forEach((s => {
						const a = e[s],
							r = a.getAttribute("data-swiper-slide-index");
						r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
					})), s.virtual.cache = t
				}
				c(!0), s.slideTo(a, 0)
			},
			removeSlide: function(e) {
				if (null == e) return;
				let t = s.activeIndex;
				if (Array.isArray(e))
					for (let a = e.length - 1; a >= 0; a -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[a]], Object.keys(s.virtual.cache).forEach((t => {
						t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
					}))), s.virtual.slides.splice(e[a], 1), e[a] < t && (t -= 1), t = Math.max(t, 0);
				else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t => {
					t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
				}))), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
				c(!0), s.slideTo(t, 0)
			},
			removeAllSlides: function() {
				s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0)
			},
			update: c
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: i,
			emit: n
		} = e;
		const l = a(),
			o = r();

		function d(e) {
			if (!t.enabled) return;
			const {
				rtlTranslate: s
			} = t;
			let a = e;
			a.originalEvent && (a = a.originalEvent);
			const i = a.keyCode || a.charCode,
				r = t.params.keyboard.pageUpDown,
				d = r && 33 === i,
				c = r && 34 === i,
				p = 37 === i,
				u = 39 === i,
				m = 38 === i,
				h = 40 === i;
			if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
			if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
			if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
				if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
					let e = !1;
					if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
					const a = t.el,
						i = a.clientWidth,
						r = a.clientHeight,
						n = o.innerWidth,
						l = o.innerHeight,
						d = w(a);
					s && (d.left -= a.scrollLeft);
					const c = [
						[d.left, d.top],
						[d.left + i, d.top],
						[d.left, d.top + r],
						[d.left + i, d.top + r]
					];
					for (let t = 0; t < c.length; t += 1) {
						const s = c[t];
						if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
							if (0 === s[0] && 0 === s[1]) continue;
							e = !0
						}
					}
					if (!e) return
				}
				t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i)
			}
		}

		function c() {
			t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0)
		}

		function p() {
			t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1)
		}
		t.keyboard = {
			enabled: !1
		}, s({
			keyboard: {
				enabled: !1,
				onlyInViewport: !0,
				pageUpDown: !0
			}
		}), i("init", (() => {
			t.params.keyboard.enabled && c()
		})), i("destroy", (() => {
			t.keyboard.enabled && p()
		})), Object.assign(t.keyboard, {
			enable: c,
			disable: p
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const n = r();
		let d;
		s({
			mousewheel: {
				enabled: !1,
				releaseOnEdges: !1,
				invert: !1,
				forceToAxis: !1,
				sensitivity: 1,
				eventsTarget: "container",
				thresholdDelta: null,
				thresholdTime: null,
				noMousewheelClass: "swiper-no-mousewheel"
			}
		}), t.mousewheel = {
			enabled: !1
		};
		let c, p = o();
		const u = [];

		function m() {
			t.enabled && (t.mouseEntered = !0)
		}

		function h() {
			t.enabled && (t.mouseEntered = !1)
		}

		function f(e) {
			return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = (new n.Date).getTime(), !1)))
		}

		function g(e) {
			let s = e,
				a = !0;
			if (!t.enabled) return;
			if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
			const r = t.params.mousewheel;
			t.params.cssMode && s.preventDefault();
			let n = t.el;
			"container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
			const p = n && n.contains(s.target);
			if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
			s.originalEvent && (s = s.originalEvent);
			let m = 0;
			const h = t.rtlTranslate ? -1 : 1,
				g = function(e) {
					let t = 0,
						s = 0,
						a = 0,
						i = 0;
					return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
						spinX: t,
						spinY: s,
						pixelX: a,
						pixelY: i
					}
				}(s);
			if (r.forceToAxis)
				if (t.isHorizontal()) {
					if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
					m = -g.pixelX * h
				} else {
					if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
					m = -g.pixelY
				}
			else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
			if (0 === m) return !0;
			r.invert && (m = -m);
			let v = t.getTranslate() + m * r.sensitivity;
			if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
				const e = {
						time: o(),
						delta: Math.abs(m),
						direction: Math.sign(m)
					},
					a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
				if (!a) {
					c = void 0;
					let n = t.getTranslate() + m * r.sensitivity;
					const o = t.isBeginning,
						p = t.isEnd;
					if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
							direction: e.direction < 0 ? "next" : "prev",
							byMousewheel: !0
						}), t.params.freeMode.sticky) {
						clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
						const s = u.length ? u[u.length - 1] : void 0,
							a = u[0];
						if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);
						else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
							const s = m > 0 ? .8 : .2;
							c = e, u.splice(0), d = l((() => {
								t.slideToClosest(t.params.speed, !0, void 0, s)
							}), 0)
						}
						d || (d = l((() => {
							c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
						}), 500))
					}
					if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0
				}
			} else {
				const s = {
					time: o(),
					delta: Math.abs(m),
					direction: Math.sign(m),
					raw: e
				};
				u.length >= 2 && u.shift();
				const a = u.length ? u[u.length - 1] : void 0;
				if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function(e) {
						const s = t.params.mousewheel;
						if (e.direction < 0) {
							if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
						} else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
						return !1
					}(s)) return !0
			}
			return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
		}

		function v(e) {
			let s = t.el;
			"container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g)
		}

		function w() {
			return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
		}

		function b() {
			return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
		}
		a("init", (() => {
			!t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w()
		})), a("destroy", (() => {
			t.params.cssMode && w(), t.mousewheel.enabled && b()
		})), Object.assign(t.mousewheel, {
			enable: w,
			disable: b
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		s({
			navigation: {
				nextEl: null,
				prevEl: null,
				hideOnClick: !1,
				disabledClass: "swiper-button-disabled",
				hiddenClass: "swiper-button-hidden",
				lockClass: "swiper-button-lock",
				navigationDisabledClass: "swiper-navigation-disabled"
			}
		}), t.navigation = {
			nextEl: null,
			prevEl: null
		};
		const r = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

		function n(e) {
			let s;
			return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
		}

		function l(e, s) {
			const a = t.params.navigation;
			(e = r(e)).forEach((e => {
				e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
			}))
		}

		function o() {
			const {
				nextEl: e,
				prevEl: s
			} = t.navigation;
			if (t.params.loop) return l(s, !1), void l(e, !1);
			l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
		}

		function d(e) {
			e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
		}

		function c(e) {
			e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
		}

		function p() {
			const e = t.params.navigation;
			if (t.params.navigation = te(t, t.originalParams.navigation, t.params.navigation, {
					nextEl: "swiper-button-next",
					prevEl: "swiper-button-prev"
				}), !e.nextEl && !e.prevEl) return;
			let s = n(e.nextEl),
				a = n(e.prevEl);
			Object.assign(t.navigation, {
				nextEl: s,
				prevEl: a
			}), s = r(s), a = r(a);
			const i = (s, a) => {
				s && s.addEventListener("click", "next" === a ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
			};
			s.forEach((e => i(e, "next"))), a.forEach((e => i(e, "prev")))
		}

		function u() {
			let {
				nextEl: e,
				prevEl: s
			} = t.navigation;
			e = r(e), s = r(s);
			const a = (e, s) => {
				e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
			};
			e.forEach((e => a(e, "next"))), s.forEach((e => a(e, "prev")))
		}
		a("init", (() => {
			!1 === t.params.navigation.enabled ? m() : (p(), o())
		})), a("toEdge fromEdge lock unlock", (() => {
			o()
		})), a("destroy", (() => {
			u()
		})), a("enable disable", (() => {
			let {
				nextEl: e,
				prevEl: s
			} = t.navigation;
			e = r(e), s = r(s), t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
		})), a("click", ((e, s) => {
			let {
				nextEl: a,
				prevEl: n
			} = t.navigation;
			a = r(a), n = r(n);
			const l = s.target;
			if (t.params.navigation.hideOnClick && !n.includes(l) && !a.includes(l)) {
				if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
				let e;
				a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
			}
		}));
		const m = () => {
			t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
		};
		Object.assign(t.navigation, {
			enable: () => {
				t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o()
			},
			disable: m,
			update: o,
			init: p,
			destroy: u
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const r = "swiper-pagination";
		let n;
		s({
			pagination: {
				el: null,
				bulletElement: "span",
				clickable: !1,
				hideOnClick: !1,
				renderBullet: null,
				renderProgressbar: null,
				renderFraction: null,
				renderCustom: null,
				progressbarOpposite: !1,
				type: "bullets",
				dynamicBullets: !1,
				dynamicMainBullets: 1,
				formatFractionCurrent: e => e,
				formatFractionTotal: e => e,
				bulletClass: `${r}-bullet`,
				bulletActiveClass: `${r}-bullet-active`,
				modifierClass: `${r}-`,
				currentClass: `${r}-current`,
				totalClass: `${r}-total`,
				hiddenClass: `${r}-hidden`,
				progressbarFillClass: `${r}-progressbar-fill`,
				progressbarOppositeClass: `${r}-progressbar-opposite`,
				clickableClass: `${r}-clickable`,
				lockClass: `${r}-lock`,
				horizontalClass: `${r}-horizontal`,
				verticalClass: `${r}-vertical`,
				paginationDisabledClass: `${r}-disabled`
			}
		}), t.pagination = {
			el: null,
			bullets: []
		};
		let l = 0;
		const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

		function d() {
			return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
		}

		function c(e, s) {
			const {
				bulletActiveClass: a
			} = t.params.pagination;
			e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
		}

		function p(e) {
			const s = e.target.closest(se(t.params.pagination.bulletClass));
			if (!s) return;
			e.preventDefault();
			const a = y(s) * t.params.slidesPerGroup;
			if (t.params.loop) {
				if (t.realIndex === a) return;
				t.slideToLoop(a)
			} else t.slideTo(a)
		}

		function u() {
			const e = t.rtl,
				s = t.params.pagination;
			if (d()) return;
			let a, r, p = t.pagination.el;
			p = o(p);
			const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
				m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
			if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
				const i = t.pagination.bullets;
				let o, d, u;
				if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0), p.forEach((e => {
						e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
					})), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), d = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (d + o) / 2), i.forEach((e => {
						const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
						e.classList.remove(...t)
					})), p.length > 1) i.forEach((e => {
					const i = y(e);
					i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && c(e, "prev"), i === d && c(e, "next"))
				}));
				else {
					const e = i[a];
					if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
							e.setAttribute("part", t === a ? "bullet-active" : "bullet")
						})), s.dynamicBullets) {
						const e = i[o],
							t = i[d];
						for (let e = o; e <= d; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
						c(e, "prev"), c(t, "next")
					}
				}
				if (s.dynamicBullets) {
					const a = Math.min(i.length, s.dynamicMainBullets + 4),
						r = (n * a - n) / 2 - u * n,
						l = e ? "right" : "left";
					i.forEach((e => {
						e.style[t.isHorizontal() ? l : "top"] = `${r}px`
					}))
				}
			}
			p.forEach(((e, r) => {
				if ("fraction" === s.type && (e.querySelectorAll(se(s.currentClass)).forEach((e => {
						e.textContent = s.formatFractionCurrent(a + 1)
					})), e.querySelectorAll(se(s.totalClass)).forEach((e => {
						e.textContent = s.formatFractionTotal(m)
					}))), "progressbar" === s.type) {
					let i;
					i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
					const r = (a + 1) / m;
					let n = 1,
						l = 1;
					"horizontal" === i ? n = r : l = r, e.querySelectorAll(se(s.progressbarFillClass)).forEach((e => {
						e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
					}))
				}
				"custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, m), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
			}))
		}

		function m() {
			const e = t.params.pagination;
			if (d()) return;
			const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
			let a = t.pagination.el;
			a = o(a);
			let r = "";
			if ("bullets" === e.type) {
				let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
				t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
				for (let s = 0; s < a; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
			}
			"fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((s => {
				"custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(se(e.bulletClass)))
			})), "custom" !== e.type && i("paginationRender", a[0])
		}

		function h() {
			t.params.pagination = te(t, t.originalParams.pagination, t.params.pagination, {
				el: "swiper-pagination"
			});
			const e = t.params.pagination;
			if (!e.el) return;
			let s;
			"string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
				el: s
			}), s = o(s), s.forEach((s => {
				"bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", p), t.enabled || s.classList.add(e.lockClass)
			})))
		}

		function f() {
			const e = t.params.pagination;
			if (d()) return;
			let s = t.pagination.el;
			s && (s = o(s), s.forEach((s => {
				s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", p))
			}))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
		}
		a("changeDirection", (() => {
			if (!t.pagination || !t.pagination.el) return;
			const e = t.params.pagination;
			let {
				el: s
			} = t.pagination;
			s = o(s), s.forEach((s => {
				s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
			}))
		})), a("init", (() => {
			!1 === t.params.pagination.enabled ? g() : (h(), m(), u())
		})), a("activeIndexChange", (() => {
			void 0 === t.snapIndex && u()
		})), a("snapIndexChange", (() => {
			u()
		})), a("snapGridLengthChange", (() => {
			m(), u()
		})), a("destroy", (() => {
			f()
		})), a("enable disable", (() => {
			let {
				el: e
			} = t.pagination;
			e && (e = o(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
		})), a("lock unlock", (() => {
			u()
		})), a("click", ((e, s) => {
			const a = s.target,
				r = o(t.pagination.el);
			if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
				if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
				const e = r[0].classList.contains(t.params.pagination.hiddenClass);
				i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
			}
		}));
		const g = () => {
			t.el.classList.add(t.params.pagination.paginationDisabledClass);
			let {
				el: e
			} = t.pagination;
			e && (e = o(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), f()
		};
		Object.assign(t.pagination, {
			enable: () => {
				t.el.classList.remove(t.params.pagination.paginationDisabledClass);
				let {
					el: e
				} = t.pagination;
				e && (e = o(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), h(), m(), u()
			},
			disable: g,
			render: m,
			update: u,
			init: h,
			destroy: f
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: i,
			emit: r
		} = e;
		const o = a();
		let d, c, p, u, m = !1,
			h = null,
			f = null;

		function g() {
			if (!t.params.scrollbar.el || !t.scrollbar.el) return;
			const {
				scrollbar: e,
				rtlTranslate: s
			} = t, {
				dragEl: a,
				el: i
			} = e, r = t.params.scrollbar, n = t.params.loop ? t.progressLoop : t.progress;
			let l = c,
				o = (p - c) * n;
			s ? (o = -o, o > 0 ? (l = c - o, o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o, o = 0) : o + c > p && (l = p - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(h), i.style.opacity = 1, h = setTimeout((() => {
				i.style.opacity = 0, i.style.transitionDuration = "400ms"
			}), 1e3))
		}

		function b() {
			if (!t.params.scrollbar.el || !t.scrollbar.el) return;
			const {
				scrollbar: e
			} = t, {
				dragEl: s,
				el: a
			} = e;
			s.style.width = "", s.style.height = "", p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, a.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
		}

		function y(e) {
			return t.isHorizontal() ? e.clientX : e.clientY
		}

		function E(e) {
			const {
				scrollbar: s,
				rtlTranslate: a
			} = t, {
				el: i
			} = s;
			let r;
			r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
			const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
			t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
		}

		function x(e) {
			const s = t.params.scrollbar,
				{
					scrollbar: a,
					wrapperEl: i
				} = t,
				{
					el: n,
					dragEl: l
				} = a;
			m = !0, d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", E(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e)
		}

		function S(e) {
			const {
				scrollbar: s,
				wrapperEl: a
			} = t, {
				el: i,
				dragEl: n
			} = s;
			m && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, E(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e))
		}

		function T(e) {
			const s = t.params.scrollbar,
				{
					scrollbar: a,
					wrapperEl: i
				} = t,
				{
					el: n
				} = a;
			m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l((() => {
				n.style.opacity = 0, n.style.transitionDuration = "400ms"
			}), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
		}

		function M(e) {
			const {
				scrollbar: s,
				params: a
			} = t, i = s.el;
			if (!i) return;
			const r = i,
				n = !!a.passiveListeners && {
					passive: !1,
					capture: !1
				},
				l = !!a.passiveListeners && {
					passive: !0,
					capture: !1
				};
			if (!r) return;
			const d = "on" === e ? "addEventListener" : "removeEventListener";
			r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", T, l)
		}

		function C() {
			const {
				scrollbar: e,
				el: s
			} = t;
			t.params.scrollbar = te(t, t.originalParams.scrollbar, t.params.scrollbar, {
				el: "swiper-scrollbar"
			});
			const a = t.params.scrollbar;
			if (!a.el) return;
			let i, r;
			if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el) i || (i = a.el);
			else if (i = o.querySelectorAll(a.el), !i.length) return;
			t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(se(t.params.scrollbar.dragClass)), r || (r = v("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
				el: i,
				dragEl: r
			}), a.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"), i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
		}

		function P() {
			const e = t.params.scrollbar,
				s = t.scrollbar.el;
			s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && M("off")
		}
		s({
			scrollbar: {
				el: null,
				dragSize: "auto",
				hide: !1,
				draggable: !1,
				snapOnRelease: !0,
				lockClass: "swiper-scrollbar-lock",
				dragClass: "swiper-scrollbar-drag",
				scrollbarDisabledClass: "swiper-scrollbar-disabled",
				horizontalClass: "swiper-scrollbar-horizontal",
				verticalClass: "swiper-scrollbar-vertical"
			}
		}), t.scrollbar = {
			el: null,
			dragEl: null
		}, i("init", (() => {
			!1 === t.params.scrollbar.enabled ? L() : (C(), b(), g())
		})), i("update resize observerUpdate lock unlock", (() => {
			b()
		})), i("setTranslate", (() => {
			g()
		})), i("setTransition", ((e, s) => {
			! function(e) {
				t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
			}(s)
		})), i("enable disable", (() => {
			const {
				el: e
			} = t.scrollbar;
			e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
		})), i("destroy", (() => {
			P()
		}));
		const L = () => {
			t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), P()
		};
		Object.assign(t.scrollbar, {
			enable: () => {
				t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), C(), b(), g()
			},
			disable: L,
			updateSize: b,
			setTranslate: g,
			init: C,
			destroy: P
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			parallax: {
				enabled: !1
			}
		});
		const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
			r = (e, s) => {
				const {
					rtl: a
				} = t, i = a ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
				let n = e.getAttribute("data-swiper-parallax-x"),
					l = e.getAttribute("data-swiper-parallax-y");
				const o = e.getAttribute("data-swiper-parallax-scale"),
					d = e.getAttribute("data-swiper-parallax-opacity"),
					c = e.getAttribute("data-swiper-parallax-rotate");
				if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
					const t = d - (d - 1) * (1 - Math.abs(s));
					e.style.opacity = t
				}
				let p = `translate3d(${n}, ${l}, 0px)`;
				if (null != o) {
					p += ` scale(${o-(o-1)*(1-Math.abs(s))})`
				}
				if (c && null != c) {
					p += ` rotate(${c*s*-1}deg)`
				}
				e.style.transform = p
			},
			n = () => {
				const {
					el: e,
					slides: s,
					progress: a,
					snapGrid: n,
					isElement: l
				} = t, o = f(e, i);
				t.isElement && o.push(...f(t.hostEl, i)), o.forEach((e => {
					r(e, a)
				})), s.forEach(((e, s) => {
					let l = e.progress;
					t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
						r(e, l)
					}))
				}))
			};
		a("beforeInit", (() => {
			t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
		})), a("init", (() => {
			t.params.parallax.enabled && n()
		})), a("setTranslate", (() => {
			t.params.parallax.enabled && n()
		})), a("setTransition", ((e, s) => {
			t.params.parallax.enabled && function(e) {
				void 0 === e && (e = t.params.speed);
				const {
					el: s,
					hostEl: a
				} = t, r = [...s.querySelectorAll(i)];
				t.isElement && r.push(...a.querySelectorAll(i)), r.forEach((t => {
					let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
					0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
				}))
			}(s)
		}))
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const n = r();
		s({
			zoom: {
				enabled: !1,
				maxRatio: 3,
				minRatio: 1,
				toggle: !0,
				containerClass: "swiper-zoom-container",
				zoomedSlideClass: "swiper-slide-zoomed"
			}
		}), t.zoom = {
			enabled: !1
		};
		let l, o, c = 1,
			p = !1;
		const u = [],
			m = {
				originX: 0,
				originY: 0,
				slideEl: void 0,
				slideWidth: void 0,
				slideHeight: void 0,
				imageEl: void 0,
				imageWrapEl: void 0,
				maxRatio: 3
			},
			h = {
				isTouched: void 0,
				isMoved: void 0,
				currentX: void 0,
				currentY: void 0,
				minX: void 0,
				minY: void 0,
				maxX: void 0,
				maxY: void 0,
				width: void 0,
				height: void 0,
				startX: void 0,
				startY: void 0,
				touchesStart: {},
				touchesCurrent: {}
			},
			g = {
				x: void 0,
				y: void 0,
				prevPositionX: void 0,
				prevPositionY: void 0,
				prevTime: void 0
			};
		let v = 1;

		function b() {
			if (u.length < 2) return 1;
			const e = u[0].pageX,
				t = u[0].pageY,
				s = u[1].pageX,
				a = u[1].pageY;
			return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
		}

		function y(e) {
			const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
			return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
		}

		function x(e) {
			if ("mouse" === e.pointerType && u.splice(0, u.length), !y(e)) return;
			const s = t.params.zoom;
			if (l = !1, o = !1, u.push(e), !(u.length < 2)) {
				if (l = !0, m.scaleStart = b(), !m.slideEl) {
					m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
					let a = m.slideEl.querySelector(`.${s.containerClass}`);
					if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = a, m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void(m.imageEl = void 0);
					m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio
				}
				if (m.imageEl) {
					const [e, t] = function() {
						if (u.length < 2) return {
							x: null,
							y: null
						};
						const e = m.imageEl.getBoundingClientRect();
						return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c]
					}();
					m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms"
				}
				p = !0
			}
		}

		function S(e) {
			if (!y(e)) return;
			const s = t.params.zoom,
				a = t.zoom,
				i = u.findIndex((t => t.pointerId === e.pointerId));
			i >= 0 && (u[i] = e), u.length < 2 || (o = !0, m.scaleMove = b(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
		}

		function T(e) {
			if (!y(e)) return;
			if ("mouse" === e.pointerType && "pointerout" === e.type) return;
			const s = t.params.zoom,
				a = t.zoom,
				i = u.findIndex((t => t.pointerId === e.pointerId));
			i >= 0 && u.splice(i, 1), l && o && (l = !1, o = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
		}

		function M(e) {
			if (!y(e) || ! function(e) {
					const s = `.${t.params.zoom.containerClass}`;
					return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
				}(e)) return;
			const s = t.zoom;
			if (!m.imageEl) return;
			if (!h.isTouched || !m.slideEl) return;
			h.isMoved || (h.width = m.imageEl.offsetWidth, h.height = m.imageEl.offsetHeight, h.startX = d(m.imageWrapEl, "x") || 0, h.startY = d(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
			const a = h.width * s.scale,
				i = h.height * s.scale;
			if (a < m.slideWidth && i < m.slideHeight) return;
			h.minX = Math.min(m.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - i / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
			if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p) {
				if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return void(h.isTouched = !1);
				if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return void(h.isTouched = !1)
			}
			e.cancelable && e.preventDefault(), e.stopPropagation(), h.isMoved = !0;
			const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
				{
					originX: n,
					originY: l
				} = m;
			h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
		}

		function C() {
			const e = t.zoom;
			m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
		}

		function P(e) {
			const s = t.zoom,
				a = t.params.zoom;
			if (!m.slideEl) {
				e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
				let s = m.slideEl.querySelector(`.${a.containerClass}`);
				s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0
			}
			if (!m.imageEl || !m.imageWrapEl) return;
			let i, r, l, o, d, p, u, g, v, b, y, x, S, T, M, C, P, L;
			t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = h.touchesStart.x, r = h.touchesStart.y);
			const A = "number" == typeof e ? e : null;
			1 === c && A && (i = void 0, r = void 0), s.scale = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, c = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, !e || 1 === c && A ? (u = 0, g = 0) : (P = m.slideEl.offsetWidth, L = m.slideEl.offsetHeight, l = w(m.slideEl).left + n.scrollX, o = w(m.slideEl).top + n.scrollY, d = l + P / 2 - i, p = o + L / 2 - r, v = m.imageEl.offsetWidth, b = m.imageEl.offsetHeight, y = v * s.scale, x = b * s.scale, S = Math.min(P / 2 - y / 2, 0), T = Math.min(L / 2 - x / 2, 0), M = -S, C = -T, u = d * s.scale, g = p * s.scale, u < S && (u = S), u > M && (u = M), g < T && (g = T), g > C && (g = C)), A && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
		}

		function L() {
			const e = t.zoom,
				s = t.params.zoom;
			if (!m.slideEl) {
				t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
				let e = m.slideEl.querySelector(`.${s.containerClass}`);
				e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
			}
			m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0)
		}

		function A(e) {
			const s = t.zoom;
			s.scale && 1 !== s.scale ? L() : P(e)
		}

		function I() {
			return {
				passiveListener: !!t.params.passiveListeners && {
					passive: !0,
					capture: !1
				},
				activeListenerWithCapture: !t.params.passiveListeners || {
					passive: !1,
					capture: !0
				}
			}
		}

		function z() {
			const e = t.zoom;
			if (e.enabled) return;
			e.enabled = !0;
			const {
				passiveListener: s,
				activeListenerWithCapture: a
			} = I();
			t.wrapperEl.addEventListener("pointerdown", x, s), t.wrapperEl.addEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
				t.wrapperEl.addEventListener(e, T, s)
			})), t.wrapperEl.addEventListener("pointermove", M, a)
		}

		function $() {
			const e = t.zoom;
			if (!e.enabled) return;
			e.enabled = !1;
			const {
				passiveListener: s,
				activeListenerWithCapture: a
			} = I();
			t.wrapperEl.removeEventListener("pointerdown", x, s), t.wrapperEl.removeEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
				t.wrapperEl.removeEventListener(e, T, s)
			})), t.wrapperEl.removeEventListener("pointermove", M, a)
		}
		Object.defineProperty(t.zoom, "scale", {
			get: () => v,
			set(e) {
				if (v !== e) {
					const t = m.imageEl,
						s = m.slideEl;
					i("zoomChange", e, t, s)
				}
				v = e
			}
		}), a("init", (() => {
			t.params.zoom.enabled && z()
		})), a("destroy", (() => {
			$()
		})), a("touchStart", ((e, s) => {
			t.zoom.enabled && function(e) {
				const s = t.device;
				if (!m.imageEl) return;
				if (h.isTouched) return;
				s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
				const a = u.length > 0 ? u[0] : e;
				h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY
			}(s)
		})), a("touchEnd", ((e, s) => {
			t.zoom.enabled && function() {
				const e = t.zoom;
				if (!m.imageEl) return;
				if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void(h.isMoved = !1);
				h.isTouched = !1, h.isMoved = !1;
				let s = 300,
					a = 300;
				const i = g.x * s,
					r = h.currentX + i,
					n = g.y * a,
					l = h.currentY + n;
				0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
				const o = Math.max(s, a);
				h.currentX = r, h.currentY = l;
				const d = h.width * e.scale,
					c = h.height * e.scale;
				h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${o}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
			}()
		})), a("doubleTap", ((e, s) => {
			!t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && A(s)
		})), a("transitionEnd", (() => {
			t.zoom.enabled && t.params.zoom.enabled && C()
		})), a("slideChange", (() => {
			t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
		})), Object.assign(t.zoom, {
			enable: z,
			disable: $,
			in: P,
			out: L,
			toggle: A
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;

		function i(e, t) {
			const s = function() {
				let e, t, s;
				return (a, i) => {
					for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
					return e
				}
			}();
			let a, i;
			return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
				return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
			}, this
		}

		function r() {
			t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
		}
		s({
			controller: {
				control: void 0,
				inverse: !1,
				by: "slide"
			}
		}), t.controller = {
			control: void 0
		}, a("beforeInit", (() => {
			if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
				const e = document.querySelector(t.params.controller.control);
				if (e && e.swiper) t.controller.control = e.swiper;
				else if (e) {
					const s = a => {
						t.controller.control = a.detail[0], t.update(), e.removeEventListener("init", s)
					};
					e.addEventListener("init", s)
				}
			} else t.controller.control = t.params.controller.control
		})), a("update", (() => {
			r()
		})), a("resize", (() => {
			r()
		})), a("observerUpdate", (() => {
			r()
		})), a("setTranslate", ((e, s, a) => {
			t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
		})), a("setTransition", ((e, s, a) => {
			t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
		})), Object.assign(t.controller, {
			setTranslate: function(e, s) {
				const a = t.controller.control;
				let r, n;
				const l = t.constructor;

				function o(e) {
					if (e.destroyed) return;
					const s = t.rtlTranslate ? -t.translate : t.translate;
					"slide" === t.params.controller.by && (! function(e) {
						t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)
					}(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(a))
					for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
				else a instanceof l && s !== a && o(a)
			},
			setTransition: function(e, s) {
				const a = t.constructor,
					i = t.controller.control;
				let r;

				function n(s) {
					s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l((() => {
						s.updateAutoHeight()
					})), x(s.wrapperEl, (() => {
						i && s.transitionEnd()
					}))))
				}
				if (Array.isArray(i))
					for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
				else i instanceof a && s !== i && n(i)
			}
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			a11y: {
				enabled: !0,
				notificationClass: "swiper-notification",
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				slideLabelMessage: "{{index}} / {{slidesLength}}",
				containerMessage: null,
				containerRoleDescriptionMessage: null,
				itemRoleDescriptionMessage: null,
				slideRole: "group",
				id: null
			}
		}), t.a11y = {
			clicked: !1
		};
		let i = null;

		function r(e) {
			const t = i;
			0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
		}
		const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

		function l(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("tabIndex", "0")
			}))
		}

		function o(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("tabIndex", "-1")
			}))
		}

		function d(e, t) {
			(e = n(e)).forEach((e => {
				e.setAttribute("role", t)
			}))
		}

		function c(e, t) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-roledescription", t)
			}))
		}

		function p(e, t) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-label", t)
			}))
		}

		function u(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-disabled", !0)
			}))
		}

		function m(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-disabled", !1)
			}))
		}

		function h(e) {
			if (13 !== e.keyCode && 32 !== e.keyCode) return;
			const s = t.params.a11y,
				a = e.target;
			t.pagination && t.pagination.el && (a === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(se(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && a === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.prevEl && a === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.matches(se(t.params.pagination.bulletClass)) && a.click())
		}

		function f() {
			return t.pagination && t.pagination.bullets && t.pagination.bullets.length
		}

		function g() {
			return f() && t.params.pagination.clickable
		}
		const w = (e, t, s) => {
				l(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", h)), p(e, s),
					function(e, t) {
						(e = n(e)).forEach((e => {
							e.setAttribute("aria-controls", t)
						}))
					}(e, t)
			},
			b = () => {
				t.a11y.clicked = !0
			},
			E = () => {
				requestAnimationFrame((() => {
					requestAnimationFrame((() => {
						t.destroyed || (t.a11y.clicked = !1)
					}))
				}))
			},
			x = e => {
				if (t.a11y.clicked) return;
				const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
				if (!s || !t.slides.includes(s)) return;
				const a = t.slides.indexOf(s) === t.activeIndex,
					i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
				a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
			},
			S = () => {
				const e = t.params.a11y;
				e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
				const s = t.slides.length;
				e.slideLabelMessage && t.slides.forEach(((a, i) => {
					const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
					p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
				}))
			},
			T = () => {
				const e = t.params.a11y;
				t.el.append(i);
				const s = t.el;
				e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
				const a = t.wrapperEl,
					r = e.id || a.getAttribute("id") || `swiper-wrapper-${l=16,void 0===l&&(l=16),"x".repeat(l).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
				var l;
				const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
				var d;
				d = r, n(a).forEach((e => {
						e.setAttribute("id", d)
					})),
					function(e, t) {
						(e = n(e)).forEach((e => {
							e.setAttribute("aria-live", t)
						}))
					}(a, o), S();
				let {
					nextEl: u,
					prevEl: m
				} = t.navigation ? t.navigation : {};
				if (u = n(u), m = n(m), u && u.forEach((t => w(t, r, e.nextSlideMessage))), m && m.forEach((t => w(t, r, e.prevSlideMessage))), g()) {
					n(t.pagination.el).forEach((e => {
						e.addEventListener("keydown", h)
					}))
				}
				t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", b, !0), t.el.addEventListener("pointerup", E, !0)
			};
		a("beforeInit", (() => {
			i = v("span", t.params.a11y.notificationClass), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true")
		})), a("afterInit", (() => {
			t.params.a11y.enabled && T()
		})), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
			t.params.a11y.enabled && S()
		})), a("fromEdge toEdge afterInit lock unlock", (() => {
			t.params.a11y.enabled && function() {
				if (t.params.loop || t.params.rewind || !t.navigation) return;
				const {
					nextEl: e,
					prevEl: s
				} = t.navigation;
				s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)))
			}()
		})), a("paginationUpdate", (() => {
			t.params.a11y.enabled && function() {
				const e = t.params.a11y;
				f() && t.pagination.bullets.forEach((s => {
					t.params.pagination.clickable && (l(s), t.params.pagination.renderBullet || (d(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(se(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
				}))
			}()
		})), a("destroy", (() => {
			t.params.a11y.enabled && function() {
				i && i.remove();
				let {
					nextEl: e,
					prevEl: s
				} = t.navigation ? t.navigation : {};
				e = n(e), s = n(s), e && e.forEach((e => e.removeEventListener("keydown", h))), s && s.forEach((e => e.removeEventListener("keydown", h))), g() && n(t.pagination.el).forEach((e => {
					e.removeEventListener("keydown", h)
				}));
				t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", b, !0), t.el.removeEventListener("pointerup", E, !0)
			}()
		}))
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			history: {
				enabled: !1,
				root: "",
				replaceState: !1,
				key: "slides",
				keepQuery: !1
			}
		});
		let i = !1,
			n = {};
		const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
			o = e => {
				const t = r();
				let s;
				s = e ? new URL(e) : t.location;
				const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
					i = a.length;
				return {
					key: a[i - 2],
					value: a[i - 1]
				}
			},
			d = (e, s) => {
				const a = r();
				if (!i || !t.params.history.enabled) return;
				let n;
				n = t.params.url ? new URL(t.params.url) : a.location;
				const o = t.slides[s];
				let d = l(o.getAttribute("data-history"));
				if (t.params.history.root.length > 0) {
					let s = t.params.history.root;
					"/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e?`${e}/`:""}${d}`
				} else n.pathname.includes(e) || (d = `${e?`${e}/`:""}${d}`);
				t.params.history.keepQuery && (d += n.search);
				const c = a.history.state;
				c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
					value: d
				}, null, d) : a.history.pushState({
					value: d
				}, null, d))
			},
			c = (e, s, a) => {
				if (s)
					for (let i = 0, r = t.slides.length; i < r; i += 1) {
						const r = t.slides[i];
						if (l(r.getAttribute("data-history")) === s) {
							const s = t.getSlideIndex(r);
							t.slideTo(s, e, a)
						}
					} else t.slideTo(0, e, a)
			},
			p = () => {
				n = o(t.params.url), c(t.params.speed, n.value, !1)
			};
		a("init", (() => {
			t.params.history.enabled && (() => {
				const e = r();
				if (t.params.history) {
					if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
					i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
				}
			})()
		})), a("destroy", (() => {
			t.params.history.enabled && (() => {
				const e = r();
				t.params.history.replaceState || e.removeEventListener("popstate", p)
			})()
		})), a("transitionEnd _freeModeNoMomentumRelease", (() => {
			i && d(t.params.history.key, t.activeIndex)
		})), a("slideChange", (() => {
			i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
		}))
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			emit: i,
			on: n
		} = e, l = !1;
		const o = a(),
			d = r();
		s({
			hashNavigation: {
				enabled: !1,
				replaceState: !1,
				watchState: !1,
				getSlideIndex(e, s) {
					if (t.virtual && t.params.virtual.enabled) {
						const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
						if (!e) return 0;
						return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
					}
					return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
				}
			}
		});
		const c = () => {
				i("hashChange");
				const e = o.location.hash.replace("#", ""),
					s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
				if (e !== (s ? s.getAttribute("data-hash") : "")) {
					const s = t.params.hashNavigation.getSlideIndex(t, e);
					if (void 0 === s || Number.isNaN(s)) return;
					t.slideTo(s)
				}
			},
			p = () => {
				if (!l || !t.params.hashNavigation.enabled) return;
				const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
					s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
				t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"))
			};
		n("init", (() => {
			t.params.hashNavigation.enabled && (() => {
				if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
				l = !0;
				const e = o.location.hash.replace("#", "");
				if (e) {
					const s = 0,
						a = t.params.hashNavigation.getSlideIndex(t, e);
					t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
				}
				t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
			})()
		})), n("destroy", (() => {
			t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
		})), n("transitionEnd _freeModeNoMomentumRelease", (() => {
			l && p()
		})), n("slideChange", (() => {
			l && t.params.cssMode && p()
		}))
	}, function(e) {
		let t, s, {
			swiper: i,
			extendParams: r,
			on: n,
			emit: l,
			params: o
		} = e;
		i.autoplay = {
			running: !1,
			paused: !1,
			timeLeft: 0
		}, r({
			autoplay: {
				enabled: !1,
				delay: 3e3,
				waitForTransition: !0,
				disableOnInteraction: !1,
				stopOnLastSlide: !1,
				reverseDirection: !1,
				pauseOnMouseEnter: !1
			}
		});
		let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3,
			w = o && o.autoplay ? o.autoplay.delay : 3e3,
			b = (new Date).getTime();

		function y(e) {
			i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || C())
		}
		const E = () => {
				if (i.destroyed || !i.autoplay.running) return;
				i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
				const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
				i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
					E()
				}))
			},
			x = e => {
				if (i.destroyed || !i.autoplay.running) return;
				cancelAnimationFrame(s), E();
				let a = void 0 === e ? i.params.autoplay.delay : e;
				v = i.params.autoplay.delay, w = i.params.autoplay.delay;
				const r = (() => {
					let e;
					if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], !e) return;
					return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
				})();
				!Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
				const n = i.params.speed,
					o = () => {
						i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
							x()
						}))))
					};
				return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
					o()
				}), a)) : requestAnimationFrame((() => {
					o()
				})), a
			},
			S = () => {
				b = (new Date).getTime(), i.autoplay.running = !0, x(), l("autoplayStart")
			},
			T = () => {
				i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop")
			},
			M = (e, s) => {
				if (i.destroyed || !i.autoplay.running) return;
				clearTimeout(t), e || (f = !0);
				const a = () => {
					l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
				};
				if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
				const r = d || i.params.autoplay.delay;
				d = r - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a())
			},
			C = () => {
				i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"))
			},
			P = () => {
				if (i.destroyed || !i.autoplay.running) return;
				const e = a();
				"hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C()
			},
			L = e => {
				"mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0))
			},
			A = e => {
				"mouse" === e.pointerType && (g = !1, i.autoplay.paused && C())
			};
		n("init", (() => {
			i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", A)), a().addEventListener("visibilitychange", P), S())
		})), n("destroy", (() => {
			i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", A), a().removeEventListener("visibilitychange", P), i.autoplay.running && T()
		})), n("_freeModeStaticRelease", (() => {
			(u || f) && C()
		})), n("_freeModeNoMomentumRelease", (() => {
			i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
		})), n("beforeTransitionStart", ((e, t, s) => {
			!i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
		})), n("sliderFirstMove", (() => {
			!i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout((() => {
				f = !0, u = !0, M(!0)
			}), 200)))
		})), n("touchEnd", (() => {
			if (!i.destroyed && i.autoplay.running && p) {
				if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void(p = !1);
				u && i.params.cssMode && C(), u = !1, p = !1
			}
		})), n("slideChange", (() => {
			!i.destroyed && i.autoplay.running && (h = !0)
		})), Object.assign(i.autoplay, {
			start: S,
			stop: T,
			pause: M,
			resume: C
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: i
		} = e;
		s({
			thumbs: {
				swiper: null,
				multipleActiveThumbs: !0,
				autoScrollOffset: 0,
				slideThumbActiveClass: "swiper-slide-thumb-active",
				thumbsContainerClass: "swiper-thumbs"
			}
		});
		let r = !1,
			n = !1;

		function l() {
			const e = t.thumbs.swiper;
			if (!e || e.destroyed) return;
			const s = e.clickedIndex,
				a = e.clickedSlide;
			if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
			if (null == s) return;
			let i;
			i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
		}

		function o() {
			const {
				thumbs: e
			} = t.params;
			if (r) return !1;
			r = !0;
			const s = t.constructor;
			if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			}), Object.assign(t.thumbs.swiper.params, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			}), t.thumbs.swiper.update();
			else if (c(e.swiper)) {
				const a = Object.assign({}, e.swiper);
				Object.assign(a, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), t.thumbs.swiper = new s(a), n = !0
			}
			return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
		}

		function d(e) {
			const s = t.thumbs.swiper;
			if (!s || s.destroyed) return;
			const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
			let i = 1;
			const r = t.params.thumbs.slideThumbActiveClass;
			if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList.remove(r))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
				for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
					e.classList.add(r)
				}));
			else
				for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
			const n = t.params.thumbs.autoScrollOffset,
				l = n && !s.params.loop;
			if (t.realIndex !== s.realIndex || l) {
				const i = s.activeIndex;
				let r, o;
				if (s.params.loop) {
					const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
					r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
				} else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
				l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
			}
		}
		t.thumbs = {
			swiper: null
		}, i("beforeInit", (() => {
			const {
				thumbs: e
			} = t.params;
			if (e && e.swiper)
				if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
					const s = a(),
						i = () => {
							const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
							if (a && a.swiper) e.swiper = a.swiper, o(), d(!0);
							else if (a) {
								const s = i => {
									e.swiper = i.detail[0], a.removeEventListener("init", s), o(), d(!0), e.swiper.update(), t.update()
								};
								a.addEventListener("init", s)
							}
							return a
						},
						r = () => {
							if (t.destroyed) return;
							i() || requestAnimationFrame(r)
						};
					requestAnimationFrame(r)
				} else o(), d(!0)
		})), i("slideChange update resize observerUpdate", (() => {
			d()
		})), i("setTransition", ((e, s) => {
			const a = t.thumbs.swiper;
			a && !a.destroyed && a.setTransition(s)
		})), i("beforeDestroy", (() => {
			const e = t.thumbs.swiper;
			e && !e.destroyed && n && e.destroy()
		})), Object.assign(t.thumbs, {
			init: o,
			update: d
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			emit: a,
			once: i
		} = e;
		s({
			freeMode: {
				enabled: !1,
				momentum: !0,
				momentumRatio: 1,
				momentumBounce: !0,
				momentumBounceRatio: 1,
				momentumVelocityRatio: 1,
				sticky: !1,
				minimumVelocity: .02
			}
		}), Object.assign(t, {
			freeMode: {
				onTouchStart: function() {
					if (t.params.cssMode) return;
					const e = t.getTranslate();
					t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
						currentPos: t.rtl ? t.translate : -t.translate
					})
				},
				onTouchMove: function() {
					if (t.params.cssMode) return;
					const {
						touchEventsData: e,
						touches: s
					} = t;
					0 === e.velocities.length && e.velocities.push({
						position: s[t.isHorizontal() ? "startX" : "startY"],
						time: e.touchStartTime
					}), e.velocities.push({
						position: s[t.isHorizontal() ? "currentX" : "currentY"],
						time: o()
					})
				},
				onTouchEnd: function(e) {
					let {
						currentPos: s
					} = e;
					if (t.params.cssMode) return;
					const {
						params: r,
						wrapperEl: n,
						rtlTranslate: l,
						snapGrid: d,
						touchEventsData: c
					} = t, p = o() - c.touchStartTime;
					if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
					else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
					else {
						if (r.freeMode.momentum) {
							if (c.velocities.length > 1) {
								const e = c.velocities.pop(),
									s = c.velocities.pop(),
									a = e.position - s.position,
									i = e.time - s.time;
								t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0)
							} else t.velocity = 0;
							t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
							let e = 1e3 * r.freeMode.momentumRatio;
							const s = t.velocity * e;
							let p = t.translate + s;
							l && (p = -p);
							let u, m = !1;
							const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
							let f;
							if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
							else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
							else if (r.freeMode.sticky) {
								let e;
								for (let t = 0; t < d.length; t += 1)
									if (d[t] > -p) {
										e = t;
										break
									} p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
							}
							if (f && i("transitionEnd", (() => {
									t.loopFix()
								})), 0 !== t.velocity) {
								if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
									const s = Math.abs((l ? -p : p) - t.translate),
										a = t.slidesSizesGrid[t.activeIndex];
									e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
								}
							} else if (r.freeMode.sticky) return void t.slideToClosest();
							r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, (() => {
								t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
									t.setTranslate(u), x(n, (() => {
										t && !t.destroyed && t.transitionEnd()
									}))
								}), 0))
							}))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, (() => {
								t && !t.destroyed && t.transitionEnd()
							})))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
						} else {
							if (r.freeMode.sticky) return void t.slideToClosest();
							r.freeMode && a("_freeModeNoMomentumRelease")
						}(!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
					}
				}
			}
		})
	}, function(e) {
		let t, s, a, i, {
			swiper: r,
			extendParams: n,
			on: l
		} = e;
		n({
			grid: {
				rows: 1,
				fill: "column"
			}
		});
		const o = () => {
			let e = r.params.spaceBetween;
			return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
		};
		l("init", (() => {
			i = r.params.grid && r.params.grid.rows > 1
		})), l("update", (() => {
			const {
				params: e,
				el: t
			} = r, s = e.grid && e.grid.rows > 1;
			i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s
		})), r.grid = {
			initSlides: e => {
				const {
					slidesPerView: i
				} = r.params, {
					rows: n,
					fill: l
				} = r.params.grid, o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
				a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n
			},
			unsetSlides: () => {
				r.slides && r.slides.forEach((e => {
					e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "")
				}))
			},
			updateSlide: (e, i, n) => {
				const {
					slidesPerGroup: l
				} = r.params, d = o(), {
					rows: c,
					fill: p
				} = r.params.grid, u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
				let m, h, f;
				if ("row" === p && l > 1) {
					const s = Math.floor(e / (l * c)),
						a = e - c * l * s,
						r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
					f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m
				} else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
				i.row = f, i.column = h, i.style.height = `calc((100% - ${(c-1)*d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0
			},
			updateWrapperSize: (e, s) => {
				const {
					centeredSlides: a,
					roundLengths: i
				} = r.params, n = o(), {
					rows: l
				} = r.params.grid;
				if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize+n}px`), a) {
					const e = [];
					for (let t = 0; t < s.length; t += 1) {
						let a = s[t];
						i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a)
					}
					s.splice(0, s.length), s.push(...e)
				}
			}
		}
	}, function(e) {
		let {
			swiper: t
		} = e;
		Object.assign(t, {
			appendSlide: ae.bind(t),
			prependSlide: ie.bind(t),
			addSlide: re.bind(t),
			removeSlide: ne.bind(t),
			removeAllSlides: le.bind(t)
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			fadeEffect: {
				crossFade: !1
			}
		}), oe({
			effect: "fade",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e
				} = t;
				t.params.fadeEffect;
				for (let s = 0; s < e.length; s += 1) {
					const e = t.slides[s];
					let a = -e.swiperSlideOffset;
					t.params.virtualTranslate || (a -= t.translate);
					let i = 0;
					t.isHorizontal() || (i = a, a = 0);
					const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
						n = de(0, e);
					n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s,
					allSlides: !0
				})
			},
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				spaceBetween: 0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			cubeEffect: {
				slideShadows: !0,
				shadow: !0,
				shadowOffset: 20,
				shadowScale: .94
			}
		});
		const i = (e, t, s) => {
			let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
				i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
			a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
		};
		oe({
			effect: "cube",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					el: e,
					wrapperEl: s,
					slides: a,
					width: r,
					height: n,
					rtlTranslate: l,
					size: o,
					browser: d
				} = t, c = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
				let m, h = 0;
				c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = v("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = v("div", "swiper-cube-shadow"), e.append(m))));
				for (let e = 0; e < a.length; e += 1) {
					const s = a[e];
					let r = e;
					u && (r = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
					let n = 90 * r,
						d = Math.floor(n / 360);
					l && (n = -n, d = Math.floor(-n / 360));
					const m = Math.max(Math.min(s.progress, 1), -1);
					let f = 0,
						g = 0,
						v = 0;
					r % 4 == 0 ? (f = 4 * -d * o, v = 0) : (r - 1) % 4 == 0 ? (f = 0, v = 4 * -d * o) : (r - 2) % 4 == 0 ? (f = o + 4 * d * o, v = o) : (r - 3) % 4 == 0 && (f = -o, v = 3 * o + 4 * o * d), l && (f = -f), p || (g = f, f = 0);
					const w = `rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${g}px, ${v}px)`;
					m <= 1 && m > -1 && (h = 90 * r + 90 * m, l && (h = 90 * -r - 90 * m), t.browser && t.browser.isSafari && Math.abs(h) / 90 % 2 == 1 && (h += .001)), s.style.transform = w, c.slideShadows && i(s, m, p)
				}
				if (s.style.transformOrigin = `50% 50% -${o/2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o/2}px`, c.shadow)
					if (p) m.style.transform = `translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
					else {
						const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
							s = c.shadowScale,
							a = c.shadowScale / t,
							i = c.shadowOffset;
						m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`
					} const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
				s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
			},
			setTransition: e => {
				const {
					el: s,
					slides: a
				} = t;
				if (a.forEach((t => {
						t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
							t.style.transitionDuration = `${e}ms`
						}))
					})), t.params.cubeEffect.shadow && !t.isHorizontal()) {
					const t = s.querySelector(".swiper-cube-shadow");
					t && (t.style.transitionDuration = `${e}ms`)
				}
			},
			recreateShadows: () => {
				const e = t.isHorizontal();
				t.slides.forEach((t => {
					const s = Math.max(Math.min(t.progress, 1), -1);
					i(t, s, e)
				}))
			},
			getEffectParams: () => t.params.cubeEffect,
			perspective: () => !0,
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				resistanceRatio: 0,
				spaceBetween: 0,
				centeredSlides: !1,
				virtualTranslate: !0
			})
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			flipEffect: {
				slideShadows: !0,
				limitRotation: !0
			}
		});
		const i = (e, s) => {
			let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
				i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
			a || (a = pe("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = pe("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0))
		};
		oe({
			effect: "flip",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e,
					rtlTranslate: s
				} = t, a = t.params.flipEffect;
				for (let r = 0; r < e.length; r += 1) {
					const n = e[r];
					let l = n.progress;
					t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
					const o = n.swiperSlideOffset;
					let d = -180 * l,
						c = 0,
						p = t.params.cssMode ? -o - t.translate : -o,
						u = 0;
					t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), t.browser && t.browser.isSafari && (Math.abs(d) / 90 % 2 == 1 && (d += .001), Math.abs(c) / 90 % 2 == 1 && (c += .001)), n.style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l);
					const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
					de(0, n).style.transform = m
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s
				})
			},
			recreateShadows: () => {
				t.params.flipEffect, t.slides.forEach((e => {
					let s = e.progress;
					t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s)
				}))
			},
			getEffectParams: () => t.params.flipEffect,
			perspective: () => !0,
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				spaceBetween: 0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				scale: 1,
				modifier: 1,
				slideShadows: !0
			}
		}), oe({
			effect: "coverflow",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					width: e,
					height: s,
					slides: a,
					slidesSizesGrid: i
				} = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
				for (let e = 0, s = a.length; e < s; e += 1) {
					const s = a[e],
						l = i[e],
						p = (o - s.swiperSlideOffset - l / 2) / l,
						u = "function" == typeof r.modifier ? r.modifier(p) : p * r.modifier;
					let m = n ? d * u : 0,
						h = n ? 0 : d * u,
						f = -c * Math.abs(u),
						g = r.stretch;
					"string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * l);
					let v = n ? 0 : g * u,
						w = n ? g * u : 0,
						b = 1 - (1 - r.scale) * Math.abs(u);
					Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0), t.browser && t.browser.isSafari && (Math.abs(m) / 90 % 2 == 1 && (m += .001), Math.abs(h) / 90 % 2 == 1 && (h += .001));
					const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
					if (de(0, s).style.transform = y, s.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
						let e = n ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top"),
							t = n ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
						e || (e = pe("coverflow", s, n ? "left" : "top")), t || (t = pe("coverflow", s, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), t && (t.style.opacity = -u > 0 ? -u : 0)
					}
				}
			},
			setTransition: e => {
				t.slides.map((e => h(e))).forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				}))
			},
			perspective: () => !0,
			overwriteParams: () => ({
				watchSlidesProgress: !0
			})
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			creativeEffect: {
				limitProgress: 1,
				shadowPerProgress: !1,
				progressMultiplier: 1,
				perspective: !0,
				prev: {
					translate: [0, 0, 0],
					rotate: [0, 0, 0],
					opacity: 1,
					scale: 1
				},
				next: {
					translate: [0, 0, 0],
					rotate: [0, 0, 0],
					opacity: 1,
					scale: 1
				}
			}
		});
		const i = e => "string" == typeof e ? e : `${e}px`;
		oe({
			effect: "creative",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e,
					wrapperEl: s,
					slidesSizesGrid: a
				} = t, r = t.params.creativeEffect, {
					progressMultiplier: n
				} = r, l = t.params.centeredSlides;
				if (l) {
					const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
					s.style.transform = `translateX(calc(50% - ${e}px))`
				}
				for (let s = 0; s < e.length; s += 1) {
					const a = e[s],
						o = a.progress,
						d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
					let c = d;
					l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
					const p = a.swiperSlideOffset,
						u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
						m = [0, 0, 0];
					let h = !1;
					t.isHorizontal() || (u[1] = u[0], u[0] = 0);
					let f = {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						scale: 1,
						opacity: 1
					};
					d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !0), u.forEach(((e, t) => {
						u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`
					})), m.forEach(((e, s) => {
						let a = f.rotate[s] * Math.abs(d * n);
						t.browser && t.browser.isSafari && Math.abs(a) / 90 % 2 == 1 && (a += .001), m[s] = a
					})), a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
					const g = u.join(", "),
						v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
						w = c < 0 ? `scale(${1+(1-f.scale)*c*n})` : `scale(${1-(1-f.scale)*c*n})`,
						b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
						y = `translate3d(${g}) ${v} ${w}`;
					if (h && f.shadow || !h) {
						let e = a.querySelector(".swiper-slide-shadow");
						if (!e && f.shadow && (e = pe("creative", a)), e) {
							const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
							e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
						}
					}
					const E = de(0, a);
					E.style.transform = y, E.style.opacity = b, f.origin && (E.style.transformOrigin = f.origin)
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s,
					allSlides: !0
				})
			},
			perspective: () => t.params.creativeEffect.perspective,
			overwriteParams: () => ({
				watchSlidesProgress: !0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}, function(e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			cardsEffect: {
				slideShadows: !0,
				rotate: !0,
				perSlideRotate: 2,
				perSlideOffset: 8
			}
		}), oe({
			effect: "cards",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e,
					activeIndex: s,
					rtlTranslate: a
				} = t, i = t.params.cardsEffect, {
					startTranslate: r,
					isTouched: n
				} = t.touchEventsData, l = a ? -t.translate : t.translate;
				for (let o = 0; o < e.length; o += 1) {
					const d = e[o],
						c = d.progress,
						p = Math.min(Math.max(c, -4), 4);
					let u = d.swiperSlideOffset;
					t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
					let m = t.params.cssMode ? -u - t.translate : -u,
						h = 0;
					const f = -100 * Math.abs(p);
					let g = 1,
						v = -i.perSlideRotate * p,
						w = i.perSlideOffset - .75 * Math.abs(p);
					const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
						y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
						E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
					if (y || E) {
						const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
						v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%"
					}
					if (m = p < 0 ? `calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
						const e = h;
						h = m, m = e
					}
					const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
						S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;
					if (i.slideShadows) {
						let e = d.querySelector(".swiper-slide-shadow");
						e || (e = pe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
					}
					d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
					de(0, d).style.transform = S
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s
				})
			},
			perspective: () => !0,
			overwriteParams: () => ({
				watchSlidesProgress: !0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}];
	return ee.use(ue), ee
}();


/*
 *
 * gmaps.js
 *
 */
"use strict";
! function(e, t) {
	"object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], t) : e.GMaps = t()
}(this, function() {
	var t = function(e, t) {
			var o;
			if (e === t) return e;
			for (o in t) void 0 !== t[o] && (e[o] = t[o]);
			return e
		},
		o = function(e, t) {
			var o, n = Array.prototype.slice.call(arguments, 2),
				r = [],
				i = e.length;
			if (Array.prototype.map && e.map === Array.prototype.map) r = Array.prototype.map.call(e, function(e) {
				var o = n.slice(0);
				return o.splice(0, 0, e), t.apply(this, o)
			});
			else
				for (o = 0; i > o; o++) callback_params = n, callback_params.splice(0, 0, e[o]), r.push(t.apply(this, callback_params));
			return r
		},
		n = function(e) {
			var t, o = [];
			for (t = 0; t < e.length; t++) o = o.concat(e[t]);
			return o
		},
		r = function(e, t) {
			var o = e[0],
				n = e[1];
			return t && (o = e[1], n = e[0]), new google.maps.LatLng(o, n)
		},
		i = function(e, t) {
			var o;
			for (o = 0; o < e.length; o++) e[o] instanceof google.maps.LatLng || (e[o].length > 0 && "object" == typeof e[o][0] ? e[o] = i(e[o], t) : e[o] = r(e[o], t));
			return e
		},
		s = function(e, t) {
			var o, n = e.replace(".", "");
			return o = "jQuery" in this && t ? $("." + n, t)[0] : document.getElementsByClassName(n)[0]
		},
		a = function(e, t) {
			var o, e = e.replace("#", "");
			return o = "jQuery" in window && t ? $("#" + e, t)[0] : document.getElementById(e)
		},
		l = function(e) {
			var t = 0,
				o = 0;
			if (e.getBoundingClientRect) {
				var n = e.getBoundingClientRect(),
					r = -(window.scrollX ? window.scrollX : window.pageXOffset),
					i = -(window.scrollY ? window.scrollY : window.pageYOffset);
				return [n.left - r, n.top - i]
			}
			if (e.offsetParent)
				do t += e.offsetLeft, o += e.offsetTop; while (e = e.offsetParent);
			return [t, o]
		},
		p = function(e) {
			var o = document,
				n = function(e) {
					if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
						function() {};
					if (!this) return new n(e);
					e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
					var r, i = function(e, t) {
							return void 0 === e ? t : e
						},
						p = this,
						c = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
						g = ["mousemove", "mouseout", "mouseover"],
						h = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
						u = e.el || e.div,
						d = e.markerClusterer,
						m = google.maps.MapTypeId[e.mapType.toUpperCase()],
						f = new google.maps.LatLng(e.lat, e.lng),
						y = i(e.zoomControl, !0),
						v = e.zoomControlOpt || {
							style: "DEFAULT",
							position: "TOP_LEFT"
						},
						w = v.style || "DEFAULT",
						k = v.position || "TOP_LEFT",
						L = i(e.panControl, !0),
						b = i(e.mapTypeControl, !0),
						_ = i(e.scaleControl, !0),
						M = i(e.streetViewControl, !0),
						x = i(x, !0),
						C = {},
						O = {
							zoom: this.zoom,
							center: f,
							mapTypeId: m
						},
						P = {
							panControl: L,
							zoomControl: y,
							zoomControlOptions: {
								style: google.maps.ZoomControlStyle[w],
								position: google.maps.ControlPosition[k]
							},
							mapTypeControl: b,
							scaleControl: _,
							streetViewControl: M,
							overviewMapControl: x
						};
					if ("string" == typeof e.el || "string" == typeof e.div ? u.indexOf("#") > -1 ? this.el = a(u, e.context) : this.el = s.apply(this, [u, e.context]) : this.el = u, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
					for (window.context_menu = window.context_menu || {}, window.context_menu[p.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, r = 0; r < h.length; r++) delete e[h[r]];
					for (1 != e.disableDefaultUI && (O = t(O, P)), C = t(O, e), r = 0; r < c.length; r++) delete C[c[r]];
					for (r = 0; r < g.length; r++) delete C[g[r]];
					this.map = new google.maps.Map(this.el, C), d && (this.markerClusterer = d.apply(this, [this.map]));
					var T = function(e, t) {
						var o = "",
							n = window.context_menu[p.el.id][e];
						for (var r in n)
							if (n.hasOwnProperty(r)) {
								var i = n[r];
								o += '<li><a id="' + e + "_" + r + '" href="#">' + i.title + "</a></li>"
							} if (a("gmaps_context_menu")) {
							var s = a("gmaps_context_menu");
							s.innerHTML = o;
							var r, c = s.getElementsByTagName("a"),
								g = c.length;
							for (r = 0; g > r; r++) {
								var h = c[r],
									u = function(o) {
										o.preventDefault(), n[this.id.replace(e + "_", "")].action.apply(p, [t]), p.hideContextMenu()
									};
								google.maps.event.clearListeners(h, "click"), google.maps.event.addDomListenerOnce(h, "click", u, !1)
							}
							var d = l.apply(this, [p.el]),
								m = d[0] + t.pixel.x - 15,
								f = d[1] + t.pixel.y - 15;
							s.style.left = m + "px", s.style.top = f + "px"
						}
					};
					this.buildContextMenu = function(e, t) {
						if ("marker" === e) {
							t.pixel = {};
							var o = new google.maps.OverlayView;
							o.setMap(p.map), o.draw = function() {
								var n = o.getProjection(),
									r = t.marker.getPosition();
								t.pixel = n.fromLatLngToContainerPixel(r), T(e, t)
							}
						} else T(e, t);
						var n = a("gmaps_context_menu");
						setTimeout(function() {
							n.style.display = "block"
						}, 0)
					}, this.setContextMenu = function(e) {
						window.context_menu[p.el.id][e.control] = {};
						var t, n = o.createElement("ul");
						for (t in e.options)
							if (e.options.hasOwnProperty(t)) {
								var r = e.options[t];
								window.context_menu[p.el.id][e.control][r.name] = {
									title: r.title,
									action: r.action
								}
							} n.id = "gmaps_context_menu", n.style.display = "none", n.style.position = "absolute", n.style.minWidth = "100px", n.style.background = "white", n.style.listStyle = "none", n.style.padding = "8px", n.style.boxShadow = "2px 2px 6px #ccc", a("gmaps_context_menu") || o.body.appendChild(n);
						var i = a("gmaps_context_menu");
						google.maps.event.addDomListener(i, "mouseout", function(e) {
							e.relatedTarget && this.contains(e.relatedTarget) || window.setTimeout(function() {
								i.style.display = "none"
							}, 400)
						}, !1)
					}, this.hideContextMenu = function() {
						var e = a("gmaps_context_menu");
						e && (e.style.display = "none")
					};
					var z = function(t, o) {
						google.maps.event.addListener(t, o, function(t) {
							void 0 == t && (t = this), e[o].apply(this, [t]), p.hideContextMenu()
						})
					};
					google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
					for (var S = 0; S < c.length; S++) {
						var W = c[S];
						W in e && z(this.map, W)
					}
					for (var S = 0; S < g.length; S++) {
						var W = g[S];
						W in e && z(this.map, W)
					}
					google.maps.event.addListener(this.map, "rightclick", function(t) {
						e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[p.el.id].map && p.buildContextMenu("map", t)
					}), this.refresh = function() {
						google.maps.event.trigger(this.map, "resize")
					}, this.fitZoom = function() {
						var e, t = [],
							o = this.markers.length;
						for (e = 0; o > e; e++) "boolean" == typeof this.markers[e].visible && this.markers[e].visible && t.push(this.markers[e].getPosition());
						this.fitLatLngBounds(t)
					}, this.fitLatLngBounds = function(e) {
						var t, o = e.length,
							n = new google.maps.LatLngBounds;
						for (t = 0; o > t; t++) n.extend(e[t]);
						this.map.fitBounds(n)
					}, this.setCenter = function(e, t, o) {
						this.map.panTo(new google.maps.LatLng(e, t)), o && o()
					}, this.getElement = function() {
						return this.el
					}, this.zoomIn = function(e) {
						e = e || 1, this.zoom = this.map.getZoom() + e, this.map.setZoom(this.zoom)
					}, this.zoomOut = function(e) {
						e = e || 1, this.zoom = this.map.getZoom() - e, this.map.setZoom(this.zoom)
					};
					var R, I = [];
					for (R in this.map) "function" != typeof this.map[R] || this[R] || I.push(R);
					for (r = 0; r < I.length; r++) ! function(e, t, o) {
						e[o] = function() {
							return t[o].apply(t, arguments)
						}
					}(this, this.map, I[r])
				};
			return n
		}(this);
	p.prototype.createControl = function(e) {
		var t = document.createElement("div");
		t.style.cursor = "pointer", e.disableDefaultStyles !== !0 && (t.style.fontFamily = "Roboto, Arial, sans-serif", t.style.fontSize = "11px", t.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
		for (var o in e.style) t.style[o] = e.style[o];
		e.id && (t.id = e.id), e.title && (t.title = e.title), e.classes && (t.className = e.classes), e.content && ("string" == typeof e.content ? t.innerHTML = e.content : e.content instanceof HTMLElement && t.appendChild(e.content)), e.position && (t.position = google.maps.ControlPosition[e.position.toUpperCase()]);
		for (var n in e.events) ! function(t, o) {
			google.maps.event.addDomListener(t, o, function() {
				e.events[o].apply(this, [this])
			})
		}(t, n);
		return t.index = 1, t
	}, p.prototype.addControl = function(e) {
		var t = this.createControl(e);
		return this.controls.push(t), this.map.controls[t.position].push(t), t
	}, p.prototype.removeControl = function(e) {
		var t, o = null;
		for (t = 0; t < this.controls.length; t++) this.controls[t] == e && (o = this.controls[t].position, this.controls.splice(t, 1));
		if (o)
			for (t = 0; t < this.map.controls.length; t++) {
				var n = this.map.controls[e.position];
				if (n.getAt(t) == e) {
					n.removeAt(t);
					break
				}
			}
		return e
	}, p.prototype.createMarker = function(e) {
		if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position) throw "No latitude or longitude defined.";
		var o = this,
			n = e.details,
			r = e.fences,
			i = e.outside,
			s = {
				position: new google.maps.LatLng(e.lat, e.lng),
				map: null
			},
			a = t(s, e);
		delete a.lat, delete a.lng, delete a.fences, delete a.outside;
		var l = new google.maps.Marker(a);
		if (l.fences = r, e.infoWindow) {
			l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
			for (var p = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < p.length; c++) ! function(t, o) {
				e.infoWindow[o] && google.maps.event.addListener(t, o, function(t) {
					e.infoWindow[o].apply(this, [t])
				})
			}(l.infoWindow, p[c])
		}
		for (var g = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], h = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], c = 0; c < g.length; c++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function() {
				e[o].apply(this, [this])
			})
		}(l, g[c]);
		for (var c = 0; c < h.length; c++) ! function(t, o, n) {
			e[n] && google.maps.event.addListener(o, n, function(o) {
				o.pixel || (o.pixel = t.getProjection().fromLatLngToPoint(o.latLng)), e[n].apply(this, [o])
			})
		}(this.map, l, h[c]);
		return google.maps.event.addListener(l, "click", function() {
			this.details = n, e.click && e.click.apply(this, [this]), l.infoWindow && (o.hideInfoWindows(), l.infoWindow.open(o.map, l))
		}), google.maps.event.addListener(l, "rightclick", function(t) {
			t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[o.el.id].marker && o.buildContextMenu("marker", t)
		}), l.fences && google.maps.event.addListener(l, "dragend", function() {
			o.checkMarkerGeofence(l, function(e, t) {
				i(e, t)
			})
		}), l
	}, p.prototype.addMarker = function(e) {
		var t;
		if (e.hasOwnProperty("gm_accessors_")) t = e;
		else {
			if (!(e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || e.position)) throw "No latitude or longitude defined.";
			t = this.createMarker(e)
		}
		return t.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(t), this.markers.push(t), p.fire("marker_added", t, this), t
	}, p.prototype.addMarkers = function(e) {
		for (var t, o = 0; t = e[o]; o++) this.addMarker(t);
		return this.markers
	}, p.prototype.hideInfoWindows = function() {
		for (var e, t = 0; e = this.markers[t]; t++) e.infoWindow && e.infoWindow.close()
	}, p.prototype.removeMarker = function(e) {
		for (var t = 0; t < this.markers.length; t++)
			if (this.markers[t] === e) {
				this.markers[t].setMap(null), this.markers.splice(t, 1), this.markerClusterer && this.markerClusterer.removeMarker(e), p.fire("marker_removed", e, this);
				break
			} return e
	}, p.prototype.removeMarkers = function(e) {
		var t = [];
		if ("undefined" == typeof e) {
			for (var o = 0; o < this.markers.length; o++) {
				var n = this.markers[o];
				n.setMap(null), p.fire("marker_removed", n, this)
			}
			this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = t
		} else {
			for (var o = 0; o < e.length; o++) {
				var r = this.markers.indexOf(e[o]);
				if (r > -1) {
					var n = this.markers[r];
					n.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(n), p.fire("marker_removed", n, this)
				}
			}
			for (var o = 0; o < this.markers.length; o++) {
				var n = this.markers[o];
				null != n.getMap() && t.push(n)
			}
			this.markers = t
		}
	}, p.prototype.drawOverlay = function(e) {
		var t = new google.maps.OverlayView,
			o = !0;
		return t.setMap(this.map), null != e.auto_show && (o = e.auto_show), t.onAdd = function() {
			var o = document.createElement("div");
			o.style.borderStyle = "none", o.style.borderWidth = "0px", o.style.position = "absolute", o.style.zIndex = 100, o.innerHTML = e.content, t.el = o, e.layer || (e.layer = "overlayLayer");
			var n = this.getPanes(),
				r = n[e.layer],
				i = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
			r.appendChild(o);
			for (var s = 0; s < i.length; s++) ! function(e, t) {
				google.maps.event.addDomListener(e, t, function(e) {
					-1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (e.cancelBubble = !0, e.returnValue = !1) : e.stopPropagation()
				})
			}(o, i[s]);
			e.click && (n.overlayMouseTarget.appendChild(t.el), google.maps.event.addDomListener(t.el, "click", function() {
				e.click.apply(t, [t])
			})), google.maps.event.trigger(this, "ready")
		}, t.draw = function() {
			var n = this.getProjection(),
				r = n.fromLatLngToDivPixel(new google.maps.LatLng(e.lat, e.lng));
			e.horizontalOffset = e.horizontalOffset || 0, e.verticalOffset = e.verticalOffset || 0;
			var i = t.el,
				s = i.children[0],
				a = s.clientHeight,
				l = s.clientWidth;
			switch (e.verticalAlign) {
				case "top":
					i.style.top = r.y - a + e.verticalOffset + "px";
					break;
				default:
				case "middle":
					i.style.top = r.y - a / 2 + e.verticalOffset + "px";
					break;
				case "bottom":
					i.style.top = r.y + e.verticalOffset + "px"
			}
			switch (e.horizontalAlign) {
				case "left":
					i.style.left = r.x - l + e.horizontalOffset + "px";
					break;
				default:
				case "center":
					i.style.left = r.x - l / 2 + e.horizontalOffset + "px";
					break;
				case "right":
					i.style.left = r.x + e.horizontalOffset + "px"
			}
			i.style.display = o ? "block" : "none", o || e.show.apply(this, [i])
		}, t.onRemove = function() {
			var o = t.el;
			e.remove ? e.remove.apply(this, [o]) : (t.el.parentNode.removeChild(t.el), t.el = null)
		}, this.overlays.push(t), t
	}, p.prototype.removeOverlay = function(e) {
		for (var t = 0; t < this.overlays.length; t++)
			if (this.overlays[t] === e) {
				this.overlays[t].setMap(null), this.overlays.splice(t, 1);
				break
			}
	}, p.prototype.removeOverlays = function() {
		for (var e, t = 0; e = this.overlays[t]; t++) e.setMap(null);
		this.overlays = []
	}, p.prototype.drawPolyline = function(e) {
		var t = [],
			o = e.path;
		if (o.length)
			if (void 0 === o[0][0]) t = o;
			else
				for (var n, r = 0; n = o[r]; r++) t.push(new google.maps.LatLng(n[0], n[1]));
		var i = {
			map: this.map,
			path: t,
			strokeColor: e.strokeColor,
			strokeOpacity: e.strokeOpacity,
			strokeWeight: e.strokeWeight,
			geodesic: e.geodesic,
			clickable: !0,
			editable: !1,
			visible: !0
		};
		e.hasOwnProperty("clickable") && (i.clickable = e.clickable), e.hasOwnProperty("editable") && (i.editable = e.editable), e.hasOwnProperty("icons") && (i.icons = e.icons), e.hasOwnProperty("zIndex") && (i.zIndex = e.zIndex);
		for (var s = new google.maps.Polyline(i), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(s, a[l]);
		return this.polylines.push(s), p.fire("polyline_added", s, this), s
	}, p.prototype.removePolyline = function(e) {
		for (var t = 0; t < this.polylines.length; t++)
			if (this.polylines[t] === e) {
				this.polylines[t].setMap(null), this.polylines.splice(t, 1), p.fire("polyline_removed", e, this);
				break
			}
	}, p.prototype.removePolylines = function() {
		for (var e, t = 0; e = this.polylines[t]; t++) e.setMap(null);
		this.polylines = []
	}, p.prototype.drawCircle = function(e) {
		e = t({
			map: this.map,
			center: new google.maps.LatLng(e.lat, e.lng)
		}, e), delete e.lat, delete e.lng;
		for (var o = new google.maps.Circle(e), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < n.length; r++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(o, n[r]);
		return this.polygons.push(o), o
	}, p.prototype.drawRectangle = function(e) {
		e = t({
			map: this.map
		}, e);
		var o = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
		e.bounds = o;
		for (var n = new google.maps.Rectangle(e), r = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < r.length; i++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(n, r[i]);
		return this.polygons.push(n), n
	}, p.prototype.drawPolygon = function(e) {
		var r = !1;
		e.hasOwnProperty("useGeoJSON") && (r = e.useGeoJSON), delete e.useGeoJSON, e = t({
			map: this.map
		}, e), 0 == r && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = n(o(e.paths, i, r)));
		for (var s = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function(t) {
				e[o].apply(this, [t])
			})
		}(s, a[l]);
		return this.polygons.push(s), p.fire("polygon_added", s, this), s
	}, p.prototype.removePolygon = function(e) {
		for (var t = 0; t < this.polygons.length; t++)
			if (this.polygons[t] === e) {
				this.polygons[t].setMap(null), this.polygons.splice(t, 1), p.fire("polygon_removed", e, this);
				break
			}
	}, p.prototype.removePolygons = function() {
		for (var e, t = 0; e = this.polygons[t]; t++) e.setMap(null);
		this.polygons = []
	}, p.prototype.getFromFusionTables = function(e) {
		var t = e.events;
		delete e.events;
		var o = e,
			n = new google.maps.FusionTablesLayer(o);
		for (var r in t) ! function(e, o) {
			google.maps.event.addListener(e, o, function(e) {
				t[o].apply(this, [e])
			})
		}(n, r);
		return this.layers.push(n), n
	}, p.prototype.loadFromFusionTables = function(e) {
		var t = this.getFromFusionTables(e);
		return t.setMap(this.map), t
	}, p.prototype.getFromKML = function(e) {
		var t = e.url,
			o = e.events;
		delete e.url, delete e.events;
		var n = e,
			r = new google.maps.KmlLayer(t, n);
		for (var i in o) ! function(e, t) {
			google.maps.event.addListener(e, t, function(e) {
				o[t].apply(this, [e])
			})
		}(r, i);
		return this.layers.push(r), r
	}, p.prototype.loadFromKML = function(e) {
		var t = this.getFromKML(e);
		return t.setMap(this.map), t
	}, p.prototype.addLayer = function(e, t) {
		t = t || {};
		var o;
		switch (e) {
			case "weather":
				this.singleLayers.weather = o = new google.maps.weather.WeatherLayer;
				break;
			case "clouds":
				this.singleLayers.clouds = o = new google.maps.weather.CloudLayer;
				break;
			case "traffic":
				this.singleLayers.traffic = o = new google.maps.TrafficLayer;
				break;
			case "transit":
				this.singleLayers.transit = o = new google.maps.TransitLayer;
				break;
			case "bicycling":
				this.singleLayers.bicycling = o = new google.maps.BicyclingLayer;
				break;
			case "panoramio":
				this.singleLayers.panoramio = o = new google.maps.panoramio.PanoramioLayer, o.setTag(t.filter), delete t.filter, t.click && google.maps.event.addListener(o, "click", function(e) {
					t.click(e), delete t.click
				});
				break;
			case "places":
				if (this.singleLayers.places = o = new google.maps.places.PlacesService(this.map), t.search || t.nearbySearch || t.radarSearch) {
					var n = {
						bounds: t.bounds || null,
						keyword: t.keyword || null,
						location: t.location || null,
						name: t.name || null,
						radius: t.radius || null,
						rankBy: t.rankBy || null,
						types: t.types || null
					};
					t.radarSearch && o.radarSearch(n, t.radarSearch), t.search && o.search(n, t.search), t.nearbySearch && o.nearbySearch(n, t.nearbySearch)
				}
				if (t.textSearch) {
					var r = {
						bounds: t.bounds || null,
						location: t.location || null,
						query: t.query || null,
						radius: t.radius || null
					};
					o.textSearch(r, t.textSearch)
				}
		}
		return void 0 !== o ? ("function" == typeof o.setOptions && o.setOptions(t), "function" == typeof o.setMap && o.setMap(this.map), o) : void 0
	}, p.prototype.removeLayer = function(e) {
		if ("string" == typeof e && void 0 !== this.singleLayers[e]) this.singleLayers[e].setMap(null), delete this.singleLayers[e];
		else
			for (var t = 0; t < this.layers.length; t++)
				if (this.layers[t] === e) {
					this.layers[t].setMap(null), this.layers.splice(t, 1);
					break
				}
	};
	var c, g;
	return p.prototype.getRoutes = function(e) {
		switch (e.travelMode) {
			case "bicycling":
				c = google.maps.TravelMode.BICYCLING;
				break;
			case "transit":
				c = google.maps.TravelMode.TRANSIT;
				break;
			case "driving":
				c = google.maps.TravelMode.DRIVING;
				break;
			default:
				c = google.maps.TravelMode.WALKING
		}
		g = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
		var o = {
				avoidHighways: !1,
				avoidTolls: !1,
				optimizeWaypoints: !1,
				waypoints: []
			},
			n = t(o, e);
		n.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), n.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), n.travelMode = c, n.unitSystem = g, delete n.callback, delete n.error;
		var r = [],
			i = new google.maps.DirectionsService;
		i.route(n, function(t, o) {
			if (o === google.maps.DirectionsStatus.OK) {
				for (var n in t.routes) t.routes.hasOwnProperty(n) && r.push(t.routes[n]);
				e.callback && e.callback(r, t, o)
			} else e.error && e.error(t, o)
		})
	}, p.prototype.removeRoutes = function() {
		this.routes.length = 0
	}, p.prototype.getElevations = function(e) {
		e = t({
			locations: [],
			path: !1,
			samples: 256
		}, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = n(o([e.locations], i, !1)));
		var r = e.callback;
		delete e.callback;
		var s = new google.maps.ElevationService;
		if (e.path) {
			var a = {
				path: e.locations,
				samples: e.samples
			};
			s.getElevationAlongPath(a, function(e, t) {
				r && "function" == typeof r && r(e, t)
			})
		} else delete e.path, delete e.samples, s.getElevationForLocations(e, function(e, t) {
			r && "function" == typeof r && r(e, t)
		})
	}, p.prototype.cleanRoute = p.prototype.removePolylines, p.prototype.renderRoute = function(e, o) {
		var n, r = "string" == typeof o.panel ? document.getElementById(o.panel.replace("#", "")) : o.panel;
		o.panel = r, o = t({
			map: this.map
		}, o), n = new google.maps.DirectionsRenderer(o), this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			avoidHighways: e.avoidHighways,
			avoidTolls: e.avoidTolls,
			optimizeWaypoints: e.optimizeWaypoints,
			callback: function(e, t, o) {
				o === google.maps.DirectionsStatus.OK && n.setDirections(t)
			}
		})
	}, p.prototype.drawRoute = function(e) {
		var t = this;
		this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			avoidHighways: e.avoidHighways,
			avoidTolls: e.avoidTolls,
			optimizeWaypoints: e.optimizeWaypoints,
			callback: function(o) {
				if (o.length > 0) {
					var n = {
						path: o[o.length - 1].overview_path,
						strokeColor: e.strokeColor,
						strokeOpacity: e.strokeOpacity,
						strokeWeight: e.strokeWeight
					};
					e.hasOwnProperty("icons") && (n.icons = e.icons), t.drawPolyline(n), e.callback && e.callback(o[o.length - 1])
				}
			}
		})
	}, p.prototype.travelRoute = function(e) {
		if (e.origin && e.destination) this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			unitSystem: e.unitSystem,
			error: e.error,
			callback: function(t) {
				if (t.length > 0 && e.start && e.start(t[t.length - 1]), t.length > 0 && e.step) {
					var o = t[t.length - 1];
					if (o.legs.length > 0)
						for (var n, r = o.legs[0].steps, i = 0; n = r[i]; i++) n.step_number = i, e.step(n, o.legs[0].steps.length - 1)
				}
				t.length > 0 && e.end && e.end(t[t.length - 1])
			}
		});
		else if (e.route && e.route.legs.length > 0)
			for (var t, o = e.route.legs[0].steps, n = 0; t = o[n]; n++) t.step_number = n, e.step(t)
	}, p.prototype.drawSteppedRoute = function(e) {
		var t = this;
		if (e.origin && e.destination) this.getRoutes({
			origin: e.origin,
			destination: e.destination,
			travelMode: e.travelMode,
			waypoints: e.waypoints,
			error: e.error,
			callback: function(o) {
				if (o.length > 0 && e.start && e.start(o[o.length - 1]), o.length > 0 && e.step) {
					var n = o[o.length - 1];
					if (n.legs.length > 0)
						for (var r, i = n.legs[0].steps, s = 0; r = i[s]; s++) {
							r.step_number = s;
							var a = {
								path: r.path,
								strokeColor: e.strokeColor,
								strokeOpacity: e.strokeOpacity,
								strokeWeight: e.strokeWeight
							};
							e.hasOwnProperty("icons") && (a.icons = e.icons), t.drawPolyline(a), e.step(r, n.legs[0].steps.length - 1)
						}
				}
				o.length > 0 && e.end && e.end(o[o.length - 1])
			}
		});
		else if (e.route && e.route.legs.length > 0)
			for (var o, n = e.route.legs[0].steps, r = 0; o = n[r]; r++) {
				o.step_number = r;
				var i = {
					path: o.path,
					strokeColor: e.strokeColor,
					strokeOpacity: e.strokeOpacity,
					strokeWeight: e.strokeWeight
				};
				e.hasOwnProperty("icons") && (i.icons = e.icons), t.drawPolyline(i), e.step(o)
			}
	}, p.Route = function(e) {
		this.origin = e.origin, this.destination = e.destination, this.waypoints = e.waypoints, this.map = e.map, this.route = e.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
		var t = {
			path: new google.maps.MVCArray,
			strokeColor: e.strokeColor,
			strokeOpacity: e.strokeOpacity,
			strokeWeight: e.strokeWeight
		};
		e.hasOwnProperty("icons") && (t.icons = e.icons), this.polyline = this.map.drawPolyline(t).getPath()
	}, p.Route.prototype.getRoute = function(t) {
		var o = this;
		this.map.getRoutes({
			origin: this.origin,
			destination: this.destination,
			travelMode: t.travelMode,
			waypoints: this.waypoints || [],
			error: t.error,
			callback: function() {
				o.route = e[0], t.callback && t.callback.call(o)
			}
		})
	}, p.Route.prototype.back = function() {
		if (this.step_count > 0) {
			this.step_count--;
			var e = this.route.legs[0].steps[this.step_count].path;
			for (var t in e) e.hasOwnProperty(t) && this.polyline.pop()
		}
	}, p.Route.prototype.forward = function() {
		if (this.step_count < this.steps_length) {
			var e = this.route.legs[0].steps[this.step_count].path;
			for (var t in e) e.hasOwnProperty(t) && this.polyline.push(e[t]);
			this.step_count++
		}
	}, p.prototype.checkGeofence = function(e, t, o) {
		return o.containsLatLng(new google.maps.LatLng(e, t))
	}, p.prototype.checkMarkerGeofence = function(e, t) {
		if (e.fences)
			for (var o, n = 0; o = e.fences[n]; n++) {
				var r = e.getPosition();
				this.checkGeofence(r.lat(), r.lng(), o) || t(e, o)
			}
	}, p.prototype.toImage = function(e) {
		var e = e || {},
			t = {};
		if (t.size = e.size || [this.el.clientWidth, this.el.clientHeight], t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng(), this.markers.length > 0) {
			t.markers = [];
			for (var o = 0; o < this.markers.length; o++) t.markers.push({
				lat: this.markers[o].getPosition().lat(),
				lng: this.markers[o].getPosition().lng()
			})
		}
		if (this.polylines.length > 0) {
			var n = this.polylines[0];
			t.polyline = {}, t.polyline.path = google.maps.geometry.encoding.encodePath(n.getPath()), t.polyline.strokeColor = n.strokeColor, t.polyline.strokeOpacity = n.strokeOpacity, t.polyline.strokeWeight = n.strokeWeight
		}
		return p.staticMapURL(t)
	}, p.staticMapURL = function(e) {
		function t(e, t) {
			if ("#" === e[0] && (e = e.replace("#", "0x"), t)) {
				if (t = parseFloat(t), t = Math.min(1, Math.max(t, 0)), 0 === t) return "0x00000000";
				t = (255 * t).toString(16), 1 === t.length && (t += t), e = e.slice(0, 8) + t
			}
			return e
		}
		var o, n = [],
			r = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
		e.url && (r = e.url, delete e.url), r += "?";
		var i = e.markers;
		delete e.markers, !i && e.marker && (i = [e.marker], delete e.marker);
		var s = e.styles;
		delete e.styles;
		var a = e.polyline;
		if (delete e.polyline, e.center) n.push("center=" + e.center), delete e.center;
		else if (e.address) n.push("center=" + e.address), delete e.address;
		else if (e.lat) n.push(["center=", e.lat, ",", e.lng].join("")), delete e.lat, delete e.lng;
		else if (e.visible) {
			var l = encodeURI(e.visible.join("|"));
			n.push("visible=" + l)
		}
		var p = e.size;
		p ? (p.join && (p = p.join("x")), delete e.size) : p = "630x300", n.push("size=" + p), e.zoom || e.zoom === !1 || (e.zoom = 15);
		var c = e.hasOwnProperty("sensor") ? !!e.sensor : !0;
		delete e.sensor, n.push("sensor=" + c);
		for (var g in e) e.hasOwnProperty(g) && n.push(g + "=" + e[g]);
		if (i)
			for (var h, u, d = 0; o = i[d]; d++) {
				h = [], o.size && "normal" !== o.size ? (h.push("size:" + o.size), delete o.size) : o.icon && (h.push("icon:" + encodeURI(o.icon)), delete o.icon), o.color && (h.push("color:" + o.color.replace("#", "0x")), delete o.color), o.label && (h.push("label:" + o.label[0].toUpperCase()), delete o.label), u = o.address ? o.address : o.lat + "," + o.lng, delete o.address, delete o.lat, delete o.lng;
				for (var g in o) o.hasOwnProperty(g) && h.push(g + ":" + o[g]);
				h.length || 0 === d ? (h.push(u), h = h.join("|"), n.push("markers=" + encodeURI(h))) : (h = n.pop() + encodeURI("|" + u), n.push(h))
			}
		if (s)
			for (var d = 0; d < s.length; d++) {
				var m = [];
				s[d].featureType && m.push("feature:" + s[d].featureType.toLowerCase()), s[d].elementType && m.push("element:" + s[d].elementType.toLowerCase());
				for (var f = 0; f < s[d].stylers.length; f++)
					for (var y in s[d].stylers[f]) {
						var v = s[d].stylers[f][y];
						("hue" == y || "color" == y) && (v = "0x" + v.substring(1)), m.push(y + ":" + v)
					}
				var w = m.join("|");
				"" != w && n.push("style=" + w)
			}
		if (a) {
			if (o = a, a = [], o.strokeWeight && a.push("weight:" + parseInt(o.strokeWeight, 10)), o.strokeColor) {
				var k = t(o.strokeColor, o.strokeOpacity);
				a.push("color:" + k)
			}
			if (o.fillColor) {
				var L = t(o.fillColor, o.fillOpacity);
				a.push("fillcolor:" + L)
			}
			var b = o.path;
			if (b.join)
				for (var _, f = 0; _ = b[f]; f++) a.push(_.join(","));
			else a.push("enc:" + b);
			a = a.join("|"), n.push("path=" + encodeURI(a))
		}
		var M = window.devicePixelRatio || 1;
		return n.push("scale=" + M), n = n.join("&"), r + n
	}, p.prototype.addMapType = function(e, t) {
		if (!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl) throw "'getTileUrl' function required.";
		t.tileSize = t.tileSize || new google.maps.Size(256, 256);
		var o = new google.maps.ImageMapType(t);
		this.map.mapTypes.set(e, o)
	}, p.prototype.addOverlayMapType = function(e) {
		if (!e.hasOwnProperty("getTile") || "function" != typeof e.getTile) throw "'getTile' function required.";
		var t = e.index;
		delete e.index, this.map.overlayMapTypes.insertAt(t, e)
	}, p.prototype.removeOverlayMapType = function(e) {
		this.map.overlayMapTypes.removeAt(e)
	}, p.prototype.addStyle = function(e) {
		var t = new google.maps.StyledMapType(e.styles, {
			name: e.styledMapName
		});
		this.map.mapTypes.set(e.mapTypeId, t)
	}, p.prototype.setStyle = function(e) {
		this.map.setMapTypeId(e)
	}, p.prototype.createPanorama = function(e) {
		return e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || (e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng()), this.panorama = p.createPanorama(e), this.map.setStreetView(this.panorama), this.panorama
	}, p.createPanorama = function(e) {
		var o = a(e.el, e.context);
		e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
		for (var n = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], r = t({
				visible: !0
			}, e), i = 0; i < n.length; i++) delete r[n[i]];
		for (var s = new google.maps.StreetViewPanorama(o, r), i = 0; i < n.length; i++) ! function(t, o) {
			e[o] && google.maps.event.addListener(t, o, function() {
				e[o].apply(this)
			})
		}(s, n[i]);
		return s
	}, p.prototype.on = function(e, t) {
		return p.on(e, this, t)
	}, p.prototype.off = function(e) {
		p.off(e, this)
	}, p.prototype.once = function(e, t) {
		return p.once(e, this, t)
	}, p.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], p.on = function(e, t, o) {
		if (-1 == p.custom_events.indexOf(e)) return t instanceof p && (t = t.map), google.maps.event.addListener(t, e, o);
		var n = {
			handler: o,
			eventName: e
		};
		return t.registered_events[e] = t.registered_events[e] || [], t.registered_events[e].push(n), n
	}, p.off = function(e, t) {
		-1 == p.custom_events.indexOf(e) ? (t instanceof p && (t = t.map), google.maps.event.clearListeners(t, e)) : t.registered_events[e] = []
	}, p.once = function(e, t, o) {
		return -1 == p.custom_events.indexOf(e) ? (t instanceof p && (t = t.map), google.maps.event.addListenerOnce(t, e, o)) : void 0
	}, p.fire = function(e, t, o) {
		if (-1 == p.custom_events.indexOf(e)) google.maps.event.trigger(t, e, Array.prototype.slice.apply(arguments).slice(2));
		else if (e in o.registered_events)
			for (var n = o.registered_events[e], r = 0; r < n.length; r++) ! function(e, t, o) {
				e.apply(t, [o])
			}(n[r].handler, o, t)
	}, p.geolocate = function(e) {
		var t = e.always || e.complete;
		navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) {
			e.success(o), t && t()
		}, function(o) {
			e.error(o), t && t()
		}, e.options) : (e.not_supported(), t && t())
	}, p.geocode = function(e) {
		this.geocoder = new google.maps.Geocoder;
		var t = e.callback;
		e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && (e.latLng = new google.maps.LatLng(e.lat, e.lng)), delete e.lat, delete e.lng, delete e.callback, this.geocoder.geocode(e, function(e, o) {
			t(e, o)
		})
	}, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(e) {
		for (var t, o = new google.maps.LatLngBounds, n = this.getPaths(), r = 0; r < n.getLength(); r++) {
			t = n.getAt(r);
			for (var i = 0; i < t.getLength(); i++) o.extend(t.getAt(i))
		}
		return o
	}), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(e) {
		var t = this.getBounds();
		if (null !== t && !t.contains(e)) return !1;
		for (var o = !1, n = this.getPaths().getLength(), r = 0; n > r; r++)
			for (var i = this.getPaths().getAt(r), s = i.getLength(), a = s - 1, l = 0; s > l; l++) {
				var p = i.getAt(l),
					c = i.getAt(a);
				(p.lng() < e.lng() && c.lng() >= e.lng() || c.lng() < e.lng() && p.lng() >= e.lng()) && p.lat() + (e.lng() - p.lng()) / (c.lng() - p.lng()) * (c.lat() - p.lat()) < e.lat() && (o = !o), a = l
			}
		return o
	}), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(e) {
		return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), e) <= this.getRadius() : !0
	}), google.maps.Rectangle.prototype.containsLatLng = function(e) {
		return this.getBounds().contains(e)
	}, google.maps.LatLngBounds.prototype.containsLatLng = function(e) {
		return this.contains(e)
	}, google.maps.Marker.prototype.setFences = function(e) {
		this.fences = e
	}, google.maps.Marker.prototype.addFence = function(e) {
		this.fences.push(e)
	}, google.maps.Marker.prototype.getId = function() {
		return this.__gm_id
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
		if (null == this) throw new TypeError;
		var t = Object(this),
			o = t.length >>> 0;
		if (0 === o) return -1;
		var n = 0;
		if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= o) return -1;
		for (var r = n >= 0 ? n : Math.max(o - Math.abs(n), 0); o > r; r++)
			if (r in t && t[r] === e) return r;
		return -1
	}), p
});