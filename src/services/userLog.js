const st = window.localStorage;

const login = (user) => {
  st.setItem('user', user);
};

const logout = () => {
  st.removeItem('user');
};

const checkLogin = () => st.getItem('user') !== null;

const getUser = () => st.getItem('user');

const userLog = {
  login, logout, checkLogin, getUser,
};

export default userLog;
