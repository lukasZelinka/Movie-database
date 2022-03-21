import { MOVIE } from "../constants";
import { takeEvery, select, call, put } from "redux-saga/effects";
import { setMovie, setErrorMovie } from "../actions";
import { fetchMovie } from "../api/fetchMovie";

const getId = (state) => state.saveIdReducer.id;

function* handleMovieLoad() {
  try {
    const id = yield select(getId);
    const movie = yield call(fetchMovie, id);
    yield put(setMovie(movie)); // MOVIE.LOAD_SUCCESS
  } catch (error) {
    yield put(setErrorMovie(error)); // MOVIE.LOAD_FAIL
  }
}

export default function* watchMovieLoad() {
  yield takeEvery(MOVIE.LOAD, handleMovieLoad); // MOVIE.LOAD
}
