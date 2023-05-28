import { isEmpty } from 'lodash';
const AUTH_TOKEN_KEY = 'AUTH_TOKEN';
const AUTH_DATA_KEY = 'AUTH_DATA';
const AUTH_MENU = 'AUTH_MENU';
const IP_API_KEY = 'API';
const IP_HOST_KEY = 'HOST';
export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function saveToken(token) {
  return localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function saveApi(params) {
  return localStorage.setItem(IP_API_KEY, params);
}

export function saveHost(params) {
  return localStorage.setItem(IP_HOST_KEY, params);
}

export function getAuthMenus() {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(AUTH_MENU));
  } catch (e) {
    data = null;
  }
  return data;
}

export function getAuthData() {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(AUTH_DATA_KEY));
  } catch (e) {
    // do nothing
    data = null;
  }
  return data;
}

export function getApi() {
  return localStorage.getItem(IP_API_KEY);
}

export function getHost() {
  return localStorage.getItem(IP_HOST_KEY);
}

export function setAuthData(data) {
  return localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(data));
}

export function setAuthMenus(data) {
  return localStorage.setItem(AUTH_MENU, JSON.stringify(data));
}

export function updateAuthData(key, value) {
  if (!isLoggedIn()) {
    return false;
  }
  let data = getAuthData();
  if (data) {
    data = { ...data, [key]: value };
    setAuthData(data);
  }
}

export function setLocale(locale) {
  return localStorage.setItem('locale', locale);
}

export function getLocale() {
  return localStorage.getItem('locale') || 'zh_CN';
}

export function getIsMenuPermission(key) {
  const data = getAuthMenus();
  if (!isEmpty(data)) {
    return isEmpty(data.filter(item => item.fullName === key));
  }
}

export function clear() {
  localStorage.removeItem(AUTH_DATA_KEY);
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function isLoggedIn() {
  const token = getToken();
  const data = getAuthData();
  return Boolean(token) && Boolean(data);
}

export default {
  getToken,
  saveToken,
  getAuthData,
  setAuthData,
  updateAuthData,
  clear,
  isLoggedIn,
  getIsMenuPermission,
  getAuthMenus,
  setAuthMenus,
  getHost,
  getApi
};
