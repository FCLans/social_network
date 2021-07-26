import {NavLink} from 'react-router-dom'
import styles from './LinkItem.module.css'

const LinkItem = (props) => {
  return (
    <div className={styles.item}>
      <NavLink activeClassName={styles.active} to={props.path}>
        {props.name}
      </NavLink>
    </div>
  )
}

export default LinkItem
