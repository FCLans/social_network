import React from 'react'
import User from './User/User';
import styles from './Users.module.css'
import * as axios from 'axios'

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  return (
    <div className={styles.usersBlock}>
      {props.users.map(u => <User unfollow={props.unfollow} follow={props.follow} key={u.id} user={u}/>)}
    </div>
  )
}

export default Users