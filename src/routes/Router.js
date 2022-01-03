import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AgregarPeli } from "../components/peliculas/agregar/AgregarPeli";
import { Progress } from "../components/progress/Progress";
import { Home } from "../Home";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar/pelicula" element={<AgregarPeli/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
};
