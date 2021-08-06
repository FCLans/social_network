import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, editeNewPostTextActionCreator, setProfileInfoAC} from "../../redux/profileReducer";
import Profile from "./Profile";
import axios from "axios";
import {withRouter} from 'react-router';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 10
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(resp => {
        this.props.setProfileData(resp.data)
      })
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
      dispatch(editeNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    setProfileData: (data) => {
      dispatch(setProfileInfoAC(data))
    }
  }
}
const ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithUrl)
