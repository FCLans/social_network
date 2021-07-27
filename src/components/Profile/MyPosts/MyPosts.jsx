import styles from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";


const MyPosts = props => {
  let postsElements = props.data.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
  let textPost = React.createRef()

  const addPost = () => {
    if (textPost.current.value) {
      alert(textPost.current.value)
      textPost.current.value = ''
    }
  }

  return (
    <div>
      <div>
        <textarea ref={textPost}/>
      </div>

      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
