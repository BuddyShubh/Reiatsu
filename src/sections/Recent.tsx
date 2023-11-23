import "../style/sections/Recent.scss";
import Card from "../components/Card";
import { videoURL } from "../serverThings/Data";

function Recent() {
  let componentsArr = [];

  for (let i = 0; i < videoURL.length; i++) {
    componentsArr.push(<Card src={videoURL[i]} />);
  }

  return (
    <>
      <div className="recent-container">
        <div className="shadow"></div>
        <h1>Watching</h1>
        <div className="card-container">{componentsArr}</div>
      </div>
      <div className="recent-container">
        <div className="shadow"></div>
        <h1>New</h1>
        <div className="card-container">{componentsArr}</div>
      </div>
      <div className="recent-container">
        <div className="shadow"></div>
        <h1>Genere</h1>
        <div className="card-container">{componentsArr}</div>
      </div>
    </>
  );
}
export default Recent;
