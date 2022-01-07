import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './Components/navigator/Nav';
import logo from './assets/shared/logo.svg';
import Home from './pages/home/Home';
import Crew from './pages/crew/Crew';
import Destintation from './pages/destination/Destination';
import Technology from './pages/technology/Technology';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src={logo} className='logo' alt='' />

        <span className='header__line'></span>

        <Router>
          <Nav />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/destination" element={<Destintation />} />
            <Route path="/technology" element={<Technology/>} />
          </Routes>
        </Router>
      </header> 
    </div>
  );
}

export default App;
