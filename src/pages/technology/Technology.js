import RelevantInfo from "../../Components/RelevantInfo";
import SubTitle from "../../Components/SubTitle";
import { technologyData } from '../../services/pageDatas';
import { useEffect, useState } from "react"; 
import './technology.css';

const techImg = require.context('../../assets/technology', true);

export default function Technology() {
  const [tech, setTech] = useState([]);
  const [picture, setPicture] = useState("")

  const getData = async (pos) => {
    const res = await technologyData();
    const tech = await res[pos]
    setTech(tech);
    setPicture(tech.images)
  }

  useEffect(() => {
    getData(0);
  }, [])
  
  const techHandler = (e) => {
    const tech = document.querySelector(".tech-item--active");

    tech.classList.remove("tech-item--active");
    e.target.classList.add("tech-item--active");
  }

  const changeImg = () => {
    const isPortrait = window.screen.width;
    return isPortrait < 1024 ? (
      techImg(`./${picture.landscape === undefined ? (
          "image-launch-vehicle-landscape.jpg"
        ) : picture.landscape}`)
      ) : (
      techImg(`./${picture.portrait === undefined ? (
          "image-launch-vehicle-portrait.jpg" 
        ) : picture.portrait}`)
    )
  }

  return (
    <div className="container technology" id='technology'>
      <SubTitle text={"SPACE LOUNCH 101"} number={"03"}/>

      <div className="technology-info">
        <img className="technology-info__img" src={changeImg()} alt=""/>

        <section className="technology-info__data">
          <div className="change-tech">
            <span className="tech-item tech-item--active" onClick={(e)=>{getData(0); techHandler(e)}}>1</span>
            <span className="tech-item" onClick={(e)=>{getData(1); techHandler(e)}}>2</span>
            <span className="tech-item" onClick={(e)=>{getData(2); techHandler(e)}}>3</span>
          </div>

          <div className="technology-info__body">
            <p className="subHeading2">THE TERMINOLOGY…</p>

            <p className="tech-name">{tech.name}</p>

            <RelevantInfo text={tech.description}/>
          </div>
        </section>
      </div>
    </div>
  )
}