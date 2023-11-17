import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './combine';

const store = createStore(rootReducer, composeWithDevTools());

export default store;