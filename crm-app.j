// ═══════════════════════════════════════════════════════════
// BERGON CRM — Application
// ═══════════════════════════════════════════════════════════

let CD = [];          // clients
let VD = [];          // visites historiques
let TOP = [];         // top 12 calculé
let CL = [];          // labels semaines (pour graphique)
let CV = [];          // compteurs semaines (pour graphique)
let VA = JSON.parse(localStorage.getItem(‘bergon_crm_app’) || ‘[]’);
let CFG = JSON.parse(localStorage.getItem(‘bergon_crm_cfg’) || ‘{}’);
if (!CFG.owner) CFG.owner = ‘stephanezunino-bot’;
if (!CFG.repo) CFG.repo = ‘BERGON-CRM’;
if (!CFG.file) CFG.file = ‘visites.json’;

// ═══ CHARGEMENT INITIAL ═══
async function loadData() {
try {
const r = await fetch(‘crm-data.json?v=’ + Date.now());
if (!r.ok) throw new Error(’HTTP ’ + r.status);
const d = await r.json();
CD = d.clients || [];
VD = d.visites_historiques || [];
// Calcul TOP 12
TOP = […CD].sort((a, b) => b.nb_visites - a.nb_visites).slice(0, 12);
// Calcul semaines pour graphique
computeWeeks();
// Injection option filtre historique
fillHistoFilter();

```
document.getElementById('loader').style.display = 'none';
renderAll();
initSel();
if (CFG.token) {
  updateSyncStatus('ok', 'GitHub OK');
  setTimeout(() => syncPull(true), 600);
} else {
  updateSyncStatus('warn', 'Local seul');
}
```

} catch (e) {
document.getElementById(‘loader’).innerHTML = ‘<p style="color:var(--rouge)">⚠ Erreur chargement crm-data.json</p><p style="color:var(--txt2);font-size:.7rem;margin-top:.5rem">’ + e.message + ‘</p>’;
}
}

function computeWeeks() {
const map = {};
VD.forEach(v => {
const key = ‘S’ + v.semaine;
map[key] = (map[key] || 0) + 1;
});
// Tri chronologique : S42-48 avant S2-12
const keys = Object.keys(map).sort((a, b) => {
const na = parseInt(a.slice(1));
const nb = parseInt(b.slice(1));
// S42+ (fin 2025) avant S1-20 (début 2026)
const ra = na >= 30 ? na - 100 : na;
const rb = nb >= 30 ? nb - 100 : nb;
return ra - rb;
});
CL = keys;
CV = keys.map(k => map[k]);
}

function fillHistoFilter() {
const sel = document.getElementById(‘histo-filter’);
const weeks = […new Set(VD.map(v => v.semaine))].sort((a, b) => {
const ra = a >= 30 ? a - 100 : a;
const rb = b >= 30 ? b - 100 : b;
return ra - rb;
});
weeks.forEach(w => {
const o = document.createElement(‘option’);
o.value = w;
const year = w >= 30 ? ‘2025’ : ‘2026’;
o.textContent = ’Semaine ’ + w + ’ — ’ + year;
sel.appendChild(o);
});
}

// ═══ NAV ═══
function nav(id, btn) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
document.querySelectorAll(’.bn’).forEach(b => b.classList.remove(‘on’));
document.getElementById(‘p-’ + id).classList.add(‘active’);
btn.classList.add(‘on’);
}

function openField() {
// Retour vers Bergon Field — même repo/compte GitHub Pages
window.location.href = ‘https://stephanezunino-bot.github.io/BERGON-FIELD/’;
}

// ═══ BOARD ═══
let chartAct = null;
function renderBoard() {
const now = new Date();
const msD = 86400000;
const inactifs = CD.filter(c => (now - new Date(c.derniere_visite)) / msD > 60);

// KPIs
const moyenne = CV.length ? Math.round(CV.reduce((a, b) => a + b, 0) / CV.length) : 0;
const derniereSem = CV.length ? CV[CV.length - 1] : 0;
document.getElementById(‘k1’).textContent = derniereSem;
document.getElementById(‘k2’).textContent = inactifs.length;
document.getElementById(‘k2d’).textContent = inactifs.length + ’ sur ’ + CD.length + ’ clients’;
document.getElementById(‘k3’).textContent = moyenne;
document.getElementById(‘k4’).textContent = CD.length;
document.getElementById(‘bdg-inactifs’).textContent = inactifs.length;
document.getElementById(‘bdg-weeks’).textContent = CL.length + ’ semaines’;

// Graphique
if (chartAct) chartAct.destroy();
chartAct = new Chart(document.getElementById(‘chart-act’), {
type: ‘bar’,
data: {
labels: CL,
datasets: [{
data: CV,
backgroundColor: CV.map((_, i) => i === CV.length - 1 ? ‘rgba(200,152,58,.9)’ : ‘rgba(74,156,87,.55)’),
borderRadius: 4, borderSkipped: false
}]
},
options: {
responsive: true, maintainAspectRatio: false,
plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ’ ’ + c.raw + ’ visites’ } } },
scales: {
x: { grid: { color: ‘rgba(74,156,87,.06)’ }, ticks: { color: ‘#7a9e7e’, font: { size: 10 } } },
y: { grid: { color: ‘rgba(74,156,87,.06)’ }, ticks: { color: ‘#7a9e7e’, font: { size: 10 } } }
}
}
});

// Liste inactifs
const li = document.getElementById(‘lst-inactifs’);
const sorted = inactifs.sort((a, b) => new Date(a.derniere_visite) - new Date(b.derniere_visite));
if (!sorted.length) {
li.innerHTML = ‘<div class="ar"><div class="ai">✅</div><div class="at"><strong>Aucune alerte</strong><span>Tous les clients visités récemment</span></div></div>’;
} else {
li.innerHTML = sorted.map(c => {
const d = Math.round((now - new Date(c.derniere_visite)) / msD);
return ‘<div class="ar" onclick="showC(\'' + c.id + '\')" style="cursor:pointer"><div class="ai">🔴</div><div class="at"><strong>’ + c.nom + ‘</strong><span>’ + d + ‘j sans visite · ’ + c.nb_visites + ’ visite(s) au total</span></div></div>’;
}).join(’’);
}

// Top fréquence
const lt = document.getElementById(‘lst-top’);
const maxV = TOP[0] && TOP[0].nb_visites || 1;
lt.innerHTML = TOP.map((c, i) => {
const pct = Math.round(c.nb_visites / maxV * 100);
return ‘<div class="fr" onclick="showC(\'' + c.id + '\')"><div style="flex:1"><div style="font-size:.85rem;font-weight:600">’ + (i + 1) + ‘. ’ + c.nom + ‘</div><div class="bw"><div class="bf" style="width:' + pct + '%"></div></div></div><span class="bdg gold">’ + c.nb_visites + ‘×</span></div>’;
}).join(’’);
}

// ═══ CLIENTS ═══
function renderClients(f) {
if (!f) f = ‘’;
const now = new Date();
const msD = 86400000;
const lst = document.getElementById(‘lst-clients’);
const filtered = CD.filter(c => !f || c.nom.toUpperCase().includes(f.toUpperCase().trim()));
document.getElementById(‘count-lbl’).textContent = filtered.length + ’ client(s) — triés par ancienneté de visite’;
lst.innerHTML = filtered
.sort((a, b) => new Date(a.derniere_visite) - new Date(b.derniere_visite))
.map(c => {
const d = Math.round((now - new Date(c.derniere_visite)) / msD);
const bc = d > 60 ? ‘r’ : d > 30 ? ‘o’ : ‘g’;
return ‘<div class="row" onclick="showC(\'' + c.id + '\')"><div><div class="rn">’ + c.nom + ‘</div><div class="rs">’ + c.nb_visites + ’ visite(s) · Dernière : ’ + c.derniere_visite + ‘</div></div><div><span class="bdg ' + bc + '">’ + d + ‘j</span></div></div>’;
}).join(’’);
}
function filterC(v) { renderClients(v); }

// ═══ DÉTAIL CLIENT (modal) ═══
function showC(id) {
const c = CD.find(x => x.id === id);
if (!c) return;
const now = new Date();
const d = Math.round((now - new Date(c.derniere_visite)) / 86400000);
const bc = d > 60 ? ‘r’ : d > 30 ? ‘o’ : ‘g’;
const histo = VD.filter(v => v.client === c.nom).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
const appV = VA.filter(v => v.client_id === id).sort((a, b) => b.date.localeCompare(a.date));

let html = ‘<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem">’;
html += ‘<div style="font-size:.75rem;color:var(--txt2)">’ + c.nb_visites + ’ visite(s) · Objets habituels :</div>’;
html += ‘<span class="bdg ' + bc + '">’ + d + ‘j</span></div>’;
html += ‘<div class="tr" style="margin-bottom:.75rem">’ + (c.objets || []).map(o => ‘<span class="tg">’ + o + ‘</span>’).join(’’) + ‘</div>’;
html += ‘<div style="font-family:\'Inconsolata\',monospace;font-size:.6rem;color:var(--txt2);text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">Historique CR</div>’;
html += histo.map(v => ‘<div style="padding:.4rem 0;border-bottom:1px solid var(--border);font-size:.8rem"><strong style="color:var(--orc)">’ + v.date + ‘</strong> <span style="color:var(--txt2)">S’ + v.semaine + ’ · ’ + (v.objet || ‘—’) + ‘</span></div>’).join(’’);

if (appV.length) {
html += ‘<div style="font-family:\'Inconsolata\',monospace;font-size:.6rem;color:var(--orc);text-transform:uppercase;letter-spacing:.1em;margin-top:.75rem;margin-bottom:.4rem">Saisies app (’ + appV.length + ‘)</div>’;
html += appV.map(v => {
let details = (v.objet || ‘’) + ’ ’ + (v.result ? ‘→ ’ + v.result : ‘’);
if (v.parcelle) details = ‘📍 ’ + v.parcelle + ’ · ’ + details;
return ‘<div style="padding:.4rem 0;border-bottom:1px solid var(--border);font-size:.8rem"><strong style="color:var(--orc)">’ + v.date + ‘</strong> <span style="color:var(--txt2)">’ + details + ‘</span></div>’;
}).join(’’);
}

html += ‘<button class="btn bp" onclick="cM();presC(\'' + id + '\')" style="margin-top:1rem">+ Nouvelle visite</button>’;
document.getElementById(‘m-title’).textContent = c.nom;
document.getElementById(‘m-body’).innerHTML = html;
document.getElementById(‘mov’).classList.add(‘open’);
}
function cM() { document.getElementById(‘mov’).classList.remove(‘open’); }
function presC(id) {
document.getElementById(‘s-client’).value = id;
nav(‘saisie’, document.querySelectorAll(’.bn’)[2]);
}

// ═══ SAISIE ═══
function initSel() {
const sel = document.getElementById(‘s-client’);
sel.innerHTML = ‘<option value="">— Sélectionner un client —</option>’;
[…CD].sort((a, b) => a.nom.localeCompare(b.nom)).forEach(c => {
const o = document.createElement(‘option’);
o.value = c.id;
o.textContent = c.nom;
sel.appendChild(o);
});
document.getElementById(‘s-date’).value = new Date().toISOString().split(‘T’)[0];
}

function saveV() {
const cid = document.getElementById(‘s-client’).value;
const date = document.getElementById(‘s-date’).value;
if (!cid || !date) { toast(‘⚠ Client et date requis’); return; }
const v = {
id: Date.now(),
client_id: cid,
date: date,
parcelle: document.getElementById(‘s-parcelle’).value.trim(),
objet: document.getElementById(‘s-objet’).value,
result: document.getElementById(‘s-result’).value,
conc: document.getElementById(‘s-conc’).value,
notes: document.getElementById(‘s-notes’).value,
produits: […document.querySelectorAll(’#s-tags .tg.on’)].map(t => t.textContent)
};
VA.push(v);
localStorage.setItem(‘bergon_crm_app’, JSON.stringify(VA));
const c = CD.find(x => x.id === cid);
if (c && date > c.derniere_visite) { c.derniere_visite = date; c.nb_visites++; }
toast(’✓ Visite enregistrée — ’ + (c ? c.nom : cid));
clearF();
renderBoard();
renderClients();
if (CFG.token) syncPush(true);
}

function clearF() {
[‘s-client’, ‘s-parcelle’, ‘s-objet’, ‘s-result’, ‘s-conc’, ‘s-notes’].forEach(id => document.getElementById(id).value = ‘’);
document.querySelectorAll(’#s-tags .tg’).forEach(t => t.classList.remove(‘on’));
}

// ═══ RAPPORT ═══
function renderRapport() {
const now = new Date();
const msD = 86400000;
const inactifs = CD.filter(c => (now - new Date(c.derniere_visite)) / msD > 60);
const appSem = VA.filter(v => (now - new Date(v.date)) / msD <= 7);
const appMois = VA.filter(v => (now - new Date(v.date)) / msD <= 30);
const cmds = VA.filter(v => v.result === ‘Commande prise’);
const perdus = VA.filter(v => v.result === ‘Perdu — concurrent’);

const dateStr = now.toLocaleDateString(‘fr-FR’, { day: ‘2-digit’, month: ‘long’, year: ‘numeric’ });
document.getElementById(‘rp-per’).textContent = ‘Généré le ’ + dateStr + ’ · Agent 360’;

document.getElementById(‘rp-stats’).innerHTML =
‘<div class="stat-line"><span class="stat-lbl">Visites saisies app — 7j</span><span class="stat-val">’ + appSem.length + ‘</span></div>’ +
‘<div class="stat-line"><span class="stat-lbl">Visites saisies app — 30j</span><span class="stat-val">’ + appMois.length + ‘</span></div>’ +
‘<div class="stat-line"><span class="stat-lbl">Commandes concrétisées</span><span class="stat-val">’ + cmds.length + ‘</span></div>’ +
‘<div class="stat-line"><span class="stat-lbl">Pertes concurrence</span><span class="stat-val" style="color:var(--rouge)">’ + perdus.length + ‘</span></div>’ +
‘<div class="stat-line"><span class="stat-lbl">Clients 60j+ sans visite</span><span class="stat-val" style="color:var(--rouge)">’ + inactifs.length + ‘</span></div>’ +
‘<div class="stat-line"><span class="stat-lbl">Total visites (CR + app)</span><span class="stat-val">’ + (VD.length + VA.length) + ‘</span></div>’;

// À prévoir — clients à relancer
const rn = document.getElementById(‘rp-next’);
if (!inactifs.length) {
rn.innerHTML = ‘<div class="ar"><div class="ai">✅</div><div class="at"><strong>Rien à prévoir</strong><span>Portefeuille à jour</span></div></div>’;
} else {
rn.innerHTML = inactifs.slice(0, 10).map(c => {
const d = Math.round((now - new Date(c.derniere_visite)) / msD);
return ‘<div class="ar"><div class="ai">🔴</div><div class="at"><strong>’ + c.nom + ‘</strong><span>Priorité — ’ + d + ‘j sans visite</span></div></div>’;
}).join(’’);
}

// Saisies app
document.getElementById(‘bdg-app’).textContent = VA.length;
const ra = document.getElementById(‘rp-app’);
if (!VA.length) {
ra.innerHTML = ‘<div class="ar"><div class="ai">📝</div><div class="at"><strong>Aucune visite saisie</strong><span>Utilisez l'onglet Saisir</span></div></div>’;
return;
}
ra.innerHTML = […VA].reverse().map(v => {
const c = CD.find(x => x.id === v.client_id);
let details = (v.objet || ‘’) + (v.result ? ’ → ’ + v.result : ‘’) + (v.conc ? ’ · Conc: ’ + v.conc : ‘’);
if (v.parcelle) details = ‘📍 ’ + v.parcelle + ’ · ’ + details;
return ‘<div class="ar"><div class="ai">★</div><div class="at"><strong>’ + (c ? c.nom : v.client_id) + ’ — ’ + v.date + ‘</strong><span>’ + details + ‘</span></div></div>’;
}).join(’’);
}

// ═══ HISTORIQUE ═══
function renderHisto() {
const f = document.getElementById(‘histo-filter’).value;
const data = f ? VD.filter(v => String(v.semaine) === f) : VD;
const lst = document.getElementById(‘lst-histo’);
if (!data.length) {
lst.innerHTML = ‘<div class="ar"><div class="at"><strong>Aucune visite</strong></div></div>’;
return;
}
let curS = null;
lst.innerHTML = […data].sort((a, b) => b.date.localeCompare(a.date)).map(v => {
let out = ‘’;
if (v.semaine !== curS) {
curS = v.semaine;
out += ‘<div class="sl">Semaine ’ + v.semaine + ’ · ’ + v.date.substring(0, 7) + ‘</div>’;
}
out += ‘<div class="row"><div><div class="rn">’ + v.client + ‘</div><div class="rs">’ + v.date + ’ · ’ + (v.objet || ‘—’) + ‘</div></div></div>’;
return out;
}).join(’’);
}

// ═══ COPIE RAPPORT ═══
function copyR() {
const now = new Date();
const msD = 86400000;
const inactifs = CD.filter(c => (now - new Date(c.derniere_visite)) / msD > 60);
const appSem = VA.filter(v => (now - new Date(v.date)) / msD <= 7);

let t = ‘BERGON — RAPPORT CRM\n’;
t += ‘════════════════════════════════════\n’;
t += ’Généré le ’ + now.toLocaleDateString(‘fr-FR’) + ‘\n’;
t += ‘Agent 360 · ’ + CD.length + ’ clients · ’ + (VD.length + VA.length) + ’ visites\n\n’;

t += ‘VISITES 7 DERNIERS JOURS (’ + appSem.length + ‘)\n’;
if (appSem.length) {
appSem.forEach(v => {
const c = CD.find(x => x.id === v.client_id);
t += ‘· ’ + (c ? c.nom : ‘?’) + ’ (’ + v.date + ’) — ’ + (v.objet || ‘’);
if (v.result) t += ’ → ’ + v.result;
t += ‘\n’;
});
} else {
t += ‘— Aucune\n’;
}

t += ‘\n⚠ CLIENTS 60J+ SANS VISITE (’ + inactifs.length + ‘)\n’;
inactifs.forEach(c => {
const d = Math.round((now - new Date(c.derniere_visite)) / msD);
t += ’· ’ + c.nom + ’ — ’ + d + ‘j\n’;
});

if (VA.length) {
t += ‘\nTOUTES MES SAISIES APP (’ + VA.length + ‘)\n’;
[…VA].reverse().forEach(v => {
const c = CD.find(x => x.id === v.client_id);
t += ‘· ’ + (c ? c.nom : ‘?’) + ’ (’ + v.date + ’) — ’ + (v.objet || ‘’);
if (v.result) t += ’ → ’ + v.result;
if (v.conc) t += ’ · Conc: ’ + v.conc;
t += ‘\n’;
});
}

navigator.clipboard.writeText(t).then(() => toast(‘✓ Rapport copié’));
}

// ═══ CONFIG ═══
function openCfg() {
document.getElementById(‘cfg-token’).value = CFG.token || ‘’;
document.getElementById(‘cfg-owner’).value = CFG.owner || ‘’;
document.getElementById(‘cfg-repo’).value = CFG.repo || ‘’;
document.getElementById(‘cfg-file’).value = CFG.file || ‘’;
document.getElementById(‘mcfg’).classList.add(‘open’);
}
function closeCfg() { document.getElementById(‘mcfg’).classList.remove(‘open’); }

function saveCfg() {
CFG.token = document.getElementById(‘cfg-token’).value.trim();
CFG.owner = document.getElementById(‘cfg-owner’).value.trim();
CFG.repo = document.getElementById(‘cfg-repo’).value.trim();
CFG.file = document.getElementById(‘cfg-file’).value.trim() || ‘visites.json’;
localStorage.setItem(‘bergon_crm_cfg’, JSON.stringify(CFG));
updateSyncStatus(‘ok’, ‘Config OK’);
toast(‘✓ Config enregistrée’);
closeCfg();
}

function updateSyncStatus(state, label) {
const el = document.getElementById(‘sync-status’);
const dot = document.querySelector(’.live-dot’);
if (el) el.textContent = label;
if (!dot) return;
if (state === ‘ok’) dot.style.background = ‘var(–ok)’;
else if (state === ‘warn’) dot.style.background = ‘var(–orange)’;
else if (state === ‘err’) dot.style.background = ‘var(–rouge)’;
}

// ═══ SYNC GITHUB ═══
async function syncPush(silent) {
if (!CFG.token || !CFG.owner || !CFG.repo) {
if (!silent) toast(‘⚠ Config GitHub manquante’);
return;
}
try {
const url = ‘https://api.github.com/repos/’ + CFG.owner + ‘/’ + CFG.repo + ‘/contents/’ + CFG.file;
let sha = null;
const head = await fetch(url, { headers: { Authorization: ’token ’ + CFG.token, Accept: ‘application/vnd.github.v3+json’ } });
if (head.ok) { const d = await head.json(); sha = d.sha; }
const content = btoa(unescape(encodeURIComponent(JSON.stringify(VA, null, 2))));
const body = { message: ’CRM update ’ + new Date().toISOString(), content: content };
if (sha) body.sha = sha;
const r = await fetch(url, {
method: ‘PUT’,
headers: { Authorization: ’token ’ + CFG.token, ‘Content-Type’: ‘application/json’, Accept: ‘application/vnd.github.v3+json’ },
body: JSON.stringify(body)
});
if (r.ok) {
updateSyncStatus(‘ok’, ’Sync ’ + new Date().toLocaleTimeString(‘fr-FR’, { hour: ‘2-digit’, minute: ‘2-digit’ }));
if (!silent) toast(‘✓ Poussé sur GitHub’);
} else {
updateSyncStatus(‘err’, ‘Sync KO’);
if (!silent) toast(‘⚠ Erreur push’);
}
} catch (e) {
updateSyncStatus(‘err’, ‘Sync KO’);
if (!silent) toast(‘⚠ Erreur réseau’);
}
}

async function syncPull(silent) {
if (!CFG.token || !CFG.owner || !CFG.repo) {
if (!silent) toast(‘⚠ Config GitHub manquante’);
return;
}
try {
const url = ‘https://api.github.com/repos/’ + CFG.owner + ‘/’ + CFG.repo + ‘/contents/’ + CFG.file;
const r = await fetch(url, { headers: { Authorization: ’token ’ + CFG.token, Accept: ‘application/vnd.github.v3+json’ } });
if (!r.ok) {
if (!silent) toast(‘⚠ Fichier introuvable sur le repo’);
return;
}
const d = await r.json();
const decoded = decodeURIComponent(escape(atob(d.content)));
const remote = JSON.parse(decoded);
const ids = new Set(VA.map(v => v.id));
const fresh = remote.filter(v => !ids.has(v.id));
VA = VA.concat(fresh);
localStorage.setItem(‘bergon_crm_app’, JSON.stringify(VA));
// Mettre à jour derniere_visite des clients
VA.forEach(v => {
const c = CD.find(x => x.id === v.client_id);
if (c && v.date > c.derniere_visite) { c.derniere_visite = v.date; c.nb_visites++; }
});
updateSyncStatus(‘ok’, ‘Sync OK’);
if (fresh.length && !silent) toast(‘✓ ’ + fresh.length + ’ visite(s) récupérée(s)’);
renderAll();
} catch (e) {
updateSyncStatus(‘err’, ‘Sync KO’);
if (!silent) toast(‘⚠ Erreur pull’);
}
}

// ═══ TOAST ═══
function toast(msg) {
const t = document.getElementById(‘toast’);
t.textContent = msg;
t.classList.add(‘show’);
setTimeout(() => t.classList.remove(‘show’), 2400);
}

// ═══ RENDU GLOBAL ═══
function renderAll() {
renderBoard();
renderClients();
renderRapport();
renderHisto();
}

// ═══ DÉMARRAGE ═══
loadData();
