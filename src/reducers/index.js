import { combineReducers } from 'redux';

import HelloReducer from './reducer-hello';
import ProjectsReducer from './reducer-projects';

const rootReducer = combineReducers({
  hello: HelloReducer,
  projects: ProjectsReducer,
})

export default rootReducer;
