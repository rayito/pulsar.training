import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: 'CFPAT--Gy7PqjHFkN-kbitWa0m2Q8edHZbu8HbN2tW6JDe828',
});

const st = window.localStorage;
const psEnc = (str) => btoa(btoa(str)).replace('=', '?').replace(':', '_');
const psDec = (str) => atob(atob(str.replace('_', ':').replace('?', '=')));

/*
const psEnc = (str) => str;
const psDec = (str) => str;
*/

const login = (user) => {
  const obUser = {};
  Object.entries(user).forEach(([key, value]) => {
    obUser[psEnc(key)] = psEnc(value);
  });
  st.setItem(psEnc('pulsarLogin'), psEnc(JSON.stringify(obUser)));
};

const logout = () => {
  st.removeItem(psEnc('pulsarLogin'));
};

const checkLogin = async () => {
  if (st.getItem(psEnc('pulsarLogin')) !== null) {
    const user = JSON.parse( psDec(st.getItem(psEnc('pulsarLogin'))) );
    return client.getSpace('1cfepwuemnrk')
      .then((space) => space.getEnvironment('master'))
      .then((env) => env.getEntry(psDec(user[psEnc('id')])))
      .then((entry) => {
        console.log(user);
        console.log(`ID CHECK: ${entry.sys.id} === ${psDec(user[psEnc('id')])}`);
        return entry.sys.id === psDec(user[psEnc('id')]);
      });
  } else {
    return false;
  }
};

const getUser = () => st.getItem(psEnc('pulsarLogin'));

const getUserName = () => {
  const user = JSON.parse( psDec(st.getItem(psEnc('pulsarLogin'))));
  return user[psEnc('userName')];
};

const getUserID = () => {
  const user = JSON.parse( psDec(st.getItem(psEnc('pulsarLogin'))));
  return psDec(user[psEnc('id')]);
};

const userLog = {
  login, logout, checkLogin, getUser, getUserName, getUserID,
};

export default userLog;
