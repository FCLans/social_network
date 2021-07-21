import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div className={styles.posts}>
        <Post message="1" likeCount="81" />
        <Post message="2" likeCount="100" />
      </div>
    </div>
  )
}

export default MyPosts
