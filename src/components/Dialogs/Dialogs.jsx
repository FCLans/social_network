import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = props => {
  let dialogsElements = props.data.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} />)
  let messagesElements = props.data.messagesData.map(m => <Message key={m.id} text={m.text} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
