import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Demo } from "../components/demo/Demo";
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
          <Route path="/demo" element={<Progress/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
};
