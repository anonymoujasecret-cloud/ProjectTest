// Tema (dark/light)
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
themeBtn.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? null : 'light';
  if (next) document.documentElement.setAttribute('data-theme', next); else document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('theme', next || 'dark');
});

// Data Materi
const MATERI = [
  { id:'html-dasar', judul:'HTML Dasar', level:'Pemula', durasi:'30m', tag:['HTML','Web'], isi:`
    <h4>Tujuan</h4><ul><li>Memahami struktur dokumen (doctype, head, body)</li><li>Elemen umum: heading, paragraf, tautan, gambar, list, tabel, form</li><li>Semantik: header, nav, main, article, section, footer</li></ul>
    <h4>Contoh</h4><pre><code>&lt;!doctype html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;&lt;meta charset="utf-8"&gt;&lt;title&gt;Halo&lt;/title&gt;&lt;/head&gt;
  &lt;body&gt;&lt;h1&gt;Halo Dunia&lt;/h1&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre>
  ` },
  { id:'css-dasar', judul:'CSS Dasar', level:'Pemula', durasi:'40m', tag:['CSS','Web'], isi:`
    <h4>Tujuan</h4><ul><li>Selektor, properti, box model</li><li>Layout: flex & grid</li><li>Variabel CSS, responsif</li></ul>
    <h4>Latihan</h4><p>Ubah warna latar, padding, dan layout grid 2 kolom.</p>
  ` },
  { id:'js-dasar', judul:'JavaScript Dasar', level:'Pemula', durasi:'60m', tag:['JavaScript','Web'], isi:`
    <h4>Tujuan</h4><ul><li>Tipe data, variabel, fungsi</li><li>DOM & event</li><li>Module dasar</li></ul>
    <h4>Contoh</h4><pre><code>document.querySelector('button').addEventListener('click', () => alert('hai'));</code></pre>
  ` },
  { id:'git', judul:'Version Control dengan Git', level:'Pemula', durasi:'35m', tag:['Git'], isi:`
    <h4>Poin Kunci</h4><ul><li>init, add, commit, log</li><li>branch & merge</li><li>push/pull (GitHub)</li></ul>
    <pre><code>git init
git add .
git commit -m "awal"</code></pre>
  ` },
  { id:'python-dasar', judul:'Python Dasar', level:'Pemula', durasi:'70m', tag:['Python'], isi:`
    <h4>Materi</h4><ul><li>Variabel & tipe</li><li>Kontrol alur (if/for/while)</li><li>Fungsi & modul</li></ul>
    <pre><code>for i in range(3):
  print('Halo', i)</code></pre>
  ` },
  { id:'http-api', judul:'Dasar HTTP & API', level:'Menengah', durasi:'45m', tag:['Web','Jaringan'], isi:`
    <h4>Pengenalan</h4><ul><li>Request/response, metode (GET/POST/...)</li><li>Status code 2xx/4xx/5xx</li><li>JSON & REST</li></ul>
  ` },
  { id:'frontend-lanjut', judul:'Frontend Lanjut: DOM, A11y', level:'Menengah', durasi:'60m', tag:['Web'], isi:`
    <h4>Bahasan</h4><ul><li>Manipulasi DOM efisien</li><li>ARIA & keyboard navigation</li><li>Performance dasar</li></ul>
  ` },
  { id:'backend-dasar', judul:'Backend Dasar & Database', level:'Menengah', durasi:'70m', tag:['Backend'], isi:`
    <h4>Konsep</h4><ul><li>RESTful API</li><li>Relasional vs dokumen</li><li>Dasar desain skema</li></ul>
  ` },
  { id:'keamanan-dasar', judul:'Keamanan Dasar (Etis & Legal)', level:'Menengah', durasi:'50m', tag:['Keamanan'], isi:`
    <h4>Fokus</h4><ul><li>Praktik aman: password, 2FA, update</li><li>Konsep umum: XSS/CSRF/SQLi (hanya definisi, tanpa eksploit)</li><li>Etika & legalitas: hanya uji pada izin eksplisit</li></ul>
  ` },
  { id:'deploy', judul:'Deploy Sederhana (Static Hosting)', level:'Pemula', durasi:'35m', tag:['DevOps'], isi:`
    <h4>Langkah</h4><ol><li>Build statis</li><li>Gunakan hosting statis (GitHub Pages, Netlify)</li><li>Atur domain</li></ol>
  ` },
];

// Render Kartu Materi
const cardsEl = document.getElementById('cards');
const progressKey = 'belajar-progress-v1';
const state = JSON.parse(localStorage.getItem(progressKey) || '{}');

function renderCards(list = MATERI) {
  cardsEl.innerHTML = '';
  list.forEach(m => {
    const done = !!state[m.id];
    const wrap = document.createElement('div');
    wrap.className = 'card';
    wrap.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
        <h3>${m.judul}</h3>
        <label style="display:flex; align-items:center; gap:6px; font-size:.9rem">
          <input type="checkbox" data-id="${m.id}" ${done ? 'checked' : ''}/> selesai
        </label>
      </div>
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap">
        <span class="badge">${m.level}</span>
        <span class="badge">⏱ ${m.durasi}</span>
        <span class="badge">🏷 ${m.tag.join(', ')}</span>
      </div>
      <details style="margin-top:6px">
        <summary>Buka ringkasan</summary>
        <div class="content">${m.isi}</div>
      </details>
      <div style="display:flex; gap:8px; margin-top:8px;">
        <button class="btn open-play" data-id="${m.id}">Coba di Playground</button>
        <button class="btn copy-btn" data-id="${m.id}">Salin Ringkasan</button>
      </div>
    `;
    cardsEl.appendChild(wrap);
  });
  updateProgress();
}

renderCards();

// Filter/Search
const search = document.getElementById('search');
const resetBtn = document.getElementById('resetBtn');
function doFilter() {
  const q = search.value.toLowerCase().trim();
  const f = MATERI.filter(m => m.judul.toLowerCase().includes(q) || m.tag.join(' ').toLowerCase().includes(q));
  renderCards(f);
}
search.addEventListener('input', doFilter);
resetBtn.addEventListener('click', () => { search.value=''; renderCards(); });

// Progres
function updateProgress(){
  const total = MATERI.length;
  const done = Object.values(state).filter(Boolean).length;
  const pct = Math.round(done/total*100);
  document.getElementById('progressPercent').textContent = pct + '%';
  localStorage.setItem(progressKey, JSON.stringify(state));
}

cardsEl.addEventListener('change', (e) => {
  const id = e.target?.dataset?.id; if(!id) return;
  state[id] = e.target.checked; updateProgress();
});

cardsEl.addEventListener('click', async (e) => {
  const openBtn = e.target.closest('.open-play');
  const copyBtn = e.target.closest('.copy-btn');
  if (openBtn) {
    const id = openBtn.dataset.id;
    const m = MATERI.find(x=>x.id===id);
    // kirim contoh ringkas ke editor
    setEditor(`<div class="box">${m.judul}</div>`, `.box{padding:16px;border-radius:12px;background:#eef2ff;color:#1f2937}`, `console.log('${m.judul}')`);
    document.querySelector('#playground').scrollIntoView({behavior:'smooth'});
  }
  if (copyBtn) {
    const id = copyBtn.dataset.id; const m = MATERI.find(x=>x.id===id);
    const txt = `${m.judul}
Level: ${m.level}
Durasi: ${m.durasi}
Tag: ${m.tag.join(', ')}
---
` + m.isi.replace(/<[^>]+>/g,'');
    try { await navigator.clipboard.writeText(txt); toast('Ringkasan disalin ✅'); } catch { alert('Gagal menyalin'); }
  }
});

function toast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {position:'fixed', bottom:'16px', left:'50%', transform:'translateX(-50%)', background:'var(--panel)', border:'1px solid var(--border)', padding:'10px 14px', borderRadius:'12px', boxShadow:'var(--shadow)', zIndex:9999});
  document.body.appendChild(t); setTimeout(()=>t.remove(), 1600);
}

// Playground
const tabs = document.querySelectorAll('.tab');
const codeHTML = document.getElementById('code-html');
const codeCSS = document.getElementById('code-css');
const codeJS = document.getElementById('code-js');
const frame = document.getElementById('frame');

tabs.forEach(tb => tb.addEventListener('click', () => {
  tabs.forEach(x=>x.classList.remove('active'));
  tb.classList.add('active');
  codeHTML.style.display = tb.dataset.target==='html' ? 'block':'none';
  codeCSS.style.display = tb.dataset.target==='css' ? 'block':'none';
  codeJS.style.display = tb.dataset.target==='js' ? 'block':'none';
}));

function buildDoc(html, css, js){
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
}
function run(){
  const doc = buildDoc(codeHTML.value, codeCSS.value, codeJS.value);
  frame.srcdoc = doc;
  localStorage.setItem('playground', JSON.stringify({html:codeHTML.value, css:codeCSS.value, js:codeJS.value}));
}
function setEditor(h,c,j){ codeHTML.value=h; codeCSS.value=c; codeJS.value=j; run(); }

document.getElementById('runBtn').addEventListener('click', run);
document.getElementById('openNew').addEventListener('click', ()=>{
  const win = window.open('about:blank','_blank');
  const doc = buildDoc(codeHTML.value, codeCSS.value, codeJS.value);
  win.document.open(); win.document.write(doc); win.document.close();
});
document.getElementById('resetCode').addEventListener('click', ()=>{
  setEditor('<div class="box">Hello dari Playground! 🎉</div>', '.box{padding:16px;border-radius:12px;background:#eef2ff;color:#1f2937;font-weight:600}', "console.log('reset')");
});
document.getElementById('shareBtn').addEventListener('click', async ()=>{
  const data = btoa(unescape(encodeURIComponent(JSON.stringify({h:codeHTML.value,c:codeCSS.value,j:codeJS.value}))));
  const url = location.origin + location.pathname + '#play=' + data;
  try { await navigator.clipboard.writeText(url); toast('Tautan disalin 🔗'); } catch { prompt('Salin tautan:', url); }
});

// Restore editor / load from hash
const saved = localStorage.getItem('playground');
if (saved) {
  try { const {html, css, js} = JSON.parse(saved); setEditor(html, css, js); } catch {}
} else {
  run();
}
if (location.hash.startsWith('#play=')) {
  try {
    const payload = decodeURIComponent(escape(atob(location.hash.replace('#play=',''))));
    const {h,c,j} = JSON.parse(payload); setEditor(h,c,j);
  } catch {}
}

// Kuis
const SOAL = [
  { q:'Apa fungsi utama HTML?', a:['Mendesain tampilan','Menulis logika program','Mendefinisikan struktur konten','Mengelola basis data'], k:2 },
  { q:'Properti CSS untuk membuat tata letak baris fleksibel?', a:['grid-template','display: flex','position: absolute','z-index'], k:1 },
  { q:'Metode HTTP untuk mengambil data tanpa mengubah server?', a:['POST','GET','PUT','DELETE'], k:1 },
  { q:'Perintah Git untuk merekam perubahan ke riwayat?', a:['git push','git add','git commit','git clone'], k:2 },
  { q:'Di JavaScript, DOM adalah…', a:['Database objek','Model dokumen HTML','Mesin rendering CSS','Protokol jaringan'], k:1 },
];

const quizEl = document.getElementById('quiz');
function renderQuiz(){
  quizEl.innerHTML = '';
  SOAL.forEach((s, i) => {
    const c = document.createElement('div'); c.className='qcard';
    c.innerHTML = `<div><strong>${i+1}.</strong> ${s.q}</div>`;
    const list = document.createElement('div'); list.className = 'choices';
    s.a.forEach((opt, j) => {
      const item = document.createElement('label'); item.className='choice';
      item.innerHTML = `<input type="radio" name="q${i}" value="${j}"> ${opt}`;
      list.appendChild(item);
    });
    c.appendChild(list); quizEl.appendChild(c);
  });
}
renderQuiz();

document.getElementById('submitQuiz').addEventListener('click', () => {
  let benar = 0; const total = SOAL.length;
  [...quizEl.querySelectorAll('.qcard')].forEach((card, i)=>{
    const jawaban = card.querySelector('input[type=radio]:checked');
    const k = SOAL[i].k;
    const choices = [...card.querySelectorAll('.choice')];
    choices.forEach((ch, idx)=> ch.classList.remove('correct','wrong'));
    if (!jawaban) return;
    const idx = +jawaban.value;
    if (idx === k) { benar++; choices[idx].classList.add('correct'); }
    else { choices[idx].classList.add('wrong'); choices[k].classList.add('correct'); }
  });
  const score = Math.round(benar/total*100);
  document.getElementById('quizResult').textContent = `Skor: ${score}% (${benar}/${total})`;
  toast('Kuis dinilai ✅');
});
document.getElementById('retryQuiz').addEventListener('click', () => { renderQuiz(); document.getElementById('quizResult').textContent=''; });

// Utilities
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href'); const el = document.querySelector(id);
  if (!el) return;
  e.preventDefault(); el.scrollIntoView({behavior:'smooth'});
}));
