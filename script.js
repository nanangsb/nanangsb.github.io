var closeFn;
function closeShowingModal() {
  var showingModal = document.querySelector(".modal.show");
  if (!showingModal) return;
  showingModal.classList.remove("show");
  document.body.classList.remove("disable-mouse");
  document.body.classList.remove("disable-scroll");
  if (closeFn) {
    closeFn();
    closeFn = null;
  }
}
document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.dataset.ctaTarget) {
    closeFn = cta(
      target,
      document.querySelector(target.dataset.ctaTarget),
      { relativeToWindow: true },
      function showModal(modal) {
        modal.classList.add("show");
        document.body.classList.add("disable-mouse");
        if (target.dataset.disableScroll) {
          document.body.classList.add("disable-scroll");
        }
      }
    );
  } else if (target.classList.contains("modal-close-btn")) {
    closeShowingModal();
  }
});
document.addEventListener("keyup", function (e) {
  if (e.which === 27) {
    closeShowingModal();
  }
});
!(function () {
  function a(a) {
    for (
      var b,
        c = 0,
        d = "string" == typeof a ? a.split(/\s*,\s*/) : [],
        e = d.length;
      e--;

    )
      (b = d[e]), (c = Math.max(parseFloat(b) || 0, c));
    return c;
  }
  function b(b) {
    var c = 0,
      d = 0,
      g = 0,
      k = 0,
      l = window.getComputedStyle(b) || {},
      m = l[e + h];
    c = Math.max(a(m), c);
    var n = l[e + i];
    d = Math.max(a(n), d);
    l[f + i];
    k = Math.max(a(l[f + i]), k);
    var o = a(l[f + h]);
    return (
      o > 0 && (o *= parseInt(l[f + j], 10) || 1), (g = Math.max(o, g)), g || c
    );
  }
  function c(a) {
    var b = window.getComputedStyle(a);
    return b.background || b.backgroundColor;
  }
  function d(a, e, f, h) {
    if (!g) return void (h && h(e));
    var i,
      j,
      l,
      m,
      n,
      o = 1;
    "function" == typeof f && ((h = f), (f = {})),
      (f = f || {}),
      (f.duration = f.duration || k.duration),
      (f.targetShowDuration =
        f.targetShowDuration || b(e) || k.targetShowDuration),
      (f.relativeToWindow = f.relativeToWindow || k.relativeToWindow),
      "none" === window.getComputedStyle(e).display &&
        e.style.setProperty("display", "block", "important"),
      (i = c(e)),
      (j = c(a)),
      (l = e.getBoundingClientRect()),
      (m = a.getBoundingClientRect()),
      (scaleXRatio = m.width / l.width),
      (scaleYRatio = m.height / l.height),
      (diffX = m.left - l.left),
      (diffY = m.top - l.top),
      e.style.removeProperty("display"),
      (n = document.createElement("div")),
      n.style.setProperty("pointer-events", "none", "important"),
      n.style.setProperty(
        "position",
        f.relativeToWindow ? "fixed" : "absolute",
        "important"
      ),
      n.style.setProperty("-webkit-transform-origin", "top left", "important"),
      n.style.setProperty("transform-origin", "top left", "important"),
      n.style.setProperty("transition", f.duration + "s ease"),
      n.style.setProperty("width", l.width + "px", "important"),
      n.style.setProperty("height", l.height + "px", "important"),
      n.style.setProperty(
        "left",
        l.left + (f.relativeToWindow ? 0 : window.pageXOffset) + "px",
        "important"
      ),
      n.style.setProperty(
        "top",
        l.top + (f.relativeToWindow ? 0 : window.pageYOffset) + "px",
        "important"
      ),
      n.style.setProperty("background", j, "important"),
      n.style.setProperty(
        "-webkit-transform",
        "translate(" +
          diffX +
          "px, " +
          diffY +
          "px) scale(" +
          scaleXRatio +
          ", " +
          scaleYRatio +
          ")",
        "important"
      ),
      n.style.setProperty(
        "transform",
        "translate(" +
          diffX +
          "px, " +
          diffY +
          "px) scale(" +
          scaleXRatio +
          ", " +
          scaleYRatio +
          ")",
        "important"
      ),
      document.body.appendChild(n);
    n.offsetTop;
    return (
      n.style.setProperty("background", i, "important"),
      n.style.removeProperty("-webkit-transform"),
      n.style.removeProperty("transform"),
      n.addEventListener("transitionend", function p() {
        n.removeEventListener("transitionend", p),
          h && h(e),
          (n.style.transitionDuration = f.targetShowDuration + o + "s"),
          (n.style.opacity = 0),
          setTimeout(function () {
            n.parentNode.removeChild(n);
          }, 1e3 * (f.targetShowDuration + o));
      }),
      function (b, c) {
        d(e, a, b, c);
      }
    );
  }
  var e,
    f,
    g = (function () {
      return (
        void 0 !== window.ontransitionend ||
        void 0 !== document.documentElement.style.transition
      );
    })(),
    h = "Duration",
    i = "Delay",
    j = "IterationCount";
  (e =
    void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend
      ? "WebkitTransition"
      : "transition"),
    (f =
      void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend
        ? "WebkitAnimation"
        : "animation");
  var k = {
    duration: 0.3,
    targetShowDuration: 0,
    extraTransitionDuration: 1,
    relativeToWindow: !1
  };
  (d.isSupported = g),
    "object" == typeof exports
      ? (module.exports = d)
      : "function" == typeof define && define.amd
      ? define(function () {
          return d;
        })
      : (window.cta = d);
})();
