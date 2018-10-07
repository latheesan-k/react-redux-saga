import { put } from "redux-saga/effects";

import { helloWorldResponse, helloWorldError } from "./actionCreators";

export function* runHelloWorldRequest(action) {
  try {
    // TODO: real api call here
    yield put(helloWorldResponse("Hello from react-redux-saga :)"));
  } catch (e) {
    yield put(helloWorldError(e));
  }
}
