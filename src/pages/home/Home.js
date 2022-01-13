import { Link } from "react-router-dom";
import SubTitle from "../../Components/SubTitle";
import RelevantInfo from "../../Components/RelevantInfo";
import "./home.css";

export default function Home() {
  return (
    <div className="container home">
      <div className="left">
        <SubTitle text="SO, YOU WANT TO TRAVEL TO" number="" />

        <h1 className="title">SPACE</h1>

        <RelevantInfo text="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!" />
      </div>

      <button>
        <Link className="explore" to={"/destination"}>
          EXPLORE
        </Link>
      </button>
    </div>
  );
}
