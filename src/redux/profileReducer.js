const ADD_POST = 'ADD_POST'
const EDIT_NEW_POST_TEXT = 'EDIT_NEW_POST_TEXT'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.profilePage.postsData[state.profilePage.postsData.length - 1].id + 1,
        message: state.profilePage.newPostText,
        likesCount: 0,
      }

      state.profilePage.postsData.push(newPost)
      state.profilePage.newPostText = ''

      return state

    case EDIT_NEW_POST_TEXT:
      state.profilePage.newPostText = action.data
      return state

    default:
      return state
  }
}

export const NewPostTextActionCreator = (text) => {
  return {
    type: EDIT_NEW_POST_TEXT,
    data: text
  }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export default profileReducer