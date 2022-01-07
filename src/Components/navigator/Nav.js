import NavItem from "./NavItem";
import { navData } from "./navData";

export default function Nav(){
  return (
    <ul>
      {
        navData.map(({name, path, className, number}) => 
          <NavItem
            name={name}
            path={path}
            className={className}
            number={number}
            key={`1${number}`}
          />
        )
      }
    </ul>
  )
}