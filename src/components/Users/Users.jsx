import React from 'react'
import User from './User/User';
import styles from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1374').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return (
      <div className={styles.usersBlock}>
        {this.props.users.map(u => <User unfollow={this.props.unfollow}
                                         follow={this.props.follow}
                                         key={u.id}
                                         user={u}/>)}
      </div>
    );
  }
}

export default Users