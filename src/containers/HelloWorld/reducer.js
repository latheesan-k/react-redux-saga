import { HELLO_WORLD_RESPONSE } from "./constants";

const initialState = {
  responseText: null
};

export default (state = initialState, { type, text }) => {
  switch (type) {
    case HELLO_WORLD_RESPONSE:
      return { ...state, responseText: text };

    default:
      return state;
  }
};
