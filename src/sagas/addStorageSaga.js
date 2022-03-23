import { ADD_FAVOURITE } from "../constants";
import { takeEvery, select, call } from "redux-saga/effects";
import { setLocalStorage } from "../localStorage";

const getFavourites = (state) => state.favouritesReducer.favourites;

function* handleLocalStorage() {
  const favourites = yield select(getFavourites);
  yield call(setLocalStorage, favourites);
}

export default function* watchMoviesLoad() {
  yield takeEvery(ADD_FAVOURITE, handleLocalStorage);
}
