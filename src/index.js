import store from './redux/reduxStore'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import StoreContext from "./redux/storeContext";

const rerenderTree = () => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
    , document.getElementById('root'))
}

rerenderTree()

store.subscribe(() => {
  rerenderTree()
})