import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let dialogsData = [
  { id: 1, name: 'Иван' },
  { id: 2, name: 'Петро' },
  { id: 3, name: 'Андрей' },
  { id: 4, name: 'Юлия' },
  { id: 5, name: 'Капуста' },
]

let messagesData = [
  { id: 1, text: 'привет' },
  { id: 2, text: 'Ты тут?' },
  { id: 3, text: 'Возможно, что да' },
  { id: 4, text: 'А как?' },
  { id: 5, text: 'Ну вот)))' },
]

let postsData = [
  { id: 1, message: 'Привет, мой первый пост!', likesCount: 120 },
  { id: 2, message: 'Разгоняемся и летим)))', likesCount: 20 },
]

ReactDOM.render(<App messagesData={messagesData} dialogsData={dialogsData} postsData={postsData} />, document.getElementById('root'))
