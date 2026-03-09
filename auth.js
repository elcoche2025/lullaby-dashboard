// Shared auth for Lullaby project pages
const HASH = '78163a9b32a43d0bf9bf5a80cd700105ddd6e3abe279bb190fa9b97f05c59e77';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function isAuthed() {
  return sessionStorage.getItem('lullaby-auth') === 'true';
}

function showContent() {
  document.getElementById('gate').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

async function tryAuth() {
  const input = document.getElementById('pw').value;
  const hash = await sha256(input);
  if (hash === HASH) {
    sessionStorage.setItem('lullaby-auth', 'true');
    showContent();
  } else {
    document.getElementById('pw-error').style.display = 'block';
    document.getElementById('pw').value = '';
    document.getElementById('pw').focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (isAuthed()) {
    showContent();
    return;
  }
  document.getElementById('pw').addEventListener('keydown', e => {
    if (e.key === 'Enter') tryAuth();
  });
});
