const store = {
  state: {
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
  rerenderTree() {
    console.log('state changed')
  },
  addPost() {
    const newPost = {
      id: this.state.profilePage.postsData[this.state.profilePage.postsData.length - 1].id + 1,
      message: this.state.profilePage.newPostText,
      likesCount: 0,
    }

    this.state.profilePage.postsData.push(newPost)
    this.editeNewPostText('')
    this.rerenderTree()
  },
  editeNewPostText(text) {
    this.state.profilePage.newPostText = text
    this.rerenderTree()
  },
  subscribe(observer) {
    this.rerenderTree = observer
  },
}

export default store
