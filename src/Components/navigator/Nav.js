import NavListContainer from './NavListContainer';
import NavBtn from './NavBtn';
import './nav.css';

export default function Nav(){
  return (
    <nav className="nav">
      <NavListContainer />

      <NavBtn isOpen={false} cName={"nav__open"} />
    </nav>
  )
}