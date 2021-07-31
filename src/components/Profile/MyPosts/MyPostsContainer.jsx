import {addPostActionCreator, editeNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editeNewPostText: (text) => {
      dispatch(editeNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
