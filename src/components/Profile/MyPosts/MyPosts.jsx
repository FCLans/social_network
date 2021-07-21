import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div className={styles.posts}>
        <Post message="1" />
        <Post message="2" />
        <Post message="3" />
        <Post message="4" />
      </div>
    </div>
  )
}

export default MyPosts
