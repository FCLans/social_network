import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="app_wrapper">
          <Header/>
          <Navbar/>
          <div className="app_wrapper_content">
            <Switch>
              <Route path="/messages" component={DialogsContainer}/>
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/news" component={News} />
              <Route path="/users" component={UsersContainer} />
              <Route component={Profile}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
