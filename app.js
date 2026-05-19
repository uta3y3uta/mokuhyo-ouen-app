/* ============================================================
   目標応援アプリ メインロジック
   ============================================================ */

const STORAGE_KEY = "mokuhyo-app-v1";

const UNITS = ["回","ページ","分","枚","問","文字","冊","個","人","周","ポイント","点","秒","時間","m","km","その他"];

const THEMES = [
  { name: "さくら",     color: "#ff6b9d" },
  { name: "りんご",     color: "#ff5c4d" },
  { name: "みかん",     color: "#ff8c1a" },
  { name: "ひまわり",   color: "#f5c518" },
  { name: "わかば",     color: "#9ec93a" },
  { name: "もり",       color: "#3ba672" },
  { name: "ミント",     color: "#2ec4a8" },
  { name: "うみ",       color: "#1aa3c4" },
  { name: "そら",       color: "#4d8df5" },
  { name: "ラベンダー", color: "#5a6df5" },
  { name: "ぶどう",     color: "#7a3df0" },
  { name: "ばら",       color: "#c43dc4" },
  { name: "ピーチ",     color: "#f53d96" },
  { name: "チョコ",     color: "#8b5a3c" },
  { name: "ベージュ",   color: "#bfa37a" },
  { name: "グレー",     color: "#6e7280" },
  { name: "ナイト",     color: "#2c2c3a" },
  { name: "パール",     color: "#8a8aff" },
  { name: "ゴールド",   color: "#e6a800" },
  { name: "にじ",       color: "#ff6b9d" },
];

// 進化の累積比率 (合計1.0)
const STAGE_RATIOS = [0.02, 0.05, 0.10, 0.17, 0.26, 0.37, 0.50, 0.65, 0.82, 1.00];

// 進化メッセージ (ルビ付き)
const EVOLVE_MESSAGES = [
  `<ruby>最初<rt>さいしょ</rt></ruby>の<ruby>一歩<rt>いっぽ</rt></ruby>！<br>すごいよ！`,
  `もう<ruby>2回目<rt>にかいめ</rt></ruby>の<ruby>進化<rt>しんか</rt></ruby>！<br>いいかんじ！`,
  `<ruby>順調<rt>じゅんちょう</rt></ruby>すぎる！<br>この<ruby>調子<rt>ちょうし</rt></ruby>でいこう！`,
  `<ruby>続<rt>つづ</rt></ruby>けることが<ruby>大切<rt>たいせつ</rt></ruby>だよ。<br>えらい！`,
  `<ruby>本当<rt>ほんとう</rt></ruby>のチャレンジはここから。<br>キミならできる！`,
  `<ruby>折<rt>お</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>し<ruby>地点<rt>ちてん</rt></ruby>！<br>がんばれ！`,
  `<ruby>半分<rt>はんぶん</rt></ruby>こえた！<br>あと<ruby>半分<rt>はんぶん</rt></ruby>だよ！`,
  `あともう<ruby>少<rt>すこ</rt></ruby>し！<br><ruby>諦<rt>あきら</rt></ruby>めないで！`,
  `あと<ruby>1回<rt>いっかい</rt></ruby>で<ruby>最終<rt>さいしゅう</rt></ruby><ruby>進化<rt>しんか</rt></ruby>！<br>ラストスパート！`,
  `やったね！<br><ruby>目標達成<rt>もくひょうたっせい</rt></ruby>おめでとう！`,
];

/* -------- 状態 -------- */
let state = loadState();
let draft = null; // 作成中の目標

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { goals: [], completedGoals: [], settings: { themeColor: 0 } };
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyTheme() {
  document.body.setAttribute("data-theme", state.settings.themeColor);
}

/* -------- ユーティリティ -------- */
function uid() { return Math.random().toString(36).slice(2, 10); }

function fmtDate(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${y}年${parseInt(m)}月${parseInt(day)}日`;
}
function todayISO() {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;
}
function addDaysISO(iso, days) {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

// 進化のしきい値配列を返す (長さ10、最後は target)
function computeThresholds(target) {
  const arr = STAGE_RATIOS.map(r => Math.max(1, Math.ceil(target * r)));
  // 単調増加を保証
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i-1]) arr[i] = arr[i-1] + 1;
  }
  arr[9] = target; // 最後はぴったり
  // ソート逆転防止
  for (let i = 8; i >= 0; i--) {
    if (arr[i] >= arr[i+1]) arr[i] = arr[i+1] - 1;
  }
  return arr;
}

// 現在の進化段階 (0=卵のまま, 1-10=各段階に達成)
function getStage(count, target) {
  const th = computeThresholds(target);
  let s = 0;
  for (let i = 0; i < 10; i++) {
    if (count >= th[i]) s = i + 1;
  }
  return s;
}

// 表示するキャラクター段階 (1..10)
// 卵のまま=1, 1段階目達成=2, ..., 9段階目達成=10
function displayStage(count, target) {
  return getStage(count, target) + 1 > 10 ? 10 : getStage(count, target) + 1;
}

/* -------- ルーティング -------- */
function route() {
  applyTheme();
  const hash = location.hash || "#/home";
  const parts = hash.replace("#/", "").split("/");
  const view = parts[0];
  const arg = parts[1];
  // 賞状ページは独立レンダリング
  if (view === "cert") return renderCertificatePage(arg);
  // 賞状ページから戻ってきた場合 #app が消えているので作り直す
  if (!document.getElementById("app")) {
    location.reload();
    return;
  }

  switch (view) {
    case "home":       renderHome(); break;
    case "create":     renderCreate(); break;
    case "goal":       renderGoalDetail(arg); break;
    case "collection": renderCollection(); break;
    case "settings":   renderSettings(); break;
    case "gallery":    renderGallery(); break;
    default:           renderHome();
  }
}
window.addEventListener("hashchange", route);

/* -------- 共通レイアウト -------- */
function shell(activeTab, content) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="header">
      <h1>めざせ！もくひょう</h1>
      <button class="gear-btn" id="gearBtn" title="せってい">⚙️</button>
    </div>
    <div class="tabs">
      <button data-tab="home" class="${activeTab==='home'?'active':''}">ホーム</button>
      <button data-tab="collection" class="${activeTab==='collection'?'active':''}">コレクション</button>
    </div>
    <div id="content">${content}</div>
  `;
  document.getElementById("gearBtn").onclick = () => location.hash = "#/settings";
  document.querySelectorAll(".tabs button").forEach(b => {
    b.onclick = () => location.hash = "#/" + b.dataset.tab;
  });
}

/* ============================================================
   ホーム画面
   ============================================================ */
function renderHome() {
  const active = state.goals;
  let html = "";

  for (let i = 0; i < 3; i++) {
    const g = active[i];
    if (g) {
      const target = g.target;
      const stage = getStage(g.count, target);
      const ds = stage === 0 ? 1 : Math.min(stage + 1, 10);
      const pct = Math.min(100, (g.count / target) * 100);
      html += `
        <div class="goal-card" data-id="${g.id}">
          <div class="avatar-wrap">${renderCreature(g.eggType, ds)}</div>
          <div class="info">
            <h3>${escapeHtml(g.label)}</h3>
            <div class="progress-text">${g.count} / ${target} ${escapeHtml(g.unit)}</div>
            <div class="bar"><div style="width:${pct}%"></div></div>
            <div class="help-text">${fmtDate(g.startDate)} ～ ${fmtDate(g.endDate)}</div>
          </div>
        </div>`;
    } else {
      html += `
        <div class="empty-slot" data-empty="${i}">
          <div style="font-size:32px">＋</div>
          <div>あたらしい<ruby>目標<rt>もくひょう</rt></ruby>を<br>つくる</div>
        </div>`;
    }
  }

  // 達成済みあれば表示
  if (state.completedGoals.length > 0) {
    html += `<div class="card"><h2>たっせいした<ruby>目標<rt>もくひょう</rt></ruby></h2>`;
    state.completedGoals.slice().reverse().forEach(g => {
      html += `
        <div class="goal-card" data-completed="${g.id}" style="background:linear-gradient(135deg,#fff7e6,#fff)">
          <div class="avatar-wrap">${renderCreature(g.eggType, 10)}</div>
          <div class="info">
            <h3>${escapeHtml(g.label)} <span class="done-badge">たっせい！</span></h3>
            <div class="progress-text">${g.target} ${escapeHtml(g.unit)}</div>
            <div class="help-text">${fmtDate(g.startDate)} ～ ${fmtDate(g.endDate)}</div>
          </div>
        </div>`;
    });
    html += `</div>`;
  }

  shell("home", html);

  document.querySelectorAll("[data-id]").forEach(el => {
    el.onclick = () => location.hash = "#/goal/" + el.dataset.id;
  });
  document.querySelectorAll("[data-empty]").forEach(el => {
    el.onclick = () => {
      if (state.goals.length >= 3) {
        alert("もくひょうは いちどに 3つまでだよ！");
        return;
      }
      location.hash = "#/create";
    };
  });
  document.querySelectorAll("[data-completed]").forEach(el => {
    el.onclick = () => {
      const id = el.dataset.completed;
      const g = state.completedGoals.find(x => x.id === id);
      if (g) showCertificateDialog(g);
    };
  });
}

/* ============================================================
   目標作成画面
   ============================================================ */
function renderCreate() {
  if (!draft) {
    draft = {
      step: 1,
      startDate: todayISO(),
      endDate: addDaysISO(todayISO(), 9),
      digits: [0,0,1,0,0], // 万千百十一 = 100
      unit: "回",
      customUnit: "",
      eggType: 0,
      label: "",
    };
  }
  switch (draft.step) {
    case 1: renderCreatePeriod(); break;
    case 2: renderCreateNumber(); break;
    case 3: renderCreateUnit(); break;
    case 4: renderCreateEgg(); break;
    case 5: renderCreateConfirm(); break;
  }
}

function digitsToNum(d) {
  return d[0]*10000 + d[1]*1000 + d[2]*100 + d[3]*10 + d[4];
}

function renderCreatePeriod() {
  const html = `
    <div class="card">
      <h2>1. <ruby>期間<rt>きかん</rt></ruby>をきめよう</h2>
      <p class="help-text">いつから いつまで がんばる？</p>
      <div class="date-row">
        <div class="date-input-wrap">
          <label>はじめの<ruby>日<rt>ひ</rt></ruby></label>
          <input type="date" id="startDate" value="${draft.startDate}" />
        </div>
        <div class="date-input-wrap">
          <label>おわりの<ruby>日<rt>ひ</rt></ruby></label>
          <input type="date" id="endDate" value="${draft.endDate}" />
        </div>
      </div>
      <p class="help-text" id="dayCount" style="margin-top:10px"></p>
    </div>
    <div class="card row-flex">
      <button class="ghost-btn" id="cancelBtn" style="flex:1">やめる</button>
      <button class="primary-btn" id="nextBtn" style="flex:2">つぎへ</button>
    </div>`;
  shell("home", html);

  const updateDays = () => {
    const s = document.getElementById("startDate").value;
    const e = document.getElementById("endDate").value;
    if (s && e) {
      const ds = new Date(s), de = new Date(e);
      const diff = Math.ceil((de - ds) / 86400000) + 1;
      document.getElementById("dayCount").textContent = diff > 0 ? `→ ${diff}日間` : "おわりの日は はじめの日より あとにしてね";
    }
  };
  document.getElementById("startDate").oninput = updateDays;
  document.getElementById("endDate").oninput = updateDays;
  updateDays();

  document.getElementById("cancelBtn").onclick = () => { draft = null; location.hash = "#/home"; };
  document.getElementById("nextBtn").onclick = () => {
    const s = document.getElementById("startDate").value;
    const e = document.getElementById("endDate").value;
    if (!s || !e) { alert("日にちを えらんでね"); return; }
    if (new Date(e) < new Date(s)) { alert("おわりの日は はじめの日より あとにしてね"); return; }
    draft.startDate = s; draft.endDate = e; draft.step = 2; renderCreate();
  };
}

function renderCreateNumber() {
  const labels = ["万","千","百","十","一"];
  let cols = "";
  draft.digits.forEach((v, i) => {
    cols += `
      <div class="digit-col">
        <button data-dir="up" data-i="${i}">▲</button>
        <div class="digit-value" id="digit-${i}">${v}</div>
        <button data-dir="down" data-i="${i}">▼</button>
        <div class="digit-label">${labels[i]}</div>
      </div>`;
  });
  const total = digitsToNum(draft.digits);
  const html = `
    <div class="card">
      <h2>2. <ruby>目標<rt>もくひょう</rt></ruby>の<ruby>数<rt>かず</rt></ruby></h2>
      <p class="help-text">▲▼ボタンで すうじを えらんでね</p>
      <div class="number-display">ぜんぶで <b id="numTotal" style="font-size:24px;color:var(--primary-dark)">${total}</b></div>
      <div class="number-spinner">${cols}</div>
    </div>
    <div class="card row-flex">
      <button class="ghost-btn" id="backBtn" style="flex:1">もどる</button>
      <button class="primary-btn" id="nextBtn" style="flex:2">つぎへ</button>
    </div>`;
  shell("home", html);

  document.querySelectorAll("[data-dir]").forEach(b => {
    b.onclick = () => {
      const i = +b.dataset.i;
      const dir = b.dataset.dir;
      let v = draft.digits[i];
      v = dir === "up" ? (v + 1) % 10 : (v + 9) % 10;
      draft.digits[i] = v;
      document.getElementById(`digit-${i}`).textContent = v;
      document.getElementById("numTotal").textContent = digitsToNum(draft.digits);
    };
  });
  document.getElementById("backBtn").onclick = () => { draft.step = 1; renderCreate(); };
  document.getElementById("nextBtn").onclick = () => {
    if (digitsToNum(draft.digits) === 0) { alert("1いじょうの数にしてね"); return; }
    draft.step = 3; renderCreate();
  };
}

function renderCreateUnit() {
  let opts = UNITS.map(u => `<option value="${u}" ${u===draft.unit?'selected':''}>${u}</option>`).join("");
  const customInput = draft.unit === "その他"
    ? `<div style="margin-top:10px"><input type="text" id="customUnit" placeholder="じぶんで かいてね" value="${escapeHtml(draft.customUnit)}" maxlength="10"/></div>`
    : "";
  const total = digitsToNum(draft.digits);
  const html = `
    <div class="card">
      <h2>3. <ruby>単位<rt>たんい</rt></ruby>をえらぼう</h2>
      <p class="help-text">${total} なに？</p>
      <div class="select-wrap"><select id="unitSel">${opts}</select></div>
      <div id="customWrap">${customInput}</div>
      <div style="margin-top:14px;text-align:center;font-size:18px;font-weight:800;color:var(--primary-dark)">
        ${total} <span id="unitDisp">${draft.unit === "その他" ? (draft.customUnit||"？") : draft.unit}</span>
      </div>
    </div>
    <div class="card">
      <p class="help-text"><ruby>名前<rt>なまえ</rt></ruby>(なくてもOK)</p>
      <div class="select-wrap"><input type="text" id="labelInput" placeholder="れい：かんじドリル" maxlength="20" value="${escapeHtml(draft.label)}"/></div>
    </div>
    <div class="card row-flex">
      <button class="ghost-btn" id="backBtn" style="flex:1">もどる</button>
      <button class="primary-btn" id="nextBtn" style="flex:2">つぎへ</button>
    </div>`;
  shell("home", html);

  const refresh = () => {
    const sel = document.getElementById("unitSel").value;
    draft.unit = sel;
    document.getElementById("customWrap").innerHTML = sel === "その他"
      ? `<div style="margin-top:10px"><input type="text" id="customUnit" placeholder="じぶんで かいてね" value="${escapeHtml(draft.customUnit)}" maxlength="10"/></div>`
      : "";
    if (sel === "その他") {
      document.getElementById("customUnit").oninput = (e) => {
        draft.customUnit = e.target.value;
        document.getElementById("unitDisp").textContent = e.target.value || "？";
      };
    }
    document.getElementById("unitDisp").textContent = sel === "その他" ? (draft.customUnit || "？") : sel;
  };
  document.getElementById("unitSel").onchange = refresh;
  if (draft.unit === "その他") {
    document.getElementById("customUnit").oninput = (e) => {
      draft.customUnit = e.target.value;
      document.getElementById("unitDisp").textContent = e.target.value || "？";
    };
  }
  document.getElementById("labelInput").oninput = (e) => { draft.label = e.target.value; };
  document.getElementById("backBtn").onclick = () => { draft.step = 2; renderCreate(); };
  document.getElementById("nextBtn").onclick = () => {
    if (draft.unit === "その他" && !draft.customUnit.trim()) {
      alert("単位を かいてね");
      return;
    }
    draft.step = 4; renderCreate();
  };
}

function renderCreateEgg() {
  let cells = EGG_TYPES.map((e, i) =>
    `<div class="egg-cell ${i===draft.eggType?'selected':''}" data-i="${i}">${renderEgg(i, 1)}</div>`
  ).join("");
  const selected = EGG_TYPES[draft.eggType];
  const html = `
    <div class="card">
      <h2>4. アバターのたまごをえらぼう</h2>
      <p class="help-text">めざめると どんなふうに そだつかな？</p>
      <div class="egg-grid">${cells}</div>
    </div>
    <div class="card row-flex">
      <button class="ghost-btn" id="backBtn" style="flex:1">もどる</button>
      <button class="primary-btn" id="nextBtn" style="flex:2">つぎへ</button>
    </div>`;
  shell("home", html);

  document.querySelectorAll(".egg-cell").forEach(c => {
    c.onclick = () => {
      draft.eggType = +c.dataset.i;
      document.querySelectorAll(".egg-cell").forEach(x => x.classList.remove("selected"));
      c.classList.add("selected");
    };
  });
  document.getElementById("backBtn").onclick = () => { draft.step = 3; renderCreate(); };
  document.getElementById("nextBtn").onclick = () => { draft.step = 5; renderCreate(); };
}

function renderCreateConfirm() {
  const total = digitsToNum(draft.digits);
  const unit = draft.unit === "その他" ? draft.customUnit : draft.unit;
  const days = Math.ceil((new Date(draft.endDate) - new Date(draft.startDate)) / 86400000) + 1;
  const th = computeThresholds(total);
  const stagePreview = th.map((v, i) =>
    `<div style="text-align:center;font-size:11px;color:var(--text-soft)">
      <div style="width:40px;height:40px;margin:0 auto 2px">${renderCreature(draft.eggType, i+1)}</div>
      <div>${v}</div>
    </div>`).join("");
  const html = `
    <div class="card">
      <h2>5. かくにん</h2>
      <p style="line-height:1.8;font-size:15px">
        <ruby>期間<rt>きかん</rt></ruby>：${fmtDate(draft.startDate)}<br>　　　〜 ${fmtDate(draft.endDate)} (${days}日間)<br>
        <ruby>目標<rt>もくひょう</rt></ruby>：<b style="font-size:20px;color:var(--primary-dark)">${total} ${escapeHtml(unit)}</b><br>
        ${draft.label ? `<ruby>名前<rt>なまえ</rt></ruby>：${escapeHtml(draft.label)}<br>` : ""}
        アバター：${eggLabel(draft.eggType)}
      </p>
    </div>
    <div class="card">
      <h2 style="font-size:14px"><ruby>進化<rt>しんか</rt></ruby>の<ruby>段階<rt>だんかい</rt></ruby></h2>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">${stagePreview}</div>
    </div>
    <div class="card row-flex">
      <button class="ghost-btn" id="backBtn" style="flex:1">もどる</button>
      <button class="primary-btn" id="saveBtn" style="flex:2">はじめる！</button>
    </div>`;
  shell("home", html);

  document.getElementById("backBtn").onclick = () => { draft.step = 4; renderCreate(); };
  document.getElementById("saveBtn").onclick = () => {
    const newGoal = {
      id: uid(),
      startDate: draft.startDate,
      endDate: draft.endDate,
      target: total,
      unit: unit,
      eggType: draft.eggType,
      label: draft.label || `${total}${unit}のもくひょう`,
      count: 0,
      createdAt: new Date().toISOString(),
    };
    state.goals.push(newGoal);
    saveState();
    draft = null;
    location.hash = "#/goal/" + newGoal.id;
  };
}

/* ============================================================
   目標詳細画面
   ============================================================ */
function renderGoalDetail(id) {
  const g = state.goals.find(x => x.id === id) || state.completedGoals.find(x => x.id === id);
  if (!g) { location.hash = "#/home"; return; }
  const isCompleted = state.completedGoals.includes(g);

  const stage = getStage(g.count, g.target);
  const ds = stage === 0 ? 1 : Math.min(stage + 1, 10);
  const pct = Math.min(100, (g.count / g.target) * 100);
  const th = computeThresholds(g.target);

  // 次のしきい値
  let nextT = null, nextStage = null;
  for (let i = 0; i < 10; i++) {
    if (g.count < th[i]) { nextT = th[i]; nextStage = i + 1; break; }
  }
  const remaining = nextT ? (nextT - g.count) : 0;

  // 進化マーカー
  let markers = "";
  th.forEach((v, i) => {
    const p = (v / g.target) * 100;
    markers += `<div class="marker" style="left:${p}%"></div>`;
  });

  // pip stack
  let pips = "";
  for (let i = 0; i < 10; i++) {
    pips += `<div class="pip ${i < stage ? 'on' : ''}"></div>`;
  }

  const html = `
    <div class="detail-hero">
      <div class="avatar-big">${renderCreature(g.eggType, ds)}</div>
      <div class="count-display">${g.count} <small>/ ${g.target} ${escapeHtml(g.unit)}</small></div>
      <div class="period">${fmtDate(g.startDate)} ～ ${fmtDate(g.endDate)}</div>
      <div class="progress-bar-wrap">
        <div class="fill" style="width:${pct}%"></div>
        <div class="markers">${markers}</div>
      </div>
      <div class="stage-stack">${pips}</div>
      <div class="next-target">
        ${nextT
          ? `つぎの<ruby>進化<rt>しんか</rt></ruby>まで あと <b>${remaining}</b> ${escapeHtml(g.unit)}！`
          : `<b>たっせい おめでとう！🎉</b>`}
      </div>
    </div>

    ${!isCompleted ? `
    <div class="count-btn-row">
      <button class="ghost-btn" id="minusBtn">－1</button>
      <button class="add-btn" id="plusBtn">＋1</button>
      <button class="add-btn" id="plus5Btn">＋5</button>
    </div>
    <div class="card row-flex">
      <button class="ghost-btn" id="backBtn" style="flex:1">ホーム</button>
      <button class="ghost-btn" id="deleteBtn" style="flex:1;color:#c4392c">やめる</button>
    </div>` : `
    <div class="card row-flex">
      <button class="ghost-btn" id="backBtn" style="flex:1">ホーム</button>
      <button class="primary-btn" id="certBtn" style="flex:2"><ruby>賞状<rt>しょうじょう</rt></ruby>を<ruby>印刷<rt>いんさつ</rt></ruby></button>
    </div>`}
  `;
  // shell の代わりにダイレクトレンダリング (タブ非表示)
  document.getElementById("app").innerHTML = `
    <div class="header">
      <button class="gear-btn" id="backHome">←</button>
      <h1 style="flex:1;text-align:center;font-size:18px">${escapeHtml(g.label)}</h1>
      <div style="width:40px"></div>
    </div>
    ${html}
  `;
  document.getElementById("backHome").onclick = () => location.hash = "#/home";

  if (!isCompleted) {
    document.getElementById("plusBtn").onclick = () => addCount(g.id, 1);
    document.getElementById("plus5Btn").onclick = () => addCount(g.id, 5);
    document.getElementById("minusBtn").onclick = () => addCount(g.id, -1);
    document.getElementById("backBtn").onclick = () => location.hash = "#/home";
    document.getElementById("deleteBtn").onclick = () => {
      showConfirm("この もくひょうを やめますか？(きろくは けされます)", () => {
        state.goals = state.goals.filter(x => x.id !== g.id);
        saveState();
        location.hash = "#/home";
      });
    };
  } else {
    document.getElementById("backBtn").onclick = () => location.hash = "#/home";
    document.getElementById("certBtn").onclick = () => showCertificateDialog(g);
  }
}

function addCount(id, delta) {
  const g = state.goals.find(x => x.id === id);
  if (!g) return;
  const oldStage = getStage(g.count, g.target);
  g.count = Math.max(0, Math.min(g.target, g.count + delta));
  const newStage = getStage(g.count, g.target);
  saveState();

  if (newStage > oldStage) {
    // 進化発生 (複数同時の場合は最終段階まで一気に表示)
    playEvolution(g, newStage);
  } else {
    renderGoalDetail(id);
  }
}

function playEvolution(g, newStage) {
  // 進化アニメ表示
  const overlay = document.getElementById("evolveOverlay");
  const cr = document.getElementById("evolveCreature");
  const msg = document.getElementById("evolveMessage");
  const ds = Math.min(newStage + 1, 10);
  cr.innerHTML = renderCreature(g.eggType, ds);

  const isFinal = newStage === 10;
  let messageHtml = EVOLVE_MESSAGES[newStage - 1];

  // 応援メッセージ追加
  if (!isFinal) {
    const th = computeThresholds(g.target);
    const nextT = th[newStage];
    if (nextT) {
      const remain = nextT - g.count;
      messageHtml += `<br><span style="font-size:13px;color:var(--text-soft)">のこり <b style="color:var(--primary-dark);font-size:16px">${remain}</b> ${escapeHtml(g.unit)} で つぎの<ruby>進化<rt>しんか</rt></ruby>！</span>`;
    }
  }
  msg.innerHTML = messageHtml;
  overlay.classList.remove("hidden");

  document.getElementById("evolveClose").onclick = () => {
    overlay.classList.add("hidden");
    // 最終進化(10)で目標達成
    if (newStage === 10) {
      // 達成済みへ移動
      state.goals = state.goals.filter(x => x.id !== g.id);
      state.completedGoals.push(g);
      saveState();
      showCertificateDialog(g);
    } else {
      renderGoalDetail(g.id);
    }
  };
}

/* ============================================================
   コレクション画面
   ============================================================ */
function renderCollection() {
  // 各卵のうち、最高達成段階を計算
  const maxStageByEgg = {};
  [...state.goals, ...state.completedGoals].forEach(g => {
    const st = getStage(g.count, g.target);
    if (!maxStageByEgg[g.eggType] || maxStageByEgg[g.eggType] < st) {
      maxStageByEgg[g.eggType] = st;
    }
  });

  let html = `<div class="card">
    <h2>コレクション</h2>
    <p class="help-text">めざめさせた たまごの しんかを みよう！</p>
  </div>`;

  EGG_TYPES.forEach((e, i) => {
    const maxStage = maxStageByEgg[i] || 0;
    if (maxStage === 0) return; // まだ未着手の卵はセクション出さない
    html += `<div class="card collection-section">
      <h3>${escapeHtml(eggLabel(i))} (さいだい ${maxStage}段階目)</h3>
      <div class="collection-grid">`;
    for (let s = 1; s <= 10; s++) {
      const unlocked = s <= maxStage + 1; // 卵(1)は常に見える
      html += `<div class="collection-cell ${unlocked?'':'locked'}">
        ${unlocked ? renderCreature(i, s) : renderCreature(i, s)}
        <div class="stage-label">${s}</div>
      </div>`;
    }
    html += `</div></div>`;
  });

  // 未着手の卵 = ?
  const untouched = EGG_TYPES.map((_, i) => i).filter(i => !maxStageByEgg[i]);
  if (untouched.length) {
    html += `<div class="card">
      <h3>まだ めざめていない たまご</h3>
      <div class="collection-grid">`;
    untouched.forEach(i => {
      html += `<div class="collection-cell locked">${renderEgg(i, 1)}</div>`;
    });
    html += `</div></div>`;
  }

  // 賞状ボタン (達成済みあれば)
  if (state.completedGoals.length > 0) {
    html += `<div class="card">
      <h2><ruby>賞状<rt>しょうじょう</rt></ruby>を<ruby>印刷<rt>いんさつ</rt></ruby></h2>
      <p class="help-text">たっせいした もくひょうの しょうじょうを みる</p>`;
    state.completedGoals.slice().reverse().forEach(g => {
      html += `<button class="ghost-btn" style="width:100%;margin-bottom:6px;text-align:left" data-cert="${g.id}">
        🏆 ${escapeHtml(g.label)} (${g.target}${escapeHtml(g.unit)})
      </button>`;
    });
    html += `</div>`;
  }

  shell("collection", html);

  document.querySelectorAll("[data-cert]").forEach(b => {
    b.onclick = () => {
      const g = state.completedGoals.find(x => x.id === b.dataset.cert);
      if (g) showCertificateDialog(g);
    };
  });
}

/* ============================================================
   賞状ダイアログ・ページ
   ============================================================ */
function showCertificateDialog(g) {
  const url = location.href.split("#")[0] + "#/cert/" + g.id;
  const html = `
    <div class="card">
      <h2>🏆 <ruby>賞状<rt>しょうじょう</rt></ruby> URL</h2>
      <p class="help-text">このリンクを ひらくと しょうじょうが ひょうじされて いんさつできます。</p>
      <a class="cert-link" href="${url}" target="_blank" id="certLink">${url}</a>
      <div class="row-flex">
        <button class="ghost-btn" id="copyCertBtn" style="flex:1">URLをコピー</button>
        <button class="primary-btn" id="openCertBtn" style="flex:1">ひらく</button>
      </div>
    </div>
    <div class="card">
      <button class="ghost-btn" style="width:100%" id="backHomeFromCert">もどる</button>
    </div>`;
  document.getElementById("app").innerHTML = `
    <div class="header">
      <button class="gear-btn" id="backBtn2">←</button>
      <h1 style="flex:1;text-align:center;font-size:18px">${escapeHtml(g.label)}</h1>
      <div style="width:40px"></div>
    </div>
    ${html}`;
  document.getElementById("backBtn2").onclick = () => location.hash = "#/home";
  document.getElementById("backHomeFromCert").onclick = () => location.hash = "#/home";
  document.getElementById("openCertBtn").onclick = () => window.open(url, "_blank");
  document.getElementById("copyCertBtn").onclick = () => {
    navigator.clipboard?.writeText(url).then(() => {
      document.getElementById("copyCertBtn").textContent = "コピーしたよ！";
      setTimeout(() => { document.getElementById("copyCertBtn").textContent = "URLをコピー"; }, 1500);
    }).catch(() => alert(url));
  };
}

function renderCertificatePage(id) {
  const g = state.completedGoals.find(x => x.id === id) || state.goals.find(x => x.id === id);
  if (!g) {
    document.body.innerHTML = `<div style="padding:40px;text-align:center">しょうじょうが みつかりません。</div>`;
    return;
  }
  const days = Math.ceil((new Date(g.endDate) - new Date(g.startDate)) / 86400000) + 1;
  const today = new Date();
  const todayStr = `${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`;
  // 旅 (stage 1-9): 卵から大きくなるグラデーション
  let journey = "";
  for (let s = 1; s <= 9; s++) {
    journey += `<div class="j-cell j-${s}">${renderCreature(g.eggType, s)}<div class="j-num">${s}</div></div>`;
  }
  const isDone = state.completedGoals.includes(g);

  document.body.innerHTML = `
    <button class="cert-print" onclick="window.print()">🖨 印刷する</button>
    <div class="cert-page">
      <div class="cert-deco tl">🏆</div>
      <div class="cert-deco tr">🏆</div>
      <h1>賞　状</h1>
      <div class="cert-name">${escapeHtml(g.label)}</div>
      <div class="cert-body">
        あなたは ${fmtDate(g.startDate)} から ${fmtDate(g.endDate)} までの<br>
        <b>${days}日間</b> にわたり <br>
        <b>${g.target}${escapeHtml(g.unit)}</b> の もくひょうに ${isDone ? "<b>みごと たっせい</b>" : `<b>${g.count}${escapeHtml(g.unit)}</b> まで ちょうせん`} しました。<br>
        その がんばりを ここに たたえます。
      </div>
      <div class="cert-hero">
        <div class="cert-hero-svg">${renderCreature(g.eggType, 10)}</div>
        <div class="cert-hero-label">さいしゅう しんか！</div>
      </div>
      <div class="cert-journey">${journey}</div>
      <div class="cert-date">${todayStr}</div>
    </div>
  `;
  document.body.style.background = "white";
}

/* ============================================================
   ギャラリー画面 (20種 × 10段階すべて表示)
   ============================================================ */
function renderGallery() {
  let html = `<div class="card">
    <h2>アバター<ruby>図鑑<rt>ずかん</rt></ruby></h2>
    <p class="help-text">20<ruby>種類<rt>しゅるい</rt></ruby>のアバターの 10<ruby>段階<rt>だんかい</rt></ruby><ruby>進化<rt>しんか</rt></ruby></p>
    <button class="ghost-btn" id="galBack" style="width:100%;margin-top:8px">ホームへもどる</button>
  </div>`;

  EGG_TYPES.forEach((e, i) => {
    let cells = "";
    for (let s = 1; s <= 10; s++) {
      cells += `<div class="gal-cell">${renderCreature(i, s)}<div class="gal-num">${s}</div></div>`;
    }
    html += `<div class="card gallery-row">
      <h3 class="gallery-title">${i+1}. ${escapeHtml(eggLabel(i))}</h3>
      <div class="gallery-grid">${cells}</div>
    </div>`;
  });

  shell("home", html);
  document.getElementById("galBack").onclick = () => location.hash = "#/home";
}

/* ============================================================
   設定画面
   ============================================================ */
function renderSettings() {
  const themeOpts = THEMES.map((t, i) =>
    `<option value="${i}" ${i===state.settings.themeColor?'selected':''}>${t.name}</option>`
  ).join("");
  const swatches = THEMES.map((t, i) =>
    `<span class="theme-swatch" style="background:${t.color}" title="${t.name}"></span>`
  ).join("");
  const html = `
    <div class="card">
      <h2>せってい</h2>
      <div class="settings-row">
        <div>
          <div><ruby>テーマ<rt></rt></ruby>カラー</div>
          <div class="help-text">アプリの いろを かえられるよ</div>
        </div>
        <select id="themeSel">${themeOpts}</select>
      </div>
      <div style="margin-top:10px;line-height:32px">${swatches}</div>
    </div>
    <div class="card">
      <h2>データ</h2>
      <div class="help-text">きろくは このブラウザ に ほぞんされます。</div>
      <button class="ghost-btn" id="resetBtn" style="width:100%;margin-top:10px;color:#c4392c">ぜんぶ けす (はじめから)</button>
    </div>
    <div class="card">
      <button class="ghost-btn" id="backBtn" style="width:100%">もどる</button>
    </div>
  `;
  shell("home", html);
  document.getElementById("themeSel").onchange = (e) => {
    state.settings.themeColor = +e.target.value;
    saveState();
    applyTheme();
  };
  document.getElementById("backBtn").onclick = () => location.hash = "#/home";
  document.getElementById("resetBtn").onclick = () => {
    showConfirm("ぜんぶの きろくが きえます。よろしいですか？", () => {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
      applyTheme();
      location.hash = "#/home";
    });
  };
}

/* ============================================================
   確認モーダル
   ============================================================ */
function showConfirm(text, onOk) {
  const m = document.getElementById("confirmModal");
  document.getElementById("confirmText").innerHTML = text;
  m.classList.remove("hidden");
  document.getElementById("confirmCancel").onclick = () => m.classList.add("hidden");
  document.getElementById("confirmOk").onclick = () => {
    m.classList.add("hidden");
    onOk();
  };
}

/* -------- HTMLエスケープ -------- */
function escapeHtml(s) {
  if (!s) return "";
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ============================================================
   起動
   ============================================================ */
applyTheme();
route();
