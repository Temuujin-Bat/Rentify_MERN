const reducers = {
  setApartments: (state, action) => ({
    ...state,
    apartments: action.payload,
  }),
};

export { reducers };
