import { createClient } from 'contentful'
import { snapshot } from 'react-snapshot'

// action types
export const FETCH_PAGE_DATA = 'FETCH_PAGE_DATA'
export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA'
export const RECEIVE_PAGE_DATA = 'RECEIVE_PAGE_DATA'

// creates client for Contentful API
const API_SPACE_ID = process.env.REACT_APP_CONTENTFUL_API_SPACE_ID
const API_TOKEN = process.env.REACT_APP_CONTENTFUL_API_TOKEN

const client = createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
})

// fetches data from Contenful API based on page variable
// and call additional dispatches to track the request
export function fetchPageData(page) {
  const request = snapshot(() => {
    return client.getEntries({
      content_type: page,
      include: 2,
    })
    .then((response) => response)
    .catch(console.error)
  })


    return dispatch => {
      dispatch(requestPageData(page))

      return request
        .then(response => dispatch(receivePageData(response, page)))
    }
}

// action dispatched by fetchPageData
// after request is made to Contentful API
export function requestPageData(page) {
  return {
    type: REQUEST_PAGE_DATA,
    payload: {
      isFetching: true,
      page
    }
  }
}

// action dispatched by fetchPageData
// after request is resolved with the response
// from the API being passed along to the page reducer
export function receivePageData(response, page) {
  return {
    type: RECEIVE_PAGE_DATA,
    payload: {
      isFetching: false,
      response: response,
      page: page
    }
  }
}
