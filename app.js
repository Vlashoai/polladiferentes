// ============================================================
// POLLA DEL MUNDIAL 2026 — LOS DIFERENTES
// app.js — TODO el código en un solo archivo (sin imports rotos)
// ============================================================

// ⚠️ PASO 1: Reemplaza esto con las credenciales de tu NUEVO proyecto Firebase
// (debe ser distinto al proyecto "polla-mundial-2026" que ya usaste)
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCposkIdBzvRSOODJTFeYMo7GPWIFMsp3A",
  authDomain:        "polla-diferentes-2026.firebaseapp.com",
  databaseURL:       "https://polla-diferentes-2026-default-rtdb.firebaseio.com",
  projectId:         "polla-diferentes-2026",
  storageBucket:     "polla-diferentes-2026.firebasestorage.app",
  messagingSenderId: "1095775938013",
  appId:             "1:1095775938013:web:28d5b05cdc0fef4611c234"
};

const DB_URL = FIREBASE_CONFIG.databaseURL;
const ADMIN_PIN = '2026';

// ============================================================
// DATOS DEL TORNEO
// ============================================================

const PARTICIPANTS = [
  'Andru', 'Alonso', 'Rudy', 'Wipipi',
  'Vlasho', 'Chocho', 'Caleño', 'Hugo',
  'Veron', 'Cesar', 'Tigreza', 'chompi',
  'Gonzalo', 'Beto', 'Matamba Diego', 'Gerson',
  'Participante 17', 'Participante 18',
  'Participante 19', 'Participante 20'
];

const POINTS = {
  grupos: 2,
  'Ronda de 32': 3,
  'Ronda de 16': 4,
  'Cuartos de Final': 5,
  'Semifinal': 7,
  'Tercer Lugar': 5,
  'Final': 10
};

const GROUP_MATCHES = [
  {id:1,fecha:'2026-06-11',hora:'13:00',grupo:'Grupo A',eq1:'México',eq2:'Sudáfrica'},
  {id:2,fecha:'2026-06-11',hora:'22:00',grupo:'Grupo A',eq1:'Corea del Sur',eq2:'Rep. Checa'},
  {id:3,fecha:'2026-06-12',hora:'15:00',grupo:'Grupo B',eq1:'Canadá',eq2:'Bosnia y Herzeg.'},
  {id:4,fecha:'2026-06-12',hora:'21:00',grupo:'Grupo D',eq1:'Estados Unidos',eq2:'Paraguay'},
  {id:5,fecha:'2026-06-13',hora:'15:00',grupo:'Grupo B',eq1:'Qatar',eq2:'Suiza'},
  {id:6,fecha:'2026-06-13',hora:'18:00',grupo:'Grupo C',eq1:'Brasil',eq2:'Marruecos'},
  {id:7,fecha:'2026-06-13',hora:'21:00',grupo:'Grupo C',eq1:'Haití',eq2:'Escocia'},
  {id:8,fecha:'2026-06-13',hora:'00:00',grupo:'Grupo D',eq1:'Australia',eq2:'Turquía'},
  {id:9,fecha:'2026-06-14',hora:'13:00',grupo:'Grupo E',eq1:'Alemania',eq2:'Curazao'},
  {id:10,fecha:'2026-06-14',hora:'16:00',grupo:'Grupo F',eq1:'Países Bajos',eq2:'Japón'},
  {id:11,fecha:'2026-06-14',hora:'19:00',grupo:'Grupo E',eq1:'Costa de Marfil',eq2:'Ecuador'},
  {id:12,fecha:'2026-06-14',hora:'22:00',grupo:'Grupo F',eq1:'Suecia',eq2:'Túnez'},
  {id:13,fecha:'2026-06-15',hora:'12:00',grupo:'Grupo H',eq1:'España',eq2:'Cabo Verde'},
  {id:14,fecha:'2026-06-15',hora:'15:00',grupo:'Grupo G',eq1:'Bélgica',eq2:'Egipto'},
  {id:15,fecha:'2026-06-15',hora:'18:00',grupo:'Grupo H',eq1:'Arabia Saudita',eq2:'Uruguay'},
  {id:16,fecha:'2026-06-15',hora:'21:00',grupo:'Grupo G',eq1:'Irán',eq2:'Nueva Zelanda'},
  {id:17,fecha:'2026-06-16',hora:'15:00',grupo:'Grupo I',eq1:'Francia',eq2:'Senegal'},
  {id:18,fecha:'2026-06-16',hora:'18:00',grupo:'Grupo I',eq1:'Irak',eq2:'Noruega'},
  {id:19,fecha:'2026-06-16',hora:'21:00',grupo:'Grupo J',eq1:'Argentina',eq2:'Argelia'},
  {id:20,fecha:'2026-06-16',hora:'00:00',grupo:'Grupo J',eq1:'Austria',eq2:'Jordania'},
  {id:21,fecha:'2026-06-17',hora:'13:00',grupo:'Grupo K',eq1:'Portugal',eq2:'Rep. Dem. Congo'},
  {id:22,fecha:'2026-06-17',hora:'16:00',grupo:'Grupo L',eq1:'Inglaterra',eq2:'Croacia'},
  {id:23,fecha:'2026-06-17',hora:'19:00',grupo:'Grupo L',eq1:'Ghana',eq2:'Panamá'},
  {id:24,fecha:'2026-06-17',hora:'22:00',grupo:'Grupo K',eq1:'Uzbekistán',eq2:'Colombia'},
  {id:25,fecha:'2026-06-18',hora:'12:00',grupo:'Grupo A',eq1:'Rep. Checa',eq2:'Sudáfrica'},
  {id:26,fecha:'2026-06-18',hora:'15:00',grupo:'Grupo B',eq1:'Suiza',eq2:'Bosnia y Herzeg.'},
  {id:27,fecha:'2026-06-18',hora:'18:00',grupo:'Grupo B',eq1:'Canadá',eq2:'Qatar'},
  {id:28,fecha:'2026-06-18',hora:'21:00',grupo:'Grupo A',eq1:'México',eq2:'Corea del Sur'},
  {id:29,fecha:'2026-06-19',hora:'15:00',grupo:'Grupo D',eq1:'Estados Unidos',eq2:'Australia'},
  {id:30,fecha:'2026-06-19',hora:'18:00',grupo:'Grupo C',eq1:'Escocia',eq2:'Marruecos'},
  {id:31,fecha:'2026-06-19',hora:'21:00',grupo:'Grupo C',eq1:'Brasil',eq2:'Haití'},
  {id:32,fecha:'2026-06-19',hora:'00:00',grupo:'Grupo D',eq1:'Turquía',eq2:'Paraguay'},
  {id:33,fecha:'2026-06-20',hora:'13:00',grupo:'Grupo F',eq1:'Países Bajos',eq2:'Suecia'},
  {id:34,fecha:'2026-06-20',hora:'16:00',grupo:'Grupo E',eq1:'Alemania',eq2:'Costa de Marfil'},
  {id:35,fecha:'2026-06-20',hora:'20:00',grupo:'Grupo E',eq1:'Ecuador',eq2:'Curazao'},
  {id:36,fecha:'2026-06-20',hora:'00:00',grupo:'Grupo F',eq1:'Túnez',eq2:'Japón'},
  {id:37,fecha:'2026-06-21',hora:'12:00',grupo:'Grupo H',eq1:'España',eq2:'Arabia Saudita'},
  {id:38,fecha:'2026-06-21',hora:'15:00',grupo:'Grupo G',eq1:'Bélgica',eq2:'Irán'},
  {id:39,fecha:'2026-06-21',hora:'18:00',grupo:'Grupo H',eq1:'Uruguay',eq2:'Cabo Verde'},
  {id:40,fecha:'2026-06-21',hora:'21:00',grupo:'Grupo G',eq1:'Nueva Zelanda',eq2:'Egipto'},
  {id:41,fecha:'2026-06-22',hora:'13:00',grupo:'Grupo J',eq1:'Argentina',eq2:'Austria'},
  {id:42,fecha:'2026-06-22',hora:'17:00',grupo:'Grupo I',eq1:'Irak',eq2:'Francia'},
  {id:43,fecha:'2026-06-22',hora:'20:00',grupo:'Grupo I',eq1:'Noruega',eq2:'Senegal'},
  {id:44,fecha:'2026-06-22',hora:'23:00',grupo:'Grupo J',eq1:'Jordania',eq2:'Argelia'},
  {id:45,fecha:'2026-06-23',hora:'13:00',grupo:'Grupo K',eq1:'Portugal',eq2:'Uzbekistán'},
  {id:46,fecha:'2026-06-23',hora:'16:00',grupo:'Grupo L',eq1:'Inglaterra',eq2:'Ghana'},
  {id:47,fecha:'2026-06-23',hora:'19:00',grupo:'Grupo L',eq1:'Panamá',eq2:'Croacia'},
  {id:48,fecha:'2026-06-23',hora:'22:00',grupo:'Grupo K',eq1:'Rep. Dem. Congo',eq2:'Colombia'},
  {id:49,fecha:'2026-06-24',hora:'15:00',grupo:'Grupo B',eq1:'Suiza',eq2:'Canadá'},
  {id:50,fecha:'2026-06-24',hora:'15:00',grupo:'Grupo B',eq1:'Bosnia y Herzeg.',eq2:'Qatar'},
  {id:51,fecha:'2026-06-24',hora:'18:00',grupo:'Grupo C',eq1:'Escocia',eq2:'Brasil'},
  {id:52,fecha:'2026-06-24',hora:'18:00',grupo:'Grupo C',eq1:'Marruecos',eq2:'Haití'},
  {id:53,fecha:'2026-06-24',hora:'21:00',grupo:'Grupo A',eq1:'Rep. Checa',eq2:'México'},
  {id:54,fecha:'2026-06-24',hora:'21:00',grupo:'Grupo A',eq1:'Sudáfrica',eq2:'Corea del Sur'},
  {id:55,fecha:'2026-06-25',hora:'16:00',grupo:'Grupo E',eq1:'Ecuador',eq2:'Alemania'},
  {id:56,fecha:'2026-06-25',hora:'16:00',grupo:'Grupo E',eq1:'Curazao',eq2:'Costa de Marfil'},
  {id:57,fecha:'2026-06-25',hora:'19:00',grupo:'Grupo F',eq1:'Japón',eq2:'Suecia'},
  {id:58,fecha:'2026-06-25',hora:'19:00',grupo:'Grupo F',eq1:'Túnez',eq2:'Países Bajos'},
  {id:59,fecha:'2026-06-25',hora:'22:00',grupo:'Grupo D',eq1:'Turquía',eq2:'Estados Unidos'},
  {id:60,fecha:'2026-06-25',hora:'22:00',grupo:'Grupo D',eq1:'Paraguay',eq2:'Australia'},
  {id:61,fecha:'2026-06-26',hora:'15:00',grupo:'Grupo I',eq1:'Noruega',eq2:'Francia'},
  {id:62,fecha:'2026-06-26',hora:'15:00',grupo:'Grupo I',eq1:'Senegal',eq2:'Irak'},
  {id:63,fecha:'2026-06-26',hora:'20:00',grupo:'Grupo H',eq1:'Cabo Verde',eq2:'Arabia Saudita'},
  {id:64,fecha:'2026-06-26',hora:'20:00',grupo:'Grupo H',eq1:'Uruguay',eq2:'España'},
  {id:65,fecha:'2026-06-26',hora:'23:00',grupo:'Grupo G',eq1:'Egipto',eq2:'Irán'},
  {id:66,fecha:'2026-06-26',hora:'23:00',grupo:'Grupo G',eq1:'Nueva Zelanda',eq2:'Bélgica'},
  {id:67,fecha:'2026-06-27',hora:'17:00',grupo:'Grupo L',eq1:'Panamá',eq2:'Inglaterra'},
  {id:68,fecha:'2026-06-27',hora:'17:00',grupo:'Grupo L',eq1:'Croacia',eq2:'Ghana'},
  {id:69,fecha:'2026-06-27',hora:'19:30',grupo:'Grupo K',eq1:'Colombia',eq2:'Portugal'},
  {id:70,fecha:'2026-06-27',hora:'19:30',grupo:'Grupo K',eq1:'Rep. Dem. Congo',eq2:'Uzbekistán'},
  {id:71,fecha:'2026-06-27',hora:'22:00',grupo:'Grupo J',eq1:'Argelia',eq2:'Austria'},
  {id:72,fecha:'2026-06-27',hora:'22:00',grupo:'Grupo J',eq1:'Jordania',eq2:'Argentina'}
];

const KNOCKOUT_MATCHES = [
  {id:73,fase:'Ronda de 32',label:'Sudáfrica vs Canadá',fecha:'2026-06-28'},
  {id:74,fase:'Ronda de 32',label:'Brasil vs Japón',fecha:'2026-06-29'},
  {id:75,fase:'Ronda de 32',label:'Alemania vs Paraguay',fecha:'2026-06-29'},
  {id:76,fase:'Ronda de 32',label:'Países Bajos vs Marruecos',fecha:'2026-06-29'},
  {id:77,fase:'Ronda de 32',label:'Costa de Marfil vs Noruega',fecha:'2026-06-30'},
  {id:78,fase:'Ronda de 32',label:'Francia vs Suecia',fecha:'2026-06-30'},
  {id:79,fase:'Ronda de 32',label:'México vs Ecuador',fecha:'2026-06-30'},
  {id:80,fase:'Ronda de 32',label:'Inglaterra vs RD Congo',fecha:'2026-07-01'},
  {id:81,fase:'Ronda de 32',label:'Bélgica vs Senegal',fecha:'2026-07-01'},
  {id:82,fase:'Ronda de 32',label:'Estados Unidos vs Bosnia y Herzeg.',fecha:'2026-07-01'},
  {id:83,fase:'Ronda de 32',label:'España vs Austria',fecha:'2026-07-02'},
  {id:84,fase:'Ronda de 32',label:'Portugal vs Croacia',fecha:'2026-07-02'},
  {id:85,fase:'Ronda de 32',label:'Suiza vs Argelia',fecha:'2026-07-02'},
  {id:86,fase:'Ronda de 32',label:'Australia vs Egipto',fecha:'2026-07-03'},
  {id:87,fase:'Ronda de 32',label:'Argentina vs Cabo Verde',fecha:'2026-07-03'},
  {id:88,fase:'Ronda de 32',label:'Colombia vs Ghana',fecha:'2026-07-03'},
  {id:89,fase:'Ronda de 16',label:'Gan. RD32-1 vs Gan. RD32-2',fecha:'2026-07-04'},
  {id:90,fase:'Ronda de 16',label:'Gan. RD32-3 vs Gan. RD32-4',fecha:'2026-07-04'},
  {id:91,fase:'Ronda de 16',label:'Gan. RD32-5 vs Gan. RD32-6',fecha:'2026-07-05'},
  {id:92,fase:'Ronda de 16',label:'Gan. RD32-7 vs Gan. RD32-8',fecha:'2026-07-05'},
  {id:93,fase:'Ronda de 16',label:'Gan. RD32-9 vs Gan. RD32-10',fecha:'2026-07-06'},
  {id:94,fase:'Ronda de 16',label:'Gan. RD32-11 vs Gan. RD32-12',fecha:'2026-07-06'},
  {id:95,fase:'Ronda de 16',label:'Gan. RD32-13 vs Gan. RD32-14',fecha:'2026-07-07'},
  {id:96,fase:'Ronda de 16',label:'Gan. RD32-15 vs Gan. RD32-16',fecha:'2026-07-07'},
  {id:97,fase:'Cuartos de Final',label:'Gan. RD16-1 vs Gan. RD16-2',fecha:'2026-07-09'},
  {id:98,fase:'Cuartos de Final',label:'Gan. RD16-3 vs Gan. RD16-4',fecha:'2026-07-10'},
  {id:99,fase:'Cuartos de Final',label:'Gan. RD16-5 vs Gan. RD16-6',fecha:'2026-07-11'},
  {id:100,fase:'Cuartos de Final',label:'Gan. RD16-7 vs Gan. RD16-8',fecha:'2026-07-11'},
  {id:101,fase:'Semifinal',label:'Gan. QF-1 vs Gan. QF-2',fecha:'2026-07-14'},
  {id:102,fase:'Semifinal',label:'Gan. QF-3 vs Gan. QF-4',fecha:'2026-07-15'},
  {id:103,fase:'Tercer Lugar',label:'Perd. SF-1 vs Perd. SF-2',fecha:'2026-07-18'},
  {id:104,fase:'Final',label:'Gan. SF-1 vs Gan. SF-2',fecha:'2026-07-19'}
];

const INITIAL_RESULTS = {
  1:{g1:2,g2:0},2:{g1:2,g2:1},3:{g1:1,g2:1},4:{g1:4,g2:1},5:{g1:1,g2:1},6:{g1:1,g2:1},
  7:{g1:0,g2:1},8:{g1:2,g2:0},9:{g1:7,g2:1},10:{g1:2,g2:2},11:{g1:1,g2:0},12:{g1:5,g2:1},
  13:{g1:0,g2:0},14:{g1:1,g2:1},15:{g1:1,g2:1},16:{g1:2,g2:2},17:{g1:2,g2:0},18:{g1:1,g2:4},
  19:{g1:3,g2:0},20:{g1:3,g2:1}
};

const INITIAL_PICKS = {
  'Andru': {4:'E', 5:'G2', 6:'G1', 7:'G2', 8:'G2', 9:'G1', 10:'E', 11:'G2', 12:'G1', 13:'G1', 14:'G1', 15:'G2', 16:'G2', 17:'G1', 18:'G2', 19:'G2', 20:'G1', 21:'G1', 22:'G2', 23:'E', 24:'G1'},
  'Alonso': {4:'G2', 5:'E', 6:'G1', 7:'G2', 8:'G2', 9:'G1', 10:'G1', 11:'G2', 12:'G1', 13:'G1', 14:'G1', 15:'G2', 16:'E', 17:'G1', 18:'G2', 19:'G1', 20:'E', 21:'G1', 22:'G1', 23:'G1', 24:'G1'},
  'Rudy': {4:'G1', 6:'E', 7:'E', 8:'G2', 9:'E', 10:'E', 11:'E', 12:'E', 13:'E', 14:'E', 15:'E', 16:'E', 17:'G1', 18:'E', 19:'E', 20:'G1', 21:'G1', 22:'E', 23:'G1', 24:'G1'},
  'Wipipi': {4:'E', 5:'G2', 7:'G2', 9:'G1', 10:'G1', 11:'E', 12:'G1', 13:'G1', 14:'G1', 17:'G1', 18:'G2', 19:'G1', 20:'G1', 21:'G1', 22:'G2', 23:'G1', 24:'G1'},
  'Vlasho': {4:'G2', 6:'G1', 7:'G2', 9:'G1', 10:'G1', 11:'G1', 12:'G1', 13:'G1', 14:'G1', 15:'G1', 16:'G1', 17:'G1', 18:'G2', 19:'G1', 20:'G1', 21:'G1', 22:'G1', 23:'G1', 24:'G1'},
  'Chocho': {6:'G1'},
  'Caleño': {4:'G2', 17:'G1', 18:'G2', 19:'G1'},
  'Hugo': {4:'E', 5:'G2', 6:'G2', 7:'G2', 8:'E', 9:'E', 10:'E', 11:'E', 12:'G2', 14:'E', 15:'E', 16:'G1'},
  'Veron': {9:'G1', 10:'G1', 11:'G2', 12:'G1', 15:'G2', 16:'G2', 17:'G1', 18:'G2', 19:'G1', 20:'G1', 21:'G1', 22:'E', 23:'G1', 24:'G1'},
  'Cesar': {6:'G1', 9:'G1', 10:'G1', 11:'G1', 12:'G1', 13:'G1', 14:'G1', 15:'G1', 16:'E', 17:'G1', 18:'G2', 19:'G1', 20:'E', 21:'G1', 22:'G1', 23:'G1', 24:'E'},
  'Tigreza': {6:'G1', 7:'E', 13:'E', 15:'E', 16:'E', 17:'G2', 21:'G1', 22:'G2', 23:'G1', 24:'G1'},
  'chompi': {7:'G2', 9:'G1', 10:'G1', 11:'G1', 13:'G1', 14:'G1', 15:'G1', 16:'G2', 21:'G1', 22:'G1', 23:'G1', 24:'G1'},
  'Gonzalo': {5:'G2', 8:'G2', 9:'G1', 10:'G1', 11:'G2', 12:'G1', 15:'G1', 16:'G2', 19:'G1', 20:'G1', 23:'G1', 24:'G2'},
  'Beto': {9:'G1', 10:'G1', 11:'E', 12:'G1', 17:'G1', 18:'G2', 19:'E', 20:'E'},
  'Matamba Diego': {17:'G2'},
  'Gerson': {21:'G1', 23:'G1', 24:'G1'}
};

// ============================================================
// FIREBASE — REST API directo (sin SDK, sin listeners, sin bugs de timing)
// Cada partido se guarda con su propia key usando notación de punto: p1, p2... (NO array-like)
// Usamos prefijo "p" en TODAS las keys para que Firebase nunca las convierta a array.
// ============================================================

async function fbGet(path) {
  try {
    const res = await fetch(`${DB_URL}/${path}.json`);
    const data = await res.json();
    return data || {};
  } catch (e) {
    console.error('fbGet error', path, e);
    return {};
  }
}

async function fbSet(path, value) {
  try {
    const res = await fetch(`${DB_URL}/${path}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
    });
    return await res.json();
  } catch (e) {
    console.error('fbSet error', path, e);
    return null;
  }
}

function pKey(id) { return 'p' + id; } // prefix to avoid Firebase array coercion

async function savePick(participant, matchId, value) {
  return fbSet(`pronosticos_grupos/${encodeURIComponent(participant)}/${pKey(matchId)}`, value);
}

async function savePickElim(participant, matchId, value) {
  return fbSet(`pronosticos_elim/${encodeURIComponent(participant)}/${pKey(matchId)}`, value);
}

async function saveResult(matchId, g1, g2) {
  return fbSet(`resultados/${pKey(matchId)}`, { g1: Number(g1), g2: Number(g2) });
}

async function saveResultElim(matchId, winner) {
  return fbSet(`resultados_elim/${pKey(matchId)}`, winner);
}

async function getAllPicks()       { return fbGet('pronosticos_grupos'); }
async function getAllPicksElim()   { return fbGet('pronosticos_elim'); }
async function getAllResults()     { return fbGet('resultados'); }
async function getAllResultsElim() { return fbGet('resultados_elim'); }

async function seedInitialData() {
  const updates = {};
  Object.entries(INITIAL_RESULTS).forEach(([id, val]) => {
    updates[`resultados/${pKey(id)}`] = val;
  });
  Object.entries(INITIAL_PICKS).forEach(([participant, picks]) => {
    Object.entries(picks).forEach(([id, val]) => {
      updates[`pronosticos_grupos/${participant}/${pKey(id)}`] = val;
    });
  });
  // PATCH applies multiple paths at once
  await fetch(`${DB_URL}/.json`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
}

// ============================================================
// HELPERS DE PUNTUACIÓN
// ============================================================

function resultFromGoals(g1, g2) {
  if (g1 === null || g1 === undefined || g2 === null || g2 === undefined) return null;
  g1 = Number(g1); g2 = Number(g2);
  if (g1 > g2) return 'G1';
  if (g2 > g1) return 'G2';
  return 'E';
}

function calcPuntosGrupos(picks, results) {
  if (!picks || !results) return 0;
  let pts = 0;
  GROUP_MATCHES.forEach(m => {
    const pick = picks[pKey(m.id)];
    const r = results[pKey(m.id)];
    if (!pick || !r) return;
    const real = resultFromGoals(r.g1, r.g2);
    if (real && pick === real) pts += POINTS.grupos;
  });
  return pts;
}

function calcPuntosElim(picksElim, resultsElim) {
  if (!picksElim || !resultsElim) return 0;
  let pts = 0;
  KNOCKOUT_MATCHES.forEach(m => {
    const pick = picksElim[pKey(m.id)];
    const real = resultsElim[pKey(m.id)];
    if (pick && real && String(pick).trim().toLowerCase() === String(real).trim().toLowerCase()) {
      pts += POINTS[m.fase] || 0;
    }
  });
  return pts;
}

function matchStarted(match) {
  const now = new Date();
  // Las horas del calendario están en horario de Ciudad de México (UTC-6)
  // Construimos la fecha del partido especificando explícitamente ese offset
  const [year, month, day] = match.fecha.split('-').map(Number);
  const [h, min] = match.hora.split(':').map(Number);
  // Fecha del partido en UTC, ajustada desde hora de México (UTC-6) a UTC
  const matchDateUTC = new Date(Date.UTC(year, month - 1, day, h + 6, min, 0));
  return now >= matchDateUTC;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' });
}

/** Convierte fecha+hora de México (UTC-6) a la hora local del navegador del usuario */
function formatLocalTime(fecha, hora) {
  const [year, month, day] = fecha.split('-').map(Number);
  const [h, min] = hora.split(':').map(Number);
  const matchDateUTC = new Date(Date.UTC(year, month - 1, day, h + 6, min, 0));
  return matchDateUTC.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

/** Devuelve true si la hora local del usuario es distinta a la de México (para mostrar aclaración) */
function isDifferentTimezone() {
  const offsetMin = new Date().getTimezoneOffset(); // minutos respecto a UTC, positivo = detrás de UTC
  const mexicoOffsetMin = 360; // UTC-6 = 360 minutos detrás de UTC
  return offsetMin !== mexicoOffsetMin;
}

function pickClass(pick, real) {
  if (!pick) return '';
  if (!real) return 'pick-pending';
  return pick === real ? 'pick-correct' : 'pick-wrong';
}

// ============================================================
// NAVEGACIÓN COMPARTIDA
// ============================================================

function getCurrentUser() {
  const user = sessionStorage.getItem('pollaUser');
  if (!user) {
    const isInPages = window.location.pathname.includes('/pages/');
    window.location.href = isInPages ? '../index.html' : 'index.html';
    return null;
  }
  return user;
}

function buildNav(activePage) {
  const user = getCurrentUser();
  if (!user) return null;

  const pages = [
    { id: 'grupos',  label: '⚽ Mis Grupos',     href: 'grupos.html' },
    { id: 'elim',    label: '🏅 Eliminatorias',   href: 'eliminatorias.html' },
    { id: 'todos',   label: '👁 Ver Todos',        href: 'todos.html' },
    { id: 'ranking', label: '🏆 Ranking',          href: 'ranking.html' },
    { id: 'admin',   label: '🔧 Admin',            href: 'admin.html' }
  ];

  const nav = document.createElement('nav');
  nav.className = 'top-nav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo">LOS <span>DIFERENTES</span></a>
      <div class="nav-user">👤 ${user}</div>
      <div class="nav-links">
        ${pages.map(p => `<a href="${p.href}" class="nav-link ${p.id === activePage ? 'active' : ''}">${p.label}</a>`).join('')}
      </div>
      <button class="nav-hamburger" id="navHamburger">☰</button>
    </div>
    <div class="nav-mobile" id="navMobile">
      ${pages.map(p => `<a href="${p.href}" class="nav-mobile-link ${p.id === activePage ? 'active' : ''}">${p.label}</a>`).join('')}
      <div class="nav-mobile-user">👤 ${user}</div>
    </div>
  `;
  document.body.prepend(nav);

  document.getElementById('navHamburger')?.addEventListener('click', () => {
    document.getElementById('navMobile')?.classList.toggle('open');
  });

  return user;
}

function showToast(msg, type = 'ok') {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2200);
}
