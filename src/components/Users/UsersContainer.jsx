import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {followTC, getUsersTC, unfollowTC} from '../../redux/usersReducer';
import Users from './Users';
import Loader from '../common/Loader/Loader';
import {compose} from "redux";
import {withRedirectComponent} from "../hoc/withRedirect";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  const onClickPage = (numberPage) => {
    props.getUsers(numberPage, props.pageSize)
  }

  return (
    <div>
      {props.isLoadPage ? <Loader/> : null}
      <Users currentPage={props.currentPage}
             onClickPage={onClickPage}
             users={props.users}
             follow={props.follow}
             unfollow={props.unfollow}
             followedInProgress={props.followedInProgress}
             getUserStatus={props.getUserStatus}
      />

    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoadPage: state.loader.isLoadPage,
    followedInProgress: state.usersPage.followedInProgress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followTC(userId)),
    unfollow: (userId) => dispatch(unfollowTC(userId)),
    getUsers: (currentPage, pageSize) => dispatch(getUsersTC(currentPage, pageSize)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectComponent
)(UsersContainer)