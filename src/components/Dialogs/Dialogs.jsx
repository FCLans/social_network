import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import {editeNewMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} />)
  let messagesElements = props.dialogsPage.messagesData.map(m => <Message key={m.id} text={m.text} />)

  const editeNewMessageText = (e) => {
    let text = e.target.value
    props.dispatch(editeNewMessageTextActionCreator(text))
  }

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{ dialogsElements }</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <br/>
        <div>
          <div><textarea onChange={ editeNewMessageText } value={props.dialogsPage.newMessageText}/></div>
          <div><button onClick={ sendMessage }>Send message</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
