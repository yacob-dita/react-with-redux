import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_HELLO_WORLD, receiveHelloWorld } from "./actions";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
  try {
    // do api call
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(receiveHelloWorld("Hello 344 redux saga!"));
  } catch (e) {
    yield put(receiveHelloWorld(""));
  }
}


export default function* mySaga() {
  yield takeLatest(REQUEST_HELLO_WORLD, helloWorld);
}