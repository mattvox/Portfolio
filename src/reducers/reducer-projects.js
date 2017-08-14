import { FETCH_PROJECTS } from '../actions/index';

const INITIAL_STATE = { projects: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };

    default:
      return state;
  }
}
