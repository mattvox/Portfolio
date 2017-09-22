import { combineReducers } from 'redux';
import PageReducer from './reducer-page'


const rootReducer = combineReducers({
  pageData: PageReducer,
})

export default rootReducer;
