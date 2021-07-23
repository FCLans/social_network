import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import News from './components/News/News'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app_wrapper">
          <Header />
          <Navbar />
          <div className="app_wrapper_content">
            <Route component={Dialogs} path="/messages" />
            <Route component={Music} path="/music" />
            <Route component={Settings} path="/settings" />
            <Route component={News} path="/news" />
            <Route component={Profile} />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
