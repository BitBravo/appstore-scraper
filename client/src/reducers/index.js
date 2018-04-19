import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {scrapReducer} from './scrapReducer';

export default combineReducers({
  scrapState:scrapReducer,
  routing

})
