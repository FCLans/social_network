import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import {newMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';


const Dialogs = props => {
  let dialogsElements = props.data.dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} />)
  let messagesElements = props.data.messagesData.map(m => <Message key={m.id} text={m.text} />)

  const sendMessage = () => {
    if (props.data.newMessageText) {
      props.dispatch(sendMessageActionCreator())
    }
  }

  const onChangeText = (e) => {
    props.dispatch(newMessageTextActionCreator(e.target.value))
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messagesElements}
        <br/>
        <div><textarea onChange={onChangeText} value={props.data.newMessageText}/></div>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs
