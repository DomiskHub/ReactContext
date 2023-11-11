import { GlobalContext } from "../context/GlobalContext";
import IconHeart from "./IconHeart";
import { useContext } from "react";

const Card = ({ photo }) => {
  const { toggleFav } = useContext(GlobalContext);

  return (
    <div className="card-container" onClick={() => toggleFav(photo)}>
      <IconHeart filled={photo.liked}></IconHeart>
      <img className="photo" src={photo.src.medium} alt="photos" />
    </div>
  );
};

export default Card;
