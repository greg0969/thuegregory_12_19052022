import UserProfil from "./pages/UserProfil";
import Home from "./pages/Home";
import Erreur from "./pages/Erreur";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles/index.scss";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/user/:id" element={<UserProfil />} /> 
          <Route path="*" element={<Erreur />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
