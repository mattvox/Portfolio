import { createClient } from 'contentful'

import { API_SPACE_ID, API_TOKEN } from '../settings_local'

export const FETCH_PAGE_DATA = 'FETCH_PAGE_DATA'
export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA'
export const RECEIVE_PAGE_DATA = 'RECEIVE_PAGE_DATA'

export const FETCH_HELLO = 'FETCH_HELLO'
export const FETCH_PROJECTS = 'FETCH_PROJECTS'

export const RECEIVED_HELLO = 'RECEIVED_HELLO'
export const REQUEST_HELLO = 'REQUEST_HELLO'
export const POPULATE_HELLO = 'POPULATE_HELLO'

export const FLIP_LOADER = 'FLIP_LOADER'

const client = createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
})

export function fetchPageData(page) {
  const request = client.getEntries({
    content_type: page,
  })
    .then((response) => response)
    .catch(console.error)

    return dispatch => {
      dispatch(requestPageData(page))

      return request
        .then(response => dispatch(receivePageData(response, page)))
    }
}

export function requestPageData(page) {
  return {
    type: REQUEST_PAGE_DATA,
    payload: { isFetching: true, page: page }
  }
}

export function receivePageData(response, page) {
  return {
    type: RECEIVE_PAGE_DATA,
    payload: { isFetching: false, response: response, page: page }
  }
}

export function fetchHello() {
  const request = client.getEntry('2MZa2O4GRqQwey4amcU2UI')
  .then((response) => response)
  .catch(console.error)

  return dispatch => {
    dispatch(requestHello())
    return request
      .then(response => dispatch(populateHello(response)))
      .then(() => dispatch(receivedHello()))
  }
}

export function requestHello() {
  return {
    type: REQUEST_HELLO,
    payload: { isloading: true }
  }
}

export function populateHello(data) {
  return {
    type: POPULATE_HELLO,
    payload: data
  }
}

export function receivedHello() {
  return {
    type: RECEIVED_HELLO,
    payload: { isLoading: false }
  }
}

export function flipLoader(loading) {
  return {
    type: FLIP_LOADER,
    payload: { isLoading: !loading }
  }
}



export function fetchProjects() {
  const request = client.getEntries({
    'content_type': 'project'
  })
  .then((response) => response)
  .catch(console.error)

  return {
    type: FETCH_PROJECTS,
    payload: request,
  }
}



// CONTENTFUL API WITH AXIOS INSTEAD OF CONTENTFUL

// export function fetchProjects() {
//   const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=project`);
//
//   return {
//     type: FETCH_PROJECTS,
//     payload: request,
//   }
// }
