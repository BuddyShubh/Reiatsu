import "../style/pages/Player.scss";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { videoURL } from "../serverThings/Data";

function Player() {
  const { id } = useParams();

  let componentsArr = [];

  for (let i = 0; i < videoURL.length; i++) {
    componentsArr.push(<Card src={videoURL[i]} />);
  }

  return (
    <div className="page-container">
      <div className="player-container">
        <div className="player">
        <iframe className="clip-thumbnail" src={"https://www.youtube.com/embed/"+id+"?autoplay=1"} title="YouTube video player" frameBorder="0" ></iframe>
        </div>
      </div>
      <div className="episode-list"></div>
      <div className="recent-container">
        <div className="shadow"></div>
        <h1>Suggestion</h1>
        <div className="card-container">{componentsArr}</div>
      </div>
    </div>
  );
}

export default Player;
