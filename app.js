/* Anway Product Finder — 纯前端，无依赖 */
(function () {
  "use strict";

  var D = window.ANWAY_CATALOG;
  var view = document.getElementById("view");
  var langBtn = document.getElementById("langBtn");

  if (!D) {
    view.innerHTML = '<div class="empty"><h3>数据文件缺失</h3><p>请先运行 python tools/build_catalog.py 生成 site/data.js</p></div>';
    return;
  }

  var M = D.meta;

  /* ---------------- 文案 ---------------- */

  var STR = {
    zh: {
      brandSub: "产品选型",
      heroTitle: "产品选型",
      eyebrow: "LED 驱动电源 · 欧洲 OEM",
      search: "搜索型号、功率、协议",
      models: "个型号",
      series: "系列",
      viewAll: "查看全部",
      bySeries: "按系列",
      browseAll: "查看全部 {n} 个型号",
      quickPick: "快速选型",
      pickHint: "按条件逐层缩小，结果即时显示",
      picked: "已选",
      pickClear: "清除",
      pickCount: "{n} 个型号符合",
      pickEmpty: "没有完全符合的型号",
      pickEmptyHint: "去掉一个条件再试",
      cart: "样品清单",
      addSample: "加入样品清单",
      added: "已加入",
      viewList: "查看清单",
      addedToast: "已加入样品清单",
      sampleTitle: "样品需求清单",
      sampleCount: "{n} 个型号",
      sampleEmpty: "样品清单还是空的",
      sampleEmptyHint: "先去挑几个型号，再回来提交样品需求",
      goPick: "去选型",
      clearList: "清空",
      clearConfirm: "确定清空整个样品清单吗？",
      qty: "数量",
      remove: "移除",
      customerTitle: "客户信息",
      optional: "选填",
      customerHint: "填了回复更快；不填也能发送，我们会通过邮件联系您。",
      fCompany: "公司",
      fContact: "联系人",
      fEmail: "邮箱",
      fCountry: "国家/地区",
      fPhone: "电话 / 微信",
      fNeedBy: "期望交期",
      fNote: "备注",
      fNotePlaceholder: "应用场景、认证要求、其他说明…",
      send: "提交样品需求",
      sendTitle: "选择发送方式",
      byEmail: "用邮件发送",
      byEmailHint: "打开您的邮箱，需求单已填好",
      byWecom: "加企微发需求",
      byWecomHint: "扫码添加，把需求单发给我们",
      byCopy: "复制需求单",
      byCopyHint: "粘贴到微信、WhatsApp 或任何渠道",
      copiedReq: "需求单已复制",
      wecomScan: "用企业微信扫码添加我们",
      byDimming: "按调光方式",
      all: "全部",
      allSeries: "全部系列",
      allModels: "全部型号",
      filter: "筛选",
      sort: "排序",
      sortDefault: "系列顺序",
      sortPowerAsc: "功率升序",
      sortPowerDesc: "功率降序",
      sortName: "型号 A–Z",
      result: "个结果",
      dimming: "调光方式",
      power: "功率",
      cert: "认证",
      certEnec: "含 ENEC",
      reset: "重置",
      apply: "查看",
      empty: "没有匹配的型号",
      emptyHint: "换个关键词，或清除筛选条件",
      clear: "清除筛选",
      back: "返回",
      specsTitle: "规格参数",
      sceneTitle: "典型应用",
      fSeries: "系列",
      fCategory: "产品类别",
      fInput: "输入电压",
      fPower: "额定功率",
      fOutput: "输出规格",
      fChannels: "通道",
      fProtocol: "调光 / 协议",
      fProtection: "防护 / 安装",
      fCert: "认证",
      certNote: "认证为平台级口径，带 * 的需按型号以证书、CDF、报告为准。",
      copy: "复制参数",
      share: "分享链接",
      quote: "邮件询价",
      copied: "参数已复制",
      linkCopied: "链接已复制",
      related: "同系列型号",
      notFound: "找不到这个型号",
      backToList: "返回型号列表",
      statsModels: "型号",
      statsSeries: "系列",
      statsPower: "功率范围",
      updated: "数据更新",
      source: "官网产品页复核 2026-11-03",
      publicNote: "公开版",
      internalNote: "内部版 · 请勿公开发布",
      mailSubject: "Inquiry: ",
      quoteBody: "你好，\n\n我们对型号 {id}（{series}，{power}，{output}）感兴趣，请提供规格书、批量价格与交期。\n\n谢谢！",
      dimTags: { wireless: "无线", triac: "可控硅", switch: "开关调光", touch: "触摸", none: "非调光" },
      powerBands: { lt10: "≤10W", b10_30: "10–30W", b30_60: "30–60W", gt60: "≥60W" }
    },
    en: {
      brandSub: "Product Finder",
      heroTitle: "Product Finder",
      eyebrow: "LED DRIVER · EUROPEAN OEM",
      search: "Search model, power, protocol",
      models: "models",
      series: "Series",
      viewAll: "View all",
      bySeries: "By series",
      browseAll: "Browse all {n} models",
      quickPick: "Quick pick",
      pickHint: "Narrow down step by step — results update instantly",
      picked: "Selected",
      pickClear: "Clear",
      pickCount: "{n} matching models",
      pickEmpty: "No model matches all filters",
      pickEmptyHint: "Remove one condition and try again",
      cart: "Sample list",
      addSample: "Add to sample list",
      added: "Added",
      viewList: "View list",
      addedToast: "Added to sample list",
      sampleTitle: "Sample request",
      sampleCount: "{n} models",
      sampleEmpty: "Your sample list is empty",
      sampleEmptyHint: "Pick a few models first, then come back to submit",
      goPick: "Browse models",
      clearList: "Clear",
      clearConfirm: "Clear the whole sample list?",
      qty: "Qty",
      remove: "Remove",
      customerTitle: "Your details",
      optional: "optional",
      customerHint: "Faster reply with these. You can also send without them and we will contact you by email.",
      fCompany: "Company",
      fContact: "Contact",
      fEmail: "Email",
      fCountry: "Country",
      fPhone: "Phone / WeChat",
      fNeedBy: "Required by",
      fNote: "Notes",
      fNotePlaceholder: "Application, certification requirements, …",
      send: "Submit sample request",
      sendTitle: "How to send",
      byEmail: "Send by email",
      byEmailHint: "Opens your mail app with the request filled in",
      byWecom: "Send via WeCom",
      byWecomHint: "Scan to add us, then paste the request",
      byCopy: "Copy request",
      byCopyHint: "Paste into WeChat, WhatsApp or anywhere",
      copiedReq: "Request copied",
      wecomScan: "Scan with WeCom to add us",
      byDimming: "By dimming",
      all: "All",
      allSeries: "All series",
      allModels: "All models",
      filter: "Filter",
      sort: "Sort",
      sortDefault: "Series order",
      sortPowerAsc: "Power ↑",
      sortPowerDesc: "Power ↓",
      sortName: "Model A–Z",
      result: "results",
      dimming: "Dimming",
      power: "Power",
      cert: "Certification",
      certEnec: "with ENEC",
      reset: "Reset",
      apply: "Show",
      empty: "No matching models",
      emptyHint: "Try another keyword or clear the filters",
      clear: "Clear filters",
      back: "Back",
      specsTitle: "Specifications",
      sceneTitle: "Typical applications",
      fSeries: "Series",
      fCategory: "Category",
      fInput: "Input",
      fPower: "Rated power",
      fOutput: "Output",
      fChannels: "Channels",
      fProtocol: "Dimming / protocol",
      fProtection: "Protection / mounting",
      fCert: "Certification",
      certNote: "Certification is platform level; items marked * must be confirmed per model by certificate, CDF or test report.",
      copy: "Copy specs",
      share: "Share link",
      quote: "Request quote",
      copied: "Specs copied",
      linkCopied: "Link copied",
      related: "More in this series",
      notFound: "Model not found",
      backToList: "Back to model list",
      statsModels: "models",
      statsSeries: "series",
      statsPower: "power range",
      updated: "Updated",
      source: "anwayelec.com product pages, reviewed 2026-11-03",
      publicNote: "Public edition",
      internalNote: "INTERNAL · do not publish",
      mailSubject: "Inquiry: ",
      quoteBody: "Hello Anway team,\n\nWe are interested in {id} ({series}, {power}, {output}).\nPlease send us the datasheet, unit price for ____ pcs and lead time.\n\nBest regards,",
      dimTags: { wireless: "Wireless", triac: "TRIAC", switch: "Switch-dim", touch: "Touch", none: "Non-dim" },
      powerBands: { lt10: "≤10W", b10_30: "10–30W", b30_60: "30–60W", gt60: "≥60W" }
    }
  };

  var POWER_BANDS = {
    lt10: { lo: 0, hi: 10 },
    b10_30: { lo: 10, hi: 30 },
    b30_60: { lo: 30, hi: 60 },
    gt60: { lo: 60, hi: 9999 }
  };

  var EMAIL = "sales@anwayelec.com";

  var state = {
    lang: pickLang(),
    f: { q: "", s: "", t: "", p: "", c: "", o: "default" },
    lastListHash: "#/models",
    lastFocus: null
  };

  function pickLang() {
    try {
      var saved = localStorage.getItem("anway-lang");
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function t(key) { return STR[state.lang][key]; }
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.zh || "";
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function seriesById(id) {
    for (var i = 0; i < D.series.length; i++) if (D.series[i].id === id) return D.series[i];
    return { name: { zh: id, en: id }, color: "#64748b", desc: { zh: "", en: "" } };
  }
  function certShort(m) {
    var parts = String(m.cert || "").split("/");
    for (var i = 0; i < parts.length; i++) if (parts[i].indexOf("ENEC") === 0) return "ENEC";
    return parts[0] || "—";
  }
  // 系列名里已经含类别的，就不再重复一遍（如 “AS 智能恒流 · 智能恒流”）
  function subLine(m) {
    return L(seriesById(m.series).name);
  }

  /* ---------------- 图标 ---------------- */

  var ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M7 12h10M10 17h4"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5 5L20 6.5"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V3m0 0 4 4m-4-4L8 7"/><path d="M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M21 11.5a8 8 0 0 1-8 8H8l-4 3v-4.6A8 8 0 0 1 13 3.5a8 8 0 0 1 8 8Z"/><path d="M9 11h6"/></svg>'
  };

  /* ---------------- 样品清单状态 ---------------- */

  var SAMPLE_KEY = "anway-sample-v1";

  function loadSample() {
    try {
      var s = JSON.parse(localStorage.getItem(SAMPLE_KEY) || "null");
      if (s && Array.isArray(s.items)) {
        s.customer = s.customer || {};
        return s;
      }
    } catch (e) {}
    return { items: [], customer: {} };
  }

  var sample = loadSample();

  function saveSample() {
    try { localStorage.setItem(SAMPLE_KEY, JSON.stringify(sample)); } catch (e) {}
    renderCart();
  }

  function modelById(id) {
    for (var i = 0; i < D.models.length; i++) if (D.models[i].id === id) return D.models[i];
    return null;
  }

  function sampleQty(id) {
    for (var i = 0; i < sample.items.length; i++) if (sample.items[i].id === id) return sample.items[i].qty;
    return 0;
  }

  function addSample(id, qty) {
    var cur = null;
    for (var i = 0; i < sample.items.length; i++) if (sample.items[i].id === id) cur = sample.items[i];
    if (cur) cur.qty = Math.min(999, cur.qty + (qty || 1));
    else sample.items.push({ id: id, qty: Math.min(999, qty || 1) });
    saveSample();
  }

  function setSampleQty(id, qty) {
    for (var i = 0; i < sample.items.length; i++) {
      if (sample.items[i].id !== id) continue;
      if (qty <= 0) sample.items.splice(i, 1);
      else sample.items[i].qty = Math.min(999, qty);
      break;
    }
    saveSample();
  }

  function renderCart() {
    var btn = document.getElementById("cartBtn");
    var badge = document.getElementById("cartCount");
    if (!btn) return;
    var n = sample.items.length;
    badge.textContent = String(n);
    badge.hidden = n === 0;
    btn.setAttribute("aria-label", t("cart") + (n ? " · " + n : ""));
  }

  /* ---------------- 路由 ---------------- */

  function route() {
    var h = decodeURI(location.hash.replace(/^#/, ""));
    if (!h || h === "/") return { name: "home", qs: new URLSearchParams() };
    var i = h.indexOf("?");
    var path = i < 0 ? h : h.slice(0, i);
    var qs = new URLSearchParams(i < 0 ? "" : h.slice(i + 1));
    if (path.indexOf("/model/") === 0) return { name: "detail", id: path.slice(7), qs: qs };
    if (path === "/models") return { name: "models", qs: qs };
    if (path === "/sample") return { name: "sample", qs: qs };
    return { name: "home", qs: qs };
  }

  function hashFor(f) {
    var p = [];
    if (f.q) p.push("q=" + encodeURIComponent(f.q));
    if (f.s) p.push("s=" + encodeURIComponent(f.s));
    if (f.t) p.push("t=" + encodeURIComponent(f.t));
    if (f.p) p.push("p=" + encodeURIComponent(f.p));
    if (f.c) p.push("c=" + encodeURIComponent(f.c));
    if (f.o && f.o !== "default") p.push("o=" + encodeURIComponent(f.o));
    return "#/models" + (p.length ? "?" + p.join("&") : "");
  }

  function setHash(h) {
    // file:// 下 replaceState 会被安全策略拦掉，本地双击打开时就不写地址栏
    if (location.protocol === "file:") return;
    try { history.replaceState(null, "", h); } catch (e) {}
  }

  function readFilters(qs) {
    state.f = {
      q: qs.get("q") || "",
      s: qs.get("s") || "",
      t: qs.get("t") || "",
      p: qs.get("p") || "",
      c: qs.get("c") || "",
      o: qs.get("o") || "default"
    };
  }

  function render() {
    var r = route();
    applyChrome();
    if (r.name === "home") renderHome(r.qs);
    else if (r.name === "models") renderModels(r.qs);
    else if (r.name === "sample") renderSample();
    else renderDetail(r.id);
    renderCart();
    window.scrollTo(0, 0);
  }

  /* ---------------- 全局外观 ---------------- */

  function applyChrome() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.getElementById("brandSub").textContent = t("brandSub");
    langBtn.textContent = state.lang === "zh" ? "EN" : "中文";
    langBtn.setAttribute("aria-label", state.lang === "zh" ? "Switch to English" : "切换到中文");
    document.title = (state.lang === "zh" ? "Anway 产品选型" : "Anway Product Finder");

    document.getElementById("footCompany").textContent =
      state.lang === "zh" ? M.companyZh + " · " + M.companyEn : M.companyEn;
    document.getElementById("footNote").textContent = state.lang === "zh"
      ? "认证为平台级口径，逐型号以证书与规格书为准。数据来源：" + t("source") + "。"
      : "Certification is platform level; confirm per model in certificates and datasheets. Source: " + t("source") + ".";
    document.getElementById("footMeta").textContent =
      t("updated") + " " + M.updated + " · " + M.count + " " + t("models") + " · " + t("publicNote");

    var banner = document.getElementById("modeBanner");
    if (M.mode === "internal") {
      banner.hidden = false;
      banner.textContent = t("internalNote");
    } else {
      banner.hidden = true;
    }
  }

  /* ---------------- 首页 ---------------- */

  function renderHome(qs) {
    qs = qs || new URLSearchParams();

    var sel = {};
    (D.selector || []).forEach(function (s) { sel[s.id] = qs.get(s.id) || ""; });
    state.pick = sel;

    var heroChips = '<a class="chip" href="#/models">' + esc(t("all")) + "</a>" +
      D.series.map(function (s) {
        return '<a class="chip" href="#/models?s=' + encodeURIComponent(s.id) + '">' + esc(L(s.name)) + "</a>";
      }).join("");

    var pickRows = (D.selector || []).map(function (step) {
      var chips = step.options.map(function (o) {
        return '<button class="chip pick-chip" type="button" data-step="' + esc(step.id) +
          '" data-opt="' + esc(o.id) + '" data-count-key="' + esc(step.id) + ":" + esc(o.id) + '">' +
          "<span>" + esc(L(o.label)) + "</span>" +
          '<b class="cnt">' + o.count + "</b></button>";
      }).join("");
      return '<div class="pick-row"><div class="pick-lab">' + esc(L(step.label)) + "</div>" +
        '<div class="chips">' + chips + "</div></div>";
    }).join("");

    var pr = M.powerRange ? M.powerRange[0] + "–" + M.powerRange[1] + "W" : "—";

    view.innerHTML =
      '<section class="hero">' +
        '<span class="eyebrow">' + esc(t("eyebrow")) + "</span>" +
        '<div class="hero-row">' +
          "<h1>" + esc(t("heroTitle")) + "</h1>" +
          '<div class="chips hero-chips">' + heroChips + "</div>" +
        "</div>" +
        "<p>" + esc(L(M.subtitle)) + "</p>" +
      "</section>" +
      '<div class="stats">' +
        '<div class="stat"><b>' + M.count + "</b><span>" + t("statsModels") + "</span></div>" +
        '<div class="stat"><b>' + D.series.length + "</b><span>" + t("statsSeries") + "</span></div>" +
        '<div class="stat"><b>' + esc(pr) + "</b><span>" + t("statsPower") + "</span></div>" +
      "</div>" +
      '<div class="picker" id="picker">' +
        '<div class="pick-head"><h2>' + esc(t("quickPick")) + "</h2>" +
          '<button class="link-btn" id="pickClear" type="button">' + esc(t("pickClear")) + "</button></div>" +
        pickRows +
      "</div>" +
      '<div id="pickResults"></div>' +
      '<a class="btn block" href="#/models">' + t("browseAll").replace("{n}", M.count) + "</a>";

    bindPick();
    updatePick();
  }

  function bindPick() {
    var picker = document.getElementById("picker");
    picker.addEventListener("click", function (e) {
      var chip = e.target.closest(".pick-chip");
      if (!chip) return;
      var step = chip.getAttribute("data-step");
      var opt = chip.getAttribute("data-opt");
      state.pick[step] = state.pick[step] === opt ? "" : opt;
      syncPickHash();
      updatePick();
    });

    document.getElementById("pickClear").addEventListener("click", function () {
      Object.keys(state.pick).forEach(function (k) { state.pick[k] = ""; });
      syncPickHash();
      updatePick();
    });

    document.getElementById("pickResults").addEventListener("click", function (e) {
      var clear = e.target.closest("[data-clear]");
      if (clear) {
        state.pick[clear.getAttribute("data-clear")] = "";
        syncPickHash();
        updatePick();
        return;
      }
      var addBtn = e.target.closest(".add-btn");
      if (!addBtn) return;
      e.preventDefault();
      addSample(addBtn.getAttribute("data-add"), 1);
      addBtn.classList.add("in");
      addBtn.textContent = "✓";
      toast(t("addedToast"));
    });
  }

  function pickSelection() {
    var out = [];
    (D.selector || []).forEach(function (s) {
      var v = state.pick[s.id];
      if (!v) return;
      s.options.forEach(function (o) { if (o.id === v) out.push(o.ids); });
    });
    return out;
  }

  function intersect(sets) {
    if (!sets.length) return null;
    var base = sets[0];
    var rest = sets.slice(1).map(function (a) { return new Set(a); });
    return base.filter(function (id) { return rest.every(function (s) { return s.has(id); }); });
  }

  function countFor(stepId, optIds) {
    var sets = [];
    (D.selector || []).forEach(function (s) {
      if (s.id === stepId) return;
      var v = state.pick[s.id];
      if (!v) return;
      s.options.forEach(function (o) { if (o.id === v) sets.push(o.ids); });
    });
    sets.push(optIds);
    var ids = intersect(sets);
    return ids ? ids.length : 0;
  }

  function updatePick() {
    var chips = document.querySelectorAll(".pick-chip");
    for (var i = 0; i < chips.length; i++) {
      var step = chips[i].getAttribute("data-step");
      var opt = chips[i].getAttribute("data-opt");
      var pressed = state.pick[step] === opt;
      chips[i].setAttribute("aria-pressed", String(pressed));
      var c = chips[i].querySelector(".cnt");
      var ids = null;
      (D.selector || []).forEach(function (s) {
        if (s.id !== step) return;
        s.options.forEach(function (o) { if (o.id === opt) ids = o.ids; });
      });
      if (c && ids) c.textContent = String(countFor(step, ids));
      chips[i].classList.toggle("zero", !!c && Number(c.textContent) === 0);
    }

    var host = document.getElementById("pickResults");
    if (!host) return;

    var selected = pickSelection();
    if (!selected.length) {
      host.innerHTML = '<p class="pick-hint">' + esc(t("pickHint")) + "</p>";
      return;
    }

    var ids = intersect(selected);
    var set = new Set(ids);
    var list = D.models.filter(function (m) { return set.has(m.id); });

    var activeHTML = '<div class="pick-active"><span class="pa-label">' + esc(t("picked")) + "</span>" +
      (D.selector || []).map(function (s) {
        var v = state.pick[s.id];
        if (!v) return "";
        var label = "";
        s.options.forEach(function (o) { if (o.id === v) label = L(o.label); });
        return '<button class="pa-tag" type="button" data-clear="' + esc(s.id) + '">' + esc(label) + " ×</button>";
      }).join("") + "</div>";

    if (!list.length) {
      host.innerHTML = activeHTML +
        '<div class="empty"><h3>' + esc(t("pickEmpty")) + "</h3><p>" + esc(t("pickEmptyHint")) + "</p></div>";
      return;
    }

    host.innerHTML = activeHTML + '<div class="sec-head"><h2>' + esc(t("pickCount").replace("{n}", list.length)) + "</h2></div>" +
      '<div class="model-list">' + list.map(cardHTML).join("") + "</div>";
  }

  function syncPickHash() {
    var p = [];
    (D.selector || []).forEach(function (s) {
      if (state.pick[s.id]) p.push(s.id + "=" + encodeURIComponent(state.pick[s.id]));
    });
    setHash("#/" + (p.length ? "?" + p.join("&") : ""));
  }

  /* ---------------- 列表 ---------------- */

  function renderModels(qs) {
    readFilters(qs);
    state.lastListHash = location.hash || "#/models";

    var seriesChips = '<button class="chip" data-group="s" data-value="" type="button">' + esc(t("allSeries")) + "</button>" +
      D.series.map(function (s) {
        return '<button class="chip" data-group="s" data-value="' + s.id + '" type="button">' + esc(L(s.name)) + "</button>";
      }).join("");

    var sheetTags = ["wireless", "triac", "switch", "touch", "none"].map(function (tag) {
      return '<button class="chip" data-group="t" data-value="' + tag + '" type="button">' + esc(t("dimTags")[tag]) + "</button>";
    }).join("");

    var powerChips = Object.keys(POWER_BANDS).map(function (k) {
      return '<button class="chip" data-group="p" data-value="' + k + '" type="button">' + esc(t("powerBands")[k]) + "</button>";
    }).join("");

    var sortOpts = [
      ["default", t("sortDefault")], ["power-asc", t("sortPowerAsc")],
      ["power-desc", t("sortPowerDesc")], ["name", t("sortName")]
    ].map(function (o) {
      return '<option value="' + o[0] + '"' + (state.f.o === o[0] ? " selected" : "") + ">" + esc(o[1]) + "</option>";
    }).join("");

    view.innerHTML =
      '<h1 class="sr-only">' + t("allModels") + "</h1>" +
      '<div class="page-head"><a class="back" href="#/">' + ICON.back + t("back") + "</a></div>" +
      '<div class="list-tools">' +
        '<div class="search">' + ICON.search +
          '<input id="q" type="search" autocomplete="off" inputmode="search" aria-label="' + esc(t("search")) + '" placeholder="' + esc(t("search")) + '" value="' + esc(state.f.q) + '">' +
          '<button class="clear" id="qClear" type="button" aria-label="clear"' + (state.f.q ? "" : " hidden") + ">×</button>" +
        "</div>" +
        '<button class="icon-chip" id="openFilter" type="button" aria-haspopup="dialog" aria-expanded="false">' + ICON.filter +
          "<span>" + t("filter") + '</span><span class="badge-count" id="filterCount" hidden></span></button>' +
      "</div>" +
      '<div class="chips" id="seriesChips">' + seriesChips + "</div>" +
      '<div class="list-meta"><span id="resultCount" aria-live="polite"></span>' +
        '<span class="sort-wrap"><label for="sort" class="sr-only">' + t("sort") + "</label>" +
        '<select id="sort">' + sortOpts + "</select></span></div>" +
      '<div class="model-list" id="modelList"></div>' +
      '<div class="sheet" id="sheet" hidden>' +
        '<div class="sheet-backdrop" data-close="1"></div>' +
        '<div class="sheet-panel" role="dialog" aria-modal="true" aria-label="' + esc(t("filter")) + '">' +
          '<div class="sheet-head"><h2>' + t("filter") + '</h2><button class="close" id="closeSheet" type="button" aria-label="close">×</button></div>' +
          '<div class="sheet-body">' +
            "<h3>" + t("dimming") + '</h3><div class="chips">' + sheetTags + "</div>" +
            "<h3>" + t("power") + '</h3><div class="chips">' + powerChips + "</div>" +
            "<h3>" + t("cert") + '</h3><div class="chips"><button class="chip" data-group="c" data-value="enec" type="button">' + esc(t("certEnec")) + "</button></div>" +
          "</div>" +
          '<div class="sheet-foot"><button class="btn" id="resetFilters" type="button">' + t("reset") + "</button>" +
          '<button class="btn primary" id="applyFilters" type="button">' + t("apply") + "</button></div>" +
        "</div>" +
      "</div>";

    bindModels();
    updateList();

    if (qs.has("focus")) {
      var el = document.getElementById("q");
      if (el) el.focus();
    }
  }

  function bindModels() {
    var q = document.getElementById("q");
    var clear = document.getElementById("qClear");
    var timer = null;

    q.addEventListener("input", function () {
      var v = q.value;
      clear.hidden = !v;
      clearTimeout(timer);
      timer = setTimeout(function () {
        state.f.q = v;
        setHash(hashFor(state.f));
        updateList();
      }, 120);
    });

    q.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); q.blur(); }
    });

    clear.addEventListener("click", function () {
      q.value = "";
      clear.hidden = true;
      state.f.q = "";
      setHash(hashFor(state.f));
      updateList();
      q.focus();
    });

    document.getElementById("sort").addEventListener("change", function (e) {
      state.f.o = e.target.value;
      setHash(hashFor(state.f));
      updateList();
    });

    document.getElementById("seriesChips").addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      state.f.s = b.getAttribute("data-value");
      setHash(hashFor(state.f));
      updateList();
    });

    var sheet = document.getElementById("sheet");
    var openBtn = document.getElementById("openFilter");

    function openSheet() {
      state.lastFocus = openBtn;
      sheet.hidden = false;
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      document.getElementById("closeSheet").focus();
    }
    function closeSheet() {
      sheet.hidden = true;
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (state.lastFocus) state.lastFocus.focus();
    }

    openBtn.addEventListener("click", openSheet);
    document.getElementById("closeSheet").addEventListener("click", closeSheet);
    sheet.querySelector(".sheet-backdrop").addEventListener("click", closeSheet);
    sheet.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); closeSheet(); }
    });

    sheet.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b || !b.hasAttribute("data-group")) return;
      var g = b.getAttribute("data-group");
      var v = b.getAttribute("data-value");
      state.f[g] = state.f[g] === v ? "" : v;
      setHash(hashFor(state.f));
      syncChips();
      updateList();
    });

    document.getElementById("resetFilters").addEventListener("click", function () {
      state.f.q = ""; state.f.s = ""; state.f.t = ""; state.f.p = ""; state.f.c = ""; state.f.o = "default";
      var qi = document.getElementById("q"); if (qi) { qi.value = ""; }
      var cl = document.getElementById("qClear"); if (cl) cl.hidden = true;
      var so = document.getElementById("sort"); if (so) so.value = "default";
      setHash(hashFor(state.f));
      syncChips();
      updateList();
    });

    document.getElementById("applyFilters").addEventListener("click", closeSheet);

    document.getElementById("modelList").addEventListener("click", function (e) {
      var addBtn = e.target.closest(".add-btn");
      if (addBtn) {
        e.preventDefault();
        var id = addBtn.getAttribute("data-add");
        addSample(id, 1);
        addBtn.classList.add("in");
        addBtn.textContent = "✓";
        toast(t("addedToast"));
        return;
      }
      var b = e.target.closest("[data-action='clear']");
      if (!b) return;
      e.preventDefault();
      document.getElementById("resetFilters").click();
    });
  }

  function syncChips() {
    var chips = document.querySelectorAll(".chip[data-group]");
    for (var i = 0; i < chips.length; i++) {
      var g = chips[i].getAttribute("data-group");
      var v = chips[i].getAttribute("data-value");
      chips[i].setAttribute("aria-pressed", String((state.f[g] || "") === v));
    }
    var n = (state.f.t ? 1 : 0) + (state.f.p ? 1 : 0) + (state.f.c ? 1 : 0);
    var badge = document.getElementById("filterCount");
    var btn = document.getElementById("openFilter");
    if (badge) { badge.textContent = String(n); badge.hidden = n === 0; }
    if (btn) btn.classList.toggle("has-filter", n > 0);
  }

  function filterModels() {
    var f = state.f;
    var q = f.q.trim().toLowerCase();
    var band = f.p ? POWER_BANDS[f.p] : null;

    var list = D.models.filter(function (m) {
      if (f.s && m.series !== f.s) return false;
      if (f.t && m.protocolTags.indexOf(f.t) < 0) return false;
      if (f.c === "enec" && String(m.cert).indexOf("ENEC") < 0) return false;
      if (band) {
        if (m.powerMin == null) return false;
        if (!(m.powerMin <= band.hi && m.powerMax >= band.lo)) return false;
      }
      if (q) {
        var hay = [
          m.id, L(seriesById(m.series).name), m.category.zh, m.category.en,
          m.power, m.output.zh, m.output.en, m.protocol.zh, m.protocol.en,
          m.scene.zh, m.scene.en, m.channels, m.cert, m.protection.zh, m.protection.en
        ].join(" ").toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });

    if (f.o === "power-asc") {
      list.sort(function (a, b) { return (a.powerMin == null ? 1e9 : a.powerMin) - (b.powerMin == null ? 1e9 : b.powerMin) || a.no - b.no; });
    } else if (f.o === "power-desc") {
      list.sort(function (a, b) { return (b.powerMax == null ? -1 : b.powerMax) - (a.powerMax == null ? -1 : a.powerMax) || a.no - b.no; });
    } else if (f.o === "name") {
      list.sort(function (a, b) { return a.id.localeCompare(b.id); });
    } else {
      list.sort(function (a, b) { return a.no - b.no; });
    }
    return list;
  }

  function cardHTML(m) {
    var tags = m.protocolTags.map(function (tag) {
      return '<span class="tag sys">' + esc(t("dimTags")[tag] || tag) + "</span>";
    }).join("");
    tags += '<span class="tag cert">' + esc(certShort(m)) + "</span>";
    tags += '<span class="tag">' + esc(L(m.protection)) + "</span>";
    var inList = sampleQty(m.id) > 0;

    return '<div class="mcard">' +
      '<a class="mcard-link" href="#/model/' + encodeURIComponent(m.id) + '">' +
        '<div class="row1"><span class="model">' + esc(m.id) + "</span></div>" +
        '<div class="row2">' + esc(subLine(m)) + "</div>" +
        '<div class="spec-line"><span><b>' + esc(m.power) + "</b></span><span>" + esc(L(m.output)) +
        "</span><span>" + esc(m.input) + "</span><span>" + esc(m.channels) + "</span></div>" +
        '<div class="row3">' + tags + "</div>" +
      "</a>" +
      '<button class="add-btn' + (inList ? " in" : "") + '" type="button" data-add="' + esc(m.id) +
        '" aria-label="' + esc(t("addSample")) + '">' + (inList ? "✓" : "+") + "</button>" +
    "</div>";
  }

  function updateList() {
    var list = filterModels();
    var host = document.getElementById("modelList");
    var meta = document.getElementById("resultCount");
    if (!host) return;
    state.lastListHash = hashFor(state.f);

    if (list.length) {
      host.innerHTML = list.map(cardHTML).join("");
      meta.innerHTML = "<strong>" + list.length + "</strong> " + t("result");
    } else {
      host.innerHTML = '<div class="empty" style="grid-column:1/-1"><h3>' + t("empty") + "</h3><p>" + t("emptyHint") +
        '</p><button class="btn" data-action="clear" type="button">' + t("clear") + "</button></div>";
      meta.innerHTML = "<strong>0</strong> " + t("result");
    }

    syncChips();
    var apply = document.getElementById("applyFilters");
    if (apply) apply.textContent = t("apply") + " (" + list.length + ")";
  }

  /* ---------------- 详情 ---------------- */

  function renderDetail(id) {
    var m = null;
    for (var i = 0; i < D.models.length; i++) if (D.models[i].id === id) { m = D.models[i]; break; }

    if (!m) {
      view.innerHTML = '<div class="page-head"><a class="back" href="' + state.lastListHash + '">' + ICON.back + t("back") + "</a></div>" +
        '<div class="empty"><h3>' + t("notFound") + '</h3><p class="mono">' + esc(id) + "</p>" +
        '<a class="btn" href="' + state.lastListHash + '">' + t("backToList") + "</a></div>";
      return;
    }

    var s = seriesById(m.series);
    var tags = m.protocolTags.map(function (tag) {
      return '<span class="tag sys">' + esc(t("dimTags")[tag] || tag) + "</span>";
    }).join("");
    tags += '<span class="tag cert">' + esc(m.cert) + (m.certNote || "") + "</span>";
    tags += '<span class="tag">' + esc(L(m.protection)) + "</span>";

    var rows = [
      [t("fSeries"), L(s.name)],
      [t("fCategory"), L(m.category)],
      [t("fInput"), m.input],
      [t("fPower"), m.power],
      [t("fOutput"), L(m.output)],
      [t("fChannels"), m.channels],
      [t("fProtocol"), L(m.protocol)],
      [t("fProtection"), L(m.protection)],
      [t("fCert"), m.cert + (m.certNote || "")]
    ].map(function (r) {
      return "<div><dt>" + esc(r[0]) + "</dt><dd>" + esc(r[1]) + "</dd></div>";
    }).join("");

    var related = D.models.filter(function (x) { return x.series === m.series && x.id !== m.id; }).slice(0, 8);
    var relatedHTML = related.length
      ? '<div class="sec-head"><h2>' + t("related") + "</h2></div><div class=\"related\">" +
        related.map(function (x) {
          return '<a href="#/model/' + encodeURIComponent(x.id) + '"><div class="m">' + esc(x.id) +
            '</div><div class="s">' + esc(x.power) + " · " + esc(L(x.output)) + "</div></a>";
        }).join("") + "</div>"
      : "";

    var inList = sampleQty(m.id) > 0;

    view.innerHTML =
      '<div class="page-head"><a class="back" href="' + state.lastListHash + '">' + ICON.back + t("back") + "</a></div>" +
      '<div class="detail-head"><h1>' + esc(m.id) + "</h1>" +
        '<p class="detail-sub">' + esc(subLine(m)) + "</p>" +
        '<div class="tag-row">' + tags + "</div></div>" +
      '<div class="panel"><h2>' + t("specsTitle") + '</h2><dl class="specs">' + rows + "</dl></div>" +
      '<div class="panel"><h2>' + t("sceneTitle") + "</h2>" +
        '<p class="scene-text">' + esc(L(m.scene)) + "</p></div>" +
      '<p class="note">' + esc(t("certNote")) + "</p>" +
      '<div class="actions">' +
        '<button class="btn" id="copyBtn" type="button">' + ICON.copy + t("copy") + "</button>" +
        '<button class="btn" id="shareBtn" type="button">' + ICON.share + t("share") + "</button>" +
        '<button class="btn ' + (inList ? "added" : "primary") + '" id="addBtn" type="button" style="grid-column:1/-1"' +
          (inList ? ' data-in="1"' : "") + ">" +
          (inList ? ICON.check + t("added") + " · " + t("viewList") : ICON.plus + t("addSample")) +
        "</button>" +
      "</div>" + relatedHTML;

    bindDetail(m);
  }

  function bindDetail(m) {
    var addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", function () {
      if (addBtn.getAttribute("data-in")) {
        location.hash = "#/sample";
        return;
      }
      addSample(m.id, 1);
      addBtn.setAttribute("data-in", "1");
      addBtn.className = "btn added";
      addBtn.innerHTML = ICON.check + t("added") + " · " + t("viewList");
      toast(t("addedToast"));
    });

    document.getElementById("copyBtn").addEventListener("click", function () {
      var s = seriesById(m.series);
      var text = [
        m.id,
        L(s.name),
        m.power,
        L(m.output),
        m.input,
        L(m.protocol),
        m.cert
      ].join(" | ");
      copyText(text, t("copied"));
    });

    document.getElementById("shareBtn").addEventListener("click", function () {
      var url = location.href;
      if (navigator.share) {
        navigator.share({ title: m.id + " — Anway", text: m.id + " " + m.power, url: url }).catch(function () {});
      } else {
        copyText(url, t("linkCopied"));
      }
    });
  }

  function copyText(text, okMsg) {
    function done() { toast(okMsg); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1800);
  }

  /* ---------------- 样品需求 ---------------- */

  function buildRequest() {
    var zh = state.lang === "zh";
    var c = sample.customer;
    var out = [];
    out.push(zh ? "样品需求单" : "Sample Request");
    out.push("");

    var meta = [
      [zh ? "公司" : "Company", c.company],
      [zh ? "联系人" : "Contact", c.contact],
      [zh ? "邮箱" : "Email", c.email],
      [zh ? "国家/地区" : "Country", c.country],
      [zh ? "电话/微信" : "Phone / WeChat", c.phone],
      [zh ? "期望交期" : "Required by", c.needBy]
    ];
    meta.forEach(function (m) {
      if (m[1]) out.push(m[0] + ": " + m[1]);
    });

    out.push("");
    out.push(zh ? "样品清单：" : "Items:");
    sample.items.forEach(function (it, i) {
      var m = modelById(it.id);
      if (!m) return;
      out.push((i + 1) + ". " + m.id + " | " + L(seriesById(m.series).name) + " | " +
        m.power + " | " + L(m.output) + " | x" + it.qty);
    });

    if (c.note) {
      out.push("");
      out.push((zh ? "备注：" : "Notes: ") + c.note);
    }

    out.push("");
    out.push(zh ? "（由安规产品选型 App 生成）" : "(Generated by Anway Product Finder)");
    return out.join("\n");
  }

  function mailtoUrl() {
    var zh = state.lang === "zh";
    var subject = (zh ? "样品需求单" : "Sample Request") +
      (sample.customer.company ? " · " + sample.customer.company : "");
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(buildRequest());
  }

  function renderSample() {
    var zh = state.lang === "zh";
    var n = sample.items.length;

    if (!n) {
      view.innerHTML =
        '<div class="page-head"><a class="back" href="#/models">' + ICON.back + t("back") + "</a></div>" +
        "<h1>" + esc(t("sampleTitle")) + "</h1>" +
        '<div class="empty"><h3>' + esc(t("sampleEmpty")) + "</h3><p>" + esc(t("sampleEmptyHint")) + "</p>" +
        '<a class="btn" href="#/models">' + esc(t("goPick")) + "</a></div>";
      return;
    }

    var rows = sample.items.map(function (it) {
      var m = modelById(it.id);
      if (!m) return "";
      return '<div class="sitem" data-id="' + esc(m.id) + '">' +
        '<div class="info">' +
          '<div class="model">' + esc(m.id) + "</div>" +
          '<div class="sub">' + esc(L(seriesById(m.series).name)) + " · " + esc(m.power) + "</div>" +
        "</div>" +
        '<div class="qty">' +
          '<button type="button" data-act="dec" aria-label="' + esc(t("qty")) + ' -">−</button>' +
          "<span>" + it.qty + "</span>" +
          '<button type="button" data-act="inc" aria-label="' + esc(t("qty")) + ' +">+</button>' +
        "</div>" +
        '<button class="rm" type="button" data-act="rm" aria-label="' + esc(t("remove")) + '">×</button>' +
      "</div>";
    }).join("");

    var c = sample.customer;
    function field(name, label, type, ph, extra) {
      return '<div class="field"><label for="cf-' + name + '">' + esc(label) + "</label>" +
        '<input id="cf-' + name + '" data-field="' + name + '" type="' + (type || "text") +
        '" value="' + esc(c[name] || "") + '" placeholder="' + esc(ph || "") + '"' + (extra || "") + "></div>";
    }

    view.innerHTML =
      '<div class="page-head"><a class="back" href="#/models">' + ICON.back + t("back") + "</a></div>" +
      '<div class="sample-head"><div><h1>' + esc(t("sampleTitle")) + "</h1>" +
        '<div class="count">' + esc(t("sampleCount").replace("{n}", n)) + "</div></div>" +
        '<button class="link-btn" id="clearList" type="button">' + esc(t("clearList")) + "</button></div>" +
      '<div class="panel" id="sampleList">' + rows + "</div>" +
      '<div class="sec-head"><h2>' + esc(t("customerTitle")) + " · " + esc(t("optional")) + "</h2></div>" +
      '<p class="hint">' + esc(t("customerHint")) + "</p>" +
      '<div class="panel"><div class="form-grid" id="custForm">' +
        '<div class="two-col">' +
          field("company", t("fCompany")) +
          field("contact", t("fContact")) +
        "</div>" +
        '<div class="two-col">' +
          field("email", t("fEmail"), "email") +
          field("country", t("fCountry")) +
        "</div>" +
        '<div class="two-col">' +
          field("phone", t("fPhone")) +
          field("needBy", t("fNeedBy"), "text", zh ? "如 2026-12-01" : "e.g. 2026-12-01") +
        "</div>" +
        '<div class="field"><label for="cf-note">' + esc(t("fNote")) + "</label>" +
          '<textarea id="cf-note" data-field="note" placeholder="' + esc(t("fNotePlaceholder")) + '">' +
          esc(c.note || "") + "</textarea></div>" +
      "</div></div>" +
      '<button class="btn primary block" id="sendBtn" type="button">' + ICON.mail + esc(t("send")) + "</button>" +
      '<div class="sheet" id="sendSheet" hidden>' +
        '<div class="sheet-backdrop" data-close="1"></div>' +
        '<div class="sheet-panel" role="dialog" aria-modal="true" aria-label="' + esc(t("sendTitle")) + '">' +
          '<div class="sheet-head"><h2>' + esc(t("sendTitle")) + '</h2>' +
            '<button class="close" id="closeSend" type="button" aria-label="close">×</button></div>' +
          '<div class="sheet-body">' +
            '<button class="send-opt" id="optEmail" type="button">' +
              '<span class="ic">' + ICON.mail + "</span>" +
              '<span class="tx"><b>' + esc(t("byEmail")) + "</b><small>" + esc(t("byEmailHint")) + "</small></span>" +
            "</button>" +
            '<button class="send-opt" id="optWecom" type="button">' +
              '<span class="ic">' + ICON.chat + "</span>" +
              '<span class="tx"><b>' + esc(t("byWecom")) + "</b><small>" + esc(t("byWecomHint")) + "</small></span>" +
            "</button>" +
            '<div class="qr-block" id="qrBlock" hidden>' +
              '<img src="icons/wecom-qr.png" alt="WeCom QR code" width="200" height="200">' +
              "<p>" + esc(t("wecomScan")) + "</p>" +
            "</div>" +
            '<button class="send-opt" id="optCopy" type="button">' +
              '<span class="ic">' + ICON.copy + "</span>" +
              '<span class="tx"><b>' + esc(t("byCopy")) + "</b><small>" + esc(t("byCopyHint")) + "</small></span>" +
            "</button>" +
          "</div>" +
        "</div>" +
      "</div>";

    bindSample();
  }

  function bindSample() {
    var sheet = document.getElementById("sendSheet");

    document.getElementById("sampleList").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-act]");
      if (!btn) return;
      var row = e.target.closest(".sitem");
      var id = row.getAttribute("data-id");
      var act = btn.getAttribute("data-act");
      var q = sampleQty(id);
      if (act === "inc") setSampleQty(id, q + 1);
      else if (act === "dec") setSampleQty(id, q - 1);
      else if (act === "rm") setSampleQty(id, 0);
      renderSample();
    });

    document.getElementById("clearList").addEventListener("click", function () {
      if (!window.confirm(t("clearConfirm"))) return;
      sample.items = [];
      saveSample();
      renderSample();
    });

    document.getElementById("custForm").addEventListener("input", function (e) {
      var el = e.target;
      var key = el.getAttribute("data-field");
      if (!key) return;
      sample.customer[key] = el.value;
      saveSample();
    });

    function openSheet() {
      sheet.hidden = false;
      document.body.style.overflow = "hidden";
      sheet.querySelector(".close").focus();
    }
    function closeSheet() {
      sheet.hidden = true;
      document.body.style.overflow = "";
      var b = document.getElementById("sendBtn");
      if (b) b.focus();
    }

    document.getElementById("sendBtn").addEventListener("click", openSheet);
    document.getElementById("closeSend").addEventListener("click", closeSheet);
    sheet.querySelector(".sheet-backdrop").addEventListener("click", closeSheet);
    sheet.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); closeSheet(); }
    });

    document.getElementById("optEmail").addEventListener("click", function () {
      location.href = mailtoUrl();
    });

    document.getElementById("optWecom").addEventListener("click", function () {
      var qr = document.getElementById("qrBlock");
      qr.hidden = !qr.hidden;
      if (!qr.hidden) qr.scrollIntoView({ block: "nearest" });
    });

    document.getElementById("optCopy").addEventListener("click", function () {
      copyText(buildRequest(), t("copiedReq"));
    });
  }

  /* ---------------- 启动 ---------------- */

  langBtn.addEventListener("click", function () {
    state.lang = state.lang === "zh" ? "en" : "zh";
    try { localStorage.setItem("anway-lang", state.lang); } catch (e) {}
    render();
  });

  window.addEventListener("hashchange", render);

  if (!location.hash) setHash("#/");

  render();

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
