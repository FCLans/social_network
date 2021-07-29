const ADD_POST = 'ADD_POST'
const EDITE_NEW_POST_TEXT = 'EDITE_NEW_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const EDITE_NEW_MESSAGE_TEXT = 'EDITE_NEW_MESSAGE_TEXT'

const store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'Привет, мой первый пост!', likesCount: 120},
        {id: 2, message: 'Разгоняемся и летим)))', likesCount: 20},
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: [],
  },
  _callSubscriber() {
    console.log('no subscribers (observers)')
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },

  dispatch(action) { //{type: 'type_action', data: ...}
    switch (action.type) {
      case ADD_POST:

        const newPost = {
          id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        }

        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

        break

      case EDITE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.data
        this._callSubscriber()

        break

      case SEND_MESSAGE:
        let indexLastElement = this._state.dialogsPage.messagesData.length - 1
        let newIdElement = this._state.dialogsPage.messagesData[indexLastElement].id + 1
        let textMessage = this._state.dialogsPage.newMessageText

        let newMessage = {
          id: newIdElement,
          text: textMessage
        }

        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''

        this._callSubscriber()
        break

      case EDITE_NEW_MESSAGE_TEXT:
        this._state.dialogsPage.newMessageText = action.data
        this._callSubscriber()
        break

      default:
        break
    }
  }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const editeNewPostTextActionCreator = (text) => ({type: EDITE_NEW_POST_TEXT, data: text})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const editeNewMessageTextActionCreator = (text) => ({type: EDITE_NEW_MESSAGE_TEXT, data: text})


export default store
