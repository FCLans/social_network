import React from 'react'
import {editeNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from "../../redux/storeContext";

const DialogsContainer = props => {
  return (
    <StoreContext.Consumer>

      {
        (store) => {
          let dialogsPage = store.getState().dialogsPage
          const editNewTextMessage = (text) => {
            store.dispatch(editeNewMessageTextActionCreator(text))
          }
          const sendNewMessage = () => {
            store.dispatch(sendMessageActionCreator())
          }

          return (
            <Dialogs sendNewMessage={sendNewMessage}
                     editeNewTextMessage={editNewTextMessage}
                     dialogsPage={dialogsPage}/>
          )
        }

      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
