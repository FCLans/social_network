import React from 'react'
import {connect} from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from '../../redux/usersReducer';
import Users from "./Users";
import Loader from "../common/Loader/Loader";
import {toggleIsLoadPageAC} from "../../redux/loaderReducer";
import {UsersApi} from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoadPage(true)

    UsersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.items)
        this.props.setTotalUsersCount(response.totalCount)
        this.props.toggleIsLoadPage(false)
      })
  }

  onClickPage = (numberPage) => {
    this.props.setCurrentPage(numberPage)
    this.props.toggleIsLoadPage(true)

    UsersApi.getUsers(numberPage, this.props.pageSize)
      .then(response => {
        this.props.setUsers(response.items)
        this.props.toggleIsLoadPage(false)
      })
  }

  render() {
    return (
      <div>
        {this.props.isLoadPage ? <Loader/> : null}
        <Users currentPage={this.props.currentPage}
               onClickPage={this.onClickPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
        />

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoadPage: state.loader.isLoadPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (numberPage) => {
      dispatch(setCurrentPageAC(numberPage))
    },
    setTotalUsersCount: (usersCount) => {
      dispatch(setTotalUsersCountAC(usersCount))
    },
    toggleIsLoadPage: (isLoadPage) => {
      dispatch(toggleIsLoadPageAC(isLoadPage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)