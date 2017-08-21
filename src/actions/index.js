import { createClient } from 'contentful';

import { API_SPACE_ID, API_TOKEN } from '../settings_local';

export const FETCH_HELLO = 'FETCH_HELLO';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const client = createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
})

export function fetchHello() {
  return {
    type: FETCH_HELLO,
    payload: '',
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
