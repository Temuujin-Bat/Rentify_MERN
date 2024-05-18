const reducers = {
  setToken: (state, action) => ({
    ...state,
    tokenDetails: action.payload,
  }),
  setAuth: (state, action) => ({
    ...state,
    authDetails: action.payload,
  }),
};

export { reducers };
