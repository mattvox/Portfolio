import {
  REQUEST_PAGE_DATA,
  RECEIVE_PAGE_DATA,
} from '../actions/index'

const greeting = 'Hi, I\'m Matt.'
const text = 'I\'m a full stack developer with a passion for creating and a love for learning new things.'

const INITIAL_STATE = {
  landing: {
    data: {
      greeting,
      text,
    },
    isFetching: false,
  },
  about: {
    data: {
      heading: '',
      description: '',
    }
  },
  contact: {
    data: {
      heading: '',
      description: '',
    },
  },
  skills: {
    data: {}
  },
  projects: {
    data: {}
  },
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PAGE_DATA:
      let { page, isFetching } = action.payload
      let { data } = state[page]

      return {
        ...state,
        [page]: { data, isFetching },
       }

    case RECEIVE_PAGE_DATA:
      page = action.payload.page
      isFetching = action.payload.isFetching

      data = action.payload.response.items[0].fields
      console.log(action.payload)

      return {
        ...state,
        [page]: { data, isFetching }
      }

    default:
      return state;
  }
}
