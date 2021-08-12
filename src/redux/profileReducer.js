import {ProfileApi} from '../api/api';

const ADD_POST = 'PROFILE/ADD_POST'
const SET_PROFILE_INFO = 'PROFILE/SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'PROFILE/SET_PROFILE_STATUS'

const initialState = {
  profileInfo: null,
  postsData: [
    {id: 1, message: 'Привет, мой первый пост!', likesCount: 120},
    {id: 2, message: 'Разгоняемся и летим)))', likesCount: 20},
  ],
  status: ''
}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: action.newPostText,
        likesCount: 0,
      }

      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }

    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.data
      }

    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state
  }
}

//Action Creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText: newPostText})
export const setProfileInfoAC = (profile) => ({type: SET_PROFILE_INFO, data: profile})
export const setProfileStatusAC = (status) => ({type: SET_PROFILE_STATUS, status: status})

//Thunk Creators
export const getProfileInfoTC = (userId) => {
  return async (dispatch) => {
    await ProfileApi.getProfileInfo(userId)
      .then(resp => {
        dispatch(setProfileInfoAC(resp))
      })
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    ProfileApi.getStatus(userId)
      .then(resp => {
        dispatch(setProfileStatusAC(resp))
      })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    ProfileApi.updateStatus(status)
      .then(resp => {
        if (resp.resultCode === 0) {
          dispatch(setProfileStatusAC(status))
        }
      })
  }
}

//other
export default profileReducer