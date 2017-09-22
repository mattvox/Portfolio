import { REQUEST_PAGE_DATA, RECEIVE_PAGE_DATA } from '../actions/index'

const createInitialState = () => {
  const pages = ['about', 'contact', 'skills', 'projects']

  const greeting = 'Hi, I\'m Matt.'
  const text = 'I\'m a full stack developer with a passion for creating and a love for learning new things.'

  const state = {
    landing: {
      data: {
        greeting,
        text,
      },
      isFetching: false,
    },
  }

  pages.forEach(page => {
    state[page] = {
      data: {},
      isFetching: true,
      isFetched: false,
    }
  })

  return state
}

export default function (state = createInitialState(), action) {
  switch (action.type) {
    case REQUEST_PAGE_DATA:
      let { page, isFetching } = action.payload
      let { data } = state[page]

      return {
        ...state,
        [page]: { data, isFetching, isFetched: false },
       }

    case RECEIVE_PAGE_DATA:
      page = action.payload.page
      isFetching = action.payload.isFetching

      data = action.payload.response.items[0].fields

      return {
        ...state,
        [page]: { data, isFetching, isFetched: true }
      }

    default:
      return state;
  }
}
