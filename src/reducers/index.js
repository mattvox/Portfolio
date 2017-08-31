import { combineReducers } from 'redux';

import ProjectsReducer from './reducer-projects';
import PageReducer from './reducer-page'

const rootReducer = combineReducers({
  projectsPage: ProjectsReducer,
  pageData: PageReducer,
})

export default rootReducer;
