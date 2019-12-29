export const login = (state, { payload }) => ({
  ...state,
  loggedIn: payload.loggedIn,
  message: payload.message,
});

export const showState = (state, { payload }) => ({
  ...state,
  state: payload.state,
});
