import { combineReducers, createStore } from 'redux';
import { valueReducer } from '../redusers/valueReducer';
import { userReducer } from '../redusers/userReducer';

const commonReducer = combineReducers({
  value: valueReducer,
  users: userReducer,
});

export const store = createStore(commonReducer);
