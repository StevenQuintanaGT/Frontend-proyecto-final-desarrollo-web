// Simple frontend API helpers using fetch.
// Keep small and dependency-free so it's easy to adapt.
const API_BASE = (() => {
  // Change this if your backend runs on a different host/port.
  return (window as any).__MOTORMANIA_API_BASE__ || 'http://127.0.0.1:8000/api';
})();

function getToken(): string | null {
  return localStorage.getItem('motor_token');
}

function setToken(token: string) {
  localStorage.setItem('motor_token', token);
}

function clearToken() {
  localStorage.removeItem('motor_token');
  localStorage.removeItem('motor_user');
}

function getUser(): any | null {
  const raw = localStorage.getItem('motor_user');
  return raw ? JSON.parse(raw) : null;
}

function setUser(user: any) {
  localStorage.setItem('motor_user', JSON.stringify(user));
}

function isAuthenticated() {
  return !!getToken() || !!getUser();
}

async function register(username: string, email: string, password: string) {
  const data = await fetchJson(`${API_BASE}/auth/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  // accept several possible token field names to be resilient with backend variations
  const tokenVal = data?.token || data?.key || data?.auth_token || null;
  if (tokenVal) setToken(tokenVal);
  if (data?.user) setUser(data.user);
  else setUser({ username });
  return data;
}

async function loginReq(username: string, password: string) {
  const data = await fetchJson(`${API_BASE}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const tokenVal = data?.token || data?.key || data?.auth_token || null;
  if (tokenVal) setToken(tokenVal);
  if (data?.user) setUser(data.user);
  else setUser({ username });
  return data;
}

async function createContact(contact: { name: string; email: string; subject: string; message: string }) {
  const token = getToken();
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Token ${token}`;
  const data = await fetchJson(`${API_BASE}/contacts/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(contact)
  });
  return data;
}

async function listContacts() {
  const data = await fetchJson(`${API_BASE}/contacts/`);
  return data;
}

// Helper to perform fetch and normalize errors. On network failure throws { status: 0, data: { detail: 'network_error' }, message }
async function fetchJson(url: string, opts?: RequestInit) {
  try {
    const res = await fetch(url, opts);
    let data: any = null;
    try {
      data = await res.json();
    } catch (e) {
      // response not JSON
      data = null;
    }
    if (!res.ok) throw { status: res.status, data };
    return data;
  } catch (err: any) {
    // Network error or the thrown object above
    if (err && typeof err.status === 'number') throw err; // rethrow our normalized server error
    throw { status: 0, data: { detail: 'network_error' }, message: err?.message || String(err) };
  }
}

export {
  API_BASE,
  getToken,
  setToken,
  clearToken,
  getUser,
  // convenience helper to check auth quickly
  isAuthenticated,
  setUser,
  register,
  loginReq as login,
  createContact,
  listContacts
};
