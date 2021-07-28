import store from './redux/store'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rerenderTree = () => {
  const state = store.getState()
  ReactDOM.render(<App state={state} store={store} />, document.getElementById('root'))
}

rerenderTree()
store.subscribe(rerenderTree)
