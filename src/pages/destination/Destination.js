// import { useEffect, useState } from 'react';
// import { destinationsData } from '../../services/pageDatas';
import SubTitle from '../../Components/SubTitle';

export default function Destination() {
  // const [data, setData] = useState([]);

  // useEffect(function () {
  //   destinationsData()
  //     .then(destiny => setData(destiny[0]));
  // }, [])    

  // console.log(data.images.png);
  // const {name, image, description, distance, travel } = data;

  return (
    <div className="container destination">
      <div className="top">
        <SubTitle text={"PICK YOUR DESTINATION"} number={"01"}/>

        <img src={require("../../assets/destination/image-moon.png")} alt=""/>
      </div>

      <div className="bottom">
      </div>
    </div>
  )
}