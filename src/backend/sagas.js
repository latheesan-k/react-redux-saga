import { all, takeLatest } from "redux-saga/effects";

import * as helloWorldTypes from "../containers/HelloWorld/constants";
import * as helloWorldSagas from "../containers/HelloWorld/sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(helloWorldTypes.HELLO_WORLD_REQUEST, helloWorldSagas.runHelloWorldRequest)
  ]);
}
