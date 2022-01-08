import burger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

export default function NavBtn({isOpen, cName}) {
  const showNav = () => {
    const nav = document.querySelector('.nav-list-container');
    nav.classList.toggle('nav-list-container--show')
  }

  return (
    <button className={cName} onClick={showNav}>
      <img src={isOpen ? close : burger} alt=''/>
    </button>
  )
}