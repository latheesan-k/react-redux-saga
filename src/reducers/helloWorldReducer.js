import { HELLO_WORLD_RESPONSE } from "../actions";

export default (state = "", { type, text }) => {
  switch (type) {
    case HELLO_WORLD_RESPONSE:
      return text;

    default:
      return state;
  }
};
