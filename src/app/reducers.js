import { combineReducers } from 'redux';
import * as productReducer from '../product/reducers';

export default combineReducers(Object.assign(
  productReducer,
));
