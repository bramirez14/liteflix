import { Row, Col, Button } from "antd";
import { Logo } from "../../navbar/Logo";
import { Usuario } from "../../navbar/Usuario";
import { useNavigate } from "react-router";

import "./agregadas.css";
export const Agregadas = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pelicula-agregada">
        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h3 className="congratulations">¡FELICITACIONES!</h3>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <p className="msg">Liteflix The Movie fue correctamente subida.</p>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Button className="back" onClick={() => navigate("/")}>
              IR A HOME
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
