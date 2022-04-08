import { INFINITE_MOVIES } from "../constants";
import { takeEvery, select, call, put } from "redux-saga/effects";
import { fetchMovies } from "../api/fetchMovies";
import { setInfiniteMovies, setErrorInfiniteMovies } from "../actions";

const getPage = (state) => state.moviesReducer.page;
const getInputValue = (state) => state.moviesReducer.inputValue;

function* handleMoviesLoad() {
  try {
    const page = yield select(getPage);
    const inputValue = yield select(getInputValue);
    const infiniteMovies = yield call(fetchMovies, inputValue, page);
    yield put(setInfiniteMovies(infiniteMovies));
  } catch (error) {
    yield put(setErrorInfiniteMovies(error));
  }
}

export default function* watchMoviesLoad() {
  yield takeEvery(INFINITE_MOVIES.LOAD, handleMoviesLoad);
}
