export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user.name;

export const selectIsLoading = (state) => state.auth.isLoading;
