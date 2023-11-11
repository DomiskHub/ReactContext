import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};
export default App;
