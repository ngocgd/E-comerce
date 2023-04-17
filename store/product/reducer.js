import { Types } from "./types";

const initialState = {
  dataProduct: {
    paging: {},
    rows: [],
  },
};
const reducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Types.SAVE_LIST_PRODUCT:
      return {
        ...newState,
        dataProduct: action.payload,
      };
    default:
      return { ...newState };
  }
};
export default reducer;
