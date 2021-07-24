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
    {id: 1, name: 'Иван'},
    {id: 2, name: 'Петро'},
    {id: 3, name: 'Андрей'},
    {id: 4, name: 'Юлия'},
    {id: 5, name: 'Капуста'}
  ]

  let messagesData = [
    {id: 1, text: 'привет'},
    {id: 2, text: 'Ты тут?'},
    {id: 3, text: 'Возможно, что да'},
    {id: 4, text: 'А как?'},
    {id: 5, text: 'Ну вот)))'},
  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={styles.messages}>
        <Message text={messagesData[0].text} />
        <Message text={messagesData[1].text} />
        <Message text={messagesData[2].text} />
      </div>
    </div>
  )
}

export default Dialogs
