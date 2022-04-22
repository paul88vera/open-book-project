import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import decode from 'jwt-decode';

import auth from './auth';

class AuthService {
  getProfile() {
    return decode(this.getProfile());
  }

  loggedIn() {
    const token = this.getToken();

    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if(decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch(error => {return false})
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  // set token to localStorage and reload page to homepage
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})

export default new AuthService();