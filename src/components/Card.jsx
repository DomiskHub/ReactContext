import { GlobalContext } from "../context/GlobalContext";
import IconHeart from "./IconHeart";
import { useContext } from "react";

const Card = ({ photo }) => {
  const { toggleFav } = useContext(GlobalContext);

  return (
    <div className="card-container" onClick={() => toggleFav(photo)}>
      <img className="photo" src={photo.src.medium} alt={photo.alt} />
      <IconHeart filled={photo.liked}></IconHeart>
      <p>{photo.alt}</p>
    </div>
  );
};

export default Card;
