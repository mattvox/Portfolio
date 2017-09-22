import { createClient } from 'contentful'
import { API_SPACE_ID, API_TOKEN } from '../settings_local'


export const FETCH_ASSET = 'FETCH_ASSET'
export const FETCH_PAGE_DATA = 'FETCH_PAGE_DATA'
export const REQUEST_PAGE_DATA = 'REQUEST_PAGE_DATA'
export const RECEIVE_PAGE_DATA = 'RECEIVE_PAGE_DATA'

const client = createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
})

export function fetchAsset() {
  const request = client.getAsset('4XoG6GvOMEKIwG6IaWq8Wy')
    .then((asset) => console.log('ASSET', asset.fields.file.url))
    .catch(console.error)

    return request
}

export function fetchPageData(page) {
  const request = client.getEntries({
    content_type: page,
    include: 2,
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
    payload: {
      isFetching: true,
      page
    }
  }
}

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
