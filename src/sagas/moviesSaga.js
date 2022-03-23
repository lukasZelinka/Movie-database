import { MOVIES } from "../constants";
import { takeEvery, select, call, put } from "redux-saga/effects";
import { fetchMovies } from "../api/fetchMovies";
import { setMovies, setError } from "../actions";

const getPage = (state) => state.moviesReducer.page;
const getInputValue = (state) => state.moviesReducer.inputValue;

function* handleMoviesLoad() {
  try {
    const page = yield select(getPage);
    const inputValue = yield select(getInputValue);
    const movies = yield call(fetchMovies, inputValue, page);
    yield put(setMovies(movies));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* watchMoviesLoad() {
  yield takeEvery(MOVIES.LOAD, handleMoviesLoad);
}
