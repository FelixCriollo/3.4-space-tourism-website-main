import { Link } from "react-router-dom";

export default function NavItem ({name, path, classNm, number}){
  return (
    <li className={classNm}>
      <Link to={path}>
        <span>{number}</span>
        {name}
      </Link>
    </li>
  )
}