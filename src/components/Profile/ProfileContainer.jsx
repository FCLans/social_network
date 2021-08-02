import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, editeNewPostTextActionCreator, setProfileInfoAC} from "../../redux/profileReducer";
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/12')
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
