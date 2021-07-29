import store from './redux/reduxStore'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const rerenderTree = (state) => {
  ReactDOM.render(<App state={state} store={store}/>, document.getElementById('root'))
}

rerenderTree(store.getState())

store.subscribe(() => {
  const state = store.getState()
  rerenderTree(state)
})