import store from './redux/store'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const rerenderTree = state => {
  ReactDOM.render(<App state={state}
                       dispatch={store.dispatch.bind(store)}
  />, document.getElementById('root'))
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)
