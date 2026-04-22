const users = {
  'joao@ifto.edu.br':   { role: 'aluno', name: 'Joao Silva (Aluno)' },
  'ana@ifto.edu.br':    { role: 'prof',  name: 'Dra. Ana Santos (Psicologa)' },
  'carlos@ifto.edu.br': { role: 'prof',  name: 'Carlos Oliveira (Assist. Social)' },
  'maria@ifto.edu.br':  { role: 'coord', name: 'Maria Fernandes (Coordenadora)' },
  'admin@ifto.edu.br':  { role: 'admin', name: 'Admin / TI' },
};

const screens = {
  aluno: 'aluno-screen',
  prof:  'prof-screen',
  coord: 'coord-screen',
  admin: 'admin-screen',
};

/* ---------- Auth ---------- */

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const senha = document.getElementById('login-senha').value;
  if (users[email] && senha === '123456') {
    loginAs(email);
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
}

function quickLogin(email) {
  document.getElementById('login-email').value = email;
  document.getElementById('login-senha').value = '123456';
  doLogin();
}

function loginAs(email) {
  const u = users[email];
  document.getElementById('login-screen').classList.remove('active');
  document.getElementById(screens[u.role]).classList.add('active');
  document.getElementById('nav-user').textContent = u.name;
  document.getElementById('logout-btn').style.display = 'block';
  document.getElementById('login-error').style.display = 'none';
}

function goLogin() {
  Object.values(screens).forEach(s => {
    const el = document.getElementById(s);
    if (el) el.classList.remove('active');
  });
  document.getElementById('login-screen').classList.add('active');
  document.getElementById('nav-user').textContent = 'Campus Colinas do Tocantins';
  document.getElementById('logout-btn').style.display = 'none';
}

/* ---------- Tabs ---------- */

function showTab(prefix, activeId, btn) {
  document.querySelectorAll('[id^="' + prefix + '-"]').forEach(s => s.classList.remove('active'));
  document.getElementById(activeId).classList.add('active');
  btn.closest('.tabs').querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

/* ---------- Agendamento ---------- */

function selectSlot(el) {
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function updateSlots(sel) {
  const isAna   = sel.value.includes('Ana');
  const slots   = isAna
    ? ['08:00', '09:00', '11:00', '14:00', '16:00']
    : ['08:30', '10:00', '10:30', '14:00', '15:30', '16:30'];
  const taken   = isAna ? ['10:00', '15:00'] : ['09:00'];
  const all     = [...slots, ...taken].sort();
  const grid    = document.getElementById('time-grid');

  grid.innerHTML = all.map(s => {
    const isTaken = taken.includes(s);
    return `<div class="time-slot${isTaken ? ' taken' : ''}" ${!isTaken ? 'onclick="selectSlot(this)"' : ''}>${s}</div>`;
  }).join('');
}

/* ---------- Init ---------- */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ag-data').value = new Date().toISOString().split('T')[0];
});
