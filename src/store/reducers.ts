import { combineReducers } from 'redux-immutable';

import { reducer as libReducer } from '../libs/store'
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
	login: loginReducer,
	lib: libReducer
});

export default reducer;