import React from 'react'
import {connect} from 'react-redux';
import {followTC, getUsersTC, unfollowTC} from '../../redux/usersReducer';
import Users from "./Users";
import Loader from "../common/Loader/Loader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onClickPage = (numberPage) => {
    this.props.getUsers(numberPage, this.props.pageSize)
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
               followedInProgress={this.props.followedInProgress}
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
    isLoadPage: state.loader.isLoadPage,
    followedInProgress: state.usersPage.followedInProgress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followTC(userId)),
    unfollow: (userId) => dispatch(unfollowTC(userId)),
    getUsers: (currentPage, pageSize) => dispatch(getUsersTC(currentPage, pageSize)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)