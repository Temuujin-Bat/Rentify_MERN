const reducers = {
  setApartments: (state, action) => ({
    ...state,
    apartments: action.payload,
  }),
  setSingleApartment: (state, action) => ({
    ...state,
    singleApartment: action.payload,
  }),
  setUserApartments: (state, action) => ({
    ...state,
    userApartments: action.payload,
  }),
  setUserSingleApartment: (state, action) => ({
    ...state,
    userSingleApartment: action.payload,
  }),
};

export { reducers };
