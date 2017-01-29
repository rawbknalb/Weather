import { FETCH_WEATHER } from "../actions/index";

const InitialState = [];
export const weather = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ ...state, action.payload.data ];
    default:
      return state;
  }
};
