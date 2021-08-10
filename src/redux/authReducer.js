import {AuthApi} from '../api/api';
import {toggleIsLoadPageAC} from "./loaderReducer";

const SET_AUTH_DATA = 'AUTH/SET_AUTH_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

//Action Creators
export const setAuthDataAC = (data) => {
  return {
    type: SET_AUTH_DATA,
    data: data
  }
}

//Thunk Creators
export const setAuthDataTC = () => {
  return (dispatch) => {
    AuthApi.me().then(response => {
      if(response.resultCode === 0 ) {
        const authData = response.data
        dispatch(setAuthDataAC(authData))
      }
    })
  }
}

export default authReducer