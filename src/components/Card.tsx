import "../style/components/Card.scss";
import { useNavigate } from "react-router-dom";

function Card(props: any) {
  const { src } = props;
  const navigate = useNavigate();
  return (
    <div className="card-outline">
      <div className="card" onClick={() => navigate("/player/"+src)}>
      <iframe className="clip-thumbnail" src={"https://www.youtube.com/embed/"+src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Card;
