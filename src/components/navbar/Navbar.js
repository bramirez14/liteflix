import "./navbar.css";
import { Row, Col, Space } from "antd";
import { Original } from "../original/Original";
export const Navbar = () => {
  return (
    <>
      <div className="navbar" >
        <Row  gutter={30}>
          <Col xs={4} sm={4} md={4} lg={24} xl={24} >
            <div className="agrpelicula">
              <span className="lineh" />
              <span className="linev" />
            </div>
          </Col>

          <Col xs={16} sm={16} md={16} lg={24} xl={24}  >
            <div className="original">
              <span className="oriLiteflixbold">LITE </span>{" "}
              <span className="oriLiteflix">FLIX</span>
            </div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={24} xl={24}>
          
                     <div className="perfil"> </div>

          
          </Col>
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
