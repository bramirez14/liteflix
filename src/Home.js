import "./home.css";
import { Navbar } from "./components/navbar/Navbar";
import "antd/dist/antd.css";
import { Original } from "./components/original/Original";
import { Title } from "./components/tittle/Title";
import { Row, Col, Button, Card } from "antd";
import {
  CaretRightOutlined,
  PlusOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Pelicula } from "./components/peliculas/Pelicula";
import pelicula1 from "./components/peliculas/pelicula1.png";
import pelicula2 from "./components/peliculas/pelicula2.png";
import pelicula3 from "./components/peliculas/pelicula3.png";
import pelicula4 from "./components/peliculas/pelicula4.png";

export const Home = () => {
  // titulo casa de papel mejora el alto
  // subtitulos achicarlos
  return (
      <div className="container">
        <Navbar />

        <Original name1="ORIGNILA DE" name2= "LITEFLIX" top={214} />

        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Title />
          </Col>
        </Row>

        <div className="look" />

        <Row gutter={[10, 15]} justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Button className="play" type="text">
              <CaretRightOutlined /> REPRODUCIR
            </Button>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Button className='list'>
              <PlusOutlined /> MI LISTA
            </Button>
          </Col>
        </Row>

        <Original
          name1="VER:" name2="POPULARES"
          top={57}
          icon={<DownOutlined style={{ fontSize: 17 }} />}
        />

        {/* /**Peliculas */}
        <Row gutter={[10,25]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Pelicula pelicula={pelicula1} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Pelicula pelicula={pelicula2} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Pelicula pelicula={pelicula3} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Pelicula pelicula={pelicula4} />
          </Col>
        </Row>
      </div>
  );
};
