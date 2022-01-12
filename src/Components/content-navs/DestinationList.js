import DestinationItem from './DestinationItem'
import './destinations-list.css'

export default function DestinationList() {
  const destinations = ["MOON", "MARS", "EUROPA", "TITAN"]
  return (
    <ul className='desti-list'>
      {
        destinations.map(text => <DestinationItem 
          text={text}
          cName={"desti-item--active"} 
          key={`1232${text}`}
        />)
      }
    </ul>
  )
}