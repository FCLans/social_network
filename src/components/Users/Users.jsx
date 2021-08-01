import React from 'react'
import User from './User/User';
import styles from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onClickPage = (numberPage) => {
    this.props.setCurrentPage(numberPage)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pages = []
    // const countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    for (let i = 1; i <= 10; i++) {
      pages.push(i)
    }

    return (
      <div className={styles.usersBlock}>
        <div>
          {pages.map(p => {
            return (
              <span key={p} className={this.props.currentPage === p ? styles.selectedPage : null}
                    onClick={() => {
                      this.onClickPage(p)
                    }}>
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map(u => <User unfollow={this.props.unfollow}
                                         follow={this.props.follow}
                                         key={u.id}
                                         user={u}/>)}
      </div>
    );
  }
}

export default Users