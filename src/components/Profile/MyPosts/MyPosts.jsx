import styles from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import {PostTextFormRedux} from "./PostTextForm/PostTextForm";

const MyPosts = props => {
  let postsElements = props.postsData.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  const addNewPost = (formData) => {
    props.addPost(formData.newPostText)
  }

  return (
    <div>
      <PostTextFormRedux onSubmit={addNewPost}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
