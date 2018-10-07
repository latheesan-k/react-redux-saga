import * as types from "./constants";

export const helloWorldRequest = () => ({ type: types.HELLO_WORLD_REQUEST });
export const helloWorldResponse = text => ({ type: types.HELLO_WORLD_RESPONSE, text });
export const helloWorldError = error => ({ type: types.HELLO_WORLD_ERROR, error });
