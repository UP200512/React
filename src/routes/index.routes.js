import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/Home/HomePage.jsx";
import  Carta  from "../views/Carta/Carta.jsx";




function Autho() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage/>}></Route>
        <Route path="/Carta" element={<Carta/>}></Route>
        <Route
          path="/*"
          element={
            <div> Pagina no encontrada</div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Autho;