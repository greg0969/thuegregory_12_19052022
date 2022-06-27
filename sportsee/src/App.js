import UserProfil from "./pages/UserProfil";
import Home from "./pages/Home";
import Erreur from "./pages/Erreur";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import FetchProvider from "./utils/context/contextApi";


function App() {

  return (
    
    <BrowserRouter>
      <FetchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserProfil />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </FetchProvider>

    </BrowserRouter>
    
  );
}

export default App;
