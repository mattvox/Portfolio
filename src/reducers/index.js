import { combineReducers } from 'redux';

import HelloReducer from './reducer-hello';
import ProjectsReducer from './reducer-projects';

const rootReducer = combineReducers({
  homePage: HelloReducer,
  projectsPage: ProjectsReducer,
})

export default rootReducer;
