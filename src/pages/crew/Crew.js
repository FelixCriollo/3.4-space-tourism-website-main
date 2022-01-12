import SubTitle from "../../Components/SubTitle";
import RelevantInfo from '../../Components/RelevantInfo';
import { crewData } from '../../services/pageDatas';
import { useEffect, useState } from "react"; 
import './crew.css';

export default function Crew() {
  const [crewM, setCrewM] = useState([])
  const [photo, setPhoto] = useState("")

  const getData = async (pos) => {
    const res = await crewData();
    const crewMember = await res[pos]
    setCrewM(crewMember);
    setPhoto(crewMember.images)
  }

  const contrlHandler = (e) => {
    const contrl = document.querySelectorAll(".control--on");

    contrl.forEach(el => el.classList.remove("control--on"));
    e.target.classList.add("control--on");
  }

  useEffect(() => {
    getData(0);
  }, [])

  return (
    <div className="container crew" id='crew'>
      <SubTitle text={"MEET YOU CREW"} number={"02"}/>

      <div className="crew-info">
        <section className="crew-info__data">
          <h4 className="crew-info__role">{crewM.role}</h4>

          <h3 className="crew-info__name">{crewM.name}</h3>

          <RelevantInfo 
            text={crewM.bio}
          />

          <div className="crew-controls">
            <span className="control control--on" onClick={(e) => {getData(0); contrlHandler(e)}} />
            <span className="control" onClick={(e) => {getData(1); contrlHandler(e)}} />
            <span className="control" onClick={(e) => {getData(2); contrlHandler(e)}} />
            <span className="control" onClick={(e) => {getData(3); contrlHandler(e)}} />
          </div>
        </section>

        <img className="crew-photo" src={require("../../assets/crew/image-mark-shuttleworth.png")} alt=""/>
      </div>
    </div>
  )
}