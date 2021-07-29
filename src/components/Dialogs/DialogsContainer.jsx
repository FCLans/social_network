import React from 'react'
import {editeNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let dialogsPage = props.store.getState().dialogsPage

  const editNewTextMessage = (text) => {
    props.store.dispatch(editeNewMessageTextActionCreator(text))
  }

  const sendNewMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  return <Dialogs sendNewMessage={sendNewMessage}
                  editeNewTextMessage={editNewTextMessage}
                  dialogsPage={dialogsPage}/>
}

export default DialogsContainer
