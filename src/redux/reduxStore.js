import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from './usersReducer';
import loaderReducer from "./loaderReducer";
import authReducer from './authReducer';
import ThunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  loader: loaderReducer,
  auth: authReducer
})

const store = createStore(reducers, applyMiddleware(ThunkMiddleware))

window.store = store

export default store