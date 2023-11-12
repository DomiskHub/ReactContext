import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import GlobalProvider from "./context/GlobalContext";
import Notfound from "./views/NotFound";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};
export default App;
