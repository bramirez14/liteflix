import { Row, Col } from "antd";
import { Agregar } from "./Agregar";
import { Logo } from "./Logo";
import { Usuario } from "./Usuario";
import "./css/navbar.css";

export const Navbar = () => {
  return (
    <>
      <Row gutter={40} >
      <Col   xs={{ span:6,order: 1 }} sm={{ span:6,order: 1 }} md={{ span:4,order: 1}} lg={{ span:15,order: 2 }} lg={{ span:15,order: 2 }}>
          <Agregar />
        </Col>
        <Col  xs={{ span:12, order: 2}} sm={{span:12 , order: 2 }} md={{ span:16,order: 2}} lg={{span:4,order: 1 }} lg={{ span:4,order: 1 }}>
          <Logo />
        </Col>
        <Col   xs={{ span:6,order: 3 }} sm={{ span:6,order: 3 }} md={{ span:4,order: 3}} lg={{ span:4,order: 3 }} lg={{ span:4,order: 3, }} 
       
        >
          <Usuario />
        </Col>
      </Row>
    </>
  );
};
