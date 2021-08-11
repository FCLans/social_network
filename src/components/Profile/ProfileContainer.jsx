import React from "react";
import {connect} from "react-redux";
import {
  addPostActionCreator,
  editNewPostTextActionCreator,
  getProfileInfoTC
} from '../../redux/profileReducer';
import Profile from "./Profile";
import {withRouter} from 'react-router';
import {withRedirectComponent} from "../hoc/withRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  async componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 10
    }

    await this.props.getProfileInfo(userId)
  }

  render() {
    return <Profile {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profileInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editNewPostText: (text) => {
      dispatch(editNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    getProfileInfo: (userId) => dispatch(getProfileInfoTC(userId))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withRedirectComponent
)(ProfileContainer)
