
import { combineReducers } from '@reduxjs/toolkit';

import exampleReducer from './examplereducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  
});

export default rootReducer;
