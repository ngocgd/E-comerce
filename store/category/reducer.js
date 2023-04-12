import { Types } from "./types";

const initialState = {
  dataPopup: {
    paging: {},
    rows: [],
  },
};
const reducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Types.SAVE_LIST_POPUP:
      return {
        ...newState,
        dataPopup: action.payload,
      };
    default:
      return { ...newState };
  }
};
export default reducer;
