import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
  return (
    <div>
      <ProfileInfo profile={props.profile} {...props}/>
      <MyPosts {...props} />
    </div>
  )
}

export default Profile
