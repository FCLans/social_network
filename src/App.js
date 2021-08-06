import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <div className="app_wrapper">
          <HeaderContainer />
          <Navbar/>
          <div className="app_wrapper_content">
            <Switch>
              <Route path="/messages" component={DialogsContainer}/>
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/news" component={News} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/profile/:userId?" component={ProfileContainer}/>

              <Redirect to="/profile" />
            </Switch>
          </div>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
