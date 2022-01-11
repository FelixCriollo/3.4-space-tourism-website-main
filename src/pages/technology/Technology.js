import RelevantInfo from "../../Components/RelevantInfo";
import SubTitle from "../../Components/SubTitle";
import './technology.css';

export default function Technology() {
  console.log(window.screen.width);
  const changeImg = () => {
    const isPortrait = window.screen.width;
    return isPortrait < 1024 ? (
      require("../../assets/technology/image-space-capsule-landscape.jpg")
      ) : (
        require("../../assets/technology/image-space-capsule-portrait.jpg")
    )
  }

  return (
    <div className="container technology" id='technology'>
      <SubTitle text={"SPACE LOUNCH 101"} number={"03"}/>

      <div className="technology-info">
        <img className="technology-info__img" src={changeImg()} alt=""/>

        <section className="technology-info__data">
          <div className="change-tech">
            <span className="tech-item"></span>
            <span className="tech-item"></span>
            <span className="tech-item"></span>
          </div>

          <div className="technology-info__body">
            <p className="subHeading2">THE TERMINOLOGY…</p>

            <p className="tech-name">LAUNCH VEHICLE</p>

            <RelevantInfo text={"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch"}/>
          </div>
        </section>
      </div>
    </div>
  )
}