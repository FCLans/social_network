import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

  return (
    <div>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>Add post</button>
      </div>

      <div className={styles.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
