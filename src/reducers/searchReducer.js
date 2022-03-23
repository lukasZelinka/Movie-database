import { SEARCH } from "../constants";

const searchReducer = (state = true, action) => {
  switch (action.type) {
    case SEARCH.HIDE:
      return false;
    case SEARCH.SHOW:
      return true;
    default:
      return state;
  }
};
export default searchReducer;
