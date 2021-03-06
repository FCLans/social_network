import React from 'react'
import styles from '../Users.module.css'
import userPhoto from '../../../assets/img/user.jpg'
import {NavLink} from "react-router-dom"

const User = (props) => {

  const onClickFollow = () => {
    props.follow(props.user.id)
  }

  const onClickUnfollow = () => {
    props.unfollow(props.user.id)
  }

  return (
    <div className={styles.userBlock}>
      <div className={styles.leftBlock}>
        <div className={styles.avatar}>
          <NavLink to={`/profile/${props.user.id}`}>
            <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto} alt="avatar"/>
          </NavLink>
        </div>
        <div className={styles.following}>
          {
            props.user.followed ? <button disabled={props.followedInProgress.some(userId => userId === props.user.id)} onClick={onClickUnfollow}>Отписаться</button> :
              <button disabled={props.followedInProgress.some(userId => userId === props.user.id)} onClick={onClickFollow}>Подписаться</button>
          }
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{props.user.name}</div>
          <div className={styles.userStatus}>{props.user.status}</div>
        </div>
        <div className={styles.locationBlock}>
          <div>{"props.user.location.city"}</div>
          <div>{"props.user.location.country"}</div>
        </div>
      </div>
    </div>
  )
}

export default User