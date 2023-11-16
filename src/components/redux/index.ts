import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './reducer/pagesReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;