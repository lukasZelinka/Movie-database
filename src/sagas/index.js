import { all } from "redux-saga/effects";

import moviesSaga from "./moviesSaga";
import movieSaga from "./movieSaga";
import addStorageSaga from "./addStorageSaga";
import deleteStorageSaga from "./deleteStorageSaga";
import getStorageSaga from "./getStorageSaga";
import infiniteMoviesSaga from "./infiniteMoviesSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    movieSaga(),
    addStorageSaga(),
    deleteStorageSaga(),
    getStorageSaga(),
    infiniteMoviesSaga(),
  ]);
}
