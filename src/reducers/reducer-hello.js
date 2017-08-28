import { FETCH_HELLO } from '../actions/index';

const INITIAL_STATE = {
  hello: {
    greeting: 'Hello,',
    text: 'my name is Matt, a full stack developer living in the Philadelphia area.',
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HELLO:
      return { ...state, hello: action.payload.fields };

    default:
      return state;
  }
}
