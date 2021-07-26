const state = {
  profilePage: {
    postsData: [
      {id: 1, message: 'Привет, мой первый пост!', likesCount: 120},
      {id: 2, message: 'Разгоняемся и летим)))', likesCount: 20},
    ],
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
    ]
  },
  sidebar: []
}

export default state