import {
  REQUEST_HELLO,
  POPULATE_HELLO,
  RECEIVED_HELLO,
  FLIP_LOADER
} from '../actions/index';

const INITIAL_STATE = {
  hello: {
    greeting: '',
    text: '',
  },
  isLoading: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_HELLO:
      const newReq = { ...state, isLoading: true }
      console.log('request_hello', newReq)
      return newReq

    case POPULATE_HELLO:
      const newState = { ...state, hello: action.payload.fields, isLoading: true }
      console.log('REDUCER: ', newState)
      return newState

    case RECEIVED_HELLO:
      const newRev = { ...state, isLoading: false }
      console.log('recevied_hello', newRev)
      return newRev

    case FLIP_LOADER:
      console.log('flipped', action.payload.isLoading)
      return { ...state, isLoading: action.payload.isLoading }

    default:
      return state;
  }
}
