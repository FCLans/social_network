import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.item}>
        <NavLink activeClassName={styles.active} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink activeClassName={styles.active} to="/messages">
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink activeClassName={styles.active} to="/news">
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink activeClassName={styles.active} to="/music">
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink activeClassName={styles.active} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
