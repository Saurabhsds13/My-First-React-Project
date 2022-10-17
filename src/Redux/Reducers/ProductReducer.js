const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCT":
      const newdata = { ...state, products: payload };
      state = newdata;
      return state;
    default:
      return state;
  }
};
