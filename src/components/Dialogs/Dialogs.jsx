import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import {NewMessageFormRedux} from "./NewMessageForm/NewMessageForm";

const Dialogs = props => {
  let dialogsElements = props.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
  let messagesElements = props.messagesData.map(m => <Message key={m.id} text={m.text}/>)

  const sendMessage = (formData) => {
    props.sendNewMessage(formData.newMessageText)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <br/>
        <NewMessageFormRedux onSubmit={sendMessage}/>
      </div>
    </div>
  )
}

export default Dialogs
