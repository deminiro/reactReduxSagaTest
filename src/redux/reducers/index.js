import { combineReducers } from 'redux';

import takeData from './changeData';

const allReducers = combineReducers({
  takeData,
});

export default allReducers;
