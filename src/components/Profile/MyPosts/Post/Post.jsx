import styles from './Post.module.css'

const Post = () => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt="" />
      <div className={styles.comment}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eveniet voluptatibus. Atque tempora amet rem assumenda molestias praesentium eos molestiae ratione, blanditiis, sint, dicta
        reprehenderit eveniet perferendis repellendus voluptate accusantium!
      </div>
      <button>Like</button>
    </div>
  )
}

export default Post
