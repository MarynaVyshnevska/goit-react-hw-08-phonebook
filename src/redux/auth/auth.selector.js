export const selectorAuthStatus = (state) => state.auth.status;
// export const selectorAuthIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectorAuthToken = (state) => state.auth.data;
export const selectorAuthProfile = (state) => state.auth.data;
// export const selectorAuthIsRefreshing = (state) => state.auth.isRefreshing;
// ******
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
