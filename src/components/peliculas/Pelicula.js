import { Row, Col, Card, Image } from "antd";
import "./peliculas.css";
export const Pelicula = ({pelicula}) => {
  return (
    <div className="container-pelicula">
      <img className="pelicula" src={pelicula} />
    </div>
  );
};
