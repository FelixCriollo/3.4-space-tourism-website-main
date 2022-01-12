import SubTitle from "../../Components/SubTitle";
import RelevantInfo from '../../Components/RelevantInfo';
import {crewData} from '../../services/pageDatas'
import './crew.css';
import { useEffect, useState } from "react";

export default function Crew() {
  const [crewM, setCrewM] = useState([])
  const [photo, setPhoto] = useState("")

  const getData = async (pos) => {
    const res = await crewData();
    const crewMember = await res[pos]
    setCrewM(crewMember);
    setPhoto(crewMember.images)
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
            <span className="control" onClick={() => getData(0)}></span>
            <span className="control" onClick={() => getData(1)}></span>
            <span className="control" onClick={() => getData(2)}></span>
            <span className="control" onClick={() => getData(3)}></span>
          </div>
        </section>

        <img className="crew-photo" src={require("../../assets/crew/image-mark-shuttleworth.png")} alt=""/>
      </div>
    </div>
  )
}