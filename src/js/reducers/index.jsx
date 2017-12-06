import {combineReducers} from 'redux';
import apps from './appsReducer.jsx';

const rootReducer = combineReducers({
    apps
});

export default rootReducer;
