import {ProfileApi} from '../api/api';

const ADD_POST = 'PROFILE/ADD_POST'
const EDIT_NEW_POST_TEXT = 'PROFILE/EDIT_NEW_POST_TEXT'
const SET_PROFILE_INFO = 'PROFILE/SET_PROFILE_INFO'

const initialState = {
  profileInfo: null,
  postsData: [
    {id: 1, message: 'Привет, мой первый пост!', likesCount: 120},
    {id: 2, message: 'Разгоняемся и летим)))', likesCount: 20},
  ],
  newPostText: '',
}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.postsData[state.postsData.length - 1].id + 1,
        message: state.newPostText,
        likesCount: 0,
      }

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      }

    case EDIT_NEW_POST_TEXT:
      return {
        ...state, newPostText: action.data
      }

    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.data
      }

    default:
      return state
  }
}

//Action Creators
export const addPostActionCreator = () => ({type: ADD_POST})
export const editNewPostTextActionCreator = (text) => ({type: EDIT_NEW_POST_TEXT, data: text})
export const setProfileInfoAC = (profile) => ({type: SET_PROFILE_INFO, data: profile})

//Thunk Creators
export const getProfileInfoTC = (userId) => {
  return (dispatch) => {
    ProfileApi.getProfileInfo(userId)
      .then(resp => {
        dispatch(setProfileInfoAC(resp))
      })
  }
}

//other
export default profileReducer