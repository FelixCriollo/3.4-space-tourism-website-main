import { navData } from "./data/navData";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import NavBtn from "./NavBtn";

export default function NavListContainer() {
  const pathName = useLocation().pathname;
  // console.log(pathName)
  
  // const changeBg = () => {
  //   const app = document.querySelector("body");
  //   const pathN = pathName.slice(1)
    
  //   console.log(typeof app);
  //   console.log(app);
  // };
  
  // changeBg();

  return (
    <div className="nav-list-container">
      <ul className="nav__list">
          {
            navData.map(({name, path, number}) => 
            <NavItem
              name={name}
              path={path}
              onPath={pathName === path ? 'nav__text--onPath' : ''}
              number={number}
              key={`1${number}`}
            />
            ) 
          }
        </ul>

      <NavBtn isOpen={true} cName={"nav__close"} />
    </div>
  )
}