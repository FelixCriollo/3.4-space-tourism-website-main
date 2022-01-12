import RelevantInfo from '../../Components/RelevantInfo';
import SubTitle from '../../Components/SubTitle';
import MoreInfo from '../../Components/MoreInfo';
import DestinationList from '../../Components/content-navs/DestinationList';
import './destintation.css';

export default function Destination() {
  return (
    <div className="container destination" id='destination'>
      <div className="destination-first">
        <SubTitle text={"PICK YOUR DESTINATION"} number={"01"}/>

        <img className='destination__img' 
          src={require("../../assets/destination/image-moon.png")} alt=""/>
      </div>

      <article className="destination-second">
        <DestinationList />

        <h2 className='destination__title'>EUROPA</h2>

        <RelevantInfo 
          text={"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}
        />

        {/* A div with mora data */}
        <MoreInfo distance={"384,400 kM"} time={"3 DAYS"}/>
      </article>
    </div>
  )
}