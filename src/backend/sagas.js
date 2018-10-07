import { all, takeLatest } from "redux-saga/effects";

import * as helloWorldActions from "../HelloWorld/HelloWorld.actions";
import * as helloWorldSagas from "../HelloWorld/HelloWorld.sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(helloWorldActions.HELLO_WORLD_REQUEST, helloWorldSagas.runHelloWorldRequest)
  ]);
}
