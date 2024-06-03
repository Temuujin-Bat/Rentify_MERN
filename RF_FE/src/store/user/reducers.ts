const reducers = {
  setUserInfo: (state, action) => ({
    ...state,
    userInfo: action.payload,
  }),
};

export { reducers };
