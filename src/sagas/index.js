import { all } from "redux-saga/effects";

import moviesSaga from "./moviesSaga";
import movieSaga from "./movieSaga";

export default function* rootSaga() {
  // yield all([imagesSaga(), statsSaga()]);
  yield all([moviesSaga(), movieSaga()]);
}
