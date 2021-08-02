import styles from './ProfileInfo.module.css'
import Loader from "../../common/Loader/Loader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <div>
      <div>
        <img src="https://school48tmn.ru/wp-content/uploads/sochinenie-rassuzhdenie-priroda-rodnogo-kraya-9-klass.jpg"
             alt="img"/>
      </div>
      <div className={styles.descriptions}>
        <div><h3>{props.profile.fullName}</h3></div>
        <div><img src={props.profile.photos.large} alt="avatar"/></div>
        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  )
}

export default ProfileInfo
