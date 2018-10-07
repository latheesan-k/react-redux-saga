import { all, takeLatest } from "redux-saga/effects";

import * as helloWorldActions from "../containers/HelloWorld/actions";
import * as helloWorldSagas from "../containers/HelloWorld/sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(helloWorldActions.HELLO_WORLD_REQUEST, helloWorldSagas.runHelloWorldRequest)
  ]);
}
