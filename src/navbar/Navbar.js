import "./navbar.css";
import { Row, Col, Card } from "antd";
export const Navbar = () => {
  return (
    <>
      <Row className='navbar'>
         
        <Col xs={6} sm={6} md={6} lg={24} xl={24} >
            <div className="agrpelicula">
                    <span className='lineh'/>
                    <span className='linev'/>
                    </div>

         
        </Col>

        <Col xs={15} sm={15} md={12} lg={24} xl={24}>
            <div className='original'>

          <span className="oriLiteflixbold">LITE  </span> <span className='oriLiteflix'>FLIX</span>
            </div>
        </Col>

        <Col xs={3} sm={3} md={3} lg={24} xl={24}>
          <div className="perfil"> </div>
        </Col>
      </Row>

      {/* <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div>ffff ffff</div>
        </Col>
      </Row>

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
