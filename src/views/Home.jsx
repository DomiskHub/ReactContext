import Gallery from "../components/Gallery";
import { GlobalContext } from "../context/GlobalContext";
import { useState, useEffect, useContext } from "react";

const Home = () => {
  const [error, setError] = useState(false);

  const { setPhotos } = useContext(GlobalContext);

  const getData = async () => {
    try {
      const res = await fetch("/photos.json");
      const json = await res.json();
      setPhotos(json.photos);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      {error && <h3 className="error">Ha ocurrido un error. Intente de nuevo más tarde</h3>}
      <Gallery />
    </div>
  );
};

export default Home;
