import React from 'react'
import styles from '../Users.module.css'

const User = (props) => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.leftBlock}>
        <div className={styles.avatar}><img src={props.user.userPhotoUrl} alt="avatar"/></div>
        <div className={styles.following}>
          {
            props.user.followed ? <button onClick={() => {props.unfollow(props.user.id)}}>Отписаться</button> :
              <button onClick={() => {props.follow(props.user.id)}}>Подписаться</button>
          }
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{props.user.fullName}</div>
          <div className={styles.userStatus}>{props.user.status}</div>
        </div>
        <div className={styles.locationBlock}>
          <div>{props.user.location.city}</div>
          <div>{props.user.location.country}</div>
        </div>
      </div>
    </div>
  )
}

export default User