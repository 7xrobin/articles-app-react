import  {createStore} from 'redux';
import {ListReducer,ArticleReducer} from './reducers';
import {combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const reducers = combineReducers({
    ListReducer,
    ArticleReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore( reducers ,
    composeEnhancers(applyMiddleware(thunk))
    );

