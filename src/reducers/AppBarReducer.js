import { UPDATE } from "../constants/index";

export const initialState = {
  inputValue: "",
};
export default function AppBarReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}
