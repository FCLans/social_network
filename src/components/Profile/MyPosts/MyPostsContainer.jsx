import React from 'react'
import {addPostActionCreator, editeNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let profilePage = props.store.getState().profilePage

  const editNewPostText = (text) => {
    props.store.dispatch(editeNewPostTextActionCreator(text))
  }

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  return <MyPosts editeNewPostText={editNewPostText} addPost={addPost} profilePage={profilePage}/>
}

export default MyPostsContainer
