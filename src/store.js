import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {getDataReducer} from './reducers/mainReducers';
import thunk from 'redux-thunk';
const initialState = {};

const rootReducer = combineReducers({
  main: getDataReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

export default configureStore;
