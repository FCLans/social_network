import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = props => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer {...props} />
    </div>
  )
}

export default Profile
