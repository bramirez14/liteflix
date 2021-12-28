import "./navbar.css";
import { Row} from "antd";
import { Agregar } from "./Agregar";
import { Logo } from "./Logo";
import { Usuario } from "./Usuario";
export const Navbar = () => {
  return (
    <>
      <div className="navbar" >
        <Row  gutter={30}>
        <Agregar/>
        <Logo/>
         <Usuario/>
        </Row>
      </div>

      {/*

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>titulo</div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>rep</div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>lista</div>
        </Col>
      </Row> */}
    </>
  );
};
