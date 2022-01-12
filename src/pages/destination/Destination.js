import { useEffect, useState } from "react"; 
import { destinationsData } from '../../services/pageDatas';
import RelevantInfo from '../../Components/RelevantInfo';
import SubTitle from '../../Components/SubTitle';
import MoreInfo from '../../Components/MoreInfo';
import './destinations-list.css';
import './destintation.css';

const planetImg = require.context('../../assets/destination', true);

export default function Destination() {
  const [desti, setDesti] = useState([]);
  const [picture, setPicture] = useState("")

  const getData = async (pos) => {
    const res = await destinationsData();
    const destiny = await res[pos]
    setDesti(destiny);
    setPicture(destiny.images)
  }

  useEffect(() => {
    getData(0);
  }, [])

  const destiHandler = (e) => {
    const desti = document.querySelectorAll(".desti-item--active");

    desti.forEach(el => el.classList.remove("desti-item--active"));
    e.target.classList.add("desti-item--active");
  }

  return (
    <div className="container destination" id='destination'>
      <div className="destination-first">
        <SubTitle text={"PICK YOUR DESTINATION"} number={"01"}/>

        <img className='destination__img' 
          src={
            planetImg(`./${picture.png === undefined ? "image-moon.png" : picture.png}`)
          } alt={desti.name}/>
      </div>

      <article className="destination-second">
        <ul className='desti-list'>
          <li className="desti-item desti-item--active" onClick={(e) => {getData(0); destiHandler(e)}}>MOON</li>
          <li className="desti-item" onClick={(e) => {getData(1); destiHandler(e)}}>MARS</li>
          <li className="desti-item" onClick={(e) => {getData(2); destiHandler(e)}}>EUROPA</li>
          <li className="desti-item" onClick={(e) => {getData(3); destiHandler(e)}}>TITAN</li>
        </ul>
 
        <h2 className='destination__title'>{desti.name}</h2>

        <RelevantInfo text={desti.description} />

        <MoreInfo distance={desti.distance} time={desti.travel}/>
      </article>
    </div>
  )
}