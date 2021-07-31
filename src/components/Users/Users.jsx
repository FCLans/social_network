import React from 'react'
import User from './User/User';
import styles from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    const users = [
      {
        id: 1,
        followed: true,
        userPhotoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Emperor_penguin.jpg/273px-Emperor_penguin.jpg',
        fullName: 'Иван',
        status: 'Если тебе плюют в спину, значит ты впереди.',
        location: {city: 'Москва', country: 'Россия'}
      },
      {
        id: 2,
        fallowed: false,
        userPhotoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Emperor_penguin.jpg/273px-Emperor_penguin.jpg',
        fullName: 'Вовка',
        status: 'У всякого безумия есть своя логика.',
        location: {city: 'Екатеринбург', country: 'Россия'}
      },
      {
        id: 3,
        fallowed: false,
        userPhotoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Emperor_penguin.jpg/273px-Emperor_penguin.jpg',
        fullName: 'Андрей',
        status: 'Чтобы выигрывать, прежде всего нужно играть.',
        location: {city: 'Киев', country: 'Украина'}
      },
    ]

    props.setUsers(users)
  }

  return (
    <div className={styles.usersBlock}>
      {props.users.map(u => <User unfollow={props.unfollow} follow={props.follow} key={u.id} user={u}/>)}
    </div>
  )
}

export default Users