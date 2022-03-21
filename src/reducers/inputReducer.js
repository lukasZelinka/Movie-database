import { UPDATE } from "../constants/index";

export const initialState = {
  inputValue: "",
};
//reducer
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return { ...state, inputValue: action.newValue };
    default:
      return state;
  }
}
