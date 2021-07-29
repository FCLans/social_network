import store from './redux/store'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rerenderTree = () => {
    ReactDOM.render(<App state={store.state}
                         addPost={store.addPost.bind(store)}
                         editeNewPostText={store.editeNewPostText.bind(store)} />
        , document.getElementById('root'))
}

store.subscribe(rerenderTree)

rerenderTree()