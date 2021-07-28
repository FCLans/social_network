const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Привет, мой первый пост!', likesCount: 120 },
        { id: 2, message: 'Разгоняемся и летим)))', likesCount: 20 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      messagesData: [
        { id: 1, text: 'привет' },
        { id: 2, text: 'Ты тут?' },
        { id: 3, text: 'Возможно, что да' },
        { id: 4, text: 'А как?' },
        { id: 5, text: 'Ну вот)))' },
      ],
      dialogsData: [
        { id: 1, name: 'Иван' },
        { id: 2, name: 'Петро' },
        { id: 3, name: 'Андрей' },
        { id: 4, name: 'Юлия' },
        { id: 5, name: 'Капуста' },
      ],
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
      case 'ADD_POST':

        let newPost = {
          id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
          message: this._state.profilePage.newPostText,
          likesCount: 0,
        }

        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

        break

      case 'EDITE_NEW_POST_TEXT':
        this._state.profilePage.newPostText = action.data
        this._callSubscriber()

        break

      default:
        break
    }
  }

}

export default store
