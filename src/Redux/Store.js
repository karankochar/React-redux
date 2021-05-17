import { createStore } from 'redux';
import MobileReducer from "./Mobile/MobileReducer";
//Define redux store
//const createStore = redux.createStore
const store = createStore(MobileReducer);

export default store;