import { Types } from "./types";

const initialState = {
  dataUser : null
};
const reducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case Types.SAVE_LIST_USER:
      return {
        ...newState,
        dataUser: action.payload,
      };
    default:
      return { ...newState };
  }
};
export default reducer;
