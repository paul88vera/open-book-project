export const setToken = (state, token) => {
  state.token = token
  state.isAuthenticated = true
}

export const setMe = (state, me) => {
  state.me = me
  state.isAuthenticated = false
}
