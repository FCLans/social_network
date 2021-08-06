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
  return state
}

export const setAuthData = (data) => {
  return {
    type: SET_AUTH_DATA,
    data: data
  }
}

export default authReducer