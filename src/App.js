import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import './App.css'

const App = props => {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="app_wrapper">
          <Header/>
          <Navbar/>
          <div className="app_wrapper_content">
            <Switch>
              <Route path="/messages" render={() => <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.store.dispatch.bind(props.store)}/>}
              />
              <Route component={Music} path="/music"/>
              <Route component={Settings} path="/settings"/>
              <Route component={News} path="/news"/>
              <Route render={() => <Profile
                profilePage={props.state.profilePage}
                dispatch={props.store.dispatch.bind(props.store)}/>}
              />
            </Switch>
          </div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
