import {
  REQUEST_PAGE_DATA,
  RECEIVE_PAGE_DATA,
} from '../actions/index'

const INITIAL_STATE = {
  hello: {
    data: {
      greeting: 'sdfsdf',
      text: 'sdfsdfsdf',
    },
    isFetching: false,
  },
  about: {
    data: {
      title: '',
      description: '',
    }
  },
  skills: {
    data: {}
  },
  project: {
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


      return {
        ...state,
        [page]: { data, isFetching }
      }

    default:
      return state;
  }
}
