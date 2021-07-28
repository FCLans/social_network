import styles from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = props => {
  let postsElements = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  const changeNewPostText = e => {
    props.dispatch({type: 'EDITE_NEW_POST_TEXT', data: e.target.value})
  }

  const addNewPost = () => {
    if (props.profilePage.newPostText) {
      props.dispatch({type: 'ADD_POST'})
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
