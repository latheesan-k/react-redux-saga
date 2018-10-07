import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers.js";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO: Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const storeEnhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default createStore(reducer, storeEnhancer);

sagaMiddleware.run(mySaga);
