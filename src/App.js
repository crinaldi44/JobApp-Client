import logo from './logo.svg';
import './App.css';
import NavigationPanel from './components/NavigationPanel';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/home/Home';
import JobApp from './pages/jobapp/JobApplicationScreen'
import Settings from './pages/settings/Settings'


/**
 * Represents the entry point for the application.
 * @return {JSX.element}  a JSX element
 */
function App() {

  /**
   * Represents whether the nav panel is visible or not.
   */
  const [navVisible, setNavVisible] = useState(true);

  /**
   * Toggles the navigation bar.
   */
  const toggleNav = () => {
      setNavVisible(!navVisible);
  }

  return (
    <div className="App">
        <Router>
        <NavigationPanel showNav={navVisible}/>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home navToggle={toggleNav}/>}/>
            <Route path='/applications' element={<JobApp navToggle={toggleNav}/>}/>
            <Route path='/settings' element={<Settings navToggle={toggleNav}/>}/>
          </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
