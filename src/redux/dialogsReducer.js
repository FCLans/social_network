const SEND_MESSAGE = 'SEND_MESSAGE'
const EDITE_NEW_MESSAGE_TEXT = 'EDITE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      let indexLastElement = state.messagesData.length - 1
      let newIdElement = state.messagesData[indexLastElement].id + 1
      let textMessage = state.newMessageText

      let newMessage = {
        id: newIdElement,
        text: textMessage
      }

      state.messagesData.push(newMessage)
      state.newMessageText = ''

      return state

    case EDITE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.data
      return state

    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const editeNewMessageTextActionCreator = (text) => ({type: EDITE_NEW_MESSAGE_TEXT, data: text})

export default dialogsReducer;