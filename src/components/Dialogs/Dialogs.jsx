import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <div className={styles.dialog}>
          <NavLink activeClassName={styles.active} to="/messages/1">
            Иван
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink activeClassName={styles.active} to="/messages/2">
            Андрей
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink activeClassName={styles.active} to="/messages/3">
            Павел
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink activeClassName={styles.active} to="/messages/4">
            Олег
          </NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Привет!</div>
        <div className={styles.message}>Я не знаю кто это был</div>
        <div className={styles.message}>Ну ладно =Р</div>
      </div>
    </div>
  )
}

export default Dialogs
