import {editNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: (newMessageText) => {
      dispatch(sendMessageActionCreator(newMessageText))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
