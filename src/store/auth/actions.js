import { api } from "src/boot/axios";

export const doLogin = async ({ commit }, payload) => {
  await api.post('/authenticate', payload).then(response => {
    const token = response.data
    commit('setToken', token)
    api.defaults.headers.common.Authorization = 'JWT' + token.access
  })
};

export const getMe = async ({commit, dispatch}, token ) => {
  await api.get('/authenticate', payload).then(response => {
    console.log(response, token, {commit, dispatch});
  })
};
