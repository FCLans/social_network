import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://school48tmn.ru/wp-content/uploads/sochinenie-rassuzhdenie-priroda-rodnogo-kraya-9-klass.jpg" alt="img" />
      </div>
      <div className={styles.descriptions}>
        <img src="https://img-tv.vl.ru/fhd/53a986214c80255fcc91a319615cb29419012c.jpg" alt="avatar" />
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo
