import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialog = (props) => {
  let name = props.name
  let path = '/messages/' + props.id

  return (
    <div className={styles.dialog}>
      <NavLink activeClassName={styles.active} to={path}>
        {name}
      </NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={styles.message}>{props.text}</div>
}

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <Dialog name="Иван" id="1" />
        <Dialog name="Петро" id="2" />
        <Dialog name="Андрей" id="3" />
        <Dialog name="Юлия" id="4" />
        <Dialog name="Капуста" id="5" />
      </div>
      <div className={styles.messages}>
        <Message text="привет!" />
        <Message text="Ты тут?" />
        <Message text="Возможно, что да" />
        <Message text="А как?" />
        <Message text="Ну вот)))" />
      </div>
    </div>
  )
}

export default Dialogs
