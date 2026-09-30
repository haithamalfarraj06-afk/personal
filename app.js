const db = firebase.firestore();
const auth = firebase.auth();
const $ = s => document.querySelector(s);
const view = $('#view');

const T = {
  ar: {
    signupT: 'أنشئ حسابك', signinT: 'تسجيل الدخول', authSub: 'مساحتك الشخصية لمتابعة اللعب والتدريب والمذاكرة.',
    email: 'البريد الإلكتروني', password: 'كلمة المرور', signupB: 'إنشاء حساب', signinB: 'دخول',
    haveAcc: 'لدي حساب بالفعل', noAcc: 'إنشاء حساب جديد',
    authBad: 'أدخل بريدًا صحيحًا وكلمة مرور من 6 أحرف على الأقل.', checkEmail: 'تم إنشاء الحساب. تحقق من بريدك ثم سجّل الدخول.',
    setupT: 'إعداد حسابك', setupSub: 'معلومات بسيطة، مرة واحدة فقط.', start: 'ابدأ', needName: 'اكتب اسمك أولًا.',
    name: 'الاسم', birth: 'تاريخ الميلاد', club: 'النادي', pos: 'المركز', foot: 'القدم المفضلة', develop: 'ماذا تريد أن تطوّر؟',
    home: 'الرئيسية', goals: 'الأهداف', matches: 'المباريات', training: 'التدريب', study: 'المذاكرة', reports: 'التقارير', profile: 'الملف',
    hello: 'مرحبًا', doneOf: 'مهمة مكتملة', addTask: 'أضف مهمة…', noGoal: 'بدون هدف', emptyTasks: 'لا توجد مهام بعد.', add: 'إضافة',
    goalPh: 'مثال: أريد تحسين التسديد', emptyGoals: 'لا توجد أهداف بعد.', emptyList: 'لا يوجد شيء بعد.',
    opponent: 'الخصم', date: 'التاريخ', whoWon: 'مَن فاز؟', me: 'أنا', opp: 'الخصم', draw: 'تعادل',
    myGoals: 'أهدافي', oppGoals: 'أهداف الخصم', win: 'فوز', loss: 'خسارة',
    pickWinner: 'اختر مَن فاز.', scoreErr: 'النتيجة لا تطابق مَن فاز.',
    kind: 'نوع التدريب', minutes: 'المدة (بالدقائق)', notes: 'ملاحظات قصيرة', achieved: 'الإنجاز', subject: 'المادة',
    min: 'د', achievedS: 'أنجزت',
    thisWeek: 'هذا الأسبوع', repMatches: 'المباريات', repTrain: 'التدريبات', repStudy: 'ساعات المذاكرة', repTasks: 'المهام المكتملة', repGoals: 'إنجاز الأهداف', hoursU: 'ساعة',
    netErr: 'تعذر الاتصال بالخادم. تحقق من الإنترنت ثم حاول مجددًا.', forgot: 'نسيت كلمة المرور؟', resetT: 'استعادة كلمة المرور', sendCode: 'إرسال الرمز', codeSent: 'أرسلنا رمز التحقق إلى بريدك. أدخله هنا.',
    code: 'رمز التحقق', verify: 'تحقق', codeBad: 'أدخل رمز التحقق.', newPwT: 'كلمة مرور جديدة', newPw: 'كلمة المرور الجديدة', confirmPw: 'تأكيد كلمة المرور',
    changePw: 'تغيير كلمة المرور', pwBad: 'كلمتا المرور غير متطابقتين أو أقل من 6 أحرف.', pwDone: 'تم تغيير كلمة المرور.', back: 'رجوع',
    settings: 'الإعدادات', security: 'الأمان', chartT: 'الدقائق خلال الأسبوع',
    logout: 'تسجيل الخروج', saving: 'جارٍ الحفظ…', saved: 'تم الحفظ ✓', error: 'تعذر الحفظ',
    err: 'حدث خطأ، حاول مرة أخرى.', sure: 'هل أنت متأكد من الحذف؟', dark: 'داكن', light: 'فاتح',
    loading: 'جارٍ التحميل…', loadFail: 'تعذر تحميل البيانات. تحقق من إعداد Firebase ثم أعد المحاولة.', retry: 'إعادة المحاولة',
    P: { gk: 'حارس مرمى', cb: 'قلب دفاع', rb: 'ظهير أيمن', lb: 'ظهير أيسر', dm: 'محور', cm: 'وسط', rw: 'جناح أيمن', lw: 'جناح أيسر', st: 'مهاجم' },
    F: { right: 'اليمنى', left: 'اليسرى', both: 'الاثنتان' },
    D: { speed: 'السرعة', shooting: 'التسديد', passing: 'التمرير', dribbling: 'المراوغة', fitness: 'اللياقة', strength: 'القوة', defense: 'الدفاع', control: 'التحكم بالكرة', other: 'شيء آخر' },
    K: { speed: 'سرعة', shooting: 'تسديد', passing: 'تمرير', fitness: 'لياقة', strength: 'قوة', dribbling: 'مراوغة', defense: 'دفاع' }
  },
  en: {
    signupT: 'Create your account', signinT: 'Sign in', authSub: 'Your personal space for matches, training and study.',
    email: 'Email', password: 'Password', signupB: 'Create account', signinB: 'Sign in',
    haveAcc: 'I already have an account', noAcc: 'Create a new account',
    authBad: 'Enter a valid email and a password of at least 6 characters.', checkEmail: 'Account created. Check your email, then sign in.',
    setupT: 'Set up your account', setupSub: 'A few details, just once.', start: 'Start', needName: 'Enter your name first.',
    name: 'Name', birth: 'Date of birth', club: 'Club', pos: 'Position', foot: 'Preferred foot', develop: 'What do you want to improve?',
    home: 'Home', goals: 'Goals', matches: 'Matches', training: 'Training', study: 'Study', reports: 'Reports', profile: 'Profile',
    hello: 'Hello', doneOf: 'tasks done', addTask: 'Add a task…', noGoal: 'No goal', emptyTasks: 'No tasks yet.', add: 'Add',
    goalPh: 'e.g. Improve my shooting', emptyGoals: 'No goals yet.', emptyList: 'Nothing here yet.',
    opponent: 'Opponent', date: 'Date', whoWon: 'Who won?', me: 'Me', opp: 'Opponent', draw: 'Draw',
    myGoals: 'My goals', oppGoals: 'Opponent goals', win: 'Win', loss: 'Loss',
    pickWinner: 'Choose who won.', scoreErr: "The score doesn't match who won.",
    kind: 'Training type', minutes: 'Duration (minutes)', notes: 'Short notes', achieved: 'Completed', subject: 'Subject',
    min: 'min', achievedS: 'Completed',
    thisWeek: 'This week', repMatches: 'Matches', repTrain: 'Training sessions', repStudy: 'Study hours', repTasks: 'Tasks completed', repGoals: 'Goals progress', hoursU: 'h',
    netErr: 'Could not reach the server. Check your internet connection and try again.', forgot: 'Forgot password?', resetT: 'Reset password', sendCode: 'Send code', codeSent: 'We sent a verification code to your email. Enter it here.',
    code: 'Verification code', verify: 'Verify', codeBad: 'Enter the verification code.', newPwT: 'New password', newPw: 'New password', confirmPw: 'Confirm password',
    changePw: 'Change password', pwBad: "Passwords don't match or are shorter than 6 characters.", pwDone: 'Password changed.', back: 'Back',
    settings: 'Settings', security: 'Security', chartT: 'Minutes this week',
    logout: 'Sign out', saving: 'Saving…', saved: 'Saved ✓', error: 'Could not save',
    err: 'Something went wrong. Try again.', sure: 'Delete this item?', dark: 'Dark', light: 'Light',
    loading: 'Loading…', loadFail: 'Could not load your data. Check your Firebase setup, then retry.', retry: 'Retry',
    P: { gk: 'Goalkeeper', cb: 'Center Back', rb: 'Right Back', lb: 'Left Back', dm: 'Defensive Midfielder', cm: 'Midfielder', rw: 'Right Winger', lw: 'Left Winger', st: 'Striker' },
    F: { right: 'Right', left: 'Left', both: 'Both' },
    D: { speed: 'Speed', shooting: 'Shooting', passing: 'Passing', dribbling: 'Dribbling', fitness: 'Fitness', strength: 'Strength', defense: 'Defense', control: 'Ball control', other: 'Something else' },
    K: { speed: 'Speed', shooting: 'Shooting', passing: 'Passing', fitness: 'Fitness', strength: 'Strength', dribbling: 'Dribbling', defense: 'Defense' }
  }
};

let lang = localStorage.getItem('ps-lang') || 'ar';
let theme = localStorage.getItem('ps-theme') || 'dark';
let user = null, S = {}, pend = {}, pt = null, authNote = '';
let route = (location.hash || '#home').slice(1);
let authMode = localStorage.getItem('ps-acct') ? 'signin' : 'signup';

const t = k => T[lang][k] ?? k;
const o = (g, k) => T[lang][g][k] ?? k;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ld = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const today = () => ld(new Date());
const pct = a => a.length ? Math.round(a.filter(x => x.done).length * 100 / a.length) : 0;
const bar = p => `<div class="bar"><i style="width:${p}%"></i></div>`;
const opts = (g, sel) => Object.entries(T[lang][g]).map(([k, v]) => `<option value="${k}"${k === sel ? ' selected' : ''}>${v}</option>`).join('');
const byDate = (a, f) => [...a].sort((x, y) => y[f].localeCompare(x[f]));

// ---------- feedback ----------
let st$;
function status(k) {
  const e = $('#saveState'); e.textContent = k ? t(k) : ''; e.className = 'save-state ' + k;
  clearTimeout(st$); if (k === 'saved') st$ = setTimeout(() => status(''), 1500);
}
function toast(m) {
  const e = $('#toast'); e.textContent = m; e.classList.add('show');
  clearTimeout(toast.h); toast.h = setTimeout(() => e.classList.remove('show'), 2600);
}

// ---------- language + theme ----------
function chrome() {
  const h = document.documentElement;
  h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr'; h.dataset.theme = theme;
  document.querySelectorAll('#langSeg button').forEach(b => b.classList.toggle('on', b.dataset.v === lang));
  document.querySelectorAll('#themeSeg button').forEach(b => { b.classList.toggle('on', b.dataset.v === theme); b.textContent = t(b.dataset.v); });
  document.querySelector('meta[name=theme-color]').content = theme === 'dark' ? '#0f1218' : '#e8eaef';
}
function setPref(k, v) {
  if (k === 'lang') lang = v; else theme = v;
  localStorage.setItem('ps-' + k, v);
  chrome(); render();
  if (user && S.profile) patchProfile({ [k]: v });
}

// ---------- profile autosave ----------
function patchProfile(p, delay = 0) {
  Object.assign(S.profile, p); Object.assign(pend, p); status('saving');
  clearTimeout(pt); pt = setTimeout(flush, delay);
}
async function flush() {
  clearTimeout(pt);
  if (!user || !Object.keys(pend).length) return;
  const p = pend; pend = {};
  try {
    await db.collection('profiles').doc(user.uid).set({ ...p, user_id: user.uid }, { merge: true });
    if (!Object.keys(pend).length) status('saved');
  } catch (error) {
    console.error(error); pend = { ...p, ...pend }; status('error');
  }
}
addEventListener('pagehide', flush);
document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });

// ---------- data ----------
async function load() {
  const names = ['tasks', 'goals', 'matches', 'training_sessions', 'study_sessions'];
  const profileSnap = await db.collection('profiles').doc(user.uid).get();
  const docs = await Promise.all(names.map(n => db.collection(n).where('user_id', '==', user.uid).get()));
  const sortRows = snap => snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => {
    const av = a.created_at?.toMillis ? a.created_at.toMillis() : (a.created_at ? new Date(a.created_at).getTime() : 0);
    const bv = b.created_at?.toMillis ? b.created_at.toMillis() : (b.created_at ? new Date(b.created_at).getTime() : 0);
    return bv - av;
  });
  const p = profileSnap.exists ? { user_id: user.uid, ...profileSnap.data() } : null;
  S = { profile: p || { user_id: user.uid, onboarded: false, develop: [] }, ...Object.fromEntries(names.map((n, i) => [KEY[n], sortRows(docs[i])])) };
  if (p && p.lang) { lang = p.lang; localStorage.setItem('ps-lang', lang); }
  if (p && p.theme) { theme = p.theme; localStorage.setItem('ps-theme', p.theme); }
  chrome();
}
async function enter(u) {
  user = u; localStorage.setItem('ps-acct', '1'); S = {}; render();
  try { await load(); } catch (e) { console.error(e); S = { fail: true }; }
  render();
}

// ---------- auth ----------
let authEmail = '';
function authView() {
  const m = authMode, pwF = (id, key, ac) => `<label>${t(key)}<input id="${id}" type="password" dir="ltr" minlength="6" autocomplete="${ac}" required></label>`;
  const emF = `<label>${t('email')}<input id="em" type="email" dir="ltr" autocomplete="email" required></label>`;
  const f = {
    signup: ['signupT', emF + pwF('pw', 'password', 'new-password'), 'signupB'],
    signin: ['signinT', emF + pwF('pw', 'password', 'current-password'), 'signinB'],
    forgot: ['resetT', emF, 'sendCode']
  }[m];
  const links = m === 'signin' ? `<button class="link" data-act="forgot">${t('forgot')}</button><button class="link" data-act="authmode">${t('noAcc')}</button>`
    : m === 'signup' ? `<button class="link" data-act="authmode">${t('haveAcc')}</button>`
    : `<button class="link" data-act="back">${t('back')}</button>`;
  return `<div class="auth card"><h1>${t(f[0])}</h1>${m === 'signin' || m === 'signup' ? `<p class="muted">${t('authSub')}</p>` : ''}
  ${authNote ? `<p class="note">${authNote}</p>` : ''}
  <form id="authForm" class="form">${f[1]}<p id="amsg" class="err"></p><button class="btn big">${t(f[2])}</button></form>${links}</div>`;
}
async function submitAuth() {
  try {
    await Promise.race([authStep(), new Promise((_, rj) => setTimeout(() => rj(new Error('timeout')), 15000))]);
  } catch (e) {
    console.error(e);
    const m = $('#amsg'), b = $('#authForm button.btn');
    if (b) b.disabled = false;
    if (m) {
      m.textContent = t('netErr');
      const d = document.createElement('small'); d.className = 'ltr'; d.textContent = e.message + ' …'; m.appendChild(d);
      d.textContent = e.message + ' · ' + await diagnose();
    }
  }
}
async function diagnose() {
  return 'Firebase Authentication / Firestore';
}

async function authStep() {
  const g = id => ($(id) || {}).value || '', msg = $('#amsg'), btn = $('#authForm button.btn');
  const fail = m => { msg.textContent = m; btn.disabled = false; };
  msg.textContent = ''; btn.disabled = true;

  if (authMode === 'forgot') {
    const email = g('#em').trim(); if (!email) return fail(t('authBad'));
    try {
      await auth.sendPasswordResetEmail(email);
      authNote = lang === 'ar' ? 'تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.' : 'A password reset link was sent to your email.';
      authMode = 'signin';
      return render();
    } catch (error) { return fail(error.message); }
  }

  const email = g('#em').trim(), pw = g('#pw');
  if (!email || pw.length < 6) return fail(t('authBad'));
  try {
    if (authMode === 'signup') {
      const cred = await auth.createUserWithEmailAndPassword(email, pw);
      try { await cred.user.sendEmailVerification(); } catch (_) {}
      await enter(cred.user);
    } else {
      const cred = await auth.signInWithEmailAndPassword(email, pw);
      await enter(cred.user);
    }
  } catch (error) { fail(error.message); }
}

async function changePw(f) {
  const d = Object.fromEntries(new FormData(f));
  if (d.pw.length < 6 || d.pw !== d.pw2) { toast(t('pwBad')); return; }
  const btn = f.querySelector('button'); btn.disabled = true;
  try {
    await auth.currentUser.updatePassword(d.pw);
    f.reset(); toast(t('pwDone'));
  } catch (error) { toast(error.message); }
  btn.disabled = false;
}

// ---------- profile form (setup + profile page) ----------
function pform() {
  const p = S.profile, dev = p.develop || [];
  return `<label>${t('name')}<input type="text" data-f="name" value="${esc(p.name)}" maxlength="60" autocomplete="name"></label>
  <label>${t('birth')}<input type="date" data-f="birth_date" value="${p.birth_date || ''}" max="${today()}"></label>
  <label>${t('club')}<input type="text" data-f="club" value="${esc(p.club)}" maxlength="60"></label>
  <label>${t('pos')}<select data-f="position"><option value="">—</option>${opts('P', p.position)}</select></label>
  <label>${t('foot')}<select data-f="foot"><option value="">—</option>${opts('F', p.foot)}</select></label>
  <div class="lbl">${t('develop')}<div class="chips">${Object.keys(T[lang].D).map(k =>
    `<button type="button" class="chip${dev.includes(k) ? ' on' : ''}" data-act="dev" data-v="${k}">${o('D', k)}</button>`).join('')}</div></div>`;
}

// ---------- views ----------
const taskRow = (x, tag) => `<li class="task${x.done ? ' done' : ''}">
  <button class="chk" data-act="tog" data-id="${x.id}" aria-label="${esc(x.title)}">${x.done ? '☑' : '☐'}</button>
  <div class="grow"><span>${esc(x.title)}</span>${tag && x.goal_id ? `<small>${esc((S.goals.find(g => g.id === x.goal_id) || {}).title || '')}</small>` : ''}</div>
  <button class="x" data-act="del" data-t="tasks" data-id="${x.id}" aria-label="×">✕</button></li>`;
const logRow = (tb, id, left, right) => `<li class="log"><div class="grow">${left}</div><div class="end">${right || ''}</div>
  <button class="x" data-act="del" data-t="${tb}" data-id="${id}" aria-label="×">✕</button></li>`;
const rng = () => `<label>${t('achieved')} <output>100%</output><input type="range" name="progress" min="0" max="100" step="5" value="100" oninput="this.previousElementSibling.textContent=this.value+'%'"></label>`;
const rep = (label, val, sub) => `<div class="rep"><div>${label}${sub ? `<small>${sub}</small>` : ''}</div><b>${val}</b></div>`;

function weekChart(start) {
  const days = [...Array(7)].map((_, i) => { const x = new Date(start); x.setDate(x.getDate() + i); return ld(x); });
  const sm = d => S.study.filter(x => x.studied_on === d).reduce((a, x) => a + x.minutes, 0);
  const tm = d => S.training.filter(x => x.trained_on === d).reduce((a, x) => a + x.minutes, 0);
  const max = Math.max(60, ...days.map(d => sm(d) + tm(d)));
  const cols = days.map(d => `<div class="col"><div class="stack" title="${sm(d)} + ${tm(d)} ${t('min')}"><i class="s" style="height:${sm(d) / max * 100}%"></i><i class="r" style="height:${tm(d) / max * 100}%"></i></div>
    <small>${new Date(d + 'T00:00').toLocaleDateString(lang, { weekday: 'short' })}</small></div>`).join('');
  return `<section class="card"><h2>${t('chartT')}</h2><div class="chart">${cols}</div>
    <div class="legend"><span><i style="background:var(--acc)"></i>${t('study')}</span><span><i style="background:var(--ok)"></i>${t('training')}</span></div></section>`;
}

const V = {
  home() {
    const ts = [...S.tasks].sort((a, b) => a.done - b.done), d = S.tasks.filter(x => x.done).length;
    const sel = S.goals.length ? `<select name="goal_id"><option value="">${t('noGoal')}</option>${S.goals.map(g => `<option value="${g.id}">${esc(g.title)}</option>`).join('')}</select>` : '';
    return `<h1>${t('hello')} ${esc(S.profile.name || '')}</h1><p class="muted">${d} / ${S.tasks.length} ${t('doneOf')}</p>
    <form class="row" data-form="task"><input name="title" placeholder="${t('addTask')}" maxlength="120" autocomplete="off" required>${sel}<button class="btn">＋</button></form>
    <ul class="list">${ts.map(x => taskRow(x, true)).join('') || `<li class="empty">${t('emptyTasks')}</li>`}</ul>`;
  },
  goals() {
    return `<h1>${t('goals')}</h1>
    <form class="row" data-form="goal"><input name="title" placeholder="${t('goalPh')}" maxlength="120" autocomplete="off" required><button class="btn">＋</button></form>
    ${S.goals.map(g => {
      const ts = S.tasks.filter(x => x.goal_id === g.id), p = pct(ts);
      return `<section class="card"><div class="between"><b class="grow">${esc(g.title)}</b><span>${p}%</span>
        <button class="x" data-act="del" data-t="goals" data-id="${g.id}" aria-label="×">✕</button></div>${bar(p)}
        <ul class="list">${ts.map(x => taskRow(x, false)).join('')}</ul>
        <form class="row" data-form="task"><input type="hidden" name="goal_id" value="${g.id}"><input name="title" placeholder="${t('addTask')}" maxlength="120" autocomplete="off" required><button class="btn">＋</button></form></section>`;
    }).join('') || `<p class="muted center">${t('emptyGoals')}</p>`}`;
  },
  matches() {
    const list = byDate(S.matches, 'played_on');
    return `<h1>${t('matches')}</h1>
    <form class="card form" data-form="match">
      <label>${t('opponent')}<input name="opponent" maxlength="60" autocomplete="off" required></label>
      <label>${t('date')}<input type="date" name="date" value="${today()}" required></label>
      <div class="lbl">${t('whoWon')}<div class="chips">${[['win', 'me'], ['loss', 'opp'], ['draw', 'draw']].map(([v, k]) =>
        `<label class="chip"><input type="radio" name="outcome" value="${v}">${t(k)}</label>`).join('')}</div></div>
      <div class="two"><label>${t('myGoals')}<input type="number" name="my_goals" min="0" max="99" inputmode="numeric" value="0" required></label>
      <label>${t('oppGoals')}<input type="number" name="opp_goals" min="0" max="99" inputmode="numeric" value="0" required></label></div>
      <button class="btn big">${t('add')}</button></form>
    <ul class="list">${list.map(m => logRow('matches', m.id,
      `<b>${esc(m.opponent)}</b><small class="ltr">${m.played_on}</small>`,
      `<span class="score ltr">${m.my_goals} - ${m.opp_goals}</span><span class="badge ${m.outcome}">${t(m.outcome)}</span>`)).join('') || `<li class="empty">${t('emptyList')}</li>`}</ul>`;
  },
  training() {
    const list = byDate(S.training, 'trained_on');
    return `<h1>${t('training')}</h1>
    <form class="card form" data-form="training">
      <label>${t('kind')}<select name="kind">${opts('K')}</select></label>
      <label>${t('minutes')}<input type="number" name="minutes" min="1" max="600" inputmode="numeric" value="30" required></label>
      <label>${t('notes')}<input name="notes" maxlength="160" autocomplete="off"></label>
      ${rng()}<button class="btn big">${t('add')}</button></form>
    <ul class="list">${list.map(x => logRow('training_sessions', x.id,
      `<b>${o('K', x.kind)}</b><small>${x.minutes} ${t('min')} · <span class="ltr">${x.trained_on}</span></small>${x.notes ? `<small>${esc(x.notes)}</small>` : ''}`,
      `<b>${x.progress}%</b>`)).join('') || `<li class="empty">${t('emptyList')}</li>`}</ul>`;
  },
  study() {
    const list = byDate(S.study, 'studied_on');
    return `<h1>${t('study')}</h1>
    <form class="card form" data-form="study">
      <label>${t('subject')}<input name="subject" maxlength="60" autocomplete="off" required></label>
      <label>${t('minutes')}<input type="number" name="minutes" min="1" max="900" inputmode="numeric" value="60" required></label>
      ${rng()}<button class="btn big">${t('add')}</button></form>
    <ul class="list">${list.map(x => logRow('study_sessions', x.id,
      `<b>${esc(x.subject)}</b><small>${x.minutes} ${t('min')} · ${t('achievedS')} ${x.progress}%</small>${bar(x.progress)}`)).join('') || `<li class="empty">${t('emptyList')}</li>`}</ul>`;
  },
  reports() {
    const d = new Date(), back = (d.getDay() + (lang === 'ar' ? 1 : 6)) % 7;
    d.setDate(d.getDate() - back);
    const wk = ld(d);
    const m = S.matches.filter(x => x.played_on >= wk), tr = S.training.filter(x => x.trained_on >= wk), st = S.study.filter(x => x.studied_on >= wk);
    const sum = (a, f) => a.reduce((s, x) => s + x[f], 0), cnt = k => m.filter(x => x.outcome === k).length;
    const tasksDone = S.tasks.filter(x => x.done && x.done_at && ld(new Date(x.done_at)) >= wk).length;
    const gp = S.goals.length ? Math.round(S.goals.reduce((s, g) => s + pct(S.tasks.filter(x => x.goal_id === g.id)), 0) / S.goals.length) : 0;
    return `<h1>${t('reports')}</h1><p class="muted">${t('thisWeek')}</p>
    <section class="card">
      ${rep(t('repMatches'), m.length, `${cnt('win')} ${t('win')} · ${cnt('draw')} ${t('draw')} · ${cnt('loss')} ${t('loss')}`)}
      ${rep(t('repTrain'), tr.length, `${sum(tr, 'minutes')} ${t('min')}`)}
      ${rep(t('repStudy'), `${Math.round(sum(st, 'minutes') / 6) / 10} ${t('hoursU')}`)}
      ${rep(t('repTasks'), tasksDone)}
      ${rep(t('repGoals'), gp + '%')}${bar(gp)}
    </section>${weekChart(d)}`;
  },
  profile() {
    return `<h1>${t('settings')}</h1><h2>${t('profile')}</h2><div class="form">${pform()}</div>
    <section class="card"><h2>${t('security')}</h2><form id="pwForm" class="form">
      <label>${t('newPw')}<input type="password" name="pw" dir="ltr" minlength="6" autocomplete="new-password" required></label>
      <label>${t('confirmPw')}<input type="password" name="pw2" dir="ltr" minlength="6" autocomplete="new-password" required></label>
      <button class="btn">${t('changePw')}</button></form></section>
    <button class="btn ghost big" data-act="logout">${t('logout')}</button>`;
  }
};
const NAV = [['home', '🏠'], ['goals', '🎯'], ['matches', '⚽'], ['training', '🏃'], ['study', '📚'], ['reports', '📊'], ['profile', '⚙️']];
if (!V[route]) route = 'home';

function render() {
  const n = $('#nav');
  n.innerHTML = '';
  if (!user) { view.innerHTML = authView(); return; }
  if (S.fail) { view.innerHTML = `<p class="muted center">${t('loadFail')}</p><button class="btn big" data-act="retry">${t('retry')}</button>`; return; }
  if (!S.profile) { view.innerHTML = `<p class="muted center">${t('loading')}</p>`; return; }
  if (!S.profile.onboarded) {
    view.innerHTML = `<h1>${t('setupT')}</h1><p class="muted">${t('setupSub')}</p><div class="form">${pform()}</div><button class="btn big" data-act="start">${t('start')}</button>`;
    return;
  }
  n.innerHTML = NAV.map(([k, i]) => `<button class="${k === route ? 'on' : ''}" data-act="go" data-v="${k}"><span>${i}</span>${t(k === 'profile' ? 'settings' : k)}</button>`).join('');
  view.innerHTML = V[route]();
}

// ---------- adding rows ----------
const KEY = { tasks: 'tasks', goals: 'goals', matches: 'matches', training_sessions: 'training', study_sessions: 'study' };
const FORMS = {
  task: ['tasks', d => d.title.trim() && { title: d.title.trim(), goal_id: d.goal_id || null }],
  goal: ['goals', d => d.title.trim() && { title: d.title.trim() }],
  match: ['matches', d => {
    const a = +d.my_goals, b = +d.opp_goals, r = d.outcome;
    if (!d.opponent.trim()) return null;
    if (!r) { toast(t('pickWinner')); return null; }
    if (!(r === 'win' ? a > b : r === 'loss' ? a < b : a === b)) { toast(t('scoreErr')); return null; }
    return { opponent: d.opponent.trim(), played_on: d.date, outcome: r, my_goals: a, opp_goals: b };
  }],
  training: ['training_sessions', d => ({ kind: d.kind, minutes: +d.minutes, notes: d.notes.trim() || null, progress: +d.progress, trained_on: today() })],
  study: ['study_sessions', d => d.subject.trim() && ({ subject: d.subject.trim(), minutes: +d.minutes, progress: +d.progress, studied_on: today() })]
};
async function addRow(f) {
  const [tb, build] = FORMS[f.dataset.form], row = build(Object.fromEntries(new FormData(f)));
  if (!row) return;
  const btn = f.querySelector('button.btn'); btn.disabled = true; status('saving');
  try {
    const ref = db.collection(tb).doc();
    const data = { ...row, user_id: user.uid, created_at: firebase.firestore.FieldValue.serverTimestamp() };
    await ref.set(data);
    S[KEY[tb]].unshift({ id: ref.id, ...row, user_id: user.uid, created_at: new Date() });
    status('saved'); render();
  } catch (error) {
    console.error(error); status('error'); toast(t('err')); btn.disabled = false;
  }
}

// ---------- events ----------
async function reload() { try { await load(); } catch (e) { console.error(e); } render(); }

document.addEventListener('click', async e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, v = b.dataset.v, id = b.dataset.id;
  if (a === 'lang' || a === 'theme') setPref(a, v);
  else if (a === 'authmode') { authMode = authMode === 'signup' ? 'signin' : 'signup'; authNote = ''; render(); }
  else if (a === 'forgot') { authMode = 'forgot'; authNote = ''; render(); }
  else if (a === 'back') { authMode = 'signin'; authNote = ''; render(); }
  else if (a === 'go') { flush(); route = v; history.replaceState(null, '', '#' + v); render(); scrollTo(0, 0); }
  else if (a === 'dev') {
    const arr = S.profile.develop || [];
    patchProfile({ develop: arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v] });
    b.classList.toggle('on');
  }
  else if (a === 'start') {
    if (!(S.profile.name || '').trim()) { toast(t('needName')); return; }
    patchProfile({ onboarded: true, lang, theme }); await flush(); render();
  }
  else if (a === 'tog') {
    const x = S.tasks.find(i => i.id === id); if (!x) return;
    x.done = !x.done; x.done_at = x.done ? new Date().toISOString() : null; render(); status('saving');
    try { await db.collection('tasks').doc(id).update({ done: x.done, done_at: x.done_at }); status('saved'); } catch (error) { console.error(error); toast(t('err')); status('error'); await reload(); }
  }
  else if (a === 'del') {
    const tb = b.dataset.t;
    if (tb !== 'tasks' && !confirm(t('sure'))) return;
    S[KEY[tb]] = S[KEY[tb]].filter(x => x.id !== id);
    if (tb === 'goals') S.tasks.forEach(x => { if (x.goal_id === id) x.goal_id = null; });
    render(); status('saving');
    try { await db.collection(tb).doc(id).delete(); status('saved'); } catch (error) { console.error(error); toast(t('err')); status('error'); await reload(); }
  }
  else if (a === 'logout') { await flush(); await auth.signOut(); user = null; S = {}; authMode = 'signin'; localStorage.removeItem('ps-acct'); render(); }
  else if (a === 'retry') enter(user);
});

view.addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.id === 'authForm') submitAuth();
  else if (e.target.id === 'pwForm') changePw(e.target);
  else if (e.target.dataset.form) addRow(e.target);
});
view.addEventListener('input', e => {
  const el = e.target;
  if (el.dataset.f && el.type === 'text') patchProfile({ [el.dataset.f]: el.value }, 600);
});
view.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.f) patchProfile({ [el.dataset.f]: el.value.trim() || null }, 0);
});

// ---------- start ----------
(async () => {
  chrome();
  auth.onAuthStateChanged(async u => { if (u) await enter(u); else { user = null; render(); } });
})();
