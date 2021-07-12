import { combineReducers } from 'redux';
import salesReducers from './salesReducers';
export default combineReducers({
	salesData: salesReducers,
});
