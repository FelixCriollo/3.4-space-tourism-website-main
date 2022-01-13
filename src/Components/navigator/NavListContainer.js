import { navData } from "./data/navData";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import NavBtn from "./NavBtn";

export default function NavListContainer() {
  const pathName = useLocation().pathname;
  const bodyApp = document.querySelector("body");

  bodyApp.classList.remove("body-home");
  bodyApp.classList.remove("body-crew");
  bodyApp.classList.remove("body-technology");
  bodyApp.classList.remove("body-destination");

  if (pathName === "/") {
    bodyApp.classList.add("body-home");
  } else if (pathName === "/crew") {
    bodyApp.classList.add("body-crew");
  } else if (pathName === "/technology") {
    bodyApp.classList.add("body-technology");
  } else if (pathName === "/destination") {
    bodyApp.classList.add("body-destination");
  }

  return (
    <div className="nav-list-container">
      <ul className="nav__list">
        {navData.map(({ name, path, number }) => (
          <NavItem
            name={name}
            path={path}
            onPath={pathName === path ? "nav__text--onPath" : ""}
            number={number}
            key={`1${number}`}
          />
        ))}
      </ul>

      <NavBtn isOpen={true} cName={"nav__close"} />
    </div>
  );
}
