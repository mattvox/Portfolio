import { FETCH_BACKGROUND } from '../actions/index';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BACKGROUND:
      return { ...state, imageURL: action.payload.fields.file.url }

    default:
      return state;
  }
}
