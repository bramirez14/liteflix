import "./home.css";
import { Navbar } from "./components/navbar/Navbar";
import "antd/dist/antd.css";
import { Original } from "./components/original/Original";
import { Titles } from "./components/tittle/Titles";
import { Row, Col, Button, Card } from "antd";
import { CaretRightOutlined, PlusOutlined, DownOutlined } from "@ant-design/icons";
import { Peliculas } from "./components/peliculas/Peliculas";
export const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
       
        <Original name='ORIGNILA DE LITEFLIX' top={260}/>
        <Titles />
        <Row gutter={[10, 15]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} >
            <Button className="reproducir">
              {" "}
              <CaretRightOutlined /> REPRODUCIR{" "}
            </Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} >
            <Button>
              {" "}
              <PlusOutlined /> MI LISTA{" "}
            </Button>
          </Col>
        </Row>
        <Original name={`VER: POPULARES `} top={30} icon={<DownOutlined style={{fontSize:17}}/>}/>
        {/* /**Peliculas */}
       <Peliculas/>
      </div>
    </>
  );
};
