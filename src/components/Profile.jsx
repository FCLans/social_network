import './Profile.css'

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://school48tmn.ru/wp-content/uploads/sochinenie-rassuzhdenie-priroda-rodnogo-kraya-9-klass.jpg" />
      </div>
      <div>
        <img src="https://img-tv.vl.ru/fhd/53a986214c80255fcc91a319615cb29419012c.jpg" />
        ava + description
      </div>
      <div>
        My Posts
        <div>New post</div>
        <div className="posts">
          <div className="item">Post 1</div>
          <div className="item">Post 2</div>
          <div className="item">Post 3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
