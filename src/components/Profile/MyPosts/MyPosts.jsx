import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Привет, мой первый пост!', likesCount: 120 },
    { id: 2, message: 'Разгоняемся и летим)))', likesCount: 20 },
  ]

  let postsElements = postsData.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

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
