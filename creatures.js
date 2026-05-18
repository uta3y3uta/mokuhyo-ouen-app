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
  const bodyR = 16 + (stage-4) * 2.4;
  const eyeR = 4.5 + (stage-4)*0.3;
  const hornH = (stage-3) * 3.2;
  const wingW = stage < 6 ? 0 : (stage-5)*5.5;
  const tailL = (stage-3)*3;

  const body = `<ellipse cx="50" cy="60" rx="${bodyR}" ry="${bodyR*1.05}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="64" rx="${bodyR*0.55}" ry="${bodyR*0.75}" fill="${e.s}" opacity="0.85"/>` : "";
  const tail = stage >= 5 ? `<path d="M${50+bodyR-3} ${60+bodyR*0.4} Q${65+tailL} ${72+tailL*0.5} ${78+tailL} ${82+tailL*0.3} L${82+tailL} ${78+tailL*0.3} Q${72+tailL} ${68} ${50+bodyR-3} ${56}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    ${stage >= 8 ? `<path d="M${78+tailL} ${80+tailL*0.3} L${85+tailL} ${74+tailL*0.3} L${82+tailL} ${85+tailL*0.4} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>` : ""}` : "";
  const horns = `<path d="M44 ${42-hornH*0.2} L${40-hornH*0.4} ${36-hornH} L46 ${40-hornH*0.3} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
                 <path d="M56 ${42-hornH*0.2} L${60+hornH*0.4} ${36-hornH} L54 ${40-hornH*0.3} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>`;
  const wings = stage >= 6 ? `<path d="M${50-bodyR*0.7} 56 Q${50-bodyR-wingW} 28 ${50-bodyR*0.3} 44 Q${50-bodyR-wingW*0.5} 50 ${50-bodyR*0.6} 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.7} 56 Q${50+bodyR+wingW} 28 ${50+bodyR*0.3} 44 Q${50+bodyR+wingW*0.5} 50 ${50+bodyR*0.6} 62 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  const spikes = stage >= 7 ? `<path d="M50 ${60-bodyR} L48 ${52-bodyR*1.15} L52 ${52-bodyR*1.15} Z M44 ${56-bodyR*1.1} L42 ${48-bodyR*1.12} L46 ${48-bodyR*1.1} Z M56 ${56-bodyR*1.1} L54 ${48-bodyR*1.1} L58 ${48-bodyR*1.12} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  const nose = `<ellipse cx="50" cy="62" rx="1.6" ry="1.1" fill="#222"/>`;
  const mouth = smile(50, 66, 4);
  const fangs = stage >= 8 ? `<path d="M48 66 L47 69 L48.5 69 Z M52 66 L53 69 L51.5 69 Z" fill="white" stroke="#3a2a2a" stroke-width="0.4"/>` : "";
  return tail + body + belly + spikes + wings + horns + blush(50-bodyR*0.55, 50+bodyR*0.55, 62, 4, e.a) + bigEyes(50-bodyR*0.4, 50+bodyR*0.4, 54, eyeR) + nose + mouth + fangs;
}

/* -------- 2. フィッシュ (魚) -------- */
function drawFish(e, stage, pid) {
  const bodyR = 16 + (stage-4) * 2.5;
  const eyeR = 4 + (stage-4)*0.3;
  const body = `<ellipse cx="50" cy="58" rx="${bodyR*1.3}" ry="${bodyR}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="62" rx="${bodyR*0.9}" ry="${bodyR*0.55}" fill="${e.s}" opacity="0.85"/>` : "";
  const tailFin = `<path d="M${50-bodyR*1.3} 58 L${50-bodyR*1.8-stage*0.5} ${48-stage*0.4} L${50-bodyR*1.4} 58 L${50-bodyR*1.8-stage*0.5} ${68+stage*0.4} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>`;
  const dorsal = stage >= 5 ? `<path d="M${50-bodyR*0.3} ${58-bodyR*0.9} L50 ${58-bodyR-stage*0.6} L${50+bodyR*0.3} ${58-bodyR*0.9} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  const sideFin = stage >= 6 ? `<path d="M${50-bodyR*0.2} ${58+bodyR*0.6} Q${50-bodyR*0.6} ${58+bodyR+6} ${50+bodyR*0.1} ${58+bodyR*0.75}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  const gill = stage >= 7 ? `<path d="M${50-bodyR*0.5} 56 Q${50-bodyR*0.45} 62 ${50-bodyR*0.5} 64" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>` : "";
  const mouth = stage >= 6 ? `<ellipse cx="${50+bodyR*0.85}" cy="60" rx="3" ry="2" fill="#a83258" stroke="#222" stroke-width="0.8"/>` : "";
  const bubbles = stage >= 9 ? `<circle cx="${50+bodyR*1.3}" cy="48" r="2" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${50+bodyR*1.4}" cy="42" r="1.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.4"/>` : "";
  return tailFin + body + belly + dorsal + sideFin + gill + blush(50-bodyR*0.55, 50+bodyR*0.35, 60, 3, e.a) + bigEyes(50-bodyR*0.5, 50+bodyR*0.1, 54, eyeR) + mouth + bubbles;
}

/* -------- 3. バタフライ (虫→蝶) -------- */
function drawBug(e, stage, pid) {
  const t = stage - 4;
  const bodyL = 22 + t*2;
  const bodyY = 50;
  const wingR = 8 + t*3.2;
  const antH = 6 + t*1.5;

  // 触角
  const antennae = `<path d="M46 ${bodyY-bodyL*0.4} Q${42-t} ${bodyY-bodyL*0.4-antH} ${38-t} ${bodyY-bodyL*0.4-antH*1.4}" stroke="#3a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <path d="M54 ${bodyY-bodyL*0.4} Q${58+t} ${bodyY-bodyL*0.4-antH} ${62+t} ${bodyY-bodyL*0.4-antH*1.4}" stroke="#3a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <circle cx="${38-t}" cy="${bodyY-bodyL*0.4-antH*1.4}" r="1.8" fill="${e.a}"/>
    <circle cx="${62+t}" cy="${bodyY-bodyL*0.4-antH*1.4}" r="1.8" fill="${e.a}"/>`;
  // 体（縦長楕円）
  const body = `<ellipse cx="50" cy="${bodyY+5}" rx="6" ry="${bodyL*0.55}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>`;
  // 体の節
  const segs = stage >= 5 ? `<path d="M44 ${bodyY-2} L56 ${bodyY-2} M44 ${bodyY+8} L56 ${bodyY+8} M44 ${bodyY+18} L56 ${bodyY+18}" stroke="#3a2a2a" stroke-width="0.6" opacity="0.6"/>` : "";
  // 翼（上下4枚）
  const upperWing = stage >= 5 ? `
    <path d="M44 ${bodyY-2} Q${44-wingR*1.4} ${bodyY-wingR*1.6} ${44-wingR*0.6} ${bodyY+wingR*0.3} Q${44-wingR*0.2} ${bodyY-2} 44 ${bodyY-2} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M56 ${bodyY-2} Q${56+wingR*1.4} ${bodyY-wingR*1.6} ${56+wingR*0.6} ${bodyY+wingR*0.3} Q${56+wingR*0.2} ${bodyY-2} 56 ${bodyY-2} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  const lowerWing = stage >= 6 ? `
    <path d="M44 ${bodyY+14} Q${44-wingR*1.2} ${bodyY+wingR*1.4} ${44-wingR*0.4} ${bodyY+wingR*1.7} Q${44-wingR*0.1} ${bodyY+14} 44 ${bodyY+14} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M56 ${bodyY+14} Q${56+wingR*1.2} ${bodyY+wingR*1.4} ${56+wingR*0.4} ${bodyY+wingR*1.7} Q${56+wingR*0.1} ${bodyY+14} 56 ${bodyY+14} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  // 翼の模様（玉）
  const wingPat = stage >= 7 ? `
    <circle cx="${44-wingR*0.7}" cy="${bodyY-wingR*0.4}" r="${1.6+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${56+wingR*0.7}" cy="${bodyY-wingR*0.4}" r="${1.6+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${44-wingR*0.6}" cy="${bodyY+wingR*1.1}" r="${1.4+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>
    <circle cx="${56+wingR*0.6}" cy="${bodyY+wingR*1.1}" r="${1.4+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>` : "";
  // 顔
  const face = bigEyes(46, 54, bodyY-bodyL*0.18, 3.2+t*0.2) + smile(50, bodyY-bodyL*0.05, 2.5);
  return antennae + upperWing + lowerWing + body + segs + wingPat + face;
}

/* -------- 4. ユニコーン -------- */
function drawUnicorn(e, stage, pid) {
  const bodyR = 17 + (stage-4)*2.3;
  const eyeR = 4 + (stage-4)*0.3;
  const hornH = 6 + (stage-4)*2.2;
  // 体（丸い胴体）
  const body = `<ellipse cx="50" cy="62" rx="${bodyR}" ry="${bodyR*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="66" rx="${bodyR*0.55}" ry="${bodyR*0.7}" fill="${e.s}" opacity="0.85"/>` : "";
  // 耳（馬の耳）
  const ears = `<path d="M${50-bodyR*0.35} ${62-bodyR*0.85} L${50-bodyR*0.45} ${62-bodyR-6} L${50-bodyR*0.1} ${62-bodyR*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.35} ${62-bodyR*0.85} L${50+bodyR*0.45} ${62-bodyR-6} L${50+bodyR*0.1} ${62-bodyR*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>`;
  // 角（らせん）
  const horn = `<path d="M50 ${62-bodyR*0.95} L${48} ${62-bodyR-hornH} L${52} ${62-bodyR-hornH+1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    ${stage >= 6 ? `<path d="M${49} ${62-bodyR-hornH*0.3} L${51} ${62-bodyR-hornH*0.5} M${49} ${62-bodyR-hornH*0.5} L${51} ${62-bodyR-hornH*0.7}" stroke="#3a2a2a" stroke-width="0.8" fill="none"/>` : ""}`;
  // たてがみ
  const mane = stage >= 6 ? `<path d="M${50-bodyR*0.7} ${62-bodyR*0.6} Q${50-bodyR-4} ${62-bodyR*0.4} ${50-bodyR-2} ${62+bodyR*0.2} Q${50-bodyR-6} ${62+bodyR*0.5} ${50-bodyR-2} ${62+bodyR*0.7}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  // しっぽ
  const tail = stage >= 7 ? `<path d="M${50+bodyR*0.85} 62 Q${50+bodyR+10} ${55-stage*0.4} ${50+bodyR+8} ${68+stage*0.3} Q${50+bodyR+14} ${72+stage*0.4} ${50+bodyR+10} ${78+stage*0.4}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  // 鼻
  const nose = `<ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#222"/>`;
  // 足
  const legs = stage >= 6 ? `<rect x="${50-bodyR*0.55}" y="${62+bodyR*0.7}" width="4.5" height="${8+stage*0.5}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>
    <rect x="${50+bodyR*0.55-4.5}" y="${62+bodyR*0.7}" width="4.5" height="${8+stage*0.5}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1"/>` : "";
  return tail + legs + body + belly + ears + mane + horn + blush(50-bodyR*0.55, 50+bodyR*0.55, 64, 3.5, e.a) + bigEyes(50-bodyR*0.32, 50+bodyR*0.32, 58, eyeR) + nose + smile(50, 71, 3);
}

/* -------- 5. キャット (猫) -------- */
function drawCat(e, stage, pid) {
  const bodyR = 18 + (stage-4)*2.2;
  const eyeR = 4.5 + (stage-4)*0.3;
  const earH = 6 + (stage-4)*1.5;
  const body = `<ellipse cx="50" cy="62" rx="${bodyR}" ry="${bodyR*1.02}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="66" rx="${bodyR*0.6}" ry="${bodyR*0.7}" fill="${e.s}" opacity="0.85"/>` : "";
  // 三角耳
  const ears = `<path d="M${50-bodyR*0.55} ${62-bodyR*0.75} L${50-bodyR*0.85} ${62-bodyR-earH} L${50-bodyR*0.15} ${62-bodyR*0.55} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.55} ${62-bodyR*0.75} L${50+bodyR*0.85} ${62-bodyR-earH} L${50+bodyR*0.15} ${62-bodyR*0.55} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-bodyR*0.55} ${62-bodyR*0.7} L${50-bodyR*0.75} ${62-bodyR-earH*0.65} L${50-bodyR*0.3} ${62-bodyR*0.6} Z" fill="${e.a}" opacity="0.7"/>
    <path d="M${50+bodyR*0.55} ${62-bodyR*0.7} L${50+bodyR*0.75} ${62-bodyR-earH*0.65} L${50+bodyR*0.3} ${62-bodyR*0.6} Z" fill="${e.a}" opacity="0.7"/>`;
  // ヒゲ
  const whiskers = stage >= 6 ? `<path d="M${50-bodyR*0.7} 64 L${50-bodyR-3} 62 M${50-bodyR*0.7} 66 L${50-bodyR-3} 67 M${50+bodyR*0.7} 64 L${50+bodyR+3} 62 M${50+bodyR*0.7} 66 L${50+bodyR+3} 67" stroke="#3a2a2a" stroke-width="0.8" fill="none" stroke-linecap="round"/>` : "";
  // 三角の鼻と口
  const nose = `<path d="M48 64 L52 64 L50 67 Z" fill="#ff8fbf" stroke="#3a2a2a" stroke-width="0.6"/>`;
  const mouth = `<path d="M50 67 L50 69 M50 69 Q47 70 46 68 M50 69 Q53 70 54 68" stroke="#3a2a2a" stroke-width="1" fill="none" stroke-linecap="round"/>`;
  // しっぽ
  const tail = stage >= 6 ? `<path d="M${50+bodyR*0.8} ${62+bodyR*0.2} Q${50+bodyR+10} ${52-stage*0.5} ${50+bodyR+12} ${42-stage*0.5} Q${50+bodyR+8} ${38-stage*0.4} ${50+bodyR+5} ${42-stage*0.3}" stroke="url(#${pid})" stroke-width="${5+stage*0.3}" fill="none" stroke-linecap="round"/>` : "";
  // 前足
  const paws = stage >= 7 ? `<ellipse cx="${50-bodyR*0.5}" cy="${62+bodyR*0.9}" rx="5" ry="3.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <ellipse cx="${50+bodyR*0.5}" cy="${62+bodyR*0.9}" rx="5" ry="3.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  return tail + body + belly + paws + ears + whiskers + blush(50-bodyR*0.55, 50+bodyR*0.55, 64, 3.5, e.a) + bigEyes(50-bodyR*0.4, 50+bodyR*0.4, 58, eyeR) + nose + mouth;
}

/* -------- 6. ペガサス -------- */
function drawPegasus(e, stage, pid) {
  const bodyR = 17 + (stage-4)*2.3;
  const eyeR = 4 + (stage-4)*0.3;
  const wingW = stage < 5 ? 0 : (stage-4)*5.5;
  const body = `<ellipse cx="50" cy="62" rx="${bodyR}" ry="${bodyR*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="66" rx="${bodyR*0.55}" ry="${bodyR*0.7}" fill="${e.s}" opacity="0.85"/>` : "";
  const ears = `<path d="M${50-bodyR*0.35} ${62-bodyR*0.85} L${50-bodyR*0.42} ${62-bodyR-5} L${50-bodyR*0.1} ${62-bodyR*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.35} ${62-bodyR*0.85} L${50+bodyR*0.42} ${62-bodyR-5} L${50+bodyR*0.1} ${62-bodyR*0.7} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>`;
  // 大きな翼（羽根の段つき）
  const wings = stage >= 5 ? `
    <path d="M${50-bodyR*0.7} 58 Q${50-bodyR-wingW} ${44-wingW*0.5} ${50-bodyR*1.4-wingW*0.3} ${56-wingW*0.2} Q${50-bodyR-wingW*0.6} ${60} ${50-bodyR*0.7} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-bodyR*0.85} ${58} Q${50-bodyR-wingW*0.7} ${50-wingW*0.2} ${50-bodyR*1.2-wingW*0.2} ${56}" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>
    <path d="M${50+bodyR*0.7} 58 Q${50+bodyR+wingW} ${44-wingW*0.5} ${50+bodyR*1.4+wingW*0.3} ${56-wingW*0.2} Q${50+bodyR+wingW*0.6} ${60} ${50+bodyR*0.7} 64 Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.85} ${58} Q${50+bodyR+wingW*0.7} ${50-wingW*0.2} ${50+bodyR*1.2+wingW*0.2} ${56}" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>` : "";
  const mane = stage >= 6 ? `<path d="M${50-bodyR*0.55} ${62-bodyR*0.55} Q${50-bodyR-3} ${62-bodyR*0.2} ${50-bodyR-1} ${62+bodyR*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  const tail = stage >= 7 ? `<path d="M${50+bodyR*0.85} 62 Q${50+bodyR+8} ${56-stage*0.4} ${50+bodyR+6} ${66+stage*0.3} Q${50+bodyR+12} ${72+stage*0.4} ${50+bodyR+8} ${78+stage*0.4}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  const star = stage >= 8 ? `<path d="M50 ${62-bodyR-2} L51.5 ${62-bodyR+1.5} L55 ${62-bodyR+2} L52.2 ${62-bodyR+4.2} L53 ${62-bodyR+8} L50 ${62-bodyR+6} L47 ${62-bodyR+8} L47.8 ${62-bodyR+4.2} L45 ${62-bodyR+2} L48.5 ${62-bodyR+1.5} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.6"/>` : "";
  const nose = `<ellipse cx="50" cy="68" rx="2" ry="1.4" fill="#222"/>`;
  return tail + wings + body + belly + ears + mane + star + blush(50-bodyR*0.55, 50+bodyR*0.55, 64, 3.5, e.a) + bigEyes(50-bodyR*0.32, 50+bodyR*0.32, 58, eyeR) + nose + smile(50, 71, 3);
}

/* -------- 7. バード (鳥) -------- */
function drawBird(e, stage, pid) {
  const bodyR = 16 + (stage-4) * 2.5;
  const eyeR = 4.5 + (stage-4)*0.3;
  const wingW = (stage-3)*4;
  const beakL = 4 + (stage-4)*0.9;
  const body = `<ellipse cx="50" cy="62" rx="${bodyR}" ry="${bodyR*1.12}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="68" rx="${bodyR*0.55}" ry="${bodyR*0.75}" fill="${e.s}" opacity="0.85"/>` : "";
  const wings = stage >= 5 ? `<path d="M${50-bodyR*0.4} 60 Q${50-bodyR-wingW} 58 ${50-bodyR*0.7} ${72+wingW*0.3} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.4} 60 Q${50+bodyR+wingW} 58 ${50+bodyR*0.7} ${72+wingW*0.3} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.2"/>` : "";
  const beak = `<path d="M${50-beakL*0.5} 58 L${50+beakL*0.5} 58 L50 ${58+beakL*1.1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>`;
  const crest = stage >= 6 ? `<path d="M50 ${62-bodyR} L46 ${54-bodyR*1.25} L50 ${56-bodyR*1.15} L54 ${52-bodyR*1.3} L48 ${50-bodyR*1.25} L52 ${48-bodyR*1.3} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  const tail = stage >= 7 ? `<path d="M${50-3} ${62+bodyR*0.95} L${50-10-stage*0.6} ${76+stage*0.5} L${50-2} ${74+stage*0.3} L50 ${80+stage*0.4} L${50+2} ${74+stage*0.3} L${50+10+stage*0.6} ${76+stage*0.5} L${50+3} ${62+bodyR*0.95} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  const feet = stage >= 5 ? `<path d="M${50-5} ${62+bodyR*0.95} L${50-7} ${62+bodyR+5} M${50-7} ${62+bodyR+5} L${50-10} ${62+bodyR+5} M${50-7} ${62+bodyR+5} L${50-4} ${62+bodyR+5}" stroke="${e.a}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M${50+5} ${62+bodyR*0.95} L${50+7} ${62+bodyR+5} M${50+7} ${62+bodyR+5} L${50+10} ${62+bodyR+5} M${50+7} ${62+bodyR+5} L${50+4} ${62+bodyR+5}" stroke="${e.a}" stroke-width="1.6" fill="none" stroke-linecap="round"/>` : "";
  return tail + body + belly + wings + feet + crest + blush(50-bodyR*0.55, 50+bodyR*0.55, 60, 3.5, e.a) + bigEyes(50-bodyR*0.35, 50+bodyR*0.35, 52, eyeR) + beak;
}

/* -------- 8. クラウド (雲) -------- */
function drawCloud(e, stage, pid) {
  const t = stage - 4;
  const scale = 1 + t*0.1;
  // モコモコ雲（複数の円）
  const lumps = `
    <circle cx="32" cy="64" r="${14*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    <circle cx="50" cy="56" r="${16*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    <circle cx="68" cy="64" r="${14*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    <circle cx="40" cy="72" r="${10*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    <circle cx="60" cy="72" r="${10*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    ${stage >= 6 ? `<circle cx="22" cy="56" r="${8*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>
    <circle cx="78" cy="56" r="${8*scale}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.5"/>` : ""}`;
  // 影を統合
  const baseShadow = `<ellipse cx="50" cy="68" rx="${28*scale}" ry="${10*scale}" fill="${e.s}" opacity="0.6"/>`;
  // 雨粒
  const drops = stage >= 8 ? `<path d="M30 84 Q28 80 30 76 Q32 80 30 84 Z M50 88 Q48 84 50 80 Q52 84 50 88 Z M70 84 Q68 80 70 76 Q72 80 70 84 Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>` : "";
  // 稲妻
  const bolt = stage >= 9 ? `<path d="M50 36 L46 46 L50 46 L46 56 L52 44 L48 44 Z" fill="#fff200" stroke="#ff9900" stroke-width="0.8"/>` : "";
  return lumps + baseShadow + bolt + blush(40, 60, 60, 3.5, e.a) + bigEyes(45, 55, 56, 4 + t*0.3) + smile(50, 62, 3) + drops;
}

/* -------- 9. ハムスター -------- */
function drawHamster(e, stage, pid) {
  const bodyR = 17 + (stage-4)*2.2;
  const eyeR = 3.5 + (stage-4)*0.25;
  const body = `<ellipse cx="50" cy="64" rx="${bodyR}" ry="${bodyR*0.95}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="68" rx="${bodyR*0.65}" ry="${bodyR*0.6}" fill="${e.s}" opacity="0.9"/>` : "";
  // 小さい丸い耳
  const ears = `<circle cx="${50-bodyR*0.6}" cy="${64-bodyR*0.85}" r="${4+stage*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50+bodyR*0.6}" cy="${64-bodyR*0.85}" r="${4+stage*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-bodyR*0.6}" cy="${64-bodyR*0.85}" r="${2+stage*0.1}" fill="${e.a}" opacity="0.7"/>
    <circle cx="${50+bodyR*0.6}" cy="${64-bodyR*0.85}" r="${2+stage*0.1}" fill="${e.a}" opacity="0.7"/>`;
  // ほっぺた（特徴的）
  const cheeks = stage >= 5 ? `<circle cx="${50-bodyR*0.75}" cy="${68}" r="${5+stage*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="${50+bodyR*0.75}" cy="${68}" r="${5+stage*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  // ヒゲ
  const whiskers = stage >= 6 ? `<path d="M${50-bodyR*0.4} 70 L${50-bodyR-3} 70 M${50+bodyR*0.4} 70 L${50+bodyR+3} 70" stroke="#3a2a2a" stroke-width="0.7" fill="none"/>` : "";
  // 三角の鼻
  const nose = `<path d="M48.5 67 L51.5 67 L50 69 Z" fill="#ff6b9d" stroke="#3a2a2a" stroke-width="0.5"/>`;
  // 前歯
  const teeth = stage >= 7 ? `<rect x="48.5" y="70" width="3" height="3.5" fill="white" stroke="#3a2a2a" stroke-width="0.5"/>` : "";
  // 種を持っている
  const seed = stage >= 8 ? `<ellipse cx="${50-bodyR-4}" cy="${64+bodyR*0.4}" rx="3" ry="4" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>` : "";
  // 小さなしっぽ
  const tail = stage >= 6 ? `<circle cx="${50+bodyR-2}" cy="${64+bodyR*0.6}" r="2" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>` : "";
  return tail + body + belly + cheeks + seed + ears + whiskers + bigEyes(50-bodyR*0.32, 50+bodyR*0.32, 62, eyeR) + nose + teeth;
}

/* -------- 10. ロックゴーレム (岩) -------- */
function drawRock(e, stage, pid) {
  const t = stage - 4;
  const w = 18 + t*2.2;
  const h = 18 + t*2;
  // ゴツゴツした岩の形
  const body = `<path d="M${50-w} 62 L${50-w*0.95} ${62-h*0.75} L${50-w*0.5} ${62-h} L${50-w*0.1} ${62-h*0.95} L${50+w*0.4} ${62-h*1.05} L${50+w*0.95} ${62-h*0.65} L${50+w} ${62+h*0.2} L${50+w*0.85} ${62+h*0.85} L${50+w*0.2} ${62+h} L${50-w*0.5} ${62+h*0.95} L${50-w*0.95} ${62+h*0.5} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>`;
  // ヒビ
  const cracks = `<path d="M${50-w*0.4} ${62-h*0.5} L${50-w*0.2} ${62-h*0.2} L${50-w*0.3} ${62+h*0.1}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.6"/>
    <path d="M${50+w*0.3} ${62+h*0.3} L${50+w*0.5} ${62+h*0.6}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.6"/>`;
  // 結晶（背中のトゲ）
  const crystals = stage >= 6 ? `<path d="M${50-w*0.5} ${62-h*0.95} L${50-w*0.55} ${62-h*1.4} L${50-w*0.3} ${62-h*1.2} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M50 ${62-h*1.05} L${50-2} ${62-h*1.5} L${50+2} ${62-h*1.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M${50+w*0.4} ${62-h*1.05} L${50+w*0.45} ${62-h*1.4} L${50+w*0.7} ${62-h*1.15} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  // 腕
  const arms = stage >= 7 ? `<rect x="${50-w-7}" y="${62+h*0.1}" width="9" height="${10+t*0.5}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    <rect x="${50+w-2}" y="${62+h*0.1}" width="9" height="${10+t*0.5}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>` : "";
  // 怖そうな眉
  const brow = stage >= 6 ? `<path d="M${50-7} ${58-h*0.1} L${50-3} ${56-h*0.05} M${50+3} ${56-h*0.05} L${50+7} ${58-h*0.1}" stroke="#3a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>` : "";
  // クリスタル目
  const eyes = `<circle cx="${50-6}" cy="${62-h*0.05}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50+6}" cy="${62-h*0.05}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-6}" cy="${62-h*0.05}" r="${1+t*0.1}" fill="#222"/>
    <circle cx="${50+6}" cy="${62-h*0.05}" r="${1+t*0.1}" fill="#222"/>`;
  // ニッと笑う口
  const mouth = `<path d="M${50-5} ${62+h*0.25} Q50 ${62+h*0.4} ${50+5} ${62+h*0.25}" stroke="#3a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  return arms + body + cracks + crystals + brow + eyes + mouth;
}

/* -------- 11. ロボット -------- */
function drawRobot(e, stage, pid) {
  const t = stage - 4;
  const w = 16 + t*1.8;
  const h = 14 + t*1.5;
  // 胴体
  const body = `<rect x="${50-w}" y="${62-h*0.2}" width="${w*2}" height="${h*1.8}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 頭
  const head = `<rect x="${50-w*0.85}" y="${62-h*1.2}" width="${w*1.7}" height="${h*1.1}" rx="3" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 画面
  const screen = `<rect x="${50-w*0.65}" y="${62-h}" width="${w*1.3}" height="${h*0.75}" rx="1.5" fill="#1a1a2a" stroke="#3a2a2a" stroke-width="1"/>`;
  // LEDアイ
  const eyes = `<circle cx="${50-w*0.35}" cy="${62-h*0.6}" r="${2.5+t*0.2}" fill="${e.a}"/>
    <circle cx="${50+w*0.35}" cy="${62-h*0.6}" r="${2.5+t*0.2}" fill="${e.a}"/>
    <circle cx="${50-w*0.35}" cy="${62-h*0.6}" r="${1+t*0.1}" fill="#fff"/>
    <circle cx="${50+w*0.35}" cy="${62-h*0.6}" r="${1+t*0.1}" fill="#fff"/>`;
  // アンテナ
  const ant = `<line x1="50" y1="${62-h*1.2}" x2="50" y2="${62-h*1.6-t}" stroke="#3a2a2a" stroke-width="1.6"/>
    <circle cx="50" cy="${62-h*1.6-t-2}" r="${2.5+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>`;
  // 口（スピーカーグリル）
  const mouth = stage >= 5 ? `<rect x="${50-6}" y="${62-h*0.15}" width="12" height="3" rx="1" fill="#3a2a2a"/>
    <path d="M${50-5} ${62-h*0.05} L${50-5} ${62-h*0.13} M${50-2} ${62-h*0.05} L${50-2} ${62-h*0.13} M${50+1} ${62-h*0.05} L${50+1} ${62-h*0.13} M${50+4} ${62-h*0.05} L${50+4} ${62-h*0.13}" stroke="${e.s}" stroke-width="0.8"/>` : "";
  // 腕
  const arms = stage >= 6 ? `<rect x="${50-w-5}" y="${62+h*0.2}" width="5" height="${h+t*1.5}" rx="2" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <rect x="${50+w}" y="${62+h*0.2}" width="5" height="${h+t*1.5}" rx="2" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-w-2.5}" cy="${62+h*1.3+t*1.5}" r="${3+t*0.1}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <circle cx="${50+w+2.5}" cy="${62+h*1.3+t*1.5}" r="${3+t*0.1}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  // 胸のボタンとパネル
  const buttons = stage >= 7 ? `<circle cx="${50-w*0.4}" cy="${62+h*0.6}" r="${1.5+t*0.1}" fill="${e.a}"/>
    <circle cx="50" cy="${62+h*0.6}" r="${1.5+t*0.1}" fill="${e.a}"/>
    <circle cx="${50+w*0.4}" cy="${62+h*0.6}" r="${1.5+t*0.1}" fill="${e.a}"/>` : "";
  // 足
  const legs = stage >= 5 ? `<rect x="${50-w*0.55}" y="${62+h*1.6}" width="6" height="${5+t*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <rect x="${50+w*0.55-6}" y="${62+h*1.6}" width="6" height="${5+t*0.4}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  return arms + legs + body + buttons + head + screen + eyes + ant + mouth;
}

/* -------- 12. フェニックス (不死鳥) -------- */
function drawPhoenix(e, stage, pid) {
  const t = stage - 4;
  const bodyR = 14 + t*2;
  const wingW = 10 + t*4;
  const body = `<ellipse cx="50" cy="62" rx="${bodyR}" ry="${bodyR*1.1}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="66" rx="${bodyR*0.55}" ry="${bodyR*0.7}" fill="${e.s}" opacity="0.85"/>` : "";
  // 燃える翼
  const flameWings = stage >= 5 ? `
    <path d="M${50-bodyR*0.5} 58 Q${50-bodyR-wingW} ${48-wingW*0.4} ${50-bodyR-wingW*0.8} ${44-wingW*0.4} Q${50-bodyR-wingW*0.4} ${56} ${50-bodyR*1.1} ${64} L${50-bodyR-wingW*0.2} ${72} Q${50-bodyR-wingW*0.6} ${68} ${50-bodyR*0.7} 64 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50-bodyR*0.6} 60 Q${50-bodyR-wingW*0.6} ${52} ${50-bodyR-wingW*0.5} ${48}" stroke="${e.a}" stroke-width="1.5" fill="none"/>
    <path d="M${50+bodyR*0.5} 58 Q${50+bodyR+wingW} ${48-wingW*0.4} ${50+bodyR+wingW*0.8} ${44-wingW*0.4} Q${50+bodyR+wingW*0.4} ${56} ${50+bodyR*1.1} ${64} L${50+bodyR+wingW*0.2} ${72} Q${50+bodyR+wingW*0.6} ${68} ${50+bodyR*0.7} 64 Z" fill="${e.p}" stroke="#3a2a2a" stroke-width="1.2"/>
    <path d="M${50+bodyR*0.6} 60 Q${50+bodyR+wingW*0.6} ${52} ${50+bodyR+wingW*0.5} ${48}" stroke="${e.a}" stroke-width="1.5" fill="none"/>` : "";
  // 炎の冠
  const crest = `<path d="M${50-bodyR*0.4} ${62-bodyR} Q${50-3} ${62-bodyR-8-t} ${50} ${62-bodyR*1.1} Q${50+3} ${62-bodyR-6-t} ${50+bodyR*0.4} ${62-bodyR} Q${50+1} ${62-bodyR-12-t*1.4} ${50-bodyR*0.2} ${62-bodyR-4-t*0.6} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    ${stage >= 7 ? `<path d="M50 ${62-bodyR-14-t} Q${50-2} ${62-bodyR-18-t*1.2} ${50+2} ${62-bodyR-16-t} Z" fill="${e.s}"/>` : ""}`;
  // 炎の尻尾
  const flameTail = stage >= 6 ? `<path d="M50 ${62+bodyR*0.95} Q${50-3} ${62+bodyR+8} ${50-1} ${62+bodyR+14+t} M50 ${62+bodyR*0.95} Q${50+3} ${62+bodyR+8} ${50+5} ${62+bodyR+12+t} M50 ${62+bodyR*0.95} Q${50-5} ${62+bodyR+8} ${50-6} ${62+bodyR+12+t}" stroke="${e.a}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M50 ${62+bodyR*0.95} Q50 ${62+bodyR+10} ${50+1} ${62+bodyR+18+t*1.4}" stroke="${e.p}" stroke-width="3" fill="none" stroke-linecap="round"/>` : "";
  const beak = `<path d="M${50-3} 58 L${50+3} 58 L50 ${58+5+t*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>`;
  return flameTail + flameWings + body + belly + crest + blush(50-bodyR*0.55, 50+bodyR*0.55, 60, 3, e.a) + bigEyes(50-bodyR*0.35, 50+bodyR*0.35, 52, 4+t*0.3) + beak;
}

/* -------- 13. タートル (亀) -------- */
function drawTurtle(e, stage, pid) {
  const t = stage - 4;
  const shellW = 22 + t*2.5;
  const shellH = 16 + t*1.8;
  // 甲羅（楕円ドーム）
  const shell = `<ellipse cx="50" cy="${60}" rx="${shellW}" ry="${shellH}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.8"/>`;
  // 甲羅の六角パターン
  const pattern = `<path d="M${50-shellW*0.5} ${60-shellH*0.3} L${50-shellW*0.2} ${60-shellH*0.55} L${50+shellW*0.2} ${60-shellH*0.55} L${50+shellW*0.5} ${60-shellH*0.3} M${50-shellW*0.5} ${60-shellH*0.3} L${50-shellW*0.55} ${60+shellH*0.1} L${50-shellW*0.2} ${60+shellH*0.3} L${50+shellW*0.2} ${60+shellH*0.3} L${50+shellW*0.55} ${60+shellH*0.1} L${50+shellW*0.5} ${60-shellH*0.3} M${50-shellW*0.2} ${60-shellH*0.55} L${50-shellW*0.2} ${60+shellH*0.3} M${50+shellW*0.2} ${60-shellH*0.55} L${50+shellW*0.2} ${60+shellH*0.3} M50 ${60-shellH*0.55} L50 ${60+shellH*0.3}" stroke="#3a2a2a" stroke-width="1" fill="none" opacity="0.7"/>`;
  // ハイライト
  const highlight = `<ellipse cx="${50-shellW*0.3}" cy="${60-shellH*0.6}" rx="${shellW*0.25}" ry="${shellH*0.2}" fill="white" opacity="0.35"/>`;
  // 頭
  const head = `<ellipse cx="${50+shellW+3}" cy="${60+shellH*0.4}" rx="${7+t*0.4}" ry="${6+t*0.3}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.4"/>`;
  // 4本足
  const legs = `<ellipse cx="${50-shellW*0.7}" cy="${60+shellH+2}" rx="${4+t*0.3}" ry="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50+shellW*0.7}" cy="${60+shellH+2}" rx="${4+t*0.3}" ry="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50-shellW*0.85}" cy="${60+shellH*0.3}" rx="${3.5+t*0.2}" ry="${4+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="1.2"/>`;
  // しっぽ
  const tail = stage >= 5 ? `<path d="M${50-shellW} ${60+shellH*0.1} L${50-shellW-5-t*0.5} ${60+shellH*0.3} L${50-shellW-3} ${60+shellH*0.5} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="1"/>` : "";
  // 顔
  const headCx = 50+shellW+3, headCy = 60+shellH*0.4;
  const face = bigEyes(headCx-2.5, headCx+1, headCy-1, 2.5+t*0.15) + smile(headCx, headCy+2, 2);
  // 王冠（最終形態）
  const crown = stage >= 9 ? `<path d="M${50-shellW*0.4} ${60-shellH-2} L${50-shellW*0.2} ${60-shellH-6} L${50-shellW*0.05} ${60-shellH-3} L50 ${60-shellH-7} L${50+shellW*0.05} ${60-shellH-3} L${50+shellW*0.2} ${60-shellH-6} L${50+shellW*0.4} ${60-shellH-2} Z" fill="#fff200" stroke="#ff9900" stroke-width="1"/>` : "";
  return legs + tail + shell + pattern + highlight + crown + head + face;
}

/* -------- 14. クラゲ -------- */
function drawJellyfish(e, stage, pid) {
  const t = stage - 4;
  const bellW = 22 + t*2.2;
  const bellH = 16 + t*1.5;
  // ベル（半円）
  const bell = `<path d="M${50-bellW} 56 Q${50-bellW} ${56-bellH*1.4} 50 ${56-bellH*1.4} Q${50+bellW} ${56-bellH*1.4} ${50+bellW} 56 Q${50+bellW*0.7} 60 ${50+bellW*0.4} 56 Q${50+bellW*0.1} 60 ${50-bellW*0.2} 56 Q${50-bellW*0.5} 60 ${50-bellW*0.8} 56 Q${50-bellW*0.9} 58 ${50-bellW} 56 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6" opacity="0.92"/>`;
  // ベルのハイライト
  const highlight = `<ellipse cx="${50-bellW*0.3}" cy="${50-bellH*0.6}" rx="${bellW*0.3}" ry="${bellH*0.5}" fill="white" opacity="0.4"/>`;
  // 触手
  const tentacles = `
    <path d="M${50-bellW*0.7} 56 Q${50-bellW*0.85} ${66+t} ${50-bellW*0.6} ${72+t*1.5} Q${50-bellW*0.45} ${78+t*1.8} ${50-bellW*0.7} ${82+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
    <path d="M${50-bellW*0.35} 58 Q${50-bellW*0.5} ${68+t} ${50-bellW*0.2} ${76+t*1.5} Q${50-bellW*0.4} ${82+t*1.8} ${50-bellW*0.15} ${88+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
    <path d="M50 58 Q${50+2} ${70+t} ${50-1} ${78+t*1.5} Q${50+2} ${84+t*1.8} ${50} ${90+t*2}" stroke="${e.a}" stroke-width="${2.4+t*0.2}" fill="none" stroke-linecap="round"/>
    <path d="M${50+bellW*0.35} 58 Q${50+bellW*0.5} ${68+t} ${50+bellW*0.2} ${76+t*1.5} Q${50+bellW*0.4} ${82+t*1.8} ${50+bellW*0.15} ${88+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>
    <path d="M${50+bellW*0.7} 56 Q${50+bellW*0.85} ${66+t} ${50+bellW*0.6} ${72+t*1.5} Q${50+bellW*0.45} ${78+t*1.8} ${50+bellW*0.7} ${82+t*2}" stroke="${e.s}" stroke-width="${2+t*0.2}" fill="none" stroke-linecap="round"/>`;
  // ベル内の発光（最終形態）
  const glow = stage >= 7 ? `<circle cx="50" cy="${50-bellH*0.4}" r="${4+t*0.5}" fill="${e.a}" opacity="0.55"/>` : "";
  // 顔
  const eyeCy = 50 - bellH*0.3;
  const mouthCy = 50 - bellH*0.05;
  return tentacles + bell + highlight + glow + bigEyes(46, 54, eyeCy, 3+t*0.25) + smile(50, mouthCy, 3);
}

/* -------- 15. トカゲ -------- */
function drawLizard(e, stage, pid) {
  const t = stage - 4;
  const bodyW = 14 + t*1.8;
  const bodyH = 10 + t*1;
  // 横長の体
  const body = `<ellipse cx="50" cy="62" rx="${bodyW}" ry="${bodyH}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 頭（細長い）
  const head = `<ellipse cx="${50+bodyW+2}" cy="60" rx="${8+t*0.5}" ry="${7+t*0.4}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 4本足
  const legs = `<ellipse cx="${50-bodyW*0.6}" cy="${62+bodyH+1}" rx="3" ry="${3+t*0.2}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <ellipse cx="${50+bodyW*0.5}" cy="${62+bodyH+1}" rx="3" ry="${3+t*0.2}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <ellipse cx="${50-bodyW*0.6}" cy="${62-bodyH-1}" rx="3" ry="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <ellipse cx="${50+bodyW*0.5}" cy="${62-bodyH-1}" rx="3" ry="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>`;
  // 長い尻尾（カール）
  const tail = `<path d="M${50-bodyW} 62 Q${50-bodyW-8-t} ${64+t} ${50-bodyW-12-t*1.2} ${56+t*0.5} Q${50-bodyW-14-t*1.4} ${50-t} ${50-bodyW-8-t*0.6} ${48-t}" stroke="url(#${pid})" stroke-width="${5+t*0.4}" fill="none" stroke-linecap="round"/>`;
  // 背中のトゲ
  const spikes = stage >= 6 ? `<path d="M${50-bodyW*0.5} ${62-bodyH} L${50-bodyW*0.45} ${62-bodyH-4-t*0.3} L${50-bodyW*0.3} ${62-bodyH+1} Z M${50-bodyW*0.15} ${62-bodyH} L${50-bodyW*0.1} ${62-bodyH-5-t*0.3} L${50+bodyW*0.05} ${62-bodyH+1} Z M${50+bodyW*0.2} ${62-bodyH} L${50+bodyW*0.25} ${62-bodyH-5-t*0.3} L${50+bodyW*0.4} ${62-bodyH+1} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>` : "";
  // 舌
  const tongue = stage >= 7 ? `<path d="M${50+bodyW+8+t*0.5} 60 L${50+bodyW+14+t} ${58+t*0.4} L${50+bodyW+14+t} ${62-t*0.4} Z" fill="#ff4d80" stroke="#3a2a2a" stroke-width="0.6"/>
    <path d="M${50+bodyW+14+t} 60 L${50+bodyW+18+t*1.2} ${58+t*0.4} M${50+bodyW+14+t} 60 L${50+bodyW+18+t*1.2} ${62-t*0.4}" stroke="#ff4d80" stroke-width="1.4" fill="none" stroke-linecap="round"/>` : "";
  // 顔（頭の上）
  const headCx = 50+bodyW+2;
  const face = bigEyes(headCx-2, headCx+2, 58, 3+t*0.2);
  return tail + legs + body + head + spikes + face + tongue;
}

/* -------- 16. クラブ (カニ) -------- */
function drawCrab(e, stage, pid) {
  const t = stage - 4;
  const bodyW = 18 + t*2;
  const bodyH = 11 + t*1;
  // 横長楕円の甲羅
  const body = `<ellipse cx="50" cy="62" rx="${bodyW}" ry="${bodyH}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 甲羅の縁
  const trim = `<path d="M${50-bodyW} 62 Q50 ${62+bodyH*0.3} ${50+bodyW} 62" stroke="${e.s}" stroke-width="1.5" fill="none" opacity="0.7"/>`;
  // 大きなハサミ
  const clawSize = 5 + t*0.6;
  const claws = `
    <path d="M${50-bodyW-4} ${62-bodyH-2} Q${50-bodyW-10-t} ${62-bodyH-8-t} ${50-bodyW-14-t*1.2} ${62-bodyH-4-t*0.4}" stroke="url(#${pid})" stroke-width="${4+t*0.3}" fill="none" stroke-linecap="round"/>
    <path d="M${50-bodyW-14-t*1.2} ${62-bodyH-4-t*0.4} L${50-bodyW-22-t*1.5} ${62-bodyH-8-t*0.6} L${50-bodyW-18-t*1.4} ${62-bodyH+2-t*0.2} L${50-bodyW-14-t*1.2} ${62-bodyH-4-t*0.4} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50-bodyW-22-t*1.5} ${62-bodyH-8-t*0.6} L${50-bodyW-18-t*1.4} ${62-bodyH-5-t*0.4}" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>
    <path d="M${50+bodyW+4} ${62-bodyH-2} Q${50+bodyW+10+t} ${62-bodyH-8-t} ${50+bodyW+14+t*1.2} ${62-bodyH-4-t*0.4}" stroke="url(#${pid})" stroke-width="${4+t*0.3}" fill="none" stroke-linecap="round"/>
    <path d="M${50+bodyW+14+t*1.2} ${62-bodyH-4-t*0.4} L${50+bodyW+22+t*1.5} ${62-bodyH-8-t*0.6} L${50+bodyW+18+t*1.4} ${62-bodyH+2-t*0.2} L${50+bodyW+14+t*1.2} ${62-bodyH-4-t*0.4} Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.4"/>
    <path d="M${50+bodyW+22+t*1.5} ${62-bodyH-8-t*0.6} L${50+bodyW+18+t*1.4} ${62-bodyH-5-t*0.4}" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>`;
  // 足 (側面に3本ずつ)
  const legs = stage >= 5 ? `
    <path d="M${50-bodyW*0.7} ${62+bodyH-2} L${50-bodyW-3} ${62+bodyH+4+t*0.3}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
    <path d="M${50-bodyW*0.3} ${62+bodyH-1} L${50-bodyW*0.3-3} ${62+bodyH+6+t*0.4}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
    <path d="M${50-bodyW*0.7} ${62+bodyH-4} L${50-bodyW-5} ${62+bodyH-1+t*0.2}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
    <path d="M${50+bodyW*0.7} ${62+bodyH-2} L${50+bodyW+3} ${62+bodyH+4+t*0.3}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
    <path d="M${50+bodyW*0.3} ${62+bodyH-1} L${50+bodyW*0.3+3} ${62+bodyH+6+t*0.4}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>
    <path d="M${50+bodyW*0.7} ${62+bodyH-4} L${50+bodyW+5} ${62+bodyH-1+t*0.2}" stroke="#3a2a2a" stroke-width="2" stroke-linecap="round"/>` : "";
  // ストーク目 (柄のついた目)
  const stalkEyes = `
    <line x1="${50-4}" y1="${62-bodyH*0.6}" x2="${50-4}" y2="${62-bodyH-3-t*0.4}" stroke="#3a2a2a" stroke-width="1.4"/>
    <line x1="${50+4}" y1="${62-bodyH*0.6}" x2="${50+4}" y2="${62-bodyH-3-t*0.4}" stroke="#3a2a2a" stroke-width="1.4"/>
    <circle cx="${50-4}" cy="${62-bodyH-3-t*0.4}" r="${3+t*0.15}" fill="white" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50+4}" cy="${62-bodyH-3-t*0.4}" r="${3+t*0.15}" fill="white" stroke="#3a2a2a" stroke-width="1.2"/>
    <circle cx="${50-4}" cy="${62-bodyH-3-t*0.4}" r="${1.5+t*0.1}" fill="#222"/>
    <circle cx="${50+4}" cy="${62-bodyH-3-t*0.4}" r="${1.5+t*0.1}" fill="#222"/>`;
  // 口
  const mouth = `<path d="M${50-4} ${62+bodyH*0.2} Q50 ${62+bodyH*0.45} ${50+4} ${62+bodyH*0.2}" stroke="#3a2a2a" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  // 泡 (最終)
  const bubbles = stage >= 9 ? `<circle cx="20" cy="30" r="2.5" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5" opacity="0.8"/>
    <circle cx="80" cy="28" r="2" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.5" opacity="0.8"/>` : "";
  return legs + claws + body + trim + stalkEyes + mouth + bubbles;
}

/* -------- 17. キノコ -------- */
function drawMushroom(e, stage, pid) {
  const t = stage - 4;
  const capW = 18 + t*2.5;
  const capH = 13 + t*1.5;
  const stemW = 9 + t*0.8;
  const stemH = 14 + t*1.3;
  // 茎
  const stem = `<rect x="${50-stemW}" y="${62}" width="${stemW*2}" height="${stemH}" rx="${stemW*0.6}" fill="${e.s}" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 傘 (半円)
  const cap = `<path d="M${50-capW} 62 Q${50-capW} ${62-capH*1.4} 50 ${62-capH*1.4} Q${50+capW} ${62-capH*1.4} ${50+capW} 62 Q${50+capW*0.6} ${62+capH*0.1} 50 62 Q${50-capW*0.6} ${62+capH*0.1} ${50-capW} 62 Z" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 傘の白い水玉
  const spots = `
    <circle cx="${50-capW*0.4}" cy="${62-capH*0.6}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="${50+capW*0.45}" cy="${62-capH*0.5}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    <circle cx="50" cy="${62-capH*0.95}" r="${2.5+t*0.15}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.6"/>
    ${stage >= 6 ? `<circle cx="${50-capW*0.15}" cy="${62-capH*0.3}" r="${2+t*0.1}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.5"/>` : ""}`;
  // 傘の縁
  const trim = `<path d="M${50-capW} 62 Q50 ${62+capH*0.15} ${50+capW} 62" stroke="#3a2a2a" stroke-width="1.2" fill="none"/>`;
  // 茎の顔
  const stemCy = 62 + stemH*0.5;
  const face = bigEyes(50-stemW*0.45, 50+stemW*0.45, stemCy, 2.5+t*0.2) + blush(50-stemW*0.55, 50+stemW*0.55, stemCy+3, 2.5, "#ff8fbf") + smile(50, stemCy+4, 2.2);
  // 小さい手
  const hands = stage >= 6 ? `<circle cx="${50-stemW-3}" cy="${stemCy+2}" r="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <circle cx="${50+stemW+3}" cy="${stemCy+2}" r="${2.5+t*0.15}" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>` : "";
  // 草 (足元)
  const grass = stage >= 7 ? `<path d="M${50-stemW-4} ${62+stemH} L${50-stemW-6} ${62+stemH+3} M${50+stemW+4} ${62+stemH} L${50+stemW+6} ${62+stemH+3}" stroke="${e.p}" stroke-width="1.5" stroke-linecap="round"/>` : "";
  return grass + stem + hands + cap + trim + spots + face;
}

/* -------- 18. フラワー (花) -------- */
function drawFlora(e, stage, pid) {
  const bodyR = 17 + (stage-4) * 2.5;
  const eyeR = 4.5 + (stage-4)*0.3;
  const leafH = (stage-3)*2.8;
  const body = `<ellipse cx="50" cy="64" rx="${bodyR}" ry="${bodyR}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  const belly = stage >= 5 ? `<ellipse cx="50" cy="68" rx="${bodyR*0.6}" ry="${bodyR*0.7}" fill="${e.s}" opacity="0.85"/>` : "";
  const headLeaf = `<path d="M50 ${64-bodyR} Q44 ${64-bodyR-leafH*1.3} 38 ${64-bodyR-leafH*0.3} Q44 ${64-bodyR-leafH*0.6} 50 ${64-bodyR*0.9} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M50 ${64-bodyR} Q56 ${64-bodyR-leafH*1.3} 62 ${64-bodyR-leafH*0.3} Q56 ${64-bodyR-leafH*0.6} 50 ${64-bodyR*0.9} Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="1"/>
    <path d="M50 ${64-bodyR-leafH*0.3} L50 ${64-bodyR}" stroke="#3a2a2a" stroke-width="1"/>`;
  const flower = stage >= 7 ? `<g transform="translate(50 ${64-bodyR-leafH*0.85})">
    <circle cx="0" cy="-${leafH*0.4}" r="3.5" fill="${e.a}"/>
    <circle cx="${leafH*0.38}" cy="-${leafH*0.15}" r="3.5" fill="${e.a}"/>
    <circle cx="-${leafH*0.38}" cy="-${leafH*0.15}" r="3.5" fill="${e.a}"/>
    <circle cx="${leafH*0.25}" cy="${leafH*0.3}" r="3.5" fill="${e.a}"/>
    <circle cx="-${leafH*0.25}" cy="${leafH*0.3}" r="3.5" fill="${e.a}"/>
    <circle cx="0" cy="0" r="${2+stage*0.15}" fill="${e.p}"/>
  </g>` : "";
  const vines = stage >= 6 ? `<path d="M${50-bodyR*0.85} 66 Q${50-bodyR-8} 72 ${50-bodyR-6} 80 Q${50-bodyR-4} 82 ${50-bodyR-8} 84" stroke="${e.s}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M${50+bodyR*0.85} 66 Q${50+bodyR+8} 72 ${50+bodyR+6} 80 Q${50+bodyR+4} 82 ${50+bodyR+8} 84" stroke="${e.s}" stroke-width="2.2" fill="none" stroke-linecap="round"/>` : "";
  const leaves = stage >= 8 ? `<path d="M${50-bodyR-4} 78 Q${50-bodyR-12} 76 ${50-bodyR-12} 86 Q${50-bodyR-6} 86 ${50-bodyR-4} 78Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>
    <path d="M${50+bodyR+4} 78 Q${50+bodyR+12} 76 ${50+bodyR+12} 86 Q${50+bodyR+6} 86 ${50+bodyR+4} 78Z" fill="${e.s}" stroke="#3a2a2a" stroke-width="0.8"/>` : "";
  return vines + body + belly + leaves + headLeaf + flower + blush(50-bodyR*0.55, 50+bodyR*0.55, 66, 4, e.a) + bigEyes(50-bodyR*0.4, 50+bodyR*0.4, 60, eyeR) + smile(50, 68, 3.5);
}

/* -------- 19. ライオン -------- */
function drawLion(e, stage, pid) {
  const t = stage - 4;
  const headR = 16 + t*1.8;
  const maneSpikes = 12;
  // たてがみ (頭の周りのギザギザ)
  let mane = `<g>`;
  for (let i = 0; i < maneSpikes; i++) {
    const ang = (i / maneSpikes) * Math.PI * 2;
    const innerR = headR * 0.9;
    const outerR = headR * 1.4 + t*0.4;
    const cx1 = 50 + Math.cos(ang) * innerR;
    const cy1 = 60 + Math.sin(ang) * innerR;
    const cx2 = 50 + Math.cos(ang + 0.1) * outerR;
    const cy2 = 60 + Math.sin(ang + 0.1) * outerR;
    const cx3 = 50 + Math.cos(ang + 0.26) * innerR;
    const cy3 = 60 + Math.sin(ang + 0.26) * innerR;
    mane += `<path d="M${cx1.toFixed(1)} ${cy1.toFixed(1)} L${cx2.toFixed(1)} ${cy2.toFixed(1)} L${cx3.toFixed(1)} ${cy3.toFixed(1)} Z" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>`;
  }
  mane += `</g>`;
  // 顔の本体 (円)
  const face = `<circle cx="50" cy="60" r="${headR}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.6"/>`;
  // 鼻周り
  const muzzle = `<ellipse cx="50" cy="${60+headR*0.3}" rx="${headR*0.55}" ry="${headR*0.4}" fill="${e.s}"/>`;
  // 耳
  const ears = `<ellipse cx="${50-headR*0.65}" cy="${60-headR*0.6}" rx="${4+t*0.2}" ry="${5+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50+headR*0.65}" cy="${60-headR*0.6}" rx="${4+t*0.2}" ry="${5+t*0.2}" fill="url(#${pid})" stroke="#3a2a2a" stroke-width="1.2"/>
    <ellipse cx="${50-headR*0.65}" cy="${60-headR*0.55}" rx="${2+t*0.1}" ry="${3+t*0.1}" fill="${e.s}"/>
    <ellipse cx="${50+headR*0.65}" cy="${60-headR*0.55}" rx="${2+t*0.1}" ry="${3+t*0.1}" fill="${e.s}"/>`;
  // 鼻
  const nose = `<path d="M${50-3} ${60+headR*0.15} L${50+3} ${60+headR*0.15} L50 ${60+headR*0.32} Z" fill="#3a2a2a"/>`;
  // 口
  const mouth = `<path d="M50 ${60+headR*0.32} L50 ${60+headR*0.5} M50 ${60+headR*0.5} Q${50-3} ${60+headR*0.55} ${50-5} ${60+headR*0.45} M50 ${60+headR*0.5} Q${50+3} ${60+headR*0.55} ${50+5} ${60+headR*0.45}" stroke="#3a2a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  // ヒゲ点
  const cheekDots = `<circle cx="${50-headR*0.4}" cy="${60+headR*0.3}" r="0.7" fill="#3a2a2a"/>
    <circle cx="${50-headR*0.35}" cy="${60+headR*0.42}" r="0.7" fill="#3a2a2a"/>
    <circle cx="${50+headR*0.4}" cy="${60+headR*0.3}" r="0.7" fill="#3a2a2a"/>
    <circle cx="${50+headR*0.35}" cy="${60+headR*0.42}" r="0.7" fill="#3a2a2a"/>`;
  // しっぽ + ふさ
  const tail = stage >= 7 ? `<path d="M${50+headR+1} ${60+headR*0.6} Q${50+headR+12} ${60+headR*0.2} ${50+headR+14} ${60-headR*0.2}" stroke="${e.a}" stroke-width="${3.5+t*0.2}" fill="none" stroke-linecap="round"/>
    <circle cx="${50+headR+14}" cy="${60-headR*0.2}" r="${3+t*0.2}" fill="${e.a}" stroke="#3a2a2a" stroke-width="0.8"/>` : "";
  return tail + mane + face + muzzle + ears + blush(50-headR*0.5, 50+headR*0.5, 60+headR*0.05, 3.5, "#ff8fbf") + bigEyes(50-headR*0.32, 50+headR*0.32, 58, 4+t*0.25) + nose + mouth + cheekDots;
}

/* -------- 20. レインボー (虹) -------- */
function drawRainbow(e, stage, pid) {
  const t = stage - 4;
  const arcR = 16 + t*2.5;
  const colors = ["#ff4d4d", "#ff8c1a", "#fff200", "#3ec46e", "#3aa6ff", "#a64dff"];
  // 雲ベース (下)
  const cloudY = 70 + t*0.5;
  const cloud = `
    <ellipse cx="${50-15-t}" cy="${cloudY}" rx="${10+t*0.5}" ry="${7+t*0.3}" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
    <ellipse cx="${50+15+t}" cy="${cloudY}" rx="${10+t*0.5}" ry="${7+t*0.3}" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>
    <ellipse cx="50" cy="${cloudY-3}" rx="${14+t*0.6}" ry="${9+t*0.4}" fill="#fff" stroke="#3a2a2a" stroke-width="1.4"/>`;
  // 虹のアーチ
  let arcs = "";
  const visibleArcs = Math.min(6, 2 + t);
  for (let i = 0; i < visibleArcs; i++) {
    const r = arcR - i * (arcR*0.13);
    arcs += `<path d="M${50-r} ${cloudY-3} A${r} ${r} 0 0 1 ${50+r} ${cloudY-3}" stroke="${colors[i]}" stroke-width="${3.5+t*0.1}" fill="none"/>`;
  }
  // 顔（雲の上）
  const face = bigEyes(46, 54, cloudY-3, 3+t*0.2) + blush(43, 57, cloudY-1, 2.5, "#ff8fbf") + smile(50, cloudY+1, 2.5);
  // キラキラ星 (アーチ外)
  const stars = stage >= 7 ? `
    <path d="M${50-arcR-8} ${cloudY-12} L${50-arcR-7} ${cloudY-9} L${50-arcR-4} ${cloudY-8} L${50-arcR-7} ${cloudY-6} L${50-arcR-8} ${cloudY-3} L${50-arcR-9} ${cloudY-6} L${50-arcR-12} ${cloudY-8} L${50-arcR-9} ${cloudY-9} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.5"/>
    <path d="M${50+arcR+8} ${cloudY-12} L${50+arcR+9} ${cloudY-9} L${50+arcR+12} ${cloudY-8} L${50+arcR+9} ${cloudY-6} L${50+arcR+8} ${cloudY-3} L${50+arcR+7} ${cloudY-6} L${50+arcR+4} ${cloudY-8} L${50+arcR+7} ${cloudY-9} Z" fill="#fff200" stroke="#ff9900" stroke-width="0.5"/>` : "";
  // ハート (最終)
  const hearts = stage >= 9 ? `<path d="M50 ${cloudY-arcR-8} C46 ${cloudY-arcR-12} 42 ${cloudY-arcR-8} 50 ${cloudY-arcR-3} C58 ${cloudY-arcR-8} 54 ${cloudY-arcR-12} 50 ${cloudY-arcR-8} Z" fill="#ff6b9d" stroke="#3a2a2a" stroke-width="1"/>` : "";
  return arcs + hearts + stars + cloud + face;
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
