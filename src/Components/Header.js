import Nav from './navigator/Nav';
import logo from '../assets/shared/logo.svg';
import './header.css';

export default function Header(){
  return (
    <header className='header'>
      <img src={logo} className='logo' alt='' />

      <span className='header__line'></span>

      <Nav />            
    </header> 
  )
}