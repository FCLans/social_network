import MyPosts from './MyPosts/MyPosts'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://school48tmn.ru/wp-content/uploads/sochinenie-rassuzhdenie-priroda-rodnogo-kraya-9-klass.jpg" />
      </div>
      <div>
        <img src="https://img-tv.vl.ru/fhd/53a986214c80255fcc91a319615cb29419012c.jpg" />
        ava + description
      </div>

      <MyPosts />
    </div>
  )
}

export default Profile
