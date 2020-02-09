import { combineReducers } from 'redux';
import reducer from './reducer';

export const AllReducers = combineReducers({
	userReducer: reducer
});

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		state = undefined;
	}
	return AllReducers(state, action);
};
export default rootReducer;
