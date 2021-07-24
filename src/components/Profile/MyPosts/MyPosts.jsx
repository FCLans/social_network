import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  let postsData = [
    {id: 1, message: "Привет, мой первый пост!", likesCount: 120},
    {id: 2, message: "Разгоняемся и летим)))", likesCount: 20},
  ]

  return (
    <div>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>Add post</button>
      </div>

      <div className={styles.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts
