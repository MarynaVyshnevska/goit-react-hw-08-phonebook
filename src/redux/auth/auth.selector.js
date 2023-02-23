export const selectorAuthStatus = (state) => state.auth.status;
// export const selectorAuthToken = (state) => state.auth.data;


export const selectAuthToken = (state) => state.auth.token;
export const selectAuthIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthProfile = (state) => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;




