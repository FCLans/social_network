import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { addPost, editeNewPostText } from './redux/state'

export const rerenderTree = state => {
  ReactDOM.render(<App state={state} addPost={addPost} editeNewPostText={editeNewPostText} />, document.getElementById('root'))
}
