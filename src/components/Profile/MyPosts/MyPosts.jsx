import styles from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import {addPostActionCreator, editeNewPostTextActionCreator} from "../../../redux/store";

const MyPosts = props => {
  let postsElements = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  const changeNewPostText = e => {
    props.dispatch(editeNewPostTextActionCreator(e.target.value))
  }

  const addNewPost = () => {
    if (props.profilePage.newPostText) {
      props.dispatch(addPostActionCreator())
    }
  }

  return (
    <div>
      <div>
        <textarea onChange={changeNewPostText} value={props.profilePage.newPostText} />
      </div>

      <div>
        <button onClick={addNewPost}>Add post</button>
      </div>

      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
