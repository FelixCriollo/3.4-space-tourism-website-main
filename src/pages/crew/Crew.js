import SubTitle from "../../Components/SubTitle";
import RelevantInfo from '../../Components/RelevantInfo';
import './crew.css';

export default function Crew() {
  return (
    <div className="container crew" id='crew'>
      <SubTitle text={"MEET YOU CREW"} number={"02"}/>

      <div className="crew-info">
        <section className="crew-info__data">
          <h4 className="crew-info__role">PILOT</h4>

          <h3 className="crew-info__name">Victor Glover</h3>

          <RelevantInfo 
            text={"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "}
          />

          <div className="crew-controls">
            <span className="control"></span>
            <span className="control"></span>
            <span className="control"></span>
            <span className="control"></span>
          </div>
        </section>

        <img className="crew-photo" src={require("../../assets/crew/image-victor-glover.png")} alt=""/>
      </div>
    </div>
  )
}