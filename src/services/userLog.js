const st = window.localStorage;
const s2b = (str) => btoa(btoa(str));
const b2s = (str) => atob(atob(str));

const login = (user) => {
  const obUser = {};
  Object.entries(JSON.parse(user)).forEach(([key, value]) => {
    obUser[s2b(key)] = s2b(value);
  });
  st.setItem(s2b('pulsarLogin'), JSON.stringify(obUser));
};

const logout = () => {
  st.removeItem(s2b('pulsarLogin'));
};

const checkLogin = () => st.getItem(s2b('pulsarLogin')) !== null;

const getUser = () => st.getItem(s2b('pulsarLogin'));

const getUserName = () => {
  const user = JSON.parse( st.getItem(s2b('pulsarLogin')) );
  return b2s(user[s2b('userName')]);
};

const userLog = {
  login, logout, checkLogin, getUser, getUserName,
};

const obscureString = (str) => str.replace(':', '_');
const unObscureString = (str) => str.replace('_', ':');

const equalObscure = (str) => {
  const mid = str.replace('=', '?');
};

export default userLog;
