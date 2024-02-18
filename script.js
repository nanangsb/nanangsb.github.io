! function(t) {
		"use strict";

		function e(t, e, i, n, r) {
				var o = Array.prototype.forEach,
						f = t instanceof Node ? t : document.querySelector(t);
				if (!f) return !1;
				var s = f.querySelectorAll(e);
				if (0 === s.length) return !1;
				i = "number" == typeof i && isFinite(i) && Math.floor(i) === i ? i : 6, f.style.width = "";
				var u = f.getBoundingClientRect().width,
						d = s[0].getBoundingClientRect().width + i,
						l = Math.max(Math.floor((u - i) / d), 1),
						a = 0;
				u = d * l + i + "px", f.style.width = u, f.style.position = "relative";
				for (var c = [], m = [], p = 0; l > p; p++) m.push(p * d + i), c.push(i);
				o.call(s, function(t) {
						var e = c.slice(0).sort(function(t, e) {
								return t - e
						}).shift();
						e = c.indexOf(e);
						var r = m[e],
								f = c[e],
								s = ["webkitTransform", "MozTransform", "msTransform", "OTransform", "transform"];
						return t.style.position = "absolute", n || o.call(s, function(e) {
								t.style[e] = "translate3D(" + r + "px," + f + "px,0)"
						}), c[e] += t.getBoundingClientRect().height + i, a += 1, n ? n(t, r, f, a) : void 0
				});
				var h = c.slice(0).sort(function(t, e) {
						return t - e
				}).pop();
				f.style.height = h + "px", "function" == typeof r && r(s)
		}
		"function" == typeof define && define.amd ? define(function() {
				return e
		}) : "undefined" != typeof module && module.exports ? module.exports = e : t.minigrid = e
}(this),
function() {
		minigrid(".grid", ".grid-item"), window.addEventListener("resize", function() {
				minigrid(".grid", ".grid-item")
		})
}();

var PostToCodepen = function() {
		var e, t, n, r, o, a, u = document.getElementsByClassName("codepen-group"),
				d = function(e) {
						var t = document.createElement("form"),
								n = document.createElement("input"),
								i = document.createElement("button"),
								r = document.createDocumentFragment();
						t.setAttribute("action", "https://codepen.io/pen/define"), t.setAttribute("method", "POST"), t.setAttribute("target", "_blank"), n.setAttribute("type", "hidden"), n.setAttribute("name", "data"), n.setAttribute("value", a), t.appendChild(n), i.setAttribute("class", "codepen"), t.appendChild(i), r.appendChild(t), e.appendChild(r)
				},
				s = function(e) {
						var t = JSON.stringify(e);
						return t = t.replace(/"/g, "&quot;"), t = t.replace(/'/g, "&apos;")
				},
				l = function() {
						for (i = 0, len = u.length; i < len; i++) {
								var l = {
										html: ""
								};
								e = u[i].getElementsByClassName("codepen-able");
								for (var c = 0, f = e.length; f > c; c++) t = e[c], n = t.getAttribute("data-type"), r = t.firstChild, o = r.innerHTML, o.length > 0 && (l[n] = o);
								a = s(l), d(u[i])
						}
				};
		return {
				please: l
		}
}();
PostToCodepen.please();