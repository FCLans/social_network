const SEND_MESSAGE = 'SEND_MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: Date.now(),
        text: action.newMessageText
      }

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      }

    default:
      return state
  }
}

export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText: newMessageText})

export default dialogsReducer;