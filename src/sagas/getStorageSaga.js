import { LOCAL_STORAGE_GET } from "../constants";
import { takeLatest, put, call } from "redux-saga/effects";
import { getLocalStorage } from "../localStorage";
import { setFavourites } from "../actions";

function* handleLocalStorage() {
  const favourites = yield call(getLocalStorage);
  yield put(setFavourites(favourites));
}

export default function* watchMoviesLoad() {
  yield takeLatest(LOCAL_STORAGE_GET, handleLocalStorage);
}
