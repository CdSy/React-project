import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index.jsx';
import thunk from 'redux-thunk';
import initial from './../reducers/initialState.json';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
}

export const store = configureStore(initial);
