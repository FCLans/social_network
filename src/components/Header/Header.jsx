import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png"
            alt="logo"/>
          <div className={styles.logo_text}>
            <span>СОЦИАЛЬНАЯ СЕТЬ</span>
          </div>
        </div>

        <div className={styles.isLogin}>
          {props.isAuth ? props.login : <NavLink to="/login">LOGIN</NavLink>}
        </div>
      </div>

  )
}

export default Header
