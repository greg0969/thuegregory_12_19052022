import UserProfil from "./pages/UserProfil";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./styles/index.scss";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<UserProfil />} /> 
          <Route path="/user/:id" element={<UserProfil />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
