import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {authReducer, movieReviewReducer} from './reducers/mainReducers';
import thunk from 'redux-thunk';
const initialState = {};

const rootReducer = combineReducers({
  main: movieReviewReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

export default configureStore;
