const SEND_MESSAGE = 'SEND_MESSAGE'
const EDITE_NEW_MESSAGE_TEXT = 'EDITE_NEW_MESSAGE_TEXT'

const initialState = {
  messagesData: [
    {id: 1, text: 'привет'},
    {id: 2, text: 'Ты тут?'},
    {id: 3, text: 'Возможно, что да'},
    {id: 4, text: 'А как?'},
    {id: 5, text: 'Ну вот)))'},
  ],
  dialogsData: [
    {id: 1, name: 'Иван'},
    {id: 2, name: 'Петро'},
    {id: 3, name: 'Андрей'},
    {id: 4, name: 'Юлия'},
    {id: 5, name: 'Капуста'},
  ],
  newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {
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