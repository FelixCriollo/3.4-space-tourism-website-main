import { Link } from "react-router-dom";

export default function NavItem ({name, path, number, onPath}){
  return (
    <li className={`nav__text  ${onPath}`}>
      <Link to={path}>
        <span>{number}</span>
        {name}
      </Link>
    </li>
  )
}