import React from 'react'
import styles from '../Users.module.css'
import userPhoto from '../../../assets/img/user.jpg'
import {NavLink} from "react-router-dom"
import {FollowedApi} from "../../../api/api"

const User = (props) => {

  const onClickFollow = async () => {
    props.toggleFollowedInProgress(props.user.id, true)

    await FollowedApi.follow(props.user.id)
      .then(result => {
        if (result.resultCode === 0) {
          props.follow(props.user.id)
        }
      })

    props.toggleFollowedInProgress(props.user.id, false)
  }

  const onClickUnfollow = async () => {
    props.toggleFollowedInProgress(props.user.id, true)

    await FollowedApi.unfollow(props.user.id)
      .then(result => {
        if (result.resultCode === 0) {
          props.unfollow(props.user.id)
        }
      })

    props.toggleFollowedInProgress(props.user.id, false)
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