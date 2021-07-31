import {editeNewMessageTextActionCreator, sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editeNewTextMessage: (text) => {
      dispatch(editeNewMessageTextActionCreator(text))
    },
    sendNewMessage: () => {
      dispatch(sendMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
