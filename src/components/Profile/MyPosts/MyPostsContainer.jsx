import React from 'react'
import {addPostActionCreator, editeNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from "../../../redux/storeContext";

const MyPostsContainer = (props) => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let profilePage = store.getState().profilePage

          const editNewPostText = (text) => {
            store.dispatch(editeNewPostTextActionCreator(text))
          }

          const addPost = () => {
            store.dispatch(addPostActionCreator())
          }

          return (
            <MyPosts editeNewPostText={editNewPostText} addPost={addPost} profilePage={profilePage}/>
          )
        }
      }
    </StoreContext.Consumer>

  )

}

export default MyPostsContainer
