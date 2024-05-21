const reducers = {
  setApartments: (state, action) => ({
    ...state,
    apartments: action.payload,
  }),
  setSingleApartment: (state, action) => ({
    ...state,
    singleApartment: action.payload,
  }),
};

export { reducers };
