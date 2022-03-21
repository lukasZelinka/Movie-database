import { SAVE_ID } from "../constants";

const initialState = {
  id: null,
};

const saveIdReducer = (state = initialState, action) => {
  if (action.type === SAVE_ID) {
    return { ...state, id: action.id };
  }
  return state;
};

export default saveIdReducer;
