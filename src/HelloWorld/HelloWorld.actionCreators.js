import * as actions from "./HelloWorld.actions";

export const helloWorldRequest = () => ({ type: actions.HELLO_WORLD_REQUEST });
export const helloWorldResponse = text => ({ type: actions.HELLO_WORLD_RESPONSE, text });
export const helloWorldError = error => ({ type: actions.HELLO_WORLD_ERROR, error });
