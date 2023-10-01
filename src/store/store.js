import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import favoriteReducer from './reducers/favoriteReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {setLocalStorage} from '../utils/localStorage';

const reducers = combineReducers({
    favoriteReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store;