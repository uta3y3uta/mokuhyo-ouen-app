/* ============================================================
   20種類の卵 × 10段階の進化 SVG ジェネレーター
   各卵から完全に異なる20種類のアバターが進化する。
   ドラゴン、魚、虫、ユニコーン、猫、ペガサス、鳥、雲、
   ハムスター、岩、ロボット、フェニックス、亀、クラゲ、
   トカゲ、カニ、キノコ、花、ライオン、虹 など。
   ============================================================ */

/* -------- 20種類のユニークな卵シェイプ -------- */
const EGG_SHAPES = [
  "M 50,22 C 25,22 20,52 20,68 C 20,84 32,94 50,94 C 68,94 80,84 80,68 C 80,52 75,22 50,22 Z",
  "M 50,10 C 32,28 24,55 24,72 C 24,86 35,96 50,96 C 65,96 76,86 76,72 C 76,55 68,28 50,10 Z",
  "M 30,26 Q 30,18 38,18 L 62,18 Q 70,18 70,26 L 70,80 Q 70,92 60,92 L 40,92 Q 30,92 30,80 Z",
  "M 50,14 L 56,22 L 66,16 L 68,28 L 80,28 L 74,40 L 86,48 L 76,58 L 84,72 L 70,72 L 70,84 L 58,80 L 52,94 L 46,94 L 42,80 L 30,84 L 30,72 L 16,72 L 24,58 L 14,48 L 26,40 L 20,28 L 32,28 L 34,16 L 44,22 Z",
  "M 50,94 C 24,76 6,54 6,38 C 6,24 22,14 33,18 C 41,21 47,28 50,36 C 53,28 59,21 67,18 C 78,14 94,24 94,38 C 94,54 76,76 50,94 Z",
  "M 50,10 L 60,38 L 90,40 L 66,58 L 76,88 L 50,70 L 24,88 L 34,58 L 10,40 L 40,38 Z",
  "M 50,10 L 84,30 L 84,70 L 50,94 L 16,70 L 16,30 Z",
  "M 50,8 L 90,50 L 50,96 L 10,50 Z",
  "M 22,32 L 28,14 L 38,28 L 46,12 L 54,28 L 62,12 L 72,28 L 78,16 L 78,76 Q 78,94 62,94 L 38,94 Q 22,94 22,76 Z",
  "M 50,8 C 34,28 26,42 26,56 C 26,74 30,86 50,98 C 70,86 74,74 74,56 C 74,42 66,28 50,8 Z",
  "M 50,32 C 28,32 24,56 24,70 C 24,84 36,94 50,94 C 64,94 76,84 76,70 C 76,56 72,32 50,32 Z M 26,32 Q 28,16 50,14 Q 72,16 74,32 L 70,40 L 30,40 Z",
  "M 50,12 C 30,16 24,28 24,36 L 26,42 Q 50,38 74,42 L 76,36 C 76,28 70,16 50,12 Z M 26,48 Q 50,44 74,48 L 74,60 Q 50,56 26,60 Z M 26,66 Q 50,62 74,66 L 74,78 Q 50,94 26,78 Z",
  "M 50,18 Q 28,14 24,30 Q 12,30 12,46 Q 6,56 18,64 Q 14,80 30,84 Q 38,96 50,90 Q 62,96 70,84 Q 86,80 82,64 Q 94,56 88,46 Q 88,30 76,30 Q 72,14 50,18 Z",
  "M 32,18 Q 32,8 50,8 Q 68,8 68,18 L 68,82 Q 68,96 50,96 Q 32,96 32,82 Z",
  "M 50,20 C 22,20 16,52 16,66 C 16,86 32,96 50,96 C 68,96 84,86 84,66 C 84,52 78,20 50,20 Z",
  "M 30,28 Q 20,40 22,54 Q 12,60 22,72 Q 20,84 32,88 Q 38,96 50,90 Q 62,96 70,88 Q 82,82 78,72 Q 88,60 76,54 Q 80,40 68,30 Q 60,20 50,24 Q 38,20 30,28 Z",
  "M 50,22 C 24,22 20,52 20,68 C 20,84 32,94 50,94 C 68,94 80,84 80,68 C 80,52 76,22 50,22 Z",
  "M 50,22 C 24,22 20,52 20,68 C 20,84 32,94 50,94 C 68,94 80,84 80,68 C 80,52 76,22 50,22 Z",
  "M 50,6 Q 22,48 22,68 C 22,86 34,96 50,96 C 66,96 78,86 78,68 Q 78,48 50,6 Z",
  "M 50,14 Q 58,14 62,22 L 88,76 Q 92,94 72,94 L 28,94 Q 8,94 12,76 L 38,22 Q 42,14 50,14 Z",
];

// 20種類 = それぞれ完全に異なるアーキタイプ
// arch: 進化後の生き物の種類
// shape: EGG_SHAPES のインデックス
// p/s/a: 主色/副色/アクセント色
const EGG_TYPES = [
  { name:"ほのお", arch:"dragon",   p:"#ff4d4d", s:"#ffb066", a:"#fff200", pat:"dots",    shape:9,  deco:"flame" },
  { name:"なみ",   arch:"fish",     p:"#3aa6ff", s:"#a8e0ff", a:"#ffffff", pat:"scales",  shape:18, deco:"drop"  },
  { name:"もり",   arch:"bug",      p:"#3ec46e", s:"#b7e8a8", a:"#ff6b9d", pat:"stripes", shape:11, deco:"leaf"  },
  { name:"ほし",   arch:"unicorn",  p:"#a874ff", s:"#e0ccff", a:"#fff200", pat:"stars",   shape:5,  deco:"star"  },
  { name:"ふわり", arch:"cat",      p:"#ff8fbf", s:"#ffd6e6", a:"#fff200", pat:"dots",    shape:4,  deco:"heart" },
  { name:"ひかり", arch:"pegasus",  p:"#ffd23f", s:"#fff4b0", a:"#ff8c1a", pat:"hearts",  shape:7,  deco:"sun"   },
  { name:"そら",   arch:"bird",     p:"#7ec8ff", s:"#d4ecff", a:"#ffb3d9", pat:"swirls",  shape:12, deco:"cloud" },
  { name:"ゆき",   arch:"cloud",    p:"#ffffff", s:"#e0e7ff", a:"#a8d4ff", pat:"dots",    shape:6,  deco:"snow"  },
  { name:"もこ",   arch:"hamster",  p:"#d9a472", s:"#f0d4b8", a:"#ffffff", pat:"stripes", shape:15, deco:"paw"   },
  { name:"つき",   arch:"rock",     p:"#9c9cb0", s:"#c8c8d6", a:"#ffd166", pat:"stars",   shape:14, deco:"spike" },
  { name:"ふか",   arch:"robot",    p:"#3a3a52", s:"#7a7a8a", a:"#33d9ff", pat:"stars",   shape:19, deco:"spark" },
  { name:"あか",   arch:"phoenix",  p:"#e74c4c", s:"#ffaa66", a:"#ffeb3b", pat:"hearts",  shape:1,  deco:"flame" },
  { name:"あお",   arch:"turtle",   p:"#1aa3c4", s:"#a8e8f0", a:"#74c46e", pat:"waves",   shape:13, deco:"bubble"},
  { name:"しお",   arch:"jellyfish",p:"#a578ff", s:"#d6c0ff", a:"#ffd166", pat:"bubbles", shape:17, deco:"bubble"},
  { name:"みど",   arch:"lizard",   p:"#3ec46e", s:"#b7e8a8", a:"#ffd166", pat:"scales",  shape:16, deco:"leaf"  },
  { name:"さん",   arch:"crab",     p:"#ff6f61", s:"#ffb3a8", a:"#ffffff", pat:"bubbles", shape:3,  deco:"bubble"},
  { name:"わか",   arch:"mushroom", p:"#d94646", s:"#ffd6cc", a:"#ffffff", pat:"dots",    shape:10, deco:"leaf"  },
  { name:"はな",   arch:"flora",    p:"#ff6b9d", s:"#ffd6e6", a:"#fff200", pat:"hearts",  shape:2,  deco:"flower"},
  { name:"もも",   arch:"lion",     p:"#ff9933", s:"#ffd6a8", a:"#a86628", pat:"leaves",  shape:0,  deco:"sun"   },
  { name:"にじ",   arch:"rainbow",  p:"#a64dff", s:"#ff8c1a", a:"#fff200", pat:"stars",   shape:8,  deco:"rainbow"},
];

const ARCH_LABEL = {
  dragon:"ドラゴン", fish:"フィッシュ", bug:"バタフライ", unicorn:"ユニコーン",
  cat:"キャット", pegasus:"ペガサス", bird:"バード", cloud:"クラウド",
  hamster:"ハムスター", rock:"ロックゴーレム", robot:"ロボット", phoenix:"フェニックス",
  turtle:"タートル", jellyfish:"クラゲ", lizard:"トカゲ", crab:"クラブ",
  mushroom:"キノコ", flora:"フラワー", lion:"ライオン", rainbow:"レインボー"
};

function eggLabel(idx) {
  const e = EGG_TYPES[idx];
  return `${e.name}の${ARCH_LABEL[e.arch]}`;
}

/* -------- パターン定義 -------- */
function patternDefs(id, e) {
  const p = e.p, s = e.s, a = e.a;
  switch (e.pat) {
    case "dots":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="14" height="14">
        <rect width="14" height="14" fill="${p}"/>
        <circle cx="7" cy="7" r="3" fill="${s}"/></pattern>`;
    case "stripes":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="14" height="14">
        <rect width="14" height="14" fill="${p}"/>
        <rect y="4" width="14" height="3" fill="${s}"/>
        <rect y="10" width="14" height="2" fill="${a}"/></pattern>`;
    case "stars":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="18" height="18">
        <rect width="18" height="18" fill="${p}"/>
        <path d="M9 3 L10.5 7 L14.5 7 L11.5 9.5 L12.7 13.5 L9 11 L5.3 13.5 L6.5 9.5 L3.5 7 L7.5 7 Z" fill="${a}"/></pattern>`;
    case "swirls":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="20" height="20">
        <rect width="20" height="20" fill="${p}"/>
        <path d="M10 5 Q15 5 15 10 Q15 15 10 15 Q7 15 7 12 Q7 10 9 10" stroke="${s}" stroke-width="1.5" fill="none"/></pattern>`;
    case "hearts":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="16" height="16">
        <rect width="16" height="16" fill="${p}"/>
        <path d="M8 13 C2 9 2 4 5 4 C7 4 8 6 8 6 C8 6 9 4 11 4 C14 4 14 9 8 13Z" fill="${s}"/></pattern>`;
    case "scales":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="14" height="10">
        <rect width="14" height="10" fill="${p}"/>
        <path d="M0 8 Q7 0 14 8" stroke="${s}" stroke-width="1.5" fill="none"/></pattern>`;
    case "waves":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="20" height="10">
        <rect width="20" height="10" fill="${p}"/>
        <path d="M0 5 Q5 0 10 5 T20 5" stroke="${s}" stroke-width="1.5" fill="none"/></pattern>`;
    case "bubbles":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="18" height="18">
        <rect width="18" height="18" fill="${p}"/>
        <circle cx="6" cy="6" r="2.5" fill="${s}" opacity="0.7"/>
        <circle cx="13" cy="11" r="3.5" fill="${s}" opacity="0.5"/></pattern>`;
    case "leaves":
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="16" height="16">
        <rect width="16" height="16" fill="${p}"/>
        <path d="M8 3 Q12 6 8 12 Q4 6 8 3Z" fill="${s}"/>
        <path d="M8 4 L8 11" stroke="${a}" stroke-width="0.6"/></pattern>`;
    default:
      return `<pattern id="${id}" patternUnits="userSpaceOnUse" width="10" height="10">
        <rect width="10" height="10" fill="${p}"/></pattern>`;
  }
}

/* -------- 卵シェイプ追加装飾 -------- */
function shapeExtras(e) {
  switch (e.shape) {
    case 14:
      return `<path d="M 35 25 Q 32 58 36 90 M 50 22 Q 50 58 50 94 M 65 25 Q 68 58 64 90" stroke="${e.a}" stroke-width="1.5" fill="none" opacity="0.85"/>`;
    case 16:
      return `<path d="M 26 86 Q 14 78 18 64 Q 26 70 30 84 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
              <path d="M 74 86 Q 86 78 82 64 Q 74 70 70 84 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>`;
    case 17:
      return `<path d="M 23 42 Q 50 38 77 42" stroke="${e.a}" stroke-width="3" fill="none" opacity="0.9"/>
              <path d="M 22 56 Q 50 52 78 56" stroke="${e.a}" stroke-width="3" fill="none" opacity="0.9"/>
              <path d="M 24 72 Q 50 68 76 72" stroke="${e.a}" stroke-width="3" fill="none" opacity="0.9"/>`;
    case 10:
      return `<path d="M 30 38 Q 50 32 70 38" stroke="#3a2a2a" stroke-width="1.4" fill="none"/>
              <circle cx="50" cy="16" r="2.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>`;
    case 11:
      return `<path d="M 26 42 Q 50 38 74 42 M 26 60 Q 50 56 74 60" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.6"/>`;
    case 5:
      return `<circle cx="50" cy="50" r="3" fill="${e.a}" opacity="0.9"/>`;
    case 6:
      return `<path d="M 50 12 L 50 92" stroke="${e.s}" stroke-width="1" opacity="0.5"/>
              <path d="M 16 32 L 50 50 L 84 32" stroke="${e.s}" stroke-width="1" opacity="0.5" fill="none"/>`;
    default:
      return "";
  }
}

/* -------- 卵描画 (Stage 1-3) -------- */
function renderEgg(eggIdx, stage) {
  const e = EGG_TYPES[eggIdx];
  const pid = `pat-${eggIdx}-${stage}-${Math.random().toString(36).slice(2,6)}`;
  const shapePath = EGG_SHAPES[e.shape];

  const highlightX = [7].includes(e.shape) ? 38 : 40;
  const highlightY = [5,7].includes(e.shape) ? 35 : 42;
  const highlightRx = [7,4].includes(e.shape) ? 6 : 9;
  const highlightRy = [7,4].includes(e.shape) ? 8 : 12;

  let crack = "";
  let extra = "";
  if (stage === 2) {
    crack = `<path d="M40 30 L46 38 L42 44 L50 50 L46 56" stroke="#3a2a2a" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  }
  if (stage === 3) {
    crack = `<path d="M28 30 L40 38 L34 50 L46 56 L40 68 L52 72" stroke="#3a2a2a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
             <ellipse cx="58" cy="44" rx="7" ry="8" fill="white" stroke="#3a2a2a" stroke-width="1.4"/>
             <ellipse cx="59" cy="46" rx="3" ry="4" fill="#222"/>
             <ellipse cx="58" cy="44" rx="1.2" ry="1.5" fill="white"/>`;
    extra = `<path d="M22 24 L30 16 L36 22 L44 12 L52 18 L60 10 L66 18 L74 12" stroke="${e.p}" stroke-width="1.5" fill="none" opacity="0.6"/>`;
  }

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>${patternDefs(pid, e)}</defs>
    <path d="${shapePath}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8" stroke-linejoin="round"/>
    ${shapeExtras(e)}
    <ellipse cx="${highlightX}" cy="${highlightY}" rx="${highlightRx}" ry="${highlightRy}" fill="white" opacity="0.45"/>
    ${crack}${extra}
  </svg>`;
}

/* -------- 共通: 大きなキラキラ目 -------- */
function bigEyes(cx1, cx2, cy, r) {
  return `
    <ellipse cx="${cx1}" cy="${cy}" rx="${r}" ry="${r*1.15}" fill="white" stroke="#222" stroke-width="1.4"/>
    <ellipse cx="${cx2}" cy="${cy}" rx="${r}" ry="${r*1.15}" fill="white" stroke="#222" stroke-width="1.4"/>
    <ellipse cx="${cx1}" cy="${cy + r*0.2}" rx="${r*0.7}" ry="${r*0.9}" fill="#222"/>
    <ellipse cx="${cx2}" cy="${cy + r*0.2}" rx="${r*0.7}" ry="${r*0.9}" fill="#222"/>
    <ellipse cx="${cx1 - r*0.3}" cy="${cy - r*0.3}" rx="${r*0.32}" ry="${r*0.42}" fill="white"/>
    <ellipse cx="${cx2 - r*0.3}" cy="${cy - r*0.3}" rx="${r*0.32}" ry="${r*0.42}" fill="white"/>
    <circle cx="${cx1 + r*0.32}" cy="${cy + r*0.4}" r="${r*0.16}" fill="white" opacity="0.85"/>
    <circle cx="${cx2 + r*0.32}" cy="${cy + r*0.4}" r="${r*0.16}" fill="white" opacity="0.85"/>
  `;
}

function blush(cx1, cx2, cy, r, color) {
  return `<ellipse cx="${cx1}" cy="${cy}" rx="${r}" ry="${r*0.55}" fill="${color}" opacity="0.55"/>
          <ellipse cx="${cx2}" cy="${cy}" rx="${r}" ry="${r*0.55}" fill="${color}" opacity="0.55"/>`;
}

function smile(cx, cy, w) {
  return `<path d="M${cx-w} ${cy} Q${cx} ${cy+w*0.9} ${cx+w} ${cy}" stroke="#222" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
}

function aura(stage, color) {
  if (stage < 8) return "";
  const r = stage === 10 ? 50 : stage === 9 ? 44 : 38;
  const opacity = stage === 10 ? 0.55 : 0.35;
  return `<circle cx="50" cy="56" r="${r}" fill="${color}" opacity="${opacity}"/>`;
}

function sparkles(stage) {
  if (stage < 9) return "";
  const positions = [[15,18],[82,16],[10,68],[88,70],[50,8],[6,42],[92,42]];
  const stars = stage === 10 ? 7 : 4;
  let s = "";
  for (let i = 0; i < stars; i++) {
    const [x,y] = positions[i];
    const r = 2.5;
    s += `<path d="M${x} ${y-r*2.4} L${x+r*0.6} ${y-r*0.6} L${x+r*2.4} ${y} L${x+r*0.6} ${y+r*0.6} L${x} ${y+r*2.4} L${x-r*0.6} ${y+r*0.6} L${x-r*2.4} ${y} L${x-r*0.6} ${y-r*0.6} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.4"/>`;
  }
  return s;
}

function shellFragments(e, pid, stage) {
  if (stage !== 4) return "";
  return `
    <g opacity="0.95">
      <path d="M 18 92 L 24 82 L 32 86 L 28 96 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M 82 92 L 76 82 L 68 86 L 72 96 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M 44 96 L 42 88 L 48 86 L 52 96 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M 60 94 L 56 88 L 64 88 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="0.8"/>
    </g>
  `;
}

/* ============================================================
   各アーキタイプの生き物描画 (Stage 4-10)
   ============================================================ */

/* -------- 1. ドラゴン -------- */
function drawDragon(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 翼なし・角の芽だけの丸い赤ちゃんドラゴン
    const t = stage - 4;
    const r = 12 + t*1.5;
    return `
      <path d="M${50+r*0.9} ${64+r*0.3} Q${50+r+4} ${64+r*0.6} ${50+r+7} ${64+r*0.1}" stroke="${e.p}" stroke-width="${3+t*0.3}" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*1.05}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.65}" fill="${e.s}" opacity="0.85"/>
      <ellipse cx="${50-r*0.3}" cy="${64-r*0.9}" rx="2" ry="${2+t*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
      <ellipse cx="${50+r*0.3}" cy="${64-r*0.9}" rx="2" ry="${2+t*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
      ${blush(50-r*0.55, 50+r*0.55, 66, 3, e.a)}
      ${bigEyes(50-r*0.35, 50+r*0.35, 62, 3.5+t*0.2)}
      <ellipse cx="50" cy="66" rx="1.2" ry="0.8" fill="#222"/>
      ${smile(50, 69, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 翼が生え、角が立派になった本格ドラゴン
    const t = stage - 7;
    const r = 17 + t*1.5;
    const wingW = 9 + t*3;
    return `
      <path d="M${50+r-3} ${60+r*0.4} Q${65+t*3} ${74+t*1.5} ${80+t*3} ${82+t}" stroke="url(#${pid})" stroke-width="${5+t*0.6}" fill="none" stroke-linecap="round"/>
      <path d="M${80+t*3} ${82+t} L${88+t*3} ${78+t} L${83+t*3} ${90+t} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
      <path d="M${50-r*0.7} 56 Q${50-r-wingW} ${34-t*2} ${50-r*0.3} 44 Q${50-r-wingW*0.5} 50 ${50-r*0.6} 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.7} 56 Q${50+r+wingW} ${34-t*2} ${50+r*0.3} 44 Q${50+r+wingW*0.5} 50 ${50+r*0.6} 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="50" cy="60" rx="${r}" ry="${r*1.05}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="64" rx="${r*0.55}" ry="${r*0.75}" fill="${e.s}" opacity="0.85"/>
      <path d="M50 ${60-r} L48 ${52-r*1.15} L52 ${52-r*1.15} Z M44 ${56-r*1.1} L42 ${48-r*1.12} L46 ${48-r*1.1} Z M56 ${56-r*1.1} L54 ${48-r*1.1} L58 ${48-r*1.12} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M44 38 L${36-t*1.5} ${28-t*1.5} L48 36 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M56 38 L${64+t*1.5} ${28-t*1.5} L52 36 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      ${blush(50-r*0.55, 50+r*0.55, 62, 4, e.a)}
      ${bigEyes(50-r*0.35, 50+r*0.35, 54, 4.5+t*0.2)}
      <ellipse cx="50" cy="62" rx="1.6" ry="1.1" fill="#222"/>
      ${smile(50, 66, 4)}
      ${t >= 1 ? `<path d="M48 66 L47 69 L48.5 69 Z M52 66 L53 69 L51.5 69 Z" fill="white" stroke="#3a2a2a" stroke-width="0.4"/>` : ""}
    `;
  }
  // 最終形: 王冠付き巨大ドラゴン
  const r = 22, wingW = 26;
  return `
    <path d="M${50+r-3} ${60+r*0.4} Q86 78 96 86 L96 82 Q88 74 ${50+r-3} 56" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    <path d="M94 84 L100 76 L97 92 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50-r*0.7} 56 Q${50-r-wingW} 16 ${50-r*0.3} 40 Q${50-r-wingW*0.6} 48 ${50-r*0.6} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*0.5} 48 Q${50-r-wingW*0.7} 28 ${50-r*0.3} 40" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>
    <path d="M${50+r*0.7} 56 Q${50+r+wingW} 16 ${50+r*0.3} 40 Q${50+r+wingW*0.6} 48 ${50+r*0.6} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+r*0.5} 48 Q${50+r+wingW*0.7} 28 ${50+r*0.3} 40" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>
    <ellipse cx="50" cy="60" rx="${r}" ry="${r*1.05}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="64" rx="${r*0.6}" ry="${r*0.8}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.4} 66 L${50+r*0.4} 66 M${50-r*0.5} 72 L${50+r*0.5} 72" stroke="${e.a}" stroke-width="1" opacity="0.6"/>
    <path d="M50 ${60-r} L48 ${46-r*1.2} L52 ${46-r*1.2} Z M44 ${56-r*1.1} L42 ${42-r*1.18} L46 ${42-r*1.15} Z M56 ${56-r*1.1} L54 ${42-r*1.15} L58 ${42-r*1.18} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M40 36 L30 18 L46 32 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M60 36 L70 18 L54 32 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M40 30 L44 22 L46 28 L50 18 L54 28 L56 22 L60 30 L60 33 L40 33 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/>
    <circle cx="50" cy="26" r="2" fill="#ff4d4d"/>
    <circle cx="44" cy="28" r="1.2" fill="#33d9ff"/>
    <circle cx="56" cy="28" r="1.2" fill="#33d9ff"/>
    ${bigEyes(50-r*0.35, 50+r*0.35, 54, 5)}
    <ellipse cx="50" cy="62" rx="2" ry="1.3" fill="#222"/>
    ${smile(50, 67, 5)}
    <path d="M47 66 L46 71 L48 71 Z M53 66 L54 71 L52 71 Z" fill="white" stroke="#3a2a2a" stroke-width="0.5"/>
  `;
}

/* -------- 2. フィッシュ (魚) -------- */
function drawFish(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: オタマジャクシ
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <path d="M${50-r} 58 Q${50-r-7-t} ${52-t} ${50-r-10-t*1.4} ${56-t*0.5} Q${50-r-7-t} ${66+t} ${50-r-2} 58 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="50" cy="58" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="62" rx="${r*0.6}" ry="${r*0.55}" fill="${e.s}" opacity="0.85"/>
      ${blush(50-r*0.5, 50+r*0.5, 60, 3, e.a)}
      ${bigEyes(50-r*0.3, 50+r*0.3, 56, 3.5+t*0.2)}
      <ellipse cx="${50+r*0.7}" cy="60" rx="2" ry="1.2" fill="#a83258" stroke="#222" stroke-width="0.5"/>
    `;
  }
  if (stage <= 9) {
    // 進化形: 立派なヒレを持つ魚
    const t = stage - 7;
    const r = 17 + t*1.5;
    return `
      <path d="M${50-r*1.3} 58 L${50-r*1.8-t*0.6} ${48-t*0.5} L${50-r*1.4} 58 L${50-r*1.8-t*0.6} ${68+t*0.5} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="50" cy="58" rx="${r*1.3}" ry="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="62" rx="${r*0.9}" ry="${r*0.55}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.3} ${58-r*0.9} L50 ${58-r-t*0.8} L${50+r*0.3} ${58-r*0.9} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.2} ${58+r*0.6} Q${50-r*0.6} ${58+r+6} ${50+r*0.1} ${58+r*0.75}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50-r*0.5} 56 Q${50-r*0.45} 62 ${50-r*0.5} 64" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>
      ${blush(50-r*0.55, 50+r*0.35, 60, 3, e.a)}
      ${bigEyes(50-r*0.5, 50+r*0.1, 54, 4.5+t*0.2)}
      <ellipse cx="${50+r*0.85}" cy="60" rx="3" ry="2" fill="#a83258" stroke="#222" stroke-width="0.8"/>
    `;
  }
  // 最終形: 海王様 (王冠+流れる尾)
  const r = 20;
  return `
    <path d="M${50-r*1.3} 58 Q${50-r*2.2} 32 ${50-r*2} 52 Q${50-r*1.6} 58 ${50-r*2} 64 Q${50-r*2.2} 84 ${50-r*1.3} 58 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*1.5} 42 Q${50-r*1.8} 36 ${50-r*1.6} 50" stroke="${e.a}" stroke-width="1" fill="none"/>
    <path d="M${50-r*1.5} 74 Q${50-r*1.8} 80 ${50-r*1.6} 66" stroke="${e.a}" stroke-width="1" fill="none"/>
    <ellipse cx="50" cy="58" rx="${r*1.35}" ry="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="62" rx="${r*0.95}" ry="${r*0.6}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.4} ${58-r*0.95} L${50-r*0.2} ${58-r-10} L${50} ${58-r*0.9} L${50+r*0.2} ${58-r-10} L${50+r*0.4} ${58-r*0.95} L${50+r*0.3} ${58-r-7} L${50-r*0.3} ${58-r-7} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-r*0.3} ${58+r*0.65} Q${50-r*0.7} ${58+r+10} ${50+r*0.05} ${58+r*0.85} Q${50-r*0.5} ${58+r+4} ${50-r*0.1} ${58+r*0.7}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-r*0.55} 56 Q${50-r*0.5} 62 ${50-r*0.55} 64 M${50-r*0.4} 56 Q${50-r*0.35} 62 ${50-r*0.4} 64" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>
    <path d="M44 ${58-r*1.1} L46 ${58-r*1.4} L48 ${58-r*1.15} L50 ${58-r*1.5} L52 ${58-r*1.15} L54 ${58-r*1.4} L56 ${58-r*1.1} L56 ${58-r*0.95} L44 ${58-r*0.95} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/>
    <circle cx="50" cy="${58-r*1.25}" r="1.8" fill="#ff4d4d"/>
    <circle cx="46" cy="${58-r*1.15}" r="1" fill="#33d9ff"/>
    <circle cx="54" cy="${58-r*1.15}" r="1" fill="#33d9ff"/>
    ${blush(50-r*0.55, 50+r*0.35, 60, 3.5, e.a)}
    ${bigEyes(50-r*0.5, 50+r*0.1, 54, 5)}
    <ellipse cx="${50+r*0.85}" cy="60" rx="3.5" ry="2.3" fill="#a83258" stroke="#222" stroke-width="0.8"/>
    <circle cx="${50+r*1.3}" cy="46" r="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${50+r*1.45}" cy="38" r="1.8" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.4"/>
  `;
}

/* -------- 3. バタフライ (虫→蝶) -------- */
function drawBug(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: いも虫（複数の節）
    const t = stage - 4;
    const n = 3 + t;
    let segs = "";
    for (let i = 0; i < n; i++) {
      const cx = 50 + (i - (n-1)/2) * 11;
      segs += `<circle cx="${cx}" cy="62" r="${8+t*0.4}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>`;
    }
    const head = 50 + ((n-1)/2) * 11;
    return segs + `
      <path d="M${head-2} ${62-8} Q${head-4} ${56-t} ${head-5} ${52-t}" stroke="#3a2a2a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M${head+2} ${62-8} Q${head+4} ${56-t} ${head+5} ${52-t}" stroke="#3a2a2a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <circle cx="${head-5}" cy="${52-t}" r="1.2" fill="${e.a}"/>
      <circle cx="${head+5}" cy="${52-t}" r="1.2" fill="${e.a}"/>
      ${bigEyes(head-3, head+3, 60, 2.5+t*0.15)}
      ${smile(head, 64, 2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: サナギ（つながった繭、顔がのぞく）
    const t = stage - 7;
    return `
      <path d="M50 22 L50 ${30+t}" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="50" cy="${60+t*0.5}" rx="${15+t}" ry="${22+t*1.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <path d="M${50-15-t+2} ${50+t*0.5} Q50 ${52+t*0.5} ${50+15+t-2} ${50+t*0.5} M${50-15-t+2} ${62+t*0.5} Q50 ${64+t*0.5} ${50+15+t-2} ${62+t*0.5} M${50-15-t+2} ${72+t*0.5} Q50 ${74+t*0.5} ${50+15+t-2} ${72+t*0.5}" stroke="#3a2a2a" stroke-width="0.7" fill="none" opacity="0.6"/>
      <ellipse cx="50" cy="${56+t*0.5}" rx="9" ry="6" fill="${e.s}" opacity="0.7"/>
      ${bigEyes(46, 54, 56+t*0.5, 3+t*0.2)}
      ${smile(50, 60+t*0.5, 2.5)}
      ${t >= 2 ? `<path d="M${50-12} ${42-t} L${50-15} ${36-t} L${50-9} ${39-t} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8" opacity="0.7"/>
              <path d="M${50+12} ${42-t} L${50+15} ${36-t} L${50+9} ${39-t} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8" opacity="0.7"/>` : ""}
    `;
  }
  // 最終形: 大きな羽根を広げた蝶
  const wingR = 18;
  return `
    <path d="M46 36 Q40 24 32 18" stroke="#3a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <path d="M54 36 Q60 24 68 18" stroke="#3a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <circle cx="32" cy="18" r="2.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="68" cy="18" r="2.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M44 48 Q${44-wingR*1.6} ${48-wingR*1.8} ${44-wingR} ${48+wingR*0.4} Q${44-wingR*0.2} ${48-2} 44 48 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M56 48 Q${56+wingR*1.6} ${48-wingR*1.8} ${56+wingR} ${48+wingR*0.4} Q${56+wingR*0.2} ${48-2} 56 48 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M44 62 Q${44-wingR*1.4} ${62+wingR*1.5} ${44-wingR*0.6} ${62+wingR*1.7} Q${44-wingR*0.1} ${62+2} 44 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M56 62 Q${56+wingR*1.4} ${62+wingR*1.5} ${56+wingR*0.6} ${62+wingR*1.7} Q${56+wingR*0.1} ${62+2} 56 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${44-wingR}" cy="50" r="3.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${56+wingR}" cy="50" r="3.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${44-wingR*0.9}" cy="74" r="2.8" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${56+wingR*0.9}" cy="74" r="2.8" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${44-wingR*1.2}" cy="44" r="1.5" fill="${e.p}"/>
    <circle cx="${56+wingR*1.2}" cy="44" r="1.5" fill="${e.p}"/>
    <ellipse cx="50" cy="56" rx="6" ry="20" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M44 48 Q50 50 56 48 M44 58 Q50 60 56 58 M44 68 Q50 70 56 68" stroke="#3a2a2a" stroke-width="0.6" fill="none" opacity="0.6"/>
    ${bigEyes(46, 54, 44, 3.5)}
    ${smile(50, 48, 2.5)}
  `;
}

/* -------- 4. ユニコーン -------- */
function drawUnicorn(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 子馬（まだ角なし）
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.65}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.35} ${64-r*0.85} L${50-r*0.45} ${64-r-3} L${50-r*0.1} ${64-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.35} ${64-r*0.85} L${50+r*0.45} ${64-r-3} L${50+r*0.1} ${64-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      ${t >= 1 ? `<circle cx="50" cy="${64-r*0.95}" r="1.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>` : ""}
      ${blush(50-r*0.55, 50+r*0.55, 66, 3, e.a)}
      ${bigEyes(50-r*0.3, 50+r*0.3, 62, 3.5+t*0.2)}
      <ellipse cx="50" cy="68" rx="1.5" ry="1" fill="#222"/>
      ${smile(50, 71, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 立派な角とたてがみのユニコーン
    const t = stage - 7;
    const r = 17 + t*1.5;
    const hornH = 14 + t*3;
    return `
      <path d="M${50+r*0.85} 62 Q${50+r+10} ${55-t} ${50+r+8} ${68+t} Q${50+r+14} ${72+t} ${50+r+10} ${78+t}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <rect x="${50-r*0.55}" y="${62+r*0.7}" width="5" height="${10+t}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
      <rect x="${50+r*0.55-5}" y="${62+r*0.7}" width="5" height="${10+t}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="50" cy="62" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="66" rx="${r*0.55}" ry="${r*0.7}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.35} ${62-r*0.85} L${50-r*0.45} ${62-r-5} L${50-r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.35} ${62-r*0.85} L${50+r*0.45} ${62-r-5} L${50+r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.7} ${62-r*0.6} Q${50-r-4} ${62-r*0.4} ${50-r-2} ${62+r*0.2} Q${50-r-6} ${62+r*0.5} ${50-r-2} ${62+r*0.7}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M50 ${62-r*0.95} L48 ${62-r-hornH} L52 ${62-r-hornH+1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M49 ${62-r-hornH*0.3} L51 ${62-r-hornH*0.5} M49 ${62-r-hornH*0.5} L51 ${62-r-hornH*0.7}" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>
      ${blush(50-r*0.55, 50+r*0.55, 64, 3.5, e.a)}
      ${bigEyes(50-r*0.32, 50+r*0.32, 58, 4.5+t*0.2)}
      <ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#222"/>
      ${smile(50, 71, 3)}
    `;
  }
  // 最終形: アリコーン（翼+角+王冠）
  const r = 19;
  return `
    <path d="M${50+r*0.85} 62 Q${50+r+12} 48 ${50+r+10} 64 Q${50+r+18} 70 ${50+r+14} 82" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <rect x="${50-r*0.55}" y="${62+r*0.7}" width="5.5" height="14" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
    <rect x="${50+r*0.55-5.5}" y="${62+r*0.7}" width="5.5" height="14" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50-r*0.7} 58 Q${50-r-18} 30 ${50-r*0.3} 44 Q${50-r-10} 50 ${50-r*0.6} 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+r*0.7} 58 Q${50+r+18} 30 ${50+r*0.3} 44 Q${50+r+10} 50 ${50+r*0.6} 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*0.5} 50 Q${50-r-14} 38 ${50-r*0.3} 44" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <path d="M${50+r*0.5} 50 Q${50+r+14} 38 ${50+r*0.3} 44" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <ellipse cx="50" cy="62" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="66" rx="${r*0.6}" ry="${r*0.75}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.35} ${62-r*0.85} L${50-r*0.45} ${62-r-7} L${50-r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+r*0.35} ${62-r*0.85} L${50+r*0.45} ${62-r-7} L${50+r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-r*0.7} ${62-r*0.6} Q${50-r-5} ${62-r*0.4} ${50-r-3} ${62+r*0.2} Q${50-r-7} ${62+r*0.5} ${50-r-3} ${62+r*0.7}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-r*0.45} ${62-r*0.6} Q${50-r+1} ${62-r*0.3} ${50-r+3} ${62+r*0.3}" fill="#ff6b9d" opacity="0.6" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M50 ${62-r*0.95} L48 ${62-r-22} L52 ${62-r-22+1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M49 ${62-r-6} L51 ${62-r-10} M49 ${62-r-10} L51 ${62-r-14} M49 ${62-r-14} L51 ${62-r-18}" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>
    <path d="M${50-6} ${62-r*0.95-1} L${50-4} ${62-r*0.95-5} L${50-2} ${62-r*0.95-2} L50 ${62-r*0.95-7} L${50+2} ${62-r*0.95-2} L${50+4} ${62-r*0.95-5} L${50+6} ${62-r*0.95-1} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.7"/>
    <circle cx="50" cy="${62-r*0.95-3.5}" r="1.5" fill="#ff4d4d"/>
    ${blush(50-r*0.55, 50+r*0.55, 64, 3.5, e.a)}
    ${bigEyes(50-r*0.32, 50+r*0.32, 58, 5)}
    <ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#222"/>
    ${smile(50, 71, 3)}
  `;
}

/* -------- 5. キャット (猫) -------- */
function drawCat(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 子猫（眠そうな目、耳小さい）
    const t = stage - 4;
    const r = 14 + t*1.8;
    return `
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*1.02}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.6}" ry="${r*0.65}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.5} ${64-r*0.7} L${50-r*0.7} ${64-r-3} L${50-r*0.15} ${64-r*0.5} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.5} ${64-r*0.7} L${50+r*0.7} ${64-r-3} L${50+r*0.15} ${64-r*0.5} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      ${blush(50-r*0.55, 50+r*0.55, 66, 3, e.a)}
      <path d="M${50-r*0.4} 63 Q${50-r*0.3} 65 ${50-r*0.2} 63 M${50+r*0.2} 63 Q${50+r*0.3} 65 ${50+r*0.4} 63" stroke="#222" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M48 66 L52 66 L50 68 Z" fill="#ff8fbf" stroke="#3a2a2a" stroke-width="0.5"/>
      ${smile(50, 70, 2.2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 全身猫（ヒゲ、しっぽ、肉球）
    const t = stage - 7;
    const r = 18 + t*1.6;
    return `
      <path d="M${50+r*0.8} ${62+r*0.2} Q${50+r+10} ${52-t} ${50+r+12} ${42-t} Q${50+r+8} ${38-t} ${50+r+5} ${42-t}" stroke="url(#${pid})" stroke-width="${5+t*0.3}" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="62" rx="${r}" ry="${r*1.02}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="66" rx="${r*0.6}" ry="${r*0.7}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.55} ${62-r*0.75} L${50-r*0.85} ${62-r-10} L${50-r*0.15} ${62-r*0.55} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.55} ${62-r*0.75} L${50+r*0.85} ${62-r-10} L${50+r*0.15} ${62-r*0.55} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.55} ${62-r*0.7} L${50-r*0.75} ${62-r-7} L${50-r*0.3} ${62-r*0.6} Z" fill="${e.a}" opacity="0.7"/>
      <path d="M${50+r*0.55} ${62-r*0.7} L${50+r*0.75} ${62-r-7} L${50+r*0.3} ${62-r*0.6} Z" fill="${e.a}" opacity="0.7"/>
      <path d="M${50-r*0.7} 64 L${50-r-3} 62 M${50-r*0.7} 66 L${50-r-3} 67 M${50+r*0.7} 64 L${50+r+3} 62 M${50+r*0.7} 66 L${50+r+3} 67" stroke="#3a2a2a" stroke-width="0.8" fill="none" stroke-linecap="round"/>
      <ellipse cx="${50-r*0.5}" cy="${62+r*0.9}" rx="5" ry="3.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50+r*0.5}" cy="${62+r*0.9}" rx="5" ry="3.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      ${blush(50-r*0.55, 50+r*0.55, 64, 3.5, e.a)}
      ${bigEyes(50-r*0.4, 50+r*0.4, 58, 4.5+t*0.2)}
      <path d="M48 64 L52 64 L50 67 Z" fill="#ff8fbf" stroke="#3a2a2a" stroke-width="0.6"/>
      <path d="M50 67 L50 69 M50 69 Q47 70 46 68 M50 69 Q53 70 54 68" stroke="#3a2a2a" stroke-width="1" fill="none" stroke-linecap="round"/>
    `;
  }
  // 最終形: 魔法猫（2本のしっぽ、リボン、星の印）
  const r = 20;
  return `
    <path d="M${50+r*0.85} ${62+r*0.1} Q${50+r+14} ${48} ${50+r+18} ${36} Q${50+r+10} ${30} ${50+r+5} ${36}" stroke="url(#${pid})" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M${50+r*0.85} ${62+r*0.3} Q${50+r+10} ${72} ${50+r+14} ${82} Q${50+r+18} ${88} ${50+r+12} ${88}" stroke="url(#${pid})" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M${50+r+18} 36 Q${50+r+20} 30 ${50+r+22} 32" stroke="${e.a}" stroke-width="1.4" fill="none"/>
    <path d="M${50+r+14} 82 Q${50+r+16} 88 ${50+r+18} 86" stroke="${e.a}" stroke-width="1.4" fill="none"/>
    <ellipse cx="50" cy="62" rx="${r}" ry="${r*1.02}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="66" rx="${r*0.6}" ry="${r*0.75}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.55} ${62-r*0.75} L${50-r*0.85} ${62-r-12} L${50-r*0.15} ${62-r*0.55} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+r*0.55} ${62-r*0.75} L${50+r*0.85} ${62-r-12} L${50+r*0.15} ${62-r*0.55} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-r*0.55} ${62-r*0.7} L${50-r*0.75} ${62-r-9} L${50-r*0.3} ${62-r*0.6} Z" fill="${e.a}"/>
    <path d="M${50+r*0.55} ${62-r*0.7} L${50+r*0.75} ${62-r-9} L${50+r*0.3} ${62-r*0.6} Z" fill="${e.a}"/>
    <path d="M${50-r*0.7} 64 L${50-r-4} 62 M${50-r*0.7} 66 L${50-r-4} 67 M${50+r*0.7} 64 L${50+r+4} 62 M${50+r*0.7} 66 L${50+r+4} 67" stroke="#3a2a2a" stroke-width="0.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="${50-r*0.5}" cy="${62+r*0.9}" rx="5.5" ry="4" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <ellipse cx="${50+r*0.5}" cy="${62+r*0.9}" rx="5.5" ry="4" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50-r*0.6} ${62-r-6} L${50-r*0.6+5} ${62-r-2} L${50-r*0.6-5} ${62-r-2} L${50-r*0.6} ${62-r-6} Z" fill="#ff4d80" stroke="#3a2a2a" stroke-width="0.7"/>
    <path d="M48 ${62-r*0.3} L49.5 ${62-r*0.1} L51.5 ${62-r*0.4} L50.5 ${62-r*0.15} L52.5 ${62-r*0.05} L49.5 ${62-r*0.05} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.5"/>
    ${blush(50-r*0.55, 50+r*0.55, 64, 4, e.a)}
    ${bigEyes(50-r*0.4, 50+r*0.4, 58, 5)}
    <path d="M48 64 L52 64 L50 67 Z" fill="#ff8fbf" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M50 67 L50 69 M50 69 Q47 70 46 68 M50 69 Q53 70 54 68" stroke="#3a2a2a" stroke-width="1" fill="none" stroke-linecap="round"/>
  `;
}

/* -------- 6. ペガサス -------- */
function drawPegasus(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 翼のない子馬
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.65}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.35} ${64-r*0.85} L${50-r*0.42} ${64-r-3} L${50-r*0.1} ${64-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.35} ${64-r*0.85} L${50+r*0.42} ${64-r-3} L${50+r*0.1} ${64-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      ${t >= 1 ? `<path d="M${50-r*0.6} ${64-r*0.4} Q${50-r-3} ${64-r*0.2} ${50-r-1} ${64+r*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>` : ""}
      ${blush(50-r*0.55, 50+r*0.55, 66, 3, e.a)}
      ${bigEyes(50-r*0.3, 50+r*0.3, 62, 3.5+t*0.2)}
      <ellipse cx="50" cy="68" rx="1.5" ry="1" fill="#222"/>
      ${smile(50, 71, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 翼を持つペガサス
    const t = stage - 7;
    const r = 17 + t*1.5;
    const wingW = 8 + t*4;
    return `
      <path d="M${50+r*0.85} 62 Q${50+r+8} ${56-t} ${50+r+6} ${66+t} Q${50+r+12} ${72+t} ${50+r+8} ${78+t}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.7} 58 Q${50-r-wingW} ${46-wingW*0.4} ${50-r*1.4-wingW*0.3} ${56-wingW*0.2} Q${50-r-wingW*0.6} 60 ${50-r*0.7} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.85} 58 Q${50-r-wingW*0.7} ${50-wingW*0.2} ${50-r*1.2-wingW*0.2} 56" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
      <path d="M${50+r*0.7} 58 Q${50+r+wingW} ${46-wingW*0.4} ${50+r*1.4+wingW*0.3} ${56-wingW*0.2} Q${50+r+wingW*0.6} 60 ${50+r*0.7} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.85} 58 Q${50+r+wingW*0.7} ${50-wingW*0.2} ${50+r*1.2+wingW*0.2} 56" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
      <ellipse cx="50" cy="62" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="66" rx="${r*0.55}" ry="${r*0.7}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.35} ${62-r*0.85} L${50-r*0.42} ${62-r-5} L${50-r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.35} ${62-r*0.85} L${50+r*0.42} ${62-r-5} L${50+r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.55} ${62-r*0.55} Q${50-r-3} ${62-r*0.2} ${50-r-1} ${62+r*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      ${blush(50-r*0.55, 50+r*0.55, 64, 3.5, e.a)}
      ${bigEyes(50-r*0.32, 50+r*0.32, 58, 4.5+t*0.2)}
      <ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#222"/>
      ${smile(50, 71, 3)}
    `;
  }
  // 最終形: 神聖ペガサス（巨大な羽、ヘッドギア、星の額飾り）
  const r = 19, wingW = 22;
  return `
    <path d="M${50+r*0.85} 62 Q${50+r+10} 56 ${50+r+8} 70 Q${50+r+18} 78 ${50+r+14} 86" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+r*0.85} 60 Q${50+r+18} 48 ${50+r+22} 36" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*0.7} 56 Q${50-r-wingW} 22 ${50-r*1.6-wingW*0.3} 50 Q${50-r-wingW*0.5} 56 ${50-r*0.7} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*0.85} 58 Q${50-r-wingW*0.7} 40 ${50-r*1.3-wingW*0.2} 54" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <path d="M${50-r*0.85} 62 Q${50-r-wingW*0.5} 52 ${50-r*1.2-wingW*0.1} 60" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <path d="M${50+r*0.7} 56 Q${50+r+wingW} 22 ${50+r*1.6+wingW*0.3} 50 Q${50+r+wingW*0.5} 56 ${50+r*0.7} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+r*0.85} 58 Q${50+r+wingW*0.7} 40 ${50+r*1.3+wingW*0.2} 54" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <path d="M${50+r*0.85} 62 Q${50+r+wingW*0.5} 52 ${50+r*1.2+wingW*0.1} 60" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <ellipse cx="50" cy="62" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="66" rx="${r*0.6}" ry="${r*0.75}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.35} ${62-r*0.85} L${50-r*0.42} ${62-r-7} L${50-r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+r*0.35} ${62-r*0.85} L${50+r*0.42} ${62-r-7} L${50+r*0.1} ${62-r*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-r*0.55} ${62-r*0.55} Q${50-r-3} ${62-r*0.2} ${50-r-1} ${62+r*0.3} Q${50-r-5} ${62+r*0.55} ${50-r-1} ${62+r*0.75}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M50 ${62-r*0.95} L46 ${62-r-6} L54 ${62-r-6} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/>
    <path d="M50 ${62-r-8} L51.5 ${62-r-5} L55 ${62-r-4.5} L52.3 ${62-r-2.5} L53.2 ${62-r+0.5} L50 ${62-r-1.5} L46.8 ${62-r+0.5} L47.7 ${62-r-2.5} L45 ${62-r-4.5} L48.5 ${62-r-5} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.7"/>
    ${blush(50-r*0.55, 50+r*0.55, 64, 3.5, e.a)}
    ${bigEyes(50-r*0.32, 50+r*0.32, 58, 5)}
    <ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#222"/>
    ${smile(50, 71, 3)}
  `;
}

/* -------- 7. バード (鳥) -------- */
function drawBird(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: ヒヨコ（小さく丸い、しっぽなし）
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*1.05}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.6}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-2.5} 62 L${50+2.5} 62 L50 ${62+4} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50-2} ${64+r*0.9} L${50-3} ${64+r+3} M${50-3} ${64+r+3} L${50-5} ${64+r+3} M${50-3} ${64+r+3} L${50-1} ${64+r+3}" stroke="${e.a}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M${50+2} ${64+r*0.9} L${50+3} ${64+r+3} M${50+3} ${64+r+3} L${50+5} ${64+r+3} M${50+3} ${64+r+3} L${50+1} ${64+r+3}" stroke="${e.a}" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      ${blush(50-r*0.55, 50+r*0.55, 64, 3, e.a)}
      ${bigEyes(50-r*0.3, 50+r*0.3, 58, 3.5+t*0.2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 立派な羽根と尾を持つ鳥
    const t = stage - 7;
    const r = 17 + t*1.5;
    const wingW = 6 + t*3;
    return `
      <path d="M${50-3} ${62+r*0.95} L${50-10-t*1.5} ${76+t*1.2} L${50-2} ${74+t*0.6} L50 ${80+t} L${50+2} ${74+t*0.6} L${50+10+t*1.5} ${76+t*1.2} L${50+3} ${62+r*0.95} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="50" cy="62" rx="${r}" ry="${r*1.12}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.75}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.4} 60 Q${50-r-wingW} 58 ${50-r*0.7} ${72+wingW*0.3} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.4} 60 Q${50+r+wingW} 58 ${50+r*0.7} ${72+wingW*0.3} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M50 ${62-r} L46 ${54-r*1.25} L50 ${56-r*1.15} L54 ${52-r*1.3} L48 ${50-r*1.25} L52 ${48-r*1.3} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50-3} 58 L${50+3} 58 L50 ${58+5+t*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50-5} ${62+r*0.95} L${50-7} ${62+r+5} M${50-7} ${62+r+5} L${50-10} ${62+r+5} M${50-7} ${62+r+5} L${50-4} ${62+r+5}" stroke="${e.a}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M${50+5} ${62+r*0.95} L${50+7} ${62+r+5} M${50+7} ${62+r+5} L${50+10} ${62+r+5} M${50+7} ${62+r+5} L${50+4} ${62+r+5}" stroke="${e.a}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${blush(50-r*0.55, 50+r*0.55, 60, 3.5, e.a)}
      ${bigEyes(50-r*0.35, 50+r*0.35, 52, 4.5+t*0.2)}
    `;
  }
  // 最終形: 孔雀のような扇尾
  const r = 19;
  let fan = "";
  for (let i = -4; i <= 4; i++) {
    const ang = i * 0.22;
    const x = 50 + Math.sin(ang) * 32;
    const y = 76 + Math.cos(ang) * 30;
    const x2 = 50 + Math.sin(ang) * 20;
    const y2 = 76 + Math.cos(ang) * 18;
    fan += `<path d="M${(50+x2)/2} ${(75+y2)/2} L${x} ${y}" stroke="${i % 2 === 0 ? e.s : e.a}" stroke-width="6" stroke-linecap="round"/>`;
    fan += `<circle cx="${x}" cy="${y}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>`;
    fan += `<circle cx="${x}" cy="${y}" r="1.5" fill="${e.p}"/>`;
  }
  return `
    ${fan}
    <ellipse cx="50" cy="62" rx="${r}" ry="${r*1.12}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="68" rx="${r*0.6}" ry="${r*0.8}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.4} 60 Q${50-r-12} 56 ${50-r*0.7} ${72+4} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+r*0.4} 60 Q${50+r+12} 56 ${50+r*0.7} ${72+4} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M50 ${62-r-2} L44 ${50-r*1.3} L50 ${54-r*1.2} L56 ${48-r*1.35} L46 ${44-r*1.3} L54 ${42-r*1.35} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="50" cy="${42-r*1.2}" r="2" fill="${e.p}"/>
    <path d="M${50-3.5} 58 L${50+3.5} 58 L50 ${58+7} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50-5} ${62+r*0.95} L${50-7} ${62+r+6} M${50-7} ${62+r+6} L${50-11} ${62+r+6} M${50-7} ${62+r+6} L${50-4} ${62+r+6}" stroke="${e.a}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M${50+5} ${62+r*0.95} L${50+7} ${62+r+6} M${50+7} ${62+r+6} L${50+11} ${62+r+6} M${50+7} ${62+r+6} L${50+4} ${62+r+6}" stroke="${e.a}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    ${blush(50-r*0.55, 50+r*0.55, 60, 4, e.a)}
    ${bigEyes(50-r*0.35, 50+r*0.35, 52, 5)}
  `;
}

/* -------- 8. クラウド (雲) -------- */
function drawCloud(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さい単一の雲のかたまり
    const t = stage - 4;
    const sc = 0.7 + t*0.1;
    return `
      <circle cx="38" cy="62" r="${10*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <circle cx="50" cy="58" r="${12*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <circle cx="62" cy="62" r="${10*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="50" cy="66" rx="${20*sc}" ry="${6*sc}" fill="${e.s}" opacity="0.6"/>
      ${blush(43, 57, 60, 3, e.a)}
      ${bigEyes(46, 54, 56, 3.5+t*0.2)}
      ${smile(50, 61, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 大きな雷雲（稲妻あり）
    const t = stage - 7;
    const sc = 1 + t*0.1;
    return `
      <circle cx="32" cy="64" r="${14*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <circle cx="50" cy="56" r="${16*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <circle cx="68" cy="64" r="${14*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <circle cx="40" cy="72" r="${10*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <circle cx="60" cy="72" r="${10*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <circle cx="22" cy="56" r="${8*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <circle cx="78" cy="56" r="${8*sc}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <ellipse cx="50" cy="68" rx="${28*sc}" ry="${10*sc}" fill="${e.s}" opacity="0.6"/>
      ${t >= 1 ? `<path d="M50 80 L46 88 L50 88 L46 96 L54 84 L48 84 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/>` : ""}
      ${blush(40, 60, 60, 3.5, e.a)}
      ${bigEyes(45, 55, 56, 4.5+t*0.3)}
      ${smile(50, 62, 3)}
    `;
  }
  // 最終形: 嵐の巨人雲（巨大、雨、雷×3）
  return `
    <circle cx="22" cy="54" r="13" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="78" cy="54" r="13" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="32" cy="48" r="14" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="68" cy="48" r="14" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="50" cy="42" r="19" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="40" cy="64" r="14" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="60" cy="64" r="14" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="50" cy="68" r="16" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="64" rx="34" ry="11" fill="${e.s}" opacity="0.65"/>
    <path d="M30 72 L25 80 L30 80 L25 90 L34 76 L28 76 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.9"/>
    <path d="M50 76 L45 86 L51 86 L45 96 L56 80 L49 80 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.9"/>
    <path d="M70 72 L65 80 L70 80 L65 90 L74 76 L68 76 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.9"/>
    <path d="M18 74 Q16 70 18 66 Q20 70 18 74 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M82 74 Q80 70 82 66 Q84 70 82 74 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    ${blush(38, 62, 50, 4, e.a)}
    ${bigEyes(43, 57, 44, 5)}
    <path d="M${50-7} 54 Q50 60 ${50+7} 54 Q50 50 ${50-7} 54 Z" fill="#a83258" stroke="#222" stroke-width="0.8"/>
  `;
}

/* -------- 9. ハムスター -------- */
function drawHamster(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 赤ちゃんハムスター（耳のみ、頬なし）
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <ellipse cx="50" cy="65" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <ellipse cx="50" cy="69" rx="${r*0.6}" ry="${r*0.55}" fill="${e.s}" opacity="0.9"/>
      <circle cx="${50-r*0.55}" cy="${65-r*0.85}" r="${3+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.1"/>
      <circle cx="${50+r*0.55}" cy="${65-r*0.85}" r="${3+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.1"/>
      <circle cx="${50-r*0.55}" cy="${65-r*0.85}" r="${1.5+t*0.1}" fill="${e.a}" opacity="0.7"/>
      <circle cx="${50+r*0.55}" cy="${65-r*0.85}" r="${1.5+t*0.1}" fill="${e.a}" opacity="0.7"/>
      ${blush(50-r*0.55, 50+r*0.55, 68, 3, e.a)}
      ${bigEyes(50-r*0.3, 50+r*0.3, 64, 3+t*0.2)}
      <path d="M48.5 67 L51.5 67 L50 69 Z" fill="#ff6b9d" stroke="#3a2a2a" stroke-width="0.5"/>
      ${smile(50, 71, 2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: ほっぺ満タンのハムスター
    const t = stage - 7;
    const r = 17 + t*1.5;
    return `
      <circle cx="${50+r-2}" cy="${64+r*0.6}" r="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.65}" ry="${r*0.6}" fill="${e.s}" opacity="0.9"/>
      <circle cx="${50-r*0.75}" cy="68" r="${6+t*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <circle cx="${50+r*0.75}" cy="68" r="${6+t*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <circle cx="${50-r*0.6}" cy="${64-r*0.85}" r="${4+t*0.3}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50+r*0.6}" cy="${64-r*0.85}" r="${4+t*0.3}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50-r*0.6}" cy="${64-r*0.85}" r="${2.2+t*0.1}" fill="${e.a}" opacity="0.7"/>
      <circle cx="${50+r*0.6}" cy="${64-r*0.85}" r="${2.2+t*0.1}" fill="${e.a}" opacity="0.7"/>
      <path d="M${50-r*0.4} 70 L${50-r-3} 70 M${50+r*0.4} 70 L${50+r+3} 70" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
      ${bigEyes(50-r*0.32, 50+r*0.32, 62, 3.5+t*0.25)}
      <path d="M48.5 67 L51.5 67 L50 69 Z" fill="#ff6b9d" stroke="#3a2a2a" stroke-width="0.5"/>
      <rect x="48.5" y="70" width="3" height="3.5" fill="white" stroke="#3a2a2a" stroke-width="0.5"/>
      ${t >= 1 ? `<ellipse cx="${50-r-4}" cy="${64+r*0.4}" rx="3" ry="4" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>` : ""}
    `;
  }
  // 最終形: ヒーローハムスター（マント+どんぐり剣+王冠）
  const r = 20;
  return `
    <path d="M${50-r*0.9} ${64-r*0.4} Q${50-r-12} ${64+r*0.5} ${50-r-8} ${64+r+5} L${50-r-2} ${64+r*0.9} Z" fill="#d94646" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*0.9} ${64-r*0.4} L${50+r*0.9} ${64-r*0.4}" stroke="#fff200" stroke-width="2.5"/>
    <circle cx="${50+r-2}" cy="${64+r*0.6}" r="3" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <ellipse cx="50" cy="64" rx="${r}" ry="${r*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="68" rx="${r*0.65}" ry="${r*0.6}" fill="${e.s}" opacity="0.9"/>
    <circle cx="${50-r*0.75}" cy="68" r="7" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="${50+r*0.75}" cy="68" r="7" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="${50-r*0.6}" cy="${64-r*0.85}" r="5" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50+r*0.6}" cy="${64-r*0.85}" r="5" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-r*0.6}" cy="${64-r*0.85}" r="2.7" fill="${e.a}" opacity="0.75"/>
    <circle cx="${50+r*0.6}" cy="${64-r*0.85}" r="2.7" fill="${e.a}" opacity="0.75"/>
    <path d="M${50-r*0.6} ${64-r*1.05} L${50-r*0.5} ${64-r*1.25} L${50-r*0.4} ${64-r*1.1} L${50-r*0.3} ${64-r*1.3} L${50-r*0.2} ${64-r*1.05} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.6"/>
    <path d="M${50+r-8} ${64+r*0.5} L${50+r+12} ${64+r-2} L${50+r+10} ${64+r-6} L${50+r-6} ${64+r*0.3} Z" fill="#8b5a3c" stroke="#3a2a2a" stroke-width="0.8"/>
    <ellipse cx="${50+r+11}" cy="${64+r-4}" rx="3" ry="4" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.7"/>
    <path d="M${50-r*0.4} 70 L${50-r-3} 70 M${50+r*0.4} 70 L${50+r+3} 70" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    ${bigEyes(50-r*0.32, 50+r*0.32, 62, 4.5)}
    <path d="M48 67 L52 67 L50 70 Z" fill="#ff6b9d" stroke="#3a2a2a" stroke-width="0.5"/>
    <rect x="48" y="71" width="4" height="4" fill="white" stroke="#3a2a2a" stroke-width="0.5"/>
  `;
}

/* -------- 10. ロックゴーレム (岩) -------- */
function drawRock(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さな石ころに目鼻
    const t = stage - 4;
    const w = 13 + t*1.5;
    const h = 12 + t*1.4;
    return `
      <path d="M${50-w} 64 L${50-w*0.7} ${64-h} L${50-w*0.1} ${64-h*1.1} L${50+w*0.6} ${64-h*0.85} L${50+w} ${64} L${50+w*0.7} ${64+h*0.9} L${50-w*0.5} ${64+h*0.95} L${50-w*0.9} ${64+h*0.4} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <path d="M${50-w*0.3} ${64-h*0.3} L${50-w*0.15} ${64-h*0.05}" stroke="#3a2a2a" stroke-width="0.8" fill="none" opacity="0.5"/>
      <circle cx="${50-4}" cy="${64-h*0.1}" r="${2.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.9"/>
      <circle cx="${50+4}" cy="${64-h*0.1}" r="${2.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.9"/>
      <circle cx="${50-4}" cy="${64-h*0.1}" r="${1+t*0.1}" fill="#222"/>
      <circle cx="${50+4}" cy="${64-h*0.1}" r="${1+t*0.1}" fill="#222"/>
      ${smile(50, 64+h*0.3, 3)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 腕付きゴーレム+結晶
    const t = stage - 7;
    const w = 18 + t*1.5;
    const h = 18 + t*1.3;
    return `
      <rect x="${50-w-7}" y="${62+h*0.1}" width="9" height="${10+t*0.5}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <rect x="${50+w-2}" y="${62+h*0.1}" width="9" height="${10+t*0.5}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <path d="M${50-w} 62 L${50-w*0.95} ${62-h*0.75} L${50-w*0.5} ${62-h} L${50-w*0.1} ${62-h*0.95} L${50+w*0.4} ${62-h*1.05} L${50+w*0.95} ${62-h*0.65} L${50+w} ${62+h*0.2} L${50+w*0.85} ${62+h*0.85} L${50+w*0.2} ${62+h} L${50-w*0.5} ${62+h*0.95} L${50-w*0.95} ${62+h*0.5} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
      <path d="M${50-w*0.4} ${62-h*0.5} L${50-w*0.2} ${62-h*0.2} L${50-w*0.3} ${62+h*0.1}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.6"/>
      <path d="M${50+w*0.3} ${62+h*0.3} L${50+w*0.5} ${62+h*0.6}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.6"/>
      <path d="M${50-w*0.5} ${62-h*0.95} L${50-w*0.55} ${62-h*1.35} L${50-w*0.3} ${62-h*1.15} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M50 ${62-h*1.05} L${50-2} ${62-h*1.45} L${50+2} ${62-h*1.45} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50+w*0.4} ${62-h*1.05} L${50+w*0.45} ${62-h*1.35} L${50+w*0.7} ${62-h*1.1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50-7} ${58-h*0.1} L${50-3} ${56-h*0.05} M${50+3} ${56-h*0.05} L${50+7} ${58-h*0.1}" stroke="#3a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="${50-6}" cy="${62-h*0.05}" r="${3.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50+6}" cy="${62-h*0.05}" r="${3.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50-6}" cy="${62-h*0.05}" r="${1.2+t*0.1}" fill="#222"/>
      <circle cx="${50+6}" cy="${62-h*0.05}" r="${1.2+t*0.1}" fill="#222"/>
      <path d="M${50-5} ${62+h*0.25} Q50 ${62+h*0.4} ${50+5} ${62+h*0.25}" stroke="#3a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    `;
  }
  // 最終形: クリスタル鎧の巨大ゴーレム
  const w = 22, h = 22;
  return `
    <rect x="${50-w-10}" y="${62+h*0.1}" width="11" height="22" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <rect x="${50+w-1}" y="${62+h*0.1}" width="11" height="22" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <path d="M${50-w-10} ${62+h*1.2} L${50-w-13} ${62+h*1.35} L${50-w-7} ${62+h*1.35} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50+w+10} ${62+h*1.2} L${50+w+7} ${62+h*1.35} L${50+w+13} ${62+h*1.35} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50-w} 62 L${50-w*0.95} ${62-h*0.75} L${50-w*0.5} ${62-h} L${50-w*0.1} ${62-h*0.95} L${50+w*0.4} ${62-h*1.05} L${50+w*0.95} ${62-h*0.65} L${50+w} ${62+h*0.2} L${50+w*0.85} ${62+h*0.85} L${50+w*0.2} ${62+h} L${50-w*0.5} ${62+h*0.95} L${50-w*0.95} ${62+h*0.5} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="2"/>
    <path d="M${50-w*0.5} ${62-h*0.95} L${50-w*0.55} ${62-h*1.55} L${50-w*0.25} ${62-h*1.2} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M50 ${62-h*1.05} L${50-3} ${62-h*1.7} L${50+3} ${62-h*1.7} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50+w*0.4} ${62-h*1.05} L${50+w*0.5} ${62-h*1.55} L${50+w*0.75} ${62-h*1.15} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50-w*0.7} ${62-h*0.4} L${50-w*0.55} ${62-h*0.85} L${50-w*0.35} ${62-h*0.45} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50+w*0.55} ${62-h*0.4} L${50+w*0.7} ${62-h*0.85} L${50+w*0.35} ${62-h*0.45} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50-w*0.6} ${62+h*0.5} L${50-w*0.4} ${62+h*0.9} L${50-w*0.2} ${62+h*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50+w*0.55} ${62+h*0.5} L${50+w*0.35} ${62+h*0.9} L${50+w*0.15} ${62+h*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50-9} ${58-h*0.15} L${50-3} ${56-h*0.05} M${50+3} ${56-h*0.05} L${50+9} ${58-h*0.15}" stroke="#3a2a2a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="${50-7}" cy="${62-h*0.05}" r="4.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50+7}" cy="${62-h*0.05}" r="4.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50-7}" cy="${62-h*0.05}" r="1.8" fill="#222"/>
    <circle cx="${50+7}" cy="${62-h*0.05}" r="1.8" fill="#222"/>
    <circle cx="${50-8}" cy="${62-h*0.1}" r="0.8" fill="white"/>
    <circle cx="${50+6}" cy="${62-h*0.1}" r="0.8" fill="white"/>
    <path d="M${50-6} ${62+h*0.25} Q50 ${62+h*0.45} ${50+6} ${62+h*0.25}" stroke="#3a2a2a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  `;
}

/* -------- 11. ロボット -------- */
function drawRobot(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 丸いドローン（球体+アンテナ）
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <line x1="50" y1="${62-r*0.95}" x2="50" y2="${62-r-6-t}" stroke="#3a2a2a" stroke-width="1.4"/>
      <circle cx="50" cy="${62-r-8-t}" r="${1.8+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
      <circle cx="50" cy="62" r="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <rect x="${50-r*0.6}" y="${62-r*0.3}" width="${r*1.2}" height="${r*0.55}" rx="2" fill="#1a1a2a" stroke="#3a2a2a" stroke-width="0.8"/>
      <circle cx="${50-r*0.3}" cy="${62-r*0.05}" r="${2+t*0.2}" fill="${e.a}"/>
      <circle cx="${50+r*0.3}" cy="${62-r*0.05}" r="${2+t*0.2}" fill="${e.a}"/>
      <circle cx="${50-r*0.3}" cy="${62-r*0.05}" r="${0.8+t*0.1}" fill="#fff"/>
      <circle cx="${50+r*0.3}" cy="${62-r*0.05}" r="${0.8+t*0.1}" fill="#fff"/>
      <circle cx="${50-r*0.4}" cy="${62+r*0.55}" r="1" fill="${e.a}"/>
      <circle cx="${50+r*0.4}" cy="${62+r*0.55}" r="1" fill="${e.a}"/>
    `;
  }
  if (stage <= 9) {
    // 進化形: 人型ロボット（頭+胴+手足）
    const t = stage - 7;
    const w = 16 + t*1.5;
    const h = 14 + t*1.2;
    return `
      <rect x="${50-w-5}" y="${62+h*0.2}" width="5" height="${h+t}" rx="2" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <rect x="${50+w}" y="${62+h*0.2}" width="5" height="${h+t}" rx="2" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50-w-2.5}" cy="${62+h*1.3+t}" r="${3+t*0.1}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <circle cx="${50+w+2.5}" cy="${62+h*1.3+t}" r="${3+t*0.1}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <rect x="${50-w*0.55}" y="${62+h*1.6}" width="6" height="${5+t*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <rect x="${50+w*0.55-6}" y="${62+h*1.6}" width="6" height="${5+t*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <rect x="${50-w}" y="${62-h*0.2}" width="${w*2}" height="${h*1.8}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <circle cx="${50-w*0.4}" cy="${62+h*0.6}" r="${1.5+t*0.1}" fill="${e.a}"/>
      <circle cx="50" cy="${62+h*0.6}" r="${1.5+t*0.1}" fill="${e.a}"/>
      <circle cx="${50+w*0.4}" cy="${62+h*0.6}" r="${1.5+t*0.1}" fill="${e.a}"/>
      <rect x="${50-w*0.85}" y="${62-h*1.2}" width="${w*1.7}" height="${h*1.1}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <rect x="${50-w*0.65}" y="${62-h}" width="${w*1.3}" height="${h*0.75}" rx="1.5" fill="#1a1a2a" stroke="#3a2a2a" stroke-width="1"/>
      <circle cx="${50-w*0.35}" cy="${62-h*0.6}" r="${2.5+t*0.2}" fill="${e.a}"/>
      <circle cx="${50+w*0.35}" cy="${62-h*0.6}" r="${2.5+t*0.2}" fill="${e.a}"/>
      <circle cx="${50-w*0.35}" cy="${62-h*0.6}" r="${1+t*0.1}" fill="#fff"/>
      <circle cx="${50+w*0.35}" cy="${62-h*0.6}" r="${1+t*0.1}" fill="#fff"/>
      <line x1="50" y1="${62-h*1.2}" x2="50" y2="${62-h*1.6-t}" stroke="#3a2a2a" stroke-width="1.6"/>
      <circle cx="50" cy="${62-h*1.6-t-2}" r="${2.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <rect x="${50-6}" y="${62-h*0.15}" width="12" height="3" rx="1" fill="#3a2a2a"/>
      <path d="M${50-5} ${62-h*0.05} L${50-5} ${62-h*0.13} M${50-2} ${62-h*0.05} L${50-2} ${62-h*0.13} M${50+1} ${62-h*0.05} L${50+1} ${62-h*0.13} M${50+4} ${62-h*0.05} L${50+4} ${62-h*0.13}" stroke="${e.s}" stroke-width="0.8"/>
    `;
  }
  // 最終形: 大型メカ（キャノン+ジェットスラスター+ハッチ）
  const w = 18, h = 16;
  return `
    <rect x="${50-w-12}" y="${62+h*0.2}" width="7" height="22" rx="2" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    <rect x="${50-w-15}" y="${62+h*0.3}" width="12" height="6" rx="2" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-w-15}" cy="${62+h*0.6}" r="2" fill="${e.a}"/>
    <rect x="${50+w+5}" y="${62+h*0.2}" width="7" height="22" rx="2" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    <rect x="${50+w+3}" y="${62+h*0.3}" width="12" height="6" rx="2" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50+w+15}" cy="${62+h*0.6}" r="2" fill="${e.a}"/>
    <rect x="${50-w*0.55}" y="${62+h*1.6}" width="8" height="7" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <rect x="${50+w*0.55-8}" y="${62+h*1.6}" width="8" height="7" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50-w*0.55} ${62+h*1.6+7} L${50-w*0.55-3} ${62+h*1.6+10} L${50-w*0.55+8+3} ${62+h*1.6+10} L${50-w*0.55+8} ${62+h*1.6+7}" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50+w*0.55-8} ${62+h*1.6+7} L${50+w*0.55-8-3} ${62+h*1.6+10} L${50+w*0.55+3} ${62+h*1.6+10} L${50+w*0.55} ${62+h*1.6+7}" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <rect x="${50-w}" y="${62-h*0.2}" width="${w*2}" height="${h*1.8}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <circle cx="50" cy="${62+h*0.7}" r="5" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="50" cy="${62+h*0.7}" r="2" fill="#fff" opacity="0.9"/>
    <circle cx="${50-w*0.45}" cy="${62+h*0.4}" r="1.5" fill="${e.a}"/>
    <circle cx="${50-w*0.45}" cy="${62+h*1.1}" r="1.5" fill="${e.a}"/>
    <circle cx="${50+w*0.45}" cy="${62+h*0.4}" r="1.5" fill="${e.a}"/>
    <circle cx="${50+w*0.45}" cy="${62+h*1.1}" r="1.5" fill="${e.a}"/>
    <rect x="${50-w*0.9}" y="${62-h*1.3}" width="${w*1.8}" height="${h*1.2}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <rect x="${50-w*0.7}" y="${62-h*1.1}" width="${w*1.4}" height="${h*0.85}" rx="1.5" fill="#1a1a2a" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-w*0.35}" cy="${62-h*0.65}" r="3" fill="${e.a}"/>
    <circle cx="${50+w*0.35}" cy="${62-h*0.65}" r="3" fill="${e.a}"/>
    <circle cx="${50-w*0.35}" cy="${62-h*0.65}" r="1.3" fill="#fff"/>
    <circle cx="${50+w*0.35}" cy="${62-h*0.65}" r="1.3" fill="#fff"/>
    <line x1="${50-6}" y1="${62-h*1.3}" x2="${50-6}" y2="${62-h*1.8}" stroke="#3a2a2a" stroke-width="1.6"/>
    <line x1="${50+6}" y1="${62-h*1.3}" x2="${50+6}" y2="${62-h*1.8}" stroke="#3a2a2a" stroke-width="1.6"/>
    <circle cx="${50-6}" cy="${62-h*1.8-2}" r="2" fill="#ff4d4d" stroke="#3a2a2a" stroke-width="0.8"/>
    <circle cx="${50+6}" cy="${62-h*1.8-2}" r="2" fill="#ff4d4d" stroke="#3a2a2a" stroke-width="0.8"/>
    <rect x="${50-7}" y="${62-h*0.15}" width="14" height="3.5" rx="1" fill="#3a2a2a"/>
    <path d="M${50-5} ${62-h*0.04} L${50-5} ${62-h*0.13} M${50-2} ${62-h*0.04} L${50-2} ${62-h*0.13} M${50+1} ${62-h*0.04} L${50+1} ${62-h*0.13} M${50+4} ${62-h*0.04} L${50+4} ${62-h*0.13}" stroke="${e.s}" stroke-width="0.9"/>
  `;
}

/* -------- 12. フェニックス (不死鳥) -------- */
function drawPhoenix(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 炎のヒヨコ（炎の冠だけ）
    const t = stage - 4;
    const r = 12 + t*1.5;
    return `
      <ellipse cx="50" cy="64" rx="${r}" ry="${r*1.1}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.6}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.5} ${64-r} Q50 ${64-r-6-t} ${50+r*0.5} ${64-r} Q50 ${64-r-3} ${50-r*0.5} ${64-r} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M${50-3} 60 L${50+3} 60 L50 ${60+4+t*0.4} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.9"/>
      <path d="M${50-2} ${64+r*0.95} L${50-3} ${64+r+3} M${50+2} ${64+r*0.95} L${50+3} ${64+r+3}" stroke="${e.a}" stroke-width="1.4" stroke-linecap="round"/>
      ${blush(50-r*0.55, 50+r*0.55, 64, 3, e.a)}
      ${bigEyes(50-r*0.3, 50+r*0.3, 56, 3.5+t*0.2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 炎の翼を持つ火の鳥
    const t = stage - 7;
    const r = 15 + t*1.5;
    const wingW = 12 + t*4;
    return `
      <path d="M50 ${62+r*0.95} Q${50-3} ${62+r+8} ${50-1} ${62+r+14+t} M50 ${62+r*0.95} Q${50+3} ${62+r+8} ${50+5} ${62+r+12+t} M50 ${62+r*0.95} Q${50-5} ${62+r+8} ${50-6} ${62+r+12+t}" stroke="${e.a}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M50 ${62+r*0.95} Q50 ${62+r+10} ${50+1} ${62+r+18+t*1.4}" stroke="${e.p}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M${50-r*0.5} 58 Q${50-r-wingW} ${48-wingW*0.4} ${50-r-wingW*0.8} ${44-wingW*0.4} Q${50-r-wingW*0.4} 56 ${50-r*1.1} 64 L${50-r-wingW*0.2} 72 Q${50-r-wingW*0.6} 68 ${50-r*0.7} 64 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-r*0.6} 60 Q${50-r-wingW*0.6} 52 ${50-r-wingW*0.5} 48" stroke="${e.a}" stroke-width="1.5" fill="none"/>
      <path d="M${50+r*0.5} 58 Q${50+r+wingW} ${48-wingW*0.4} ${50+r+wingW*0.8} ${44-wingW*0.4} Q${50+r+wingW*0.4} 56 ${50+r*1.1} 64 L${50+r+wingW*0.2} 72 Q${50+r+wingW*0.6} 68 ${50+r*0.7} 64 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50+r*0.6} 60 Q${50+r+wingW*0.6} 52 ${50+r+wingW*0.5} 48" stroke="${e.a}" stroke-width="1.5" fill="none"/>
      <ellipse cx="50" cy="62" rx="${r}" ry="${r*1.1}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="66" rx="${r*0.55}" ry="${r*0.7}" fill="${e.s}" opacity="0.85"/>
      <path d="M${50-r*0.4} ${62-r} Q${50-3} ${62-r-8-t} 50 ${62-r*1.1} Q${50+3} ${62-r-6-t} ${50+r*0.4} ${62-r} Q${50+1} ${62-r-12-t*1.4} ${50-r*0.2} ${62-r-4-t*0.6} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M50 ${62-r-14-t} Q${50-2} ${62-r-18-t*1.2} ${50+2} ${62-r-16-t} Z" fill="${e.s}"/>
      ${blush(50-r*0.55, 50+r*0.55, 60, 3, e.a)}
      ${bigEyes(50-r*0.35, 50+r*0.35, 52, 4.5+t*0.3)}
      <path d="M${50-3} 58 L${50+3} 58 L50 ${58+5+t*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    `;
  }
  // 最終形: 巨大なフェニックス（炎の輪+巨翼+羽根の延長）
  const r = 17, wingW = 22;
  return `
    <circle cx="50" cy="62" r="46" fill="${e.a}" opacity="0.25"/>
    <circle cx="50" cy="62" r="40" fill="${e.p}" opacity="0.2"/>
    <path d="M50 ${62+r} Q${50-4} ${62+r+10} ${50-2} ${62+r+18} M50 ${62+r} Q${50+4} ${62+r+10} ${50+6} ${62+r+16} M50 ${62+r} Q${50-6} ${62+r+10} ${50-8} ${62+r+15} M50 ${62+r} Q50 ${62+r+12} ${50+1} ${62+r+22} M50 ${62+r} Q${50-9} ${62+r+8} ${50-12} ${62+r+12} M50 ${62+r} Q${50+9} ${62+r+8} ${50+12} ${62+r+12}" stroke="${e.a}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M50 ${62+r} L50 ${62+r+26}" stroke="${e.p}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M${50-r*0.5} 58 Q${50-r-wingW} ${24} ${50-r-wingW*1.2} 50 Q${50-r-wingW*0.4} 56 ${50-r*1.1} 64 L${50-r-wingW*0.2} 72 Q${50-r-wingW*0.6} 68 ${50-r*0.7} 64 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-r*0.6} 60 Q${50-r-wingW*0.7} 40 ${50-r-wingW*0.6} 36" stroke="${e.a}" stroke-width="1.8" fill="none"/>
    <path d="M${50-r*0.7} 56 Q${50-r-wingW*0.5} 30 ${50-r-wingW*0.3} 26" stroke="${e.a}" stroke-width="1.5" fill="none"/>
    <path d="M${50+r*0.5} 58 Q${50+r+wingW} ${24} ${50+r+wingW*1.2} 50 Q${50+r+wingW*0.4} 56 ${50+r*1.1} 64 L${50+r+wingW*0.2} 72 Q${50+r+wingW*0.6} 68 ${50+r*0.7} 64 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+r*0.6} 60 Q${50+r+wingW*0.7} 40 ${50+r+wingW*0.6} 36" stroke="${e.a}" stroke-width="1.8" fill="none"/>
    <path d="M${50+r*0.7} 56 Q${50+r+wingW*0.5} 30 ${50+r+wingW*0.3} 26" stroke="${e.a}" stroke-width="1.5" fill="none"/>
    <ellipse cx="50" cy="62" rx="${r}" ry="${r*1.1}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="66" rx="${r*0.55}" ry="${r*0.75}" fill="${e.s}" opacity="0.9"/>
    <path d="M${50-r*0.4} ${62-r} Q${50-4} ${62-r-12} 50 ${62-r*1.1} Q${50+4} ${62-r-10} ${50+r*0.4} ${62-r} Q${50+2} ${62-r-18} ${50-r*0.2} ${62-r-6} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M50 ${62-r-16} Q${50-3} ${62-r-22} ${50+3} ${62-r-20} Q50 ${62-r-26} ${50-2} ${62-r-22} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50-r*0.5} ${62-r-4} L${50-r*0.7} ${62-r-8}" stroke="${e.a}" stroke-width="2" stroke-linecap="round"/>
    <path d="M${50+r*0.5} ${62-r-4} L${50+r*0.7} ${62-r-8}" stroke="${e.a}" stroke-width="2" stroke-linecap="round"/>
    ${blush(50-r*0.55, 50+r*0.55, 60, 3.5, e.a)}
    ${bigEyes(50-r*0.35, 50+r*0.35, 52, 5)}
    <path d="M${50-3.5} 58 L${50+3.5} 58 L50 ${58+7} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
  `;
}

/* -------- 13. タートル (亀) -------- */
function drawTurtle(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さい子亀（甲羅シンプル）
    const t = stage - 4;
    const sw = 16 + t*1.6;
    const sh = 11 + t*1.2;
    return `
      <ellipse cx="${50-sw*0.7}" cy="${60+sh+1}" rx="${3+t*0.2}" ry="${2.5+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50+sw*0.7}" cy="${60+sh+1}" rx="${3+t*0.2}" ry="${2.5+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50-sw*0.85}" cy="${60+sh*0.3}" rx="${2.8+t*0.15}" ry="${3+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="50" cy="60" rx="${sw}" ry="${sh}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="${50-sw*0.25}" cy="${60-sh*0.5}" rx="${sw*0.25}" ry="${sh*0.2}" fill="white" opacity="0.4"/>
      <ellipse cx="${50+sw+2}" cy="${60+sh*0.4}" rx="${5+t*0.3}" ry="${4.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      ${bigEyes(50+sw+1, 50+sw+4, 60+sh*0.3-1, 2+t*0.15)}
      ${smile(50+sw+2, 60+sh*0.4+2, 1.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 六角模様の甲羅を持つ立派な亀
    const t = stage - 7;
    const sw = 22 + t*1.5;
    const sh = 16 + t*1;
    return `
      <ellipse cx="${50-sw*0.7}" cy="${60+sh+2}" rx="${4+t*0.3}" ry="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="${50+sw*0.7}" cy="${60+sh+2}" rx="${4+t*0.3}" ry="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="${50-sw*0.85}" cy="${60+sh*0.3}" rx="${3.5+t*0.2}" ry="${4+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
      <path d="M${50-sw} ${60+sh*0.1} L${50-sw-5-t*0.5} ${60+sh*0.3} L${50-sw-3} ${60+sh*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="50" cy="60" rx="${sw}" ry="${sh}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
      <path d="M${50-sw*0.5} ${60-sh*0.3} L${50-sw*0.2} ${60-sh*0.55} L${50+sw*0.2} ${60-sh*0.55} L${50+sw*0.5} ${60-sh*0.3} M${50-sw*0.5} ${60-sh*0.3} L${50-sw*0.55} ${60+sh*0.1} L${50-sw*0.2} ${60+sh*0.3} L${50+sw*0.2} ${60+sh*0.3} L${50+sw*0.55} ${60+sh*0.1} L${50+sw*0.5} ${60-sh*0.3} M${50-sw*0.2} ${60-sh*0.55} L${50-sw*0.2} ${60+sh*0.3} M${50+sw*0.2} ${60-sh*0.55} L${50+sw*0.2} ${60+sh*0.3} M50 ${60-sh*0.55} L50 ${60+sh*0.3}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.7"/>
      <ellipse cx="${50-sw*0.3}" cy="${60-sh*0.6}" rx="${sw*0.25}" ry="${sh*0.2}" fill="white" opacity="0.35"/>
      <ellipse cx="${50+sw+3}" cy="${60+sh*0.4}" rx="${7+t*0.4}" ry="${6+t*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
      ${bigEyes(50+sw+1, 50+sw+4.5, 60+sh*0.4-1, 2.5+t*0.2)}
      ${smile(50+sw+3, 60+sh*0.4+2, 2)}
    `;
  }
  // 最終形: 古代の亀（甲羅の上に木が生える）
  const sw = 24, sh = 18;
  return `
    <ellipse cx="${50-sw*0.7}" cy="${60+sh+2}" rx="5" ry="4" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <ellipse cx="${50+sw*0.7}" cy="${60+sh+2}" rx="5" ry="4" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <ellipse cx="${50-sw*0.85}" cy="${60+sh*0.3}" rx="4.5" ry="5" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-sw} ${60+sh*0.1} L${50-sw-8} ${60+sh*0.4} L${50-sw-4} ${60+sh*0.6} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <ellipse cx="50" cy="60" rx="${sw}" ry="${sh}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="2"/>
    <path d="M${50-sw*0.5} ${60-sh*0.3} L${50-sw*0.2} ${60-sh*0.55} L${50+sw*0.2} ${60-sh*0.55} L${50+sw*0.5} ${60-sh*0.3} M${50-sw*0.5} ${60-sh*0.3} L${50-sw*0.55} ${60+sh*0.1} L${50-sw*0.2} ${60+sh*0.3} L${50+sw*0.2} ${60+sh*0.3} L${50+sw*0.55} ${60+sh*0.1} L${50+sw*0.5} ${60-sh*0.3} M${50-sw*0.2} ${60-sh*0.55} L${50-sw*0.2} ${60+sh*0.3} M${50+sw*0.2} ${60-sh*0.55} L${50+sw*0.2} ${60+sh*0.3} M50 ${60-sh*0.55} L50 ${60+sh*0.3}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.7"/>
    <ellipse cx="${50-sw*0.3}" cy="${60-sh*0.6}" rx="${sw*0.25}" ry="${sh*0.2}" fill="white" opacity="0.35"/>
    <rect x="${50-2}" y="${60-sh-2}" width="4" height="14" fill="#8b5a3c" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="50" cy="${60-sh-8}" r="11" fill="#3ec46e" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50-7}" cy="${60-sh-4}" r="7" fill="#3ec46e" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50+7}" cy="${60-sh-4}" r="7" fill="#3ec46e" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50-5}" cy="${60-sh-10}" r="1.5" fill="#ff4d4d"/>
    <circle cx="${50+6}" cy="${60-sh-8}" r="1.5" fill="#ff4d4d"/>
    <circle cx="50" cy="${60-sh-4}" r="1.5" fill="#fff200"/>
    <ellipse cx="${50+sw+3}" cy="${60+sh*0.4}" rx="8" ry="7" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.6"/>
    <path d="M${50+sw+1} ${60+sh*0.4-7} L${50+sw} ${60+sh*0.4-10} L${50+sw+4} ${60+sh*0.4-8} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    ${bigEyes(50+sw+1, 50+sw+5, 60+sh*0.4-1, 3)}
    ${smile(50+sw+3, 60+sh*0.4+2.5, 2.2)}
  `;
}

/* -------- 14. クラゲ -------- */
function drawJellyfish(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さなクラゲ（触手3本）
    const t = stage - 4;
    const w = 14 + t*1.5, h = 11 + t*1.2;
    return `
      <path d="M${50-w*0.6} 58 Q${50-w*0.65} ${66+t} ${50-w*0.5} ${72+t*1.5}" stroke="${e.s}" stroke-width="${1.8+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M50 58 Q${50+1} ${68+t} ${50} ${76+t*1.5}" stroke="${e.a}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M${50+w*0.6} 58 Q${50+w*0.65} ${66+t} ${50+w*0.5} ${72+t*1.5}" stroke="${e.s}" stroke-width="${1.8+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M${50-w} 56 Q${50-w} ${56-h*1.3} 50 ${56-h*1.3} Q${50+w} ${56-h*1.3} ${50+w} 56 Q${50+w*0.5} 60 ${50-w*0.5} 60 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4" opacity="0.92"/>
      <ellipse cx="${50-w*0.3}" cy="${50-h*0.5}" rx="${w*0.3}" ry="${h*0.45}" fill="white" opacity="0.4"/>
      ${bigEyes(46, 54, 50-h*0.2, 2.5+t*0.2)}
      ${smile(50, 50+h*0.05, 2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 大きなクラゲ（触手5本+発光）
    const t = stage - 7;
    const w = 22 + t*1.5, h = 16 + t;
    return `
      <path d="M${50-w*0.7} 56 Q${50-w*0.85} ${66+t} ${50-w*0.6} ${72+t*1.5} Q${50-w*0.45} ${78+t*1.8} ${50-w*0.7} ${82+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M${50-w*0.35} 58 Q${50-w*0.5} ${68+t} ${50-w*0.2} ${76+t*1.5} Q${50-w*0.4} ${82+t*1.8} ${50-w*0.15} ${88+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M50 58 Q${50+2} ${70+t} ${50-1} ${78+t*1.5} Q${50+2} ${84+t*1.8} 50 ${90+t*2}" stroke="${e.a}" stroke-width="${2.4+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M${50+w*0.35} 58 Q${50+w*0.5} ${68+t} ${50+w*0.2} ${76+t*1.5} Q${50+w*0.4} ${82+t*1.8} ${50+w*0.15} ${88+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M${50+w*0.7} 56 Q${50+w*0.85} ${66+t} ${50+w*0.6} ${72+t*1.5} Q${50+w*0.45} ${78+t*1.8} ${50+w*0.7} ${82+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
      <path d="M${50-w} 56 Q${50-w} ${56-h*1.4} 50 ${56-h*1.4} Q${50+w} ${56-h*1.4} ${50+w} 56 Q${50+w*0.7} 60 ${50+w*0.4} 56 Q${50+w*0.1} 60 ${50-w*0.2} 56 Q${50-w*0.5} 60 ${50-w*0.8} 56 Q${50-w*0.9} 58 ${50-w} 56 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6" opacity="0.92"/>
      <ellipse cx="${50-w*0.3}" cy="${50-h*0.6}" rx="${w*0.3}" ry="${h*0.5}" fill="white" opacity="0.4"/>
      <circle cx="50" cy="${50-h*0.4}" r="${4+t*0.5}" fill="${e.a}" opacity="0.55"/>
      ${bigEyes(46, 54, 50-h*0.3, 3+t*0.25)}
      ${smile(50, 50-h*0.05, 3)}
    `;
  }
  // 最終形: 光るクラゲ王（王冠+大量の触手+発光リング）
  const w = 26, h = 18;
  return `
    <circle cx="50" cy="55" r="38" fill="${e.a}" opacity="0.2"/>
    <path d="M${50-w*0.8} 56 Q${50-w*0.95} 72 ${50-w*0.7} 86 Q${50-w*0.55} 92 ${50-w*0.8} 96" stroke="${e.s}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M${50-w*0.5} 58 Q${50-w*0.6} 72 ${50-w*0.4} 88 Q${50-w*0.55} 94 ${50-w*0.35} 96" stroke="${e.s}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M${50-w*0.2} 60 Q${50-w*0.3} 76 ${50-w*0.1} 90" stroke="${e.a}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <path d="M${50+w*0.05} 60 Q${50+w*0.15} 80 ${50+w*0.05} 94" stroke="${e.a}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <path d="M${50+w*0.3} 58 Q${50+w*0.4} 76 ${50+w*0.25} 92" stroke="${e.s}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M${50+w*0.5} 58 Q${50+w*0.6} 70 ${50+w*0.45} 86 Q${50+w*0.55} 92 ${50+w*0.4} 96" stroke="${e.s}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M${50+w*0.8} 56 Q${50+w*0.95} 72 ${50+w*0.75} 86 Q${50+w*0.6} 92 ${50+w*0.85} 96" stroke="${e.s}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M${50-w} 56 Q${50-w} ${56-h*1.5} 50 ${56-h*1.5} Q${50+w} ${56-h*1.5} ${50+w} 56 Q${50+w*0.7} 60 ${50+w*0.4} 56 Q${50+w*0.1} 60 ${50-w*0.2} 56 Q${50-w*0.5} 60 ${50-w*0.8} 56 Q${50-w*0.9} 58 ${50-w} 56 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8" opacity="0.94"/>
    <ellipse cx="${50-w*0.3}" cy="${50-h*0.7}" rx="${w*0.3}" ry="${h*0.55}" fill="white" opacity="0.45"/>
    <circle cx="50" cy="${50-h*0.4}" r="6" fill="${e.a}" opacity="0.7"/>
    <circle cx="50" cy="${50-h*0.4}" r="3" fill="white" opacity="0.7"/>
    <circle cx="${50-w*0.55}" cy="${50-h*0.3}" r="2" fill="${e.a}" opacity="0.7"/>
    <circle cx="${50+w*0.55}" cy="${50-h*0.3}" r="2" fill="${e.a}" opacity="0.7"/>
    <path d="M${50-7} ${56-h*1.5-2} L${50-5} ${56-h*1.5-7} L${50-3} ${56-h*1.5-3} L50 ${56-h*1.5-9} L${50+3} ${56-h*1.5-3} L${50+5} ${56-h*1.5-7} L${50+7} ${56-h*1.5-2} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/>
    <circle cx="50" cy="${56-h*1.5-5}" r="1.5" fill="#ff4d4d"/>
    ${bigEyes(46, 54, 50-h*0.35, 4)}
    ${smile(50, 50-h*0.05, 3.5)}
  `;
}

/* -------- 15. トカゲ -------- */
function drawLizard(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さなヤモリ
    const t = stage - 4;
    const w = 11 + t*1.2, h = 8 + t*0.8;
    return `
      <path d="M${50-w} 62 Q${50-w-6-t} ${64+t*0.5} ${50-w-10-t} ${58+t*0.3}" stroke="url(#${pid})" stroke-width="${3.5+t*0.3}" fill="none" stroke-linecap="round"/>
      <ellipse cx="${50-w*0.5}" cy="${62+h+1}" rx="2.5" ry="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
      <ellipse cx="${50+w*0.4}" cy="${62+h+1}" rx="2.5" ry="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
      <ellipse cx="50" cy="62" rx="${w}" ry="${h}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="${50+w+1}" cy="60" rx="${6+t*0.3}" ry="${5+t*0.3}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      ${bigEyes(50+w-1, 50+w+3, 58, 2.5+t*0.15)}
      ${smile(50+w+1, 62, 1.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: トカゲ（フリル+トゲ+4本足+長い舌）
    const t = stage - 7;
    const w = 14 + t*1.4, h = 10 + t*0.8;
    return `
      <path d="M${50-w} 62 Q${50-w-8-t} ${64+t} ${50-w-12-t*1.2} ${56+t*0.5} Q${50-w-14-t*1.4} ${50-t} ${50-w-8-t*0.6} ${48-t}" stroke="url(#${pid})" stroke-width="${5+t*0.4}" fill="none" stroke-linecap="round"/>
      <ellipse cx="${50-w*0.6}" cy="${62+h+1}" rx="3" ry="${3+t*0.2}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50+w*0.5}" cy="${62+h+1}" rx="3" ry="${3+t*0.2}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50-w*0.6}" cy="${62-h-1}" rx="3" ry="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50+w*0.5}" cy="${62-h-1}" rx="3" ry="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="50" cy="62" rx="${w}" ry="${h}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <path d="M${50-w*0.5} ${62-h} L${50-w*0.45} ${62-h-4-t*0.3} L${50-w*0.3} ${62-h+1} Z M${50-w*0.15} ${62-h} L${50-w*0.1} ${62-h-5-t*0.3} L${50+w*0.05} ${62-h+1} Z M${50+w*0.2} ${62-h} L${50+w*0.25} ${62-h-5-t*0.3} L${50+w*0.4} ${62-h+1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
      <ellipse cx="${50+w+2}" cy="60" rx="${8+t*0.5}" ry="${7+t*0.4}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <path d="M${50+w-2} ${60-7} Q${50+w+2} ${60-9} ${50+w+6} ${60-3} L${50+w+6} ${60-1}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8" opacity="0.7"/>
      <path d="M${50+w-2} ${60+7} Q${50+w+2} ${60+9} ${50+w+6} ${60+3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8" opacity="0.7"/>
      <path d="M${50+w+8+t*0.5} 60 L${50+w+14+t} ${58+t*0.4} L${50+w+14+t} ${62-t*0.4} Z" fill="#ff4d80" stroke="#3a2a2a" stroke-width="0.6"/>
      <path d="M${50+w+14+t} 60 L${50+w+18+t*1.2} ${58+t*0.4} M${50+w+14+t} 60 L${50+w+18+t*1.2} ${62-t*0.4}" stroke="#ff4d80" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      ${bigEyes(50+w, 50+w+4, 58, 3+t*0.2)}
    `;
  }
  // 最終形: 翼の生えたドレイク（小型ドラゴン）
  const w = 16, h = 11;
  return `
    <path d="M${50-w} 62 Q${50-w-12} ${66} ${50-w-16} ${56} Q${50-w-20} ${44} ${50-w-12} ${42} Q${50-w-8} ${48} ${50-w-10} ${56}" stroke="url(#${pid})" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M${50-w-12} 40 L${50-w-15} 36 L${50-w-12} 44 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
    <ellipse cx="${50-w*0.6}" cy="${62+h+2}" rx="3.5" ry="3" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50+w*0.5}" cy="${62+h+2}" rx="3.5" ry="3" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50-w*0.6}" cy="${62-h-2}" rx="3.5" ry="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50+w*0.5}" cy="${62-h-2}" rx="3.5" ry="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-w*0.2} ${62-h-2} Q${50-w*0.5} ${62-h-14} ${50-w-4} ${62-h-10} Q${50-w*0.5} ${62-h-6} ${50-w*0.1} ${62-h-1} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+w*0.1} ${62-h-2} Q${50+w*0.4} ${62-h-14} ${50+w+4} ${62-h-10} Q${50+w*0.4} ${62-h-6} ${50+w*0.05} ${62-h-1} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
    <ellipse cx="50" cy="62" rx="${w}" ry="${h}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <path d="M${50-w*0.5} ${62-h} L${50-w*0.45} ${62-h-7} L${50-w*0.3} ${62-h+1} Z M${50-w*0.15} ${62-h} L${50-w*0.1} ${62-h-9} L${50+w*0.05} ${62-h+1} Z M${50+w*0.2} ${62-h} L${50+w*0.25} ${62-h-9} L${50+w*0.4} ${62-h+1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.9"/>
    <ellipse cx="${50+w+3}" cy="60" rx="9" ry="8" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <path d="M${50+w-1} ${60-8} L${50+w-3} ${60-13} L${50+w+1} ${60-9} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.9"/>
    <path d="M${50+w+6} ${60-8} L${50+w+8} ${60-13} L${50+w+4} ${60-9} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.9"/>
    <path d="M${50+w+10} 60 L${50+w+16} ${58} L${50+w+16} ${62} Z" fill="#ff4d80" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M${50+w+16} 60 L${50+w+20} ${58} M${50+w+16} 60 L${50+w+20} ${62}" stroke="#ff4d80" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    ${bigEyes(50+w+1, 50+w+5, 58, 3.5)}
    <path d="M${50+w-2} 64 L${50+w-1} 66 L${50+w+1} 64 Z" fill="white" stroke="#3a2a2a" stroke-width="0.4"/>
  `;
}

/* -------- 16. クラブ (カニ) -------- */
function drawCrab(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さいカニ（ハサミちっちゃい）
    const t = stage - 4;
    const w = 13 + t*1.5, h = 9 + t*0.8;
    return `
      <path d="M${50-w*0.7} ${62+h-1} L${50-w-2} ${62+h+3} M${50-w*0.7} ${62+h-3} L${50-w-3} ${62+h-1}" stroke="#3a2a2a" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M${50+w*0.7} ${62+h-1} L${50+w+2} ${62+h+3} M${50+w*0.7} ${62+h-3} L${50+w+3} ${62+h-1}" stroke="#3a2a2a" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="${50-w-4}" cy="${62-h-1}" r="${3+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50+w+4}" cy="${62-h-1}" r="${3+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="50" cy="62" rx="${w}" ry="${h}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <line x1="${50-3}" y1="${62-h*0.5}" x2="${50-3}" y2="${62-h-2}" stroke="#3a2a2a" stroke-width="1.2"/>
      <line x1="${50+3}" y1="${62-h*0.5}" x2="${50+3}" y2="${62-h-2}" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50-3}" cy="${62-h-2}" r="2" fill="white" stroke="#3a2a2a" stroke-width="0.9"/>
      <circle cx="${50+3}" cy="${62-h-2}" r="2" fill="white" stroke="#3a2a2a" stroke-width="0.9"/>
      <circle cx="${50-3}" cy="${62-h-2}" r="1" fill="#222"/>
      <circle cx="${50+3}" cy="${62-h-2}" r="1" fill="#222"/>
      ${smile(50, 62+h*0.3, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 大きなハサミ+6本足のカニ
    const t = stage - 7;
    const w = 18 + t*1.5, h = 11 + t*0.8;
    return `
      <path d="M${50-w*0.7} ${62+h-2} L${50-w-3} ${62+h+4+t*0.3}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M${50-w*0.3} ${62+h-1} L${50-w*0.3-3} ${62+h+6+t*0.4}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M${50-w*0.7} ${62+h-4} L${50-w-5} ${62+h-1+t*0.2}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M${50+w*0.7} ${62+h-2} L${50+w+3} ${62+h+4+t*0.3}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M${50+w*0.3} ${62+h-1} L${50+w*0.3+3} ${62+h+6+t*0.4}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M${50+w*0.7} ${62+h-4} L${50+w+5} ${62+h-1+t*0.2}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M${50-w-4} ${62-h-2} Q${50-w-10-t} ${62-h-8-t} ${50-w-14-t*1.2} ${62-h-4-t*0.4}" stroke="url(#${pid})" stroke-width="${4+t*0.3}" fill="none" stroke-linecap="round"/>
      <path d="M${50-w-14-t*1.2} ${62-h-4-t*0.4} L${50-w-22-t*1.5} ${62-h-8-t*0.6} L${50-w-18-t*1.4} ${62-h+2-t*0.2} L${50-w-14-t*1.2} ${62-h-4-t*0.4} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <path d="M${50-w-22-t*1.5} ${62-h-8-t*0.6} L${50-w-18-t*1.4} ${62-h-5-t*0.4}" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>
      <path d="M${50+w+4} ${62-h-2} Q${50+w+10+t} ${62-h-8-t} ${50+w+14+t*1.2} ${62-h-4-t*0.4}" stroke="url(#${pid})" stroke-width="${4+t*0.3}" fill="none" stroke-linecap="round"/>
      <path d="M${50+w+14+t*1.2} ${62-h-4-t*0.4} L${50+w+22+t*1.5} ${62-h-8-t*0.6} L${50+w+18+t*1.4} ${62-h+2-t*0.2} L${50+w+14+t*1.2} ${62-h-4-t*0.4} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <path d="M${50+w+22+t*1.5} ${62-h-8-t*0.6} L${50+w+18+t*1.4} ${62-h-5-t*0.4}" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>
      <ellipse cx="50" cy="62" rx="${w}" ry="${h}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <path d="M${50-w} 62 Q50 ${62+h*0.3} ${50+w} 62" stroke="${e.s}" stroke-width="1.5" fill="none" opacity="0.7"/>
      <line x1="${50-4}" y1="${62-h*0.6}" x2="${50-4}" y2="${62-h-3-t*0.4}" stroke="#3a2a2a" stroke-width="1.4"/>
      <line x1="${50+4}" y1="${62-h*0.6}" x2="${50+4}" y2="${62-h-3-t*0.4}" stroke="#3a2a2a" stroke-width="1.4"/>
      <circle cx="${50-4}" cy="${62-h-3-t*0.4}" r="${3+t*0.15}" fill="white" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50+4}" cy="${62-h-3-t*0.4}" r="${3+t*0.15}" fill="white" stroke="#3a2a2a" stroke-width="1.2"/>
      <circle cx="${50-4}" cy="${62-h-3-t*0.4}" r="${1.5+t*0.1}" fill="#222"/>
      <circle cx="${50+4}" cy="${62-h-3-t*0.4}" r="${1.5+t*0.1}" fill="#222"/>
      <path d="M${50-4} ${62+h*0.2} Q50 ${62+h*0.45} ${50+4} ${62+h*0.2}" stroke="#3a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    `;
  }
  // 最終形: 王冠付きキングクラブ
  const w = 22, h = 13;
  return `
    <path d="M${50-w*0.75} ${62+h-2} L${50-w-4} ${62+h+8}" stroke="#3a2a2a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${50-w*0.4} ${62+h-1} L${50-w*0.4-4} ${62+h+10}" stroke="#3a2a2a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${50-w*0.1} ${62+h-1} L${50-w*0.15} ${62+h+11}" stroke="#3a2a2a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${50+w*0.1} ${62+h-1} L${50+w*0.15} ${62+h+11}" stroke="#3a2a2a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${50+w*0.4} ${62+h-1} L${50+w*0.4+4} ${62+h+10}" stroke="#3a2a2a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${50+w*0.75} ${62+h-2} L${50+w+4} ${62+h+8}" stroke="#3a2a2a" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M${50-w-4} ${62-h-2} Q${50-w-12} ${62-h-12} ${50-w-18} ${62-h-6}" stroke="url(#${pid})" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    <path d="M${50-w-18} ${62-h-6} L${50-w-30} ${62-h-12} L${50-w-24} ${62-h+4} L${50-w-18} ${62-h-6} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <path d="M${50-w-30} ${62-h-12} L${50-w-24} ${62-h-7}" stroke="#3a2a2a" stroke-width="1.3" fill="none"/>
    <path d="M${50-w-26} ${62-h-3} L${50-w-22} ${62-h-1} M${50-w-28} ${62-h+1} L${50-w-22} ${62-h+1}" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M${50+w+4} ${62-h-2} Q${50+w+12} ${62-h-12} ${50+w+18} ${62-h-6}" stroke="url(#${pid})" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    <path d="M${50+w+18} ${62-h-6} L${50+w+30} ${62-h-12} L${50+w+24} ${62-h+4} L${50+w+18} ${62-h-6} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <path d="M${50+w+30} ${62-h-12} L${50+w+24} ${62-h-7}" stroke="#3a2a2a" stroke-width="1.3" fill="none"/>
    <ellipse cx="50" cy="62" rx="${w}" ry="${h}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <path d="M${50-w} 62 Q50 ${62+h*0.35} ${50+w} 62" stroke="${e.s}" stroke-width="2" fill="none" opacity="0.75"/>
    <line x1="${50-5}" y1="${62-h*0.65}" x2="${50-5}" y2="${62-h-5}" stroke="#3a2a2a" stroke-width="1.6"/>
    <line x1="${50+5}" y1="${62-h*0.65}" x2="${50+5}" y2="${62-h-5}" stroke="#3a2a2a" stroke-width="1.6"/>
    <circle cx="${50-5}" cy="${62-h-5}" r="4" fill="white" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50+5}" cy="${62-h-5}" r="4" fill="white" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50-5}" cy="${62-h-5}" r="2" fill="#222"/>
    <circle cx="${50+5}" cy="${62-h-5}" r="2" fill="#222"/>
    <path d="M${50-9} ${62-h-9} L${50-7} ${62-h-15} L${50-3} ${62-h-11} L50 ${62-h-17} L${50+3} ${62-h-11} L${50+7} ${62-h-15} L${50+9} ${62-h-9} L${50+9} ${62-h-7} L${50-9} ${62-h-7} Z" fill="#fff200" stroke="#ff9900" stroke-width="1"/>
    <circle cx="50" cy="${62-h-13}" r="1.5" fill="#ff4d4d"/>
    <path d="M${50-5} ${62+h*0.25} Q50 ${62+h*0.55} ${50+5} ${62+h*0.25}" stroke="#3a2a2a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  `;
}

/* -------- 17. キノコ -------- */
function drawMushroom(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 小さなキノコの芽（白いドットなし）
    const t = stage - 4;
    const cw = 12 + t*1.5, ch = 9 + t*1;
    const sw = 6 + t*0.5, sh = 10 + t*0.8;
    return `
      <rect x="${50-sw}" y="${62}" width="${sw*2}" height="${sh}" rx="${sw*0.6}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.4"/>
      <path d="M${50-cw} 62 Q${50-cw} ${62-ch*1.4} 50 ${62-ch*1.4} Q${50+cw} ${62-ch*1.4} ${50+cw} 62 Q${50+cw*0.6} ${62+ch*0.1} 50 62 Q${50-cw*0.6} ${62+ch*0.1} ${50-cw} 62 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      ${t >= 1 ? `<circle cx="${50-cw*0.4}" cy="${62-ch*0.6}" r="${2+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
                  <circle cx="${50+cw*0.4}" cy="${62-ch*0.5}" r="${1.8+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>` : ""}
      <path d="M${50-cw} 62 Q50 ${62+ch*0.15} ${50+cw} 62" stroke="#3a2a2a" stroke-width="1.1" fill="none"/>
      ${bigEyes(50-sw*0.45, 50+sw*0.45, 62+sh*0.5, 2+t*0.15)}
      ${blush(50-sw*0.55, 50+sw*0.55, 62+sh*0.5+3, 2, "#ff8fbf")}
      ${smile(50, 62+sh*0.5+3.5, 2)}
    `;
  }
  if (stage <= 9) {
    // 進化形: しっかりしたキノコ（水玉、手、足元の草）
    const t = stage - 7;
    const cw = 18 + t*1.5, ch = 13 + t*1;
    const sw = 9 + t*0.5, sh = 14 + t*0.8;
    const stemCy = 62 + sh*0.5;
    return `
      <path d="M${50-sw-4} ${62+sh} L${50-sw-6} ${62+sh+3} M${50+sw+4} ${62+sh} L${50+sw+6} ${62+sh+3}" stroke="${e.p}" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="${50-sw}" y="62" width="${sw*2}" height="${sh}" rx="${sw*0.6}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.6"/>
      <circle cx="${50-sw-3}" cy="${stemCy+2}" r="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
      <circle cx="${50+sw+3}" cy="${stemCy+2}" r="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
      <path d="M${50-cw} 62 Q${50-cw} ${62-ch*1.4} 50 ${62-ch*1.4} Q${50+cw} ${62-ch*1.4} ${50+cw} 62 Q${50+cw*0.6} ${62+ch*0.1} 50 62 Q${50-cw*0.6} ${62+ch*0.1} ${50-cw} 62 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <circle cx="${50-cw*0.4}" cy="${62-ch*0.6}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
      <circle cx="${50+cw*0.45}" cy="${62-ch*0.5}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
      <circle cx="50" cy="${62-ch*0.95}" r="${2.5+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
      <circle cx="${50-cw*0.15}" cy="${62-ch*0.3}" r="${2+t*0.1}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
      <path d="M${50-cw} 62 Q50 ${62+ch*0.15} ${50+cw} 62" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>
      ${bigEyes(50-sw*0.45, 50+sw*0.45, stemCy, 2.5+t*0.2)}
      ${blush(50-sw*0.55, 50+sw*0.55, stemCy+3, 2.5, "#ff8fbf")}
      ${smile(50, stemCy+4, 2.2)}
    `;
  }
  // 最終形: 巨大樹キノコ（3つ重ねの傘 + 大きな茎 + 木）
  const sw = 11, sh = 22;
  return `
    <path d="M${50-sw-5} ${62+sh+2} L${50-sw-8} ${62+sh+5} M${50+sw+5} ${62+sh+2} L${50+sw+8} ${62+sh+5} M${50-sw-2} ${62+sh+2} L${50-sw-3} ${62+sh+6}" stroke="${e.p}" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cx="50" cy="${62+sh+4}" rx="20" ry="3" fill="#3a2a2a" opacity="0.2"/>
    <rect x="${50-sw}" y="62" width="${sw*2}" height="${sh}" rx="${sw*0.6}" fill="${e.s}" stroke="#3a2a2a" stroke-width="2"/>
    <path d="M${50-sw+2} 70 Q50 73 ${50+sw-2} 70" stroke="${e.p}" stroke-width="1" fill="none" opacity="0.7"/>
    <circle cx="${50-sw-4}" cy="${62+sh*0.5+2}" r="3.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="${50+sw+4}" cy="${62+sh*0.5+2}" r="3.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50-22} 62 Q${50-22} ${62-12} 50 ${62-12} Q${50+22} ${62-12} ${50+22} 62 Q${50+13} ${64} 50 62 Q${50-13} 64 ${50-22} 62 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <circle cx="${50-9}" cy="${62-7}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${50+10}" cy="${62-6}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M${50-15} 50 Q${50-15} ${50-10} 50 ${50-10} Q${50+15} ${50-10} ${50+15} 50 Q${50+9} 52 50 50 Q${50-9} 52 ${50-15} 50 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <circle cx="${50-6}" cy="${50-5}" r="2.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${50+7}" cy="${50-6}" r="2.5" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
    <path d="M${50-10} 38 Q${50-10} 30 50 30 Q${50+10} 30 ${50+10} 38 Q${50+6} 40 50 38 Q${50-6} 40 ${50-10} 38 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
    <circle cx="50" cy="33" r="2" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
    <path d="M${50-3} 28 L50 22 L${50+3} 28 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="0.6"/>
    ${bigEyes(50-sw*0.45, 50+sw*0.45, 62+sh*0.55, 3)}
    ${blush(50-sw*0.55, 50+sw*0.55, 62+sh*0.55+4, 3, "#ff8fbf")}
    ${smile(50, 62+sh*0.55+5, 2.5)}
  `;
}

/* -------- 18. フラワー (花) -------- */
function drawFlora(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: つぼみ・新芽（葉だけ）
    const t = stage - 4;
    const r = 11 + t*1.5;
    const lH = 6 + t*2;
    return `
      <ellipse cx="50" cy="66" rx="${r}" ry="${r*1.05}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="50" cy="68" rx="${r*0.55}" ry="${r*0.65}" fill="${e.s}" opacity="0.85"/>
      <path d="M50 ${66-r} Q44 ${66-r-lH*1.3} 38 ${66-r-lH*0.3} Q44 ${66-r-lH*0.6} 50 ${66-r*0.85} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M50 ${66-r} Q56 ${66-r-lH*1.3} 62 ${66-r-lH*0.3} Q56 ${66-r-lH*0.6} 50 ${66-r*0.85} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M50 ${66-r-lH*0.3} L50 ${66-r}" stroke="#3a2a2a" stroke-width="1"/>
      ${blush(50-r*0.55, 50+r*0.55, 68, 3, e.a)}
      ${bigEyes(50-r*0.35, 50+r*0.35, 64, 3+t*0.2)}
      ${smile(50, 70, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 花咲く（頭に花、ツル）
    const t = stage - 7;
    const r = 17 + t*1.5;
    const lH = 11 + t*1.5;
    return `
      <path d="M${50-r*0.85} 66 Q${50-r-8} 72 ${50-r-6} 80 Q${50-r-4} 82 ${50-r-8} 84" stroke="${e.s}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M${50+r*0.85} 66 Q${50+r+8} 72 ${50+r+6} 80 Q${50+r+4} 82 ${50+r+8} 84" stroke="${e.s}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="64" rx="${r}" ry="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="68" rx="${r*0.6}" ry="${r*0.7}" fill="${e.s}" opacity="0.85"/>
      <path d="M50 ${64-r} Q44 ${64-r-lH*1.3} 38 ${64-r-lH*0.3} Q44 ${64-r-lH*0.6} 50 ${64-r*0.9} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <path d="M50 ${64-r} Q56 ${64-r-lH*1.3} 62 ${64-r-lH*0.3} Q56 ${64-r-lH*0.6} 50 ${64-r*0.9} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
      <g transform="translate(50 ${64-r-lH*0.85})">
        <circle cx="0" cy="-${lH*0.4}" r="3.5" fill="${e.a}"/>
        <circle cx="${lH*0.38}" cy="-${lH*0.15}" r="3.5" fill="${e.a}"/>
        <circle cx="-${lH*0.38}" cy="-${lH*0.15}" r="3.5" fill="${e.a}"/>
        <circle cx="${lH*0.25}" cy="${lH*0.3}" r="3.5" fill="${e.a}"/>
        <circle cx="-${lH*0.25}" cy="${lH*0.3}" r="3.5" fill="${e.a}"/>
        <circle cx="0" cy="0" r="${2+t*0.4}" fill="${e.p}"/>
      </g>
      ${blush(50-r*0.55, 50+r*0.55, 66, 4, e.a)}
      ${bigEyes(50-r*0.4, 50+r*0.4, 60, 4.5+t*0.25)}
      ${smile(50, 68, 3.5)}
    `;
  }
  // 最終形: 花の女神（花冠+巨大な花の頭飾り+花のドレス）
  const r = 20;
  return `
    <circle cx="50" cy="64" r="44" fill="${e.a}" opacity="0.15"/>
    <path d="M${50-r*0.7} 80 Q${50-r-10} 86 ${50-r-12} 96" stroke="${e.s}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M${50+r*0.7} 80 Q${50+r+10} 86 ${50+r+12} 96" stroke="${e.s}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M${50-r-7} 90 Q${50-r-14} 86 ${50-r-15} 96 Q${50-r-8} 96 ${50-r-7} 90Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50+r+7} 90 Q${50+r+14} 86 ${50+r+15} 96 Q${50+r+8} 96 ${50+r+7} 90Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <ellipse cx="50" cy="64" rx="${r}" ry="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="68" rx="${r*0.65}" ry="${r*0.75}" fill="${e.s}" opacity="0.9"/>
    <circle cx="${50-r*0.6}" cy="${64+r*0.4}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${50+r*0.6}" cy="${64+r*0.4}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${50-r*0.5}" cy="${64+r*0.7}" r="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${50+r*0.5}" cy="${64+r*0.7}" r="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5"/>
    <g transform="translate(50 ${64-r-18})">
      <circle cx="-12" cy="0" r="9" fill="${e.a}"/>
      <circle cx="12" cy="0" r="9" fill="${e.a}"/>
      <circle cx="-6" cy="-12" r="9" fill="${e.a}"/>
      <circle cx="6" cy="-12" r="9" fill="${e.a}"/>
      <circle cx="0" cy="-8" r="9" fill="${e.a}"/>
      <circle cx="-7" cy="7" r="9" fill="${e.a}"/>
      <circle cx="7" cy="7" r="9" fill="${e.a}"/>
      <circle cx="0" cy="0" r="5" fill="${e.p}"/>
      <circle cx="0" cy="0" r="2" fill="#fff200"/>
    </g>
    <path d="M${50-r*0.7} ${64-r*0.7} Q${50-r-2} ${64-r*0.4} ${50-r-4} ${64-r*0.1}" stroke="${e.s}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M${50+r*0.7} ${64-r*0.7} Q${50+r+2} ${64-r*0.4} ${50+r+4} ${64-r*0.1}" stroke="${e.s}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="${50-r-4}" cy="${64-r*0.1}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${50+r+4}" cy="${64-r*0.1}" r="3" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    ${blush(50-r*0.55, 50+r*0.55, 66, 4, e.a)}
    ${bigEyes(50-r*0.4, 50+r*0.4, 60, 5)}
    ${smile(50, 68, 4)}
  `;
}

/* -------- 19. ライオン -------- */
function drawLion(e, stage, pid) {
  if (stage <= 6) {
    // ベビー: 子ライオン（たてがみなし）
    const t = stage - 4;
    const r = 13 + t*1.5;
    return `
      <circle cx="50" cy="62" r="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
      <ellipse cx="50" cy="${62+r*0.3}" rx="${r*0.55}" ry="${r*0.4}" fill="${e.s}"/>
      <ellipse cx="${50-r*0.6}" cy="${62-r*0.65}" rx="${3+t*0.2}" ry="${3.5+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50+r*0.6}" cy="${62-r*0.65}" rx="${3+t*0.2}" ry="${3.5+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
      <ellipse cx="${50-r*0.6}" cy="${62-r*0.6}" rx="${1.5+t*0.1}" ry="${2+t*0.1}" fill="${e.s}"/>
      <ellipse cx="${50+r*0.6}" cy="${62-r*0.6}" rx="${1.5+t*0.1}" ry="${2+t*0.1}" fill="${e.s}"/>
      ${blush(50-r*0.5, 50+r*0.5, 62+r*0.05, 3, "#ff8fbf")}
      ${bigEyes(50-r*0.3, 50+r*0.3, 60, 3.5+t*0.2)}
      <path d="M${50-2.5} ${62+r*0.18} L${50+2.5} ${62+r*0.18} L50 ${62+r*0.32} Z" fill="#3a2a2a"/>
      ${smile(50, 62+r*0.45, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 若いライオン（たてがみあり）
    const t = stage - 7;
    const r = 16 + t*1.3;
    let mane = "<g>";
    for (let i = 0; i < 12; i++) {
      const ang = (i / 12) * Math.PI * 2;
      const iR = r * 0.9, oR = r * 1.35;
      const x1 = 50 + Math.cos(ang) * iR;
      const y1 = 60 + Math.sin(ang) * iR;
      const x2 = 50 + Math.cos(ang + 0.1) * oR;
      const y2 = 60 + Math.sin(ang + 0.1) * oR;
      const x3 = 50 + Math.cos(ang + 0.26) * iR;
      const y3 = 60 + Math.sin(ang + 0.26) * iR;
      mane += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>`;
    }
    mane += "</g>";
    return `
      <path d="M${50+r+1} ${60+r*0.6} Q${50+r+12} ${60+r*0.2} ${50+r+14} ${60-r*0.2}" stroke="${e.a}" stroke-width="${3.5+t*0.2}" fill="none" stroke-linecap="round"/>
      <circle cx="${50+r+14}" cy="${60-r*0.2}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>
      ${mane}
      <circle cx="50" cy="60" r="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>
      <ellipse cx="50" cy="${60+r*0.3}" rx="${r*0.55}" ry="${r*0.4}" fill="${e.s}"/>
      <ellipse cx="${50-r*0.65}" cy="${60-r*0.6}" rx="${4+t*0.2}" ry="${5+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="${50+r*0.65}" cy="${60-r*0.6}" rx="${4+t*0.2}" ry="${5+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
      <ellipse cx="${50-r*0.65}" cy="${60-r*0.55}" rx="${2+t*0.1}" ry="${3+t*0.1}" fill="${e.s}"/>
      <ellipse cx="${50+r*0.65}" cy="${60-r*0.55}" rx="${2+t*0.1}" ry="${3+t*0.1}" fill="${e.s}"/>
      ${blush(50-r*0.5, 50+r*0.5, 60+r*0.05, 3.5, "#ff8fbf")}
      ${bigEyes(50-r*0.32, 50+r*0.32, 58, 4+t*0.25)}
      <path d="M${50-3} ${60+r*0.15} L${50+3} ${60+r*0.15} L50 ${60+r*0.32} Z" fill="#3a2a2a"/>
      <path d="M50 ${60+r*0.32} L50 ${60+r*0.5} M50 ${60+r*0.5} Q${50-3} ${60+r*0.55} ${50-5} ${60+r*0.45} M50 ${60+r*0.5} Q${50+3} ${60+r*0.55} ${50+5} ${60+r*0.45}" stroke="#3a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <circle cx="${50-r*0.4}" cy="${60+r*0.3}" r="0.7" fill="#3a2a2a"/>
      <circle cx="${50-r*0.35}" cy="${60+r*0.42}" r="0.7" fill="#3a2a2a"/>
      <circle cx="${50+r*0.4}" cy="${60+r*0.3}" r="0.7" fill="#3a2a2a"/>
      <circle cx="${50+r*0.35}" cy="${60+r*0.42}" r="0.7" fill="#3a2a2a"/>
    `;
  }
  // 最終形: ライオン王（王冠+二重のたてがみ+牙）
  const r = 18;
  let outerMane = "<g>";
  for (let i = 0; i < 14; i++) {
    const ang = (i / 14) * Math.PI * 2;
    const iR = r * 1.0, oR = r * 1.7;
    const x1 = 50 + Math.cos(ang) * iR;
    const y1 = 60 + Math.sin(ang) * iR;
    const x2 = 50 + Math.cos(ang + 0.1) * oR;
    const y2 = 60 + Math.sin(ang + 0.1) * oR;
    const x3 = 50 + Math.cos(ang + 0.22) * iR;
    const y3 = 60 + Math.sin(ang + 0.22) * iR;
    outerMane += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="0.8"/>`;
  }
  outerMane += "</g>";
  let innerMane = "<g>";
  for (let i = 0; i < 14; i++) {
    const ang = (i / 14) * Math.PI * 2 + 0.11;
    const iR = r * 0.85, oR = r * 1.35;
    const x1 = 50 + Math.cos(ang) * iR;
    const y1 = 60 + Math.sin(ang) * iR;
    const x2 = 50 + Math.cos(ang + 0.1) * oR;
    const y2 = 60 + Math.sin(ang + 0.1) * oR;
    const x3 = 50 + Math.cos(ang + 0.22) * iR;
    const y3 = 60 + Math.sin(ang + 0.22) * iR;
    innerMane += `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>`;
  }
  innerMane += "</g>";
  return `
    <circle cx="50" cy="60" r="36" fill="${e.a}" opacity="0.15"/>
    <path d="M${50+r+2} ${60+r*0.7} Q${50+r+14} ${60+r*0.3} ${50+r+18} ${60-r*0.1}" stroke="${e.a}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="${50+r+18}" cy="${60-r*0.1}" r="5" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50+r+14} ${60-r*0.05} L${50+r+18} ${60-r*0.1-5} M${50+r+20} ${60-r*0.05} L${50+r+22} ${60-r*0.1-3}" stroke="${e.a}" stroke-width="1.8" fill="none"/>
    ${outerMane}
    ${innerMane}
    <circle cx="50" cy="60" r="${r}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>
    <ellipse cx="50" cy="${60+r*0.3}" rx="${r*0.6}" ry="${r*0.4}" fill="${e.s}"/>
    <ellipse cx="${50-r*0.65}" cy="${60-r*0.6}" rx="5" ry="6" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50+r*0.65}" cy="${60-r*0.6}" rx="5" ry="6" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50-r*0.65}" cy="${60-r*0.55}" rx="2.5" ry="3.5" fill="${e.s}"/>
    <ellipse cx="${50+r*0.65}" cy="${60-r*0.55}" rx="2.5" ry="3.5" fill="${e.s}"/>
    <path d="M${50-9} ${60-r*1.05} L${50-7} ${60-r-9} L${50-3} ${60-r-3} L50 ${60-r-12} L${50+3} ${60-r-3} L${50+7} ${60-r-9} L${50+9} ${60-r*1.05} L${50+9} ${60-r*0.9} L${50-9} ${60-r*0.9} Z" fill="#fff200" stroke="#ff9900" stroke-width="1"/>
    <circle cx="50" cy="${60-r-6}" r="2" fill="#ff4d4d"/>
    <circle cx="${50-5}" cy="${60-r-2}" r="1.2" fill="#33d9ff"/>
    <circle cx="${50+5}" cy="${60-r-2}" r="1.2" fill="#33d9ff"/>
    ${blush(50-r*0.5, 50+r*0.5, 60+r*0.05, 4, "#ff8fbf")}
    ${bigEyes(50-r*0.32, 50+r*0.32, 58, 5)}
    <path d="M${50-3.5} ${60+r*0.15} L${50+3.5} ${60+r*0.15} L50 ${60+r*0.34} Z" fill="#3a2a2a"/>
    <path d="M50 ${60+r*0.34} L50 ${60+r*0.5} M50 ${60+r*0.5} Q${50-3} ${60+r*0.58} ${50-6} ${60+r*0.48} M50 ${60+r*0.5} Q${50+3} ${60+r*0.58} ${50+6} ${60+r*0.48}" stroke="#3a2a2a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M${50-2} ${60+r*0.5} L${50-2.5} ${60+r*0.62} L${50-1} ${60+r*0.5} Z" fill="white" stroke="#3a2a2a" stroke-width="0.4"/>
    <path d="M${50+2} ${60+r*0.5} L${50+2.5} ${60+r*0.62} L${50+1} ${60+r*0.5} Z" fill="white" stroke="#3a2a2a" stroke-width="0.4"/>
    <circle cx="${50-r*0.4}" cy="${60+r*0.3}" r="0.7" fill="#3a2a2a"/>
    <circle cx="${50-r*0.35}" cy="${60+r*0.42}" r="0.7" fill="#3a2a2a"/>
    <circle cx="${50+r*0.4}" cy="${60+r*0.3}" r="0.7" fill="#3a2a2a"/>
    <circle cx="${50+r*0.35}" cy="${60+r*0.42}" r="0.7" fill="#3a2a2a"/>
  `;
}

/* -------- 20. レインボー (虹) -------- */
function drawRainbow(e, stage, pid) {
  const colors = ["#ff4d4d", "#ff8c1a", "#fff200", "#3ec46e", "#3aa6ff", "#a64dff"];
  if (stage <= 6) {
    // ベビー: 雲だけ（虹なし）
    const t = stage - 4;
    const cy = 62;
    return `
      <ellipse cx="${50-12-t}" cy="${cy+4}" rx="${9+t*0.5}" ry="${6+t*0.3}" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="${50+12+t}" cy="${cy+4}" rx="${9+t*0.5}" ry="${6+t*0.3}" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="50" cy="${cy}" rx="${13+t*0.5}" ry="${10+t*0.4}" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="50" cy="${cy+2}" rx="${10+t*0.4}" ry="${5}" fill="${e.s}" opacity="0.5"/>
      ${blush(45, 55, cy+2, 3, "#ff8fbf")}
      ${bigEyes(46, 54, cy-2, 3+t*0.2)}
      ${smile(50, cy+3, 2.5)}
    `;
  }
  if (stage <= 9) {
    // 進化形: 雲＋虹アーチ（3-5色）
    const t = stage - 7;
    const arcR = 20 + t*2;
    const cy = 70;
    const visible = 3 + t;
    let arcs = "";
    for (let i = 0; i < visible; i++) {
      const r = arcR - i * (arcR*0.13);
      arcs += `<path d="M${50-r} ${cy-3} A${r} ${r} 0 0 1 ${50+r} ${cy-3}" stroke="${colors[i]}" stroke-width="${3.5+t*0.1}" fill="none"/>`;
    }
    const stars = `<path d="M${50-arcR-8} ${cy-10} L${50-arcR-7} ${cy-7} L${50-arcR-4} ${cy-6} L${50-arcR-7} ${cy-4} L${50-arcR-8} ${cy-1} L${50-arcR-9} ${cy-4} L${50-arcR-12} ${cy-6} L${50-arcR-9} ${cy-7} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.5"/>
                   <path d="M${50+arcR+8} ${cy-10} L${50+arcR+9} ${cy-7} L${50+arcR+12} ${cy-6} L${50+arcR+9} ${cy-4} L${50+arcR+8} ${cy-1} L${50+arcR+7} ${cy-4} L${50+arcR+4} ${cy-6} L${50+arcR+7} ${cy-7} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.5"/>`;
    return `
      ${arcs}
      ${stars}
      <ellipse cx="${50-15}" cy="${cy}" rx="11" ry="7" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="${50+15}" cy="${cy}" rx="11" ry="7" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
      <ellipse cx="50" cy="${cy-3}" rx="14" ry="9" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
      ${blush(43, 57, cy-1, 2.5, "#ff8fbf")}
      ${bigEyes(46, 54, cy-3, 3.5+t*0.2)}
      ${smile(50, cy+1, 2.5)}
    `;
  }
  // 最終形: 完全な虹（6色フル+大きな雲+星+ハート+きらめき）
  const arcR = 32;
  const cy = 78;
  let arcs = "";
  for (let i = 0; i < 6; i++) {
    const r = arcR - i * 4;
    arcs += `<path d="M${50-r} ${cy-3} A${r} ${r} 0 0 1 ${50+r} ${cy-3}" stroke="${colors[i]}" stroke-width="4.2" fill="none"/>`;
  }
  return `
    <circle cx="50" cy="58" r="44" fill="${e.a}" opacity="0.2"/>
    ${arcs}
    <path d="M50 ${cy-arcR-8} C46 ${cy-arcR-13} 41 ${cy-arcR-8} 50 ${cy-arcR-2} C59 ${cy-arcR-8} 54 ${cy-arcR-13} 50 ${cy-arcR-8} Z" fill="#ff6b9d" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-arcR-12} ${cy-12} L${50-arcR-10} ${cy-7} L${50-arcR-5} ${cy-5} L${50-arcR-10} ${cy-3} L${50-arcR-12} ${cy+2} L${50-arcR-14} ${cy-3} L${50-arcR-19} ${cy-5} L${50-arcR-14} ${cy-7} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.7"/>
    <path d="M${50+arcR+12} ${cy-12} L${50+arcR+14} ${cy-7} L${50+arcR+19} ${cy-5} L${50+arcR+14} ${cy-3} L${50+arcR+12} ${cy+2} L${50+arcR+10} ${cy-3} L${50+arcR+5} ${cy-5} L${50+arcR+10} ${cy-7} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.7"/>
    <circle cx="${50-arcR-4}" cy="${cy-22}" r="1.5" fill="#fff200"/>
    <circle cx="${50+arcR+4}" cy="${cy-22}" r="1.5" fill="#fff200"/>
    <circle cx="${50-8}" cy="${cy-arcR-15}" r="1.5" fill="#fff200"/>
    <circle cx="${50+8}" cy="${cy-arcR-15}" r="1.5" fill="#fff200"/>
    <ellipse cx="${50-17}" cy="${cy}" rx="12" ry="8" fill="#fff" stroke="#3a2a2a" stroke-width="1.6"/>
    <ellipse cx="${50+17}" cy="${cy}" rx="12" ry="8" fill="#fff" stroke="#3a2a2a" stroke-width="1.6"/>
    <ellipse cx="${50-8}" cy="${cy-5}" rx="11" ry="9" fill="#fff" stroke="#3a2a2a" stroke-width="1.6"/>
    <ellipse cx="${50+8}" cy="${cy-5}" rx="11" ry="9" fill="#fff" stroke="#3a2a2a" stroke-width="1.6"/>
    <ellipse cx="50" cy="${cy-3}" rx="16" ry="11" fill="#fff" stroke="#3a2a2a" stroke-width="1.6"/>
    ${blush(43, 57, cy-1, 3.5, "#ff8fbf")}
    ${bigEyes(46, 54, cy-4, 4.5)}
    ${smile(50, cy+1, 3.5)}
  `;
}

/* -------- エッグ固有の装飾デコ (体周辺の装飾) -------- */
function decoExtras(e, stage) {
  if (stage < 6) return "";
  switch (e.deco) {
    case "flame":
      return `<path d="M 14 50 Q 10 42 14 36 Q 18 42 14 50 Z" fill="#ff8c1a" stroke="#3a2a2a" stroke-width="0.8" opacity="0.85"/>
              <path d="M 86 50 Q 90 42 86 36 Q 82 42 86 50 Z" fill="#ff8c1a" stroke="#3a2a2a" stroke-width="0.8" opacity="0.85"/>`;
    case "drop":
      return `<path d="M 14 38 Q 12 34 14 28 Q 16 34 14 38 Z" fill="#a8e0ff" stroke="#1aa3c4" stroke-width="0.8"/>
              <path d="M 86 38 Q 88 34 86 28 Q 84 34 86 38 Z" fill="#a8e0ff" stroke="#1aa3c4" stroke-width="0.8"/>`;
    case "leaf":
      return `<path d="M 12 30 Q 4 24 8 16 Q 16 18 16 28 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
              <path d="M 88 30 Q 96 24 92 16 Q 84 18 84 28 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>`;
    case "star":
      return `<path d="M 14 22 L 16 26 L 20 27 L 17 30 L 18 34 L 14 32 L 10 34 L 11 30 L 8 27 L 12 26 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.6"/>
              <path d="M 86 22 L 88 26 L 92 27 L 89 30 L 90 34 L 86 32 L 82 34 L 83 30 L 80 27 L 84 26 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.6"/>`;
    case "heart":
      return `<path d="M 14 22 C 10 18 10 14 13 14 C 15 14 16 16 16 16 C 16 16 17 14 19 14 C 22 14 22 18 16 22 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
              <path d="M 86 22 C 82 18 82 14 85 14 C 87 14 88 16 88 16 C 88 16 89 14 91 14 C 94 14 94 18 88 22 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>`;
    case "sun":
      return `<g transform="translate(12 18)"><circle r="3" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/><path d="M0 -5 L0 -7 M5 0 L7 0 M0 5 L0 7 M-5 0 L-7 0" stroke="#ff9900" stroke-width="0.8"/></g>`;
    case "cloud":
      return `<path d="M 6 20 Q 2 20 2 24 Q 0 26 4 28 L 18 28 Q 22 26 20 22 Q 20 18 14 20 Q 10 16 6 20 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.6"/>`;
    case "snow":
      return `<g transform="translate(14 18)" stroke="${e.a}" stroke-width="1" fill="none"><path d="M0 -4 L0 4 M-4 0 L4 0 M-3 -3 L3 3 M-3 3 L3 -3"/></g>
              <g transform="translate(86 20)" stroke="${e.a}" stroke-width="1" fill="none"><path d="M0 -4 L0 4 M-4 0 L4 0 M-3 -3 L3 3 M-3 3 L3 -3"/></g>`;
    case "paw":
      return `<g transform="translate(12 78)" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"><ellipse rx="2.5" ry="3"/><circle cx="-3" cy="-3" r="1.4"/><circle cx="3" cy="-3" r="1.4"/></g>`;
    case "spark":
      return `<g transform="translate(14 22)" stroke="${e.a}" stroke-width="1.4" stroke-linecap="round"><path d="M0 -4 L0 4 M-4 0 L4 0"/></g>
              <g transform="translate(86 24)" stroke="${e.a}" stroke-width="1.4" stroke-linecap="round"><path d="M0 -4 L0 4 M-4 0 L4 0"/></g>`;
    case "bubble":
      return `<circle cx="12" cy="80" r="3" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5" opacity="0.85"/>
              <circle cx="88" cy="82" r="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5" opacity="0.85"/>
              <circle cx="8" cy="64" r="1.8" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.4" opacity="0.75"/>`;
    case "spike":
      return `<path d="M 10 60 L 4 55 L 10 50 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="0.6"/>
              <path d="M 90 60 L 96 55 L 90 50 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="0.6"/>`;
    case "flower":
      return `<g transform="translate(12 22)"><circle cx="0" cy="-3" r="2.5" fill="${e.a}"/><circle cx="3" cy="-1" r="2.5" fill="${e.a}"/><circle cx="-3" cy="-1" r="2.5" fill="${e.a}"/><circle cx="2" cy="3" r="2.5" fill="${e.a}"/><circle cx="-2" cy="3" r="2.5" fill="${e.a}"/><circle cx="0" cy="0" r="1.6" fill="${e.p}"/></g>`;
    case "rainbow":
      return `<path d="M 6 92 Q 6 76 50 76 Q 94 76 94 92" stroke="#ff4d4d" stroke-width="2" fill="none" opacity="0.6"/>
              <path d="M 10 92 Q 10 80 50 80 Q 90 80 90 92" stroke="#ff8c1a" stroke-width="2" fill="none" opacity="0.6"/>`;
    default:
      return "";
  }
}

/* -------- ディスパッチ -------- */
const DRAW_FN = {
  dragon: drawDragon,
  fish: drawFish,
  bug: drawBug,
  unicorn: drawUnicorn,
  cat: drawCat,
  pegasus: drawPegasus,
  bird: drawBird,
  cloud: drawCloud,
  hamster: drawHamster,
  rock: drawRock,
  robot: drawRobot,
  phoenix: drawPhoenix,
  turtle: drawTurtle,
  jellyfish: drawJellyfish,
  lizard: drawLizard,
  crab: drawCrab,
  mushroom: drawMushroom,
  flora: drawFlora,
  lion: drawLion,
  rainbow: drawRainbow,
};

/* -------- メイン描画関数 -------- */
function renderCreature(eggIdx, stage) {
  if (stage < 1) stage = 1;
  if (stage > 10) stage = 10;
  const e = EGG_TYPES[eggIdx];
  if (stage <= 3) return renderEgg(eggIdx, stage);

  const pid = `pat-${eggIdx}-${stage}-${Math.random().toString(36).slice(2,6)}`;
  const defs = `<defs>${patternDefs(pid, e)}</defs>`;
  const fn = DRAW_FN[e.arch] || drawDragon;
  const inner = fn(e, stage, pid);
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${defs}
    ${aura(stage, e.a)}
    ${shellFragments(e, pid, stage)}
    ${inner}
    ${decoExtras(e, stage)}
    ${sparkles(stage)}
  </svg>`;
}

window.EGG_TYPES = EGG_TYPES;
window.renderCreature = renderCreature;
window.renderEgg = renderEgg;
window.eggLabel = eggLabel;
