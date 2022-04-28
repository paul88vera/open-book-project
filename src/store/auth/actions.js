import { api } from "src/boot/axios";

export const doLogin = async ({ commit }, payload) => {
  await api.post('/authenticate', payload).then(response => {
    const token = response.data
    commit('setToken', token)
    api.defaults.headers.common.Authorization = 'JWT' + token.access
    let userData = JSON.stringify(response);
    localStorage.setItem('userData', userData);
  })
};
