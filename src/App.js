import logo from './logo.svg';
import './App.css';
import NavigationPanel from './components/NavigationPanel';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import JobApp from './pages/jobapp/JobApplicationScreen'
import Settings from './pages/settings/Settings'


/**
 * Represents the entry point for the application.
 * @return {JSX.element}  a JSX element
 */
function App() {
  return (
    <div className="App">
        <Router>
        <NavigationPanel/>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/applications' element={<JobApp/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
