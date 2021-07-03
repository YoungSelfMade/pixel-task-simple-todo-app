import { combineReducers } from 'redux';

import { globalStorage } from './global.reducer';;

const rootReducer = combineReducers({
    globalStorage,
});

export default rootReducer;