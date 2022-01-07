import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './navigator/Nav';
import logo from '../assets/shared/logo.svg';
import Home from '../pages/home/Home'

export default function Header(){
  return (
    <header className='header'>
      <img src={logo} className='logo' alt='' />

      <span className='header__line'></span>

      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={Home}>
          </Route>
          <Route path="/crew">
          </Route>
        </Routes>
      </Router>

    </header>
  )
}