import { REQUEST_PAGE_DATA, RECEIVE_PAGE_DATA } from '../actions/index'

// creates initial state based on a page array,
// to dry up the code a bit since each section
// was very similar. Landing page content is
// provided in the initial state to reduce
// perceived load time.
function createInitialState() {
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
      isFetched: true,
    },
  }

  pages.forEach(page => {
    state[page] = {
      data: {},
      isFetching: false,
      isFetched: false,
    }
  })

  return state
}

function requestPageData(state, action) {
  const { page, isFetching } = action.payload
  let { data } = state[page]

  return {
    ...state,
    [page]: { data, isFetching, isFetched: false },
   }
}

function receivePageData(state, action) {
  const { page, isFetching } = action.payload
  const { fields: data } = action.payload.response.items[0]

  return {
    ...state,
    [page]: { data, isFetching, isFetched: true }
  }
}

export default function (state = createInitialState(), action) {
  switch (action.type) {
    case REQUEST_PAGE_DATA: return requestPageData(state, action)
    case RECEIVE_PAGE_DATA: return receivePageData(state, action)
    default: return state;
  }
}
