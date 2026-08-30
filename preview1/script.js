(function () {
  var root = document.documentElement;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-switch").forEach(function (btn) {
      btn.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
    });
  }

  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}

  function first() {
    if (saved) { return saved; }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  apply(first());

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".theme-switch");
    if (!btn) { return; }
    var next = current() === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();