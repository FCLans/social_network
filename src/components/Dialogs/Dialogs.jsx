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
  let dialogsData = [
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Петро' },
    { id: 3, name: 'Андрей' },
    { id: 4, name: 'Юлия' },
    { id: 5, name: 'Капуста' },
  ]

  let messagesData = [
    { id: 1, text: 'привет' },
    { id: 2, text: 'Ты тут?' },
    { id: 3, text: 'Возможно, что да' },
    { id: 4, text: 'А как?' },
    { id: 5, text: 'Ну вот)))' },
  ]

  let dialogsElements = dialogsData.map((d) => <Dialog key={d.id} name={d.name} id={d.id} />)
  let messagesElements = messagesData.map((m) => <Message key={m.id} text={m.text} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
