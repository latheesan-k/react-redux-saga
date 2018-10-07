import { put, takeLatest } from "redux-saga/effects";

import { HELLO_WORLD_REQUEST, helloWorldResponse, helloWorldError } from "./actions";

function* runHelloWorldRequest(action) {
  try {
    // TODO: real api call here
    yield put(helloWorldResponse("Hello from react-redux-saga :)"));
  } catch (e) {
    yield put(helloWorldError(e));
  }
}

export default function* mySaga() {
  yield takeLatest(HELLO_WORLD_REQUEST, runHelloWorldRequest);
}
