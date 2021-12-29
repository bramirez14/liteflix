import "./navbar.css";
import { Row, Col } from "antd";
import { Agregar } from "./Agregar";
import { Logo } from "./Logo";
import { Usuario } from "./Usuario";
export const Navbar = () => {
  return (
    <>
      <Row gutter={30}>
        <Col xs={4} sm={4} md={4} lg={24} xl={24}>
          <Agregar />
        </Col>
        <Col xs={16} sm={16} md={16} lg={24} xl={24}>
          <Logo />
        </Col>
        <Col xs={4} sm={4} md={4} lg={24} xl={24}>
          <Usuario />
        </Col>
      </Row>
    </>
  );
};
