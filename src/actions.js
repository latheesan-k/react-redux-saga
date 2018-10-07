export const HELLO_WORLD_REQUEST = "HELLO_WORLD_REQUEST";
export const HELLO_WORLD_RESPONSE = "HELLO_WORLD_RESPONSE";
export const HELLO_WORLD_ERROR = "HELLO_WORLD_ERROR";

export const helloWorldRequest = () => ({ type: HELLO_WORLD_REQUEST });
export const helloWorldResponse = text => ({ type: HELLO_WORLD_RESPONSE, text });
export const helloWorldError = error => ({ type: HELLO_WORLD_ERROR, error });
