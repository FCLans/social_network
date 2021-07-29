const SEND_MESSAGE = 'SEND_MESSAGE'
const EDIT_NEW_MESSAGE_TEXT = 'EDIT_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.dialogsPage.messagesData[state.dialogsPage.messagesData.length - 1].id + 1,
        text: state.dialogsPage.newMessageText,
      }

      state.dialogsPage.messagesData.push(newMessage)
      state.dialogsPage.newMessageText = ''

      return state

    case EDIT_NEW_MESSAGE_TEXT:
      state.dialogsPage.newMessageText = action.data
      return state

    default:
      return state
  }
}

export const newMessageTextActionCreator = (text) => {
  return {
    type: EDIT_NEW_MESSAGE_TEXT,
    data: text
  }
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer